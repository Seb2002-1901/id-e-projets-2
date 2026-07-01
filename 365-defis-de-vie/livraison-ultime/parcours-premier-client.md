# 🧭 Cap365 — Parcours du premier client (arrivée → upsell)

> **Marque maison :** Cairn · **Produit :** Cap365 — 365 Défis de Vie
> **Nature :** expérience « app sans app » — template Notion premium (à dupliquer) + PDF interactif, mobile-first.
> **Gamme :** Le Sentier 19 € · L'Ascension 39 € ⭐ · Le Sommet 89 € · **Garantie 30 jours** satisfait ou remboursé.
> **Ton :** direct, chaleureux, honnêteté radicale, on tutoie. **Aucune promesse interdite** (richesse / bonheur permanent / vie parfaite).
> **Cible :** 18-35 ans qui ont déjà abandonné d'autres programmes.
> **Métaphore fil rouge :** 1 défi validé = 1 pierre posée · le cairn qui grandit = la progression visible · le repère = l'anti-abandon.

**But de ce document :** simuler intégralement, écran par écran, le vécu d'un nouveau client — de l'arrivée depuis TikTok jusqu'à la proposition d'upsell — pour repérer les frictions avant le lancement et provoquer le plus tôt possible le « moment magique » : **la première validation.**

**Persona témoin de la simulation :** *Lucas, 26 ans.* Tombé sur une vidéo TikTok à 22 h 40 depuis son canapé, sur mobile. A déjà lâché une app de méditation, un abonnement salle et deux « résolutions du 1er janvier ». Sceptique mais curieux. C'est lui qu'on suit à chaque étape.

**Légende des colonnes :** Écran/support vu · Action du client · Action automatique (système) · Résultat attendu · Points de friction possibles · Améliorations éventuelles.

---

## Étape 1 — Arrivée sur la page (TikTok/bio → landing)

| Élément | Détail |
|---|---|
| **Écran/support vu** | Vidéo TikTok (format 9:16, sous-titrée) → clic sur « lien en bio » → mini-page de liens (bio link) → **page d'accueil / landing Cap365**. Hero mobile : logo Cairn, accroche « Transforme ta vie comme si tu faisais évoluer ton personnage dans un RPG. Pendant 365 jours. », visuel radar 8 stats, mention « app sans app » et « à partir de 19 € · garantie 30 j ». |
| **Action du client** | Regarde la vidéo, clique sur la bio, choisit le lien Cap365, arrive sur la landing. Scanne 3 secondes le hero pour décider s'il reste. |
| **Action automatique (système)** | Redirection bio-link → landing. Pose du cookie/pixel (TikTok Pixel + analytics). Enregistrement de la source (`utm_source=tiktok`). Préchargement du hero mobile-first. Si opt-in présent : capture email → déclenche la **Séquence 4 (relance/vente)** si pas d'achat. |
| **Résultat attendu** | Le message « une app sans app, un défi par jour, ta vie comme un RPG » est compris en < 5 s. Lucas reconnaît la vidéo (cohérence visuelle pub ↔ landing) et scrolle vers la découverte du produit. |
| **Points de friction possibles** | • Rupture de promesse entre la vidéo et la landing (visuels/ton différents) → défiance immédiate. • Temps de chargement mobile > 3 s → abandon. • Trop de texte au-dessus de la ligne de flottaison → on scrolle sans lire. • « Notion + PDF » mal compris (« c'est quoi Notion ? ») → doute produit. • Passage bio-link superflu qui rajoute un clic. |
| **Améliorations éventuelles** | • Aligner la 1re image de la landing sur le visuel exact de la vidéo (continuité de campagne). • Hero ultra-léger, image radar optimisée, LCP < 2,5 s. • Une phrase qui **désamorce Notion** dès le hero : « Tu ouvres un lien, tu joues. Rien à installer. » • Preuve de mécanique en 1 GIF (défi validé → XP qui monte). • Lien de bio direct vers la landing si la plateforme l'autorise (économiser un clic). |

---

## Étape 2 — Découverte du produit (landing → page produit)

| Élément | Détail |
|---|---|
| **Écran/support vu** | Corps de la landing puis **page produit** : « Ce que tu reçois » (365 défis /10 de difficulté, radar 8 stats, 50 niveaux / 10 rangs, 24 badges, quêtes, anti-abandon, Système de Preuves, Wrapped), galerie de captures (radar sur smartphone, défi du jour, mur de badges, Notion + PDF côte à côte), bloc « app sans app », **grille des 3 offres** (Le Sentier / L'Ascension ⭐ / Le Sommet), garantie 30 j, FAQ/objections. |
| **Action du client** | Scrolle, regarde les captures, lit « anti-abandon » (le mot qui le concerne vraiment), compare les 3 offres, ouvre 1-2 questions de la FAQ (« et si j'abandonne au bout de deux semaines ? »). |
| **Action automatique (système)** | Suivi de profondeur de scroll et de la vue « grille des offres » (événement analytics). Mise en avant visuelle automatique de L'Ascension (badge « Le plus choisi », accent orange, colonne surélevée). Affichage dynamique du prix « ≈ 11 centimes / jour ». Aucune fausse urgence, aucun faux prix barré. |
| **Résultat attendu** | Lucas comprend que le produit est fait **pour quelqu'un qui a déjà abandonné** (Filet de Reprise, Bouclier de série, badge Phénix). L'Ascension à 39 € apparaît comme le choix évident (effet d'ancrage Sentier/Sommet). Il clique « Je démarre » / « Choisir mon offre ». |
| **Points de friction possibles** | • Surcharge d'informations RPG (XP, rangs, quêtes, badges) → sentiment de complexité, peur que ce soit « trop de travail ». • Doute sur la nature réelle du produit (« je paie quoi exactement ? un PDF ? »). • Paradoxe du choix devant 3 offres. • Objection prix silencieuse non levée. • Captures qui ressemblent à un tableur Notion « pas sexy ». |
| **Améliorations éventuelles** | • Bloc « Comment ça marche en 3 étapes » (Ouvre → Valide un défi → Regarde ton XP monter) placé haut. • Un mini comparatif « 30 secondes » avant la grille détaillée. • Marquer clairement « recommandé » sur L'Ascension + une phrase « en cas de doute, prends celle-ci ». • Vidéo/GIF de 10 s montrant une vraie validation dans Notion mobile (rassure sur le rendu). • FAQ « C'est quoi Notion ? Faut-il un compte ? » en tête. |

---

## Étape 3 — Achat (checkout + order bump)

| Élément | Détail |
|---|---|
| **Écran/support vu** | **Page de paiement** : bandeau « 🔒 Sécurisé · ⚡ Accès immédiat · 🛡️ 30 jours garantis », récapitulatif de commande (offre choisie), **order bump** (case à cocher, jamais pré-cochée : Sentier→Ascension +20 € ou Ascension→Sommet +50 €), champ e-mail (« C'est là qu'on t'envoie ton accès »), champs carte chiffrés, encart garantie 30 j **avant** le bouton, CTA orange « 🧱 Je pose ma première pierre — Payer [PRIX] € ». |
| **Action du client** | Renseigne son e-mail, décide (ou non) de cocher l'order bump, saisit sa carte, clique sur le bouton de paiement. Éventuellement relit la garantie une dernière fois. |
| **Action automatique (système)** | Recalcul du total en direct à la coche/décoche du bump. Traitement du paiement par le prestataire (Stripe/PayPal). Sur succès : création de la commande, enregistrement de l'offre, déclenchement **Séquence 1 (Bienvenue/livraison)** immédiate + démarrage **Séquence 2 (activation)**. Sur abandon de checkout : déclenchement **Séquence 3 (abandon de panier)** (+1 h / +24 h / +48 h). Génération du reçu. |
| **Résultat attendu** | Paiement validé en < 60 s. Lucas prend L'Ascension (directement, ou via le bump depuis Le Sentier). Il arrive sur la page Merci, rassuré par « accès immédiat + garantie ». |
| **Points de friction possibles** | • Trop de champs / création de compte obligatoire → abandon. • E-mail mal saisi → livraison qui n'arrive jamais (friction n°1 critique). • Échec de paiement (carte étrangère, 3-D Secure) sans message clair. • Order bump ressenti comme une manipulation s'il est trop agressif. • Doute de dernière seconde « et si je n'y arrive pas ? » non traité près du bouton. • Absence de moyens de paiement locaux (Apple Pay / Google Pay) sur mobile. |
| **Améliorations éventuelles** | • Checkout invité (zéro création de compte), Apple Pay / Google Pay en 1 tap. • Validation + confirmation visuelle de l'e-mail saisi (« On enverra tout à lucas@… — c'est bien ça ? »). • Messages d'erreur de paiement explicites + relance en 1 clic. • Garder le bump doux, honnête, décochable, avec micro-argument « sans pression ». • Encart repliable « Et si j'abandonne ? » juste au-dessus du bouton (Filet de Reprise + garantie). • Barre de progression de commande (1. Offre → 2. Paiement → 3. Accès). |

---

## Étape 4 — Réception des e-mails (séquence Bienvenue/Livraison)

| Élément | Détail |
|---|---|
| **Écran/support vu** | Boîte mail (souvent mobile). **E-mail 1.1 « Ton accès Cap365 est prêt 🏔️ »** (immédiat, J0) : 2 accès — bouton « Ouvrir mon espace Cap365 » (Notion) + « Télécharger mon PDF », astuce favori mobile, rappel garantie, expéditeur humain « Sébastien (Cairn) ». Puis **E-mail 1.2 « Étape 1 : crée ton personnage »** (J0 + 3 h). Puis **E-mail 1.3 « Les 3 réflexes qui changent tout »** (J+1). |
| **Action du client** | Ouvre l'e-mail 1.1, clique « Ouvrir mon espace Cap365 ». (Idéalement met l'expéditeur en contact.) Revient 3 h plus tard sur l'e-mail 1.2 s'il a lâché entre-temps. |
| **Action automatique (système)** | Envoi transactionnel immédiat de 1.1 (priorité délivrabilité). Envoi programmé de 1.2 (J0+3 h) et 1.3 (J+1). Personnalisation `{Prénom}`. Tracking ouverture/clic. Nom d'expéditeur humain + domaine authentifié (SPF/DKIM/DMARC) pour éviter le spam. |
| **Résultat attendu** | E-mail 1.1 ouvert (cible 70 %+) et cliqué : Lucas accède à son espace en quelques minutes. Il comprend qu'il a **deux** supports (Notion = le jeu, PDF = la réserve hors-ligne). Il sait qu'une vraie personne répond s'il bloque. |
| **Points de friction possibles** | • **E-mail en spam / promotions** (friction critique) → accès jamais reçu. • Confusion Notion vs PDF (« lequel je dois utiliser ? »). • Lien Notion qui ouvre l'appli Notion et déroute (login demandé). • Décalage entre « accès immédiat » promis et e-mail qui tarde. • Deux CTA qui se concurrencent → indécision. |
| **Améliorations éventuelles** | • Afficher l'accès **aussi sur la page Merci** (ne pas dépendre de l'e-mail). • Rappel « regarde dans Spam/Promotions, ajoute-nous en contact » dès l'écran de confirmation. • Hiérarchiser : 1 CTA principal (Notion), le PDF en secondaire. • Micro-tuto « le lien s'ouvre dans ton navigateur, pas besoin de compte pour lire / 1 clic pour dupliquer ». • Monitorer le taux de délivrabilité et le délai d'envoi (alerte si > 5 min). |

---

## Étape 5 — Accès au produit (lien Notion/PDF + « crée ton personnage »)

| Élément | Détail |
|---|---|
| **Écran/support vu** | **Espace Notion Cap365** (mobile) : bouton « Dupliquer » en haut à droite, feuille de personnage (radar 8 stats vide, XP à 0, rang **Éveil**, niveau 1), guide « Crée ton personnage », Défi du Jour 1 prêt. En parallèle, le **PDF interactif** (365 défis, guide 7 premiers jours). Guidé par l'e-mail 1.2 : ① remplir le radar de départ (0-10 par stat), ② rang Éveil, ③ capture d'écran du radar. |
| **Action du client** | **Duplique** le template Notion (pour que ce soit le sien). Note honnêtement ses 8 stats de départ. Prend une capture du radar « jour 0 ». Ajoute la page à l'écran d'accueil du téléphone. |
| **Action automatique (système)** | Notion crée une copie personnelle éditable au clic « Dupliquer ». Les formules Notion (XP, niveau, rang, radar, série) se mettent à jour automatiquement quand une valeur change. Aucune donnée serveur côté Cap365 (l'espace vit chez le client) — d'où l'importance du geste « Dupliquer ». |
| **Résultat attendu** | Lucas a **son** espace, son radar de départ posé, sa capture « avant » en poche. Il ressent l'onboarding comme ludique (3 min) et voit son point zéro depuis lequel grimper. Il est à un pas du Jour 1. |
| **Points de friction possibles** | • **Oubli de « Dupliquer »** → il écrit sur le template partagé (ou en lecture seule) et se décourage → **friction critique**. • Nécessité d'un **compte Notion** non anticipée → abandon. • Rendu Notion mobile intimidant (beaucoup de blocs). • Étape « crée ton personnage » perçue comme un travail avant même le 1er défi → il repousse. • Capture d'écran zappée → il n'aura pas de comparaison plus tard. |
| **Améliorations éventuelles** | • **Écran de garde impossible à rater** : « ÉTAPE 0 — Clique sur Dupliquer (en haut à droite) avant tout. » avec flèche/visuel. • Vidéo de 30 s « comment dupliquer + ajouter à l'écran d'accueil ». • Réduire l'onboarding au strict minimum (radar + capture) et rendre le radar facultatif au 1er passage pour ne pas retarder le Jour 1. • Détecter le cas « pas de compte Notion » et fournir le PDF comme voie de secours immédiate. • Pré-remplir le radar à 3/10 partout pour éviter la page blanche. |

---

## Étape 6 — Premier défi (Jour 1 validé) — 🌟 LE MOMENT MAGIQUE

| Élément | Détail |
|---|---|
| **Écran/support vu** | **Carte « Défi du Jour 1 »** dans Notion : titre court, difficulté /10, XP à gagner (difficulté × 10), bouton/case **« Validé »**. Au clic : XP qui grimpe, série passée à **1**, une branche du radar qui bouge, feedback visuel « pierre posée ». |
| **Action du client** | Lit le défi (court, concret, faisable aujourd'hui), le réalise, coche **« Validé »**. Regarde son XP monter et sa série démarrer. |
| **Action automatique (système)** | Notion applique la formule : +XP (difficulté × 10), série = 1, mise à jour du radar et de la barre de niveau. Feedback immédiat (couleur succès verte, compteur). Côté e-mail : l'engagement Jour 1 conditionne la suite de la **Séquence 2 (activation)** et, plus tard, l'éligibilité upsell (série active). |
| **Résultat attendu** | **La première validation** : Lucas voit, noir sur blanc, que « ça compte ». C'est le déclic dopaminergique du produit — le moment qui transforme un acheteur en joueur. Il a posé sa première pierre et veut revenir demain. |
| **Points de friction possibles** | • Le feedback Notion est **discret** (une case cochée) → l'effet « lumière qui s'allume » manque → pas de déclic. • Défi 1 trop dur ou trop vague → il ne le fait pas aujourd'hui. • Il ne sait pas **où** cliquer pour valider. • Mise à jour du radar/XP pas assez visible sur mobile → progression invisible = démotivation (le mal qu'on combat). |
| **Améliorations éventuelles** | • Rendre le Défi 1 **volontairement facile et rapide** (5 min, difficulté 2-3) : une victoire garantie le jour 0. • Renforcer le feedback de validation (emoji, message « +30 XP · Série : 1 · Première pierre posée 🧱 » bien visible). • Flèche/indice « clique ici pour valider » sur la carte Jour 1. • Inviter à re-capturer le radar « après le 1er défi » pour matérialiser le mouvement. • Micro-célébration : une ligne « Bravo — tu viens de faire mieux que 9 personnes sur 10 qui n'ouvrent jamais. » |

---

## Étape 7 — J+1 (e-mail d'activation, retour dans l'app)

| Élément | Détail |
|---|---|
| **Écran/support vu** | **E-mail 1.3 « Les 3 réflexes qui changent tout »** (J+1 matin) : un défi par jour / regarde ta série grandir / rater n'est pas abandonner (Filet de Reprise, badge Phénix). CTA « Relever le défi du jour ». De retour dans Notion : **Défi du Jour 2**, série à conserver. |
| **Action du client** | Ouvre l'e-mail, clique « Relever le défi du jour », revient dans son espace, valide le Défi 2 → série passe à 2. |
| **Action automatique (système)** | Envoi de 1.3 (J+1). Prépare la Séquence 2 : **2.1 « Réussir les 7 premiers jours » (J+2)**. Tracking du retour (clic e-mail + activité). Segmentation : « actif J+1 » vs « inactif J+1 » (pour relance douce ciblée). |
| **Résultat attendu** | Lucas revient une 2e fois — le pas le plus prédictif de la rétention. Il intègre l'idée « un défi par jour, un seul » et sait que rater ne casse pas tout. Série = 2, l'élan démarre. |
| **Points de friction possibles** | • **Non-retour J+1** : l'enthousiasme du J0 retombe, pas de rappel assez incitatif → perte. • E-mail 1.3 noyé dans la boîte / non ouvert. • Il a oublié comment retrouver son espace (favori non ajouté). • Aucune notification native (Notion ne « push » pas) → il faut compter sur l'e-mail seul. |
| **Améliorations éventuelles** | • **Relance ciblée « inactif J+1 »** : mini e-mail « Ta série t'attend — 2 min suffisent ». • Rappel systématique d'ajouter le raccourci écran d'accueil (le vrai substitut de notification). • Dans l'e-mail, lien profond direct vers **la carte du jour**, pas la page d'accueil de l'espace. • Suggérer un créneau fixe (« quand veux-tu poser ta pierre ? le matin ? le soir ? »). • Optionnel : rappel calendrier (.ics) « défi du jour » quotidien. |

---

## Étape 8 — J+7 (jalon « Semaine pleine », série)

| Élément | Détail |
|---|---|
| **Écran/support vu** | Dans Notion : au 7e jour validé, **badge « Premier feu »** débloqué (jalon 7 jours) + **bonus Semaine pleine +50 XP** (validation 7/7), série à **7**, radar qui a visiblement bougé depuis la capture jour 0. **E-mail 2.3 « 7 jours. Tu l'as fait, {Prénom}. »** (J+7) : célébration + explication du Bouclier de série et du Filet de Reprise pour les jours à venir. |
| **Action du client** | Valide son 7e jour, voit le badge et le +50 XP tomber. Lit l'e-mail 2.3. Compare son radar au « jour 0 ». Ressent la fierté de « 7 jours de plus que la dernière fois ». |
| **Action automatique (système)** | Notion attribue le badge Premier feu + le bonus Semaine pleine (+50 XP) et met à jour l'affichage. Envoi de 2.3 (J+7). Marqueur « série active ≥ 7 j » posé — **c'est la condition d'éligibilité de l'upsell Sentier→Ascension (déclenché à J+10)**. |
| **Résultat attendu** | Lucas franchit le mur des 7 jours (là où « 85 % des abandons » arrivent). La progression est désormais **prouvée** (badge + XP + radar). Il est solidement dans la partie et devient éligible à une proposition de montée en gamme pertinente. |
| **Points de friction possibles** | • Écart de vocabulaire : le brief parle de badge « Semaine Pleine », le système livre **« Premier feu » (badge 7 j) + bonus Semaine pleine (+50 XP)** → risque d'incohérence de comm si non aligné. • Journée de grâce mal comprise → il croit sa série cassée après un jour manqué et lâche. • Badge peu visible dans Notion → jalon non ressenti. • Si l'utilisateur n'a pas fait 7/7 exact, il n'a pas le bonus mais peut penser avoir « échoué ». |
| **Améliorations éventuelles** | • **Aligner les libellés** partout (page, e-mails, Notion) : décider si on met en avant « Premier feu » ou « Semaine pleine » — un seul nom pour le jalon 7 j. • Écran de célébration dédié au 7e jour (« Semaine pleine ! 🔥 +50 XP, badge Premier feu »). • Rappeler la journée de grâce **avant** le premier raté (l'e-mail 2.3 le fait — s'assurer qu'il arrive à temps). • Inviter à partager la capture radar « J0 vs J7 » (amorce de preuve sociale + demande d'avis à venir). |

---

## Étape 9 — Demande d'avis (sollicitation témoignage)

| Élément | Détail |
|---|---|
| **Écran/support vu** | E-mail de sollicitation (idéalement après un jalon fort : 7-14 jours, série tenue) : ton chaleureux, « raconte-nous ta première semaine », lien vers un formulaire court + option « joins ta capture radar J0 vs J7 ». S'appuie sur l'esprit des e-mails témoignages (Séquence 5), ici en **collecte** de vrais retours. |
| **Action du client** | Répond en 2 minutes (note + phrase libre), joint éventuellement sa capture. Ou clique une échelle de satisfaction rapide (1 clic). |
| **Action automatique (système)** | Déclenchement conditionné à un signal positif (série ≥ 7 j, activité récente). Enregistrement de la note. **Routage intelligent** : avis positif → invitation à laisser un témoignage public ; avis mitigé/négatif → orientation vers le support (« dis-nous ce qui coince, on t'aide ») avant tout affichage public. |
| **Résultat attendu** | Collecte de **vrais** témoignages (à substituer aux exemples fictifs signalés du copy). Détection précoce des insatisfaits pour les récupérer avant la fin de la garantie 30 j. Matériau de preuve sociale honnête. |
| **Points de friction possibles** | • Demande trop tôt (avant un vrai résultat) → réponse pauvre ou agacement. • Formulaire long → non rempli. • Solliciter **tout le monde**, y compris les déçus, en public → risque d'avis négatifs mal gérés. • Aucune incitation → faible taux de réponse. • Sur-sollicitation (empile avec les autres e-mails). |
| **Améliorations éventuelles** | • Déclencher **sur jalon** (7 ou 14 j tenus), jamais au calendrier aveugle. • Micro-formulaire 1-2 questions max, mobile-first, pré-rempli du prénom. • **Routage note haute → avis public / note basse → support** (récupération avant remboursement). • Incitation honnête et non conditionnante (badge symbolique « Témoin », mise en avant de son radar), **sans** échanger un avis contre une réduction (honnêteté radicale). • Toujours signaler « exemple fictif à remplacer » tant que les vrais retours ne sont pas là. |

---

## Étape 10 — Proposition d'upsell (Sentier→Ascension ou Ascension→Sommet)

| Élément | Détail |
|---|---|
| **Écran/support vu** | **E-mail 6.1 « Ton template Notion peut faire bien plus »** (J+10 après achat du Sentier, si série ≥ 7 j) → passer à L'Ascension pour **+20 €** (quêtes, 24 badges, Filet de Reprise renforcé, Système de Preuves). OU **E-mail 6.2 « Aller au bout, mais pas tout seul »** (J+30 après L'Ascension, engagement soutenu) → Le Sommet pour **+50 €** (parcours, journal premium, bilans, communauté, accès à vie, Wrapped). Rappel doux **6.3** (J+7 après, si non converti mais actif). Garantie 30 j rappelée. |
| **Action du client** | Lit la proposition. Selon sa progression : clique « Passer à L'Ascension (+20 €) » / « Rejoindre Le Sommet (+50 €) », paie la **différence** ; ou ignore sans pénalité (la porte reste ouverte). |
| **Action automatique (système)** | Déclenchement **comportemental** (offre possédée + série active), pas au calendrier fixe. Paiement de la seule différence de prix. Déverrouillage des modules du palier supérieur dans l'espace. Si non converti mais actif → 6.3 (un seul rappel), puis **arrêt** des relances upsell. |
| **Résultat attendu** | Montée en gamme d'une part des clients engagés, **sans forcer** : l'upsell arrive quand la valeur du palier supérieur est réellement ressentie (le Sentier montre ses limites, ou l'Ascension donne envie d'aller au bout accompagné). Panier moyen en hausse, satisfaction préservée. |
| **Points de friction possibles** | • Upsell **trop tôt** (avant l'habitude ancrée) → ressenti « on veut juste me revendre ». • Client déjà au Sommet ciblé par erreur. • Mécanique « payer la différence » techniquement bancale (double paiement, accès non débloqué). • Insistance perçue (trop d'e-mails d'upsell). • Proposition non pertinente vs le comportement réel (inactif relancé pour monter en gamme). |
| **Améliorations éventuelles** | • Verrouiller les **conditions comportementales** (série active ≥ 7 j pour 6.1 ; engagement soutenu ≥ ~30 j pour 6.2). • Exclure automatiquement les acheteurs du palier supérieur. • Fiabiliser le « paiement de la différence » + déverrouillage instantané et testé. • **Plafond strict** : 6.1/6.2 puis un seul 6.3, ensuite silence. • Montrer la valeur *dans l'app* (module verrouillé avec aperçu « débloque avec L'Ascension ») plutôt que par e-mail seul. • Toujours rappeler « ta pierre du jour compte cent fois plus qu'un changement d'offre » (ton non culpabilisant, conforme au copy). |

---

## 🔥 Synthèse — Les 5 frictions les plus critiques à surveiller au lancement

Classées par impact sur l'activation (une friction en amont tue tout ce qui suit).

1. **L'e-mail de livraison qui n'arrive pas (spam/promotions ou e-mail mal saisi).**
   *Impact :* le client a payé mais n'entre jamais dans le produit → remboursement + avis négatif garantis.
   *Parade :* authentifier le domaine (SPF/DKIM/DMARC), afficher l'accès **aussi sur la page Merci** (ne pas dépendre de l'e-mail), confirmer/valider l'e-mail au checkout, rappeler « regarde dans Spam » dès l'écran de confirmation. **Surveiller le taux de délivrabilité et le délai d'envoi en continu.**

2. **L'oubli de « Dupliquer » le template Notion (et le cas « pas de compte Notion »).**
   *Impact :* le client écrit sur une page en lecture seule ou partagée, se décourage, conclut « ça marche pas ».
   *Parade :* écran de garde « ÉTAPE 0 : Duplique avant tout » impossible à rater, vidéo de 30 s, et **le PDF interactif comme voie de secours immédiate** si Notion coince.

3. **La première validation (Jour 1) sans « déclic » visuel.**
   *Impact :* si cocher « Validé » ne produit pas une sensation de récompense, le produit rate sa promesse (« tu ne crois plus que tu progresses — tu le vois »).
   *Parade :* Défi 1 volontairement facile (victoire garantie J0), feedback de validation renforcé et bien visible sur mobile (+XP · Série · « pierre posée 🧱 »), indice « clique ici pour valider ».

4. **Le non-retour à J+1 (l'enthousiasme retombe, aucune notification native).**
   *Impact :* Notion ne « push » pas ; sans rappel efficace, le client ne revient pas et la série meurt à 1.
   *Parade :* relance ciblée « inactif J+1 », raccourci écran d'accueil systématiquement encouragé, liens profonds vers **la carte du jour**, choix d'un créneau fixe, rappel calendrier optionnel.

5. **La confusion produit / complexité perçue (Notion + PDF, jargon RPG).**
   *Impact :* doute avant l'achat (« je paie quoi ? ») et paralysie après (« trop de choses à comprendre »).
   *Parade :* désamorcer Notion dès la landing (« tu ouvres un lien, tu joues »), bloc « 3 étapes » simple, hiérarchiser Notion (principal) vs PDF (secours), onboarding réduit au minimum pour ne pas retarder le Jour 1.

> **Frictions transverses à garder à l'œil :** cohérence de vocabulaire entre page/e-mails/Notion (ex. jalon 7 jours : **« Premier feu » vs « Semaine pleine »** — choisir un seul nom) ; fiabilité technique de l'upsell « paiement de la différence » ; respect de l'honnêteté radicale partout (aucune fausse urgence, aucun faux prix barré, témoignages fictifs signalés tant qu'on n'a pas de vrais retours).

---

## ✨ Le « moment magique » à provoquer le plus tôt possible

**La première validation (Étape 6, Jour 1).**

C'est l'instant où Lucas coche **« Validé »** sur son premier défi et **voit** son XP monter, sa série passer à 1, une branche de son radar bouger. En une seconde, la promesse abstraite (« ta vie comme un RPG ») devient une **preuve concrète** : *ça compte, et je le vois.* C'est le déclic qui transforme un acheteur sceptique — qui « abandonne toujours » — en joueur qui veut revenir demain.

**Pourquoi c'est LE moment à provoquer au plus vite :** tout le parcours (arrivée → achat → e-mails → accès → onboarding) n'a de valeur que s'il aboutit à cette première pierre posée le jour même. Tant qu'elle n'a pas eu lieu, le client n'a rien « vécu » du produit ; une fois qu'elle a eu lieu, la mécanique de progression visible fait le reste.

**Comment le rendre inévitable et éclatant :**
- **Raccourcir le chemin jusqu'à lui** : page Merci → accès → Défi 1, avec un onboarding « personnage » réduit au strict nécessaire (ne jamais laisser la création du personnage retarder la première validation).
- **Garantir la victoire** : Défi du Jour 1 court, concret, faisable aujourd'hui (difficulté 2-3, ~5 min).
- **Amplifier la récompense** : feedback de validation renforcé et lisible sur mobile — « +30 XP · Série : 1 · 🧱 Première pierre posée » — pour que l'effet « lumière qui s'allume » soit indéniable.
- **Le célébrer et l'ancrer** : une ligne de fierté honnête (« tu viens de faire ce que la plupart ne font jamais ») + invitation à capturer le radar « après », amorce de la comparaison future et de la fierté qui fait revenir.

> *« Un défi validé = une pierre posée. »* Provoquer cette toute première pierre **le jour de l'achat** est l'objectif n°1 de l'expérience de lancement.

---

*Document parcours premier client — Cairn · Cap365 — 365 Défis de Vie · « Un défi par jour. Une version de toi par an. »*
