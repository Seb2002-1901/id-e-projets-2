'use strict';
const { Client, APIErrorCode } = require('@notionhq/client');

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const THROTTLE_MS = 350; // ~3 req/s max (limite Notion)

function makeClient(token) {
  return new Client({ auth: token, notionVersion: '2022-06-28' });
}

// Exécute un appel API avec throttle + retries (429 / erreurs réseau / 5xx).
async function call(fn, label = 'appel') {
  let lastErr;
  for (let attempt = 1; attempt <= 5; attempt++) {
    try {
      const res = await fn();
      await sleep(THROTTLE_MS);
      return res;
    } catch (e) {
      lastErr = e;
      const code = e && (e.code || e.status);
      const retriable = code === 'rate_limited' || code === 429 || code === 'internal_server_error' ||
        (typeof code === 'number' && code >= 500) || e.name === 'RequestTimeoutError' || e.code === 'ECONNRESET';
      if (!retriable || attempt === 5) break;
      const wait = 1000 * attempt * attempt;
      console.log(`   ⏳ ${label} : nouvelle tentative dans ${wait / 1000}s (${code || e.message})`);
      await sleep(wait);
    }
  }
  throw lastErr;
}

// rich_text : découpe en morceaux de ≤ 2000 caractères (limite Notion). Vide -> [].
function rt(text) {
  const s = (text == null ? '' : String(text)).trim();
  if (!s) return [];
  const chunks = [];
  for (let i = 0; i < s.length; i += 1990) chunks.push({ type: 'text', text: { content: s.slice(i, i + 1990) } });
  return chunks;
}

// Liste les bases enfants d'une page : { titre -> id }.
async function listChildDatabases(client, parentPageId) {
  const map = {};
  let cursor;
  do {
    const res = await call(() => client.blocks.children.list({ block_id: parentPageId, start_cursor: cursor, page_size: 100 }), 'list children');
    for (const b of res.results) {
      if (b.type === 'child_database') {
        const t = (b.child_database && b.child_database.title) || '';
        if (t) map[t] = b.id;
      }
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return map;
}

async function retrieveDatabase(client, id) {
  try { return await call(() => client.databases.retrieve({ database_id: id }), 'retrieve db'); }
  catch (e) { if (e.code === APIErrorCode.ObjectNotFound) return null; throw e; }
}

async function createDatabase(client, parentPageId, title, properties) {
  return call(() => client.databases.create({
    parent: { type: 'page_id', page_id: parentPageId },
    title: [{ type: 'text', text: { content: title } }],
    properties,
  }), `create db ${title}`);
}

// Ajoute uniquement les propriétés absentes (idempotent). Retourne la liste des noms ajoutés.
async function ensureProperties(client, dbId, properties) {
  const db = await call(() => client.databases.retrieve({ database_id: dbId }), 'retrieve db');
  const existing = new Set(Object.keys(db.properties));
  const toAdd = {};
  for (const [name, cfg] of Object.entries(properties)) if (!existing.has(name)) toAdd[name] = cfg;
  const added = Object.keys(toAdd);
  if (added.length) await call(() => client.databases.update({ database_id: dbId, properties: toAdd }), 'add props');
  return added;
}

function keyFilter(keyProp, keyType, value) {
  if (keyType === 'number') return { property: keyProp, number: { equals: Number(value) } };
  if (keyType === 'title') return { property: keyProp, title: { equals: String(value) } };
  return { property: keyProp, rich_text: { equals: String(value) } };
}

async function findPageByKey(client, dbId, keyProp, keyType, value) {
  const res = await call(() => client.databases.query({ database_id: dbId, filter: keyFilter(keyProp, keyType, value), page_size: 1 }), 'query key');
  return res.results[0] ? res.results[0].id : null;
}

// Upsert : crée la page si absente (clé), sinon met à jour. Retourne {id, action}.
async function upsertRow(client, dbId, keyProp, keyType, keyValue, properties) {
  const existingId = await findPageByKey(client, dbId, keyProp, keyType, keyValue);
  if (existingId) {
    await call(() => client.pages.update({ page_id: existingId, properties }), 'update page');
    return { id: existingId, action: 'maj' };
  }
  const page = await call(() => client.pages.create({ parent: { database_id: dbId }, properties }), 'create page');
  return { id: page.id, action: 'créé' };
}

async function countRows(client, dbId) {
  let n = 0, cursor;
  do {
    const res = await call(() => client.databases.query({ database_id: dbId, page_size: 100, start_cursor: cursor }), 'count');
    n += res.results.length;
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return n;
}

module.exports = {
  makeClient, call, rt, sleep, listChildDatabases, retrieveDatabase,
  createDatabase, ensureProperties, findPageByKey, upsertRow, countRows,
};
