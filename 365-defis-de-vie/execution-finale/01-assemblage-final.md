# Assemblage final — Jour par jour jusqu'au lancement

> Runbook opérationnel. 6 jours de montage → Go Live au Jour 7. Chaque étape indique **quoi faire, avec quel fichier, résultat attendu**. Aucune décision de conception : tout est fourni.
> Marque **Cairn** / produit **Cap365**. Offres **Le Sentier 19 € · L'Ascension 39 € · Le Sommet 89 €**. Garantie **30 jours**.

---

## JOUR 1 — Monter la structure Notion (~5 h)
**Objectif :** un espace Notion structuré avec les 365 défis + les référentiels importés.
1. Créer l'arborescence Notion selon [`../production/03-template-notion-final.md`](../production/03-template-notion-final.md) §1 (pages : Accueil, Dashboard, Défi du jour, Mes 365 défis, Personnage, Badges, Quêtes, Calendrier, Récompenses, Journal, Réglages).
2. Créer la base **Défis 365** → **importer** [`../production/defis-365-import-notion.csv`](../production/defis-365-import-notion.csv). Régler les types (Jour=Number, Catégorie/Stat/Mois/Statut=Select, Validé=Checkbox, Date=Date, reste=Text).
3. Créer et importer les référentiels :
   - Base **Niveaux** ← [`csv/notion-niveaux-50.csv`](./csv/notion-niveaux-50.csv) (50 lignes)
   - Base **Rangs** ← [`csv/notion-rangs.csv`](./csv/notion-rangs.csv) (10)
   - Base **Badges** ← [`csv/notion-badges.csv`](./csv/notion-badges.csv) (24)
   - Base **Quêtes** ← [`csv/notion-quetes.csv`](./csv/notion-quetes.csv) (19)
   - Base **Profil** ← [`csv/notion-profil-init.csv`](./csv/notion-profil-init.csv) (état de départ)
4. Renseigner **Temps/Coût des défis 128, 131, 132** (vides à la source).
**Résultat attendu :** 365 défis + 50 niveaux + 10 rangs + 24 badges + 19 quêtes visibles, aucune erreur d'import.

## JOUR 2 — Formules, vues & QA Notion (~5 h)
**Objectif :** le moteur RPG calcule tout seul, vérifié par les données de test.
1. Créer les **formules** (copier-coller depuis `03-template-notion-final.md` §3) : XP, Points stat, XP gagnée, XP cumulée (rollup), Niveau, Rang, %année, %niveau, série, 8 jauges radar.
2. Créer les **vues** (§4) : Défi du jour, Calendrier, Dashboard, Personnage (radar), Badges (galerie), Récompenses.
3. **TEST FORMULES** : importer temporairement [`tests/test-defis-valides-14j.csv`](./tests/test-defis-valides-14j.csv) (14 défis validés) → vérifier que le profil affiche **XP = 220**, **série = 14**, **Rang 1 Éveil**. Si OK, supprimer les données de test. *(cf. `02-controle-qualite-final.md`)*
4. Exporter le **PDF premium** (Le Sentier) + rassembler les **6 bonus** (`../bonus/`).
5. Rendre le template **dupliquable** (lien public) + page « Crée ton personnage ».
**Résultat attendu :** dashboard fonctionnel, valeurs de test justes, produit livrable prêt.

## JOUR 3 — Visuels Canva (~5 h)
**Objectif :** les 4 visuels P0/P1 qui rendent le produit crédible.
1. Régler la charte Canva (couleurs/polices) une fois : `01-liste-8-visuels-canva.md` §Charte.
2. Produire les **4 visuels** (données persona verrouillées — Lucas, jour 128, Rang 4, 47🔥, 6 240 XP) via [`../lancement-commercial/08-captures-et-brief-canva.md`](../lancement-commercial/08-captures-et-brief-canva.md) + [`../production/02-maquettes-ecrans-finales.md`](../production/02-maquettes-ecrans-finales.md) :
   1) Défi du jour · 2) Dashboard · 3) Radar · 4) Wrapped annuel.
3. Exporter en **PNG @2x** + versions **mockup téléphone** + variantes story pour 1/3/4.
**Résultat attendu :** 4 visuels cohérents (mêmes données partout), prêts pour la page de vente.

## JOUR 4 — Tunnel TinyPages (~5-6 h)
**Objectif :** les 6 pages en ligne + paiement configuré.
1. Régler la charte TinyPages (couleurs/polices/logo Cairn/favicon).
2. Créer les pages dans l'ordre de [`../production/04-ordre-creation-tinypages.md`](../production/04-ordre-creation-tinypages.md) : Produit → Landing → Paiement → Merci → FAQ → Accueil, en collant les textes de [`../lancement-commercial/`](../lancement-commercial/00-README.md) (01→06).
3. Configurer les **3 offres** (19/39/89 €) + **2 order bumps** (+20 €, +50 €).
4. Insérer les **4 visuels** ; retirer/replacer les **témoignages fictifs**.
**Résultat attendu :** tunnel navigable Accueil→Merci, prix et bumps corrects.

## JOUR 5 — Emails + câblage + achat test (~4-5 h)
**Objectif :** séquences branchées et tunnel testé de bout en bout.
1. Importer les **6 séquences** de [`../lancement-commercial/07-emails.md`](../lancement-commercial/07-emails.md), mapper les variables `[Prénom]`, `[LienAcces]`, etc.
2. Brancher les **déclencheurs** (achat→Bienvenue+Activation ; checkout→Abandon ; lead→Relance).
3. Poser **analytics + pixels** (TikTok/Meta) + événement « Achat » sur la page merci.
4. **ACHAT TEST RÉEL** (mode test) sur les 3 offres + bump → vérifier prix, email de livraison, accès Notion/PDF (cf. `02-controle-qualite-final.md`).
**Résultat attendu :** un achat test aboutit et déclenche la livraison.

## JOUR 6 — Contenu réseaux + QA finale + légal (~5 h)
**Objectif :** prêt à publier + conforme.
1. Créer/optimiser **TikTok + Instagram** (bios + lien en bio → landing) — [`../production/07-plan-contenu-tiktok-instagram.md`](../production/07-plan-contenu-tiktok-instagram.md).
2. **Tourner 7 vidéos** (batch) à partir des hooks du plan de contenu.
3. Passer la **checklist mobile/responsive** (`02-controle-qualite-final.md`).
4. **Légal** *(à faire valider par toi)* : mentions légales, CGV, politique de remboursement 30 j, facturation.
**Résultat attendu :** comptes prêts, 7 vidéos en réserve, QA mobile OK, cadre légal en place.

## JOUR 7 — GO LIVE
→ Suivre [`03-go-live.md`](./03-go-live.md).

---
### Récapitulatif
| Jour | Bloc | Durée | Livrable |
|:--:|---|:--:|---|
| 1 | Structure Notion + imports | ~5 h | Bases peuplées |
| 2 | Formules + vues + QA + PDF/bonus | ~5 h | Moteur RPG testé |
| 3 | 4 visuels Canva | ~5 h | Visuels prêts |
| 4 | Tunnel TinyPages | ~5-6 h | 6 pages + paiement |
| 5 | Emails + achat test | ~4-5 h | Tunnel testé |
| 6 | Contenu + QA mobile + légal | ~5 h | Prêt à publier |
| 7 | **Go Live** | ~2-3 h | **En vente** |
