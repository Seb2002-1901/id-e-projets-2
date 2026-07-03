/** DAO typé — seules fonctions autorisées à toucher SQLite. */
import type { Checkin, IfThenPlan, LapseVia, Proof, SosSession } from '@lucide/shared';
import type { WaveCtx } from '@lucide/shared';
import { getDb, ulid } from './database';

const nowIso = () => new Date().toISOString();

// ---------- KV ----------
export async function kvGet(k: string): Promise<string | null> {
  const db = await getDb();
  const row = await db.getFirstAsync<{ v: string }>('select v from kv where k = ?', k);
  return row?.v ?? null;
}
export async function kvSet(k: string, v: string): Promise<void> {
  const db = await getDb();
  await db.runAsync('insert into kv(k,v) values(?,?) on conflict(k) do update set v=excluded.v', k, v);
}

// ---------- Check-ins ----------
export async function upsertCheckin(c: Omit<Checkin, 'id'> & { id?: string }): Promise<Checkin> {
  const db = await getDb();
  const id = c.id ?? ulid();
  await db.runAsync(
    `insert into checkins(id,date,mood,cravings,within_envelope,drinks_count,backfilled,created_at)
     values(?,?,?,?,?,?,?,?)
     on conflict(date) do update set mood=excluded.mood, cravings=excluded.cravings,
       within_envelope=excluded.within_envelope, drinks_count=excluded.drinks_count`,
    id, c.date, c.mood, c.cravings, c.withinEnvelope ? 1 : 0, c.drinksCount ?? null, c.backfilled ? 1 : 0, nowIso(),
  );
  await enqueue('checkin', { ...c, id });
  return { ...c, id } as Checkin;
}
export async function getCheckin(date: string): Promise<Checkin | null> {
  const db = await getDb();
  const r = await db.getFirstAsync<Record<string, unknown>>('select * from checkins where date = ?', date);
  return r ? rowToCheckin(r) : null;
}
export async function checkinsBetween(from: string, to: string): Promise<Checkin[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<Record<string, unknown>>(
    'select * from checkins where date >= ? and date <= ? order by date asc', from, to);
  return rows.map(rowToCheckin);
}
export async function allCheckins(): Promise<Checkin[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<Record<string, unknown>>('select * from checkins order by date asc');
  return rows.map(rowToCheckin);
}
function rowToCheckin(r: Record<string, unknown>): Checkin {
  return {
    id: r.id as string, date: r.date as string,
    mood: r.mood as Checkin['mood'], cravings: r.cravings as Checkin['cravings'],
    withinEnvelope: !!(r.within_envelope as number),
    drinksCount: (r.drinks_count as number | null) ?? undefined,
    backfilled: !!(r.backfilled as number),
  };
}

// ---------- SOS ----------
export async function insertSos(s: Omit<SosSession, 'id'>): Promise<SosSession> {
  const db = await getDb();
  const id = ulid();
  await db.runAsync(
    'insert into sos_sessions(id,started_at,type,duration_s,tools_used,outcome,trigger_chip,place_chip) values(?,?,?,?,?,?,?,?)',
    id, s.startedAt, s.type, s.durationS ?? null, JSON.stringify(s.toolsUsed), s.outcome ?? null, s.triggerChip ?? null, s.placeChip ?? null,
  );
  await enqueue('sos', { ...s, id });
  return { ...s, id };
}
export async function sosStats(): Promise<{ crossed: number; medianS: number | null; durations: number[] }> {
  const db = await getDb();
  const rows = await db.getAllAsync<{ duration_s: number | null }>(
    "select duration_s from sos_sessions where type='craving' and outcome='passed'");
  const durations = rows.map((r) => r.duration_s).filter((d): d is number => d != null);
  const sorted = [...durations].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  const medianS = sorted.length ? (sorted.length % 2 ? sorted[mid]! : (sorted[mid - 1]! + sorted[mid]!) / 2) : null;
  return { crossed: rows.length, medianS, durations };
}

// ---------- Vagues / rebonds ----------
export async function insertWave(id: string, via: LapseVia, openedAt: string): Promise<void> {
  const db = await getDb();
  await db.runAsync('insert or ignore into lapse_waves(id,opened_at,detected_via) values(?,?,?)', id, openedAt, via);
  await enqueue('wave', { id, openedAt, detectedVia: via });
}
export async function insertLapseEvent(waveId: string, occurredOn: string, drinks?: number): Promise<void> {
  const db = await getDb();
  const id = ulid();
  await db.runAsync('insert into lapse_events(id,wave_id,occurred_on,drinks_count) values(?,?,?,?)', id, waveId, occurredOn, drinks ?? null);
  await enqueue('lapse_event', { id, waveId, occurredOn, drinksCount: drinks });
}
export async function closeWave(waveId: string, reason: 'rebound' | 'abandoned'): Promise<void> {
  const db = await getDb();
  await db.runAsync('update lapse_waves set closed_at=?, close_reason=? where id=?', nowIso(), reason, waveId);
}
export async function saveContext(waveId: string, ctx: { whereChip?: string; whoChip?: string; emotionChip?: string; helperChip?: string; freeText?: string }): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    `insert into lapse_context(wave_id,where_chip,who_chip,emotion_chip,helper_chip,free_text) values(?,?,?,?,?,?)
     on conflict(wave_id) do update set where_chip=excluded.where_chip, who_chip=excluded.who_chip,
       emotion_chip=excluded.emotion_chip, helper_chip=excluded.helper_chip, free_text=excluded.free_text`,
    waveId, ctx.whereChip ?? null, ctx.whoChip ?? null, ctx.emotionChip ?? null, ctx.helperChip ?? null, ctx.freeText ?? null,
  );
  // TODO(LUC-16/§11): chiffrer free_text (libsodium) avant toute synchronisation serveur.
  await enqueue('lapse_context', { waveId, ...ctx, freeText: undefined });
}
export async function saveRebound(waveId: string, completedAt: string, hours: number, planId?: string): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    'insert or replace into rebounds(wave_id,protocol_completed_at,rebound_hours,plan_id) values(?,?,?,?)',
    waveId, completedAt, hours, planId ?? null,
  );
  await closeWave(waveId, 'rebound');
  await enqueue('protocol_completion', { waveId, completedAt, planId });
}
export async function reboundList(): Promise<{ hours: number; at: string }[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<{ rebound_hours: number; protocol_completed_at: string }>(
    'select rebound_hours, protocol_completed_at from rebounds order by protocol_completed_at asc');
  return rows.map((r) => ({ hours: r.rebound_hours, at: r.protocol_completed_at }));
}

// ---------- WaveCtx (persistance machine à états) ----------
export async function loadWaveCtx(): Promise<WaveCtx | null> {
  const db = await getDb();
  const r = await db.getFirstAsync<Record<string, unknown>>('select * from wave_ctx where id=1');
  if (!r) return null;
  return {
    state: r.state as WaveCtx['state'], waveId: (r.wave_id as string | null),
    lastEventAt: r.last_event_at as string | null, lastOccurredOn: r.last_occurred_on as string | null,
    n3Sent: !!(r.n3_sent as number), protocolStep: r.protocol_step as WaveCtx['protocolStep'],
  };
}
export async function saveWaveCtx(c: WaveCtx): Promise<void> {
  const db = await getDb();
  await db.runAsync(
    `insert into wave_ctx(id,state,wave_id,last_event_at,last_occurred_on,n3_sent,protocol_step)
     values(1,?,?,?,?,?,?)
     on conflict(id) do update set state=excluded.state, wave_id=excluded.wave_id,
       last_event_at=excluded.last_event_at, last_occurred_on=excluded.last_occurred_on,
       n3_sent=excluded.n3_sent, protocol_step=excluded.protocol_step`,
    c.state, c.waveId, c.lastEventAt, c.lastOccurredOn, c.n3Sent ? 1 : 0, c.protocolStep,
  );
}

// ---------- Plans ----------
export async function upsertPlan(p: Omit<IfThenPlan, 'id' | 'version' | 'active' | 'successCount'> & { id?: string }): Promise<IfThenPlan> {
  const db = await getDb();
  const id = p.id ?? ulid();
  const existing = await db.getFirstAsync<{ version: number }>('select version from if_then_plans where id=?', id);
  const version = (existing?.version ?? 0) + 1;
  await db.runAsync(
    `insert into if_then_plans(id,trigger_label,if_text,then_text,version,active,source,success_count,created_at)
     values(?,?,?,?,?,1,?,0,?)
     on conflict(id) do update set if_text=excluded.if_text, then_text=excluded.then_text, version=excluded.version`,
    id, p.triggerLabel, p.ifText, p.thenText, version, p.source, nowIso(),
  );
  const plan: IfThenPlan = { id, version, active: true, successCount: 0, ...p };
  await enqueue('plan', plan);
  return plan;
}
export async function activePlans(): Promise<IfThenPlan[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<Record<string, unknown>>('select * from if_then_plans where active=1 order by created_at asc');
  return rows.map((r) => ({
    id: r.id as string, triggerLabel: r.trigger_label as string, ifText: r.if_text as string,
    thenText: r.then_text as string, version: r.version as number, active: true,
    source: r.source as IfThenPlan['source'], successCount: r.success_count as number,
  }));
}

// ---------- Preuves ----------
export async function addProof(kind: Proof['kind'], label: string): Promise<void> {
  const db = await getDb();
  const id = ulid();
  await db.runAsync('insert into proofs(id,kind,label,occurred_at) values(?,?,?,?)', id, kind, label, nowIso());
  await enqueue('proof', { id, kind, label, occurredAt: nowIso() });
}
export async function listProofs(): Promise<Proof[]> {
  const db = await getDb();
  const rows = await db.getAllAsync<Record<string, unknown>>('select * from proofs order by occurred_at desc');
  return rows.map((r) => ({ id: r.id as string, kind: r.kind as Proof['kind'], label: r.label as string, occurredAt: r.occurred_at as string }));
}

// ---------- Outbox ----------
export async function enqueue(kind: string, payload: unknown): Promise<void> {
  const db = await getDb();
  await db.runAsync('insert or replace into outbox(id,kind,payload,created_at) values(?,?,?,?)',
    ulid(), kind, JSON.stringify(payload), nowIso());
}
export async function outboxBatch(limit = 100): Promise<{ id: string; kind: string; payload: string }[]> {
  const db = await getDb();
  return db.getAllAsync('select id, kind, payload from outbox where quarantined=0 order by created_at asc limit ?', limit);
}
export async function outboxAck(ids: string[]): Promise<void> {
  if (!ids.length) return;
  const db = await getDb();
  await db.runAsync(`delete from outbox where id in (${ids.map(() => '?').join(',')})`, ...ids);
}
export async function outboxFail(ids: string[]): Promise<void> {
  if (!ids.length) return;
  const db = await getDb();
  await db.runAsync(`update outbox set tries = tries + 1, quarantined = (tries + 1 >= 8) where id in (${ids.map(() => '?').join(',')})`, ...ids);
}
