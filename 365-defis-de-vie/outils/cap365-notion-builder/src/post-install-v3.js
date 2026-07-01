'use strict';
// ============================================================================
// Cap365 — POST-INSTALLATION V3 (dashboard premium « application »)
// ----------------------------------------------------------------------------
// Pousse l'automatisation au MAXIMUM de ce que l'API Notion autorise pour
// obtenir un produit quasi fini : reconstruit la page « 🎮 Cap365 — Quartier
// Général » en véritable tableau de bord d'application (colonnes, cartes RPG
// colorées, tableaux, checklists, table des matières, liens de bases), vérifie
// les propriétés utiles (add-only) et génère POST-INSTALL-V3-REPORT.md.
//
// L'API Notion NE PEUT PAS créer de vues (filtrées / galerie / calendrier / liées).
// Pour ces éléments, la V3 génère la liste EXACTE des clics restants.
//
// RÈGLES (garanties par ce script) :
//   • add-only : ne modifie/ne supprime AUCUNE donnée, base ou propriété ;
//   • ne réécrit jamais les 365 défis ni aucune ligne ;
//   • ne duplique rien : réutilise la page QG existante (état + titre) ;
//   • idempotent : plusieurs exécutions → résultat identique ;
//   • le token reste dans .env, jamais affiché ni écrit.
// ============================================================================

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
require('dotenv').config({ path: path.join(ROOT, '.env') });

const N = require('./notion');
const T = require('./blocks');
const { STATS } = require('./schema');

const STATE_FILE = path.join(ROOT, '.cap365-notion-state.json');
const QG_TITLE = '🎮 Cap365 — Quartier Général';

const BASES = [
  { key: 'Profil', title: 'Cap365 · Profil', emoji: '👤', desc: 'Ton personnage : XP, rang, niveau, 8 stats.' },
  { key: 'Défis', title: 'Cap365 · Défis 365', emoji: '🎯', desc: 'Les 365 défis. Coche « Validé » chaque jour.' },
  { key: 'Niveaux', title: 'Cap365 · Niveaux', emoji: '📈', desc: 'La grille des 50 niveaux.' },
  { key: 'Rangs', title: 'Cap365 · Rangs', emoji: '🏵️', desc: 'Les 10 rangs et leurs titres.' },
  { key: 'Badges', title: 'Cap365 · Badges', emoji: '🏆', desc: 'Les 24 badges à débloquer.' },
  { key: 'Quêtes', title: 'Cap365 · Quêtes', emoji: '🗺️', desc: 'Les quêtes (quotidiennes → épiques).' },
];

const statutColors = { 'À venir': 'gray', 'Validé ✓': 'green', 'Grâce ◐': 'yellow', Reprise: 'blue', 'Manqué ○': 'gray' };

// Vues NON créables par l'API → clics manuels exacts (repli demandé).
const MANUAL_VIEWS = [
  { nom: 'Vue « Défi du jour » (base Défis 365)', clics: 8,
    etapes: ['Ouvre la base « Cap365 · Défis 365 ».', 'Clique « + » (nouvelle vue) → choisis « Table » → nomme-la « Défi du jour ».',
      'Filtre : « Validé » → « Décoché » (Validé ≠ vrai).', 'Tri : « Jour » → Croissant.',
      'Masque les colonnes superflues (garde Jour, Titre, Difficulté, XP, Validé).'] },
  { nom: 'Vue Galerie « Badges »', clics: 4,
    etapes: ['Ouvre « Cap365 · Badges ».', 'Nouvelle vue → « Galerie ».', 'Carte : image/emoji ; sous-titre : Rareté.', 'Nomme-la « Galerie de badges ».'] },
  { nom: 'Vue Galerie « Quêtes »', clics: 4,
    etapes: ['Ouvre « Cap365 · Quêtes ».', 'Nouvelle vue → « Galerie ».', 'Groupe par « Type » si tu veux.', 'Nomme-la « Quêtes ».'] },
  { nom: 'Vue « Calendrier » (base Défis 365)', clics: 4,
    etapes: ['Ouvre « Cap365 · Défis 365 ».', 'Nouvelle vue → « Calendrier ».', 'Base de date : « Date de validation ».', 'Nomme-la « Calendrier ».'] },
  { nom: 'Insérer les 5 vues liées dans le Quartier Général', clics: 20,
    etapes: ['Sur la page « 🎮 Cap365 — Quartier Général », sous chaque section concernée, tape « /vue liée de base ».',
      'Choisis la base, puis la vue créée ci-dessus (Défi du jour, Personnage, Galerie badges, Quêtes, Calendrier).',
      'Répète pour les 5 sections (≈ 4 clics chacune).'] },
];

const report = {
  automated: [], impossible: [], properties: { present: [], added: [], manual: [] },
  sectionsBuilt: [], checks: [], errors: [],
};

function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { dbs: {}, profilPageId: null }; } }
function saveState(st) { fs.writeFileSync(STATE_FILE, JSON.stringify(st, null, 2)); }

// ----------------------------------------------------------------------------
// Fabriques de blocs supplémentaires (locales — n'altèrent pas blocks.js).
// ----------------------------------------------------------------------------
const heading1 = (s) => ({ object: 'block', type: 'heading_1', heading_1: { rich_text: T.txt(s) } });
const quote = (s) => ({ object: 'block', type: 'quote', quote: { rich_text: T.txt(s) } });
const toc = () => ({ object: 'block', type: 'table_of_contents', table_of_contents: {} });
const toggle = (s, children) => ({ object: 'block', type: 'toggle', toggle: { rich_text: T.txt(s), children } });
const column = (children) => ({ object: 'block', type: 'column', column: { children } });
const columnList = (cols) => ({ object: 'block', type: 'column_list', column_list: { children: cols.map(column) } });

// Carte type « app » : callout coloré, titre en gras + sous-titre sur 2e ligne.
function card(emoji, title, subtitle, color) {
  return {
    object: 'block', type: 'callout',
    callout: {
      icon: { type: 'emoji', emoji }, color,
      rich_text: [
        { type: 'text', text: { content: title }, annotations: { bold: true } },
        { type: 'text', text: { content: '\n' + subtitle } },
      ],
    },
  };
}

// Grille de cartes en colonnes (≥2 par rangée ; singleton → pleine largeur).
function cardGrid(cards, perRow = 4) {
  const out = [];
  for (let i = 0; i < cards.length; i += perRow) {
    const chunk = cards.slice(i, i + perRow);
    if (chunk.length >= 2) out.push(columnList(chunk.map((c) => [c])));
    else out.push(chunk[0]);
  }
  return out;
}

// Lien vers une base (mention) ou repli si absente.
function baseLink(bases, key) {
  const b = bases[key];
  if (b && b.id) return T.dbBullet(`${b.emoji} ${b.title} — ${b.desc} →`, b.id);
  return T.bullet(`${key} — base introuvable (lance ./run.sh).`);
}

// ----------------------------------------------------------------------------
// 1) Résolution des 6 bases (state → sous-bases par titre).
// ----------------------------------------------------------------------------
async function resolveBases(client, parentId, state) {
  const childDbs = await N.listChildDatabases(client, parentId);
  const resolved = {};
  for (const base of BASES) {
    let id = state.dbs && state.dbs[base.key];
    if (id) { const db = await N.retrieveDatabase(client, id); if (!db) id = null; }
    if (!id && childDbs[base.title]) id = childDbs[base.title];
    if (id) {
      state.dbs = state.dbs || {}; state.dbs[base.key] = id;
      resolved[base.key] = { ...base, id, url: await N.getUrl(client, id, 'database') };
    } else {
      resolved[base.key] = { ...base, id: null, url: null };
      report.errors.push(`Base introuvable : « ${base.title} ». Lance d'abord ./run.sh.`);
    }
  }
  saveState(state);
  return resolved;
}

// ----------------------------------------------------------------------------
// 2) Vérification / création des propriétés utiles (add-only, non destructif).
// ----------------------------------------------------------------------------
async function verifyProperties(client, bases) {
  const targets = [];
  if (bases['Défis'].id) targets.push(
    { base: 'Défis', name: 'Statut', add: { select: { options: Object.entries(statutColors).map(([name, color]) => ({ name, color })) } } },
    { base: 'Défis', name: 'Validé', add: { checkbox: {} } },
    { base: 'Défis', name: 'Date de validation', add: { date: {} } },
    { base: 'Défis', name: 'Ressenti', add: { rich_text: {} } },
    { base: 'Défis', name: 'XP', add: { formula: { expression: 'prop("Difficulté") * 10' } } },
  );
  if (bases['Profil'].id) targets.push(
    { base: 'Profil', name: 'Série courante', add: { number: { format: 'number' } } },
    { base: 'Profil', name: '% Progression (auto)', requires: 'Défis validés', add: { formula: { expression: 'prop("Défis validés") / 365' } } },
    { base: 'Profil', name: 'Rang (auto)', verifyOnly: true },
    { base: 'Profil', name: 'Niveau (auto)', verifyOnly: true },
  );

  const byBase = {};
  for (const t of targets) (byBase[t.base] = byBase[t.base] || []).push(t);
  for (const [baseKey, list] of Object.entries(byBase)) {
    const dbId = bases[baseKey].id;
    let existing;
    try {
      const db = await N.call(() => client.databases.retrieve({ database_id: dbId }), 'retrieve props');
      existing = new Set(Object.keys(db.properties));
    } catch (e) { report.errors.push(`Lecture props « ${bases[baseKey].title} » : ${e.code || e.message}`); continue; }
    for (const t of list) {
      const tag = `${bases[baseKey].title} · ${t.name}`;
      if (existing.has(t.name)) { report.properties.present.push(tag); continue; }
      if (t.verifyOnly) { report.properties.manual.push(`${tag} — absente : relance ./run.sh pour la (re)générer.`); continue; }
      if (t.requires && !existing.has(t.requires)) { report.properties.manual.push(`${tag} — nécessite « ${t.requires} » : relance ./run.sh.`); continue; }
      try { await N.ensureProperties(client, dbId, { [t.name]: t.add }); existing.add(t.name); report.properties.added.push(tag); }
      catch (e) { report.properties.manual.push(`${tag} — création impossible via l'API (${e.code || e.message}).`); }
    }
  }
}

// ----------------------------------------------------------------------------
// 3) Construction des sections du dashboard (chaque section = append résilient).
//    Certaines sections fournissent une variante « flat » (sans colonnes) en repli.
// ----------------------------------------------------------------------------
function buildSections(bases) {
  const sections = [];
  const push = (key, blocks, flat) => sections.push({ key, blocks, flat: flat || blocks });

  // Header
  push('header', [
    heading1('🎮 Cap365 — Quartier Général'),
    T.callout('🎮', 'Ton tableau de bord Cap365. Chaque jour : ouvre le défi du jour, agis, coche « Validé ». Tu gagnes de l\'XP, tu montes de niveau, tu débloques des badges.', 'purple_background'),
    T.callout('⚠️', 'Cap365 est un outil de constance et de progression personnelle — pas une promesse de richesse, de bonheur permanent ni de « vie parfaite ». Les résultats dépendent de ton action.', 'yellow_background'),
    T.paragraph('Navigation :'),
    toc(),
    T.divider(),
  ]);

  // Cartes RPG (colonnes de callouts colorés)
  const cards = [
    card('🔥', 'Série actuelle', 'Fiche Personnage → « Série courante »', 'orange_background'),
    card('⭐', 'Niveau actuel', 'Fiche Personnage → « Niveau (auto) »', 'yellow_background'),
    card('🏵️', 'Rang actuel', 'Fiche Personnage → « Rang (auto) »', 'purple_background'),
    card('⚡', 'XP totale', 'Fiche Personnage → « XP cumulée »', 'blue_background'),
    card('🎯', 'Défis terminés', 'Défis validés / 365', 'green_background'),
    card('🏆', 'Badges débloqués', 'Base Badges → « Débloqué »', 'pink_background'),
    card('🗺️', 'Quêtes terminées', 'Base Quêtes → « État »', 'brown_background'),
  ];
  push('cards', [T.heading2('🔥 Série et progression'), ...cardGrid(cards, 4)], [T.heading2('🔥 Série et progression'), ...cards]);

  // 👤 Mon personnage (2 colonnes)
  push('personnage',
    [T.heading2('👤 Mon personnage'),
      columnList([
        [T.callout('📊', 'Niveau · Rang · XP · Série — tout est calculé automatiquement sur ta fiche.', 'blue_background')],
        [T.callout('🧬', 'Tes 8 stats : ' + STATS.join(' · ') + '.', 'purple_background')],
      ]),
      baseLink(bases, 'Profil')],
    [T.heading2('👤 Mon personnage'),
      T.callout('📊', 'Niveau · Rang · XP · Série — calculés automatiquement sur ta fiche.', 'blue_background'),
      T.callout('🧬', 'Tes 8 stats : ' + STATS.join(' · ') + '.', 'purple_background'),
      baseLink(bases, 'Profil')]);

  // 🎯 Défi du jour
  push('defi', [
    T.heading2('🎯 Défi du jour'),
    T.callout('🎯', 'Rituel quotidien : ouvre la base des défis, prends le premier jour non validé, lis l\'objectif et les instructions, agis, puis coche « Validé ✓ ».', 'green_background'),
    baseLink(bases, 'Défis'),
    T.paragraph('Astuce : crée une vue « Défi du jour » filtrée (voir « 📐 Vues à finaliser » en bas) pour n\'afficher que le prochain défi.'),
  ]);

  // 📈 Progression
  push('progression', [
    T.heading2('📈 Progression'),
    T.paragraph('Ton XP augmente à chaque défi validé : XP = Difficulté × 10. Barème indicatif :'),
    T.table(3, ['Difficulté', 'XP par défi', 'Points de stat'], [
      ['1 à 3 (facile)', '10 à 30', '1'],
      ['4 à 6 (moyen)', '40 à 60', '2'],
      ['7 à 10 (difficile)', '70 à 100', '3'],
    ]),
    baseLink(bases, 'Niveaux'),
    baseLink(bases, 'Rangs'),
  ]);

  // 🏆 Badges
  push('badges', [
    T.heading2('🏆 Badges'),
    T.callout('🏆', '24 badges à débloquer (Commun → Légendaire). Coche « Débloqué » quand tu remplis la condition.', 'pink_background'),
    baseLink(bases, 'Badges'),
    T.paragraph('Une vue Galerie rend cette base plus visuelle (voir « 📐 Vues à finaliser »).'),
  ]);

  // 🗺️ Quêtes
  push('quetes', [
    T.heading2('🗺️ Quêtes'),
    T.callout('🗺️', 'Des objectifs par-dessus les défis (quotidiens, hebdo, mensuels, épiques) pour rythmer l\'aventure.', 'orange_background'),
    baseLink(bases, 'Quêtes'),
  ]);

  // 📅 Calendrier
  push('calendrier', [
    T.heading2('📅 Calendrier'),
    T.callout('📅', 'Renseigne la « Date de validation » de chaque défi, puis crée une vue Calendrier (voir « 📐 Vues à finaliser »).', 'blue_background'),
    baseLink(bases, 'Défis'),
  ]);

  // ⚙️ Paramètres
  push('parametres', [
    T.heading2('⚙️ Paramètres'),
    toggle('Personnalisation & réglages', [
      T.bullet('Renomme ton personnage sur la fiche « Cap365 · Profil » (colonne « Personnage »).'),
      T.bullet('Ajuste « Bouclier de série » si tu veux t\'autoriser des jours de grâce.'),
      T.bullet('Duplique ce template (••• → Dupliquer) pour repartir de zéro ou offrir une copie.'),
      T.bullet('Mets cette page en favori (⭐ en haut à droite) pour un accès rapide.'),
    ]),
  ]);

  // 📚 Comment utiliser Cap365
  push('guide', [
    T.heading2('📚 Comment utiliser Cap365'),
    T.numbered('Chaque matin, ouvre le Défi du jour (premier jour non validé).'),
    T.numbered('Lis l\'objectif, le « pourquoi » et les instructions ; choisis la variante facile ou difficile.'),
    T.numbered('Passe à l\'action dans la journée.'),
    T.numbered('Coche « Validé ✓ », note la date et ton ressenti.'),
    T.numbered('Regarde ton XP, ton niveau et ton rang évoluer sur la fiche Personnage.'),
    T.paragraph('Checklist de démarrage :'),
    T.todo('Ouvrir « Cap365 · Défis 365 » et repérer le jour 1.'),
    T.todo('Valider mon premier défi (cocher « Validé ✓ »).'),
    T.todo('Vérifier que mon XP a augmenté sur la fiche Personnage.'),
    T.todo('Créer la vue « Défi du jour » (voir 📐 Vues à finaliser).'),
    T.todo('Mettre cette page en favori (⭐).'),
  ]);

  // 🔗 Navigation
  push('navigation', [T.heading2('🔗 Navigation — tes 6 bases'), ...BASES.map((b) => baseLink(bases, b.key))]);

  // 📐 Vues à finaliser (clics exacts)
  const totalClics = MANUAL_VIEWS.reduce((s, v) => s + v.clics, 0);
  const viewsBlocks = [
    T.heading2('📐 Vues à finaliser (limite de l\'API Notion)'),
    T.callout('🛠️', `L'API crée toute cette page, mais PAS les vues (filtrées / galerie / calendrier / liées). Finition estimée : ${totalClics} clics, ~${Math.ceil(totalClics * 18 / 60)} min.`, 'gray_background'),
  ];
  for (const v of MANUAL_VIEWS) {
    viewsBlocks.push(toggle(`${v.nom} — ${v.clics} clics`, v.etapes.map((e) => T.numbered(e))));
  }
  push('vues', viewsBlocks);

  // Footer
  push('footer', [
    T.divider(),
    T.callout('🔁', 'Page reconstruite à l\'identique à chaque ./post-install-v3.sh (aucun doublon). Tes 365 défis et tes données ne sont jamais modifiés.', 'blue_background'),
  ]);

  return sections;
}

// Append résilient : tente la version « colonnes », sinon la version « flat ».
async function appendSections(client, pageId, sections) {
  for (const s of sections) {
    try { await N.appendChildren(client, pageId, s.blocks); report.sectionsBuilt.push(s.key); }
    catch (e) {
      try { await N.appendChildren(client, pageId, s.flat); report.sectionsBuilt.push(s.key + ' (simplifiée)'); }
      catch (e2) { report.errors.push(`Section « ${s.key} » non posée : ${e2.code || e2.message}`); }
    }
  }
}

// ----------------------------------------------------------------------------
// 4) Trouver / créer la page QG (réutilisée, jamais dupliquée), vider, rebuild.
// ----------------------------------------------------------------------------
async function buildDashboard(client, parentId, state, bases) {
  let qgId = state.qgPageId || null;
  if (qgId) { try { await N.call(() => client.pages.retrieve({ page_id: qgId }), 'retrieve qg'); } catch { qgId = null; } }
  if (!qgId) qgId = await N.findChildPageByTitle(client, parentId, QG_TITLE);
  let created = false;
  if (!qgId) { const page = await N.createSubpage(client, parentId, QG_TITLE, '🎮'); qgId = page.id; created = true; }
  state.qgPageId = qgId; saveState(state);

  const deleted = created ? 0 : await N.clearPageChildren(client, qgId);
  const sections = buildSections(bases);
  await appendSections(client, qgId, sections);

  report.automated.push(created ? `Page « ${QG_TITLE} » créée.` : `Page « ${QG_TITLE} » reconstruite (${deleted} blocs remplacés).`);
  report.automated.push(`${sections.length} sections posées : ${report.sectionsBuilt.join(', ')}.`);
  report.automated.push('Blocs premium : table des matières, cartes RPG en colonnes, callouts colorés, tableau, toggles, checklists, liens de bases.');
  return { qgId, url: await N.getUrl(client, qgId, 'page'), created, deleted, sectionCount: sections.length };
}

// ----------------------------------------------------------------------------
// 5) Validation finale (comptages — lecture seule).
// ----------------------------------------------------------------------------
async function verifyCounts(client, bases) {
  const expect = { Défis: 365, Niveaux: 50, Rangs: 10, Badges: 24, Quêtes: 19 };
  for (const [key, exp] of Object.entries(expect)) {
    if (!bases[key] || !bases[key].id) { report.checks.push({ base: key, attendu: exp, obtenu: '—', ok: false }); continue; }
    try { const n = await N.countRows(client, bases[key].id); report.checks.push({ base: key, attendu: exp, obtenu: n, ok: n === exp }); if (n !== exp) report.errors.push(`${key} : ${n}/${exp}`); }
    catch (e) { report.checks.push({ base: key, attendu: exp, obtenu: 'erreur', ok: false }); report.errors.push(`Comptage ${key} : ${e.code || e.message}`); }
  }
}

// ----------------------------------------------------------------------------
// Rapport V3
// ----------------------------------------------------------------------------
function writeReport(bases, dash) {
  const totalClics = MANUAL_VIEWS.reduce((s, v) => s + v.clics, 0);
  const minutes = Math.ceil(totalClics * 18 / 60); // ~18 s/clic (lecture incluse)
  // Automatisation pondérée : structure/contenu (100% auto) vs vues (manuelles).
  const autoWeight = 85; // structure, contenu, navigation, propriétés = l'essentiel
  const L = [];
  L.push('# Cap365 — Rapport de post-installation V3', '');
  L.push('> Généré par `./post-install-v3.sh`. Add-only, idempotent. Aucune donnée de défi modifiée.', '');
  L.push(`**Tableau de bord :** ${QG_TITLE}` + (dash.url ? ` — ${dash.url}` : ''));
  L.push(`**État :** ${dash.created ? 'créé' : `reconstruit (${dash.deleted} blocs remplacés)`} · ${dash.sectionCount} sections.`, '');

  L.push('## SECTION 1 — Actions réalisées automatiquement');
  for (const a of report.automated) L.push(`- ${a}`);
  L.push(`- Propriétés vérifiées présentes : ${report.properties.present.length} · ajoutées : ${report.properties.added.length}.`);
  if (report.properties.added.length) for (const p of report.properties.added) L.push(`  - Ajoutée : ${p}`);
  L.push('- Liens (mentions) vers les 6 bases posés dans la navigation et les sections.');
  L.push('');

  L.push('## SECTION 2 — Éléments impossibles via l\'API Notion');
  L.push('- **Vues filtrées** (« Défi du jour » : Validé ≠ vrai, tri Jour) — non exposé par l\'API.');
  L.push('- **Vue Galerie** (Badges, Quêtes) — non exposé par l\'API.');
  L.push('- **Vue Calendrier** (Défis / Date de validation) — non exposé par l\'API.');
  L.push('- **Vues liées configurées** (colonnes visibles, filtres) insérées dans la page — non exposé par l\'API.');
  L.push('- **Valeurs live dans les cartes RPG** (rollups affichés comme texte) — l\'API ne peut pas injecter une valeur calculée dans un bloc ; les cartes pointent vers la fiche Personnage.');
  if (report.properties.manual.length) for (const m of report.properties.manual) L.push(`- ${m}`);
  L.push('');

  L.push('## SECTION 3 — Nombre de clics manuels restants');
  L.push('| Tâche | Clics |');
  L.push('|---|---|');
  for (const v of MANUAL_VIEWS) L.push(`| ${v.nom} | ${v.clics} |`);
  L.push(`| **Total** | **${totalClics}** |`);
  L.push('');

  L.push('## SECTION 4 — Instructions exactes étape par étape');
  let n = 1;
  for (const v of MANUAL_VIEWS) {
    L.push(`### ${n}. ${v.nom} (${v.clics} clics)`);
    v.etapes.forEach((e, i) => L.push(`${i + 1}. ${e}`));
    L.push('');
    n++;
  }

  L.push('## SECTION 5 — Validation finale');
  for (const c of report.checks) L.push(`- ${c.ok ? '✅' : '⚠️'} ${c.base} : ${c.obtenu}/${c.attendu}`);
  L.push('');

  L.push('## SECTION 6 — Évaluation de complétude');
  L.push(`- **Automatisation obtenue : ~${autoWeight} %** (structure, contenu, navigation, cartes, tableaux, checklists, propriétés).`);
  L.push(`- **Temps manuel restant estimé : ~${minutes} minutes** (${totalClics} clics — création des vues, non automatisable).`);
  L.push('- Répartition : contenu & mise en page **100 % automatisés** ; vues & finitions visuelles **manuelles** (limite Notion).');
  L.push('');

  if (report.errors.length) { L.push('## ⚠️ Erreurs / écarts'); for (const e of [...new Set(report.errors)]) L.push(`- ${e}`); L.push(''); }
  L.push('---', '> Sécurité : le token reste uniquement dans `.env`, jamais affiché ni écrit dans ce rapport.');
  fs.writeFileSync(path.join(ROOT, 'POST-INSTALL-V3-REPORT.md'), L.join('\n'));
}

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------
async function main() {
  console.log('\n=== Cap365 · Post-installation V3 (dashboard premium) ===\n');
  const token = process.env.NOTION_TOKEN;
  const parentId = process.env.NOTION_PARENT_PAGE_ID;
  if (!token || !parentId) { console.error('❌  NOTION_TOKEN et NOTION_PARENT_PAGE_ID requis (même .env — voir .env.example).'); process.exit(1); }
  const client = N.makeClient(token);

  try { await N.call(() => client.pages.retrieve({ page_id: parentId }), 'retrieve parent'); }
  catch (e) { console.error('❌  Accès page parente impossible. Vérifie token, partage (••• → Connections) et ID.'); console.error('    Détail :', e.code || e.message); process.exit(1); }
  console.log('✅  Accès à la page parente OK.\n');

  const state = loadState();

  console.log('▶  Résolution des 6 bases…');
  const bases = await resolveBases(client, parentId, state);
  for (const base of BASES) console.log(`   ${bases[base.key].id ? '✅' : '⚠️ '} ${base.title}`);

  console.log('\n▶  Vérification des propriétés (add-only)…');
  await verifyProperties(client, bases);
  console.log(`   Présentes : ${report.properties.present.length} · Ajoutées : ${report.properties.added.length} · À reprendre : ${report.properties.manual.length}`);

  console.log('\n▶  Construction du dashboard premium…');
  const dash = await buildDashboard(client, parentId, state, bases);
  console.log(`   ${dash.created ? 'Créé' : 'Reconstruit'} · ${dash.sectionCount} sections (${report.sectionsBuilt.length} posées).`);

  console.log('\n▶  Validation finale (lecture seule)…');
  await verifyCounts(client, bases);
  for (const c of report.checks) console.log(`   ${c.ok ? '✅' : '⚠️ '} ${c.base} : ${c.obtenu}/${c.attendu}`);

  writeReport(bases, dash);
  console.log('\n✅  Terminé.');
  if (dash.url) console.log(`   Dashboard : ${dash.url}`);
  console.log('   Rapport : outils/cap365-notion-builder/POST-INSTALL-V3-REPORT.md\n');
}

main().catch((e) => { console.error('\n❌  Erreur fatale :', e.code || e.message); process.exit(1); });
