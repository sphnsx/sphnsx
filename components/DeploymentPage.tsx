import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { exportPortfolioJson, migrateImagesToStorage } from '../services/storageService';
import {
  isSupabaseConfigured,
  signInWithSupabase,
  signOutFromSupabase,
  onSupabaseAuthChange,
  getSupabaseUser,
} from '../services/supabase';
import type { User } from '@supabase/supabase-js';
import { PALETTE, HUES } from '../constants';
import AdminTop from './optc/admin/AdminTop';
import AdminBtn from './optc/admin/AdminBtn';
import CapV2 from './optc/CapV2';
import Footer from './optc/Footer';

const DeploymentPage: React.FC = () => {
  const [exporting, setExporting] = useState(false);
  const [supabaseUser, setSupabaseUser] = useState<User | null>(null);
  const [supabaseEmail, setSupabaseEmail] = useState('');
  const [supabasePassword, setSupabasePassword] = useState('');
  const [supabaseLoading, setSupabaseLoading] = useState(false);
  const [supabaseError, setSupabaseError] = useState<string | null>(null);
  const [migrating, setMigrating] = useState<{ done: number; total: number } | null>(null);

  const handleMigrate = async () => {
    if (!supabaseUser) {
      toast.error('Sign in below first so the migration can write to Storage.');
      return;
    }
    if (!confirm('Migrate all inline base64 images to Supabase Storage? This may take a minute.')) return;
    setMigrating({ done: 0, total: 0 });
    try {
      const summary = await migrateImagesToStorage((done, total) => setMigrating({ done, total }));
      toast.success(`Migrated ${summary.uploaded} image${summary.uploaded === 1 ? '' : 's'} (${summary.skipped} already in Storage).`);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : 'Migration failed');
    } finally {
      setMigrating(null);
    }
  };

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

  const handleViewRawData = async () => {
    const json = await exportPortfolioJson();
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank', 'noopener,noreferrer');
    setTimeout(() => URL.revokeObjectURL(url), 60_000);
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

  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;

  const inputStyle: React.CSSProperties = {
    fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
    fontSize: 16,
    padding: '12px 14px',
    background: paper,
    border: `1px solid ${ink}`,
    color: ink,
    outline: 'none',
    borderRadius: 0,
    width: '100%',
  };

  return (
    <div className="fixed inset-0 flex flex-col overflow-y-auto" style={{ background: paper, color: ink, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif' }}>
      <AdminTop trail={['Admin', 'Deployment']} />

      <section style={{ padding: '32px 32px 24px', borderBottom: `1px solid ${ink}` }}>
        <CapV2 size={10} color={muted}>Site operations</CapV2>
        <h1 style={{ margin: '12px 0 0', fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>Deployment.</h1>
        <p style={{ marginTop: 16, fontSize: 16, lineHeight: 1.55, color: muted, maxWidth: 720 }}>
          Publishing, backups and domain configuration. Changes here affect the live site.
        </p>
      </section>

      <section style={{ padding: '32px 32px 48px', display: 'flex', flexDirection: 'column', gap: 32 }}>
        {isSupabaseConfigured() && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <CapV2 size={10} color={muted}>01 · Live publish (automatic)</CapV2>
            <p style={{ margin: '0 0 12px', fontSize: 14, color: muted, lineHeight: 1.55, maxWidth: 720 }}>
              When signed in, every save in Admin updates the live site instantly.
            </p>
            {supabaseUser ? (
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 18px', border: `1px solid ${ink}`, background: PALETTE.greySoft, gap: 16, flexWrap: 'wrap' }}>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  <span style={{ width: 8, height: 8, background: HUES.mint }} />
                  <CapV2 size={11}>Signed in · saves update the live site</CapV2>
                </span>
                <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {supabaseUser.email && <CapV2 size={10} color={muted}>{supabaseUser.email}</CapV2>}
                  <AdminBtn onClick={handleSupabaseSignOut}>Sign out</AdminBtn>
                </span>
              </div>
            ) : (
              <form onSubmit={handleSupabaseSignIn} style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 460 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <CapV2 size={10} color={muted}>Email</CapV2>
                  <input type="email" placeholder="you@example.com" value={supabaseEmail} onChange={(e) => setSupabaseEmail(e.target.value)} required style={inputStyle} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                  <CapV2 size={10} color={muted}>Password</CapV2>
                  <input type="password" placeholder="••••••••" value={supabasePassword} onChange={(e) => setSupabasePassword(e.target.value)} required style={inputStyle} />
                </div>
                {supabaseError && (
                  <CapV2 size={10} color={PALETTE.destructive}>{supabaseError}</CapV2>
                )}
                <div>
                  <AdminBtn type="submit" primary disabled={supabaseLoading}>
                    {supabaseLoading ? 'Signing in…' : 'Sign in to enable live publish'}
                  </AdminBtn>
                </div>
              </form>
            )}
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CapV2 size={10} color={muted}>02 · Manual publish (fallback)</CapV2>
          <p style={{ margin: '0 0 12px', fontSize: 14, color: muted, lineHeight: 1.55, maxWidth: 720 }}>
            If live publish is offline, download portfolio.json and drop it into the public/ folder of the static site.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            <AdminBtn onClick={handleExportPortfolio} disabled={exporting}>
              {exporting ? 'Preparing…' : 'Download portfolio.json'}
            </AdminBtn>
            <AdminBtn onClick={handleViewRawData}>View raw data</AdminBtn>
          </div>
        </div>

        {/* Storage migration — run once to move base64 plates out of the JSON row. */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CapV2 size={10} color={muted}>03 · Image storage</CapV2>
          <p style={{ margin: '0 0 12px', fontSize: 14, color: muted, lineHeight: 1.55, maxWidth: 720 }}>
            Move existing inline base64 plate images to Supabase Storage. The JSON row drops from
            many megabytes to a few KB so saves never hit the statement timeout. Re-runnable — only
            images that aren't yet in Storage are uploaded.
          </p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', alignItems: 'center' }}>
            <AdminBtn onClick={handleMigrate} disabled={Boolean(migrating)}>
              {migrating
                ? (migrating.total > 0 ? `Migrating ${migrating.done} / ${migrating.total}…` : 'Preparing…')
                : 'Migrate images to Storage'}
            </AdminBtn>
            {migrating && migrating.total > 0 && (
              <CapV2 size={10} color={muted}>
                {Math.round((migrating.done / migrating.total) * 100)}%
              </CapV2>
            )}
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CapV2 size={10} color={muted}>04 · Domain setup</CapV2>
          <p style={{ margin: 0, fontSize: 14, color: muted, lineHeight: 1.55, maxWidth: 720 }}>
            Configure your custom domain at your DNS provider. DNS changes can take 24–48 hours to propagate globally.
          </p>
        </div>
      </section>

      <Footer floatToBottom />
    </div>
  );
};

export default DeploymentPage;
