# Cap365 — Écrans mobile & templates

> **Un défi par jour. Une version de toi par an.**
> 365 Défis de Vie — *Le RPG de ta vie réelle.*
>
> **Document de production design.** Les 7 écrans produit de l'expérience « app sans app » (mobile-first, build-ready) + le kit de composants réutilisable + les animations clés + la liste des templates Canva à fabriquer. Cohérent avec `04-systeme-gamification.md`, `05-design-systeme.md`, `experience/01-notion-build-kit.md` et l'économie V2 (`v2-audit-et-transformation/02-systeme-rpg.md`).

---

## 0. Cadre commun (à respecter sur tous les écrans)

### 0.1 Économie V2 — rappel canonique

| Élément | Valeur canon V2 |
|---|---|
| **Difficulté** | échelle **1 → 10** |
| **XP** | **XP = difficulté × 10** (10 → 100 XP) |
| **Points de stat** | diff 1-3 → **+1** · diff 4-6 → **+2** · diff 7-10 → **+3** |
| **8 statistiques (radar)** | ⚙ Discipline · ⚑ Courage · ❤ Vitalité · ✦ Charisme · ◇ Mental · ✎ Savoir · ✺ Création · ◈ Prospérité |
| **Niveaux / rangs** | **50 niveaux**, **10 rangs de 5 niveaux** : Éveil → Élan → Apprenti → Constant → Aguerri → Affirmé → Artisan → Maître → Mentor → **Légende** |
| **Séries** | streak +5 XP/défi/jour au-delà de J3 (plafond +25) · journée de grâce hebdo · **Filet de Reprise** → badge 🔥 **Phénix** |
| **Bonus** | semaine pleine 7/7 = **+50 XP** · Équilibre 8/8 (7 j glissants) = **+40 XP** |
| **Quêtes** | quotidienne (= défi du jour) · hebdo (+100 XP) · mensuelle / défi-BOSS (+300 XP) · secrètes |
| **Badges** | **24 badges**, 4 raretés : 🟢 Commun · 🔵 Rare · 🟣 Épique · 🟠 Légendaire |
| **Jalons** | **J7** · **J30** · **J90** · **J182** (Mi-Parcours) · **J365** (Cap365) |

### 0.2 Charte appliquée (mobile)

| Rôle | Nom | HEX | Usage écran |
|---|---|---|---|
| 🔵 Primaire | Bleu nuit | `#1B2A4A` | en-têtes, barres d'onglets, fonds de blocs, texte fort, radar rempli |
| 🔷 Secondaire | Bleu | `#2E5EAA` | étiquettes catégorie, filets, sous-titres |
| 🟠 Accent | Orange | `#F5A623` | **action uniquement** : XP, boutons, jauges qui progressent, jalons, série en grâce |
| 🟢 Succès | Vert | `#27AE82` | validation, cases ✓, série en cours, jauges remplies |
| ⬜ Neutre clair | Gris-bleu | `#8A93A2` | texte secondaire, états inactifs, cases vides, verrouillé |
| 🤍 Fond | Blanc cassé | `#F7F9FC` | fond général des écrans (jamais de blanc pur en grande surface) |
| ⚪ Blanc | Blanc pur | `#FFFFFF` | cartes posées sur le fond, texte sur blocs primaires |

- **Typos :** sans-serif géométriques — **Montserrat** (titres, chiffres, XP) · **Inter** (corps, légendes). Corps **≥ 16 pt**.
- **Icônes :** outline arrondi, trait constant, une seule famille (Lucide / Feather / Phosphor), `#1B2A4A` par défaut, `#F5A623` actif.
- **Formes :** coins arrondis (cartes 16 px, boutons 12 px, pastilles 8 px), **ombres douces** (opacité 12 %, flou 16, Y +4).
- **Dark mode optionnel :** fond `#0F1A30`, cartes `#1B2A4A`, texte `#F2F5FA`, accents inchangés (orange/vert restent les signaux).

### 0.3 Squelette d'écran (gabarit universel)

```
┌─────────────────────────────────┐  ← cadre mobile 390 × 844
│  ▓ STATUS BAR (heure · batterie) │
│  HEADER : titre · série · niveau │  ← bandeau, hauteur 56
│─────────────────────────────────│
│                                 │
│        ZONE DE CONTENU          │  ← scroll vertical, padding 16
│        (cartes, jauges…)        │
│                                 │
│─────────────────────────────────│
│ 🏠 Accueil 📈 Progr. 📊 Stats   │  ← TAB BAR fixe, 5 onglets
│ 🎖 Trophées 👤 Récomp.          │
└─────────────────────────────────┘
```

> **Navigation principale (tab bar, 5 onglets) :** Accueil · Progression · Stats · Trophées · Récompenses. Le **Calendrier 365** et le **Défi du jour** s'ouvrent depuis l'Accueil (le défi en plein écran, le calendrier via un raccourci). Onglet actif = pictogramme `#F5A623` + label `#1B2A4A`.

---

## 1. Accueil / Dashboard

### 🎯 Objectif
Donner, en **moins de 3 secondes**, l'unique chose à faire aujourd'hui (le défi du jour) et la preuve qu'on progresse (série 🔥, niveau/rang, XP). Zéro paralysie de choix : **une quête, une seule**. C'est l'écran de retour quotidien — il doit être satisfaisant même sans rien toucher.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | Logo Cap365 (gauche) · pastille **série 🔥 47** (centre-droite) · pastille **niveau/rang ◐ Niv 18 · Constant** (droite). Tap série → Calendrier ; tap niveau → Progression. |
| **B — Salutation + jour** | « Salut. » + **Jour 168 / 365** + mini-jauge année (fine, orange). |
| **C — Carte « Défi du jour »** *(héros)* | Grande carte blanche : puce stat colorée, titre du défi, difficulté ●/10, gain (+XP · +pts stat), bonus série. CTA d'ouverture. |
| **D — Bandeau quêtes** | Carrousel horizontal de 3 puces : **Hebdo** (jauge + objectif), **Mensuelle / BOSS** (arc + jours restants), **Équilibre 8/8** (n/8 stats). |
| **E — Raccourcis** | Rangée de 4 tuiles : 📊 Mon héros · 🗓 Calendrier 365 · 🎖 Trophées · 🏅 Récompenses. |
| **F — Tab bar** | Navigation 5 onglets, Accueil actif. |

### 🪜 Hiérarchie visuelle
1. **Carte défi du jour** (la plus grande surface, ombre la plus marquée, seul CTA orange plein).
2. **Série 🔥 + niveau** (chiffres Montserrat, en header, toujours visibles).
3. **Quêtes** (jauges orange, taille moyenne).
4. **Raccourcis** (icônes outline, discrets, gris/bleu).

### 🧩 Composants
Header de statut · Carte-défi (compacte) · Puce de stat · Jauge fine (année) · Puce de quête × 3 · Tuile-raccourci × 4 · Tab bar.

### 👆 Interactions
- Tap carte défi → ouvre l'écran **Défi du jour** (transition push, parallax léger de la carte).
- Tap pastille série → **Calendrier 365**. Tap niveau → **Progression**.
- Swipe horizontal sur le bandeau quêtes → fait défiler les 3 puces.
- Pull-to-refresh → recharge le défi (utile au passage de minuit, nouveau jour).
- Si défi **déjà validé** aujourd'hui : la carte passe en état « ✓ Fait » (liseré vert), CTA devient « Voir le défi de demain est verrouillé jusqu'à minuit » + suggestion d'un **défi bonus** optionnel.

### 🎬 Animations
- À l'ouverture : la jauge année et les jauges de quête **se remplissent depuis 0** (300 ms, ease-out).
- Pastille **série 🔥** : flamme qui respire en boucle lente (voir §9 *Série en feu*).
- Au retour depuis une validation : confettis discrets + la série incrémente avec un « +1 » qui monte.

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓ 9:41 ▓▓▓ ▂▄ 100% ▓▓▓▓ │
│─────────────────────────────────│
│  Cap365        🔥 47   ◐ Niv 18 │  A  série · niveau/rang
│                        Constant │
│─────────────────────────────────│
│  Salut.            Jour 168/365 │  B
│  ████████████████░░░░░░░  46 %  │     mini-jauge année (orange)
│─────────────────────────────────│
│  QUÊTE DU JOUR                  │  C ── carte héros (blanche, ombre)
│  ┌───────────────────────────┐  │
│  │ ⚑ COURAGE        diff 7/10 │  │     puce stat (orange) + diff
│  │                           │  │
│  │ « Appelle quelqu'un que   │  │     titre du défi
│  │   tu évites depuis trop   │  │
│  │   longtemps. »            │  │
│  │ ● ● ● ● ● ● ● ○ ○ ○        │  │     jauge difficulté
│  │ +70 XP · +3 ⚑ · 🔥+20 XP  │  │     gain + bonus série
│  │                           │  │
│  │ [   ✔  RELEVER LE DÉFI  ] │  │     ← CTA orange plein
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  TES QUÊTES        ‹ ● ○ ○ ›    │  D ── carrousel
│  ┌──────────┐ ┌──────────┐      │
│  │HEBDO     │ │MOIS · BOSS│ →   │
│  │2/3 ≥d6   │ │J-4 ◈ arc │      │
│  │███░ +100 │ │████░ +300│      │
│  └──────────┘ └──────────┘      │
│─────────────────────────────────│
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐    │  E ── raccourcis
│  │📊  │ │🗓  │ │🎖  │ │🏅  │    │
│  │Héros│ │365 │ │Trop│ │Récomp│  │
│  └────┘ └────┘ └────┘ └────┘    │
│─────────────────────────────────│
│ 🏠 Accueil 📈 Progr 📊 Stats    │  F
│ 🎖 Trophées 👤 Récomp           │
└─────────────────────────────────┘
```

---

## 2. Défi du jour

### 🎯 Objectif
Présenter **le** défi de façon claire, motivante et relevable, puis transformer le geste « j'ai fait » en **récompense célébrée**. C'est l'écran de l'action — il doit donner envie de valider, jamais de fuir.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | Flèche retour · « Jour 168 / 365 » · pastille difficulté `●●●●●●●○○○ 7/10`. |
| **B — Bandeau stat** | Puce stat colorée pleine largeur : ⚑ **COURAGE** + catégorie source (« Confiance en soi »). |
| **C — Titre du défi** | Phrase d'action, Montserrat Bold, gros. |
| **D — Méta-rangée** | **Difficulté** (jauge ●/10) · **Récompense** (+XP) · **Stat impactée** (puce +pts). |
| **E — Instructions** | 2-4 lignes concrètes et exploitables (« comment faire »). |
| **F — Variantes** | 3 modulations : 🟢 *Plus doux* (diff −2) · ⚪ *Standard* · 🟠 *Plus fort* (diff +2, XP recalculée). Sélection = pastilles. |
| **G — Micro-coaching** | 1 ligne italique : le « pourquoi » du défi. |
| **H — Zone d'action** | CTA principal **✔ JE L'AI FAIT** (orange plein) + secondaire **Reporter à ce soir** (outline). |

### 🪜 Hiérarchie visuelle
1. **Titre du défi** (le plus gros texte de l'écran).
2. **CTA Valider** (orange plein, collant en bas — *sticky*).
3. **Méta-rangée XP / stat / difficulté** (preuve du gain).
4. Instructions → variantes → micro-coaching (support).

### 🧩 Composants
Header difficulté · Puce de stat (pleine largeur) · Jauge difficulté ●/10 · Sélecteur de variantes (3 pastilles) · CTA primaire + secondaire · Encart micro-coaching.

### 👆 Interactions
- Sélection d'une **variante** → la difficulté, l'XP et les +pts stat se recalculent en direct (la méta-rangée s'anime).
- **Reporter à ce soir** → planifie un rappel local (notification) + l'écran le confirme par un toast.
- **JE L'AI FAIT** → ouvre la **séquence de validation** (voir §9), puis additionne XP + stat + série, et peut déclencher level-up / badge / quête.
- Long-press sur le titre → copier la formulation (pour partage), **note personnelle reste privée**.

### 🎬 Animations
- Apparition : la carte monte (slide-up) + la puce stat « pulse » une fois.
- Validation (§9 *Validation*) : check vert qui se trace + compteur **+70 XP** qui s'incrémente de 0 à 70 + la jauge de niveau gagne du terrain.
- Changement de variante : la jauge difficulté **glisse** vers la nouvelle valeur (200 ms).

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  ‹ retour     Jour 168/365      │  A
│               ●●●●●●●○○○ 7/10   │
│─────────────────────────────────│
│  ┌───────────────────────────┐  │  B  bandeau stat (orange)
│  │ ⚑  COURAGE                │  │     · Confiance en soi
│  └───────────────────────────┘  │
│                                 │
│  Appelle quelqu'un que tu       │  C  TITRE (Montserrat Bold)
│  évites depuis trop longtemps.  │
│                                 │
│  ┌───────┬─────────┬─────────┐  │  D  méta-rangée
│  │ DIFF  │  GAIN   │  STAT   │  │
│  │ 7/10  │ +70 XP  │ +3 ⚑    │  │
│  └───────┴─────────┴─────────┘  │
│                                 │
│  Comment faire :                │  E  instructions
│  Choisis la personne, pas le    │
│  moment parfait. Compose,       │
│  respire, dis l'essentiel.      │
│                                 │
│  Adapter le défi :              │  F  variantes
│  ( 🟢 Plus doux )( ⚪ Standard ) │
│  ( 🟠 Plus fort  +20 XP )       │
│                                 │
│  💬 « Le courage, c'est agir    │  G  micro-coaching (italique)
│     avant d'être prêt. »        │
│─────────────────────────────────│
│  [   ✔   JE L'AI FAIT   ]       │  H  CTA orange (sticky)
│  [   Reporter à ce soir   ]     │
└─────────────────────────────────┘
```

---

## 3. Progression

### 🎯 Objectif
Rendre l'ascension **lisible et désirable** : où j'en suis (niveau, rang), combien il reste avant le prochain palier, et la trajectoire de l'année. C'est l'écran qui dit « tu montes, et voilà jusqu'où ».

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | « Progression » · emblème de rang actuel. |
| **B — Bloc rang** | Rang **4 · Constant** ⚓ + titre porté « le·la Constant·e » + emblème. |
| **C — Barre d'XP de niveau** | Jauge orange : Niveau 18 → 19, ratio XP, « reste 460 XP ». |
| **D — Prochain rang** | « Rang 5 · Aguerri 🛡 — dans ~2 niveaux ». |
| **E — Courbe annuelle** | Graphe XP cumulée sur 365 j ; points de level-up ; jalons J90/J182/J365 marqués. |
| **F — Pourcentages** | 2 cartes : **% Année** (défis/365) · **% Niveau** (XP palier). |
| **G — Cette semaine** | Quête hebdo (jauge +100 XP) · Équilibre 8/8 (n/8). |

### 🪜 Hiérarchie visuelle
1. **Barre d'XP de niveau** (orange, large) — le « combien il reste » est le moteur.
2. **Bloc rang + emblème** (identité).
3. **Courbe annuelle** (la preuve du chemin parcouru).
4. Pourcentages et hebdo (détail).

### 🧩 Composants
Bloc-rang (emblème + titre) · Barre d'XP (orange/gris) · Carte-stat « % » × 2 · Graphe-courbe · Puce de quête hebdo · Jauge Équilibre.

### 👆 Interactions
- Tap **bloc rang** → ouvre la **frise des 10 rangs** (Éveil → Légende), rang atteint surligné.
- Tap **courbe** → bascule entre vues : *XP cumulée* / *défis validés* / *série*.
- Tap un **jalon** sur la courbe (J90, J182, J365) → fiche du jalon + récompense associée.
- Tap **% Année** → ouvre le Calendrier 365.

### 🎬 Animations
- Barre d'XP : se remplit depuis l'état précédent à l'ouverture ; après une validation, **avance** en direct (et déclenche le level-up si seuil franchi — voir §9).
- Courbe : se **trace de gauche à droite** au premier affichage (600 ms).
- Approche d'un palier : la barre **pulse** doucement quand on est à < 5 % du niveau suivant.

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  PROGRESSION                ⚓   │  A
│─────────────────────────────────│
│  RANG 4 · CONSTANT          ⚓   │  B
│  Titre porté : « le·la Constant·e »│
│─────────────────────────────────│
│  Niveau 18  →  19               │  C  barre d'XP
│  ████████████████░░░░░░  72 %   │
│  4 785 / 5 245 XP   (reste 460) │
│                                 │
│  ◆ Prochain rang : 5 · Aguerri 🛡│  D
│    dans ~2 niveaux              │
│─────────────────────────────────│
│  TON ANNÉE (XP cumulée)         │  E  courbe
│  XP                        ╭─★  │     ★ = J365
│  │                    ╭───╯     │
│  │              ╭─◆──╯          │     ◆ = J182 (Mi-Parcours)
│  │        ╭─◆──╯                │     ◆ = J90
│  │  ╭─◆──╯                      │
│  └──┴────┴────┴────┴────┴─ jours│
│     J90  J182        J365       │
│─────────────────────────────────│
│  ┌──────────────┐ ┌────────────┐│  F  pourcentages
│  │ % ANNÉE      │ │ % NIVEAU   ││
│  │   46 %       │ │   72 %     ││
│  │ 168/365      │ │ vers Niv19 ││
│  └──────────────┘ └────────────┘│
│─────────────────────────────────│
│  CETTE SEMAINE                  │  G
│  Hebdo · Semaine du Courage     │
│  ███████████████░░░░  2/3  +100 │
│  Équilibre : 7/8 stats → +40 XP │
└─────────────────────────────────┘
```

---

## 4. Statistiques

### 🎯 Objectif
Montrer **qui est ton héros** d'un coup d'œil (le radar 8 axes, signature unique), donner le détail par stat, et révéler les **déséquilibres** — sans jugement, comme une information actionnable.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | « Mon héros » · rang + titre porté. |
| **B — Radar octogonal** | 8 axes (⚙⚑❤✦◇✎✺◈), zone bleu nuit remplie = silhouette, valeurs 0-100 % en bout d'axe. |
| **C — Lecture du radar** | Phrase humaine : axes forts / axe en retrait. |
| **D — Détail par stat** | Liste des 8 stats : icône · nom · barre de niveau relatif · points cumulés · tendance (↑). |
| **E — Déséquilibres** | Carte « Ton axe en retrait » → 3 quêtes proposées pour le nourrir (jamais imposé). |
| **F — Totaux** | XP totale · défis validés · stat dominante. |

### 🪜 Hiérarchie visuelle
1. **Radar** (la signature — le plus grand élément, centré).
2. **Phrase de lecture** (traduit la forme en langage).
3. **Détail par stat** (barres triées par valeur décroissante).
4. **Déséquilibres** (carte d'invitation, ton bienveillant).

### 🧩 Composants
Graphe-radar (8 axes) · Phrase de lecture · Ligne-de-stat (icône + barre + points) × 8 · Carte « équilibre » (3 quêtes) · Carte-totaux.

### 👆 Interactions
- Tap un **axe / une stat** → fiche détaillée : description de la stat, catégories qui l'alimentent, historique, prochain palier (badge des 100 pts).
- Toggle **« Comparer »** → superpose ton radar **d'aujourd'hui vs. le mois dernier** (delta, fil orange = aujourd'hui).
- Tap une quête proposée dans la carte déséquilibre → l'ajoute en suggestion à l'Accueil.

### 🎬 Animations
- Radar : la silhouette **se déploie depuis le centre** (chaque pointe pousse vers sa valeur, 500 ms, ease-out, léger overshoot).
- Après une validation : l'axe concerné **s'allonge** d'un cran avec un flash de sa couleur.
- Mode comparaison : le radar « mois dernier » apparaît en pointillés gris, le radar actuel se superpose en plein.

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  MON HÉROS         Rang 4 · ⚓   │  A
│  « le·la Constant·e »           │
│─────────────────────────────────│
│              ⚙ 82               │  B  radar 8 axes
│             ╱  │  ╲              │
│       ◈ 41 ╱   │   ╲ ⚑ 68       │
│          ╱   ◢███◣   ╲          │
│   ✺ 55 ●─── ███████ ───● ❤ 90  │     zone pleine = bleu nuit
│          ╲   ◥███◤   ╱          │
│       ✎ 73 ╲   │   ╱ ✦ 38       │
│             ╲  │  ╲              │
│              ◇ 60               │
│  [ ◷ Comparer au mois dernier ] │
│─────────────────────────────────│
│  Fort en ❤ Vitalité & ⚙ Discip. │  C  lecture
│  En retrait : ✦ Charisme (38)   │
│─────────────────────────────────│
│  DÉTAIL                         │  D  détail par stat
│  ❤ Vitalité  ███████████ 90  ↑  │
│  ⚙ Discipline ██████████░ 82  ↑ │
│  ✎ Savoir    █████████░░ 73     │
│  ⚑ Courage   ████████░░░ 68  ↑  │
│  ◇ Mental    ███████░░░░ 60     │
│  ✺ Création  ██████░░░░░ 55     │
│  ◈ Prospérité ████░░░░░░ 41     │
│  ✦ Charisme  ████░░░░░░░ 38     │
│─────────────────────────────────│
│  💡 Nourrir ✦ Charisme ?        │  E  déséquilibres
│  3 quêtes proposées →           │
│─────────────────────────────────│
│  XP totale 5 410 · Défis 152    │  F
└─────────────────────────────────┘
```

---

## 5. Badges (Trophées)

### 🎯 Objectif
Donner envie de **collectionner** : une grille de preuves, lisible à la rareté, avec ce qui est débloqué, à portée, ou encore secret. Chaque badge raconte une histoire — jamais un trophée creux.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | « Mes trophées » · compteur **14 / 24**. |
| **B — Filtres** | Onglets : *Tous · 🟢 Commun · 🔵 Rare · 🟣 Épique · 🟠 Légendaire · ??? Secrets*. |
| **C — Grille de badges** | Vignettes 3 colonnes : médaillon coloré (débloqué) ou silhouette grise (verrouillé) / « ??? » (secret). Liseré coloré = rareté. |
| **D — Prochain à portée** | Carte mise en avant : badge le plus proche + jauge de condition (ex. *Aimant social 88/100 ✦*). |
| **E — Détail (sheet)** | Au tap : médaillon plein écran, condition, récompense (XP/cosmétique/titre), date de déblocage, **taux de possession** (preuve sociale), bouton **Partager**. |

### 🪜 Hiérarchie visuelle
1. **Compteur 14/24** + **grille** (la collection est le sujet).
2. **Prochain à portée** (l'objectif court terme, jauge orange).
3. Filtres (navigation), détail (au tap).

### 🧩 Composants
Compteur de collection · Barre de filtres · Vignette-badge (états : débloqué / verrouillé / secret) · Carte « prochain à portée » · Sheet de détail · Bouton Partager.

### 👆 Interactions
- Tap vignette débloquée → sheet détail + **Partager** (génère le badge social 1080×1080, voir §10).
- Tap vignette verrouillée → sheet « comment l'obtenir » (condition + jauge).
- Tap vignette secrète **« ??? »** → « Continue à jouer pour le découvrir » (jamais de spoiler).
- Filtre par rareté → la grille se ré-ordonne (animation de tri).

### 🎬 Animations
- Déblocage (§9 *Badge débloqué*) : le médaillon **tombe et rebondit** au centre (spring), ring pulsant, mention **NEW** ; sceau de cire pour un Légendaire.
- Grille : vignettes en **stagger** (apparition décalée, 40 ms d'écart) au chargement.
- Vignette verrouillée proche du seuil : léger **shimmer** sur sa jauge.

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  MES TROPHÉES          14 / 24  │  A
│─────────────────────────────────│
│ [Tous][🟢][🔵][🟣][🟠][???]     │  B  filtres
│─────────────────────────────────│
│  🟢▣      🟢▣      🔵▣          │  C  grille 3 col
│  Premier  Lève-tôt  Phénix      │     ▣ débloqué (couleur)
│  feu                            │
│                                 │
│  🔵▣      🟣▣      🟣▢          │
│  Roc      Flamme    Tueur       │     ▢ verrouillé (gris)
│  mental   de fer    de BOSS     │
│                                 │
│  🟠▢      🟠▢      ⬛???         │
│  L'Année  Légende   secret      │     ??? = secret masqué
│           vivante               │
│                                 │
│  ▣ débloqué  ▢ à venir  ??? caché│
│─────────────────────────────────│
│  PROCHAIN À PORTÉE              │  D
│  🔵 Aimant social — 88/100 ✦    │
│  ████████████████░░  +120 XP    │
│─────────────────────────────────│
│ 🏠  📈  📊  🎖(actif)  👤        │
└─────────────────────────────────┘
```

---

## 6. Calendrier 365

### 🎯 Objectif
Voir l'**année entière d'un coup d'œil** (365 cases) et **ressentir la régularité** : le mur qui se remplit de vert. Repérer séries, journées de grâce, jalons et manques — la densité de vert est le message.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | « Mon année » · compteur **168 / 365 validés** · taux de complétion %. |
| **B — Bandeau séries** | 🔥 Série en cours · Record · journées de grâce restantes cette semaine. |
| **C — Légende** | ✓ validé (vert) · ◐ grâce (orange) · ○ manqué (gris) · ◆ jalon. |
| **D — Grille 365** | 12 mois en lignes, cases compactes ; **liseré** reliant les jours d'une même série (effet « chaîne ») ; jalons ◆ en orange. |
| **E — Jalons** | Frise des jalons : J7 · J30 · J90 · J182 (Mi-Parcours) · J365 (Cap365), atteints vs à venir. |
| **F — Sheet d'un jour** | Au tap d'une case : date, défi de ce jour, stat, statut, XP gagnée. |

### 🪜 Hiérarchie visuelle
1. **Grille 365** (le mur, sujet central — vert dominant = fierté).
2. **Bandeau série 🔥** (l'élan en cours).
3. **Frise des jalons** (les caps symboliques).
4. Légende, sheet (support).

### 🧩 Composants
Compteur de complétion · Bandeau série · Légende d'états · Grille calendaire (case : validé / grâce / manqué) · Liseré de série · Marqueur de jalon ◆ · Sheet-jour.

### 👆 Interactions
- Tap une **case** → sheet du jour (défi, stat, statut). Cases futures = neutres, non tappables.
- Tap un **jalon** ◆ → fiche du jalon + récompense (certificat, médaille, badge associé).
- Pinch-zoom / toggle **« Vue mois »** ↔ **« Vue année »** (du détail au mur complet).
- Scroll vertical fluide sur les 12 mois ; le mois courant est **mis en évidence**.

### 🎬 Animations
- Au chargement : les cases validées **s'allument en cascade** (vague de gauche à droite, par mois).
- Au passage d'un **jalon atteint** : pulsation ◆ orange + mini-célébration.
- Série active : les cases reliées partagent un **liseré qui scintille** légèrement (effet chaîne vivante).

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  MON ANNÉE       168/365 · 92 % │  A
│─────────────────────────────────│
│  🔥 Série 47   ·   Record 47    │  B
│  Grâce restante cette sem. : 1  │
│─────────────────────────────────│
│  ✓ validé  ◐ grâce  ○ manqué  ◆ │  C  légende
│─────────────────────────────────│
│        1    5    10   15   ... 31│  D  grille 365
│  JAN  ✓✓✓✓✓ ✓✓◐✓✓ ✓✓✓✓✓ ✓✓✓◆... │     ◆ = jalon J30
│  FÉV  ✓✓✓✓✓ ✓✓✓✓○ ✓✓✓✓✓ ✓✓◐...   │
│  MAR  ✓✓✓✓✓ ✓✓✓◆✓ ✓✓✓✓✓ ...      │     ◆ = jalon J90
│  AVR  ✓✓✓✓✓ ✓✓✓✓✓ ...            │
│  MAI  ✓✓✓✓✓ ✓✓◐✓✓ ...            │
│  JUN  ✓✓✓◆✓ ░░░░░ ...            │     ◆ = J182 Mi-Parcours
│  JUL→DÉC  ░░░░░░░░░░░░ (à venir) │
│─────────────────────────────────│
│  JALONS                         │  E  frise
│  ●J7  ●J30  ●J90  ◆J182  ○J365  │     ● atteint · ◆ proche · ○ à venir
│─────────────────────────────────│
│ 🏠  📈  📊  🎖  👤              │
└─────────────────────────────────┘
```

---

## 7. Récompenses

### 🎯 Objectif
Matérialiser ce qu'on **gagne pour de vrai** : certificats datés, sceaux de stat/jalons, titres de rang, et la **Carte de l'Année** (souvenir partageable). C'est l'écran « trophée » premium et le levier de partage social — chaque objet est conçu pour être affiché.

### 🧱 Disposition (zone par zone)
| Zone | Contenu |
|---|---|
| **A — Header** | « Récompenses ». |
| **B — Certificats** | Carrousel de certificats jalons : **J30**, **J90**, **J182 (Mi-Parcours)**, **J365 (Transformation)** — bordure dorée, papier, datés/nominatifs. Verrouillés en silhouette. |
| **C — Sceaux de stat** | Rangée de 8 sceaux de cire (un par stat, estampé au badge des 100 pts) + sceaux de jalons mensuels. |
| **D — Titres de rang** | Liste des titres déblocables (l'Éveillé·e → Légende) ; le titre **porté** est mis en avant ; bouton « Porter ce titre ». |
| **E — Carte de l'Année** | Fresque récapitulative qui se remplit au fil des 365 défis ; aperçu + CTA partage (débloquée à J365 / Rang 10). |
| **F — CTA** | **Partager** / **Télécharger le certificat (PDF)**. |

### 🪜 Hiérarchie visuelle
1. **Certificats** (les objets précieux, héros de l'écran — bordure dorée).
2. **Carte de l'Année** (point de partage, CTA orange).
3. **Titres de rang** (identité portée).
4. **Sceaux** (collection secondaire).

### 🧩 Composants
Carrousel-certificats · Carte-certificat (cadre premium) · Sceau de cire (× 8 stats + mensuels) · Puce-titre (porté / déblocable) · Carte-de-l'année · Boutons Partager / Télécharger PDF.

### 👆 Interactions
- Tap un **certificat** → plein écran (parallax du carrousel) + bouton **Télécharger PDF** + **Partager** (génère story 1080×1920, voir §10).
- Tap un **titre** → « Porter ce titre » (devient le titre affiché sur le profil et les partages).
- Tap **Carte de l'Année** → plein écran zoomable + partage.
- Certificat verrouillé → affiche la condition (« Atteins le jour 365 »).

### 🎬 Animations
- Déblocage d'un certificat (§9) : **sceau de cire estampé** (scale + légère rotation, son mat) puis le certificat **se révèle** (fade + montée).
- Carrousel : **parallax léger** entre certificats au swipe.
- Carte de l'Année : au déblocage final, la fresque **s'assemble** pièce par pièce (les 365 cases convergent).

### 🗺️ Maquette
```
┌─────────────────────────────────┐
│  RÉCOMPENSES                    │  A
│─────────────────────────────────│
│  CERTIFICATS         ‹ ● ○ ○ › │  B  carrousel
│  ┌───────────────────────────┐  │
│  │ ╔═══════════════════════╗ │  │
│  │ ║  CERTIFICAT · J182    ║ │  │     bordure dorée
│  │ ║  ~ Mi-Parcours ~      ║ │  │
│  │ ║  ────────────────     ║ │  │
│  │ ║   ~ sceau de cire ~   ║ │  │
│  │ ║  Délivré le 14/06     ║ │  │     daté · nominatif
│  │ ╚═══════════════════════╝ │  │
│  └───────────────────────────┘  │
│   J30 ✓   J90 ✓   J182 ✓  J365 🔒│
│─────────────────────────────────│
│  SCEAUX DE STAT                 │  C
│  ⚙✓ ⚑✓ ❤✓ ✦○ ◇✓ ✎✓ ✺○ ◈○      │     ✓ estampé · ○ à venir
│─────────────────────────────────│
│  TITRES DE RANG                 │  D
│  ▸ « le·la Constant·e » (porté) │
│    l'Éveillé·e · l'Affirmé·e …  │
│    [ Porter un autre titre ]    │
│─────────────────────────────────│
│  CARTE DE L'ANNÉE      🔒 J365  │  E
│  ┌───────────────────────────┐  │
│  │  ▦▦▦▦▦▦ fresque qui se    │  │
│  │  ▦▦▦▦▦▦ remplit au fil    │  │
│  │  ▦▦░░░░ des 365 défis     │  │
│  └───────────────────────────┘  │
│─────────────────────────────────│
│  [ Partager ]  [ Télécharger PDF ]│  F
└─────────────────────────────────┘
```

---

## 8. Kit de composants (réutilisable)

> Briques de base communes à tous les écrans. Tout se monte par assemblage. Coins : carte 16 px, bouton 12 px, pastille 8 px. Ombre douce (12 % / flou 16 / Y +4).

### 8.1 Boutons
| Composant | Spéc | États |
|---|---|---|
| **CTA primaire** | Fond `#F5A623`, texte `#FFFFFF` Montserrat Bold, hauteur 52, padding 14×28, radius 12 | *défaut* · *pressé* (−6 % lumino) · *chargement* (spinner) · *succès* (vire vert `#27AE82` + ✓) · *désactivé* (gris `#8A93A2` 40 %) |
| **Bouton secondaire** | Contour `#1B2A4A` 1,5 px, texte `#1B2A4A`, fond transparent | défaut · pressé · désactivé |
| **Bouton texte / lien** | Texte `#2E5EAA`, sans fond | défaut · pressé |
| **Pastille d'action** | Ronde, icône outline, fond `#FFFFFF` + ombre | défaut · actif (`#F5A623`) |

### 8.2 Cartes
| Composant | Spéc |
|---|---|
| **Carte-défi** | Fond `#FFFFFF`, radius 16, ombre douce ; en-tête puce stat ; zones : titre · méta-rangée · gain. États : *actif* · *validé* (liseré vert + ✓) · *reporté* (liseré orange). |
| **Carte-info / bloc** | Fond `#FFFFFF` ou bloc `#1B2A4A` (texte blanc) ; titre H3 + contenu. |
| **Carte-quête** | Compacte ; titre · objectif chiffré · jauge · prime XP. |
| **Tuile-raccourci** | Carrée, icône outline + label court. |
| **Vignette-badge** | Carrée ; médaillon ; liseré de rareté ; états débloqué / verrouillé / secret. |
| **Carte-certificat** | Cadre premium bordure dorée, fond papier ; daté/nominatif. |

### 8.3 Jauges & barres
| Composant | Spéc |
|---|---|
| **Barre d'XP / progression** | Hauteur 18, radius plein ; rempli `#F5A623`, vide `#8A93A2` 15 % ; label palier (gauche) + ratio (droite). |
| **Jauge de validation (succès)** | Identique mais rempli `#27AE82` (ce qui est acquis / validé). |
| **Jauge fine (année / hebdo)** | Hauteur 6, orange sur fond gris clair. |
| **Jauge difficulté ●/10** | 10 puces : pleines `#1B2A4A` (ou couleur de la stat), vides `#8A93A2`. |
| **Barre de stat (radar détail)** | Horizontale, couleur de l'axe, valeur 0-100 + tendance ↑. |
| **Radar octogonal** | 8 axes ; zone remplie `#1B2A4A` à 20 % d'opacité + contour orange ; valeurs en bout d'axe ; mode comparaison (pointillés gris). |

### 8.4 Puce de stat (composant signature)
> Étiquette compacte d'une statistique. Réutilisée partout (carte-défi, méta-rangée, radar, gains).

```
┌──────────────┐        Format : [ icône ] NOM   (+pts)
│ ⚑  COURAGE   │        Icône outline · couleur d'axe
└──────────────┘        MAJUSCULES Montserrat Bold 11 + tracking
```

| Stat | Icône | Couleur d'axe |
|---|:---:|---|
| Discipline | ⚙ | Bleu nuit `#1B2A4A` |
| Courage | ⚑ | Orange `#F5A623` |
| Vitalité | ❤ | Vert `#27AE82` |
| Charisme | ✦ | Orange clair `#F7B955` |
| Mental | ◇ | Bleu acier `#2E5EAA` |
| Savoir | ✎ | Indigo `#3D4C8A` |
| Création | ✺ | Magenta doux `#B5548A` |
| Prospérité | ◈ | Or sobre `#C79A3A` |

### 8.5 Puce de rareté (badges)
🟢 Commun · 🔵 Rare · 🟣 Épique · 🟠 Légendaire — liseré + point de couleur, lisible sans lire le texte.

### 8.6 Header & Tab bar
- **Header :** hauteur 56 ; titre Montserrat Bold à gauche ; pastilles série/niveau à droite (sur l'Accueil).
- **Tab bar :** fixe en bas, 5 onglets (Accueil · Progression · Stats · Trophées · Récompenses) ; actif = pictogramme `#F5A623`.

### 8.7 États transverses (à prévoir sur chaque écran)
| État | Traitement |
|---|---|
| **Vide / premier lancement** | Illustration sommet + 1 phrase + CTA « Relever mon 1er défi ». |
| **Chargement** | Squelettes (skeleton) gris clair animés, jamais d'écran blanc. |
| **Validé (jour fait)** | Liseré vert, ✓, message « Reviens demain ». |
| **Erreur / hors-ligne** | Bandeau discret « Hors-ligne — ta progression est sauvegardée », réessai auto. |
| **Désactivé** | Gris `#8A93A2` 40 %, non tappable. |

---

## 9. Animations clés

> Sobres, courtes, **toujours liées à une vraie action**. Jamais d'animation gratuite qui retarde l'utilisateur. Réglage par défaut : ease-out, durées 150–600 ms ; les célébrations sont skippables (tap pour passer).

| Animation | Déclencheur | Description | Durée | Sortie |
|---|---|---|---|---|
| **Validation** | Tap *« Je l'ai fait »* | Check `#27AE82` qui se **trace** ; compteur **+XP** qui s'incrémente de 0 à la valeur ; la barre de niveau avance ; petite vibration (haptique légère). | 1.2 s | Retour Accueil, série +1. |
| **Level-up** | Franchir un niveau (1→50) | Carte centrale « NIVEAU 19 ! », pictogramme ◐→◑, titre du niveau, étincelles ✦, « +1 niveau ». | 1.5 s | Bouton « Continuer ». |
| **Rang-up** | Changer de rang (Éveil→Légende) | **Grande cérémonie plein écran** : nouvel emblème qui se révèle, titre, récompenses listées (cadre, badge, titre). Plus solennel que le level-up. | 2.5 s | Bouton « Voir mon héros ». |
| **Badge débloqué** | Condition d'un badge remplie | Médaillon qui **tombe et rebondit** (spring), ring pulsant, mention **NEW** ; sceau de cire pour un 🟠 Légendaire. | 2.0 s | « Voir mes trophées ». |
| **Série en feu** | Série active / jalon de série | Flamme 🔥 qui **grandit par paliers** (J7 / J30 / J100), particules d'étincelles, couleur ambre → orange → blanc-chaud ; respire en boucle lente. | boucle | Aux jalons, mini-explosion + haptique. |
| **Certificat** | Déblocage d'un certificat | **Sceau de cire estampé** (scale + rotation légère, son mat) puis le certificat se révèle. | 1.5 s | Story-ready, partageable. |
| **Radar qui pousse** | Validation d'un défi | L'axe concerné s'allonge d'un cran + flash de sa couleur ; au chargement de l'écran Stats, la silhouette se déploie depuis le centre. | 0.5 s | — |
| **Remplissage de jauge** | Ouverture d'un écran à jauges | Toutes les jauges (XP, année, hebdo, quêtes) se remplissent depuis 0 / depuis l'état précédent. | 0.3 s | — |

> ⚠️ **Honnêteté radicale aussi dans le motion :** aucune animation ne simule une récompense non méritée, ne crée de fausse rareté, ni ne presse l'utilisateur (pas de compte à rebours anxiogène, pas de « dernière chance » trompeur).

---

## 10. Liste des templates Canva à produire

> Objets précieux et visuels de partage à fabriquer **avant** le build natif (ils deviennent les assets de l'app). Charte stricte : primaire `#1B2A4A`, accent `#F5A623`, succès `#27AE82`, Montserrat + Inter, illustrations propriétaires (sommets, chemins, jalons, sceaux), **zéro photo de stock**. Export 300 DPI (print) / PNG 150 DPI (web/social).

| # | Template | Format (px) | Usage |
|:--:|---|---|---|
| 1 | **Carte de défi (premium)** | 1080 × 1350 (4:5) | Carte d'un défi du jour, partageable en feed/story ; titre, puce stat, difficulté ●/10, +XP, micro-coaching. Sert d'asset in-app et de visuel social. |
| 2 | **Certificat de Transformation** | 2480 × 3508 (A4, 300 DPI) | Diplôme nominatif et daté du **J365** ; bordure dorée, sceau de cire, mention d'année. Imprimable / LinkedIn. |
| 3 | **Certificats jalons (gabarit)** | 2480 × 3508 (A4) | Variantes du certificat pour **J30 / J90 / J182 Mi-Parcours** (mêmes specs, libellé/sceau différents). |
| 4 | **Carte « Wrapped » mensuel** | 1080 × 1080 (carré) | Récap du mois : XP, défis, série, stat dominante, delta radar ; iconique, publié le 1er du mois. |
| 5 | **Carte « Wrapped » annuel** | 1080 × 1920 (story, 4-5 slides) | Rétrospective de l'année (J365 / 31 déc) : total XP, rang Légende, delta radar début/fin, plus haut défi, record de série. L'artefact de partage le plus fort. |
| 6 | **Badge social partageable** | 1080 × 1080 (carré) | Un badge débloqué + sa **rareté** + **taux de possession** + date ; fond `#1B2A4A`. Trophée de statut. |
| 7 | **Couverture (Cap365)** | 1080 × 1080 + 2480 × 3508 (A4) | Couverture de marque pour le PDF/produit et les profils : logo, baseline, slogan, illustration sommet, fond primaire. |
| 8 | **Story de partage (universelle)** | 1080 × 1920 (story) | Gabarit de story multi-usage : **level-up**, **rang-up**, **défi-BOSS réussi**, **série record** ; zone titre + chiffre de statut + radar/visuel + @handle en pied. |
| 9 | **Sceau de stat (médaillon)** | 1080 × 1080 (carré, fond transparent dispo) | Les 8 sceaux de cire (un par statistique, badge des 100 pts) + variantes mensuelles ; asset de l'écran Récompenses. |
| 10 | **Emblème / médaillon de rang** | 1080 × 1080 (carré, transparent) | Les 10 emblèmes de rang (Étincelle → Astre) pour level-up/rang-up et le profil. |
| 11 | **Carte de l'Année (fresque)** | 2480 × 2480 (carré HD) | Fresque récapitulative qui matérialise les 365 défis ; débloquée à J365, zoomable et partageable. |
| 12 | **Carrousel bilan mensuel** | 1080 × 1080 (3-4 slides) | Bilan narratif et détaillé du mois (chiffres + style de mois), entre les grands pics annuels ; honnêteté radicale (un mois raté n'est pas caché). |

### Garde-fous templates (à respecter sur chaque visuel)
- ✅ **Aucune promesse interdite** : ni richesse, ni bonheur permanent, ni vie parfaite. On affiche **l'effort et la régularité** uniquement.
- ✅ **Intimité** : l'intitulé d'un défi partagé est la **formulation générique du catalogue** ; aucune note personnelle n'est exposée automatiquement.
- ✅ **Pas de comparaison toxique** : un visuel de partage ne classe jamais deux personnes l'une contre l'autre.
- ✅ **Nommage des exports :** `cap365_[type]_[contexte]_[version].png` — ex. `cap365_certificat_j365_v1.png`, `cap365_wrapped_annuel_v1.png`, `cap365_badge_phenix_v1.png`.

---

## 11. Checklist de cohérence (avant build / export)

- [ ] **7 écrans** présents : Accueil · Défi du jour · Progression · Stats (radar 8 axes) · Badges (24 / 4 raretés) · Calendrier 365 · Récompenses.
- [ ] Économie V2 respectée : **difficulté 1-10**, **XP = diff × 10**, points de stat (+1/+2/+3), **50 niveaux / 10 rangs** (Éveil → Légende).
- [ ] **8 statistiques** exactes (⚙⚑❤✦◇✎✺◈) avec leurs couleurs d'axe ; radar comme signature.
- [ ] Séries : streak + journée de grâce + **Filet de Reprise** (badge 🔥 Phénix) ; jalons **J7/J30/J90/J182/J365**.
- [ ] Charte : primaire `#1B2A4A`, accent `#F5A623` (**action uniquement**), succès `#27AE82`, neutre `#8A93A2`, fond `#F7F9FC` ; Montserrat + Inter ; icônes outline arrondi ; coins arrondis + ombres douces ; **dark mode** prévu.
- [ ] **Kit de composants** réutilisable (boutons, cartes, jauges, puce de stat, états) défini avec ses états.
- [ ] **Animations clés** liées à une action réelle, courtes, skippables, sans dark pattern.
- [ ] **12 templates Canva** spécifiés (formats px + usage), garde-fous appliqués.
- [ ] **Aucune promesse interdite** nulle part ; honnêteté radicale tenue jusque dans le motion et les partages.
- [ ] Mobile-first : tout lisible et tappable au pouce ; corps ≥ 16 pt.

---

> 📎 **Rappel charte :** marque mère **Cairn**, produit **Cap365 — 365 Défis de Vie**, slogan **« Un défi par jour. Une version de toi par an. »** Primaire `#1B2A4A`, accent orange `#F5A623`, succès vert `#27AE82`. 8 stats en radar, 50 niveaux / 10 rangs Éveil → Légende, 24 badges (4 raretés), jalons J7/J30/J90/J182/J365. Ton direct, chaleureux, responsabilisant : on promet du travail et de la fierté, **jamais de la magie**.

*Document de production — Cap365 · Écrans mobile & templates. Cohérent avec `04-systeme-gamification.md`, `05-design-systeme.md`, `experience/01-notion-build-kit.md` et l'économie V2.*
