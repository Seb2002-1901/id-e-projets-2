import { createClient, type SupabaseClient } from '@supabase/supabase-js';

export interface Transport {
  push(batch: { id: string; kind: string; payload: string }[]): Promise<{ accepted: string[]; rejected: string[] }>;
}

/** Sans clés d'env : mode local pur (dev) — tout reste en SQLite, rien ne part. */
class NoopTransport implements Transport {
  async push(batch: { id: string }[]): Promise<{ accepted: string[]; rejected: string[] }> {
    return { accepted: batch.map((b) => b.id), rejected: [] }; // acquitte localement (dev only)
  }
}

class SupabaseTransport implements Transport {
  constructor(private client: SupabaseClient) {}
  async push(batch: { id: string; kind: string; payload: string }[]): Promise<{ accepted: string[]; rejected: string[] }> {
    const grouped: Record<string, unknown[]> = {};
    for (const b of batch) (grouped[b.kind] ??= []).push(JSON.parse(b.payload));
    const { data, error } = await this.client.functions.invoke('sync-push', { body: grouped });
    if (error) throw error;
    const res = data as { accepted?: string[]; rejected?: { id: string }[] };
    return { accepted: res.accepted ?? [], rejected: (res.rejected ?? []).map((r) => r.id) };
  }
}

export function makeTransport(): Transport {
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const key = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) return new NoopTransport(); // TODO(déploiement): renseigner .env → SupabaseTransport actif
  return new SupabaseTransport(createClient(url, key));
}
