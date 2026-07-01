# Cap365 — Captures à produire + Brief Canva

> **Marque mère : Cairn** (pierre, sentier, cap) · **Produit : Cap365 — 365 Défis de Vie**
> Slogan : *« Un défi par jour. Une version de toi par an. »*
>
> **But du document.** Fournir les **8 captures d'écran** à fabriquer pour la page de vente (et les emails) de Cap365, avec pour chacune : objectif marketing, maquette ASCII (cadre mobile) et **brief Canva ultra précis** (dimensions, grille, fonds, blocs, composants, données d'exemple, hex, polices, tailles, icônes, ombres, rayons). Objectif : **qu'un opérateur reproduise chaque visuel sans réfléchir**, et que l'ensemble donne l'impression d'une **application premium de progression personnelle**.
>
> Reprend les dispositions de `experience/02-ecrans-et-templates.md`. Cohérent avec le canon RPG V2.

---

## 0. Charte & canon appliqués (référence unique à copier dans Canva)

### 0.1 Palette de marque — hex exacts

| Rôle | Nom | HEX | Usage sur les captures |
|---|---|---|---|
| 🔵 Primaire | Bleu nuit | `#1B2A4A` | en-têtes, texte fort, blocs sombres, remplissage radar, dark mode |
| 🔷 Secondaire | Bleu | `#2E5EAA` | sous-titres, étiquettes, filets, liens |
| 🟠 Accent | Orange | `#F5A623` | **action uniquement** : XP, boutons, jauges qui progressent, jalons, série |
| 🟢 Succès | Vert | `#2EC27E` | validation, cases ✓, série en cours, jauges remplies |
| ⬜ Neutre clair | Gris-bleu | `#8A93A2` | texte secondaire, états inactifs, cases vides, verrouillé |
| 🤍 Fond | Blanc cassé | `#F7F8FA` | fond général de tous les écrans (jamais de blanc pur en grande surface) |
| ⚪ Blanc | Blanc pur | `#FFFFFF` | cartes posées sur le fond, texte sur bloc primaire |
| 🖤 Fond dark | Bleu très sombre | `#0F1A30` | option dark mode (fond) |

**Couleurs des 8 axes (puce de stat, radar, barres) :**

| Stat | Icône | HEX axe |
|---|:--:|---|
| Discipline | ⚙ | `#1B2A4A` |
| Courage | ⚑ | `#F5A623` |
| Vitalité | ❤ | `#2EC27E` |
| Charisme | ✦ | `#F7B955` |
| Mental | ◇ | `#2E5EAA` |
| Savoir | ✎ | `#3D4C8A` |
| Création | ✺ | `#B5548A` |
| Prospérité | ◈ | `#C79A3A` |

**Raretés badges :** 🟢 Commun `#2EC27E` · 🔵 Rare `#2E5EAA` · 🟣 Épique `#8B5CF6` · 🟠 Légendaire `#F5A623`.

### 0.2 Typographie (polices Canva)

| Rôle | Police | Taille de référence (sur cadre 1080 px de large) | Casse / graisse |
|---|---|---|---|
| Titres d'écran (header) | **Sora** ou **Poppins** SemiBold | 40–48 px | Sentence, tracking 0 |
| Grands chiffres (XP, niveau, %) | **Sora** Bold / Poppins Bold | 64–120 px | tabular, tracking −1 |
| Titres de cartes / H3 | Poppins SemiBold | 30–36 px | Sentence |
| Étiquettes / puces stat | Poppins Bold | 20–24 px | **MAJUSCULES**, tracking +8 % |
| Corps / instructions | **Inter** Regular | 26–30 px | Sentence, interligne 1,4 |
| Légendes / méta | Inter Medium | 20–24 px | `#8A93A2` |

> Sur un cadre 1080 px de large, multiplier les tailles « écran 390 px » par ≈ 2,77. Les tailles ci-dessus sont déjà exprimées **pour le cadre 1080 px** (prêtes à saisir dans Canva).

### 0.3 Formes, ombres, rayons (à appliquer identiquement partout)

- **Rayons de coin** : carte 44 px · bouton 34 px · pastille/puce 22 px · vignette badge 40 px · case calendrier 6 px. (≈ 16 / 12 / 8 / 14 / 2 px à l'échelle écran ×2,77.)
- **Ombre douce standard** (toutes les cartes) : couleur `#1B2A4A`, **opacité 12 %**, flou **44 px**, décalage **Y +11 px**, X 0. (Canva : *Effets → Ombre → Personnaliser*.)
- **Ombre héros** (carte défi du jour uniquement) : opacité 16 %, flou 60 px, Y +16 px.
- **Icônes** : famille outline arrondi unique (Lucide / Feather / Phosphor), trait 2,5 px constant, couleur `#1B2A4A` par défaut, `#F5A623` si actif.
- **Barre de statut simulée** (haut du cadre) : heure « 9:41 », signal/wifi/batterie 100 %, couleur selon fond (sombre sur fond clair, blanc sur bloc sombre). Hauteur 60 px.
- **Tab bar** (bas) : hauteur 150 px, fond `#FFFFFF`, filet supérieur `#8A93A2` 8 %, 5 onglets ; onglet actif = pictogramme `#F5A623` + label `#1B2A4A`, inactifs `#8A93A2`.

### 0.4 Réglages Canva communs

- **Format mobile portrait** : `1080 × 1920 px` (toutes les captures 1 à 7 en mockup story vertical) — laisser une marge de sécurité de 48 px partout.
- **Format story Wrapped** (capture 8) : `1080 × 1920 px`.
- **Grille** : colonne unique, marge latérale 48 px, gouttière interne 32 px, rythme vertical par pas de 8 px.
- **Fond général** : rectangle plein `#F7F8FA` sur toute la planche (jamais laisser le damier transparent).
- **Cadre d'appareil** (mockup premium) : optionnel — insérer un smartphone Canva (bezel fin noir) autour de l'écran 1080×1920 pour les visuels « héros » de la page de vente. Garder aussi une version **sans cadre** (plein écran) pour les carrousels.

---

## Capture 1 — Écran d'accueil / Dashboard

### (a) Objectif marketing
Première capture « héros » de la page de vente : prouver en un coup d'œil que l'app **dit quoi faire aujourd'hui** (le défi unique) et **montre qu'on progresse** (série 🔥 47, Niv 18 · Constant, jauge d'année). C'est la promesse « zéro paralysie de choix » rendue visible. Usage : bloc au-dessus de la ligne de flottaison + email de bienvenue.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │  status bar
│─────────────────────────────────│
│  Cap365        🔥 47   ◐ Niv 18 │  A header (série · niveau)
│                        Constant │
│─────────────────────────────────│
│  Salut, Sébastien. Jour 168/365 │  B salutation + jour
│  ████████████████░░░░░░░  46 %  │     mini-jauge année (orange)
│─────────────────────────────────│
│  ⚑ QUÊTE DU JOUR      diff 7/10 │  C carte héros (blanche)
│  ┌───────────────────────────┐  │
│  │ ⚑ COURAGE · Confiance     │  │     puce stat orange
│  │ « Appelle quelqu'un que   │  │     titre du défi
│  │   tu évites depuis trop   │  │
│  │   longtemps. »            │  │
│  │ ●●●●●●●○○○                 │  │     jauge difficulté 7/10
│  │ +70 XP · +3 ⚑ · 🔥 +20 XP │  │     gains
│  │ [  ✔  RELEVER LE DÉFI  ]  │  │     CTA orange plein
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  TES QUÊTES         ‹ ● ○ ○ ›   │  D carrousel quêtes
│  ┌──────────┐ ┌──────────┐      │
│  │HEBDO     │ │MOIS·BOSS │  →   │
│  │2/3 ≥ d6  │ │J-4  ◈    │      │
│  │███░ +100 │ │████░ +300│      │
│  └──────────┘ └──────────┘      │
│─────────────────────────────────│
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐    │  E raccourcis ×4
│  │ 📊 │ │ 🗓 │ │ 🎖 │ │ 🏅 │    │
│  │Héros│ │365 │ │Trop│ │Récp│   │
│  └────┘ └────┘ └────┘ └────┘    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │  F tab bar (Accueil actif)
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px. Fond planche `#F7F8FA`. Marges latérales 48 px.
- **Status bar (0→60 px Y)** : heure `9:41` Inter SemiBold 26 px `#1B2A4A` à gauche ; icônes signal/wifi/batterie à droite `#1B2A4A`.
- **A · Header (Y 60→230)** : logo-wordmark « Cap365 » Sora SemiBold 40 px `#1B2A4A` à gauche. À droite, deux pastilles (rayon 22, fond `#FFFFFF`, ombre standard, hauteur 68 px) :
  - Pastille série : `🔥 47` — chiffre Sora Bold 34 px `#F5A623`, flamme en emoji ou icône flamme `#F5A623`.
  - Pastille niveau : `◐ Niv 18` Poppins SemiBold 28 px `#1B2A4A` + sous-ligne `Constant` Inter Medium 20 px `#8A93A2`.
- **B · Salutation (Y 250→400)** : « Salut, Sébastien. » Sora SemiBold 44 px `#1B2A4A` à gauche ; « Jour 168 / 365 » Inter Medium 26 px `#8A93A2` aligné à droite sur la même ligne de base. En dessous, **jauge fine année** : rectangle 984 × 16 px, rayon plein, fond `#8A93A2` à 15 %, remplissage `#F5A623` sur **46 %** de la largeur, label `46 %` Inter SemiBold 22 px `#F5A623` à droite.
- **C · Carte défi du jour (Y 430→1080)** — HÉROS :
  - Rectangle 984 px de large, `#FFFFFF`, rayon 44, **ombre héros**.
  - En-tête interne : puce stat `⚑ COURAGE · Confiance en soi` — pastille rayon 22, fond `#F5A623`, texte `#FFFFFF` Poppins Bold 22 px MAJ tracking +8 %, icône drapeau outline blanc ; à droite `diff 7/10` Inter Medium 24 px `#8A93A2`.
  - Titre : « Appelle quelqu'un que tu évites depuis trop longtemps. » Poppins SemiBold 40 px `#1B2A4A`, interligne 1,25, sur 3 lignes max.
  - Jauge difficulté : 10 puces rondes ⌀ 34 px, gouttière 12 px ; **7 pleines** `#F5A623`, **3 vides** `#8A93A2` à 25 %.
  - Ligne de gains : `+70 XP` Sora Bold 30 px `#F5A623` · `+3 ⚑` Poppins SemiBold 26 px `#F5A623` · `🔥 +20 XP` 26 px `#F5A623`, séparés par des points médians `#8A93A2`.
  - **CTA** : bouton 984 px large × 132 px, fond `#F5A623`, rayon 34, ombre douce, texte « ✔  RELEVER LE DÉFI » Poppins Bold 32 px `#FFFFFF` MAJ, icône check blanc à gauche.
- **D · Carrousel quêtes (Y 1110→1420)** : titre « TES QUÊTES » Poppins Bold 24 px `#1B2A4A` MAJ tracking +8 % ; dots pagination `‹ ● ○ ○ ›` à droite (actif `#F5A623`, inactifs `#8A93A2` 30 %). Deux cartes 464 × 260 px, `#FFFFFF`, rayon 44, ombre standard :
  - **HEBDO** : label Poppins Bold 22 px `#2E5EAA` ; « 2/3 ≥ d6 » Inter Medium 24 px `#8A93A2` ; jauge 400×14 remplie `#F5A623` à 66 % ; prime `+100 XP` Sora Bold 26 px `#F5A623`.
  - **MOIS · BOSS** : label `#B5548A` ; « J-4 » + icône ◈ ; jauge à 80 % `#F5A623` ; prime `+300 XP`.
- **E · Raccourcis (Y 1450→1690)** : 4 tuiles carrées 220 × 220 px, `#FFFFFF`, rayon 40, ombre standard, gouttière 32 px. Icône outline centrée 64 px `#1B2A4A` (📊 héros, 🗓 calendrier, 🎖 trophées, 🏅 récompenses) + label Inter SemiBold 22 px `#1B2A4A` : « Héros », « 365 », « Trophées », « Récomp. ».
- **F · Tab bar (Y 1770→1920)** : voir §0.3. Onglet **Accueil** actif (pictogramme maison `#F5A623`, label `#1B2A4A`), 4 autres `#8A93A2`.
- **Données à afficher** : Jour 168/365 · 46 % année · série 47 🔥 · Niv 18 · Constant · défi Courage diff 7/10 · +70 XP · Hebdo 2/3 · BOSS J-4.

---

## Capture 2 — Défi du jour (carte)

### (a) Objectif marketing
Montrer l'écran d'action : un défi clair, gratifiant, **relevable** (variantes plus doux / plus fort), avec la preuve du gain (+70 XP, +3 ⚑). Sert à répondre à l'objection « c'est trop dur / trop flou » et à vendre le geste quotidien. Usage : bloc « Comment ça marche », étape 2 du tunnel.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  ‹ retour   Jour 168/365        │  A header
│             ●●●●●●●○○○  7/10     │
│─────────────────────────────────│
│  ┌───────────────────────────┐  │  B bandeau stat (orange)
│  │ ⚑  COURAGE · Confiance    │  │
│  └───────────────────────────┘  │
│                                 │
│  Appelle quelqu'un que tu       │  C titre (gros)
│  évites depuis trop longtemps.  │
│                                 │
│  ┌───────┬─────────┬─────────┐  │  D méta-rangée
│  │ DIFF  │  GAIN   │  STAT   │  │
│  │ 7/10  │ +70 XP  │  +3 ⚑   │  │
│  └───────┴─────────┴─────────┘  │
│                                 │
│  Comment faire :                │  E instructions
│  Choisis la personne, pas le    │
│  moment parfait. Compose,       │
│  respire, dis l'essentiel.      │
│                                 │
│  Adapter le défi :              │  F variantes
│  (🟢 Plus doux)(⚪ Standard)     │
│  (🟠 Plus fort  +20 XP)         │
│                                 │
│  💬 « Le courage, c'est agir    │  G micro-coaching
│     avant d'être prêt. »        │
│─────────────────────────────────│
│  [   ✔   JE L'AI FAIT   ]       │  H CTA sticky
│  [   Reporter à ce soir   ]     │
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`, marges 48 px.
- **A · Header (Y 60→260)** : flèche « ‹ » retour Poppins 40 px `#1B2A4A` à gauche ; « Jour 168 / 365 » Poppins SemiBold 30 px `#1B2A4A` centré. Sous le titre, **jauge difficulté** : 10 puces ⌀ 30 px, 7 pleines `#F5A623` + 3 vides `#8A93A2` 25 %, suivi de `7/10` Inter SemiBold 24 px `#8A93A2`.
- **B · Bandeau stat (Y 290→400)** : rectangle pleine largeur 984 px, fond `#F5A623`, rayon 34, hauteur 96 px, ombre standard. Texte « ⚑  COURAGE · Confiance en soi » Poppins Bold 28 px `#FFFFFF` MAJ tracking +8 %, icône drapeau outline blanc à gauche.
- **C · Titre (Y 440→640)** : « Appelle quelqu'un que tu évites depuis trop longtemps. » **Sora Bold 52 px** `#1B2A4A`, interligne 1,2, gauche.
- **D · Méta-rangée (Y 680→860)** : carte `#FFFFFF` 984 px, rayon 44, ombre standard, divisée en 3 colonnes égales séparées par filets `#8A93A2` 15 % :
  - DIFF · `7/10` — label Poppins Bold 20 px `#8A93A2` MAJ ; valeur Sora Bold 40 px `#1B2A4A`.
  - GAIN · `+70 XP` — valeur Sora Bold 40 px `#F5A623`.
  - STAT · `+3 ⚑` — valeur Sora Bold 40 px `#F5A623` + icône drapeau.
- **E · Instructions (Y 900→1180)** : titre « Comment faire : » Poppins SemiBold 30 px `#1B2A4A` ; corps « Choisis la personne, pas le moment parfait. Compose, respire, dis l'essentiel. » Inter Regular 28 px `#1B2A4A` interligne 1,4.
- **F · Variantes (Y 1220→1480)** : titre « Adapter le défi : » Poppins SemiBold 30 px `#1B2A4A`. Trois pastilles rayon 22, hauteur 84 px, gouttière 20 px :
  - `🟢 Plus doux` — contour `#2EC27E` 3 px, texte `#2EC27E` Poppins SemiBold 26 px, fond transparent.
  - `⚪ Standard` — **sélectionnée** : fond `#1B2A4A`, texte `#FFFFFF`.
  - `🟠 Plus fort · +20 XP` — contour `#F5A623` 3 px, texte `#F5A623`.
- **G · Micro-coaching (Y 1500→1640)** : bloc `#FFFFFF` léger (rayon 34) ou simple ligne : « 💬 “Le courage, c'est agir avant d'être prêt.” » Inter **Italic** 28 px `#2E5EAA`.
- **H · Zone d'action sticky (Y 1660→1920)** : sur un rectangle blanc dégradé vers `#F7F8FA` (effet sticky). CTA primaire 984 × 132 px `#F5A623` rayon 34, « ✔  JE L'AI FAIT » Poppins Bold 34 px `#FFFFFF`. Sous lui, bouton secondaire 984 × 100 px, contour `#1B2A4A` 3 px, fond transparent, « Reporter à ce soir » Poppins SemiBold 28 px `#1B2A4A`.
- **Données** : Jour 168/365 · diff 7/10 · Courage · +70 XP · +3 ⚑ · variante Standard active · +20 XP en Plus fort.

---

## Capture 3 — Radar de progression (8 stats)

### (a) Objectif marketing
Le visuel **signature** : la silhouette octogonale « ton héros », preuve que l'app transforme des efforts en profil mesurable et unique. Fort pouvoir de conversion (les gens veulent voir leur radar). Usage : bloc « Deviens le héros de ta vie » + carrousel réseaux.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MON HÉROS          Rang 4 · ⚓  │  A header
│  « le·la Constant·e »           │
│─────────────────────────────────│
│              ⚙ 82               │  B radar 8 axes
│            ╱   │   ╲             │
│      ◈ 41 ╱    │    ╲ ⚑ 68       │
│         ╱   ◢█████◣   ╲          │
│  ✺ 55 ●──── ███████ ────● ❤ 90  │     zone pleine = bleu nuit
│         ╲   ◥█████◤   ╱          │
│      ✎ 73 ╲    │    ╱ ✦ 38       │
│            ╲   │   ╱             │
│              ◇ 60               │
│─────────────────────────────────│
│  [ ◷ Comparer au mois dernier ] │
│─────────────────────────────────│
│  Fort en ❤ Vitalité & ⚙ Discip. │  C lecture
│  En retrait : ✦ Charisme (38)   │
│─────────────────────────────────│
│  XP totale 6 240 · Défis 152    │  F totaux
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`. **Option premium recommandée : dark mode** — fond `#0F1A30`, le radar orange ressort magnifiquement. (Produire les deux versions.)
- **A · Header (Y 60→280)** : « MON HÉROS » Sora SemiBold 44 px `#1B2A4A` (ou `#F2F5FA` en dark). À droite, pastille « Rang 4 · ⚓ » Poppins SemiBold 28 px `#1B2A4A`. Sous-ligne « “le·la Constant·e” » Inter Italic 26 px `#8A93A2`.
- **B · Radar octogonal (Y 320→1160)** — pièce maîtresse, ⌀ ≈ 840 px centré :
  - Grille : 4 anneaux octogonaux concentriques (25/50/75/100 %), trait `#8A93A2` 20 %, 1,5 px. 8 axes radiaux même trait.
  - **Labels des 8 axes** (à leur pointe, ordre horaire depuis le haut) : `⚙ 82` (Discipline, haut), `⚑ 68` (Courage), `✦ 38` (Charisme), `◇ 60` (Mental, bas), `✎ 73` (Savoir), `✺ 55` (Création), `◈ 41` (Prospérité), `❤ 90` (Vitalité). Chaque label = icône `#couleur d'axe` + valeur Sora Bold 30 px de la couleur d'axe.
  - **Silhouette** : polygone reliant les 8 valeurs (0 centre → 100 pointe), rempli `#1B2A4A` à **20 % d'opacité**, **contour `#F5A623` 4 px**, points de sommet ⌀ 14 px `#F5A623`.
  - En dark mode, la silhouette peut passer en dégradé `#F5A623 → #2EC27E` à 25 %.
- **Bouton comparer (Y 1200→1300)** : pastille pleine largeur contour `#2E5EAA` 3 px, « ◷ Comparer au mois dernier » Poppins SemiBold 28 px `#2E5EAA`, fond transparent, rayon 34.
- **C · Lecture du radar (Y 1340→1560)** : carte `#FFFFFF` (ou `#1B2A4A` en dark), rayon 44, ombre standard. Ligne 1 « Fort en ❤ Vitalité & ⚙ Discipline » Poppins SemiBold 30 px `#1B2A4A` (points forts). Ligne 2 « En retrait : ✦ Charisme (38) » Inter Regular 28 px `#8A93A2` — **ton bienveillant, jamais de jugement**.
- **F · Totaux (Y 1600→1760)** : bande discrète « XP totale **6 240** · Défis validés **152** · Stat dominante ❤ Vitalité » — chiffres Sora Bold 32 px `#F5A623`, labels Inter Medium 24 px `#8A93A2`.
- **Données** : Discipline 82 · Courage 68 · Vitalité 90 · Charisme 38 · Mental 60 · Savoir 73 · Création 55 · Prospérité 41 · XP totale 6 240 · 152 défis · Rang 4 Constant.

---

## Capture 4 — Statistiques (détail par stat)

### (a) Objectif marketing
Le complément « data » du radar : barres triées, tendances ↑, invitation bienveillante à nourrir l'axe en retrait. Prouve la **précision et l'intelligence** du système (pas un compteur creux). Usage : bloc « Un suivi précis, jamais culpabilisant ».

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  STATISTIQUES       Rang 4 · ⚓  │  A header
│─────────────────────────────────│
│  DÉTAIL PAR STAT                │  D
│  ❤ Vitalité   ███████████ 90 ↑  │
│  ⚙ Discipline ██████████░ 82 ↑  │
│  ✎ Savoir     █████████░░ 73     │
│  ⚑ Courage    ████████░░░ 68 ↑  │
│  ◇ Mental     ███████░░░░ 60     │
│  ✺ Création   ██████░░░░░ 55     │
│  ◈ Prospérité ████░░░░░░░ 41     │
│  ✦ Charisme   ████░░░░░░░ 38     │
│─────────────────────────────────│
│  💡 Nourrir ✦ Charisme ?        │  E déséquilibre
│  3 quêtes proposées         →   │
│─────────────────────────────────│
│  XP totale 6 240 · Défis 152    │  F totaux
│  Stat dominante : ❤ Vitalité    │
│─────────────────────────────────│
│ 🏠  📈  📊(actif)  🎖  👤        │
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`, marges 48 px.
- **A · Header (Y 60→220)** : « STATISTIQUES » Sora SemiBold 44 px `#1B2A4A` ; pastille « Rang 4 · ⚓ » à droite Poppins SemiBold 28 px `#1B2A4A`.
- **D · Détail par stat (Y 260→1240)** : titre « DÉTAIL PAR STAT » Poppins Bold 24 px `#1B2A4A` MAJ tracking +8 %. Puis **8 lignes** (hauteur 108 px chacune), **triées décroissant**. Chaque ligne = icône axe 44 px (couleur d'axe) + nom Poppins SemiBold 28 px `#1B2A4A` (largeur fixe 300 px) + **barre horizontale** 480 × 22 px, rayon plein, fond `#8A93A2` 15 %, remplie à la valeur **dans la couleur de l'axe** + valeur Sora Bold 30 px de la couleur d'axe + tendance `↑` `#2EC27E` 28 px si en hausse.
  - Valeurs & couleurs : ❤ Vitalité 90 `#2EC27E` ↑ · ⚙ Discipline 82 `#1B2A4A` ↑ · ✎ Savoir 73 `#3D4C8A` · ⚑ Courage 68 `#F5A623` ↑ · ◇ Mental 60 `#2E5EAA` · ✺ Création 55 `#B5548A` · ◈ Prospérité 41 `#C79A3A` · ✦ Charisme 38 `#F7B955`.
- **E · Carte déséquilibre (Y 1280→1500)** : carte `#FFFFFF`, rayon 44, ombre standard, **liseré gauche 8 px `#F7B955`**. « 💡 Nourrir ✦ Charisme ? » Poppins SemiBold 30 px `#1B2A4A` ; « 3 quêtes proposées » Inter Regular 26 px `#8A93A2` + chevron `→` `#F5A623` à droite. Ton d'invitation, jamais d'injonction.
- **F · Carte totaux (Y 1540→1730)** : carte `#1B2A4A`, texte blanc. « XP totale **6 240** · Défis validés **152** » chiffres Sora Bold 34 px `#F5A623`, reste Inter Medium 26 px `#FFFFFF`. Ligne 2 « Stat dominante : ❤ Vitalité » Inter Medium 26 px `#FFFFFF`.
- **F · Tab bar** : onglet **Stats** actif (`#F5A623`).
- **Données** : mêmes 8 valeurs que la capture 3 (cohérence obligatoire) · XP 6 240 · 152 défis.

---

## Capture 5 — Badges (grille + raretés)

### (a) Objectif marketing
Déclencher le **désir de collection** : 24 badges, 4 raretés, débloqués/à venir/secrets, plus « prochain à portée » (jauge orange). Levier de rétention et de partage (trophée de statut). Usage : bloc « Collectionne tes preuves », section gamification.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MES TROPHÉES         14 / 24   │  A compteur
│─────────────────────────────────│
│ [Tous][🟢][🔵][🟣][🟠][???]     │  B filtres
│─────────────────────────────────│
│  🟢▣      🟢▣      🔵▣          │  C grille 3 col
│ Premier  Lève-tôt  Phénix       │     ▣ débloqué
│  feu                            │
│                                 │
│  🔵▣      🟣▣      🟣▢          │
│  Roc      Flamme    Tueur       │     ▢ verrouillé
│  mental   de fer    de BOSS     │
│                                 │
│  🟠▢      🟠▢      ⬛ ???        │
│ L'Année  Légende   secret       │
│          vivante                │
│─────────────────────────────────│
│  PROCHAIN À PORTÉE              │  D
│  🔵 Aimant social — 88/100 ✦    │
│  ████████████████░░  +120 XP    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖(actif)  👤        │
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`, marges 48 px.
- **A · Header (Y 60→220)** : « MES TROPHÉES » Sora SemiBold 44 px `#1B2A4A` ; compteur « **14** / 24 » à droite — 14 Sora Bold 40 px `#F5A623`, « / 24 » Inter Medium 30 px `#8A93A2`.
- **B · Barre de filtres (Y 250→350)** : 6 pastilles rayon 22, hauteur 72 px, gouttière 16 px, scroll horizontal : `Tous` (actif : fond `#1B2A4A`, texte blanc) · `🟢` · `🔵` · `🟣` · `🟠` · `???`. Inactifs : fond `#FFFFFF`, texte `#8A93A2`, ombre standard, point de couleur de rareté à gauche.
- **C · Grille (Y 380→1400)** : **3 colonnes**, 3 rangées, vignettes carrées 300 × 300 px, gouttière 32 px. Chaque vignette = carte `#FFFFFF` rayon 40, ombre standard, **liseré 5 px = couleur de rareté**, médaillon rond ⌀ 150 px centré + nom Poppins SemiBold 24 px `#1B2A4A` (2 lignes) dessous.
  - **Débloqué (▣)** : médaillon en couleur (dégradé de la rareté), icône blanche outline.
  - **Verrouillé (▢)** : médaillon `#8A93A2` 30 %, icône `#8A93A2`, nom `#8A93A2`.
  - **Secret** : médaillon `#1B2A4A`, gros « ??? » Sora Bold 44 px `#8A93A2`, pas de nom.
  - Contenu : Ligne 1 — 🟢 **Premier feu** (débloqué), 🟢 **Lève-tôt** (débloqué), 🔵 **Phénix** (débloqué, 🔥). Ligne 2 — 🔵 **Roc mental** (débloqué), 🟣 **Flamme de fer** (débloqué), 🟣 **Tueur de BOSS** (verrouillé). Ligne 3 — 🟠 **L'Année vivante** (verrouillé), 🟠 **Légende** (verrouillé), **??? secret**.
  - Couleurs raretés (liseré + médaillon) : Commun `#2EC27E` · Rare `#2E5EAA` · Épique `#8B5CF6` · Légendaire `#F5A623`.
- **Légende (Y 1420→1490)** : « ▣ débloqué · ▢ à venir · ??? caché » Inter Medium 22 px `#8A93A2`.
- **D · Prochain à portée (Y 1520→1730)** : carte `#FFFFFF`, rayon 44, ombre standard, **liseré gauche 8 px `#2E5EAA`** (rareté Rare). Titre « PROCHAIN À PORTÉE » Poppins Bold 22 px `#8A93A2` MAJ. « 🔵 Aimant social — **88/100** ✦ » Poppins SemiBold 30 px `#1B2A4A`. Jauge 800 × 20 px remplie `#F5A623` à **88 %** + prime « +120 XP » Sora Bold 28 px `#F5A623`.
- **Tab bar** : onglet **Trophées** actif.
- **Données** : 14/24 · Aimant social 88/100 · +120 XP.

---

## Capture 6 — Calendrier 365 (cases, séries, jalons)

### (a) Objectif marketing
Le « mur qui se remplit de vert » : preuve viscérale de **régularité** sur une année entière. Argument émotionnel fort (« regarde tout ce que tu as fait »). Usage : bloc « Vois ton année entière », section preuve/transformation.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MON ANNÉE       168/365 · 92 % │  A compteur
│─────────────────────────────────│
│  🔥 Série 47   ·   Record 47    │  B bandeau série
│  Grâce restante cette sem. : 1  │
│─────────────────────────────────│
│  ✓ validé  ◐ grâce  ○ manqué  ◆ │  C légende
│─────────────────────────────────│
│        1   5   10   15  ...  31 │  D grille 365
│  JAN ✓✓✓✓✓ ✓✓◐✓✓ ✓✓✓✓✓ ✓✓✓◆..  │  ◆ = J30
│  FÉV ✓✓✓✓✓ ✓✓✓✓○ ✓✓✓✓✓ ✓✓◐..    │
│  MAR ✓✓✓✓✓ ✓✓✓◆✓ ✓✓✓✓✓ ...      │  ◆ = J90
│  AVR ✓✓✓✓✓ ✓✓✓✓✓ ...            │
│  MAI ✓✓✓✓✓ ✓✓◐✓✓ ...            │
│  JUN ✓✓✓◆✓ ░░░░░ ...            │  ◆ = J182
│  JUL→DÉC ░░░░░░░░░░ (à venir)    │
│─────────────────────────────────│
│  JALONS                         │  E frise
│  ●J7 ●J30 ●J90 ◆J182 ○J365      │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`, marges 48 px.
- **A · Header (Y 60→220)** : « MON ANNÉE » Sora SemiBold 44 px `#1B2A4A` ; à droite « **168**/365 · 92 % » — 168 Sora Bold 36 px `#2EC27E`, reste Inter Medium 26 px `#8A93A2`.
- **B · Bandeau série (Y 250→420)** : carte `#1B2A4A`, rayon 44, ombre standard. « 🔥 Série **47** · Record **47** » — chiffres Sora Bold 40 px `#F5A623`, texte Inter Medium 28 px `#FFFFFF`. Sous-ligne « Grâce restante cette semaine : 1 » Inter Regular 24 px `#8A93A2`.
- **C · Légende (Y 450→530)** : 4 items alignés horizontalement, carré 24 px + label Inter Medium 22 px `#8A93A2` : ✓ validé (`#2EC27E`) · ◐ grâce (`#F5A623`) · ○ manqué (`#8A93A2` 25 %) · ◆ jalon (`#F5A623`).
- **D · Grille 365 (Y 560→1500)** — cœur visuel :
  - 12 lignes = 12 mois. Colonne gauche : abréviation mois Poppins SemiBold 26 px `#1B2A4A` (largeur 120 px). Ligne d'en-tête colonnes « 1 · 5 · 10 · 15 · … · 31 » Inter Medium 18 px `#8A93A2`.
  - Cases : carrés **24 × 24 px**, rayon 6, gouttière 6 px, ~31 par ligne.
    - **Validé** `#2EC27E` · **Grâce** `#F5A623` · **Manqué** contour `#8A93A2` 25 % fond transparent · **Futur** `#8A93A2` 12 % · **Jalon ◆** case `#F5A623` avec petit losange blanc au centre.
  - **Liseré de série** : fin trait `#2EC27E` reliant horizontalement les cases vertes consécutives (effet chaîne).
  - Densité cible : JAN–MAI quasi pleines (vert), JUN à moitié, JUL→DÉC en `#8A93A2` 12 % (à venir). Mois courant (JUN) mis en évidence par un léger fond `#FFFFFF` + ombre.
- **E · Frise des jalons (Y 1540→1720)** : ligne horizontale `#8A93A2` 25 % avec 5 nœuds : ● J7 (atteint `#2EC27E`) · ● J30 (`#2EC27E`) · ● J90 (`#2EC27E`) · ◆ J182 (proche `#F5A623`, plus gros ⌀ 44 px) · ○ J365 (à venir `#8A93A2`). Labels Poppins SemiBold 24 px sous chaque nœud.
- **Tab bar** : (le calendrier s'ouvre depuis l'Accueil ; onglet Accueil ou Progression peut rester surligné).
- **Données** : 168/365 · 92 % · série 47 · record 47 · grâce 1 · jalons J7/J30/J90 atteints, J182 proche, J365 à venir.

---

## Capture 7 — Récompenses (certificat, sceaux, carte de l'année)

### (a) Objectif marketing
Matérialiser ce qu'on **gagne pour de vrai** : certificats datés (imprimables/LinkedIn), sceaux de cire, titre de rang porté, Carte de l'Année. Rendu **premium tangible** qui justifie le prix et alimente le partage. Usage : bloc « Ce que tu remportes », section valeur perçue.

### (b) Maquette ASCII
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  RÉCOMPENSES                    │  A
│─────────────────────────────────│
│  CERTIFICATS        ‹ ● ○ ○ ›   │  B carrousel
│  ┌───────────────────────────┐  │
│  │ ╔═══════════════════════╗ │  │
│  │ ║  CERTIFICAT · J182    ║ │  │  bordure dorée
│  │ ║   ~ Mi-Parcours ~     ║ │  │
│  │ ║  ────────────────     ║ │  │
│  │ ║    (sceau de cire)    ║ │  │
│  │ ║  Sébastien Golay      ║ │  │  nominatif
│  │ ║  Délivré le 14/06/26  ║ │  │  daté
│  │ ╚═══════════════════════╝ │  │
│  └───────────────────────────┘  │
│   J30✓  J90✓  J182✓  J365🔒     │
│─────────────────────────────────│
│  SCEAUX DE STAT                 │  C
│  ⚙✓ ⚑✓ ❤✓ ✦○ ◇✓ ✎✓ ✺○ ◈○      │
│─────────────────────────────────│
│  TITRES DE RANG                 │  D
│  ▸ « le·la Constant·e » (porté) │
│  [ Porter un autre titre ]      │
│─────────────────────────────────│
│  CARTE DE L'ANNÉE     🔒 J365   │  E
│  ┌───────────────────────────┐  │
│  │ ▦▦▦▦▦▦ fresque qui se     │  │
│  │ ▦▦▦░░░ remplit au fil…    │  │
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  [ Partager ]  [ Télécharger PDF ]│ F
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : 1080 × 1920 px, fond `#F7F8FA`, marges 48 px.
- **A · Header (Y 60→200)** : « RÉCOMPENSES » Sora SemiBold 44 px `#1B2A4A`.
- **B · Carrousel certificats (Y 230→1000)** : titre « CERTIFICATS » Poppins Bold 24 px `#1B2A4A` MAJ + dots `‹ ● ○ ○ ›`. Carte-certificat 900 × 640 px centrée :
  - Fond **papier crème** `#FBF7EE`, **double bordure dorée** (cadre externe `#C79A3A` 6 px + filet interne `#C79A3A` 2 px), rayon 24, ombre héros.
  - « CERTIFICAT · J182 » Sora SemiBold 34 px `#1B2A4A` centré ; « ~ Mi-Parcours ~ » Inter Italic 28 px `#C79A3A`.
  - Filet séparateur `#C79A3A` 40 %.
  - **Sceau de cire** ⌀ 140 px centré, dégradé `#C79A3A → #8A6E28`, estampé d'une icône sommet/cairn blanche.
  - « Sébastien Golay » Poppins SemiBold 30 px `#1B2A4A` (nominatif) ; « Délivré le 14/06/2026 » Inter Medium 24 px `#8A93A2` (daté).
  - Sous le carrousel, statuts : « J30 ✓ · J90 ✓ · J182 ✓ · J365 🔒 » — ✓ `#2EC27E`, 🔒 `#8A93A2`, Poppins SemiBold 24 px.
- **C · Sceaux de stat (Y 1030→1200)** : titre « SCEAUX DE STAT » Poppins Bold 24 px `#1B2A4A`. Rangée de 8 sceaux ronds ⌀ 96 px : les estampés (✓) en dégradé de leur couleur d'axe avec icône blanche + cordelette ; les à venir (○) en `#8A93A2` 25 %. État : ⚙✓ ⚑✓ ❤✓ ✦○ ◇✓ ✎✓ ✺○ ◈○.
- **D · Titres de rang (Y 1230→1420)** : titre « TITRES DE RANG » Poppins Bold 24 px. Puce du titre porté « ▸ “le·la Constant·e” (porté) » — fond `#1B2A4A`, texte `#FFFFFF` Poppins SemiBold 28 px, chevron `#F5A623`. Bouton « Porter un autre titre » contour `#1B2A4A` 3 px, texte `#1B2A4A`, rayon 34.
- **E · Carte de l'Année (Y 1450→1700)** : carte `#FFFFFF`, rayon 44, ombre standard, **verrouillée** : cadenas « 🔒 J365 » `#8A93A2` en haut à droite. Aperçu de fresque = mosaïque de petites tuiles `#2EC27E` / `#F5A623` / `#8A93A2` 12 % (partiellement remplie), légende « Fresque qui se remplit au fil des 365 défis » Inter Regular 24 px `#8A93A2`.
- **F · CTA (Y 1730→1870)** : deux boutons côte à côte 464 px : « Partager » fond `#F5A623` texte `#FFFFFF` Poppins Bold 28 px, rayon 34 ; « Télécharger PDF » contour `#1B2A4A` 3 px texte `#1B2A4A`.
- **Données** : certificat J182 Mi-Parcours daté 14/06/2026, nominatif · J30/J90/J182 obtenus, J365 verrouillé · 5 sceaux de stat sur 8 · titre porté « le·la Constant·e ».

---

## Capture 8 — Wrapped annuel (récap style « Spotify Wrapped », partageable)

### (a) Objectif marketing
L'artefact viral : la rétrospective d'année **partageable en story**, qui résume la transformation (rang atteint, XP, delta radar, record de série). Preuve sociale et bouche-à-oreille = acquisition. Usage : preuve sociale sur la page, visuel de partage à J365, header d'email « bilan ».

### (b) Maquette ASCII (format story 1080 × 1920)
```
┌─────────────────────────────────┐
│                                 │  fond bleu nuit dégradé
│        C A P 3 6 5              │  wordmark
│      ● Ton année 2026 ●         │
│                                 │
│   ┌───────────────────────┐     │
│   │      6 240             │     │  grand chiffre XP
│   │      XP GAGNÉS         │     │
│   └───────────────────────┘     │
│                                 │
│   🔥 Record de série            │
│        47 jours                 │
│                                 │
│   🏆 Rang atteint               │
│      4 · CONSTANT               │
│                                 │
│      ╱⚙╲   radar               │  mini-radar delta
│    ✦     ⚑  début → fin        │
│      ╲◇╱                        │
│                                 │
│   152 défis · 24 badges         │
│   Plus haut défi : diff 9/10    │
│                                 │
│      Un défi par jour.          │  slogan
│   Une version de toi par an.    │
│         @cap365  ·  Cairn       │  handle + marque
└─────────────────────────────────┘
```

### (c) Brief Canva
- **Dimensions** : **1080 × 1920 px** (story). Prévoir 4–5 slides pour la version complète (XP · série · rang · radar delta · marque), mais **la capture principale = 1 slide « synthèse »** décrit ci-dessous.
- **Fond** : **dégradé bleu nuit** `#1B2A4A → #0F1A30` (linéaire vertical). Ajouter une texture discrète (grain 5 % ou silhouette de sommet `#2E5EAA` 10 % en bas). Zone de sécurité story : 250 px en haut / 250 px en bas (éviter les UI Instagram/TikTok).
- **Titre (Y 300→460)** : wordmark « CAP365 » Sora Bold 48 px `#F5A623` centré, lettres espacées (tracking +12 %). Sous-titre « Ton année 2026 » Poppins SemiBold 32 px `#FFFFFF`, encadré de deux points `#F5A623`.
- **Grand chiffre XP (Y 500→800)** — pièce maîtresse : « **6 240** » Sora Bold **160 px** `#F5A623` centré, ombre `#0F1A30` 30 %. Label « XP GAGNÉS EN 365 JOURS » Poppins Bold 30 px `#8A93A2` MAJ tracking +10 %.
- **Blocs stats (Y 840→1180)** : trois lignes centrées, icône + label `#8A93A2` + valeur `#FFFFFF`/`#F5A623` :
  - « 🔥 Record de série · **47 jours** » — 47 Sora Bold 52 px `#F5A623`.
  - « 🏆 Rang atteint · **4 · CONSTANT** » — Sora Bold 44 px `#FFFFFF`, ⚓ `#F5A623`.
  - « ⭐ Plus haut défi relevé · **diff 9/10** » — Sora Bold 40 px `#F5A623`.
- **Mini-radar delta (Y 1220→1560)** : radar octogonal ⌀ 420 px centré. Deux silhouettes : **début d'année** en pointillés `#8A93A2` (contour 3 px, sans remplissage) et **fin d'année** pleine `#F5A623` à 25 % + contour `#F5A623` 4 px. Légende « Début → Fin » Inter Medium 24 px `#8A93A2`. Montre la croissance visuellement (fin > début sur chaque axe).
- **Ligne totaux (Y 1580→1660)** : « 152 défis validés · 24 / 24 badges · 92 % de régularité » Inter Medium 28 px `#FFFFFF`, chiffres `#2EC27E`.
- **Pied de marque (Y 1680→1820)** : slogan « Un défi par jour. Une version de toi par an. » Poppins SemiBold 30 px `#FFFFFF` centré, 2 lignes. Sous lui « @cap365 · une aventure Cairn » Inter Medium 24 px `#8A93A2` + petit logo cairn (pierres empilées) `#F5A623`.
- **Garde-fous** : **aucune promesse interdite** — on n'affiche que l'effort et la régularité (XP, défis, série, badges), jamais « tu es riche/heureux/parfait ». Pas de classement contre autrui. L'intitulé du plus haut défi reste générique (pas de note perso).
- **Données** : 6 240 XP · série record 47 · Rang 4 Constant · 152 défis · 24/24 badges · 92 % régularité · plus haut défi diff 9/10 · année 2026.

---

## Checklist de production

**Ordre de fabrication conseillé** (du plus structurant au plus décoratif) :
1. [ ] Créer un **kit de marque Canva** (Brand Kit) : les 8 couleurs + 8 couleurs d'axe + 4 raretés, polices Sora/Poppins/Inter, logo Cap365 et logo Cairn. Tout part de là.
2. [ ] Fabriquer les **composants réutilisables** en premier (à copier-coller partout) : puce de stat ×8, jauge de progression, jauge fine, jauge difficulté ●/10, CTA primaire/secondaire, pastille série 🔥, pastille niveau, tab bar, status bar, carte blanche + ombre standard.
3. [ ] **Capture 1 (Dashboard)** — la plus vue, référence de style.
4. [ ] **Capture 2 (Défi du jour)** — réutilise puce stat + méta + CTA de la 1.
5. [ ] **Capture 3 (Radar)** puis **Capture 4 (Stats)** — mêmes 8 valeurs, à faire ensemble pour cohérence.
6. [ ] **Capture 5 (Badges)** puis **Capture 6 (Calendrier)**.
7. [ ] **Capture 7 (Récompenses)** — plus artisanale (bordures dorées, sceaux).
8. [ ] **Capture 8 (Wrapped)** — en dernier, réutilise le mini-radar de la 3.

**Cohérence (à vérifier avant export) :**
- [ ] **Un seul jeu de données fictif** partout : Sébastien · Jour 168/365 · série 47 (record 47) · Niv 18 · Rang 4 Constant · 6 240 XP total · 152 défis · 14–24 badges · radar (⚙82 ⚑68 ❤90 ✦38 ◇60 ✎73 ✺55 ◈41).
- [ ] **Orange = action uniquement** (jamais en décoration passive) ; vert = validé ; gris = inactif.
- [ ] Rayons, ombres et polices identiques d'un écran à l'autre.
- [ ] Status bar « 9:41 » et tab bar identiques sur les captures 1, 4, 5, 6.
- [ ] **Aucune promesse interdite**, aucune note personnelle exposée, aucune comparaison entre personnes.
- [ ] Corps de texte ≥ 26 px (≥ 16 pt à l'échelle écran), lisible au pouce.

**Exports :**
- [ ] Exporter en **PNG, échelle 2× (@2x)** — dans Canva : *Télécharger → PNG → Taille × 2*. Fond opaque (pas de transparence pour les captures pleines ; transparence réservée aux sceaux/emblèmes).
- [ ] Produire pour chaque capture une **version avec cadre smartphone** (mockup héros) et une **version plein écran** (carrousel/email).
- [ ] Produire la **capture 3 en dark mode** (fond `#0F1A30`) en plus de la version claire.
- [ ] **Nommage** : `cap365_capture_[nom]_[claire|dark]_[mockup|plein]_v1.png` — ex. `cap365_capture_dashboard_claire_mockup_v1.png`, `cap365_capture_radar_dark_plein_v1.png`, `cap365_capture_wrapped_story_v1.png`.

---

## Tableau récapitulatif

| # | Capture | Format (px) | Variantes à exporter | Usage principal sur la page / emails |
|:--:|---|---|---|---|
| 1 | Dashboard / Accueil | 1080 × 1920 | claire · mockup + plein | **Bloc héros** au-dessus de la ligne de flottaison ; email de bienvenue |
| 2 | Défi du jour | 1080 × 1920 | claire · mockup + plein | Section « Comment ça marche » (étape 2) ; email J1 |
| 3 | Radar de progression | 1080 × 1920 | claire **+ dark** · mockup + plein | Bloc « Deviens le héros de ta vie » ; carrousel social |
| 4 | Statistiques | 1080 × 1920 | claire · mockup + plein | Section « Suivi précis, jamais culpabilisant » |
| 5 | Badges | 1080 × 1920 | claire · mockup + plein | Section gamification « Collectionne tes preuves » |
| 6 | Calendrier 365 | 1080 × 1920 | claire · mockup + plein | Bloc preuve « Vois ton année entière » ; email récap |
| 7 | Récompenses | 1080 × 1920 | claire · mockup + plein | Section valeur « Ce que tu remportes » (certificats) |
| 8 | Wrapped annuel | 1080 × 1920 (story, 4-5 slides) | 1 slide synthèse + série complète | **Preuve sociale / partage** ; header email « bilan d'année » |

> Optionnel pour la page : décliner 1, 3, 5 et 8 en **1080 × 1080** (carré) pour les vignettes de section et les posts Instagram feed.

---

## 3 conseils pour un rendu « app premium »

1. **Une seule couleur qui bouge.** L'orange `#F5A623` ne doit apparaître **que sur ce qui progresse ou appelle à l'action** (XP, boutons, jauges qui montent, série, jalons). Tout le reste vit en bleu nuit / gris / blanc cassé. Cette discipline chromatique est ce qui sépare une vraie app premium d'un template chargé : l'œil sait toujours où regarder.

2. **De l'air et une ombre unique.** Marges généreuses (48 px), beaucoup d'espace blanc `#F7F8FA` autour des cartes blanches, et **exactement la même ombre douce partout** (12 % / flou 44 / Y +11). Des ombres cohérentes et discrètes donnent l'impression de « cartes qui flottent » — c'est le langage visuel iOS/Material que le cerveau associe aux applications soignées. Ne jamais empiler des ombres dures ou multiples.

3. **Des chiffres qui respirent, des données réalistes.** Utiliser une police géométrique en **gras et en grand** pour les chiffres clés (XP, niveau, %, série), avec des valeurs **crédibles et non rondes** (6 240 XP, série 47, 88/100) plutôt que 100/1000. Le réalisme des données et la hiérarchie typographique (un chiffre héros par écran) créent instantanément la sensation d'un produit vivant et utilisé, pas d'une maquette vide.

---

> 📎 **Rappel canon.** Marque mère **Cairn**, produit **Cap365 — 365 Défis de Vie**. Charte : `#1B2A4A` / `#F5A623` (action) / `#2EC27E` (succès) / `#8A93A2` / `#F7F8FA`. Polices Sora/Poppins (titres) + Inter (corps). 8 stats en radar, 50 niveaux / 10 rangs (Éveil → Légende), 24 badges (4 raretés), séries 🔥 + Filet de Reprise, jalons J7/J30/J90/J182/J365. **On promet l'effort et la fierté, jamais la magie.**

*Document de production commerciale — Cap365 · Captures & brief Canva. Reprend les dispositions de `experience/02-ecrans-et-templates.md`.*
