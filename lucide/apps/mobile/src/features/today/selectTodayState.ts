/** Sélecteur PUR des états d'É11 (CDC) — testé sans React Native. */
import type { WaveState } from '@lucide/shared';

export type TodayState =
  | { kind: 'first_day' }
  | { kind: 'resume_banner' }       // BR-21 : silence ≥ 48 h sans vague
  | { kind: 'protocol_pending' }    // vague ouverte → proposer le protocole R
  | { kind: 'soft_resume' }
  | { kind: 'normal'; checkinDone: boolean };

export function selectTodayState(i: {
  dayOfJourney: number;
  lastCheckinDate: string | null;   // ISO
  today: string;                    // ISO
  waveState: WaveState;
}): TodayState {
  if (i.waveState === 'SOFT_RESUME') return { kind: 'soft_resume' };
  if (i.waveState === 'WAVE_OPEN' || i.waveState === 'PROTOCOL_PENDING') return { kind: 'protocol_pending' };
  if (i.dayOfJourney <= 1 && !i.lastCheckinDate) return { kind: 'first_day' };
  if (i.lastCheckinDate) {
    const gap = (new Date(i.today).getTime() - new Date(i.lastCheckinDate).getTime()) / 86400000;
    if (gap >= 2) return { kind: 'resume_banner' };
  }
  return { kind: 'normal', checkinDone: i.lastCheckinDate === i.today };
}
