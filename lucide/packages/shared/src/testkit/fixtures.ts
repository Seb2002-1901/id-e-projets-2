/** Générateur déterministe de semaines de test (pas de Math.random — reproductible). */
import type { Checkin, SosSession } from '../types';
import type { WeekData } from '../weeklyReport';

export function mkCheckin(p: Partial<Checkin> & { date: string }): Checkin {
  return { id: `ck_${p.date}`, mood: 3, cravings: 1, withinEnvelope: true, backfilled: false, ...p };
}
export function mkSos(p: Partial<SosSession> & { startedAt: string }): SosSession {
  return { id: `sos_${p.startedAt}`, type: 'craving', toolsUsed: ['curve'], outcome: 'passed', ...p };
}
export function week(n: number, over: Partial<WeekData> = {}): WeekData {
  const base = `2026-03-0${Math.min(n, 9)}`;
  return {
    weekStart: base, weekIndex: n,
    checkins: [1, 2, 3, 4, 5].map((d) => mkCheckin({ date: `${base}-d${d}` })),
    prevCheckins: [1, 2, 3, 4].map((d) => mkCheckin({ date: `prev-${d}` })),
    sosSessions: [], reboundHoursThisWeek: null,
    declaredRiskSlots: [{ dow: 5, slot: 'evening' }],
    plansToValidate: [], proofOfWeekId: null,
    ...over,
  };
}
