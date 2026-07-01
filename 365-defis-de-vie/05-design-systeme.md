# 🎨 Cap365 — Design & maquette du PDF / produit

> Document de production. Tout ce qu'il faut pour fabriquer le PDF/produit premium « 365 Défis de Vie » dans Canva, sans retouche ni devinette : structure page par page, palette, typographies, illustrations, jeu d'icônes (1 par catégorie), anatomie d'une carte de défi, système de progression visuel, et specs concrètes (formats, marges, tailles de police).
>
> **Un défi par jour. Une version de toi par an.**

---

## 📌 1. Cadre de production en un coup d'œil

| Paramètre | Valeur canonique | Note |
|---|---|---|
| **Format de page** | A4 portrait — **210 × 297 mm** | Lisible imprimé ET sur smartphone (zoom confortable). |
| **Format Canva équivalent** | 21 × 29,7 cm (preset « A4 ») | Ou en pixels : **2480 × 3508 px** (300 DPI). |
| **Nombre de pages recommandé** | **≈ 220 pages** | Cible canonique de la bible. |
| **Orientation** | Portrait (vertical) | Mobile-first : on scrolle, on ne tourne pas le téléphone. |
| **Résolution export** | 300 DPI (impression) / 150 DPI (web léger) | Deux exports : `print` et `web`. |
| **Couleur** | RVB pour écran, valeurs HEX de la charte | Pas de CMJN sauf impression pro dédiée. |
| **Police titres** | **Montserrat** (Bold 700 / ExtraBold 800) | Google Fonts, dispo dans Canva. |
| **Police corps** | **Inter** (Regular 400 / Medium 500 / SemiBold 600) | Google Fonts, dispo dans Canva. |
| **Marge de sécurité** | 18 mm sur les 4 bords | Aucun texte hors de cette zone. |
| **Fond général** | Blanc cassé `#F7F9FC` | Jamais de blanc pur en grande surface. |

> 🧭 **Règle d'or de fabrication :** de l'air partout, structure par blocs en bleu nuit `#1B2A4A`, et l'**orange `#F5A623` réservé à l'action** (XP, boutons, jalons, validation visuelle).

---

## 🌈 2. Palette de couleurs (HEX + usage précis)

| Rôle | Nom | HEX | Où l'utiliser dans le PDF |
|---|---|---|---|
| 🔵 Primaire | Bleu nuit | `#1B2A4A` | Fonds de bandeaux/en-têtes, titres forts, blocs structurants, numéros de mois, couverture. |
| 🔷 Secondaire | Bleu | `#2E5EAA` | Sous-titres, filets, étiquettes de catégorie, en-têtes de tableaux, dégradés avec la primaire. |
| 🟠 Accent | Orange | `#F5A623` | **Action uniquement** : XP, boutons, jalons, cases à cocher actives, points de progression, badge « du jour ». |
| 🟢 Succès | Vert | `#27AE82` | Validation, défi accompli, série en cours, jauges remplies, coches validées. |
| ⬛ Neutre sombre | Anthracite | `#222831` | Texte de corps principal, icônes monochromes par défaut. |
| ⬜ Neutre clair | Gris-bleu | `#8A93A2` | Texte secondaire, légendes, états inactifs, séparateurs, cases vides. |
| 🤍 Fond | Blanc cassé | `#F7F9FC` | Fond général de toutes les pages. |
| ⚪ Blanc | Blanc pur | `#FFFFFF` | Texte sur blocs primaires, fond des cartes de défi posées sur le fond. |

### Règles d'application (à ne jamais enfreindre)
- 🚫 L'orange `#F5A623` **ne sert jamais de fond de grande surface** : signal d'action, pas couleur d'ambiance.
- ✅ Contraste corps : anthracite `#222831` sur fond `#F7F9FC`. Sur bloc primaire `#1B2A4A` → texte **blanc `#FFFFFF`**.
- ✅ Vert `#27AE82` **strictement réservé** au succès/validation. Jamais décoratif.
- 🎚️ **Hiérarchie chromatique :** Primaire (structure) → Secondaire (appui) → Accent (action) → Succès (récompense).

### Codes de couleur par bande de difficulté (carte de défi)
| Bande de difficulté | XP | Pastille couleur | HEX |
|---|---|---|---|
| Difficulté 1-3 (basse) | 10-30 XP | Vert | `#27AE82` |
| Difficulté 4-5 | 40-50 XP | Bleu | `#2E5EAA` |
| Difficulté 6 | 60 XP | Bleu nuit | `#1B2A4A` |
| Difficulté 7-8 | 70-80 XP | Orange | `#F5A623` |
| Difficulté 9-10 (haute) | 90-100 XP | Orange foncé* | `#D98A12` |

> *Variante assombrie de l'accent pour signaler le « hors zone » (difficulté 9-10) sans sortir de la charte. À utiliser uniquement sur la pastille de difficulté max.

---

## ✍️ 3. Typographies & échelle typographique

| Usage | Police | Graisse | Taille (pt) | Interligne | Couleur |
|---|---|---|---|---|---|
| Titre de couverture | Montserrat | ExtraBold 800 | **64-72 pt** | 1.0 | `#FFFFFF` |
| Titre de section (H1) | Montserrat | ExtraBold 800 | **34 pt** | 1.1 | `#1B2A4A` |
| Titre de mois | Montserrat | ExtraBold 800 | **40 pt** | 1.1 | `#FFFFFF` (sur bandeau) |
| Sous-titre (H2) | Montserrat | Bold 700 | **24 pt** | 1.2 | `#2E5EAA` |
| Intertitre (H3) | Montserrat | Bold 700 | **18 pt** | 1.2 | `#1B2A4A` |
| Titre de défi | Montserrat | Bold 700 | **20 pt** | 1.2 | `#1B2A4A` |
| Corps de texte | Inter | Regular 400 | **16 pt** | 1.5 | `#222831` |
| Corps emphase | Inter | SemiBold 600 | 16 pt | 1.5 | `#222831` |
| Légende / mention | Inter | Medium 500 | **12-13 pt** | 1.4 | `#8A93A2` |
| Étiquette catégorie | Montserrat | Bold 700 | **11 pt** (MAJ, +tracking) | 1.0 | `#2E5EAA` |
| Compteur XP | Montserrat | ExtraBold 800 | **22 pt** | 1.0 | `#F5A623` |
| Numéro de jour (gros) | Montserrat | ExtraBold 800 | **48 pt** | 1.0 | `#1B2A4A` |

### Règles typographiques
- 📏 **Corps jamais sous 16 pt** : lisibilité smartphone non négociable.
- 🔤 **Deux polices, pas une de plus** : Montserrat (titres) + Inter (corps).
- ↔️ **Tracking** : +60 à +120 sur les étiquettes catégorie en MAJUSCULES uniquement ; texte courant sans tracking.
- 📐 **Interlignage généreux** (1.5) sur les textes longs (défis, guides).
- 🎯 **Alignement** : titres et corps alignés à gauche (jamais justifié, qui crée des trous illisibles sur mobile).

### Alternatives Google Fonts (si indisponibilité)
| À remplacer | Alternatives gratuites |
|---|---|
| **Montserrat** (titres) | Poppins · Raleway · Archivo |
| **Inter** (corps) | Work Sans · Manrope · Source Sans 3 |

---

## 🖼️ 4. Style d'illustrations

**Direction :** illustrations géométriques **semi-plates** et symboliques, palette restreinte à la charte. Aucune photo de stock — un univers graphique propriétaire et reconnaissable.

### Univers symbolique (récurrent dans tout le PDF)
| Symbole | Sens | Où l'employer |
|---|---|---|
| 🏔️ **Sommet** | Le cap à franchir, la progression | Couvertures, ouvertures de mois, jalons. |
| 🛤️ **Chemin** | Le parcours de 365 jours | Frises de progression, sommaire, fil conducteur. |
| 📍 **Jalon** | Paliers, niveaux, mi-parcours | Pages de niveau, médaille de mi-parcours, fins de mois. |
| 🛡️ **Bouclier** | Le Filet de Reprise, la résilience | Pages anti-abandon, badge Phénix, rituel de reprise. |
| 🏅 **Médaille / sceau** | Badges (dont badges légendaires), récompenses | Pages gamification, certificat, sceaux de pilier. |

### À faire / à éviter
| ✅ À faire | ❌ À éviter |
|---|---|
| Formes géométriques semi-plates, propres | Photos « jeune cadre dynamique souriant » |
| Palette restreinte à la charte | Dégradés criards, néons, multicolore |
| Métaphores de progression (sommet, chemin) | Imagerie miraculeuse / « loi d'attraction » |
| Univers cohérent et reconnaissable | Mélange de styles d'illustration |

> 🎨 **Astuce Canva :** dans la recherche d'éléments, filtrer sur **« Lignes & formes »** et **graphismes « flat / line »** monochromes, puis recolorer sur les HEX de la charte. Éviter l'onglet « Photos ».

---

## 🔣 5. Jeu d'icônes — 1 icône par catégorie (15 catégories)

**Style commun :** outline (ligne), coins légèrement arrondis, **épaisseur de trait constante**, monochrome **primaire `#1B2A4A`** par défaut, variante **accent `#F5A623`** pour l'état actif/sélectionné. Banques compatibles gratuites : **Lucide, Feather, Phosphor (regular)** — à harmoniser sur **une seule famille**.

| # | Catégorie | Icône (symbole) | Métaphore | Couleur d'étiquette |
|---|---|---|---|---|
| 1 | **Santé** | ❤️ cœur / pouls | Vitalité, soin de soi | `#27AE82` |
| 2 | **Sport** | 🏃 silhouette en mouvement | Effort physique | `#2E5EAA` |
| 3 | **Discipline** | 🎯 cible | Tenir le cap, viser juste | `#1B2A4A` |
| 4 | **Confiance en soi** | 🦁 / poitrine bombée | Oser, s'affirmer | `#F5A623` |
| 5 | **Social** | 💬 bulles de dialogue | Aller vers les autres | `#2E5EAA` |
| 6 | **Relations** | 🤝 mains jointes | Lien, proximité | `#27AE82` |
| 7 | **Finances** | 🪙 pièce / graphique | Gérer, faire croître | `#1B2A4A` |
| 8 | **Productivité** | ✅ case cochée | Faire, avancer | `#F5A623` |
| 9 | **Apprentissage** | 📖 livre ouvert | Acquérir une compétence | `#2E5EAA` |
| 10 | **Aventure** | 🧭 boussole | Explorer, oser l'inconnu | `#F5A623` |
| 11 | **Organisation** | 🗂️ classeur / cases | Ranger, structurer | `#1B2A4A` |
| 12 | **Créativité** | 💡 ampoule / étincelle | Créer, imaginer | `#F5A623` |
| 13 | **Expériences nouvelles** | ✨ étoile / porte | Première fois, nouveauté | `#2E5EAA` |
| 14 | **Gestion des émotions** | 🌊 vague / souffle | Apaiser, réguler | `#27AE82` |
| 15 | **Sortie de zone de confort** | 🚪 porte franchie / flèche hors-cercle | Dépasser sa limite | `#D98A12` |

> 🧩 **Cohérence :** une icône = une catégorie, **toujours la même**, même grille (carré de 64 px), même graisse de trait. L'icône apparaît sur chaque carte de défi (coin haut-gauche) et dans le sommaire des catégories.

### Nommage des fichiers d'icônes
`cap365_icone_[categorie].svg` — ex. `cap365_icone_discipline.svg`, `cap365_icone_sortie-zone-confort.svg` (minuscules, sans accents, mots séparés par `_`/`-`).

---

## 📚 6. Structure complète du PDF — Table des matières page par page

> Plan détaillé pour **≈ 220 pages**. Les fourchettes de pages sont des repères de fabrication. Le bloc « 12 mois » est le cœur volumétrique (365 défis).

### 🔹 Bloc A — Ouverture & cadre *(pages 1 → 18)*

| Page(s) | Élément | Contenu |
|---|---|---|
| 1 | **Couverture** | Logo Cap365, baseline « 365 Défis de Vie », slogan, illustration sommet. Fond primaire `#1B2A4A`. |
| 2 | **Page de garde / mentions** | Édition, année, mention « produit digital premium », droits. |
| 3 | **Mot d'accueil** | Court mot direct au lecteur (« Bienvenue. À partir d'aujourd'hui, tu agis. »). |
| 4-5 | **Manifeste Cap365** | Les valeurs en action : action avant théorie, progression réaliste, honnêteté radicale, constance, respect du rythme. Ton coach. |
| 6-7 | **Promesse & ce que ce produit n'est PAS** | Ce que tu vas construire (discipline, confiance, compétences) — et les promesses qu'on ne te fait **jamais** (richesse, bonheur permanent, vie parfaite). |
| 8-10 | **Mode d'emploi** | Comment ça marche : 1 défi/jour, 5-20 min, valider, gagner de l'XP. Comment lire une carte de défi. |
| 11 | **Les 15 catégories** | Grille visuelle des 15 catégories + leurs icônes. |
| 12-13 | **Le système de jeu (gamification)** | XP, niveaux/rangs, séries, badges, radar des 8 stats — vue d'ensemble. |
| 14 | **La Courbe d'Inconfort Progressive** | Comment la difficulté monte sur 52 semaines. |
| 15 | **Le Filet de Reprise** | Journée de grâce + rituel de reprise. Page bouclier. |
| 16 | **Le Système de Preuves** | Chaque défi laisse une trace (XP, badge, journal). |
| 17 | **Tes 7 premiers jours** | Mini-guide anti-abandon de démarrage. |
| 18 | **Sommaire / carte de l'année** | Frise des 12 mois, repères des jalons (jour 1, 182, 365). |

### 🔹 Bloc B — Dashboard & suivi *(pages 19 → 26)*

| Page(s) | Élément | Contenu |
|---|---|---|
| 19-20 | **Dashboard de progression** | Tableau de bord : niveau actuel, XP totale, série en cours, record. |
| 21 | **Jauge de rang (Rang 1 → Rang 10)** | Échelle des 50 niveaux regroupés en 10 rangs, avec seuils d'XP. |
| 22 | **Calendrier annuel** | Grille 12 mois à cocher, vue d'oiseau de l'année. |
| 23 | **Suivi de série (streak)** | Compteur de jours consécutifs + journées de grâce. |
| 24 | **Mur des badges** | Les 24 badges à débloquer (4 raretés : Commun, Rare, Épique, Légendaire), états verrouillé/débloqué. |
| 25 | **Vitrine des badges légendaires** | Les badges de rareté Légendaire + conditions. |
| 26 | **Mon record perso** | Classement strictement personnel : meilleure série, meilleure semaine, progression mensuelle. |

### 🔹 Bloc C — Les 12 mois (les 365 défis) *(pages 27 → 196)*

> ~14 pages par mois en moyenne (intercalaire + ~30 cartes de défi + bilan). Volume principal du produit.

| Structure répétée chaque mois | Détail |
|---|---|
| **Intercalaire de mois** *(1 page)* | Bandeau primaire `#1B2A4A`, numéro + nom du mois, thème, illustration sommet, jalon visé. |
| **Cartes de défi** *(~12-13 pages, 2 à 3 cartes/page)* | 1 carte par jour (voir anatomie §7). Difficulté croissante. |
| **Page « Titre du mois »** *(½ page intégrée)* | Titre honorifique débloqué (ex. « Maître de Janvier »). |
| **Bilan de fin de mois** *(1 page)* | XP du mois, défis validés, série, 3 questions de bilan. |

| Mois | Pages | Repère |
|---|---|---|
| Mois 1 | 27-40 | Jour 1 → badge **Premier Pas** dès le 1er défi. |
| Mois 2 | 41-54 | Cap **Semaine Pleine** / **Mois de Fer**. |
| Mois 3 | 55-68 | Jour 90 → badge **Cap du Trimestre**. |
| Mois 4 | 69-82 | Montée d'intensité, 1er **Trophée de la Constance** (50 j). |
| Mois 5 | 83-96 | Travail des piliers. |
| Mois 6 | 97-110 | **Jour 182 → Médaille de Mi-Parcours** + badge **Demi-Tour Impossible**. |
| Mois 7 | 111-124 | Relance post mi-parcours. |
| Mois 8 | 125-138 | Défis hors zone (difficulté 7-10). |
| Mois 9 | 139-152 | Jour 270 → cap des 3 trimestres. |
| Mois 10 | 153-166 | Consolidation des habitudes. |
| Mois 11 | 167-180 | Approche du sommet. |
| Mois 12 | 181-196 | **Jour 365 → badge Cap365** + Certificat de Transformation. |

### 🔹 Bloc D — Bonus & clôture *(pages 197 → 220)*

| Page(s) | Élément | Contenu |
|---|---|---|
| 197-199 | **Pack « 30 défis bonus week-end »** | Défis additionnels pour les jours à plus de temps. |
| 200-202 | **Mini-guide « Construire une habitude qui tient »** | Psychologie appliquée de l'habitude. |
| 203-205 | **Les 4 parcours thématiques** | Discipline · Confiance · Corps & Énergie · Compétences (intro/aiguillage). |
| 206-208 | **Bilans trimestriels guidés** | 4 bilans à remplir (T1-T4). |
| 209-210 | **Journal de transformation** | Pages de journal libre, à dater. |
| 211 | **Sceaux de pilier** | Les 4 sceaux à débloquer. |
| 212 | **Carte de l'année (fresque)** | Fresque visuelle qui se remplit au fil des 365 défis. |
| 213-214 | **Certificat de Transformation** | Daté et personnalisé, à débloquer au défi 365. |
| 215 | **Rang d'Honneur final** | Attribué selon le niveau atteint. |
| 216-217 | **Et après ? / Édition suivante** | Continuer, accès aux mises à jour (selon offre). |
| 218 | **Wallpapers de motivation** | Aperçus des fonds d'écran mobile + ordinateur. |
| 219 | **Crédits & charte** | Polices, sources d'icônes, mentions. |
| 220 | **Quatrième de couverture** | Slogan, rappel de la promesse, signature de marque. |

---

## 🃏 7. Anatomie d'une « carte de défi » (maquette)

> La brique centrale du produit. Format **demi-page A4** (≈ 190 × 130 mm), 2 cartes par page (ou 3 en version compacte). Fond blanc `#FFFFFF` posé sur le fond de page `#F7F9FC`, coins arrondis 12 px, ombre douce.

### 🗺️ Maquette ASCII de la carte

```
┌────────────────────────────────────────────────────────────┐
│  ┌────┐                                          ╔════════╗  │  ← bandeau haut
│  │ 🎯 │  DISCIPLINE                              ║ JOUR   ║  │     primaire #1B2A4A
│  └────┘  (étiquette catégorie · #2E5EAA)         ║  047   ║  │     n° de jour blanc
│                                                  ╚════════╝  │
├────────────────────────────────────────────────────────────┤
│                                                              │
│   Range et nettoie un seul tiroir, à fond.                   │  ← TITRE DU DÉFI
│   (Montserrat Bold 20pt · #1B2A4A)                           │     1 phrase d'action
│                                                              │
│   Choisis le tiroir que tu repousses depuis des mois.        │  ← consigne / corps
│   Vide-le, trie, jette, remets en ordre. Une zone propre,    │     (Inter 16pt · #222831)
│   une preuve concrète que tu reprends la main.               │
│                                                              │
├────────────────────────────────────────────────────────────┤
│  Difficulté          XP            Durée            Valider  │  ← barre de stats
│  ★★☆☆☆              ▸ +20 XP       ⏱ 10 min         ☐        │     orange = action
│  (#2E5EAA)          (#F5A623)      (#8A93A2)        (case)   │
├────────────────────────────────────────────────────────────┤
│  💬 « Une zone rangée, c'est un signal envoyé à ton cerveau. »│  ← micro-coaching
│      (Inter Medium 13pt · #8A93A2 · italique)                │     1 ligne max
└────────────────────────────────────────────────────────────┘
```

### 🧱 Anatomie détaillée (8 zones)

| Zone | Élément | Spécification |
|---|---|---|
| 1 | **Icône de catégorie** | Coin haut-gauche, carré 48 px, outline `#1B2A4A`. |
| 2 | **Étiquette catégorie** | Montserrat Bold 11 pt MAJUSCULES, `#2E5EAA`, à côté de l'icône. |
| 3 | **Numéro du jour** | Pastille primaire `#1B2A4A` haut-droite, « JOUR 047 » en blanc, Montserrat ExtraBold. |
| 4 | **Titre du défi** | Montserrat Bold 20 pt `#1B2A4A`, une phrase d'action. |
| 5 | **Consigne** | Inter 16 pt `#222831`, 2-4 lignes max, concrète et exploitable. |
| 6 | **Barre de stats** | Difficulté (★, couleur selon niveau) · XP (orange `#F5A623`) · Durée (gris `#8A93A2`) · Case à valider. |
| 7 | **Case à cocher** | Carré arrondi ; vide `#8A93A2`, validée → coche **verte `#27AE82`**. |
| 8 | **Micro-coaching** | 1 ligne, Inter Medium 13 pt `#8A93A2` italique, le « pourquoi » du défi. |

### 📐 Specs Canva de la carte
- **Taille bloc** : largeur 174 mm × hauteur ≈ 122 mm (zone utile, dans les marges).
- **Rayon des coins** : 12 px. **Ombre** : douce, opacité 12 %, flou 16, décalage Y +4.
- **Marge intérieure (padding)** : 16 px sur les 4 bords du contenu.
- **Bandeau haut** : `#1B2A4A`, hauteur 28 px, le reste sur `#FFFFFF`.
- **Filets séparateurs** : 1 px, `#8A93A2` à 30 % d'opacité.

---

## 📊 8. Système de progression visuel (barres, jauges, calendrier)

> Le **Système de Preuves** rendu visible : chaque élément ci-dessous transforme l'effort en donnée motivante. Orange = ce qui progresse, vert = ce qui est validé.

### 8.1 — Barre de progression XP (vers le niveau suivant)

```
RANG 3 · APPRENTI                                 2 700 / 4 000 XP
┌──────────────────────────────────────────────────────────┐
│██████████████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└──────────────────────────────────────────────────────────┘
 ▲ rempli : orange #F5A623          ▲ vide : gris #8A93A2 (15%)
 Plus que 1 300 XP pour atteindre le RANG 4 · CONSTANT
```

- **Hauteur** : 18 px, coins arrondis pleins.
- **Rempli** : `#F5A623`. **Vide** : `#8A93A2` à 15 % d'opacité.
- **Libellé** : rang actuel (gauche) + ratio XP (droite), Montserrat Bold 14 pt.

### 8.2 — Échelle des 10 rangs (jauge verticale du dashboard)

> Les 50 niveaux sont regroupés en 10 rangs (5 niveaux par rang). Seuils d'XP cumulée à l'entrée de chaque rang.

| Rang | Nom | Seuil XP | État visuel |
|---|---|---|---|
| Rang 1 | Éveil | 0 XP | 🟠 point de départ |
| Rang 2 | Élan | 2 200 XP | ⬤ |
| Rang 3 | Apprenti | 4 000 XP | ⬤ |
| Rang 4 | Constant | 6 300 XP | ⬤ |
| Rang 5 | Aguerri | 9 100 XP | ⬤ |
| Rang 6 | Affirmé | 12 400 XP | ⬤ |
| Rang 7 | Artisan | 16 000 XP | ⬤ |
| Rang 8 | Maître | 19 800 XP | ⬤ |
| Rang 9 | Mentor | 23 000 XP | ⬤ |
| Rang 10 | Légende | ≈ 26 000 XP | 🏔️ sommet |

- Représentée comme un **chemin ascendant** (métaphore sommet) : 10 jalons reliés, le rang atteint en `#F5A623`, les suivants en `#8A93A2`.

### 8.3 — Compteur de série (streak)

```
🔥 SÉRIE EN COURS                              RECORD : 22 jours
┌────┬────┬────┬────┬────┬────┬────┐
│ L  │ M  │ M  │ J  │ V  │ S  │ D  │
│ ✓  │ ✓  │ ✓  │ ✓  │ ✓  │ ◐  │ ☐  │   ◐ = journée de grâce
└────┴────┴────┴────┴────┴────┴────┘
 ✓ validé : vert #27AE82   ◐ grâce : orange #F5A623   ☐ à venir : gris
                       Série actuelle : 12 jours
```

- ✓ jour validé → **vert `#27AE82`**. ◐ journée de grâce → **orange `#F5A623`**. ☐ à venir → `#8A93A2`.
- Bonus de série : +5 XP/jour au-delà de 3 jours (plafond +25 XP/j) ; semaine pleine = +50 XP.

### 8.4 — Calendrier annuel (vue d'oiseau)

```
        L  M  M  J  V  S  D
JAN  ▦  ■ ■ ■ ■ ■ ◧ □   ■ ■ ■ ■ ◧ □ □  ...
FÉV  ▦  ■ ■ ■ ◧ ■ ■ □   ...
...
            ■ jour validé (vert)   ◧ grâce (orange)   □ non fait (gris clair)
            ★ JALON : Jour 182 (Mi-Parcours) · Jour 365 (Cap365)
```

- Grille 12 lignes (mois) × jours. Case **6 × 6 mm**.
- Validé → `#27AE82` ; grâce → `#F5A623` ; non fait → `#8A93A2` à 20 %.
- Jalons (jour 182, 365) marqués d'une **★ orange** + médaille.

### 8.5 — Jauge de mi-parcours & badges

```
PROGRESSION DE L'ANNÉE
┌──────────────────────────────────────────────────────────┐
│███████████████████████████📍░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│
└──────────────────────────────────────────────────────────┘
 Jour 1                    📍 Jour 182                  Jour 365
                       MÉDAILLE DE MI-PARCOURS        🏔️ CAP365
```

- Jalon central `#F5A623` au jour 182 (Médaille de Mi-Parcours, badge **Demi-Tour Impossible**).
- **Mur des badges** : grille de 24 vignettes (4 raretés : Commun, Rare, Épique, Légendaire) ; débloqué = couleur + sceau, verrouillé = silhouette grise `#8A93A2`.

---

## 🧷 9. Gabarits de page (templates Canva à dupliquer)

> Construire **8 master templates** réutilisables ; tout le PDF se monte par duplication.

| # | Gabarit | Usage | Fond |
|---|---|---|---|
| 1 | **Couverture** | P.1 et 4e de couv | Primaire `#1B2A4A` |
| 2 | **Section / manifeste** | Pages de texte (manifeste, mode d'emploi) | `#F7F9FC` + bandeau primaire |
| 3 | **Intercalaire de mois** | Ouverture des 12 mois | Bandeau plein `#1B2A4A` |
| 4 | **Page de défis** | 2-3 cartes de défi par page | `#F7F9FC` |
| 5 | **Dashboard / progression** | Jauges, niveaux, calendrier | `#F7F9FC` + blocs primaires |
| 6 | **Bilan (mois / trimestre)** | Pages à remplir | `#F7F9FC` |
| 7 | **Badge / certificat** | Récompenses symboliques (24 badges, 4 raretés) | `#1B2A4A` ou `#FFFFFF` cadré |
| 8 | **Bonus / journal** | Pages bonus et journal libre | `#F7F9FC` |

### Pied de page commun (tous gabarits sauf couvertures)
```
Cap365 · 365 Défis de Vie                    Jour XXX / 365   ·   p. XX
(Inter Medium 11pt · #8A93A2 · filet 1px au-dessus #8A93A2 30%)
```

---

## 🧮 10. Specs concrètes prêtes pour Canva (récap fabrication)

### Document
- **Créer un design** → preset **A4** (21 × 29,7 cm) **OU** taille perso **2480 × 3508 px** (300 DPI).
- **Marges** : afficher la règle + repères à **18 mm** des 4 bords (Fichier → Afficher règles et repères).
- **Fond par défaut** : `#F7F9FC` sur toutes les pages.
- **Pages** : viser **≈ 220**. Travailler par blocs (A/B/C/D) puis assembler.

### Polices (Canva → onglet Texte → police)
| Rôle | Police | Graisse | Taille |
|---|---|---|---|
| Couverture | Montserrat | ExtraBold | 64-72 |
| Titre section | Montserrat | ExtraBold | 34 |
| Sous-titre | Montserrat | Bold | 24 |
| Titre de défi | Montserrat | Bold | 20 |
| Corps | Inter | Regular | 16 |
| Légende | Inter | Medium | 12-13 |
| XP / compteur | Montserrat | ExtraBold | 22 |

### Couleurs (à enregistrer dans « Couleurs de la marque »)
`#1B2A4A` · `#2E5EAA` · `#F5A623` · `#27AE82` · `#222831` · `#8A93A2` · `#F7F9FC` · `#FFFFFF` (+ `#D98A12` pour difficulté 9-10).

### Éléments graphiques
- **Coins arrondis** : 12 px (cartes), 8 px (boutons/pastilles).
- **Ombres** : opacité 12 %, flou 16, décalage Y +4.
- **Boutons / CTA** : fond orange `#F5A623`, texte `#FFFFFF` Montserrat Bold, padding 14×28 px.
- **Filets** : 1 px `#8A93A2` à 30 %.
- **Icônes** : importer un set unique (Lucide/Feather/Phosphor), recolorer sur `#1B2A4A` (actif `#F5A623`).

### Export
| Usage | Réglage |
|---|---|
| **PDF impression** | « PDF Impression », repères de fond perdu si tirage pro. |
| **PDF web (produit digital)** | « PDF Standard », compression activée pour un poids raisonnable. |
| **Aperçus / réseaux** | PNG 150 DPI, pages sélectionnées. |

### Nommage des fichiers exportés
`cap365_pdf_[offre]_[version].pdf` — ex. `cap365_pdf_transformation_v1.pdf`, `cap365_pdf_essentiel_v1.pdf`, `cap365_pdf_elite_v1.pdf`.

---

## ✅ 11. Checklist de cohérence design (avant export)

- [ ] Format **A4 portrait**, marges **18 mm** respectées, **≈ 220 pages**.
- [ ] Fond général **`#F7F9FC`**, jamais de blanc pur en grande surface.
- [ ] **Orange `#F5A623` uniquement** sur l'action / la progression.
- [ ] **Vert `#27AE82`** uniquement sur validation / succès.
- [ ] Titres en **Montserrat**, corps en **Inter** (corps **≥ 16 pt**).
- [ ] **1 icône par catégorie**, même set, outline `#1B2A4A` (actif orange).
- [ ] Chaque **carte de défi** a ses 8 zones (icône, catégorie, jour, titre, consigne, stats, case, micro-coaching).
- [ ] **XP / niveaux / rangs / badges / séries** conformes à la bible (seuils, noms, conditions).
- [ ] Illustrations **propriétaires** (sommets, chemins, jalons), **zéro photo de stock**.
- [ ] **Aucune promesse interdite** (richesse, bonheur permanent, vie parfaite) dans les textes intégrés.
- [ ] Tout est **parfaitement lisible sur smartphone**.
- [ ] Pied de page (jour / page) présent sur toutes les pages de contenu.

---

> 📎 **Rappel charte :** marque **Cap365**, baseline **365 Défis de Vie**, slogan **« Un défi par jour. Une version de toi par an. »** Primaire **`#1B2A4A`**, secondaire **`#2E5EAA`**, action **orange `#F5A623`**, succès **vert `#27AE82`**. Titres **Montserrat**, corps **Inter**. 50 niveaux en 10 rangs (Rang 1 Éveil → Rang 10 Légende, ≈ 26 000 XP), 24 badges (4 raretés : Commun, Rare, Épique, Légendaire), jalons jour 182 (Mi-Parcours) et jour 365 (Cap365). Ton direct, chaleureux, responsabilisant : on promet du travail et de la fierté, jamais de la magie.

*Document de production — Cap365 · Design & maquette du PDF/produit.*
