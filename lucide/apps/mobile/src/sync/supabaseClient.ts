/** Client Supabase unique (auth + transport). Sans .env → null : l'app tourne 100 % en local. */
import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import { kvDel, kvGet, kvSet } from '@/db/dao';

let client: SupabaseClient | null | undefined;

const kvStorage = {
  getItem: (k: string) => kvGet(`sb_${k}`),
  setItem: (k: string, v: string) => kvSet(`sb_${k}`, v),
  removeItem: (k: string) => kvDel(`sb_${k}`),
};

export function hasSupabaseEnv(): boolean {
  return !!process.env.EXPO_PUBLIC_SUPABASE_URL && !!process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;
}
export function getSupabase(): SupabaseClient | null {
  if (client !== undefined) return client;
  if (!hasSupabaseEnv()) { client = null; return null; }
  client = createClient(process.env.EXPO_PUBLIC_SUPABASE_URL!, process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { storage: kvStorage, autoRefreshToken: true, persistSession: true, detectSessionInUrl: false },
  });
  return client;
}
