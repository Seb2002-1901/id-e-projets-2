# Lucide — V1 (monorepo)

L’application qui accompagne la réduction/arrêt d’alcool : **Comprendre · Anticiper · Se relever.**
Docs produit : `../PRODUIT-FINAL.md` · `../CAHIER-DES-CHARGES-V1.md` · `../EXECUTION-PACKAGE-V1.md` · `docs/TECH-DELIVERY.md`.

## Lancer le projet

```bash
# Prérequis : Node ≥ 20, Xcode (pour simulateur iOS) ou l’app Expo Go sur iPhone
npm install
npm run typecheck        # doit être vert
npm test                 # règles métier + machine à états + bilan : doit être vert
cd apps/mobile
npx expo start           # scanne le QR avec Expo Go, ou tape i pour le simulateur iOS
```

Backend (optionnel en dev — l’app fonctionne 100 % en local sans lui) :
```bash
supabase start
psql "$DB_URL" -f supabase/migrations/0001_init.sql
psql "$DB_URL" -f supabase/seed/seed.sql
supabase functions deploy sync-push weekly-report n3-dispatch
cp .env.example apps/mobile/.env   # renseigner EXPO_PUBLIC_SUPABASE_URL + ANON_KEY
```

## ✅ Terminé (implémenté et vérifié)

| Domaine | État |
|---|---|
| Règles métier (`@lucide/shared`) : triage BR-01/02, enveloppe/écart BR-10/11, vague BR-12, rebond BR-14, crise BR-03 | **41 tests verts** |
| Machine à états écart→rebond (T1-T12 + invariants) | **testée** (client et serveur exécutent le même reducer) |
| Bilan hebdomadaire déterministe (titres, tri-état, fait de la semaine, banques de phrases) | **testé (20 semaines de fixtures)** |
| App Expo : 20 écrans navigables (onboarding 10 + triage/orientation + tabs + SOS + protocole R + bilan + plan + réglages) | **typecheck 0 erreur · bundle Metro OK (3,7 MB hbc)** |
| SQLite local (schéma, DAO, outbox) — source de vérité du quotidien, offline-first | fait |
| SOS offline (courbe d’envie SVG, respiration, voix du coffre, appel allié, ressources danger) — **aucun import réseau** | fait |
| Coffre vocal (expo-audio, 90 s, lecture dans le SOS) | fait (fichier local) |
| Check-in ≤ 30 s + déclenchement écart → protocole R → compteur de rebond (« 12 j sur 15 », jamais de remise à zéro) | fait |
| Corpus de démonstration : 12 cartes sourcées (J1-J10 + 2 maintenance) avec badges 🟢🟡⚪, « ce que ça ne dit pas », fiches sources | fait |
| Enveloppe personnelle (arrêt = zéro / réduction = max semaine·occasion·jours off) | fait |
| Notifications locales N1 (carte du jour) + N2 (créneaux à risque, ≤3/sem, dédupliquées/jour) + N5 (fin d’essai) | fait |
| Migrations Postgres + RLS + seed (2 personas) + test RLS · Edge Functions sync-push / weekly-report / n3-dispatch | écrits, prêts à déployer |
| Auth e-mail OTP (Supabase) avec fallback local dev · client Supabase à session persistée (SQLite) | fait |
| Abstraction achats (paywall branché, essai simulé proprement, interface RevenueCat prête) | fait |
| Analytics PostHog EU : client HTTP batch maison, opt-in persisté, file locale, zéro SDK | fait |
| Export local : données JSON (share sheet) + audio du coffre · **purge locale réelle** (SQLite, audio, notifs, stores) | fait |
| e2e Detox écrits (3 flux + budget perf SOS < 2 s) + testIDs posés | prêts (exécution sur macOS) |
| CI GitHub Actions (typecheck, tests, interdits produit, bundle, migrations+RLS) | fait |

## 🔌 Reste à faire manuellement (liste finale — tout exige une clé/un compte externe)

1. **Supabase prod (UE)** : créer le projet, appliquer `supabase/migrations/`, déployer les 3 functions, remplir `.env` → l'auth e-mail OTP et la sync **s'activent seules** (déjà branchées).
2. **Apple Developer** : Sign in with Apple (`TODO LUC-07` dans `src/auth/auth.ts`, exige un build EAS) + certificats push.
3. **RevenueCat** : `npm i react-native-purchases` + clé + build EAS → remplacer `DevPurchases` (`src/purchases/purchases.ts`, interface prête, l'UI ne change pas).
4. **PostHog EU** : créer le projet, poser `EXPO_PUBLIC_POSTHOG_KEY` — le client HTTP batch opt-in est déjà écrit, zéro SDK.
5. **Clinicienne** : corpus 90 cartes (LUC-61), liste de crise de prod (LUC-62), DPIA (LUC-63) — bloquants bêta.
6. **libsodium** (LUC-16) : chiffrer le coffre avant d'activer son upload (aujourd'hui : local only, sans risque).
7. **e2e Detox** : `npm i -D detox jest` sur un Mac + `npx expo prebuild -p ios` → les 3 flux et le budget perf SOS < 2 s sont déjà écrits (`e2e/`).

## Avant TestFlight (ordre concret)

1. `eas build --platform ios --profile preview` (compte Apple + EAS configurés).
2. Brancher Supabase prod (UE) + auth Apple (LUC-07) + RevenueCat sandbox (LUC-43).
3. Corpus 90 cartes validé clinicienne (LUC-61) + liste de crise de prod (LUC-62) + DPIA (LUC-63).
4. Test SOS « conditions dégradées » (protocole LUC-52) sur 10 utilisateurs.
5. Review notes App Store (compte démo + triage expliqué) — checklist dans `docs/TECH-DELIVERY.md §13`.

## Règles d’or (CI les vérifie)
Le module SOS n’importe rien de réseau · toute logique métier vit dans `@lucide/shared` · « jour zéro » est introuvable dans l’app (BR-13) · le triage ne quitte jamais l’appareil (C2) · périmètre constant.
