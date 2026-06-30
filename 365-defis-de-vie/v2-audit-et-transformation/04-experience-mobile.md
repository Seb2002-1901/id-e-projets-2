# Expérience mobile premium de Cap365

> **Document de design produit — Cap365 · 365 Défis de Vie**
> Cible : 18-35 ans · Mobile-first · « 1 défi/jour »
> Objectif : que l'utilisateur ait l'impression d'utiliser une **application mobile premium**, même quand le produit livré est un **PDF interactif / Notion / template Canva**.
>
> Pour chaque écran, deux niveaux d'exécution :
> - **🟢 Réalisable maintenant** — PDF cliquable / Notion / Canva, < 14 jours, petit budget, une personne.
> - **🔵 App native future** — la cible idéale (React Native / Flutter), quand le produit décolle.

---

## Sommaire

1. [Principes de design](#1-principes-de-design)
2. [Dashboard / écran d'accueil](#2-dashboard--écran-daccueil)
3. [Carte du défi du jour](#3-carte-du-défi-du-jour)
4. [Écran statistiques (radar 8 stats)](#4-écran-statistiques)
5. [Écran badges](#5-écran-badges)
6. [Écran progression](#6-écran-progression)
7. [Écran calendrier (365 cases)](#7-écran-calendrier)
8. [Écran récompenses](#8-écran-récompenses)
9. [Écran « jour sans / reprise »](#9-écran-jour-sans--reprise)
10. [Animations clés & transitions](#10-animations-clés--transitions)
11. [Kit de composants](#11-kit-de-composants)
12. [Livrer cette expérience SANS app (< 14 jours)](#12-livrer-cette-expérience-sans-app)

---

## 1. Principes de design

### 1.1 Direction artistique en une phrase

> **« Un carnet de quête premium, calme et confiant. »**
> Sobriété bleu nuit + chaleur orange. On félicite sans crier. On guide sans infantiliser. Chaque écran respire.

### 1.2 Charte couleur (canonique V2)

| Rôle | Nom | Hex | Usage |
|---|---|---|---|
| Primaire | Bleu nuit | `#1B2A4A` | Fonds de cartes, headers, textes forts, navigation |
| Accent | Orange | `#F5A623` | CTA principal, série « en feu », XP, focus |
| Succès | Vert | `#2EC27E` | Validation, jour validé, jauges pleines |
| Neutre | Gris clair | `#8A93A2` | Textes secondaires, bordures, icônes inactives |
| Fond clair | Blanc cassé | `#F7F8FA` | Fond d'écran (mode clair) |
| Surface | Blanc | `#FFFFFF` | Cartes (mode clair) |

**Déclinaisons utiles (à dériver, mêmes teintes) :**
- Bleu nuit clair `#2A3F66` (états hover/pressé), bleu nuit foncé `#11192E` (fond dark).
- Orange doux `#FCEBCF` (fonds de puce/halo), vert doux `#DDF5EA`, rouge alerte `#E5484D` (jour manqué — usage parcimonieux, jamais punitif).
- **Raretés badges** : Commun `#8A93A2` · Rare `#3B82F6` · Épique `#A855F7` · Légendaire `#F5A623` (dégradé doré).

**Dark mode premium :** fond `#11192E`, surfaces `#1B2A4A`, texte `#EDF1F7`, secondaire `#8A93A2`. L'orange et le vert restent identiques (ils « pop » sur le sombre). Ombres remplacées par des **lueurs** (glow) très douces.

### 1.3 Typographie

| Niveau | Police | Poids | Taille (pt) | Interlignage |
|---|---|---|---|---|
| Display (level-up, rang) | Sora / Poppins | 700 | 32-40 | 1.1 |
| Titre écran (H1) | Sora / Poppins | 600 | 24-28 | 1.2 |
| Titre carte (H2) | Sora / Poppins | 600 | 18-20 | 1.25 |
| Sous-titre / label | Inter | 600 | 13-14 | 1.3 |
| Corps | Inter | 400 | 15-16 | 1.5 |
| Légende / méta | Inter | 500 | 11-12 | 1.4 |
| Chiffres (XP, niveau) | Sora (tabular) | 700 | variable | — |

**Règles :** un seul niveau de Display par écran. Majuscules réservées aux micro-labels (catégorie, rareté) avec letter-spacing +4 %. Chiffres en **tabular-nums** pour que les compteurs ne « sautent » pas pendant l'animation.

### 1.4 Grille & espacement

- **Grille 4 pt** (tous les espacements sont des multiples de 4 : 4 / 8 / 12 / 16 / 24 / 32 / 48).
- **Marges latérales écran : 20 px.** Gouttière entre cartes : 16 px.
- Largeur de référence : **375 px** (iPhone standard), composants fluides jusqu'à 430 px.
- Zone de pouce : CTA principal toujours dans le **tiers inférieur**. Header non actionnable (juste informationnel).
- **Rayons de coin :** boutons 14 px · cartes 20 px · grandes surfaces (hero) 28 px · puces/chips 999 px (pill).

### 1.5 Élévation & ombres

Trois niveaux seulement (mode clair) :
- **E1 — carte au repos :** `0 2px 8px rgba(27,42,74,0.06)`
- **E2 — carte mise en avant / hero :** `0 8px 24px rgba(27,42,74,0.10)`
- **E3 — modale / feuille flottante :** `0 16px 48px rgba(27,42,74,0.16)`

En dark : pas d'ombre noire → **glow** orange/vert à 8-12 % d'opacité sur les éléments actifs.

### 1.6 Hiérarchie visuelle (loi générale)

Sur chaque écran, **un seul héros visuel**. Ordre de lecture imposé par : taille → couleur (orange = action) → contraste → position. Le reste est volontairement calme (gris/bleu nuit léger) pour ne pas concurrencer l'élément actif. Règle d'or : **« si tout est premium, rien n'est premium »** — le luxe vient des vides.

### 1.7 Système de composants (atomic)

```
Tokens (couleur, type, espace, rayon, ombre)
   └─ Atomes      : bouton, puce-stat, icône, jauge, avatar-rang
        └─ Molécules : carte-défi, carte-quête, ligne-stat, case-calendrier
             └─ Organismes : hero-dashboard, radar, grille-badges
                  └─ Écrans
```

Tout est documenté en §11. Les **8 stats** ont chacune une **couleur de puce + icône outline** fixes (réutilisées partout : carte de défi, radar, calendrier). Cohérence = sensation de produit fini.

### 1.8 Micro-interactions (principes)

- **Feedback < 100 ms** sur tout tap (scale 0.97 + assombrissement léger).
- **Courbes :** entrées `ease-out` (300 ms), sorties `ease-in` (200 ms), célébrations `spring` (rebond léger, amorti).
- **Haptique** (app) : léger au tap, moyen à la validation, « success » au level-up.
- Jamais plus d'**une animation festive à la fois** ; on les met en file (validation → puis level-up → puis badge).
- **Respect de « réduire les animations »** (accessibilité) : les célébrations deviennent un simple fondu + changement d'état.

### 1.9 Accessibilité

- Contraste texte **AA minimum** (4.5:1). L'orange `#F5A623` sur blanc ne passe PAS pour du texte fin → on l'utilise en **fond de bouton avec texte bleu nuit**, ou en gros chiffres, jamais en petit texte sur blanc.
- Cibles tactiles **≥ 44 × 44 px**.
- Le statut d'un jour (validé/grâce/manqué) n'est **jamais** porté par la seule couleur → toujours **couleur + icône + forme** (✓ rempli / ◐ demi / ○ vide).
- Dynamic Type : la mise en page tient jusqu'à +30 % de taille de texte (cartes en hauteur fluide).
- Labels d'accessibilité sur chaque icône ; le radar a une **alternative liste** (« Discipline 7/10… »).

### 1.10 Navigation globale

**Barre d'onglets basse, 5 entrées**, icônes outline arrondi, label sous l'icône (12 px) :

```
[ 🏠 Accueil ] [ 🧭 Défis ] [ 📊 Stats ] [ 🏆 Récomp. ] [ 🗓 Calendrier ]
```

Onglet actif : icône **pleine** + pastille orange + label bleu nuit. Inactif : outline gris `#8A93A2`. Le bouton **Valider** n'est pas un onglet : il vit sur la carte du défi (action contextuelle, plus premium qu'un FAB générique).

---

## 2. Dashboard / écran d'accueil

### 2.1 Objectif
En **3 secondes** : l'utilisateur voit son défi du jour, sait où il en est (série + rang + XP), et a **une seule action évidente** (« Voir le défi »). C'est l'écran de retour quotidien — il doit donner envie d'ouvrir l'app chaque matin.

### 2.2 Disposition (zone par zone)

| Zone | Contenu | Hauteur |
|---|---|---|
| **Top bar** | Avatar-rang (gauche) · « Bonjour, Seb » + date (centre-gauche) · 🔔 (droite) | 56 px |
| **Bandeau série** | Flamme orange + « 12 jours » + mini-barre de la semaine (7 points) | 48 px |
| **HERO — Défi du jour** | Grande carte : label catégorie+stat, titre du défi, difficulté, CTA « Voir le défi » | ~ 240 px |
| **Bandeau progression** | Rang actuel + barre d'XP fine + « Niv. 14 · 320 / 500 XP » | 72 px |
| **Quêtes** | 3 puces horizontales scrollables : Quotidienne ✓ / Hebdo / Mensuelle / (Secrète 🔒) | 120 px |
| **Tab bar** | Navigation 5 entrées | 64 px |

### 2.3 Hiérarchie visuelle
Héros = **la carte du défi du jour** (E2, fond bleu nuit, texte clair, CTA orange). Tout le reste est en surfaces blanches discrètes. La flamme de série est le seul autre point orange autorisé (petit, en haut). Œil : Flamme → Hero → CTA → Quêtes.

### 2.4 Composants
Avatar-rang · Puce série (flamme + nb) · Carte-défi-hero · Barre-XP fine · Carte-quête compacte · Tab bar.

### 2.5 Animations
- À l'ouverture : **stagger** des cartes (apparition décalée de 60 ms, fade + translate Y de 12 px).
- Flamme de série : **pulsation** lente (1.0 → 1.06, 2 s, en boucle) ; si série ≥ 7 jours, micro-particules.
- Barre d'XP : se **remplit** depuis 0 jusqu'à la valeur en 600 ms à l'ouverture (effet « ça compte »).

### 2.6 Interactions
- Tap Hero → ouvre la **Carte du défi** (§3), transition « zoom container » (la carte s'agrandit en plein écran).
- Tap flamme → feuille « Ta série » (détail + journée de grâce restante).
- Tap quête → détail de la quête. Swipe horizontal sur la rangée de quêtes.
- Pull-to-refresh → recharge le défi (utile à minuit, changement de jour).

### 2.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│ (R12)  Bonjour, Seb            🔔      │   ← avatar-rang + date
│        Mardi 30 juin                   │
├───────────────────────────────────────┤
│  🔥 12 jours   • • • • • • ·           │   ← série + semaine
├───────────────────────────────────────┤
│ ╔═══════════════════════════════════╗ │
│ ║  DÉFI DU JOUR · COURAGE  ⚔︎        ║ │   ← HERO (bleu nuit)
│ ║                                   ║ │
│ ║  Aborde un inconnu et             ║ │
│ ║  pose-lui une vraie question      ║ │
│ ║                                   ║ │
│ ║  Difficulté  ●●●●●●○○○○  6/10      ║ │
│ ║  +60 XP                           ║ │
│ ║                                   ║ │
│ ║  ┌─────────────────────────────┐  ║ │
│ ║  │      Voir le défi  →         │  ║ │   ← CTA orange
│ ║  └─────────────────────────────┘  ║ │
│ ╚═══════════════════════════════════╝ │
├───────────────────────────────────────┤
│  ◆ ARTISAN  ·  Niv. 14                 │
│  ████████████░░░░░░  320 / 500 XP      │   ← barre XP
├───────────────────────────────────────┤
│  QUÊTES                                │
│ ┌────────┐ ┌────────┐ ┌────────┐       │
│ │Quotid. │ │ Hebdo  │ │ 🔒 ???  │  →   │
│ │  ✓ 1/1 │ │  3/5   │ │ Secrète │       │
│ └────────┘ └────────┘ └────────┘       │
├───────────────────────────────────────┤
│  🏠     🧭     📊     🏆     🗓        │   ← tab bar
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Notion** : une page « Aujourd'hui » avec un *callout* bleu nuit pour le hero (emoji catégorie + titre du défi du jour), un *callout* orange « 🔥 Série », et une barre de progression simulée avec des blocs ▓░. Le « défi du jour » = lien vers la base de données filtrée sur la date du jour. **Canva/PDF** : 1 page « tableau de bord » par mois avec hyperliens vers les fiches défis.
> **🔵 App native future** — Vrai chargement du défi par date, notification matinale, haptique, état temps réel série/XP.

---

## 3. Carte du défi du jour

### 3.1 Objectif
Donner toutes les infos pour **agir aujourd'hui** et offrir le moment le plus satisfaisant de l'app : la **validation**. C'est l'écran de la dopamine.

### 3.2 Disposition (zone par zone)

| Zone | Contenu |
|---|---|
| **Header** | ← retour · Puce catégorie+stat (couleur de la stat) · ☆ favori |
| **Titre** | Intitulé du défi (H1, 2-3 lignes max) |
| **Méta-rangée** | Difficulté (jauge ●○ /10) · Récompense (+XP) · Stat impactée (puce) |
| **Instructions** | « Comment faire » — 2 à 4 puces courtes |
| **Variantes** | Accordéon : *Plus facile* / *Plus dur* / *À deux* |
| **Pourquoi** | Encart léger « Pourquoi ce défi » (1 phrase de sens) |
| **Sticky CTA** | Bouton plein largeur **« Valider le défi »** (orange) ancré en bas |

### 3.3 Hiérarchie visuelle
Titre = héros. La difficulté et le +XP sont les deux infos chiffrées mises en valeur (Sora bold). Le CTA orange est **toujours visible** (sticky). Variantes et « pourquoi » sont secondaires (gris, repliés).

### 3.4 Composants
Puce-stat colorée · Jauge difficulté (10 points) · Badge +XP · Liste à puces · Accordéon variantes · Bouton CTA sticky · **Overlay de validation** (§3.6).

### 3.5 Interactions
- Tap variante → déplie en douceur (height auto, 250 ms).
- Tap ☆ → favori (rempli orange + micro-haptique).
- Tap **Valider** → séquence de validation (ci-dessous).
- Après validation, le CTA se transforme en état **« ✓ Validé · +60 XP »** (vert, non cliquable), et un bouton secondaire « Noter ce défi » (1 ligne, ⭐) apparaît.

### 3.6 Animation de validation (cœur du produit)
Séquence ~1.8 s, file d'attente garantie :
1. **0–150 ms** : bouton scale 0.96 + haptique moyen.
2. **150–500 ms** : le bouton se **morph** en cercle, un trait dessine une **coche** (path draw, vert `#2EC27E`).
3. **400–900 ms** : **burst de confettis** discret (bleu nuit + orange + vert), gravité douce, disparaît en fondu.
4. **600–1200 ms** : compteur **+XP** monte (0 → 60) avec tabular-nums ; la puce de la stat impactée **brille** (glow).
5. **1200–1800 ms** : si seuil franchi → enchaîne **level-up** (§10). Sinon, retour à l'état « Validé ».
> Mode « réduire animations » : coche + changement d'état + texte « +60 XP », sans confettis ni morph.

### 3.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│ ←        ⚔︎ COURAGE                ☆    │
├───────────────────────────────────────┤
│                                         │
│  Aborde un inconnu et pose-lui          │   ← Titre H1
│  une vraie question                     │
│                                         │
│  ┌──────────┬──────────┬─────────────┐  │
│  │ DIFF.    │ GAIN     │ STAT        │  │   ← méta
│  │ ●●●●●●○○○○│  +60 XP  │ ⚔︎ Courage  │  │
│  │  6/10    │          │             │  │
│  └──────────┴──────────┴─────────────┘  │
│                                         │
│  COMMENT FAIRE                          │
│   • Choisis un lieu public calme        │
│   • Souris, présente-toi en 1 phrase    │
│   • Pose une question ouverte, écoute   │
│                                         │
│  ▸ Variantes (plus facile / plus dur)   │   ← accordéon
│                                         │
│  ╭─────────────────────────────────╮    │
│  │ 💡 Pourquoi : oser parler crée   │    │
│  │    de la confiance qui dure.     │    │
│  ╰─────────────────────────────────╯    │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │        ✓  Valider le défi            │ │   ← CTA sticky orange
│ └─────────────────────────────────────┘ │
└───────────────────────────────────────┘

   ── après validation ──
┌───────────────────────────────────────┐
│            ╭───────╮                    │
│            │   ✓   │   confettis        │
│            ╰───────╯   · ° · ✦ ·        │
│        Défi validé !   +60 XP           │
│   ⚔︎ Courage  +1   ░░░░░░░░░ glow        │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Notion** : chaque défi = une page de base de données avec propriétés (Catégorie/Stat = select coloré, Difficulté = nombre, XP = formule `Difficulté×10`). Validation = case à cocher « Fait ✓ » + propriété date → ça remplit le calendrier et les vues. L'« animation » se simule par un **GIF de coche** inséré en haut de page + un emoji 🎉. **PDF Canva** : fiche défi cliquable, bouton « J'ai relevé le défi → » qui lie vers une page « Bravo +60 XP » (effet de validation par changement de page).
> **🔵 App native future** — Morph button, confettis Lottie, haptique, file d'animations, mise à jour XP/stat en base.

---

## 4. Écran statistiques

### 4.1 Objectif
Montrer **qui je deviens** : les 8 stats en **radar octogonal**, identifier les forces et surtout les **déséquilibres** (motiver à relever des défis dans les stats faibles).

### 4.2 Les 8 stats (puces canoniques)

| Stat | Icône (outline) | Couleur de puce |
|---|---|---|
| Discipline | 🛡 bouclier | `#1B2A4A` bleu nuit |
| Courage | ⚔︎ épée | `#E5484D` rouge |
| Vitalité | ❤ cœur/pouls | `#2EC27E` vert |
| Charisme | ✦ étoile/sourire | `#F5A623` orange |
| Mental | 🧠 cerveau | `#A855F7` violet |
| Savoir | 📖 livre | `#3B82F6` bleu |
| Création | ✎ pinceau | `#EC4899` rose |
| Prospérité | ◈ pièce/feuille | `#0EA5A4` sarcelle |

### 4.3 Disposition

| Zone | Contenu |
|---|---|
| **Header** | Titre « Mes statistiques » · sélecteur période (Tout / Mois) |
| **Radar** | Octogone 8 axes, surface remplie semi-opaque (dégradé bleu→orange) |
| **Synthèse** | « Force : Discipline · À renforcer : Création » |
| **Liste détaillée** | 8 lignes : icône · nom · mini-jauge · valeur /10 · ▲ tendance |
| **Déséquilibre** | Carte « Équilibre 72 % » + conseil (« +2 défis Création cette semaine ») |

### 4.4 Hiérarchie visuelle
Le **radar** est le héros (centre, grand). Sous lui, la liste donne les chiffres exacts. La carte « équilibre » utilise l'orange pour appeler à l'action sur la stat faible.

### 4.5 Composants
Radar octogonal · Ligne-stat (puce + jauge + valeur + tendance) · Carte-équilibre · Sélecteur de période (segmented).

### 4.6 Animations
- Le radar se **déploie** depuis le centre à l'ouverture (scale 0 → 1 de la surface, 500 ms, spring).
- Quand une stat augmente, son sommet **bondit** vers l'extérieur (morph du polygone, 400 ms).
- Lignes de la liste : jauges qui se remplissent en stagger.

### 4.7 Interactions
- Tap un sommet/une ligne → feuille détail de la stat (histoire, défis liés, prochain palier).
- Toggle Tout / Mois → le radar **morphe** entre deux formes (transition fluide du polygone).

### 4.8 Maquette ASCII

```
┌───────────────────────────────────────┐
│  Mes statistiques     [ Tout | Mois ]  │
├───────────────────────────────────────┤
│                Discipline               │
│                   /\                    │
│        Prospérité /  \ Courage          │
│              ╱───●────●───╲              │
│             ●  ╱      ╲ ●   Vitalité     │
│   Création  │ ◗ surface ◖ │             │
│             ●  ╲      ╱ ●   Charisme     │
│              ╲───●────●───╱              │
│         Savoir    \  /   Mental          │
│                    \/                    │
├───────────────────────────────────────┤
│  💪 Force : Discipline                  │
│  🌱 À renforcer : Création              │
├───────────────────────────────────────┤
│ 🛡 Discipline  ████████░░  8 ▲          │
│ ⚔︎ Courage     ██████░░░░  6 ▲          │
│ ❤ Vitalité    ███████░░░  7 –          │
│ ✦ Charisme    █████░░░░░  5 ▲          │
│ 🧠 Mental      ██████░░░░  6 –          │
│ 📖 Savoir      ███████░░░  7 ▲          │
│ ✎ Création    ███░░░░░░░  3 ▼          │
│ ◈ Prospérité  █████░░░░░  5 –          │
├───────────────────────────────────────┤
│ ╭─────────────────────────────────────╮ │
│ │ Équilibre  72%  ▓▓▓▓▓▓▓░░            │ │
│ │ Ajoute 2 défis « Création » cette    │ │
│ │ semaine pour équilibrer ta quête.    │ │
│ ╰─────────────────────────────────────╯ │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — Le radar est le seul vrai défi sans code. **Solution Canva/PDF** : créer un **gabarit radar octogonal** en illustration (8 graduations 0-10) et tracer le polygone à la main par capture, ou utiliser un **template de graphique radar** (Google Sheets / Excel → type « radar » avec 8 axes → exporter en image et coller dans Notion/PDF). Mise à jour mensuelle manuelle (assumée : « bilan du mois »). Les 8 lignes de stat = **base Notion** avec barres ▓░ via formule. **Astuce premium** : un radar par mois → on voit la forme grandir, c'est très satisfaisant.
> **🔵 App native future** — Radar SVG animé temps réel, morph entre périodes, tap sur sommet.

---

## 5. Écran badges

### 5.1 Objectif
Collectionner. Montrer ce qui est **débloqué** (fierté) et ce qui reste **à débloquer** (objectif). La rareté crée le désir.

### 5.2 Disposition

| Zone | Contenu |
|---|---|
| **Header** | « Badges » · compteur « 23 / 80 » · filtre (Tous / Débloqués / Verrouillés / par rareté) |
| **Progression** | Barre fine « 29 % de la collection » |
| **Grille** | 3 colonnes de **médaillons** ; débloqués en couleur, verrouillés en silhouette grise + 🔒 |
| **Sticky** | Bandeau « Prochain badge : Marathon (5 jours restants) » |

### 5.3 Hiérarchie visuelle
Les badges **légendaires dorés** ressortent (halo). Les verrouillés sont volontairement ternes (désaturés) pour créer le contraste « j'en veux plus ». Le bandeau « prochain badge » oriente l'effort.

### 5.4 Composants
Médaillon-badge (4 raretés) · Filtre segmented + chips de rareté · Barre de collection · Bandeau « prochain badge ».

### 5.5 Animations
- Apparition en grille : stagger en cascade.
- Badge **fraîchement débloqué** : ring orange pulsant pendant 24 h + petit « NEW ».
- Tap badge → **flip 3D** vers la face détail (conditions, date d'obtention, rareté).
- Déblocage (depuis n'importe quel écran) : §10 « badge débloqué ».

### 5.6 Interactions
- Tap médaillon → feuille détail (flip). Verrouillé → montre la **condition** (« 30 jours de série »).
- Filtre par rareté (chips) → grille se réordonne (layout animé).
- Appui long → partage (image du badge, premium pour les réseaux).

### 5.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│  Badges                      23 / 80   │
│  [ Tous ][ Débloqués ][ 🔒 ][ Rareté ] │
│  ████████░░░░░░░░░░░░░░  29%            │
├───────────────────────────────────────┤
│   ╭────╮     ╭────╮     ╭────╮          │
│   │ ✦  │     │ 🔥 │     │ 🛡 │          │
│   │COMM│     │RARE│     │ÉPIQ│          │
│   ╰────╯     ╰────╯     ╰────╯          │
│  Premier   Série 7j   Discipline       │
│   pas       ✓          ✓                │
│                                         │
│   ╭────╮     ╭────╮     ╭────╮          │
│   │ 👑 │     │ 🔒 │     │ 🔒 │          │
│   │LÉGD│     │ ?? │     │ ?? │          │
│   ╰────╯     ╰────╯     ╰────╯          │
│  Légende   Marathon   Inconnu          │
│  ◌ halo     30 jours   ████             │
│                                         │
│   ╭────╮     ╭────╮     ╭────╮          │
│   │ 🔒 │     │ 🔒 │     │ 🔒 │          │
│   ╰────╯     ╰────╯     ╰────╯          │
├───────────────────────────────────────┤
│ ⏳ Prochain : Marathon · 5 jours restants│
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Canva** : dessiner 80 médaillons (4 gabarits de rareté × variations d'icône/couleur, très rapide en dupliquant). Version « verrouillée » = même médaillon passé en **gris + cadenas + flou**. **Notion** : galerie de base de données avec image de couverture = le médaillon ; propriété « Débloqué le » (date). Verrouillés = couverture grise. Le **flip** se remplace par l'ouverture de la fiche badge. **PDF** : page « Mur des badges » avec les médaillons révélés progressivement (une planche par palier).
> **🔵 App native future** — Flip 3D, halo animé, « NEW », partage généré.

---

## 6. Écran progression

### 6.1 Objectif
Répondre à « **où j'en suis dans l'aventure ?** » : niveau (1-50), rang (1-10, Éveil→Légende), XP vers le prochain palier, et la **courbe annuelle** qui prouve la régularité.

### 6.2 Les 10 rangs (repère visuel)
`Éveil → Apprenti → Artisan → Aguerri → Vétéran → Maître → Héros → Champion → Mythe → Légende`. Chaque rang = un **emblème** (forme + couleur) et couvre 5 niveaux (1-5, 6-10, … 46-50).

### 6.3 Disposition

| Zone | Contenu |
|---|---|
| **Hero rang** | Emblème du rang actuel (grand) + « ARTISAN · Niv. 14 » |
| **Barre XP** | « 320 / 500 XP vers Niv. 15 » + % |
| **Chemin des rangs** | Frise horizontale des 10 rangs (passés / actuel / verrouillés) |
| **Courbe annuelle** | Aire d'XP cumulée jour par jour (objectif vs réel) |
| **Stats clés** | « 156 défis · 9 360 XP · 12 j de série · 43 % de l'année » |

### 6.4 Hiérarchie visuelle
L'emblème du rang est le héros (fierté). La barre d'XP orange montre l'effort restant. La courbe (aire dégradée bleu→orange) raconte l'histoire de l'année.

### 6.5 Composants
Emblème-rang · Barre-XP large (avec % et label) · Frise de rangs · Graphe d'aire annuel · Tuiles de stats clés.

### 6.6 Animations
- Barre d'XP : remplissage animé à l'ouverture.
- Courbe : **tracé progressif** (path draw de gauche à droite, 800 ms).
- Au passage de palier : voir **level-up** / **rang-up** (§10), avec l'emblème qui se métamorphose.

### 6.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│  Ma progression                         │
├───────────────────────────────────────┤
│              ╭─────────╮                │
│              │   ◆◆◆   │   emblème      │
│              │ ARTISAN │   du rang      │
│              ╰─────────╯                │
│              Niveau 14                   │
│   ████████████░░░░░░░  320/500 XP · 64% │
├───────────────────────────────────────┤
│  CHEMIN DES RANGS                       │
│  ●──●──●──◉──○──○──○──○──○──○            │
│  Év Ap Ar▲Ag Vé Ma Hé Ch My Lé          │
├───────────────────────────────────────┤
│  XP SUR L'ANNÉE                         │
│  9k┤                              ╱▔    │
│    │                        ╱▔▔▔▔       │
│  6k┤                 ╱▔▔▔▔▔   ← réel    │
│    │           ╱▔▔▔▔  · · ·  ← objectif │
│  3k┤     ╱▔▔▔▔                          │
│    │╱▔▔▔                                │
│   0└───────────────────────────────────│
│    janv      avril       juil      déc  │
├───────────────────────────────────────┤
│ 156 défis · 9 360 XP · 🔥12 j · 43% an  │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Notion** : barre d'XP via formule (`⬛×(XP%/10) + ⬜×reste`), niveau/rang via formule conditionnelle sur l'XP total. La **courbe annuelle** = un graphique Notion (chart) ou un **Google Sheet** « XP cumulée par jour » intégré en *embed*. Frise de rangs = 10 emojis avec celui en cours surligné. **Canva/PDF** : une page « Mon ascension » avec emblème du rang + barre + frise, refaite à chaque montée de rang (rare, donc soutenable).
> **🔵 App native future** — Courbe live, métamorphose d'emblème, paliers temps réel.

---

## 7. Écran calendrier

### 7.1 Objectif
Voir l'**année entière** d'un coup d'œil — 365 cases — et ressentir la **régularité** (le mur qui se remplit), repérer séries, jours de grâce, jalons et manques.

### 7.2 Disposition

| Zone | Contenu |
|---|---|
| **Header** | « Mon année » · sélecteur Année / Mois |
| **Légende** | ✓ validé · ◐ grâce · ○ manqué · ◆ jalon · halo = série |
| **Grille année** | 12 colonnes (mois) × ~31 lignes, mini-cases (style « heatmap ») |
| **Bandeau série** | « Plus longue série : 21 j · Série actuelle : 🔥 12 » |
| **Détail jour** | (feuille au tap) défi du jour, statut, XP gagné |

### 7.3 Hiérarchie visuelle
La **densité de cases vertes** est le message : plus c'est vert, plus c'est gratifiant. Les jalons (◆ orange) ponctuent l'année (jour 50, 100…). Les jours en série partagent un **liseré** qui les relie visuellement (effet « chaîne »).

### 7.4 Composants
Case-calendrier (5 états) · Légende · Grille heatmap · Bandeau records · Feuille détail-jour.

### 7.5 Animations
- Remplissage : à l'ouverture, les cases passées **apparaissent en vague** (de janvier à aujourd'hui).
- Validation du jour (depuis ailleurs) : la case d'aujourd'hui **s'allume** en vert (pop + glow).
- Série : les cases consécutives partagent un **halo orange** qui s'étend quand la série grandit.

### 7.6 Interactions
- Tap case → feuille détail-jour. Pincer/zoomer → bascule Année ↔ Mois.
- Scroll vertical pour parcourir ; aujourd'hui est **mis en évidence** (anneau orange).

### 7.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│  Mon année 2026         [ Année|Mois ] │
│  ✓ validé  ◐ grâce  ○ manqué  ◆ jalon  │
├───────────────────────────────────────┤
│     J  F  M  A  M  J  J  A  S  O  N  D │
│  1  ✓  ✓  ✓  ✓  ✓  ✓  ·  ·  ·  ·  ·  · │
│  5  ✓  ✓  ✓  ◐  ✓  ✓  ·                │
│ 10  ✓  ◆  ✓  ✓  ✓  ✓                   │
│ 15  ✓  ✓  ✓  ○  ✓  ◉ ← aujourd'hui     │
│ 20  ✓  ✓  ◐  ✓  ✓                      │
│ 25  ✓  ✓  ✓  ✓  ◆                      │
│ 31  ✓  —  ✓  —  ✓                      │
│                                         │
│  〔halo orange = jours en série 🔥〕     │
├───────────────────────────────────────┤
│  Record : 21 j   ·   Actuelle : 🔥 12  │
│  Validés : 156   Grâce : 6   Manqués: 9│
└───────────────────────────────────────┘
        ↓ tap sur une case
┌───────────────────────────────────────┐
│  Mardi 30 juin · Jour 181              │
│  ⚔︎ Aborde un inconnu…                  │
│  Statut : ✓ Validé   +60 XP            │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Notion** : vue **Calendrier** native de la base « Défis » (statut = couleur), DOUBLÉE d'une vue **Galerie/Tableau** qui imite la heatmap (groupée par mois). Le « mur qui se remplit » est réel et automatique dès qu'on coche un défi. **Canva/PDF** : une planche « 365 cases » (grille imprimable/cochable) — très premium en objet, mais statique ; on la met à jour mensuellement, ou on la garde comme **poster de suivi** à imprimer. **Astuce** : émojis ✓ / ◐ / ○ pour rester accessible (couleur + forme).
> **🔵 App native future** — Heatmap animée, halo de série, pincer-zoomer, détail-jour temps réel.

---

## 8. Écran récompenses

### 8.1 Objectif
Matérialiser ce qu'on **gagne pour de vrai** : certificats, sceaux, titres déblocables, et la **carte de l'année** (souvenir partageable). C'est l'écran « trophée » et le levier de partage social.

### 8.2 Disposition

| Zone | Contenu |
|---|---|
| **Header** | « Récompenses » |
| **Titre actif** | Bandeau « Titre porté : *L'Aguerri* » + bouton changer |
| **Certificats** | Carrousel de **certificats** (paliers : 30 / 100 / 365 jours) |
| **Sceaux** | Rangée de sceaux/cires (jalons mensuels) |
| **Carte de l'année** | Grande carte récap partageable (radar mini + stats + rang) |
| **CTA** | « Partager » / « Télécharger le certificat (PDF) » |

### 8.3 Hiérarchie visuelle
Les certificats (objets précieux, bordure dorée, papier) sont les héros. Le titre porté donne de l'identité. La carte de l'année est le **point de partage** (orange CTA).

### 8.4 Composants
Certificat (cadre premium) · Sceau de cire · Puce-titre · Carte-de-l'année partageable · Boutons partager/télécharger.

### 8.5 Animations
- Déblocage certificat : **sceau de cire qui s'estampe** (scale + rotation légère + son mat) puis le certificat « se révèle ».
- Carrousel : parallax léger entre certificats.
- Carte de l'année : reflet/brillance qui balaie la carte (sheen) au premier affichage.

### 8.6 Interactions
- Tap certificat → plein écran + bouton « Télécharger PDF ».
- Tap « Changer de titre » → liste des titres débloqués (radio).
- Partager → génère une image carte (story-ready 9:16).

### 8.7 Maquette ASCII

```
┌───────────────────────────────────────┐
│  Récompenses                            │
├───────────────────────────────────────┤
│  Titre porté :  « L'Aguerri »   [changer]│
├───────────────────────────────────────┤
│  CERTIFICATS                            │
│  ┌───────────────────────────────┐      │
│  │ ╔═══════════════════════════╗ │  ◀▶  │
│  │ ║   CERTIFICAT · 100 JOURS  ║ │      │
│  │ ║      ✦  Cap365  ✦         ║ │      │
│  │ ║   décerné à  Sébastien    ║ │      │
│  │ ║      ~ sceau de cire ~    ║ │      │
│  │ ╚═══════════════════════════╝ │      │
│  └───────────────────────────────┘      │
│   ● 30j   ◉ 100j   ○ 365j               │
├───────────────────────────────────────┤
│  SCEAUX   🔴 🟠 🟢 ⚪ ⚪ ⚪ ⚪ ⚪ ⚪ ...   │
├───────────────────────────────────────┤
│  CARTE DE L'ANNÉE                       │
│ ╭─────────────────────────────────────╮ │
│ │  Cap365 · 2026                       │ │
│ │  ◆ ARTISAN · Niv.14   🔥 record 21j  │ │
│ │  [mini-radar]   156 défis · 9360 XP  │ │
│ ╰─────────────────────────────────────╯ │
│  ┌──────────────┐ ┌──────────────────┐  │
│  │  Partager  ↗ │ │ Télécharger PDF ⤓ │  │
│  └──────────────┘ └──────────────────┘  │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **C'est le plus naturel en PDF/Canva !** Les **certificats** = pages Canva premium (cadre doré, sceau, prénom en variable) exportées en **PDF haute qualité** que l'utilisateur télécharge/imprime — sensation très tangible. La **carte de l'année** = template Canva 1080×1920 (story) que l'on remplit avec ses chiffres → vrai partage Instagram. **Notion** : galerie « Mes récompenses » + bouton lien vers le PDF du certificat. **Titres** = simple select dans le profil Notion.
> **🔵 App native future** — Estampe animée, sheen, génération d'image dynamique côté serveur, partage natif.

---

## 9. Écran « jour sans / reprise »

### 9.1 Objectif
Transformer le moment le plus risqué (l'oubli, la rupture de série) en moment **bienveillant et motivant**. Le **Filet de Reprise** doit donner envie de revenir, **sans culpabiliser**. C'est l'écran de rétention.

### 9.2 Les mécaniques (rappel V2)
- **Journée de grâce** : 1 oubli toléré sans casser la série (consommée automatiquement).
- **Filet de Reprise** : si la série casse, on propose un **mini-défi de reprise** (facile) qui ré-amorce l'élan ; la série repart, l'historique garde une trace douce (◐), pas un échec rouge.

### 9.3 Disposition

| Zone | Contenu |
|---|---|
| **Illustration** | Visuel calme (filet / corde / aube) — ton rassurant, pas dramatique |
| **Message** | « Tu as manqué hier. Ça arrive. » (titre chaleureux) |
| **État série** | « Ta journée de grâce a été utilisée » OU « Série en pause : 12 jours protégés » |
| **Filet de Reprise** | Carte mini-défi facile (« Reprends en douceur : +20 XP ») |
| **CTA** | « Relever le défi de reprise » (orange) + lien discret « Plus tard » |
| **Réassurance** | « Ta progression et tes badges sont intacts. » |

### 9.4 Hiérarchie visuelle
Aucune alerte rouge agressive. Couleurs **douces** (bleu nuit + orange chaleureux). Le héros est le **mini-défi de reprise** (facile, gagnant). Le message rassure d'abord, propose ensuite.

### 9.5 Composants
Illustration d'état · Carte mini-défi-reprise · Bouton CTA · Lien secondaire · Encart réassurance.

### 9.6 Animations
- Entrée **douce** (fondu + montée lente, 400 ms) — délibérément non festive.
- Si « journée de grâce » utilisée : la flamme se met en **veilleuse** (orange → ambre tamisé) avec un mot « protégée ».
- Reprise validée → **rallumage de la flamme** (ambre → orange vif, petites étincelles) + « Série relancée 🔥 ».

### 9.7 Interactions
- Tap « Relever le défi de reprise » → validation simplifiée (§3.6 allégée) → flamme rallumée.
- « Plus tard » → retour dashboard, rappel doux le soir.
- Jamais de pop-up culpabilisant, jamais de compteur qui « tombe à 0 » brutalement.

### 9.8 Maquette ASCII

```
┌───────────────────────────────────────┐
│                                         │
│            ░░  (aube douce)  ░░         │
│              〰️〰️ filet 〰️〰️            │
│                                         │
│      Tu as manqué hier. Ça arrive.      │   ← titre chaleureux
│                                         │
│   ╭─────────────────────────────────╮   │
│   │ 🛟  Filet de Reprise            │   │
│   │ Ta série de 12 jours est        │   │
│   │ protégée. Reprends en douceur.  │   │
│   ╰─────────────────────────────────╯   │
│                                         │
│   ╭─────────────────────────────────╮   │
│   │ DÉFI DE REPRISE · facile        │   │
│   │ Bois un grand verre d'eau et    │   │
│   │ écris 1 phrase de gratitude.    │   │
│   │ Difficulté ●●○○○○○○○○   +20 XP   │   │
│   ╰─────────────────────────────────╯   │
│                                         │
│ ┌─────────────────────────────────────┐ │
│ │     Relever le défi de reprise       │ │   ← CTA orange
│ └─────────────────────────────────────┘ │
│              Plus tard                   │   ← lien discret
│                                         │
│  ✓ Ta progression et tes badges        │
│    sont intacts.                        │
└───────────────────────────────────────┘
```

> **🟢 Réalisable maintenant** — **Notion** : une page « Reprise » avec callout chaleureux + lien vers un **mini-défi facile** (sélection filtrée « difficulté ≤ 2 »). La logique « journée de grâce / filet » se gère par une **propriété statut** (`Validé / Grâce / Reprise / Manqué`) qu'on choisit à la main — l'important est le **ton** du contenu écrit. **PDF/Canva** : une page « Tu reviens, et c'est l'essentiel » avec le défi de reprise et un message bienveillant ; intégrée au parcours. **Le vrai levier ici n'est pas la techno mais la copie** : écrire des messages doux et déculpabilisants (déjà 100 % faisable).
> **🔵 App native future** — Détection auto de la rupture, consommation auto de la grâce, rallumage animé de la flamme, notif de reprise le soir.

---

## 10. Animations clés & transitions

> Règle maîtresse : **une célébration à la fois**, mises en **file**. Toutes respectent « réduire les animations » (fallback = fondu + texte).

| Événement | Animation | Durée | Détail |
|---|---|---|---|
| **Validation défi** | Morph bouton → coche + confettis + compteur XP | 1.8 s | §3.6. Haptique moyen. Glow sur la stat impactée. |
| **Level-up** | Plein écran : « NIVEAU 15 », chiffre qui s'incrémente, onde lumineuse, barre XP qui déborde puis se réinitialise | 2.2 s | Display Sora 40 pt, halo orange, haptique success. |
| **Rang-up** | L'emblème de rang **se métamorphose** (ancien → nouveau, particules), bandeau « ARTISAN → AGUERRI » | 2.8 s | Plus rare, donc plus spectaculaire (sheen doré). |
| **Badge débloqué** | Médaillon qui **tombe et rebondit** au centre (spring), ring pulsant, « NEW » | 2.0 s | Bouton « Voir mes badges ». Sceau pour les légendaires. |
| **Série en feu** | Flamme qui **grandit par paliers** (7/30/100 j), particules d'étincelles, couleur ambre→orange→blanc-chaud | en boucle lente | Aux jalons, mini-explosion + son. |
| **Certificat** | Sceau de cire **estampé** (scale + rotation) puis certificat révélé | 1.5 s | Story-ready, partageable. |
| **Reprise** | Flamme **rallumée** (étincelles), « Série relancée » | 1.2 s | Ton doux, non triomphaliste. |

**Transitions entre écrans :**
- Dashboard → Carte défi : **shared element / zoom container** (la carte grandit en plein écran).
- Liste → détail (stat, badge, jour) : **feuille modale** qui monte du bas (sheet, coins arrondis, poignée).
- Onglets : **fondu croisé** rapide (150 ms), pas de slide (évite le mal de mer).
- Validation → Level-up → Badge : enchaînement **séquentiel** (jamais simultané).

---

## 11. Kit de composants

### 11.1 Boutons

| Type | Style | États |
|---|---|---|
| **Primaire (CTA)** | Fond orange `#F5A623`, texte bleu nuit `#1B2A4A` 600, rayon 14, hauteur 52 | Repos / Pressé (scale 0.97, orange foncé) / Désactivé (gris 40 %) / Chargement (spinner) / Succès (vert + ✓) |
| **Secondaire** | Bordure 1.5 px bleu nuit, fond transparent, texte bleu nuit | idem |
| **Fantôme / lien** | Texte gris `#8A93A2` souligné au tap | — |
| **Icône** | 44×44, icône outline, fond cercle clair au pressé | actif/inactif |

### 11.2 Cartes

| Carte | Caractéristiques |
|---|---|
| **Hero-défi** | Fond bleu nuit, texte clair, E2, rayon 28, CTA orange interne |
| **Standard** | Fond blanc, E1, rayon 20, padding 16 |
| **Quête** | Compacte, en-tête type (Quotidienne/Hebdo/…), mini-jauge de progression, état ✓/🔒 |
| **Équilibre / conseil** | Fond orange doux `#FCEBCF`, texte bleu nuit, icône 💡 |

### 11.3 Jauges & barres

- **Barre XP** : piste grise `#E6E9EF`, remplissage orange, hauteur 8 (fine) ou 12 (hero), coins 999, label + % à droite, **animée**.
- **Jauge difficulté** : 10 pastilles `●○`, remplies en bleu nuit (ou en couleur de la stat). Toujours doublée du « x/10 » (accessibilité).
- **Barre de stat** : `▓░` 10 segments, couleur de la stat, valeur + tendance ▲▼–.
- **Anneau de progression** (collections) : circulaire, % au centre.

### 11.4 Puces de stat (chips)

```
[ 🛡 Discipline ]   ← pill, fond = couleur stat à 12 %, texte = couleur stat, icône outline
```
8 variantes fixes (§4.2). Utilisées partout (carte défi, radar, calendrier, conseils). **Cohérence = clé du premium.**

### 11.5 États (système)

| État | Traitement |
|---|---|
| **Vide** (pas encore de données) | Illustration douce + 1 phrase + CTA (« Relève ton 1er défi ») |
| **Chargement** | Skeletons (blocs gris pulsants), jamais de spinner plein écran |
| **Succès** | Vert + ✓ + micro-haptique |
| **Erreur / hors-ligne** | Bandeau discret bleu nuit, ton calme, action « Réessayer » |
| **Verrouillé** | Silhouette grise + 🔒 + condition de déblocage |
| **Désactivé** | Opacité 40 %, non tactile |

### 11.6 Médaillon-badge (4 raretés)

```
 Commun      Rare        Épique      Légendaire
 ╭────╮      ╭────╮      ╭────╮      ╭────╮
 │ ◦  │      │ ◆  │      │ ✦  │      │ 👑 │  + halo doré + sheen
 ╰────╯      ╰────╯      ╰────╯      ╰────╯
 gris        bleu        violet      or (dégradé)
```

### 11.7 Avatar-rang & emblèmes

Cercle bleu nuit avec emblème du rang au centre + liseré coloré selon le rang (Éveil clair → Légende doré). Présent dans la top bar (dashboard) et en grand dans Progression.

### 11.8 Iconographie

Style **outline arrondi**, trait 1.75 px, coins arrondis, taille 24 (nav) / 20 (inline). Pleines uniquement pour l'onglet actif et les états « obtenu ».

---

## 12. Livrer cette expérience SANS app

> **Objectif : produire, en moins de 14 jours, à une personne, petit budget, un kit qui DONNE LA SENSATION d'une app premium.** La pile recommandée : **Notion (moteur) + Canva (objets premium) + PDF cliquable (livrable hors-ligne)**.

### 12.1 Pourquoi cette pile

| Brique | Rôle | Force |
|---|---|---|
| **Notion** | Le « moteur » : base des 365 défis, validation (cases), calendrier auto, stats par formule, profil/rang | Dynamique, gratuit, mobile (l'app Notion donne déjà un cadre « appli ») |
| **Canva** | Les « objets précieux » : certificats, médaillons, carte de l'année, cartes de défi premium, radar | Rendu pro, export PDF/PNG, templates dupliquables |
| **PDF cliquable** | Le livrable **hors-ligne** vendable : navigation par hyperliens internes (sommaire ↔ pages) | Tangible, offrable, fonctionne partout |

### 12.2 Comment recréer chaque effet « app » sans code

| Effet app | Substitut sans app |
|---|---|
| Navigation par onglets | **Hyperliens internes** PDF (barre d'icônes en pied de page, cliquable) / sidebar Notion |
| Défi du jour | Vue Notion filtrée sur la date du jour / page « Aujourd'hui » mise à jour |
| Validation animée | Case à cocher Notion + **GIF de coche** / changement de page « Bravo +XP » en PDF |
| XP / niveau / rang | **Formules Notion** (XP = Difficulté×10 ; niveau & rang = conditions sur XP total) |
| Radar 8 stats | Graphique **radar Google Sheets/Excel** (8 axes) exporté en image, 1 mise à jour/mois |
| Calendrier 365 | Vue **Calendrier Notion** native + planche heatmap Canva |
| Badges | **Galerie Notion** (couvertures = médaillons Canva ; verrouillés = version grise) |
| Certificats | **Pages Canva** exportées en PDF téléchargeable (prénom variable) |
| Carte de l'année | Template **Canva story 1080×1920** à remplir et partager |
| Célébrations | **GIF/emojis** + pages « révélation » (level-up, badge) |
| Dark mode | **2e thème** Notion (sombre) + version PDF sombre |

### 12.3 Plan de production < 14 jours

| Jours | Livrable |
|---|---|
| **J1-J2** | Design system Canva : couleurs, typos (Poppins/Inter), 4 gabarits de carte, puces de stat, médaillons (4 raretés) |
| **J3-J4** | Base Notion « 365 défis » : propriétés (catégorie/stat, difficulté, XP formule, statut), 1 vue Aujourd'hui + 1 vue Calendrier |
| **J5-J6** | Page Dashboard Notion (hero défi du jour, série, barre XP, quêtes) + profil/rang par formules |
| **J7** | Écran Stats : Google Sheet radar 8 axes + lignes de stat ▓░ dans Notion |
| **J8** | Galerie Badges (80 médaillons Canva, états verrouillé/débloqué) |
| **J9** | Certificats (30/100/365 j) + carte de l'année (template story) en Canva |
| **J10** | Écran Reprise / Filet (copie bienveillante + mini-défi facile) + journée de grâce (statut) |
| **J11** | Version **PDF cliquable** : sommaire + hyperliens internes + pied de page navigation |
| **J12** | Dark mode (thème Notion sombre + variante PDF) |
| **J13** | Onboarding (1 page « Comment ça marche » + 1er défi offert) + relecture accessibilité (formes + couleurs) |
| **J14** | Tests sur mobile (Notion app + PDF dans une visionneuse), corrections, export final |

### 12.4 Ce qui fait basculer dans le « premium » sans code (checklist)

- [ ] **Cohérence absolue** des 8 puces de stat (même couleur/icône partout).
- [ ] **Beaucoup de vide** : marges généreuses, une seule action par écran.
- [ ] **Objets téléchargeables** (certificats PDF) = sensation tangible et offrable.
- [ ] **Copie chaleureuse** partout, surtout sur l'écran de reprise (le ton fait 80 % du premium ici).
- [ ] **Statuts toujours doublés** (couleur + forme + icône) → accessible et lisible.
- [ ] **Carte de l'année partageable** → croissance virale gratuite.
- [ ] **Dark mode** proposé → signal « produit soigné ».
- [ ] Un **GIF de validation** réutilisé → micro-dopamine sans dev.

### 12.5 Pont vers l'app native (plus tard)

La base Notion sert de **spécification fonctionnelle** : les 365 défis, la table des stats, les formules XP/rang et les conditions de badges sont déjà la **logique métier** à porter telle quelle dans React Native / Flutter. Les assets Canva (médaillons, certificats, emblèmes, carte de l'année) deviennent les **assets de l'app**. On ne jette rien : le kit sans-app est la **v0 jouable** et le **cahier des charges** de la v1 native.

---

> **Cap365** — un carnet de quête premium, calme et confiant. On félicite sans crier, on guide sans infantiliser, et on revient chaque jour.
