# Cap365 — Specs finales des 8 écrans (à reproduire sans réfléchir)

> **Marque mère : Cairn** · **Produit : Cap365 — 365 Défis de Vie**
> Slogan : *« Un défi par jour. Une version de toi par an. »*
>
> **Statut : PRODUCTION — verrouillé.** Ce document est la **notice de fabrication Canva** des 8 écrans finaux. Il applique **exactement** les tokens de `01-kit-graphique.md` (source de vérité design) et la persona de démo unique de `production/02-maquettes-ecrans-finales.md`. On ne réfléchit pas : on pose les zones aux Y indiqués, on colle les textes mot pour mot, on applique les HEX cités.
> ⚠️ **Aucune nouvelle fonctionnalité.** ⚠️ **Aucune promesse interdite** (ni richesse, ni bonheur, ni vie parfaite : uniquement l'effort et la régularité). ⚠️ **Orange `#F5A623` = ACTION uniquement.**

---

## 0. Cadre commun — à appliquer sur TOUS les écrans

### 0.1 Persona de démo VERROUILLÉE (mêmes valeurs partout)

| Donnée | Valeur verrouillée |
|---|---|
| Prénom | **Lucas** · 26 ans |
| Jour | **128 / 365** → **35 %** d'année |
| Niveau | **18** |
| Rang | **4 — Constant** ⚓ · titre « le·la Constant·e » |
| Série | **47 🔥** (record 47) |
| XP total | **6 240** |
| Bouclier de série | **1 dispo** |
| Badges | **9 / 24** |
| Quête hebdo | **« 3 défis Courage » — 2/3** · prime +100 XP |

**Radar (8 axes, sur 100) — ordre décroissant :**

| Stat | Icône | Valeur | Couleur d'axe (HEX) |
|---|:--:|:--:|---|
| Discipline | ⚙ | **72** | `#1B2A4A` |
| Courage | ⚑ | **65** | `#F5A623` |
| Charisme | ✦ | **61** | `#F7B955` |
| Vitalité | ❤ | **58** | `#2EC27E` |
| Mental | ◇ | **54** | `#2E5EAA` |
| Savoir | ✎ | **40** | `#3D4C8A` |
| Création | ✺ | **33** | `#B5548A` |
| Prospérité | ◈ | **28** | `#C79A3A` |

- **Dominante :** ⚙ Discipline (72). **En retrait :** ✺ Création (33) & ◈ Prospérité (28).

**Défi du jour (J128) — VERROUILLÉ :**

| Champ | Valeur |
|---|---|
| Titre | **« Le coup de fil qui pique »** |
| Catégorie | Social |
| Stat impactée | ✦ **Charisme** (`#F7B955`) |
| Difficulté | **6 / 10** |
| XP | **+60 XP** (= 6 × 10) |
| Points de stat | **+2 ✦** (diff 4-6 → +2) |
| Bonus série | **🔥 +20 XP** |

### 0.2 Tokens graphiques verrouillés (kit)

| Rôle | HEX | Usage |
|---|---|---|
| Primaire (bleu nuit) | `#1B2A4A` | En-têtes, texte fort, blocs sombres, contour radar, remplissage radar |
| Secondaire (bleu) | `#2E5EAA` | Sous-titres, labels, filets, liens, jauge année |
| **Accent (orange)** | `#F5A623` | **ACTION uniquement** : boutons, XP, jauges qui montent, série, jalons |
| Succès (vert) | `#2EC27E` | Validé ✓, série active, cases pleines calendrier |
| Alerte douce (ambre) | `#E8A13A` | Série en danger (jamais de rouge) |
| Neutre sombre | `#222831` | Texte principal sur fond clair |
| Neutre moyen | `#5A6472` | Texte secondaire |
| Neutre clair | `#8A93A2` | Texte tertiaire, inactif, verrouillé, **jour manqué (jamais rouge)** |
| Ligne / bordure | `#E6E9EF` | Séparateurs, piste de progress bar |
| Fond | `#F7F8FA` | Fond général (jamais de blanc pur en grande surface) |
| Surface | `#FFFFFF` | Cartes, blocs posés sur le fond |

**Couleurs des 8 stats (radar) :** ⚙ Discipline `#1B2A4A` · ⚑ Courage `#F5A623` · ✦ Charisme `#F7B955` · ❤ Vitalité `#2EC27E` · ◇ Mental `#2E5EAA` · ✎ Savoir `#3D4C8A` · ✺ Création `#B5548A` · ◈ Prospérité `#C79A3A`.
**Raretés badges :** 🟢 Commun `#2EC27E` (grad `#6BBF8A → #4FA372`) · 🔵 Rare `#2E5EAA` (grad `#3B82C4 → #2E5EAA`) · 🟣 Épique `#8B5CF6` (grad `#8B5CF6 → #6D3CE0`) · 🟠 Légendaire `#F5A623` (grad `#F5A623 → #FF7A00`).
**Rang 4 — Constant :** couleur `#3B82C4`, emblème ⚓ Ancre.

**Gradients :** Marque `linear-gradient(135deg, #1B2A4A, #2E5EAA)` · XP `linear-gradient(90deg, #F5A623, #FF7A00)` · Succès `linear-gradient(90deg, #2EC27E, #22A567)` · Wrapped `linear-gradient(160deg, #1B2A4A, #6D3CE0, #F5A623)`.
**Ombres :** Carte repos `0 4px 16px rgba(27,42,74,0.08)` · Carte active `0 8px 24px rgba(27,42,74,0.12)` · Bouton accent `0 2px 10px rgba(245,166,35,0.35)` · Modale/héros `0 16px 48px rgba(18,25,43,0.30)`.
**Rayons :** carte 20 · bouton 14 (ou pilule 999) · chip 999 · avatar 50 % · progress bar 999. *(Canva @2× : valeurs doublées → carte 40, bouton 28, cases calendrier 12.)*

### 0.3 Typographies (kit)

| Rôle | Police | Graisse | Taille @1× | Taille @2× (cadre 1080) |
|---|---|---|---|---|
| H1 titre | Poppins (alt Sora) | 700 | 30 px | **60 px** |
| H2 titre | Poppins (alt Sora) | 600 | 24 px | **48 px** |
| H3 titre | Poppins | 600 | 20 px | **40 px** |
| Corps | Inter | 400 / 500 | 16 px (interligne 1,5) | **32 px** |
| Label / petit | Inter | 500 / 600 | 13 px | **26 px** |
| Micro / légende | Inter | 500 | 11 px, tracking 0,4 px, MAJ | **22 px** |
| Chiffre clé (XP, niveau) | Poppins / Sora | 700 | 22-40 px | **44-80 px** |

> **Règle de fabrication :** les tailles px indiquées dans chaque écran sont **déjà en @2× (cadre 1080)**. Sur le cadre 1080, le corps ne descend jamais sous 26 px.

### 0.4 Format & gabarit universel

- **Format écran : 1080 × 2340 px** (mobile @2×). **Exception : Wrapped = 1080 × 1920 px** (story).
- **Marges intérieures : 40 px** gauche/droite → **largeur de contenu utile = 1000 px**.
- **Gouttière entre cartes : 24 px** (@2×). **Grille de base : 8 px** (@2×).
- **Status bar** (Y 0→64) : « 9:41 » Inter SemiBold 26 px `#1B2A4A` (gauche) ; signal/wifi/batterie 100 % `#1B2A4A` (droite). Identique sur tous les écrans à navigation.
- **Tab bar** (Y 2190→2340, hauteur 150) : 5 onglets `🏠 Accueil · 📈 Progression · 📊 Stats · 🎖 Trophées · 👤 Récomp.` — pictos outline 56 px. **Onglet actif = picto `#F5A623` + label `#1B2A4A`** ; inactifs `#8A93A2`. Filet supérieur `#E6E9EF` 2 px.
- **Fond général :** `#F7F8FA` plein sur toute la hauteur.

---

## Écran 1 — Accueil / Dashboard

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) la **carte défi du jour** (héros — plus grande surface, ombre la plus marquée, seul CTA orange plein) · 2) série 🔥 + niveau (header) · 3) quêtes (jauges orange) · 4) raccourcis (icônes discrètes).

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header** | 96 → 300 | 204 | marge haute 32 |
| 3 | **B — Salutation + jour + jauge année** | 340 → 500 | 160 | gap 40 sous A |
| 4 | **C — Carte défi (HÉROS)** | 540 → 1360 | 820 | gap 40 sous B |
| 5 | **D — Carrousel quêtes** | 1400 → 1740 | 340 | gap 40 sous C |
| 6 | **E — Raccourcis ×4** | 1780 → 2040 | 260 | gap 40 sous D |
| 7 | **F — Tab bar** (Accueil actif) | 2190 → 2340 | 150 | collée au bas |

### Détail par zone

**A — Header** (Y 96→300)
- Wordmark « **Cap365** » — Poppins/Sora SemiBold 60 px `#1B2A4A`, à gauche, baseline Y ≈ 180.
- Pastille série (droite, x ≈ 640) : pilule fond `#FFFFFF`, rayon 999, ombre carte repos, padding 20 ; « 🔥 47 » — 🔥 icône, **47** Sora Bold 44 px `#F5A623`.
- Pastille niveau/rang (extrême droite) : « ◐ Niv 18 » Poppins SemiBold 36 px `#1B2A4A` + sous-ligne « Constant » Inter Medium 24 px `#8A93A2`.

**B — Salutation + jour** (Y 340→500)
- « **Salut, Lucas.** » — Poppins/Sora SemiBold 56 px `#1B2A4A`, gauche.
- « Jour 128 / 365 » — Inter Medium 28 px `#8A93A2`, droite, aligné sur la salutation.
- Jauge fine année : piste 1000 × 16, fond `#E6E9EF`, rayon 999, remplie **35 %** (= 350 px) en **gradient XP `#F5A623 → #FF7A00`**. Label « 35 % » Inter SemiBold 24 px `#F5A623` à droite. Y ≈ 470.

**C — Carte défi du jour (HÉROS)** (Y 540→1360)
- Carte 1000 px large, fond `#FFFFFF`, rayon 40, **ombre modale/héros**, padding 40. **Liseré gauche 8 px `#F7B955`** (couleur Charisme).
- Ligne titre de zone : « QUÊTE DU JOUR » Poppins Bold 26 px `#8A93A2` MAJ (gauche) · « diff 6/10 » Inter Medium 26 px `#8A93A2` (droite).
- Puce stat : pastille rayon 999, fond `#F7B955`, texte « ✦ CHARISME · Social » Poppins Bold 24 px `#FFFFFF` MAJ, icône ✦ outline blanche.
- Titre défi : « **Le coup de fil qui pique** » Poppins SemiBold 44 px `#1B2A4A`, interligne 1,2, sur 2 lignes max.
- Jauge difficulté : 10 puces ⌀ 34, gouttière 12 ; **6 pleines `#F5A623`** + 4 vides `#8A93A2` à 25 %.
- Ligne gains : « +60 XP » Sora Bold 32 px `#F5A623` · « +2 ✦ » Sora Bold 28 px `#F5A623` · « 🔥 +20 XP » Sora Bold 28 px `#F5A623`, séparés par « · » `#8A93A2`.
- **CTA** : bouton 1000 × 140, **gradient XP `#F5A623 → #FF7A00`**, rayon 28, **ombre bouton accent**, texte « ✔ RELEVER LE DÉFI » Poppins Bold 34 px `#FFFFFF` centré.

**D — Carrousel quêtes** (Y 1400→1740)
- Titre « TES QUÊTES » Poppins Bold 26 px `#1B2A4A` MAJ (gauche) · dots « ‹ ● ○ ○ › » — actif `#F5A623`, inactifs `#8A93A2` (droite).
- Carte HEBDO (488 × 260, fond `#FFFFFF`, rayon 40, ombre repos) : label « HEBDO » Inter SemiBold 24 px `#2E5EAA` MAJ · « 2/3 ⚑ Courage » Poppins SemiBold 30 px `#1B2A4A` · jauge 400 × 16 remplie **66 %** en gradient XP · prime « +100 XP » Sora Bold 26 px `#F5A623`.
- Carte MOIS · BOSS (488 × 260) : label « MOIS · BOSS » Inter SemiBold 24 px `#B5548A` · « J-9 ◈ » Poppins SemiBold 30 px `#1B2A4A` · jauge **80 %** gradient XP · prime « +300 XP » Sora Bold 26 px `#F5A623`.

**E — Raccourcis** (Y 1780→2040)
- 4 tuiles 232 × 232, fond `#FFFFFF`, rayon 40, ombre repos, gouttière 24. Chacune : icône outline 64 px `#1B2A4A` + label Inter SemiBold 24 px `#1B2A4A`.
- Tuiles : « 📊 Héros » · « 🗓 365 » · « 🎖 Trophées » · « 🏅 Récomp. ».

**F — Tab bar** : Accueil actif (🏠 `#F5A623` + label `#1B2A4A`).

### Textes EXACTS
`Cap365` · `🔥 47` · `◐ Niv 18` · `Constant` · `Salut, Lucas.` · `Jour 128 / 365` · `35 %` · `QUÊTE DU JOUR` · `diff 6/10` · `✦ CHARISME · Social` · `Le coup de fil qui pique` · `+60 XP · +2 ✦ · 🔥 +20 XP` · `✔ RELEVER LE DÉFI` · `TES QUÊTES` · `HEBDO` · `2/3 ⚑ Courage` · `+100 XP` · `MOIS · BOSS` · `J-9 ◈` · `+300 XP` · `Héros` · `365` · `Trophées` · `Récomp.`

### États
- **Défi actif (défaut)** : carte blanche, liseré `#F7B955`, CTA orange plein.
- **Défi validé aujourd'hui** : liseré gauche `#2EC27E` 8 px + coche « ✓ Fait » `#2EC27E`, CTA remplacé par « Reviens demain » fond `#8A93A2` (désactivé) `#FFFFFF`.
- **Chargement** : squelettes gris clair `#E6E9EF` (jamais d'écran blanc).

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │  status bar
│─────────────────────────────────│
│  Cap365      🔥 47   ◐ Niv 18   │  A  série · niveau
│                        Constant │
│─────────────────────────────────│
│  Salut, Lucas.    Jour 128/365  │  B
│  ████████████░░░░░░░░░░░  35 %  │     jauge année (orange)
│─────────────────────────────────│
│ ▎QUÊTE DU JOUR         diff 6/10 │  C  carte HÉROS (blanche)
│ ▎┌─────────────────────────────┐│     liseré charisme #F7B955
│ ▎│ ✦ CHARISME · Social         ││     puce stat
│ ▎│ « Le coup de fil qui pique »││     titre défi
│ ▎│ ●●●●●●○○○○                   ││     difficulté 6/10
│ ▎│ +60 XP · +2 ✦ · 🔥 +20 XP   ││     gains
│ ▎│ [   ✔  RELEVER LE DÉFI   ]  ││     ← CTA orange plein
│ ▎└─────────────────────────────┘│
│─────────────────────────────────│
│  TES QUÊTES         ‹ ● ○ ○ ›   │  D  carrousel quêtes
│  ┌──────────┐ ┌──────────┐      │
│  │HEBDO     │ │MOIS·BOSS │  →   │
│  │2/3 ⚑Courg│ │J-9  ◈    │      │
│  │██████░+100│ │████████░+300│  │
│  └──────────┘ └──────────┘      │
│─────────────────────────────────│
│  ┌────┐┌────┐┌────┐┌────┐        │  E  raccourcis ×4
│  │ 📊 ││ 🗓 ││ 🎖 ││ 🏅 │        │
│  │Héros││365 ││Trop││Récp│       │
│  └────┘└────┘└────┘└────┘        │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │  F  tab bar (Accueil actif)
└─────────────────────────────────┘
```

---

## Écran 2 — Défi du jour

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) le **titre du défi** (plus gros texte de l'écran) · 2) le **CTA « JE L'AI FAIT »** (orange plein, sticky bas) · 3) la méta-rangée XP/stat/difficulté (preuve du gain) · 4) instructions → variantes → coaching (support).

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header** (retour + jour + diff) | 96 → 320 | 224 | — |
| 3 | **B — Bandeau stat (Charisme)** | 360 → 480 | 120 | gap 40 |
| 4 | **C — Titre défi** | 520 → 740 | 220 | gap 40 |
| 5 | **D — Méta-rangée (3 colonnes)** | 780 → 990 | 210 | gap 40 |
| 6 | **E — Instructions** | 1030 → 1330 | 300 | gap 40 |
| 7 | **F — Variantes (3 pastilles)** | 1370 → 1620 | 250 | gap 40 |
| 8 | **G — Micro-coaching** | 1660 → 1820 | 160 | gap 40 |
| 9 | **H — Zone d'action sticky** | 1980 → 2340 | 360 | collée au bas |

### Détail par zone

**A — Header** (Y 96→320)
- Flèche « ‹ » retour Poppins 44 px `#1B2A4A` (gauche).
- « Jour 128 / 365 » Poppins SemiBold 32 px `#1B2A4A` (centre).
- Jauge difficulté : 10 puces ⌀ 30, **6 pleines `#F5A623`** + 4 vides `#8A93A2` 25 % ; suivi « 6/10 » Inter SemiBold 26 px `#8A93A2`.

**B — Bandeau stat** (Y 360→480) : rectangle 1000 × 100, fond `#F7B955` (Charisme), rayon 28, ombre repos. « ✦ CHARISME · Social » Poppins Bold 30 px `#FFFFFF` MAJ, icône ✦ outline blanche à gauche.

**C — Titre** (Y 520→740) : « **Le coup de fil qui pique** » **Sora Bold 56 px** `#1B2A4A`, interligne 1,2, aligné à gauche.

**D — Méta-rangée** (Y 780→990) : carte `#FFFFFF` 1000 × 190, rayon 40, ombre repos, 3 colonnes séparées par filets verticaux `#E6E9EF`. Chaque colonne = label MAJ Inter SemiBold 24 px `#8A93A2` au-dessus + valeur dessous :
- DIFF → « 6/10 » Sora Bold 44 px `#1B2A4A`
- GAIN → « +60 XP » Sora Bold 44 px `#F5A623`
- STAT → « +2 ✦ » Sora Bold 44 px `#F5A623`

**E — Instructions** (Y 1030→1330)
- « Comment faire : » Poppins SemiBold 32 px `#1B2A4A`.
- Corps : « Choisis la personne, pas le moment parfait. Compose, respire, dis l'essentiel. » Inter Regular 30 px `#222831`, interligne 1,4.

**F — Variantes** (Y 1370→1620)
- « Adapter le défi : » Poppins SemiBold 32 px `#1B2A4A`.
- 3 pastilles rayon 999, hauteur 88 :
  - « 🟢 Plus doux » — contour `#2EC27E` 3 px, texte `#2EC27E` Poppins SemiBold 28 px, fond transparent.
  - « ⚪ Standard » — **SÉLECTIONNÉE** : fond `#1B2A4A`, texte `#FFFFFF` Poppins SemiBold 28 px.
  - « 🟠 Plus fort · +20 XP » — contour `#F5A623` 3 px, texte `#F5A623` Poppins SemiBold 28 px.

**G — Micro-coaching** (Y 1660→1820) : « 💬 “Le charisme, c'est oser le premier mot.” » Inter Italic 30 px `#2E5EAA`.

**H — Zone d'action sticky** (Y 1980→2340) : bande collée au bas, fond dégradé `#FFFFFF → #F7F8FA` vers le haut, filet supérieur `#E6E9EF`.
- CTA primaire 1000 × 140, **gradient XP `#F5A623 → #FF7A00`**, rayon 28, ombre bouton accent, « ✔ JE L'AI FAIT » Poppins Bold 36 px `#FFFFFF`.
- CTA secondaire 1000 × 104, fond transparent, contour `#1B2A4A` 3 px, rayon 28, « Reporter à ce soir » Poppins SemiBold 28 px `#1B2A4A`.

### Textes EXACTS
`‹` · `Jour 128 / 365` · `6/10` · `✦ CHARISME · Social` · `Le coup de fil qui pique` · `DIFF` · `6/10` · `GAIN` · `+60 XP` · `STAT` · `+2 ✦` · `Comment faire :` · `Choisis la personne, pas le moment parfait. Compose, respire, dis l'essentiel.` · `Adapter le défi :` · `🟢 Plus doux` · `⚪ Standard` · `🟠 Plus fort · +20 XP` · `💬 "Le charisme, c'est oser le premier mot."` · `✔ JE L'AI FAIT` · `Reporter à ce soir`

### États
- **Défaut** : variante **Standard** active — diff 6/10, +60 XP, +2 ✦.
- **Variante Plus doux** : diff 4/10 → +40 XP · +2 ✦ (diff 4 reste palier +2). Bandeau/valeurs recalculés.
- **Variante Plus fort** : diff 8/10 → +80 XP · +3 ✦ (diff 7-10 → +3).
- **Reporté** : toast de confirmation, rappel local planifié.
- **Validé** : ouvre la séquence de validation (coche verte `#2EC27E` tracée + compteur +60 XP de 0→60).

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  ‹ retour    Jour 128/365       │  A  header
│              ●●●●●●○○○○  6/10    │     difficulté
│─────────────────────────────────│
│ ┌─────────────────────────────┐ │  B  bandeau stat (charisme)
│ │ ✦  CHARISME · Social        │ │     fond #F7B955
│ └─────────────────────────────┘ │
│                                 │
│  Le coup de fil qui pique       │  C  titre (Sora Bold 56)
│                                 │
│  ┌───────┬─────────┬─────────┐  │  D  méta-rangée
│  │ DIFF  │  GAIN   │  STAT   │  │
│  │ 6/10  │ +60 XP  │  +2 ✦   │  │
│  └───────┴─────────┴─────────┘  │
│                                 │
│  Comment faire :                │  E  instructions
│  Choisis la personne, pas le    │
│  moment parfait. Compose,       │
│  respire, dis l'essentiel.      │
│                                 │
│  Adapter le défi :              │  F  variantes
│  (🟢 Plus doux)(⚪ Standard)     │     Standard sélectionnée
│  (🟠 Plus fort · +20 XP)        │
│                                 │
│  💬 « Le charisme, c'est oser   │  G  micro-coaching (italique)
│     le premier mot. »           │
│─────────────────────────────────│
│  [   ✔   JE L'AI FAIT   ]       │  H  CTA sticky orange
│  [   Reporter à ce soir   ]     │     secondaire outline
└─────────────────────────────────┘
```

---

## Écran 3 — Radar RPG (8 stats)

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA` (**version claire**) + **version dark** `#0F1A30` (les deux à produire).
**Hiérarchie visuelle :** 1) le **radar octogonal** (la signature — plus grand élément, centré) · 2) la phrase de lecture (traduit la forme) · 3) les totaux (chiffres héros orange).

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header (Mon héros + rang)** | 96 → 360 | 264 | — |
| 3 | **B — Radar octogonal** | 400 → 1520 | 1120 | gap 40 |
| 4 | **Bouton comparer** | 1560 → 1680 | 120 | gap 40 |
| 5 | **C — Lecture du radar** | 1720 → 1980 | 260 | gap 40 |
| 6 | **F — Totaux** | 2020 → 2220 | 200 | gap 40 |
| 7 | Tab bar (Stats actif) | 2190 → 2340 | 150 | — |

### Détail par zone

**A — Header** (Y 96→360)
- « MON HÉROS » Sora SemiBold 56 px `#1B2A4A` (claire) / `#F7F8FA` (dark), gauche.
- Pastille « Rang 4 · ⚓ » Poppins SemiBold 32 px `#3B82C4` (couleur du rang Constant), droite.
- Sous-ligne « “le·la Constant·e” » Inter Italic 28 px `#8A93A2`.

**B — Radar octogonal** (Y 400→1520)
- ⌀ ≈ 900 px, centré horizontalement (centre x = 540, centre y ≈ 960).
- 4 anneaux octogonaux (25/50/75/100 %), trait `#8A93A2` à 20 %, 1 px.
- **Silhouette** : polygone des 8 valeurs, rempli `#1B2A4A` à 20 % d'opacité, contour `#F5A623` 4 px, sommets ⌀ 14 `#F5A623`.
- **Labels aux pointes (sens horaire depuis le haut)** — icône couleur d'axe + valeur Sora Bold 32 px de la couleur d'axe :
  - Haut : ⚙ 72 `#1B2A4A`
  - Haut-droite : ⚑ 65 `#F5A623`
  - Droite : ✦ 61 `#F7B955`
  - Bas-droite : ❤ 58 `#2EC27E`
  - Bas : ◇ 54 `#2E5EAA`
  - Bas-gauche : ✎ 40 `#3D4C8A`
  - Gauche : ✺ 33 `#B5548A`
  - Haut-gauche : ◈ 28 `#C79A3A`
- *(Dark mode : silhouette dégradé `#F5A623 → #2EC27E` 25 %.)*

**Bouton comparer** (Y 1560→1680) : pastille pleine largeur 1000 × 100, fond transparent, contour `#2E5EAA` 3 px, rayon 999, « ◷ Comparer au mois dernier » Poppins SemiBold 28 px `#2E5EAA`.

**C — Lecture du radar** (Y 1720→1980) : carte `#FFFFFF` 1000, rayon 40, ombre repos, padding 40.
- L1 « Fort en ⚙ Discipline & ⚑ Courage » Poppins SemiBold 32 px `#1B2A4A`.
- L2 « En retrait : ◈ Prospérité (28) » Inter Regular 30 px `#8A93A2` (ton bienveillant).

**F — Totaux** (Y 2020→2220) : ligne « XP totale 6 240 · Défis validés 128 · Stat dominante ⚙ Discipline » — chiffres **6 240** et **128** Sora Bold 34 px `#F5A623`, labels Inter Medium 26 px `#8A93A2`.

### Textes EXACTS
`MON HÉROS` · `Rang 4 · ⚓` · `"le·la Constant·e"` · `⚙ 72` `⚑ 65` `✦ 61` `❤ 58` `◇ 54` `✎ 40` `✺ 33` `◈ 28` · `◷ Comparer au mois dernier` · `Fort en ⚙ Discipline & ⚑ Courage` · `En retrait : ◈ Prospérité (28)` · `XP totale 6 240 · Défis validés 128 · Stat dominante ⚙ Discipline`

### États
- **Version claire** (fond `#F7F8FA`) + **version dark** (fond `#0F1A30`) — les deux à produire.
- **Mode comparaison** : radar « mois dernier » en pointillés `#8A93A2`, radar actuel plein superposé, fil orange = aujourd'hui.

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  MON HÉROS         Rang 4 · ⚓   │  A  header
│  « le·la Constant·e »           │
│─────────────────────────────────│
│              ⚙ 72               │  B  radar 8 axes
│      ◈ 28  ╱   │   ╲  ⚑ 65      │     zone pleine = #1B2A4A 20%
│          ╱  ◢█████◣  ╲          │     contour #F5A623
│   ✺ 33 ●──── ███████ ────● ✦ 61 │
│          ╲  ◥█████◤  ╱          │
│      ✎ 40  ╲   │   ╱  ❤ 58      │
│              ◇ 54               │
│─────────────────────────────────│
│  [ ◷ Comparer au mois dernier ] │
│─────────────────────────────────│
│  Fort en ⚙ Discipline & ⚑ Courg │  C  lecture
│  En retrait : ◈ Prospérité (28) │
│─────────────────────────────────│
│  XP totale 6 240 · Défis 128    │  F  totaux (orange)
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │
└─────────────────────────────────┘
```

---

## Écran 4 — Statistiques (détail par stat)

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) les **8 barres triées** (le complément data du radar) · 2) la carte déséquilibre (invitation bienveillante) · 3) la carte totaux (bloc sombre, chiffres orange).

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header** | 96 → 280 | 184 | — |
| 3 | **D — Détail par stat (8 lignes)** | 320 → 1560 | 1240 | gap 40 · ligne h.140 |
| 4 | **E — Carte déséquilibre** | 1600 → 1820 | 220 | gap 40 |
| 5 | **F — Carte totaux (bloc sombre)** | 1860 → 2100 | 240 | gap 40 |
| 6 | Tab bar (Stats actif) | 2190 → 2340 | 150 | — |

### Détail par zone

**A — Header** (Y 96→280) : « STATISTIQUES » Sora SemiBold 56 px `#1B2A4A` (gauche) · pastille « Rang 4 · ⚓ » Poppins SemiBold 32 px `#3B82C4` (droite).

**D — Détail par stat** (Y 320→1560)
- Titre « DÉTAIL PAR STAT » Poppins Bold 26 px `#1B2A4A` MAJ.
- **8 lignes (h.140), triées décroissant.** Chaque ligne = icône axe 44 px (couleur d'axe) + nom Poppins SemiBold 30 px `#1B2A4A` (colonne largeur 320) + barre 480 × 22, rayon 999, piste `#E6E9EF`, **remplie dans la couleur de l'axe au %** + valeur Sora Bold 32 px couleur d'axe + « ↑ » `#2EC27E` si en hausse :

| Ligne | Nom | Valeur | Couleur d'axe | Remplissage | Tendance |
|---|---|:--:|---|:--:|:--:|
| 1 | ⚙ Discipline | 72 | `#1B2A4A` | 72 % | ↑ |
| 2 | ⚑ Courage | 65 | `#F5A623` | 65 % | ↑ |
| 3 | ✦ Charisme | 61 | `#F7B955` | 61 % | ↑ |
| 4 | ❤ Vitalité | 58 | `#2EC27E` | 58 % | — |
| 5 | ◇ Mental | 54 | `#2E5EAA` | 54 % | — |
| 6 | ✎ Savoir | 40 | `#3D4C8A` | 40 % | — |
| 7 | ✺ Création | 33 | `#B5548A` | 33 % | — |
| 8 | ◈ Prospérité | 28 | `#C79A3A` | 28 % | — |

**E — Carte déséquilibre** (Y 1600→1820) : carte `#FFFFFF` 1000, rayon 40, ombre repos, **liseré gauche 8 px `#C79A3A`** (Prospérité, l'axe le plus bas).
- « 💡 Nourrir ◈ Prospérité ? » Poppins SemiBold 32 px `#1B2A4A`.
- « 3 quêtes proposées » Inter Regular 28 px `#8A93A2` + chevron « → » `#F5A623` (droite). Ton d'invitation, jamais d'injonction.

**F — Carte totaux** (Y 1860→2100) : carte **`#1B2A4A`** (bloc sombre), rayon 40, ombre repos, texte blanc.
- L1 « XP totale 6 240 · Défis validés 128 » — chiffres **6 240** et **128** Sora Bold 36 px `#F5A623`, texte Inter Medium 28 px `#FFFFFF`.
- L2 « Stat dominante : ⚙ Discipline » Inter Medium 28 px `#FFFFFF`.

### Textes EXACTS
`STATISTIQUES` · `Rang 4 · ⚓` · `DÉTAIL PAR STAT` · `⚙ Discipline 72 ↑` · `⚑ Courage 65 ↑` · `✦ Charisme 61 ↑` · `❤ Vitalité 58` · `◇ Mental 54` · `✎ Savoir 40` · `✺ Création 33` · `◈ Prospérité 28` · `💡 Nourrir ◈ Prospérité ?` · `3 quêtes proposées` · `→` · `XP totale 6 240 · Défis validés 128` · `Stat dominante : ⚙ Discipline`

### États
- **Tendance ↑** (`#2EC27E`) présente sur les 3 axes en hausse (Discipline, Courage, Charisme) ; absente sinon.
- **Comparaison** (au toggle) : delta mois dernier affiché en second.

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  STATISTIQUES      Rang 4 · ⚓   │  A  header
│─────────────────────────────────│
│  DÉTAIL PAR STAT                │  D  triées décroissant
│  ⚙ Discipline ███████░░░ 72 ↑   │
│  ⚑ Courage    ██████░░░░ 65 ↑   │
│  ✦ Charisme   ██████░░░░ 61 ↑   │
│  ❤ Vitalité   █████░░░░░ 58     │
│  ◇ Mental     █████░░░░░ 54     │
│  ✎ Savoir     ████░░░░░░ 40     │
│  ✺ Création   ███░░░░░░░ 33     │
│  ◈ Prospérité ██░░░░░░░░ 28     │
│─────────────────────────────────│
│ ▎💡 Nourrir ◈ Prospérité ?      │  E  déséquilibre
│ ▎3 quêtes proposées         →   │     liseré #C79A3A
│─────────────────────────────────│
│ ┌─────────────────────────────┐ │  F  totaux (bloc #1B2A4A)
│ │ XP totale 6 240 · Défis 128 │ │
│ │ Stat dominante : ⚙ Discipline│ │
│ └─────────────────────────────┘ │
│─────────────────────────────────│
│ 🏠  📈  📊(actif)  🎖  👤        │
└─────────────────────────────────┘
```

---

## Écran 5 — Badges (Trophées)

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) le **compteur 9/24 + la grille** (la collection est le sujet) · 2) « Prochain à portée » (objectif court terme, jauge orange) · 3) filtres.

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header (compteur)** | 96 → 280 | 184 | — |
| 3 | **B — Barre de filtres** | 320 → 420 | 100 | gap 40 |
| 4 | **C — Grille 3×3** | 460 → 1620 | 1160 | vignettes 300×300, gouttière 40 |
| 5 | **Légende** | 1660 → 1740 | 80 | gap 40 |
| 6 | **D — Prochain à portée** | 1780 → 2020 | 240 | gap 40 |
| 7 | Tab bar (Trophées actif) | 2190 → 2340 | 150 | — |

### Détail par zone

**A — Header** (Y 96→280) : « MES TROPHÉES » Sora SemiBold 56 px `#1B2A4A` (gauche) · compteur « **9** / 24 » — **9** Sora Bold 44 px `#F5A623`, « / 24 » Inter Medium 32 px `#8A93A2` (droite).

**B — Barre de filtres** (Y 320→420) : 6 pastilles rayon 999, hauteur 76, scroll horizontal, gouttière 16 :
- « Tous » **ACTIF** : fond `#1B2A4A`, texte `#FFFFFF` Inter SemiBold 26 px.
- « 🟢 » `#2EC27E` · « 🔵 » `#2E5EAA` · « 🟣 » `#8B5CF6` · « 🟠 » `#F5A623` · « ??? » — inactifs : fond `#FFFFFF`, texte `#8A93A2`, point de rareté.

**C — Grille** (Y 460→1620) : **3 colonnes × 3 rangées**, vignettes 300 × 300, fond `#FFFFFF`, rayon 40, ombre repos, **liseré 5 px = couleur de rareté**, médaillon ⌀ 150 centré + nom Poppins SemiBold 24 px sur 2 lignes.

| Position | Badge | Rareté (liseré) | État |
|---|---|---|---|
| 1 | Premier feu | 🟢 `#2EC27E` | ▣ débloqué |
| 2 | Lève-tôt | 🟢 `#2EC27E` | ▣ débloqué |
| 3 | Phénix 🔥 | 🔵 `#2E5EAA` | ▣ débloqué |
| 4 | Roc mental | 🔵 `#2E5EAA` | ▣ débloqué |
| 5 | Flamme de fer | 🟣 `#8B5CF6` | ▢ verrouillé |
| 6 | Tueur de BOSS | 🟣 `#8B5CF6` | ▢ verrouillé |
| 7 | L'Année vivante | 🟠 `#F5A623` | ▢ verrouillé |
| 8 | Légende | 🟠 `#F5A623` | ▢ verrouillé |
| 9 | ??? (secret) | ⬛ `#1B2A4A` | ??? caché |

- **Débloqué (▣)** : médaillon en gradient de la rareté, icône blanche outline, liseré coloré, nom `#1B2A4A`.
- **Verrouillé (▢)** : médaillon silhouette `#8A93A2` à 30-40 % d'opacité, icône et nom `#8A93A2`.
- **Secret** : médaillon `#1B2A4A`, « ??? » Sora Bold 44 px `#8A93A2`, pas de nom.
- *(9 débloqués au total, cohérent avec le compteur ; 5 autres débloqués hors écran.)*

**Légende** (Y 1660→1740) : « ▣ débloqué · ▢ à venir · ??? caché » Inter Medium 22 px `#8A93A2`, centrée.

**D — Prochain à portée** (Y 1780→2020) : carte `#FFFFFF` 1000, rayon 40, ombre repos, **liseré gauche 8 px `#2E5EAA`** (Rare).
- « PROCHAIN À PORTÉE » Poppins Bold 22 px `#8A93A2` MAJ.
- « 🔵 Aimant social — 55/100 ✦ » Poppins SemiBold 30 px `#1B2A4A`.
- Jauge 800 × 20, rayon 999, piste `#E6E9EF`, remplie **55 %** en gradient XP + « +120 XP » Sora Bold 28 px `#F5A623` (droite).

### Textes EXACTS
`MES TROPHÉES` · `9 / 24` · `Tous` · `🟢` `🔵` `🟣` `🟠` `???` · `Premier feu` · `Lève-tôt` · `Phénix` · `Roc mental` · `Flamme de fer` · `Tueur de BOSS` · `L'Année vivante` · `Légende` · `???` · `▣ débloqué · ▢ à venir · ??? caché` · `PROCHAIN À PORTÉE` · `🔵 Aimant social — 55/100 ✦` · `+120 XP`

### États badges
- **Débloqué (▣)** : médaillon coloré (gradient rareté), icône blanche, liseré coloré.
- **Verrouillé (▢)** : `#8A93A2` 30 % ; au tap → sheet « comment l'obtenir » (condition + jauge).
- **Secret (???)** : `#1B2A4A`, « ??? », jamais de spoiler.

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  MES TROPHÉES          9 / 24   │  A  compteur (9 orange)
│─────────────────────────────────│
│ [Tous][🟢][🔵][🟣][🟠][???]     │  B  filtres (Tous actif)
│─────────────────────────────────│
│  🟢▣      🟢▣      🔵▣          │  C  grille 3×3
│ Premier  Lève-tôt  Phénix       │     ▣ débloqué
│  feu                            │
│  🔵▣      🟣▢      🟣▢          │
│  Roc      Flamme    Tueur       │     ▢ verrouillé
│  mental   de fer    de BOSS     │
│  🟠▢      🟠▢      ⬛ ???        │
│ L'Année  Légende   secret       │
│ vivante                         │
│─────────────────────────────────│
│  ▣ débloqué · ▢ à venir · ??? caché│  légende
│─────────────────────────────────│
│ ▎PROCHAIN À PORTÉE              │  D  liseré #2E5EAA
│ ▎🔵 Aimant social — 55/100 ✦    │
│ ▎███████████░░░░░░░  +120 XP    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖(actif)  👤        │
└─────────────────────────────────┘
```

---

## Écran 6 — Calendrier 365

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) la **grille 365** (le mur, vert dominant = fierté) · 2) le bandeau série 🔥 (l'élan) · 3) la frise des jalons (caps symboliques) · 4) légende.

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header (compteur)** | 96 → 280 | 184 | — |
| 3 | **B — Bandeau série (bloc sombre)** | 320 → 540 | 220 | gap 40 |
| 4 | **C — Légende (4 items)** | 580 → 660 | 80 | gap 40 |
| 5 | **D — Grille 365 (12 mois)** | 700 → 1920 | 1220 | ligne mois h.96 |
| 6 | **E — Frise des jalons** | 1960 → 2140 | 180 | gap 40 |
| 7 | Tab bar | 2190 → 2340 | 150 | — |

### Détail par zone

**A — Header** (Y 96→280) : « MON ANNÉE » Sora SemiBold 56 px `#1B2A4A` (gauche) · « **128**/365 · 96 % » — **128** Sora Bold 36 px `#2EC27E` (validés), « /365 · 96 % » Inter Medium 28 px `#8A93A2` (droite). *(96 % = validés / jours écoulés.)*

**B — Bandeau série** (Y 320→540) : carte **`#1B2A4A`** (bloc sombre), rayon 40, ombre repos.
- « 🔥 Série 47 · Record 47 » — chiffres **47** Sora Bold 40 px `#F5A623`, texte Inter Medium 28 px `#FFFFFF`.
- Sous-ligne « Bouclier de série : 1 dispo » Inter Regular 26 px `#8A93A2`.

**C — Légende** (Y 580→660) : 4 items sur une ligne, Inter Medium 24 px `#5A6472` :
- « ✓ validé » pastille `#2EC27E` · « ◐ grâce » pastille `#F5A623` · « ○ manqué » contour `#8A93A2` 25 % · « ◆ jalon » `#F5A623`.

**D — Grille 365** (Y 700→1920)
- 12 lignes = 12 mois. Colonne mois (largeur 120) Poppins SemiBold 26 px `#1B2A4A`, aligné à gauche.
- Cases 24 × 24, rayon 12, gouttière 8.
- **Couleurs des cases :** Validé plein `#2EC27E` · Grâce ◐ `#F5A623` · Manqué contour `#8A93A2` 25 % · Futur `#8A93A2` 12 % (non tappable) · Jalon ◆ case `#F5A623` + losange blanc.
- **Liseré de série** `#2EC27E` reliant les cases vertes consécutives.
- **Densité cible :** JAN–AVR quasi pleines (vert), MAI à moitié (jour courant ≈ J128, début mai), JUN→DÉC à venir (gris 12 %).
- **Mois courant (MAI) mis en évidence** : fond `#FFFFFF` + ombre repos.

**E — Frise des jalons** (Y 1960→2140) : titre « JALONS » Poppins Bold 24 px `#1B2A4A`. 5 nœuds reliés par un filet :
- « ● J7 » · « ● J30 » · « ● J90 » — atteints `#2EC27E` (à J128, J90 est franchi).
- « ○ J182 » · « ○ J365 » — à venir `#8A93A2`.
- Labels Poppins SemiBold 24 px.

### Textes EXACTS
`MON ANNÉE` · `128/365 · 96 %` · `🔥 Série 47 · Record 47` · `Bouclier de série : 1 dispo` · `✓ validé` · `◐ grâce` · `○ manqué` · `◆ jalon` · `JAN` `FÉV` `MAR` `AVR` `MAI` `JUN` … `DÉC` · `JALONS` · `● J7` · `● J30` · `● J90` · `○ J182` · `○ J365`

### États des cases
- **Validé** vert `#2EC27E` · **Grâce** (bouclier) orange `#F5A623` ◐ · **Manqué** contour gris `#8A93A2` 25 % ○ · **Futur** gris 12 % (non tappable) · **Jalon** ◆ orange.

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  MON ANNÉE      128/365 · 96 %  │  A  compteur (128 vert)
│─────────────────────────────────│
│ ┌─────────────────────────────┐ │  B  bandeau série (#1B2A4A)
│ │ 🔥 Série 47   ·   Record 47 │ │
│ │ Bouclier de série : 1 dispo │ │
│ └─────────────────────────────┘ │
│─────────────────────────────────│
│  ✓ validé ◐ grâce ○ manqué ◆ jalon│  C  légende
│─────────────────────────────────│
│        1   5  10  15  ...  31   │  D  grille 365
│  JAN ✓✓✓✓✓ ✓✓◐✓✓ ✓✓✓✓✓ ✓✓✓◆..  │  ◆ = J30
│  FÉV ✓✓✓✓✓ ✓✓✓✓○ ✓✓✓✓✓ ✓✓✓..    │
│  MAR ✓✓✓✓✓ ✓✓✓◆✓ ✓✓✓✓✓ ...      │  ◆ = J90
│  AVR ✓✓✓✓✓ ✓✓✓◐✓ ✓✓✓✓✓ ...      │
│  MAI ✓✓✓✓✓ ✓✓✓░░ ░░░░░ ...      │  ← mois courant (J128)
│  JUN→DÉC ░░░░░░░░░░░ (à venir)   │
│─────────────────────────────────│
│  JALONS                         │  E  frise
│  ●J7  ●J30  ●J90  ○J182  ○J365  │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │
└─────────────────────────────────┘
```

---

## Écran 7 — Récompenses

**Dimensions :** 1080 × 2340 px · marges 40 px · fond `#F7F8FA`.
**Hiérarchie visuelle :** 1) les **certificats** (objets précieux, bordure dorée) · 2) la Carte de l'Année (point de partage) · 3) les titres de rang (identité portée) · 4) les sceaux (collection secondaire).

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | Status bar | 0 → 64 | 64 | — |
| 2 | **A — Header** | 96 → 240 | 144 | — |
| 3 | **B — Carrousel certificats** | 280 → 1180 | 900 | gap 40 |
| 4 | **C — Sceaux de stat (×8)** | 1220 → 1400 | 180 | gap 40 |
| 5 | **D — Titres de rang** | 1440 → 1660 | 220 | gap 40 |
| 6 | **E — Carte de l'Année** | 1700 → 1980 | 280 | gap 40 |
| 7 | **F — CTA (Partager / PDF)** | 2020 → 2180 | 160 | gap 40 |

### Détail par zone

**A — Header** (Y 96→240) : « RÉCOMPENSES » Sora SemiBold 56 px `#1B2A4A`.

**B — Carrousel certificats** (Y 280→1180)
- Titre « CERTIFICATS » Poppins Bold 26 px `#1B2A4A` MAJ + dots « ‹ ● ○ ○ › » (actif `#F5A623`).
- **Carte-certificat 900 × 700** : fond papier crème `#FBF7EE`, **double bordure dorée `#C79A3A`** (6 px + filet 2 px intérieur), rayon 24, **ombre modale/héros**.
  - « CERTIFICAT · J90 » Sora SemiBold 34 px `#1B2A4A`.
  - « ~ Cap Franchi ~ » Inter Italic 28 px `#C79A3A`.
  - Filet séparateur `#C79A3A` 2 px.
  - Sceau de cire ⌀ 140, gradient `#C79A3A → #8A6E28`, icône cairn 🏔️ blanche centrée.
  - « Lucas » Poppins SemiBold 30 px `#1B2A4A` (nominatif).
  - « Délivré au J90 » Inter Medium 24 px `#8A93A2` (daté).
- Statuts sous la carte : « J30 ✓ · J90 ✓ · J182 🔒 · J365 🔒 » — ✓ `#2EC27E`, 🔒 `#8A93A2`. *(À J128 : J30 et J90 franchis ; J182 et J365 verrouillés.)*

**C — Sceaux de stat** (Y 1220→1400) : titre « SCEAUX DE STAT » Poppins Bold 26 px `#1B2A4A`. 8 sceaux ronds ⌀ 96, gouttière 16 : « ⚙○ ⚑○ ❤○ ✦○ ◇○ ✎○ ✺○ ◈○ ». **Aucun estampé** (le plus haut axe, Discipline 72/100, n'atteint pas 100 pts) → les 8 en `#8A93A2` 25 % (état « à venir »), la jauge la plus avancée sur ⚙ Discipline.

**D — Titres de rang** (Y 1440→1660) : « TITRES DE RANG » Poppins Bold 26 px `#1B2A4A`.
- Puce du titre porté « ▸ “le·la Constant·e” (porté) » : fond `#1B2A4A`, texte `#FFFFFF` Poppins SemiBold 28 px, chevron ▸ `#F5A623`.
- Bouton « Porter un autre titre » : fond transparent, contour `#1B2A4A` 3 px, rayon 28, texte `#1B2A4A` Poppins SemiBold 26 px.

**E — Carte de l'Année** (Y 1700→1980) : carte `#FFFFFF` 1000, rayon 40, ombre repos, **verrouillée** : badge « 🔒 J365 » `#8A93A2` en haut à droite.
- Aperçu fresque = mosaïque `#2EC27E` / `#F5A623` / `#8A93A2` 12 %, **remplie à ≈ 35 %** (cohérent avec Jour 128).
- Légende « Fresque qui se remplit au fil des 365 défis » Inter Regular 24 px `#8A93A2`.

**F — CTA** (Y 2020→2180)
- « Partager » : bouton 480 × 132, **gradient XP `#F5A623 → #FF7A00`**, rayon 28, ombre bouton accent, texte Poppins Bold 28 px `#FFFFFF`.
- « Télécharger PDF » : bouton 480 × 132, fond transparent, contour `#1B2A4A` 3 px, rayon 28, texte `#1B2A4A` Poppins SemiBold 28 px.

### Textes EXACTS
`RÉCOMPENSES` · `CERTIFICATS` · `CERTIFICAT · J90` · `~ Cap Franchi ~` · `Lucas` · `Délivré au J90` · `J30 ✓ · J90 ✓ · J182 🔒 · J365 🔒` · `SCEAUX DE STAT` · `TITRES DE RANG` · `▸ "le·la Constant·e" (porté)` · `Porter un autre titre` · `CARTE DE L'ANNÉE` · `🔒 J365` · `Fresque qui se remplit au fil des 365 défis` · `Partager` · `Télécharger PDF`

### États
- **Certificat débloqué** : J30, J90 (bordure dorée, sceau estampé). **Verrouillé** : J182, J365 (silhouette + condition « Atteins le jour 182 / 365 »).
- **Sceaux de stat** : 0/8 estampés (aucun axe à 100). **Titre porté** : « le·la Constant·e ». **Carte de l'Année** : verrouillée jusqu'à J365.

### Maquette ASCII
```
┌─────────────────────────────────┐ 1080 × 2340
│ 9:41              ▂▄ 100%        │
│─────────────────────────────────│
│  RÉCOMPENSES                    │  A
│─────────────────────────────────│
│  CERTIFICATS        ‹ ● ○ ○ ›   │  B  carrousel
│  ╔═════════════════════════════╗│     papier crème + bordure dorée
│  ║   CERTIFICAT · J90          ║│
│  ║   ~ Cap Franchi ~           ║│
│  ║   ──────────────────        ║│
│  ║      (sceau de cire)        ║│
│  ║   Lucas                     ║│     nominatif
│  ║   Délivré au J90            ║│     daté
│  ╚═════════════════════════════╝│
│   J30✓  J90✓  J182🔒  J365🔒    │
│─────────────────────────────────│
│  SCEAUX DE STAT                 │  C
│  ⚙○ ⚑○ ❤○ ✦○ ◇○ ✎○ ✺○ ◈○      │     aucun à 100 pts
│─────────────────────────────────│
│  TITRES DE RANG                 │  D
│  ▸ « le·la Constant·e » (porté) │
│  [ Porter un autre titre ]      │
│─────────────────────────────────│
│  CARTE DE L'ANNÉE     🔒 J365   │  E  verrouillée
│  ┌─────────────────────────────┐│
│  │ ▦▦▦░░░ fresque qui se       ││     remplie ≈ 35 %
│  │ ▦░░░░░ remplit au fil…      ││
│  └─────────────────────────────┘│
│─────────────────────────────────│
│  [ Partager ] [ Télécharger PDF]│  F
└─────────────────────────────────┘
```

---

## Écran 8 — Wrapped annuel

**Dimensions : 1080 × 1920 px** (story) · zones de sécurité 250 px haut/bas · fond dégradé bleu nuit.
**Hiérarchie visuelle :** 1) le **grand chiffre XP 6 240** (dominant, 160 px) · 2) les blocs stats (série, rang, plus haut défi) · 3) le mini-radar delta · 4) le pied de marque.

> **Note de production (honnêteté) :** le Wrapped est présenté comme **bilan annuel**, mais les chiffres conservés restent alignés sur l'instantané J128 (série 47, XP 6 240, 128 défis, 9 badges, radar identique). Aucune fausse promesse. Le plus haut défi affiché est générique (diff 8/10), jamais une note perso.

### Ordre des composants (haut → bas)

| # | Zone | Y (px) | Hauteur | Espacements |
|:--:|---|---|---|---|
| 1 | **Fond dégradé** | 0 → 1920 | 1920 | pleine surface |
| 2 | **Titre (wordmark + année)** | 300 → 460 | 160 | zone de sécurité 250 |
| 3 | **Grand chiffre XP** | 500 → 800 | 300 | — |
| 4 | **Blocs stats (×3)** | 840 → 1180 | 340 | — |
| 5 | **Mini-radar delta** | 1220 → 1560 | 340 | — |
| 6 | **Ligne totaux** | 1580 → 1660 | 80 | — |
| 7 | **Pied de marque** | 1680 → 1820 | 140 | zone de sécurité 250 |

### Détail par zone

**Fond** : dégradé bleu nuit vertical `#1B2A4A → #0F1A30` + silhouette sommet `#2E5EAA` 10 % ou grain 5 %. *(Alternative fête autorisée : gradient Wrapped `#1B2A4A → #6D3CE0 → #F5A623` à 160°.)*

**Titre** (Y 300→460)
- « CAP365 » Sora Bold 48 px `#F5A623`, tracking +12 %, centré.
- « Ton année 2026 » Poppins SemiBold 32 px `#FFFFFF`, encadré de 2 points « ● » `#F5A623`.

**Grand chiffre XP** (Y 500→800)
- « **6 240** » Sora Bold **160 px** `#F5A623`, ombre `#0F1A30` 30 %, centré.
- Label « XP GAGNÉS » Poppins Bold 30 px `#8A93A2` MAJ.

**Blocs stats** (Y 840→1180), centrés :
- « 🔥 Record de série · 47 jours » — **47** Sora Bold 52 px `#F5A623`, texte `#FFFFFF`.
- « 🏆 Rang atteint · 4 · CONSTANT » — Sora Bold 44 px `#FFFFFF`, emblème ⚓ `#F5A623`.
- « ⭐ Plus haut défi relevé · diff 8/10 » — **8/10** Sora Bold 40 px `#F5A623`, texte `#FFFFFF`.

**Mini-radar delta** (Y 1220→1560) : radar ⌀ 420 centré.
- Silhouette **début** en pointillés `#8A93A2`.
- Silhouette **actuelle** pleine `#F5A623` 25 %, contour `#F5A623` 4 px (valeurs = radar verrouillé ⚙72 ⚑65 ✦61 ❤58 ◇54 ✎40 ✺33 ◈28).
- Légende « Début → Aujourd'hui » Inter Medium 24 px `#8A93A2`.

**Ligne totaux** (Y 1580→1660) : « 128 défis validés · 9 / 24 badges · série record 47 » Inter Medium 28 px `#FFFFFF`, chiffres **128**, **9**, **47** en `#2EC27E`.

**Pied de marque** (Y 1680→1820)
- Slogan « Un défi par jour. Une version de toi par an. » Poppins SemiBold 30 px `#FFFFFF`, 2 lignes, centré.
- « @cap365 · une aventure Cairn » Inter Medium 24 px `#8A93A2` + logo cairn 🏔️ `#F5A623`.

### Textes EXACTS
`CAP365` · `Ton année 2026` · `6 240` · `XP GAGNÉS` · `🔥 Record de série · 47 jours` · `🏆 Rang atteint · 4 · CONSTANT` · `⭐ Plus haut défi relevé · diff 8/10` · `Début → Aujourd'hui` · `128 défis validés · 9 / 24 badges · série record 47` · `Un défi par jour. Une version de toi par an.` · `@cap365 · une aventure Cairn`

### États / garde-fous
- **Aucune promesse interdite** : uniquement effort et régularité (XP, défis, série, badges). Aucun classement contre autrui. Plus haut défi générique (pas de note perso).
- **Version instantané J128 (démo)** et **version projetée J365** clairement distinguées à l'export.

### Maquette ASCII
```
┌─────────────────────────────┐ 1080 × 1920
│                             │  fond bleu nuit dégradé
│        C A P 3 6 5          │  wordmark #F5A623
│      ● Ton année 2026 ●     │
│                             │
│   ┌─────────────────────┐   │
│   │      6 240          │   │  grand chiffre XP (160 px)
│   │      XP GAGNÉS      │   │
│   └─────────────────────┘   │
│                             │
│   🔥 Record de série        │
│         47 jours            │
│   🏆 Rang atteint           │
│      4 · CONSTANT           │
│   ⭐ Plus haut défi          │
│      diff 8/10              │
│                             │
│        ╱⚙╲   mini-radar     │  delta début → aujourd'hui
│      ✦     ⚑                │  actuel plein #F5A623
│        ╲◇╱                  │  début pointillés #8A93A2
│   Début → Aujourd'hui       │
│                             │
│  128 défis · 9/24 badges    │  chiffres #2EC27E
│  série record 47            │
│                             │
│   Un défi par jour.         │  slogan
│  Une version de toi par an. │
│  @cap365 · une aventure Cairn│  handle + marque
└─────────────────────────────┘
```

---

## Tableau récap — Écran → fichier Canva → dimensions

| # | Écran | Fichier Canva | Dimensions (px) | Variantes à exporter |
|:--:|---|---|:--:|---|
| 1 | Accueil / Dashboard | `cap365_capture_dashboard_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 2 | Défi du jour | `cap365_capture_defi_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 3 | Radar RPG | `cap365_capture_radar_[claire\|dark]_[mockup\|plein]_v1.png` | **1080 × 2340** | claire **+ dark** · mockup + plein |
| 4 | Statistiques | `cap365_capture_stats_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 5 | Badges (Trophées) | `cap365_capture_badges_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 6 | Calendrier 365 | `cap365_capture_calendrier_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 7 | Récompenses | `cap365_capture_recompenses_claire_[mockup\|plein]_v1.png` | **1080 × 2340** | claire · mockup + plein |
| 8 | Wrapped annuel | `cap365_capture_wrapped_story_v1.png` | **1080 × 1920** | 1 slide synthèse (+ série 4-5 slides) |

**Déclinaisons optionnelles :** écrans 1, 3, 5, 8 en **1080 × 1080** (carré) pour vignettes de section / posts feed. Export **PNG @2×**, fond opaque (transparence réservée aux sceaux/emblèmes).

---

## Check-list de cohérence (avant export)

**Mêmes données partout (persona verrouillée) :**
- [ ] Identité : **Lucas · Jour 128/365 (35 %) · Niv 18 · Rang 4 — Constant ⚓ « le·la Constant·e »**.
- [ ] Élan : **série 47 🔥 (record 47) · bouclier 1 dispo · XP total 6 240 · 128 défis validés**.
- [ ] Radar identique écrans 3, 4, 8 : **⚙72 · ⚑65 · ✦61 · ❤58 · ◇54 · ✎40 · ✺33 · ◈28** ; dominante ⚙ Discipline ; en retrait ✺ Création (33) & ◈ Prospérité (28).
- [ ] Défi du jour identique écrans 1 et 2 : **« Le coup de fil qui pique » · Social · ✦ Charisme · diff 6/10 · +60 XP · +2 ✦ · 🔥 +20 XP**.
- [ ] Collection : **badges 9/24** (écrans 5, 8) · prochain « Aimant social » 55/100 · quête hebdo « 3 défis Courage » 2/3, +100 XP (écran 1).
- [ ] Jalons (écrans 6, 7) : à J128 **J7 · J30 · J90 franchis** ; **J182 · J365 verrouillés**. Certificats J30/J90 obtenus. Sceaux de stat **0/8** (aucun axe à 100).

**Mêmes HEX partout (kit verrouillé) :**
- [ ] Primaire `#1B2A4A` · Secondaire `#2E5EAA` · **Accent `#F5A623`** · Succès `#2EC27E` · Neutre `#8A93A2` · Bordure `#E6E9EF` · Fond `#F7F8FA` · Surface `#FFFFFF`.
- [ ] Stats : ⚙`#1B2A4A` ⚑`#F5A623` ✦`#F7B955` ❤`#2EC27E` ◇`#2E5EAA` ✎`#3D4C8A` ✺`#B5548A` ◈`#C79A3A`.
- [ ] Raretés : 🟢`#2EC27E` 🔵`#2E5EAA` 🟣`#8B5CF6` 🟠`#F5A623`. Rang Constant `#3B82C4`. Certificat papier `#FBF7EE` + doré `#C79A3A`.

**Orange = ACTION uniquement :**
- [ ] `#F5A623` réservé aux : boutons/CTA, XP, jauges qui montent (année, quêtes, prochain badge, difficulté pleine), série 🔥, jalons, chiffres héros. **Jamais** en décor, jamais sur du texte inactif.
- [ ] Vert `#2EC27E` = validé / série active / cases pleines. Gris `#8A93A2` = inactif, verrouillé, jour manqué (**jamais de rouge**).

**Système & rendu :**
- [ ] Format 1080 × 2340 (Wrapped 1080 × 1920) · marges 40 px · fond `#F7F8FA` plein.
- [ ] Status bar « 9:41 » + tab bar 5 onglets identiques sur les écrans 1, 4, 5, 6 (navigation).
- [ ] Rayons carte 40, bouton 28, cases calendrier 12 ; ombres repos/héros du kit ; Poppins/Sora (titres, chiffres) + Inter (corps ≥ 26 px).
- [ ] Un chiffre héros par écran en police géométrique grasse orange.
- [ ] **Aucune promesse interdite · aucune note personnelle exposée · aucune comparaison entre personnes** — sur les 8 écrans.

---

*Document de production — Cap365 · Specs finales des 8 écrans. Source de vérité design : `livraison-visuelle/01-kit-graphique.md`. Persona de démo unique : Lucas, J128/365, Rang 4 Constant. À reproduire dans Canva sans réfléchir.*
