'use strict';
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
require('dotenv').config({ path: path.join(ROOT, '.env') });

const N = require('./notion');
const S = require('./schema');
const { loadCsv } = require('./csv');

const STATE_FILE = path.join(ROOT, '.cap365-notion-state.json');
const CSV_DIR = process.env.CAP365_CSV_DIR
  ? path.resolve(ROOT, process.env.CAP365_CSV_DIR)
  : path.join(ROOT, 'csv');

const report = { created: [], reused: [], imported: {}, formulas: { ok: [], failed: [] }, rollups: { ok: [], failed: [] }, manual: [], errors: [] };
function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { dbs: {}, profilPageId: null }; } }
function saveState(st) { fs.writeFileSync(STATE_FILE, JSON.stringify(st, null, 2)); }

async function ensureDatabase(client, parentId, key, title, properties, state, childCache) {
  // 1) via state
  if (state.dbs[key]) {
    const db = await N.retrieveDatabase(client, state.dbs[key]);
    if (db) { report.reused.push(title); const added = await N.ensureProperties(client, state.dbs[key], properties); return { id: state.dbs[key], added }; }
  }
  // 2) via bases enfants existantes (même titre)
  if (childCache[title]) {
    state.dbs[key] = childCache[title]; saveState(state); report.reused.push(title);
    const added = await N.ensureProperties(client, childCache[title], properties);
    return { id: childCache[title], added };
  }
  // 3) création
  const db = await N.createDatabase(client, parentId, title, properties);
  state.dbs[key] = db.id; saveState(state); report.created.push(title);
  return { id: db.id, added: Object.keys(properties) };
}

async function importRows(client, def, dbId, extraProps) {
  const rows = loadCsv(CSV_DIR, def.file);
  let cree = 0, maj = 0;
  for (const row of rows) {
    const props = S.rowProperties(def, row);
    if (extraProps) Object.assign(props, extraProps);
    const keyVal = row[def.keyProp];
    const res = await N.upsertRow(client, dbId, def.keyProp, def.keyType, keyVal, props);
    if (res.action === 'créé') cree++; else maj++;
  }
  report.imported[def.title] = { total: rows.length, cree, maj };
  return rows.length;
}

async function main() {
  console.log('\n=== Cap365 · Montage du template Notion ===\n');
  const token = process.env.NOTION_TOKEN;
  const parentId = process.env.NOTION_PARENT_PAGE_ID;
  if (!token || !parentId) {
    console.error('❌  NOTION_TOKEN et NOTION_PARENT_PAGE_ID sont requis (voir .env.example).');
    process.exit(1);
  }
  const client = N.makeClient(token);

  // Vérifier l'accès à la page parente
  try { await N.call(() => client.pages.retrieve({ page_id: parentId }), 'retrieve parent'); }
  catch (e) {
    console.error('❌  Impossible d\'accéder à la page parente. Vérifie que :');
    console.error('    • le NOTION_TOKEN est correct ;');
    console.error('    • la page a bien été PARTAGÉE avec ton intégration (menu ••• → Connections) ;');
    console.error('    • le NOTION_PARENT_PAGE_ID est le bon (32 caractères).');
    console.error('    Détail :', e.code || e.message);
    process.exit(1);
  }
  console.log('✅  Accès à la page parente OK.\n');

  const state = loadState();
  const childCache = await N.listChildDatabases(client, parentId);

  // 1) PROFIL (base + ligne) — nécessaire avant la relation
  console.log('▶  Profil…');
  const profil = await ensureDatabase(client, parentId, 'Profil', S.PROFIL_DEF.title, S.PROFIL_DEF.baseProps, state, childCache);
  const profilRow = await N.upsertRow(client, profil.id, S.PROFIL_DEF.keyProp, S.PROFIL_DEF.keyType, S.PROFIL_DEF.keyValue, S.PROFIL_DEF.row);
  state.profilPageId = profilRow.id; saveState(state);
  console.log(`   Profil prêt (ligne « Mon personnage » ${profilRow.action}).`);

  // 2) Bases de contenu (Niveaux, Rangs, Badges, Quêtes, Défis)
  const dbIds = {};
  for (const def of S.DB_DEFS) {
    console.log(`▶  ${def.title}…`);
    const props = S.dbProperties(def);
    const res = await ensureDatabase(client, parentId, def.key, def.title, props, state, childCache);
    dbIds[def.key] = res.id;
    if (def.formulas) for (const f of Object.keys(def.formulas)) report.formulas.ok.push(`${def.title} · ${f}`);
  }

  // 3) Relation Défis → Profil (dual). Ajoutée avant l'import pour lier chaque défi.
  let relationOk = false;
  try {
    await N.ensureProperties(client, dbIds['Défis'], {
      'Profil': { relation: { database_id: profil.id, type: 'dual_property', dual_property: { synced_property_name: S.RELATION_ON_PROFIL } } },
    });
    relationOk = true;
    console.log('   Relation Défis ↔ Profil créée.');
  } catch (e) {
    report.rollups.failed.push('Relation Défis↔Profil : ' + (e.code || e.message));
    report.manual.push('Créer manuellement la relation « Profil » sur la base Défis (vers Profil).');
    console.log('   ⚠️  Relation non créée automatiquement (voir rapport).');
  }

  // 4) Import des lignes (contenu). Défis en dernier (relation liée au profil).
  for (const def of S.DB_DEFS) {
    console.log(`▶  Import ${def.title}…`);
    const extra = (def.key === 'Défis' && relationOk) ? { 'Profil': { relation: [{ id: state.profilPageId }] } } : null;
    const n = await importRows(client, def, dbIds[def.key], extra);
    const r = report.imported[def.title];
    console.log(`   ${n} lignes (${r.cree} créées, ${r.maj} mises à jour).`);
  }

  // 5) Rollups sur Profil (nécessitent la relation + les défis importés)
  if (relationOk) {
    const rollups = S.profilRollups();
    for (const [name, cfg] of Object.entries(rollups)) {
      try { await N.ensureProperties(client, profil.id, { [name]: cfg }); report.rollups.ok.push('Profil · ' + name); }
      catch (e) { report.rollups.failed.push(`Profil · ${name} : ${e.code || e.message}`); report.manual.push(`Créer le rollup « ${name} » sur Profil (relation « ${S.RELATION_ON_PROFIL} »).`); }
    }
    console.log(`   Rollups Profil : ${report.rollups.ok.length} ok, ${report.rollups.failed.length} à faire à la main.`);

    // 6) Formules Profil : Rang (auto) puis Niveau (auto)
    const rangs = loadCsv(CSV_DIR, 'notion-rangs.csv');
    const niveaux = loadCsv(CSV_DIR, 'notion-niveaux-50.csv');
    try { await N.ensureProperties(client, profil.id, { 'Rang (auto)': { formula: { expression: S.rangFormula(rangs) } } }); report.formulas.ok.push('Profil · Rang (auto)'); }
    catch (e) { report.formulas.failed.push('Profil · Rang (auto) : ' + (e.code || e.message)); report.manual.push('Créer la formule « Rang (auto) » sur Profil.'); }
    try { await N.ensureProperties(client, profil.id, { 'Niveau (auto)': { formula: { expression: S.niveauFormula(niveaux) } } }); report.formulas.ok.push('Profil · Niveau (auto)'); }
    catch (e) {
      report.formulas.failed.push('Profil · Niveau (auto) : ' + (e.code || e.message));
      fs.writeFileSync(path.join(ROOT, 'formule-niveau.txt'), S.niveauFormula(niveaux));
      report.manual.push('Coller la formule « Niveau (auto) » sur Profil (expression sauvegardée dans formule-niveau.txt).');
    }
  } else {
    report.manual.push('Ajouter les rollups (XP cumulée, Défis validés, 8 stats) et formules (Rang, Niveau) sur Profil une fois la relation créée.');
  }

  // 7) Vérification (comptages)
  console.log('\n▶  Vérification…');
  const checks = [];
  const expect = { Défis: 365, Niveaux: 50, Rangs: 10, Badges: 24, Quêtes: 19 };
  for (const [key, exp] of Object.entries(expect)) {
    const n = await N.countRows(client, dbIds[key]);
    const ok = n === exp;
    checks.push({ base: key, attendu: exp, obtenu: n, ok });
    console.log(`   ${ok ? '✅' : '⚠️ '} ${key} : ${n}/${exp}`);
    if (!ok) report.errors.push(`${key} : ${n} lignes au lieu de ${exp}`);
  }

  // Ce qui reste manuel dans tous les cas (limites de l'API Notion)
  report.manual.push(
    'Créer les VUES : « Défi du jour » (filtre date/prochain non validé), Calendrier, Galerie de badges, « Par mois ».',
    'Construire la page DASHBOARD (mise en page, vues liées, callouts) — l\'API ne crée pas la mise en page.',
    'Visualiser le RADAR des 8 stats (Notion n\'a pas de graphe radar natif — utiliser des barres ou un widget).',
    'La « Série courante » / « Bouclier » se tiennent à la main (logique de série non calculable par formule simple).',
    'Ajouter au bas de la colonne « XP gagnée » la calculation « Somme » dans une vue si tu ne veux pas passer par le rollup Profil.',
    'Rendre le template dupliquable + page d\'onboarding « Crée ton personnage ».',
  );

  writeReport(checks);
  console.log('\n✅  Terminé. Rapport détaillé : outils/cap365-notion-builder/RAPPORT-NOTION.md\n');
}

function writeReport(checks) {
  const L = [];
  L.push('# Cap365 — Rapport de montage Notion', '');
  L.push('## ✅ Créé automatiquement');
  L.push(`- **Bases créées :** ${report.created.length ? report.created.join(', ') : '—'}`);
  L.push(`- **Bases réutilisées (déjà présentes) :** ${report.reused.length ? [...new Set(report.reused)].join(', ') : '—'}`);
  L.push('- **Lignes importées :**');
  for (const [t, r] of Object.entries(report.imported)) L.push(`  - ${t} : ${r.total} (créées ${r.cree}, mises à jour ${r.maj})`);
  L.push(`- **Formules posées :** ${report.formulas.ok.length}`);
  L.push(`- **Rollups posés :** ${report.rollups.ok.length}`);
  L.push('- **Vérification des comptages :**');
  for (const c of checks) L.push(`  - ${c.ok ? '✅' : '⚠️'} ${c.base} : ${c.obtenu}/${c.attendu}`);
  L.push('');
  L.push('## ⚠️ À faire à la main (non automatisable via l\'API Notion)');
  for (const m of [...new Set(report.manual)]) L.push(`- ${m}`);
  if (report.formulas.failed.length || report.rollups.failed.length) {
    L.push('', '## ❌ Échecs à reprendre');
    for (const f of report.formulas.failed) L.push(`- Formule : ${f}`);
    for (const f of report.rollups.failed) L.push(`- Rollup : ${f}`);
  }
  if (report.errors.length) { L.push('', '## ❌ Écarts de comptage'); for (const e of report.errors) L.push(`- ${e}`); }
  L.push('', '> Idempotent : tu peux relancer `./run.sh` sans créer de doublons (les lignes sont mises à jour par clé, les bases réutilisées).');
  fs.writeFileSync(path.join(ROOT, 'RAPPORT-NOTION.md'), L.join('\n'));
}

main().catch((e) => { console.error('\n❌  Erreur fatale :', e.code || e.message); process.exit(1); });
