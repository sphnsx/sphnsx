import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { exportPortfolioJson } from '../services/storageService';
import {
  isSupabaseConfigured,
  signInWithSupabase,
  signOutFromSupabase,
  onSupabaseAuthChange,
  getSupabaseUser,
} from '../services/supabase';
import type { User } from '@supabase/supabase-js';

const DeploymentPage: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [supabaseUser, setSupabaseUser] = useState<User | null>(null);
  const [supabaseEmail, setSupabaseEmail] = useState('');
  const [supabasePassword, setSupabasePassword] = useState('');
  const [supabaseLoading, setSupabaseLoading] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);

  useEffect(() => {
    if (!isSupabaseConfigured()) return;
    getSupabaseUser().then(setSupabaseUser);
    return onSupabaseAuthChange(setSupabaseUser);
  }, []);

  const handleExportPortfolio = async () => {
    setExporting(true);
    try {
      const json = await exportPortfolioJson();
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'portfolio.json';
      a.click();
      URL.revokeObjectURL(url);
    } finally {
      setExporting(false);
    }
  };

  const handleSupabaseSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setSupabaseError(null);
    setSupabaseLoading(true);
    const { error } = await signInWithSupabase(supabaseEmail, supabasePassword);
    setSupabaseLoading(false);
    if (error) setSupabaseError(error);
  };

  const handleSupabaseSignOut = () => {
    signOutFromSupabase();
    setSupabaseEmail('');
    setSupabasePassword('');
    setSupabaseError(null);
  };

  return (
    <div className="min-h-screen bg-bgMain pt-pageTop px-6 pb-12 max-w-2xl text-textPrimary">
      <h1 className="font-mono text-sm uppercase tracking-wider mb-6">Deployment</h1>

      {isSupabaseConfigured() && (
        <section className="border border-paletteBorder p-6 space-y-4 rounded-sm mb-6">
          <h2 className="font-mono text-xs uppercase tracking-wider mb-2">Live publish (automatic)</h2>
          <p className="font-mono text-sm text-textSecondary">
            When signed in, every save in Admin (projects, about, etc.) updates the live site. No download or file steps.
          </p>
          {supabaseUser ? (
            <div className="space-y-2">
              <p className="font-mono text-sm text-textPrimary">Signed in. Saves will update the live site.</p>
              <button
                type="button"
                onClick={handleSupabaseSignOut}
                className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm"
              >
                Sign out
              </button>
            </div>
          ) : (
            <form onSubmit={handleSupabaseSignIn} className="space-y-3">
              <input
                type="email"
                placeholder="Email"
                value={supabaseEmail}
                onChange={(e) => setSupabaseEmail(e.target.value)}
                required
                className="font-mono text-sm w-full border border-paletteBorder px-3 py-2 bg-bgMain rounded-sm"
              />
              <input
                type="password"
                placeholder="Password"
                value={supabasePassword}
                onChange={(e) => setSupabasePassword(e.target.value)}
                required
                className="font-mono text-sm w-full border border-paletteBorder px-3 py-2 bg-bgMain rounded-sm"
              />
              {supabaseError && <p className="font-mono text-xs text-red-600">{supabaseError}</p>}
              <button
                type="submit"
                disabled={supabaseLoading}
                className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm disabled:opacity-50"
              >
                {supabaseLoading ? 'Signing in…' : 'Sign in to enable live publish'}
              </button>
            </form>
          )}
        </section>
      )}

      <section className="border border-paletteBorder p-6 space-y-4 rounded-sm mb-6">
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">Manual publish (optional)</h2>
        <p className="font-mono text-sm text-textSecondary">
          Or publish via a static file: download <code className="bg-bgSidebar px-1">portfolio.json</code>, add to <code className="bg-bgSidebar px-1">docs/</code>, build with <code className="bg-bgSidebar px-1">VITE_PORTFOLIO_URL</code>, then deploy.
        </p>
        <button
          type="button"
          onClick={handleExportPortfolio}
          disabled={exporting}
          className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm disabled:opacity-50"
        >
          {exporting ? 'Preparing…' : 'Download portfolio.json'}
        </button>
      </section>

      <section className="border border-paletteBorder p-6 space-y-4 rounded-sm mb-6">
        <h2 className="font-mono text-xs uppercase tracking-wider mb-2">Domain setup</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-2">1. Naked domain (A record)</h3>
            <p className="font-mono text-sm">Add an A record for your root domain (@) pointing to your host IP.</p>
          </div>
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider mb-2">2. Redirect</h3>
            <p className="font-mono text-sm">Set domain forwarding from your root domain to https://www.yourdomain.com (301 redirect).</p>
          </div>
        </div>
      </section>

      <p className="mt-6">
        <Link to="/" className="font-mono text-xs uppercase tracking-wider border border-paletteBorder px-4 py-2 inline-block bg-bgMain hover:bg-neutral-800 hover:text-white transition-colors duration-150 rounded-sm">
          Back to home
        </Link>
      </p>
    </div>
  );
};

export default DeploymentPage;
