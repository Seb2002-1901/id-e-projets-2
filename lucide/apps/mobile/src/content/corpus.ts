import type { ContentCard, GoalMode } from '@lucide/shared';
import raw from './corpus.json';

const cards = raw as ContentCard[];

/** Rend le corps selon le mode (blocs conditionnels {{#stop}} / {{#reduce}} — décision S3). */
export function renderBody(md: string, goal: GoalMode): string {
  const keep = goal, drop = goal === 'stop' ? 'reduce' : 'stop';
  return md
    .replaceAll(`{{#${keep}}}`, '').replaceAll(`{{/${keep}}}`, '')
    .replace(new RegExp(`\\{\\{#${drop}\\}\\}[\\s\\S]*?\\{\\{/${drop}\\}\\}`, 'g'), '')
    .trim();
}

export function cardForDay(day: number): ContentCard | null {
  const exact = cards.find((c) => c.dayIndex === day);
  if (exact) return exact;
  if (day > 90) { // rotation maintenance
    const m = cards.filter((c) => c.arc === 'consolidate');
    return m.length ? (m[(day - 91) % m.length] ?? null) : null;
  }
  // TODO(LUC-61): corpus complet 90 cartes — en attendant, la dernière carte disponible ≤ day.
  const before = cards.filter((c) => c.dayIndex <= day && c.arc !== 'consolidate').sort((a, b) => b.dayIndex - a.dayIndex);
  return before[0] ?? null;
}
export function pastCards(day: number): ContentCard[] {
  return cards.filter((c) => c.dayIndex <= Math.min(day, 90)).sort((a, b) => b.dayIndex - a.dayIndex);
}
export const CORPUS_VERSION = 1;
