# Lucide — Starter technique V1

Starter du monorepo Lucide : schéma de base, contrats API, types et règles métier de référence, CI, backlog importable. **L'architecture est figée** — voir `docs/TECH-DELIVERY.md` (document maître) et, en amont, `../CAHIER-DES-CHARGES-V1.md` + `../EXECUTION-PACKAGE-V1.md`.

## Contenu

| Chemin | Rôle |
|---|---|
| `docs/TECH-DELIVERY.md` | **Document maître** : revue de cohérence (corrections C4-C6), arborescence cible, diagrammes, SQLite local, conventions, tests, hooks/stores, sync, monitoring, DoD par sprint, checklists |
| `docs/backlog.csv` | 63 tickets importables (Linear/Jira) : ID, titre, estimation, sprint, epic, description/DoD |
| `supabase/migrations/0001_init.sql` | DDL PostgreSQL final (RLS incluse) |
| `supabase/seed/seed.sql` | Seed de développement (2 personas : Claire J12 avec rebond, Marc vague ouverte pour tester N3) |
| `openapi.yaml` | Contrats API complets |
| `packages/shared/src/types.ts` | Types de domaine (source de vérité) |
| `packages/shared/src/rules/rules.ts` | Règles métier pures (triage, enveloppe, rebond, crise) |
| `packages/shared/src/rules/stateMachine.ts` | Machine à états écart→rebond (reducer normatif T1-T12) |
| `.github/workflows/ci.yml` | CI : typecheck, lint, règles 100 %, tests SQL/RLS, e2e+perf, build EAS |
| `.env.example` | Variables d'environnement (client / serveur / CI) |

## Démarrage (équipe)

```bash
# Prérequis : Node 20, pnpm (corepack), Supabase CLI, Xcode 15+
git clone <repo> && cd lucide
pnpm install
cp .env.example .env                      # remplir les valeurs de dev
supabase start                            # stack locale
psql "$SUPABASE_DB_URL" -f supabase/migrations/0001_init.sql
psql "$SUPABASE_DB_URL" -f supabase/seed/seed.sql
pnpm --filter @lucide/shared test        # les règles doivent être 100 % vertes
pnpm --filter mobile start               # Expo
```

## Règles d'or (rappel — détails dans TECH-DELIVERY)
1. **Le module SOS n'importe rien de réseau** (lint bloquant).
2. **Toute logique métier vit dans `@lucide/shared`** — l'UI appelle, n'implémente pas.
3. **« Jour 0 » est une chaîne interdite** — grep en CI (BR-13).
4. Le triage **ne quitte jamais le device** (C2).
5. Périmètre constant : tout ajout = retrait équivalent + décision écrite CEO.

Premier sprint : tickets **LUC-01 → LUC-07** (`docs/backlog.csv`). Le corpus (LUC-61) et le juridique (LUC-62/63) démarrent le même jour.
