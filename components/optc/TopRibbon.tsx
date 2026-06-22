import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PALETTE } from '../../constants';
import { useIsMobile } from '../../hooks/useMediaQuery';
import CapV2 from './CapV2';

type Active = 'works' | 'about' | 'contact' | null;

interface TopRibbonProps {
  active?: Active;
}

interface NavLink {
  label: string;
  to: string;
  key: Exclude<Active, null>;
}

const LINKS: NavLink[] = [
  { label: 'Works', to: '/', key: 'works' },
  { label: 'About', to: '/about', key: 'about' },
  { label: 'Contact', to: '/contact', key: 'contact' },
];

/** Top-nav pill — hover fills ink, flips text to paper. */
const NavPill: React.FC<{
  to: string;
  label: string;
  isActive: boolean;
  ink: string;
  paper: string;
  size?: number;
  onClick?: () => void;
}> = ({ to, label, isActive, ink, paper, size = 11, onClick }) => {
  const [hover, setHover] = useState(false);
  return (
    <Link
      to={to}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        border: `1px solid ${(hover || isActive) ? ink : 'transparent'}`,
        background: hover ? ink : 'transparent',
        color: hover ? paper : ink,
        borderRadius: 999,
        padding: '6px 14px',
        transition: 'background-color 120ms ease, color 120ms ease, border-color 120ms ease',
      }}
    >
      <CapV2 size={size} color={hover ? paper : ink}>{label}</CapV2>
    </Link>
  );
};

/** Public top nav. Desktop = inline pills. Mobile = wordmark + hamburger that toggles a drop-down panel. */
const TopRibbon: React.FC<TopRibbonProps> = ({ active = null }) => {
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  const wordmark = (
    <Link
      to="/"
      style={{
        display: 'inline-flex',
        alignItems: 'baseline',
        gap: 4,
        textDecoration: 'none',
        color: ink,
      }}
    >
      <span
        style={{
          fontFamily: '"abril-text", ui-serif, Georgia, serif',
          fontSize: isMobile ? 20 : 22,
          fontStyle: 'italic',
          fontWeight: 500,
          letterSpacing: '-0.02em',
          lineHeight: 1,
          color: ink,
        }}
      >
        sphnsx.com
      </span>
    </Link>
  );

  if (isMobile) {
    return (
      <div style={{ borderBottom: `1px solid ${ink}`, flexShrink: 0, background: paper, position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 20px' }}>
          {wordmark}
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((p) => !p)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '6px 10px',
              background: open ? ink : 'transparent',
              color: open ? paper : ink,
              border: `1px solid ${ink}`,
              borderRadius: 999,
              cursor: 'pointer',
            }}
          >
            <span aria-hidden style={{ display: 'inline-flex', flexDirection: 'column', gap: 3 }}>
              <span style={{ width: 14, height: 1.5, background: open ? paper : ink }} />
              <span style={{ width: 14, height: 1.5, background: open ? paper : ink }} />
              <span style={{ width: 14, height: 1.5, background: open ? paper : ink }} />
            </span>
            <CapV2 size={10} color={open ? paper : ink}>{open ? 'Close' : 'Menu'}</CapV2>
          </button>
        </div>
        {open && (
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 6,
              padding: '4px 20px 16px',
              borderTop: `1px solid ${ink}`,
              background: paper,
            }}
          >
            {LINKS.map((l) => (
              <NavPill
                key={l.key}
                to={l.to}
                label={l.label}
                isActive={active === l.key}
                ink={ink}
                paper={paper}
                size={12}
                onClick={() => setOpen(false)}
              />
            ))}
          </nav>
        )}
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '18px 40px',
        borderBottom: `1px solid ${ink}`,
        flexShrink: 0,
      }}
    >
      {wordmark}
      <nav style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        {LINKS.map((l) => (
          <NavPill key={l.key} to={l.to} label={l.label} isActive={active === l.key} ink={ink} paper={paper} />
        ))}
      </nav>
    </div>
  );
};

export default TopRibbon;
