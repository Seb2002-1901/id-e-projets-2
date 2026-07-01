# Guide Notion — Créer ton intégration et récupérer tes 2 clés

> Objectif : obtenir les 2 informations que le Builder te demandera (`NOTION_TOKEN` et `NOTION_PARENT_PAGE_ID`), puis autoriser le script à travailler dans **ta** page Notion. ⏱️ ~3 minutes.

---

## Étape 1 — Créer l'intégration (2 min)
1. Ouvre **https://www.notion.so/my-integrations**.
2. Clique **« + New integration »** → Type **Internal** → nomme‑la « Cap365 Builder » → **Submit**.
3. Copie le **Internal Integration Secret** (il commence par `ntn_…` ou `secret_…`).
   ➜ C'est ton **`NOTION_TOKEN`**. Garde‑le privé (ne le colle nulle part d'autre que dans `Builder/.env`).

## Étape 2 — Préparer la page et la partager (1 min)
1. Dans Notion, crée une **page vide**, par exemple « Cap365 ». Les bases seront créées **dedans**.
2. Sur cette page : menu **•••** (en haut à droite) → **Connections** (ou « + Add connections ») → choisis **Cap365 Builder**.
   > ⚠️ Sans ce partage, le script n'a **pas** accès à la page. C'est l'oubli n°1.
3. Toujours via **•••** → **Copy link**. Dans l'adresse copiée, l'**ID** = les **32 caractères** à la fin (avec ou sans tirets).
   ➜ C'est ton **`NOTION_PARENT_PAGE_ID`**.

## Étape 3 — Lancer le montage
Reprends **[`GUIDE-MAC.md`](./GUIDE-MAC.md)** à partir de l'Étape 3 (coller les 2 clés) puis lance les 3 commandes.

---

## Ce qui se crée automatiquement
- **6 bases** : Profil · Défis 365 · Niveaux · Rangs · Badges · Quêtes.
- Toutes les **propriétés**, les **formules** (XP, points de stat…), la **relation** Défis ↔ Profil, les **rollups** du Profil (XP cumulée, stats), les formules **Rang/Niveau**.
- L'**import** complet : 365 défis, 50 niveaux, 10 rangs, 24 badges, 19 quêtes + le profil.
- Un **tableau de bord premium** (page « Quartier Général »).

## Ce qui reste manuel (limite de l'API Notion)
L'API Notion **ne crée pas les vues** ni la mise en page visuelle. À finaliser à la main (~12 min, guidé clic par clic dans `Builder/POST-INSTALL-V3-REPORT.md`) :
- Vue **« Défi du jour »** (filtre : non validé, tri par jour).
- Vues **Calendrier**, **Galerie de badges**, **Par mois**.
- Insérer ces vues dans la page « Quartier Général » (« /vue liée de base »).

## Détails techniques (facultatif)
- Le mode d'emploi complet du montage est dans **[`../Notion/template-notion-final.md`](../Notion/template-notion-final.md)** et **[`../Builder/README.md`](../Builder/README.md)**.
- Le montage est **idempotent** : tu peux relancer les 3 commandes autant de fois que tu veux, rien n'est dupliqué.

---
🔒 **Sécurité.** Ton token vit uniquement dans `Builder/.env`. Après le montage, tu peux le **révoquer ou le régénérer** sur my‑integrations si tu le souhaites.
