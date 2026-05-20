-- Run this ONCE in the Supabase SQL editor (Dashboard → SQL Editor) to
-- prepare the Storage bucket the site uses for plate images.
--
-- After running, plate images saved from Admin land in the `portfolio` bucket
-- and only their public URLs are stored in the JSON row — dropping the row
-- size from ~20 MB to a few KB so the upsert can complete inside Supabase's
-- default 8s statement timeout.

-- 1. Create a public bucket called `portfolio`.
insert into storage.buckets (id, name, public)
  values ('portfolio', 'portfolio', true)
on conflict (id) do nothing;

-- 2. RLS policies on storage.objects scoped to this bucket.
--    Public can read (the live site fetches images via getPublicUrl).
--    Only authenticated users can insert / update / delete.

create policy "Public read portfolio bucket"
  on storage.objects for select
  using (bucket_id = 'portfolio');

create policy "Auth users upload portfolio bucket"
  on storage.objects for insert
  with check (
    bucket_id = 'portfolio'
    and auth.role() = 'authenticated'
  );

create policy "Auth users update portfolio bucket"
  on storage.objects for update
  using (
    bucket_id = 'portfolio'
    and auth.role() = 'authenticated'
  )
  with check (
    bucket_id = 'portfolio'
    and auth.role() = 'authenticated'
  );

create policy "Auth users delete portfolio bucket"
  on storage.objects for delete
  using (
    bucket_id = 'portfolio'
    and auth.role() = 'authenticated'
  );
