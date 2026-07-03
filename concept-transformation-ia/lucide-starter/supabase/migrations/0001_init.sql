-- LUCIDE V1 — migration 0001 (schéma final gelé)
-- Corrections de la revue CTO intégrées : push_tokens (C4), upsert check-in (C6).

create extension if not exists pgcrypto;

create type goal_mode   as enum ('stop','reduce');
create type user_status as enum ('active','deleting');
create type lapse_via   as enum ('checkin','button','silence');
create type sos_type    as enum ('craving','danger');
create type sos_outcome as enum ('passed','escalated','abandoned');

create table users (
  id         uuid primary key default gen_random_uuid(),
  auth_id    uuid unique not null,
  created_at timestamptz not null default now(),
  locale     text not null default 'fr-FR',
  status     user_status not null default 'active'
);

create table profiles (
  user_id         uuid primary key references users(id) on delete cascade,
  goal            goal_mode not null,
  reasons         text[] not null default '{}',
  triggers        text[] not null default '{}',
  risk_slots      jsonb  not null default '[]',
  ally_name       text,
  ally_phone_e164 text,
  journey_start   date not null,
  tz_at_start     text not null
);

create table envelopes (
  id         uuid primary key,
  user_id    uuid not null references users(id) on delete cascade,
  version    int  not null,
  rules      jsonb not null,
  active     boolean not null default true,
  created_at timestamptz not null default now(),
  unique(user_id, version)
);

create table checkins (
  id              uuid primary key,          -- ULID client
  user_id         uuid not null references users(id) on delete cascade,
  date            date not null,
  mood            smallint not null check (mood between 1 and 5),
  cravings        smallint not null check (cravings between 0 and 3),
  within_envelope boolean not null,
  drinks_count    smallint,
  backfilled      boolean not null default false,   -- J-1 max (S1)
  created_at      timestamptz not null default now(),
  updated_at      timestamptz not null default now(),
  unique(user_id, date)
  -- C6 : le sync serveur fait ON CONFLICT (user_id, date) DO UPDATE (l'édition du jour remplace).
);

create table sos_sessions (
  id           uuid primary key,
  user_id      uuid not null references users(id) on delete cascade,
  started_at   timestamptz not null,
  type         sos_type not null,
  duration_s   int,
  tools_used   text[] not null default '{}',
  outcome      sos_outcome,
  trigger_chip text,
  place_chip   text
);

create table lapse_waves (
  id           uuid primary key,
  user_id      uuid not null references users(id) on delete cascade,
  opened_at    timestamptz not null,
  detected_via lapse_via not null,
  closed_at    timestamptz,
  close_reason text check (close_reason in ('rebound','abandoned'))
);

create table lapse_events (
  id           uuid primary key,
  wave_id      uuid not null references lapse_waves(id) on delete cascade,
  user_id      uuid not null references users(id) on delete cascade,
  occurred_on  date not null,
  drinks_count smallint
);

create table lapse_context (
  wave_id          uuid primary key references lapse_waves(id) on delete cascade,
  user_id          uuid not null references users(id) on delete cascade,
  where_chip       text, who_chip text, emotion_chip text, helper_chip text,
  free_text_cipher bytea
);

create table rebounds (
  wave_id               uuid primary key references lapse_waves(id) on delete cascade,
  user_id               uuid not null references users(id) on delete cascade,
  protocol_completed_at timestamptz not null,
  rebound_hours         numeric(7,1) not null check (rebound_hours >= 0),
  plan_id               uuid
);

create table if_then_plans (
  id            uuid primary key,
  user_id       uuid not null references users(id) on delete cascade,
  trigger_label text not null,
  if_text       text not null,
  then_text     text not null,
  version       int not null default 1,
  active        boolean not null default true,
  source        text not null check (source in ('onboarding','weekly','post_lapse')),
  success_count int not null default 0,
  created_at    timestamptz not null default now()
);

create table vault_items (
  id              uuid primary key,
  user_id         uuid not null references users(id) on delete cascade,
  kind            text not null check (kind in ('audio','reason')),
  storage_key     text,
  duration_s      int,
  milestone_label text,
  recorded_at     timestamptz not null default now()
);

create table proofs (
  id          uuid primary key,
  user_id     uuid not null references users(id) on delete cascade,
  kind        text not null,
  label       text not null,
  occurred_at timestamptz not null,
  payload     jsonb not null default '{}'
);

create table weekly_reports (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references users(id) on delete cascade,
  week_start   date not null,
  payload      jsonb not null,
  generated_at timestamptz not null default now(),
  unique(user_id, week_start)
);

create table notif_prefs (
  user_id          uuid primary key references users(id) on delete cascade,
  daily_card_on    boolean not null default true,
  daily_card_time  time not null default '08:30',
  risk_reminder_on boolean not null default false,
  weekly_on        boolean not null default true
);

-- C4 : jetons push (N3 relance écart + N4 bilan sont des push serveur ; N1/N2/N5 sont locales).
create table push_tokens (
  user_id    uuid not null references users(id) on delete cascade,
  token      text not null,
  platform   text not null default 'ios',
  updated_at timestamptz not null default now(),
  primary key (user_id, token)
);

create table consents (
  user_id uuid not null references users(id) on delete cascade,
  kind    text not null check (kind in ('health_data','analytics')),
  granted boolean not null,
  ts      timestamptz not null default now(),
  primary key (user_id, kind, ts)
);

create table subscriptions (
  user_id    uuid primary key references users(id) on delete cascade,
  store      text not null default 'apple',
  product    text,
  status     text not null check (status in ('trial','active','cancelled','expired','free')),
  trial_end  timestamptz,
  renews_at  timestamptz,
  updated_at timestamptz not null default now()
);

create table deletion_requests (
  user_id      uuid primary key references users(id) on delete cascade,
  requested_at timestamptz not null default now(),
  purge_after  date not null
);

-- Index de service
create index idx_checkins_user_date   on checkins(user_id, date desc);
create index idx_waves_user_open      on lapse_waves(user_id) where closed_at is null;
create index idx_events_wave          on lapse_events(wave_id);
create index idx_plans_user_active    on if_then_plans(user_id) where active;
create index idx_reports_user_week    on weekly_reports(user_id, week_start desc);

-- RLS : activée partout ; une policy par table (propriété stricte).
do $$
declare t text;
begin
  foreach t in array array['profiles','envelopes','checkins','sos_sessions','lapse_waves',
    'lapse_events','lapse_context','rebounds','if_then_plans','vault_items','proofs',
    'weekly_reports','notif_prefs','push_tokens','consents','subscriptions','deletion_requests']
  loop
    execute format('alter table %I enable row level security', t);
    execute format(
      'create policy own_rows on %I for all
         using (user_id = (select id from users where auth_id = auth.uid()))
         with check (user_id = (select id from users where auth_id = auth.uid()))', t);
  end loop;
end $$;

alter table users enable row level security;
create policy own_user on users for all
  using (auth_id = auth.uid()) with check (auth_id = auth.uid());

-- NOTE : pas de table de triage. Le triage vit sur le device (décision C2) ;
-- seul outcome=green autorise la création de compte. Aucun score ne transite.
