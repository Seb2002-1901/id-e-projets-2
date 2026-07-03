import type { Profile, SubStatus, TriageOutcome } from '@lucide/shared';
import { hydrateAnalytics } from '@/analytics/analytics';
import { kvGet, kvSet, loadWaveCtx } from '@/db/dao';
import { useJourney } from './journey';
import { useSession } from './session';

export async function hydrateStores(): Promise<void> {
  const [triage, profileRaw, sub, waveCtx] = await Promise.all([
    kvGet('triage_outcome'), kvGet('profile'), kvGet('sub_status'), loadWaveCtx(),
  ]);
  useSession.getState().setHydrated({
    triage: (triage as TriageOutcome | null),
    onboarded: !!profileRaw,
    profile: profileRaw ? (JSON.parse(profileRaw) as Profile) : null,
    subStatus: (sub as SubStatus | null) ?? 'free',
  });
  if (waveCtx) useJourney.getState().setWaveCtx(waveCtx);
  await hydrateAnalytics();
}
export async function persistTriage(outcome: TriageOutcome): Promise<void> {
  await kvSet('triage_outcome', outcome); // C2 : LOCAL uniquement, jamais synchronisé
}
export async function persistProfile(p: Profile): Promise<void> {
  await kvSet('profile', JSON.stringify(p));
}
export async function persistSub(s: SubStatus): Promise<void> {
  await kvSet('sub_status', s);
}
