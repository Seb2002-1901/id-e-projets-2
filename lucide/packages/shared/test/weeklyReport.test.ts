import { describe, expect, it } from 'vitest';
import { weeklyReport } from '../src/weeklyReport';
import { WEEKLY_TITLES, TRISTATE_PHRASES, WEEKLY_FACTS, renderPhrase } from '../src/phrases/fr';
import { mkCheckin, mkSos, week } from '../src/testkit/fixtures';

describe('weeklyReport — déterminisme et règles de titre', () => {
  it('même entrée → même sortie (déterminisme strict)', () => {
    const w = week(4, { sosSessions: [mkSos({ startedAt: '2026-03-06T19:00:00Z' })] });
    expect(weeklyReport(w)).toEqual(weeklyReport(w));
  });
  it('semaine 1 → first_week quel que soit le reste', () => {
    expect(weeklyReport(week(1)).b1.titleKey).toBe('first_week');
  });
  it('< 3 check-ins → sparse + dataSufficient=false', () => {
    const r = weeklyReport(week(5, { checkins: [mkCheckin({ date: 'a' }), mkCheckin({ date: 'b' })] }));
    expect(r.dataSufficient).toBe(false);
    expect(r.b1.titleKey).toBe('sparse');
  });
  it('rebond dans la semaine → titre rebond + fait rebond', () => {
    const r = weeklyReport(week(6, { reboundHoursThisWeek: 26 }));
    expect(r.b1.titleKey).toBe('rebound');
    expect(r.b3?.factKey).toBe('rebound_fast');
    expect(r.b3?.slots['hours']).toBe('26');
  });
  it('2+ SOS le même jour → hard_day avec le bon jour', () => {
    const r = weeklyReport(week(7, {
      sosSessions: [
        mkSos({ startedAt: '2026-03-10T19:00:00Z' }), // mardi
        mkSos({ startedAt: '2026-03-10T22:00:00Z' }),
      ],
    }));
    expect(r.b1.titleKey).toBe('hard_day');
    expect(r.b1.slots['day']).toBe('mardi');
  });
  it('semaine parfaite sans SOS → quiet', () => {
    expect(weeklyReport(week(8)).b1.titleKey).toBe('quiet');
  });
});

describe('weeklyReport — tri-état et fait de la semaine', () => {
  it('les 3 dimensions présentes avec phrases existantes', () => {
    const r = weeklyReport(week(4));
    expect(r.b2).toHaveLength(3);
    for (const t of r.b2) expect(TRISTATE_PHRASES[t.phraseKey]).toBeTruthy();
  });
  it('pattern déclencheur ≥50% sur ≥3 SOS → trigger_pattern', () => {
    const r = weeklyReport(week(9, {
      sosSessions: [
        mkSos({ startedAt: '2026-03-09T19:00:00Z', triggerChip: 'stress' }),
        mkSos({ startedAt: '2026-03-11T19:00:00Z', triggerChip: 'stress' }),
        mkSos({ startedAt: '2026-03-13T19:00:00Z', triggerChip: 'social' }),
      ],
    }));
    expect(r.b3?.factKey).toBe('trigger_pattern');
    expect(r.b3?.slots['trigger']).toBe('stress');
  });
  it('20 semaines variées → payloads valides, titres connus', () => {
    for (let i = 1; i <= 20; i++) {
      const r = weeklyReport(week(i, i % 3 === 0 ? { reboundHoursThisWeek: 10 + i } : {}));
      expect(WEEKLY_TITLES[r.b1.titleKey]).toBeTruthy();
      expect(r.b4.riskSlots.length).toBeGreaterThan(0);
    }
  });
});

describe('renderPhrase', () => {
  it('interpole les slots', () => {
    expect(renderPhrase(WEEKLY_FACTS['rebound_fast']!, { hours: 26 })).toContain('26 h');
    expect(renderPhrase('{a}+{b}', { a: 1, b: 2 })).toBe('1+2');
  });
});
