# Cap365 · Commandes Mac (copier-coller)

> Copie chaque bloc dans le **Terminal** (Applications → Utilitaires → Terminal), dans l'ordre.
> Hypothèse : dossier décompressé sur le **Bureau** (`~/Desktop/Cap365-Notion-Setup`).

---

## 0) (Si besoin) Installer Node.js
```bash
node -v || brew install node
```

## 1) Aller dans le Builder
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
```

## 2) Créer le fichier de config et l'ouvrir
```bash
cp .env.example .env
open -e .env
```
➡️ Colle ton **token** et l'**ID de page**, puis **Cmd+S** et ferme la fenêtre.

## 3) Rendre le lanceur exécutable (au cas où)
```bash
chmod +x run.sh
```

## 4) Lancer le montage (LA commande unique)
```bash
./run.sh
```

---

## Variante en une seule ligne (étapes 3+4)
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder && chmod +x run.sh && ./run.sh
```

## Relancer plus tard (idempotent, aucun doublon)
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder && ./run.sh
```

## Lire le rapport généré
```bash
open ~/Desktop/Cap365-Notion-Setup/Builder/RAPPORT-NOTION.md
```

---

## 5) (Après le montage) Construire le tableau de bord
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder && chmod +x post-install.sh && ./post-install.sh
```
➡️ Crée la page **« 🎮 Cap365 — Quartier Général »** (sections, liens vers les 6 bases,
tableau, checklist…) + le rapport `POST-INSTALL-NOTION.md`. **Ne touche pas aux 365 défis.**
Détails complets : `Documents/POST-INSTALL-MAC.md`.

```bash
# lire le rapport de post-installation
open ~/Desktop/Cap365-Notion-Setup/Builder/POST-INSTALL-NOTION.md
# relancer plus tard (idempotent)
cd ~/Desktop/Cap365-Notion-Setup/Builder && ./post-install.sh
```

---

## 6) (Premium) Passer le tableau de bord en version « application »
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder && chmod +x post-install-v3.sh && ./post-install-v3.sh
```
➡️ Reconstruit la même page **« 🎮 Cap365 — Quartier Général »** en dashboard premium
(cartes RPG en colonnes, table des matières, toggles, navigation) + rapport
`POST-INSTALL-V3-REPORT.md` (clics exacts restants, % d'automatisation). Add-only,
**ne touche pas aux 365 défis**.

```bash
# lire le rapport V3
open ~/Desktop/Cap365-Notion-Setup/Builder/POST-INSTALL-V3-REPORT.md
```

### Tout enchaîner (les 3 commandes)
```bash
cd ~/Desktop/Cap365-Notion-Setup/Builder
chmod +x run.sh post-install.sh post-install-v3.sh
./run.sh && ./post-install.sh && ./post-install-v3.sh
```

---

## En cas de souci
```bash
# Node manquant
brew install node

# Réinstaller les dépendances proprement
cd ~/Desktop/Cap365-Notion-Setup/Builder && rm -rf node_modules && npm install && ./run.sh

# Vérifier que .env est bien rempli (sans afficher le token en clair, juste les clés présentes)
cd ~/Desktop/Cap365-Notion-Setup/Builder && grep -o '^[A-Z_]*=' .env
```
> ⚠️ Ne partage jamais le contenu de `.env` (il contient ton token).
