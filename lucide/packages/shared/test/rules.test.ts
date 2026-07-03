import { describe, expect, it } from 'vitest';
import {
  auditCScore, belongsToWave, crisisPatternMatch, daysWithinCumulative,
  envelopeLock, exceedsOccasion, isLapse, isOffDay, medianMinutes,
  phq2Flag, reboundHours, triageOutcome,
} from '../src/rules/rules';
import type { TriageAnswers } from '../src/types';

const base: TriageAnswers = {
  auditC: [1, 1, 0], morningShakes: false, morningDrink: false,
  pastWithdrawal: false, dailyLongTerm: false, phq2: [0, 0], sex: 'f',
};

describe('BR-01/02 triage — 12 profils limites', () => {
  it('verte : conso modérée sans signe physique', () => {
    expect(triageOutcome(base)).toBe('green');
  });
  it('femme : AUDIT-C 8 verte, 9 rouge', () => {
    expect(triageOutcome({ ...base, auditC: [4, 3, 1] })).toBe('green');
    expect(triageOutcome({ ...base, auditC: [4, 4, 1] })).toBe('red');
  });
  it('homme : AUDIT-C 9 verte, 10 rouge', () => {
    expect(triageOutcome({ ...base, sex: 'm', auditC: [4, 4, 1] })).toBe('green');
    expect(triageOutcome({ ...base, sex: 'm', auditC: [4, 4, 2] })).toBe('red');
  });
  it('na → seuil conservateur homme', () => {
    expect(triageOutcome({ ...base, sex: 'na', auditC: [4, 4, 1] })).toBe('green');
  });
  it.each([
    ['tremblements', { morningShakes: true }],
    ['verre du matin', { morningDrink: true }],
    ['antécédent sevrage', { pastWithdrawal: true }],
  ] as const)('rouge sur signe physique : %s (même AUDIT bas)', (_n, patch) => {
    expect(triageOutcome({ ...base, auditC: [1, 0, 0], ...patch })).toBe('red');
  });
  it('phq2 : 2 none · 3 banner · 6 avec item2 max = priority', () => {
    expect(phq2Flag({ ...base, phq2: [1, 1] })).toBe('none');
    expect(phq2Flag({ ...base, phq2: [2, 1] })).toBe('banner');
    expect(phq2Flag({ ...base, phq2: [3, 3] })).toBe('priority');
  });
  it('auditCScore additionne', () => expect(auditCScore({ ...base, auditC: [2, 3, 4] })).toBe(9));
});

describe('BR-10 enveloppe/écart', () => {
  const stop = { zero: true } as const;
  const reduce = { maxWeek: 4, maxOccasion: 2, offDays: [1, 2, 3, 4] as (1|2|3|4)[] };
  it('arrêt : tout verre = écart', () => {
    expect(isLapse(stop, { withinEnvelope: true, drinksCount: 1, date: 'x' })).toBe(true);
    expect(isLapse(stop, { withinEnvelope: true, drinksCount: 0, date: 'x' })).toBe(false);
  });
  it('réduction : la déclaration fait foi', () => {
    expect(isLapse(reduce, { withinEnvelope: false, date: 'x' })).toBe(true);
    expect(isLapse(reduce, { withinEnvelope: true, drinksCount: 2, date: 'x' })).toBe(false);
  });
  it('aides de saisie', () => {
    expect(exceedsOccasion(reduce, 3)).toBe(true);
    expect(exceedsOccasion(reduce, 2)).toBe(false);
    expect(isOffDay(reduce, 2)).toBe(true);
    expect(isOffDay(reduce, 6)).toBe(false);
  });
});

describe('BR-11 verrous enveloppe', () => {
  const env = { createdAt: '2026-01-01T10:00:00Z' };
  it('verrou 24 h post-écart prioritaire', () => {
    const l = envelopeLock(env, '2026-01-10T21:00:00Z', new Date('2026-01-11T10:00:00Z'));
    expect(l).toMatchObject({ locked: true, reason: 'post_lapse' });
  });
  it('verrou hebdo', () => {
    const l = envelopeLock(env, null, new Date('2026-01-05T10:00:00Z'));
    expect(l).toMatchObject({ locked: true, reason: 'weekly' });
  });
  it('déverrouillée après 7 j sans écart récent', () => {
    expect(envelopeLock(env, '2026-01-02T10:00:00Z', new Date('2026-01-09T10:00:01Z'))).toEqual({ locked: false });
  });
});

describe('BR-12/14 vague & rebond', () => {
  it('72 h inclusives', () => {
    expect(belongsToWave('2026-01-10T20:00:00Z', '2026-01-13T20:00:00Z')).toBe(true);
    expect(belongsToWave('2026-01-10T20:00:00Z', '2026-01-13T20:00:01Z')).toBe(false);
  });
  it('rebond : fin d’écart à 20 h locale → 26 h', () => {
    expect(reboundHours('2026-01-10', 'Europe/Paris', new Date('2026-01-11T22:00:00'))).toBe(26);
  });
  it('rebond jamais ≤ 0 (protocole avant 20 h le jour même)', () => {
    expect(reboundHours('2026-01-10', 'Europe/Paris', new Date('2026-01-10T18:00:00'))).toBe(0.1);
  });
});

describe('BR-03 crise + agrégats', () => {
  it('détecte avec accents/majuscules', () => {
    expect(crisisPatternMatch('Je veux EN FINIR ce soir')).toBe(true);
    expect(crisisPatternMatch('jai plus envie de vivre')).toBe(true); // sécurité : sur-détection acceptée (faux positifs OK, faux négatifs NON)
    expect(crisisPatternMatch('plus envie de vivre')).toBe(true);
    expect(crisisPatternMatch('grosse envie de boire mais ça va passer')).toBe(false);
  });
  it('BR-13 : cumul, jamais remis à zéro', () => {
    expect(daysWithinCumulative([{ withinEnvelope: true }, { withinEnvelope: false }, { withinEnvelope: true }]))
      .toEqual({ within: 2, total: 3 });
  });
  it('médiane des envies en minutes', () => {
    expect(medianMinutes([])).toBeNull();
    expect(medianMinutes([300, 600, 480])).toBe(8);
    expect(medianMinutes([300, 600])).toBe(8); // (300+600)/2=450s → 7.5 → 8
  });
});
