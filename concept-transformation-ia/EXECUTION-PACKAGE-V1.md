# LUCIDE V1 — PACKAGE D'EXÉCUTION (niveau production)

> Document de travail final. Base : `CAHIER-DES-CHARGES-V1.md` (CDC). Ce package NE change pas le produit — il le rend constructible dès aujourd'hui. Les seules modifications sont les 5 décisions de la revue de cohérence (§0), toutes dans le sens de la simplification.

---

# 0. REVUE FINALE DE COHÉRENCE — RÉSULTAT

## 0.1 Verdict
Le CDC est cohérent de bout en bout. **Aucune dette de conception bloquante.** Trois ambiguïtés devaient être tranchées avant développement (elles auraient bloqué les sprints 2, 8 et 11) ; deux simplifications accélèrent la sortie sans toucher à la transformation utilisateur. Décisions ci-dessous — définitives.

## 0.2 Les 3 corrections critiques (auraient bloqué le développement)

**C1 — Mécanique d'essai vs BR-40 (bloquait le sprint 11).** Le CDC disait « fin d'essai sans conversion → bascule gratuite silencieuse », incompatible avec les offres d'essai Apple (auto-renouvelées). **Décision** : essai = offre d'introduction StoreKit 7 jours auto-renouvelée (standard), N5 à J6 (déjà spécifiée, honnête), annulation pendant l'essai → bascule gratuite sans perte de données. BR-40 est reformulée ainsi. Aucun dark pattern : N5 est envoyée systématiquement, l'annulation reste à 1 tap.

**C2 — Statut des utilisatrices orientées (rouge) (bloquait le sprint 2).** É05 arrive AVANT la création de compte (É09). **Décision** : les orientées-rouge n'ont **pas de compte** — l'app passe en « mode ressources » 100 % local (É05 + SOS-danger + numéros). Le résultat de triage est stocké localement uniquement. « Refaire le point » disponible à tout moment (re-triage complet). Aucune donnée d'une personne orientée ne part au serveur — c'est plus simple ET plus propre en RGPD.

**C3 — Garde de la relance N3 (bloquait le sprint 8).** Si l'écart est déclaré via check-in, l'utilisatrice est DANS l'app et le protocole R est proposé immédiatement. **Décision** : N3 ne part que si `protocol_r` n'est pas complété dans les 24 h suivant la détection/déclaration. Ajouté à la machine à états (§6).

## 0.3 Les 2 simplifications décidées (accélèrent sans rien enlever à la transformation)

**S1 — Saisie rétroactive limitée à J-1 (hier), plus J-3.** Le recalcul de vague sur 3 jours créait 4 edge cases pour un usage marginal. BR-30 devient : « check-in rétroactif limité à la veille ». Gain : ~3 points de complexité sur E1/C2.

**S2 — Widget écran verrouillé / App Intent reporté en V1.5.** V1 : widget écran d'accueil + Quick Action (appui long sur l'icône) → SOS en ≤ 2 gestes, ce qui satisfait l'exigence. Gain : ~4 points sur D6, zéro perte fonctionnelle réelle (le widget lock screen exige de toute façon le déverrouillage iOS).

**S3 (contenu, décision d'organisation)** — Le corpus n'a plus 2 variantes de cartes : **une seule carte par jour avec paragraphes conditionnels** `{{#stop}}…{{/stop}}` / `{{#reduce}}…{{/reduce}}`. Une seule chaîne de production, une seule validation clinicienne.

## 0.4 PÉRIMÈTRE V1 — GELÉ

Les 13 fonctionnalités du CDC §0.2, avec C1-C3 et S1-S3 appliquées. **Ce gel est contractuel pour l'équipe : tout ajout exige un retrait équivalent + décision écrite CEO.** Rien d'autre ne sera lu dans les documents antérieurs pendant le build : CDC + ce package = la seule vérité.

---

# 1. MONOREPO & ARCHITECTURE DES DOSSIERS

```
lucide/
├── apps/
│   └── mobile/                    # Expo (React Native, TypeScript strict)
│       ├── app/                   # expo-router (voir §9)
│       ├── src/
│       │   ├── components/        # les 16 composants DS (§8)
│       │   ├── features/
│       │   │   ├── onboarding/    # écrans É01-É10 + logique triage
│       │   │   ├── today/         # É11-É14, check-in, carte
│       │   │   ├── sos/           # É15 — MODULE ISOLÉ (voir règle ci-dessous)
│       │   │   ├── rebound/       # É16-É17 machine à états + protocole R
│       │   │   ├── plan/          # É18 enveloppe + si-alors + coffre
│       │   │   ├── report/        # É19 bilan hebdo (rendu)
│       │   │   └── settings/      # É20
│       │   ├── db/                # SQLite : schéma local, migrations, DAO
│       │   ├── sync/              # outbox, pull, idempotence (§10)
│       │   ├── content/           # corpus embarqué + manifest CDN
│       │   ├── crypto/            # libsodium, Keychain (§11)
│       │   ├── analytics/         # wrapper PostHog opt-in (liste fermée §CDC-8)
│       │   ├── notifications/     # planification locale + tokens
│       │   └── theme/             # tokens DS
│       └── e2e/                   # Detox : 3 flux critiques
├── packages/
│   ├── shared/                    # types TS (§4) + règles métier PURES (BR-xx)
│   │   └── src/{types,rules,phrases}/   # ← testé à 100 %, zéro dépendance RN
│   └── content-pipeline/          # MD+frontmatter → JSON corpus validé (CI)
├── supabase/
│   ├── migrations/                # DDL §2
│   ├── functions/                 # edge : triage, weekly-report, n3-cron, export, purge
│   └── seed/
├── docs/                          # CDC, ce package, ADRs, lexique claims interdit
└── .github/workflows/             # CI : types, tests BR, perf SOS, e2e, EAS build
```
**Règle d'architecture n°1** : `features/sos` n'importe RIEN de `sync/`, `analytics/` (événements en file locale uniquement) ni d'aucun module réseau. Vérifié par une règle ESLint `no-restricted-imports` en CI.
**Règle n°2** : toutes les règles BR-xx vivent dans `packages/shared/src/rules` en fonctions pures avec tests exhaustifs — l'UI ne contient aucune logique métier.

# 2. SCHÉMA DE BASE DE DONNÉES FINAL (PostgreSQL — migration 0001)

```sql
create type goal_mode as enum ('stop','reduce');
create type user_status as enum ('active','deleting');
create type lapse_via as enum ('checkin','button','silence');
create type sos_type as enum ('craving','danger');
create type sos_outcome as enum ('passed','escalated','abandoned');

create table users (
  id uuid primary key default gen_random_uuid(),
  auth_id uuid unique not null,            -- supabase auth
  created_at timestamptz not null default now(),
  locale text not null default 'fr-FR',
  status user_status not null default 'active'
);

create table profiles (
  user_id uuid primary key references users(id) on delete cascade,
  goal goal_mode not null,
  reasons text[] not null default '{}',
  triggers text[] not null default '{}',        -- slugs fermés (8 valeurs)
  risk_slots jsonb not null default '[]',       -- [{dow:5,slot:'evening'}]
  ally_name text, ally_phone_e164 text,         -- l'appel se fait côté device
  journey_start date not null,
  tz_at_start text not null                     -- fuseau figé (edge case CDC)
);

create table envelopes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  version int not null,
  rules jsonb not null,          -- {max_week:int, max_occasion:int, off_days:int[]} | {zero:true}
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique(user_id, version)
);

create table checkins (
  id uuid primary key,                          -- ULID client (idempotence)
  user_id uuid not null references users(id) on delete cascade,
  date date not null,
  mood smallint not null check (mood between 1 and 5),
  cravings smallint not null check (cravings between 0 and 3),
  within_envelope boolean not null,
  drinks_count smallint,
  backfilled boolean not null default false,    -- J-1 max (S1)
  created_at timestamptz not null default now(),
  unique(user_id, date)
);

create table sos_sessions (
  id uuid primary key,                          -- ULID client
  user_id uuid not null references users(id) on delete cascade,
  started_at timestamptz not null,
  type sos_type not null,
  duration_s int,
  tools_used text[] not null default '{}',      -- 'curve','voice','breath','ally','walk'
  outcome sos_outcome,
  trigger_chip text, place_chip text
);

create table lapse_waves (
  id uuid primary key,                          -- ULID client
  user_id uuid not null references users(id) on delete cascade,
  opened_at timestamptz not null,
  detected_via lapse_via not null,
  closed_at timestamptz                         -- = protocol_completed_at
);

create table lapse_events (
  id uuid primary key,
  wave_id uuid not null references lapse_waves(id) on delete cascade,
  occurred_on date not null,
  drinks_count smallint
);

create table lapse_context (
  wave_id uuid primary key references lapse_waves(id) on delete cascade,
  where_chip text, who_chip text, emotion_chip text, helper_chip text,
  free_text_cipher bytea                        -- chiffré client (§11)
);

create table rebounds (
  wave_id uuid primary key references lapse_waves(id) on delete cascade,
  user_id uuid not null references users(id) on delete cascade,
  protocol_completed_at timestamptz not null,
  rebound_hours numeric(7,1) not null,          -- calcul serveur (BR-14)
  plan_id uuid                                  -- si-alors modifié
);

create table if_then_plans (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  trigger_label text not null,
  if_text text not null, then_text text not null,
  version int not null default 1,
  active boolean not null default true,
  source text not null check (source in ('onboarding','weekly','post_lapse')),
  success_count int not null default 0,
  created_at timestamptz not null default now()
);

create table vault_items (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  kind text not null check (kind in ('audio','reason')),
  storage_key text,                             -- blob chiffré dans Storage
  duration_s int, milestone_label text,
  recorded_at timestamptz not null default now()
);

create table proofs (
  id uuid primary key,
  user_id uuid not null references users(id) on delete cascade,
  kind text not null,                           -- enum fermé côté shared/types
  label text not null,
  occurred_at timestamptz not null,
  payload jsonb not null default '{}'
);

create table weekly_reports (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references users(id) on delete cascade,
  week_start date not null,
  payload jsonb not null,                       -- blocs B1..B5 sérialisés
  generated_at timestamptz not null default now(),
  unique(user_id, week_start)
);

create table notif_prefs (
  user_id uuid primary key references users(id) on delete cascade,
  daily_card_on boolean not null default true,
  daily_card_time time not null default '08:30',
  risk_reminder_on boolean not null default false,
  weekly_on boolean not null default true
);

create table consents (
  user_id uuid not null references users(id) on delete cascade,
  kind text not null check (kind in ('health_data','analytics')),
  granted boolean not null, ts timestamptz not null default now(),
  primary key (user_id, kind, ts)
);

create table subscriptions (
  user_id uuid primary key references users(id) on delete cascade,
  store text not null default 'apple',
  product text, status text not null,           -- trial|active|cancelled|expired|free
  trial_end timestamptz, renews_at timestamptz,
  updated_at timestamptz not null default now()
);

create table deletion_requests (
  user_id uuid primary key references users(id) on delete cascade,
  requested_at timestamptz not null default now(),
  purge_after date not null                     -- +30 j
);

-- RLS : politique identique sur TOUTES les tables
alter table <chaque table> enable row level security;
create policy own_rows on <chaque table>
  using (user_id = (select id from users where auth_id = auth.uid()));
-- (users : using auth_id = auth.uid())
```
Notes : pas de table `triage_results` serveur (décision C2 : le triage vit sur le device ; seul `outcome=green` permet la création de compte, le score n'est jamais transmis). `content_cards` n'est pas en BDD : corpus embarqué + manifest CDN versionné.

# 3. CONTRATS API (Edge Functions + PostgREST — préfixe /v1, auth Bearer Supabase)

```
POST /v1/sync/push
  Body: { checkins: Checkin[], sosSessions: SosSession[], lapseWaves: LapseWave[],
          lapseEvents: LapseEvent[], lapseContexts: LapseContext[],
          protocolCompletions: {waveId, completedAt, planChange?}[],
          plans: IfThenPlan[], proofs: Proof[] }        // ids = ULID client
  200: { accepted: string[], rejected: {id, reason}[] } // upsert idempotent par id
  Règles serveur : recalcul rebound_hours (BR-14), groupage de vague (BR-12),
                   validation enveloppe active, filtre BR-03 sur free_text refusé côté client déjà.

GET  /v1/sync/pull?since=<cursor>
  200: { envelopes, plans, proofs, weeklyReports, subscriptions, cursor }

POST /v1/envelopes            { rules } → 201 {envelope} | 409 LOCKED (BR-11 : hebdo / 24 h post-écart)
GET  /v1/weekly-report?week=YYYY-MM-DD → 200 {payload}   (génère si absent, déterministe)
POST /v1/vault/presign        { kind, contentLength } → { uploadUrl, storageKey } (15 min)
GET  /v1/vault/presign/:id    → { downloadUrl } (60 s)
POST /v1/export               → 202 { jobId }   (mail avec lien signé < 48 h)
POST /v1/delete-account       → 202             (deletion_requests, purge cron)
GET  /v1/content/manifest     → { version, cards: [{slug, hash, url}] }  (CDN public signé)

Webhook POST /v1/rc-webhook   (RevenueCat → subscriptions)
CRON  weekly-report-batch     dim. 17:55 Europe/Paris
CRON  n3-dispatch             horaire : vagues ouvertes à +24 h ±2 h, fenêtre 10-20 h locale,
                              garde C3 (protocole non complété), 1 envoi max par vague
CRON  purge                   quotidien : deletion_requests échues + inactifs 24 mois (après e-mail)
Erreurs : enveloppe JSON {code, message} — codes fermés : AUTH, LOCKED, VALIDATION, CONFLICT, RATE_LIMITED.
```

# 4. TYPES TYPESCRIPT (packages/shared/src/types — extrait normatif)

```ts
export type GoalMode = 'stop' | 'reduce';
export type EnvelopeRules = { zero: true } | { maxWeek: number; maxOccasion: number; offDays: Weekday[] };
export type TriggerSlug = 'stress'|'social'|'boredom'|'evening_habit'|'conflict'|'loneliness'|'fatigue'|'celebration';
export type RiskSlot = { dow: 1|2|3|4|5|6|7; slot: 'noon'|'evening'|'night' };

export interface Checkin { id: ULID; date: ISODate; mood: 1|2|3|4|5; cravings: 0|1|2|3;
  withinEnvelope: boolean; drinksCount?: number; backfilled: boolean; }

export type SosTool = 'curve'|'voice'|'breath'|'ally'|'walk';
export interface SosSession { id: ULID; startedAt: ISODateTime; type: 'craving'|'danger';
  durationS?: number; toolsUsed: SosTool[]; outcome?: 'passed'|'escalated'|'abandoned';
  triggerChip?: TriggerSlug; placeChip?: PlaceSlug; }

export type WaveState = 'IN_ENVELOPE'|'WAVE_OPEN'|'PROTOCOL_PENDING'|'PROTOCOL_IN_PROGRESS'
                       |'REBOUND_RECORDED'|'SOFT_RESUME';
export interface LapseWave { id: ULID; openedAt: ISODateTime; detectedVia: 'checkin'|'button'|'silence';
  closedAt?: ISODateTime; }

export interface Rebound { waveId: ULID; protocolCompletedAt: ISODateTime; reboundHours: number; planId?: ULID; }

export interface IfThenPlan { id: ULID; triggerLabel: string; ifText: string; thenText: string;
  version: number; active: boolean; source: 'onboarding'|'weekly'|'post_lapse'; successCount: number; }

export interface ContentCard { slug: string; dayIndex: number; arc: 'crossing'|'rebuild'|'plateau'|'consolidate';
  title: string; bodyMd: string;                 // avec blocs conditionnels {{#stop}}/{{#reduce}}
  evidence: 'green'|'yellow'|'white'; sourceRef: SourceRef; notSayingMd: string; action?: string; version: number; }

export interface WeeklyReportPayload { b1: {titleKey: string; stats: [number,number,number]};
  b2: TriState[]; b3?: {factKey: string; slots: Record<string,string>};
  b4: {slots: RiskSlot[]; plansToValidate: ULID[]}; b5?: ProofRef; dataSufficient: boolean; }

// Règles pures (signatures) — implémentées et testées dans shared/rules :
export declare function auditCOutcome(a: AuditAnswers): 'green'|'red';               // BR-01/02
export declare function isLapse(e: EnvelopeRules, c: Checkin): boolean;              // BR-10
export declare function assignWave(existing: LapseWave[], at: ISODateTime): ULID|'new'; // BR-12
export declare function reboundHours(w: LapseWave, completedAt: ISODateTime): number;   // BR-14
export declare function envelopeLock(last: Envelope, lastLapse?: ISODateTime): Lock;    // BR-11
export declare function crisisPatternMatch(text: string): boolean;                      // BR-03 (liste locale)
export declare function weeklyReport(data: WeekData): WeeklyReportPayload;              // déterministe
```

# 5. DIAGRAMMES DE FLUX

```
ONBOARDING
É01 → É02 → É03 → É04 ──rouge──► É05 [mode ressources local, pas de compte, fin]
                    └─vert──► É06 → É07 → É08 → É09(compte+notifs) → É10(essai|gratuit) → É11

BOUCLE QUOTIDIENNE
É11 ─ tap check-in ─► É12 ── withinEnvelope ──► merci (10 s) ─► É11
                        └── au-dessus ─► [WAVE] ─► É16 proposé (maintenant / plus tard)
É11 ─ tap carte ─► É13 ─ source ─► É14

SOS (depuis partout : bouton global, widget home, quick action)
É15-A ── envie ─► É15-B (courbe+outils) ─► É15-C (sortie+capture) ─► retour contexte
     └── danger ─► É15-D (ressources, terminus volontaire)

ÉCART → REBOND (détail §6)
[WAVE ouverte] ─ protocole maintenant ─► É16 (3 étapes) ─► rebond affiché (É17)
             └─ plus tard ─► timer 24 h ─► N3 (si non complété) ─► É16
SILENCE ≥ 48 h ─► à la réouverture : É11 bandeau reprise ─► « pas vraiment » ─► É16
SILENCE > 7 j ─► reprise douce (3 écrans) ─► É11
```

# 6. MACHINE À ÉTATS — SYSTÈME ÉCART→REBOND (normative, implémentée dans shared/rules)

**États** : `IN_ENVELOPE` · `WAVE_OPEN` · `PROTOCOL_PENDING` · `PROTOCOL_IN_PROGRESS` · `REBOUND_RECORDED` (transitoire → IN_ENVELOPE) · `SOFT_RESUME`.

| # | De | Événement | Garde | Vers | Effets |
|---|---|---|---|---|---|
| T1 | IN_ENVELOPE | `LAPSE_DECLARED(via, date)` | — | WAVE_OPEN | crée wave+event ; verrou enveloppe 24 h (BR-11) ; propose É16 |
| T2 | WAVE_OPEN | `LAPSE_DECLARED` | Δ ≤ 72 h depuis dernier event (BR-12) | WAVE_OPEN | ajoute event à LA MÊME vague |
| T3 | WAVE_OPEN | `LAPSE_DECLARED` | Δ > 72 h | WAVE_OPEN(nouvelle) | clôt l'ancienne SANS rebond (abandoned), ouvre nouvelle |
| T4 | WAVE_OPEN | `PROTOCOL_DEFERRED` | — | PROTOCOL_PENDING | arme timer N3 : +24 h ±2 h, fenêtre 10-20 h locale |
| T5 | PROTOCOL_PENDING | `TIMER_N3` | protocole non complété (C3) ; 1ᵉʳ envoi de la vague | PROTOCOL_PENDING | envoie N3 (UNE fois, BR-20) |
| T6 | WAVE_OPEN ∥ PROTOCOL_PENDING | `PROTOCOL_STARTED` | — | PROTOCOL_IN_PROGRESS | — |
| T7 | PROTOCOL_IN_PROGRESS | `PROTOCOL_ABANDONED` (app fermée > 30 min à l'étape 1-2) | — | PROTOCOL_PENDING | conserve les réponses saisies |
| T8 | PROTOCOL_IN_PROGRESS | `PROTOCOL_COMPLETED(planChange?)` | 3 étapes validées | REBOUND_RECORDED | `rebound_hours = completedAt − max(event.occurred_on 20:00 locale)` ; +1 preuve si record ; version++ du si-alors si modifié |
| T9 | REBOUND_RECORDED | (auto) | — | IN_ENVELOPE | affiche compteurs É17 |
| T10 | PROTOCOL_PENDING | `SILENCE > 7 j` | — | SOFT_RESUME | à la réouverture : flux reprise douce (pas de rétrospective) |
| T11 | SOFT_RESUME | `RESUME(keep/adjust)` | ajustement = nouvelle version d'enveloppe (verrou BR-11 levé pour CE cas, à froid) | IN_ENVELOPE | vague clôturée `abandoned` ; compteur « jours dans l'enveloppe » reprend, cumul intact (BR-13) |
| T12 | IN_ENVELOPE | `SILENCE ≥ 48 h` (check-in quotidien habituel) | pas de vague ouverte | IN_ENVELOPE | à la réouverture : bandeau « Tout va comme tu veux ? » (BR-21) — « pas vraiment » → T1(via=silence) |

**Invariants testés** : jamais deux vagues ouvertes · jamais deux N3 par vague · `rebound_hours > 0` · le cumul « jours dans l'enveloppe » ne décroît jamais · aucune chaîne « jour 0 » dans les rendus (test de snapshot sur les 12 états d'affichage).

# 7. SPÉCIFICATIONS TECHNIQUES DES ÉCRANS (compléments techniques au CDC §3 — le contenu/les textes sont dans le CDC)

| Écran | Composants (§8) | Données (local) | Analytics | Points techniques |
|---|---|---|---|---|
| É01 | Bouton, — | — | onboarding_started | préchargement corpus en tâche de fond |
| É02-É03 | Chip, SliderVerres, Stepper | draft onboarding (MMKV) | goal_set | AUDIT-C calcul local (shared/rules) |
| É04 | Stepper, Chip | draft local UNIQUEMENT | triage_completed{outcome} | aucune réponse ne quitte le device (C2) |
| É05 | Bouton, RangéeRessource | flag local `oriented` | orientation_shown/cta | tap-to-call `tel:` ; app reste en mode ressources |
| É06 | Chip, GrilleCreneaux | draft | — | min 1 trigger (validation) |
| É07 | EnregistreurVocal | fichier chiffré local | vault_recorded/skipped | AVAudioSession, 90 s cap, sodium seal avant écriture |
| É08 | TimelineVerticale, BadgePreuve | rendu depuis corpus | trajectory_viewed | template stop/reduce (S3) |
| É09 | Bouton, Toggle | création compte → sync du draft | account_created | Sign in with Apple + OTP mail ; envoi profil+enveloppe+coffre (upload différé) |
| É10 | Paywall (RevenueCat UI custom) | — | trial_started 등 | offres : annuel présélectionné ; C1 appliquée |
| É11 | CarteContenu, RangéeCompteur, BandeauStatut, BoutonSOS | requêtes SQLite | screen_today | sélecteur d'état pur (fonction testée) : 7 états CDC |
| É12 | Sheet, VisagesHumeur, Stepper | insert checkin (outbox) | checkin_completed | S1 : backfill J-1 max ; « au-dessus » → dispatch T1 |
| É13-É14 | CarteContenu, Sheet | corpus + card_reads | card_opened/read | rendu MD conditionnel ; cartes passées en FlatList inversée |
| É15 | CourbeEnvie, CercleRespiration, Bouton XL | AUCUNE dépendance réseau/sync | file locale, flush différé | Reanimated ; bundle isolé ; cache audio coffre ; perf CI < 2 s |
| É16 | Stepper 3 étapes, Chip | wave + context (outbox) | protocol_r_* | machine à états §6 ; filtre BR-03 sur champ libre AVANT stockage |
| É17 | RangéeCompteur, RangéePreuve | agrégats SQLite (vues) | screen_landmarks | agrégats en SQL local (pas en JS) |
| É18 | ListeSiAlors, RésuméEnveloppe | plans + envelopes | plan_* | verrous BR-11 rendus par shared/rules (source unique) |
| É19 | BlocsBilan B1-B5 | weekly_reports (pull) | weekly_report_opened | rendu du payload ; fallback local si offline (payload précédent) |
| É20 | Listes réglages | prefs, subscription | export/deletion | annulation → `showManageSubscriptions()` StoreKit direct |

# 8. COMPOSANTS REACT NATIVE (bibliothèque fermée — props normatives)

```
Bouton({variant:'primary'|'secondary'|'ghost', size:'md'|'xl', label, onPress, disabled})
Chip({label, selected, onToggle})                     GrilleCreneaux({value:RiskSlot[], onChange})
SliderVerres({value, onChange, max:15})               VisagesHumeur({value:1..5, onChange})
Stepper({steps, current, children})                   Sheet({visible, onClose, children})
CarteContenu({title, excerpt, badge:Evidence, locked, onPress})
BadgePreuve({level:Evidence, compact})                TimelineVerticale({items:{when,text,badge}[]})
CourbeEnvie({elapsedS, onPhaseChange, reducedMotion}) // spec anim : montée 0→90 s, plateau 90→240 s, décrue
CercleRespiration({pattern:{in:4,hold:0,out:8}})      EnregistreurVocal({maxS:90, onSaved(cipherPath)})
RangéeCompteur({label, value, sub})                   RangéePreuve({proof})
BandeauStatut({kind:'offline'|'free'|'resume'})       BoutonSOS()  // flottant global, zone 60 pt
```
Tous : Dynamic Type, VoiceOver label obligatoire (lint custom), thème clair/sombre/SOS via tokens.

# 9. PLAN DE NAVIGATION (expo-router)

```
app/
  _layout.tsx            # gate : oriented? → (resources) ; !account? → (onboarding) ; sinon (tabs)
  (onboarding)/ welcome | goal | consumption | safety | orientation | triggers | vault | trajectory | account | paywall
  (resources)/index      # mode ressources (C2) + sos-danger
  (tabs)/_layout.tsx     # TabBar 2 onglets + BoutonSOS overlay
    today/index          # É11
    today/card/[day]     # É13 (+ sheet source)
    today/report         # É19
    landmarks/index      # É17
    landmarks/plan       # É18
    settings/…           # É20 (poussé depuis landmarks)
  sos.tsx                # É15 — modal plein écran, présentation immédiate, states A-D internes
  return/[waveId].tsx    # É16 — modal 3 étapes
Deep links : lucide://sos (widget/quick action) · lucide://report · lucide://return/:waveId (N3)
```

# 10. OFFLINE-FIRST & SYNCHRONISATION

- **Source de vérité locale** (SQLite) : checkins, sos_sessions, vagues/contexts/rebonds, plans, proofs, prefs, corpus, coffre. **Source de vérité serveur** : envelopes (verrous), weekly_reports, subscriptions.
- **Outbox pattern** : chaque mutation locale = ligne `outbox(id ULID, kind, payload, created_at, tries)`. Flush : à l'ouverture, au foreground, toutes les 15 min si file non vide ; batch ≤ 100 ; backoff expo (1-2-4-… max 1 h). Idempotence serveur par ULID (upsert). Réponse `rejected` → quarantaine + Sentry (jamais de perte silencieuse).
- **Pull** : cursor `updated_at` par table serveur, à l'ouverture + post-flush.
- **Conflits** : LWW par horodatage device pour les contenus utilisateur ; les règles serveur (rebond, vague, verrou enveloppe) PRIMENT — le client recalcule l'affichage depuis la réponse.
- **Horloge** : le jour de parcours = date locale avec `tz_at_start` figé ; les timers (N3) sont serveur.

# 11. SÉCURITÉ (implémentation)

Clé maître par utilisateur générée on-device (libsodium) → Keychain (kSecAttrAccessibleAfterFirstUnlock) · coffre audio + texte libre : `secretbox` avant toute écriture (SQLite ou upload) ; le serveur ne stocke que des blobs · TLS pinning désactivé (App Store friction) mais ATS strict · RLS testée par suite automatisée multi-comptes en CI · pas d'ID santé dans les payloads push (contenu générique, données chargées à l'ouverture) · Sentry : `beforeSend` strip tout champ texte · captures d'écran multitâche masquées sur É04/É07/É16 · dépendances : `npm audit` + Renovate + revue des nouveaux packages · secrets via EAS/Supabase vault · runbook incident : détection → kill-switch flag → correctif → notification CNIL ≤ 72 h si données concernées.

# 12. RGPD (implémentation)

Consentements : santé (bloquant, à É09) + analytics (non bloquant) — table `consents`, horodatés, révocables dans É20 · analytics produit = PostHog EU opt-in ; **métriques de service** (KPI agrégés) = requêtes SQL agrégées sans identifiant, base légale intérêt légitime, documentée DPIA · triage : jamais transmis (C2) · export : job serveur → ZIP (JSON + audio déchiffrable via clé re-wrappée pour l'export, flux documenté) → lien signé 7 j · suppression : soft-delete immédiat (déconnexion, invisibilité) → purge ≤ 30 j (cron) y compris Storage ; backups : rotation 35 j documentée · rétention inactifs : e-mail à 22 mois, purge à 24 · sous-traitants listés dans É20 et sur le site · DPIA : gabarit complété AVANT la bêta (jalon M3) · registre des traitements dans `docs/`.

# 13. BACKLOG — TICKETS IMPORTABLES (Linear/Jira ; colonnes : ID · Sprint · Titre · Pts · Réf.)

```
S1  LUC-01  Monorepo + CI (types, lint, tests, EAS)                       5  §1
S1  LUC-02  Design tokens + thèmes (clair/sombre/SOS)                     3  §8
S1  LUC-03  SQLite : schéma local + migrations + DAO                      5  §10
S1  LUC-04  shared/rules : BR-01/02 (AUDIT-C) + tests 12 profils          3  CDC-BR
S1  LUC-05  shared/rules : BR-10/11/12/13/14 + tests exhaustifs           5  §6
S1  LUC-06  Supabase : migration 0001 + RLS + tests multi-comptes         5  §2
S1  LUC-07  Auth Apple + OTP mail + gate navigation                       5  §9
S2  LUC-08  Outbox + push/pull + idempotence (tests chaos réseau)         8  §10
S2  LUC-09  Composants DS lot 1 (Bouton, Chip, Sheet, Stepper, Visages)   5  §8
S2  LUC-10  Composants DS lot 2 (Slider, Grille, Timeline, Badge, Cartes) 5  §8
S2  LUC-11  Consentements + wrapper analytics opt-in (liste fermée)       3  §12
S2  LUC-12  É01-É03 (accueil, objectif, conso)                            5  É01-03
S3  LUC-13  É04 triage local + branche rouge (C2)                         5  É04
S3  LUC-14  É05 orientation + mode ressources + (resources) route         3  É05
S3  LUC-15  É06 déclencheurs + créneaux                                   3  É06
S3  LUC-16  EnregistreurVocal + crypto coffre (sodium+Keychain)           8  É07 §11
S3  LUC-17  É08 trajectoire 72 h (templates stop/reduce)                  3  É08
S4  LUC-18  É09 compte + notifs prefs + sync du draft d'onboarding        5  É09
S4  LUC-19  content-pipeline : MD→JSON + validation + manifest CDN        5  §1 S3
S4  LUC-20  É11 Aujourd'hui : sélecteur d'états + 4 zones                 8  É11
S4  LUC-21  É12 check-in + BR-30(S1) + dispatch écart                     5  É12
S5  LUC-22  É13 carte du jour + rendu MD conditionnel + cartes passées    5  É13
S5  LUC-23  É14 fiche source (sheet)                                      2  É14
S5  LUC-24  É18 enveloppe : création/édition + verrous (shared/rules)     5  É18
S5  LUC-25  SOS module isolé : routing A-D + règle ESLint no-network      3  É15
S5  LUC-26  CourbeEnvie (Reanimated + reduced motion)                     5  É15-B
S6  LUC-27  SOS-B outils : respiration, lecture coffre, appel allié       5  É15-B
S6  LUC-28  SOS-C sortie + capture + médiane perso (SQL local)            5  É15-C
S6  LUC-29  SOS-D danger + tap-to-call vérifiés                           2  É15-D
S6  LUC-30  Widget home + quick action → lucide://sos (S2 appliquée)      3  §9
S6  LUC-31  Perf CI : ouverture SOS < 2 s (test automatisé)               3  §18-CDC
S7  LUC-32  Machine à états §6 (shared/rules) + tests des 12 transitions  8  §6
S7  LUC-33  É16 protocole R (3 étapes, textes 🔒, filtre BR-03)           8  É16
S8  LUC-34  Rebond : calculs serveur + affichages É17 (grep « jour 0 »)   5  É17
S8  LUC-35  N3 cron + garde C3 + deep link return/:waveId                 5  §3
S8  LUC-36  Reprise douce (T10-T11) + bandeau 48 h (T12)                  5  §6
S9  LUC-37  É18 si-alors : CRUD + 8 max + sources                         5  É18
S9  LUC-38  Banques de phrases (rédaction+intégration, avec clinicienne)  5  §CDC-19-F2
S9  LUC-39  weeklyReport() déterministe + tests 20 semaines               8  §4
S10 LUC-40  É19 rendu B1-B5 + états (sem.1, écart, données insuffisantes) 5  É19
S10 LUC-41  CRON weekly + N4 + carte bilan dans É11                       3  §3
S10 LUC-42  Preuves : génération auto (kinds fermés) + rangée É17         3  É17
S11 LUC-43  RevenueCat + paywall É10 + C1 (essai intro offer)             8  É10
S11 LUC-44  Gating gratuit BR-32 (SOS/check-in/rebond toujours ouverts)   5  CDC
S11 LUC-45  N1/N2/N5 + plafond BR-33 + fenêtres silence                   5  §CDC-7
S12 LUC-46  É20 réglages + annulation StoreKit + charte                   5  É20
S12 LUC-47  Export RGPD (job + ZIP + mail lien signé)                     5  §12
S12 LUC-48  Suppression compte + purge cron + tests staging               5  §12
S13 LUC-49  e2e Detox flux 1 : onboarding-triage (2 branches)             5  §CDC-H1
S13 LUC-50  e2e Detox flux 2 : SOS complet offline (mode avion)           5  §CDC-H1
S13 LUC-51  e2e Detox flux 3 : écart→protocole→rebond                     5  §CDC-H1
S13 LUC-52  Test SOS « conditions dégradées » (protocole utilisateur)     3  CDC-20
S14 LUC-53  Audit accessibilité (VoiceOver 20 écrans, DT XXL) + fixes     8  §CDC-17
S14 LUC-54  Pentest externe + corrections                                 8  §CDC-15
S14 LUC-55  Optimisation démarrage à froid < 2 s + bundle < 80 Mo         5  §CDC-18
S15 LUC-56  Fiche App Store + review notes santé + screenshots            3  §16
S15 LUC-57  TestFlight : cohortes bêta + dashboard KPI (agrégats SQL)     5  §12
S15 LUC-58  Runbook incidents + kill-switch flags + astreinte             3  §11
S16 LUC-59  Corrections bêta (buffer dédié)                              13  —
S16 LUC-60  GO/NO-GO lancement (critères CDC M8) + release prod           2  §16
Transverse (dès S1, en continu) :
    LUC-61  Corpus : 90 cartes rédigées+validées (jalons 20/M2, 45/M3, 90/M4)  — contenu
    LUC-62  Lexique claims interdits + revue juridique textes             — juridique
    LUC-63  DPIA complétée avant bêta                                     — juridique
```
Total build : ~300 pts ≈ 16 sprints × ~20 pts/sprint réalistes pour 2 devs mobile + 1 backend (le backend porte LUC-06/08/35/39/41/43/47/48 en parallèle).

# 14. ORDRE EXACT DE DÉVELOPPEMENT (résumé exécutif)

S1-S2 socle (monorepo, règles pures, SQLite, sync, DS, auth) → S3-S4 onboarding + boucle (triage, coffre, Aujourd'hui, check-in) → S5-S6 **SOS** (module isolé, perf CI) → S7-S8 **écart→rebond** (machine à états, protocole, N3) → S9-S10 plans + bilan déterministe → S11-S12 monétisation + RGPD → S13-S14 qualité (e2e, a11y, pentest) → S15-S16 bêta + GO. Le corpus court en parallèle dès S1 (jalon bloquant M3 = 45 cartes).

# 15. CRITÈRES DE RECETTE (par flux — un flux est « recetté » si 100 % vert)

**Onboarding** : < 6 min réel (médiane bêta) · branche rouge inévitable sur les 8 combinaisons limites · aucune donnée réseau avant É09 · coffre chiffré illisible hors app · trajectoire correcte par mode.
**Boucle** : check-in 3 taps ≤ 30 s chrono · carte du jour correcte au changement de fuseau · offline complet (mode avion 7 jours simulés).
**SOS** : ouverture < 2 s (CI + device réel) · 100 % fonctionnel en avion · VoiceOver complet · test « conditions dégradées » ≥ 90 % de réussite de tâche · appels réels vérifiés (3114/15/112 en préprod avec numéros de test).
**Écart→rebond** : les 12 transitions §6 démontrées · « jour 0 » absent (grep + revue) · N3 : une seule, bonne fenêtre, garde C3 · rebond exact sur 10 jeux de données.
**Bilan** : 20 semaines de fixtures → 20 bilans corrects · état données insuffisantes.
**Monétisation** : essai → conversion / annulation → gratuit sans perte · restauration · gating BR-32.
**RGPD** : export complet reçu et lisible · suppression purgée (vérif SQL staging) · consentement analytics refusé = 0 événement réseau.

# 16. CHECKLISTS

**Mise en production (technique)**
☐ CI verte (types, tests shared/rules 100 %, e2e ×3, perf SOS) ☐ RLS suite multi-comptes ☐ migrations rejouées sur clone prod ☐ kill-switch flags testés ☐ Sentry scrubbing vérifié (payload témoin) ☐ backups + restauration testée ☐ crons armés (weekly, n3, purge) ☐ manifest CDN signé ☐ runbook + astreinte nommée ☐ version corpus figée et taguée.

**App Store**
☐ fiche validée juridique (lexique claims — zéro vocabulaire médical) ☐ catégorie Santé et forme ☐ App Privacy labels exacts (données santé, pas de tracking) ☐ notes de review : compte démo + explication triage/orientation + numéros d'urgence factices pour test ☐ âge 17+ (références alcool) ☐ screenshots conformes (pas de promesse de résultat) ☐ Sign in with Apple présent ☐ liens CGU/confidentialité actifs ☐ soumission test M5 déjà passée (leçon intégrée).

**Bêta TestFlight**
☐ 300-500 inscrites depuis waitlist/communautés ☐ consentement bêta explicite (données réelles) ☐ dashboard KPI live (⭐ retour post-écart, J7/J30, check-in, SOS) ☐ canal de retour in-app + interviews hebdo (10/sem) ☐ protocole incident bêta (contact clinicienne < 24 h) ☐ critères de sortie affichés : ⭐ ≥ 30 %, J30 ≥ 12 %, zéro incident sécurité, crash-free ≥ 99,5 %.

**Lancement public**
☐ critères bêta atteints (sinon : on itère, le calendrier cède) ☐ GO écrit CEO + clinicienne ☐ 20 articles SEO publiés ☐ page « Ce pour quoi Lucide n'est pas fait » en ligne ☐ dossier presse (angle : l'app qui refuse le « jour 0 ») ☐ support : gabarits de réponse validés clinicienne + procédure d'escalade ☐ surveillance J1-J7 renforcée (astreinte, revue des avis, hotfix < 24 h) ☐ mesure des cohortes de lancement séparée (Dry January ≠ organique).

---
*Périmètre gelé (§0.4). Équipe : ouvrez LUC-01 à LUC-07 lundi matin ; le corpus (LUC-61) démarre le même jour. Toute question d'interprétation se tranche par : CDC → ce package → décision écrite CEO. Rien d'autre.*
