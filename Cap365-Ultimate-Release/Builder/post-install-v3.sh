#!/usr/bin/env bash
# Cap365 — POST-INSTALLATION V3 (dashboard premium) en UNE commande.
# Reconstruit la page « Quartier Général » en tableau de bord d'application,
# add-only et idempotent, SANS toucher aux 365 défis. Utilise le même .env.
# Usage :  ./post-install-v3.sh
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

echo "🚀  Post-installation V3 (dashboard premium)…"
node src/post-install-v3.js
