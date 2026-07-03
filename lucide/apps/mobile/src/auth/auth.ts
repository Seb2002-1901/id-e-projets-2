/** Auth : e-mail OTP via Supabase quand .env est présent ; sinon compte local (dev).
 *  TODO(LUC-07 · Apple): Sign in with Apple exige expo-apple-authentication + capability
 *  Apple Developer + build EAS (pas Expo Go). Point d'entrée : signInWithApple() ci-dessous. */
import { kvSet } from '@/db/dao';
import { getSupabase, hasSupabaseEnv } from '@/sync/supabaseClient';

export type AuthMode = 'supabase' | 'local';
export function authMode(): AuthMode { return hasSupabaseEnv() ? 'supabase' : 'local'; }

export async function sendEmailCode(email: string): Promise<'sent' | 'dev'> {
  const supa = getSupabase();
  if (!supa) { await kvSet('auth_user', 'dev-local'); return 'dev'; }
  const { error } = await supa.auth.signInWithOtp({ email, options: { shouldCreateUser: true } });
  if (error) throw new Error(error.message);
  return 'sent';
}

export async function verifyEmailCode(email: string, code: string): Promise<boolean> {
  const supa = getSupabase();
  if (!supa) return code.length >= 4; // dev : tout code passe
  const { data, error } = await supa.auth.verifyOtp({ email, token: code, type: 'email' });
  if (error || !data.session) return false;
  await kvSet('auth_user', data.session.user.id);
  return true;
}

export async function signInWithApple(): Promise<never> {
  // TODO(LUC-07): expo-apple-authentication → supabase.auth.signInWithIdToken({ provider: 'apple', token })
  throw new Error('Sign in with Apple : nécessite un build EAS + capability (voir README).');
}
