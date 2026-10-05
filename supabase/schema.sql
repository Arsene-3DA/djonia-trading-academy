-- À exécuter une fois dans un projet Supabase dédié.
begin;
create table public.learning_state (
 user_id uuid primary key references auth.users(id) on delete cascade,
 payload jsonb not null default '{}'::jsonb check (jsonb_typeof(payload)='object' and octet_length(payload::text)<=2000000),
 revision bigint not null default 0,
 updated_at timestamptz not null default now()
);
alter table public.learning_state enable row level security;
revoke all on public.learning_state from anon, authenticated;
grant select on public.learning_state to authenticated;
create policy own_progress on public.learning_state for select to authenticated using ((select auth.uid())=user_id);
-- Écriture uniquement via RPC : identité issue du jeton et contrôle de version.
create function public.save_learning_state(expected_revision bigint,new_payload jsonb)
returns bigint language plpgsql security definer set search_path = '' as $$
declare next_revision bigint;
begin
 if auth.uid() is null then raise exception 'Unauthenticated'; end if;
 insert into public.learning_state(user_id) values(auth.uid()) on conflict do nothing;
 update public.learning_state set payload=new_payload,revision=revision+1,updated_at=now()
 where user_id=auth.uid() and revision=expected_revision returning revision into next_revision;
 if next_revision is null then raise exception 'Conflict: reload latest account state'; end if;
 return next_revision;
end;
$$;
revoke all on function public.save_learning_state(bigint,jsonb) from public,anon;
grant execute on function public.save_learning_state(bigint,jsonb) to authenticated;
commit;
