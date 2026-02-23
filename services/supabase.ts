import { createClient, type User } from '@supabase/supabase-js';
import type { PortfolioData } from '../types';

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL?.trim() || '';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY?.trim() || '';

const TABLE = 'portfolio';
const ROW_ID = 1;

let client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (!client) client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

/** Fetch published portfolio from Supabase (anon read). */
export async function getPortfolioFromSupabase(): Promise<PortfolioData | null> {
  const supabase = getClient();
  if (!supabase) return null;
  try {
    const { data: row, error } = await supabase
      .from(TABLE)
      .select('data')
      .eq('id', ROW_ID)
      .maybeSingle();
    if (error || !row?.data) return null;
    const parsed = row.data as PortfolioData;
    if (parsed && Array.isArray(parsed.projects)) return parsed;
  } catch (_) {}
  return null;
}

/** Publish portfolio to Supabase (requires authenticated user). Called on every admin save. */
export async function publishPortfolioToSupabase(data: PortfolioData): Promise<void> {
  const supabase = getClient();
  if (!supabase) return;
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return;
  await supabase.from(TABLE).upsert({ id: ROW_ID, data }, { onConflict: 'id' });
}

export async function signInWithSupabase(email: string, password: string): Promise<{ error: string | null }> {
  const supabase = getClient();
  if (!supabase) return { error: 'Supabase not configured' };
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  return { error: error?.message ?? null };
}

export async function signOutFromSupabase(): Promise<void> {
  const supabase = getClient();
  if (supabase) await supabase.auth.signOut();
}

export function onSupabaseAuthChange(cb: (user: User | null) => void): () => void {
  const supabase = getClient();
  if (!supabase) return () => {};
  const { data: { subscription } } = supabase.auth.onAuthStateChange((_, session) => {
    cb(session?.user ?? null);
  });
  return () => subscription.unsubscribe();
}

export async function getSupabaseUser(): Promise<User | null> {
  const supabase = getClient();
  if (!supabase) return null;
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}
