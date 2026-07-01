'use strict';
// ============================================================================
// Cap365 — POST-INSTALLATION Notion
// ----------------------------------------------------------------------------
// Améliore la page Cap365 APRÈS le montage des bases (build.js) :
//   • construit / met à jour un tableau de bord « 🎮 Cap365 — Quartier Général »
//     avec toutes les sections + liens vers les 6 bases + tous les types de blocs
//     que l'API sait poser (callouts, titres, séparateurs, listes, tableaux,
//     instructions, checklist) ;
//   • vérifie / crée les propriétés utiles manquantes (add-only, jamais destructif) ;
//   • liste ce qui reste à finir à la main (limites de l'API) ;
//   • génère POST-INSTALL-NOTION.md.
//
// Garanties :
//   • RELANÇABLE (idempotent) : la page QG est reconstruite proprement, sans doublon ;
//   • NE TOUCHE PAS aux 365 défis (ni aux autres lignes) : on ne lit/écrit AUCUNE
//     ligne de base — on ajoute seulement des colonnes manquantes et des blocs de page ;
//   • le token n'est JAMAIS affiché ni écrit ; il reste dans .env.
// ============================================================================

const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
require('dotenv').config({ path: path.join(ROOT, '.env') });

const N = require('./notion');
const B = require('./blocks');

const STATE_FILE = path.join(ROOT, '.cap365-notion-state.json');
const QG_TITLE = '🎮 Cap365 — Quartier Général';

// Titres officiels des 6 bases (doivent correspondre à schema.js / build.js).
const BASES = [
  { key: 'Profil', title: 'Cap365 · Profil', emoji: '👤', desc: 'Ton personnage, ton XP, ton rang et ton niveau.' },
  { key: 'Défis', title: 'Cap365 · Défis 365', emoji: '🎯', desc: 'Les 365 défis. Coche « Validé » quand tu accomplis celui du jour.' },
  { key: 'Niveaux', title: 'Cap365 · Niveaux', emoji: '📈', desc: 'La grille des 50 niveaux et l\'XP requise.' },
  { key: 'Rangs', title: 'Cap365 · Rangs', emoji: '🏵️', desc: 'Les 10 rangs et leurs titres portés.' },
  { key: 'Badges', title: 'Cap365 · Badges', emoji: '🏆', desc: 'Les 24 badges à débloquer.' },
  { key: 'Quêtes', title: 'Cap365 · Quêtes', emoji: '🗺️', desc: 'Les quêtes (quotidiennes, hebdo, mensuelles, épiques).' },
];

const statutColors = { 'À venir': 'gray', 'Validé ✓': 'green', 'Grâce ◐': 'yellow', Reprise: 'blue', 'Manqué ○': 'gray' };

const report = {
  automated: [], properties: { present: [], added: [], manual: [] },
  baseLinks: [], checks: [], errors: [], manual: [],
};

function loadState() { try { return JSON.parse(fs.readFileSync(STATE_FILE, 'utf8')); } catch { return { dbs: {}, profilPageId: null }; } }
function saveState(st) { fs.writeFileSync(STATE_FILE, JSON.stringify(st, null, 2)); }

// ----------------------------------------------------------------------------
// 1) Résolution des 6 bases (via state, sinon via les sous-bases de la page).
// ----------------------------------------------------------------------------
async function resolveBases(client, parentId, state) {
  const childDbs = await N.listChildDatabases(client, parentId); // { titre -> id }
  const resolved = {};
  for (const base of BASES) {
    let id = state.dbs && state.dbs[base.key];
    if (id) {
      const db = await N.retrieveDatabase(client, id);
      if (!db) id = null; // état périmé
    }
    if (!id && childDbs[base.title]) id = childDbs[base.title];
    if (id) {
      state.dbs = state.dbs || {};
      state.dbs[base.key] = id;
      const url = await N.getUrl(client, id, 'database');
      resolved[base.key] = { ...base, id, url };
    } else {
      resolved[base.key] = { ...base, id: null, url: null };
      report.errors.push(`Base introuvable : « ${base.title} ». Lance d'abord le montage (./run.sh).`);
    }
  }
  saveState(state);
  return resolved;
}

// ----------------------------------------------------------------------------
// 2) Vérification / création des propriétés utiles (add-only, non destructif).
//    On ne modifie ni ne supprime AUCUNE ligne ; ensureProperties n'ajoute
//    que les colonnes absentes.
// ----------------------------------------------------------------------------
async function verifyProperties(client, bases) {
  // Cibles demandées : statut, validé, date de validation, ressenti, XP,
  // progression, série, rang, niveau — réparties sur les bonnes bases.
  const targets = [];
  if (bases['Défis'].id) {
    targets.push(
      { base: 'Défis', label: 'statut', name: 'Statut', addable: { select: { options: Object.entries(statutColors).map(([name, color]) => ({ name, color })) } } },
      { base: 'Défis', label: 'validé', name: 'Validé', addable: { checkbox: {} } },
      { base: 'Défis', label: 'date de validation', name: 'Date de validation', addable: { date: {} } },
      { base: 'Défis', label: 'ressenti', name: 'Ressenti', addable: { rich_text: {} } },
      { base: 'Défis', label: 'XP', name: 'XP', addable: { formula: { expression: 'prop("Difficulté") * 10' } } },
    );
  }
  if (bases['Profil'].id) {
    targets.push(
      { base: 'Profil', label: 'série', name: 'Série courante', addable: { number: { format: 'number' } } },
      // progression : formule sûre uniquement si le rollup « Défis validés » existe.
      { base: 'Profil', label: 'progression', name: '% Progression (auto)', requires: 'Défis validés', addable: { formula: { expression: 'prop("Défis validés") / 365' } } },
      // rang / niveau : formules générées par le builder (dépendent des CSV) → on VÉRIFIE seulement.
      { base: 'Profil', label: 'rang', name: 'Rang (auto)', verifyOnly: true },
      { base: 'Profil', label: 'niveau', name: 'Niveau (auto)', verifyOnly: true },
    );
  }

  // On regroupe par base pour ne retrieve qu'une fois.
  const byBase = {};
  for (const t of targets) (byBase[t.base] = byBase[t.base] || []).push(t);

  for (const [baseKey, list] of Object.entries(byBase)) {
    const dbId = bases[baseKey].id;
    let existing;
    try {
      const db = await N.call(() => client.databases.retrieve({ database_id: dbId }), 'retrieve for props');
      existing = new Set(Object.keys(db.properties));
    } catch (e) {
      report.errors.push(`Lecture des propriétés de « ${bases[baseKey].title} » impossible : ${e.code || e.message}`);
      continue;
    }
    for (const t of list) {
      const tag = `${bases[baseKey].title} · ${t.name}`;
      if (existing.has(t.name)) { report.properties.present.push(tag); continue; }
      if (t.verifyOnly) { report.properties.manual.push(`${tag} — absente. Relance le montage (./run.sh) pour la (re)générer.`); continue; }
      if (t.requires && !existing.has(t.requires)) {
        report.properties.manual.push(`${tag} — nécessite « ${t.requires} » (rollup). Relance le montage (./run.sh) d'abord.`);
        continue;
      }
      try {
        await N.ensureProperties(client, dbId, { [t.name]: t.addable });
        existing.add(t.name);
        report.properties.added.push(tag);
      } catch (e) {
        report.properties.manual.push(`${tag} — création impossible via l'API (${e.code || e.message}). À ajouter à la main.`);
      }
    }
  }
}

// ----------------------------------------------------------------------------
// 3) Construction des blocs du tableau de bord.
// ----------------------------------------------------------------------------
function link(bases, key) {
  const b = bases[key];
  if (b && b.id) return B.dbBullet(`${b.emoji} ${b.title} — ${b.desc} →`, b.id);
  return B.bullet(`${key} — base introuvable (lance ./run.sh).`);
}

function buildBlocks(bases) {
  const blocks = [];

  // Intro
  blocks.push(B.callout('🎮', 'Bienvenue dans ton Quartier Général Cap365. Chaque jour : ouvre le défi du jour, agis, coche « Validé ». Tu gagnes de l\'XP, tu montes de niveau, tu débloques des badges.', 'purple_background'));
  blocks.push(B.callout('⚠️', 'Cap365 est un outil de constance et de progression personnelle — pas une promesse de richesse, de bonheur permanent ni de « vie parfaite ». Les résultats dépendent de ton action.', 'yellow_background'));
  blocks.push(B.divider());

  // 🎯 Défi du jour
  blocks.push(B.heading2('🎯 Défi du jour'));
  blocks.push(B.paragraph('Ouvre la base des défis, filtre sur le prochain jour non validé, lis l\'objectif et les instructions, agis, puis coche « Validé ✓ ».'));
  blocks.push(link(bases, 'Défis'));

  // 👤 Mon personnage
  blocks.push(B.heading2('👤 Mon personnage'));
  blocks.push(B.paragraph('Ta fiche : XP cumulée, rang, niveau et tes 8 statistiques (Discipline, Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité).'));
  blocks.push(link(bases, 'Profil'));

  // 📈 Progression
  blocks.push(B.heading2('📈 Progression'));
  blocks.push(B.paragraph('Ton XP augmente à chaque défi validé : XP = Difficulté × 10. Barème indicatif :'));
  blocks.push(B.table(3, ['Difficulté', 'XP par défi', 'Points de stat'], [
    ['1 à 3 (facile)', '10 à 30', '1'],
    ['4 à 6 (moyen)', '40 à 60', '2'],
    ['7 à 10 (difficile)', '70 à 100', '3'],
  ]));
  blocks.push(link(bases, 'Niveaux'));
  blocks.push(link(bases, 'Rangs'));

  // 🏆 Badges
  blocks.push(B.heading2('🏆 Badges'));
  blocks.push(B.paragraph('24 badges à débloquer (Commun → Légendaire). Coche « Débloqué » quand tu remplis la condition.'));
  blocks.push(link(bases, 'Badges'));

  // 📅 Calendrier
  blocks.push(B.heading2('📅 Calendrier'));
  blocks.push(B.paragraph('Renseigne la « Date de validation » de chaque défi. Tu pourras ensuite créer une vue Calendrier (voir « À finir manuellement »).'));
  blocks.push(link(bases, 'Défis'));

  // 🎯 Quêtes
  blocks.push(B.heading2('🎯 Quêtes'));
  blocks.push(B.paragraph('Des objectifs par-dessus les défis (quotidiens, hebdomadaires, mensuels, épiques) pour rythmer l\'aventure.'));
  blocks.push(link(bases, 'Quêtes'));

  blocks.push(B.divider());

  // 🔗 Tes 6 bases (récapitulatif des liens)
  blocks.push(B.heading2('🔗 Tes 6 bases'));
  for (const base of BASES) blocks.push(link(bases, base.key));

  blocks.push(B.divider());

  // ✅ Comment utiliser ce template
  blocks.push(B.heading2('✅ Comment utiliser ce template'));
  blocks.push(B.numbered('Chaque matin, ouvre le Défi du jour (premier jour non validé).'));
  blocks.push(B.numbered('Lis l\'objectif, le « pourquoi » et les instructions. Choisis la variante facile ou difficile si besoin.'));
  blocks.push(B.numbered('Passe à l\'action dans la journée.'));
  blocks.push(B.numbered('Coche « Validé ✓ », note la date et ton ressenti.'));
  blocks.push(B.numbered('Regarde ton XP, ton niveau et ton rang évoluer sur la fiche Personnage.'));
  blocks.push(B.paragraph('Checklist de démarrage :'));
  blocks.push(B.todo('Ouvrir la base « Cap365 · Défis 365 » et repérer le jour 1.'));
  blocks.push(B.todo('Valider mon premier défi (cocher « Validé ✓ »).'));
  blocks.push(B.todo('Vérifier que mon XP a augmenté sur la fiche Personnage.'));
  blocks.push(B.todo('Mettre cette page « Quartier Général » en favori (⭐ en haut à droite).'));
  blocks.push(B.todo('(Optionnel) Créer la vue « Défi du jour » — voir la section suivante.'));

  blocks.push(B.divider());

  // 🛠️ À finir manuellement
  blocks.push(B.heading2('🛠️ À finir manuellement (limites de l\'API Notion)'));
  blocks.push(B.callout('🛠️', 'L\'API Notion crée les bases, les colonnes, les formules et cette page — mais PAS les vues ni la mise en page visuelle. Voici les finitions (~30-60 min) :', 'gray_background'));
  blocks.push(B.bullet('Vues personnalisées : « Défi du jour » (filtre : premier non validé / par date), « Par mois », « À valider ».'));
  blocks.push(B.bullet('Galerie de badges : une vue Galerie sur la base Badges (couverture = Rareté).'));
  blocks.push(B.bullet('Vue Calendrier : une vue Calendrier sur la base Défis, basée sur « Date de validation ».'));
  blocks.push(B.bullet('Affichage mobile premium : réorganiser les vues liées ici et masquer les colonnes techniques.'));
  blocks.push(B.bullet('Radar visuel des 8 stats : Notion n\'a pas de graphe radar natif — utiliser des barres de progression ou un widget externe.'));
  blocks.push(B.paragraph('Astuce : une fois une vue créée dans la base, tu peux l\'insérer ici en « vue liée » (tape /vue liée de base).'));

  blocks.push(B.divider());
  blocks.push(B.callout('🔁', 'Cette page est reconstruite à l\'identique à chaque exécution de ./post-install.sh (aucun doublon). Tes 365 défis et tes données ne sont jamais modifiés.', 'blue_background'));

  return blocks;
}

// ----------------------------------------------------------------------------
// 4) Trouver / créer la page QG, la vider, la reconstruire.
// ----------------------------------------------------------------------------
async function buildDashboard(client, parentId, state, bases) {
  // a) résoudre la page (state → sinon recherche par titre → sinon création)
  let qgId = state.qgPageId || null;
  if (qgId) {
    try { await N.call(() => client.pages.retrieve({ page_id: qgId }), 'retrieve qg'); }
    catch { qgId = null; }
  }
  if (!qgId) qgId = await N.findChildPageByTitle(client, parentId, QG_TITLE);
  let created = false;
  if (!qgId) {
    const page = await N.createSubpage(client, parentId, QG_TITLE, '🎮');
    qgId = page.id;
    created = true;
  }
  state.qgPageId = qgId;
  saveState(state);

  // b) vider le contenu existant (idempotence : reconstruction propre)
  const deleted = created ? 0 : await N.clearPageChildren(client, qgId);

  // c) reconstruire
  const blocks = buildBlocks(bases);
  await N.appendChildren(client, qgId, blocks);

  const url = await N.getUrl(client, qgId, 'page');
  report.automated.push(created ? `Page « ${QG_TITLE} » créée.` : `Page « ${QG_TITLE} » mise à jour (${deleted} blocs remplacés).`);
  report.automated.push(`${blocks.length} blocs posés (callouts, titres, séparateurs, listes, tableau, instructions, checklist).`);
  return { qgId, url, created, deleted, blockCount: blocks.length };
}

// ----------------------------------------------------------------------------
// 5) Vérification finale (comptages — lecture seule, aucune modification).
// ----------------------------------------------------------------------------
async function verifyCounts(client, bases) {
  const expect = { Défis: 365, Niveaux: 50, Rangs: 10, Badges: 24, Quêtes: 19 };
  for (const [key, exp] of Object.entries(expect)) {
    if (!bases[key] || !bases[key].id) { report.checks.push({ base: key, attendu: exp, obtenu: '—', ok: false }); continue; }
    try {
      const n = await N.countRows(client, bases[key].id);
      const ok = n === exp;
      report.checks.push({ base: key, attendu: exp, obtenu: n, ok });
      if (!ok) report.errors.push(`${key} : ${n} lignes (attendu ${exp}).`);
    } catch (e) {
      report.checks.push({ base: key, attendu: exp, obtenu: 'erreur', ok: false });
      report.errors.push(`Comptage ${key} impossible : ${e.code || e.message}`);
    }
  }
}

// ----------------------------------------------------------------------------
// Rapport
// ----------------------------------------------------------------------------
function writeReport(bases, dash) {
  const L = [];
  L.push('# Cap365 — Rapport de post-installation Notion', '');
  L.push('> Généré par `./post-install.sh`. Relançable sans doublon. Aucune donnée de défi n\'est modifiée.', '');

  L.push('## 🎮 Tableau de bord');
  L.push(`- Page : **${QG_TITLE}**`);
  if (dash.url) L.push(`- Lien : ${dash.url}`);
  L.push(`- État : ${dash.created ? 'créée' : `mise à jour (${dash.deleted} blocs remplacés)`}`);
  L.push(`- Blocs posés : **${dash.blockCount}**`, '');

  L.push('## ✅ Automatisé (via l\'API)');
  for (const a of report.automated) L.push(`- ${a}`);
  L.push('- Types de blocs posés : callouts, titres (H2), séparateurs, listes à puces, listes numérotées, tableau simple, instructions, checklist (cases à cocher), liens de bases (mentions).', '');

  L.push('## 🔗 Liens vers les 6 bases');
  for (const base of BASES) {
    const b = bases[base.key];
    if (b && b.id) L.push(`- ${b.emoji} **${b.title}** — ${b.url || '(lien indisponible)'}`);
    else L.push(`- ⚠️ **${base.title}** — introuvable (lance \`./run.sh\`).`);
  }
  L.push('');

  L.push('## 🔧 Propriétés vérifiées');
  L.push(`- **Présentes :** ${report.properties.present.length ? report.properties.present.join(', ') : '—'}`);
  L.push(`- **Ajoutées :** ${report.properties.added.length ? report.properties.added.join(', ') : '—'}`);
  if (report.properties.manual.length) {
    L.push('- **À reprendre :**');
    for (const m of report.properties.manual) L.push(`  - ${m}`);
  }
  L.push('');

  L.push('## 🔍 Vérification des comptages (lecture seule)');
  for (const c of report.checks) L.push(`- ${c.ok ? '✅' : '⚠️'} ${c.base} : ${c.obtenu}/${c.attendu}`);
  L.push('');

  L.push('## 🛠️ À finir manuellement (l\'API ne le fait pas)');
  L.push('- **Vues personnalisées** : « Défi du jour » (filtre : premier non validé / date), « Par mois », « À valider ».');
  L.push('- **Galerie de badges** : vue Galerie sur la base Badges.');
  L.push('- **Vue Calendrier** : vue Calendrier sur la base Défis (« Date de validation »).');
  L.push('- **Affichage mobile premium** : réorganiser les vues liées, masquer les colonnes techniques.');
  L.push('- **Radar visuel** des 8 stats : pas de graphe radar natif (barres de progression ou widget).');
  L.push('');

  if (report.errors.length) {
    L.push('## ❌ Erreurs / écarts');
    for (const e of [...new Set(report.errors)]) L.push(`- ${e}`);
    L.push('');
  } else {
    L.push('## ❌ Erreurs / écarts', '- Aucune. 🎉', '');
  }

  L.push('---');
  L.push('> Sécurité : ton token reste uniquement dans `.env`, jamais affiché ni écrit dans ce rapport.');
  fs.writeFileSync(path.join(ROOT, 'POST-INSTALL-NOTION.md'), L.join('\n'));
}

// ----------------------------------------------------------------------------
// Main
// ----------------------------------------------------------------------------
async function main() {
  console.log('\n=== Cap365 · Post-installation Notion (tableau de bord) ===\n');
  const token = process.env.NOTION_TOKEN;
  const parentId = process.env.NOTION_PARENT_PAGE_ID;
  if (!token || !parentId) {
    console.error('❌  NOTION_TOKEN et NOTION_PARENT_PAGE_ID sont requis (même .env que le montage — voir .env.example).');
    process.exit(1);
  }
  const client = N.makeClient(token);

  // Accès page parente
  try { await N.call(() => client.pages.retrieve({ page_id: parentId }), 'retrieve parent'); }
  catch (e) {
    console.error('❌  Impossible d\'accéder à la page parente. Vérifie le token, le partage (••• → Connections) et l\'ID.');
    console.error('    Détail :', e.code || e.message);
    process.exit(1);
  }
  console.log('✅  Accès à la page parente OK.\n');

  const state = loadState();

  console.log('▶  Résolution des 6 bases…');
  const bases = await resolveBases(client, parentId, state);
  for (const base of BASES) console.log(`   ${bases[base.key].id ? '✅' : '⚠️ '} ${base.title}`);

  console.log('\n▶  Vérification des propriétés utiles (add-only)…');
  await verifyProperties(client, bases);
  console.log(`   Présentes : ${report.properties.present.length} · Ajoutées : ${report.properties.added.length} · À reprendre : ${report.properties.manual.length}`);

  console.log('\n▶  Construction du tableau de bord « Quartier Général »…');
  const dash = await buildDashboard(client, parentId, state, bases);
  console.log(`   ${dash.created ? 'Créée' : 'Mise à jour'} · ${dash.blockCount} blocs.`);

  console.log('\n▶  Vérification des comptages (lecture seule)…');
  await verifyCounts(client, bases);
  for (const c of report.checks) console.log(`   ${c.ok ? '✅' : '⚠️ '} ${c.base} : ${c.obtenu}/${c.attendu}`);

  writeReport(bases, dash);
  console.log('\n✅  Terminé.');
  if (dash.url) console.log(`   Tableau de bord : ${dash.url}`);
  console.log('   Rapport : outils/cap365-notion-builder/POST-INSTALL-NOTION.md\n');
}

main().catch((e) => { console.error('\n❌  Erreur fatale :', e.code || e.message); process.exit(1); });
