# SPEC PRODUIT FINALE — « Lucide » (nom provisoire)

> Synthèse opérationnelle des audits V1 + V2. Zéro théorie : que des décisions.
> Statut réglementaire choisi : **bien-être** (pas dispositif médical) — chaque texte marketing et in-app respecte cette frontière.

---

## 1. Nom provisoire

**Lucide.**
- Double sens exact du produit : *lucidité* = sobriété + compréhension claire de soi. Court, français, prononçable en anglais (Lucid), disponible en déclinaisons (`getlucide.app`, `lucide.co`…).
- Alternatives de secours : **Versant** (le côté de la montagne qu'on gravit), **Reprise** (reprendre le contrôle, se relever).
- ⚠️ Vérification INPI/EUIPO + stores obligatoire avant tout investissement de marque (« lucide » est un mot commun — la marque devra être semi-figurative ou combinée).

## 2. Vision finale en une phrase

> **« Personne ne devrait affronter un changement difficile sans comprendre ce qui lui arrive. »**

## 3. Positionnement exact

**Pour** les adultes qui veulent réduire ou arrêter l'alcool et qui ont déjà essayé seuls, **Lucide** est l'application qui **explique ce qui se passe dans leur corps et leur tête, annonce les moments difficiles avant qu'ils arrivent, et les relève sans les juger** — contrairement aux apps de compteurs et de motivation qui célèbrent les bons jours et disparaissent les mauvais.

En 3 mots internes : **Expliquer. Anticiper. Relever.**

Ce que Lucide n'est PAS (à écrire tel quel dans la FAQ) : pas un traitement médical, pas une thérapie, pas fait pour la dépendance sévère (on aide à trouver le bon soin), pas une app de motivation.

## 4. Promesse principale

> **« On ne te promet pas que ce sera facile. On te promet que tu ne seras plus jamais surpris. »**

Déclinaison fonctionnelle : tu sauras toujours **ce qui se passe** en toi, **pourquoi**, **ce qui vient ensuite** (en fourchettes honnêtes), et **quoi faire**.

## 5. La promesse à ne JAMAIS faire

- ❌ « Deviens libre / guéris en X jours » (résultat garanti = faux + juridiquement attaquable)
- ❌ « L'app te comprend parfaitement » (illusion d'intimité)
- ❌ « Prédit ton avenir » (précision simulée)
- ❌ « Remplace un thérapeute / un médecin » (frontière réglementaire)
- ❌ Tout chiffre de réussite non mesuré (« 87 % de nos utilisateurs… ») tant qu'on n'a pas NOS données.

## 6. Utilisateur cible prioritaire

**« Claire, 38 ans »** — cadre urbaine, 4-10 verres/semaine avec pics le week-end, pas de dépendance physique (triage OK). A déjà fait un Dry January « à la volonté », tenu 19 jours, culpabilisé, recommencé. Ne se voit pas en réunion AA — son problème est « trop gros pour rien faire, trop petit pour en parler ». Paie déjà des apps (sport, méditation). Moments d'intention maximale : dimanche soir après un week-end trop arrosé, 1ᵉʳ janvier, lendemain d'une remarque d'un proche.
- Marché : le segment « sober curious / réduction » — le plus solvable et le plus mal servi (les apps existantes = compteurs).
- Cible secondaire (même produit) : hommes 30-50, buveurs d'habitude/stress.

## 7. Premier vertical

**Réduction ou arrêt de l'alcool, pour non-dépendants sévères** (triage strict, orientation médicale au-delà des seuils). Choix motivé : volonté de payer prouvée, douleur aiguë récurrente, communautés d'acquisition identifiables, Dry January, et périmètre bien-être tenable. Tabac = vertical n°2 (année 2).

## 8. Le MVP exact

**Un utilisateur trié peut : comprendre chaque jour ce qui lui arrive, voir venir ses moments difficiles, traverser une envie en 1 geste, se relever d'un écart sans compteur remis à zéro, et recevoir un bilan hebdo qui apprend de lui.**

Périmètre technique : app mobile (iOS d'abord), backend simple, corpus de contenu 90 jours rédigé/revu cliniquement, LLM en couche de langage contrainte uniquement (bilan hebdo + reformulations), tout le reste en règles déterministes. Pas de ML entraîné en V1 — des heuristiques honnêtes.

## 9. Les 15 fonctionnalités à construire en premier

| # | Fonctionnalité | Rôle |
|---|---|---|
| 1 | Onboarding + triage sécurité (AUDIT-C, dépendance physique, PHQ-2) + écran d'orientation | Sécurité, légal |
| 2 | Coffre des motivations avec **message vocal à soi-même** | Signature, crise |
| 3 | Check-in quotidien < 30 s | Boucle |
| 4 | **Météo intérieure** du matin (v1 : règles) | Signature, rétention |
| 5 | Explication mécanistique du jour, sourcée, séquencée J1→J90 | Cœur de promesse |
| 6 | Trajectoire annoncée (« tes prochaines 72 h », phases : pic, plateau, faux guéri) | Cœur de promesse |
| 7 | Mode SOS offline en 1 geste (surf d'envie chronométré, respiration, coffre, allié) | Sécurité, signature |
| 8 | Détection de crise (mots-clés déterministes) → ressources humaines (3114…) | Sécurité |
| 9 | Protocole post-écart 3 étapes + **compteur sans jour 0** | Signature, rétention |
| 10 | **Compteur de rebond** (temps de retour, jours réussis cumulés) | Signature |
| 11 | Plan de prévention perso (situations à risque + si-alors) | Résultats |
| 12 | Préparation mentale hebdo (prévision de la semaine + pré-mortem + si-alors) | Résultats |
| 13 | Bilan hebdomadaire généré (LLM contraint sur gabarits) | Rétention, « waouh » |
| 14 | Niveaux de preuve 🟢🟡⚪ + fiches sources + section mythes (10 mythes) | Crédibilité |
| 15 | Notifications opt-in granulaires (max 2/jour) + jalons de santé datés | Boucle |

## 10. Fonctionnalités repoussées

**V1.5 (mois 7-12)** : allié humain intégré, fire drill, protocoles événements de vie, mode nocturne SOS, jalons santé enrichis, journal des erreurs de l'app (dès que les prévisions tournent), 3 langages motivationnels.
**V2 (année 2)** : laboratoire n-of-1, portrait comportemental mensuel, détection de dérive, phénotypage complet, mode entourage, vertical tabac, Android si iOS-first, mémoire longitudinale profonde, contrat avec témoin.
**V3+ (année 3+)** : wearables, miroir linguistique, communauté modérée, B2B, multi-objectifs, marché anglophone, chemin DTx/RCT, graduation complète avec rite (une version simple existe dès la V1.5).
**Jamais** (cf. §28).

## 11. Parcours utilisateur complet A → Z

1. **Découverte** : article SEO (« que se passe-t-il dans ton corps à J3 sans alcool ») ou bouche-à-oreille → landing : la promesse + « Commence par comprendre ».
2. **Onboarding (5 min)** : cf. §12 — triage inclus, coffre enregistré, première prévision 72 h reçue AVANT toute demande de paiement.
3. **J0-J3 (la traversée annoncée)** : météo chaque matin, explication du jour, le pic J2-J3 **prédit la veille** → vécu → validé (« c'était dur comme annoncé ; c'est en train de redescendre »). Première envie → SOS → première preuve archivée.
4. **S1-S2** : check-ins quotidiens, plan si-alors co-écrit, premier bilan hebdo (moment « waouh »), premier jalon santé.
5. **L'écart (statistiquement probable S2-S4)** : silence pendant. Notification unique calibrée à +24 h. Retour → protocole 3 étapes → plan v2 → compteur « 12/15 » + temps de rebond affiché.
6. **S3-S6 (plateau)** : changement de régime annoncé — check-ins espacés à 3/semaine, contenus « pourquoi c'est plat et pourquoi c'est bien », le « faux guéri » annoncé à l'avance.
7. **M2-M3** : préparation mentale hebdo devenue le rituel central, la météo se personnalise (« calculée sur TES 60 jours »), autonomie mesurée et félicitée.
8. **M3+ (graduation v1)** : objectif atteint et stable → mode veille proposé (check-in hebdo, SOS à vie, météo sur demande) → e-mail de « diplôme » avec CV de résilience → invitation à laisser un vrai témoignage.
9. **Réactivation** : à tout moment, 1 tap. Un écart en mode veille ré-ouvre le protocole R sans honte.

## 12. Onboarding écran par écran (cible < 5 min, compte demandé EN DERNIER)

| Écran | Contenu | Détail |
|---|---|---|
| E1 | **La promesse** | « On ne te promet pas que ce sera facile. On te promet que tu ne seras plus jamais surpris. » CTA : « Commencer » (pas de compte) |
| E2 | **Ton objectif** | Réduire / Arrêter · « Pourquoi maintenant ? » (chips : santé, sommeil, argent, contrôle, un proche, autre) — stocké pour le coffre |
| E3 | **Ta consommation** | AUDIT-C conversationnel (3 questions, sliders) — ton neutre, zéro jugement |
| E4 | **Sécurité** (non skippable) | Dépendance physique (tremblements matinaux, boire au réveil, antécédent de sevrage difficile) + PHQ-2. **Branche rouge → E4b** |
| E4b | **Orientation** (si seuils dépassés) | Bienveillant, jamais un rejet : « Ton profil mérite mieux qu'une app seule — un arrêt brutal peut être dangereux dans ton cas. Voici par où commencer [médecin traitant, Alcool Info Service 0980 980 930]. Lucide pourra t'accompagner en complément d'un suivi. » (waitlist « avec mon médecin ») |
| E5 | **Tes déclencheurs** | Multi-select : stress, social, ennui, habitude horaire, émotions → phénotype v0 |
| E6 | **Tes moments à risque** | Grille semaine × créneaux (2 taps par créneau) → alimente la météo |
| E7 | **Le coffre** 🎙️ | « Le geste le plus utile des 5 prochaines minutes : enregistre 30 secondes pour toi-même en difficulté. » 3 questions-guides affichées. Skippable mais fortement valorisé |
| E8 | **Ta première prévision** ✨ | LA récompense d'onboarding : timeline personnalisée « Tes prochaines 72 h » (ce que tu vas probablement ressentir, quand, pourquoi, 🟢) — la promesse tenue à la minute 4 |
| E9 | **Notifications** | Opt-in granulaire : météo du matin (heure au choix) · fenêtre à risque · check-in. Défaut proposé : 2/jour max |
| E10 | **Compte + offre** | Sign-in Apple/e-mail. Essai 7 j. Bandeau : « SOS, sécurité et l'essentiel : gratuits pour toujours. » Refuser l'essai n'éjecte pas — bascule free |

## 13. Dashboard quotidien écran par écran

**Un seul écran principal, 4 zones + 1 bouton permanent :**

| Zone | Contenu | Interaction |
|---|---|---|
| Z1 · Météo intérieure | « Aujourd'hui : risque modéré 🟡 — pic probable 18-21 h (vendredi + semaine chargée). Confiance : moyenne (calculée sur tes 23 jours). » | Tap → pourquoi + le plan si-alors du créneau |
| Z2 · Check-in (si pas fait) | 3 questions, 3 taps : humeur (5 emojis) · envies hier (0/1/2/3+) · conso hier (0/slider) | < 30 s, saisie rétroactive possible |
| Z3 · Aujourd'hui en toi | Carte du jour J+X : « J12 — ton sommeil profond se reconstruit. Voici pourquoi tu rêves plus fort cette semaine. 🟢 » | Tap → explication complète + source |
| Z4 · Une seule action | « Ce soir 18 h : ton si-alors du vendredi. Le relire (1 min) ? » | Faire / Pas maintenant (qui apprend) |
| ⛑️ SOS | Bouton fixe, toujours visible | → Mode crise, 1 tap |

**Écrans secondaires (onglets)** : Mes preuves (CV de résilience : envies traversées, vendredis réussis, temps de rebond) · Mon plan (si-alors, situations à risque, coffre) · Comprendre (bibliothèque des explications passées + mythes).

## 14. Mode crise écran par écran

Exigences : accessible du widget/écran verrouillé · < 2 s · **100 % offline** · sombre · gratuit à vie · jamais rien de commercial.

| Écran | Contenu |
|---|---|
| S1 · Triage | Deux gros boutons : « Je lutte contre une envie » / « Je ne me sens pas en sécurité » |
| S1b · Danger | Ressources immédiates : 3114 (appel 1 tap), 15/112, Alcool Info Service, mon allié. Aucun autre contenu. |
| S2 · Intensité | 1 slider (« à combien ? ») → choisit le protocole (données perso si dispo, sinon défaut) |
| S3 · Surf d'envie | Le cœur : **courbe animée en temps réel** (l'envie monte → culmine → redescend TOUJOURS) + chrono + une instruction à la fois (« ne lutte pas, observe ; note où c'est dans ton corps »). Boutons : 🎙️ Écouter mon message · 🫁 Respirer (expiration longue guidée) · 📞 Mon allié |
| S4 · Sortie | « C'est passé ? » → capture 10 s (déclencheur en chips + lieu) → restitution : « 7ᵉ envie traversée. Chez toi : médiane 8 min. Elle est archivée dans tes preuves. » |
| S4b · Pas passé | Enchaîne un 2ᵉ outil (marche 5 min guidée / eau froide) ; après 2 cycles : « appelle ton allié ou écris-moi ce qui se passe » — jamais de cul-de-sac |

## 15. Système post-rechute écran par écran

Déclenchement : conso déclarée au check-in au-dessus de l'objectif, OU retour après ≥ 48 h de silence, OU bouton « j'ai eu un écart ».
Notification (si silence) : **une seule**, à +24 h : « Pas de jugement ici. Un écart après 12 jours, c'est une donnée, pas une identité. 3 questions, 2 minutes, quand tu veux. »

| Écran | Contenu |
|---|---|
| P1 · Accueil | « Content de te revoir — il en faut, du courage, pour rouvrir cette app. » + normalisation sourcée : « La majorité des parcours qui réussissent comportent des écarts. 🟢 » Aucun compteur affiché ici. |
| P2 · Comprendre (4 chips-questions) | Où ? · Avec qui ? · Quelle émotion dans les 2 h avant ? · Qu'est-ce qui aurait pu aider ? (30 s, tout en chips + champ libre optionnel) |
| P3 · L'apprentissage | Restitution : « Ton pattern : soirée + conflit au travail. Ton plan v2 change UNE chose : [si-alors nouveau]. Ton plan a appris. » |
| P4 · Les compteurs, honnêtes | « **12 jours réussis sur 15.** Série : reprend avec ta grâce. **Temps de rebond : 26 h — 4× plus vite que ton écart précédent.** » CTA : « On continue. » |

Interdits absolus : « jour 0 » · rétrospective culpabilisante · upsell · plus d'une notification.

## 16. Bilan hebdomadaire écran par écran (le rendez-vous « waouh » — dimanche 18 h par défaut)

| Écran | Contenu |
|---|---|
| B1 · Le titre | Narratif, généré : « Semaine 4 : celle où le mardi a failli gagner. » + 3 chiffres clés |
| B2 · L'état des lieux | Tri-état par dimension : Comportement ↗ · Sommeil → (« stagnation normale à ce stade, reconstruction S4-S8 🟢 ») · Humeur ↗ — chaque flèche a son pourquoi |
| B3 · Le pattern de la semaine | 1 insight max : « 3 envies sur 4 après des appels visio longs. ⚪ hypothèse — on vérifie la semaine prochaine ? » |
| B4 · Ce que j'ai appris de toi | « La marche fonctionne mieux que la respiration chez toi (4/4 vs 1/3). J'ajuste le SOS. » |
| B5 · Semaine prochaine | Météo à 7 jours (créneaux à risque + événement agenda si connu) + 1-2 si-alors à valider (préparation mentale intégrée, cf. §20) |
| B6 · La preuve de la semaine | Ajout au CV de résilience + jalon santé si atteint. Partage optionnel (image sobre, sans données sensibles) |

## 17. Système « Météo intérieure »

- **Calcul v1 (règles, honnête)** : courbes normatives du sevrage/réduction (jour du parcours) × créneaux à risque déclarés (E6) × jour de semaine × événements déclarés × données récentes (envies, humeur, sommeil des 7 derniers jours).
- **Affichage** : niveau (calme 🟢 / notable 🟡 / élevé 🟠) + fenêtre horaire + LE pourquoi en une phrase + **confiance affichée** (« faible : je te connais depuis 4 jours » → « bonne : calculée sur tes 60 jours »).
- **Boucle de vérité** : le soir, 1 tap — « la journée a ressemblé à la prévision ? » → calibration + alimente le journal des erreurs de l'app (V1.5).
- **Règles** : jamais de prévision anxiogène sans plan attaché · jamais de précision simulée (pas de « 73 % » en semaine 1) · la météo se tait si elle n'a rien à dire (un jour calme est annoncé calme).

## 18. Système « Compteur de rebond »

- **Modèle de données** : épisodes (période sans écart), événements d'écart (horodatés + contexte P2), retours (délai écart→réengagement). Rien n'est jamais effacé.
- **Affichés** : jours réussis cumulés (« 47 jours sur 52 ») · série courante avec grâce (2 jours de grâce/mois, transparents) · **temps de rebond** (la star : « 26 h — 4× plus rapide qu'avant ») · envies traversées.
- **Jamais affichés** : « jour 0 » · plus longue série passée en reproche · toute comparaison à d'autres utilisateurs.
- **Narratif système** : la compétence célébrée est *se relever vite*, pas *ne jamais tomber*. Copy de référence : « Tout le monde tombe. Toi, tu te relèves de plus en plus vite. »

## 19. Système « Coffre des motivations »

- **Contenu** : le message vocal/vidéo de J0 (« toi qui écoutes ça… ») · les raisons (E2) · photos choisies · au fil du parcours : preuves marquantes épinglées.
- **Ouverture** : en mode SOS (proéminent) · sur demande · JAMAIS poussé en notification (c'est un objet intime, pas un outil de réengagement).
- **Rituel d'entretien** : à chaque jalon (S2, M1, M3), proposition de ré-enregistrer un message (« tu as 30 jours de plus que celui qui a enregistré ça — dis-lui quelque chose ») → le coffre devient un dialogue avec soi à travers le temps. Export intégral possible (il appartient à l'utilisateur).

## 20. Système de préparation mentale

- **Le rituel du dimanche (dans le bilan, B5)** : prévision 7 jours → identification de 1-3 situations à risque → pour chacune, un **si-alors** co-écrit (« si on me ressert sans me demander, alors je pose la main sur le verre et je dis 'je suis calé' ») → validation en 1 tap.
- **Le pré-mortem mensuel** (1 question) : « si tu devais craquer ce mois-ci : où, quand, avec qui ? » → le plan de prévention se met à jour.
- **La répétition mentale** (audio 3 min, optionnelle) : visualiser la situation → l'envie → le geste → la sortie.
- **Les phases annoncées** (automatique) : pic J2-J3 · plateau S3-S6 · **faux guéri S4-S8** (« tu vas bientôt te sentir invulnérable — c'est documenté, c'est un piège, voici pourquoi 🟢 ») · fêtes/vacances.
- **V1.5** : protocoles événements (mariage, deuil, rupture, vacances) + fire drill (répéter le SOS à froid, 5 min/semaine le premier mois).

## 21. Système de preuve scientifique

- **3 badges** : 🟢 « Ça, la science en est sûre » (méta-analyses/RCT convergents) · 🟡 « De bonnes raisons de le penser » · ⚪ « Notre hypothèse — on l'explore et on te dira ». Le badge s'applique AUSSI aux prévisions.
- **Fiche source** (1 tap depuis tout contenu) : l'affirmation → l'explication en 3 phrases → la référence → « ce que ça ne dit pas » (l'anti-surinterprétation).
- **Section Mythes** (10 au lancement) : « 21 jours pour une habitude » (médiane réelle ~66 j, intervalle 18-254) · « la volonté est un muscle qu'on épuise » (réplication contestée) · « un écart = tout est perdu » · etc.
- **Gouvernance** : corpus versionné, revu par le comité clinique (droit de veto), changelog scientifique public trimestriel. Règle absolue : une affirmation non sourçable est supprimée, pas « adoucie ».

## 22. Système de personnalisation (v1 sans ML — honnête et suffisant)

- **Étage 1 — Archétype (J0)** : phénotype v0 par déclencheurs déclarés (social / stress / ennui / habitude) → règle le ton des explications et les si-alors proposés.
- **Étage 2 — Profilage progressif** : 1 question contextuelle max/jour ; chaque envie/écart enrichit la carte déclencheurs→contextes.
- **Étage 3 — Préférences apprises (règles)** : outils SOS classés par taux de réussite personnel · « pas maintenant » qui apprend · heures de notification ajustées sur les ouvertures.
- **Étage 4 — La calibration racontée** : tout ce qui change est DIT (« j'ai remonté la marche dans ton SOS : 4/4 chez toi »). La personnalisation invisible n'existe pas dans Lucide.
- **Bandits contextuels et micro-randomisation : année 2**, quand il y a assez de données pour faire mieux que les règles.

## 23. Système de notifications

- **Plafond dur : 2/jour.** Catégories opt-in séparées (E9), chacune coupable indépendamment :
  1. **Météo du matin** (heure choisie) — la seule quotidienne par défaut
  2. **Fenêtre à risque** (15 min avant un créneau 🟠, avec le si-alors) — max 3/semaine
  3. **Rappel check-in** (optionnelle, off par défaut)
  4. **Post-écart** (une seule, +24 h — cf. §15)
  5. **Bilan prêt** (hebdo)
- **Interdits** : culpabilisation (« tu nous manques 😢 »), FOMO, streak en danger, toute notification commerciale sur les canaux ci-dessus. Heures de silence par défaut 22 h-8 h (sauf SOS, qui n'est pas une notification).
- **Chaque notification est mesurée** : ouverte-utile / ouverte-inutile / ignorée → la fréquence s'auto-réduit si inutile (et l'app le dit).

## 24. Système de monétisation

- **Gratuit à vie (par principe ET par acquisition)** : triage + orientation · mode SOS complet · coffre · check-in basique · explication du jour standard · compteur de rebond.
- **Premium** : météo personnalisée + fenêtre à risque · bilan hebdomadaire complet · préparation mentale · insights/patterns · plan si-alors illimité · protocoles événements · jalons santé enrichis.
- **Prix** : **14,99 €/mois · 79,99 €/an** (mis en avant : ≈ 6,70 €/mois, « moins qu'un cocktail ») · essai 7 jours sans CB si possible (sinon rappel J5 avant débit) · remboursement 30 j sans condition · bourse discrète sur demande.
- **Règles absolues** : jamais de paywall sur la sécurité · jamais d'upsell en crise ou post-écart · annulation en 1 tap · pas de pub, pas de vente de données (charte publique).
- **Année 2+** : B2B2C (employeurs/mutuelles, données agrégées uniquement), offre « avec mon médecin ».

## 25. Roadmap de développement réaliste

Équipe : 2 ingénieurs (1 mobile, 1 back/LLM) + 1 designer-produit + 1 rédacteur santé + 1 clinicien contractuel (relecture + comité) + fondateur (produit/growth).

| Mois | Livrable |
|---|---|
| M1-M2 | Corpus 90 jours rédigé + revu (chantier n°1) · design system · triage + onboarding · backend + données (event store, RGPD by design) |
| M3-M4 | Les 15 fonctionnalités du §9 · évals sécurité du LLM (scénarios adversariaux) · DPIA |
| M5 | Alpha interne (20 personnes) · red team clinique · App Store review (anticiper la catégorie santé) |
| M6-M7 | **Bêta fermée 300-500** (communautés réduction alcool, listes d'attente) · métrique unique : rétention J30 + taux de retour post-écart |
| M8 | Itération dure sur la boucle quotidienne (couper ce qui n'est pas utilisé) |
| M9 | **Lancement public France** (App Store + web) · contenu SEO mécanistique (20 articles) |
| M10-M12 | **Dry January** (le pic annuel) · V1.5 (allié, fire drill, journal des erreurs) · premières données publiées (« nos chiffres réels ») |

Budget indicatif 12 mois : 450-650 k€ (salaires + clinicien + infra/LLM + juridique + ASO/contenu). Point mort visé : non — objectif année 1 = preuve de rétention, pas rentabilité.

## 26. Le produit à 12 mois (état cible)

- 1 vertical (alcool) excellent, France, iOS (+ Android si traction).
- Les 15 features du §9 + V1.5 (allié, fire drill, journal des erreurs de l'app, protocoles événements).
- **KPI cibles** : rétention J30 ≥ 15 % (3× le secteur) · retour post-écart < 72 h ≥ 40 % · conversion essai→payant ≥ 25 % · 3 000-8 000 abonnés payants (100-500 k€ ARR) · **zéro incident de sécurité** · note stores ≥ 4,6.
- Publication des chiffres réels + comité scientifique public. Décision GO/NO-GO vertical 2 sur ces données.

## 27. Le produit à 3 ans (état cible)

- **3 verticals** : alcool + tabac + sommeil/stress (en soutien transversal), moteur de mécanismes partagé.
- **Marché anglophone** lancé (UK d'abord — ressources de crise localisées).
- **Mode entourage** + **laboratoire n-of-1** + phénotypage complet + détection de dérive : l'identité produit pleinement déployée.
- **B2B2C** : 5-15 contrats employeurs/mutuelles (données agrégées only).
- **Décision DTx prise** : si les données observationnelles sont fortes → RCT lancé sur le vertical alcool (chemin dispositif médical/remboursement) ; sinon consolidation grand public.
- Équipe 15-20 · ARR cible 2-5 M€ · la graduation et le programme d'anciens tournent (le bouche-à-oreille structurel).

## 28. À couper absolument (et ne jamais rouvrir sans preuve)

1. Le score global unique « de liberté » — remplacé par les 5 dimensions
2. Le « jumeau numérique » (le mot et l'ambition de simulation)
3. Les prédictions pluriannuelles individuelles
4. Le multi-objectifs en V1 (1 objectif + micro-habitudes de soutien max)
5. Les 7 domaines au lancement (1 vertical)
6. Le chatbot ouvert « parle-moi de tout » (le LLM reste en couche contrainte)
7. Le lancement mondial (1 pays, 1 langue)
8. La communauté en V1 (modération = métier à part entière)
9. Les wearables en V1
10. L'onboarding long (5 min max, profilage progressif ensuite)
11. La gamification décorative (badges/confettis/mascottes)
12. Toute notification de réengagement culpabilisante

## 29. À protéger absolument (les invariants — non négociables même sous pression business)

1. **Le SOS gratuit, offline, sans commerce — à vie**
2. **Jamais de « jour 0 »** — le comptage non punitif est l'âme du produit
3. **Le triage et l'orientation honnête** (savoir dire « va voir un médecin »)
4. **Les niveaux de preuve et le sourçage** — une affirmation non sourçable est supprimée
5. **Jamais de vente en vulnérabilité** (crise, post-écart)
6. **La charte données** : pas de pub, pas de vente, pas d'accès employeur/assureur aux données individuelles
7. **Le ton** : chaleureux-direct, jamais lyrique, jamais infantilisant
8. **L'honnêteté prédictive** (fourchettes + confiance affichée + erreurs avouées)
9. **L'anti-dépendance** (fréquence dégressive, métrique d'autonomie, graduation)
10. **Annulation 1 tap, export réel, suppression réelle**

## 30. La phrase de vente parfaite

**Hero :**
> **« On ne te promet pas que ce sera facile. On te promet que tu ne seras plus jamais surpris. »**

**Sous-titre :**
> Lucide t'explique ce qui se passe dans ton corps quand tu réduis l'alcool, te prévient des moments difficiles avant qu'ils arrivent — et te relève sans te juger quand tu tombes.

**CTA :** « Commence par comprendre » · **Preuve sociale (avant les vrais avis)** : « Chaque explication est sourcée. Chaque prévision est honnête. Vérifie par toi-même pendant 7 jours. »

---
*Spécification produit à visée d'exécution. Prérequis avant développement : validation juridique (frontière bien-être/DM, claims, RGPD/DPIA), validation clinique du triage et du corpus par professionnels qualifiés, recherche de marque (INPI/EUIPO). Les audits V1 et V2 (même dossier) documentent les justifications de chaque décision.*
