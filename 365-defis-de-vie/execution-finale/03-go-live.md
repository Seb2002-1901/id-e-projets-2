# Go Live — le jour du lancement (ordre exact)

> Jour 7. À suivre dans l'ordre, sans sauter d'étape. Durée ~2-3 h. Prérequis : QA finale au vert (`02-controle-qualite-final.md`).

---

## A. ORDRE EXACT DES CLICS (mise en vente)
1. **Notion** → vérifier que le template est en **partage public / dupliquable** (lien copié).
2. **Stripe / paiement** → passer les **3 produits en mode LIVE** (désactiver le mode test).
3. **TinyPages** → passer les pages en **Publié** (Accueil, Landing, Produit, Paiement, Merci, FAQ).
4. **TinyPages** → vérifier que chaque **bouton d'achat** pointe vers le bon produit LIVE + bump.
5. **Emailing** → activer les **automations** (Bienvenue, Activation, Abandon, Relance).
6. **Analytics/pixels** → confirmer que le tracking est **actif** sur toutes les pages.
7. **Bio réseaux** → mettre le **lien en bio** (TikTok + Instagram) vers la Landing.

## B. ORDRE EXACT DES VÉRIFICATIONS (avant de communiquer)
1. **Achat test réel LIVE** sur Le Sentier (19 €) → rembourse-toi ensuite. *(confirme que l'encaissement + la livraison marchent en vrai)*
2. E-mail de livraison **reçu** + lien Notion/PDF **ouvert en navigation privée**.
3. Page merci **OK** (accès + « crée ton personnage »).
4. Test **mobile** rapide de la landing (le trafic viendra du mobile).
5. Garantie **30 j** visible ; **aucun** témoignage fictif publié.
6. Lien en bio **cliquable** et pointant vers la bonne page.

## C. ORDRE EXACT DES PUBLICATIONS
1. **Story « c'est en ligne »** (TikTok + Instagram) avec le lien/sticker.
2. **1ʳᵉ vidéo TikTok** (le meilleur hook du batch — voir `../production/07`).
3. **1ᵉʳ Reel Instagram** (décliné de la même vidéo).
4. **Message au cercle proche** (amis/famille) : lien direct + demande de premier retour honnête.
5. Épingler la vidéo de lancement sur les deux profils.
6. Répondre **immédiatement** aux premiers commentaires (l'algorithme récompense la réactivité de la 1ʳᵉ heure).

## D. ORDRE EXACT DES KPI À REGARDER (après publication)
> Dans cet ordre de priorité — de la cause à l'effet.
1. **Vues** de la vidéo + **rétention 3 s** *(le hook accroche-t-il ?)*
2. **Clics sur le lien en bio** *(la promesse donne-t-elle envie d'en savoir plus ?)*
3. **Visiteurs de la landing** *(le trafic arrive-t-il vraiment sur l'offre ?)*
4. **Taux de conversion** landing → vente *(la page vend-elle ?)*
5. **Ventes** + **répartition des offres** (Sentier/Ascension/Sommet) + **prise des bumps**.
6. **Remboursements / bugs signalés** *(y a-t-il un problème produit ou tunnel ?)*
> Reporte ces chiffres dans [`../production/tableau-de-bord-kpi-lancement.csv`](../production/tableau-de-bord-kpi-lancement.csv).

## E. SI QUELQUE CHOSE CASSE (parades rapides)
| Symptôme | Vérifie d'abord |
|---|---|
| Aucune vente malgré du trafic | Le bouton d'achat pointe-t-il vers le produit **LIVE** ? Prix correct ? |
| Pas d'email de livraison | Automation « Bienvenue » **active** ? Déclencheur « achat » branché ? |
| Lien Notion inaccessible | Template en **partage public** ? Tester en navigation privée. |
| Page lente sur mobile | Visuels **compressés** ? |
| Beaucoup de clics, 0 conversion | Titre/1ᵉʳ visuel de la landing à revoir (note-le pour J+1). |

---
> Après le Go Live → passe à [`04-premiere-semaine.md`](./04-premiere-semaine.md).
