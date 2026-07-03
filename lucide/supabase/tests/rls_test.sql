-- Test RLS multi-comptes (CI job db). Simule deux utilisateurs via jwt claims.
-- Échoue (exit non-zéro via \set ON_ERROR_STOP) si un utilisateur voit les lignes d'un autre.
\set ON_ERROR_STOP on
begin;
select set_config('request.jwt.claims', json_build_object('sub', '10000000-0000-4000-a000-000000000001', 'role', 'authenticated')::text, true);
set local role authenticated;
do $$
declare n int;
begin
  select count(*) into n from checkins;
  if n = 0 then raise exception 'RLS: Claire devrait voir ses check-ins'; end if;
  select count(*) into n from checkins c join users u on u.id = c.user_id where u.auth_id <> '10000000-0000-4000-a000-000000000001';
  if n > 0 then raise exception 'RLS VIOLATION: Claire voit les lignes de Marc'; end if;
end $$;
rollback;
select 'RLS OK' as result;
