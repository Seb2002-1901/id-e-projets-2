# Cap365 V2 — Nouvelle architecture produit & version finale recommandée

> Livrables 3 (nouvelle architecture produit) et 10 (version finale recommandée).
> **Marque recommandée : Cairn** (audit `05` : 8,0/10 vs 5,2/10 pour Cap365), baseline conservée **« 365 Défis de Vie »**, tagline **« Une pierre par jour. Ton chemin, balisé. »** Dans tout le dépôt, « Cap365 » reste le **placeholder** jusqu'au rechercher-remplacer (coût ≈ 0 tant que non lancé).

---

## 1. Le problème d'architecture de la V1

La V1 est un **empilement de documents** (365 défis + gamification + bonus + marketing) **sans colonne vertébrale vécue**. Le client achète un PDF, le lit, et doit **tout faire à la main** : suivre ses XP, calculer ses %, se souvenir de ses séries. Résultat : la promesse « jeu vidéo de la vraie vie » ne se **vit** jamais. L'architecture V2 corrige ça en organisant le produit autour de **l'expérience**, pas du fichier.

---

## 2. Nouvelle architecture produit — les 3 couches

```
┌──────────────────────────────────────────────────────────────────────┐
│  COUCHE 3 · SOCIALE & VIRALE                                           │
│  Wrapped mensuel/annuel · Certificats datés · Badges sociaux ·         │
│  Parrainage · Mur des Légendes · Hashtag de marque                     │
│  → Rôle : transformer chaque utilisateur en preuve vivante (croissance)│
├──────────────────────────────────────────────────────────────────────┤
│  COUCHE 2 · MOTEUR RPG (le cœur vivant)                                │
│  8 stats + RADAR · XP (diff×10) · 50 niveaux / 10 rangs · Badges ·     │
│  Quêtes (jour/semaine/mois/secrètes/boss) · Anti-abandon (série,       │
│  grâce, Bouclier, Filet de Reprise, jalons)                            │
│  → Rôle : rendre la progression AUTOMATIQUE, VISIBLE et ADDICTIVE-SAINE │
├──────────────────────────────────────────────────────────────────────┤
│  COUCHE 1 · CONTENU (le socle)                                         │
│  365 défis (49 remplacés, 0 quantitatif, 0 famille répétée) ·          │
│  difficulté /10 recalibrée · 6 bonus · taggés par stat                 │
│  → Rôle : la matière première de la transformation                     │
└──────────────────────────────────────────────────────────────────────┘
```

**Principe directeur :** la Couche 1 nourrit la Couche 2 (chaque défi validé alimente XP/stats/quêtes/série), qui nourrit la Couche 3 (chaque palier devient partageable). On ne vend plus un fichier : on vend **une boucle**.

---

## 3. Le stack technique (no-code, solo, <14 j, ~0-30 €/mois)

| Brique | Outil | Rôle | Pourquoi |
|---|---|---|---|
| **Cœur interactif** | **Notion** (template dupliquable) | DB des 365 défis, dashboard, formules XP/%/rang, radar, cases de validation, galerie badges | Gratuit, mobile, duplicable en 1 clic, « effet app » sans dev |
| **Visuels** | **Canva** | Cartes de défis, certificats, templates de partage, couverture | Gratuit, templates personnalisables livrables au client |
| **Calcul (option)** | **Google Sheets** | Moteur XP/radar pour les clients « tableur » | Robuste, hors-ligne |
| **Onboarding (option)** | **Tally/Typeform** | « Crée ton personnage » (point de départ + défi-promesse) | Capture email + personnalisation |
| **Livrable de secours** | **PDF cliquable premium** | Version offline, sommaire interactif, cases à cocher | Pour qui ne veut pas de Notion |

> **Décision recommandée :** livrer **PDF premium + template Notion** ensemble. Le PDF rassure (objet « fini »), le Notion fait vivre l'expérience RPG. C'est la combinaison qui maximise la valeur perçue **sans** développement.

---

## 4. Restructuration de la gamme (alignée sur les 3 couches)

| Offre | Prix | Couches incluses | Contenu |
|---|:---:|---|---|
| **Starter — Le Sentier** | **19 €** | C1 | PDF premium des 365 défis corrigés + guide « 7 premiers jours » + calendrier de validation. *(Découverte en autonomie.)* |
| **Premium — L'Ascension** ⭐ | **39 €** | C1 + C2 | Tout Starter **+ template Notion RPG complet** (radar 8 stats, XP, 50 niv/10 rangs, badges, quêtes, anti-abandon) + 6 bonus. *(Le cœur de l'offre.)* |
| **VIP — Le Sommet** | **89 €** | C1 + C2 + C3 | Tout Premium **+ kit de partage/Wrapped + certificats personnalisables + parcours thématiques + accès communauté + mises à jour à vie**. |

**Pourquoi cette structure :** elle fait correspondre **chaque palier de prix à une couche de valeur**. Le client comprend en un coup d'œil ce qu'il gagne en montant. Le Premium (39 €) reste le **best-value** mis en avant : c'est lui qui contient le « passage de PDF à app ».

---

## 5. Le parcours client en V2 (ce qui se vit, jour après jour)

```
JOUR 0   Onboarding « Crée ton héros » → choisis ton point de départ, ton défi-promesse, duplique ton Notion
   │
JOUR 1   Ouvre l'app → 1 carte « Défi du jour » → tu valides → +XP, +1 stat, série = 1 🔥
   │      (animation de validation · le radar bouge · barre de rang se remplit)
   ▼
SEMAINE  Quête hebdo (« 3 défis Courage ») · bonus Équilibre si tu touches les 8 stats · level-up ~chaque semaine
   │
MOIS     Arc thématique + DÉFI-BOSS de fin de mois · RANG-UP (cérémonie) · Wrapped mensuel partageable
   │      (si tu rates : journée de grâce ou Filet de Reprise → badge Phénix, XP jamais perdue)
   ▼
JALONS   J7 / J30 / J90 / J182 (médaille mi-parcours) / J365 (Certificat + défi-signature + carte de l'année)
```

C'est **cette boucle** — et non le PDF — qui constitue le produit. Le radar qui se déforme, le rang qui monte, la série qui brûle : voilà la transformation **rendue visible**.

---

## 6. Version finale recommandée — la fiche produit canonique

> **Cairn — 365 Défis de Vie**
> *« Une pierre par jour. Ton chemin, balisé. »*

- **Ce que c'est :** un **RPG de la vie réelle** sur 365 jours. Chaque jour, un défi concret ; chaque défi validé = **une pierre posée** (XP, stat, série). Ton personnage (radar à 8 stats) évolue de **Éveil** à **Légende** (50 niveaux / 10 rangs) au fil d'une année d'actions réelles.
- **Pour qui :** les 18-35 ans qui stagnent, procrastinent, et ont **déjà abandonné** d'autres programmes. Cairn est conçu **pour** eux : c'est le seul qui transforme l'échec d'un jour en simple « pierre de reprise ».
- **Ce qu'on promet :** un **repère et un chemin** — de la discipline, de la confiance, des compétences et de nouvelles expériences, construites par **tes** actions, **rendues visibles**.
- **Ce qu'on ne promet JAMAIS :** ni richesse, ni bonheur permanent, ni vie parfaite. *On ne te porte pas au sommet, on te montre la voie.* **Honnêteté radicale.**
- **Les 3 mécanismes propriétaires (incarnés, pas juste nommés) :**
  1. **La Courbe d'Inconfort Progressive** — difficulté /10 recalibrée, qualitative (jamais « fais-en plus »), qui durcit jusqu'à une vraie apogée au mois 12.
  2. **Le Filet de Reprise** — anti-abandon : journée de grâce, Bouclier de série, « ne jamais rater deux fois », XP jamais perdue, badge Phénix.
  3. **Le Système de Preuves** — radar de stats, courbe annuelle, certificats datés, Wrapped : tu ne *crois* plus que tu progresses, tu le **vois** et tu le **partages**.
- **La forme :** PDF premium **+ template Notion RPG** (expérience « app sans app »), mobile-first, charte bleu nuit/orange.
- **La gamme :** Le Sentier 19 € · L'Ascension 39 € (⭐) · Le Sommet 89 €.
- **Le moat :** un concurrent peut copier 365 défis ; il ne copie pas vite **un moteur RPG + un anti-abandon incarné + une boucle virale**, ni la métaphore Cairn déjà chargée de sens.

---

## 7. Différences V1 → V2 (récapitulatif décisionnel)

| Dimension | V1 | V2 recommandée |
|---|---|---|
| Nom | Cap365 (5,2/10) | **Cairn** (8,0/10) — migrer avant lancement |
| Forme | PDF statique | PDF premium **+ Notion RPG** |
| Difficulté | 1-5 **et** /10 (incohérent) | **/10 unifié**, qualitative |
| Progression | 10 niveaux (épuisés à mi-année) | **50 niveaux / 10 rangs** (toute l'année) |
| Identité de jeu | 4 piliers flous | **8 stats + radar** de personnage |
| Contenu | ≈ 5,6/10, familles répétées | **≈ 8/10**, 49 défis remplacés, 0 quantitatif |
| Anti-abandon | sur le papier | **incarné** + argument de vente n°1 |
| Partage | inexistant | **Wrapped, certificats, parrainage** |
| Récurrence | one-shot | one-shot **+ chemin vers abonnement/communauté** |

---

## 8. Décision finale (si je devais investir mon argent)

**Oui — mais seulement la V2.** La V1 est un bon manuscrit ; la V2 est un produit. Je financerais exactement ces 14 jours de travail : **réparer le contenu, unifier l'économie, incarner le RPG dans Notion, brancher l'anti-abandon et la viralité, renommer en Cairn avant de communiquer.** C'est le plus court chemin entre « encore un PDF de défis » et **« l'expérience de transformation que les gens montrent à leurs amis »** — et c'est faisable, seul, à petit budget.

> Navigation complète du dossier V2 : voir `README.md`.
