// CRON horaire : relance N3 (+24 h ±2 h, fenêtre 10-20 h locale, garde C3, UNE fois par vague — BR-20).
// Planification : supabase functions deploy n3-dispatch + schedule '0 * * * *' (service role).
import { createClient } from 'jsr:@supabase/supabase-js@2';

const N3_BODY = 'Pas de jugement ici. Un écart, c’est une donnée — pas une identité. 3 questions, 2 minutes, quand tu veux.'; // 🔒

Deno.serve(async () => {
  const supa = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!);
  const now = Date.now();
  // Vagues ouvertes, sans rebond, ouvertes il y a 22-26 h, N3 pas encore envoyée (kv jsonb payload.n3_sent absent).
  const { data: waves } = await supa.from('lapse_waves')
    .select('id, user_id, opened_at, profiles!inner(tz_at_start)')
    .is('closed_at', null);
  let sent = 0;
  for (const w of waves ?? []) {
    const age = (now - new Date(w.opened_at as string).getTime()) / 36e5;
    if (age < 22 || age > 26) continue;
    const { data: already } = await supa.from('proofs').select('id').eq('user_id', w.user_id).eq('kind', `n3_${w.id}`).maybeSingle();
    if (already) continue; // marqueur d'envoi unique (table dédiée n3_log en LUC-35 — proofs kind technique en attendant)
    const tz = (w as { profiles?: { tz_at_start?: string } }).profiles?.tz_at_start ?? 'Europe/Paris';
    const hour = Number(new Intl.DateTimeFormat('fr-FR', { hour: 'numeric', hour12: false, timeZone: tz }).format(new Date()));
    if (hour < 10 || hour >= 20) continue; // fenêtre locale
    const { data: tokens } = await supa.from('push_tokens').select('token').eq('user_id', w.user_id);
    for (const t of tokens ?? []) {
      await fetch('https://exp.host/--/api/v2/push/send', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ to: t.token, title: 'Lucide', body: N3_BODY, data: { url: `lucide://return/${w.id}` } }),
      });
    }
    await supa.from('proofs').insert({ id: crypto.randomUUID(), user_id: w.user_id, kind: `n3_${w.id}`, label: 'n3_sent', occurred_at: new Date().toISOString() });
    sent++;
  }
  return new Response(JSON.stringify({ sent }), { headers: { 'Content-Type': 'application/json' } });
});
