'use strict';
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

// Charge un CSV (colonnes en en-tête) → tableau d'objets. Gère le BOM et les guillemets.
function loadCsv(dir, name) {
  const p = path.join(dir, name);
  const txt = fs.readFileSync(p, 'utf8');
  return parse(txt, { columns: true, skip_empty_lines: true, bom: true, trim: false });
}

module.exports = { loadCsv };
