# Cap365 — Kit graphique FINAL (verrouillé)

> Source de vérité design. Tous les visuels (écrans, page de vente, mockups) utilisent **exactement** ces valeurs. Marque **Cairn** / produit **Cap365**. Mobile-first.
> ⚠️ **Valeurs canoniques** : en cas de divergence dans d'anciens fichiers, **ce document fait foi** (notamment succès `#2EC27E` et fond `#F7F8FA`).

---

## 1. Palette complète

### Couleurs principales
| Rôle | Nom | HEX | Usage |
|---|---|---|---|
| Primaire | Bleu nuit | `#1B2A4A` | Marque, fonds de blocs, titres forts, en-têtes. |
| Secondaire | Bleu | `#2E5EAA` | Sous-titres, liens, éléments d'interface. |
| **Accent** | Orange | `#F5A623` | **Action uniquement** : boutons, XP, jauges, jalons. |
| Succès | Vert | `#2EC27E` | Défi validé, série active, coche. |
| Alerte douce | Ambre | `#E8A13A` | Série en danger (jamais de rouge agressif). |

### Couleurs neutres
| Rôle | HEX | Usage |
|---|---|---|
| Neutre sombre | `#222831` | Texte principal sur fond clair. |
| Neutre moyen | `#5A6472` | Texte secondaire. |
| Neutre clair | `#8A93A2` | Texte tertiaire, zones non atteintes, **jour manqué (jamais rouge)**. |
| Ligne / bordure | `#E6E9EF` | Séparateurs, pistes de progress bar. |
| Fond | `#F7F8FA` | Fond général des écrans. |
| Surface | `#FFFFFF` | Cartes, blocs. |

### Dark mode (optionnel)
Fond `#12192B` · Surface `#1B2A4A` · Texte `#F7F8FA` · Accent inchangé `#F5A623`.

## 2. Couleurs des 4 raretés de badges
| Rareté | HEX | Gradient badge |
|---|---|---|
| 🟢 Commun | `#6BBF8A` | `#6BBF8A → #4FA372` |
| 🔵 Rare | `#3B82C4` | `#3B82C4 → #2E5EAA` |
| 🟣 Épique | `#8B5CF6` | `#8B5CF6 → #6D3CE0` |
| 🟠 Légendaire | `#F5A623` | `#F5A623 → #FF7A00` |
> Badge verrouillé : silhouette `#8A93A2` à 40 % d'opacité sur surface.

## 3. Couleurs des 10 rangs (Éveil → Légende)
| Rang | Nom | HEX | Emblème |
|:--:|---|---|---|
| 1 | Éveil | `#6BBF8A` | Étincelle |
| 2 | Élan | `#4FB0C9` | Souffle |
| 3 | Apprenti | `#B08D57` | Marteau (bronze) |
| 4 | Constant | `#3B82C4` | Ancre |
| 5 | Aguerri | `#9AA7B4` | Bouclier (argent) |
| 6 | Affirmé | `#E86A5C` | Flamme haute |
| 7 | Artisan | `#8B5CF6` | Atelier |
| 8 | Maître | `#F5A623` | Couronne (or) |
| 9 | Mentor | `#F2C14E` | Lanterne |
| 10 | Légende | `#1B2A4A` + liseré `#F5A623` | Astre |

## 4. Couleurs des 8 stats (radar)
| Stat | HEX | Icône (outline) |
|---|---|---|
| Discipline | `#3B82C4` | Engrenage ⚙ |
| Courage | `#F5A623` | Fanion ⚑ |
| Vitalité | `#2EC27E` | Cœur ❤ |
| Charisme | `#E86A5C` | Bulle de dialogue 💬 |
| Mental | `#8B5CF6` | Cerveau/roc 🧠 |
| Savoir | `#4FB0C9` | Livre ouvert 📖 |
| Création | `#EC4899` | Étincelle/pinceau 🖌 |
| Prospérité | `#B08D57` | Pièce/graine ◈ |

## 5. Gradients
| Nom | Valeur | Usage |
|---|---|---|
| Marque | `linear-gradient(135deg, #1B2A4A, #2E5EAA)` | En-têtes, hero. |
| XP / Progression | `linear-gradient(90deg, #F5A623, #FF7A00)` | Barres d'XP, jauges. |
| Succès | `linear-gradient(90deg, #2EC27E, #22A567)` | Validation. |
| Wrapped (fête) | `linear-gradient(160deg, #1B2A4A, #6D3CE0, #F5A623)` | Wrapped annuel, célébrations. |
| Rang-up | `radial-gradient(circle, #F5A623 0%, #1B2A4A 80%)` | Écran de montée de rang. |

## 6. Ombres (elevation)
| Niveau | Valeur CSS |
|---|---|
| Carte (repos) | `0 4px 16px rgba(27,42,74,0.08)` |
| Carte (survol/active) | `0 8px 24px rgba(27,42,74,0.12)` |
| Bouton accent | `0 2px 10px rgba(245,166,35,0.35)` |
| Modale / cérémonie | `0 16px 48px rgba(18,25,43,0.30)` |

## 7. Typographies
| Rôle | Police | Graisse | Taille mobile |
|---|---|---|---|
| Titres | **Poppins** (alt : Sora) | 600 / 700 | H1 30 · H2 24 · H3 20 px |
| Corps | **Inter** | 400 / 500 | 16 px (interligne 1,5) |
| Petit / label | Inter | 500 / 600 | 13 px |
| Micro / légende | Inter | 500 | 11 px, `letter-spacing 0.4px`, MAJUSCULES pour les labels. |
| Chiffres clés (XP, niveau) | Poppins | 700 | 22-40 px selon écran. |

## 8. Espacements & rayons
- **Grille de base : 4 px.** Échelle : 4 · 8 · 12 · 16 · 24 · 32 · 48.
- **Marges d'écran :** 20 px gauche/droite (mobile 1080 px → marge intérieure ~40 px @2x).
- **Gouttière entre cartes :** 12 px.
- **Rayons :** carte 20 px · bouton 14 px (ou pilule 999 px) · chip/puce 999 px · avatar 50 % · progress bar 999 px.

## 9. Styles de composants

### Cartes
- Fond `#FFFFFF`, rayon 20, ombre « carte repos », padding 20.
- **Carte de défi (repos)** : liseré gauche 4 px couleur de la stat. **Validée** : fond `#2EC27E` 8 % + coche verte + liseré `#2EC27E`.

### Boutons
| Type | Fond | Texte | Bord | Usage |
|---|---|---|---|---|
| Primaire | gradient XP (`#F5A623→#FF7A00`) | `#FFFFFF` 700 | — · ombre bouton accent | CTA principal (« Valider », « Je relève le défi »). |
| Secondaire | `#FFFFFF` | `#1B2A4A` 600 | 1,5 px `#1B2A4A` | Actions secondaires. |
| Fantôme | transparent | `#2E5EAA` 600 | — | Liens d'action discrets. |
- Hauteur tactile ≥ 48 px, texte centré, rayon 14, padding horizontal 24.

### Progress bars
- Piste `#E6E9EF`, hauteur 10, rayon 999.
- Remplissage : **XP** = gradient XP · **stat** = couleur de la stat · **année** = `#2E5EAA`.
- Pourcentage affiché à droite en Inter 600 13 px `#5A6472`.

### Jauges (radar)
- Octogone à 8 axes, graduation 0→100.
- Trait `#8A93A2` 1 px (grille), zone remplie `#2E5EAA` 25 % opacité, contour `#1B2A4A` 2 px, sommets = points de la couleur de chaque stat (rayon 4).

### Chips / puces
- Stat : pastille couleur stat + label Inter 600 11 px MAJ.
- Rareté : fond couleur rareté 15 %, texte couleur rareté 700 11 px.
- Série : `🔥 47` sur pilule `#F5A623` 12 % + texte `#F5A623` 700.

## 10. Icônes & illustrations
- **Style icônes :** outline, trait constant 2 px, coins arrondis, monochrome (couleur du contexte). Jeu : Lucide / Phosphor (gratuits) ou équivalents Canva « ligne arrondie ».
- **1 icône par stat** (voir §4) · **1 emblème par rang** (§3) · icônes d'action : ✓ valider, 🔥 série, 🛟 filet de reprise, 🏔️ cairn/sommet.
- **Illustrations :** géométriques semi-plates (sommets, chemins, jalons, pierres empilées = cairn). Palette restreinte à la charte. **Aucune image de stock générique.**
- **Motif de marque :** pierres empilées (cairn) en filigrane discret sur les en-têtes.

---
> Écrans détaillés → `02-ecrans-specs-finales.md` · Visuels de vente → `03-visuels-page-de-vente.md` · Mockups → `04-mockups-marketing.md`.
