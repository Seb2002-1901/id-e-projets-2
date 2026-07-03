# LUCIDE V1 — CAHIER DES CHARGES EXÉCUTABLE

> **Statut : définitif.** Document de travail pour l'équipe : 1 designer · 2 développeurs mobile · 1 ingénieur backend · 1 clinicienne · 1 chef de produit. Base : `PRODUIT-FINAL.md`. Ce document TRANCHE — là où il diffère des documents précédents, c'est lui qui fait foi.
> **Obsession de cadrage : le plus petit produit capable d'une transformation réelle.**

---

# 0. DÉCISIONS DE CADRAGE

## 0.1 Les deux coupes radicales (assumées par le CEO)

**Coupe n°1 — La météo intérieure dynamique sort de V1 → V1.5.**
La promesse « plus jamais surpris » est tenue en V1 par la **trajectoire annoncée** (statique, normative, sourcée : « tes 72 prochaines heures », les phases J1→J90, les pièges annoncés) + les **moments à risque déclarés** avec si-alors. La météo quotidienne calculée exige des données de calibration qu'on n'aura qu'après le lancement — elle arrive en V1.5, meilleure, nourrie par de vraies données. Gain : ~2 sprints, 1 système de moins à designer, tester, expliquer.

**Coupe n°2 — Zéro IA générative en production V1 → V1.5.**
Le bilan hebdomadaire V1 est **déterministe** : gabarits + banques de phrases conditionnées par les données (le titre « La semaine où le mardi a failli gagner » se déclenche par règle : jour avec le plus de SOS). Gains : suppression totale du risque d'hallucination au lancement, pas d'infra d'évals bloquante, pas de coût d'inférence, App Store review simplifiée, RGPD allégé (aucune donnée ne sort vers un fournisseur de modèle). Le LLM arrive en V1.5 derrière le harnais d'évals, sur UNE feature (le bilan narratif). **Le produit V1 ne contient aucun appel à un modèle génératif.** La détection de crise sur texte libre est une liste déterministe locale de motifs (validée clinicienne).

## 0.2 Fonctionnalités GARDÉES en V1 (liste fermée — 13)
1. Onboarding 8 écrans avec triage sécurité + orientation
2. Enveloppe personnelle (définition de l'objectif et de l'écart)
3. Coffre vocal (enregistrement J0 + écoute en SOS)
4. Trajectoire annoncée (72 h + phases J1→J90 + pièges)
5. Check-in quotidien ≤ 30 s (saisie rétroactive incluse)
6. Carte du jour — corpus 90 cartes sourcées + badges de preuve + fiche source
7. Mode SOS offline 1 geste (courbe d'envie, respiration, coffre, appel allié, ressources danger)
8. Système écart→rebond complet (détection, protocole R, compteurs sans jour 0, temps de rebond)
9. Plans si-alors (création guidée depuis les déclencheurs + validation dominicale dans le bilan)
10. Bilan hebdomadaire déterministe
11. Notifications plafonnées (4 types, opt-in granulaire)
12. Abonnement (essai 7 j, freemium mince, annulation 1 tap)
13. Réglages & données (export, suppression, confidentialité)

## 0.3 SUPPRIMÉ de V1 (même si excellent)
| Fonctionnalité | Destination | Raison de la coupe |
|---|---|---|
| Météo intérieure dynamique | V1.5 | Coupe n°1 ci-dessus |
| Bilan LLM narratif | V1.5 | Coupe n°2 ci-dessus |
| Carte des déclencheurs (visualisation) | V1.5 | Les données sont capturées en V1 ; l'UI attend |
| Bibliothèque des moments difficiles (UI) | V1.5 | Idem — capture V1, consultation V1.5 |
| Bibliothèque des victoires complète | V1.5 | V1 : rangée « preuves » dans Repères, c'est tout |
| Rapport de confiance retrouvée | V1.5 | Nécessite 2-3 mois de données utilisateur |
| Journal des erreurs de l'app | V1.5 | Dépend de la météo (V1.5) |
| Fire drill, mythes, protocoles événements | V1.5 | Excellents, non indispensables au jour 1 |
| Mode entourage light | V1.5 | V1 : numéro d'allié composable depuis le SOS, rien de plus |
| Mode maintenance + graduation | V1.5 | Aucun utilisateur ne l'atteint avant M4 post-lancement — on la construit pendant que la cohorte mûrit |
| Android | V1.5 | iOS d'abord |
| n-of-1, dérive, phénotypage complet, entourage produit, tabac | V2 | — |
| Coachs humains, B2B, UK, micro-randomisation, RCT/DTx | V3 | — |

## 0.4 Les 3 fonctionnalités SIGNATURE
1. **Le rebond (jamais jour 0)** — la thèse du produit : après un écart, un protocole de 2 minutes et un compteur qui dit « 12 jours sur 15, rebond en 26 h » au lieu de « jour 0 ».
2. **Le SOS avec ta propre voix** — 1 geste, offline, la courbe d'envie qui redescend sous tes yeux, et le message que tu t'es enregistré le premier jour.
3. **« Aujourd'hui en toi »** — chaque jour, 90 secondes sourcées sur ce qui se passe dans ton corps, avec le badge de preuve et « ce que ça ne dit pas ».

---

# 1. PARCOURS UTILISATEUR MINIMAL PARFAIT

```
Découverte → Promesse (1 écran) → Onboarding-triage (6 min) → Trajectoire 72 h (la récompense)
   → Boucle quotidienne : check-in 30 s + carte du jour 90 s [+ si-alors le dimanche]
   → [Envie] → SOS 1 geste → preuve archivée
   → [Écart] → silence → 1 relance à +24 h → protocole R 2 min → plan v2 → rebond affiché
   → Bilan hebdomadaire (dimanche 18 h) → semaine suivante préparée
```
Sept moments, rien d'autre. Tout écran qui ne sert pas l'un de ces moments est supprimé.

---

# 2. LE MVP EXACT

L'app iOS (React Native/Expo) + backend Supabase UE qui permet à une utilisatrice triée de : définir son enveloppe → recevoir sa trajectoire → tenir sa boucle quotidienne (check-in + carte) → traverser une envie (SOS offline) → se relever d'un écart (protocole R + rebond) → recevoir son bilan dominical → payer 79,99 €/an après 7 jours d'essai. Corpus de 90 cartes embarqué dans l'app. Aucune IA générative. Lancement France, App Store, M9.

---

# 3. LES 20 ÉCRANS — CONTENU PRÉCIS ET ÉTATS

> Convention : chaque écran = **But / Contenu / Actions / États**. Les textes marqués « 🔒 » sont définitifs (section 9). Navigation : voir section 10.

**É01 · Accueil (première ouverture)**
- **But** : établir le ton en 5 secondes.
- **Contenu** : logo discret · 🔒 la promesse · sous-texte « Essai gratuit 7 jours · Le SOS restera gratuit à vie » · CTA « Commencer » · lien discret « J'ai déjà un compte ».
- **États** : unique. Pas de carrousel, pas de vidéo.

**É02 · Objectif & raisons (O1)**
- **But** : capter l'intention à chaud.
- **Contenu** : « Ton objectif ? » → 2 cartes : **Réduire** / **Arrêter** · puis « Pourquoi maintenant ? » → chips multi (santé, sommeil, argent, contrôle, un proche, autre+texte). Les chips alimentent le coffre.
- **États** : défaut · chip « autre » ouvre un champ (140 car. max).

**É03 · Consommation (O2)**
- **But** : baseline AUDIT-C sans jugement.
- **Contenu** : 3 questions AUDIT-C reformulées (fréquence / quantité type / fréquence des ≥ 6 verres), sliders + visuels neutres de verres-standard (« 1 verre = 25 cl bière = 10 cl vin = 3 cl spiritueux »).
- **États** : défaut · aide « c'est quoi un verre standard ? » (sheet).

**É04 · Sécurité (O3) — non skippable**
- **But** : trier. Le moment le plus important de l'app.
- **Contenu** : intro 🔒 « Deux minutes pour vérifier que Lucide est le bon outil pour toi — on te doit cette honnêteté. » · 4 questions dépendance physique (tremblements matinaux · boire pour calmer le corps au réveil · antécédent de sevrage difficile · conso quotidienne ancienne) · PHQ-2 (2 questions humeur).
- **États** : défaut · **branche verte** → É06 · **branche rouge** → É05.
- **Règle** : réponses stockées, jamais réaffichées à l'utilisateur.

**É05 · Orientation (branche rouge)**
- **But** : refuser en prenant soin. Zéro culpabilisation.
- **Contenu** : 🔒 texte d'orientation (section 9) · boutons : « Appeler Alcool Info Service » (0 980 980 930, tap-to-call) · « Trouver un professionnel » (lien annuaire) · « M'inscrire à la liste "Lucide avec mon médecin" » (email) · « J'ai compris ».
- **États** : unique. L'app reste utilisable en mode « ressources seulement » (pas de parcours, SOS-danger accessible).

**É06 · Déclencheurs & moments à risque (O4)**
- **But** : matière première des si-alors et de la trajectoire.
- **Contenu** : « Qu'est-ce qui te donne envie de boire ? » chips multi (stress, soirées, ennui, habitude du soir, conflits, solitude, fatigue, célébrations) · « Tes moments à risque » : grille 7 jours × 3 créneaux (midi/soir/nuit), tap pour marquer.
- **États** : défaut · minimum 1 déclencheur requis.

**É07 · Le coffre (O5)**
- **But** : l'enregistrement qui servira à 23 h un vendredi.
- **Contenu** : 🔒 « Enregistre 30 secondes pour la personne que tu seras un soir de doute. Personne d'autre ne l'entendra jamais. » · 3 questions-guides affichées (Pourquoi tu commences ? Qu'est-ce que tu ne veux plus ? Que veux-tu lui dire ?) · bouton micro (enregistrer / réécouter / refaire) · « Passer pour l'instant » (discret).
- **États** : avant / pendant (waveform + chrono 90 s max) / après (réécoute) / refusé (rappel doux au jalon J7, une fois).

**É08 · Tes 72 prochaines heures (O6) — la récompense**
- **But** : tenir la promesse à la minute 5.
- **Contenu** : timeline verticale personnalisée (selon objectif + baseline) : « Ce soir : … » / « Demain (J1) : sommeil plus léger — voici pourquoi » / « J2-J3 : le pic — irritabilité, envies plus fortes entre 18-21 h ; ça culmine, puis ça redescend 🟢 » · chaque item : 1 phrase + badge preuve · CTA « Je suis prête ».
- **États** : variante arrêt / variante réduction (contenus distincts).

**É09 · Compte & notifications (O7)**
- **But** : sécuriser la donnée, régler le canal.
- **Contenu** : Sign in with Apple (défaut) / e-mail · puis 3 toggles de notifications avec description exacte : Carte du jour (heure au choix, défaut 8 h 30) · Rappel de mes moments à risque (défaut off) · Bilan du dimanche (défaut on) · mention 🔒 « Jamais plus de 2 par jour. Jamais de culpabilisation. Modifiable en 1 tap. »
- **États** : défaut · erreurs auth (réseau, annulation Apple).

**É10 · Essai & abonnement (paywall)**
- **But** : convertir sans piéger.
- **Contenu** : rappel des 3 piliers avec captures · offre : « 7 jours gratuits, puis 79,99 €/an (6,70 €/mois) ou 14,99 €/mois » (annuel présélectionné) · 🔒 « Le SOS et la sécurité resteront gratuits pour toujours, abonné ou non. » · CTA « Commencer mes 7 jours » · « Continuer en version gratuite » (visible, pas caché).
- **États** : défaut · achat en cours · succès · échec StoreKit · restauration d'achat · **gratuit choisi** (l'app fonctionne : SOS, check-in, rebond, 1 carte/semaine).

**É11 · Aujourd'hui (home — onglet 1)**
- **But** : la boucle en 1 écran, 4 zones max.
- **Contenu** : Z1 en-tête : « Jour 12 · [phase : La traversée] » + prochaine étape de trajectoire (« demain : … ») · Z2 check-in (si non fait) : bouton « Mon point du jour — 30 secondes » · Z3 la carte du jour (titre + 90 s + badge) · Z4 une seule action contextuelle (ex. vendredi 17 h : « Ton si-alors de ce soir — le relire ? »). Bouton **SOS** fixe en bas, toujours visible, toujours actif.
- **États** : check-in fait/non fait · jour avec/sans action · **mode gratuit** (Z3 : carte hebdo + teaser verrouillé sobre) · premier jour (bandeau de bienvenue) · retour après silence ≥ 48 h (voir É16) · offline (tout fonctionne, bandeau discret « hors ligne »).

**É12 · Check-in (bottom sheet depuis É11)**
- **But** : 30 secondes, pas une de plus.
- **Contenu** : Q1 humeur (5 visages sobres) · Q2 « Des envies hier ? » (0/1/2/3+) · Q3 « Ta conso d'hier ? » — binaire d'abord : « Dans mon enveloppe / Au-dessus » ; si « au-dessus » → stepper verres + 🔒 micro-texte : « Merci de l'honnêteté. On regarde ça ensemble après. » (déclenche le flux écart É16 à la validation).
- **États** : jour courant · rétroactif (jusqu'à J-3, sélecteur discret) · déjà fait (résumé + modifier).

**É13 · Carte du jour (détail)**
- **But** : la promesse quotidienne.
- **Contenu** : titre-question · corps 90 s (350 mots max) · badge 🟢🟡⚪ · lien « La source en 3 phrases » (sheet É14) · encart « Ce que ça ne dit pas » · action liée optionnelle · navigation ← cartes des jours passés (lecture seule).
- **États** : défaut · carte passée · carte verrouillée (gratuit) avec 🔒 texte sobre « Cette carte fait partie du parcours complet » (jamais de compte à rebours, jamais de rouge).

**É14 · Fiche source (sheet)**
- **But** : la crédibilité en 1 tap.
- **Contenu** : l'affirmation citée · « Ce qu'on sait » (3 phrases vulgarisées) · la référence (auteurs, année, type d'étude) · « Ce que ça ne dit pas » · niveau de preuve expliqué en 1 ligne.
- **États** : unique. Pas de lien externe sortant en V1 (App Store + distraction).

**É15 · SOS (plein écran, 4 états — accessible partout : bouton global, widget, écran verrouillé via App Intent)**
- **But** : tenir 10 minutes. Conçu pour un utilisateur épuisé/alcoolisé : cibles ≥ 60 pt, contraste max, 8 mots par instruction, fond sombre.
- **État A · Choix** : 2 boutons pleine largeur : 🔒 « J'ai une envie » / 🔒 « Je ne suis pas en sécurité ». Rien d'autre.
- **État B · Envie** : la **courbe d'envie animée** (monte-culmine-redescend, curseur temps réel, chrono) · 1 instruction à la fois (rotation : « Ne lutte pas. Observe. » / « Où est-elle dans ton corps ? » / « Elle va redescendre. Elle redescend toujours. ») · 3 boutons : 🎙️ Ma voix (lecture coffre plein écran) · 🫁 Respirer (guide expiration longue, cercle animé) · 📞 Mon allié (tap-to-call si configuré).
- **État C · Sortie** : « C'est passé ? » Oui → capture 2 chips (déclencheur + lieu) → 🔒 restitution (« 7ᵉ envie traversée. Chez toi : 8 min en médiane. Archivée dans tes preuves. ») · « Pas encore » → outil suivant (marche guidée 5 min) puis re-proposition ; après 2 cycles → « Appelle ton allié, ou mets-toi en sécurité — tu as tenu 20 minutes, c'est énorme. »
- **État D · Danger** : liste courte, gros : **3114** (tap-to-call) · **15 / 112** · Alcool Info Service · Mon allié. 🔒 « Tu as bien fait d'appuyer. Parle à un humain maintenant. » Aucun autre contenu, aucun retour forcé.
- **Exigences** : fonctionne 100 % offline · < 2 s depuis n'importe où · aucune écriture réseau sur le chemin critique · l'audio du coffre est en cache local chiffré.

**É16 · Retour après écart — protocole R (3 étapes, plein écran doux)**
- **Déclenchement** : Q3 « au-dessus » validée · bouton « J'ai eu un écart » (dans Repères) · ou ouverture après silence ≥ 48 h avec écart probable.
- **Étape 1 · Accueil** : 🔒 texte P1 (section 9) + stat normalisante 🟢. Aucun compteur visible ici.
- **Étape 2 · Comprendre** : 4 questions chips : Où ? (maison/bar/chez des amis/travail/autre) · Avec qui ? (seul/partenaire/amis/collègues) · Émotion 2 h avant ? (stress/ennui/tristesse/colère/joie/fatigue) · Qu'est-ce qui aurait aidé ? (partir plus tôt/un plan/en parler/rien-je choisis) + champ libre optionnel.
- **Étape 3 · Le plan a appris** : restitution pattern (règle : combinaison la plus fréquente) · UNE modification proposée du si-alors concerné (accepter/éditer) · puis compteurs : 🔒 « **12 jours dans ton enveloppe sur 15.** Rebond : **26 h** — ton record. » CTA « On continue ».
- **États** : premier écart (texte enrichi « ça devait arriver un jour — littéralement : c'est dans la trajectoire ») · écarts multiples < 7 j (traités en « une vague », un seul protocole) · silence > 7 j → **reprise douce** (3 écrans : « Content de te revoir » / « Où en es-tu ? » 2 options : je reprends mon enveloppe / je l'ajuste / « C'est reparti » — pas de rétrospective imposée).

**É17 · Repères (onglet 2)**
- **But** : la fierté factuelle.
- **Contenu** : bloc rebond (jours dans l'enveloppe cumulés « 47/52 » · rebond dernier/médian/record · envies traversées) · rangée preuves (chips horodatées : « 1ʳᵉ semaine dans l'enveloppe », « 10ᵉ envie », « record de rebond ») · bouton « J'ai eu un écart » (accès direct protocole R, sans détour) · accès Mon plan (É18) et au coffre.
- **États** : J0 (état vide 🔒 : « Tes preuves se construiront ici. La première : avoir commencé. ») · normal · post-écart (le bloc rebond passe devant).

**É18 · Mon plan**
- **But** : l'enveloppe et les armes.
- **Contenu** : l'enveloppe personnelle (résumé lisible + « modifier » — max 1 fois/semaine, avec confirmation « tu ajustes ton cadre, ce n'est ni tricher ni échouer, mais fais-le à tête reposée ») · mes si-alors (liste : déclencheur → réponse ; créer/éditer, formulation guidée en 2 champs « Si… » / « Alors… », 8 max) · mon allié (nom + numéro, local au téléphone, utilisé par le SOS) · le coffre (réécouter, ré-enregistrer aux jalons).
- **États** : défaut · édition enveloppe · verrou hebdo enveloppe (explication).

**É19 · Bilan hebdomadaire (dimanche 18 h, push + carte dans É11)**
- **But** : le rendez-vous. 4 minutes.
- **Contenu (5 blocs, généré par règles + banques de phrases)** : B1 titre conditionnel (« La semaine où [pattern] ») + 3 chiffres (jours dans l'enveloppe, envies traversées, check-ins) · B2 tri-état 3 dimensions (enveloppe / envies / humeur : ↗→↘ + phrase d'interprétation de la banque, avec badge) · B3 le fait de la semaine (règle : le pattern le plus saillant, formulé prudemment ⚪) · B4 la semaine qui vient : moments à risque (déclarés + agenda si saisi) + 1-3 si-alors à valider (tap) · B5 la preuve de la semaine (ajoutée aux Repères).
- **États** : semaine 1 (variante « premier bilan ») · semaine avec écart (le rebond est le fil narratif, jamais la faute) · données insuffisantes (< 3 check-ins : bilan honnête « je manque de données pour te dire quelque chose d'utile — 3 points du jour suffisent ») · gratuit (B1 + B5 seulement + teaser sobre).

**É20 · Réglages & données**
- **Contenu** : compte · abonnement (état, **annuler** — 1 tap vers la gestion StoreKit, sans écran de rétention) · notifications (3 toggles + heure) · données : **exporter tout** (JSON + audio, livré par lien sécurisé < 48 h) · **supprimer mon compte** (double confirmation, effet < 30 j, texte clair) · confidentialité (charte 🔒 résumée en 5 lignes + lien) · aide/contact · ressources d'urgence (permanent) · mentions légales, CGU, version.
- **États** : abonné / essai / gratuit / suppression en cours.

---

# 4. RÈGLES MÉTIER (BR-xx — normatives)

**Triage & sécurité**
- BR-01 : score AUDIT-C ≥ 9 (F)/10 (H) OU ≥ 1 signe de dépendance physique OU antécédent de sevrage difficile → branche rouge É05. Pas de parcours.
- BR-02 : PHQ-2 ≥ 3 → bandeau doux ressources humeur + ligne d'aide, parcours autorisé ; PHQ-2 = 6 avec réponse max à l'item 2 → orientation prioritaire.
- BR-03 : détection de motifs de crise sur TOUT champ libre (liste déterministe locale validée clinicienne : idées suicidaires, désespoir aigu…) → interruption douce + É15-D. Aucun LLM.
- BR-04 : SOS accessible à tous les états du compte (gratuit, essai expiré, orienté-rouge, supprimé-en-cours).

**Enveloppe & écart**
- BR-10 : mode arrêt → enveloppe = 0 ; tout verre = écart. Mode réduction → enveloppe = {max/semaine, max/occasion, jours off} ; écart = dépassement d'AU MOINS une règle.
- BR-11 : modification d'enveloppe : max 1/semaine, jamais dans les 24 h suivant un écart (🔒 « Pas ce soir. Ajuste ton cadre à tête reposée — demain. »).
- BR-12 : écarts multiples sur ≤ 72 h sans protocole intermédiaire = UNE « vague », un seul protocole R.
- BR-13 : le compteur « jours dans l'enveloppe » est cumulatif et ne se remet JAMAIS à zéro. Aucune surface de l'app n'affiche « jour 0 », « série brisée » ni équivalent.
- BR-14 : temps de rebond = horodatage(fin de l'écart déclaré) → horodatage(protocole R complété). Affiché en heures < 72 h, en jours au-delà.

**Relance post-écart**
- BR-20 : UNE seule notification de retour, à +24 h ± 2 h de l'écart détecté/déclaré, dans la fenêtre 10 h-20 h. Jamais de seconde relance.
- BR-21 : silence ≥ 48 h chez un utilisateur à check-in quotidien → à la réouverture, É11 propose « reprise » sans présumer l'écart (« Tout va comme tu veux ? » 2 chips : « Oui, j'étais juste occupée » → rien / « Pas vraiment » → protocole R).

**Boucle & contenu**
- BR-30 : check-in rétroactif limité à J-3.
- BR-31 : la carte du jour suit le jour de parcours (J1→J90) ; après J90 : rotation « consolidation » (V1 : 10 cartes de maintenance en boucle + bilans).
- BR-32 : gratuit = 1 carte/semaine (le lundi) + toutes les fonctions de sécurité + check-in + rebond.
- BR-33 : notifications : plafond dur 2/jour toutes catégories confondues, silence 21 h 30-8 h (sauf action utilisateur).

**Abonnement**
- BR-40 : fin d'essai sans conversion → bascule gratuite silencieuse (pas d'écran bloquant, pas de perte de données).
- BR-41 : l'annulation ne déclenche AUCUN écran de rétention, aucune relance e-mail de « win-back » en V1.

---

# 5. MODÈLE DE DONNÉES (PostgreSQL — RLS par user_id partout)

```
users            id, auth_id, email_hash, created_at, locale, status(active|oriented|deleting)
profiles         user_id FK, goal(stop|reduce), reasons[], triggers[], risk_slots jsonb,
                 ally_name?, journey_start_date, phase(cache), premium_status(cache)
triage_results   id, user_id, audit_c_score, phys_dep_flags jsonb, phq2_score,
                 outcome(green|red), created_at        ← append-only, jamais modifié
envelopes        id, user_id, version, rules jsonb{max_week,max_occasion,off_days[]},
                 active bool, created_at               ← versionné, jamais supprimé
checkins         id, user_id, date, mood(1-5), cravings(0-3), within_envelope bool,
                 drinks_count?, created_at, backfilled bool
sos_sessions     id, user_id, started_at, type(craving|danger), duration_s,
                 tools_used[], outcome(passed|escalated|abandoned),
                 trigger_chip?, place_chip?            ← la bibliothèque des moments
lapses           id, user_id, detected_via(checkin|button|silence), occurred_on,
                 wave_id (groupement BR-12), context jsonb{where,who,emotion,helper},
                 free_text_encrypted?
returns          id, lapse_wave_id FK, protocol_completed_at, rebound_hours,
                 plan_change_id FK
if_then_plans    id, user_id, trigger_label, if_text, then_text, version, active,
                 source(onboarding|weekly|post_lapse), success_count, created_at
vault_items      id, user_id, kind(audio|photo|reason), storage_key(chiffré),
                 duration_s?, recorded_at, milestone_label?
proofs           id, user_id, kind(first_week|craving_10|rebound_record|manual|…),
                 label, occurred_at, payload jsonb
content_cards    id(slug), day_index, arc, variant(stop|reduce|both), title, body_md,
                 evidence_level(green|yellow|white), source_ref jsonb,
                 not_saying_md, action?, version      ← embarqué app + synchro CDN
card_reads       user_id, card_id, read_at, duration_s
weekly_reports   id, user_id, week_start, payload jsonb(blocs B1-B5), generated_at
notif_prefs      user_id, daily_card{on,time}, risk_reminder{on}, weekly{on}
consents         user_id, kind(health_data|analytics|research), granted, ts   ← art. 9
subscriptions    user_id, store(apple), product, status, trial_end, renews_at (RevenueCat webhook)
deletion_requests user_id, requested_at, purge_after
```
- **Local-first** : `checkins`, `sos_sessions`, `lapses/returns`, lecture des `content_cards` et du coffre vivent en SQLite local (source de vérité du quotidien) avec synchro différée. Le SOS n'a AUCUNE dépendance réseau.
- Texte libre : chiffré applicativement avant stockage (clé par utilisateur, Keychain).

# 6. API (REST, Supabase + Edge Functions — préfixe /v1)

```
POST /auth/*                    (Supabase Auth — Apple, e-mail OTP)
POST /triage                    → outcome green|red (calcul serveur, résultat journalisé)
GET  /me · PATCH /me            profil, prefs
POST /envelopes                 nouvelle version (BR-11 appliquée serveur)
POST /checkins  (batch sync)    idempotent par (user,date)
POST /sos-sessions (batch sync)
POST /lapses · POST /returns    (batch sync, calcul rebound_hours serveur)
GET  /content/manifest          version corpus → delta CDN signé
POST /plans · PATCH /plans/:id
GET  /weekly-report?week=       génération à la volée si absente (déterministe)
POST /vault/presign             upload/download audio chiffré (URLs signées courtes)
POST /export                    job export complet → lien sécurisé (e-mail)
POST /delete-account            → deletion_requests (purge ≤ 30 j)
Webhooks: RevenueCat (abonnement) · CRON: weekly-reports, relance-écart (BR-20), purge RGPD
```

# 7. NOTIFICATIONS EXACTES (liste fermée V1)

| ID | Déclencheur | Texte exact | Règles |
|---|---|---|---|
| N1 Carte du jour | quotidien, heure choisie | « Aujourd'hui en toi : {titre de la carte} » | opt-in, défaut on 8 h 30 |
| N2 Moment à risque | 15 min avant un créneau déclaré | « Ton créneau sensible approche. Ton plan : {si_alors_court}. Tu es prête. » | opt-in, défaut **off**, max 3/sem |
| N3 Retour après écart | BR-20 (+24 h, 10 h-20 h) | « Pas de jugement ici. Un écart, c'est une donnée — pas une identité. 3 questions, 2 minutes, quand tu veux. » | automatique, UNE fois |
| N4 Bilan dominical | dim. 18 h | « Ton bilan de la semaine est prêt. 4 minutes, rien que du vrai. » | opt-in, défaut on |
| N5 Fin d'essai | J6 de l'essai, 1 fois | « Ton essai se termine demain. Sans action de ta part : version gratuite — le SOS reste à toi, pour toujours. » | transactionnelle, honnête |
Interdits : toute autre notification. Pas de « tu nous manques », pas de streak, pas de promo.

# 8. ÉVÉNEMENTS ANALYTICS (PostHog UE — pseudonymisés, opt-in analytics séparé du consentement santé, AUCUN contenu de champ libre)

```
onboarding_started/completed · triage_completed{outcome} · orientation_shown/cta{which}
goal_set{mode} · envelope_created/updated · vault_recorded{duration}/skipped
trajectory_viewed · account_created{method} · trial_started · plan_selected{annual|monthly}
paywall_dismissed_to_free · checkin_completed{mood,cravings,within}/backfilled
card_opened{day}/read_completed{duration} · source_sheet_opened
sos_opened{entry_point} · sos_type{craving|danger} · sos_tool_used{tool}
sos_completed{outcome,duration} · danger_resources_shown/call_tapped{which}
lapse_declared{via} · protocol_r_started/completed{step_reached} · plan_updated_post_lapse
rebound_computed{hours} · weekly_report_opened/if_then_validated{count}
notif_received/opened{id} · subscription_started/cancelled · export_requested · account_deletion_requested
```
KPI dérivés directs : retour post-écart < 72 h = `protocol_r_completed / lapse_declared` fenêtré · rétention J30 · complétion check-in.

# 9. TEXTES EXACTS (les 10 qui portent le produit — 🔒 définitifs, tutoiement, jamais de point d'exclamation)

1. **Promesse (É01)** : « On ne te promet pas que ce sera facile. On te promet que tu ne seras plus jamais surpris. »
2. **Triage (É04 intro)** : « Deux minutes pour vérifier que Lucide est le bon outil pour toi. On te doit cette honnêteté-là. »
3. **Orientation (É05)** : « Ce que tu traverses mérite mieux qu'une app seule. Un arrêt brutal peut être dangereux dans ta situation — pas parce que tu es "trop atteinte", mais parce que ton corps s'est adapté et qu'il faut l'accompagner médicalement. Commence par un appel gratuit et anonyme. Lucide sera là ensuite, en complément. »
4. **Coffre (É07)** : « Enregistre 30 secondes pour la personne que tu seras un soir de doute. Personne d'autre ne l'entendra jamais. »
5. **SOS instruction clé (É15-B)** : « Elle va redescendre. Elle redescend toujours. »
6. **Relance écart (N3)** : « Pas de jugement ici. Un écart, c'est une donnée — pas une identité. 3 questions, 2 minutes, quand tu veux. »
7. **Protocole R, P1 (É16)** : « Content de te revoir. Il en faut, du courage, pour rouvrir cette app — c'est exactement ce courage-là qui fait réussir les parcours. La majorité des parcours qui aboutissent comportent des écarts. Le tien vient d'apprendre quelque chose. »
8. **Rebond (É16-3 / É17)** : « {X} jours dans ton enveloppe sur {Y}. Rebond : {Z} — tu te relèves de plus en plus vite. C'est ça, la compétence. »
9. **Paywall (É10)** : « Le SOS et la sécurité resteront gratuits pour toujours, abonnée ou non. »
10. **Enveloppe verrouillée post-écart (BR-11)** : « Pas ce soir. Ajuste ton cadre à tête reposée — demain. »

# 10. FLUX & NAVIGATION

```
[É01]→[É02]→[É03]→[É04]→(rouge)→[É05 fin]
                    └(vert)→[É06]→[É07]→[É08]→[É09]→[É10]→ APP

APP = TabBar 2 onglets + 1 bouton :
  ┌─ Aujourd'hui [É11] ── sheet Check-in [É12] ── Carte [É13] ── sheet Source [É14]
  │                    └─ Bilan hebdo [É19] (carte dominicale)
  ├─ Repères [É17] ── Mon plan [É18] ── Coffre
  │              └─ « J'ai eu un écart » → Protocole R [É16]
  ├─ (⚙︎ depuis Repères) Réglages [É20]
  └─ [SOS] bouton flottant global → [É15 états A-D]   (+ widget, App Intent écran verrouillé)

Flux écart : É12(Q3 au-dessus) ─→ É16(3 étapes) ─→ É17(rebond)
Flux silence : notification N3 ─→ É16 · réouverture ≥48h ─→ É11 état reprise
```

# 11. ARCHITECTURE TECHNIQUE

- **Mobile** : React Native + Expo (TypeScript). iOS cible 16+. **Local-first** : SQLite (expo-sqlite) + MMKV ; file de synchro idempotente ; le corpus (90 cartes, JSON + MD) embarqué dans le binaire, mis à jour par manifest CDN signé. Audio coffre : enregistré local, chiffré (libsodium, clé Keychain), upload chiffré en tâche de fond (backup), lecture toujours locale.
- **SOS** : bundle autonome — zéro import réseau, zéro dépendance au state global ; animation courbe en Reanimated ; ouverture < 2 s mesurée en CI (test de perf automatisé).
- **Backend** : Supabase région UE (Francfort) — Auth, Postgres + RLS stricte, Storage (audio chiffré), Edge Functions (triage, bilan, relances, export, purge). CRON Supabase.
- **Paiements** : StoreKit 2 via RevenueCat (webhooks → `subscriptions`).
- **Analytics** : PostHog Cloud EU, opt-in, pseudonymisé, liste d'événements fermée (§8).
- **Push** : Expo Notifications/APNs — payloads sans donnée sensible (contenu générique, détail dans l'app).
- **CI/CD** : GitHub Actions + EAS Build ; tests : unitaires (règles métier BR-xx en priorité), e2e Detox sur les 3 flux critiques (onboarding-triage, SOS, écart→rebond) ; perf SOS en CI.
- **Environnements** : dev / staging / prod, données de démo, feature flags maison (table `flags`), kill-switch par module.
- **Monitoring** : Sentry (UE, scrubbing agressif : aucun champ libre, aucun identifiant santé).

# 12. ARCHITECTURE IA

- **V1 (lancement)** : **aucun modèle génératif en production.** Personnalisation = règles (BR-xx) + banques de phrases conditionnelles (200-300 phrases, rédigées + validées clinicienne, versionnées comme le corpus). Détection de crise = motifs déterministes locaux. Ce choix est un ARGUMENT (App Store, RGPD, confiance), pas un manque.
- **V1.5 (le LLM entre, sur UNE feature)** : le titre + les transitions narratives du bilan hebdo. Architecture : gabarits + slots de données → génération contrainte (température basse, 120 tokens max) → filtre de sortie (liste d'interdits) → fallback déterministe si échec. Prérequis bloquants : harnais d'évals (200 scénarios adversariaux, seuils = 0 faux négatif crise), échantillonnage humain hebdomadaire, kill-switch, DPA fournisseur UE, journalisation.
- **Jamais, à aucune version** : LLM sur le chemin du SOS, du triage, ou en conversation libre ; contenu factuel généré hors corpus ; décision clinique automatisée.

# 13. DESIGN SYSTEM & COMPOSANTS

- **Principes** : calme, dense en sens, pauvre en stimuli. Jamais de rouge punitif, jamais de confettis. Le produit doit être beau comme un carnet, pas comme un jeu.
- **Couleurs** : fond crème `#FAF7F2` / encre `#1C2430` / accent unique « aube » `#E8734A` (CTA seulement) / vert preuve `#2E7D5B` / jaune preuve `#C9A227` / gris preuve `#8A93A2` / **mode SOS** : fond nuit `#10151D`, texte `#F2EDE6`, accent adouci. Dark mode global V1 : oui (palette inversée définie).
- **Typo** : titres — Fraunces (ou serif équivalente) ; texte — Inter. Corps 17 pt minimum, Dynamic Type supporté jusqu'à XXL.
- **Composants (bibliothèque fermée V1 — 16)** : Bouton (3 variantes) · Chip sélectionnable · Slider verres · Carte-contenu · Badge preuve · Sheet · Stepper questions · Visages d'humeur · Timeline verticale · Courbe d'envie (composant signature, spec animation dédiée) · Cercle de respiration · Enregistreur vocal · Rangée compteur · Rangée preuve · Bandeau statut (offline/gratuit) · TabBar + bouton SOS.
- **Ton rédactionnel (règles dures)** : tutoiement · phrases courtes · zéro « ! » · zéro emoji dans le corps (pictos UI ok) · mots bannis : rechute, échec, faute, sobre/sobriété (V1, chargé), discipline, volonté · mots piliers : écart, rebond, enveloppe, preuve, plan, traverser.

# 14. ÉTATS VIDES, ERREURS, EDGE CASES

- **États vides** : Repères J0 (🔒 §É17) · bilan < 3 check-ins (honnête) · pas de si-alors (« Ton premier plan se crée dimanche — ou maintenant si tu veux »).
- **Erreurs** : offline → tout le quotidien fonctionne, bandeau discret ; sync en reprise silencieuse · échec paiement → réessai + restauration, jamais de perte d'accès pendant l'essai · échec enregistrement coffre (micro refusé) → guide permission, alternative texte · échec notification (refusée) → l'app fonctionne, rappel contextuel léger dans É11 le dimanche.
- **Edge cases (traités, pas découverts en prod)** : changement de fuseau (jour de parcours = date locale figée à la création) · check-in double (idempotence par date) · écart déclaré rétroactivement à J-3 (vague recalculée, rebond depuis la déclaration) · enveloppe modifiée pendant une vague (interdit BR-11) · utilisateur orienté-rouge qui réinstalle (triage re-proposé, historique conservé) · essai expiré pendant un protocole R en cours (le protocole se termine, bascule après) · suppression de compte avec abonnement actif (info claire : résilier via Apple) · coffre de 0 s / silence (détection, re-proposition) · 3+ écarts/semaine récurrents sur 3 semaines → message honnête : « Ton enveloppe et la réalité se disputent. Deux options : on l'ajuste ensemble, ou c'est le signe qu'un accompagnement humain t'aiderait — voici où. » (règle validée clinicienne).

# 15. SÉCURITÉ

Chiffrement transit (TLS 1.3) et repos (Postgres + Storage) · champs libres et audio : chiffrement applicatif, clé par utilisateur en Keychain (le serveur stocke des blobs) · RLS sur toutes les tables · authentification Apple par défaut · pas de mot de passe stocké (OTP e-mail) · verrouillage app optionnel (Face ID) · écrans sensibles exclus des captures multitâche (coffre, triage) · secrets en coffre (pas dans le code) · dépendances auditées en CI · pentest externe avant lancement · plan de réponse à incident écrit (qui, quoi, 72 h CNIL).

# 16. RGPD (données de santé — art. 9)

Consentement **explicite et distinct** pour : données santé (nécessaire au service) / analytics (optionnel) / recherche future (optionnel, V2) · DPIA complétée avant la bêta (modèle en annexe du repo juridique) · minimisation : chaque champ du §5 justifié, rien d'autre · hébergement UE exclusivement · sous-traitants (Supabase, PostHog EU, RevenueCat, Sentry, Expo) sous DPA, listés publiquement · droits : export complet self-service (< 48 h), suppression réelle (purge ≤ 30 j, y compris backups par rotation), rectification · rétention : compte inactif 24 mois → e-mail puis purge · pas de transfert hors UE · les réponses de triage ne sont JAMAIS utilisées à autre chose que l'orientation · registre des traitements tenu dès la bêta · DPO externe désigné.

# 17. ACCESSIBILITÉ

WCAG 2.1 AA · VoiceOver complet (labels sur 100 % des éléments interactifs, ordre de lecture vérifié sur les 20 écrans) · Dynamic Type jusqu'à XXL sans casse (test CI de layout) · contrastes ≥ 4,5:1 (7:1 en mode SOS) · cibles ≥ 44 pt (≥ 60 pt dans le SOS) · animations désactivables (Reduce Motion : la courbe d'envie passe en progression statique) · aucun contenu porté par la seule couleur (badges = forme + libellé) · haptique en soutien, jamais seule · audit accessibilité externe avant lancement.

# 18. PERFORMANCE

Démarrage à froid < 2 s (iPhone 12) · **SOS : ouverture < 2 s depuis l'écran verrouillé, testé en CI, budget non négociable** · check-in complet < 30 s chrono réel (test utilisateur) · 60 fps sur courbe d'envie et respiration · app < 80 Mo · consommation batterie SOS 10 min < 3 % · fonctionnement intégral du quotidien en avion · synchro différée sans perte (test de chaos réseau) · crash-free ≥ 99,8 %.

---

# 19. BACKLOG — EPICS, USER STORIES, CRITÈRES D'ACCEPTATION, MoSCoW

> AC en format compact Étant donné/Quand/Alors. Priorité MoSCoW en fin de ligne. Estimations en points (équipe de 2 dev + 1 backend, vélocité attendue ~40 pts/sprint de 2 semaines).

## EPIC A — Socle & données (Sprints 1-2) — MUST
- **A1** Compte Apple/e-mail. AC : ED une nouvelle utilisatrice, Q elle choisit Apple, A compte créé et session persistante ; échec réseau → message + retry. (5)
- **A2** Base locale SQLite + file de synchro idempotente. AC : ED des check-ins créés offline, Q le réseau revient, A synchro sans doublon (test par date). (8)
- **A3** RLS + schéma §5 + migrations. AC : un user ne peut lire QUE ses lignes (test automatisé multi-comptes). (8)
- **A4** Consentements art. 9 (3 cases distinctes). AC : refus analytics → zéro événement émis (vérifié réseau). (3)
- **A5** Design system : 16 composants + tokens + dark. AC : Storybook complet, revue design. (13)

## EPIC B — Onboarding & triage (Sprints 2-3) — MUST
- **B1** É01-É03. AC : parcours < 90 s au doigt ; AUDIT-C calculé conforme grille de référence (tests unitaires sur 12 profils). (8)
- **B2** É04 triage + BR-01/02/03. AC : ED réponses au-dessus des seuils, Q validation, A branche rouge systématique (tests des 8 combinaisons limites) ; aucun écran de parcours accessible ensuite. (8)
- **B3** É05 orientation + mode ressources. AC : tap-to-call fonctionne ; l'app reste ouvrable avec SOS-danger. (5)
- **B4** É06 déclencheurs/moments + É09 compte/notifs. AC : min 1 déclencheur ; prefs enregistrées ; défauts conformes §7. (5)
- **B5** É07 coffre (enregistrement chiffré local). AC : audio 90 s max, réécoute, refus micro géré ; fichier illisible hors app (test). (8)
- **B6** É08 trajectoire 72 h (2 variantes). AC : contenu conforme corpus, badges affichés, temps de lecture < 60 s. (5)

## EPIC C — Boucle quotidienne (Sprints 3-5) — MUST
- **C1** É11 Aujourd'hui (4 zones + états). AC : tous les états §É11 démontrés en revue ; offline complet. (8)
- **C2** É12 check-in + BR-30 + flux « au-dessus ». AC : 3 taps si dans l'enveloppe ; « au-dessus » → É16 proposé sans culpabilisation (texte 🔒) ; rétroactif J-3. (8)
- **C3** É13-É14 carte du jour + source. AC : J1→J90 correct au changement de date/fuseau (BR édge) ; navigation cartes passées ; état gratuit conforme. (8)
- **C4** Corpus : pipeline d'intégration (MD → app) + manifest CDN. AC : mise à jour d'une carte sans release App Store ; version affichée. (5)
- **C5** Enveloppe É18 + BR-10/11. AC : verrou hebdo + verrou 24 h post-écart démontrés ; résumé lisible conforme. (5)

## EPIC D — SOS (Sprints 5-6) — MUST (le serment)
- **D1** É15 états A-D complets. AC : ouverture < 2 s (CI perf) ; 100 % offline (test avion) ; cibles ≥ 60 pt ; VoiceOver complet. (13)
- **D2** Courbe d'envie animée + chrono + instructions. AC : 60 fps ; Reduce Motion → variante statique. (8)
- **D3** Lecture coffre + respiration + appel allié. AC : audio local < 500 ms ; allié absent → bouton masqué. (5)
- **D4** État danger + ressources. AC : 3114/15/112 en tap-to-call réels (testés) ; aucun autre élément interactif. (3)
- **D5** Sortie + capture + restitution (médiane personnelle). AC : « 7ᵉ envie… 8 min en médiane » exact vs données ; preuve créée. (5)
- **D6** Widget + App Intent écran verrouillé. AC : SOS depuis l'écran verrouillé en ≤ 2 gestes. (5)

## EPIC E — Écart→Rebond (Sprints 7-8) — MUST (la thèse)
- **E1** Détection (BR-10/12) + bouton « j'ai eu un écart ». AC : vague correctement groupée sur les 5 scénarios de test (multi-écarts, rétroactif, silence). (8)
- **E2** É16 protocole R 3 étapes + textes 🔒. AC : complétion < 2 min 30 en test utilisateur ; champ libre passé au filtre BR-03. (8)
- **E3** Compteurs + rebond (BR-13/14) É17. AC : « jour 0 » introuvable dans TOUTE l'app (revue + grep des chaînes) ; calculs exacts sur 10 jeux de données. (5)
- **E4** Relance N3 (BR-20) + reprise douce. AC : une seule notification, fenêtre horaire respectée, scénario silence > 7 j → reprise sans rétrospective. (5)
- **E5** Mise à jour du plan post-écart (UNE modification). AC : le si-alors modifié est traçé (version) et réaffiché en B4 du bilan. (3)

## EPIC F — Plans & bilan (Sprints 9-10) — MUST
- **F1** Si-alors : création/édition/8 max + validation dominicale. AC : formulation en 2 champs ; proposition depuis déclencheurs. (5)
- **F2** Bilan déterministe B1-B5 + banques de phrases. AC : 20 semaines de données de test → 20 bilans distincts, cohérents, sans répétition gênante ; état < 3 check-ins conforme. (13)
- **F3** N4 + carte bilan dans É11. AC : génération dimanche 17 h 55 serveur, ouverture instantanée. (3)

## EPIC G — Monétisation & réglages (Sprints 11-12) — MUST
- **G1** RevenueCat + paywall É10 + BR-40/41. AC : essai→payant, restauration, bascule gratuite silencieuse, annulation sans écran de rétention (revue). (8)
- **G2** Gating gratuit (BR-32). AC : SOS/check-in/rebond intégralement accessibles sans payer (test compte gratuit). (5)
- **G3** É20 réglages + export + suppression. AC : export reçu < 48 h avec audio déchiffrable par l'utilisatrice ; suppression → purge vérifiée en staging. (8)
- **G4** Notifications N1/N2/N5 + plafond BR-33. AC : jamais > 2/jour (test de collision), silence nocturne. (5)

## EPIC H — Qualité & lancement (Sprints 13-16) — MUST
- **H1** e2e Detox des 3 flux critiques. (8) · **H2** Audit accessibilité + corrections. (8) · **H3** Pentest + corrections. (8) · **H4** App Store (fiche, review santé, screenshots). (5) · **H5** Bêta TestFlight 300-500 + instrumentation cohortes. (5) · **H6** Runbook incidents + astreinte. (3)

**COULD (si avance, sinon V1.5)** : ré-enregistrement du coffre au jalon J30 · preuve « déclencheur désarmé » · saisie agenda simple pour B4.
**WON'T (V1, ferme)** : tout §0.3.

---

# 20. RISQUES

**Développement** : corpus en retard (mitigation : jalon bloquant M3 = 45 cartes validées, sinon on décale la bêta, pas la qualité) · SOS sous-testé en conditions réelles (mitigation : protocole de test dédié « conditions dégradées » avec utilisateurs fatigués, S6) · sync locale-serveur bugguée (mitigation : property-based tests sur l'idempotence) · dérive de périmètre (mitigation : liste fermée §0.2, toute addition passe par un retrait).
**Réglementaires** : requalification DM par un claim (mitigation : revue juridique de CHAQUE texte marketing + in-app avant bêta ; lexique interdit affiché dans le repo) · CNIL/art. 9 (mitigation : DPIA avant bêta, DPO externe, zéro SDK pub) · App Store santé (mitigation : soumission d'une build minimale dès M5 pour tester la review).
**Produit** : boucle quotidienne trop lourde (mitigation : chrono réel en bêta, cible 30 s/90 s, on coupe au-delà) · triage excluant > 35 % (mitigation : mesuré dès la landing M2 ; si dépassé, décision CEO documentée — pas de dilution silencieuse des seuils) · le rebond incompris (mitigation : test de compréhension du vocabulaire en bêta, itération des textes 🔒 avec la clinicienne) · rétention J30 < 10 % en bêta (mitigation : 6 semaines d'itération sur LA boucle avant tout lancement public — le lancement attend le produit, jamais l'inverse).

# 21. KPI SUIVIS DÈS LE JOUR 1 (dashboard interne, affiché au mur)

⭐ **Retour post-écart < 72 h** (cible ≥ 40 %) · rétention J7/J30 (≥ 35 %/≥ 15 %) · complétion check-in J14 (≥ 40 %) · taux de triage rouge (info stratégique, pas un objectif) · SOS : sessions/utilisateur/semaine + % « c'est passé » · conversion essai→payant (≥ 25 %) · coffre enregistré à l'onboarding (≥ 50 %) · carte du jour lue (≥ 50 % des jours actifs) · crash-free ≥ 99,8 % · incidents sécurité = 0 · NPS (dès S4 de bêta).

# 22. PLAN DE LANCEMENT — 12 MOIS

| Mois | Jalons |
|---|---|
| M1 | Équipe complète · clinicienne signée (veto contractuel) · recherche de marque · repo juridique (DPIA, lexique claims) · design system démarré · **corpus démarré (chantier n°1)** · landing + waitlist + triage en ligne |
| M2 | Sprints 1-2 (socle) · 20 premières cartes validées · 10 articles SEO rédigés · mesure du taux de triage sur la landing |
| M3 | Sprints 3-4 (onboarding + boucle) · **jalon bloquant : 45 cartes validées** · DPIA complétée |
| M4 | Sprints 5-6 (SOS) · test SOS conditions dégradées · corpus 90 cartes complet |
| M5 | Sprints 7-8 (écart→rebond) · build minimale soumise à l'App Store (test de review) · alpha interne (20 pers.) |
| M6 | Sprints 9-10 (plans + bilan) · **bêta TestFlight 300-500** (waitlist + communautés) · dashboard KPI live |
| M7 | Sprints 11-12 (paywall + réglages) · itération bêta sur la boucle (chrono réel, textes) |
| M8 | Sprints 13-14 (qualité) · pentest · audit accessibilité · décision GO lancement : ⭐ ≥ 30 % en bêta et J30 ≥ 12 %, sinon on itère (le calendrier cède, pas le critère) |
| M9 | Sprints 15-16 · **lancement France App Store** · publication des 20 articles SEO · presse (angle : l'app qui refuse le « jour 0 » et publie ses chiffres) |
| M10 | Stabilisation · démarrage V1.5 (météo + LLM bilan derrière évals + Android) · préparation Dry January (contenus, ASO, RP) |
| M11 | V1.5 bêta · campagne « Janvier lucide » prête · premiers chiffres réels publiés (rétention, retour post-écart) |
| M12 | **Dry January** : le pic annuel · mesure des cohortes · bilan année 1 · décision vertical 2 (tabac) sur données |

---
*Exécutable immédiatement. Dépendances externes à lever en M1 : signature clinicienne, revue juridique claims/DPIA, recherche de marque. Tout écart à ce document passe par une décision écrite du CEO — et tout ajout passe par un retrait équivalent.*
