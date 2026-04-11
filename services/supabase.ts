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

function isAuthOrRlsUpsertError(err: { message?: string; code?: string } | null): boolean {
  if (!err) return false;
  const s = `${err.message ?? ''} ${err.code ?? ''}`.toLowerCase();
  return (
    s.includes('jwt')
    || s.includes('expired')
    || s.includes('invalid')
    || s.includes('unauthorized')
    || s.includes('401')
    || s.includes('403')
    || s.includes('row-level security')
    || s.includes('rls')
    || s.includes('permission denied')
    || s.includes('not authorized')
  );
}

/** Publish portfolio to Supabase (requires a session with JWT). Prefer getSession(); refresh + retry once on auth/RLS upsert errors (expired JWT). */
export async function publishPortfolioToSupabase(data: PortfolioData): Promise<void> {
  const supabase = getClient();
  if (!supabase) return;
  const run = async (): Promise<void> => {
    let { data: { session } } = await supabase.auth.getSession();
    if (!session?.access_token) {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      ({ data: { session } } = await supabase.auth.getSession());
    }
    if (!session?.access_token) return;
    const attemptUpsert = async () =>
      supabase.from(TABLE).upsert({ id: ROW_ID, data }, { onConflict: 'id' });

    let { error } = await attemptUpsert();
    if (!error) return;
    if (isAuthOrRlsUpsertError(error)) {
      await supabase.auth.refreshSession();
      const second = await attemptUpsert();
      if (!second.error) return;
      throw new Error(second.error.message);
    }
    throw new Error(error.message);
  };
  try {
    await withRetry(run);
  } catch (e) {
    if (typeof console !== 'undefined' && console.warn) {
      console.warn('Live publish to Supabase failed:', e instanceof Error ? e.message : e);
    }
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
