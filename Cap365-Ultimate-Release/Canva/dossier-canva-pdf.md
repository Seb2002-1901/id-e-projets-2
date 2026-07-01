# Cap365 — DOSSIER CANVA DÉFINITIF DU PDF PREMIUM (produire « sans réfléchir »)

> **Ce que fait ce document.** C'est la **liste de fabrication complète** du PDF premium *Cap365 — 365 Défis de Vie* (marque **Cairn**) dans Canva. On n'invente rien : on ouvre le Kit de marque, on prend les gabarits dans l'ordre, on colle les valeurs verrouillées, on importe le texte depuis le CSV, on exporte en PDF.
> **Marque :** Cairn (maison) · **Produit :** Cap365 · **Baseline :** 365 Défis de Vie · **Slogan :** « Un défi par jour. Une version de toi par an. »
> **Format :** **A4 portrait**. Travailler en **1240 × 1754 px @150 dpi** (léger, rapide) **ou** **2480 × 3508 px @300 dpi** (impression pro). *Toutes les valeurs px de ce dossier sont données en base 150 dpi (1240 large) ; pour le 300 dpi, ×2 partout.*
> **Kit VERROUILLÉ (source : `../Assets/colors.json`) :** Navy `#1B2A4A` · Bleu `#2E5EAA` · **Accent ACTION `#F5A623`** (→ `#FF7A00`) · **Succès `#2EC27E`** · Texte `#222831` · Gris inactif/manqué `#8A93A2` · Bordure `#E6E9EF` · Fond `#F7F8FA` · Surface `#FFFFFF`. Titres **Poppins**, corps **Inter**. Rayons : carte **20**, bouton **14**, pill **999**.
> **Garde-fous sur CHAQUE page :** orange = **action / progression uniquement** (jamais en décor) · jour manqué = gris `#8A93A2` (jamais de rouge) · **aucune promesse interdite** (ni richesse, ni bonheur permanent, ni vie parfaite).

---

## 0. Base de travail : screenshoter le HTML PDF déjà généré

> Le raccourci n°1. Le PDF complet est déjà fourni : `../PDF/Cap365-365-Defis-de-Vie.pdf`. La mise en page y est déjà faite : **ouvrir → cadrer chaque page → capturer (pleine résolution) → importer la capture dans le cadre A4 Canva → recadrer proprement**. Canva ne sert alors qu'à la finition + l'export.
>
> **Si le HTML n'est pas encore présent** dans le dépôt : reconstruire chaque page à partir de ce dossier (gabarits ci-dessous). Les deux méthodes donnent le même rendu ; ce dossier est la source de vérité des dimensions, couleurs, textes et assets.
>
> **Aperçus complémentaires à screenshoter comme base directe :** `../PNG/ecrans/` (8 écrans produit) et `../PNG/ecrans/`, plus les rendus PNG déjà prêts dans `../PNG/ecrans/` (ex. `ecran-radar.png`, `ecran-calendrier.png`, `ecran-wrapped.png`).

---

## 1. Mise en place initiale (une seule fois — ~1 h 30)

### 1.1 Créer le document Canva
- **Canva → Créer un design → Taille personnalisée → 1240 × 1754 px** (ou **2480 × 3508 px** pour du 300 dpi). Document **multi-pages**.
- **Fichier → Afficher règles + repères →** marges à **~72 px** (≈ 12 mm) des 4 bords (×2 en 300 dpi).
- **Fond par défaut de toutes les pages : `#F7F8FA`** (jamais de blanc pur en grande surface ; le blanc est réservé aux cartes/surfaces).

### 1.2 Créer le Kit de marque Canva depuis `colors.json` (~20 min)
**Canva Pro → « Kit de marque » → Nouveau kit « Cairn — Cap365 ».** Coller les HEX un par un (source exacte : `../Assets/colors.json`).

| Groupe | Nom dans Canva | HEX |
|---|---|---|
| Marque | Navy (primaire) | `#1B2A4A` |
| Marque | Bleu (secondaire) | `#2E5EAA` |
| Marque | **Accent — ACTION** | `#F5A623` |
| Marque | Accent 2 (fin de gradient XP) | `#FF7A00` |
| Marque | Succès | `#2EC27E` |
| Marque | Ambre (alerte douce) | `#E8A13A` |
| Neutres | Texte principal | `#222831` |
| Neutres | Texte secondaire | `#5A6472` |
| Neutres | Texte tertiaire / inactif / **manqué** | `#8A93A2` |
| Neutres | Bordure / filet | `#E6E9EF` |
| Neutres | Fond | `#F7F8FA` |
| Neutres | Surface (cartes) | `#FFFFFF` |
| Dark | Fond dark | `#12192B` |
| Dark | Surface dark | `#1B2A4A` |
| Stats | Discipline | `#3B82C4` |
| Stats | Courage | `#F5A623` |
| Stats | Vitalité | `#2EC27E` |
| Stats | Charisme | `#E86A5C` |
| Stats | Mental | `#8B5CF6` |
| Stats | Savoir | `#4FB0C9` |
| Stats | Création | `#EC4899` |
| Stats | Prospérité | `#B08D57` |
| Raretés | Commun | `#6BBF8A` |
| Raretés | Rare | `#3B82C4` |
| Raretés | Épique | `#8B5CF6` |
| Raretés | Légendaire | `#F5A623` |

**Gradients à mémoriser** (Canva : Rectangle → Remplissage → Dégradé) — source `colors.json > gradients` :
- **Marque** `135°, #1B2A4A → #2E5EAA` — couvertures, intercalaires, en-têtes.
- **XP / Progression** `90°, #F5A623 → #FF7A00` — barres d'XP, boutons, jauges.
- **Succès** `90°, #2EC27E → #22A567` — validation.
- **Wrapped (fête)** `160°, #1B2A4A → #6D3CE0 → #F5A623` — pages bilan/célébration.
- **Rang-up** `radial, #F5A623 → #1B2A4A` — montée de rang.

### 1.3 Importer les polices (~5 min)
- **Poppins** (600 SemiBold, 700 Bold) → titres, chiffres héros, boutons.
- **Inter** (400 Regular, 500 Medium, 600 SemiBold) → corps, labels, micro-légendes.
- *(Les deux sont natives dans Canva. Échelle : H1 30 / H2 24 / H3 20 / corps 16 / label 13 / micro 11 — source `colors.json > typographie`.)*

### 1.4 Uploader tous les assets du pack (~15 min)
**Canva → Uploads → Importer.** Glisser tout le contenu (les PNG sont directement posables ; les SVG s'importent aussi et restent nets) :
- Logos : `../SVG/logo/` + rendus `../PNG/composants-rasterises/logo/`
- Icônes (8 stats + actions) : `../SVG/icones/` + `../PNG/composants-rasterises/icones/`
- Badges : `../SVG/badges/` + `../PNG/composants-rasterises/badges/`
- Composants : `../SVG/composants/` + `../PNG/composants-rasterises/composants/`
- Fonds dégradés (raster prêts) : `../PNG/fonds/` (`fond-marque-1920x1080.png`, `fond-wrapped-1080x1920.png`, `fond-xp-1080x400.png`)

### 1.5 Créer les composants réutilisables une fois (~30 min)
Sur une page « Composants » à part, construire ces briques puis **copier-coller** (Cmd/Ctrl+C → V) partout. Valeurs px en base 150 dpi.

| Composant | Recette Canva |
|---|---|
| **Carte** | Rectangle blanc `#FFFFFF`, rayon **20**, ombre `0 4px 16px rgba(27,42,74,.08)`, padding intérieur 24. Liseré gauche 5 px = couleur de contexte (stat/rareté). |
| **Carte sombre** | Idem, fond `#1B2A4A`, texte `#F7F8FA`, chiffres `#F5A623`. |
| **Bouton primaire** | Rectangle rayon **14**, remplissage **dégradé XP** `#F5A623→#FF7A00`, ombre `0 2px 10px rgba(245,166,35,.35)`, texte Poppins Bold blanc centré. Base SVG : `../SVG/composants/bouton-primaire.svg`. |
| **Barre de progression** | Piste : rectangle h.10, rayon 999, `#E6E9EF`. Remplissage : rectangle superposé largeur = %, **dégradé XP** (année/XP) ou couleur de stat. Base SVG : `.../composants/progress-xp.svg`. |
| **Jauge de stat** | Piste `#E6E9EF` + remplissage à la couleur de la stat + label. Base SVG : `.../composants/jauge-stat.svg`. |
| **Chip de stat/catégorie** | Pilule rayon 999, fond pâle contextuel, texte Poppins/Inter 600 couleur de contexte. |
| **Tuile de badge** | Carré, rayon 20, liseré 5 px = couleur de rareté, médaillon centré (SVG badge), nom sous le médaillon. Base : `.../svg/badges/`. |
| **Radar 8 axes** | Gabarit octogone. Base SVG : `.../composants/radar-8-stats.svg`. Le faire une fois, dupliquer. |
| **Case à cocher** | Carré rayon 6, contour `#8A93A2` (vide) → coche verte `#2EC27E` (validé). Base : `.../icones/valider-check.svg`. |
| **Pied de page** | Filet 1 px `#E6E9EF` + « Cap365 · 365 Défis de Vie » (gauche, Inter 11 `#8A93A2`) + « Jour XXX / 365 · p. XX » (droite). Sur toutes les pages de contenu. |

---

## 2. Ordre global de production

1. **Couverture** (page 1) + 4e de couverture.
2. **Front matter** : page de garde/mentions → mot d'accueil → manifeste → promesse/ce que ce n'est pas → mode d'emploi → les catégories → page système RPG → courbe d'inconfort → filet de reprise → sommaire de l'année → dashboard de départ → jauge de rangs → mur des badges.
3. **Gabarit de carte de défi** (le construire parfaitement UNE fois).
4. **Duplication mois par mois** : intercalaire du mois → pages de cartes (2 cartes/page) → bilan du mois. Répéter ×12 avec import CSV.
5. **Bonus** : journal annuel → tracker d'habitudes → calendrier de validation 365 → mini-défis / défis extrêmes (aiguillage).
6. **Back matter** : conclusion → certificat → rang d'honneur → et après → 4e de couverture.
7. **Export PDF** (voir §7).

---

## 3. FRONT MATTER (pages 1 → 18)

### 3.1 — Couverture
- **Nom :** `page-01-couverture`
- **Dimensions px :** 1240 × 1754 (2480 × 3508 @300)
- **Fond :** dégradé **Marque** `135°, #1B2A4A → #2E5EAA` (ou poser `Exports/fonds/fond-marque-1920x1080.png` recadré plein cadre).
- **Composants :** logo centré haut ; cairn/sommet en illustration centrale ; bloc titre ; filet fin doré `#F5A623` sous la baseline.
- **Textes :** « **Cap365** » (Poppins Bold ~72) · baseline « **365 Défis de Vie** » (Poppins 600 ~28, `#F5A623`) · slogan « *Un défi par jour. Une version de toi par an.* » (Inter 500, blanc 80 %) · pied discret « une expérience **Cairn** ».
- **SVG :** `../SVG/logo/cap365-logo-horizontal.svg` · illustration `../SVG/icones/cairn.svg`
- **PNG :** `../PNG/composants-rasterises/logo/cap365-logo-horizontal.png` · fond `../PNG/fonds/fond-marque-1920x1080.png`
- **Ordre exact de création :** 1) Fond dégradé marque. 2) Logo horizontal centré haut. 3) Illustration cairn au centre. 4) Titre « Cap365 ». 5) Baseline orange. 6) Slogan. 7) Filet doré + mention Cairn. 8) Contrôle marges.

### 3.2 — Page de garde / mentions
- **Nom :** `page-02-garde-mentions` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA` + bandeau haut dégradé marque (h. ~160)
- **Composants :** bandeau titre + bloc texte centré.
- **Textes :** « Cap365 — 365 Défis de Vie » · « Édition 2026 · Produit digital premium » · « © Cairn. Usage personnel. Reproduction interdite. »
- **SVG :** `.../logo/favicon.svg` (petit, en filigrane) · **PNG :** `Exports/svg/logo/favicon.png`
- **Ordre :** 1) Fond. 2) Bandeau. 3) Titre. 4) Ligne édition/année. 5) Mentions légères. 6) Favicon filigrane.

### 3.3 — Mot d'accueil / Introduction-manifeste
- **Nom :** `page-03-manifeste` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`, large marge, une carte blanche centrale optionnelle
- **Composants :** titre + 4-5 paragraphes courts + signature.
- **Textes (source `01-marque-identite.md` §valeurs + ton, et intro `../CSV/defis-365-import-notion.csv`):** titre « **Bienvenue. À partir d'aujourd'hui, tu agis.** » puis manifeste en 5 valeurs en action : *action avant théorie · progression réaliste · honnêteté radicale · constance · respect du rythme.* Clore sur « **fais le pas, coche la case, recommence demain.** ». Ton coach, direct.
- **SVG :** `.../icones/cairn.svg` en tête · **PNG :** `Exports/svg/icones/cairn.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Icône cairn. 4) Paragraphes. 5) Phrase-signature en gras orange (action). 6) Pied de page.

### 3.4 — Promesse & ce que ce produit n'est PAS
- **Nom :** `page-04-promesse` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`, deux colonnes/cartes
- **Composants :** 2 cartes côte à côte — carte verte « Ce que tu construis » (`#2EC27E` liseré), carte grise « Ce qu'on ne te promet jamais » (`#8A93A2` liseré).
- **Textes :** Gauche : discipline, confiance, compétences, preuves concrètes. Droite (interdits explicites) : « ni richesse · ni bonheur permanent · ni vie parfaite · que du travail et de la fierté ».
- **SVG :** `.../icones/valider-check.svg` (gauche) · **PNG :** `Exports/svg/icones/valider-check.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Carte verte + puces. 4) Carte grise + puces. 5) Pied.

### 3.5 — Mode d'emploi (comment jouer)
- **Nom :** `page-05-mode-emploi` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** 4 étapes numérotées en cartes + une **carte-défi d'exemple annotée** (les 8 zones repérées par des puces).
- **Textes :** « **Comment ça marche** » — 1) Un défi par jour (5-20 min). 2) Tu le fais, tu coches. 3) Tu gagnes de l'XP + de la stat. 4) Tu enchaînes les séries (🔥) sans casser la chaîne. Bloc « **Comment lire une carte** » avec légende des 8 zones (icône catégorie · catégorie · jour · titre · consigne · difficulté/XP/durée · case · micro-coaching).
- **SVG :** gabarit `../SVG/composants/carte-defi.svg` (posé comme exemple annoté) · icônes `.../icones/xp-etoile.svg`, `.../icones/serie-flamme.svg`, `.../icones/valider-check.svg`
- **PNG :** `Exports/svg/composants/carte-defi.png` · `Exports/svg/icones/xp-etoile.png`, `serie-flamme.png`, `valider-check.png`
- **Ordre :** 1) Fond. 2) Titre. 3) 4 cartes-étapes + icônes. 4) Carte-défi exemple. 5) Annotations des 8 zones. 6) Pied.

### 3.6 — Les catégories (grille)
- **Nom :** `page-06-categories` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** grille de tuiles (une par catégorie principale, icône + nom).
- **Textes :** intitulés des catégories (source colonne « Catégorie » du CSV) : Sortie de zone de confort · Discipline · Relations · Social · Productivité · Confiance en soi · Finances · Apprentissage · Organisation · Gestion des émotions · Santé · Sport · Compétences · Expériences nouvelles · Aventure · Créativité · Résilience.
- **SVG :** icônes de stat associées `.../icones/` (courage, discipline, charisme, savoir, vitalite, mental, creation, prosperite) · **PNG :** `Exports/svg/icones/*.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Grille de tuiles. 4) Icône + label par tuile. 5) Pied.

### 3.7 — Page système RPG (le jeu)
- **Nom :** `page-07-systeme-rpg` · **Dim :** 1240 × 1754 (prévoir **2 pages** si dense) · **Fond :** `#F7F8FA` + blocs navy
- **Composants :** **radar 8 stats** (grand, centre) · barre XP démo · rangée des 8 chips de stat · frise des 10 rangs · aperçu du mur de badges (4 raretés).
- **Textes :** « **Le système de jeu** » — XP, niveaux (50 niveaux en 10 rangs), séries, badges, radar des 8 stats. **Les 8 stats :** Discipline · Courage · Vitalité · Charisme · Mental · Savoir · Création · Prospérité. **Les 10 rangs (source `Notion/notion-rangs.csv`) :** 1 Éveil (0 XP) · 2 Élan (900) · 3 Apprenti (2 200) · 4 Constant (4 000) · 5 Aguerri (6 300) · 6 Affirmé (9 100) · 7 Artisan (12 400) · 8 Maître (16 000) · 9 Mentor (19 800) · 10 Légende (23 000). **24 badges / 4 raretés :** Commun · Rare · Épique · Légendaire.
- **SVG :** `../SVG/composants/radar-8-stats.svg` · `.../composants/progress-xp.svg` · `.../icones/xp-etoile.svg`, `serie-flamme.svg` · 8 icônes de stat `.../icones/` · badges `.../badges/{commun,rare,epique,legendaire}.svg`
- **PNG :** `Exports/svg/composants/radar-8-stats.png`, `progress-xp.png` · `Exports/svg/badges/*.png` · `Exports/svg/icones/*.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Radar central. 4) 8 chips de stat autour. 5) Barre XP démo. 6) Frise des 10 rangs (jalons reliés, rang atteint orange). 7) Rangée des 4 raretés de badge. 8) Pied.

### 3.8 — Courbe d'inconfort + Filet de Reprise + Sommaire de l'année
- **Nom :** `page-08-courbe-filet-sommaire` (peut être scindée en 2-3 pages) · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** courbe ascendante (difficulté 1→10 sur 52 semaines) · carte « **Filet de Reprise** » (journée de grâce, `serie-flamme` + `filet-reprise`) · frise des 12 mois avec jalons J7/J30/J90/J182/J365.
- **Textes :** « La difficulté monte en douceur. » · « Un jour manqué n'efface rien : tu utilises ton **Filet de Reprise** et tu repars. » (jamais culpabilisant, gris jamais rouge) · noms des 12 mois (voir §4).
- **SVG :** `.../icones/filet-reprise.svg`, `serie-flamme.svg`, `calendrier.svg` · **PNG :** `Exports/svg/icones/filet-reprise.png`, `serie-flamme.png`, `calendrier.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Courbe. 4) Carte Filet de Reprise. 5) Frise des 12 mois + jalons. 6) Pied.

---

## 4. GABARIT DE CARTE DE DÉFI + LES 365 DÉFIS (cœur du produit)

### 4.1 — GABARIT « Carte de défi » (à construire une fois, à la perfection)
> Base visuelle exacte : `../SVG/composants/carte-defi.svg` (viewBox 340×250). Le reproduire dans Canva puis le **grouper** et le **dupliquer**.

- **Nom du groupe :** `gabarit-carte-defi`
- **Dimensions carte :** largeur ~1096 px (pleine largeur utile), hauteur ~760 px → **2 cartes par page A4**.
- **Fond carte :** `#FFFFFF`, rayon **20**, ombre `0 4px 16px rgba(27,42,74,.08)`, **liseré gauche 5 px = couleur de la stat du défi**.
- **8 zones (les remplir depuis le CSV) :**
  1. **Sur-titre** « DÉFI DU JOUR · J{Jour} » (Inter 700, `#8A93A2`, letter-spacing 1) — colonne CSV `Jour`.
  2. **Badge XP** « +{XP} XP » haut-droite (Poppins 700, `#F5A623`) — XP selon difficulté.
  3. **Titre** (Poppins 700 ~22, `#222831`) — colonne `Titre`.
  4. **Chips** : catégorie (chip pâle) · stat (chip couleur de stat) · difficulté « {n}/10 » — colonnes `Catégorie`, `Stat`, `Difficulté`.
  5. **Objectif + Instructions** (Inter, `#5A6472`) — colonnes `Objectif`, `Instructions`.
  6. **Variantes** : « Facile » / « Difficile » — colonnes `Variante facile`, `Variante difficile`.
  7. **Récompense psychologique** (Inter italique, `#8A93A2`) — colonne `Récompense`.
  8. **Bouton/Case Valider** : bouton dégradé XP « Valider ✓ » ou case à cocher + ligne « Relevé le ___ · Ressenti ___ ».
- **SVG :** `.../composants/carte-defi.svg` · icône de stat `.../icones/{stat}.svg` · `.../icones/valider-check.svg`
- **PNG :** `Exports/svg/composants/carte-defi.png` · `Exports/svg/icones/valider-check.png`
- **Ordre de création du gabarit :** 1) Rectangle carte + rayon + ombre. 2) Liseré gauche. 3) Sur-titre + badge XP. 4) Titre. 5) Rangée de 3 chips. 6) Bloc objectif/instructions. 7) Bloc 2 variantes. 8) Ligne récompense italique. 9) Bouton/case Valider. 10) Grouper + nommer `gabarit-carte-defi`.

### 4.2 — Intercalaire de mois (×12, à dupliquer)
- **Nom :** `mois-XX-intercalaire` · **Dim :** 1240 × 1754 · **Fond :** dégradé **Marque** plein `135°, #1B2A4A → #2E5EAA`
- **Composants :** grand numéro de mois, nom du mois, thème, cairn/sommet, jalon visé, mini-barre d'année.
- **Textes (source H1 de `../CSV/defis-365-import-notion.csv`) :**
  1. Mois 1 — **Petites victoires** · 2. **Confiance** · 3. **Discipline** · 4. **Relations** · 5. **Santé** · 6. **Productivité** · 7. **Finances** · 8. **Nouvelles expériences** · 9. **Compétences** · 10. **Leadership** · 11. **Résilience** · 12. **Transformation globale**.
  Ajouter la phrase d'intro du mois (1er paragraphe du fichier `../CSV/defis-365-import-notion.csv`) et le jalon (ex. Mois 6 → « Jour 182 · Médaille de Mi-Parcours » ; Mois 12 → « Jour 365 · Cap365 »).
- **SVG :** `.../icones/cairn.svg` (blanc) · logo `.../logo/cap365-app-icon.svg` · **PNG :** `Exports/svg/icones/cairn.png`
- **Ordre :** 1) Fond dégradé marque. 2) « MOIS {n} » (Poppins 700, `#F5A623`). 3) Nom du mois (Poppins 700 blanc, gros). 4) Phrase-thème. 5) Cairn/sommet. 6) Ligne jalon. 7) Mini-barre d'année. 8) Grouper → dupliquer ×12 et changer le texte.

### 4.3 — Pages de cartes (le remplissage des 365)
- **Nom :** `mois-XX-defis-page-YY` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA` · **2 cartes de défi par page** (gabarit §4.1).
- **Volume par mois (source CSV) :** M1 31 · M2 28 · M3 31 · M4 30 · M5 31 · M6 30 · M7 31 · M8 31 · M9 30 · M10 31 · M11 30 · M12 31 = **365**. Soit ~15-16 pages de cartes/mois.
- **Textes :** **100 % issus de `../CSV/defis-365-import-notion.csv`** (voir astuce d'import §6). Ne rien rédiger.
- **Couleur de liseré/chip stat par défi :** Discipline `#3B82C4` · Courage `#F5A623` · Vitalité `#2EC27E` · Charisme `#E86A5C` · Mental `#8B5CF6` · Savoir `#4FB0C9` · Création `#EC4899` · Prospérité `#B08D57` (source `colors.json > stats`).
- **SVG/PNG :** icônes de stat `.../icones/` + `valider-check` (voir gabarit).
- **Ordre :** 1) Dupliquer une page à 2 cartes. 2) Coller les 2 défis suivants du mois (import CSV). 3) Régler couleur de liseré + icône de stat par défi. 4) Vérifier pied de page (Jour X/365 · p.). 5) Répéter jusqu'à épuiser le mois.

### 4.4 — Bilan de fin de mois (×12)
- **Nom :** `mois-XX-bilan` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA` + bandeau navy
- **Composants :** carte « chiffres du mois » (XP total, défis validés, meilleure série) · 3 questions de bilan · titre honorifique débloqué.
- **Textes (source `bonus/01-journal-progression-annuel.md` §Bilan mensuel) :** « Les chiffres du mois », « Répartition par pilier », « Mon mois en clair » (3 questions), « Ajustement pour le mois prochain ». Titre honorifique du mois (ex. « Maître du Mois »).
- **SVG :** `.../composants/jauge-stat.svg` (répartition par pilier) · `.../icones/xp-etoile.svg`, `serie-flamme.svg`, `valider-check.svg`
- **PNG :** `Exports/svg/composants/jauge-stat.png` · `Exports/svg/icones/*.png`
- **Ordre :** 1) Fond + bandeau. 2) Titre « Bilan — Mois {n} ». 3) Carte chiffres. 4) Barres de répartition par pilier. 5) 3 questions (lignes à remplir). 6) Titre honorifique. 7) Pied.

---

## 5. BONUS + BACK MATTER

### 5.1 — Journal de progression annuel
- **Nom :** `bonus-journal-annuel` (plusieurs pages) · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** page « intention de l'année » + modèle de bilan mensuel (×12) + revue trimestrielle (×4), lignes à remplir.
- **Textes (source `bonus/01-journal-progression-annuel.md`) :** « Mon intention de l'année », « La personne que je veux être dans 365 jours », « Mes 3 caps de l'année », « Mon contrat avec moi-même », modèles réutilisables.
- **SVG :** `.../icones/cairn.svg` · **PNG :** `Exports/svg/icones/cairn.png`
- **Ordre :** 1) Fond. 2) Titre. 3) Blocs de questions + lignes vides. 4) Encadré « contrat » à signer. 5) Pied.

### 5.2 — Tracker d'habitudes
- **Nom :** `bonus-tracker-habitudes` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** grille mensuelle vierge (3 à 5 habitudes × 31 jours) + code couleur + compteur de série.
- **Textes (source `bonus/02-tracker-habitudes.md`) :** « Choisir tes 3 à 5 habitudes clés », « La grille mensuelle », « Ne jamais casser la chaîne », « Le Joker (jour de grâce) ». Code couleur : validé `#2EC27E` · joker `#F5A623` · manqué `#8A93A2` (jamais rouge).
- **SVG :** `.../icones/serie-flamme.svg`, `valider-check.svg`, `filet-reprise.svg` · **PNG :** `Exports/svg/icones/*.png`
- **Ordre :** 1) Fond. 2) Titre + intro. 3) Ligne d'habitudes (à écrire). 4) Grille 31 jours. 5) Légende couleur. 6) Compteur de série. 7) Pied.

### 5.3 — Calendrier de validation 365
- **Nom :** `bonus-calendrier-365` · **Dim :** 1240 × 1754 (peut tenir en 1-2 pages) · **Fond :** `#F7F8FA` + bandeau navy
- **Composants :** **grille annuelle vue d'oiseau (12 lignes × jours, 365 cases)** + barre de progression annuelle + 4 checkpoints (J30/J90/J180/J365) + légende 3 états.
- **Textes (source `bonus/03-calendrier-validation.md`) :** « Le geste quotidien (30 s) », « Comment compter ton XP », checkpoints J30 Premier checkpoint · J90 Cap du Trimestre · J180 Mi-Parcours · J365 Cap Absolu. Légende : validé `#2EC27E` · grâce `#F5A623` · à venir `#8A93A2`.
- **SVG :** `.../icones/calendrier.svg`, `valider-check.svg`, `serie-flamme.svg` · **PNG :** `Exports/svg/icones/calendrier.png`, `valider-check.png`
- **Ordre :** 1) Fond + bandeau. 2) Titre. 3) Grille 365 cases (12 lignes). 4) Barre de progression annuelle. 5) 4 pastilles checkpoints. 6) Légende. 7) Pied.

### 5.4 — Aiguillage bonus (mini-défis / défis extrêmes / guide discipline)
- **Nom :** `bonus-aiguillage` · **Dim :** 1240 × 1754 · **Fond :** `#F7F8FA`
- **Composants :** 3 cartes d'aiguillage (une par pack bonus).
- **Textes (sources) :** `bonus/04-100-mini-defis-urgence.md` (« 100 mini-défis express »), `bonus/05-30-defis-extremes.md` (« 30 défis extrêmes »), `bonus/06-guide-discipline-sans-motivation.md` (« Tenir sans motivation »).
- **SVG :** `.../icones/courage.svg`, `discipline.svg` · **PNG :** `Exports/svg/icones/courage.png`, `discipline.png`
- **Ordre :** 1) Fond. 2) Titre. 3) 3 cartes d'aiguillage. 4) Pied.

### 5.5 — Page de conclusion
- **Nom :** `back-conclusion` · **Dim :** 1240 × 1754 · **Fond :** dégradé **Wrapped** `160°, #1B2A4A → #6D3CE0 → #F5A623` (ou `Exports/fonds/fond-wrapped-1080x1920.png` recadré)
- **Composants :** titre de célébration + rappel du chemin parcouru + invitation à recommencer.
- **Textes (ton coach, source `../CSV/defis-365-import-notion.csv` §clôture) :** « **Tu l'as fait.** 365 jours, 365 preuves. » · « Tu n'es plus la personne du Jour 1. » · « **Et maintenant ?** Continue le cap. » — **aucune promesse interdite.**
- **SVG :** `.../icones/cairn.svg`, `serie-flamme.svg` · logo `.../logo/cap365-logo-horizontal.svg` · **PNG :** `Exports/fonds/fond-wrapped-1080x1920.png`, `Exports/svg/logo/cap365-logo-horizontal.png`
- **Ordre :** 1) Fond wrapped. 2) Titre célébration. 3) Rappel chiffres (365 / XP / série). 4) Message « et après ». 5) Logo + slogan. 6) Pied.

### 5.6 — Certificat de Transformation
- **Nom :** `back-certificat` · **Dim :** 1240 × 1754 · **Fond :** papier crème `#FBF7EE` + **cadre doré** `#F5A623` (bordure ornée épaisse)
- **Composants :** cadre doré, sceau/emblème central (badge Légendaire ou cairn), lignes à personnaliser, place pour la date.
- **Textes (source `../CSV/defis-365-import-notion.csv` J365) :** « **CERTIFICAT DE TRANSFORMATION** » · « Décerné à ________ » · « Pour avoir accompli les 365 défis de Cap365 et être devenu·e quelqu'un qui tient parole envers soi-même. » · « Fait le ______ · Rang atteint : ______ · Signature : ______ ». Mention « Cap365 · une expérience Cairn ».
- **SVG :** `.../badges/legendaire.svg` (sceau) · `.../icones/cairn.svg` · logo `.../logo/cap365-app-icon.svg`
- **PNG :** `Exports/svg/badges/legendaire.png` · `Exports/svg/icones/cairn.png`
- **Ordre :** 1) Fond crème. 2) Cadre doré ornemental. 3) Titre « Certificat de Transformation ». 4) Sceau central (badge légendaire). 5) Ligne nom + corps. 6) Date / rang / signature. 7) Mention Cairn.

### 5.7 — Rang d'honneur + 4e de couverture
- **Nom :** `back-rang-honneur`, `back-4e-couverture` · **Dim :** 1240 × 1754
- **Rang d'honneur — Fond :** `#F7F8FA` ; frise des 10 rangs (source `notion-rangs.csv`), rang final mis en avant `#F5A623`. **SVG :** badges `.../badges/legendaire.svg`.
- **4e de couverture — Fond :** dégradé **Marque** ; slogan « Un défi par jour. Une version de toi par an. » + logo + « une expérience Cairn ». **SVG/PNG :** `.../logo/cap365-logo-horizontal.svg` / `.png` ; fond `Exports/fonds/fond-marque-1920x1080.png`.
- **Ordre (rang d'honneur) :** 1) Fond. 2) Titre. 3) Frise des 10 rangs. 4) Mise en avant du rang atteint. 5) Pied.
- **Ordre (4e de couv) :** 1) Fond dégradé marque. 2) Logo. 3) Slogan. 4) Mention Cairn. 5) Contrôle marges.

---

## 6. ASTUCE D'IMPORT DE MASSE — remplir les cartes avec le CSV

> Le fichier `../CSV/defis-365-import-notion.csv` contient déjà **tout le texte des 365 défis** (colonnes : `Jour, Mois, Titre, Catégorie, Stat, Difficulté, Temps, Coût, Objectif, Pourquoi, Instructions, Variante facile, Variante difficile, Récompense`). **Zéro rédaction.**

**Méthode recommandée — Canva « Bulk Create » (Créer en masse, Canva Pro) :**
1. Ouvre la page qui contient **le gabarit de carte** (§4.1) seul (ou 2 cartes).
2. Menu gauche → **Apps → « Bulk Create »** (Créer en masse) → **Importer les données → charger le CSV** `defis-365-import-notion.csv`.
3. **Connecter chaque champ de texte du gabarit à une colonne :** clic droit sur le texte → « Connecter les données » → choisir la colonne (Titre → `Titre`, Objectif → `Objectif`, etc.). Le sur-titre « J{n} » → `Jour` ; le chip catégorie → `Catégorie` ; le chip stat → `Stat` ; le chip difficulté → `Difficulté`.
4. **« Continuer → Générer les pages »** : Canva crée **une page par ligne** (365 cartes remplies d'un coup).
5. **Post-traitement (rapide) :** regrouper 2 cartes/page, appliquer la **couleur de liseré + l'icône de stat** par lot (filtrer par colonne `Stat`), insérer les intercalaires de mois (§4.2) entre les blocs (repère : changement de valeur `Mois`).

**Astuce liseré/icône par stat :** trier/filtrer le CSV par `Stat` avant génération, ou générer d'abord tout en neutre puis recolorer par sélection multiple (8 passes, une par stat). Couleurs de stat = §4.3.

**Repli sans Bulk Create :** ouvrir le CSV, copier-coller colonne par colonne (Titre/Objectif/Instructions/Variantes/Récompense) dans le gabarit dupliqué — plus lent mais toujours « sans rédaction ».

---

## 7. Export final

| Usage | Réglage Canva |
|---|---|
| **PDF produit (téléchargement)** | Télécharger → **PDF Standard**, compression activée (poids raisonnable). |
| **PDF impression pro** | **PDF Impression** + fond perdu si tirage. Travailler alors la version **2480 × 3508 @300 dpi**. |
| **Aperçus / réseaux** | PNG, pages sélectionnées. |

**Nom de fichier :** `cap365_pdf_le-sentier_v1.pdf`.
**Checklist avant export :** orange = action uniquement · jour manqué = gris (jamais rouge) · titres Poppins / corps Inter · pied de page sur toutes les pages de contenu · marges respectées · aucune promesse interdite · 365 cartes présentes (M1→M12 = 31/28/31/30/31/30/31/31/30/31/30/31).

---

## 8. Temps estimé total

| Phase | Détail | Temps |
|---|---|---|
| Mise en place | Doc + Kit de marque (colors.json) + polices + upload assets + composants | **~1 h 30** |
| Front matter | Couverture + 7 pages système/manifeste/mode d'emploi | **~2 h 30** |
| Gabarit de carte | Construction parfaite du `gabarit-carte-defi` | **~1 h** |
| 365 défis | Bulk Create depuis CSV + post-traitement (liserés, icônes, 2/page) + 12 intercalaires + 12 bilans | **~4 h** |
| Bonus | Journal + tracker + calendrier 365 + aiguillage | **~2 h** |
| Back matter | Conclusion + certificat + rang d'honneur + 4e de couv | **~1 h 30** |
| Relecture + export | Checklist + export PDF | **~1 h** |
| **TOTAL** | | **~13 h 30** (≈ 8-9 h si base = screenshots du HTML `cap365-pdf.html`) |

---

> **Rappel charte finale.** Marque **Cairn** · produit **Cap365** · baseline **365 Défis de Vie** · slogan **« Un défi par jour. Une version de toi par an. »** Navy `#1B2A4A`, action orange `#F5A623`, succès vert `#2EC27E`. Titres **Poppins**, corps **Inter**. 50 niveaux / 10 rangs (Éveil → Légende), 24 badges (4 raretés), jalons Jour 182 (Mi-Parcours) et Jour 365 (Cap365). Ton direct, chaleureux, responsabilisant : **on promet du travail et de la fierté, jamais de la magie.**
