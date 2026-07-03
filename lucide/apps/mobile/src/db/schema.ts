/** DDL SQLite locale (§TECH-DELIVERY 4). Version 1. */
export const LOCAL_SCHEMA = `
create table if not exists kv (k text primary key, v text);
create table if not exists checkins (
  id text primary key, date text unique not null, mood integer not null,
  cravings integer not null, within_envelope integer not null,
  drinks_count integer, backfilled integer not null default 0, created_at text not null);
create table if not exists sos_sessions (
  id text primary key, started_at text not null, type text not null,
  duration_s integer, tools_used text not null default '[]', outcome text,
  trigger_chip text, place_chip text);
create table if not exists lapse_waves (
  id text primary key, opened_at text not null, detected_via text not null,
  closed_at text, close_reason text);
create table if not exists lapse_events (
  id text primary key, wave_id text not null, occurred_on text not null, drinks_count integer);
create table if not exists lapse_context (
  wave_id text primary key, where_chip text, who_chip text, emotion_chip text,
  helper_chip text, free_text text);
create table if not exists rebounds (
  wave_id text primary key, protocol_completed_at text not null,
  rebound_hours real not null, plan_id text);
create table if not exists if_then_plans (
  id text primary key, trigger_label text not null, if_text text not null,
  then_text text not null, version integer not null default 1,
  active integer not null default 1, source text not null,
  success_count integer not null default 0, created_at text not null);
create table if not exists proofs (
  id text primary key, kind text not null, label text not null,
  occurred_at text not null, payload text not null default '{}');
create table if not exists outbox (
  id text primary key, kind text not null, payload text not null,
  created_at text not null, tries integer not null default 0, quarantined integer not null default 0);
create table if not exists wave_ctx (
  id integer primary key check (id=1), state text not null, wave_id text,
  last_event_at text, last_occurred_on text, n3_sent integer not null default 0,
  protocol_step integer not null default 0);
`;
