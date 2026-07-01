# ✅ Cap365 — Checklist de test complète du parcours de vente

> **Produit :** Cap365 — 365 Défis de Vie · **Marque maison :** Cairn
> **Offres :** Le Sentier **19 €** · L'Ascension **39 €** ⭐ · Le Sommet **89 €**
> **Order bumps :** Sentier → Ascension **+20 €** · Ascension → Sommet **+50 €**
> **Garantie :** 30 jours satisfait ou remboursé · **Produit livré :** espace Notion (dupliquable) + PDF interactif
> **Séquences e-mail (6) :** 1. Bienvenue/Livraison · 2. Activation/Onboarding · 3. Abandon de panier · 4. Relance/Vente · 5. Témoignages · 6. Upsell
> **Variables :** `[Prénom]` · `[LienAcces]` · `[LienOffre]` · `[LienPanier]` · `[LienSupport]` · `[EMAIL]` · `[NOM DE L'OFFRE]`
>
> **Mode d'emploi :** cocher chaque `□ Case`. Un test échoué = **bloquant** tant qu'il n'est pas corrigé et re-testé. À exécuter d'abord en **mode test** (Stripe/prestataire test), puis re-valider les paiements en **mode live** avec 1 transaction réelle remboursée.

---

## 🚦 Procédure de test de bout en bout (1 achat test complet)

> Objectif : dérouler UNE fois le parcours entier comme un vrai client, de la pub au produit. À faire en navigation privée, sur mobile de préférence. Chronométrer.

- □ **E2E-1** — Ouvrir la page d'accueil / landing depuis un lien externe (pub, bio). Vérifier chargement < 3 s, aucun placeholder `[…]`.
- □ **E2E-2** — Cliquer le CTA principal → arriver sur la page produit → cliquer « Choisir L'Ascension ». Vérifier que l'offre 39 € est bien pré-sélectionnée au checkout.
- □ **E2E-3** — Sur le checkout : renseigner un e-mail réel à soi, cocher l'**order bump +50 €** (Ascension → Sommet). Vérifier que le total passe à **89 €** en direct.
- □ **E2E-4** — Payer avec une carte de test (mode test) ou réelle (mode live). Vérifier la redirection immédiate vers la **page merci** personnalisée `[Prénom]`.
- □ **E2E-5** — Sur la page merci : cliquer « Ouvrir mon espace Cap365 » → l'espace Notion s'ouvre, dupliquer le template.
- □ **E2E-6** — Vérifier l'arrivée de l'e-mail **1.1 (livraison)** en < 2 min : lien d'accès + lien PDF + facture.
- □ **E2E-7** — Télécharger le PDF, l'ouvrir, vérifier qu'il n'est pas corrompu et que les liens internes marchent.
- □ **E2E-8** — Vérifier que le pixel « Achat » a bien remonté l'événement (valeur = 89 €) dans l'outil analytics.
- □ **E2E-9** — Déclencher un remboursement (mode test/live) : suivre la procédure 30 j, vérifier le crédit et l'e-mail de confirmation.
- □ **E2E-10** — Noter le temps total et tout point de friction rencontré. Aucun point bloquant ne doit subsister.

---

## 1. 💳 Paiement (3 offres + bumps · test puis live · devise · facture)

### □ TEST 1.1 — Achat Le Sentier 19 € (sans bump)
- **Procédure :** Mode test. Sélectionner Le Sentier → checkout → payer 19 € carte de test.
- **Résultat attendu :** Débit **19,00 €**, redirection page merci, accès Sentier livré, facture envoyée.
- **Erreur à rechercher :** Montant ≠ 19 €, devise autre que **EUR (€)**, pas de redirection, accès d'une autre offre livré par erreur.

### □ TEST 1.2 — Achat L'Ascension 39 € (sans bump)
- **Procédure :** Mode test. Sélectionner L'Ascension → checkout → payer 39 €.
- **Résultat attendu :** Débit **39,00 €**, template Notion RPG complet + 3 bonus + Filet de Reprise livrés.
- **Erreur à rechercher :** Contenu du Sentier livré au lieu de l'Ascension, bonus manquants, débit ≠ 39 €.

### □ TEST 1.3 — Achat Le Sommet 89 € (sans bump)
- **Procédure :** Mode test. Sélectionner Le Sommet → checkout → payer 89 €.
- **Résultat attendu :** Débit **89,00 €**, arsenal complet (4 parcours, bilans, communauté, accès à vie) livré.
- **Erreur à rechercher :** Débit ≠ 89 €, extras Sommet (communauté / bilans) non débloqués, bloc communauté absent de la page merci.

### □ TEST 1.4 — Order bump A : Sentier + bump → total 39 €
- **Procédure :** Sélectionner Le Sentier (19 €). Sur le checkout, **cocher** le bump « +20 € » (passer à L'Ascension).
- **Résultat attendu :** Total recalculé **en direct à 39,00 €** ; le client reçoit le contenu **L'Ascension**.
- **Erreur à rechercher :** Total reste à 19 € ou saute à 59 € ; bump **pré-coché par défaut** (interdit) ; contenu Ascension non livré malgré le bump payé.

### □ TEST 1.5 — Order bump B : Ascension + bump → total 89 €
- **Procédure :** Sélectionner L'Ascension (39 €). Cocher le bump « +50 € » (passer au Sommet).
- **Résultat attendu :** Total **89,00 €** en direct ; contenu **Le Sommet** livré (communauté incluse).
- **Erreur à rechercher :** Bump ajoute +20 € au lieu de +50 € ; total faux ; deux bumps proposés simultanément (une seule case active à la fois).

### □ TEST 1.6 — Décochage du bump (recalcul en direct)
- **Procédure :** Cocher un bump, vérifier le total, puis **décocher**.
- **Résultat attendu :** Le total revient au prix de base sans rechargement de page ; aucune trace du bump dans la commande.
- **Erreur à rechercher :** Total ne redescend pas, bump « collant » toujours facturé après décochage.

### □ TEST 1.7 — Bascule mode test → mode live
- **Procédure :** Basculer le prestataire en **live**. Faire 1 vraie transaction (19 €) avec une vraie carte.
- **Résultat attendu :** Paiement réel encaissé, accès livré, transaction visible dans le dashboard live. Puis rembourser (voir domaine 8).
- **Erreur à rechercher :** Clés de test restées actives en prod (paiement fictif) ; page en HTTP au lieu de HTTPS ; échec 3-D Secure.

### □ TEST 1.8 — Facture / reçu
- **Procédure :** Après un achat, ouvrir la facture/reçu reçu par e-mail.
- **Résultat attendu :** Facture correcte : nom marque **Cairn/Cap365**, offre exacte, montant TTC, devise €, date, coordonnées légales.
- **Erreur à rechercher :** Montant erroné, devise absente, mentions légales manquantes, PDF facture corrompu, `[…]` non remplacé.

### □ TEST 1.9 — Paiement refusé / carte invalide
- **Procédure :** Payer avec une carte de test « refusée ».
- **Résultat attendu :** Message d'erreur clair, aucun accès livré, aucun e-mail de livraison envoyé, panier conservé pour relance.
- **Erreur à rechercher :** Accès livré malgré échec ; double débit ; message d'erreur en anglais brut/technique.

---

## 2. ✉️ E-mails (livraison immédiate · activation · abandon panier · variables)

### □ TEST 2.1 — Livraison immédiate (e-mail 1.1)
- **Procédure :** Déclencher un achat test avec un e-mail réel.
- **Résultat attendu :** E-mail **1.1 « Ton accès Cap365 est prêt »** reçu en **< 2 min**, contenant `[LienAcces]` Notion + lien PDF + facture.
- **Erreur à rechercher :** E-mail en spam/promotions, délai > 5 min, lien mort, arrive de `no-reply@` au lieu d'un expéditeur humain « Sébastien (Cairn) ».

### □ TEST 2.2 — Séquence d'activation / onboarding (1.2, 1.3, 2.1→2.3)
- **Procédure :** Après l'achat, laisser tourner. Vérifier 1.2 (+3 h), 1.3 (J+1), puis onboarding 2.1 (J+2), 2.2 (J+4), 2.3 (J+7).
- **Résultat attendu :** Chaque e-mail part au bon timing, CTA « Créer mon personnage » / « radar » / « série » fonctionnels.
- **Erreur à rechercher :** E-mails envoyés dans le désordre, timings faux, doublons, e-mail d'activation envoyé à un non-acheteur.

### □ TEST 2.3 — Abandon de panier (séquence 3 : 3.1/3.2/3.3)
- **Procédure :** Démarrer un checkout, saisir l'e-mail, **quitter sans payer**.
- **Résultat attendu :** E-mail **3.1** à **+1 h**, **3.2** à **+24 h**, **3.3** à **+48 h**, avec `[LienPanier]` qui reprend le panier.
- **Erreur à rechercher :** Séquence non déclenchée, déclenchée trop tôt, `[LienPanier]` mène à un panier vide, envoi à un client qui a finalement acheté.

### □ TEST 2.4 — Suppression croisée (acheteur sort des séquences vente/panier/nurture)
- **Procédure :** Avec un contact ayant des séquences en cours, déclencher un achat.
- **Résultat attendu :** Le contact sort **automatiquement** des séquences Relance/Vente, Abandon panier et Nurture.
- **Erreur à rechercher :** Un client reçoit encore « reprends ton panier » ou « choisis ton offre » après avoir acheté.

### □ TEST 2.5 — Variable `[Prénom]`
- **Procédure :** Passer commande avec un prénom test (ex. « Léa »).
- **Résultat attendu :** Tous les e-mails affichent « Salut Léa », objets personnalisés inclus.
- **Erreur à rechercher :** Affichage littéral `[Prénom]` ou `{Prénom}`, « Salut , » vide, mauvais prénom.

### □ TEST 2.6 — Variable `[LienAcces]` (et `[LienOffre]`, `[LienPanier]`, `[LienSupport]`)
- **Procédure :** Cliquer chaque lien variable dans chaque e-mail reçu.
- **Résultat attendu :** `[LienAcces]` → espace Notion/PDF ; `[LienOffre]` → page produit ; `[LienPanier]` → panier repris ; `[LienSupport]` → contact.
- **Erreur à rechercher :** Variable non remplacée (URL littérale `[LienAcces]`), lien 404, lien pointant vers la mauvaise offre.

### □ TEST 2.7 — Délivrabilité & désinscription
- **Procédure :** Vérifier SPF/DKIM/DMARC ; ouvrir un e-mail et cliquer « se désinscrire ».
- **Résultat attendu :** E-mails en boîte principale ; lien de désinscription présent et fonctionnel sur **chaque** e-mail.
- **Erreur à rechercher :** Classé spam, SPF/DKIM absents, lien de désinscription manquant (illégal) ou cassé.

### □ TEST 2.8 — Témoignages fictifs
- **Procédure :** Relire séquences 4, 5, 6.
- **Résultat attendu :** Tout témoignage fictif est **signalé** *(exemple fictif à remplacer)* ou remplacé par un vrai.
- **Erreur à rechercher :** Témoignage fictif publié comme réel sans mention (risque légal / éthique).

---

## 3. 📄 Téléchargement (PDF accessible · non corrompu)

### □ TEST 3.1 — Accès au PDF depuis l'e-mail et la page merci
- **Procédure :** Cliquer « Télécharger mon PDF Cap365 » depuis l'e-mail 1.1 et depuis la page merci.
- **Résultat attendu :** Le PDF se télécharge en < 5 s sur mobile et desktop.
- **Erreur à rechercher :** Lien 404, fichier introuvable, permission refusée (drive privé), lien expiré.

### □ TEST 3.2 — Intégrité du fichier (non corrompu)
- **Procédure :** Ouvrir le PDF dans Acrobat, Aperçu (Mac) et un lecteur mobile.
- **Résultat attendu :** Toutes les pages s'affichent, polices intactes, images nettes, pas de page blanche.
- **Erreur à rechercher :** « Fichier endommagé », polices manquantes, images pixelisées, pages coupées, poids anormal (0 Ko).

### □ TEST 3.3 — Liens interactifs du PDF
- **Procédure :** Cliquer les liens internes (sommaire → défis) et externes (Notion) dans le PDF.
- **Résultat attendu :** La navigation interne saute à la bonne section ; les liens externes ouvrent la bonne page.
- **Erreur à rechercher :** Liens morts, ancres cassées, lien Notion pointant vers un espace privé non partagé.

### □ TEST 3.4 — Contenu conforme à l'offre
- **Procédure :** Vérifier que le PDF livré correspond à l'offre achetée (365 défis, guide « 7 premiers jours »).
- **Résultat attendu :** Contenu complet, aucun défi manquant, aucune mention « 14 jours » ou ancien nom.
- **Erreur à rechercher :** Défis 128/131/132 sans Temps/Coût, `[…]` oublié, ancien nom d'offre, promesse interdite dans le texte.

---

## 4. 🔑 Accès produit (lien Notion dupliquable · navigation privée)

### □ TEST 4.1 — Duplication du template Notion
- **Procédure :** Ouvrir `[LienAcces]` Notion, cliquer « Dupliquer » (haut à droite).
- **Résultat attendu :** L'espace se duplique dans le Notion du client, éditable, avec radar 8 stats, XP, niveaux, badges.
- **Erreur à rechercher :** Bouton « Dupliquer » absent (partage mal configuré), duplication en lecture seule, structure cassée.

### □ TEST 4.2 — Accès en navigation privée (non connecté)
- **Procédure :** Ouvrir `[LienAcces]` dans une **fenêtre privée**, sans compte Notion connecté.
- **Résultat attendu :** La page s'affiche publiquement en lecture, avec possibilité de dupliquer après connexion.
- **Erreur à rechercher :** « Vous n'avez pas accès à cette page » (partage restreint à l'auteur), demande de mot de passe, page 404.

### □ TEST 4.3 — Accès conforme à l'offre
- **Procédure :** Pour chaque offre, vérifier le contenu débloqué dans Notion.
- **Résultat attendu :** Sentier = base ; Ascension = RPG complet + Filet de Reprise ; Sommet = + parcours/bilans/communauté.
- **Erreur à rechercher :** Un acheteur Sentier accède au contenu Sommet (fuite) ou l'inverse (contenu manquant).

### □ TEST 4.4 — Moteur RPG (formules)
- **Procédure :** Cocher/décocher un défi « Validé » dans le template dupliqué.
- **Résultat attendu :** XP, série et % se recalculent instantanément (XP = Difficulté × 10).
- **Erreur à rechercher :** Formule affiche `0`, une erreur, un mauvais rang, ou ne se recalcule pas.

### □ TEST 4.5 — Données de démo purgées avant livraison
- **Procédure :** Ouvrir un template fraîchement livré.
- **Résultat attendu :** Profil à **zéro** (XP 0, série 0, Niveau 1 · Éveil), aucune donnée de test.
- **Erreur à rechercher :** Données de test (14 défis, 220 XP) restées dans le template livré.

---

## 5. 📱 Mobile (rendu pages + Notion sur smartphone)

### □ TEST 5.1 — Rendu des pages du tunnel sur smartphone
- **Procédure :** Ouvrir Accueil / Landing / Produit / Checkout / Merci sur iOS et Android (Safari + Chrome).
- **Résultat attendu :** Une colonne, texte lisible sans zoom, CTA orange `#F5A623` visibles au pouce.
- **Erreur à rechercher :** Texte tronqué, CTA hors écran, chevauchement, bandeau mobile « 30 jours garantis » manquant.

### □ TEST 5.2 — Notion sur app mobile
- **Procédure :** Ouvrir le template dans l'app Notion mobile après duplication.
- **Résultat attendu :** Dashboard, Défi du jour et radar lisibles au pouce, navigation fluide.
- **Erreur à rechercher :** Tableaux illisibles, radar coupé, scroll horizontal forcé, boutons trop petits.

### □ TEST 5.3 — Formulaire de paiement mobile
- **Procédure :** Remplir le checkout sur smartphone.
- **Résultat attendu :** Champs accessibles, clavier adapté (numérique pour la carte), bump cochable au doigt.
- **Erreur à rechercher :** Champ carte masqué par le clavier, case bump trop petite, zoom involontaire au focus.

### □ TEST 5.4 — E-mails sur mobile
- **Procédure :** Ouvrir 1.1 et un e-mail d'abandon sur Gmail et Apple Mail mobile.
- **Résultat attendu :** Une colonne, gros bouton tactile, lien d'accès cliquable.
- **Erreur à rechercher :** Bouton trop petit, image cassée, texte débordant, rendu HTML cassé.

### □ TEST 5.5 — Vitesse de chargement mobile (4G)
- **Procédure :** Charger les pages en 4G ou throttling « Fast 3G ».
- **Résultat attendu :** Visuels chargés en < 3 s (PNG compressés).
- **Erreur à rechercher :** Image non compressée, page > 3 s, layout shift pendant le chargement.

---

## 6. 🖥️ Desktop (rendu pages)

### □ TEST 6.1 — Rendu des pages sur navigateurs desktop
- **Procédure :** Ouvrir toutes les pages sur Chrome, Firefox, Safari, Edge (dernières versions).
- **Résultat attendu :** Mise en page identique et propre, couleurs charte (orange `#F5A623`, bleu nuit `#1B2A4A`, vert `#27AE82`) respectées.
- **Erreur à rechercher :** Décalage entre navigateurs, police de secours affichée, couleurs fausses, images floues en grand.

### □ TEST 6.2 — Récapitulatif de commande desktop
- **Procédure :** Sur le checkout desktop, vérifier le bloc « Ta commande ».
- **Résultat attendu :** Offre, prix, sous-total, total alignés et corrects ; micro-note « paiement unique » présente.
- **Erreur à rechercher :** Total mal aligné, prix incohérent, `[PRIX]` non remplacé.

### □ TEST 6.3 — Notion sur desktop
- **Procédure :** Ouvrir le template dupliqué dans Notion desktop/web.
- **Résultat attendu :** Dashboard, radar, vues de défis affichés correctement, colonnes lisibles.
- **Erreur à rechercher :** Vue cassée, base de données non chargée, radar non rendu.

---

## 7. 📐 Responsive (rotation · tailles d'écran · tableaux)

### □ TEST 7.1 — Rotation portrait ↔ paysage
- **Procédure :** Sur smartphone et tablette, tourner l'écran sur chaque page.
- **Résultat attendu :** La mise en page se réadapte sans casser, aucun contenu perdu.
- **Erreur à rechercher :** Éléments qui débordent, CTA disparu en paysage, texte coupé.

### □ TEST 7.2 — Points de rupture (breakpoints)
- **Procédure :** Redimensionner la fenêtre desktop de 320 px à 1920 px.
- **Résultat attendu :** Transitions propres mobile → tablette → desktop, pas de zone vide ni de scroll horizontal.
- **Erreur à rechercher :** Layout cassé à un breakpoint intermédiaire (~768 px), scroll horizontal, chevauchements.

### □ TEST 7.3 — Tableaux comparatifs des offres
- **Procédure :** Afficher le tableau comparatif (Sentier/Ascension/Sommet) sur mobile.
- **Résultat attendu :** Tableau lisible (scroll horizontal contrôlé ou reflow en cartes), les 3 prix restent visibles.
- **Erreur à rechercher :** Colonnes écrasées, cellules illisibles, ✅/— désalignés, prix coupés.

### □ TEST 7.4 — Tableaux du template Notion sur petit écran
- **Procédure :** Ouvrir les bases de données Notion (défis, badges) sur mobile.
- **Résultat attendu :** Vues adaptées (carte/liste) lisibles, colonnes essentielles visibles.
- **Erreur à rechercher :** Table trop large forçant un scroll infini, colonnes clés masquées.

---

## 8. 🔁 Remboursement (procédure 30 j sans friction)

### □ TEST 8.1 — Demande de remboursement par e-mail
- **Procédure :** Depuis un achat test, écrire à `[LienSupport]` pour demander un remboursement dans les 30 j.
- **Résultat attendu :** Réponse rapide, remboursement accordé **sans formulaire piège ni justification exigée**.
- **Erreur à rechercher :** Demande de motif obligatoire, parcours complexe, délai excessif, ton culpabilisant.

### □ TEST 8.2 — Traitement effectif du remboursement
- **Procédure :** Déclencher le remboursement côté prestataire (test puis 1 fois en live).
- **Résultat attendu :** Crédit visible sur le moyen de paiement, e-mail de confirmation, accès révoqué proprement.
- **Erreur à rechercher :** Remboursement partiel non voulu, crédit non émis, accès Notion resté ouvert après remboursement.

### □ TEST 8.3 — Cohérence de la promesse « 30 jours »
- **Procédure :** Chercher toute mention de garantie sur produit, checkout, page merci, FAQ, e-mails.
- **Résultat attendu :** Partout **« 30 jours satisfait ou remboursé »**, jamais « 14 jours ».
- **Erreur à rechercher :** Mention « 14 jours » résiduelle, durées incohérentes entre les pages.

### □ TEST 8.4 — Fenêtre de garantie (bornes)
- **Procédure :** Vérifier la logique J+30 (demande à J+29 acceptée, à J+31 hors délai).
- **Résultat attendu :** Règle claire et appliquée de façon cohérente.
- **Erreur à rechercher :** Aucune date de référence, calcul flou, refus arbitraire dans la fenêtre.

---

## 9. 🔘 CTA (tous les boutons pointent vers le bon produit)

### □ TEST 9.1 — CTA de la landing / page d'accueil
- **Procédure :** Cliquer chaque CTA (« Choisir ma formule », « Découvrir Cap365 »).
- **Résultat attendu :** Mène à la page produit / checkout de la **bonne offre**.
- **Erreur à rechercher :** Lien mort, redirection vers la mauvaise offre, ancre cassée.

### □ TEST 9.2 — CTA de la page produit (3 offres)
- **Procédure :** Cliquer le bouton de chaque offre (Sentier, Ascension, Sommet).
- **Résultat attendu :** Chaque bouton ouvre le checkout **pré-configuré au bon prix** (19 / 39 / 89 €).
- **Erreur à rechercher :** Bouton Sentier menant au checkout Ascension, prix incohérent, bouton inactif.

### □ TEST 9.3 — CTA de paiement (variantes A/B/C)
- **Procédure :** Vérifier le bouton de paiement (« Je pose ma première pierre — Payer [PRIX] € »).
- **Résultat attendu :** Le montant affiché = total dynamique (offre + bump), déclenche le paiement.
- **Erreur à rechercher :** `[PRIX]` non remplacé, montant figé ne tenant pas compte du bump.

### □ TEST 9.4 — CTA de la page merci
- **Procédure :** Cliquer « Ouvrir mon espace Cap365 », « Voir mon Défi du Jour 1 », « Poser ma première pierre ».
- **Résultat attendu :** Tous pointent vers `[LienAcces]` (Notion/PDF). Upsell → `[LienUpsell]` correct. Communauté (Sommet uniquement) → `[LienCommunaute]`.
- **Erreur à rechercher :** CTA menant à la page produit au lieu de l'accès, upsell affiché à un acheteur Sommet, lien communauté visible pour Sentier/Ascension.

### □ TEST 9.5 — CTA des e-mails
- **Procédure :** Cliquer chaque CTA principal des 6 séquences.
- **Résultat attendu :** Livraison/activation → `[LienAcces]` ; vente/nurture → `[LienOffre]` ; panier → `[LienPanier]` ; upsell → bonne offre supérieure.
- **Erreur à rechercher :** CTA de livraison pointant vers la page de vente, upsell Sentier→Sommet (devrait être Sentier→Ascension).

---

## 10. 🎁 Bonus (les 6 bonus livrés selon l'offre)

> Bonus de référence : **1.** Journal de progression annuel · **2.** Tracker d'habitudes · **3.** Calendrier de validation · **4.** 100 mini-défis d'urgence · **5.** 30 défis extrêmes · **6.** Guide « Discipline sans motivation ». Palier : Sentier = 0, Ascension = lot de bonus, Sommet = lot complet (7 bonus).

### □ TEST 10.1 — Bonus livrés avec L'Ascension
- **Procédure :** Acheter L'Ascension, vérifier les bonus débloqués dans l'espace / e-mail.
- **Résultat attendu :** Les bonus prévus pour l'Ascension sont présents et téléchargeables (pack week-end, guide habitudes, etc.).
- **Erreur à rechercher :** Bonus annoncés mais absents, lien de bonus mort, décompte incohérent (« 3 bonus » mais 2 livrés).

### □ TEST 10.2 — Bonus livrés avec Le Sommet (lot complet)
- **Procédure :** Acheter Le Sommet, vérifier le lot complet des bonus.
- **Résultat attendu :** Les **6 bonus** sont accessibles + extras Sommet (100 défis hardcore, bibliothèque audio).
- **Erreur à rechercher :** Un ou plusieurs des 6 fichiers manquants, fichier corrompu, contenu Ascension seulement.

### □ TEST 10.3 — Bonus NON livrés au Sentier
- **Procédure :** Acheter Le Sentier, vérifier ce qui est débloqué.
- **Résultat attendu :** Contenu de base sans les bonus réservés aux paliers supérieurs (cohérent avec la page produit).
- **Erreur à rechercher :** Bonus premium accessibles à tort (fuite), ou au contraire base incomplète.

### □ TEST 10.4 — Intégrité de chaque fichier bonus
- **Procédure :** Ouvrir chacun des 6 bonus livrés (journal, tracker, calendrier, 100 mini-défis, 30 extrêmes, guide discipline).
- **Résultat attendu :** Chaque fichier s'ouvre, complet, sans `[…]` ni page blanche.
- **Erreur à rechercher :** Fichier corrompu, placeholder oublié, mauvaise version, promesse interdite dans le texte.

### □ TEST 10.5 — Cohérence bonus ↔ promesse de la page de vente
- **Procédure :** Comparer les bonus annoncés (checkout / e-mail 3.x) avec ceux réellement livrés.
- **Résultat attendu :** Correspondance exacte entre promis et livré, y compris les bonus « de lancement » limités jusqu'à `[DateFin]`.
- **Erreur à rechercher :** Bonus promis non livré (risque juridique), bonus de lancement encore offert après `[DateFin]`.

---

## 11. 📊 Suivi (analytics + pixel « Achat » sur page merci · KPI)

### □ TEST 11.1 — Pixel « Achat » sur la page merci
- **Procédure :** Faire un achat test, ouvrir l'inspecteur / l'outil de debug du pixel sur la page merci.
- **Résultat attendu :** Événement **« Achat » / « Purchase »** déclenché **une seule fois**, avec **valeur = montant payé** et devise **EUR**.
- **Erreur à rechercher :** Pixel absent, double déclenchement (achat compté 2×), valeur manquante ou fausse (n'inclut pas le bump).

### □ TEST 11.2 — Tunnel analytics complet
- **Procédure :** Dérouler le parcours en vérifiant les événements : vue landing → vue produit → début checkout → achat.
- **Résultat attendu :** Chaque étape remonte dans l'outil analytics, entonnoir reconstituable.
- **Erreur à rechercher :** Étape non trackée, événement « début checkout » manquant (fausse le taux d'abandon panier).

### □ TEST 11.3 — Attribution de l'offre et du bump
- **Procédure :** Faire un achat Ascension + bump (89 €) et vérifier les données remontées.
- **Résultat attendu :** L'offre finale (Sommet via bump) et la valeur 89 € sont correctement attribuées.
- **Erreur à rechercher :** Valeur remontée = 39 € (bump ignoré), offre attribuée = Ascension au lieu de Sommet.

### □ TEST 11.4 — Tableau de bord KPI renseigné
- **Procédure :** Importer les données test dans le tableau de bord KPI (Google Sheets) et vérifier les colonnes calculées.
- **Résultat attendu :** Ventes, CA brut, conversion, panier moyen, CAC se calculent ; ligne TOTAL cohérente (~20 ventes, ~660 € pour le jeu de test).
- **Erreur à rechercher :** Colonnes vides, formules cassées, KPI non renseignés, panier moyen aberrant.

### □ TEST 11.5 — Pas de tracking en mode test qui pollue le live
- **Procédure :** Vérifier que les achats de test n'alimentent pas le pixel/analytics de production.
- **Résultat attendu :** Environnement test isolé (compte/pixel de test), la prod ne compte que de vrais achats.
- **Erreur à rechercher :** Achats de test comptés dans les stats live, faussant conversion et ROAS.

---

## 🏁 Critère de sortie — « Prêt à lancer si… »

Le parcours est **prêt à lancer** uniquement si **TOUTES** les conditions ci-dessous sont cochées :

- □ **Paiement** — Les 3 offres (19/39/89 €) et les 2 bumps (+20/+50 €) débitent le bon montant en € ; testés en **test ET live** ; facture correcte.
- □ **E-mails** — Livraison 1.1 < 2 min ; séquences activation/abandon déclenchées au bon timing ; variables `[Prénom]`/`[LienAcces]` remplacées partout ; suppression croisée active ; désinscription présente.
- □ **Téléchargement** — PDF accessible, non corrompu, conforme à l'offre, liens internes OK.
- □ **Accès produit** — Template Notion **dupliquable en navigation privée**, moteur RPG fonctionnel, données de démo purgées, accès conforme à l'offre.
- □ **Mobile & Desktop** — Toutes les pages et le Notion lisibles sur smartphone et sur les principaux navigateurs desktop ; chargement < 3 s en 4G.
- □ **Responsive** — Rotation, breakpoints et tableaux (comparatif + Notion) tiennent sans casse.
- □ **Remboursement** — Procédure 30 j **sans friction** vérifiée de bout en bout, crédit émis, accès révoqué.
- □ **CTA** — 100 % des boutons (pages + e-mails) pointent vers le bon produit / bon lien ; aucun lien mort.
- □ **Bonus** — Bonus livrés **selon l'offre** (0 au Sentier, lot à l'Ascension, lot complet des 6 au Sommet), fichiers intègres, cohérents avec la promesse.
- □ **Suivi** — Pixel « Achat » déclenché **une fois** avec la bonne valeur sur la page merci ; entonnoir analytics complet ; KPI renseignés ; test isolé du live.
- □ **Anti-bug global** — Aucun placeholder `[…]`, aucune mention « 14 jours » ou ancien nom d'offre, aucune promesse interdite (richesse / bonheur permanent / vie parfaite), aucune formule Notion en erreur.
- □ **Test de bout en bout (E2E)** — Le parcours complet (E2E-1 → E2E-10) a été déroulé au moins une fois **sans point de friction bloquant**.

> ✅ **Si toutes les cases ci-dessus sont cochées → GO LIVE.** Sinon, corriger et re-tester le domaine concerné avant le lancement.

---

*Checklist QA — Cap365 · Cairn · « Un défi par jour. Une version de toi par an. »*
