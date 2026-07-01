#!/usr/bin/env bash
# Cap365 — montage du template Notion en UNE commande.
# Usage :  ./run.sh
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -f .env ]; then
  echo "❌  Fichier .env introuvable."
  echo "    Fais d'abord :  cp .env.example .env   puis renseigne NOTION_TOKEN et NOTION_PARENT_PAGE_ID."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "📦  Installation des dépendances (npm install)…"
  npm install
fi

echo "🚀  Montage du template Notion…"
node src/build.js
