# Cap365 V2 — Améliorations priorisées, plan de transformation & roadmap 14 jours

> Livrables 2 (liste priorisée), 8 (plan de transformation concret) et 9 (roadmap 14 jours).
> Contrainte respectée : **réalisable par une seule personne, petit budget, en moins de 14 jours de travail**, avec des outils no-code.

---

## 1. Liste priorisée des améliorations (ICE)

Score **ICE** = Impact (1-10) × Confiance (1-10) × Facilité (1-10), normalisé. Priorité = ce qui change le plus le produit pour le moins d'effort.

| # | Amélioration | Impact | Facilité | Priorité | Livrable lié |
|:---:|---|:---:|:---:|:---:|---|
| 1 | **Unifier l'économie de jeu** (difficulté /10, XP = diff×10, 50 niv / 10 rangs) | 9 | 9 | 🔴 P0 | `02-systeme-rpg.md` |
| 2 | **Remplacer les 49 défis faibles** (0 quantitatif, 0 famille répétée) | 9 | 8 | 🔴 P0 | `01-audit-365-defis.md` |
| 3 | **Couche d'expérience interactive** (Notion premium + PDF cliquable) qui calcule XP/% et affiche le radar | 10 | 6 | 🔴 P0 | `04-experience-mobile.md` |
| 4 | **8 stats + radar de personnage** (mapping des 15 catégories) | 8 | 8 | 🟠 P1 | `02-systeme-rpg.md` |
| 5 | **Recalibrer la courbe de difficulté** (remonter M2, durcir M10-12, vraie apogée) | 7 | 9 | 🟠 P1 | `01-audit-365-defis.md` |
| 6 | **Anti-abandon incarné** (Bouclier de série, « jamais rater 2× », jalons, notifs) | 9 | 7 | 🟠 P1 | `03-retention-anti-abandon.md` |
| 7 | **Kit de partage / Wrapped** (cartes mensuelles + certificats + parrainage) | 8 | 6 | 🟠 P1 | `06-viralite.md` |
| 8 | **Repositionner la promesse marketing** sur l'anti-abandon (« pour ceux qui ont toujours abandonné ») | 8 | 9 | 🟠 P1 | `00` + `05` |
| 9 | **Système de quêtes** (hebdo/mensuelles/secrètes/défi-boss) | 7 | 7 | 🟡 P2 | `02-systeme-rpg.md` |
| 10 | **Décision de marque** (garder Cap365 vs renommer) | 6 | 8 | 🟡 P2 | `05-audit-marque-et-noms.md` |
| 11 | **Brique de récurrence** (abonnement léger / communauté) | 8 | 4 | 🟢 P3 | `07-expansion-future.md` |
| 12 | **Gammes thématiques & B2B** | 7 | 3 | 🟢 P3 | `07-expansion-future.md` |

**Règle de séquencement :** on fait **P0 d'abord** (réparer les incohérences + le contenu + l'expérience), car tout le reste s'appuie dessus. P3 ne se lance qu'**après** une première cohorte d'utilisateurs satisfaits.

---

## 2. Plan de transformation concret (le « quoi »)

La V2 transforme Cap365 d'un **document** en une **expérience à 3 couches** :

```
  COUCHE 3 — SOCIALE & VIRALE   →  Wrapped, certificats, badges sociaux, parrainage, communauté
  ────────────────────────────────────────────────────────────────────
  COUCHE 2 — MOTEUR RPG         →  8 stats + radar, XP, 50 niv/10 rangs, badges, quêtes, anti-abandon
  ────────────────────────────────────────────────────────────────────
  COUCHE 1 — CONTENU            →  365 défis corrigés (49 remplacés, 0 quantitatif), difficulté /10 recalibrée
```

- **Couche 1 (Contenu)** : on répare le socle. Sans bons défis, aucun habillage ne sauve le produit.
- **Couche 2 (Moteur RPG)** : on rend la progression **visible et automatique** (l'utilisateur ne calcule plus rien). C'est ce qui fait passer la valeur perçue de « PDF » à « app ».
- **Couche 3 (Social)** : on transforme chaque utilisateur en **preuve vivante** → croissance organique.

**Support technique recommandé (no-code, <14 j, ~0-30 €/mois) :**
- **Notion** = le cœur interactif (bases de données défis, dashboard, formules XP/%, cases à cocher, galeries badges). Duplicable en 1 clic par le client.
- **Canva** = cartes de défis, certificats, templates de partage, couverture PDF.
- **Google Sheets** (option) = moteur de calcul XP/radar pour les clients qui préfèrent un tableur.
- **Tally/Typeform** (option) = onboarding « crée ton personnage ».
> Alternative la plus simple à vendre tout de suite : **PDF cliquable premium** (sommaire interactif, cases à cocher) + **template Notion offert** en bonus. Voir `09-nouvelle-architecture-et-version-finale.md`.

---

## 3. Roadmap d'implémentation — 14 jours (le « comment »)

> Hypothèse : ~5-6 h de travail/jour pour une personne seule. Chaque jour a un **livrable vérifiable**. Aucune dépendance à un développeur.

### Semaine 1 — Réparer le socle & bâtir le moteur

| Jour | Objectif | Tâches | Livrable |
|:---:|---|---|---|
| **J1** | Verrouiller les décisions | Acter : difficulté /10, XP=diff×10, 8 stats, 50 niv/10 rangs, anti-abandon, décision de marque. Lire `00`→`07`. | Doc de décisions figé. |
| **J2** | Réparer le contenu (1/2) | Intégrer les remplacements **mois 1-6** (24 défis) au format carte (instructions, variantes, récompense, XP). | `defis/mois-01..06` corrigés. |
| **J3** | Réparer le contenu (2/2) | Intégrer les remplacements **mois 7-12** (25 défis), recalibrer les difficultés (M2↑, M10-12↑, apogée J365). | `defis/mois-07..12` corrigés. |
| **J4** | Mapper les stats | Taguer **chaque** défi avec sa stat (Discipline/Courage/Vitalité/Charisme/Mental/Savoir/Création/Prospérité) et son gain de points. | Table « défi → stat → XP ». |
| **J5** | Monter le moteur Notion (1/2) | Base de données « 365 défis » + vue « défi du jour » + cases de validation + propriétés XP/difficulté/stat. | Notion : DB défis + dashboard v0. |
| **J6** | Monter le moteur Notion (2/2) | Formules : XP cumulée, niveau/rang, %année/%niveau, série, **radar 8 stats** (jauges). Écran personnage. | Dashboard XP/rang/radar fonctionnel. |
| **J7** | Anti-abandon | Implémenter série + journée de grâce + Bouclier + vue « jour sans / reprise » + jalons J7/30/90/182/365. **Test bout-en-bout sur 10 jours fictifs.** | Système anti-abandon testé. |

### Semaine 2 — Habillage premium, viralité & mise en vente

| Jour | Objectif | Tâches | Livrable |
|:---:|---|---|---|
| **J8** | Design system | Appliquer la charte (#1B2A4A / #F5A623), typos, icônes par stat ; gabarit **carte de défi** dans Canva. | Kit visuel + template carte. |
| **J9** | Badges & quêtes | Créer la galerie des ~24 badges (4 raretés) + quêtes hebdo/mensuelles + défis-boss de fin de mois dans Notion. | Galerie badges + quêtes. |
| **J10** | Récompenses & certificats | Certificat de transformation (J365), sceaux de stat, **carte de l'année**, titres de rang — templates Canva personnalisables. | Pack récompenses. |
| **J11** | Kit de partage / Wrapped | Templates « Wrapped mensuel » + badges sociaux + 3 légendes pré-écrites + hashtag + mécanique de parrainage. | Kit viralité prêt. |
| **J12** | Onboarding « crée ton personnage » | Page d'accueil produit : choisir son point de départ, son défi-promesse, dupliquer le Notion. Guide « 7 premiers jours ». | Onboarding + guide. |
| **J13** | Mettre à jour l'offre & le tunnel | Réécrire pages/produit/emails sur l'angle **anti-abandon + RPG** ; intégrer le template Notion comme valeur ; ancrer la gamme 19/39/89 €. | Tunnel V2 à jour. |
| **J14** | QA, cohérence & lancement | Relire l'ensemble (cohérence XP, 0 promesse interdite, liens), tester le parcours client, packager les livrables, **publier**. | Produit V2 en vente. |

### Jalons de contrôle
- **Fin J3** : contenu réparé (0 défi quantitatif, 0 famille répétée 3×).
- **Fin J7** : moteur RPG + anti-abandon fonctionnels et testés.
- **Fin J11** : couche sociale prête.
- **Fin J14** : V2 vendable, expérience « app sans app ».

---

## 4. Ce qu'on NE fait PAS dans les 14 jours (et pourquoi)

- ❌ **Appli mobile native** : coût/délai incompatibles solo. Notion/PDF interactif donne 80 % de l'effet pour 5 % du coût. → Plus tard (`07`).
- ❌ **Communauté/abonnement** : à lancer **après** une 1ʳᵉ cohorte satisfaite, sinon on disperse l'énergie. → P3.
- ❌ **Renommage complet** si le coût dépasse le gain immédiat : décision tranchée dans `05`, exécutable en rechercher-remplacer quand on le décide.

> Suite : la version finale recommandée et la nouvelle architecture produit → `09-nouvelle-architecture-et-version-finale.md`.
