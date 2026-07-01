# Production — Ordre exact de création dans TinyPages

> Suis les étapes dans l'ordre. Chaque page a un fichier source de copie (dans `lancement-commercial/`) à coller bloc par bloc. Objectif : un tunnel fonctionnel de bout en bout.

---

## Étape 0 — Préparation (avant de toucher TinyPages)
1. **Visuels prêts** : au minimum les 4 visuels P0/P1 (`production/01-liste-8-visuels-canva.md`).
2. **Produit livrable prêt** : template Notion dupliquable (`production/03-template-notion-final.md`) + PDF premium des 365 défis. Récupère les **liens de duplication/téléchargement**.
3. **Réglages de marque TinyPages** : couleurs (`#1B2A4A`, `#F5A623`, `#2EC27E`, `#8A93A2`, fond `#F7F8FA`), polices (Poppins titres / Inter corps), logo Cairn, favicon.
4. **Paiement connecté** (Stripe/outil TinyPages) + les **3 produits** créés : Le Sentier 19 € · L'Ascension 39 € · Le Sommet 89 €, plus les **2 order bumps** (+20 € et +50 €).
5. **Emailing connecté** (séquences de `lancement-commercial/07-emails.md`).

---

## Ordre de création des pages

| Ordre | Page TinyPages | Source de copie | Points clés de config |
|:--:|---|---|---|
| **1** | **Page produit / Vente** (`03`) | `lancement-commercial/03-page-produit.md` | C'est la page de conversion centrale. Insère les 4 visuels P0. Tableau 3 offres, L'Ascension = « RECOMMANDÉ ». 3 boutons d'achat (un par offre). |
| **2** | **Landing longue** (`02`) | `lancement-commercial/02-landing-sales-page.md` | Choisis 1 des 3 titres H1 (teste-les). Blocs dans l'ordre. Tous les CTA pointent vers le paiement de l'offre. Sert de page de destination des pubs/bio. |
| **3** | **Page de paiement / Checkout** (`04`) | `lancement-commercial/04-page-paiement.md` | Active les **order bumps** (case à cocher). Réassurance + garantie 30 j visibles. Redirige vers la page merci après succès. |
| **4** | **Page merci** (`05`) | `lancement-commercial/05-page-merci.md` | **Déclenche l'email de livraison.** Affiche le lien Notion/PDF + « Crée ton personnage ». Upsell post-achat (bouton). |
| **5** | **FAQ** (`06`) | `lancement-commercial/06-faq-garanties-objections.md` | Page dédiée + accordéon. Lien depuis produit/landing/footer. |
| **6** | **Page d'accueil** (`01`) | `lancement-commercial/01-page-accueil.md` | Home du site : hero + gamme + CTA vers Produit. À faire **après** que le tunnel de conversion existe. |

---

## Étape finale — Câblage & liens
- **Navigation** : Accueil → Produit → Paiement → Merci ; FAQ accessible partout (menu + footer).
- **Lien en bio réseaux** → **Landing** (`02`) (ou Produit si tu préfères une page courte).
- **Emails** : brancher Bienvenue+Activation sur l'achat (page merci), Abandon sur le checkout, Relance sur la capture email (landing/lead magnet).
- **Boutons** : chaque bouton d'achat pointe vers le bon produit + order bump associé.
- **Analytics** : activer le suivi TinyPages + un pixel (TikTok/Meta) sur toutes les pages et l'événement « achat » sur la page merci.

---

## Test de bout en bout (obligatoire avant lancement)
1. Parcours complet : Accueil → Landing → Produit → Paiement (avec **bump coché**) → Merci.
2. Vérifie : le bon prix s'affiche, le bump ajoute bien +20/+50 €, l'email de livraison part, le lien Notion/PDF fonctionne (en navigation privée), la garantie est visible.
3. Teste sur **mobile** (80 % du trafic réseaux). Vérifie lisibilité des visuels et des CTA.
4. Fais un **achat test réel** (mode test Stripe) sur les 3 offres.

> Checklist de lancement complète : `production/05-checklist-lancement.md`.
