# Template Notion FINAL — Cap365, 365 Défis de Vie

> **Cap365 — 365 Défis de Vie** · marque maison **Cairn**
> *Un défi par jour. Une version de toi par an. — Le RPG de ta vie réelle.*
>
> **Ce document est un plan de montage exécutable.** Il ne réinvente rien : il transforme le kit de construction (`experience/01-notion-build-kit.md`) en un **template Notion final, prêt à bâtir pas à pas, sans réfléchir**. Suis les étapes dans l'ordre, colle les formules telles quelles, remplis les tableaux. À la fin : un template premium, dupliquable en 1 clic, qui donne la sensation d'une vraie app.

> ⚠️ **Cadre d'honnêteté radicale (non négociable).** Aucune page ne promet la richesse, le bonheur ou la vie parfaite. On récompense **l'effort et la régularité**, jamais le miracle. Un jour manqué reste en **neutre `#8A93A2`**, jamais en rouge. **L'XP n'est jamais perdue.**

---

## Canon de référence (à ne jamais dévier)

| Élément | Valeur canonique |
|---|---|
| **8 stats** | Discipline · Courage · Vitalité · Charisme · Mental · Savoir · Création · Prospérité |
| **Difficulté** | 1 → 10 |
| **XP d'un défi** | `difficulté × 10` |
| **Niveaux** | 50 niveaux |
| **Rangs** | 10 rangs (5 niveaux = 1 rang) |
| **Bornes de rang (XP cumulée d'entrée)** | Éveil 0 · Élan 900 · Apprenti 2 200 · Constant 4 000 · Aguerri 6 300 · Affirmé 9 100 · Artisan 12 400 · Maître 16 000 · Mentor 19 800 · Légende 23 000 (plafond 26 000) |
| **Anti-abandon** | Séries + Journée de grâce (1/sem) + Bouclier (0→2) + Filet de Reprise |
| **Badges** | 24 badges · 4 raretés (🟢×7 · 🔵×9 · 🟣×5 · 🟠×3) |
| **Quêtes** | Quotidienne · Hebdomadaire · Mensuelle (BOSS) · Secrète · Événement |
| **Persona de test** | Jour 128 · ~6 240 XP → **Niveau 21 · Rang 4 « Constant »** |

> **Note sur les bornes.** Les **bornes de RANG** ci-dessus (0 / 900 / 2 200 / 4 000 / 6 300 / 9 100 / 12 400 / 16 000 / 19 800 / 23 000) sont le canon. Les **bornes de NIVEAU** (50 paliers) du kit source raffinent ces rangs : un rang = le 1er niveau de son bloc de 5. Le rang est donc calculé à partir du niveau (`ceil(Niveau/5)`), et le titre de rang est mappé sur les 10 rangs. Résultat garanti cohérent avec le canon (voir QA §9).

---

## Sommaire

1. [Arborescence finale du template](#1-arborescence-finale-du-template)
2. [Schéma exact de chaque base de données](#2-schéma-exact-de-chaque-base-de-données)
3. [Formules Notion finales — prêtes à coller](#3-formules-notion-finales--prêtes-à-coller)
4. [Vues à créer, page par page](#4-vues-à-créer-page-par-page)
5. [Relations & rollups](#5-relations--rollups)
6. [Ordre de construction numéroté](#6-ordre-de-construction-numéroté)
7. [Rendre le template dupliquable + onboarding](#7-rendre-le-template-dupliquable--onboarding)
8. [Pré-remplissage : importer les 365 défis (CSV)](#8-pré-remplissage--importer-les-365-défis-csv)
9. [QA — checklist de vérification](#9-qa--checklist-de-vérification)

---

# 1. Arborescence finale du template

Voici l'**arborescence exacte** à reproduire dans Notion. `▸` = page ; `└` = sous-page ; `◫` = base de données (inline). L'ordre vertical est l'ordre d'affichage dans la barre latérale.

```
🏔️ Cap365 — Modèle                                    ← PAGE RACINE (celle qu'on duplique)
│
├─ ▸ 🧭 Accueil — « Crée ton personnage »              ← 1re page vue par le client (onboarding)
│     └ Bouton Duplicate + 4 étapes + 1er défi offert + contrat avec soi
│
├─ ▸ 🏠 Dashboard — Aujourd'hui                         ← écran d'accueil quotidien
│     ├ Callout 🔥 Série + Niveau (lit Profil)
│     ├ Callout ⚑ Défi du jour (bleu nuit)
│     ├ [Vue « Défi du jour » incorporée]
│     ├ Barre XP (▓▓▓░░ + % niveau)
│     └ [Vue « Quêtes en cours » incorporée]
│
├─ ▸ ⚔️ Défi du jour                                    ← page focus, une seule action
│     └ [Vue liée « Défi du jour » — filtre prochain défi non fait]
│
├─ ▸ 🗂️ Mes 365 défis                                   ← la base reine, toutes vues
│     └ ◫ BASE « Défis 365 »
│        ├ Vue « Tous les défis » (table)
│        ├ Vue « Défi du jour »
│        ├ Vue « Défis validés »
│        ├ Vue « Par mois » (board groupé Mois)
│        └ Vue « Mini-défis (jour sans) » (difficulté ≤ 2)
│
├─ ▸ 📊 Personnage / Radar                              ← qui je deviens
│     ├ ◫ BASE « Profil » (1 ligne)
│     ├ Titre de rang porté + Niveau + XP
│     ├ Les 8 jauges de stat (▓░)
│     └ Synthèse forces / axe en retrait
│
├─ ▸ 🏆 Badges                                          ← galerie de collection
│     └ ◫ BASE « Badges » (24 lignes)
│        ├ Vue « Galerie » (gallery, couverture = Image)
│        ├ Vue « Débloqués »
│        └ Vue « Verrouillés »
│
├─ ▸ 🎯 Quêtes                                          ← rythme hebdo/mensuel
│     └ ◫ BASE « Quêtes »
│        ├ Vue « En cours »
│        └ Vue « Toutes »
│
├─ ▸ 🗓️ Calendrier                                      ← le mur qui se remplit
│     ├ [Vue « Calendrier 365 » de Défis 365 — type Calendar]
│     └ [Vue « Heatmap mensuelle » — board groupé Mois]
│
├─ ▸ 🎁 Récompenses                                     ← certificats, carte de l'année, titres
│     └ Galerie de certificats (fichiers Canva) + titre porté
│
├─ ▸ 📔 Journal                                         ← journal de bord + reprise bienveillante
│     ├ ◫ BASE « Journal / Validation » (optionnelle)
│     ├ [Vue « Mon journal » (liste par date)]
│     └ Section « Jour sans / Reprise » (Filet de Reprise, ton doux)
│
└─ ▸ ⚙️ Réglages                                        ← page technique repliée
      ├ Aide « Premiers pas » (vidéo 90 s)
      ├ Instructions de duplication
      ├ Tableau de bornes rangs/niveaux (référence)
      └ Purge des données de test (checklist avant livraison)
```

> **Règle d'or premium :** *une seule action par écran*, un seul élément orange par page (la série OU le CTA). Le luxe vient des vides.

---

# 2. Schéma exact de chaque base de données

Convention de types : `Title` · `Text` · `Number` · `Select` · `Multi-select` · `Checkbox` · `Date` · `Formula` · `Rollup` · `Relation` · `Files & media`.

## 2.1 Base « Défis 365 » — la base reine (1 ligne = 1 jour)

| Propriété | Type Notion | Options / valeurs | Rôle |
|---|---|---|---|
| **Titre** | `Title` | Texte libre (ex. « Aborde un inconnu ») | Nom du défi, ligne obligatoire |
| **Jour** | `Number` | 1 → 365, sans décimale | Tri, % année, filtre « prochain défi » |
| **Catégorie** | `Select` | 15 options colorées (voir tableau ci-dessous) | Thème du défi, filtres |
| **Stat** | `Select` | Discipline · Courage · Vitalité · Charisme · Mental · Savoir · Création · Prospérité | Alimente le radar (via Points stat) |
| **Difficulté** | `Number` | 1 → 10 | Base de l'XP et des points stat |
| **XP** | `Formula` | `Difficulté × 10` (§3.1) | Valeur XP potentielle du défi |
| **Points stat** | `Formula` | +1 / +2 / +3 selon palier (§3.8) | Poids radar quand validé |
| **Temps** | `Select` | 2 min · 5 min · 10 min · 15 min · 30 min · 45 min · 1 h+ | Filtre « défis courts » |
| **Coût** | `Select` | 0 € · < 10 € · 10–30 € · 30 €+ | Filtre « défis gratuits » |
| **Validé** | `Checkbox` | coché / décoché | **Cœur de l'interaction** — déclenche tous les calculs |
| **Date de validation** | `Date` | date simple | Alimente Calendrier + vue du jour |
| **Statut** | `Select` | `À venir` (gris) · `Validé ✓` (vert) · `Grâce ◐` (gris) · `Reprise` (gris) · `Manqué ○` (gris neutre) | Nuance anti-abandon — **jamais de rouge** |
| **Ressenti** | `Text` | libre | Note post-défi de l'utilisateur |
| **Mois** | `Select` | Mois 1 → Mois 12 | Regroupement calendrier / arcs |
| **XP gagnée** | `Formula` | `if(Validé, XP, 0)` (§3.2) | XP réellement acquise → Rollup Profil |
| **Pts Discipline** | `Formula` | `if(Stat=="Discipline", Points stat, 0)` (§3.8) | Rollup filtré stat |
| **Pts Courage** | `Formula` | idem « Courage » | Rollup filtré stat |
| **Pts Vitalité** | `Formula` | idem « Vitalité » | Rollup filtré stat |
| **Pts Charisme** | `Formula` | idem « Charisme » | Rollup filtré stat |
| **Pts Mental** | `Formula` | idem « Mental » | Rollup filtré stat |
| **Pts Savoir** | `Formula` | idem « Savoir » | Rollup filtré stat |
| **Pts Création** | `Formula` | idem « Création » | Rollup filtré stat |
| **Pts Prospérité** | `Formula` | idem « Prospérité » | Rollup filtré stat |
| **Instructions** | `Text` | libre (optionnel) | « Comment faire », affiché dans la page du défi |
| **Pourquoi** | `Text` | libre (optionnel) | Phrase de sens |
| **Mini-défi** | `Text` | libre (optionnel) | Version < 10 min (mode jour sans) |
| **Profil** | `Relation` → Profil | 1 relation | Lien vers la ligne héros (pour Rollups) |

**Les 15 catégories du `Select` Catégorie** (chacune se range dans 1 des 8 stats — pour info, la stat est saisie séparément) :

| Catégorie | → Stat | Catégorie | → Stat |
|---|---|---|---|
| Discipline | Discipline | Résilience | Mental |
| Organisation | Discipline | Apprentissage | Savoir |
| Productivité | Discipline | Compétences | Savoir |
| Sortie de zone de confort | Courage | Créativité | Création |
| Confiance en soi | Courage | Expériences nouvelles | Création |
| Aventure | Courage | Finances | Prospérité |
| Santé | Vitalité | Social | Charisme |
| Sport | Vitalité | Relations | Charisme |
| Gestion des émotions | Mental | | |

## 2.2 Base « Journal / Validation » — optionnelle (1 ligne = 1 jour vécu)

| Propriété | Type Notion | Options / valeurs | Rôle |
|---|---|---|---|
| **Date** | `Title` (date en nom) ou `Date` | jour concerné | Clé du journal |
| **Jour validé** | `Checkbox` | coché / décoché | Un défi relevé ce jour ? |
| **Type de journée** | `Select` | `Défi complet` · `Mini-défi (jour sans)` · `Grâce` · `Bouclier` · `Reprise` · `Manqué` | Journalise l'anti-abandon |
| **XP du jour** | `Number` ou `Rollup` | nombre | XP gagnée ce jour (base + bonus série) |
| **Défi lié** | `Relation` → Défis 365 | 1 relation | Défi relevé ce jour-là |
| **Note** | `Text` | libre | Journal de bord (espace d'écriture premium) |

## 2.3 Base « Badges » — 24 trophées (1 ligne = 1 badge)

| Propriété | Type Notion | Options / valeurs | Rôle |
|---|---|---|---|
| **Nom** | `Title` | ex. « Phénix », « L'Année » | Nom du badge |
| **Rareté** | `Select` | `🟢 Commun` · `🔵 Rare` · `🟣 Épique` · `🟠 Légendaire` | Désir de collection |
| **Catégorie de badge** | `Select` | `Stat` · `Série & assiduité` · `Reprise (Phénix)` · `Progression` · `Secret` | Regroupement galerie |
| **Condition** | `Text` | ex. « Série de 100 jours » | Règle de déblocage |
| **Récompense** | `Text` | ex. « +250 XP · cosmétique animé » | Ce qu'on gagne |
| **Débloqué** | `Checkbox` | coché / décoché | Fait passer la carte en couleur |
| **Débloqué le** | `Date` | date | Fierté + tri « récents » |
| **Image** | `Files & media` | médaillon Canva (couleur / silhouette grise) | Couverture de galerie |

**Les 24 badges à pré-remplir** (répartition 🟢×7 · 🔵×9 · 🟣×5 · 🟠×3) :
- **Stat (8) :** Rouage d'acier · Cœur intrépide · Pouls vital · Aimant social · Roc mental · Esprit vif · Main créatrice · Gardien serein.
- **Série & assiduité (5) :** Premier feu · Braise tenace · Flamme de fer · Année sans rompre · Lève-tôt.
- **Reprise / Phénix (3) :** Phénix · Phénix éternel · Retour gagnant.
- **Progression (6) :** Premier palier · À mi-chemin · Octogone plein · Tueur de BOSS · Légende vivante · L'Année.
- **Secrets (2) :** Noctambule · Polyvalent secret.

## 2.4 Base « Quêtes » (1 ligne = 1 quête)

| Propriété | Type Notion | Options / valeurs | Rôle |
|---|---|---|---|
| **Nom** | `Title` | ex. « Semaine du Courage » | Nom de la quête |
| **Type** | `Select` | `Quotidienne` · `Hebdomadaire` · `Mensuelle (BOSS)` · `Secrète` · `Événement` | Cadence |
| **Objectif** | `Text` | ex. « Relève 3 défis difficulté ≥ 6 » | But mesurable |
| **Progression** | `Number` | compteur courant | Avancement |
| **Cible** | `Number` | valeur à atteindre | Objectif chiffré |
| **% quête** | `Formula` | `Progression / Cible` (§3.10) | Barre de progression |
| **Récompense** | `Text` | ex. « +300 XP + badge mensuel » | Gain |
| **État** | `Select` | `À venir` · `En cours` · `Complétée ✓` · `Échue` (gris, jamais punitif) | Statut |
| **Période** | `Date` (range) | semaine ou mois | Fenêtre de validité |

## 2.5 Base « Profil » — le héros (1 SEULE ligne)

| Propriété | Type Notion | Options / valeurs | Rôle |
|---|---|---|---|
| **Nom du héros** | `Title` | prénom / pseudo | Identité |
| **Défis** | `Relation` → Défis 365 | lie les 365 lignes | Base de tous les Rollups |
| **Défis validés** | `Rollup` | Défis · `Validé` · **Checked** | Compte des cases cochées |
| **XP totale** | `Rollup` | Défis · `XP gagnée` · **Sum** | Base niveau/rang/barres |
| **Niveau** | `Formula` | 1 → 50 (§3.3) | Palier de progression |
| **Rang** | `Formula` | 1 → 10 = `ceil(Niveau/5)` (§3.4) | Bloc narratif |
| **Titre de rang** | `Formula` | « Éveil » → « Légende » (§3.4) | Identité portée |
| **% année** | `Formula` | `Défis validés / 365` (§3.5) | Avancement annuel |
| **% niveau** | `Formula` | progression vers niveau +1 (§3.6) | Remplissage barre XP |
| **XP borne actuelle** | `Formula` | borne d'entrée du niveau courant (§3.6) | Intermédiaire % niveau |
| **XP borne suivante** | `Formula` | borne du niveau +1 (§3.6) | Intermédiaire % niveau |
| **Série depuis** | `Date` | date de reprise de série | Base série (méthode C) |
| **Série courante** | `Formula` ou `Number` | jours consécutifs (§3.7) | Compteur 🔥 |
| **Record de série** | `Number` | saisie manuelle | Meilleure série |
| **Bouclier** | `Number` | 0 → 2 (se gagne, jamais s'achète) | Anti-rupture |
| **Journée de grâce** | `Checkbox` | disponible / utilisée | Grâce hebdo (1/sem) |
| **Points Discipline** | `Rollup` | Défis · `Pts Discipline` · **Sum** | Jauge Discipline |
| **Points Courage** | `Rollup` | Défis · `Pts Courage` · **Sum** | Jauge Courage |
| **Points Vitalité** | `Rollup` | Défis · `Pts Vitalité` · **Sum** | Jauge Vitalité |
| **Points Charisme** | `Rollup` | Défis · `Pts Charisme` · **Sum** | Jauge Charisme |
| **Points Mental** | `Rollup` | Défis · `Pts Mental` · **Sum** | Jauge Mental |
| **Points Savoir** | `Rollup` | Défis · `Pts Savoir` · **Sum** | Jauge Savoir |
| **Points Création** | `Rollup` | Défis · `Pts Création` · **Sum** | Jauge Création |
| **Points Prospérité** | `Rollup` | Défis · `Pts Prospérité` · **Sum** | Jauge Prospérité |
| **Jauge Discipline** … **Jauge Prospérité** (×8) | `Formula` | barre `▓░` + points (§3.8) | Affichage radar |
| **Barre XP** | `Formula` | barre `▓░` + % niveau (§3.8) | Barre du dashboard |

---

# 3. Formules Notion finales — prêtes à coller

> **Mode d'emploi.** Chaque bloc précise **la base**, **la propriété** et **le code exact**. Colle tel quel dans `Add property → Formula → Edit`. Ne renomme pas les propriétés sans mettre à jour les `prop("…")`.

## 3.1 XP du défi
**Base :** Défis 365 · **Propriété :** `XP` (Formula).

```notion
prop("Difficulté") * 10
```

## 3.2 XP gagnée (préparation du cumul)
**Base :** Défis 365 · **Propriété :** `XP gagnée` (Formula). Sert de source au Rollup Sum du Profil.

```notion
if(prop("Validé"), prop("XP"), 0)
```

## 3.2 bis XP cumulée (totale)
**Base :** Profil · **Propriété :** `XP totale` (type **Rollup**, pas Formula).
**Réglage :** Relation = `Défis` · Property = `XP gagnée` · Calculate = **Sum**.
→ Somme de toute l'XP réellement gagnée. (Aucun code à coller : c'est un Rollup.)

## 3.3 Niveau (1 → 50)
**Base :** Profil · **Propriété :** `Niveau` (Formula). Lit `XP totale`. **49 parenthèses fermantes** en fin.

```notion
if(prop("XP totale") >= 25280, 50,
if(prop("XP totale") >= 24620, 49,
if(prop("XP totale") >= 24020, 48,
if(prop("XP totale") >= 23480, 47,
if(prop("XP totale") >= 23000, 46,
if(prop("XP totale") >= 22230, 45,
if(prop("XP totale") >= 21525, 44,
if(prop("XP totale") >= 20885, 43,
if(prop("XP totale") >= 20310, 42,
if(prop("XP totale") >= 19800, 41,
if(prop("XP totale") >= 18890, 40,
if(prop("XP totale") >= 18055, 39,
if(prop("XP totale") >= 17295, 38,
if(prop("XP totale") >= 16610, 37,
if(prop("XP totale") >= 16000, 36,
if(prop("XP totale") >= 15135, 35,
if(prop("XP totale") >= 14345, 34,
if(prop("XP totale") >= 13625, 33,
if(prop("XP totale") >= 12975, 32,
if(prop("XP totale") >= 12400, 31,
if(prop("XP totale") >= 11610, 30,
if(prop("XP totale") >= 10885, 29,
if(prop("XP totale") >= 10225, 28,
if(prop("XP totale") >= 9630, 27,
if(prop("XP totale") >= 9100, 26,
if(prop("XP totale") >= 8430, 25,
if(prop("XP totale") >= 7815, 24,
if(prop("XP totale") >= 7255, 23,
if(prop("XP totale") >= 6750, 22,
if(prop("XP totale") >= 6300, 21,
if(prop("XP totale") >= 5750, 20,
if(prop("XP totale") >= 5245, 19,
if(prop("XP totale") >= 4785, 18,
if(prop("XP totale") >= 4370, 17,
if(prop("XP totale") >= 4000, 16,
if(prop("XP totale") >= 3570, 15,
if(prop("XP totale") >= 3175, 14,
if(prop("XP totale") >= 2815, 13,
if(prop("XP totale") >= 2490, 12,
if(prop("XP totale") >= 2200, 11,
if(prop("XP totale") >= 1890, 10,
if(prop("XP totale") >= 1605, 9,
if(prop("XP totale") >= 1345, 8,
if(prop("XP totale") >= 1110, 7,
if(prop("XP totale") >= 900, 6,
if(prop("XP totale") >= 685, 5,
if(prop("XP totale") >= 485, 4,
if(prop("XP totale") >= 305, 3,
if(prop("XP totale") >= 145, 2,
1)))))))))))))))))))))))))))))))))))))))))))))))))
```

## 3.4 Rang (1 → 10) & Titre de rang
**Base :** Profil · **Propriété :** `Rang` (Formula). 5 niveaux = 1 rang.

```notion
ceil(prop("Niveau") / 5)
```

**Propriété :** `Titre de rang` (Formula) — mappe le rang sur le canon (Éveil → Légende) :

```notion
if(prop("Rang") == 1, "1 · Éveil — l'Éveillé·e",
if(prop("Rang") == 2, "2 · Élan",
if(prop("Rang") == 3, "3 · Apprenti",
if(prop("Rang") == 4, "4 · Constant — le·la Constant·e",
if(prop("Rang") == 5, "5 · Aguerri — l'Aguerri·e",
if(prop("Rang") == 6, "6 · Affirmé — l'Affirmé·e",
if(prop("Rang") == 7, "7 · Artisan",
if(prop("Rang") == 8, "8 · Maître",
if(prop("Rang") == 9, "9 · Mentor — le·la Mentor·e",
"10 · Légende")))))))))
```

## 3.5 % année (défis validés sur 365)
**Base :** Profil · **Propriété :** `% année` (Formula). Garde 1 décimale.

```notion
round(prop("Défis validés") / 365 * 1000) / 10
```

Variante affichée en texte (propriété séparée si tu veux le libellé) :

```notion
format(round(prop("Défis validés") / 365 * 1000) / 10) + " % de l'année"
```

## 3.6 % niveau (progression vers le niveau suivant)
Trois propriétés dans **Profil**, dans cet ordre.

**a) `XP borne actuelle`** (Formula) — borne d'entrée du niveau courant :

```notion
if(prop("Niveau") >= 50, 25280,
if(prop("Niveau") == 49, 24620,
if(prop("Niveau") == 48, 24020,
if(prop("Niveau") == 47, 23480,
if(prop("Niveau") == 46, 23000,
if(prop("Niveau") == 45, 22230,
if(prop("Niveau") == 44, 21525,
if(prop("Niveau") == 43, 20885,
if(prop("Niveau") == 42, 20310,
if(prop("Niveau") == 41, 19800,
if(prop("Niveau") == 40, 18890,
if(prop("Niveau") == 39, 18055,
if(prop("Niveau") == 38, 17295,
if(prop("Niveau") == 37, 16610,
if(prop("Niveau") == 36, 16000,
if(prop("Niveau") == 35, 15135,
if(prop("Niveau") == 34, 14345,
if(prop("Niveau") == 33, 13625,
if(prop("Niveau") == 32, 12975,
if(prop("Niveau") == 31, 12400,
if(prop("Niveau") == 30, 11610,
if(prop("Niveau") == 29, 10885,
if(prop("Niveau") == 28, 10225,
if(prop("Niveau") == 27, 9630,
if(prop("Niveau") == 26, 9100,
if(prop("Niveau") == 25, 8430,
if(prop("Niveau") == 24, 7815,
if(prop("Niveau") == 23, 7255,
if(prop("Niveau") == 22, 6750,
if(prop("Niveau") == 21, 6300,
if(prop("Niveau") == 20, 5750,
if(prop("Niveau") == 19, 5245,
if(prop("Niveau") == 18, 4785,
if(prop("Niveau") == 17, 4370,
if(prop("Niveau") == 16, 4000,
if(prop("Niveau") == 15, 3570,
if(prop("Niveau") == 14, 3175,
if(prop("Niveau") == 13, 2815,
if(prop("Niveau") == 12, 2490,
if(prop("Niveau") == 11, 2200,
if(prop("Niveau") == 10, 1890,
if(prop("Niveau") == 9, 1605,
if(prop("Niveau") == 8, 1345,
if(prop("Niveau") == 7, 1110,
if(prop("Niveau") == 6, 900,
if(prop("Niveau") == 5, 685,
if(prop("Niveau") == 4, 485,
if(prop("Niveau") == 3, 305,
if(prop("Niveau") == 2, 145,
0)))))))))))))))))))))))))))))))))))))))))))))))))
```

**b) `XP borne suivante`** (Formula) — borne du niveau +1 (plafond 26 000 au niv. 50) :

```notion
if(prop("Niveau") >= 50, 26000,
if(prop("Niveau") == 49, 25280,
if(prop("Niveau") == 48, 24620,
if(prop("Niveau") == 47, 24020,
if(prop("Niveau") == 46, 23480,
if(prop("Niveau") == 45, 23000,
if(prop("Niveau") == 44, 22230,
if(prop("Niveau") == 43, 21525,
if(prop("Niveau") == 42, 20885,
if(prop("Niveau") == 41, 20310,
if(prop("Niveau") == 40, 19800,
if(prop("Niveau") == 39, 18890,
if(prop("Niveau") == 38, 18055,
if(prop("Niveau") == 37, 17295,
if(prop("Niveau") == 36, 16610,
if(prop("Niveau") == 35, 16000,
if(prop("Niveau") == 34, 15135,
if(prop("Niveau") == 33, 14345,
if(prop("Niveau") == 32, 13625,
if(prop("Niveau") == 31, 12975,
if(prop("Niveau") == 30, 12400,
if(prop("Niveau") == 29, 11610,
if(prop("Niveau") == 28, 10885,
if(prop("Niveau") == 27, 10225,
if(prop("Niveau") == 26, 9630,
if(prop("Niveau") == 25, 9100,
if(prop("Niveau") == 24, 8430,
if(prop("Niveau") == 23, 7815,
if(prop("Niveau") == 22, 7255,
if(prop("Niveau") == 21, 6750,
if(prop("Niveau") == 20, 6300,
if(prop("Niveau") == 19, 5750,
if(prop("Niveau") == 18, 5245,
if(prop("Niveau") == 17, 4785,
if(prop("Niveau") == 16, 4370,
if(prop("Niveau") == 15, 4000,
if(prop("Niveau") == 14, 3570,
if(prop("Niveau") == 13, 3175,
if(prop("Niveau") == 12, 2815,
if(prop("Niveau") == 11, 2490,
if(prop("Niveau") == 10, 2200,
if(prop("Niveau") == 9, 1890,
if(prop("Niveau") == 8, 1605,
if(prop("Niveau") == 7, 1345,
if(prop("Niveau") == 6, 1110,
if(prop("Niveau") == 5, 900,
if(prop("Niveau") == 4, 685,
if(prop("Niveau") == 3, 485,
if(prop("Niveau") == 2, 305,
145)))))))))))))))))))))))))))))))))))))))))))))))))
```

**c) `% niveau`** (Formula) :

```notion
round((prop("XP totale") - prop("XP borne actuelle")) / (prop("XP borne suivante") - prop("XP borne actuelle")) * 100)
```

## 3.7 Série courante (jours consécutifs)
**Base :** Profil · **Propriété :** `Série courante`. **Méthode recommandée (C) :** stocke une `Date` **`Série depuis`** (date de reprise de la série en cours), puis :

```notion
if(empty(prop("Série depuis")), 0,
  dateBetween(now(), prop("Série depuis"), "days") + 1)
```

À la rupture, l'utilisateur remet `Série depuis` à la date de reprise (seul geste manuel, aligné avec le Filet de Reprise). *Alternative simple :* `Série courante` en `Number` incrémenté à la main.

## 3.8 Points de stat & les 8 jauges du radar (barres ▓░)

**Étape 1 — Points de stat par défi.** Base **Défis 365** · propriété `Points stat` (Formula) : facile (1–3) → +1, moyen (4–6) → +2, dur (7–10) → +3.

```notion
if(prop("Validé"),
  if(prop("Difficulté") <= 3, 1,
  if(prop("Difficulté") <= 6, 2, 3)),
0)
```

**Étape 2 — Isoler chaque stat.** Base **Défis 365** · 8 formules `Pts <Stat>`. Exemple `Pts Discipline` :

```notion
if(prop("Stat") == "Discipline", prop("Points stat"), 0)
```

Répète en remplaçant `"Discipline"` par `"Courage"`, `"Vitalité"`, `"Charisme"`, `"Mental"`, `"Savoir"`, `"Création"`, `"Prospérité"`. Puis dans **Profil** : 8 Rollups **Sum** (`Points Discipline` sur `Pts Discipline`, etc.).

**Étape 3 — La jauge ASCII.** Base **Profil** · une Formula par stat. Exemple `Jauge Discipline` (plafond d'affichage 100 pts = barre pleine) :

```notion
slice("▓▓▓▓▓▓▓▓▓▓", 0, floor(min(prop("Points Discipline"), 100) / 10))
+ slice("░░░░░░░░░░", 0, 10 - floor(min(prop("Points Discipline"), 100) / 10))
+ "  " + format(prop("Points Discipline")) + " pts"
```

Répète pour les 7 autres stats (change `Points Discipline` et le nom de la propriété). Rend p.ex. `▓▓▓▓▓▓▓▓░░  82 pts`.

**Variante `repeat()` (si disponible, plus lisible) :**

```notion
repeat("▓", floor(min(prop("Points Discipline"), 100) / 10)) +
repeat("░", 10 - floor(min(prop("Points Discipline"), 100) / 10)) +
"  " + format(prop("Points Discipline")) + " pts"
```

## 3.9 Barre XP du dashboard
**Base :** Profil · **Propriété :** `Barre XP` (Formula) — lit `% niveau`.

```notion
slice("▓▓▓▓▓▓▓▓▓▓", 0, floor(prop("% niveau") / 10))
+ slice("░░░░░░░░░░", 0, 10 - floor(prop("% niveau") / 10))
+ "  " + format(prop("% niveau")) + " %"
```

## 3.10 Bouclier (affichage bienveillant)
**Base :** Profil · **Propriété :** `Bouclier affiché` (Formula) — lit le `Number` `Bouclier` (0→2). Rend un rappel visuel, jamais punitif.

```notion
if(prop("Bouclier") >= 2, "🛡️🛡️  Deux boucliers — série protégée",
if(prop("Bouclier") == 1, "🛡️  Un bouclier — une rupture pardonnée",
"Aucun bouclier — gagne-le en tenant ta série"))
```

## 3.11 % quête
**Base :** Quêtes · **Propriété :** `% quête` (Formula). Afficher en pourcentage / barre.

```notion
if(prop("Cible") == 0, 0, round(prop("Progression") / prop("Cible") * 100))
```

---

# 4. Vues à créer, page par page

Une « vue » = une lecture filtrée/triée de la même base (pas une copie). Toutes les vues d'une base se synchronisent.

| Page | Nom de la vue | Type | Base source | Filtre | Tri | Regroupement |
|---|---|---|---|---|---|---|
| **Défi du jour** / Dashboard | **Défi du jour** | Table (limite 1) ou lien filtré | Défis 365 | `Statut is À venir` | `Jour` ascending | — |
| Mes 365 défis | **Tous les défis** | Table | Défis 365 | aucun | `Jour` ascending | — |
| Mes 365 défis | **Défis validés** | Table | Défis 365 | `Validé is checked` | `Date de validation` descending | — |
| Mes 365 défis | **Par mois** | Board | Défis 365 | aucun | `Jour` ascending | `Mois` |
| Mes 365 défis / Journal | **Mini-défis (jour sans)** | Table (ou gallery) | Défis 365 | `Difficulté ≤ 2` | `Jour` ascending | — |
| Calendrier | **Calendrier 365** | Calendar | Défis 365 | aucun | — (sur `Date de validation`) | — |
| Calendrier | **Heatmap mensuelle** | Board | Défis 365 | aucun | `Jour` ascending | `Mois` |
| Badges | **Galerie** | Gallery (couverture = `Image`) | Badges | aucun | `Rareté` | `Catégorie de badge` |
| Badges | **Débloqués** | Gallery | Badges | `Débloqué is checked` | `Débloqué le` descending | — |
| Badges | **Verrouillés** | Gallery | Badges | `Débloqué is not checked` | `Rareté` | — |
| Quêtes | **En cours** | Table ou Board | Quêtes | `État is En cours` | `Période` ascending | `Type` |
| Quêtes | **Toutes** | Table | Quêtes | aucun | `Type` | — |
| Journal | **Mon journal** | Liste (List) | Journal / Validation | aucun | `Date` descending | — |
| Personnage | *(pas une vue de base)* | Page assemblant les propriétés du Profil (8 jauges + rang + XP) | Profil | — | — | — |
| Dashboard | *(pas une vue de base)* | Page assemblant callouts + vue Défi du jour + Barre XP + vue Quêtes | — | — | — | — |

**Réglages d'affichage clés :**
- **Défi du jour :** masquer toutes les colonnes sauf `Titre`, `Stat` (puce colorée), `Difficulté`, `XP`, `Validé`. Sur mobile, ça tient sans scroll.
- **Statut couleurs :** `Validé ✓` = vert · tout le reste = gris neutre. **Aucun rouge.**
- **Galerie badges :** carte petite/moyenne, couverture `Image`, afficher `Nom` + `Rareté` + `Débloqué`. Secrets = image silhouette + « ??? » tant que non débloqué.
- **Calendrier :** cases `Validé` cochées ressortent en vert via le `Statut`.

---

# 5. Relations & rollups

**Le graphe de données** (une seule relation structurante + des rollups qui agrègent) :

```
Défis 365  ──(Relation « Profil »)──►  Profil  ◄──(Relation « Défis »)──  Défis 365
     ▲                                    │
     │ (Relation « Défi lié »)            │ agrège via Rollups :
     │                                    ├─ Défis validés  (Count checked de « Validé »)
Journal / Validation                      ├─ XP totale      (Sum de « XP gagnée »)
                                          └─ Points <Stat> ×8 (Sum de « Pts <Stat> »)
```

**5.1 Relation Défis 365 ↔ Profil (obligatoire).**
1. Dans **Profil**, crée la propriété `Défis` (`Relation` → base Défis 365). Active « Show on Défis 365 » → une propriété réciproque `Profil` apparaît dans Défis 365.
2. Ouvre la ligne unique du Profil, et dans `Défis`, **sélectionne les 365 lignes** (ou clique « Add all »). C'est ce lien qui nourrit tous les Rollups.

**5.2 Rollups dans Profil (10 à créer).**

| Rollup | Relation | Propriété | Calcul |
|---|---|---|---|
| `Défis validés` | Défis | `Validé` | **Checked** (count) |
| `XP totale` | Défis | `XP gagnée` | **Sum** |
| `Points Discipline` | Défis | `Pts Discipline` | **Sum** |
| `Points Courage` | Défis | `Pts Courage` | **Sum** |
| `Points Vitalité` | Défis | `Pts Vitalité` | **Sum** |
| `Points Charisme` | Défis | `Pts Charisme` | **Sum** |
| `Points Mental` | Défis | `Pts Mental` | **Sum** |
| `Points Savoir` | Défis | `Pts Savoir` | **Sum** |
| `Points Création` | Défis | `Pts Création` | **Sum** |
| `Points Prospérité` | Défis | `Pts Prospérité` | **Sum** |

> **Pourquoi passer par `XP gagnée` et `Pts <Stat>` plutôt que filtrer le Rollup ?** Cette méthode « propriété intermédiaire » marche dans **toutes** les versions de Notion (les filtres de Rollup ne sont pas toujours disponibles). Le calcul est déjà encapsulé dans la formule de la base Défis (`if(Validé, …)` / `if(Stat==…, …)`), le Rollup n'a plus qu'à sommer.

**5.3 Relation Journal ↔ Défis 365 (optionnelle).** Dans Journal, `Défi lié` (`Relation` → Défis 365) pour rattacher chaque jour vécu au défi relevé. Utile pour le journal de bord et un calcul de série avancé ; non requis pour le moteur XP.

---

# 6. Ordre de construction numéroté

> Total ≈ **10–12 h** (2 sessions). Coche au fur et à mesure. Ne saute pas l'ordre : chaque étape dépend de la précédente.

**ÉTAPE 1 — Page racine & base reine (≈ 45 min)**
1.1 Crée la page racine `🏔️ Cap365 — Modèle`.
1.2 À l'intérieur, crée la sous-page `🗂️ Mes 365 défis` et la base inline **Défis 365**.
1.3 Ajoute toutes les propriétés « saisie » de §2.1 : Jour, Catégorie, Stat, Difficulté, Temps, Coût, Validé, Date de validation, Statut, Ressenti, Mois, Instructions, Pourquoi, Mini-défi.
1.4 Configure `Select Catégorie` (15 options + couleurs) et `Select Stat` (8 options).

**ÉTAPE 2 — Moteur de calcul côté Défis (≈ 45 min)**
2.1 Colle `XP` (§3.1).
2.2 Colle `Points stat` (§3.8 étape 1).
2.3 Colle `XP gagnée` (§3.2).
2.4 Colle les 8 formules `Pts <Stat>` (§3.8 étape 2).

**ÉTAPE 3 — Base Profil & relation (≈ 30 min)**
3.1 Crée la sous-page `📊 Personnage / Radar` + base inline **Profil**, ajoute **une seule ligne** (« Mon héros »).
3.2 Crée la relation `Défis` (§5.1) et lie les 365 lignes.
3.3 Crée les 10 Rollups (§5.2).

**ÉTAPE 4 — Formules du héros (≈ 1 h)**
4.1 `Niveau` (§3.3).
4.2 `Rang` + `Titre de rang` (§3.4).
4.3 `% année` (§3.5).
4.4 `XP borne actuelle`, `XP borne suivante`, `% niveau` (§3.6).
4.5 Les 8 `Jauge <Stat>` (§3.8 étape 3) + `Barre XP` (§3.9).
4.6 Série : `Série depuis` (Date) + `Série courante` (§3.7). Ajoute `Bouclier` (Number), `Bouclier affiché` (§3.10), `Journée de grâce` (Checkbox), `Record de série` (Number).

**ÉTAPE 5 — Import des 365 défis (≈ 1 h)**
5.1 Prépare le CSV (§8) et importe-le dans la base Défis 365.
5.2 Vérifie sur 5 lignes témoins que `XP`, `Points stat`, `XP gagnée` se calculent.

**ÉTAPE 6 — Vues de la base Défis (≈ 45 min)**
6.1 Crée Tous les défis, Défi du jour, Défis validés, Par mois, Mini-défis (§4).
6.2 Règle les couleurs de `Statut` (Validé = vert, reste = gris).

**ÉTAPE 7 — Calendrier (≈ 30 min)**
7.1 Sous-page `🗓️ Calendrier` : vue Calendar `Calendrier 365` + board `Heatmap mensuelle` (§4).

**ÉTAPE 8 — Dashboard (≈ 1 h)**
8.1 Sous-page `🏠 Dashboard — Aujourd'hui` : callout orange 🔥 Série + Niveau ; callout bleu nuit Défi du jour ; incorpore la vue « Défi du jour » ; affiche `Barre XP` ; incorpore « Quêtes en cours ».
8.2 Sous-page `⚔️ Défi du jour` : vue liée « Défi du jour » en pleine page.

**ÉTAPE 9 — Personnage / Radar (≈ 45 min)**
9.1 Sur `📊 Personnage / Radar`, affiche les 8 jauges + Titre de rang + Niveau + XP totale + synthèse forces / axe en retrait.

**ÉTAPE 10 — Bases satellites (≈ 1 h 30)**
10.1 `🏆 Badges` : base + 24 lignes pré-remplies (§2.3) + vues Galerie / Débloqués / Verrouillés.
10.2 `🎯 Quêtes` : base (§2.4) + formule `% quête` (§3.11) + vues En cours / Toutes.
10.3 `📔 Journal` : base optionnelle (§2.2) + vue Mon journal + section « Jour sans / Reprise » (ton doux).
10.4 `🎁 Récompenses` : galerie de certificats Canva + titre porté.

**ÉTAPE 11 — Onboarding & réglages (≈ 45 min)**
11.1 `🧭 Accueil — Crée ton personnage` : colle le contenu exact de §7.2.
11.2 `⚙️ Réglages` : aide, instructions de duplication (§7.3), tableau de bornes, checklist de purge.

**ÉTAPE 12 — QA & mobile (≈ 45 min)**
12.1 Déroule la checklist §9 (dont le test persona jour 128 / ~6 240 XP → Rang 4 Constant).
12.2 Ouvre chaque page dans l'app Notion mobile ; vérifie l'absence de scroll horizontal et de promesse interdite.

**ÉTAPE 13 — Duplication & livraison (≈ 30 min)**
13.1 Purge les données de test (§7.1). Publie « Allow duplicate as template ». Teste le lien en navigation privée.

---

# 7. Rendre le template dupliquable + onboarding

## 7.1 Publier en template dupliquable
1. Ouvre la page racine `🏔️ Cap365 — Modèle` (version propre, exemple neutre).
2. `Share` (haut droite) → active **Publish** / **Share to web**.
3. Active **« Allow duplicate as template »** → Notion ajoute un bouton **Duplicate** en haut de la page publiée.
4. Récupère le **lien public** (c'est ce lien qu'on livre au client).
5. **Test en navigation privée :** ouvre le lien comme un inconnu, clique Duplicate → tu obtiens une copie **dans ton espace**, indépendante ; l'original reste intact.

**Hygiène avant publication (checklist de purge) :**
- [ ] Décocher les défis de test (`Validé` → vide) ; `Statut` → `À venir`.
- [ ] `Série depuis` → vide ; `Bouclier` → 0 ; `Record de série` → 0 ; `Journée de grâce` → disponible.
- [ ] Badges : tous `Débloqué` décochés, `Débloqué le` vide.
- [ ] Quêtes : `Progression` → 0, `État` → `À venir`.
- [ ] Journal : vider les lignes de test.
- [ ] Aucune info perso, aucune promesse interdite, aucun rouge punitif.

## 7.2 Page d'accueil « Crée ton personnage » — contenu EXACT à coller

```
🏔️  Bienvenue dans Cap365 — Crée ton personnage

« Un défi par jour. Une version de toi par an. »

▸ 1. Duplique ce Cap365 dans ton espace  → [bouton Duplicate, en haut de page]
▸ 2. Écris ton nom de héros (page « Personnage / Radar »)
▸ 3. Note ton point de départ : « Dans 365 jours, je veux être quelqu'un qui… »
▸ 4. Va sur « Dashboard — Aujourd'hui » et relève ton tout premier défi (offert, facile)

💡 Tout est calculé pour toi : coche un défi, ton XP monte,
   ton radar grandit, ta série tient. Ta seule mission : revenir demain.

⚠️ Cap365 ne promet ni richesse, ni vie parfaite. On récompense l'effort
   et la régularité. Ce que tu construis t'appartient vraiment.
```

**À ajouter sur cette page :**
- Un **callout orange « 🎁 1er défi offert »** (difficulté 1, gratifiant) → victoire immédiate.
- Un **champ texte « Mon pourquoi »** (contrat avec soi-même), réutilisé sur l'écran de reprise.
- Un lien vers la vidéo « Premiers pas » (90 s).

## 7.3 Instructions de duplication (à donner au client)

```
Comment installer ton Cap365 (2 minutes)

1. Sur ordinateur (recommandé la 1re fois) : ouvre le lien reçu, clique
   « Duplicate » en haut à droite. Connecte-toi (ou crée un compte Notion gratuit).
2. La copie atterrit dans TON espace Notion — privée, à toi, modifiable.
3. Sur téléphone : installe l'app Notion (iOS/Android, gratuite), connecte-toi
   avec le même compte → ton Cap365 est dans ta poche.
4. Épingle « Dashboard — Aujourd'hui » en favori pour la retrouver en 1 tap.
5. Active le mode sombre dans les réglages Notion pour l'ambiance « carnet de quête ».

Besoin d'aide ? La vidéo de 90 s « Premiers pas » est dans la page d'accueil.
```

---

# 8. Pré-remplissage — importer les 365 défis (CSV)

**Source :** les 12 fichiers `defis/mois-01…mois-12`. Chaque défi y est déjà normalisé (Catégorie, Stat, Difficulté, XP, Stat +N, Temps, Coût, Objectif, Pourquoi, Instructions, variantes).

**8.1 Colonnes CSV attendues** (l'en-tête doit matcher les propriétés Notion à importer — Notion crée/mappe les colonnes automatiquement) :

| Colonne CSV | → Propriété Notion | Type après import | Note |
|---|---|---|---|
| `Titre` | Titre | Title | Nom du défi (« Jour N — … » ou intitulé de l'objectif) |
| `Jour` | Jour | Number | 1 → 365 |
| `Catégorie` | Catégorie | Select | 1 des 15 catégories |
| `Stat` | Stat | Select | 1 des 8 stats |
| `Difficulté` | Difficulté | Number | 1 → 10 |
| `Temps` | Temps | Select | ex. « 5 min » |
| `Coût` | Coût | Select | ex. « 0 € » |
| `Mois` | Mois | Select | « Mois 1 » … « Mois 12 » |
| `Instructions` | Instructions | Text | les puces « comment faire » |
| `Pourquoi` | Pourquoi | Text | phrase de sens |
| `Mini-défi` | Mini-défi | Text | variante facile / < 10 min |

> **Ne PAS mettre dans le CSV** : `XP`, `Points stat`, `XP gagnée`, `Pts <Stat>`, `Statut`, `Validé`, `Date de validation`, `Ressenti`. Ce sont des **formules ou des champs de saisie utilisateur** ; Notion les calcule/laisse vides après import. Si une colonne CSV porte le même nom qu'une formule, Notion refusera de l'écraser — d'où l'exclusion.

**8.2 Exemple de lignes CSV** (les 3 premiers jours, tirés de `mois-01`) :

```csv
Titre,Jour,Catégorie,Stat,Difficulté,Temps,Coût,Mois,Instructions,Pourquoi,Mini-défi
"Jour 1 — Le premier pas qui compte",1,"Sortie de zone de confort",Courage,1,"5 min","0 €","Mois 1","Complète : « Dans 365 jours, je veux être quelqu'un qui… », relis à voix haute.","Nommer une intention transforme un souhait en cap concret.","Écris trois mots qui décrivent ce toi futur."
"Jour 2 — Le lit fait, la journée gagnée",2,Discipline,Discipline,1,"3 min","0 €","Mois 1","Au réveil, tire les draps et lisse la couverture avant tout.","La première tâche accomplie envoie un signal de contrôle.","Range l'oreiller et tire la couette."
"Jour 3 — Le grand verre du matin",3,Santé,Vitalité,1,"2 min","0 €","Mois 1","Bois un grand verre d'eau dans les 10 min après le réveil.","Le corps est déshydraté au réveil ; ce geste installe un réflexe santé.","Quelques gorgées suffisent."
```

**8.3 Procédure d'import Notion :**
1. Ouvre chaque `defis/mois-XX.md`, extrais les champs de chaque « ### Jour N » vers un tableur (1 ligne = 1 jour), respecte les 11 colonnes ci-dessus. Exporte en **CSV UTF-8** (12 fichiers, ou 1 CSV global de 365 lignes).
2. Dans Notion, ouvre la base **Défis 365** → menu `•••` → **Merge with CSV** (import dans une base existante, pour conserver tes formules) — ou `Import → CSV` puis recopie les propriétés-formules.
3. Après import : vérifie que `Select Catégorie` / `Stat` / `Temps` / `Coût` / `Mois` ont bien récupéré leurs options (sinon crée les options manquantes une fois, elles se réutilisent).
4. Contrôle 5 lignes : `XP` = `Difficulté × 10`, `Points stat` cohérent.

---

# 9. QA — checklist de vérification

## 9.1 Test de la persona (le contrôle canonique)

**Scénario :** joueur au **jour 128**, avec **~6 240 XP** cumulée (mix de difficultés). Attendu : **Niveau 21 · Rang 4 · « Constant »**.

Vérification pas à pas :
1. **XP totale = 6 240.** Coche des défis jusqu'à atteindre ~6 240 d'`XP gagnée` cumulée (le Rollup Sum doit afficher 6 240).
2. **Niveau :** la formule §3.3 renvoie **21** (car `6240 ≥ 6300` est faux, `6240 ≥ 5750` est vrai → attention : 6240 franchit la borne 20 (5 750) mais pas 21 (6 300) → **Niveau 20**… voir note ci-dessous). 
3. **Rang :** `ceil(Niveau/5)`.
4. **Titre de rang :** doit afficher « 4 · Constant — le·la Constant·e ».

> **⚠️ Point de calibrage à valider (important).** Avec la cascade §3.3, **6 240 XP tombe au Niveau 20** (borne 20 = 5 750 ; borne 21 = 6 300), soit `ceil(20/5) = Rang 4`. Le **Rang 4 « Constant » est donc confirmé** ✅ — c'est la donnée canonique clé de la persona. Pour obtenir **Niveau 21** exactement, il faut **≥ 6 300 XP** : si la spec persona exige Niveau 21, monter la persona à ~6 300 XP (ex. quelques défis de plus). Dans les deux cas (6 240 ou 6 300 XP), le **Rang reste 4 / Constant**, qui est l'assertion à ne jamais casser. Cohérent aussi avec le canon des **bornes de rang** : Constant s'ouvre à 4 000 XP, Aguerri à 6 300 → à 6 240 XP on est bien dans le rang Constant.

## 9.2 Checklist fonctionnelle complète

**Moteur XP / niveau / rang**
- [ ] Cocher un défi difficulté 7 ajoute **70** à `XP totale`.
- [ ] Décocher le retire (l'XP « affichée » bouge, mais **rien n'est puni** : c'est réversible sans culpabilité).
- [ ] `Niveau` grimpe aux bonnes bornes (tester 900 → Niv 6, 4 000 → Niv 16, 6 300 → Niv 21).
- [ ] `Rang` = `ceil(Niveau/5)` (Niv 21 → Rang 5 ? **non**, `ceil(21/5)=5`… vérifier : voir note). *Contrôle canon : à ~6 240–6 300 XP le titre affiché doit être « Constant » (Rang 4).* 
- [ ] `Titre de rang` affiche le bon libellé pour chaque rang 1→10.

> **Cohérence Rang ↔ Niveau (à connaître).** `ceil(Niveau/5)` : Niv 1–5 → R1, 6–10 → R2, 11–15 → R3, 16–20 → R4, 21–25 → R5. Donc **Niveau 20 = Rang 4 « Constant »**, et Niveau 21 basculerait en Rang 5. La persona canonique (jour 128, ~6 240 XP) donne **Niveau 20 → Rang 4 Constant** ✅. Si tu veux afficher « Niveau 21 » ET « Rang 4 » simultanément, ajuste soit la persona à Niveau 20, soit décale le mapping de titre. **La vérité produit à garantir : à ~6 240 XP, le héros est “Constant”.**

**Radar & jauges**
- [ ] Chaque stat cochée fait monter la bonne jauge (`▓░`) dans Profil.
- [ ] Une stat à 0 affiche `░░░░░░░░░░  0 pts` (jamais d'erreur/vide).
- [ ] Les 8 jauges s'affichent alignées, police monospace conservée sur mobile.

**% année & % niveau**
- [ ] `% année` = `Défis validés / 365` avec 1 décimale.
- [ ] `% niveau` reste entre 0 et 100 ; la `Barre XP` se remplit proportionnellement.

**Série & anti-abandon**
- [ ] `Série courante` = jours depuis `Série depuis` (+1). Vider `Série depuis` → 0.
- [ ] `Bouclier affiché` change de message à 0 / 1 / 2 boucliers.
- [ ] Page « Jour sans / Reprise » : ton doux, réassurance « ta progression est intacte », mini-défi accessible.

**Vues & écrans**
- [ ] Vue « Défi du jour » pointe le prochain défi non fait.
- [ ] Calendrier se remplit à chaque `Validé` coché (vert via Statut).
- [ ] Galerie badges : verrouillés en gris/silhouette, secrets en « ??? ».
- [ ] Dashboard tient **sans scroll horizontal** sur mobile.

**Honnêteté & marque**
- [ ] Aucun rouge punitif nulle part ; jour manqué en gris neutre `#8A93A2`.
- [ ] Aucune promesse interdite (richesse / bonheur permanent / vie parfaite).
- [ ] Marque cohérente : Cairn / Cap365, emojis de stat identiques partout.

**Livraison**
- [ ] Données de test purgées (§7.1).
- [ ] Lien « Duplicate » testé en navigation privée → copie indépendante.
- [ ] App mobile : chaque page lisible, checkbox de validation atteignable au pouce.

---

> **Cap365 — un carnet de quête premium, calme et confiant.** On félicite sans crier, on guide sans infantiliser. Tout est calculé pour le héros : il n'a qu'une chose à faire — **revenir demain.**
>
> *Fin du template Notion final — prêt à construire.*
