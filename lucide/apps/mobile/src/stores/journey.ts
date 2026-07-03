/** WaveCtx hydraté + jour de parcours. */
import { create } from 'zustand';
import { initialCtx, type WaveCtx } from '@lucide/shared';

interface JourneyState {
  waveCtx: WaveCtx;
  setWaveCtx(c: WaveCtx): void;
}
export const useJourney = create<JourneyState>((set) => ({
  waveCtx: initialCtx,
  setWaveCtx: (waveCtx) => set({ waveCtx }),
}));

export function dayOfJourney(journeyStart: string): number {
  const start = new Date(`${journeyStart}T00:00:00`);
  const today = new Date(); today.setHours(0, 0, 0, 0);
  return Math.max(1, Math.floor((today.getTime() - start.getTime()) / 86400000) + 1);
}
export function todayIso(): string {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
