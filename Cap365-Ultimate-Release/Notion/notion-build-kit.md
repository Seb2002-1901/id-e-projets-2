# Kit de construction Notion — « l'app sans app »

> **Cap365 — 365 Défis de Vie** · marque mère **Cairn**
> *Un défi par jour. Une version de toi par an. — Le RPG de ta vie réelle.*
>
> **Ce que tu tiens entre les mains :** le plan de montage complet, vis par vis, pour fabriquer en quelques jours — seul·e, sans coder, à coût ~0 € — un produit qui **donne la sensation d'une application mobile premium**, alors qu'il tourne entièrement dans Notion. Schémas de bases de données, formules prêtes à coller, vues à créer, charte à appliquer, livraison client, et un Plan B sans Notion (Google Sheets + PDF interactif).
>
> Correspond aux jours **J5–J6** de la roadmap 14 jours (« Monter le moteur Notion »), avec les prolongements J7–J12 (anti-abandon, badges, récompenses, livraison).

> ⚠️ **Cadre d'honnêteté radicale (non négociable).** Aucune page, aucun texte de ce kit ne promet la richesse, le bonheur permanent ou la vie parfaite. On récompense **l'effort et la régularité**, jamais le miracle. La couleur ne punit jamais : un jour manqué reste en **neutre `#8A93A2`**, jamais en rouge. L'XP n'est **jamais** perdue.

---

## Sommaire

1. [Vue d'ensemble — pourquoi Notion](#1-vue-densemble--pourquoi-notion)
2. [Architecture des bases de données](#2-architecture-des-bases-de-données)
3. [Formules Notion prêtes à coller](#3-formules-notion-prêtes-à-coller)
4. [Les vues à créer](#4-les-vues-à-créer)
5. [Montage pas-à-pas (checklist J5–J6)](#5-montage-pas-à-pas--checklist-j5j6)
6. [Branding & mobile](#6-branding--mobile)
7. [Livraison client](#7-livraison-client)
8. [Plan B sans Notion](#8-plan-b-sans-notion)

---

# 1. Vue d'ensemble — pourquoi Notion

## 1.1 Le pari : une « app sans app »

Une vraie application native (React Native / Flutter) coûte des mois et des milliers d'euros, exige un développeur, et bloque le lancement. **Notion donne 80 % de l'effet pour ~5 % du coût.** L'app Notion sur téléphone offre déjà le cadre « application » : navigation, plein écran, mode sombre, synchro temps réel. On ne simule pas une app — on **détourne** un outil déjà premium pour en faire la nôtre.

| Critère | Ce que Notion apporte | Pourquoi ça change tout |
|---|---|---|
| **Gratuit** | Plan perso gratuit suffisant (bases, formules, vues, partage) | Coût produit ≈ 0 € → marge maximale, prix accessible |
| **Mobile-first** | App iOS/Android native, gestes fluides, plein écran, offline partiel | L'utilisateur a « son Cap365 » dans sa poche, comme une vraie app |
| **Dynamique** | Cases à cocher, formules, vues filtrées : l'XP, le niveau, le rang, le radar **se calculent tout seuls** | L'utilisateur ne calcule plus rien → la valeur perçue passe de « PDF » à « app » |
| **Dupliquable** | Un template se duplique **en 1 clic** (« Duplicate ») | Livraison instantanée, infiniment scalable, zéro logistique |
| **Évolutif** | La base sert de **cahier des charges** pour une future app native | On ne jette rien : le kit no-code est la v0 jouable ET la spec de la v1 |

## 1.2 Ce que le client reçoit

Le client n'achète pas un fichier mort. Il reçoit un **lien vers un template Notion** et, en un clic sur « Dupliquer », obtient **sa propre copie privée**, modifiable, synchronisée sur son téléphone. Concrètement, dans sa copie :

- **365 défis** déjà rangés, tagués par catégorie, stat et difficulté.
- Un **Dashboard « Aujourd'hui »** qui affiche le défi du jour et son état de progression.
- Une **page Personnage** avec niveau, rang, XP, série, et le **radar des 8 stats** (8 jauges).
- Un **Calendrier 365** qui se remplit tout seul à chaque case cochée.
- Une **galerie de badges** (24 trophées, 4 raretés) et une **page Récompenses**.
- Une **page Reprise / Jour sans** bienveillante (Filet de Reprise).
- Une page d'accueil **« Crée ton personnage »** avec ses instructions de duplication.

> **La promesse produit, formulée honnêtement :** *« Tout est calculé pour toi. Coche un défi : ton XP monte, ton radar grandit, ta série tient. Tu n'as qu'une chose à faire — revenir demain. »*

## 1.3 La pile recommandée (rappel)

| Brique | Rôle | Statut dans ce kit |
|---|---|---|
| **Notion** | Le **moteur** : 365 défis, validation, calendrier, XP/rang/radar par formule | ⭐ Cœur de ce document |
| **Canva** | Les **objets précieux** : médaillons de badge, certificats, carte de l'année, couvertures | Référencé (voir kit Canva séparé) |
| **Google Sheets** | Option **radar** (graphique 8 axes exporté en image) + Plan B tableur complet | §3.8 et §8.1 |

---

# 2. Architecture des bases de données

Cap365 repose sur **6 bases de données Notion** liées entre elles. On les crée en **inline databases** (intégrées dans une page) ou **full-page**, peu importe ; l'essentiel est le schéma des propriétés.

```
   ┌─────────────────────────────────────────────────────────────┐
   │  PROFIL  (1 seule ligne — le héros)                          │
   │  ← agrège XP, Niveau, Rang, Série, Bouclier                  │
   └───────────────▲─────────────────────────────────────────────┘
                   │ (Rollups / formules lisant la base Défis)
   ┌───────────────┴───────┐   ┌──────────────┐   ┌──────────────┐
   │  DÉFIS 365            │   │  BADGES      │   │  QUÊTES      │
   │  (1 ligne = 1 jour)   │   │  (24 lignes) │   │  (hebdo/mens)│
   │  cœur du système      │   └──────────────┘   └──────────────┘
   └───────────────────────┘
   ┌───────────────────────┐
   │  JOURNAL / VALIDATION │  (optionnel : 1 ligne = 1 acte de validation,
   │                       │   pour journaliser séries, grâces, reprises)
   └───────────────────────┘
```

> **Convention de types Notion utilisée :** `Title` (titre obligatoire), `Text`, `Number`, `Select`, `Multi-select`, `Checkbox`, `Date`, `Formula`, `Rollup`, `Relation`.

---

## 2.1 Base **« Défis 365 »** (la base reine)

**1 ligne = 1 jour de l'année.** C'est ici que tout se passe : on coche, et le reste du système réagit.

| Propriété | Type Notion | Détail / options |
|---|---|---|
| **Titre** | `Title` | Intitulé du défi (ex. « Aborde un inconnu et pose-lui une vraie question »). C'est le titre obligatoire de chaque ligne. |
| **Jour** | `Number` | 1 → 365. Format « Number », sans décimale. Sert au tri et au calcul « % année ». |
| **Catégorie** | `Select` | **15 options** (voir liste ci-dessous), chacune avec sa couleur Notion. |
| **Stat** | `Select` | **8 options** : Discipline, Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité. Couleur = couleur d'axe de la stat. |
| **Difficulté** | `Number` | 1 → 10 (échelle unifiée V2). |
| **XP** | `Formula` | `prop("Difficulté") * 10` (voir §3.1). |
| **Points stat** | `Formula` | +1 / +2 / +3 selon palier de difficulté (voir §3.8). Sert au radar. |
| **Temps** | `Text` (ou `Select`) | « 2 min », « 15 min », « 30 min »… `Select` recommandé pour filtrer (« défis < 10 min »). |
| **Coût** | `Text` (ou `Select`) | « 0 € » par défaut ; `Select` pour filtrer les défis gratuits. |
| **Validé** | `Checkbox` | **Le cœur de l'interaction.** Cocher = relever le défi. Déclenche tous les calculs. |
| **Date de validation** | `Date` | Renseignée le jour où on coche (alimente le Calendrier et la vue « Défi du jour »). |
| **Statut** | `Select` | `À venir` · `Validé ✓` · `Grâce ◐` · `Reprise` · `Manqué ○`. Couleurs : Validé = vert, les autres = gris neutre. Jamais de rouge. |
| **Ressenti** | `Text` | Note libre de l'utilisateur après le défi (« fier », « difficile mais ok »…). |
| **Mois** | `Select` | 12 options (Mois 1 → Mois 12), pour grouper le calendrier et les arcs mensuels. |
| **Instructions** | `Text` | (Optionnel) Le « comment faire » en 2-4 puces — affiché dans la page du défi. |
| **Pourquoi** | `Text` | (Optionnel) La phrase de sens du défi. |
| **Mini-défi** | `Text` | (Optionnel) Version courte < 10 min (mode « jour sans »). |

**Les 15 catégories (option `Select`)** — chacune se range dans 1 des 8 stats :

| Catégorie (Select) | → Stat | | Catégorie (Select) | → Stat |
|---|---|---|---|---|
| Discipline | Discipline | | Résilience | Mental |
| Organisation | Discipline | | Apprentissage | Savoir |
| Productivité | Discipline | | Compétences | Savoir |
| Sortie de zone de confort | Courage | | Créativité | Création |
| Confiance en soi | Courage | | Expériences nouvelles | Création |
| Aventure | Courage | | Finances | Prospérité |
| Santé | Vitalité | | Social | Charisme |
| Sport | Vitalité | | Relations | Charisme |
| Gestion des émotions | Mental | | | |

> **Pourquoi `Validé` (checkbox) ET `Statut` (select) ?** La checkbox est le geste rapide premium (un tap = fait). Le `Statut` permet la nuance anti-abandon (grâce / reprise) sans casser la logique de validation. Dans la version simple, on peut n'utiliser que la checkbox ; la version complète utilise les deux (formule qui lit `Statut` pour décider si la série tient).

---

## 2.2 Base **« Journal / Validation »** (optionnelle mais recommandée)

**1 ligne = 1 événement quotidien.** Sert à journaliser la série, les journées de grâce et les reprises — utile pour calculer la série courante de façon fiable et tenir un historique propre.

| Propriété | Type Notion | Détail |
|---|---|---|
| **Date** | `Title` (format date dans le nom) ou `Date` | Le jour concerné. |
| **Jour validé** | `Checkbox` | Un défi a-t-il été relevé ce jour ? |
| **Type de journée** | `Select` | `Défi complet` · `Mini-défi (jour sans)` · `Grâce` · `Bouclier` · `Reprise` · `Manqué`. |
| **XP du jour** | `Number` (ou `Rollup`) | XP gagnée ce jour (base + bonus de série). |
| **Défi lié** | `Relation` → Défis 365 | Lien vers le défi relevé ce jour-là. |
| **Note** | `Text` | Journal libre (l'app premium aime un espace d'écriture). |

> Dans la **version la plus simple**, on saute cette base : la date de validation et la checkbox de la base « Défis 365 » suffisent. La base Journal devient utile quand on veut un calcul de série robuste et un vrai journal de bord.

---

## 2.3 Base **« Badges »** (24 trophées)

**1 ligne = 1 badge.** Galerie de collection. Les conditions se vérifient à la main au début (cocher quand atteint) ; on peut automatiser certaines avec une formule lisant le Profil.

| Propriété | Type Notion | Détail |
|---|---|---|
| **Nom** | `Title` | Ex. « Phénix », « Flamme de fer », « L'Année ». |
| **Rareté** | `Select` | `🟢 Commun` · `🔵 Rare` · `🟣 Épique` · `🟠 Légendaire` (couleurs : gris / bleu / violet / orange). |
| **Catégorie de badge** | `Select` | `Stat` · `Série & assiduité` · `Reprise (Phénix)` · `Progression` · `Secret`. |
| **Condition** | `Text` | La règle de déblocage (ex. « Série de 100 jours », « Atteindre 100 pts de Discipline »). |
| **Récompense** | `Text` | XP + cosmétique/titre (ex. « +250 XP · cosmétique animé »). |
| **Débloqué** | `Checkbox` | Coché quand obtenu → fait basculer la couverture en couleur. |
| **Débloqué le** | `Date` | Date d'obtention (fierté + tri « récents »). |
| **Image** | `Files & media` | Le médaillon Canva (couverture de la galerie). Version grise si verrouillé. |

> **Les 24 badges** (à pré-remplir) : 8 badges de stat (Rouage d'acier, Cœur intrépide, Pouls vital, Aimant social, Roc mental, Esprit vif, Main créatrice, Gardien serein) · 5 de série/assiduité (Premier feu, Braise tenace, Flamme de fer, Année sans rompre, Lève-tôt) · 3 de reprise (Phénix, Phénix éternel, Retour gagnant) · 6 de progression (Premier palier, À mi-chemin, Octogone plein, Tueur de BOSS, Légende vivante, L'Année) · 2 secrets (Noctambule, Polyvalent secret).
> Répartition : 🟢×7 · 🔵×9 · 🟣×5 · 🟠×3.

---

## 2.4 Base **« Quêtes »**

**1 ligne = 1 quête** (hebdomadaire, mensuelle, secrète, événement). Donne le rythme au-delà du défi isolé.

| Propriété | Type Notion | Détail |
|---|---|---|
| **Nom** | `Title` | Ex. « Semaine du Courage », « L'arc du mois — Reprends ton corps ». |
| **Type** | `Select` | `Quotidienne` · `Hebdomadaire` · `Mensuelle (BOSS)` · `Secrète` · `Événement`. |
| **Objectif** | `Text` | But mesurable (ex. « Relève 3 défis de difficulté ≥ 6 cette semaine »). |
| **Progression** | `Number` | Compteur courant (ex. 2 sur 3). |
| **Cible** | `Number` | Valeur à atteindre (ex. 3). |
| **% quête** | `Formula` | `prop("Progression") / prop("Cible")` (afficher en pourcentage / barre). |
| **Récompense** | `Text` | Ex. « +100 XP », « +300 XP + badge mensuel ». |
| **État** | `Select` | `En cours` · `Complétée ✓` · `Échue` (gris, jamais punitif) · `À venir`. |
| **Période** | `Date` (range) | Semaine ou mois concerné. |

---

## 2.5 Base **« Profil »** (le héros — 1 seule ligne)

**1 ligne unique.** C'est le tableau de bord du personnage : tout y est agrégé depuis la base « Défis 365 » via des **Rollups** et des **Formules**.

| Propriété | Type Notion | Détail / source |
|---|---|---|
| **Nom du héros** | `Title` | Prénom / pseudo de l'utilisateur. |
| **Défis** | `Relation` → Défis 365 | Lien vers TOUTE la base Défis (sélectionner les 365 lignes, ou une relation « tous les défis »). Sert de base aux Rollups. |
| **Défis validés** | `Rollup` | Source = relation Défis · propriété `Validé` · calcul **« Checked »** (compte les cases cochées). |
| **XP totale** | `Rollup` | Source = relation Défis · propriété `XP` · calcul **« Sum »**, **filtré sur Validé = coché**. (voir §3.2) |
| **Niveau** | `Formula` | Calculé à partir de l'XP totale (§3.3). |
| **Rang** | `Formula` | Calculé à partir du Niveau (§3.4). |
| **Titre de rang** | `Formula` | « l'Éveillé·e » … « Légende » (§3.4). |
| **% année** | `Formula` | `Défis validés / 365` (§3.5). |
| **% niveau** | `Formula` | Progression vers le niveau suivant (§3.6). |
| **Série courante** | `Number` ou `Formula` | Jours consécutifs (saisie manuelle simple, ou formule §3.7). |
| **Record de série** | `Number` | Plus longue série atteinte. |
| **Bouclier** | `Number` | Stock de boucliers de série (0 à 2 max). Se **gagne**, jamais s'achète. |
| **Journée de grâce** | `Checkbox` | Grâce de la semaine disponible (1/semaine). |
| **Points Discipline** | `Rollup` | Sum de `Points stat` filtré sur `Stat = Discipline` ET `Validé`. (idem pour les 8 stats) |
| *(× 8 stats)* | `Rollup` | Une propriété Rollup par stat → alimente les 8 jauges du radar (§3.8). |

> **Astuce Rollup filtré :** dans Notion, un Rollup peut filtrer la relation. Pour « Points Discipline », on crée 8 Rollups, chacun pointant la relation Défis, propriété `Points stat`, calcul **Sum**, avec un filtre `Stat is Discipline` (et `Validé is checked`). Si ta version de Notion ne filtre pas les Rollups, on passe par une **propriété intermédiaire** dans Défis : `Pts Discipline = if(prop("Stat")=="Discipline" and prop("Validé"), prop("Points stat"), 0)`, puis Rollup Sum simple.

---

# 3. Formules Notion prêtes à coller

> **Comment lire cette section.** Pour chaque formule : **où la coller** (quelle base, quelle propriété), le **code exact** (syntaxe Notion), et **ce qu'elle produit**. Copie-colle tel quel dans l'éditeur de formule Notion (`Add property → Formula → Edit`).
>
> ⚠️ **Note de syntaxe.** Ces formules utilisent la syntaxe Notion classique `prop("Nom")`, `if(...)`, `floor(...)`, `round(...)`, `format(...)`, `slice(...)`, `repeat(...)`, `concat(...)`. La nouvelle syntaxe Notion 2.0 accepte aussi `prop("X")` et ces fonctions — le code ci-dessous fonctionne dans les deux. Remplace les noms de propriété entre guillemets si tu as renommé tes colonnes.

## 3.1 XP du défi

**Où :** base **Défis 365**, propriété **`XP`** (type Formula).

```notion
prop("Difficulté") * 10
```

**Produit :** difficulté 7 → **70**. C'est l'économie canonique V2 : `XP = difficulté × 10`, transparente, jamais cachée.

## 3.2 XP cumulée (totale)

**Où :** base **Profil**, propriété **`XP totale`** (type **Rollup**, pas formula).
**Réglage du Rollup :** Relation = `Défis` · Property = `XP` · Calculate = **Sum**.
**Filtre :** ne compter que les défis validés. Deux méthodes :

- **Méthode A (Rollup filtré, si disponible) :** ajoute un filtre `Validé is checked` directement sur le Rollup.
- **Méthode B (universelle) :** crée d'abord dans **Défis 365** une formule **`XP gagnée`** :

```notion
if(prop("Validé"), prop("XP"), 0)
```

puis dans **Profil**, Rollup **Sum** sur `XP gagnée`. Résultat identique, compatible partout.

**Produit :** la somme de toute l'XP réellement gagnée → base du niveau, du rang et des barres.

## 3.3 Niveau (1 → 50) à partir de l'XP cumulée

**Où :** base **Profil**, propriété **`Niveau`** (type Formula).

Les 50 niveaux suivent les **bornes d'XP cumulée canoniques V2**. On les encode en cascade de `if`. Voici la formule complète (collable telle quelle) — elle lit `prop("XP totale")` :

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

**Produit :** le niveau exact (1 à 50). Compter **49 parenthèses fermantes** en fin (une par `if` au-delà du dernier). **Pourquoi ces bornes :** elles donnent un level-up ≈ hebdomadaire et un rang-up ≈ mensuel, calibrés pour ~26 000 XP / an chez un joueur à ~90 % de complétion.

> 💡 **Variante compacte (optionnelle).** Si tu veux éviter la cascade géante, stocke les bornes dans une petite **base « Niveaux »** (50 lignes : Niveau, XP min) reliée au Profil, et utilise un Rollup « Max niveau dont XP min ≤ XP totale ». Mais la cascade ci-dessus marche partout, sans base supplémentaire — c'est l'option recommandée pour un template à dupliquer.

## 3.4 Rang (1 → 10) & Titre de rang

**Où :** base **Profil**, propriété **`Rang`** (Formula). On dérive le rang du **niveau** (5 niveaux = 1 rang).

```notion
ceil(prop("Niveau") / 5)
```

**Produit :** niveaux 1–5 → rang 1, 6–10 → rang 2, … 46–50 → rang 10.

**Titre de rang** — propriété **`Titre de rang`** (Formula) :

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

**Produit :** l'identité narrative (Éveil → Légende). C'est le moteur profond du système : *le titre change qui tu crois être.*

## 3.5 % année (défis validés sur 365)

**Où :** base **Profil**, propriété **`% année`** (Formula). Suppose un Rollup `Défis validés` (compte des cases cochées).

```notion
round(prop("Défis validés") / 365 * 1000) / 10
```

**Produit :** un nombre comme `41.6` (= 41,6 % de l'année). Le `*1000 .../10` garde **une décimale**. Pour l'afficher avec le signe % en texte :

```notion
format(round(prop("Défis validés") / 365 * 1000) / 10) + " % de l'année"
```

## 3.6 % niveau (progression vers le niveau suivant)

**Où :** base **Profil**, propriété **`% niveau`** (Formula). Idée : `(XP actuelle − borne du niveau actuel) / (borne du niveau suivant − borne actuelle)`.

Plutôt que de ré-encoder 50 bornes, on stocke **deux formules intermédiaires** dans le Profil :

**`XP borne actuelle`** (Formula) — borne d'entrée du niveau courant (réutilise la logique de §3.3 en renvoyant la *borne* au lieu du *numéro*) :

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

**`XP borne suivante`** (Formula) — borne d'entrée du niveau **+1** (plafond = 26 000 au niveau 50) :

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

Puis **`% niveau`** (Formula) :

```notion
round((prop("XP totale") - prop("XP borne actuelle")) / (prop("XP borne suivante") - prop("XP borne actuelle")) * 100)
```

**Produit :** un pourcentage 0–100 de remplissage du niveau courant. Combine-le avec la **jauge** de §3.8 pour la barre d'XP du dashboard.

## 3.7 Série courante (jours consécutifs)

**Où :** base **Profil**, propriété **`Série courante`**.

Notion ne sait pas « regarder en arrière jour par jour » nativement dans une formule simple. Trois approches, du plus simple au plus robuste :

- **Méthode A — Compteur manuel (recommandée pour un template à dupliquer).** `Série courante` = propriété **`Number`** que l'utilisateur incrémente lui-même (+1 chaque jour validé, remise à 1 après reprise). Simple, fiable, zéro bug. La grande majorité des templates Notion font ainsi.
- **Méthode B — Semi-auto via le Journal.** Dans la base **Journal / Validation**, ajoute une formule par ligne `Continuité` qui compare la `Date` du jour à la précédente (via une relation « jour précédent ») : si l'écart ≤ 1 jour ET jour validé/grâce, on additionne. La série courante = la valeur de la dernière ligne. Plus juste, mais demande une relation auto-référente (avancé).
- **Méthode C — « Streak depuis » (astuce élégante).** Stocke une `Date` **`Série depuis`** (= date de reprise de la série en cours). Alors :

```notion
if(empty(prop("Série depuis")), 0,
  dateBetween(now(), prop("Série depuis"), "days") + 1)
```

**Produit :** le nombre de jours depuis le début de la série en cours. À la rupture, on remet `Série depuis` à la date de reprise — c'est le seul geste manuel, parfaitement aligné avec le **Filet de Reprise** (« la série repart, l'XP reste »).

> **Affichage premium :** mets `Série courante` à côté d'un emoji 🔥 dans un callout orange du dashboard (voir §4.3). Le bonus de série (+5 XP/jour au-delà de J3, plafond +25) se gère en note ; on ne complexifie pas la formule XP de base pour rester transparent.

## 3.8 Points de stat & les 8 jauges du radar (barres `▓▓▓░░`)

**Étape 1 — Points de stat par défi.** Base **Défis 365**, propriété **`Points stat`** (Formula). Règle V2 : facile (1–3) → +1, moyen (4–6) → +2, dur (7–10) → +3.

```notion
if(prop("Validé"),
  if(prop("Difficulté") <= 3, 1,
  if(prop("Difficulté") <= 6, 2, 3)),
0)
```

**Étape 2 — Total par stat.** Base **Profil**, **8 Rollups** (un par stat). Pour fiabiliser le filtre, crée dans **Défis 365** une formule par stat, ex. **`Pts Discipline`** :

```notion
if(prop("Stat") == "Discipline", prop("Points stat"), 0)
```

(répète pour Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité). Puis dans **Profil** : 8 Rollups **Sum**, un sur chaque `Pts <Stat>` → `Points Discipline`, `Points Courage`, etc.

**Étape 3 — La jauge ASCII `▓░`.** Base **Profil**, une **Formula** par stat, ex. **`Jauge Discipline`**. On affiche une barre de 10 segments. On choisit un **plafond d'affichage** (ici 100 points = barre pleine ; ajuste selon ton calibrage) :

```notion
slice("▓▓▓▓▓▓▓▓▓▓", 0, floor(min(prop("Points Discipline"), 100) / 10))
+ slice("░░░░░░░░░░", 0, 10 - floor(min(prop("Points Discipline"), 100) / 10))
+ "  " + format(prop("Points Discipline")) + " pts"
```

**Produit :** par exemple `▓▓▓▓▓▓▓▓░░  82 pts`. Répète la formule pour les 8 stats. Les 8 jauges empilées **sont** le radar approximé (voir §4.4).

> **Variante `repeat()` (plus lisible).** Si ta version de Notion a `repeat(texte, n)` :
> ```notion
> repeat("▓", floor(min(prop("Points Discipline"), 100) / 10)) +
> repeat("░", 10 - floor(min(prop("Points Discipline"), 100) / 10)) +
> "  " + format(prop("Points Discipline")) + " pts"
> ```

**Même technique pour la barre d'XP du dashboard** (propriété `Barre XP` dans Profil, à partir de `% niveau`) :

```notion
slice("▓▓▓▓▓▓▓▓▓▓", 0, floor(prop("% niveau") / 10))
+ slice("░░░░░░░░░░", 0, 10 - floor(prop("% niveau") / 10))
+ "  " + format(prop("% niveau")) + " %"
```

---

# 4. Les vues à créer

Une « vue » Notion = une lecture filtrée/triée de la même base, sans la dupliquer. On crée **plusieurs vues de la base Défis 365** (qui se synchronisent toutes), plus des pages-écrans qui les incorporent. Voici les vues, et **comment** chacune se règle.

## 4.1 Vue **« Défi du jour »** (l'écran d'accueil)

- **Base :** Défis 365. **Type de vue :** `Table` ou `Board` réduite à 1 carte, ou simplement un **lien vers la base filtrée**.
- **Filtre :** `Jour` **is** `<jour de l'année en cours>`. Comme Notion ne calcule pas nativement « jour 181 de l'année » dans un filtre de vue, deux options :
  - **Option simple (recommandée) :** filtre `Statut is À venir` + tri `Jour ascending` + **limite 1** → la vue montre toujours « le prochain défi non fait ». L'utilisateur avance linéairement : c'est exactement le modèle « une quête, une seule ».
  - **Option date :** ajoute une propriété `Date prévue` à chaque défi (J1 = date de départ, J2 = +1 jour…) puis filtre `Date prévue is Today`. Plus fidèle au calendrier, mais exige de dater les 365 lignes (faisable par glissé-incrément).
- **Affichage :** masquer les colonnes inutiles ; montrer Titre, Stat (puce colorée), Difficulté, XP, et la checkbox `Validé`.
- **Pourquoi :** zéro paralysie de choix. Le héros sait exactement quoi faire aujourd'hui. Cocher ici déclenche tout le moteur.

## 4.2 Vue **« Calendrier 365 »**

- **Base :** Défis 365. **Type :** `Calendar` (natif) sur la propriété `Date prévue` (ou `Date de validation`).
- **Doubler d'une vue « heatmap » :** une vue `Board` **groupée par `Mois`**, ou une vue `Table` groupée par mois → on voit l'année se remplir. Les cases `Validé` cochées = vert (via le `Statut`).
- **Couleur par statut :** règle le `Select Statut` pour que `Validé ✓` soit vert, le reste gris neutre.
- **Pourquoi :** le « mur qui se remplit » est **réel et automatique** dès qu'on coche un défi. C'est l'effet de régularité rendu visible (endowed progress).

## 4.3 Vue / page **« Tableau de bord » (Dashboard)**

Ce n'est pas une vue de base mais une **page** qui assemble plusieurs blocs :

```
┌─────────────────────────────────────────┐
│  🏔️ Cap365 — Aujourd'hui                  │   ← titre de page
│─────────────────────────────────────────│
│  🔥  Série : 12 jours   ·   Niv. 18      │   ← callout ORANGE (#F5A623)
│─────────────────────────────────────────│
│  ╔═══ DÉFI DU JOUR · ⚑ COURAGE ═════╗    │   ← callout BLEU NUIT (#1B2A4A)
│  ║ « Appelle quelqu'un que tu évites » ║  │     (lien vers vue 4.1 dessous)
│  ║ Difficulté 7/10 · +70 XP            ║  │
│  ╚═════════════════════════════════════╝  │
│  → [Vue « Défi du jour » incorporée ici]  │
│─────────────────────────────────────────│
│  ◆ ARTISAN · Niv 18    ▓▓▓▓▓▓▓░░░  72 %  │   ← Barre XP (formule §3.8)
│  4 785 / 5 245 XP                         │
│─────────────────────────────────────────│
│  QUÊTES  → [Vue « Quêtes en cours »]      │
└─────────────────────────────────────────┘
```

- **Composants :** callout orange « Série » (lit le Profil), callout bleu nuit « Défi du jour », vue 4.1 incorporée, une **propriété de Profil affichée en synced/lien** pour la barre d'XP, puis un lien vers les quêtes.
- **Pourquoi :** en 3 secondes, l'utilisateur voit son défi, sa série, son rang, et a **une seule action évidente**.

## 4.4 Vue / page **« Personnage » (radar approximé par 8 barres)**

- **Base :** Profil (la ligne unique du héros), affichée en **page** ou via les propriétés.
- **Contenu :** afficher les **8 jauges de stat** (formules §3.8) empilées :

```
MON HÉROS — Rang 4 · le·la Constant·e

⚙ Discipline   ▓▓▓▓▓▓▓▓░░  82 pts
⚑ Courage      ▓▓▓▓▓▓▓░░░  68 pts
❤ Vitalité     ▓▓▓▓▓▓▓▓▓░  90 pts
✦ Charisme     ▓▓▓░░░░░░░  38 pts   ← axe en retrait
◇ Mental       ▓▓▓▓▓▓░░░░  60 pts
✎ Savoir       ▓▓▓▓▓▓▓░░░  73 pts
✺ Création     ▓▓▓▓▓░░░░░  55 pts
◈ Prospérité   ▓▓▓▓░░░░░░  41 pts

💡 Ton héros est fort en ❤ Vitalité & ⚙ Discipline.
   Axe en retrait : ✦ Charisme.
```

- **Radar « vrai » (optionnel premium) :** voir §8.1 → graphique radar Google Sheets (8 axes) exporté en image, **incorporé** (embed) en haut de page, mis à jour 1×/mois (« bilan du mois »). Les 8 barres restent l'affichage temps réel ; le radar-image est le bonus visuel.
- **Pourquoi :** montrer **qui je deviens** et révéler les déséquilibres sans jugement.

## 4.5 Vue **« Badges » (galerie)**

- **Base :** Badges. **Type :** `Gallery`. **Couverture de carte :** propriété `Image` (le médaillon Canva).
- **Tri/filtre :** grouper par `Rareté`, ou filtre segmenté `Tous / Débloqués / Verrouillés`. Les badges secrets affichent « ??? » tant que `Débloqué` n'est pas coché (mettre une image silhouette).
- **Affichage :** montrer `Nom`, `Rareté`, `Débloqué`. Compteur en titre de page : « Mes trophées — 14 / 24 ».
- **Pourquoi :** collectionner. La rareté crée le désir ; les verrouillés (gris) donnent l'objectif.

## 4.6 Vue / page **« Récompenses »**

- **Contenu :** une page assemblant — le **titre de rang porté** (lit le Profil), un **carrousel/galerie de certificats** (PDF Canva liés : 30 / 100 / 365 jours), la **carte de l'année** (image Canva story), et des boutons « Télécharger le certificat (PDF) ».
- **Mise en œuvre Notion :** galerie « Mes récompenses » + blocs `File` ou liens vers les PDF Canva. Les titres = un `Select` dans le Profil (« Titre porté »).
- **Pourquoi :** matérialiser ce qu'on gagne pour de vrai → objets tangibles, offrables, partageables (levier viral).

## 4.7 Vue / page **« Jour sans / Reprise »** (Filet de Reprise)

- **Contenu :** une page **bienveillante**, pas une alerte. Callout chaleureux + un **mini-défi facile** (vue Défis filtrée `Difficulté ≤ 2`) + réassurance « Ta progression et tes badges sont intacts. »
- **Vue associée :** vue Défis 365 nommée **« Mini-défis (jour sans) »**, filtre `Difficulté is less than or equal to 2`, triée au hasard ou par jour. Sert de réservoir de reprises douces.
- **Gestion d'état :** la « journée de grâce / reprise » se choisit à la main via le `Select Statut` (`Grâce ◐` / `Reprise`). **L'important ici n'est pas la techno mais la copie** : le ton doux fait 80 % de la valeur.
- **Pourquoi :** transformer le moment le plus risqué (la rupture de série) en moment qui **donne envie de revenir, sans culpabiliser**. *Ne jamais rater deux fois.*

> **Récapitulatif des vues** (toutes issues des mêmes bases) : Défi du jour · Calendrier 365 · heatmap mensuelle · Dashboard · Personnage (8 barres) · Galerie badges · Récompenses · Mini-défis / Reprise · (+ vues utilitaires : « Tous les défis », « Défis validés », « Quêtes en cours »).

---

# 5. Montage pas-à-pas — checklist J5–J6

> Ordre optimal pour tout construire seul·e, sans rien casser. ~5–6 h / jour. Coche au fur et à mesure.

### Bloc A — Fondations (≈ 1 h)
- [ ] Créer une page racine **« Cap365 — [Nom] »** (ce sera la page à dupliquer plus tard).
- [ ] À l'intérieur, créer la base **Défis 365** (inline ou full-page).
- [ ] Ajouter **toutes les propriétés** de §2.1 (Jour, Catégorie, Stat, Difficulté, XP, Points stat, Temps, Coût, Validé, Date de validation, Statut, Ressenti, Mois, Instructions, Pourquoi, Mini-défi).
- [ ] Configurer le `Select Catégorie` (15 options + couleurs) et le `Select Stat` (8 options + couleurs d'axe).

### Bloc B — Le moteur de calcul (≈ 1 h 30)
- [ ] Coller la formule **XP** (§3.1) dans la base Défis.
- [ ] Coller la formule **Points stat** (§3.8 étape 1).
- [ ] Coller la formule **XP gagnée** = `if(Validé, XP, 0)` (§3.2 méthode B).
- [ ] Coller les 8 formules **`Pts <Stat>`** (§3.8 étape 2).
- [ ] Créer la base **Profil** (1 ligne) avec une **Relation** vers Défis 365 (lier tous les défis).
- [ ] Ajouter les **Rollups** : `Défis validés` (count checked), `XP totale` (Sum de XP gagnée), et les **8 Rollups de points de stat**.
- [ ] Coller dans Profil : **Niveau** (§3.3), **Rang** + **Titre** (§3.4), **% année** (§3.5).
- [ ] Coller **XP borne actuelle**, **XP borne suivante**, **% niveau** (§3.6).
- [ ] Coller **Barre XP** et les **8 Jauges de stat** (§3.8 étape 3).
- [ ] Gérer la **Série** : choisir Méthode A (compteur) ou C (`Série depuis` + formule §3.7).

### Bloc C — Remplir le contenu (≈ 1 h, en parallèle du copier des défis existants)
- [ ] Importer / saisir les **365 lignes** (1 par jour). Astuce : importer un CSV depuis les fichiers `../CSV/defis-365-import-notion.csv` ou copier-coller par blocs. Renseigner Jour, Titre, Catégorie, Stat, Difficulté, Mois.
- [ ] Vérifier que `XP` et `Points stat` se calculent automatiquement sur quelques lignes témoins.

### Bloc D — Les vues & écrans (≈ 1 h 30)
- [ ] Créer la vue **Défi du jour** (§4.1).
- [ ] Créer la vue **Calendrier 365** + la vue **heatmap mensuelle** (§4.2).
- [ ] Créer la vue **Mini-défis (jour sans)** (filtre difficulté ≤ 2).
- [ ] Monter la page **Dashboard** (§4.3) : callouts série + défi du jour + barre XP + lien quêtes.
- [ ] Monter la page **Personnage** (§4.4) : les 8 jauges + synthèse forces/faiblesses.

### Bloc E — Bases satellites & anti-abandon (≈ 1 h, déborde sur J7)
- [ ] Créer la base **Badges** (24 lignes pré-remplies §2.3) + vue **Galerie**.
- [ ] Créer la base **Quêtes** (§2.4) + vue **Quêtes en cours**.
- [ ] (Option) Créer la base **Journal / Validation** (§2.2).
- [ ] Monter la page **Reprise / Jour sans** (§4.7) avec copie bienveillante.
- [ ] Monter la page **Récompenses** (§4.6).

### Bloc F — Test bout-en-bout (≈ 30 min)
- [ ] Cocher 10 défis fictifs de difficultés variées → vérifier que **XP totale, Niveau, Rang, % année, % niveau, jauges de stat** bougent correctement.
- [ ] Vérifier que le **Calendrier** se remplit et que la **vue Défi du jour** pointe bien le bon défi.
- [ ] Simuler une rupture de série → vérifier la page Reprise et le réamorçage (`Série depuis`).

> **Jalon de fin :** à la fin de J6, le Dashboard affiche XP/rang/radar fonctionnels. J7 ajoute le système anti-abandon complet (série + grâce + bouclier + jalons) et le test sur 10 jours fictifs.

---

# 6. Branding & mobile

## 6.1 Appliquer la charte Cairn / Cap365

| Rôle | Nom | Hex | Où l'utiliser dans Notion |
|---|---|---|---|
| Primaire | Bleu nuit | `#1B2A4A` | Couverture de page, callout « Défi du jour », emoji/icônes sombres |
| Accent | Orange | `#F5A623` | Callout « Série 🔥 », barre d'XP, CTA, badges légendaires |
| Succès | Vert | `#2EC27E` | Statut `Validé ✓`, jauges pleines |
| Neutre | Gris clair | `#8A93A2` | Statuts secondaires, jour manqué, textes méta — **jamais de rouge punitif** |
| Fond clair | Blanc cassé | `#F7F8FA` | Ambiance générale (mode clair) |

**Limites Notion à connaître :** Notion ne permet pas le hex libre sur les blocs ; on utilise sa **palette de couleurs de fond** (background) pour les callouts — choisis **« Bleu »** pour approcher le bleu nuit, **« Orange »** pour l'accent, **« Vert »** pour le succès, **« Gris »** pour le neutre. Là où le hex exact compte (couvertures, médaillons, certificats), on passe par **Canva** et on incorpore l'image.

**Couvertures & icônes de page :** crée dans Canva des **bannières aux couleurs de la charte** (bleu nuit + touche orange) pour chaque page maîtresse (Aujourd'hui, Personnage, Calendrier, Badges, Récompenses). Icônes de page = emojis cohérents : 🏔️ (Cairn/sommet) pour l'accueil, ⚔️/🧭 pour les défis, 📊 pour le personnage, 🗓️ pour le calendrier, 🏆 pour les récompenses.

## 6.2 Icônes des 8 stats (cohérence = premium)

Réutilise **partout** les mêmes emojis/icônes par stat (carte de défi, radar, calendrier) :

| Stat | Icône | Couleur d'axe |
|---|---|---|
| Discipline | ⚙ | Bleu nuit |
| Courage | ⚑ | Orange |
| Vitalité | ❤ | Vert |
| Charisme | ✦ | Orange clair |
| Mental | ◇ | Bleu acier |
| Savoir | ✎ | Indigo |
| Création | ✺ | Magenta doux |
| Prospérité | ◈ | Or sobre |

> **Règle d'or premium :** « si tout est premium, rien n'est premium ». Le luxe vient des **vides** : marges généreuses, **une seule action par écran**, un seul élément orange par page (la série OU le CTA).

## 6.3 Callouts & blocs Notion utiles

- **Callout « Défi du jour »** : `/callout`, fond bleu, emoji de stat, titre du défi en gras.
- **Callout « Série »** : `/callout`, fond orange, 🔥 + nombre de jours.
- **Callout « conseil/équilibre »** : fond orange doux, 💡 + phrase d'orientation.
- **Toggle « Variantes »** : `/toggle` pour replier plus facile / plus dur (garde l'écran calme).
- **Divider** `/divider` pour aérer ; **colonnes** pour aligner barres de stat et valeurs.

## 6.4 Vérifier le rendu mobile (indispensable)

L'app Notion mobile est le **vrai support de livraison**. Avant de livrer :

- [ ] Ouvrir chaque page dans l'**app Notion sur téléphone** (pas juste le navigateur desktop).
- [ ] Vérifier que le **Dashboard tient sans scroll horizontal** : éviter les tables larges en page d'accueil → préférer **callouts + propriétés affichées** plutôt qu'un grand tableau.
- [ ] Les **jauges `▓░`** s'affichent bien sur petit écran (police monospace conservée par Notion).
- [ ] Le bouton/checkbox de **validation** est atteignable au pouce (pas noyé dans une table à 12 colonnes → masquer les colonnes secondaires dans la vue mobile).
- [ ] Tester le **mode sombre** Notion (fonds bleu nuit ressortent ; orange et vert « pop »).
- [ ] Les **statuts** sont doublés couleur **+ icône** (✓ / ◐ / ○) → lisibles même sans couleur (accessibilité).
- [ ] Aucune page ne contient de **promesse interdite** ni de rouge punitif.

---

# 7. Livraison client

## 7.1 Rendre le template dupliquable

1. Ouvre la page racine **« Cap365 — Modèle »** (la version maîtresse, propre, contenu d'exemple neutre).
2. Bouton **`Share`** (en haut à droite) → active **`Share to web`** / **« Publish »**.
3. Active l'option **« Allow duplicate as template »** (Autoriser la duplication) → Notion ajoute un bouton **« Duplicate »** en haut de la page publiée.
4. Récupère le **lien public**. C'est lui que le client reçoit (par email, page de vente, ou bonus).
5. **Vérifie en navigation privée** : ouvre le lien comme un inconnu, clique « Duplicate » → tu dois obtenir une copie **dans ton propre espace**, indépendante de l'original. L'original reste intact.

> **Hygiène avant publication :** purge les données de test (décoche les 10 défis fictifs, remets `Série depuis` à vide, XP à 0), garde un contenu d'exemple sobre, vérifie qu'aucune info perso ne traîne.

## 7.2 Page d'accueil **« Crée ton personnage »**

La première page que voit le client. Rôle : accueillir, faire dupliquer, lancer le premier défi.

```
🏔️  Bienvenue dans Cap365 — Crée ton personnage

« Un défi par jour. Une version de toi par an. »

▸ 1. Duplique ce Cap365 dans ton espace  → [bouton Duplicate, en haut]
▸ 2. Écris ton nom de héros (page Personnage)
▸ 3. Note ton point de départ : « Dans 365 jours, je veux être quelqu'un qui… »
▸ 4. Va sur « Aujourd'hui » et relève ton tout premier défi (offert, facile)

💡 Tout est calculé pour toi : coche un défi, ton XP monte,
   ton radar grandit, ta série tient. Ta seule mission : revenir demain.

⚠️ Cap365 ne promet ni richesse, ni vie parfaite. On récompense l'effort
   et la régularité. Ce que tu construis t'appartient vraiment.
```

- Inclure un **callout « 1er défi offert »** (difficulté 1, gratifiant) pour produire une victoire immédiate.
- Inclure le **contrat avec soi-même** (champ texte « mon pourquoi ») — réutilisé sur l'écran de reprise.

## 7.3 Instructions de duplication (à donner au client)

> **Comment installer ton Cap365 (2 minutes)**
> 1. **Sur ordinateur** (recommandé pour la 1re fois) : ouvre le lien reçu, clique **« Duplicate »** en haut à droite. Si on te le demande, connecte-toi (ou crée un compte Notion gratuit).
> 2. La copie atterrit dans **ton** espace Notion — elle est à toi, privée, modifiable.
> 3. **Sur téléphone** : installe l'app **Notion** (iOS/Android, gratuite), connecte-toi avec le même compte → ton Cap365 est dans ta poche.
> 4. Épingle la page **« Aujourd'hui »** en favori pour la retrouver en 1 tap chaque matin.
> 5. Active le **mode sombre** dans les réglages Notion pour l'ambiance « carnet de quête » nocturne.
>
> *Besoin d'aide ? Une vidéo de 90 s « Premiers pas » est dans la page d'accueil.*

- Joindre un **mini-guide « 7 premiers jours »** (habit stacking : « après mon café, je relève mon défi »).
- Préciser que **rien ne se perd** : même copié, le template reste à jour côté client (il en est désormais propriétaire).

---

# 8. Plan B sans Notion

Pour les clients qui ne veulent pas de Notion (ou pour vendre un format hors-ligne), deux équivalents fidèles. **Mêmes colonnes, mêmes formules, même économie.**

## 8.1 Équivalent **Google Sheets** (tableur dynamique)

Un classeur avec plusieurs onglets reproduit le moteur, et **gère même le vrai radar** (graphique natif).

**Onglet « Défis 365 »** — mêmes colonnes que la base Notion :

| A: Jour | B: Titre | C: Catégorie | D: Stat | E: Difficulté | F: XP | G: Points stat | H: Validé | I: Date | J: Ressenti | K: Mois |
|---|---|---|---|---|---|---|---|---|---|---|

Formules (cellules de la **ligne 2**, à recopier vers le bas) :

- **F2 — XP du défi :** `=E2*10`
- **G2 — Points stat :** `=IF(H2=TRUE, IF(E2<=3,1, IF(E2<=6,2,3)), 0)`
- **H2 — Validé :** insère une **case à cocher** (`Insertion → Case à cocher`).

**Onglet « Profil »** — agrégats (l'XP n'est comptée que si validée) :

- **XP totale :** `=SUMIF('Défis 365'!H2:H366, TRUE, 'Défis 365'!F2:F366)`
- **Défis validés :** `=COUNTIF('Défis 365'!H2:H366, TRUE)`
- **% année :** `=Profil!B2/365` (format pourcentage ; B2 = défis validés)
- **Points par stat (×8), ex. Discipline :** `=SUMIFS('Défis 365'!G2:G366, 'Défis 365'!D2:D366, "Discipline", 'Défis 365'!H2:H366, TRUE)`
- **Niveau** (table de correspondance) : crée un petit onglet **« Niveaux »** (2 colonnes : `Niveau` 1→50, `XP min` = les 50 bornes V2), puis :
  `=VLOOKUP(XP_totale, Niveaux!$B$2:$A$51 réordonné en [XP min | Niveau], 2, TRUE)`
  (plus simple en Sheets : `=XLOOKUP(XP_totale, Niveaux!XPmin, Niveaux!Niveau, , -1)` qui prend la borne **inférieure ou égale**).
- **Rang :** `=CEILING(Niveau/5, 1)`
- **% niveau :** `=(XP_totale - INDEX(Niveaux!XPmin, Niveau)) / (INDEX(Niveaux!XPmin, Niveau+1) - INDEX(Niveaux!XPmin, Niveau))`
- **Jauge `▓░` (ex. Discipline) :** `=REPT("▓", FLOOR(MIN(PtsDiscipline,100)/10)) & REPT("░", 10-FLOOR(MIN(PtsDiscipline,100)/10)) & "  " & PtsDiscipline & " pts"`

**Le vrai radar (avantage Sheets) :** sélectionne les 8 totaux de stat → `Insertion → Graphique → type « Radar »` → 8 axes. Tu obtiens **le radar octogonal authentique**, mis à jour en temps réel. On peut l'**exporter en image** pour l'incorporer dans Notion (§4.4) ou un PDF.

> **Série courante en Sheets :** colonne « jour validé » par date, puis une formule de comptage de la série en cours (ex. via une colonne auxiliaire qui additionne tant que les jours s'enchaînent), ou compteur manuel. Comme en Notion, le compteur manuel reste le plus robuste pour un template grand public.

## 8.2 Équivalent **PDF interactif** (livrable hors-ligne, offrable)

Le format le plus **tangible** et vendable, sans aucune dépendance logicielle côté client.

- **Sommaire cliquable :** page d'accueil avec **hyperliens internes** vers chaque mois / écran (signets PDF). Réalisé dans Canva ou un éditeur PDF en posant des liens « vers la page X ».
- **Cases à cocher réelles :** un **PDF de formulaire** (champs interactifs `checkbox`) — créable avec un éditeur PDF (ex. l'outil de formulaires d'un PDF, ou Canva + champs) — l'utilisateur coche directement dans la visionneuse, sur mobile ou ordinateur.
- **Navigation « onglets » :** une **barre d'icônes en pied de page** (Accueil · Défis · Stats · Récompenses · Calendrier), chaque icône = hyperlien interne → effet de navigation d'app.
- **« Validation animée » simulée :** un bouton « J'ai relevé le défi → » qui **lie vers une page « Bravo +XP »** → l'effet de validation par changement de page.
- **Calendrier 365 :** une planche imprimable/cochable (grille de 365 cases) — superbe en objet, à mettre à jour à la main ou à imprimer en poster de suivi.
- **Limites assumées :** le PDF ne **calcule pas** l'XP/le niveau automatiquement. On fournit donc : (a) un **tableau de bornes** (« à partir de tant d'XP = niveau/rang ») que l'utilisateur lit, et/ou (b) le **classeur Google Sheets** en bonus pour le calcul auto. Le PDF assure le **rituel premium et offrable** ; Sheets/Notion assurent le **moteur**.
- **Premium sans code :** certificats (30/100/365 j) en pages Canva exportées, carte de l'année story 1080×1920, médaillons de badge révélés par planches. C'est le format le plus naturel pour les **objets précieux**.

> **Recommandation de vente.** Le combo gagnant : **PDF cliquable premium** (livrable tangible) **+ template Notion offert** (le moteur dynamique) **+ Google Sheets** en option pour les amoureux du tableur. Trois portes d'entrée, une seule économie de jeu cohérente — la même que la future app native, dont ce kit est déjà le cahier des charges.

---

> **Cap365 — un carnet de quête premium, calme et confiant.** On félicite sans crier, on guide sans infantiliser. Tout est calculé pour le héros : il n'a qu'une chose à faire — **revenir demain.**
>
> *Fin du Kit de construction Notion — l'app sans app.*
