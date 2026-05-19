import React from 'react';
import { Link } from 'react-router-dom';
import { useAdminAuth } from '../../../contexts/AdminAuthContext';
import { PALETTE } from '../../../constants';
import CapV2 from '../CapV2';

interface AdminTopProps {
  trail: string[];
}

/** Admin top chrome — sphnsx /admin · trail · Log out. */
const AdminTop: React.FC<AdminTopProps> = ({ trail }) => {
  const { logout } = useAdminAuth();
  const ink = PALETTE.textPrimary;
  const muted = PALETTE.textSecondary;

  return (
    <div style={{ borderBottom: `1px solid ${ink}`, flexShrink: 0 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '14px 32px',
        }}
      >
        <Link
          to="/admin/projects"
          style={{
            display: 'inline-flex',
            alignItems: 'baseline',
            gap: 6,
            textDecoration: 'none',
            color: ink,
          }}
        >
          <span
            style={{
              fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
              fontSize: 20,
              fontWeight: 600,
              letterSpacing: '-0.03em',
            }}
          >
            sphnsx
          </span>
          <CapV2 size={10} color={muted}>/admin</CapV2>
        </Link>
        <button
          type="button"
          onClick={() => logout()}
          style={{
            background: 'transparent',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            color: ink,
          }}
        >
          <CapV2 size={10}>Log out</CapV2>
        </button>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '12px 32px',
          borderTop: `1px solid ${ink}`,
          background: 'rgba(0,0,0,0.04)',
        }}
      >
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {trail.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <CapV2 size={10} color={muted}>/</CapV2>}
              <CapV2 size={10} color={i === trail.length - 1 ? ink : muted}>{c}</CapV2>
            </React.Fragment>
          ))}
        </div>
        <span />
      </div>
    </div>
  );
};

export default AdminTop;
