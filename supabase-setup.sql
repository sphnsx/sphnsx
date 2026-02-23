-- Run this in the Supabase SQL editor (Dashboard → SQL Editor) for your project.
-- One-time setup: creates the portfolio table and RLS so anyone can read, only signed-in users can write.

create table if not exists public.portfolio (
  id int primary key default 1,
  data jsonb not null default '{}',
  constraint single_row check (id = 1)
);

-- Allow anonymous read (so the live site can load data)
alter table public.portfolio enable row level security;

create policy "Anyone can read portfolio"
  on public.portfolio for select
  using (true);

create policy "Authenticated users can insert portfolio"
  on public.portfolio for insert
  with check (auth.role() = 'authenticated');

create policy "Authenticated users can update portfolio"
  on public.portfolio for update
  using (auth.role() = 'authenticated')
  with check (auth.role() = 'authenticated');

-- Insert initial row so the app can upsert
insert into public.portfolio (id, data) values (1, '{"aboutMe":"","projects":[]}')
on conflict (id) do nothing;
