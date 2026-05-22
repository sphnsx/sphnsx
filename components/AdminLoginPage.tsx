import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { PALETTE } from '../constants';
import CapV2 from './optc/CapV2';
import Arrow from './Arrow';
import AdminBtn from './optc/admin/AdminBtn';
import Footer from './optc/Footer';

const AdminLoginPage: React.FC = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin/projects');
    } else {
      alert('Incorrect password.');
    }
  };

  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;

  return (
    <div className="fixed inset-0 flex flex-col overflow-hidden" style={{ background: paper, color: ink, fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif' }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 32px',
          borderBottom: `1px solid ${ink}`,
          flexShrink: 0,
        }}
      >
        <Link to="/" style={{ display: 'inline-flex', alignItems: 'baseline', gap: 6, textDecoration: 'none', color: ink }}>
          <span style={{ fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif', fontSize: 20, fontWeight: 600, letterSpacing: '-0.03em' }}>sphnsx</span>
          <CapV2 size={10} color={muted}>/admin</CapV2>
        </Link>
        <span />
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 48 }}>
        <form onSubmit={handleSubmit} style={{ width: 460, maxWidth: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <CapV2 size={11} color={muted}>Restricted access</CapV2>
            <h1 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: 56, fontWeight: 700, letterSpacing: '-0.04em', lineHeight: 1 }}>
              Admin login.
            </h1>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <CapV2 size={10} color={muted}>Password</CapV2>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoFocus
              style={{
                fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
                fontSize: 18,
                padding: '12px 14px',
                background: paper,
                border: `1px solid ${ink}`,
                color: ink,
                outline: 'none',
                borderRadius: 0,
              }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <AdminBtn type="submit" primary fullWidth>Log in</AdminBtn>
            <Link to="/" style={{ textDecoration: 'none', color: ink, alignSelf: 'flex-start', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Arrow dir="left" size={13} stroke={ink} />
              <CapV2 size={11}>Back to home</CapV2>
            </Link>
          </div>
        </form>
      </div>

      <Footer floatToBottom />
    </div>
  );
};

export default AdminLoginPage;
