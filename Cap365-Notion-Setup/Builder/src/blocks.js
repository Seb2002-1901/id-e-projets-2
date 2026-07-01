'use strict';
// Fabriques de blocs Notion (API). Aucune donnée de défi n'est touchée ici.

const txt = (s) => [{ type: 'text', text: { content: String(s) } }];
const bold = (s) => [{ type: 'text', text: { content: String(s) }, annotations: { bold: true } }];

const heading2 = (s) => ({ object: 'block', type: 'heading_2', heading_2: { rich_text: txt(s) } });
const heading3 = (s) => ({ object: 'block', type: 'heading_3', heading_3: { rich_text: txt(s) } });
const paragraph = (s) => ({ object: 'block', type: 'paragraph', paragraph: { rich_text: txt(s) } });
const divider = () => ({ object: 'block', type: 'divider', divider: {} });
const callout = (emoji, s, color = 'gray_background') =>
  ({ object: 'block', type: 'callout', callout: { icon: { type: 'emoji', emoji }, rich_text: txt(s), color } });
const bullet = (s) => ({ object: 'block', type: 'bulleted_list_item', bulleted_list_item: { rich_text: txt(s) } });
const numbered = (s) => ({ object: 'block', type: 'numbered_list_item', numbered_list_item: { rich_text: txt(s) } });
const todo = (s, checked = false) => ({ object: 'block', type: 'to_do', to_do: { rich_text: txt(s), checked } });

// Lien vers une base (mention de database) dans une puce.
const dbBullet = (label, databaseId) => ({
  object: 'block', type: 'bulleted_list_item',
  bulleted_list_item: {
    rich_text: [
      { type: 'text', text: { content: label + ' ' } },
      { type: 'mention', mention: { type: 'database', database: { id: databaseId } } },
    ],
  },
});

// Tableau simple (en-tête + lignes). cells = tableau de chaînes.
const table = (width, headerCells, rows) => {
  const row = (cells) => ({ object: 'block', type: 'table_row', table_row: { cells: cells.map((c) => txt(c)) } });
  return {
    object: 'block', type: 'table',
    table: { table_width: width, has_column_header: true, has_row_header: false, children: [row(headerCells), ...rows.map(row)] },
  };
};

module.exports = { txt, bold, heading2, heading3, paragraph, divider, callout, bullet, numbered, todo, dbBullet, table };
