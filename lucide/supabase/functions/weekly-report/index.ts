// Edge Function : /weekly-report?week=YYYY-MM-DD — génération déterministe (mêmes règles que le client).
// V1 : le client génère aussi localement ; le serveur fait foi quand il est connecté (idempotent par user+week).
// TODO(LUC-39/41): partager le module weeklyReport de @lucide/shared via bundle esm — dupliqué minimalement ici en attendant.
import { createClient } from 'jsr:@supabase/supabase-js@2';

Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const week = url.searchParams.get('week');
  if (!week) return new Response(JSON.stringify({ code: 'VALIDATION', message: 'week requis' }), { status: 400 });
  const supa = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: req.headers.get('Authorization') ?? '' } } });
  const { data: existing } = await supa.from('weekly_reports').select('payload').eq('week_start', week).maybeSingle();
  if (existing) return new Response(JSON.stringify(existing.payload), { headers: { 'Content-Type': 'application/json' } });
  // Génération minimale serveur (stats brutes) — le rendu narratif complet vit dans @lucide/shared côté client.
  const { data: cks } = await supa.from('checkins').select('*').gte('date', week).lt('date', addDays(week, 7));
  const daysWithin = (cks ?? []).filter((c: { within_envelope: boolean }) => c.within_envelope).length;
  const payload = { weekStart: week, dataSufficient: (cks ?? []).length >= 3, b1: { titleKey: 'steady', slots: {}, stats: { daysWithin, cravingsCrossed: 0, checkins: (cks ?? []).length } }, b2: [], b4: { riskSlots: [], plansToValidate: [] } };
  await supa.from('weekly_reports').upsert({ week_start: week, payload }, { onConflict: 'user_id,week_start' });
  return new Response(JSON.stringify(payload), { headers: { 'Content-Type': 'application/json' } });
});
function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + n);
  return d.toISOString().slice(0, 10);
}
