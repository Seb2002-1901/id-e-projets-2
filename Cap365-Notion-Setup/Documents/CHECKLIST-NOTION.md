# Cap365 · Checklist Notion

## ✅ Avant de lancer
- [ ] **Node ≥ 18** installé (`node -v`).
- [ ] Intégration Notion **interne** créée → **token** copié.
- [ ] Page Notion « Cap365 » créée et **partagée** avec l'intégration (••• → Connections).
- [ ] **ID de la page** (32 caractères) copié.
- [ ] Fichier **`Builder/.env`** créé et rempli (`NOTION_TOKEN`, `NOTION_PARENT_PAGE_ID`).

## ▶️ Pendant l'exécution
- [ ] `./run.sh` affiche « ✅ Accès à la page parente OK ».
- [ ] Les bases défilent une à une, puis l'import (365 défis…).
- [ ] Le script se termine par « ✅ Terminé ».

## 🔍 Après l'exécution — vérifications dans Notion
- [ ] Les **6 bases** apparaissent dans la page Cap365.
- [ ] **Défis 365 = 365** lignes · **Niveaux = 50** · **Rangs = 10** · **Badges = 24** · **Quêtes = 19** (voir `RAPPORT-NOTION.md`).
- [ ] La base **Défis** a bien les colonnes **XP**, **Points stat**, **XP gagnée**, **Pts <stat>** (formules) et **Validé** (case à cocher).
- [ ] Coche **Validé** sur un défi → sa colonne **XP gagnée** passe à difficulté × 10.
- [ ] Sur **Profil**, **XP cumulée** (rollup) reflète la somme ; **Rang (auto)** / **Niveau (auto)** se calculent.

## 🧪 Test de cohérence (recommandé)
- [ ] Coche **Validé** sur les **jours 1 à 14** de la base Défis.
- [ ] Sur **Profil** : **XP cumulée ≈ 220**, **Niveau (auto) = 1**, **Rang (auto) = 1 · Éveil**.
      *(Correspond au fichier `CSV/test-defis-valides-14j.csv`.)*
- [ ] Décoche-les ensuite si tu veux repartir de zéro.

## 🎨 À finaliser à la main (l'API ne le fait pas)
- [ ] Créer la vue **« Défi du jour »** (filtre : prochain non validé / date).
- [ ] Créer les vues **Calendrier**, **Galerie de badges**, **Par mois**.
- [ ] Construire la **page Dashboard** (vues liées + callouts).
- [ ] Afficher le **radar** des 8 stats (barres, faute de graphe radar natif).
- [ ] Rendre le template **dupliquable** + page **« Crée ton personnage »**.

## 🎮 Tableau de bord — post-installation (`./post-install.sh`)
> À lancer **après** le montage. Utilise le même `.env`. Ne touche pas aux 365 défis. Détails : `POST-INSTALL-MAC.md`.
- [ ] `./post-install.sh` se termine par « ✅ Terminé » et affiche un lien de page.
- [ ] La page **« 🎮 Cap365 — Quartier Général »** apparaît dans la page Cap365.
- [ ] Elle contient les **7 sections** (Défi du jour, Personnage, Progression, Badges, Calendrier, Quêtes, Comment utiliser).
- [ ] Les **liens vers les 6 bases** fonctionnent (clic → ouvre la base).
- [ ] Le **tableau barème XP** et la **checklist de démarrage** sont présents.
- [ ] Le rapport **`POST-INSTALL-NOTION.md`** est généré (0 erreur attendu).
- [ ] Relancer `./post-install.sh` → la page est **reconstruite sans doublon**.

## 🔒 Sécurité
- [ ] Le **token** n'est que dans `Builder/.env` (jamais partagé).
- [ ] (Optionnel) après le montage, tu peux **révoquer/roter** le token sur my-integrations.
