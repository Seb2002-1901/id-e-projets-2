/**
 * LUCIDE — banques de phrases du bilan hebdomadaire (déterministe, V1 sans LLM).
 * ⚠️ Chaque phrase est soumise à la validation clinicienne (LUC-38) avant prod.
 * Convention : {slots} interpolés par renderPhrase(). Jamais de « ! », jamais de jugement.
 */

export const WEEKLY_TITLES: Record<string, string> = {
  first_week: 'Semaine 1 : celle où tout commence',
  hard_day: 'La semaine où {day} a failli gagner',
  steady: 'Une semaine qui tient sa ligne',
  rebound: 'La semaine du rebond',
  quiet: 'Une semaine calme — et ça compte aussi',
  sparse: 'Une semaine en pointillés',
};

export const TRISTATE_PHRASES: Record<string, string> = {
  envelope_up: 'Tu tiens ton enveloppe plus souvent que la semaine passée.',
  envelope_flat: 'Ton enveloppe tient. La stabilité est une forme de progrès.',
  envelope_down: 'Semaine plus difficile côté enveloppe. On regarde pourquoi, pas qui blâmer.',
  cravings_up: 'Moins d’envies que la semaine passée — le conditionnement s’éteint, doucement.',
  cravings_flat: 'Des envies stables. À ce stade du parcours, c’est attendu.',
  cravings_down: 'Plus d’envies cette semaine. C’est inconfortable et c’est documenté : ça passe par vagues.',
  mood_up: 'Ton humeur remonte.',
  mood_flat: 'Humeur stable.',
  mood_down: 'Humeur en baisse depuis plusieurs jours. Si ça continue, on en reparle sérieusement.',
};

export const WEEKLY_FACTS: Record<string, string> = {
  trigger_pattern: '{count} de tes envies sur {total} sont arrivées après « {trigger} ». Corrélation, pas certitude — on surveille.',
  day_pattern: 'Le {day} revient comme ton moment sensible. On le prépare la semaine prochaine.',
  tool_works: '« {tool} » a fonctionné {wins} fois sur {tries} chez toi. On le met en premier dans ton SOS.',
  rebound_fast: 'Tu es revenue {hours} h après ton écart. C’est ça, la compétence qui compte.',
};

export const DAY_NAMES: readonly string[] = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];

export function renderPhrase(template: string, slots: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, k: string) => String(slots[k] ?? `{${k}}`));
}
