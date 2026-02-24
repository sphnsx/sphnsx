import { createClient, type User } from '@supabase/supabase-js';
import type { PortfolioData } from '../types';

const SUPABASE_URL = import.meta.env?.VITE_SUPABASE_URL?.trim() || '';
const SUPABASE_ANON_KEY = import.meta.env?.VITE_SUPABASE_ANON_KEY?.trim() || '';

const TABLE = 'portfolio';
const ROW_ID = 1;

/** Retry once after a short delay to tolerate statement timeout / cold start on Supabase. */
async function withRetry<T>(fn: () => Promise<T>, delayMs = 1500): Promise<T> {
  try {
    return await fn();
  } catch (e) {
    await new Promise((r) => setTimeout(r, delayMs));
    return fn();
  }
}

let client: ReturnType<typeof createClient> | null = null;

function getClient() {
  if (!SUPABASE_URL || !SUPABASE_ANON_KEY) return null;
  if (!client) client = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  return client;
}

export function isSupabaseConfigured(): boolean {
  return Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);
}

/** Fetch published portfolio from Supabase (anon read). Retries once on timeout/500. */
export async function getPortfolioFromSupabase(): Promise<PortfolioData | null> {
  const supabase = getClient();
  if (!supabase) return null;
  const run = async (): Promise<PortfolioData | null> => {
    const { data: row, error } = await supabase
      .from(TABLE)
      .select('data')
      .eq('id', ROW_ID)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!row?.data) return null;
    const parsed = row.data as PortfolioData;
    return parsed && Array.isArray(parsed.projects) ? parsed : null;
  };
  try {
    return await withRetry(run);
  } catch (_) {
    return null;
  }
}

/** Publish portfolio to Supabase (requires authenticated user). Retries once on statement timeout. */
export async function publishPortfolioToSupabase(data: PortfolioData): Promise<void> {
  const supabase = getClient();
  if (!supabase) return;
  const run = async (): Promise<void> => {
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) return;
    const { error } = await supabase.from(TABLE).upsert({ id: ROW_ID, data }, { onConflict: 'id' });
    if (error) throw new Error(error.message);
  };
  try {
    await withRetry(run);
  } catch (_) {
    // Already logged or surfaced elsewhere; avoid unhandled rejection
  }
}

function isNetworkError(error: { message?: string; status?: number } | null): boolean {
  if (!error) return false;
  const msg = (error.message ?? '').toLowerCase();
  const status = (error as unknown as { status?: number }).status;
  return msg.includes('failed to fetch') || status === 0;
}

export async function signInWithSupabase(email: string, password: string): Promise<{ error: string | null }> {
  const supabase = getClient();
  if (!supabase) return { error: 'Supabase not configured' };
  const trySignIn = async (): Promise<{ error: string | null }> => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (!error) return { error: null };
    const displayMessage = isNetworkError(error as unknown as { message?: string; status?: number })
      ? 'Cannot reach Supabase. Check your connection and project status in the Supabase dashboard.'
      : (error.message ?? null);
    return { error: displayMessage };
  };
  const first = await trySignIn();
  if (!first.error) return first;
  const msg = first.error.toLowerCase();
  const isRetryable = msg.includes('cannot reach supabase') || msg.includes('fetch') || msg.includes('timeout');
  if (!isRetryable) return first;
  await new Promise((r) => setTimeout(r, 1500));
  return trySignIn();
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
