# Contrôle qualité final — vérifications, captures, tests, résultats attendus

> À exécuter pendant/après l'assemblage. Chaque test = **action → résultat attendu**. Si l'attendu n'est pas obtenu, corrige avant de continuer.

---

## 1. TEST NOTION (moteur RPG) — avec les données de test fournies
| # | Action | Résultat attendu |
|:--:|---|---|
| N1 | Importer [`tests/test-defis-valides-14j.csv`](./tests/test-defis-valides-14j.csv) (14 défis validés) | Le profil affiche **XP total = 220**, **série = 14**, **Niveau 1**, **Rang 1 · Éveil**. |
| N2 | Vérifier le **radar** après import | Les 8 jauges bougent selon les stats des 14 défis (Discipline/Courage/Vitalité dominantes en mois 1). |
| N3 | Cocher/décocher un défi « Validé » | XP, série et % se recalculent **instantanément**. |
| N4 | Vérifier la vue « Défi du jour » | Affiche **le prochain défi non validé** (Jour 15 après le test). |
| N5 | Vérifier % année à 14 validés | **≈ 3,8 %** (14/365). |
| N6 | **Supprimer les données de test** | Profil remis à 0 avant livraison. |
> ⚠️ Si N1 ne donne pas 220 XP : la formule XP (`Difficulté × 10`) ou le rollup « XP gagnée » (`if(Validé, XP, 0)`) est mal réglé — voir `../production/03-template-notion-final.md` §3.

## 2. TEST TINYPAGES (tunnel)
| # | Action | Résultat attendu |
|:--:|---|---|
| T1 | Parcourir Accueil → Landing → Produit | Liens OK, visuels chargés, aucun placeholder `[…]` visible. |
| T2 | Vérifier les 3 prix | **19 / 39 / 89 €** exactement. |
| T3 | Passer au paiement avec **order bump coché** | Total **+20 €** (Sentier→Ascension) ou **+50 €** (Ascension→Sommet). |
| T4 | Finaliser (mode test) | Redirection vers **page merci**. |
| T5 | Chercher toute mention « 14 jours » / ancien nom d'offre | **Aucune** (garantie 30 j, noms Le Sentier/L'Ascension/Le Sommet). |
| T6 | Vérifier la garantie | **« 30 jours satisfait ou remboursé »** visible sur produit + checkout + FAQ. |

## 3. TEST EMAILS
| # | Action | Résultat attendu |
|:--:|---|---|
| E1 | Déclencher un achat test | E-mail **Bienvenue 1.1** reçu en < 2 min. |
| E2 | Ouvrir sur mobile | Une colonne, gros bouton, lien d'accès fonctionnel. |
| E3 | Cliquer le lien d'accès | Ouvre le **Notion/PDF** (testé en navigation privée). |
| E4 | Démarrer un checkout sans finaliser | Séquence **Abandon** déclenchée au bon délai. |
| E5 | Vérifier les témoignages dans les emails | Fictifs **retirés ou remplacés** par de vrais. |

## 4. TEST PAIEMENTS
| # | Action | Résultat attendu |
|:--:|---|---|
| P1 | Achat test **Le Sentier 19 €** | Débit 19 €, accès livré, facture/confirmation envoyée. |
| P2 | Achat test **L'Ascension 39 €** + bump | Débit **59 €** (39+20), template Notion + bonus livrés. |
| P3 | Achat test **Le Sommet 89 €** | Débit 89 €, extras (Wrapped, communauté) livrés. |
| P4 | Demander un **remboursement** | Procédure simple, sans friction, sous 30 j. |
| P5 | Vérifier l'événement analytics | « Achat » remonté sur la page merci (pixel). |

## 5. TEST MOBILE / RESPONSIVE
| # | Action | Résultat attendu |
|:--:|---|---|
| M1 | Ouvrir chaque page sur **smartphone** | Lisible, aucun texte tronqué, CTA visibles sans zoom. |
| M2 | Tester en **4G** (ou throttling) | Visuels chargés en < 3 s (PNG compressés). |
| M3 | Rotation portrait/paysage | Mise en page ne casse pas. |
| M4 | Template Notion sur **app mobile Notion** | Dashboard et Défi du jour lisibles au pouce. |
| M5 | Emails sur Gmail/Apple Mail mobile | Rendu correct, bouton tactile. |
| M6 | Formulaire de paiement mobile | Champs accessibles, clavier adapté. |

## 6. TEST KPI (tableau de bord)
| # | Action | Résultat attendu |
|:--:|---|---|
| K1 | Importer [`tests/test-kpi-7jours.csv`](./tests/test-kpi-7jours.csv) dans Google Sheets | Les colonnes calculées s'affichent. |
| K2 | Vérifier la ligne TOTAL | **≈ 20 ventes**, **≈ 660 € bruts**, **conversion globale ≈ 2,3 %**, panier ≈ 33 €. |
| K3 | Modifier une valeur de saisie | Taux/panier/CAC se recalculent. |

## 7. CAPTURES À PRENDRE (pour la page de vente & les réseaux)
- 📸 Les **4 visuels P0/P1** exportés (Défi du jour, Dashboard, Radar, Wrapped).
- 📸 **Mockup téléphone** de chaque écran (pour la landing).
- 📸 **Écran de validation** (animation « défi validé ») — pour une vidéo TikTok.
- 📸 **Rang-up / badge débloqué** — moment partageable.
- 📸 (dès dispo) capture d'un **vrai** dashboard client — remplacera les visuels de démo.

## 8. ERREURS À RECHERCHER (revue anti-bug)
- ❌ Placeholder `[…]` oublié dans une page ou un email.
- ❌ Lien mort (bouton d'achat, lien Notion, lien bio).
- ❌ Prix incohérent / bump qui n'ajoute pas le bon montant.
- ❌ Témoignage fictif publié sans mention (à retirer).
- ❌ Mention « 14 jours » ou ancien nom d'offre resté quelque part.
- ❌ Promesse interdite (richesse / bonheur permanent / vie parfaite) dans un texte publié.
- ❌ Défi 128/131/132 sans Temps/Coût (à compléter).
- ❌ Formule Notion qui affiche `0`, une erreur ou un mauvais rang.
- ❌ Image non compressée (page lente sur mobile).

> ✅ **Critère de sortie QA :** tous les tests N/T/E/P/M/K au vert, section 8 sans occurrence, captures prises. → passe au Go Live.
