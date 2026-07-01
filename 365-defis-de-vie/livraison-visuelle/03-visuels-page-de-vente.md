# Cap365 — Visuels de la page de vente (specs Canva)

> **Rôle du document.** Spécifications production des **10 visuels** de la page de vente Cap365 (marque **Cairn**), à créer dans Canva. Chaque visuel est décrit pour être exécuté sans réinterprétation : format px, texte EXACT à afficher, composition, tailles, éléments, ordre de lecture, couleurs HEX, typographies.
> **Sources verrouillées.** Tokens graphiques → `01-kit-graphique.md` (fait foi). Textes de vente → `02-landing-sales-page.md` et `03-page-produit.md` (à **réutiliser**, jamais réinventer).
> **Persona démo verrouillée (à afficher partout où une capture montre un compte) :** Lucas · Jour **128/365** · Rang **4 — Constant** (`#3B82C4`, emblème Ancre) · Série **47 🔥** · **6 240 XP** · Radar : Discipline 72 · Courage 65 · Vitalité 58 · Charisme 61 · Mental 54 · Savoir 40 · Création 33 · Prospérité 28.
> **Offres :** Le Sentier **19 €** · L'Ascension **39 € ⭐** · Le Sommet **89 €** · Garantie **30 jours**.
> **Slogan :** « Un défi par jour. Une version de toi par an. » · **Signature :** « On ne te porte pas au sommet. On te montre la voie. »
> **Interdits (rappel charte honnêteté radicale).** Aucune promesse de richesse / bonheur permanent / vie parfaite. Témoignages = **exemples fictifs signalés**. Accent orange (`#F5A623`) réservé à l'action.

---

## 0. Conventions communes à tous les visuels

**Rendu.** Export **@2x** minimum (PNG haute qualité, fond non transparent sauf mention). Canva : « Télécharger → PNG → Taille 2× ».

**Palette de référence (extraite du kit — ne pas dévier).**
| Rôle | HEX |
|---|---|
| Primaire — Bleu nuit | `#1B2A4A` |
| Secondaire — Bleu | `#2E5EAA` |
| Accent — Orange (action uniquement) | `#F5A623` → `#FF7A00` (gradient XP) |
| Succès — Vert | `#2EC27E` |
| Alerte douce — Ambre | `#E8A13A` |
| Texte principal | `#222831` |
| Texte secondaire | `#5A6472` |
| Texte tertiaire / non atteint | `#8A93A2` |
| Ligne / bordure | `#E6E9EF` |
| Fond | `#F7F8FA` |
| Surface (cartes) | `#FFFFFF` |

**Gradients (kit §5).** Marque `linear-gradient(135deg,#1B2A4A,#2E5EAA)` · XP/Progression `linear-gradient(90deg,#F5A623,#FF7A00)` · Succès `linear-gradient(90deg,#2EC27E,#22A567)` · Wrapped `linear-gradient(160deg,#1B2A4A,#6D3CE0,#F5A623)` · Rang-up `radial-gradient(circle,#F5A623 0%,#1B2A4A 80%)`.

**Typographies (kit §7).** Titres **Poppins** 600/700 · Corps **Inter** 400/500 · Labels/micro **Inter** 500/600 (MAJUSCULES + `letter-spacing 0.4px` pour les micro-légendes) · Chiffres clés (XP, niveau) **Poppins** 700. Les tailles px ci-dessous sont données **@1x du canevas** (donc doubler à l'export @2x).

**Rayons & ombres (kit §8-9).** Carte rayon **20** · bouton rayon **14** (ou pilule 999) · chip/puce 999. Ombre carte repos `0 4px 16px rgba(27,42,74,0.08)` · bouton accent `0 2px 10px rgba(245,166,35,0.35)` · modale/cérémonie `0 16px 48px rgba(18,25,43,0.30)`.

**Marges.** Marge de sécurité intérieure **48 px** sur tous les bords des canevas 1080. Gouttière entre cartes **12 px**. Grille de base **4 px**.

**Motif de marque.** Cairn (pierres empilées) en filigrane discret (`#FFFFFF` 6-8 % d'opacité sur fond sombre, ou `#1B2A4A` 4 % sur fond clair) dans les en-têtes. Illustrations géométriques semi-plates uniquement — **aucune image de stock générique**.

**Style des mockups téléphone.** Cadre outline 2 px `#1B2A4A`, rayon 40, coins arrondis, encoche neutre. Écran = capture du template Notion / PDF interactif Cap365 aux couleurs du kit. Ombre carte repos sous le téléphone.

---

## VISUEL 1 — Hero principal

**Fichier :** `hero-01-principal.png`
**Format :** **1200 × 1200 px** (hero carré premium, adapté OG + haut de page).
**Section landing :** BLOC 1 — HERO.
**Fond :** gradient Marque `linear-gradient(135deg,#1B2A4A,#2E5EAA)` + filigrane cairn `#FFFFFF` 7 %.

**Texte EXACT à afficher :**
- Sur-titre (kicker) : **CAIRN PRÉSENTE — CAP365**
- Titre (H1) : **Transforme ta vie comme si tu faisais évoluer ton personnage dans un RPG — pendant 365 jours.**
- Sous-titre : **Un défi concret par jour. De l'XP à chaque validation. 8 statistiques qui montent.**
- Bouton (CTA) : **Je commence mon année de niveaux**
- Bandeau pied : **365 défis · 8 stats en radar · 50 niveaux · anti-abandon incarné · à partir de 19 €**
- Signature (bas gauche, discrète) : **On ne te porte pas au sommet. On te montre la voie.**

**Composition (zones) :**
- **Colonne texte** à gauche (~55 % largeur), **mockup téléphone** à droite (~45 %), légèrement incliné (-6°) et débordant vers le bas.
- Zone 1 (haut gauche) : logo Cairn + kicker en pilule fine outline `#F5A623`.
- Zone 2 (centre gauche) : H1 puis sous-titre.
- Zone 3 (bas gauche) : bouton CTA + signature.
- Zone 4 (droite) : téléphone affichant la capture **« défi du jour »** de Lucas.
- Zone 5 (tout en bas, pleine largeur) : bandeau pied sur bandeau `#12192B` 40 %.

**Écran du mockup (capture « défi du jour » — persona Lucas) :**
- En-tête : **Jour 128/365** · pilule série **🔥 47** (`#F5A623` 12 %, texte `#F5A623` 700).
- Carte de défi (surface `#FFFFFF`, liseré gauche 4 px couleur de la stat) : titre du défi, **Difficulté 6/10**, **+60 XP**, bouton **Valider** (gradient XP).
- Barre XP : **6 240 XP** · liseré Rang 4 — Constant (`#3B82C4`, Ancre).

**Tailles :**
- Kicker : Inter 600 **13 px** MAJ, `letter-spacing 0.4px`, `#F5A623`.
- H1 : Poppins 700 **44 px**, interligne 1,1, `#FFFFFF` ; mots « **RPG** » et « **365 jours** » en `#F5A623`.
- Sous-titre : Inter 500 **20 px**, `#E6E9EF`, interligne 1,4.
- Bouton : hauteur **56 px**, Poppins 700 **18 px** `#FFFFFF`, gradient XP, rayon 14, ombre bouton accent.
- Bandeau pied : Inter 500 **13 px** `#8A93A2`, séparateurs « · ».
- Signature : Inter 600 **13 px** `#8A93A2`.

**Ordre de lecture :** 1 kicker → 2 H1 → 3 sous-titre → 4 mockup (preuve visuelle) → 5 CTA → 6 bandeau pied.

**Couleurs :** fond gradient Marque · H1 `#FFFFFF`/accents `#F5A623` · CTA gradient XP · série & barre XP `#F5A623` · liseré rang `#3B82C4`.
**Typographies :** Poppins 700 (H1, chiffres), Inter 500/600 (sous-titre, labels).

---

## VISUEL 2 — Présentation du défi du jour (la carte, zoom)

**Fichier :** `section-02-defi-du-jour.png`
**Format :** **1080 × 1080 px.**
**Section landing :** BLOC 4 — COMMENT ÇA MARCHE (étape 1) / BLOC 6 — feature « 365 défis ».
**Fond :** `#F7F8FA`.

**Texte EXACT à afficher :**
- Titre : **Chaque matin, ton défi t'attend.**
- Sous-titre : **Concret, cadré, faisable aujourd'hui. Difficulté notée sur 10, qui monte doucement au fil de l'année.**
- Formule (chip) : **XP = difficulté × 10**
- Légendes d'ancrage (3 puces autour de la carte) : **Difficulté /10** · **XP gagnés** · **La stat touchée**
- Micro-note : **Tu poses ta pierre. C'est fait. C'est réel.**

**Composition (zones) :**
- Titre + sous-titre en haut (bloc texte centré, ~30 % haut).
- Au centre : **carte de défi zoomée** (Lucas, jour 128), inclinée -3°, ombre carte survol `0 8px 24px rgba(27,42,74,0.12)`.
- 3 **lignes d'annotation** (traits fins `#8A93A2` 1 px + puce) pointant vers : la note /10, le bloc +XP, le liseré de stat.
- Chip formule **XP = difficulté × 10** ancrée sous la carte.

**Contenu de la carte (surface `#FFFFFF`, rayon 20, padding 20) :**
- Liseré gauche 4 px = couleur de la stat travaillée (ex. Discipline `#3B82C4`).
- Ligne 1 : chip stat (pastille `#3B82C4` + label **DISCIPLINE**) · à droite **Jour 128**.
- Titre du défi (Poppins 600 20 px `#222831`).
- Ligne meta : **Difficulté 6/10** · **+60 XP** (Poppins 700 `#F5A623`).
- Bouton **Valider** pleine largeur (gradient XP).
- Variante « validée » possible en vignette secondaire : fond `#2EC27E` 8 % + coche `#2EC27E` + liseré `#2EC27E`.

**Tailles :** Titre Poppins 700 **34 px** `#1B2A4A` · Sous-titre Inter 500 **18 px** `#5A6472` · Chip formule Inter 600 **13 px** MAJ, fond `#F5A623` 12 %, texte `#F5A623` · Annotations Inter 600 **12 px** `#5A6472` · Micro-note Inter 500 **14 px** `#8A93A2` italique.

**Ordre de lecture :** 1 titre → 2 carte (le produit) → 3 annotations /10 → +XP → stat → 4 formule → 5 micro-note.

**Couleurs :** fond `#F7F8FA` · carte `#FFFFFF` · liseré/stat `#3B82C4` · XP & formule `#F5A623` · coche variante `#2EC27E`.
**Typographies :** Poppins 700/600 (titres, chiffres), Inter 500/600 (corps, labels).

---

## VISUEL 3 — Présentation du radar (8 stats · progrès visible)

**Fichier :** `section-03-radar-8-stats.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 6 — « 8 statistiques de personnage, en radar » / BLOC 5 mécanisme 3 « Système de Preuves ».
**Fond :** `#FFFFFF` avec en-tête gradient Marque sur ~22 % haut.

**Texte EXACT à afficher :**
- Kicker : **LE SYSTÈME DE PREUVES**
- Titre : **Tu ne crois plus que tu avances. Tu le vois.**
- Sous-titre : **Ton radar à 8 branches se remplit selon ce que tu travailles. Tu vois enfin la forme de la personne que tu deviens.**
- Comparatif (2 labels) : **JOUR 1** (à plat) → **JOUR 128** (rempli)
- Liste des 8 stats (légende) : **Discipline · Courage · Vitalité · Charisme · Mental · Savoir · Création · Prospérité**
- Note bas : **Le miroir le plus honnête que tu aies jamais eu sur toi-même — sans jugement, juste des faits.**

**Composition (zones) :**
- En-tête sombre : kicker + titre.
- Bloc central : **deux radars superposés** — silhouette pâle « Jour 1 » (contour `#8A93A2`, quasi centrée) + polygone rempli « Jour 128 » (zone `#2E5EAA` 25 %, contour `#1B2A4A` 2 px, sommets colorés par stat, rayon 4). Valeurs de Lucas aux 8 sommets : Discipline 72, Courage 65, Vitalité 58, Charisme 61, Mental 54, Savoir 40, Création 33, Prospérité 28.
- Sous le radar : **légende 8 stats** en 2 colonnes de chips (pastille couleur stat + label MAJ + icône outline).
- Pied : note honnêteté.

**Radar (kit §9 « Jauges »).** Octogone 8 axes, graduation 0→100, grille trait `#8A93A2` 1 px. Icônes par stat : Discipline ⚙ `#3B82C4` · Courage ⚑ `#F5A623` · Vitalité ❤ `#2EC27E` · Charisme 💬 `#E86A5C` · Mental 🧠 `#8B5CF6` · Savoir 📖 `#4FB0C9` · Création 🖌 `#EC4899` · Prospérité ◈ `#B08D57`.

**Tailles :** Kicker Inter 600 **13 px** MAJ `#F5A623` · Titre Poppins 700 **32 px** `#FFFFFF` (accents « Tu le vois » `#F5A623`) · Sous-titre Inter 500 **18 px** `#E6E9EF` · Labels comparatif Inter 600 **12 px** MAJ · Chips stat Inter 600 **11 px** MAJ · Note Inter 500 **14 px** `#5A6472`.

**Ordre de lecture :** 1 kicker → 2 titre → 3 radar Jour 1 (pâle) → 4 radar Jour 128 (plein, le « avant/après ») → 5 légende 8 stats → 6 note.

**Couleurs :** en-tête gradient Marque · radar plein zone `#2E5EAA` 25 % / contour `#1B2A4A` · radar J1 `#8A93A2` · sommets = 8 couleurs stats · accents titre `#F5A623`.
**Typographies :** Poppins 700 (titre), Inter 500/600 (corps, labels, chips).

---

## VISUEL 4 — Présentation des badges (grille + raretés)

**Fichier :** `section-04-badges-raretes.png`
**Format :** **1080 × 1080 px.**
**Section landing :** BLOC 6 — « 24 badges, 4 raretés » / `03-page-produit` §2 « 24 badges ».
**Fond :** `#F7F8FA`.

**Texte EXACT à afficher :**
- Titre : **24 badges. 4 raretés. Ton année en trophées.**
- Sous-titre : **Des trophées à débloquer pour les jalons, les exploits et la constance. Les rares se méritent.**
- Labels de rareté (légende) : **COMMUN · RARE · ÉPIQUE · LÉGENDAIRE**
- Encart Phénix : **Badge Phénix — pour ceux qui sont tombés et repartis.**

**Composition (zones) :**
- Titre + sous-titre en haut.
- **Grille de badges** au centre : 4 lignes × 6 = **24 emplacements** (gouttière 12 px). Chaque ligne illustre une rareté croissante (haut = commun, bas = légendaire). Quelques badges **déverrouillés** (couleur pleine), plusieurs **verrouillés** (silhouette `#8A93A2` 40 % sur surface).
- **Légende raretés** en 4 chips sous la grille (fond couleur rareté 15 %, texte couleur rareté 700).
- **Encart Phénix** en bas : badge légendaire mis en avant (gradient `#F5A623→#FF7A00`) + libellé.

**Badges (kit §2, gradients par rareté) :** 🟢 Commun `#6BBF8A→#4FA372` · 🔵 Rare `#3B82C4→#2E5EAA` · 🟣 Épique `#8B5CF6→#6D3CE0` · 🟠 Légendaire `#F5A623→#FF7A00`. Verrouillé : silhouette `#8A93A2` 40 %.

**Tailles :** Titre Poppins 700 **32 px** `#1B2A4A` · Sous-titre Inter 500 **18 px** `#5A6472` · Badge Ø **120 px** (cercle) · Chips rareté Inter 700 **11 px** MAJ · Libellé Phénix Inter 600 **15 px** `#1B2A4A`.

**Ordre de lecture :** 1 titre → 2 grille (commun → légendaire, du haut vers le bas) → 3 légende raretés → 4 encart Phénix.

**Couleurs :** fond `#F7F8FA` · badges = gradients raretés · verrouillés `#8A93A2` 40 % · chips = couleurs raretés · Phénix `#F5A623→#FF7A00`.
**Typographies :** Poppins 700 (titre), Inter 600/700 (chips, libellés).

---

## VISUEL 5 — Présentation du calendrier (365 cases · série · jalons)

**Fichier :** `section-05-calendrier-365.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 6 — feature « quêtes / calendrier » / `03-page-produit` « calendrier de validation ».
**Fond :** `#FFFFFF`.

**Texte EXACT à afficher :**
- Titre : **365 cases. Une pierre par jour.**
- Sous-titre : **Ta régularité devient visible et gratifiante. Un jour raté ne casse pas tout.**
- Pilule série (persona) : **🔥 Série 47**
- Chip position : **Jour 128 / 365**
- Légende (3 états) : **Validé · Jour manqué · À venir**
- Note jalons : **Chaque jalon franchi est une preuve tangible du chemin parcouru.**

**Composition (zones) :**
- Titre + sous-titre en haut.
- **Grille calendrier** : ~365 cases (grille dense, ex. 20 colonnes × ~19 lignes), rayon 4 par case. États :
  - **Validé** = `#2EC27E` (ou `#2EC27E` 20 % + coche), **jour manqué** = `#8A93A2` (jamais rouge), **à venir** = `#E6E9EF`.
  - Les 128 premières cases remplies (majoritairement validées), un ou deux « jours manqués » gris pour l'honnêteté.
  - **Jalons** (ex. jour 30 / 100 / 128 / 365) marqués d'un contour `#F5A623` + petite icône cairn 🏔️.
- Bandeau série sous la grille : pilule **🔥 Série 47** + chip **Jour 128 / 365** + mini progress bar année (piste `#E6E9EF`, remplissage `#2E5EAA`, ~35 %).
- Légende 3 états + note jalons en pied.

**Tailles :** Titre Poppins 700 **32 px** `#1B2A4A` · Sous-titre Inter 500 **18 px** `#5A6472` · Case ~ **36 × 36 px** · Pilule série Inter 700 **13 px** `#F5A623` sur pilule `#F5A623` 12 % · Chip jour Inter 600 **12 px** · Légende Inter 500 **12 px** · Note Inter 500 **14 px** `#5A6472`.

**Ordre de lecture :** 1 titre → 2 grille 365 (le chemin) → 3 jalons dorés → 4 série + progression année → 5 légende états → 6 note.

**Couleurs :** validé `#2EC27E` · manqué `#8A93A2` · à venir `#E6E9EF` · jalons `#F5A623` · barre année `#2E5EAA` · série `#F5A623`.
**Typographies :** Poppins 700 (titre), Inter 500/600/700 (série, chips, légende).

---

## VISUEL 6 — Présentation des statistiques (détail par stat)

**Fichier :** `section-06-stats-detail.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 6 — « 8 statistiques » (vue détail) / `03-page-produit` §4 « Le radar qui te dit la vérité ».
**Fond :** `#F7F8FA`.

**Texte EXACT à afficher :**
- Titre : **Chaque stat raconte où tu es solide — et où tu t'es reposé.**
- Sous-titre : **Une semaine où tu as beaucoup lu mais peu bougé ? Le radar te le montre, sans détour.**
- 8 lignes de stats (label + valeur Lucas) :
  - **Discipline — 72**
  - **Courage — 65**
  - **Charisme — 61**
  - **Vitalité — 58**
  - **Mental — 54**
  - **Savoir — 40**
  - **Création — 33**
  - **Prospérité — 28**
- Chip mise en avant : **2 stats en avance · 1 clairement en retard**

**Composition (zones) :**
- Titre + sous-titre en haut.
- **8 lignes de stat empilées** (surface `#FFFFFF`, rayon 20, padding 16, gouttière 12), triées par valeur décroissante. Chaque ligne :
  - À gauche : pastille + **icône outline** de la stat + label (Inter 600 MAJ).
  - Au centre : **progress bar** (piste `#E6E9EF` h.10, remplissage = **couleur de la stat**, rayon 999), remplie au % de la valeur.
  - À droite : valeur chiffrée (Poppins 700 `#222831`).
- Les 2 plus hautes (Discipline, Courage) reçoivent un liseré discret « en avance » ; Prospérité (28) tag « en retard » `#E8A13A` (ambre, jamais rouge).

**Couleurs par stat (kit §4) :** Discipline `#3B82C4` · Courage `#F5A623` · Vitalité `#2EC27E` · Charisme `#E86A5C` · Mental `#8B5CF6` · Savoir `#4FB0C9` · Création `#EC4899` · Prospérité `#B08D57`.

**Tailles :** Titre Poppins 700 **30 px** `#1B2A4A` · Sous-titre Inter 500 **17 px** `#5A6472` · Label stat Inter 600 **13 px** MAJ · Valeur Poppins 700 **22 px** · Progress bar hauteur **10 px** · Chip Inter 600 **12 px**.

**Ordre de lecture :** 1 titre → 2 sous-titre → 3 stats de la plus haute (Discipline 72) à la plus basse (Prospérité 28) → 4 chip avance/retard.

**Couleurs :** fond `#F7F8FA` · cartes `#FFFFFF` · barres = 8 couleurs stats · tag retard `#E8A13A`.
**Typographies :** Poppins 700 (titre, valeurs), Inter 500/600 (corps, labels).

---

## VISUEL 7 — Présentation des récompenses (certificat · sceaux · carte de l'année)

**Fichier :** `section-07-recompenses-certificat.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 8 — Le Sommet (certificats de rang) / `03-page-produit` « certificats personnalisables ».
**Fond :** gradient Marque `linear-gradient(135deg,#1B2A4A,#2E5EAA)` + filigrane cairn.

**Texte EXACT à afficher :**
- Kicker : **RÉCOMPENSES**
- Titre : **La preuve, chiffrée, que tu ne fais pas du surplace.**
- Sur le certificat : **CERTIFICAT DE RANG** · **Rang 4 — Constant** · **Lucas** · **6 240 XP · Jour 128 / 365** · **Cairn — Cap365**
- Légendes des 3 objets : **Certificat de rang** · **Sceaux de rang** · **Carte de l'année**
- Note : **Chaque rang franchi est une preuve tangible du chemin parcouru.**

**Composition (zones) :**
- En-tête : kicker + titre (texte clair sur fond sombre).
- Centre : **certificat premium** (surface `#FFFFFF`, rayon 20, liseré doré `#F5A623`, ombre modale/cérémonie `0 16px 48px rgba(18,25,43,0.30)`) au premier plan. En-tête du certificat orné du motif cairn ; **emblème Ancre** du rang Constant (`#3B82C4`).
- Autour, en léger retrait : **3 sceaux de rang** (médaillons ronds, gradients de rang, ex. bronze `#B08D57`, argent `#9AA7B4`, or `#F5A623`) + une **carte de l'année** miniature (format carte, radar rempli + total XP).
- 3 légendes sous chaque objet.
- Pied : note.

**Tailles :** Kicker Inter 600 **13 px** MAJ `#F5A623` · Titre Poppins 700 **30 px** `#FFFFFF` · « CERTIFICAT DE RANG » Poppins 700 **20 px** `#1B2A4A` · « Rang 4 — Constant » Poppins 700 **24 px** `#3B82C4` · Nom / XP Inter 600 **15 px** `#5A6472` · Légendes Inter 600 **12 px** MAJ `#E6E9EF` · Note Inter 500 **14 px** `#8A93A2`.

**Ordre de lecture :** 1 kicker → 2 titre → 3 certificat (rang + XP) → 4 sceaux → 5 carte de l'année → 6 note.

**Couleurs :** en-tête gradient Marque · certificat `#FFFFFF` liseré `#F5A623` · rang Constant `#3B82C4` · sceaux bronze/argent/or `#B08D57`/`#9AA7B4`/`#F5A623`.
**Typographies :** Poppins 700 (titres, rang), Inter 500/600 (corps, légendes).

---

## VISUEL 8 — Présentation du Wrapped (récap annuel partageable)

**Fichier :** `section-08-wrapped-annuel.png`
**Format :** **1080 × 1350 px** (format « story » partageable).
**Section landing :** BLOC 6 / BLOC 7 (« ton Wrapped annuel ») / Le Sommet « kit Wrapped & partage ».
**Fond :** gradient Wrapped `linear-gradient(160deg,#1B2A4A,#6D3CE0,#F5A623)` + filigrane cairn.

**Texte EXACT à afficher :**
- Kicker : **CAP365 — WRAPPED**
- Titre : **Ton année, en une image.**
- Chiffres clés (persona Lucas) : **128 jours** · **6 240 XP** · **Série record 47 🔥** · **Rang 4 — Constant**
- Bloc radar : **Ta forme de fin d'année**
- Signature (bas) : **Un défi par jour. Une version de toi par an.**
- Mention marque : **Cairn — Cap365**

**Composition (zones) :**
- En-tête : kicker (pilule) + titre.
- Bloc **chiffres clés** en 2×2 tuiles (surface translucide `#FFFFFF` 10 %, rayon 20) : jours, XP, série record, rang.
- Bloc central : **radar rempli** (petit format, contour `#F5A623`) + libellé « Ta forme de fin d'année ».
- **Rangée de badges** phares décrochés (3-4 médaillons, dont Phénix si pertinent).
- Signature slogan + mention marque en pied.
- Coin bas droit : petite pastille « partageable » (icône partage outline) pour signifier l'usage social.

**Tailles :** Kicker Inter 600 **13 px** MAJ `#FFFFFF` · Titre Poppins 700 **36 px** `#FFFFFF` · Chiffres clés Poppins 700 **34 px** `#FFFFFF` + label Inter 500 **12 px** MAJ `#E6E9EF` · Libellé radar Inter 600 **14 px** · Signature Poppins 600 **18 px** `#FFFFFF` · Marque Inter 500 **12 px** `#E6E9EF`.

**Ordre de lecture :** 1 kicker → 2 titre → 3 chiffres clés (jours → XP → série → rang) → 4 radar → 5 badges → 6 signature.

**Couleurs :** fond gradient Wrapped · tuiles `#FFFFFF` 10 % · accents & radar `#F5A623` · texte `#FFFFFF`.
**Typographies :** Poppins 700 (titre, chiffres), Poppins 600 (signature), Inter 500/600 (labels).

---

## VISUEL 9 — Présentation des offres (comparatif 3 offres · L'Ascension mise en avant)

**Fichier :** `section-09-offres-comparatif.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 8 — L'OFFRE / GAMME.
**Fond :** `#F7F8FA` avec en-tête gradient Marque sur ~18 % haut.

**Texte EXACT à afficher :**
- Titre : **Choisis ton niveau de départ.**
- Sous-titre : **Un seul achat. Accès à ton année complète. Trois manières d'entrer dans le jeu.**

**Colonne 1 — LE SENTIER :**
- **⛰️ LE SENTIER — 19 €**
- *Pour commencer, tout simplement.*
- **Les 365 défis de vie**
- **Le guide des 7 premiers jours**
- **Le calendrier de progression**
- Bouton : **Je prends Le Sentier**

**Colonne 2 — L'ASCENSION (mise en avant) :**
- Badge : **⭐ BEST-VALUE**
- **🧗 L'ASCENSION — 39 €**
- *Le choix de ceux qui veulent vraiment vivre l'expérience RPG.*
- **Tout Le Sentier, et en plus :**
- **Le template Notion RPG complet**
- **6 bonus**
- Bouton : **Je choisis L'Ascension**
- Note : **Le meilleur rapport valeur / prix.**

**Colonne 3 — LE SOMMET :**
- **🏔️ LE SOMMET — 89 €**
- *Pour aller au bout, avec tout l'arsenal.*
- **Tout L'Ascension, et en plus :**
- **Kit Wrapped & partage**
- **Certificats de rang**
- **Parcours thématiques + communauté**
- **Mises à jour à vie**
- Bouton : **Je vise Le Sommet**

**Rappel garantie (bas, pleine largeur) :** **🔒 Garantie 30 jours · Paiement unique · Accès immédiat**

**Composition (zones) :**
- Titre + sous-titre dans l'en-tête sombre.
- **3 colonnes** (cartes `#FFFFFF`, rayon 20). Colonne du milieu **L'Ascension** : plus haute (+40 px), **bordure dorée 2 px `#F5A623`**, badge « ⭐ BEST-VALUE » en pilule dorée en surplomb, ombre carte survol. Colonnes latérales en retrait visuel léger.
- Chaque colonne : nom + prix (Poppins 700), promesse en italique, liste à puces `✅`/`—`, bouton.
- Boutons : L'Ascension = **gradient XP** (primaire) ; Sentier & Sommet = **secondaire** (`#FFFFFF`, bord 1,5 px `#1B2A4A`, texte `#1B2A4A`).
- Bandeau garantie en pied.

**Tailles :** Titre Poppins 700 **32 px** `#FFFFFF` · Sous-titre Inter 500 **17 px** `#E6E9EF` · Nom offre Poppins 700 **20 px** · Prix Poppins 700 **34 px** (`#F5A623` pour L'Ascension, `#1B2A4A` pour les 2 autres) · Puces Inter 500 **14 px** `#5A6472` · Bouton Poppins 700 **16 px** hauteur 48 px · Badge best-value Inter 700 **12 px** MAJ · Bandeau garantie Inter 500 **13 px** `#5A6472`.

**Ordre de lecture :** 1 titre → 2 **L'Ascension (centre, dorée — regard capté en premier)** → 3 Le Sentier → 4 Le Sommet → 5 garantie.

**Couleurs :** en-tête gradient Marque · cartes `#FFFFFF` · bordure/prix Ascension `#F5A623` · CTA Ascension gradient XP · CTA latéraux secondaires `#1B2A4A` · puces incluses `#2EC27E`.
**Typographies :** Poppins 700 (noms, prix), Inter 500/600/700 (puces, badges, garantie).

---

## VISUEL 10 — Présentation des bonus (6 bonus empilés = valeur)

**Fichier :** `section-10-bonus-empiles.png`
**Format :** **1080 × 1350 px.**
**Section landing :** BLOC 8 — L'Ascension (« 6 bonus ») / empilement de valeur.
**Fond :** `#F7F8FA`.

**Texte EXACT à afficher :**
- Kicker : **INCLUS DANS L'ASCENSION**
- Titre : **6 bonus pour approfondir et tenir dans la durée.**
- Sous-titre : **Pour 20 € de plus que Le Sentier, tu débloques l'expérience complète pour laquelle Cap365 a été conçu.**
- 6 lignes de bonus (libellés — orientés vécu, cohérents avec la landing) :
  - **1 · Template Notion RPG complet** — radar, XP, niveaux, badges, quêtes, anti-abandon.
  - **2 · Guide « 7 premiers jours »** — pour ne pas caler au départ.
  - **3 · Calendrier de validation** — pour ne rien perdre de vue.
  - **4 · Système de quêtes** — jour / semaine / mois + défis-boss.
  - **5 · Anti-abandon incarné** — séries, journée de grâce, Bouclier de série, Filet de Reprise + badge Phénix.
  - **6 · Système de Preuves** — radar, courbe de progression, certificats.
- Bandeau valeur (bas) : **L'expérience complète, pas un simple « extra ».**
- CTA : **Je choisis L'Ascension — 39 €**

**Composition (zones) :**
- Kicker + titre + sous-titre en haut.
- **6 cartes empilées** verticalement (surface `#FFFFFF`, rayon 20, gouttière 12, ombre carte repos), effet « pile de pierres / cairn » : légère mise en escalier ou décalage horizontal de 8-12 px par carte pour évoquer l'amas qui grandit. Chaque carte :
  - À gauche : **numéro** (Poppins 700, pastille `#F5A623` 12 %) + icône outline du bonus (Notion, cairn 🏔️, calendrier, quête 🎯, filet 🛟, radar 📊).
  - Corps : titre du bonus (Poppins 600) + micro-description (Inter 500).
- Bandeau valeur + **CTA gradient XP** en pied.

**Tailles :** Kicker Inter 600 **13 px** MAJ `#F5A623` · Titre Poppins 700 **32 px** `#1B2A4A` · Sous-titre Inter 500 **17 px** `#5A6472` · N° bonus Poppins 700 **22 px** `#F5A623` · Titre bonus Poppins 600 **17 px** `#222831` · Description Inter 500 **13 px** `#5A6472` · Bandeau valeur Inter 600 **15 px** `#1B2A4A` · CTA Poppins 700 **18 px** hauteur 56 px.

**Ordre de lecture :** 1 kicker → 2 titre → 3 bonus 1 → 2 → 3 → 4 → 5 → 6 (haut vers bas) → 4 bandeau valeur → 5 CTA.

**Couleurs :** fond `#F7F8FA` · cartes `#FFFFFF` · numéros & CTA `#F5A623` (gradient XP pour le bouton) · texte `#222831`/`#5A6472`.
**Typographies :** Poppins 700/600 (titres, numéros), Inter 500/600 (descriptions, kicker).

---

## Tableau récapitulatif

| # | Visuel | Fichier | Format px | Section de la landing où il s'insère |
|:--:|---|---|:--:|---|
| 1 | Hero principal | `hero-01-principal.png` | 1200 × 1200 | BLOC 1 — HERO (haut de page + image OG) |
| 2 | Défi du jour (carte, zoom) | `section-02-defi-du-jour.png` | 1080 × 1080 | BLOC 4 — Comment ça marche (étape 1) / BLOC 6 |
| 3 | Radar 8 stats | `section-03-radar-8-stats.png` | 1080 × 1350 | BLOC 6 (radar) / BLOC 5 mécanisme 3 (Preuves) |
| 4 | Badges + raretés | `section-04-badges-raretes.png` | 1080 × 1080 | BLOC 6 — « 24 badges, 4 raretés » |
| 5 | Calendrier 365 | `section-05-calendrier-365.png` | 1080 × 1350 | BLOC 6 — quêtes/calendrier |
| 6 | Statistiques (détail par stat) | `section-06-stats-detail.png` | 1080 × 1350 | BLOC 6 (stats) / §4 « radar qui dit la vérité » |
| 7 | Récompenses (certificat, sceaux, carte) | `section-07-recompenses-certificat.png` | 1080 × 1350 | BLOC 8 — Le Sommet (certificats de rang) |
| 8 | Wrapped annuel | `section-08-wrapped-annuel.png` | 1080 × 1350 | BLOC 6 / BLOC 7 / Le Sommet (Wrapped & partage) |
| 9 | Offres (comparatif 3, Ascension mise en avant) | `section-09-offres-comparatif.png` | 1080 × 1350 | BLOC 8 — L'OFFRE / GAMME |
| 10 | Bonus (6 empilés = valeur) | `section-10-bonus-empiles.png` | 1080 × 1350 | BLOC 8 — L'Ascension (« 6 bonus ») |

---

> **Rappels de conformité (à vérifier avant export).**
> 1. Accent orange `#F5A623` **uniquement** sur les éléments d'action / XP / jalons / série — jamais en décor.
> 2. Aucune promesse interdite (richesse / bonheur permanent / vie parfaite). Le seul « avant/après » montré est **factuel** (radar, XP, série).
> 3. Tout témoignage affiché doit porter la mention **« exemple fictif »** (voir BLOC 7 landing) — non inclus dans ces 10 visuels, à conserver si ajout ultérieur.
> 4. Persona démo strictement respectée (Lucas · J128 · Rang 4 Constant · Série 47 · 6 240 XP · valeurs radar verrouillées).
> 5. Jour manqué = `#8A93A2` (gris), **jamais de rouge**. Série en danger = ambre `#E8A13A`.
> 6. Illustrations géométriques semi-plates + motif cairn ; aucune image de stock générique.
