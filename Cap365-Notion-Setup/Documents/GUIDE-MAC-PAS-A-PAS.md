# Cap365 · Montage Notion — Guide Mac pas à pas

> Objectif : monter automatiquement le template Notion de Cap365 en ~10 minutes. Aucune connaissance technique requise — tu copies-colles des commandes.

Hypothèse : tu as **décompressé `Cap365-Notion-Setup` sur ton Bureau**. Le dossier `Builder` est donc à `~/Desktop/Cap365-Notion-Setup/Builder`.

---

## Ce dont tu as besoin
- Un **Mac** avec **Node.js ≥ 18**. Vérifie dans le Terminal : `node -v`. Si absent : `brew install node` (ou télécharge sur nodejs.org).
- Un compte **Notion**.

---

## Étape 1 — Créer ton intégration Notion (2 min)
1. Ouvre **https://www.notion.so/my-integrations**
2. **+ New integration** → Type **Internal** → nom « Cap365 Builder » → **Submit**
3. Copie le **Internal Integration Secret** (commence par `ntn_…`). ➜ ce sera ton **NOTION_TOKEN**.

## Étape 2 — Préparer la page Notion et la partager (2 min)
1. Dans Notion, crée une **page vide** nommée « Cap365 ». Les bases seront créées **dedans**.
2. Sur cette page : **•••** (haut droite) → **Connections** → ajoute **Cap365 Builder**.
   > ⚠️ Sans ce partage, le script n'aura pas accès à la page.
3. **•••** → **Copy link**. Dans l'URL, l'**ID** = les **32 caractères** à la fin (après le dernier `-`). ➜ ce sera ton **NOTION_PARENT_PAGE_ID**.

## Étape 3 — Renseigner tes 2 clés (2 min)
Ouvre le Terminal et colle :
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
cp .env.example .env
open -e .env
```
Dans la fenêtre qui s'ouvre, complète les 2 lignes, puis **enregistre (Cmd+S)** et ferme :
```
NOTION_TOKEN=ntn_colle_ton_secret_ici
NOTION_PARENT_PAGE_ID=colle_les_32_caracteres_ici
```

## Étape 4 — Lancer (1 commande)
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
./run.sh
```
Le script installe ses dépendances (1re fois) puis monte le template. **Durée ~3-5 min** (l'import des 365 défis est volontairement ralenti pour respecter les limites de Notion). Laisse-le finir.

## Étape 5 — Construire le tableau de bord (post-installation)
Une fois l'Étape 4 terminée, lance la **2ᵉ commande** (même `.env`, sans risque pour tes défis) :
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
./post-install.sh
```
Elle crée la page **« 🎮 Cap365 — Quartier Général »** (les 7 sections, les liens vers tes 6 bases, un tableau, une checklist…) et un rapport `POST-INSTALL-NOTION.md`. **Relançable** : elle reconstruit la page sans doublon et **ne modifie jamais tes 365 défis**. Pas-à-pas dédié : `POST-INSTALL-MAC.md`.

## Étape 6 — Version premium du tableau de bord (recommandé)
Pour un rendu « application » (cartes RPG en colonnes, table des matières, toggles, navigation), lance la **3ᵉ commande** (même `.env`, add-only, sans risque) :
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
./post-install-v3.sh
```
Elle **reconstruit la même page** en version premium et génère `POST-INSTALL-V3-REPORT.md` : il liste les **clics exacts restants** pour créer les vues (que l'API Notion ne sait pas créer : ~40 clics, ~12 min) et le **% d'automatisation obtenu**. Relançable à l'identique.

---

## Ce qui se crée tout seul
- **6 bases** dans ta page : Profil, Défis 365, Niveaux, Rangs, Badges, Quêtes.
- Toutes les **propriétés**, **11 formules** (XP, points de stat…), la **relation** Défis↔Profil, les **10 rollups** du Profil, les formules **Rang/Niveau**.
- **Import** : 365 défis + 50 niveaux + 10 rangs + 24 badges + 19 quêtes, et le **profil prérempli**.
- Un **rapport** `RAPPORT-NOTION.md` (créé automatiquement dans le dossier Builder).

## Ce qui reste à faire à la main (limites de l'API Notion — ~30-60 min)
L'API Notion ne crée pas la partie « visuelle ». À faire dans Notion après coup :
- Les **vues** : « Défi du jour », Calendrier, Galerie de badges, « Par mois ».
- La **page Dashboard** (mise en page, vues liées) et un **affichage du radar** des 8 stats (barres).
- La **série courante / bouclier** se tiennent à la main.
- Rendre le template **dupliquable** + page « Crée ton personnage ».
> Le rapport `RAPPORT-NOTION.md` liste précisément ces points.

---

## Si ça bloque
- **« Impossible d'accéder à la page parente »** → tu as oublié de **partager** la page avec l'intégration (Étape 2.2), ou l'ID/token est erroné.
- **`node: command not found`** → installe Node : `brew install node`.
- **`permission denied: ./run.sh`** → lance `chmod +x run.sh` puis relance.
- Détail complet : `Builder/README.md` (section Dépannage).

## Bon à savoir
- **Relançable sans risque** : si tu relances `./run.sh`, rien n'est dupliqué (bases réutilisées, lignes mises à jour).
- **Ton token reste privé** : il est seulement dans `.env` (jamais partagé, jamais dans le code).
- Le dossier **`/CSV`** (au niveau du dossier décompressé) contient les mêmes données que celles importées (les 6 bases), pour référence.
