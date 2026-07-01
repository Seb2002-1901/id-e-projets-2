# Tableau de bord KPI du lancement — mode d'emploi

Fichier principal : **`tableau-de-bord-kpi-lancement.csv`** (importable dans **Google Sheets** ou Excel).
Les colonnes calculées contiennent de **vraies formules** : à l'import dans Google Sheets, elles se calculent automatiquement. Tu ne remplis que les colonnes de saisie.

## Utiliser
1. Google Sheets → **Fichier → Importer → Importer le fichier** → dépose le CSV → « Remplacer la feuille ».
2. Saisis chaque jour les colonnes **de saisie** (fond blanc ci-dessous). Les colonnes **calculées** se mettent à jour seules.
3. Pour ajouter des jours : copie une ligne de formules (H:L) vers le bas. La ligne **TOTAL** (16) agrège la période.
4. Mets en forme **Taux de conversion** et **Taux de remboursement** en **pourcentage** (Format → Nombre → %).

## Les 10 KPIs — définition, formule, cible (hypothèse), fréquence
> ⚠️ Les cibles sont des **hypothèses raisonnables** pour un produit digital froid en acquisition organique, à confronter au réel.

| KPI | Saisie / Calcul | Formule | Cible (hypothèse) | Fréquence |
|---|---|---|---|---|
| **Trafic** (Visiteurs) | saisie | visiteurs uniques sur la landing/produit | croissant | quotidien |
| **Ventes** | saisie | nb de commandes | ≥ 1er client < 7 j | quotidien |
| **Revenus bruts** | saisie | € encaissés (avant remboursement) | — | quotidien |
| **Panier moyen** | calcul | `Revenus ÷ Ventes` | 30-45 € (mix des 3 offres) | quotidien |
| **Taux de conversion** | calcul | `Ventes ÷ Visiteurs` | **1-3 %** | quotidien |
| **CAC** (coût d'acquisition) | calcul | `Dépense pub ÷ Ventes` | < panier moyen (idéal 0 € en organique) | par campagne |
| **Remboursements** | saisie + calcul | nb + `Remboursés ÷ Ventes` | **< 5-8 %** | hebdo |
| **Revenus nets** | calcul | `Revenus − Remboursé − Dépense pub` | > 0 | hebdo |
| **Réachat** | tab. annexe | `Réachats ÷ Clients` | à observer | mensuel |
| **Rétention** | tab. annexe | `Actifs à J7/J30 ÷ Clients` | J7 ≥ 40 %, J30 ≥ 20 % | hebdo |

---

## Onglet 2 — Sources de trafic (à ajouter comme 2ᵉ feuille)
Colle ce tableau dans une nouvelle feuille « Sources ». (`Part du trafic` et `Taux conv.` sont des formules ; adapte les lignes.)

| Source | Visiteurs | Ventes | Revenus (€) | Taux conv. | Part du trafic |
|---|---|---|---|---|---|
| TikTok | | | | `=IF(B2=0,0,C2/B2)` | `=IF($B$6=0,0,B2/$B$6)` |
| Instagram | | | | `=IF(B3=0,0,C3/B3)` | `=IF($B$6=0,0,B3/$B$6)` |
| Direct / bio | | | | `=IF(B4=0,0,C4/B4)` | `=IF($B$6=0,0,B4/$B$6)` |
| Autre (bouche-à-oreille…) | | | | `=IF(B5=0,0,C5/B5)` | `=IF($B$6=0,0,B5/$B$6)` |
| **TOTAL** | `=SUM(B2:B5)` | `=SUM(C2:C5)` | `=SUM(D2:D5)` | `=IF(B6=0,0,C6/B6)` | `1` |

> Sert à savoir **où mettre ton énergie** : la source au meilleur `Taux conv.` mérite plus de contenu.

## Onglet 3 — Rétention & réachat (à ajouter comme 3ᵉ feuille)
Suivi par cohorte hebdomadaire (une ligne = les clients arrivés cette semaine-là).

| Cohorte (semaine) | Nouveaux clients | Actifs J7 | Rétention J7 | Actifs J30 | Rétention J30 | Réachats | Taux de réachat |
|---|---|---|---|---|---|---|---|
| S1 | | | `=IF(B2=0,0,C2/B2)` | | `=IF(B2=0,0,E2/B2)` | | `=IF(B2=0,0,G2/B2)` |
| S2 | | | `=IF(B3=0,0,C3/B3)` | | `=IF(B3=0,0,E3/B3)` | | `=IF(B3=0,0,G3/B3)` |

- **Actif** = a validé au moins 1 défi dans Notion sur la période (donnée produit, pas de vente).
- **Réachat** = 2ᵉ achat (upsell vers Le Sommet, futur produit…).

---

## Rappels
- Ne remplis que les cases de saisie ; laisse les formules travailler.
- Regarde les **tendances** (7 jours), pas le bruit d'un jour isolé.
- Croise avec la **grille de décision J14** de `06-plan-tests-marche-14-jours.md`.
- Toutes les cibles sont des **hypothèses** : ta vraie donnée devient ta référence dès la 1ʳᵉ semaine.
