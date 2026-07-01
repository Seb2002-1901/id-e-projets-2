# Production — Checklist de lancement complète

> Coche tout avant d'ouvrir les ventes. Regroupée par bloc. Rien de nouveau ici : c'est la mise en production de ce qui existe.

---

## 1. Produit livrable
- ⬜ **Template Notion** monté, testé, **dupliquable** (lien de duplication public) — `production/03`.
- ⬜ Les **365 défis importés** dans Notion (CSV) + vérifiés (numérotation 1→365, XP = diff×10).
- ⬜ **PDF premium** des 365 défis exporté (version Le Sentier) + cases à cocher.
- ⬜ **6 bonus** prêts (journal, tracker, calendrier, 100 mini-défis, 30 extrêmes, guide discipline).
- ⬜ **Guide « 7 premiers jours »** + page onboarding « Crée ton personnage ».
- ⬜ Extras Le Sommet : kit Wrapped/partage, certificats, parcours thématiques, accès communauté.
- ⬜ QA persona test : jour 128 → ~6 240 XP → **Rang 4 Constant** s'affiche correctement.

## 2. Visuels
- ⬜ Les **4 visuels P0/P1** produits (Défi du jour, Dashboard, Radar, Wrapped) — `production/01`.
- ⬜ Cohérence vérifiée (mêmes données Lucas, mêmes hex, orange réservé à l'action).
- ⬜ Exports PNG @2x + versions mockup téléphone + variantes story.
- ⬜ (Après go-live) les 4 visuels P2 restants.

## 3. Tunnel TinyPages
- ⬜ Pages créées dans l'ordre : Produit, Landing, Paiement, Merci, FAQ, Accueil — `production/04`.
- ⬜ Charte appliquée (couleurs, polices, logo Cairn, favicon).
- ⬜ **3 offres** configurées (19/39/89 €) + **2 order bumps** (+20 €, +50 €).
- ⬜ Redirections : Paiement → Merci ; Merci déclenche l'email de livraison.
- ⬜ Navigation + liens FAQ + lien légal dans le footer.
- ⬜ Testé **sur mobile** (lisibilité, CTA, visuels).
- ⬜ **Achat test réel** effectué sur les 3 offres (mode test).

## 4. E-mails
- ⬜ Séquences importées (`lancement-commercial/07-emails.md`) : Bienvenue, Activation, Abandon, Relance, Témoignages, Upsell.
- ⬜ Déclencheurs branchés (achat → bienvenue+activation ; checkout → abandon ; lead → relance).
- ⬜ Objets A/B configurés · expéditeur + signature Cairn · test d'envoi OK (desktop + mobile).

## 5. Paiement & admin
- ⬜ Stripe (ou équivalent) connecté, en **mode live**, virements configurés.
- ⬜ **Politique de remboursement 30 jours** écrite et visible (page + FAQ + checkout).
- ⬜ **Mentions légales / CGV / confidentialité** en place (obligation vendeur).
- ⬜ Emails de confirmation d'achat + facture automatiques.
- ⬜ Statut auto-entrepreneur / facturation en règle (selon ta situation — à vérifier).

## 6. Technique & mesure
- ⬜ **Analytics** activé (TinyPages + éventuellement GA).
- ⬜ **Pixels** TikTok + Meta posés sur toutes les pages ; événement **« Achat »** sur la page merci.
- ⬜ Vitesse de chargement mobile correcte (visuels compressés).
- ⬜ Liens vérifiés (aucun lien mort ; Notion/PDF accessibles en navigation privée).
- ⬜ Nom de domaine + email pro branchés (si applicable).

## 7. Cohérence finale (revue anti-contradiction)
- ⬜ **Marque** : Cairn (maison) / Cap365 (produit) partout.
- ⬜ **Prix** : 19 / 39 / 89 € partout ; bumps +20 / +50 € corrects.
- ⬜ **Storytelling** RPG + honnêteté radicale homogène.
- ⬜ **Promesses** : aucune promesse de richesse / bonheur permanent / vie parfaite.
- ⬜ **Témoignages** : remplacés par de vrais OU clairement marqués « exemple » (idéalement retirés au lancement tant qu'il n'y en a pas de vrais).

## 8. Contenu & audience (pré-lancement)
- ⬜ Comptes **TikTok + Instagram** créés, bios optimisées, **lien en bio** vers la landing — `production/07`.
- ⬜ **5-7 vidéos tournées d'avance** (batch) prêtes à poster.
- ⬜ Post « coulisses / je lance » programmé.
- ⬜ Cercle proche prévenu (premiers retours / premières ventes chaleureuses).

---

## 9. Jour du lancement (Go-live)
- ⬜ Ouvre les ventes (produits en mode live).
- ⬜ Publie le 1er contenu de lancement (TikTok + Reel + Story).
- ⬜ Poste le lien dans ta bio + une story « c'est en ligne ».
- ⬜ Surveille : 1 achat test réel post-go-live pour confirmer que tout fonctionne en conditions réelles.

## 10. Suivi post-lancement
- ⬜ **J+1** : vérifier ventes, emails partis, aucun bug signalé ; répondre à tous les commentaires.
- ⬜ **J+3** : lire les premiers retours produit ; noter les objections récurrentes.
- ⬜ **J+7** : analyser le tunnel (trafic → clics → ventes) ; ajuster le titre/hook le plus faible.
- ⬜ **J+14** : décision du plan de test marché (`production/06`) : continuer / pivoter le message / ajuster l'offre.
- ⬜ Recueillir les **premiers vrais témoignages** (remplacer les exemples fictifs).

> **Règle d'or du lancement rapide :** ne cherche pas la perfection. Le tunnel + les 4 visuels P0 + le Notion + 7 vidéos suffisent pour obtenir tes **premiers vrais utilisateurs**. Le reste s'améliore avec leurs retours.
