/**
 * LUCIDE — bilan hebdomadaire DÉTERMINISTE (V1 : zéro IA générative — décision CDC 0.1).
 * Entrée : données brutes de la semaine. Sortie : WeeklyReportPayload (rendu par É19).
 * Même entrée → même sortie, toujours. Testé sur 20 semaines de fixtures.
 */
import type { Checkin, RiskSlot, SosSession, TriState, Trend, ULID, WeeklyReportPayload } from './types';
import { DAY_NAMES } from './phrases/fr';

export interface WeekData {
  weekStart: string;               // lundi, YYYY-MM-DD
  weekIndex: number;               // 1 = première semaine de parcours
  checkins: Checkin[];             // ≤ 7, la semaine écoulée
  prevCheckins: Checkin[];         // semaine précédente (peut être vide)
  sosSessions: SosSession[];
  reboundHoursThisWeek: number | null;
  declaredRiskSlots: RiskSlot[];
  plansToValidate: ULID[];
  proofOfWeekId: ULID | null;
}

function avg(ns: number[]): number | null {
  return ns.length ? ns.reduce((a, b) => a + b, 0) / ns.length : null;
}
function trend(cur: number | null, prev: number | null, higherIsBetter: boolean): Trend {
  if (cur === null || prev === null) return 'flat';
  const d = cur - prev;
  if (Math.abs(d) < 0.15) return 'flat';
  return (d > 0) === higherIsBetter ? 'up' : 'down';
}

export function weeklyReport(w: WeekData): WeeklyReportPayload {
  const daysWithin = w.checkins.filter((c) => c.withinEnvelope).length;
  const cravingsCrossed = w.sosSessions.filter((s) => s.type === 'craving' && s.outcome === 'passed').length;
  const dataSufficient = w.checkins.length >= 3;

  // --- B1 : titre par règles (priorité fixe, déterministe) ---
  let titleKey = 'steady';
  const slots: Record<string, string> = {};
  const sosByDay = new Map<number, number>();
  for (const s of w.sosSessions) {
    const d = new Date(s.startedAt).getDay(); // 0=dim
    const iso = d === 0 ? 6 : d - 1;
    sosByDay.set(iso, (sosByDay.get(iso) ?? 0) + 1);
  }
  const hardest = [...sosByDay.entries()].sort((a, b) => b[1] - a[1])[0];
  if (w.weekIndex === 1) titleKey = 'first_week';
  else if (!dataSufficient) titleKey = 'sparse';
  else if (w.reboundHoursThisWeek !== null) titleKey = 'rebound';
  else if (hardest && hardest[1] >= 2) { titleKey = 'hard_day'; slots['day'] = DAY_NAMES[hardest[0]] ?? 'un jour'; }
  else if (w.sosSessions.length === 0 && daysWithin === w.checkins.length) titleKey = 'quiet';

  // --- B2 : tri-état (3 dimensions, comparées à la semaine précédente) ---
  const cur = {
    env: avg(w.checkins.map((c) => (c.withinEnvelope ? 1 : 0))),
    crav: avg(w.checkins.map((c) => c.cravings)),
    mood: avg(w.checkins.map((c) => c.mood)),
  };
  const prev = {
    env: avg(w.prevCheckins.map((c) => (c.withinEnvelope ? 1 : 0))),
    crav: avg(w.prevCheckins.map((c) => c.cravings)),
    mood: avg(w.prevCheckins.map((c) => c.mood)),
  };
  const b2: TriState[] = [
    { dimension: 'envelope', trend: trend(cur.env, prev.env, true), phraseKey: `envelope_${trend(cur.env, prev.env, true)}`, evidence: 'green' },
    { dimension: 'cravings', trend: trend(cur.crav, prev.crav, false), phraseKey: `cravings_${trend(cur.crav, prev.crav, false)}`, evidence: 'yellow' },
    { dimension: 'mood', trend: trend(cur.mood, prev.mood, true), phraseKey: `mood_${trend(cur.mood, prev.mood, true)}`, evidence: 'yellow' },
  ];

  // --- B3 : LE fait de la semaine (1 max, prudent ⚪, priorité fixe) ---
  let b3: WeeklyReportPayload['b3'];
  const withTrigger = w.sosSessions.filter((s) => s.triggerChip);
  if (w.reboundHoursThisWeek !== null) {
    b3 = { factKey: 'rebound_fast', slots: { hours: String(Math.round(w.reboundHoursThisWeek)) } };
  } else if (withTrigger.length >= 3) {
    const counts = new Map<string, number>();
    for (const s of withTrigger) counts.set(s.triggerChip as string, (counts.get(s.triggerChip as string) ?? 0) + 1);
    const top = [...counts.entries()].sort((a, b) => b[1] - a[1])[0];
    if (top && top[1] / withTrigger.length >= 0.5) {
      b3 = { factKey: 'trigger_pattern', slots: { count: String(top[1]), total: String(withTrigger.length), trigger: top[0] } };
    }
  }

  return {
    weekStart: w.weekStart,
    dataSufficient,
    b1: { titleKey, slots, stats: { daysWithin, cravingsCrossed, checkins: w.checkins.length } },
    b2,
    b3,
    b4: { riskSlots: w.declaredRiskSlots, plansToValidate: w.plansToValidate },
    b5: w.proofOfWeekId ? { proofId: w.proofOfWeekId } : undefined,
  };
}
