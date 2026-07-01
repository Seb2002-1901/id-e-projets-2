# Guide Dépannage — Cap365

> Les problèmes les plus fréquents et leur solution. Cherche ton message d'erreur ci‑dessous.

---

## Montage Notion (Builder)

**« Impossible d'accéder à la page parente »**
→ La page n'a pas été **partagée** avec l'intégration. Reprends l'Étape 2 de `GUIDE-NOTION.md` (••• → Connections). Vérifie aussi que l'ID fait bien **32 caractères** et que le token est correct.

**`node: command not found`**
→ Node.js n'est pas installé. Va sur **https://nodejs.org**, installe la version « LTS », puis relance `node -v`.

**`permission denied: ./run.sh`**
→ Rends les scripts exécutables :
```bash
chmod +x run.sh post-install.sh post-install-v3.sh
```

**`MODULE_NOT_FOUND` ou erreur de dépendances**
→ Réinstalle proprement :
```bash
rm -rf node_modules && npm install
```

**`unauthorized` / erreur 401**
→ Le token est invalide. Recopie le secret depuis my‑integrations dans `Builder/.env`.

**Le script est lent**
→ C'est **normal** : l'import des 365 défis est volontairement ralenti pour respecter la limite de Notion (~3 requêtes/seconde). Laisse‑le finir (~3‑5 min).

**J'ai relancé une commande, vais‑je avoir des doublons ?**
→ **Non.** Tout est idempotent : les bases sont réutilisées, les lignes mises à jour par clé, la page reconstruite à l'identique.

---

## Notion après montage

**Je ne vois pas la vue « Défi du jour » / Calendrier / Galerie**
→ Normal : l'API **ne crée pas les vues**. Suis les clics exacts dans `../Builder/POST-INSTALL-V3-REPORT.md` (~12 min).

**Les valeurs des « cartes » du tableau de bord ne bougent pas**
→ Les cartes sont des repères visuels ; les **vraies valeurs** (XP, rang, niveau, série) vivent sur la fiche **Profil** (colonnes calculées automatiquement).

**« XP cumulée » reste à 0 alors que j'ai coché des défis**
→ Vérifie que la **relation Défis ↔ Profil** existe et que chaque défi validé est bien relié au profil « Mon personnage ». Relance `./run.sh` : il rétablit la relation sans rien dupliquer.

---

## Vente / pages

**Un lien de paiement ne mène pas au bon produit**
→ Vérifie l'URL de paiement de chaque page (`../TinyPages/04-page-paiement.md`) et le prix associé.

**Que faire des témoignages ?**
→ Ils sont **fictifs et signalés**. Garde la mention « exemple fictif » tant que tu n'as pas de vrais avis, puis remplace‑les.

---

## Sécurité

**J'ai peur d'avoir exposé mon token**
→ Va sur my‑integrations, **régénère (rotate)** ou **supprime** l'intégration, recrée‑en une, remets la nouvelle clé dans `Builder/.env`. Ton token ne doit vivre **que** dans ce fichier `.env` (jamais partagé, jamais publié).

---

Toujours bloqué ? Reprends le guide concerné : `GUIDE-MAC.md`, `GUIDE-NOTION.md`, `GUIDE-LANCEMENT.md`, `GUIDE-GO-LIVE.md`. Le détail technique du montage est dans `../Builder/README.md`.
