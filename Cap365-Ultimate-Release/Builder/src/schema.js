'use strict';
const { rt } = require('./notion');

// ---- Couleurs Notion (jeu limité) mappées au kit Cap365 ----
const statColors = { Discipline: 'blue', Courage: 'orange', Vitalité: 'green', Charisme: 'red', Mental: 'purple', Savoir: 'blue', 'Création': 'pink', 'Prospérité': 'brown' };
const rareteColors = { Commun: 'green', Rare: 'blue', 'Épique': 'purple', 'Légendaire': 'orange' };
const statutColors = { 'À venir': 'gray', 'Validé ✓': 'green', 'Grâce ◐': 'yellow', Reprise: 'blue', 'Manqué ○': 'gray' };

const STATS = ['Discipline', 'Courage', 'Vitalité', 'Charisme', 'Mental', 'Savoir', 'Création', 'Prospérité'];

// ---- Config d'une propriété (pour CRÉATION de base) ----
function propConfig(type, colors) {
  switch (type) {
    case 'title': return { title: {} };
    case 'rich_text': return { rich_text: {} };
    case 'number': return { number: { format: 'number' } };
    case 'checkbox': return { checkbox: {} };
    case 'date': return { date: {} };
    case 'select':
      return { select: { options: colors ? Object.entries(colors).map(([name, color]) => ({ name, color })) : [] } };
    default: throw new Error('type inconnu: ' + type);
  }
}

// Construit l'objet "properties" pour créer une base (colonnes + formules).
function dbProperties(def) {
  const props = {};
  for (const [name, type] of Object.entries(def.columns)) {
    props[name] = propConfig(type, def.selectColors && def.selectColors[name]);
  }
  for (const [name, expression] of Object.entries(def.formulas || {})) {
    props[name] = { formula: { expression } };
  }
  return props;
}

// ---- Valeur d'une propriété (pour une LIGNE) ----
function toValue(type, raw) {
  const s = raw == null ? '' : String(raw);
  switch (type) {
    case 'title': return { title: rt(s) };
    case 'rich_text': return { rich_text: rt(s) };
    case 'number': { const n = Number(s.replace(',', '.')); return { number: (s.trim() === '' || Number.isNaN(n)) ? null : n }; }
    case 'select': return { select: s.trim() ? { name: s.trim().slice(0, 100) } : null };
    case 'checkbox': return { checkbox: /^(oui|true|1|x|coch)/i.test(s.trim()) };
    case 'date': return { date: s.trim() ? { start: s.trim() } : null };
    default: return { rich_text: rt(s) };
  }
}

function rowProperties(def, row) {
  const props = {};
  for (const [name, type] of Object.entries(def.columns)) props[name] = toValue(type, row[name]);
  return props;
}

// ---- Formules auto-générées (à partir des CSV) ----
function nestedIf(entries, valueExpr, elseRet) {
  // entries triées par seuil décroissant : [{th, ret}]. ret déjà formaté (nombre ou "chaine").
  const rec = (i) => (i >= entries.length ? elseRet : `if(${valueExpr} >= ${entries[i].th}, ${entries[i].ret}, ${rec(i + 1)})`);
  return rec(0);
}
function rangFormula(rangsRows) {
  const entries = rangsRows
    .map((r) => ({ th: Number(r['XP borne (début)']), ret: `"${Number(r.Rang)} · ${r.Nom}"` }))
    .sort((a, b) => b.th - a.th);
  return nestedIf(entries, 'prop("XP cumulée")', '"1 · Éveil"');
}
function niveauFormula(niveauxRows) {
  const entries = niveauxRows
    .map((r) => ({ th: Number(r['XP cumulée requise']), ret: Number(r.Niveau) }))
    .sort((a, b) => b.th - a.th);
  return nestedIf(entries, 'prop("XP cumulée")', '1');
}

// ---- Formules auto-portantes de la base Défis ----
function ptsStat(stat) {
  return `if(prop("Stat") == "${stat}", if(prop("Difficulté") <= 3, 1, if(prop("Difficulté") <= 6, 2, 3)), 0)`;
}
const defisFormulas = {
  'XP': 'prop("Difficulté") * 10',
  'Points stat': 'if(prop("Difficulté") <= 3, 1, if(prop("Difficulté") <= 6, 2, 3))',
  'XP gagnée': 'if(prop("Validé"), prop("Difficulté") * 10, 0)',
};
for (const s of STATS) defisFormulas[`Pts ${s}`] = ptsStat(s);

// ---- Définitions des bases (hors Profil) ----
const DB_DEFS = [
  {
    key: 'Niveaux', title: 'Cap365 · Niveaux', file: 'notion-niveaux-50.csv', keyProp: 'Niveau', keyType: 'number',
    columns: { 'Titre du niveau': 'title', 'Niveau': 'number', 'Rang': 'number', 'Nom du rang': 'select', 'XP cumulée requise': 'number' },
  },
  {
    key: 'Rangs', title: 'Cap365 · Rangs', file: 'notion-rangs.csv', keyProp: 'Rang', keyType: 'number',
    columns: { 'Nom': 'title', 'Rang': 'number', 'Niveaux': 'rich_text', 'XP borne (début)': 'number', 'Titre porté': 'rich_text', 'Récompense symbolique': 'rich_text' },
  },
  {
    key: 'Badges', title: 'Cap365 · Badges', file: 'notion-badges.csv', keyProp: 'Nom', keyType: 'title',
    columns: { 'Nom': 'title', 'Rareté': 'select', 'Catégorie': 'select', 'Condition de déblocage': 'rich_text', 'Récompense': 'rich_text', 'Débloqué': 'checkbox' },
    selectColors: { 'Rareté': rareteColors },
  },
  {
    key: 'Quêtes', title: 'Cap365 · Quêtes', file: 'notion-quetes.csv', keyProp: 'Nom', keyType: 'title',
    columns: { 'Nom': 'title', 'Type': 'select', 'Objectif': 'rich_text', 'Récompense': 'rich_text', 'Périodicité': 'select', 'État': 'select' },
  },
  {
    key: 'Défis', title: 'Cap365 · Défis 365', file: 'defis-365-import-notion.csv', keyProp: 'Jour', keyType: 'number',
    columns: {
      'Titre': 'title', 'Jour': 'number', 'Mois': 'select', 'Catégorie': 'select', 'Stat': 'select', 'Difficulté': 'number',
      'Temps': 'select', 'Coût': 'select', 'Objectif': 'rich_text', 'Pourquoi': 'rich_text', 'Instructions': 'rich_text',
      'Variante facile': 'rich_text', 'Variante difficile': 'rich_text', 'Récompense': 'rich_text',
      'Statut': 'select', 'Validé': 'checkbox', 'Date de validation': 'date', 'Ressenti': 'rich_text',
    },
    selectColors: { 'Stat': statColors, 'Statut': statutColors },
    formulas: defisFormulas,
  },
];

// ---- Profil (une seule ligne) ----
const PROFIL_DEF = {
  key: 'Profil', title: 'Cap365 · Profil',
  baseProps: {
    'Personnage': { title: {} },
    'Série courante': { number: { format: 'number' } },
    'Meilleure série': { number: { format: 'number' } },
    'Bouclier de série': { number: { format: 'number' } },
  },
  keyProp: 'Personnage', keyType: 'title', keyValue: 'Mon personnage',
  row: {
    'Personnage': { title: rt('Mon personnage') },
    'Série courante': { number: 0 },
    'Meilleure série': { number: 0 },
    'Bouclier de série': { number: 0 },
  },
};

// Nom de la relation synchronisée créée côté Profil.
const RELATION_ON_PROFIL = 'Défis 365';

// Rollups à ajouter sur Profil (après la relation + l'import des défis).
function profilRollups() {
  const roll = {
    'XP cumulée': { rollup: { relation_property_name: RELATION_ON_PROFIL, rollup_property_name: 'XP gagnée', function: 'sum' } },
    'Défis validés': { rollup: { relation_property_name: RELATION_ON_PROFIL, rollup_property_name: 'Validé', function: 'checked' } },
  };
  for (const s of STATS) roll[s] = { rollup: { relation_property_name: RELATION_ON_PROFIL, rollup_property_name: `Pts ${s}`, function: 'sum' } };
  return roll;
}

module.exports = {
  STATS, DB_DEFS, PROFIL_DEF, RELATION_ON_PROFIL,
  dbProperties, rowProperties, propConfig,
  rangFormula, niveauFormula, profilRollups,
};
