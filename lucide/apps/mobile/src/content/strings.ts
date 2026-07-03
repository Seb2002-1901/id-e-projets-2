/** Textes de l'app. Les clés 🔒 (CDC §9) sont DÉFINITIVES — toute modification = décision CEO. */
export const S = {
  promise: 'On ne te promet pas que ce sera facile.\nOn te promet que tu ne seras plus jamais surpris.', // 🔒
  promiseSub: 'Essai gratuit 7 jours · Le SOS restera gratuit à vie',
  start: 'Commencer',
  triageIntro: 'Deux minutes pour vérifier que Lucide est le bon outil pour toi. On te doit cette honnêteté-là.', // 🔒
  orientation: 'Ce que tu traverses mérite mieux qu’une app seule. Un arrêt brutal peut être dangereux dans ta situation — pas parce que tu es « trop atteinte », mais parce que ton corps s’est adapté et qu’il faut l’accompagner médicalement. Commence par un appel gratuit et anonyme. Lucide sera là ensuite, en complément.', // 🔒
  vaultPrompt: 'Enregistre 30 secondes pour la personne que tu seras un soir de doute. Personne d’autre ne l’entendra jamais.', // 🔒
  sosKeyLine: 'Elle va redescendre. Elle redescend toujours.', // 🔒
  n3: 'Pas de jugement ici. Un écart, c’est une donnée — pas une identité. 3 questions, 2 minutes, quand tu veux.', // 🔒
  p1: 'Content de te revoir. Il en faut, du courage, pour rouvrir cette app — c’est exactement ce courage-là qui fait réussir les parcours. La majorité des parcours qui aboutissent comportent des écarts. Le tien vient d’apprendre quelque chose.', // 🔒
  reboundLine: (x: number, y: number, z: string) => `${x} jours dans ton enveloppe sur ${y}. Rebond : ${z} — tu te relèves de plus en plus vite. C’est ça, la compétence.`, // 🔒
  paywallSafety: 'Le SOS et la sécurité resteront gratuits pour toujours, abonnée ou non.', // 🔒
  envelopeLockTonight: 'Pas ce soir. Ajuste ton cadre à tête reposée — demain.', // 🔒
  sosCravingBtn: 'J’ai une envie',
  sosDangerBtn: 'Je ne suis pas en sécurité',
  sosDangerLead: 'Tu as bien fait d’appuyer. Parle à un humain maintenant.',
  checkinOver: 'Merci de l’honnêteté. On regarde ça ensemble après.',
  landmarksEmpty: 'Tes preuves se construiront ici. La première : avoir commencé.',
  resumeBanner: 'Tout va comme tu veux ?',
} as const;

export const CRISIS_LINES = [
  { label: '3114 — Prévention du suicide (24/7, gratuit)', tel: '3114' },
  { label: '15 — SAMU', tel: '15' },
  { label: '112 — Urgences', tel: '112' },
  { label: 'Alcool Info Service', tel: '0980980930' },
] as const;
