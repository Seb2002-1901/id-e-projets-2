# Cap365 · Post-installation Notion — Tableau de bord (Mac, copier-coller)

> **À faire APRÈS** le montage (`./run.sh` réussi). Cette 2ᵉ commande construit ton
> **tableau de bord** « Quartier Général » et vérifie les propriétés utiles.
> Elle utilise le **même `.env`**, elle est **relançable** et **ne touche jamais aux 365 défis**.

---

## En 2 commandes

```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
chmod +x post-install.sh && ./post-install.sh
```

C'est tout. Le script :
- crée/actualise la page **« 🎮 Cap365 — Quartier Général »** dans ta page Cap365 ;
- pose toutes les sections + tous les blocs possibles (callouts, titres, séparateurs,
  listes, **tableau**, **instructions**, **checklist**) ;
- ajoute les **liens vers tes 6 bases** ;
- vérifie/crée les **propriétés utiles** manquantes ;
- écrit le rapport **`POST-INSTALL-NOTION.md`**.

---

## Lire le rapport

```bash
open ~/Desktop/Cap365-Notion-Setup/Builder/POST-INSTALL-NOTION.md
```

## Relancer plus tard (idempotent, aucun doublon)

```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder && ./post-install.sh
```
> La page « Quartier Général » est **reconstruite à l'identique** à chaque fois.
> Tes 365 défis et tes données **ne sont jamais modifiés**.

---

## Ce qui se crée tout seul
| Section | Contenu |
|---|---|
| 🎯 Défi du jour | rappel du rituel + lien base Défis |
| 👤 Mon personnage | XP, rang, niveau, 8 stats + lien Profil |
| 📈 Progression | **tableau** barème XP + liens Niveaux & Rangs |
| 🏆 Badges | lien base Badges |
| 📅 Calendrier | rappel « Date de validation » + lien Défis |
| 🎯 Quêtes | lien base Quêtes |
| ✅ Comment utiliser | **liste numérotée** + **checklist** de démarrage |
| 🔗 Tes 6 bases | liens directs vers les 6 bases |
| 🛠️ À finir manuellement | vues, galerie badges, calendrier, mobile, radar |

## Ce qui reste à la main (limite de l'API Notion)
- **Vues personnalisées** (« Défi du jour », « Par mois », « À valider »).
- **Galerie de badges** (vue Galerie).
- **Vue Calendrier** (sur « Date de validation »).
- **Affichage mobile premium** (réorganiser les vues liées).
- **Radar visuel** des 8 stats (pas de graphe radar natif).

> La page « Quartier Général » est le **socle** : tu y insères ensuite ces vues
> avec `/vue liée de base`.

---

## En cas de souci
```bash
# .env manquant ? Utilise le MÊME que le montage :
cd ~/Desktop/Cap365-Notion-Setup/Builder && cp .env.example .env && open -e .env

# Dépendances manquantes :
cd ~/Desktop/Cap365-Notion-Setup/Builder && npm install && ./post-install.sh

# Bases introuvables ? Lance d'abord le montage :
cd ~/Desktop/Cap365-Notion-Setup/Builder && ./run.sh && ./post-install.sh
```
> ⚠️ Ne partage jamais le contenu de `.env` (il contient ton token).
