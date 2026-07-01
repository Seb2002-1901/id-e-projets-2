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
