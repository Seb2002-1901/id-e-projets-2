# Cap365 · Notion Setup — Commence ici

Tout le nécessaire pour monter **automatiquement** le template Notion de Cap365.

## Que faire ?
👉 Ouvre **`Documents/GUIDE-MAC-PAS-A-PAS.md`** et suis les 4 étapes (~10 min).

En une phrase : tu crées une intégration Notion, tu partages une page, tu colles 2 clés dans `Builder/.env`, tu lances `./run.sh`.

## Contenu du dossier
```
Cap365-Notion-Setup/
├── LISEZ-MOI.md              ← tu es ici
├── CSV/                      ← les données des 6 bases
├── Builder/                  ← le script qui monte tout (lance Builder/run.sh)
│   ├── run.sh  post-install.sh  post-install-v3.sh   ← les 3 commandes
│   ├── package.json  package-lock.json  .env.example  README.md
│   ├── POST-INSTALL-V3-REPORT.md   (rapport de référence, régénéré à chaque run)
│   ├── src/                  (le code)
│   └── csv/                  (copie des CSV utilisée par le script)
└── Documents/
    ├── GUIDE-MAC-PAS-A-PAS.md   ← le pas-à-pas complet
    ├── COMMANDES-MAC.md         ← les commandes à copier-coller
    ├── POST-INSTALL-MAC.md      ← 2ᵉ commande : le tableau de bord
    └── CHECKLIST-NOTION.md      ← à cocher avant/après
```

## L'essentiel
- **3 commandes** (depuis `Builder/`) :
  1. `./run.sh` — monte le template (6 bases + 365 défis).
  2. `./post-install.sh` — construit le tableau de bord « 🎮 Cap365 — Quartier Général ».
  3. `./post-install-v3.sh` — passe ce tableau de bord en **version premium** (cartes RPG en colonnes, toggles, navigation) + rapport `POST-INSTALL-V3-REPORT.md`.
- **Idempotent** : les trois commandes sont relançables sans créer de doublons.
- **Sans risque** : les post-installations **ne modifient jamais tes 365 défis** (elles ajoutent une page + des colonnes manquantes, en add-only).
- **Token privé** : uniquement dans `Builder/.env`, jamais dans le code.
- **Limite** : l'API Notion crée les bases/données/formules **et** la page de dashboard, **pas** les vues ni le radar (à finaliser à la main, ~12 min — les clics exacts sont listés dans `POST-INSTALL-V3-REPORT.md`).
