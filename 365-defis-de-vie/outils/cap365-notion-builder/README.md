# Cap365 — Builder Notion (automatisation maximale)

Monte **automatiquement** le template Notion de Cap365 à partir des CSV du dépôt, via l'**API officielle Notion** (`@notionhq/client`). Ton token reste dans une variable d'environnement — **jamais dans le code, jamais commité**.

> ⚠️ **Ce que l'API Notion permet — et ses limites.** Le script crée les **bases, propriétés, formules, relations, rollups** et **importe toutes les lignes**. Il ne peut **pas** créer les **vues** (Défi du jour, Calendrier, Galerie), la **mise en page du dashboard**, ni un **graphe radar** : ces éléments visuels ne sont pas exposés par l'API et restent manuels (~30-60 min, guide dans `../../production/03-template-notion-final.md`). Le script te le dit précisément dans son rapport.

---

## 1. Ce que le script fait automatiquement
- Crée **6 bases** : `Cap365 · Profil`, `Cap365 · Défis 365`, `Cap365 · Niveaux`, `Cap365 · Rangs`, `Cap365 · Badges`, `Cap365 · Quêtes`.
- Crée **toutes les propriétés** (titre, nombre, select **avec couleurs**, checkbox, date, texte).
- Crée **11 formules** sur Défis : `XP` (= Difficulté×10), `Points stat`, `XP gagnée`, et `Pts <stat>` ×8.
- Crée la **relation** Défis ↔ Profil + les **10 rollups** du Profil (`XP cumulée`, `Défis validés`, 8 stats).
- Crée les **formules Profil** `Rang (auto)` et `Niveau (auto)` (générées depuis les CSV).
- **Importe** : 365 défis · 50 niveaux · 10 rangs · 24 badges · 19 quêtes.
- **Préremplit** le profil joueur (1 ligne « Mon personnage », tout à 0, Rang 1 Éveil).
- **Vérifie** les comptages et **produit un rapport** (`RAPPORT-NOTION.md`).
- **Idempotent** : relançable sans créer de doublons.

---

## 2. Prérequis
- **Node.js ≥ 18** (vérifie : `node -v`). Sinon installe-le : `brew install node`.
- Un compte **Notion**.

---

## 3. Procédure complète (Mac) — étape par étape

### Étape A — Créer ton intégration Notion (2 min)
1. Va sur **https://www.notion.so/my-integrations**.
2. **« + New integration »** → Type **Internal** → nomme-la « Cap365 Builder » → **Submit**.
3. Copie le **Internal Integration Secret** (commence par `ntn_…` ou `secret_…`). C'est ton `NOTION_TOKEN`.

### Étape B — Préparer la page parente et la partager (2 min)
1. Dans Notion, crée (ou choisis) une **page vide**, ex. « Cap365 ». Les bases seront créées **dedans**.
2. Sur cette page : menu **•••** (en haut à droite) → **Connections** (ou « + Add connections ») → sélectionne **Cap365 Builder**. *(Sans ce partage, le script n'a pas accès.)*
3. Récupère l'**ID de la page** : **•••** → **Copy link**. Dans l'URL `https://www.notion.so/…-XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX`, l'ID = les **32 caractères** finaux (avec ou sans tirets). C'est ton `NOTION_PARENT_PAGE_ID`.

### Étape C — Configurer le projet (2 min)
Dans le Terminal :
```bash
cd "chemin/vers/365-defis-de-vie/outils/cap365-notion-builder"
cp .env.example .env
open -e .env        # ou : nano .env
```
Renseigne les deux lignes, puis enregistre :
```
NOTION_TOKEN=ntn_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
NOTION_PARENT_PAGE_ID=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### Étape D — Lancer (1 commande)
```bash
./run.sh
```
(Le script installe les dépendances au 1er lancement puis monte le template. Durée ~3-5 min — l'import des 365 défis est volontairement throttlé pour respecter les limites Notion.)

> Équivalent sans `run.sh` :
> ```bash
> npm install && npm start
> ```

---

## 4. Résultat
- Tes 6 bases apparaissent **dans la page parente**, remplies.
- Un fichier **`RAPPORT-NOTION.md`** liste ce qui a été **créé automatiquement** et ce qui **reste manuel**.
- Un fichier **`.cap365-notion-state.json`** mémorise les IDs (pour l'idempotence). Ne le supprime pas si tu veux relancer proprement.

### Ce qui reste manuel (limites API — indiqué dans le rapport)
- Les **vues** : « Défi du jour », Calendrier, Galerie de badges, « Par mois ».
- La **page Dashboard** (mise en page, vues liées, callouts) et le **radar** des 8 stats.
- La **série courante / bouclier** (logique de série, tenue à la main).
- Rendre le template **dupliquable** + page d'onboarding « Crée ton personnage ».
> Guide pas-à-pas de ces étapes : `../../production/03-template-notion-final.md`.

---

## 5. Idempotence (relançable sans rien casser)
Tu peux relancer **`./run.sh`** autant de fois que tu veux :
- les bases déjà créées sont **réutilisées** (retrouvées par leur titre ou via `.cap365-notion-state.json`) ;
- les lignes sont **mises à jour par clé** (Jour pour les défis, Nom/Rang pour le reste) — **pas de doublons** ;
- les propriétés déjà présentes ne sont **pas recréées**.

---

## 6. Sécurité du token
- Le token est lu **uniquement** depuis `.env` (variable d'environnement). Il n'est **jamais** écrit dans le code, ni affiché, ni commité (`.env` est dans `.gitignore`).
- Bonnes pratiques : intégration **limitée à la seule page** Cap365 ; **révoque/rote** le token après usage si tu le souhaites (my-integrations → ta clé → Delete/Rotate).

---

## 7. Dépannage
| Message | Cause probable | Solution |
|---|---|---|
| `Impossible d'accéder à la page parente` | page non partagée avec l'intégration, mauvais ID, ou mauvais token | refais l'**Étape B** (Connections), vérifie l'ID (32 car.) et le token |
| `unauthorized` / 401 | token invalide | recopie le secret depuis my-integrations |
| `validation_error` sur une formule/rollup | limite/évolution de l'API | le script **continue** et liste l'élément dans le rapport (à créer à la main) ; l'expression de `Niveau` est sauvegardée dans `formule-niveau.txt` |
| Lenteur | throttling volontaire (limite Notion ~3 req/s) | normal ; l'import des 365 défis prend ~2-3 min |
| `MODULE_NOT_FOUND` | dépendances non installées | `npm install` |

---

## 8. Checklist de vérification (après exécution)
- [ ] Les **6 bases** apparaissent dans la page parente.
- [ ] **Défis 365 = 365** lignes · **Niveaux = 50** · **Rangs = 10** · **Badges = 24** · **Quêtes = 19** (voir le rapport).
- [ ] La base **Défis** a les colonnes `XP`, `Points stat`, `XP gagnée`, `Pts <stat>` (formules) et une colonne **Validé** (case).
- [ ] Coche **Validé** sur quelques défis → `XP gagnée` passe à difficulté×10.
- [ ] Sur **Profil**, `XP cumulée` (rollup) reflète la somme des `XP gagnée` cochés ; `Rang (auto)` / `Niveau (auto)` se calculent.
- [ ] Test rapide : coche les **jours 1 à 14** → `XP cumulée` ≈ **220**, `Rang (auto)` = **1 · Éveil**.
- [ ] Lis **`RAPPORT-NOTION.md`** et traite la section « À faire à la main » (vues + dashboard).
- [ ] (Sécurité) token toujours uniquement dans `.env` ; `.env` non commité.

---
*Ce builder n'ajoute aucune fonctionnalité à Cap365 : il monte, dans Notion, exactement les bases/propriétés/formules/données déjà définies dans le dépôt (`pack-production/Notion/*.csv`, `production/03-template-notion-final.md`).*
