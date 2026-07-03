// Edge Function : /sync-push — upsert idempotent des mutations client (outbox).
// Déploiement : supabase functions deploy sync-push
// TODO(LUC-08): exécuter reduceWave côté serveur (import de @lucide/shared via esm build) pour re-valider vagues/rebonds.
import { createClient } from 'jsr:@supabase/supabase-js@2';

type Row = Record<string, unknown>;

Deno.serve(async (req: Request) => {
  const auth = req.headers.get('Authorization') ?? '';
  const supa = createClient(
    Deno.env.get('SUPABASE_URL')!,
    Deno.env.get('SUPABASE_ANON_KEY')!,
    { global: { headers: { Authorization: auth } } }, // RLS s'applique avec le JWT utilisateur
  );
  const { data: userRes } = await supa.auth.getUser();
  if (!userRes?.user) return json({ code: 'AUTH', message: 'non authentifié' }, 401);

  const body = (await req.json()) as Record<string, Row[]>;
  const accepted: string[] = [];
  const rejected: { id: string; reason: string }[] = [];

  const tables: Record<string, { table: string; conflict: string }> = {
    checkin: { table: 'checkins', conflict: 'user_id,date' },      // C6
    sos: { table: 'sos_sessions', conflict: 'id' },
    wave: { table: 'lapse_waves', conflict: 'id' },
    lapse_event: { table: 'lapse_events', conflict: 'id' },
    lapse_context: { table: 'lapse_context', conflict: 'wave_id' },
    plan: { table: 'if_then_plans', conflict: 'id' },
    proof: { table: 'proofs', conflict: 'id' },
    push_token: { table: 'push_tokens', conflict: 'user_id,token' },
  };

  const { data: me } = await supa.from('users').select('id').single();
  const userId = (me as Row | null)?.id;
  if (!userId) return json({ code: 'AUTH', message: 'profil manquant' }, 401);

  for (const [kind, rows] of Object.entries(body)) {
    const cfg = tables[kind];
    for (const row of rows ?? []) {
      const id = String(row.id ?? row.waveId ?? '');
      if (!cfg) { rejected.push({ id, reason: `kind inconnu: ${kind}` }); continue; }
      const { error } = await supa.from(cfg.table)
        .upsert({ ...snake(row), user_id: userId }, { onConflict: cfg.conflict });
      if (error) rejected.push({ id, reason: error.message });
      else accepted.push(id);
    }
  }
  // protocol_completion : calcul serveur du rebond (BR-14 simplifiée ici ; reduceWave complet en LUC-08)
  for (const pc of body['protocol_completion'] ?? []) {
    const waveId = String(pc.waveId ?? '');
    const { data: ev } = await supa.from('lapse_events').select('occurred_on').eq('wave_id', waveId)
      .order('occurred_on', { ascending: false }).limit(1).single();
    if (!ev) { rejected.push({ id: waveId, reason: 'vague inconnue' }); continue; }
    const end = new Date(`${(ev as Row).occurred_on}T20:00:00`);
    const hours = Math.max(0.1, Math.round(((new Date(String(pc.completedAt)).getTime() - end.getTime()) / 36e5) * 10) / 10);
    const { error } = await supa.from('rebounds').upsert(
      { wave_id: waveId, user_id: userId, protocol_completed_at: pc.completedAt, rebound_hours: hours },
      { onConflict: 'wave_id' });
    if (error) rejected.push({ id: waveId, reason: error.message });
    else {
      accepted.push(waveId);
      await supa.from('lapse_waves').update({ closed_at: pc.completedAt, close_reason: 'rebound' }).eq('id', waveId);
    }
  }
  return json({ accepted, rejected });
});

function snake(o: Row): Row {
  const out: Row = {};
  for (const [k, v] of Object.entries(o)) out[k.replace(/[A-Z]/g, (m) => `_${m.toLowerCase()}`)] = v;
  return out;
}
function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });
}
