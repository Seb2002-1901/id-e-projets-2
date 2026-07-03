# Audit critique complet — Application mondiale de transformation comportementale assistée par IA

> **Mandat :** audit expert, sans complaisance, du concept tel que formulé. Rôle tenu : direction produit, science comportementale, IA, données, juridique-réglementaire (analyse de risque — pas un avis d'avocat ni de médecin), croissance.
> **Verdict court :** l'idée vise un vrai problème, un vrai marché, avec une intuition juste (expliquer > encourager). Mais **telle que formulée, elle est trop large, scientifiquement surpromise, réglementairement exposée et opérationnellement inconstruisible**. Elle devient excellente si — et seulement si — on la re-scope brutalement.

---

## SECTION 1 — Analyse critique complète du concept

### 1.1 Ce qui est juste dans l'intuition
- **« Expliquer plutôt qu'encourager » est une vraie différenciation.** La psychoéducation (comprendre ce que fait la nicotine sur les récepteurs, pourquoi le manque culmine à J2-J3, pourquoi l'envie dure 3-10 minutes) a un effet mesurable sur l'auto-efficacité, et la plupart des apps du marché n'offrent que des compteurs et des confettis. Le positionnement « on te dit ce qui se passe dans ton corps et pourquoi » est défendable.
- **La gestion de la rechute comme apprentissage** est alignée avec l'état de l'art (prévention de la rechute de Marlatt & Gordon ; l'« effet de violation de l'abstinence » — la honte post-écart prédit la rechute complète bien plus que l'écart lui-même). Une app qui déshonte la rechute et la transforme en données a un avantage clinique réel.
- **Le mode crise (« je vais craquer »)** correspond à ce que la littérature appelle les **JITAI** (Just-In-Time Adaptive Interventions) : intervenir au moment de vulnérabilité est le levier d'efficacité le plus prometteur du mobile health.
- **Le multi-objectifs avec priorités** répond à une réalité clinique : les comportements sont co-occurrents (tabac + alcool + sommeil + stress se nourrissent mutuellement).

### 1.2 Les quatre défauts structurels du concept tel que formulé

**Défaut n°1 — La promesse prédictive est scientifiquement indéfendable.**
« Prévoir ce que l'utilisateur est susceptible de ressentir aujourd'hui, demain, dans quelques semaines, dans plusieurs années » : la science ne sait pas faire ça au niveau individuel, et personne ne le sait. Il existe des **trajectoires normatives documentées** (ex. : symptômes de sevrage nicotinique culminant à 48-72 h, s'atténuant sur 2-4 semaines ; envies résiduelles conditionnées pendant des mois), mais la variance interindividuelle est énorme et l'« affective forecasting » est précisément l'un des domaines où les humains — et les modèles — se trompent le plus. **Si l'app affiche des prédictions ponctuelles précises, elle sera fausse de manière vérifiable, et détruira son actif central : la confiance.** La reformulation correcte : des **fourchettes probabilistes sourcées** (« chez la majorité des fumeurs, le pire se situe entre J2 et J3 ; voici ce que 60-80 % rapportent ») + une calibration progressive sur les données de l'utilisateur. C'est moins vendeur, mais c'est vrai — et c'est différenciant justement parce que c'est honnête.

**Défaut n°2 — « L'utilisateur doit avoir l'impression que l'application le comprend parfaitement » est un objectif de design dangereux.**
Tel quel, c'est un objectif d'**illusion d'intimité** : on demande à l'ingénierie de fabriquer un sentiment de compréhension que le système n'a pas. C'est (a) éthiquement problématique (dépendance parasociale à une app, sur un public vulnérable), (b) juridiquement risqué (pratique commerciale trompeuse si le marketing le reprend), (c) contre-productif : les LLM sont déjà naturellement sycophantes, et la sycophancie est l'inverse de ce dont une personne en sevrage a besoin. L'objectif juste : **précision et pertinence perçues** (« l'app me pose la bonne question au bon moment »), pas empathie simulée totale. Et une app qui vise la santé comportementale doit viser **sa propre obsolescence** pour l'utilisateur (autonomisation, « graduation »), pas son indispensabilité.

**Défaut n°3 — Le périmètre est inconstruisible.**
7 domaines × ~30 fonctionnalités × « mondiale » × « scientifiquement défendable sur tout » = un produit que des équipes de 200 personnes n'ont pas réussi à faire. Chaque vertical (tabac, alcool, sommeil, procrastination…) a sa littérature, ses instruments validés, ses protocoles, ses risques propres, ses exigences réglementaires. **La largeur est l'ennemi de la défendabilité scientifique revendiquée.** Le concept confond la vision (plateforme multi-comportements) et le produit (ce qu'on construit en année 1).

**Défaut n°4 — La frontière médicale n'est pas traitée, et c'est la question n°1.**
« Arrêter l'alcool » n'est pas une « mauvaise habitude » : **le sevrage alcoolique d'un buveur dépendant sévère peut tuer** (crises convulsives, delirium tremens — mortalité réelle sans prise en charge médicale). Une app qui encourage un arrêt brutal sans triage médical expose ses utilisateurs à un danger vital et son éditeur à une responsabilité majeure. Idem, à des degrés moindres : troubles du comportement alimentaire masqués derrière « réduire le sucre », dépression/suicidalité derrière « mieux gérer ses émotions ». **Le produit doit être conçu autour d'une couche de triage et d'orientation médicale, pas l'ajouter en post-it.** Cette frontière détermine aussi le statut réglementaire (bien-être vs dispositif médical) — voir Section 3.

### 1.3 Positionnement concurrentiel (lucidité obligatoire)
Le marché est validé **et** encombré : Reframe, Sunnyside, I Am Sober (alcool) ; Smoke Free, QuitNow, kwit (tabac) ; Fabulous, Habitica, Streaks (habitudes) ; Headspace/Calm (stress/sommeil) ; Quit Genius/Pelago (B2B addictions, avec cliniciens) ; Woebot/Wysa (chatbots santé mentale, qui ont déjà essuyé les critiques que ce concept va rencontrer). **L'idée « app scientifique qui explique » n'est pas un moat : tout le monde prétend être « science-based ».** Le moat possible : (1) exécution de la couche explicative avec un vrai sourçage, (2) données de résultats publiées, (3) sécurité/triage exemplaires, (4) rétention supérieure prouvée. Rien d'autre.

---

## SECTION 2 — Avantages et inconvénients

### Avantages réels
| # | Avantage | Pourquoi c'est solide |
|---|---|---|
| 1 | Problème universel, douloureux, récurrent | Volonté de payer démontrée (Reframe : dizaines de M$ d'ARR estimés ; marché cessation/wellness en croissance) |
| 2 | Positionnement « explication mécanistique » sous-exploité | La psychoéducation est un BCT (behavior change technique) validé et rare dans les apps grand public |
| 3 | Rechute traitée comme donnée, pas comme échec | Aligné Marlatt ; réduit l'effet de violation d'abstinence ; différenciant émotionnellement |
| 4 | JITAI / mode crise | Le meilleur levier d'efficacité documenté du mHealth |
| 5 | Timing IA | Les LLM rendent enfin faisable une personnalisation de langage à coût marginal faible |
| 6 | Multi-objectifs (en vision) | Correspond à la co-occurrence réelle des comportements ; augmente la LTV |

### Inconvénients et coûts structurels
| # | Inconvénient | Gravité |
|---|---|---|
| 1 | Rétention catastrophique du secteur : la médiane des apps santé retient **3-6 % des utilisateurs à J30** | ⚠️⚠️⚠️ C'est LE problème du produit, avant toute fonctionnalité |
| 2 | Frontière dispositif médical : les claims « traite les addictions » basculent en réglementation lourde (MDR/FDA) | ⚠️⚠️⚠️ |
| 3 | Danger vital du sevrage alcool non trié | ⚠️⚠️⚠️ |
| 4 | Données ultra-sensibles (addictions = données de santé, art. 9 RGPD) | ⚠️⚠️ |
| 5 | Coût du contenu : « scientifiquement défendable » = corpus rédigé/vérifié par des cliniciens, versionné, mis à jour — un coût permanent, pas un one-shot | ⚠️⚠️ |
| 6 | Coût d'inférence LLM vs prix d'abonnement si l'app converse beaucoup | ⚠️ |
| 7 | CAC élevé du secteur (mots-clés santé mentale/sevrage très disputés) | ⚠️⚠️ |
| 8 | Auto-déclaration biaisée : la consommation d'alcool auto-rapportée est sous-déclarée de 30-50 % — le « jumeau numérique » apprendra sur des données fausses | ⚠️⚠️ |
| 9 | Saisonnalité brutale (janvier/Dry January) et churn post-rechute avec avis 1 étoile émotionnels | ⚠️ |

---

## SECTION 3 — Risques (produit, scientifique, juridique, médical, éthique, commercial)

### 3.1 Risques médicaux (les plus graves — à traiter en premier)
1. **Sevrage alcoolique** : convulsions, delirium tremens, décès chez les dépendants sévères. → **Triage obligatoire** (AUDIT/AUDIT-C, questions de dépendance physique : tremblements matinaux, consommation dès le réveil, antécédents de sevrage compliqué) avec **exclusion et orientation médicale** au-delà d'un seuil. L'app grand public ne doit accompagner que la **réduction chez les non-dépendants sévères**.
2. **Sevrage benzodiazépines / opioïdes** : si l'app accepte « arrêter mes somnifères/antidouleurs » en objectif libre, même danger. → Liste noire d'objectifs auto-gérés.
3. **« Réduire le sucre » + population TCA** : une app de restriction peut aggraver anorexie/hyperphagie. → Dépistage (SCOFF) et garde-fous de langage (jamais de discours de restriction punitive).
4. **Suicidalité** : « mieux gérer ses émotions » attirera des personnes en détresse. Le mode crise **doit** détecter les signaux (classifieur + mots-clés déterministes, pas seulement LLM) et **escalader vers des ressources humaines** (numéros de crise par pays — le 3114 en France, 988 aux US, etc.). C'est non négociable et ça doit exister **avant** le lancement, pas après le premier drame.
5. **Interactions médicamenteuses / conseils santé erronés** générés par LLM : une hallucination sur la nicotine + varénicline ou sur le sommeil + apnée peut nuire. → Le LLM ne génère jamais de contenu médical libre (voir Section 9).

### 3.2 Risques juridiques et réglementaires
- **Qualification dispositif médical.** En UE (MDR 2017/745, règle 11) : un logiciel **destiné à traiter ou atténuer une maladie** (dépendance = maladie classifiée, CIM-11) est un dispositif médical, classe IIa minimum → marquage CE, évaluation clinique, système qualité. Aux US : la FDA a autorisé des DTx de même promesse (reSET, reSET-O, Somryst) — c'est la preuve que **la promesse « traitement des addictions » est un territoire régulé**. Deux chemins : (a) rester **bien-être** (claims prudents : « t'aide à comprendre et changer tes habitudes », jamais « traite », « guérit », « thérapie ») ; (b) assumer le chemin **DTx** (long, coûteux, mais moat énorme). Le concept actuel mélange les deux — il faut choisir, et le choix conditionne le marketing mot par mot.
- **EU AI Act** : un système d'IA qui infère des états émotionnels et influence le comportement de personnes vulnérables sera scruté ; obligations de transparence (l'utilisateur doit savoir qu'il parle à une IA), documentation de risques. Anticiper plutôt que subir.
- **RGPD art. 9** : données d'addiction = données de santé = catégorie spéciale. Consentement explicite, DPIA obligatoire, minimisation, hébergement adapté (HDS en France si l'on bascule côté santé), droit à l'effacement réel. **Risque spécifique : une fuite de données « addiction » est une bombe (emploi, assurance, garde d'enfants).**
- **Pratiques commerciales** : « l'app te comprend parfaitement », « prédit ce que tu ressentiras » = allégations attaquables (DGCCRF/FTC). La FTC a déjà sanctionné des apps santé mentale sur les données (BetterHelp, 2023 : 7,8 M$) — le précédent existe.

### 3.3 Risques scientifiques
- **La base de preuves du digital seul est modeste** : les méta-analyses (ex. Cochrane sur la cessation tabagique numérique) montrent des effets réels mais petits, à partir de taux de base faibles. Promettre « changement durable » comme résultat garanti ⇒ surpromesse. Positionner honnêtement : « augmente tes chances, voici de combien selon la littérature ».
- **Modèles théoriques fragiles** : le modèle transthéorique (« stades de changement ») est populaire et critiqué ; l'ego depletion a raté ses réplications. Construire sur **COM-B / Behaviour Change Wheel + taxonomie BCT v1 (Michie)**, l'IM (entretien motivationnel), la TCC et la prévention de rechute — pas sur la pop-psychologie.
- **Le « score global de liberté »** : réductionniste, non validé psychométriquement, et démotivant précisément au moment critique (il chute après une rechute — l'inverse de l'effet recherché).

### 3.4 Risques éthiques
- Public vulnérable + mécaniques d'engagement = zone grise permanente. Les streaks punitifs, la FOMO, les notifications culpabilisantes sont efficaces à court terme et nuisibles ici.
- **Paywall du mode crise = faute morale disqualifiante.** Les fonctions de sécurité doivent être gratuites à vie, point.
- Dépendance à l'app en remplacement du lien humain (l'isolement est un facteur de rechute — l'app doit pousser VERS les humains, pas s'y substituer).
- Tentation économique des données (publicité ciblée, revente, « partenariats assurance ») : à interdire par charte publique dès le jour 1, sinon la confiance — l'actif unique — est hypothéquée.

### 3.5 Risques produit & commerciaux
- Rétention J30 < 5 % = LTV insuffisante pour payer le CAC → mort silencieuse standard du secteur.
- Cold start du « jumeau numérique » : les 2 premières semaines, l'app ne sait rien ; or c'est là que tout se joue.
- Coût d'inférence : un « coach quotidien conversationnel » à 8-12 messages/jour peut coûter plus cher que l'ARPU mensuel si l'architecture est naïve.
- Copie rapide : toute feature visible est copiable en 3 mois par Reframe & co, qui ont la distribution. Seuls les actifs lents (corpus clinique, données de résultats, marque de confiance) protègent.
- « Lancement mondial » : chaque pays = langue + lignes de crise + cadre légal + assurance santé différents. Mondial d'emblée = dilution fatale.

---

## SECTION 4 — Ce qui est irréaliste ou très difficile

| Élément du concept | Diagnostic | Reformulation viable |
|---|---|---|
| Prédictions individuelles à J+1, S+2, M+6, années | **Irréaliste** (variance interindividuelle, affective forecasting) | Trajectoires normatives sourcées en fourchettes + calibration personnelle progressive |
| « Comprend parfaitement l'utilisateur » | **Irréaliste et indésirable** | Pertinence contextuelle mesurable (bonne question, bon moment) |
| « Uniquement des connaissances scientifiques solides et actualisées » sur 7 domaines | **Irréaliste en largeur** (coût de curation permanent, science contestée sur des pans entiers) | Corpus validé par cliniciens sur 1-2 verticals, avec niveaux de preuve affichés (fort/modéré/émergent) |
| Jumeau numérique comportemental | Buzzword ; en pratique un modèle utilisateur probabiliste alimenté par des données rares et biaisées | Modèle utilisateur bayésien simple : déclencheurs, contextes à risque, réponses efficaces — sans le vocabulaire grandiose |
| Apprentissage de chaque rechute | Possible **si** l'utilisateur documente honnêtement — or l'auto-déclaration est biaisée et la rechute est le moment où l'on n'ouvre plus l'app | Réduire la friction de saisie à ~10 s, ton zéro jugement, saisie rétroactive facilitée |
| Multi-objectifs simultanés dès le départ | Difficile : charge cognitive, protocoles qui interfèrent | 1 objectif principal + 2 « habitudes de soutien » max (sommeil, activité) ; multi-objectifs = V2+ |
| Onboarding « extrêmement poussé » | Contre-productif : chaque minute d'onboarding coûte des points de conversion | Onboarding < 5 min pour la première valeur ; profilage **progressif** ensuite |
| Notifications intelligentes | Difficile : le timing optimal demande des données que seule l'utilisation prolongée fournit | Heuristiques honnêtes d'abord (heures à risque déclarées), bandits contextuels ensuite |
| Application « mondiale » | Irréaliste au lancement | 1 langue, 1-2 marchés, ressources de crise localisées |

---

## SECTION 5 — Ce qui pourrait être amélioré (le cœur de la valeur)

1. **Inverser la hiérarchie IA/protocole.** Le produit n'est pas « une IA qui coache » ; c'est **un ensemble de protocoles cliniques validés** (TCC, entretien motivationnel, prévention de rechute, intentions d'implémentation, surf d'envie) **dont le LLM est la couche de langage et de contextualisation**. Cette inversion règle d'un coup : hallucinations, défendabilité scientifique, coût d'inférence, auditabilité.
2. **Faire de l'honnêteté épistémique la signature de marque.** Afficher le niveau de preuve de chaque conseil (🟢 preuve forte / 🟡 modérée / 🟠 émergente) avec sources consultables. Personne ne le fait ; c'est LA concrétisation crédible de « science-based », et c'est cohérent avec la charte anti-surpromesse.
3. **Concevoir la rechute comme le moment central du produit** (pas une « gestion ») : protocole post-écart en 3 étapes (désamorcer la honte → analyse fonctionnelle en 4 questions → plan ajusté), accessible en 1 tap, hors ligne, jamais paywallé.
4. **Ajouter les intentions d'implémentation** (« si [situation X] alors je [comportement Y] ») : l'un des BCT aux effets les plus robustes (méta-analyse de Gollwitzer & Sheeran, d ≈ 0,65) — absent de la liste de fonctionnalités.
5. **Contrats d'engagement / contingency management** : dépôt d'engagement, récompenses conditionnelles — parmi les interventions les plus efficaces en addiction. À implémenter éthiquement (mise en jeu volontaire, jamais prédatrice).
6. **Pousser vers l'humain** : annuaire de lignes d'aide, préparation de consultation (« exporte ton journal pour ton médecin »), option proche-allié (un contact de confiance notifiable en crise, avec consentement).
7. **Graduation explicite** : un parcours qui se termine. « L'app t'a rendu autonome » est un argument marketing paradoxal mais puissant, et éthiquement irréprochable.
8. **Mesurer ce qui compte** : substituer aux « scores » des mesures validées quand elles existent (AUDIT-C, HSI pour la dépendance nicotinique, ISI pour l'insomnie, PHQ-9/GAD-7 avec protocole d'escalade) — administrées avec parcimonie.

---

## SECTION 6 — Fonctionnalités manquantes

1. **Triage médical d'entrée + règles d'exclusion** (le manque le plus grave).
2. **Détection de crise suicidaire + escalade humaine localisée** (déterministe, pas LLM-only).
3. **Mode hors-ligne pour le kit de crise** (la crise n'attend pas le réseau).
4. **Information médicamenteuse factuelle** (TSN, varénicline, naltrexone/acamprosate) : information sourcée + « parles-en à ton médecin », jamais de prescription.
5. **Plan de prévention de rechute formalisé** (Marlatt) : situations à haut risque, stratégies d'évitement/coping, carte d'urgence personnelle.
6. **Soutien par les pairs** (V2) : la connexion sociale est un des prédicteurs les plus solides du maintien — modération exigeante requise.
7. **Intégrations wearables/HealthKit/Google Fit** (V2) : sommeil et activité objectifs plutôt qu'auto-déclarés.
8. **Export médecin** (PDF du journal et des mesures).
9. **Mode proche/famille** (information pour l'entourage — différenciant, quasi inexistant sur le marché).
10. **Pipeline d'évaluation continue du LLM** (évals cliniques, red-teaming, revue par échantillonnage) — fonctionnalité invisible mais existentielle.
11. **Localisation des ressources de crise par pays** dès l'i18n.
12. **Contrôles de données grand luxe** : export complet, suppression réelle en 1 tap, mode local/pseudonyme.

## SECTION 7 — Fonctionnalités inutiles ou nuisibles (à couper)

| Fonctionnalité | Verdict | Raison |
|---|---|---|
| Score global « de liberté » | ❌ Nuisible | Non validé, réductionniste, chute au pire moment psychologique |
| Jumeau numérique (tel que nommé) | ❌ Rebrander | Surpromesse ; garder le modèle utilisateur, tuer le concept marketing |
| Frise chronologique pluriannuelle prédictive | ❌ Couper | Fausse précision ; remplacer par jalons normatifs sourcés |
| Onboarding « extrêmement poussé » | ❌ Inverser | Tuer la conversion pour collecter des données qu'on peut obtenir progressivement |
| Suivi des économies réalisées | 🟡 Garder minimal | Commodité présente partout ; utile mais non différenciant — 1 écran, pas un pilier |
| Notifications « intelligentes » (v1) | 🟡 Simplifier | Sans données, c'est du spam habillé ; commencer par des créneaux déclarés + opt-in granulaire |
| Rapports hebdo + mensuels + tableau de bord + timeline + journal + analyses ×6 | 🟡 Fusionner | Redondance massive : 1 check-in quotidien + 1 bilan hebdo suffisent en V1 |

---

## SECTION 8 — Architecture produit idéale

**Principe : 4 couches strictement séparées, la sécurité au-dessus de tout.**

```
┌─────────────────────────────────────────────────────┐
│ COUCHE 0 · SÉCURITÉ & TRIAGE (déterministe)         │
│ dépistage entrée (AUDIT-C, dépendance, TCA, PHQ-2) │
│ détection crise → escalade ressources humaines      │
│ règles d'exclusion (sevrages dangereux → médecin)   │
├─────────────────────────────────────────────────────┤
│ COUCHE 1 · PROTOCOLES CLINIQUES (contenu versionné) │
│ modules TCC / EM / prévention rechute / II          │
│ psychoéducation sourcée, niveaux de preuve          │
│ rédigés + revus par cliniciens, versionnés en CMS   │
├─────────────────────────────────────────────────────┤
│ COUCHE 2 · MOTEUR DE PERSONNALISATION               │
│ modèle utilisateur (déclencheurs, contextes, quoi   │
│ marche) · sélection du bon module au bon moment     │
│ (règles → bandits contextuels) · plan adaptatif     │
├─────────────────────────────────────────────────────┤
│ COUCHE 3 · COUCHE CONVERSATIONNELLE (LLM)           │
│ reformule, contextualise, dialogue — SUR la base    │
│ des couches 1-2, génération contrainte + RAG        │
│ ne crée JAMAIS de contenu clinique nouveau          │
└─────────────────────────────────────────────────────┘
```

- **Content ops** : pipeline éditorial clinique (rédaction → revue par professionnel → sourçage → versionnage → audit périodique). C'est un coût permanent à budgéter comme l'infra.
- **Comité scientifique consultatif** réel (addictologue, psychologue TCC, chercheur en santé publique) — pas décoratif : droit de veto sur le contenu.
- Client mobile : kit de crise embarqué (offline-first), check-in < 30 s, une action par écran.

## SECTION 9 — Architecture IA idéale

1. **Hybride, pas LLM-centrique.**
   - **Déterministe** : triage, détection de crise (mots-clés + classifieur dédié à seuil bas — faux positifs acceptables, faux négatifs non), règles d'exclusion.
   - **Statistique** : bandits contextuels pour le choix/timing des interventions (framework des micro-randomized trials pour apprendre proprement) ; modèle utilisateur bayésien (probabilités de risque par contexte/heure).
   - **LLM** : langage uniquement — reformulation empathique, dialogue socratique guidé par protocole, résumés du journal. **Génération contrainte** : gabarits + slots + RAG sur le corpus clinique validé ; température basse ; citations obligatoires pour toute affirmation factuelle.
2. **Garde-fous en série** : classifieur de sécurité AVANT le LLM (routage crise) et APRÈS (filtre de sortie : pas de conseil médicamenteux, pas de minimisation du risque, pas de sycophancie « tu as raison d'être en colère contre ton médecin »).
3. **Évals continues** : jeu de scénarios cliniques adversariaux (suicidalité déguisée, demande de dosage, TCA masqué, sevrage dangereux) exécuté à chaque changement de modèle/prompt ; échantillonnage hebdomadaire revu par un clinicien ; journalisation complète des conversations à des fins d'audit (avec les consentements idoines).
4. **Transparence** : l'utilisateur sait qu'il parle à une IA (exigence AI Act et bonne pratique) ; bouton « pourquoi ce conseil ? » qui montre la source.
5. **Coûts** : modèle léger pour le quotidien, modèle lourd pour les bilans hebdo ; cache agressif de psychoéducation ; budget tokens/utilisateur suivi comme un KPI produit.

## SECTION 10 — Architecture de données idéale

- **Minimisation radicale** : on ne collecte que ce qui alimente une décision produit. Chaque champ doit justifier son existence dans la DPIA.
- **Séparation identité/comportement** : identité (compte, paiement) et données comportementales pseudonymisées dans des magasins distincts, jointes par un identifiant technique — une fuite d'un côté ne révèle pas l'autre.
- **Event sourcing** pour le journal comportemental (append-only) : chaque check-in, envie, écart est un événement horodaté avec contexte — c'est la matière du modèle utilisateur ET de la recherche.
- **On-device d'abord** pour les signaux les plus sensibles (texte libre du journal chiffré, traitement local quand possible).
- **Hébergement UE** (et HDS si l'on bascule vers le statut santé en France) ; chiffrement au repos et en transit ; rétention courte par défaut ; suppression = suppression.
- **Charte publique données** : jamais de vente, jamais de pub ciblée, pas de partage assureurs/employeurs. Gravée dans le marketing — c'est un avantage concurrentiel, pas une contrainte.
- **Données de recherche** : pipeline d'anonymisation séparé, opt-in explicite distinct, pour publier des résultats agrégés (le moat de crédibilité).

## SECTION 11 — Architecture de personnalisation idéale

**Étage 1 — Cold start honnête (J0-J7).** Archétypes cliniques issus de l'onboarding court (substance/comportement, sévérité triée, déclencheurs principaux déclarés, chronotype) → plan générique de meilleure pratique, annoncé comme tel : « les 2 premières semaines, on apprend ensemble ce qui marche pour toi ».
**Étage 2 — Profilage progressif (S1-S4).** Une question contextuelle par jour max (pas de questionnaire fleuve) ; chaque envie/écart documenté enrichit la carte déclencheurs→contextes→réponses.
**Étage 3 — Adaptation (M1+).** Bandits contextuels sur : quel outil proposer (respiration vs distraction vs appel d'un allié), à quelle heure, avec quel ton. Micro-randomisation pour apprendre causalement, pas par corrélation.
**Étage 4 — Calibration des attentes.** Les « prédictions » deviennent personnelles seulement quand les données le permettent (« tes envies durent en médiane 8 min ; tes soirs à risque sont mardi et vendredi »). Jamais de précision simulée avant.
**Garde-fous** : équité (pas de dégradation silencieuse pour les profils atypiques), explicabilité (« on te propose ça parce que… »), droit de dire « ça ne marche pas pour moi » qui pèse réellement dans le modèle.

## SECTION 12 — Expérience utilisateur idéale

- **Onboarding** : < 5 minutes, triage sécurité inclus, première valeur immédiate (une explication mécanistique personnalisée bluffante de justesse : « voici ce qui se passera dans ton cerveau demain matin »). Le reste du profil se construit en usage.
- **Boucle quotidienne** : 1 check-in de 20-30 secondes (état, envies, contexte) → 1 explication du jour (« pourquoi tu te sens comme ça aujourd'hui ») → 1 action unique. Pas de dashboard chargé : **une app de moments, pas d'écrans**.
- **Bouton crise** : accessible en 1 geste (widget/lock screen), offline, gratuit — protocole de 3-10 minutes (surf d'envie chronométré, respiration, raisons personnelles du coffre, contact allié).
- **Post-rechute** : l'écran le plus travaillé de l'app. Ton : zéro jugement, factuel, orienté données (« un écart après 12 jours, c'est une donnée, pas une identité »). Ré-entrée en 2 taps.
- **Ton général** : chaleureux-direct, jamais infantilisant, jamais de lyrisme motivationnel creux (cohérent avec « ne jamais dire juste courage »).
- **Bilan hebdomadaire** : le rendez-vous « waouh » — synthèse LLM du journal, schémas détectés, plan ajusté et justifié. C'est ici que la promesse « l'app me comprend » se réalise honnêtement.

## SECTION 13 — Stratégie de rétention saine et non manipulatrice

- **Séries avec grâce** (jours de pardon intégrés) : la continuité mesurée sans la terreur du compteur brisé.
- **Notifications par consentement granulaire** : l'utilisateur choisit créneaux et types ; chaque notification a une valeur d'usage (« ton créneau à risque commence » vs « reviens ! »). Zéro FOMO, zéro culpabilisation.
- **Rituel > gamification** : ancrer le check-in à un moment existant (café du matin) — habit stacking appliqué à l'app elle-même.
- **Rétention par la valeur différée** : le bilan hebdo comme rendez-vous, la calibration qui s'améliore visiblement avec l'usage (« plus tu documentes, plus c'est juste — voici la preuve »).
- **Métriques de santé de la rétention** : mesurer le taux de retour post-rechute (le vrai KPI de mission) au même niveau que le DAU. Une app dont les utilisateurs reviennent après un écart a gagné.
- **Graduation** : après l'objectif atteint et consolidé, mode maintenance allégé puis « diplôme » — accepter de perdre l'utilisateur guéri, gagner son bouche-à-oreille et sa confiance à vie.

## SECTION 14 — Stratégie de monétisation idéale

- **Freemium éthique** : gratuit à vie = mode crise, triage, ressources d'urgence, check-in basique. Payant = personnalisation profonde, bilans hebdo IA, multi-objectifs, intégrations, coffre enrichi.
- **Prix** : abonnement 12-20 €/mois avec forte incitation annuelle (60-100 €/an) — aligné marché (Reframe/Fabulous). Offre « bourse » discrète pour qui ne peut pas payer (éthique + goodwill).
- **Garantie de résultat honnête** : pas « remboursé si pas guéri » (indéfendable) mais « remboursé 30 jours sans condition ».
- **B2B2C dès l'an 2** : employeurs (QVT), mutuelles/assureurs (prévention) — les payeurs du secteur ; exige des données de résultats, d'où l'importance du pipeline de recherche. **Ligne rouge : l'employeur/assureur ne voit JAMAIS de données individuelles.**
- **Interdits définitifs** : publicité, revente de données, paywall de sécurité, dark patterns d'annulation, upsell en mode crise (oui, il faut l'écrire : c'est la tentation économique exacte du moment de vulnérabilité).

## SECTION 15 — Stratégie de lancement (mondiale → séquencée)

- **Phase 0 (avant tout code)** : choisir LE vertical (voir MVP), constituer le comité clinique, cartographier le statut réglementaire cible (bien-être, claims validés par juriste), rédiger la charte données/éthique publique.
- **Phase 1 — 1 marché, 1 langue** (France OU marché anglophone) : bêta fermée 200-500 utilisateurs recrutés dans des communautés concernées (r/stopdrinking, forums Dry January…), itération sur LA métrique : rétention J30 et taux de retour post-écart.
- **Phase 2 — lancement public marché 1** : contenu SEO mécanistique (« que se passe-t-il dans ton cerveau à J3 sans alcool » — exactement la promesse du produit, en acquisition), partenariats créateurs santé crédibles (médecins/psys vulgarisateurs, pas influenceurs lifestyle), timing Dry January/Mois sans tabac.
- **Phase 3 — preuve** : étude observationnelle publiée (même modeste), témoignages réels (enfin), presse santé. La crédibilité scientifique revendiquée doit devenir vérifiable.
- **Phase 4 — extension** : 2ᵉ langue/marché avec localisation complète (ressources de crise, culture de consommation, cadre légal), puis B2B.
- **Ne jamais** : lancer 10 langues à la fois, acheter du trafic massif avant que la rétention ne le justifie (LTV/CAC > 3), promettre « traitement » dans les stores (rejet + requalification réglementaire).

## SECTION 16 — Ce qui peut en faire un produit exceptionnel

1. **L'explication mécanistique comme signature** — être « l'app qui te dit ce qui se passe en toi, preuves à l'appui », avec niveaux de preuve affichés. Personne ne tient cette promesse aujourd'hui.
2. **Le meilleur écran post-rechute du monde** — là où toutes les apps échouent, la vôtre excelle : c'est mémorable, partageable, cliniquement juste.
3. **L'honnêteté épistémique** (fourchettes, sources, « on ne sait pas ») comme positionnement de marque — contrarian et inattaquable.
4. **Des résultats publiés** — le seul moat durable du secteur.
5. **La graduation** — l'app qui veut te voir partir : paradoxe marketing puissant, éthique parfaite, bouche-à-oreille garanti.
6. **Le triage exemplaire** — devenir l'app que les médecins recommandent parce qu'elle sait dire « va voir un médecin ».

## SECTION 17 — Ce qui peut provoquer l'échec

1. **La rétention du secteur** (3-6 % à J30) non résolue → mort par churn, quelle que soit la qualité du reste.
2. **Un incident de sécurité** (conseil dangereux halluciné, crise suicidaire mal gérée, fuite de données addiction) → mort réputationnelle immédiate et méritée.
3. **La dispersion** : construire les 30 fonctionnalités sur 7 domaines → rien d'excellent nulle part, cash épuisé.
4. **La surpromesse prédictive** → confiance détruite dès la 2ᵉ semaine d'usage (« l'app m'avait dit que ça irait mieux »).
5. **Requalification réglementaire subie** (claims maladroits → dispositif médical non conforme → retrait des stores).
6. **CAC > LTV** structurel dans un marché aux enchères saturées.
7. **Coût d'inférence non maîtrisé** sur un produit conversationnel quotidien.
8. **Copie par un incumbent** distribué (Reframe, Headspace) si le seul avantage est une feature visible et non un actif lent.

## SECTION 18 — MVP réaliste (proposition ferme)

**Un seul vertical : réduction/arrêt de l'alcool pour non-dépendants sévères** (« sober curious » + réduction). Justification : volonté de payer démontrée (catégorie la plus monétisée), douleur aiguë, communautés d'acquisition identifiables, saisonnalité exploitable (Dry January) — ET triage strict qui exclut/oriente la dépendance sévère (sécurité + périmètre bien-être). *Alternative défendable : tabac (meilleure base de preuves, moins de risque de sevrage vital, mais ARPU plus faible).*

**Périmètre V1 (12-16 semaines, 3-5 personnes) :**
1. Onboarding 5 min avec **triage** (AUDIT-C + questions de dépendance physique + PHQ-2) et orientation médicale si seuils dépassés.
2. **Check-in quotidien 30 s** (humeur, envies, consommation, contexte).
3. **Explication du jour** : psychoéducation mécanistique sourcée, séquencée sur la trajectoire de sevrage/réduction (corpus ~90 jours rédigé et revu par cliniciens — le vrai chantier du MVP).
4. **Bouton crise offline** : surf d'envie chronométré, respiration, coffre des motivations, ligne d'aide localisée.
5. **Protocole post-écart** (3 étapes, zéro jugement, ré-entrée immédiate).
6. **Plan simple adaptatif** : intentions d'implémentation personnalisées + créneaux à risque déclarés.
7. **Bilan hebdomadaire généré** (LLM contraint + relecture de gabarits) : schémas, ajustements, pourquoi.
8. **Charte données/éthique publiée.**

**Explicitement PAS dans le MVP** : multi-objectifs, jumeau numérique, wearables, communauté, B2B, timeline pluriannuelle, score global, notifications ML, 2ᵉ langue.

**Critères de succès avant d'élargir** : rétention J30 > 15 % (3× le secteur), taux de retour dans les 72 h post-écart > 40 %, NPS > 40, zéro incident de sécurité, conversion payant > 5 %.

## SECTION 19 — Feuille de route pluriannuelle

**Année 1 — Prouver la boucle.** T1 : corpus clinique + triage + MVP fermé. T2 : bêta 500 utilisateurs, itération rétention. T3 : lancement public marché 1, monétisation. T4 : Dry January, premiers résultats agrégés publiés. Équipe : 4-6 (produit/eng ×3, clinicien contractuel, contenu, growth à mi-temps).
**Année 2 — Prouver la science et élargir prudemment.** Vertical 2 (tabac — synergies alcool/tabac documentées), bandits contextuels en production, étude observationnelle publiée, 2ᵉ langue, exploration B2B (2-3 pilotes employeurs), communauté pilote modérée. Équipe : 10-15.
**Année 3 — Plateforme et payeurs.** Moteur multi-objectifs (1 principal + soutiens), sommeil/stress comme modules de soutien transverses, contrats B2B2C, décision stratégique DTx (chemin réglementaire assumé sur un vertical avec RCT) vs rester bien-être. Équipe : 20-30.
**Année 4+ — Selon la preuve.** Si le RCT est positif : remboursement (DiGA Allemagne, PECAN France) et prescription — le moat définitif. Sinon : consolidation grand public internationale.

## SECTION 20 — Note de potentiel : **6/10 tel que formulé · 8/10 re-scopé**

**Pourquoi pas plus, tel quel :**
- Le concept confond vision et produit (périmètre ×7 domaines, « mondiale », 30 fonctionnalités) — inconstruisible tel quel (−1,5).
- Deux promesses centrales (prédictions individuelles longues, « comprend parfaitement ») sont scientifiquement indéfendables et se retourneront contre la confiance (−1).
- Les risques majeurs (sevrage dangereux, crise suicidaire, statut réglementaire, données art. 9) ne sont pas adressés dans le concept — or ils dictent l'architecture (−1).
- Aucune réponse au problème n°1 du secteur : la rétention (−0,5).

**Pourquoi pas moins :**
- Le problème est réel, énorme, récurrent, avec volonté de payer prouvée (+).
- L'intuition « expliquer les mécanismes plutôt qu'encourager » est une vraie thèse produit différenciante (+).
- Rechute-comme-apprentissage et mode crise correspondent exactement à ce que la littérature désigne comme les leviers efficaces (+).
- L'IA rend la couche de personnalisation économiquement faisable pour la première fois (+).

**La phrase de vérité :** *l'idée ne vaut ni plus ni moins que les autres apps « science-based » du marché tant qu'elle n'a pas choisi UN vertical, résolu le triage de sécurité, remplacé la prédiction par l'honnêteté probabiliste, et prouvé une rétention J30 hors norme. Ces quatre choix faits, c'est un 8/10 avec un chemin crédible vers un produit important. Sans eux, c'est un 6/10 : une belle vision qui rejoindra le cimetière des apps de janvier.*

---
*Audit produit à visée d'analyse stratégique. Les points juridiques, réglementaires et médicaux signalés nécessitent la validation de professionnels qualifiés (avocat santé/données, addictologue) avant toute décision d'exécution.*
