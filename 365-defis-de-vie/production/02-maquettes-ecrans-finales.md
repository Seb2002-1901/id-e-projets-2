# Cap365 — Maquettes d'écrans FINALES (verrouillées)

> **Marque mère : Cairn** · **Produit : Cap365 — 365 Défis de Vie**
> Slogan : *« Un défi par jour. Une version de toi par an. »*
>
> **Statut : PRODUCTION — maquettes verrouillées.** Ce document est la **référence exacte** pour la fabrication Canva. Aucune nouvelle fonctionnalité : il consolide `experience/02-ecrans-et-templates.md` et `lancement-commercial/08-captures-et-brief-canva.md` en 8 écrans finaux, tous alimentés par **une seule et même persona de démo**. Les valeurs sont identiques d'un écran à l'autre — c'est la règle de cohérence n°1.

---

## 0. Persona de démo VERROUILLÉE (mêmes valeurs sur TOUS les écrans)

> **Ne jamais dévier de ces chiffres.** Toute la crédibilité premium vient de leur cohérence d'un visuel à l'autre.

| Donnée | Valeur verrouillée | Dérivé calculé |
|---|---|---|
| Prénom | **Lucas** | — |
| Jour | **128 / 365** | → **35 %** d'année |
| Niveau | **18** | → progression vers Niv 19 |
| Rang | **4 — Constant** ⚓ · titre « le·la Constant·e » | 4ᵉ des 10 rangs (Éveil → Légende) |
| Série | **47 🔥** (record 47) | — |
| XP total | **6 240** | — |
| Bouclier de série | **1 dispo** (journée de grâce hebdo) | — |
| Badges | **9 / 24** | 4 raretés |
| Quête hebdo | **« 3 défis Courage » — 2/3** | prime +100 XP |

**Radar (8 axes, sur 100) — déséquilibre visible :**

| Stat | Icône | Valeur | Couleur d'axe | Lecture |
|---|:--:|:--:|---|---|
| Discipline | ⚙ | **72** | `#1B2A4A` | axe fort |
| Courage | ⚑ | **65** | `#F5A623` | fort |
| Charisme | ✦ | **61** | `#F7B955` | moyen |
| Vitalité | ❤ | **58** | `#2EC27E` | moyen |
| Mental | ◇ | **54** | `#2E5EAA` | moyen |
| Savoir | ✎ | **40** | `#3D4C8A` | bas |
| Création | ✺ | **33** | `#B5548A` | **en retrait** |
| Prospérité | ◈ | **28** | `#C79A3A` | **le plus en retrait** |

- **Stat dominante :** ⚙ Discipline (72). **Axes en retrait :** ✺ Création (33) & ◈ Prospérité (28).

**Défi du jour (J128) — VERROUILLÉ :**

| Champ | Valeur |
|---|---|
| Titre | **« Le coup de fil qui pique »** |
| Catégorie | Social |
| Stat impactée | ✦ **Charisme** |
| Difficulté | **6 / 10** |
| XP | **+60 XP** *(canon : XP = difficulté × 10 = 6 × 10)* |
| Points de stat | **+2 ✦** *(canon : diff 4-6 → +2)* |
| Bonus série | **🔥 +20 XP** *(streak plafond)* |

### 0.1 Charte appliquée (hex verrouillés)

| Rôle | HEX | Usage |
|---|---|---|
| 🔵 Primaire (bleu nuit) | `#1B2A4A` | en-têtes, texte fort, blocs sombres, remplissage radar |
| 🔷 Secondaire (bleu) | `#2E5EAA` | sous-titres, étiquettes, filets, liens |
| 🟠 Accent (orange) | `#F5A623` | **action uniquement** : XP, boutons, jauges qui montent, série, jalons |
| 🟢 Succès (vert) | `#2EC27E` | validation ✓, série en cours, jauges remplies |
| ⬜ Neutre (gris-bleu) | `#8A93A2` | texte secondaire, inactif, cases vides, verrouillé |
| 🤍 Fond (blanc cassé) | `#F7F8FA` | fond général (jamais de blanc pur en grande surface) |
| ⚪ Blanc pur | `#FFFFFF` | cartes posées sur le fond, texte sur bloc sombre |
| 🖤 Fond dark | `#0F1A30` | option dark mode |

**Raretés badges :** 🟢 Commun `#2EC27E` · 🔵 Rare `#2E5EAA` · 🟣 Épique `#8B5CF6` · 🟠 Légendaire `#F5A623`.
**Polices :** Sora / Poppins (titres, chiffres) · Inter (corps, légendes). Corps ≥ 26 px sur cadre 1080.
**Formes :** carte rayon 44 · bouton 34 · pastille 22 · vignette badge 40 · case calendrier 6. Ombre standard `#1B2A4A` 12 % / flou 44 / Y +11. Ombre héros 16 % / flou 60 / Y +16.
**Cadre mobile de référence :** **1080 × 1920 px** (mockup story vertical), marges latérales 48 px, status bar « 9:41 », tab bar 5 onglets. Mobile-first.

**Garde-fous permanents :** aucune promesse interdite (ni richesse, ni bonheur, ni vie parfaite — uniquement l'effort et la régularité) · aucune note personnelle exposée · aucune comparaison entre personnes.

---

## Écran 1 — Accueil / Dashboard

**Objectif :** en moins de 3 secondes, donner l'unique chose à faire aujourd'hui (le défi du jour) et la preuve qu'on progresse (série 🔥, niveau/rang, XP) — zéro paralysie de choix.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │  status bar
│─────────────────────────────────│
│  Cap365        🔥 47   ◐ Niv 18 │  A  série · niveau/rang
│                        Constant │
│─────────────────────────────────│
│  Salut, Lucas.     Jour 128/365 │  B  salutation + jour
│  ████████████░░░░░░░░░░░  35 %  │     mini-jauge année (orange)
│─────────────────────────────────│
│  QUÊTE DU JOUR        diff 6/10 │  C  carte héros (blanche)
│  ┌───────────────────────────┐  │
│  │ ✦ CHARISME · Social       │  │     puce stat (charisme)
│  │                           │  │
│  │ « Le coup de fil          │  │     titre du défi
│  │   qui pique »             │  │
│  │                           │  │
│  │ ●●●●●●○○○○                 │  │     jauge difficulté 6/10
│  │ +60 XP · +2 ✦ · 🔥 +20 XP │  │     gains + bonus série
│  │                           │  │
│  │ [  ✔  RELEVER LE DÉFI  ]  │  │     ← CTA orange plein
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  TES QUÊTES        ‹ ● ○ ○ ›    │  D  carrousel quêtes
│  ┌──────────┐ ┌──────────┐      │
│  │HEBDO     │ │MOIS·BOSS │  →   │
│  │2/3 ⚑Courg│ │J-9  ◈    │      │
│  │██████░ +100│ │████░ +300│    │
│  └──────────┘ └──────────┘      │
│─────────────────────────────────│
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐    │  E  raccourcis ×4
│  │ 📊 │ │ 🗓 │ │ 🎖 │ │ 🏅 │    │
│  │Héros│ │365 │ │Trop│ │Récp│   │
│  └────┘ └────┘ └────┘ └────┘    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │  F  tab bar (Accueil actif)
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **Status bar** — Y 0→60 · « 9:41 » Inter SemiBold 26 px `#1B2A4A` (gauche), icônes signal/wifi/batterie 100 % `#1B2A4A` (droite).
2. **A — Header** — Y 60→230 · wordmark « Cap365 » Sora SemiBold 40 px `#1B2A4A` (gauche) · pastille série `🔥 47` (rayon 22, fond `#FFFFFF`, ombre std) chiffre Sora Bold 34 px `#F5A623` · pastille niveau `◐ Niv 18` Poppins SemiBold 28 px `#1B2A4A` + sous-ligne « Constant » Inter Medium 20 px `#8A93A2` (droite).
3. **B — Salutation + jour** — Y 250→400 · « Salut, Lucas. » Sora SemiBold 44 px `#1B2A4A` (gauche) · « Jour 128 / 365 » Inter Medium 26 px `#8A93A2` (droite). Jauge fine année 984×16, fond `#8A93A2` 15 %, remplie `#F5A623` à **35 %**, label « 35 % » Inter SemiBold 22 px `#F5A623`.
4. **C — Carte défi du jour (HÉROS)** — Y 430→1080 · carte 984 px `#FFFFFF` rayon 44 **ombre héros**. Puce stat `✦ CHARISME · Social` pastille rayon 22 fond `#F7B955` texte `#FFFFFF` Poppins Bold 22 px MAJ · `diff 6/10` Inter Medium 24 px `#8A93A2` (droite). Titre « Le coup de fil qui pique » Poppins SemiBold 40 px `#1B2A4A`. Jauge difficulté : 10 puces ⌀34, **6 pleines `#F5A623`** + 4 vides `#8A93A2` 25 %. Gains `+60 XP` Sora Bold 30 px `#F5A623` · `+2 ✦` 26 px `#F5A623` · `🔥 +20 XP` 26 px `#F5A623`. **CTA** 984×132 fond `#F5A623` rayon 34, « ✔ RELEVER LE DÉFI » Poppins Bold 32 px `#FFFFFF`.
5. **D — Carrousel quêtes** — Y 1110→1420 · titre « TES QUÊTES » Poppins Bold 24 px `#1B2A4A` MAJ · dots `‹ ● ○ ○ ›` (actif `#F5A623`). Carte **HEBDO** : label `#2E5EAA`, « 2/3 ⚑ Courage », jauge 400×14 remplie `#F5A623` à **66 %**, prime `+100 XP` `#F5A623`. Carte **MOIS · BOSS** : label `#B5548A`, « J-9 ◈ », jauge 80 %, prime `+300 XP`.
6. **E — Raccourcis** — Y 1450→1690 · 4 tuiles 220×220 `#FFFFFF` rayon 40, icône outline 64 px `#1B2A4A` + label Inter SemiBold 22 px : Héros · 365 · Trophées · Récomp.
7. **F — Tab bar** — Y 1770→1920 · **Accueil actif** (pictogramme `#F5A623`, label `#1B2A4A`), 4 autres `#8A93A2`.

### États
- **Défi actif (défaut)** : carte blanche, CTA orange plein.
- **Défi validé aujourd'hui** : carte en liseré vert `#2EC27E` + ✓ « Fait », CTA remplacé par « Reviens demain » (grisé `#8A93A2`) + suggestion défi bonus optionnel.
- **Chargement** : squelettes gris clair animés (jamais d'écran blanc).

---

## Écran 2 — Défi du jour

**Objectif :** présenter LE défi de façon claire, motivante et relevable, puis transformer « j'ai fait » en récompense célébrée.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  ‹ retour   Jour 128/365        │  A  header
│             ●●●●●●○○○○  6/10     │     jauge difficulté
│─────────────────────────────────│
│  ┌───────────────────────────┐  │  B  bandeau stat (charisme)
│  │ ✦  CHARISME · Social      │  │
│  └───────────────────────────┘  │
│                                 │
│  Le coup de fil qui pique       │  C  titre (gros)
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
│  (🟢 Plus doux)(⚪ Standard)     │
│  (🟠 Plus fort  +20 XP)         │
│                                 │
│  💬 « Le charisme, c'est oser   │  G  micro-coaching
│     le premier mot. »           │
│─────────────────────────────────│
│  [   ✔   JE L'AI FAIT   ]       │  H  CTA sticky
│  [   Reporter à ce soir   ]     │
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→260 · flèche « ‹ » retour Poppins 40 px `#1B2A4A` (gauche) · « Jour 128 / 365 » Poppins SemiBold 30 px `#1B2A4A` (centre). Jauge difficulté : 10 puces ⌀30, **6 pleines `#F5A623`** + 4 vides `#8A93A2` 25 %, suivi « 6/10 » Inter SemiBold 24 px `#8A93A2`.
2. **B — Bandeau stat** — Y 290→400 · rectangle 984 fond `#F7B955` (couleur Charisme) rayon 34, hauteur 96, ombre std. « ✦ CHARISME · Social » Poppins Bold 28 px `#FFFFFF` MAJ, icône étoile outline blanc.
3. **C — Titre** — Y 440→640 · « Le coup de fil qui pique » **Sora Bold 52 px** `#1B2A4A`, interligne 1,2, gauche.
4. **D — Méta-rangée** — Y 680→860 · carte `#FFFFFF` 984 rayon 44, 3 colonnes (filets `#8A93A2` 15 %) : DIFF `6/10` valeur Sora Bold 40 px `#1B2A4A` · GAIN `+60 XP` `#F5A623` · STAT `+2 ✦` `#F5A623`.
5. **E — Instructions** — Y 900→1180 · « Comment faire : » Poppins SemiBold 30 px `#1B2A4A` · corps Inter Regular 28 px `#1B2A4A` interligne 1,4.
6. **F — Variantes** — Y 1220→1480 · « Adapter le défi : » Poppins SemiBold 30 px. 3 pastilles rayon 22 h.84 : `🟢 Plus doux` contour `#2EC27E` 3 px ; `⚪ Standard` **sélectionnée** fond `#1B2A4A` texte `#FFFFFF` ; `🟠 Plus fort · +20 XP` contour `#F5A623` 3 px.
7. **G — Micro-coaching** — Y 1500→1640 · « 💬 “Le charisme, c'est oser le premier mot.” » Inter Italic 28 px `#2E5EAA`.
8. **H — Zone d'action sticky** — Y 1660→1920 · rectangle blanc dégradé vers `#F7F8FA`. CTA primaire 984×132 `#F5A623` « ✔ JE L'AI FAIT » Poppins Bold 34 px `#FFFFFF`. Secondaire 984×100 contour `#1B2A4A` 3 px « Reporter à ce soir » Poppins SemiBold 28 px `#1B2A4A`.

### États
- **Défaut** : variante Standard active (diff 6/10, +60 XP).
- **Variante Plus doux** : diff recalculée 4/10 → +40 XP · +2 ✦ (diff 4 reste palier +2).
- **Variante Plus fort** : diff 8/10 → +80 XP · +3 ✦ (diff 7-10 → +3).
- **Reporté** : toast de confirmation + rappel local planifié.
- **Validé** : ouvre la séquence de validation (check vert tracé, compteur +60 XP de 0→60).

---

## Écran 3 — Radar de progression (8 stats)

**Objectif :** montrer « qui est ton héros » d'un coup d'œil (la signature octogonale) et révéler le déséquilibre sans jugement — ici Création/Prospérité en retrait.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MON HÉROS          Rang 4 · ⚓  │  A  header
│  « le·la Constant·e »           │
│─────────────────────────────────│
│              ⚙ 72               │  B  radar 8 axes
│            ╱   │   ╲             │
│      ◈ 28 ╱    │    ╲ ⚑ 65       │
│         ╱   ◢█████◣   ╲          │
│  ✺ 33 ●──── ███████ ────● ❤ 58  │     zone pleine = bleu nuit
│         ╲   ◥█████◤   ╱          │
│      ✎ 40 ╲    │    ╱ ✦ 61       │
│            ╲   │   ╱             │
│              ◇ 54               │
│─────────────────────────────────│
│  [ ◷ Comparer au mois dernier ] │
│─────────────────────────────────│
│  Fort en ⚙ Discipline & ⚑ Courg │  C  lecture
│  En retrait : ◈ Prospérité (28) │
│─────────────────────────────────│
│  XP totale 6 240 · Défis 128    │  F  totaux
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→280 · « MON HÉROS » Sora SemiBold 44 px `#1B2A4A` (ou `#F2F5FA` dark) · pastille « Rang 4 · ⚓ » Poppins SemiBold 28 px · sous-ligne « “le·la Constant·e” » Inter Italic 26 px `#8A93A2`.
2. **B — Radar octogonal** — Y 320→1160 · ⌀ ≈ 840 px centré. 4 anneaux octogonaux (25/50/75/100 %) trait `#8A93A2` 20 %. **Labels aux pointes (ordre horaire depuis le haut)** : `⚙ 72` (Discipline, haut) · `⚑ 65` (Courage) · `✦ 61` (Charisme) · `◇ 54` (Mental, bas) · `✎ 40` (Savoir) · `✺ 33` (Création) · `◈ 28` (Prospérité) · `❤ 58` (Vitalité). Chaque label = icône couleur d'axe + valeur Sora Bold 30 px de la couleur d'axe. **Silhouette** : polygone des 8 valeurs, rempli `#1B2A4A` 20 %, contour `#F5A623` 4 px, sommets ⌀14 `#F5A623`.
3. **Bouton comparer** — Y 1200→1300 · pastille pleine largeur contour `#2E5EAA` 3 px « ◷ Comparer au mois dernier » Poppins SemiBold 28 px `#2E5EAA`.
4. **C — Lecture du radar** — Y 1340→1560 · carte `#FFFFFF` rayon 44. L1 « Fort en ⚙ Discipline & ⚑ Courage » Poppins SemiBold 30 px `#1B2A4A`. L2 « En retrait : ◈ Prospérité (28) » Inter Regular 28 px `#8A93A2` — ton bienveillant.
5. **F — Totaux** — Y 1600→1760 · « XP totale **6 240** · Défis validés **128** · Stat dominante ⚙ Discipline » chiffres Sora Bold 32 px `#F5A623`, labels Inter Medium 24 px `#8A93A2`.

### États
- **Version claire** (fond `#F7F8FA`) + **version dark** (fond `#0F1A30`, silhouette dégradé `#F5A623 → #2EC27E` 25 %) — les deux à produire.
- **Mode comparaison** : radar « mois dernier » en pointillés gris `#8A93A2`, radar actuel en plein superposé, fil orange = aujourd'hui.

---

## Écran 4 — Statistiques (détail par stat)

**Objectif :** le complément « data » du radar — barres triées, tendances ↑, invitation bienveillante à nourrir l'axe le plus en retrait.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  STATISTIQUES       Rang 4 · ⚓  │  A  header
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
│  💡 Nourrir ◈ Prospérité ?      │  E  déséquilibre
│  3 quêtes proposées         →   │
│─────────────────────────────────│
│  XP totale 6 240 · Défis 128    │  F  totaux
│  Stat dominante : ⚙ Discipline  │
│─────────────────────────────────│
│ 🏠  📈  📊(actif)  🎖  👤        │
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→220 · « STATISTIQUES » Sora SemiBold 44 px `#1B2A4A` · pastille « Rang 4 · ⚓ » Poppins SemiBold 28 px (droite).
2. **D — Détail par stat** — Y 260→1240 · titre « DÉTAIL PAR STAT » Poppins Bold 24 px MAJ. **8 lignes (h.108) triées décroissant** = icône axe 44 px (couleur d'axe) + nom Poppins SemiBold 28 px `#1B2A4A` (largeur 300) + barre 480×22 rayon plein, fond `#8A93A2` 15 %, remplie **dans la couleur de l'axe** + valeur Sora Bold 30 px couleur d'axe + `↑` `#2EC27E` si en hausse.
   - Valeurs & couleurs : ⚙ Discipline **72** `#1B2A4A` ↑ · ⚑ Courage **65** `#F5A623` ↑ · ✦ Charisme **61** `#F7B955` ↑ · ❤ Vitalité **58** `#2EC27E` · ◇ Mental **54** `#2E5EAA` · ✎ Savoir **40** `#3D4C8A` · ✺ Création **33** `#B5548A` · ◈ Prospérité **28** `#C79A3A`.
3. **E — Carte déséquilibre** — Y 1280→1500 · carte `#FFFFFF` rayon 44, **liseré gauche 8 px `#C79A3A`** (couleur Prospérité, l'axe le plus bas). « 💡 Nourrir ◈ Prospérité ? » Poppins SemiBold 30 px `#1B2A4A` · « 3 quêtes proposées » Inter Regular 26 px `#8A93A2` + chevron `→` `#F5A623`. Ton d'invitation, jamais d'injonction.
4. **F — Carte totaux** — Y 1540→1730 · carte `#1B2A4A` texte blanc. « XP totale **6 240** · Défis validés **128** » chiffres Sora Bold 34 px `#F5A623` · L2 « Stat dominante : ⚙ Discipline » Inter Medium 26 px `#FFFFFF`.
5. **F — Tab bar** — onglet **Stats** actif (`#F5A623`).

### États
- **Tendance ↑** (`#2EC27E`) sur les 3 axes en hausse (Discipline, Courage, Charisme) ; absente sinon.
- **Comparaison** (au toggle) : delta mois dernier affiché en second.

---

## Écran 5 — Badges (Trophées)

**Objectif :** déclencher le désir de collection — 24 badges, 4 raretés, débloqués/à venir/secrets, plus le prochain à portée.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MES TROPHÉES          9 / 24   │  A  compteur
│─────────────────────────────────│
│ [Tous][🟢][🔵][🟣][🟠][???]     │  B  filtres
│─────────────────────────────────│
│  🟢▣      🟢▣      🔵▣          │  C  grille 3 col
│ Premier  Lève-tôt  Phénix       │     ▣ débloqué
│  feu                            │
│                                 │
│  🔵▣      🟣▢      🟣▢          │
│  Roc      Flamme    Tueur       │     ▢ verrouillé
│  mental   de fer    de BOSS     │
│                                 │
│  🟠▢      🟠▢      ⬛ ???        │
│ L'Année  Légende   secret       │
│ vivante                         │
│─────────────────────────────────│
│  ▣ débloqué  ▢ à venir  ??? caché│  légende
│─────────────────────────────────│
│  PROCHAIN À PORTÉE              │  D
│  🔵 Aimant social — 55/100 ✦    │
│  ████████████░░░░░░  +120 XP    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖(actif)  👤        │
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→220 · « MES TROPHÉES » Sora SemiBold 44 px `#1B2A4A` · compteur « **9** / 24 » — 9 Sora Bold 40 px `#F5A623`, « / 24 » Inter Medium 30 px `#8A93A2`.
2. **B — Barre de filtres** — Y 250→350 · 6 pastilles rayon 22 h.72 (scroll horizontal) : `Tous` **actif** (fond `#1B2A4A` texte blanc) · `🟢` · `🔵` · `🟣` · `🟠` · `???`. Inactifs fond `#FFFFFF` texte `#8A93A2` + point de rareté.
3. **C — Grille** — Y 380→1400 · **3 colonnes × 3 rangées**, vignettes 300×300 `#FFFFFF` rayon 40, **liseré 5 px = couleur de rareté**, médaillon ⌀150 centré + nom Poppins SemiBold 24 px (2 lignes).
   - **9 débloqués au total** (compteur cohérent) — dont, sur cette grille : 🟢 **Premier feu** (▣), 🟢 **Lève-tôt** (▣), 🔵 **Phénix** (▣, 🔥), 🔵 **Roc mental** (▣). Les 5 autres débloqués sont hors écran (scroll / autres raretés).
   - **Verrouillés (▢)** : 🟣 **Flamme de fer**, 🟣 **Tueur de BOSS**, 🟠 **L'Année vivante**, 🟠 **Légende** — médaillon `#8A93A2` 30 %.
   - **Secret** : médaillon `#1B2A4A`, « ??? » Sora Bold 44 px `#8A93A2`, pas de nom.
   - Couleurs : Commun `#2EC27E` · Rare `#2E5EAA` · Épique `#8B5CF6` · Légendaire `#F5A623`.
4. **Légende** — Y 1420→1490 · « ▣ débloqué · ▢ à venir · ??? caché » Inter Medium 22 px `#8A93A2`.
5. **D — Prochain à portée** — Y 1520→1730 · carte `#FFFFFF` rayon 44, **liseré gauche 8 px `#2E5EAA`** (Rare). « PROCHAIN À PORTÉE » Poppins Bold 22 px `#8A93A2`. « 🔵 Aimant social — **55/100** ✦ » Poppins SemiBold 30 px `#1B2A4A`. Jauge 800×20 remplie `#F5A623` à **55 %** + « +120 XP » Sora Bold 28 px `#F5A623`.
6. **Tab bar** — onglet **Trophées** actif.

### États badges
- **Débloqué (▣)** : médaillon en couleur (dégradé de la rareté), icône blanche outline, liseré coloré.
- **Verrouillé (▢)** : médaillon `#8A93A2` 30 %, icône et nom `#8A93A2` ; au tap → sheet « comment l'obtenir » (condition + jauge).
- **Secret (???)** : médaillon `#1B2A4A`, « ??? », jamais de spoiler.

---

## Écran 6 — Calendrier 365

**Objectif :** voir l'année entière d'un coup d'œil et ressentir la régularité — le mur qui se remplit de vert (128 cases sur 365).

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  MON ANNÉE       128/365 · 96 % │  A  compteur (validés / jours écoulés)
│─────────────────────────────────│
│  🔥 Série 47   ·   Record 47    │  B  bandeau série
│  Bouclier de série : 1 dispo    │
│─────────────────────────────────│
│  ✓ validé  ◐ grâce  ○ manqué  ◆ │  C  légende
│─────────────────────────────────│
│        1   5   10   15  ...  31 │  D  grille 365
│  JAN ✓✓✓✓✓ ✓✓◐✓✓ ✓✓✓✓✓ ✓✓✓◆..  │  ◆ = J30
│  FÉV ✓✓✓✓✓ ✓✓✓✓○ ✓✓✓✓✓ ✓✓✓..    │
│  MAR ✓✓✓✓✓ ✓✓✓◆✓ ✓✓✓✓✓ ...      │  ◆ = J90
│  AVR ✓✓✓✓✓ ✓✓✓◐✓ ✓✓✓✓✓ ...      │  (J120 ≈ fin avr)
│  MAI ✓✓✓✓✓ ✓✓✓✓░ ░░░░░ ...      │  jour courant ≈ J128 (8 mai)
│  JUN→DÉC ░░░░░░░░░░░ (à venir)   │
│─────────────────────────────────│
│  JALONS                         │  E  frise
│  ●J7 ●J30 ●J90 ○J182 ○J365      │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→220 · « MON ANNÉE » Sora SemiBold 44 px `#1B2A4A` · « **128**/365 · 96 % » — 128 Sora Bold 36 px `#2EC27E`, reste Inter Medium 26 px `#8A93A2` (96 % = validés / jours écoulés, cohérent avec série 47 + quelques manques/grâces).
2. **B — Bandeau série** — Y 250→420 · carte `#1B2A4A` rayon 44. « 🔥 Série **47** · Record **47** » chiffres Sora Bold 40 px `#F5A623`, texte Inter Medium 28 px `#FFFFFF`. Sous-ligne « Bouclier de série : 1 dispo » Inter Regular 24 px `#8A93A2`.
3. **C — Légende** — Y 450→530 · 4 items : ✓ validé (`#2EC27E`) · ◐ grâce (`#F5A623`) · ○ manqué (`#8A93A2` 25 %) · ◆ jalon (`#F5A623`).
4. **D — Grille 365** — Y 560→1500 · 12 lignes = 12 mois, colonne mois Poppins SemiBold 26 px `#1B2A4A`. Cases 24×24 rayon 6, gouttière 6. **Validé `#2EC27E` · Grâce `#F5A623` · Manqué contour `#8A93A2` 25 % · Futur `#8A93A2` 12 % · Jalon ◆ case `#F5A623` + losange blanc.** Liseré de série `#2EC27E` reliant les vertes. **Densité cible : JAN–AVR quasi pleines, MAI à moitié (jour courant ≈ J128, début mai), JUN→DÉC à venir.** Mois courant (MAI) mis en évidence (fond `#FFFFFF` + ombre).
5. **E — Frise des jalons** — Y 1540→1720 · 5 nœuds : ● J7 · ● J30 · ● J90 (atteints `#2EC27E`) · ○ J182 · ○ J365 (à venir `#8A93A2`). *(À J128, J90 est franchi mais pas J182.)* Labels Poppins SemiBold 24 px.
6. **Tab bar** — s'ouvre depuis l'Accueil ; onglet Accueil ou Progression peut rester surligné.

### États des cases
- **Validé** vert `#2EC27E` · **Grâce** (bouclier) orange `#F5A623` ◐ · **Manqué** contour gris `#8A93A2` 25 % ○ · **Futur** gris 12 % (non tappable) · **Jalon** ◆ orange.

---

## Écran 7 — Récompenses

**Objectif :** matérialiser ce qu'on gagne pour de vrai — certificats datés, sceaux de cire, titre de rang porté, Carte de l'Année. Levier de partage premium.

### Maquette FINALE
```
┌─────────────────────────────────┐
│ ▓▓▓ 9:41 ▓▓▓▓▓▓▓▓▓▓▓ ▂▄ 100% ▓▓ │
│─────────────────────────────────│
│  RÉCOMPENSES                    │  A
│─────────────────────────────────│
│  CERTIFICATS        ‹ ● ○ ○ ›   │  B  carrousel
│  ┌───────────────────────────┐  │
│  │ ╔═══════════════════════╗ │  │
│  │ ║  CERTIFICAT · J90     ║ │  │  bordure dorée
│  │ ║   ~ Cap Franchi ~     ║ │  │
│  │ ║  ────────────────     ║ │  │
│  │ ║    (sceau de cire)    ║ │  │
│  │ ║  Lucas                ║ │  │  nominatif
│  │ ║  Délivré le J90       ║ │  │  daté
│  │ ╚═══════════════════════╝ │  │
│  └───────────────────────────┘  │
│   J30✓  J90✓  J182🔒  J365🔒    │
│─────────────────────────────────│
│  SCEAUX DE STAT                 │  C
│  ⚙○ ⚑○ ❤○ ✦○ ◇○ ✎○ ✺○ ◈○      │  aucun à 100 pts encore
│─────────────────────────────────│
│  TITRES DE RANG                 │  D
│  ▸ « le·la Constant·e » (porté) │
│  [ Porter un autre titre ]      │
│─────────────────────────────────│
│  CARTE DE L'ANNÉE     🔒 J365   │  E
│  ┌───────────────────────────┐  │
│  │ ▦▦▦░░░ fresque qui se     │  │
│  │ ▦░░░░░ remplit au fil…    │  │
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  [ Partager ]  [ Télécharger PDF ]│ F
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **A — Header** — Y 60→200 · « RÉCOMPENSES » Sora SemiBold 44 px `#1B2A4A`.
2. **B — Carrousel certificats** — Y 230→1000 · titre « CERTIFICATS » Poppins Bold 24 px + dots `‹ ● ○ ○ ›`. Carte-certificat 900×640 : fond papier crème `#FBF7EE`, double bordure dorée `#C79A3A` (6 px + filet 2 px), rayon 24, ombre héros. « CERTIFICAT · J90 » Sora SemiBold 34 px `#1B2A4A` · « ~ Cap Franchi ~ » Inter Italic 28 px `#C79A3A`. Sceau de cire ⌀140 dégradé `#C79A3A → #8A6E28`, icône cairn blanche. « Lucas » Poppins SemiBold 30 px `#1B2A4A` (nominatif) · « Délivré au J90 » Inter Medium 24 px `#8A93A2`. Statuts : « J30 ✓ · J90 ✓ · J182 🔒 · J365 🔒 » — ✓ `#2EC27E`, 🔒 `#8A93A2`. *(À J128, seuls J30 et J90 sont franchis ; J182 et J365 verrouillés.)*
3. **C — Sceaux de stat** — Y 1030→1200 · titre « SCEAUX DE STAT » Poppins Bold 24 px. 8 sceaux ronds ⌀96. **Aucun estampé** (le plus haut axe, Discipline, est à 72/100 — le sceau se gagne à 100 pts) : les 8 en `#8A93A2` 25 % (état « à venir »), avec la jauge la plus avancée sur ⚙ Discipline.
4. **D — Titres de rang** — Y 1230→1420 · « TITRES DE RANG » Poppins Bold 24 px. Puce du titre porté « ▸ “le·la Constant·e” (porté) » fond `#1B2A4A` texte `#FFFFFF` Poppins SemiBold 28 px, chevron `#F5A623`. Bouton « Porter un autre titre » contour `#1B2A4A` 3 px, rayon 34.
5. **E — Carte de l'Année** — Y 1450→1700 · carte `#FFFFFF` rayon 44, **verrouillée** : « 🔒 J365 » `#8A93A2`. Aperçu fresque = mosaïque `#2EC27E` / `#F5A623` / `#8A93A2` 12 %, **remplie à ≈ 35 %** (cohérent avec Jour 128). Légende « Fresque qui se remplit au fil des 365 défis » Inter Regular 24 px `#8A93A2`.
6. **F — CTA** — Y 1730→1870 · « Partager » fond `#F5A623` texte `#FFFFFF` Poppins Bold 28 px · « Télécharger PDF » contour `#1B2A4A` 3 px.

### États
- **Certificat débloqué** : J30, J90 (bordure dorée, sceau estampé). **Verrouillé** : J182, J365 (silhouette + condition « Atteins le jour 182 / 365 »).
- **Sceaux de stat** : 0/8 estampés (aucun axe à 100). **Titre** : porté = « le·la Constant·e ». **Carte de l'Année** : verrouillée jusqu'à J365.

---

## Écran 8 — Wrapped annuel

**Objectif :** l'artefact partageable (style « Wrapped ») — rétrospective qui résume la transformation. Version story 1080×1920.

> **Note de production :** le Wrapped est une **projection de fin d'année** (J365) ; ses chiffres finaux (année complète) diffèrent volontairement de l'instantané J128. On garde toutefois **la persona et le rang de démo** cohérents (Lucas, Rang Constant conservé pour la démo) et on signale clairement qu'il s'agit du bilan annuel. Les chiffres marqués *(projeté J365)* sont des cibles d'exemple, pas l'état J128.

### Maquette FINALE (story 1080 × 1920)
```
┌─────────────────────────────────┐
│                                 │  fond bleu nuit dégradé
│        C A P 3 6 5              │  wordmark
│      ● Ton année 2026 ●         │
│                                 │
│   ┌───────────────────────┐     │
│   │      6 240             │     │  grand chiffre XP (J128)
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
│    ✦     ⚑  début → aujourd'hui │
│      ╲◇╱                        │
│                                 │
│   128 défis · 9 badges          │
│   Plus haut défi : diff 8/10    │
│                                 │
│      Un défi par jour.          │  slogan
│   Une version de toi par an.    │
│      @cap365  ·  une aventure Cairn │  handle + marque
└─────────────────────────────────┘
```

### Zones & composants (haut → bas)
1. **Fond** — dégradé bleu nuit `#1B2A4A → #0F1A30` (linéaire vertical) + grain 5 % ou silhouette sommet `#2E5EAA` 10 %. Zones de sécurité story 250 px haut/bas.
2. **Titre** — Y 300→460 · « CAP365 » Sora Bold 48 px `#F5A623` (tracking +12 %) · « Ton année 2026 » Poppins SemiBold 32 px `#FFFFFF`, encadré de 2 points `#F5A623`.
3. **Grand chiffre XP** — Y 500→800 · « **6 240** » Sora Bold **160 px** `#F5A623`, ombre `#0F1A30` 30 %. Label « XP GAGNÉS » Poppins Bold 30 px `#8A93A2` MAJ.
4. **Blocs stats** — Y 840→1180 : « 🔥 Record de série · **47 jours** » 47 Sora Bold 52 px `#F5A623` · « 🏆 Rang atteint · **4 · CONSTANT** » Sora Bold 44 px `#FFFFFF`, ⚓ `#F5A623` · « ⭐ Plus haut défi relevé · **diff 8/10** » Sora Bold 40 px `#F5A623`.
5. **Mini-radar delta** — Y 1220→1560 · radar ⌀420. Silhouette **début** en pointillés `#8A93A2` + silhouette **actuelle** pleine `#F5A623` 25 % contour 4 px (valeurs = radar verrouillé ⚙72 ⚑65 ✦61 ❤58 ◇54 ✎40 ✺33 ◈28). Légende « Début → Aujourd'hui » Inter Medium 24 px `#8A93A2`.
6. **Ligne totaux** — Y 1580→1660 · « 128 défis validés · 9 / 24 badges · série record 47 » Inter Medium 28 px `#FFFFFF`, chiffres `#2EC27E`.
7. **Pied de marque** — Y 1680→1820 · slogan « Un défi par jour. Une version de toi par an. » Poppins SemiBold 30 px `#FFFFFF` (2 lignes) · « @cap365 · une aventure Cairn » Inter Medium 24 px `#8A93A2` + logo cairn `#F5A623`.

### États / garde-fous
- **Aucune promesse interdite** : uniquement effort et régularité (XP, défis, série, badges), jamais « riche/heureux/parfait ». Aucun classement contre autrui. Intitulé du plus haut défi générique (pas de note perso).
- **Version instantané (J128, démo)** vs **version projetée J365** clairement distinguées à l'export.

---

## Table de correspondance — Écran → fichier Canva à produire

| # | Écran final | Fichier Canva (nom) | Format (px) | Variantes à exporter |
|:--:|---|---|---|---|
| 1 | Accueil / Dashboard | `cap365_capture_dashboard_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 2 | Défi du jour | `cap365_capture_defi_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 3 | Radar de progression | `cap365_capture_radar_[claire\|dark]_[mockup\|plein]_v1.png` | **1080 × 1920** | claire **+ dark** · mockup + plein |
| 4 | Statistiques | `cap365_capture_stats_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 5 | Badges (Trophées) | `cap365_capture_badges_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 6 | Calendrier 365 | `cap365_capture_calendrier_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 7 | Récompenses | `cap365_capture_recompenses_claire_[mockup\|plein]_v1.png` | **1080 × 1920** | claire · mockup + plein |
| 8 | Wrapped annuel | `cap365_capture_wrapped_story_v1.png` | **1080 × 1920** (story, 4-5 slides) | 1 slide synthèse + série complète |

**Options de déclinaison :** décliner les écrans 1, 3, 5 et 8 en **1080 × 1080** (carré) pour vignettes de section et posts feed. Export **PNG @2×**, fond opaque (transparence réservée aux sceaux/emblèmes).

---

## Note de cohérence (mêmes données partout)

Un seul jeu de données fictif, verrouillé, traverse les 8 écrans — c'est la condition non négociable du rendu premium :

- **Identité :** Lucas · **Jour 128 / 365** (35 % d'année) · **Niv 18** · **Rang 4 — Constant** ⚓ « le·la Constant·e ».
- **Élan :** **série 47 🔥** (record 47) · **bouclier de série 1 dispo** · **XP total 6 240** · **128 défis validés**.
- **Radar (identique écrans 3, 4 et 8) :** ⚙ 72 · ⚑ 65 · ✦ 61 · ❤ 58 · ◇ 54 · ✎ 40 · ✺ 33 · ◈ 28. Dominante ⚙ Discipline ; en retrait ✺ Création (33) et ◈ Prospérité (28).
- **Défi du jour (écrans 1 et 2) :** « Le coup de fil qui pique » · Social · ✦ Charisme · **diff 6/10** · **+60 XP** (= 6×10) · **+2 ✦** (diff 4-6) · 🔥 +20 XP.
- **Collection :** **badges 9/24** (écrans 5 et 8) · prochain à portée « Aimant social » 55/100 · **quête hebdo « 3 défis Courage » 2/3** (écrans 1, +100 XP).
- **Jalons (écrans 6 et 7) :** à J128, **J7 · J30 · J90 franchis** ; **J182 et J365 verrouillés**. Certificats J30/J90 obtenus ; J182/J365 en silhouette. Sceaux de stat 0/8 (aucun axe à 100).

**Règles chromatiques transverses :** orange `#F5A623` = **action uniquement** (XP, boutons, jauges qui montent, série, jalons) ; vert `#2EC27E` = validé ; gris `#8A93A2` = inactif. Un chiffre héros par écran, police géométrique gras. Rayons, ombres et polices identiques partout. Status bar « 9:41 » et tab bar identiques sur tous les écrans à navigation.

**Réserve d'honnêteté (Wrapped, écran 8) :** ses chiffres de bilan sont une projection J365 ; les valeurs conservées de la démo (série 47, XP 6 240, 128 défis, 9 badges, radar) restent alignées sur l'instantané J128 pour ne créer aucune fausse promesse. Aucune promesse interdite, aucune note personnelle exposée, aucune comparaison entre personnes — sur les 8 écrans.

---

*Document de production — Cap365 · Maquettes d'écrans FINALES verrouillées. Consolide `experience/02-ecrans-et-templates.md` et `lancement-commercial/08-captures-et-brief-canva.md`. Persona de démo unique : Lucas, J128/365, Rang 4 Constant.*
