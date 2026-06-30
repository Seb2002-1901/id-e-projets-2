# Plan d'expansion future de Cap365

> **Produit** : Cap365 — 365 Défis de Vie (produit digital de défis quotidiens, cible 18-35 ans).
> **Statut V2** : produit digital (PDF / Notion premium) vendu en 3 offres — Starter 19 € / Premium 39 € / VIP 89 €. Système RPG (8 stats, 50 niveaux / 10 rangs, badges, quêtes), rétention anti-abandon, viralité organique.
> **Cadre éthique** : aucune promesse interdite (richesse, bonheur permanent, vie parfaite). Honnêteté radicale. Cap365 propose un système, pas un miracle.
> **Contrainte structurelle** : réalisable par une personne (solo), petit budget au départ. Certaines opportunités sont long terme — c'est signalé explicitement.

---

## ⚠️ Avertissement méthodologique — lire avant tout

Tous les chiffres de ce document sont des **HYPOTHÈSES de travail**, signalées par la mention `[HYP]`. Ils servent à raisonner et à prioriser, **pas** à prédire. Les valeurs de référence retenues comme socle de calcul :

- `[HYP socle]` Prix moyen pondéré du panier digital : **~32 €** (mix Starter/Premium/VIP).
- `[HYP socle]` Volume de croisière atteignable en solo à 12 mois : **80 à 150 ventes/mois** (organique + petit budget acquisition).
- `[HYP socle]` Taux de conversion d'un visiteur qualifié : **2 à 4 %**.
- `[HYP socle]` Base d'acheteurs cumulée à 12 mois : **~1 000 à 1 800 clients**.
- `[HYP socle]` Temps disponible du fondateur : **~1 ETP** (une personne, pas d'équipe au départ).

Ces hypothèses sont volontairement prudentes. Tout chiffre dérivé en aval (MRR, marges, paniers) en découle et doit être relu à la lumière des données réelles dès qu'elles existent.

---

## Grille de lecture (rappel des 4 critères)

| Critère | Échelle | Sens |
|---|---|---|
| **IMPACT** | /10 | Effet potentiel sur le chiffre d'affaires, la rétention ou la marque, à horizon 12-24 mois. |
| **DIFFICULTÉ** | /10 | Charge d'exécution + compétences requises + dépendances. 10 = très dur en solo. |
| **COÛT** | faible / moyen / élevé | Cash à sortir avant d'encaisser (dev, prod, stock, juridique). |
| **PRIORITÉ** | Maintenant / Bientôt / Plus tard | Recommandation de timing pour un solo. |

**Lexique temporel** : *Court terme* = 0-6 mois · *Moyen terme* = 6-12 mois · *Long terme* = 12-24 mois et au-delà.

---

## 1. Application mobile

### À quoi ça ressemble pour Cap365
Le PDF/Notion devient une **vraie app** (iOS + Android) : un défi par jour poussé en notification, validation en un tap, barre de progression RPG vivante (XP, niveau, rang, badges qui se débloquent à l'écran), streak visible, journal intégré. L'app transforme un contenu *statique* en *boucle d'engagement quotidienne* — c'est le format natif du produit.

Chemin réaliste en solo, par étapes :
1. **Web-app / PWA** d'abord (un seul code, pas de validation App Store, mise à jour instantanée). `[HYP]`
2. **No-code / low-code** (ex. outils type Glide, FlutterFlow, Softr) pour une V1 fonctionnelle sans recruter de dev. `[HYP]`
3. App native publiée sur les stores seulement quand la rétention web est prouvée.

### Modèle économique
- Soit **achat unique** (l'app remplace le PDF, prix proche des offres actuelles).
- Soit **freemium** : 7-30 premiers défis gratuits, déblocage de l'année complète en achat in-app. `[HYP]` C'est le levier de conversion le plus puissant car l'utilisateur ressent la boucle avant de payer.
- ⚠️ **Commission stores 15-30 %** sur les achats in-app : à intégrer dans le prix. Une PWA/web-app vendue hors store évite cette commission.

### Moment opportun
**Moyen terme (6-12 mois)** pour une PWA freemium ; **long terme (12-24 mois)** pour le natif complet. Ne pas se lancer dans le natif tant que le contenu et la mécanique RPG ne sont pas validés sur un format plus léger.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **9/10** | **8/10** | **moyen → élevé** | **Bientôt** (PWA) / Plus tard (natif) |

> **Pourquoi 9 en impact** : c'est le format qui sert le mieux la promesse (un défi/jour) et qui maximise rétention + viralité. **Pourquoi 8 en difficulté** : maintenance continue, support, stores, bugs — c'est un produit vivant, pas un livrable figé.

---

## 2. Abonnement (récurrent)

### À quoi ça ressemble pour Cap365
Le piège : Cap365 est vendu comme un **parcours one-shot de 365 jours**. Mettre le cœur du produit derrière un abonnement **trahit** la promesse (« je paie une fois, j'ai mon année »). La règle : **le parcours reste en achat unique ; l'abonnement ne vend que ce qui est, par nature, récurrent et renouvelable.**

Ce qu'on peut légitimement mettre dans un abonnement, sans trahison :
- **Nouveaux défis mensuels** / saisons thématiques fraîches (« le pack de juillet », défis d'actualité). `[HYP]`
- **Accès communauté + accountability** (voir §3) : la valeur récurrente, c'est l'humain, pas le PDF.
- **Outils de suivi** : tableau de bord avancé, statistiques RPG, exports, rituels guidés.
- **Coaching léger** : un live mensuel, des réponses, des défis personnalisés.

→ Format honnête : **« Cap365 + »**, abonnement *complémentaire et optionnel* (~7-12 €/mois `[HYP]`), pour ceux qui veulent continuer **après** ou **autour** de leur année — jamais une condition pour utiliser ce qu'ils ont acheté.

### Modèle économique
Récurrent (MRR). Exemple chiffré `[HYP]` : 1 200 clients cumulés × 8 % d'adhésion × 9 €/mois ≈ **864 €/mois** de MRR à 12 mois. Modeste mais composé : le récurrent stabilise la trésorerie d'un solo et finance l'acquisition.
- ⚠️ **Churn** : un abonnement = une promesse de valeur *chaque mois*. Sans contenu/animation frais, il s'effondre. C'est une charge de production permanente.

### Moment opportun
**Moyen terme (6-12 mois)**, et seulement une fois la **communauté** amorcée (l'abonnement vit de l'animation). Lancer un abonnement vide est la meilleure façon de générer du churn et des remboursements.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **7/10** | **7/10** | **faible (lancement) → moyen (animation)** | **Bientôt** |

> **Risque éthique majeur** : ne JAMAIS rendre le parcours acheté dépendant d'un abonnement actif. L'abonnement est un *plus*, pas un *péage*.

---

## 3. Communauté (Discord / cercle privé / coaching de groupe)

### À quoi ça ressemble pour Cap365
Un **espace privé** (Discord ou Cercle/Skool `[HYP]`) où les pratiquants partagent leur streak, leurs preuves de défi, se motivent, et où le système RPG devient **social** (classements, entraide, défis de groupe). C'est le moteur le plus puissant de **rétention** et de **viralité organique** — exactement les deux piliers déjà identifiés en V2.

- **Niveau gratuit** : canal ouvert aux acheteurs (inclus dans Premium/VIP).
- **Niveau payant / VIP** : coaching de groupe en live, hot-seats, défis exclusifs.

### Modèle économique
- Levier **indirect** majeur : augmente LTV (rétention), réduit les remboursements, alimente le bouche-à-oreille → baisse le coût d'acquisition.
- Levier **direct** : tier payant ou inclus dans l'offre VIP / l'abonnement Cap365 +.

### Moment opportun
**Court terme (0-6 mois)** — version légère. C'est l'une des deux ou trois choses à lancer **en premier** car elle ne coûte presque rien, renforce le produit actuel et crée le terreau de TOUTES les autres expansions (abonnement, événements, partenariats, témoignages).

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **8/10** | **4/10** | **faible** | **Maintenant** |

> ⚠️ **Piège du solo** : une communauté demande de l'**animation**. Commencer petit (un Discord simple, des rituels hebdo automatisables) ; ne pas promettre une présence 24/7 qu'une personne seule ne peut tenir. Nommer des modérateurs bénévoles parmi les membres VIP dès que possible.

---

## 4. Événements (challenges live, défis saisonniers, retraites/meetups)

### À quoi ça ressemble pour Cap365
Trois paliers, du plus léger au plus lourd :
1. **Challenges live en ligne** : « 7 jours de défis » gratuits/payants à dates fixes (rentrée, janvier, été). Format d'acquisition + activation communauté. **Court terme.**
2. **Défis saisonniers** : packs thématiques limités dans le temps (« Cap Été », « Cap Reset Janvier »). Crée de l'urgence et du rythme. **Court/moyen terme.**
3. **Retraites / meetups physiques** : week-ends IRL. Marge forte mais logistique lourde. **Long terme.**

### Modèle économique
- Challenges live : gratuit (acquisition, on capture des emails → on vend le produit) ou petit ticket (9-19 € `[HYP]`).
- Défis saisonniers : vente unitaire, urgence saisonnière, marge digitale ~100 %.
- Retraites : ticket élevé (200-800 € `[HYP]`), marge nette plus faible (lieu, repas, déplacement, responsabilité) — réservé au stade où une marque existe.

### Moment opportun
Challenges live + saisonniers : **court terme (0-6 mois)**, quasi gratuits, forte synergie avec la communauté. Retraites/meetups : **long terme (12-24 mois+)**, après preuve de marque et de demande.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **7/10** (live/saison) · 6/10 (IRL) | **4/10** (live) · **8/10** (IRL) | **faible** (live) · **élevé** (IRL) | **Maintenant** (live/saison) / Plus tard (IRL) |

> **Lever stratégique** : les challenges live sont le **meilleur canal d'acquisition organique** pour un solo — coût quasi nul, génèrent du contenu (témoignages, UGC) et nourrissent la viralité.

---

## 5. Partenariats (créateurs, marques bien-être/sport, médias)

### À quoi ça ressemble pour Cap365
- **Créateurs / influenceurs** 18-35 (dev perso, fitness, productivité, étudiants) : affiliation au % ou codes promo. Canal d'acquisition n°1 pour ce public. `[HYP]`
- **Marques bien-être / sport** (apps de sport, marques de compléments, salles, papeterie) : bundles croisés, co-marketing, dotation de lots pour les challenges.
- **Médias / newsletters / podcasts** de la niche : visibilité, autorité, backlinks.

### Modèle économique
- **Affiliation** : 20-40 % `[HYP]` de commission par vente — **0 € d'avance**, on ne paie qu'à la performance. Idéal pour un solo à petit budget.
- **Co-marketing / barter** : échange d'audience, pas de cash.

### Moment opportun
**Court à moyen terme (0-12 mois)**. Quasi sans capital, mais demande un **produit déjà bon** (un partenaire ne relaie pas un produit qui rembourse) et un **kit d'affiliation** prêt (visuels, liens, argumentaire).

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **8/10** | **5/10** | **faible** | **Maintenant → Bientôt** |

> **Condition** : mettre en place le tracking d'affiliation (un outil simple suffit) et un kit créateur AVANT de démarcher. Cibler 5-10 micro-créateurs très alignés plutôt qu'un gros qui convertit mal.

---

## 6. Produits complémentaires (journal physique, cartes, merch, audio)

### À quoi ça ressemble pour Cap365
- **Journal / carnet physique** Cap365 (suivi annuel, stats RPG à remplir à la main) — l'objet-totem qui matérialise la pratique.
- **Cartes de défis imprimées** (jeu de 52/365 cartes à tirer) — fort potentiel cadeau + viral.
- **Versions audio** : défis narrés, méditations/rituels guidés (format podcast premium ou pack MP3) — **100 % digital, marge forte, faible coût.**
- **Merch** (sweat, mug « streak ») — surtout marque/fidélité, **faible priorité business**.

### Modèle économique
- Physique : **print-on-demand** (`[HYP]` pas de stock, marge plus faible ~30-40 %) ou petite série (marge meilleure mais cash immobilisé + logistique + SAV + retours). Le print-on-demand est la seule option raisonnable pour un solo au départ.
- Audio : production unique, vente illimitée, marge ~100 % — **le meilleur complément digital.**

### Moment opportun
- **Audio** : moyen terme (6-12 mois), excellent rapport effort/marge — prioritaire parmi les compléments.
- **Journal / cartes** : moyen/long terme, en **print-on-demand** d'abord, ou via une **précommande/crowdfunding** `[HYP]` pour ne financer la production qu'avec des ventes déjà encaissées.
- **Merch** : long terme, optionnel.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **6/10** (audio 7) | **6/10** (physique) · **3/10** (audio) | **faible** (audio/POD) · **élevé** (stock) | **Bientôt** (audio) / Plus tard (physique, merch) |

> ⚠️ **Piège du physique en solo** : logistique, stock, SAV, retours, douanes. Le digital reste le cœur. Le physique = objet de désir et de marque, pas la machine à cash. Précommande > stock.

---

## 7. Nouvelles gammes (versions thématiques)

### À quoi ça ressemble pour Cap365
Décliner le moteur (les 365 défis + RPG) en **éditions ciblées** qui réutilisent ~70-80 % `[HYP]` de la structure et changent les défis/le ton :
- **Cap365 Couple** (défis à deux) — fort angle cadeau + viralité naturelle (2 personnes).
- **Cap365 Étudiants** (organisation, focus, équilibre) — public 18-25 énorme et accessible.
- **Cap365 Sport** (habitudes, discipline, corps).
- **Cap365 Créateurs** (régularité, output, anti-procrastination).
- **Cap365 Pro / Équipe** (passerelle vers le B2B, voir §8).

### Modèle économique
- Mêmes offres (19/39/89 €), **nouveau public** par déclinaison → croissance par **réplication** plutôt que par effort d'acquisition sur un seul marché saturé.
- Coût marginal faible : le système existe, on ne réécrit que le contenu.

### Moment opportun
**Moyen terme (6-12 mois)**, **après** avoir prouvé le produit de base et **identifié par les données** quel segment achète déjà le plus (ne pas deviner — regarder qui convertit). Commencer par **1 seule** déclinaison à fort signal (souvent Couple ou Étudiants `[HYP]`).

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **8/10** | **5/10** | **faible** | **Bientôt** |

> **Levier de scaling le plus rentable pour un solo** : on capitalise sur un actif déjà construit. **Discipline** : une déclinaison à la fois, pas cinq en parallèle. Chaque gamme doit prouver sa traction avant la suivante.

---

## 8. Licences (B2B : écoles, RH/entreprises, coachs, marque blanche)

### À quoi ça ressemble pour Cap365
- **Écoles / universités** : Cap365 Étudiants comme outil de bien-être/réussite, licence par établissement.
- **RH / entreprises** : programme de défis bien-être pour les équipes (QVT), licence par nombre de collaborateurs.
- **Coachs / thérapeutes** : revendent Cap365 à leurs clients (commission ou licence).
- **Marque blanche** : un partenaire diffuse Cap365 sous son propre nom (ticket élevé).

### Modèle économique
- **Licence B2B** : tickets bien plus élevés (`[HYP]` 500-5 000 €+ par contrat selon volume) ; **peu de clients = beaucoup de CA**. Levier de revenu potentiellement supérieur au B2C unitaire.
- ⚠️ **Cycle de vente long**, exigences contractuelles, facturation, parfois appels d'offres, support pro, RGPD/données. **Pas un canal de démarrage en solo.**

### Moment opportun
**Long terme (12-24 mois+)**. À ne lancer **que** lorsque : (a) le produit B2C est mûr et crédible, (b) une gamme « Pro/Équipe » ou « Étudiants » existe, (c) un partenaire entrant le demande spontanément (le meilleur signal). Démarrage **réactif** (répondre aux demandes entrantes) avant tout démarchage actif.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **8/10** (potentiel) | **8/10** | **faible (produit) / moyen (commercial+juridique)** | **Plus tard** |

> **Note solo** : le B2B mange un temps disproportionné (réunions, devis, juridique). Réservé au moment où il y a soit un commercial/partenaire, soit une demande entrante qui finance le temps passé.

---

## 9. Versions internationales (EN / ES…)

### À quoi ça ressemble pour Cap365
Traduire et **localiser** Cap365 — en priorité **EN** (le plus grand marché du dev perso/digital), puis **ES** (gros volume, concurrence plus faible `[HYP]`). Localiser ≠ traduire : ton, exemples culturels, références, devise, fuseaux des notifications, preuve sociale dans la langue.

### Hypothèses à signaler `[HYP]`
- Le système RPG et la structure sont **culturellement neutres** → réutilisables tels quels.
- Le contenu des défis contient des **références culturelles** à adapter (pas un copier-coller traducteur).
- L'anglais ouvre un marché **5-10× plus grand** mais aussi **bien plus concurrentiel** (CAC plus élevé).
- Le **support/communauté** devra exister dans la langue cible → charge supplémentaire pour un solo.

### Modèle économique
Mêmes offres, **nouveaux marchés géographiques** → multiplication du TAM sans changer le produit. Coût principal = traduction/localisation (one-shot) + acquisition dans une langue où le fondateur a moins de réseau.

### Moment opportun
**Moyen → long terme (9-24 mois)**. **EN d'abord**, et seulement une fois la machine FR rentable et stabilisée. Risque réel de **dispersion** : gérer deux marchés, deux communautés, deux flux de support en solo est lourd. Envisager un **partenaire/relais local** ou un créateur affilié natif plutôt que tout porter seul.

| IMPACT | DIFFICULTÉ | COÛT | PRIORITÉ |
|:--:|:--:|:--:|:--:|
| **9/10** (TAM) | **7/10** | **moyen** | **Plus tard** (EN en tête de file) |

> **Règle** : n'ouvrir une langue que si le marché FR tourne sans supervision quotidienne. Sinon on double la charge sans doubler la maîtrise.

---

## 📊 Tableau récapitulatif (trié par priorité)

| # | Opportunité | Impact | Difficulté | Coût | **Priorité** | Horizon |
|---|---|:--:|:--:|:--:|:--:|---|
| 3 | **Communauté** (Discord/cercle) | 8 | 4 | faible | **Maintenant** | 0-6 mois |
| 4 | **Événements** live + défis saisonniers | 7 | 4 | faible | **Maintenant** | 0-6 mois |
| 5 | **Partenariats** (créateurs/affiliation) | 8 | 5 | faible | **Maintenant → Bientôt** | 0-12 mois |
| 7 | **Nouvelles gammes** (Couple, Étudiants…) | 8 | 5 | faible | **Bientôt** | 6-12 mois |
| 2 | **Abonnement** (Cap365 +) | 7 | 7 | faible→moyen | **Bientôt** | 6-12 mois |
| 6a | **Audio** (défis narrés/guidés) | 7 | 3 | faible | **Bientôt** | 6-12 mois |
| 1a | **App mobile — PWA freemium** | 9 | 8 | moyen→élevé | **Bientôt** | 6-12 mois |
| 6b | **Produits physiques** (journal, cartes) | 6 | 6 | faible(POD)→élevé | **Plus tard** | 12-18 mois |
| 9 | **Versions internationales** (EN puis ES) | 9 | 7 | moyen | **Plus tard** | 9-24 mois |
| 1b | **App mobile — natif (stores)** | 9 | 8 | élevé | **Plus tard** | 12-24 mois |
| 4b | **Retraites / meetups IRL** | 6 | 8 | élevé | **Plus tard** | 12-24 mois+ |
| 8 | **Licences B2B / marque blanche** | 8 | 8 | moyen | **Plus tard** | 12-24 mois+ |

> Lecture : la priorité ne suit pas l'impact brut. Un solo commence par ce qui a **fort impact ET faible difficulté ET faible coût ET synergie** avec l'existant (haut du tableau), et repousse ce qui est coûteux, risqué ou dépendant d'une marque mûre (bas du tableau).

---

## 🗺️ Séquence recommandée

### Phase 1 — 0-6 mois : « Renforcer le noyau » (rétention + acquisition gratuite)
1. **Communauté légère (§3)** — terreau de tout le reste, presque gratuit.
2. **Challenges live + défis saisonniers (§4)** — acquisition organique, génèrent témoignages/UGC.
3. **Partenariats / affiliation créateurs (§5)** — acquisition à coût nul (paiement à la performance).

**Pourquoi en premier** : ces trois leviers **amplifient le produit actuel** (rétention + viralité, les deux piliers V2), ne demandent ni dev ni stock, et **créent les actifs** (communauté, preuve sociale, réseau de créateurs) dont dépendent toutes les phases suivantes. On ne construit rien de neuf et de coûteux tant que l'acquisition organique et la rétention ne sont pas solides.

### Phase 2 — 6-12 mois : « Capitaliser sur l'actif » (CA composé)
4. **1 nouvelle gamme thématique (§7)** — la déclinaison qui convertit déjà le plus (data, pas intuition).
5. **Audio (§6a)** — complément à marge ~100 %, faible effort.
6. **Abonnement Cap365 + (§2)** — branché sur la communauté désormais vivante.
7. **App mobile PWA freemium (§1a)** — quand contenu + mécanique RPG sont validés.

**Pourquoi ensuite** : on **réplique et on monétise** un système déjà prouvé. La communauté (Phase 1) rend l'abonnement viable ; les données de vente disent quelle gamme lancer ; la PWA n'arrive qu'après validation du contenu. Chaque brique s'appuie sur la précédente.

### Phase 3 — 12-24 mois : « Changer d'échelle » (nouveaux marchés/canaux)
8. **International — EN d'abord (§9)** — une fois la machine FR autonome.
9. **Licences B2B / marque blanche (§8)** — surtout en réactif (demandes entrantes).
10. **Produits physiques en précommande (§6b)**, **app native (§1b)**, **retraites IRL (§4b)** — projets « marque » à fort coût, réservés au stade de maturité.

**Pourquoi en dernier** : ces leviers ont un fort potentiel mais un **coût, un risque ou une charge opérationnelle** que seul un produit mûr, rentable et doté d'une marque peut absorber. Les lancer trop tôt = dispersion garantie.

---

## 🧭 Risques de dispersion & règle de décision

### Le danger n°1 du solo : la dispersion
Une seule personne qui ouvre 4 chantiers en parallèle (app + international + B2B + physique) ne finit aucun correctement : le produit cœur se dégrade, le support déborde, la qualité chute, les remboursements montent. **En solo, le facteur limitant n'est pas le manque d'idées — c'est le temps et l'attention.** Chaque expansion ouverte est une dette d'entretien permanente (support, mise à jour, animation), pas un livrable « one-shot ».

### Signaux d'alerte de dispersion
- Plus de **2 chantiers d'expansion ouverts** en même temps.
- Le **produit cœur** (le parcours 365) reçoit moins d'attention qu'avant.
- Le **support / la communauté** prend du retard.
- On lance par **enthousiasme** (« ce serait cool ») plutôt que par **demande prouvée**.
- Un nouveau chantier exige une **compétence qu'on n'a pas** et qu'on n'a pas le temps d'acquérir.

### Règle de décision (à appliquer avant CHAQUE expansion)

> **Ne lancer une expansion QUE si les 4 conditions sont réunies :**
>
> 1. **Le produit cœur est sain** — rétention correcte, taux de remboursement bas, NPS/retours positifs. On ne construit pas sur des fondations fissurées.
> 2. **La demande est prouvée, pas supposée** — un signal réel l'appelle (clients qui la réclament, segment qui convertit déjà, partenaire entrant). On ne devine pas, on observe.
> 3. **Elle tient dans la capacité du solo** — réalisable sans tout casser, avec un budget qu'un échec ne mettrait pas en faillite. Préférer toujours la version *light/no-code/print-on-demand/affiliation* avant la version lourde.
> 4. **Elle renforce l'actif au lieu de le diluer** — elle sert la même promesse (un système honnête de progression), pas une promesse interdite (richesse, bonheur permanent, vie parfaite). En cas de doute éthique : **non**.

**Corollaire « une à la fois »** : tant qu'une expansion n'est pas **stabilisée et déléguée/automatisée**, on n'en ouvre pas une deuxième. Mieux vaut trois chantiers terminés que dix commencés.

**Test final, en une phrase** : *« Est-ce que ça rend l'année de défi de mes clients meilleure, ou est-ce que ça me distrait de la rendre meilleure ? »* Si c'est la seconde réponse — c'est « Plus tard ».
