import { describe, expect, it } from 'vitest';
import { selectTodayState } from '../src/features/today/selectTodayState';

describe('selectTodayState — les états d’É11', () => {
  const base = { dayOfJourney: 10, lastCheckinDate: '2026-03-09', today: '2026-03-10', waveState: 'IN_ENVELOPE' as const };
  it('normal, check-in à faire', () => {
    expect(selectTodayState(base)).toEqual({ kind: 'normal', checkinDone: false });
  });
  it('normal, check-in fait', () => {
    expect(selectTodayState({ ...base, lastCheckinDate: '2026-03-10' })).toEqual({ kind: 'normal', checkinDone: true });
  });
  it('premier jour', () => {
    expect(selectTodayState({ ...base, dayOfJourney: 1, lastCheckinDate: null })).toEqual({ kind: 'first_day' });
  });
  it('BR-21 : silence ≥ 48 h → bandeau reprise', () => {
    expect(selectTodayState({ ...base, lastCheckinDate: '2026-03-07' })).toEqual({ kind: 'resume_banner' });
  });
  it('vague ouverte → protocole proposé (prioritaire sur tout)', () => {
    expect(selectTodayState({ ...base, waveState: 'WAVE_OPEN' })).toEqual({ kind: 'protocol_pending' });
    expect(selectTodayState({ ...base, waveState: 'PROTOCOL_PENDING' })).toEqual({ kind: 'protocol_pending' });
  });
  it('soft resume prioritaire', () => {
    expect(selectTodayState({ ...base, waveState: 'SOFT_RESUME' })).toEqual({ kind: 'soft_resume' });
  });
});
