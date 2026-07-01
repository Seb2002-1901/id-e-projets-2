# Cap365 — Aperçu visuel & rendus finaux

> Ce dossier **montre réellement** à quoi ressemblera Cap365. Les maquettes HTML ont été **rendues en images PNG** (via Chromium) : ce sont les « captures finales attendues », directement réutilisables. Produit **verrouillé**.

---

## 🖼️ Ce qui est dans ce dossier
| Élément | Fichier | Contenu |
|---|---|---|
| **Maquette 8 écrans (rendue)** | [`renders/`](./renders/) | 16 PNG : les 10 cadres écran + 4 blocs de la page de vente + 2 vues d'ensemble. |
| Source HTML des écrans | `screens.html` | 10 cadres téléphone (kit verrouillé, SVG radar, grille calendrier, badges) — s'ouvre dans un navigateur. |
| Source HTML page de vente | `sales.html` | Hero desktop + mobile, radar, offres, garantie, témoignages. |
| **Prompts de génération d'images** | `prompts-generation-images.md` | 27 prompts prêts (8 écrans, hero, marketing, 7 mockups, 3 ambiances). |
| **Dossier Canva final** | `dossier-canva.md` | 33 designs ordonnés (dimensions, contenu, assets, temps ≈ 23 h). |

### Les rendus PNG (renders/)
`apercu-8-ecrans.png` (vue d'ensemble) · `ecran-dashboard.png` · `ecran-defi.png` · `ecran-radar.png` · `ecran-stats.png` · `ecran-badges.png` · `ecran-calendrier.png` · `ecran-recompenses.png` · `ecran-wrapped.png` · `ecran-dashboard-vide.png` (état vide) · `ecran-defi-complete.png` (état validé) · `page-de-vente.png` · `vente-hero.png` · `vente-hero-mobile.png` · `vente-vente-radar.png` · `vente-offres.png`.

> 💡 **Gain de temps :** ces PNG peuvent servir de **base directe** dans Canva (import + retouche) ou même de visuels de lancement provisoires. Regénérables à volonté en éditant les `.html` puis en re-screenshotant.
>
> Notes de fidélité mineures (cosmétique, non bloquant) : sur l'écran Radar, les libellés d'axe extrême-gauche/droite sont légèrement rognés par le cadre ; sur le hero de vente, le téléphone illustre un défi d'exemple différent de la persona verrouillée (jour 47 vs 128). À harmoniser lors de la production finale si souhaité — la référence reste `screens.html` (jour 128).

---

# 📋 RAPPORT FINAL (Partie 7)

### 1. Voici exactement à quoi ressemblera Cap365 une fois terminé
Ouvre `renders/apercu-8-ecrans.png` (vue d'ensemble) et les 16 PNG : un **Dashboard** premium (en-tête bleu nuit, barre d'XP orange, carte « Défi du jour », série 47 🔥), un **Radar** de 8 stats coloré, des **Statistiques** détaillées, un **mur de Badges** (24, 4 raretés), un **Calendrier** 365 jours, un écran **Récompenses**, et un **Wrapped** partageable (dégradé nuit→violet→or). Plus la **page de vente** (hero RPG + offres 19/39/89 € + garantie 30 j). **Ça ressemble à une vraie application premium.**

### 2. Voici tout ce qui a été généré à ta place
- **Les visuels rendus** (16 PNG) — tu n'as même plus à imaginer le résultat, tu le vois.
- Le **HTML source** éditable des écrans et de la page de vente.
- **27 prompts** de génération d'images (Midjourney/DALL·E/SDXL) prêts à coller.
- Le **dossier Canva** complet (33 designs ordonnés, dimensions, temps).
- (des étapes précédentes) kit graphique verrouillé, specs des 8 écrans, visuels de vente, mockups, 7 CSV Notion, données de test, tous les textes/emails/pages, runbooks J1-J7.

### 3. Ce qu'il reste réellement à faire manuellement
- **Monter le Notion** (importer les CSV, créer les formules, tester → 220 XP).
- **Finaliser les visuels dans Canva** — ou partir directement de ces PNG (raccourci majeur).
- **Coller** les 6 pages TinyPages + configurer paiement/bumps.
- **Brancher** les 6 emails + achat test.
- **Tourner** 7 vidéos.
- **Légal** (CGV/facturation) + vérifier la dispo du nom « Cairn ».

### 4. Temps restant estimé
**≈ 5 à 6 jours** solo — les rendus PNG **raccourcissent** la production visuelle (le plus long poste).

### 5. Niveau de préparation au lancement
## **8,5 / 10**
Tout est spécifié **et désormais visualisé**. Il ne manque que l'assemblage (Notion, tunnel, légal) et le passage des maquettes rendues à des assets Canva définitifs.

### 6. Si j'avais 7 jours devant moi, pourrais-je lancer seul ?
## ✅ OUI.
Il n'y a plus aucune décision ni conception : le produit est verrouillé, les écrans sont **rendus en images**, les textes écrits, les données prêtes à importer, l'ordre des actions documenté jour par jour. Un exécutant suit les runbooks et lance.

### 7. Liste exacte des actions restantes, dans l'ordre
1. **Notion** : importer `../execution-finale/csv/*` + `../production/defis-365-import-notion.csv`, créer les formules, **tester** avec `../execution-finale/tests/test-defis-valides-14j.csv` → **220 XP · série 14 · Rang 1**. *(~1,5-2 j)*
2. **Visuels** : partir des PNG de `renders/` et du `dossier-canva.md` pour finaliser dans Canva (ou utiliser les PNG tels quels au lancement). *(~1-1,5 j)*
3. **PDF premium + 6 bonus**. *(~0,5 j)*
4. **TinyPages** : coller les 6 pages (`../lancement-commercial/01→06`) + 3 offres + 2 order bumps. *(~1-1,5 j)*
5. **Emails** : brancher les 6 séquences (`../lancement-commercial/07`) + **achat test réel**. *(~0,5 j)*
6. **Légal** (CGV, remboursement 30 j, facturation) + **dispo « Cairn »**. *(~0,5 j)*
7. **QA finale** (`../execution-finale/02`) → **Go Live** (`../execution-finale/03`) → **première semaine** (`../execution-finale/04`).

> Après ces 7 actions, **Cap365 est réellement vendable**. Le reste — produit, contenu, design, copie, données, visuels rendus — est déjà livré.
