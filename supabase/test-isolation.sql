-- Test de recette à exécuter dans SQL Editor APRÈS schema.sql. Tout est annulé.
begin;
insert into auth.users(id) values ('aaaaaaaa-1111-4111-8111-111111111111'),('bbbbbbbb-2222-4222-8222-222222222222');
set local role authenticated;
select set_config('request.jwt.claim.sub','aaaaaaaa-1111-4111-8111-111111111111',true);
select public.save_learning_state(0,'{"djoniaCompletedLessons":["1:0"]}');
select set_config('request.jwt.claim.sub','bbbbbbbb-2222-4222-8222-222222222222',true);
do $$ begin
 if exists(select 1 from public.learning_state) then raise exception 'FAIL: B voit A'; end if;
end $$;
select public.save_learning_state(0,'{"djoniaCompletedLessons":["2:0"]}');
select set_config('request.jwt.claim.sub','aaaaaaaa-1111-4111-8111-111111111111',true);
do $$ begin
 if (select count(*) from public.learning_state) <> 1 then raise exception 'FAIL isolation'; end if;
 if (select payload->'djoniaCompletedLessons' from public.learning_state) <> '["1:0"]'::jsonb then raise exception 'FAIL contenu A'; end if;
 begin
  update public.learning_state set payload='{}';
  raise exception 'FAIL écriture directe autorisée';
 exception when insufficient_privilege then null;
 end;
 begin
  perform public.save_learning_state(0,'{}');
  raise exception 'FAIL conflit accepté';
 exception when raise_exception then
  if sqlerrm not like 'Conflict:%' then raise; end if;
 end;
end $$;
reset role;
set local role anon;
do $$ begin
 begin
  perform * from public.learning_state;
  raise exception 'FAIL lecture anonyme autorisée';
 exception when insufficient_privilege then null;
 end;
 begin
  perform public.save_learning_state(0,'{}');
  raise exception 'FAIL écriture anonyme autorisée';
 exception when insufficient_privilege then null;
 end;
end $$;
rollback;
