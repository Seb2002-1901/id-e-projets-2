-- LUCIDE — seed de développement (staging/local uniquement — JAMAIS en prod)
-- Personas : Claire (parcours nominal J12, 1 vague rebondie), Marc (J3, vague ouverte).

insert into users (id, auth_id, locale) values
  ('00000000-0000-4000-a000-000000000001','10000000-0000-4000-a000-000000000001','fr-FR'),
  ('00000000-0000-4000-a000-000000000002','10000000-0000-4000-a000-000000000002','fr-FR');

insert into profiles (user_id, goal, reasons, triggers, risk_slots, ally_name, ally_phone_e164, journey_start, tz_at_start) values
  ('00000000-0000-4000-a000-000000000001','reduce','{sommeil,contrôle}','{stress,social}',
   '[{"dow":5,"slot":"evening"},{"dow":6,"slot":"evening"}]','Sophie','+33600000001',
   current_date - 12, 'Europe/Paris'),
  ('00000000-0000-4000-a000-000000000002','stop','{santé}','{evening_habit,boredom}',
   '[{"dow":3,"slot":"evening"}]', null, null, current_date - 3, 'Europe/Paris');

insert into envelopes (id, user_id, version, rules, active) values
  ('00000000-0000-4000-b000-000000000001','00000000-0000-4000-a000-000000000001',1,
   '{"maxWeek":4,"maxOccasion":2,"offDays":[1,2,3,4]}', true),
  ('00000000-0000-4000-b000-000000000002','00000000-0000-4000-a000-000000000002',1,
   '{"zero":true}', true);

-- Claire : 12 check-ins (J-12 → J-1), un écart à J-4, rebond en 26 h.
insert into checkins (id, user_id, date, mood, cravings, within_envelope, drinks_count)
select gen_random_uuid(),'00000000-0000-4000-a000-000000000001',
       current_date - s, 3 + (s % 2), (s % 3), (s <> 4), case when s = 4 then 5 end
from generate_series(1,12) s;

insert into lapse_waves (id, user_id, opened_at, detected_via, closed_at, close_reason) values
  ('00000000-0000-4000-c000-000000000001','00000000-0000-4000-a000-000000000001',
   (current_date - 4)::timestamptz + interval '21 hours','checkin',
   (current_date - 3)::timestamptz + interval '22 hours','rebound');
insert into lapse_events (id, wave_id, user_id, occurred_on, drinks_count) values
  (gen_random_uuid(),'00000000-0000-4000-c000-000000000001','00000000-0000-4000-a000-000000000001',current_date - 4,5);
insert into lapse_context (wave_id, user_id, where_chip, who_chip, emotion_chip, helper_chip) values
  ('00000000-0000-4000-c000-000000000001','00000000-0000-4000-a000-000000000001','bar','collègues','stress','partir_plus_tot');
insert into rebounds (wave_id, user_id, protocol_completed_at, rebound_hours) values
  ('00000000-0000-4000-c000-000000000001','00000000-0000-4000-a000-000000000001',
   (current_date - 3)::timestamptz + interval '22 hours', 26.0);

insert into if_then_plans (id, user_id, trigger_label, if_text, then_text, source) values
  (gen_random_uuid(),'00000000-0000-4000-a000-000000000001','Apéro équipe',
   'Si on me ressert sans me demander','Je pose la main sur le verre et je dis « je suis calée »','post_lapse');

insert into proofs (id, user_id, kind, label, occurred_at) values
  (gen_random_uuid(),'00000000-0000-4000-a000-000000000001','first_week','Première semaine dans l''enveloppe', now() - interval '5 days'),
  (gen_random_uuid(),'00000000-0000-4000-a000-000000000001','rebound_record','Record de rebond : 26 h', now() - interval '3 days');

-- Marc : vague ouverte (protocole non fait) → cible de test du cron N3.
insert into checkins (id, user_id, date, mood, cravings, within_envelope, drinks_count) values
  (gen_random_uuid(),'00000000-0000-4000-a000-000000000002',current_date - 1, 2, 3, false, 4);
insert into lapse_waves (id, user_id, opened_at, detected_via) values
  ('00000000-0000-4000-c000-000000000002','00000000-0000-4000-a000-000000000002',
   (current_date - 1)::timestamptz + interval '20 hours','checkin');
insert into lapse_events (id, wave_id, user_id, occurred_on, drinks_count) values
  (gen_random_uuid(),'00000000-0000-4000-c000-000000000002','00000000-0000-4000-a000-000000000002',current_date - 1,4);

insert into notif_prefs (user_id) values
  ('00000000-0000-4000-a000-000000000001'),
  ('00000000-0000-4000-a000-000000000002');
insert into subscriptions (user_id, status, trial_end) values
  ('00000000-0000-4000-a000-000000000001','trial', now() + interval '5 days'),
  ('00000000-0000-4000-a000-000000000002','free', null);
