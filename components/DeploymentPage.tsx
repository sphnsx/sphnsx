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
import Breadcrumb from './Breadcrumb';
import AdminButton from './admin/AdminButton';
import AdminInput from './admin/AdminInput';
import AdminSectionCard from './admin/AdminSectionCard';

const DeploymentPage: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [supabaseUser, setSupabaseUser] = useState<User | null>(null);
  const [supabaseEmail, setSupabaseEmail] = useState('');
  const [supabasePassword, setSupabasePassword] = useState('');
  const [supabaseLoading, setSupabaseLoading] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
    <div className="min-h-screen bg-bgMain text-textPrimary pb-24">
      <div className="px-12 pt-12">
        <Breadcrumb trail={['SPHNSX', 'Admin', 'Deployment']} />
      </div>
      <div className="px-12 pt-9 pb-16 max-w-[760px]">
        <span className="block font-mono text-[11px] uppercase tracking-wider text-textSecondary mb-2">
          Site operations
        </span>
        <h1 className="font-sans text-[40px] font-bold leading-[1.05] tracking-[-0.01em] text-textPrimary mb-9">
          Deployment
        </h1>

        <div className="flex flex-col gap-6">
          {isSupabaseConfigured() && (
            <AdminSectionCard
              heading="01 · Live publish (automatic)"
              sub="When signed in, every save in Admin (projects, about, contact) updates the live site instantly. No download or file steps."
            >
              {supabaseUser ? (
                <div className="flex flex-col gap-3.5">
                  <p className="font-mono text-xs text-textPrimary flex items-center gap-2.5">
                    <span className="inline-block w-2 h-2 bg-accent" aria-hidden />
                    Signed in. Saves will update the live site.
                  </p>
                  <div>
                    <AdminButton size="sm" onClick={handleSupabaseSignOut}>
                      Sign out
                    </AdminButton>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSupabaseSignIn} className="flex flex-col gap-3.5">
                  <AdminInput
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    value={supabaseEmail}
                    onChange={(e) => setSupabaseEmail(e.target.value)}
                    required
                  />
                  <AdminInput
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    value={supabasePassword}
                    onChange={(e) => setSupabasePassword(e.target.value)}
                    required
                  />
                  {supabaseError && (
                    <p className="font-mono text-xs text-destructive">{supabaseError}</p>
                  )}
                  <div>
                    <AdminButton type="submit" variant="primary" size="md" disabled={supabaseLoading}>
                      {supabaseLoading ? 'Signing in…' : 'Sign in to enable live publish'}
                    </AdminButton>
                  </div>
                </form>
              )}
            </AdminSectionCard>
          )}

          <AdminSectionCard
            heading="02 · Manual publish (optional)"
            sub={
              <>
                Or publish via a static file: download{' '}
                <code className="bg-bgSidebar px-1">portfolio.json</code>, add to{' '}
                <code className="bg-bgSidebar px-1">docs/</code>, build with{' '}
                <code className="bg-bgSidebar px-1">VITE_PORTFOLIO_URL</code>, then deploy.
              </>
            }
          >
            <div>
              <AdminButton size="sm" onClick={handleExportPortfolio} disabled={exporting}>
                {exporting ? 'Preparing…' : 'Download portfolio.json'}
              </AdminButton>
            </div>
          </AdminSectionCard>

          <AdminSectionCard heading="03 · Domain setup">
            <div className="flex flex-col gap-4">
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-textPrimary mb-2">
                  1. Naked domain (A record)
                </span>
                <p className="font-sans text-sm leading-relaxed text-textSecondary">
                  Add an A record for your root domain (@) pointing to your host IP.
                </p>
              </div>
              <div className="h-px bg-neutral-200" />
              <div>
                <span className="block font-mono text-[11px] uppercase tracking-wider text-textPrimary mb-2">
                  2. Redirect
                </span>
                <p className="font-sans text-sm leading-relaxed text-textSecondary">
                  Set domain forwarding from your root domain to https://www.yourdomain.com (301
                  redirect).
                </p>
              </div>
            </div>
          </AdminSectionCard>
        </div>

        <div className="mt-9">
          <Link
            to="/"
            className="font-mono text-[11px] uppercase tracking-wider text-textPrimary hover:bg-accent px-1.5 -mx-1.5 py-0.5"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DeploymentPage;
