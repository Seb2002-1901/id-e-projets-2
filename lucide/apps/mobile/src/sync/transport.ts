export interface Transport {
  push(batch: { id: string; kind: string; payload: string }[]): Promise<{ accepted: string[]; rejected: string[] }>;
}

/** Mode local pur (pas de .env) : acquitte localement, rien ne quitte l'appareil. */
class NoopTransport implements Transport {
  async push(batch: { id: string }[]): Promise<{ accepted: string[]; rejected: string[] }> {
    return { accepted: batch.map((b) => b.id), rejected: [] };
  }
}

import { getSupabase } from './supabaseClient';

class SupabaseTransport implements Transport {
  async push(batch: { id: string; kind: string; payload: string }[]): Promise<{ accepted: string[]; rejected: string[] }> {
    const supa = getSupabase();
    if (!supa) return { accepted: [], rejected: batch.map((b) => b.id) };
    const { data: session } = await supa.auth.getSession();
    if (!session.session) return { accepted: [], rejected: [] }; // pas connecté : on garde l'outbox, on réessaiera
    const grouped: Record<string, unknown[]> = {};
    for (const b of batch) (grouped[b.kind] ??= []).push(JSON.parse(b.payload));
    const { data, error } = await supa.functions.invoke('sync-push', { body: grouped });
    if (error) throw error;
    const res = data as { accepted?: string[]; rejected?: { id: string }[] };
    // mapping id-outbox ←→ id-métier : on acquitte par id métier présent dans le payload
    const okIds = new Set(res.accepted ?? []);
    const accepted = batch.filter((b) => {
      const p = JSON.parse(b.payload) as { id?: string; waveId?: string };
      return okIds.has(p.id ?? p.waveId ?? '');
    }).map((b) => b.id);
    const rejected = batch.map((b) => b.id).filter((id) => !accepted.includes(id));
    return { accepted, rejected };
  }
}

export function makeTransport(): Transport {
  return getSupabase() ? new SupabaseTransport() : new NoopTransport();
}
