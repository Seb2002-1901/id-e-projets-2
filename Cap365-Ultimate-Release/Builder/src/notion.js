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

// ---- Sous-pages & blocs (pour le tableau de bord / post-installation) ----

function plainTitle(richArray) {
  return (richArray || []).map((t) => (t.plain_text != null ? t.plain_text : (t.text && t.text.content) || '')).join('');
}

// Liste les sous-pages d'une page : [{ id, title }].
async function listChildPages(client, parentPageId) {
  const pages = [];
  let cursor;
  do {
    const res = await call(() => client.blocks.children.list({ block_id: parentPageId, start_cursor: cursor, page_size: 100 }), 'list children');
    for (const b of res.results) {
      if (b.type === 'child_page') pages.push({ id: b.id, title: (b.child_page && b.child_page.title) || '' });
    }
    cursor = res.has_more ? res.next_cursor : undefined;
  } while (cursor);
  return pages;
}

async function findChildPageByTitle(client, parentPageId, title) {
  const pages = await listChildPages(client, parentPageId);
  const hit = pages.find((p) => p.title === title);
  return hit ? hit.id : null;
}

// Crée une sous-page vide (titre + icône emoji optionnelle). Retourne la page.
async function createSubpage(client, parentPageId, title, emoji) {
  const props = { title: { title: [{ type: 'text', text: { content: title } }] } };
  const args = { parent: { type: 'page_id', page_id: parentPageId }, properties: props };
  if (emoji) args.icon = { type: 'emoji', emoji };
  return call(() => client.pages.create(args), `create page ${title}`);
}

// Récupère l'URL publique d'une page/base (best effort).
async function getUrl(client, id, kind) {
  try {
    const obj = kind === 'database'
      ? await call(() => client.databases.retrieve({ database_id: id }), 'retrieve db url')
      : await call(() => client.pages.retrieve({ page_id: id }), 'retrieve page url');
    return obj.url || null;
  } catch { return null; }
}

// Supprime (archive) tous les blocs enfants d'une page. Retourne le nombre supprimé.
// Idempotent : garantit une reconstruction sans doublon.
async function clearPageChildren(client, pageId) {
  let deleted = 0;
  // On liste puis supprime par lots jusqu'à ce que la page soit vide.
  // (la suppression décale la pagination : on relit à chaque tour)
  for (let guard = 0; guard < 50; guard++) {
    const ids = [];
    let cursor;
    do {
      const res = await call(() => client.blocks.children.list({ block_id: pageId, start_cursor: cursor, page_size: 100 }), 'list to clear');
      for (const b of res.results) ids.push(b.id);
      cursor = res.has_more ? res.next_cursor : undefined;
    } while (cursor);
    if (!ids.length) break;
    for (const id of ids) {
      await call(() => client.blocks.delete({ block_id: id }), 'delete block');
      deleted++;
    }
  }
  return deleted;
}

// Ajoute des blocs enfants par lots (limite Notion : 100 blocs par appel).
async function appendChildren(client, pageId, blocks, batchSize = 50) {
  for (let i = 0; i < blocks.length; i += batchSize) {
    const batch = blocks.slice(i, i + batchSize);
    await call(() => client.blocks.children.append({ block_id: pageId, children: batch }), 'append blocks');
  }
}

module.exports = {
  makeClient, call, rt, sleep, listChildDatabases, retrieveDatabase,
  createDatabase, ensureProperties, findPageByKey, upsertRow, countRows,
  plainTitle, listChildPages, findChildPageByTitle, createSubpage, getUrl,
  clearPageChildren, appendChildren,
};
