/**
 * LUCIDE — règles métier pures (BR-xx). Zéro dépendance. Testées à 100 %.
 * Toute logique métier vit ICI — l'UI et le serveur appellent, n'implémentent pas.
 */
import type {
  Checkin, Envelope, EnvelopeLock, EnvelopeRules, ISODate, ISODateTime,
  TriageAnswers, TriageOutcome, Weekday,
} from '../types';

// ---------------------------------------------------------------- BR-01/02 : triage
export function auditCScore(a: TriageAnswers): number {
  return a.auditC[0] + a.auditC[1] + a.auditC[2];
}

export function triageOutcome(a: TriageAnswers): TriageOutcome {
  const audit = auditCScore(a);
  const auditRed = a.sex === 'f' ? audit >= 9 : audit >= 10; // 'na' → seuil homme (conservateur : 10)
  const physRed = a.morningShakes || a.morningDrink || a.pastWithdrawal;
  return auditRed || physRed ? 'red' : 'green';
}

/** PHQ-2 ≥ 3 → bandeau ressources (non bloquant) ; 6 avec item2 max → orientation prioritaire. */
export function phq2Flag(a: TriageAnswers): 'none' | 'banner' | 'priority' {
  const s = a.phq2[0] + a.phq2[1];
  if (s === 6 && a.phq2[1] === 3) return 'priority';
  return s >= 3 ? 'banner' : 'none';
}

// ---------------------------------------------------------------- BR-10 : écart
export function isLapse(rules: EnvelopeRules, c: Pick<Checkin, 'withinEnvelope' | 'drinksCount' | 'date'>): boolean {
  if ('zero' in rules) return c.withinEnvelope === false || (c.drinksCount ?? 0) > 0;
  return c.withinEnvelope === false; // l'utilisatrice déclare vs SON enveloppe ; le client pré-calcule l'aide
}

/** Aide de saisie (réduction) : dépassement d'occasion détectable immédiatement. */
export function exceedsOccasion(rules: EnvelopeRules, drinks: number): boolean {
  return 'maxOccasion' in rules ? drinks > rules.maxOccasion : drinks > 0;
}
export function isOffDay(rules: EnvelopeRules, dow: Weekday): boolean {
  return 'offDays' in rules ? rules.offDays.includes(dow) : false;
}

// ---------------------------------------------------------------- BR-11 : verrous enveloppe
export function envelopeLock(
  lastEnvelope: Pick<Envelope, 'createdAt'>,
  lastLapseAt: ISODateTime | null,
  now: Date,
): EnvelopeLock {
  if (lastLapseAt) {
    const until = new Date(new Date(lastLapseAt).getTime() + 24 * 3600_000);
    if (now < until) return { locked: true, reason: 'post_lapse', until: until.toISOString() };
  }
  const weekly = new Date(new Date(lastEnvelope.createdAt).getTime() + 7 * 24 * 3600_000);
  if (now < weekly) return { locked: true, reason: 'weekly', until: weekly.toISOString() };
  return { locked: false };
}

// ---------------------------------------------------------------- BR-14 : rebond
/** Fin d'écart conventionnelle : dernier occurred_on à 20:00 locale (tzAtStart). */
export function lapseEndAt(lastOccurredOn: ISODate, tz: string): Date {
  // Implémentation device : date locale figée → 20:00. (Luxon/date-fns-tz côté app ; ici UTC+offset géré par l'appelant serveur.)
  return new Date(`${lastOccurredOn}T20:00:00`);
}
export function reboundHours(lastOccurredOn: ISODate, tz: string, completedAt: Date): number {
  const ms = completedAt.getTime() - lapseEndAt(lastOccurredOn, tz).getTime();
  return Math.max(0.1, Math.round((ms / 3600_000) * 10) / 10);
}

// ---------------------------------------------------------------- BR-12 : groupage de vague
export const WAVE_WINDOW_H = 72;
export function belongsToWave(lastEventAt: ISODateTime, newEventAt: ISODateTime): boolean {
  return (new Date(newEventAt).getTime() - new Date(lastEventAt).getTime()) / 3600_000 <= WAVE_WINDOW_H;
}

// ---------------------------------------------------------------- BR-03 : détection de crise (texte libre)
/**
 * ⚠️ LISTE DE TRAVAIL — la liste de production est établie et VALIDÉE PAR LA CLINICIENNE
 * (ticket LUC-62) avant toute mise en prod. Faux positifs acceptés, faux négatifs non.
 * Normalisation : minuscules, sans accents, avant match.
 */
const CRISIS_PATTERNS: RegExp[] = [
  /\ben finir\b/, /\bplus envie de vivre\b/, /\bme faire du mal\b/,
  /\bsuicid/, /\bdisparaitre pour de bon\b/, /\bme tuer\b/,
];
export function crisisPatternMatch(freeText: string): boolean {
  const t = freeText.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  return CRISIS_PATTERNS.some((p) => p.test(t));
}

// ---------------------------------------------------------------- Agrégats affichés (É17)
export function daysWithinCumulative(checkins: Pick<Checkin, 'withinEnvelope'>[]): { within: number; total: number } {
  const within = checkins.filter((c) => c.withinEnvelope).length;
  return { within, total: checkins.length }; // BR-13 : cumulatif, ne décroît jamais, jamais « jour 0 »
}
export function medianMinutes(durationsS: number[]): number | null {
  if (durationsS.length === 0) return null;
  const s = [...durationsS].sort((x, y) => x - y);
  const mid = Math.floor(s.length / 2);
  const sec = s.length % 2 ? s[mid] : (s[mid - 1] + s[mid]) / 2;
  return Math.round(sec / 60);
}
