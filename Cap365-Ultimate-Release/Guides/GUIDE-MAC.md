# Guide Mac — Monter Cap365 en 3 commandes

> Objectif : préparer ton ordinateur (Mac) et lancer le montage automatique de ton espace Notion. Aucune compétence technique requise — tu copies‑colles des commandes.

⏱️ Durée : ~15 minutes (dont ~5 min d'attente pendant l'import des 365 défis).

---

## Avant de commencer
- Il te faut un **Mac** et un compte **Notion**.
- Avoir **créé ton intégration Notion** et **récupéré tes 2 clés** : suis d'abord **[`GUIDE-NOTION.md`](./GUIDE-NOTION.md)** (2 min).
- Avoir **décompressé** ce dossier, par exemple sur le **Bureau**.

---

## Étape 1 — Vérifier Node.js (le moteur du script)
Ouvre l'application **Terminal** (Applications → Utilitaires → Terminal), colle ceci et appuie sur Entrée :
```bash
node -v
```
- Si un numéro s'affiche (ex. `v20.11.0`) et qu'il est **≥ 18**, c'est bon.
- Sinon, installe Node : va sur **https://nodejs.org**, télécharge la version « LTS », installe‑la, puis relance `node -v`.

## Étape 2 — Aller dans le dossier Builder
> Adapte le chemin si tu ne l'as pas mis sur le Bureau.
```bash
cd ~/Desktop/Cap365-Ultimate-Release/Builder
```

## Étape 3 — Renseigner tes 2 clés Notion
```bash
cp .env.example .env
open -e .env
```
Dans la fenêtre qui s'ouvre, complète les 2 lignes avec les clés obtenues dans le guide Notion, puis **enregistre (Cmd+S)** et ferme :
```
NOTION_TOKEN=colle_ici_ton_secret
NOTION_PARENT_PAGE_ID=colle_ici_les_32_caracteres
```
> 🔒 Ce fichier `.env` reste sur **ton** ordinateur. Ne le partage jamais : il contient ton secret.

## Étape 4 — Les 3 commandes
```bash
chmod +x run.sh post-install.sh post-install-v3.sh
./run.sh
./post-install.sh
./post-install-v3.sh
```
Ce que fait chaque commande :
1. **`./run.sh`** — crée les 6 bases et importe **365 défis, 50 niveaux, 10 rangs, 24 badges, 19 quêtes** + le profil. *(~3‑5 min ; l'import est volontairement ralenti pour respecter les limites de Notion.)*
2. **`./post-install.sh`** — construit le tableau de bord **« 🎮 Cap365 — Quartier Général »**.
3. **`./post-install-v3.sh`** — passe ce tableau de bord en **version premium** (cartes, colonnes, navigation) et génère un rapport.

> ✅ Tout est **relançable sans risque** : rien n'est dupliqué, tes données ne sont jamais modifiées.

---

## Et après ?
- Ouvre Notion : tes 6 bases et ta page « Quartier Général » sont là.
- Termine les **vues** (Défi du jour, Calendrier, Galerie) — l'API ne les crée pas. Les **clics exacts** sont listés dans `Builder/POST-INSTALL-V3-REPORT.md` (~12 min).
- Passe ensuite au **[`GUIDE-LANCEMENT.md`](./GUIDE-LANCEMENT.md)**.

Un blocage ? → **[`GUIDE-DEPANNAGE.md`](./GUIDE-DEPANNAGE.md)**.
