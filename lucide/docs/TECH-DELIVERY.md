# LUCIDE V1 — LIVRAISON TECHNIQUE FINALE (architecture figée)

> Rôle : CTO/Lead Engineer. Base : `EXECUTION-PACKAGE-V1.md` + CDC. Périmètre constant — aucune fonctionnalité nouvelle n'entre ici, ni jamais sans décision écrite CEO.
> Fichiers réels livrés dans ce starter : `supabase/migrations/0001_init.sql` · `supabase/seed/seed.sql` · `openapi.yaml` · `packages/shared/src/types.ts` · `packages/shared/src/rules/{rules,stateMachine}.ts` · `.github/workflows/ci.yml` · `.env.example` · `docs/backlog.csv`.

---

## 1. REVUE FINALE — VERDICT ET CORRECTIONS (architecture figée ensuite)

**Verdict : aucune contradiction produit. Trois trous techniques trouvés et corrigés :**

- **C4 — `push_tokens` manquait.** N3 (relance écart) et N4 (bilan) sont des push **serveur** (l'app peut être fermée) ; N1/N2/N5 sont des notifications **locales planifiées** (l'app connaît l'heure de carte, les créneaux à risque et `trial_end`). Table ajoutée à la migration 0001 ; constantes `SERVER_PUSH`/`LOCAL_SCHEDULED` dans `types.ts`.
- **C5 — Export RGPD de l'audio : contradiction levée.** Le serveur ne possède jamais la clé du coffre — il ne peut donc pas livrer un audio déchiffré. Décision : l'export serveur contient **tout le JSON** ; l'audio s'exporte **depuis l'app** (déchiffré on-device → share sheet iOS). Plus sûr, plus simple, conforme (la donnée est remise à la personne).
- **C6 — Sémantique d'upsert des check-ins.** `id` ULID client + contrainte `unique(user_id, date)` pouvaient entrer en conflit à l'édition. Décision : le sync serveur fait `ON CONFLICT (user_id, date) DO UPDATE` — l'édition du jour remplace la ligne du jour. Documenté dans la migration et l'OpenAPI.

**Fenêtre horaire N3** : calculée avec `profiles.tz_at_start` (décision : suffisant en V1 ; le voyageur reçoit N3 sur son fuseau d'origine — acceptable, documenté).

## 2. ARBORESCENCE COMPLÈTE DU MONOREPO

```
lucide/
├── pnpm-workspace.yaml            # packages: apps/*, packages/*
├── package.json                   # scripts racine: typecheck, lint, test, e2e
├── tsconfig.base.json             # strict: true, exactOptionalPropertyTypes: true
├── .env.example                   # (fichier livré)
├── .github/workflows/ci.yml      # (fichier livré)
├── apps/mobile/
│   ├── app.config.ts              # Expo: bundleId app.lucide.ios, scheme lucide, plugins
│   ├── eas.json                   # profils: development, preview, production
│   ├── app/                       # expo-router — §7
│   ├── src/
│   │   ├── components/            # 16 composants DS (un dossier = Composant.tsx + test + story)
│   │   ├── features/
│   │   │   ├── onboarding/        # screens/ + triage/ (appelle shared/rules)
│   │   │   ├── today/             # TodayScreen + selectTodayState.ts (pur, testé)
│   │   │   ├── sos/               # ISOLÉ: screens/ tools/ audio/ — eslint no-network
│   │   │   ├── rebound/           # protocole R + intégration stateMachine
│   │   │   ├── plan/              # enveloppe, si-alors, coffre, allié
│   │   │   ├── report/            # rendu WeeklyReportPayload
│   │   │   └── settings/
│   │   ├── db/                    # schema.ts (SQLite DDL §4), migrations/, dao/
│   │   ├── sync/                  # outbox.ts, push.ts, pull.ts, scheduler.ts
│   │   ├── content/               # loader corpus embarqué + manifestUpdater.ts
│   │   ├── crypto/                # vaultCrypto.ts (sodium+Keychain)
│   │   ├── analytics/             # posthog.ts (wrapper opt-in, événements typés)
│   │   ├── notifications/         # local.ts (N1/N2/N5), pushToken.ts
│   │   ├── stores/                # §9 — Zustand
│   │   ├── hooks/                 # §9
│   │   └── theme/                 # tokens.ts, themes/{light,dark,sos}.ts
│   └── e2e/                       # Detox: onboarding.e2e.ts, sos.e2e.ts, rebound.e2e.ts, perf-sos.ts
├── packages/
│   ├── shared/                    # @lucide/shared — types + règles pures (fichiers livrés)
│   │   └── src/{types.ts, rules/rules.ts, rules/stateMachine.ts, phrases/} 
│   └── content-pipeline/          # CLI: valide MD+frontmatter → corpus.json + manifest signé
├── supabase/
│   ├── migrations/0001_init.sql   # (fichier livré)
│   ├── seed/seed.sql              # (fichier livré)
│   ├── tests/rls_test.sql         # multi-comptes (LUC-06)
│   └── functions/
│       ├── sync-push/  sync-pull/ # + exécution reduceWave + reboundHours serveur
│       ├── envelopes/  weekly-report/  vault-presign/
│       ├── export/  delete-account/  rc-webhook/
│       └── crons: weekly-batch, n3-dispatch, purge
├── openapi.yaml                   # (fichier livré)
└── docs/                          # TECH-DELIVERY.md, backlog.csv, ADR/, lexique-claims.md, dpia/
```

## 3. DIAGRAMMES

**Architecture (composants)**
```
┌──────────────────────── iPhone ────────────────────────┐
│  UI (expo-router) ── stores (Zustand) ── hooks          │
│        │                    │                            │
│  features/* ────► @lucide/shared (règles pures, SM)      │
│        │                    │                            │
│  SQLite (source de vérité quotidienne) ◄── content/      │
│        │              ▲  corpus embarqué + manifest CDN  │
│  sync/outbox ─────────┘                                  │
│  crypto/ (Keychain+sodium)   sos/ [AUCUN accès réseau]   │
└───────┬──────────────────────────────────────────────────┘
        │ HTTPS (batch, différé)
┌───────▼───────── Supabase UE ─────────────┐   ┌─ RevenueCat ─┐
│ Auth │ Postgres+RLS │ Storage(blobs) │     │◄──┤ webhook      │
│ Edge Functions (reduceWave serveur)  │     │   └──────────────┘
│ Crons: weekly · n3 · purge ──► Expo Push   │   ┌─ PostHog EU ─┐
└────────────────────────────────────────────┘   │ opt-in       │
                                                  └──────────────┘
```

**Séquence — check-in « au-dessus » → protocole → rebond**
```
Utilisatrice   App(SQLite)        shared/SM            Serveur
    │ Q3 au-dessus │                   │                   │
    │─────────────►│ insert checkin    │                   │
    │              │ reduceWave(LAPSE_DECLARED)            │
    │              │◄─ fx: OPEN_WAVE, ADD_EVENT,           │
    │              │    LOCK_ENVELOPE, PROPOSE_PROTOCOL    │
    │  « plus tard »│ reduceWave(PROTOCOL_DEFERRED)        │
    │              │◄─ fx: ARM_N3 ────── outbox ─────────►│ planifie N3(+24h, garde C3)
    │   [24 h]     │                   │                   │── push N3 ──► iPhone
    │ ouvre N3     │ deep link return/:waveId              │
    │ 3 étapes     │ reduceWave(STEP_DONE×3, COMPLETED)    │
    │              │◄─ fx: RECORD_REBOUND ── outbox ─────►│ reboundHours (BR-14) + upsert
    │              │◄─ fx: SHOW_REBOUND_SCREEN             │
    │ voit « 26 h »│                   │                   │
```

**Séquence — SOS offline (aucune flèche réseau, par construction)**
```
Widget/É11 ─► sos/ : état A → B(courbe+outils, audio local) → C(capture)
   insert sos_session (SQLite) · événements analytics en file locale
   [plus tard] scheduler sync → flush outbox + analytics
```

## 4. SCHÉMA SQLITE LOCAL (miroir + tables locales pures)

```sql
-- Miroirs synchronisés (mêmes colonnes utiles que Postgres) :
checkins, sos_sessions, lapse_waves, lapse_events, lapse_context(free_text_cipher BLOB),
rebounds, if_then_plans, proofs, envelopes, weekly_reports, notif_prefs;

-- Locales, JAMAIS synchronisées :
create table triage_local (           -- décision C2
  id integer primary key check (id=1),
  outcome text not null,              -- green|red
  answers_cipher blob not null,       -- chiffré, pour « refaire le point »
  done_at text not null);
create table vault_local (
  id text primary key, kind text, file_path text, duration_s integer, recorded_at text);
create table outbox (
  id text primary key, kind text not null, payload text not null,
  created_at text not null, tries integer not null default 0, quarantined integer default 0);
create table wave_ctx (               -- persistance du WaveCtx (§SM)
  id integer primary key check (id=1), state text, wave_id text,
  last_event_at text, last_occurred_on text, n3_sent integer, protocol_step integer);
create table kv (k text primary key, v text);  -- curseur pull, version corpus, flags
```
Migrations locales : `db/migrations/00x_*.ts`, exécutées au boot, testées (LUC-03).

## 5. CONVENTIONS DE CODE

TypeScript strict partout, `any` interdit (lint error) · nommage : composants PascalCase, hooks `useX`, règles métier = fonctions pures dans shared (JAMAIS dans les composants — revue systématique) · textes UI : uniquement via `content/strings.ts` (clé → FR), zéro littéral dans le JSX (grep CI « jour 0 » + revue des 🔒) · erreurs : `Result<T, E>` sur les chemins métier, exceptions réservées aux bugs · imports : alias `@/`, ordre lint · commits : Conventional Commits (`feat(sos): …`) + ID ticket · PR : ≤ 400 lignes, 1 review minimum, CI verte obligatoire · ADR (`docs/ADR/`) pour toute décision d'architecture — l'ADR-000 est ce document.

## 6. STRATÉGIE DE TESTS

| Niveau | Portée | Outil | Seuil |
|---|---|---|---|
| Unitaires règles | `@lucide/shared` (BR, SM, weeklyReport) | Vitest | **100 % branches (CI bloquante)** |
| Unitaires app | sélecteurs d'état, sync, DAO, composants | Jest + RNTL | 80 % sur `src/` hors écrans |
| SQL | migrations from scratch, RLS multi-comptes, seed | psql en CI | vert obligatoire |
| e2e | 3 flux critiques (onboarding-triage, SOS avion, écart→rebond) | Detox | 10 runs stables |
| Perf | ouverture SOS, démarrage à froid | script CI device/simu | p95 < 2000 ms / < 2 s |
| Humain | SOS conditions dégradées, chrono check-in, compréhension vocabulaire | protocole LUC-52 + bêta | ≥ 90 % tâche |
Fixtures : 20 semaines de données synthétiques (générateur dans `shared/testkit`) réutilisées par weeklyReport, É17 et les e2e.

## 7. STRUCTURE EXPO ROUTER (définitive)

```
app/
├── _layout.tsx                    # gate: triage_local.outcome==='red' → (resources)
│                                  #       pas de session → (onboarding) ; sinon (tabs)
├── (onboarding)/
│   ├── _layout.tsx                # stack sans header, draft MMKV
│   ├── welcome.tsx  goal.tsx  consumption.tsx  safety.tsx  orientation.tsx
│   ├── triggers.tsx  vault.tsx  trajectory.tsx  account.tsx  paywall.tsx
├── (resources)/index.tsx          # mode ressources (C2) — accès sos permanent
├── (tabs)/
│   ├── _layout.tsx                # TabBar(Aujourd'hui, Repères) + <SosButton/> overlay
│   ├── today/index.tsx  today/card/[day].tsx  today/report.tsx
│   └── landmarks/index.tsx  landmarks/plan.tsx  landmarks/settings.tsx
├── sos.tsx                        # modal plein écran, presentation:'fullScreenModal', gesture off
└── return/[waveId].tsx            # modal protocole R
Deep links: lucide://sos · lucide://return/:waveId · lucide://report
```

## 8. HOOKS & STORES (structure figée)

**Stores Zustand (3, pas plus)** : `useSessionStore` (auth, abonnement, consentements) · `useJourneyStore` (jour de parcours, WaveCtx hydraté de `wave_ctx`, enveloppe active) · `useUiStore` (thème, bandeaux, sheet ouverte). Les DONNÉES vivent en SQLite — les stores ne cachent que l'état de session/UI ; toute lecture de données passe par les hooks de requête.

**Hooks (contrats)** : `useTodayState()` → union des 7 états É11 (sélecteur pur testé) · `useCheckin(date)` · `useDailyCard(day)` · `useCounters()` (agrégats É17 via SQL) · `useWave()` → `{ctx, dispatch}` (branche reduceWave + persiste + pousse les effets vers outbox) · `useEnvelope()` (+ lock) · `usePlans()` · `useVault()` · `useSubscription()` · `useSyncStatus()`.

## 9. SYNCHRONISATION OFFLINE-FIRST (récap normatif)

Écritures → SQLite + outbox (transaction unique) · flush : ouverture, foreground, timer 15 min, après action critique (protocole R) · batch ≤ 100, backoff 1-2-4…60 min, `tries ≥ 8` → quarantaine + Sentry · idempotence : ULID partout, check-ins par `(user,date)` (C6) · pull par curseur après chaque flush · le serveur REJOUE `reduceWave` et recalcule rebond/vagues : en cas d'écart client/serveur, le pull fait foi et l'UI se re-rend depuis SQLite mis à jour · l'audio du coffre s'uploade en tâche de fond wifi-only (backup), la lecture est toujours locale.

## 10. MONITORING & CONFIGURATIONS

**Sentry** (`apps/mobile/src/monitoring/sentry.ts`) : DSN env, `tracesSampleRate: 0.2`, `beforeSend` : suppression de TOUT champ texte libre, breadcrumbs réseau sans URL de presign, release = `app.lucide.ios@<version>+<build>`, sourcemaps uploadées en release CI. Alertes : crash-free < 99,5 % (page), erreur sync quarantaine > 10/h, échec cron.
**PostHog** (`analytics/posthog.ts`) : host EU, `capture` uniquement via wrapper typé (événements CDC §8 — enum fermé, propriété inconnue = erreur de compilation), `identify` par UUID interne (jamais e-mail), opt-in vérifié à chaque appel, file locale offline.
**Dashboards jour 1** : ⭐ retour post-écart < 72 h · J7/J30 · complétion check-in · SOS usage/issue · conversion essai (source : agrégats SQL server-side, indépendants de l'opt-in PostHog).
**Uptime** : healthcheck Edge (`/health`) + alerte cron manqué (n3-dispatch, weekly-batch).

## 11. PLAN DE SÉCURITÉ & RGPD OPÉRATIONNEL (calendrier)

Sécurité : revue crypto coffre (S3, pair + checklist libsodium) · suite RLS en CI dès S1 · scan dépendances (Renovate + audit CI) · pentest externe S14 · exercice incident S15 (kill-switch + procédure 72 h CNIL) · rotation des clés serveur documentée.
RGPD : consentements S2 (LUC-11) · DPIA complétée M3 (LUC-63, bloquant bêta) · registre des traitements M3 · export/suppression S12 (LUC-47/48) testés en staging · page sous-traitants publiée avant bêta · revue annuelle planifiée.

## 12. ORDRE D'IMPLÉMENTATION & DEFINITION OF DONE PAR SPRINT

> Backlog importable : `docs/backlog.csv` (63 tickets, estimations, sprints, DoD par ticket).

| Sprint | Contenu (tickets) | Definition of Done du sprint |
|---|---|---|
| S1 | LUC-01→07 | CI verte ; RLS testée ; `shared/rules` 100 % ; auth + gate démontrés sur device |
| S2 | LUC-08→12 | Chaos réseau sans perte ; DS lot 1-2 en Storybook ; opt-out analytics = 0 requête ; É01-03 navigables |
| S3 | LUC-13→17 | Triage local vérifié (proxy réseau : zéro octet) ; coffre chiffré relu ; trajectoire 2 variantes |
| S4 | LUC-18→21 | Onboarding complet → compte → draft synchronisé ; check-in < 30 s chrono ; É11 7 états |
| S5 | LUC-22→26 | Carte J1→J90 correcte (test fuseau) ; enveloppe verrouillée ; module SOS isolé (lint) ; courbe 60 fps |
| S6 | LUC-27→31 | **SOS recetté en mode avion + perf CI < 2 s + appels vérifiés** — jalon « serment » |
| S7 | LUC-32→33 | 12 transitions + 5 invariants verts ; protocole R < 2 min 30 (test utilisateur interne) |
| S8 | LUC-34→36 | Rebond exact (10 jeux) ; N3 : Marc oui / Claire non (seed) ; grep « jour 0 » en CI |
| S9 | LUC-37→39 | Phrases validées clinicienne ; weeklyReport : 20 fixtures OK |
| S10 | LUC-40→42 | Bilan 4 états ; cron idempotent ; preuves auto démontrées |
| S11 | LUC-43→45 | Sandbox StoreKit : essai/conversion/annulation/restauration ; gating gratuit audité ; plafond notifs testé |
| S12 | LUC-46→48 | Annulation 1 tap (revue) ; export reçu et lisible ; purge vérifiée SQL |
| S13 | LUC-49→52 | 3 e2e stables ×10 ; SOS conditions dégradées ≥ 90 % |
| S14 | LUC-53→55 | Audit a11y sans bloquant ; pentest sans critique/élevé ; budgets perf verts |
| S15 | LUC-56→58 | App Store checklist 100 % ; bêta live + dashboard ; exercice incident fait |
| S16 | LUC-59→60 | Zéro bloquant bêta ; **GO/NO-GO écrit (CEO + clinicienne)** |

## 13. CHECKLISTS FINALES

**Release (chaque build prod)** ☐ CI complète verte (dont grep BR-13 et perf SOS) ☐ migrations rejouées sur clone ☐ corpus tagué ☐ sourcemaps Sentry ☐ notes de version ☐ rollback plan (build précédent re-soumissible).
**App Store** ☐ lexique claims validé juridique ☐ 17+ ☐ privacy labels exacts (santé, zéro tracking) ☐ review notes : compte démo + triage expliqué + numéros de test ☐ Sign in with Apple ☐ screenshots sans promesse de résultat ☐ liens légaux actifs.
**TestFlight** ☐ 300-500 inscrites ☐ consentement bêta ☐ dashboard KPI live ☐ interviews hebdo planifiées ☐ procédure incident bêta (clinicienne < 24 h) ☐ critères de sortie affichés (⭐ ≥ 30 %, J30 ≥ 12 %, 0 incident, crash-free ≥ 99,5 %).
**Lancement public** ☐ critères bêta atteints (sinon on itère — le calendrier cède) ☐ GO écrit ☐ SEO (20 articles) + page « pas fait pour » en ligne ☐ support outillé (gabarits validés clinicienne) ☐ astreinte J1-J7 ☐ cohortes de lancement séparées (Dry January ≠ organique).

---
*Architecture FIGÉE. Toute modification = ADR + décision écrite CEO, à périmètre constant. Équipe : `git clone` → `pnpm install` → `supabase start && psql -f supabase/migrations/0001_init.sql -f supabase/seed/seed.sql` → `pnpm --filter mobile start`. Premier sprint : LUC-01 → LUC-07.*
