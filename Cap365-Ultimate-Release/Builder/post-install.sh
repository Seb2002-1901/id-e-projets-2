#!/usr/bin/env bash
# Cap365 — POST-INSTALLATION Notion en UNE commande.
# Construit/actualise le tableau de bord « Quartier Général » et vérifie les
# propriétés utiles, SANS toucher aux 365 défis. Relançable sans doublon.
# Usage :  ./post-install.sh
set -euo pipefail
cd "$(dirname "$0")"

if [ ! -f .env ]; then
  echo "❌  Fichier .env introuvable."
  echo "    Utilise le MÊME .env que le montage :  cp .env.example .env"
  echo "    puis renseigne NOTION_TOKEN et NOTION_PARENT_PAGE_ID."
  exit 1
fi

if [ ! -d node_modules ]; then
  echo "📦  Installation des dépendances (npm install)…"
  npm install
fi

echo "🚀  Post-installation Notion (tableau de bord + propriétés)…"
node src/post-install.js
