# Import des 365 défis dans Notion — mode d'emploi

Fichier : **`defis-365-import-notion.csv`** (366 lignes = 1 en-tête + 365 défis). Encodage UTF-8, séparateur virgule, champs entre guillemets.

## Importer
1. Dans Notion, ouvre la base **« Défis 365 »** (voir `03-template-notion-final.md`).
2. `•••` → **Merge with CSV** (ou crée une nouvelle base via **Import → CSV**).
3. Sélectionne le fichier. Notion crée une ligne par défi.
4. Vérifie le **mapping des colonnes** ci-dessous, puis ajuste le **type** de chaque propriété.

## Colonnes du CSV → propriétés Notion
| Colonne CSV | Type Notion à régler | Note |
|---|---|---|
| **Jour** | `Number` | 1 → 365 (clé de tri). |
| **Mois** | `Select` | « Mois 1 » … « Mois 12 ». |
| **Titre** | `Title` | Défini comme titre de la page. |
| **Catégorie** | `Select` | 15 options (Notion les crée à l'import). |
| **Stat** | `Select` | 8 stats exactement (Discipline, Courage, Vitalité, Charisme, Mental, Savoir, Création, Prospérité). |
| **Difficulté** | `Number` | 1 → 10. |
| **Temps** | `Select` (ou Text) | Ex. « 5 min », « 30 min ». |
| **Coût** | `Select` (ou Text) | Ex. « 0 € », « ~5 € ». |
| **Objectif / Pourquoi / Instructions / Variante facile / Variante difficile / Récompense** | `Text` | Contenu du défi. Peut aussi être copié dans le corps de page. |
| **Statut** | `Select` | Pré-rempli « À venir ». Options : À venir · Validé ✓ · Grâce ◐ · Reprise · Manqué ○. |
| **Validé** | `Checkbox` | Pré-rempli « Non » → règle la colonne en Checkbox (décoché). |
| **Date de validation** | `Date` | Vide au départ. |
| **Ressenti** | `Text` | Vide au départ. |

## À AJOUTER après l'import (propriétés calculées — PAS dans le CSV)
Ces propriétés sont des **formules/rollups** à créer dans Notion (formules exactes dans `03-template-notion-final.md`) : **XP** (`Difficulté × 10`), **Points stat** (+1/+2/+3), **XP gagnée** (`if(Validé, XP, 0)`), **Pts Discipline… Pts Prospérité**. Elles ne doivent pas figurer dans le CSV (Notion n'importe pas dans une formule).

## Points de contrôle
- ✅ 365 lignes importées, **Jour 1 → 365** sans trou.
- ✅ 8 valeurs de **Stat** uniquement ; 15 **Catégories**.
- ⚠️ **3 défis (jours 128, 131, 132)** n'ont pas de valeur **Temps/Coût** (champ vide dans la source) : renseigne-les à la main (30 s) si tu veux 100 % de complétion.
- ✅ Toutes les cases **Validé** décochées, **Statut** = « À venir ».
