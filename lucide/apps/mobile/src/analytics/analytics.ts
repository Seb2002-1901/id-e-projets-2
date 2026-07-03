/** Wrapper opt-in, liste d'événements FERMÉE (CDC §8). TODO(LUC-11): brancher PostHog EU quand la clé existe. */
type EventName =
  | 'onboarding_started' | 'onboarding_completed' | 'triage_completed' | 'orientation_shown'
  | 'goal_set' | 'envelope_created' | 'vault_recorded' | 'vault_skipped' | 'trajectory_viewed'
  | 'account_created' | 'trial_started' | 'paywall_dismissed_to_free'
  | 'checkin_completed' | 'card_opened' | 'source_sheet_opened'
  | 'sos_opened' | 'sos_tool_used' | 'sos_completed' | 'danger_resources_shown'
  | 'lapse_declared' | 'protocol_r_started' | 'protocol_r_completed' | 'rebound_computed'
  | 'weekly_report_opened' | 'subscription_started' | 'subscription_cancelled';

let enabled = false;
export function setAnalyticsConsent(v: boolean): void { enabled = v; }
export function track(event: EventName, props?: Record<string, string | number | boolean>): void {
  if (!enabled) return;
  if (process.env.EXPO_PUBLIC_POSTHOG_KEY) {
    // TODO(LUC-11): posthog-react-native capture(event, props) — clé absente en dev.
  }
  if (__DEV__) console.log('[analytics]', event, props ?? {});
}
