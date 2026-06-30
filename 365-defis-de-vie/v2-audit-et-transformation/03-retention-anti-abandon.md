# Système de rétention & anti-abandon — Cap365

> **Cap365 — 365 Défis de Vie** · 1 défi/jour · 365 jours · cible 18-35 ans
> Document V2 · Pilier 03 · *Le système anti-abandon complet*

---

## Préambule — L'ennemi s'appelle l'abandon, pas le manque de motivation

La motivation est un carburant qui s'évapore. Personne ne tient 365 jours « à la volonté ». Ce qui tient, c'est un **système** : une architecture qui rend le retour plus facile que l'abandon, qui transforme l'échec en simple incident, et qui fait que *ne pas revenir* coûte psychologiquement plus cher que revenir.

Ce document décrit ce système, mécanisme par mécanisme. Pour chacun : **ce que c'est** (concret, exploitable) et **pourquoi ça marche** (le principe psychologique sous-jacent, nommé).

### Notre cadre d'honnêteté radicale

Cap365 ne promet **jamais** la richesse, le bonheur permanent ou la vie parfaite. Nous promettons une seule chose, vérifiable : *si tu reviens, le système te facilite la suite.* Toute la rétention décrite ici sert **l'utilisateur**, pas un compteur de rétention. La frontière entre « soutenir » et « rendre dépendant » est traitée explicitement à la fin (§ Éthique). Elle n'est pas un ajout : c'est une contrainte de conception.

### Le principe directeur : « ne jamais rater deux fois »

Toute l'architecture converge vers une règle simple, répétée partout dans le produit :

> **Rater un jour n'est rien. Rater deux jours de suite est le seul vrai danger.**

Le premier raté est un accident. Le deuxième installe l'identité « j'ai arrêté ». Notre job : intercepter l'utilisateur **entre le jour 1 et le jour 2** d'absence, avec le moins de friction et de honte possible.

### Repères chromatiques & ergonomiques (rappel charte)

- Fond profond `#1B2A4A` · accent `#F5A623` (séries, victoires, CTA) · neutre `#8A93A2` (états secondaires, désamorçage).
- **Mobile-first** : tout mécanisme ci-dessous est pensé pour un écran tenu d'une main, en moins de 10 secondes d'attention.
- L'accent orange `#F5A623` est **réservé** aux signaux de progression et de victoire. La honte, l'échec, le « jour manqué » ne sont **jamais** en rouge agressif : ils restent en neutre `#8A93A2`. *La couleur ne punit jamais.*

---

## 1. Système de séries (streak)

### 1.1 Ce que c'est

La **série** compte les jours consécutifs où l'utilisateur a relevé son défi (ou utilisé une journée de grâce / un bouclier — voir plus bas). C'est l'indicateur émotionnel n°1 de l'app.

**Règles de base**

| Élément | Règle |
|---|---|
| Incrément | +1 par jour validé (défi complet **ou** mini-défi « jour sans », voir §3). |
| Fenêtre journalière | La journée court de 00h00 à 23h59 dans le fuseau de l'utilisateur. Un buffer de grâce de **3h après minuit** (jusqu'à 02h59) compte encore pour la veille — on ne punit pas le couche-tard. |
| Rupture | La série ne tombe à 0 **que** si un jour passe sans validation, sans grâce, sans bouclier **et** sans reprise dans les 48h. |
| Affichage | Compteur 🔥 + nombre, toujours visible en haut de l'écran d'accueil, en accent `#F5A623`. |

**Affichage et micro-design**

- Le chiffre de série **grossit légèrement** et pulse à chaque validation (récompense visuelle immédiate, voir §4).
- Sous le chiffre : le **prochain jalon de série** (« plus que 2 jours avant ton record » / « J7 dans 1 jour »). C'est un objectif proche permanent (§7).
- Un **anneau de la semaine** (7 pastilles) montre les jours faits / grâce / restants. On voit d'un coup d'œil « où on en est ».

### 1.2 Journée de grâce (déjà existante — conservée)

- **1 jour sautable par semaine** sans casser la série. Réinitialisée chaque lundi (ou au jour d'inscription + 7).
- Quand l'utilisateur ouvre l'app un jour sans rien faire et qu'il lui reste une grâce, on **propose** : « Tu veux poser ta journée de grâce d'aujourd'hui ? Ta série est protégée. »
- La grâce **non utilisée n'est pas reportée** (sinon elle s'accumule et perd son rôle). Mais on signale le dimanche soir : « Il te reste 1 grâce, elle expire à minuit » — légère **aversion à la perte** qui pousse à finir la semaine proprement.

### 1.3 Bouclier de série (« streak freeze » à gagner)

Nouveau renfort. Le **Bouclier** gèle la série pour **un jour entier d'absence totale** (l'utilisateur n'ouvre même pas l'app).

- **Ne s'achète pas. Se gagne.** On l'obtient en atteignant des jalons (J7, J30…), en complétant une semaine parfaite, ou via un défi bonus. Le gagner crée de la valeur (voir IKEA effect, §4).
- Stock plafonné à **2 boucliers** maximum (anti-accumulation, anti-auto-tromperie — voir §3.4).
- Consommé **automatiquement** quand la série allait tomber : l'utilisateur revient et découvre « 🛡️ Ton Bouclier a protégé ta série de 23 jours pendant ton absence. » → soulagement, pas culpabilité.

### 1.4 Pourquoi la série crée de l'engagement

| Principe psychologique | Mécanisme dans Cap365 |
|---|---|
| **Aversion à la perte** (Kahneman & Tversky) | Perdre une série de 40 jours fait *plus mal* que gagner +1 ne fait plaisir. Plus la série est longue, plus elle est précieuse — donc plus elle protège l'assiduité. |
| **Effet de dotation / coût irrécupérable perçu** | La série devient une « possession ». On ne jette pas ce qu'on a construit. |
| **Effet Zeigarnik** | Une tâche en cours (« série non rompue ») reste active dans l'esprit et génère une tension qui pousse à compléter. |
| **Engagement-cohérence** (Cialdini) | « Je suis quelqu'un qui n'a jamais cassé sa série » devient une auto-description qu'on veut honorer. |

**Garde-fou éthique intégré** : la série est puissante, donc dangereuse. C'est précisément pourquoi nous l'entourons de grâce, de bouclier et de filet de reprise. *Une série sans filet est une machine à culpabilité.* La nôtre est une machine à revenir.

---

## 2. Système de reprise après échec

C'est le cœur anti-abandon. La plupart des apps perdent l'utilisateur **le jour d'après le premier raté**, par honte. Cap365 désamorce ce moment.

### 2.1 Le Filet de Reprise (déjà existant — renforcé)

> **Règle d'or : l'XP n'est jamais perdue.** Une série qui tombe ne reprend pas à zéro de progression. Le niveau, les stats, les rangs, les acquis restent acquis. Seul le **compteur de jours consécutifs** se réinitialise — et même lui peut être en partie restauré.

- **Pourquoi** : *aversion à la perte* retournée en notre faveur. Si rater effaçait des semaines d'XP, l'utilisateur fuirait l'app pour ne pas voir la perte. En garantissant que **rien d'acquis ne disparaît**, on supprime la peur qui motive la fuite. Le coût psychologique de revenir devient quasi nul.

### 2.2 Le rituel de reprise

Quand l'utilisateur revient après une rupture, il ne retombe pas brutalement dans le flux normal. Il passe par un **écran de reprise** court et chaleureux :

1. **Reconnaissance, zéro reproche** : « Content de te revoir. Une pause, ça arrive à tout le monde. » (Ton neutre `#8A93A2`, jamais de rouge, jamais « tu as échoué ».)
2. **Recontextualisation de l'acquis** : « Tu avais atteint le niveau 12 · 1 240 XP · rang Artisan. **Tout est toujours là.** »
3. **Un seul micro-pas** : un mini-défi de reprise < 5 min, choisi facile, pour produire une **victoire immédiate** (§6). « Reprends avec ça. C'est tout ce qu'on te demande aujourd'hui. »
4. **Réamorçage de la série** : la nouvelle série démarre, et on rappelle la règle « ne jamais rater deux fois ».

**Pourquoi ça marche**

| Principe | Effet |
|---|---|
| **Self-compassion** (Kristin Neff) | La honte pousse à l'évitement ; la bienveillance pousse au retour. On remplace le jugement par la normalisation (« ça arrive à tout le monde »). |
| **Effort minimal pour ré-entrer** (réduction de friction, BJ Fogg) | Un micro-pas de 5 min est sous le seuil de résistance. On ne demande pas de « rattraper », juste de *rouvrir la porte*. |
| **Engagement-cohérence** | Faire un tout petit acte aujourd'hui ré-active l'identité « je suis quelqu'un qui le fait ». |

### 2.3 Badge Phénix

- Décerné lors d'une **reprise réussie** : revenir après une rupture **et** tenir au moins 3 jours derrière.
- Renarre l'échec en **chapitre héroïque** : « Tu es tombé, tu es revenu. C'est ça, le vrai cap. »
- Le Phénix peut être gagné **plusieurs fois** — chaque rechute surmontée est honorée, jamais comptée contre l'utilisateur.

**Pourquoi** : **reframing narratif de l'identité**. L'histoire qu'on se raconte sur soi détermine le comportement. « J'ai abandonné » est une identité terminale ; « je suis quelqu'un qui revient toujours » est une identité de résilience qui *prédit* le retour suivant.

### 2.4 La règle « ne jamais rater deux fois » — opérationnalisée

- **Après 1 jour manqué** : aucune dramatisation. Notification douce le lendemain matin (voir §5). La série n'est *pas encore* perdue (fenêtre 48h + grâce + bouclier).
- **Au début du 2e jour manqué** : alerte prioritaire, ton direct mais bienveillant : « C'est le moment. Un 2e jour de suite et l'habitude décroche. 5 minutes suffisent. »
- L'app **propose activement** une grâce ou un bouclier disponible *avant* la rupture, pas après.

**Pourquoi** : c'est l'application directe de la recherche sur la formation d'habitudes (Lally et al.) — **un raté isolé n'affecte pas la formation de l'habitude ; c'est l'enchaînement de ratés qui la brise.** On concentre donc toute l'intervention sur cette charnière unique.

---

## 3. Système de rattrapage

Objectif : offrir des portes de sortie honorables un mauvais jour, **sans** créer de triche qui viderait le système de son sens.

### 3.1 Mode « jour sans » (mini-défi < 10 min)

- Chaque défi du jour a une **version réduite < 10 minutes**, accessible via un bouton « Pas aujourd'hui — version courte ».
- Valide la série, donne une **XP réduite** (ex. 50 % de la difficulté arrondie), et déclenche une mini-victoire (§6).
- Le langage est clé : pas « tu as triché » mais « tu as quand même montré le cap aujourd'hui ».

**Pourquoi** : principe du **« never miss twice » + plus petit pas possible**. Il vaut mieux un acte minuscule qu'un zéro : le zéro brise la chaîne comportementale, le minuscule la maintient. On préserve le **rituel** (le geste d'ouvrir et d'agir) même quand le contenu est réduit.

### 3.2 Report intelligent

- Un défi peut être **reporté au lendemain** (max 1 report par défi, max 2 reports actifs simultanés).
- Le report **conserve la série** mais empile une mini-charge le lendemain (le défi reporté + celui du jour, le 2e en version courte automatiquement pour ne pas surcharger).
- L'app suggère le report intelligemment : si l'utilisateur ouvre tard le soir un défi de difficulté ≥ 7, elle propose « Trop tard pour bien le faire ? Reporte-le à demain matin, garde ta série avec un mini-geste ce soir. »

**Pourquoi** : **implementation intentions** (Gollwitzer) — replanifier *quand exactement* on fera la tâche augmente massivement la probabilité de l'exécuter, comparé à l'abandon pur.

### 3.3 Semaine de rattrapage

- Tous les **30 jours**, une semaine « allégée » optionnelle : défis plus courts, possibilité de **récupérer 1 jour manqué** du mois en faisant un défi double.
- Sert de **soupape** pour les périodes de vie chargées (examens, déménagement, coup dur).

**Pourquoi** : **prévention de l'épuisement et du « what-the-hell effect »** (Polivy & Herman). Sans soupape, un utilisateur débordé bascule dans le « tout est foutu, j'arrête ». La semaine de rattrapage offre une issue *dans le système* plutôt qu'en dehors (= l'abandon).

### 3.4 Plafonds anti-auto-tromperie

Le rattrapage est une béquille, pas un mode de vie. Garde-fous :

| Garde-fou | Valeur |
|---|---|
| Mini-défis « jour sans » consécutifs | **2 max** d'affilée → au 3e, l'app invite gentiment au défi complet : « Tu enchaînes les versions courtes. Tout va bien ? On peut alléger ton objectif global si besoin. » |
| Boucliers en stock | 2 max (§1.3) |
| Reports actifs | 2 max (§3.2) |
| Récupération de jours manqués | 1 par semaine de rattrapage, soit max ~1/mois |

**Pourquoi** : sans plafond, le rattrapage devient **auto-tromperie** — on « maintient la série » sans rien faire de réel, et le sens s'effondre. Les plafonds **protègent la valeur** du système (un acquis facile à simuler ne vaut rien) tout en préservant la bienveillance. Le message au 3e mini-défi propose aussi de **recalibrer l'objectif** : parfois la bonne réponse n'est pas de rattraper, mais d'ajuster le niveau de vie réel de l'utilisateur — c'est de l'honnêteté radicale.

---

## 4. Récompenses

### 4.1 Économie de base (rappel V2)

- Difficulté **1-10** par défi · **XP = difficulté × 10**.
- 8 stats : **Discipline, Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité**.
- **50 niveaux / 10 rangs**. Chaque défi alimente une ou plusieurs des 8 stats.

### 4.2 Calendrier de renforcement : fixe + ratio variable

On combine **deux types de renforcement**, chacun à sa place :

**Renforcement FIXE (prévisible, contractuel)**
- XP garantie à chaque défi (difficulté × 10). L'utilisateur sait exactement ce qu'il gagne.
- **Pourquoi** : la prévisibilité crée un **contrat clair** et un sentiment de justice. C'est la colonne vertébrale, la promesse tenue. *L'honnêteté radicale exige que l'effort soit toujours récompensé de façon transparente.*

**Renforcement à RATIO VARIABLE (surprise, dosé)**
- En plus de l'XP fixe, des **bonus imprévisibles** surviennent de temps en temps : carte bonus rare, double-XP surprise, message manuscrit débloqué, bouclier offert, citation rare.
- Fréquence **modérée et plafonnée** (jamais d'effet machine à sous), déclenchée par la régularité, pas par le hasard pur.

**Pourquoi** : le **renforcement à ratio variable** est le schéma le plus résistant à l'extinction (Skinner) — l'incertitude du *quand* maintient l'attention. **MAIS** utilisé seul, c'est le moteur des mécaniques addictives. Notre dosage : le variable est un **assaisonnement** sur une base fixe loyale, et il récompense **la constance** (donc le bon comportement), jamais le simple fait de rester scotché à l'écran. Voir § Éthique.

### 4.3 Immédiat vs différé

| Horizon | Récompense | Rôle |
|---|---|---|
| **Immédiat** (< 1 s) | Animation, son, +XP qui s'incrémente, pulse de la série, mini-victoire | Boucle de récompense instantanée — *indispensable* car le bénéfice réel d'un défi de vie est souvent différé et invisible. On rend tangible l'invisible. |
| **Court terme** (jour/semaine) | Montée de niveau, anneau de semaine complété, badge hebdo | Maintient le cap entre deux jalons. |
| **Différé** (jalons) | Déblocages majeurs, paliers de rang, contenus, reconnaissance | Donne une raison de viser loin. |

**Pourquoi** : on lutte contre le **temporal discounting** (on dévalue les récompenses lointaines). En injectant des récompenses **immédiates** sur un comportement dont les bénéfices sont **différés**, on rend l'effort « payant tout de suite » côté ressenti.

### 4.4 Jalons J7 / J30 / J90 / J182 / J365

| Jalon | Sens psychologique | Récompense |
|---|---|---|
| **J7** | *« Je peux le faire. »* Première preuve. | Premier vrai rang franchi, 1er Bouclier offert, écran de célébration, déblocage du suivi par stat. |
| **J30** | *Habitude en formation* (zone Lally). | Rang notable, badge « Premier Mois », bilan personnalisé des 8 stats (radar, §7), bouclier supplémentaire. |
| **J90** | *« C'est devenu qui je suis. »* Identité installée. | Palier de rang majeur, déblocage de défis avancés, bilan trimestriel, message de reconnaissance. |
| **J182** | *Mi-parcours* — le cap de l'année est crédible. | Reconnaissance forte, rétrospective « 6 mois de cap », jalon visuel marquant sur la courbe. |
| **J365** | *Accomplissement* — preuve de transformation tenue. | Statut le plus élevé, rétrospective complète de l'année (8 stats, séries, Phénix gagnés), invitation à concevoir « son année 2 ». |

**Pourquoi** : **goal gradient effect** (Hull / Kivetz) — l'effort s'intensifie à l'approche d'un objectif. Des jalons **rapprochés au début** (J7 avant J30) capturent l'utilisateur pendant la phase fragile, puis on espace à mesure que l'habitude tient. Chaque jalon est aussi un **fresh start** (§8) : un nouveau chapitre qui relance l'élan.

---

## 5. Rappels (notifications)

> Principe transversal : **une bonne notification respecte l'attention.** Trop = on se désabonne, on désinstalle. La notification de Cap365 est rare, utile, et toujours ré-engageante plutôt que culpabilisante.

### 5.1 Design général

| Paramètre | Choix |
|---|---|
| **Heure** | Apprise par l'app : on détecte l'heure habituelle de validation et on rappelle ~30-60 min *avant* la fenêtre habituelle, pas à une heure fixe imposée. Par défaut : un rappel le matin (planification) + un en début de soirée (dernière chance). |
| **Fréquence** | **Max 1 notification/jour** en régime normal. On monte en intensité *uniquement* sur série en danger ou absence (voir ci-dessous). |
| **Ton** | Bienveillant, direct, jamais culpabilisant. Tutoiement. Aligné honnêteté radicale : pas de fausse urgence, pas de « ta vie va changer ». |
| **Personnalisation** | Prénom, défi du jour nommé, stat ciblée, état de la série. Implementation intention intégrée (« quand ? où ? »). |
| **Coupe-circuit** | L'utilisateur règle finement (heures, types). Le **mode silence / vie chargée** stoppe tout sauf le minimum, sans casser la série. |

### 5.2 Rappel quotidien — exemples de copies

> 🌅 « Salut Léa. Ton défi du jour : *10 min de marche au réveil* (Vitalité). Quand le fais-tu aujourd'hui ? »

> 🌆 « Il te reste 3h pour garder ton cap. 7 minutes suffisent ce soir. »

### 5.3 Rappel de série en danger — exemples

> 🔥 « Ta série de **34 jours** est en jeu. Encore aujourd'hui et elle tient. Tu as une journée de grâce si besoin. »

> 🛡️ « Dernière heure. Tu peux finir ton défi, poser ta grâce, ou utiliser un Bouclier. Ta série de 34 jours ne tombera pas. »

**Pourquoi** : **aversion à la perte** + **near-miss** (§7). Mentionner le nombre exact (34) rend la perte concrète. Toujours **offrir une issue** (grâce/bouclier/version courte) : on alarme *et* on sauve, sinon l'alarme pousse à fuir.

### 5.4 Messages de re-engagement après absence

L'absence est le moment critique. Cadence progressive et **désamorçante** :

**J+1 d'absence** — ton léger, zéro reproche, micro-pas :
> « Hier était une journée off ? Ça arrive. Reprends avec un mini-geste de 3 min — ta progression t'attend, intacte. »

**J+3 d'absence** — rappel de l'acquis (aversion à la perte sur l'XP, *pas* sur la honte) :
> « Léa, ton niveau 12 et tes 1 240 XP sont toujours là. Rien n'est perdu. Un petit défi aujourd'hui et tu repars. »

**J+7 d'absence** — fresh start + Phénix :
> « Une semaine, ça se rattrape sans souci. Reviens et décroche ton **badge Phénix** : ceux qui reviennent vont souvent plus loin que ceux qui n'ont jamais chuté. »

**J+14 d'absence** — réinvitation douce, sans pression, porte ouverte :
> « On ne va pas insister. Juste te dire : ta place et ta progression t'attendent. Un seul défi, quand tu veux, et le cap reprend. » *(Après ce message, on espace fortement — on respecte le choix de l'utilisateur, voir Éthique.)*

**Pourquoi**

| Principe | Application |
|---|---|
| **Self-compassion** | Aucun message ne dit « tu as échoué ». L'absence est normalisée. |
| **Aversion à la perte (acquis, pas honte)** | On rappelle ce qui est *préservé*, ce qui donne envie de revenir le récupérer en l'utilisant. |
| **Fresh start effect** (Dai et al.) | J+7 et J+14 offrent un « nouveau départ » propre, débarrassé du passé. |
| **Respect de l'autonomie** | La cadence **décroît** : pas de harcèlement. C'est éthique *et* efficace (le harcèlement déclenche la désinstallation). |

---

## 6. Mini-victoires — une victoire chaque jour, même un mauvais jour

### 6.1 Le principe

**Aucune journée ne doit se terminer sur un zéro.** Chaque jour offre au moins une victoire atteignable, garantie :

- Le défi complet → victoire pleine.
- Sinon, la **version courte < 10 min** (§3.1) → mini-victoire.
- Sinon, le **simple fait d'ouvrir l'app et de cocher « présent »** déclenche une micro-reconnaissance (« Tu es venu. C'est déjà tenir le cap. ») — geste minimal qui préserve le rituel.

Chaque victoire = **feedback immédiat** : +XP visible, animation, son discret, série qui pulse, une stat qui monte.

### 6.2 Pourquoi ça marche

| Principe | Effet |
|---|---|
| **Progress principle** (Amabile & Kramer) | Le moteur n°1 de motivation interne au quotidien est **le sentiment de petit progrès**. Une mini-victoire par jour alimente ce moteur même les mauvais jours. |
| **Self-efficacy** (Bandura) | Réussir, même petit, renforce la croyance « j'en suis capable » — qui prédit la persévérance. |
| **Boucle d'habitude** (signal → action → récompense) | La récompense immédiate (même symbolique) **consolide** la boucle, jour après jour. |
| **What-the-hell effect évité** | Garantir une victoire empêche le basculement « j'ai raté donc tout est foutu ». |

> **Conception clé** : on découple *progression* et *performance*. On célèbre l'**acte de se montrer** autant que la qualité du défi. Un mauvais jour bien traversé est une victoire d'identité (« je tiens le cap »).

---

## 7. Effet de progression — rendre le progrès visible

Le bénéfice réel d'un défi de vie est lent et invisible. Notre rôle : **rendre le progrès tangible, tout de suite.**

### 7.1 Les visualisations

| Visualisation | Ce qu'elle montre | Principe psy |
|---|---|---|
| **Barre de niveau** (XP → niveau suivant) | Distance au prochain palier, en accent `#F5A623`. | **Goal gradient** : voir la barre se remplir accélère l'effort près du but. |
| **Radar des 8 stats** | Forme globale du profil (Discipline, Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité). | **Effet de complétude** : un radar « déséquilibré » donne envie de combler les creux (tension Zeigarnik appliquée au profil). |
| **Courbe annuelle** | Trajectoire jour après jour sur l'année, jalons J7/J30/J90/J182/J365 marqués. | **Endowed progress** : voir le chemin déjà parcouru rend l'abandon coûteux. |
| **Anneau de semaine** (§1.1) | 7 jours en un coup d'œil. | Objectif proche permanent : « complète ta semaine ». |

### 7.2 Near-miss et objectifs proches

- On affiche **toujours** le prochain seuil atteignable : « plus que 30 XP avant le niveau 13 », « 2 jours avant ton record de série ».
- À l'approche d'un seuil, on **renforce le rappel** : « Tu es à 1 défi du niveau 13. »
- **Endowed progress effect** (Nunes & Drèze) : on démarre les nouvelles barres avec une **avance offerte** (ex. une carte de progression « 2/10 » déjà entamée plutôt que « 0/10 ») — psychologiquement, une tâche déjà commencée se finit beaucoup plus.

**Pourquoi**

| Principe | Effet sur la rétention |
|---|---|
| **Goal gradient effect** | L'effort grimpe à l'approche d'un objectif visible. Donc on garde toujours un objectif *proche* à l'écran. |
| **Near-miss** | « Si proche » crée une tension motivante (à doser : motivant, jamais frustrant). |
| **Endowed progress** | Une progression déjà entamée se complète plus que partie de zéro. |
| **Zeigarnik (visuel)** | Un radar/une barre/un anneau incomplets « appellent » la complétion. |

---

## 8. Mécanismes psychologiques de retour

Ces leviers travaillent **avant** le moment de tentation et **pendant** l'absence, pour ramener l'utilisateur.

### 8.1 Habit stacking & ancrages (déclencheurs)

- À l'onboarding et à chaque jalon, on aide l'utilisateur à **arrimer** son défi à un comportement existant : *« Après [mon café du matin], je ferai [mon défi]. »*
- Les rappels (§5) reprennent l'ancre : « C'est l'heure de ton café — et de ton défi. »

**Pourquoi** : **implementation intentions** + **habit stacking** (Gollwitzer, Clear) — accrocher un nouveau comportement à un signal stable et quotidien automatise le déclenchement et réduit la dépendance à la volonté.

### 8.2 Engagement public

- Option : partager un jalon (J7, J30, Phénix) à un cercle choisi, ou afficher un « cap » public léger.
- **Cercles de cap** optionnels : petits groupes où l'on voit la régularité des autres (jamais le contenu intime des défis).

**Pourquoi** : **engagement-cohérence + preuve sociale** (Cialdini). Une intention rendue publique pèse davantage — on agit pour rester cohérent avec l'image annoncée. *Strictement opt-in* : la pression sociale doit être choisie, jamais subie (Éthique).

### 8.3 Contrats avec soi-même

- À l'onboarding et aux jalons, l'utilisateur formule un **contrat personnel** : son *pourquoi*, son ancre, ce qu'il fera un jour difficile.
- Ce contrat lui est **renvoyé** au bon moment : sur l'écran de reprise (§2.2) et dans les messages d'absence (« Tu avais écrit : *je veux tenir pour…* »).

**Pourquoi** : **commitment device** + **engagement-cohérence**. Un engagement explicite, écrit, daté, augmente fortement le suivi. Se le faire rappeler à la charnière critique reconnecte au *pourquoi* profond, plus puissant que n'importe quel badge.

### 8.4 Fresh start effect

- Chaque **lundi**, **1er du mois**, **anniversaire d'inscription**, et chaque **jalon** sont mis en scène comme des « nouveaux départs ».
- Surtout : après une rupture, l'écran de reprise (§2.2) **est** un fresh start propre.

**Pourquoi** : **fresh start effect** (Dai, Milkman, Riis) — les repères temporels (« lundi », « nouveau mois ») créent une coupure psychologique avec le « moi imparfait » d'avant et boostent l'élan. On les exploite *en faveur du retour*, pas pour culpabiliser du passé.

### 8.5 Loss aversion (synthèse)

L'aversion à la perte irrigue tout le système, mais **toujours du bon côté** :
- On craint de perdre **la série** → on revient.
- On apprend qu'on ne perd **jamais l'XP** → on n'a pas peur de revenir.
- On évite de perdre une **grâce qui expire** → on finit la semaine.

> Subtilité éthique : l'aversion à la perte est un levier puissant et donc potentiellement anxiogène. Notre design la **canalise vers l'action constructive** (revenir, agir) et la **désarme côté honte** (rien d'acquis ne se perd). On ne crée jamais de perte artificielle dont le seul but serait de faire mal.

---

## Tableau récapitulatif — Mécanisme → Principe psy → Effet rétention

| # | Mécanisme | Principe psychologique | Effet sur la rétention |
|---|---|---|---|
| 1 | Série (streak) | Aversion à la perte · Zeigarnik · dotation | Rend la rupture coûteuse → assiduité quotidienne. |
| 1 | Journée de grâce | Soupape · auto-compassion | Évite la rupture les jours faibles → série survit. |
| 1 | Bouclier de série (gagné) | IKEA effect · aversion à la perte | Protège l'absence totale → pardonne sans casser. |
| 2 | Filet de Reprise (XP jamais perdue) | Aversion à la perte *retournée* | Supprime la peur de revenir → retour quasi sans coût. |
| 2 | Rituel de reprise | Self-compassion · friction minimale | Transforme la honte en simple re-entrée → réactive l'usage. |
| 2 | Badge Phénix | Reframing narratif d'identité | « Je suis quelqu'un qui revient » → prédit le retour suivant. |
| 2 | « Ne jamais rater 2 fois » | Recherche habitudes (Lally) | Intercepte la charnière exacte de l'abandon. |
| 3 | Mode « jour sans » | Plus petit pas · never miss twice | Maintient le rituel un mauvais jour → chaîne intacte. |
| 3 | Report intelligent | Implementation intentions | Replanifier > abandonner → tâche exécutée plus tard. |
| 3 | Semaine de rattrapage | Anti what-the-hell effect | Soupape pour vies chargées → évite le décrochage total. |
| 3 | Plafonds anti-triche | Préservation de la valeur · honnêteté | Garde le système crédible et l'utilisateur lucide. |
| 4 | Renforcement fixe | Contrat clair · justice | Effort toujours récompensé → confiance, prévisibilité. |
| 4 | Ratio variable (dosé) | Renforcement intermittent (Skinner) | Maintient l'attention → résistance à l'extinction. |
| 4 | Récompense immédiate | Anti temporal discounting | Rend payant *tout de suite* un bénéfice différé. |
| 4 | Jalons J7→J365 | Goal gradient · fresh start | Capture la phase fragile, relance l'élan à chaque palier. |
| 5 | Rappels personnalisés | Implementation intentions | Déclenche l'action au bon moment, bon canal. |
| 5 | Alerte série en danger | Aversion à la perte · near-miss | Sauve la série + offre une issue → action immédiate. |
| 5 | Re-engagement J1→J14 | Self-compassion · fresh start | Ramène l'absent sans honte → réactivation. |
| 6 | Mini-victoire garantie | Progress principle · self-efficacy | Jamais de zéro → moteur de motivation quotidien. |
| 7 | Progrès visible (barre/radar/courbe) | Goal gradient · Zeigarnik visuel · endowed progress | Rend l'invisible tangible → effort soutenu. |
| 7 | Near-miss / objectif proche | Goal gradient · near-miss | Un but atteignable toujours à l'écran → push final. |
| 8 | Habit stacking / ancrages | Implementation intentions | Automatise le déclenchement → moins de volonté requise. |
| 8 | Engagement public (opt-in) | Engagement-cohérence · preuve sociale | Intention publique = suivi renforcé. |
| 8 | Contrat avec soi | Commitment device · cohérence | Reconnecte au *pourquoi* à la charnière critique. |
| 8 | Fresh start | Fresh start effect | Chaque repère temporel relance l'élan. |

---

## Checklist anti-abandon (actionnable)

**Conception du produit — à cocher avant chaque release**

- [ ] La série est visible dès l'ouverture, avec le prochain jalon affiché.
- [ ] Journée de grâce active, proposée *avant* la rupture, expiration signalée le dimanche.
- [ ] Bouclier de série : se **gagne** (jamais s'achète), plafonné à 2, consommé automatiquement.
- [ ] L'XP n'est **jamais** perdue lors d'une rupture — vérifié dans le code et affiché à l'utilisateur.
- [ ] Écran de reprise : zéro reproche, rappel de l'acquis, un seul micro-pas < 5 min.
- [ ] Badge Phénix décerné à toute reprise tenue ≥ 3 jours, répétable.
- [ ] Logique « ne jamais rater 2 fois » : intervention prioritaire au **début du 2e jour** d'absence.
- [ ] Version courte < 10 min disponible pour **chaque** défi.
- [ ] Report intelligent (max 2 actifs) + semaine de rattrapage tous les 30 jours.
- [ ] Plafonds anti-auto-tromperie en place (2 mini-défis d'affilée, 2 boucliers, 2 reports) + message de recalibrage.
- [ ] Récompense **immédiate** à chaque validation (XP visible, animation, pulse série).
- [ ] Renforcement fixe garanti + bonus à ratio variable **dosé et plafonné** (jamais machine à sous).
- [ ] Jalons J7 / J30 / J90 / J182 / J365 célébrés avec récompense et rétrospective.
- [ ] Notifications : max 1/jour en régime normal, heure apprise, ton bienveillant, opt-out granulaire.
- [ ] Séquence de re-engagement J+1 / J+3 / J+7 / J+14, cadence **décroissante**, jamais culpabilisante.
- [ ] Une **mini-victoire garantie** chaque jour, même en cas de simple présence.
- [ ] Progrès visible : barre de niveau, radar 8 stats, courbe annuelle, anneau de semaine, near-miss.
- [ ] Habit stacking proposé à l'onboarding ; ancre rappelée dans les notifications.
- [ ] Engagement public et cercles de cap strictement **opt-in**.
- [ ] Contrat personnel collecté et **renvoyé** au moment de la reprise et de l'absence.
- [ ] Fresh start mis en scène (lundi, 1er du mois, anniversaire, jalons, reprise).
- [ ] **Aucune promesse interdite** dans aucun texte (ni richesse, ni bonheur permanent, ni vie parfaite).
- [ ] La couleur ne punit jamais : échec/absence en neutre `#8A93A2`, jamais en rouge.

**Signaux à surveiller (santé de la rétention)**
- [ ] Taux de retour J+1 / J+2 après un raté (la métrique reine).
- [ ] % d'utilisateurs déclenchant la séquence de re-engagement et revenant.
- [ ] Ratio mini-défis / défis complets (si trop haut → fatigue, recalibrer).
- [ ] Taux de désinstallation post-notification (si ça monte → réduire la fréquence).

---

## Encart éthique — Soutenir, pas rendre dépendant

> Cap365 manipule des leviers psychologiques puissants. Avec ce pouvoir vient une responsabilité non négociable. **Notre boussole : chaque mécanisme doit servir la vie de l'utilisateur, pas le temps d'écran ni un KPI de rétention.**

**Nos lignes rouges**

1. **Pas de machine à sous.** Le ratio variable est un assaisonnement plafonné sur une base fixe loyale ; il récompense la **constance réelle**, jamais le simple fait de rester scotché. Aucune mécanique conçue pour exploiter la dopamine de l'incertitude pure.
2. **La honte est interdite comme levier.** On utilise l'aversion à la perte sur les *acquis et la série*, jamais sur la valeur personnelle. Aucun texte ne dit « tu as échoué ». La couleur ne punit pas.
3. **L'absence est un droit.** Les notifications décroissent en cas de non-retour. Après J+14, on se met en retrait : on respecte le choix d'arrêter. Pas de dark pattern pour empêcher de partir.
4. **Pas de fausse urgence ni de fausse rareté.** Aucune promesse interdite, aucun compte à rebours manipulatoire. L'honnêteté radicale s'applique aussi aux mécaniques d'engagement.
5. **L'auto-tromperie est combattue, pas exploitée.** Les plafonds existent pour que l'utilisateur reste lucide sur son effort réel — quitte à lui proposer de *réduire* son objectif quand sa vie l'exige.
6. **Le but est l'autonomie, pas la dépendance.** Le succès ultime de Cap365 n'est pas qu'on y reste pour toujours : c'est que les habitudes et l'identité construites **tiennent même sans l'app**. Une rétention saine est une rétention dont l'utilisateur pourrait se passer — et qui reste par valeur, pas par piège.

> **Test de chaque mécanisme** : *« Si l'utilisateur comprenait exactement comment ça marche, l'approuverait-il encore ? »* Si la réponse est non, on ne le construit pas.

---

*Fin du pilier 03 — Système de rétention & anti-abandon de Cap365.*
