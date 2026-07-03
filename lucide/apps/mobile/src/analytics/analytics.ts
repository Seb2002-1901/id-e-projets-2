/** Analytics opt-in, liste FERMÉE (CDC §8). Implémentation directe de l'API PostHog EU (batch HTTP)
 *  — zéro SDK, zéro dépendance. Sans clé env ou sans consentement : aucun octet ne part. */
import { kvGet, kvSet } from '@/db/dao';
import { ulid } from '@/db/database';

type EventName =
  | 'onboarding_started' | 'onboarding_completed' | 'triage_completed' | 'orientation_shown'
  | 'goal_set' | 'envelope_created' | 'vault_recorded' | 'vault_skipped' | 'trajectory_viewed'
  | 'account_created' | 'trial_started' | 'paywall_dismissed_to_free'
  | 'checkin_completed' | 'card_opened' | 'source_sheet_opened'
  | 'sos_opened' | 'sos_tool_used' | 'sos_completed' | 'danger_resources_shown'
  | 'lapse_declared' | 'protocol_r_started' | 'protocol_r_completed' | 'rebound_computed'
  | 'weekly_report_opened' | 'subscription_started' | 'subscription_cancelled';

const HOST = process.env.EXPO_PUBLIC_POSTHOG_HOST ?? 'https://eu.i.posthog.com';
const KEY = process.env.EXPO_PUBLIC_POSTHOG_KEY;

let enabled = false;
let distinctId: string | null = null;
const queue: { event: string; properties: Record<string, unknown>; timestamp: string }[] = [];

export async function initAnalytics(consent: boolean): Promise<void> {
  enabled = consent;
  await kvSet('analytics_consent', consent ? '1' : '0');
  if (consent) {
    distinctId = (await kvGet('analytics_id')) ?? ulid();
    await kvSet('analytics_id', distinctId);
  }
}
export async function hydrateAnalytics(): Promise<void> {
  enabled = (await kvGet('analytics_consent')) === '1';
  if (enabled) distinctId = await kvGet('analytics_id');
}
export function setAnalyticsConsent(v: boolean): void { void initAnalytics(v); }

export function track(event: EventName, props?: Record<string, string | number | boolean>): void {
  if (!enabled) return;
  queue.push({ event, properties: { ...props }, timestamp: new Date().toISOString() });
  if (__DEV__ && !KEY) console.log('[analytics]', event, props ?? {});
  if (queue.length >= 10) void flushAnalytics();
}
export async function flushAnalytics(): Promise<void> {
  if (!enabled || !KEY || !distinctId || queue.length === 0) { queue.length = enabled && KEY ? queue.length : 0; return; }
  const batch = queue.splice(0, queue.length);
  try {
    await fetch(`${HOST}/batch/`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: KEY,
        batch: batch.map((e) => ({ ...e, distinct_id: distinctId, type: 'capture' })),
      }),
    });
  } catch {
    queue.unshift(...batch); // réseau absent : on regarde passer, on réessaiera au prochain flush
  }
}
