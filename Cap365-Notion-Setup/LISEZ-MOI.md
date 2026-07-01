# Cap365 · Notion Setup — Commence ici

Tout le nécessaire pour monter **automatiquement** le template Notion de Cap365.

## Que faire ?
👉 Ouvre **`Documents/GUIDE-MAC-PAS-A-PAS.md`** et suis les 4 étapes (~10 min).

En une phrase : tu crées une intégration Notion, tu partages une page, tu colles 2 clés dans `Builder/.env`, tu lances `./run.sh`.

## Contenu du dossier
```
Cap365-Notion-Setup/
├── LISEZ-MOI.md              ← tu es ici
├── CSV/                      ← les données (6 bases + 2 fichiers de test)
├── Builder/                  ← le script qui monte tout (lance Builder/run.sh)
│   ├── run.sh  package.json  package-lock.json  .env.example  README.md
│   ├── src/                  (le code)
│   └── csv/                  (copie des CSV utilisée par le script)
└── Documents/
    ├── GUIDE-MAC-PAS-A-PAS.md   ← le pas-à-pas complet
    ├── COMMANDES-MAC.md         ← les commandes à copier-coller
    └── CHECKLIST-NOTION.md      ← à cocher avant/après
```

## L'essentiel
- **Une seule commande** monte le template : `./run.sh` (depuis `Builder/`).
- **Idempotent** : relançable sans créer de doublons.
- **Token privé** : uniquement dans `Builder/.env`, jamais dans le code.
- **Limite** : l'API Notion crée les bases/données/formules, **pas** les vues ni le dashboard (à finaliser à la main, ~30-60 min — voir le rapport généré).
