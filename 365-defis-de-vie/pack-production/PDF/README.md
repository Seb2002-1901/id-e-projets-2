# PDF premium — plan d'assemblage

> Le PDF « Le Sentier » (offre 19 €) = version imprimable/téléchargeable des 365 défis. À assembler dans Canva (couverture + gabarits) puis exporter en PDF.

## Structure du PDF (voir `../../05-design-systeme.md`)
1. **Couverture** (1240×1754, A4) — fond dégradé marque + logo (`../Assets/svg/logo/`) + titre « Cap365 — 365 Défis de Vie » + baseline + cairn.
2. **Manifeste / promesse** (1 page) — texte d'ouverture, honnêteté radicale.
3. **Mode d'emploi** (1 page) — comment jouer (1 défi/jour, XP, séries, Filet de Reprise).
4. **Dashboard de départ** (1 page) — « crée ton personnage ».
5. **Les 365 défis** — 1 carte par défi (gabarit = `../Assets/svg/composants/carte-defi.svg`). Contenu : `../../defis/mois-01…12`.
6. **Bilans mensuels** (12 pages) — questions + total XP.
7. **Bonus** — `../../bonus/` (journal, tracker, calendrier de validation, 100 mini-défis, 30 extrêmes, guide discipline).
8. **Certificat de fin** (dernière page) — modèle à dater.

## Assets à utiliser
- Couleurs : `../Assets/tokens/colors.json` · Dégradés : `../Exports/fonds/`
- Logo/favicon : `../Assets/svg/logo/` · Icônes de catégorie/stat : `../Assets/svg/icones/`
- Gabarit de carte : `../Assets/svg/composants/carte-defi.svg`

## Étapes (Canva)
1. Créer un document A4 (1240×1754) multi-pages.
2. Page couverture (dégradé marque + logo + titre).
3. Créer le **gabarit de carte de défi** (à partir de `carte-defi.svg`) → dupliquer pour les 365 (ou grouper par mois).
4. Importer les textes depuis `../Notion/defis-365-import-notion.csv` (colonnes Titre/Catégorie/Objectif/Instructions/Variantes/Récompense).
5. Ajouter bilans + bonus + certificat.
6. **Exporter en PDF** (qualité impression). Temps estimé : ~4-6 h (gabarit + remplissage semi-automatique).

> Astuce : le CSV `../Notion/defis-365-import-notion.csv` contient déjà tout le texte des 365 défis — copier-coller dans les gabarits, pas de rédaction.
