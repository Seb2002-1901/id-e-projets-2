# Cap365 — Rapport de post-installation V3

> Généré par `./post-install-v3.sh`. Add-only, idempotent. Aucune donnée de défi modifiée.

**Tableau de bord :** 🎮 Cap365 — Quartier Général — https://notion.so/qg-new-page
**État :** créé · 13 sections.

## SECTION 1 — Actions réalisées automatiquement
- Page « 🎮 Cap365 — Quartier Général » créée.
- 13 sections posées : header, cards, personnage, defi, progression, badges, quetes, calendrier, parametres, guide, navigation, vues, footer.
- Blocs premium : table des matières, cartes RPG en colonnes, callouts colorés, tableau, toggles, checklists, liens de bases.
- Propriétés vérifiées présentes : 9 · ajoutées : 0.
- Liens (mentions) vers les 6 bases posés dans la navigation et les sections.

## SECTION 2 — Éléments impossibles via l'API Notion
- **Vues filtrées** (« Défi du jour » : Validé ≠ vrai, tri Jour) — non exposé par l'API.
- **Vue Galerie** (Badges, Quêtes) — non exposé par l'API.
- **Vue Calendrier** (Défis / Date de validation) — non exposé par l'API.
- **Vues liées configurées** (colonnes visibles, filtres) insérées dans la page — non exposé par l'API.
- **Valeurs live dans les cartes RPG** (rollups affichés comme texte) — l'API ne peut pas injecter une valeur calculée dans un bloc ; les cartes pointent vers la fiche Personnage.

## SECTION 3 — Nombre de clics manuels restants
| Tâche | Clics |
|---|---|
| Vue « Défi du jour » (base Défis 365) | 8 |
| Vue Galerie « Badges » | 4 |
| Vue Galerie « Quêtes » | 4 |
| Vue « Calendrier » (base Défis 365) | 4 |
| Insérer les 5 vues liées dans le Quartier Général | 20 |
| **Total** | **40** |

## SECTION 4 — Instructions exactes étape par étape
### 1. Vue « Défi du jour » (base Défis 365) (8 clics)
1. Ouvre la base « Cap365 · Défis 365 ».
2. Clique « + » (nouvelle vue) → choisis « Table » → nomme-la « Défi du jour ».
3. Filtre : « Validé » → « Décoché » (Validé ≠ vrai).
4. Tri : « Jour » → Croissant.
5. Masque les colonnes superflues (garde Jour, Titre, Difficulté, XP, Validé).

### 2. Vue Galerie « Badges » (4 clics)
1. Ouvre « Cap365 · Badges ».
2. Nouvelle vue → « Galerie ».
3. Carte : image/emoji ; sous-titre : Rareté.
4. Nomme-la « Galerie de badges ».

### 3. Vue Galerie « Quêtes » (4 clics)
1. Ouvre « Cap365 · Quêtes ».
2. Nouvelle vue → « Galerie ».
3. Groupe par « Type » si tu veux.
4. Nomme-la « Quêtes ».

### 4. Vue « Calendrier » (base Défis 365) (4 clics)
1. Ouvre « Cap365 · Défis 365 ».
2. Nouvelle vue → « Calendrier ».
3. Base de date : « Date de validation ».
4. Nomme-la « Calendrier ».

### 5. Insérer les 5 vues liées dans le Quartier Général (20 clics)
1. Sur la page « 🎮 Cap365 — Quartier Général », sous chaque section concernée, tape « /vue liée de base ».
2. Choisis la base, puis la vue créée ci-dessus (Défi du jour, Personnage, Galerie badges, Quêtes, Calendrier).
3. Répète pour les 5 sections (≈ 4 clics chacune).

## SECTION 5 — Validation finale
- ✅ Défis : 365/365
- ✅ Niveaux : 50/50
- ✅ Rangs : 10/10
- ✅ Badges : 24/24
- ✅ Quêtes : 19/19

## SECTION 6 — Évaluation de complétude
- **Automatisation obtenue : ~85 %** (structure, contenu, navigation, cartes, tableaux, checklists, propriétés).
- **Temps manuel restant estimé : ~12 minutes** (40 clics — création des vues, non automatisable).
- Répartition : contenu & mise en page **100 % automatisés** ; vues & finitions visuelles **manuelles** (limite Notion).

---
> Sécurité : le token reste uniquement dans `.env`, jamais affiché ni écrit dans ce rapport.