import type { GoalMode } from '@lucide/shared';
export interface TrajectoryItem { when: string; text: string; evidence: 'green' | 'yellow' }
export function trajectory72h(goal: GoalMode): TrajectoryItem[] {
  const common: TrajectoryItem[] = [
    { when: 'Ce soir', text: 'Endormissement possiblement plus long — ton sommeil réapprend à se passer d’aide.', evidence: 'green' },
    { when: 'Demain (J1)', text: 'Journée globalement normale ; envies brèves possibles en fin d’après-midi.', evidence: 'green' },
    { when: 'J2', text: 'Le début du pic : irritabilité et envies plus nettes, surtout entre 18 h et 21 h.', evidence: 'green' },
    { when: 'J3', text: 'Le sommet de la vague — puis ça redescend. C’est une courbe, pas un état.', evidence: 'green' },
  ];
  if (goal === 'reduce') {
    common.push({ when: 'Ce week-end', text: 'Premier vrai test social probable : ton si-alors sera prêt avant.', evidence: 'yellow' });
  } else {
    common.push({ when: 'J4-J7', text: 'Rêves plus intenses possibles : ton sommeil paradoxal rattrape — bon signe.', evidence: 'yellow' });
  }
  return common;
}
export const PHASES = [
  { from: 1, to: 14, name: 'La traversée' },
  { from: 15, to: 45, name: 'La reconstruction' },
  { from: 46, to: 70, name: 'Le plateau' },
  { from: 71, to: 90, name: 'La consolidation' },
] as const;
export function phaseFor(day: number): string {
  return PHASES.find((p) => day >= p.from && day <= p.to)?.name ?? 'La suite';
}
