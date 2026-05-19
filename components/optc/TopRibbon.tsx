import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PALETTE } from '../../constants';
import CapV2 from './CapV2';

type Active = 'works' | 'about' | 'contact' | null;

interface TopRibbonProps {
  active?: Active;
}

/** Top-nav pill — hover fills ink, flips text to paper. */
const NavPill: React.FC<{
  to: string;
  label: string;
  isActive: boolean;
  ink: string;
  paper: string;
}> = ({ to, label, isActive, ink, paper }) => {
  const [hover, setHover] = useState(false);
  const isInked = hover || isActive;
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        // Active = ink stroke; hover = filled ink; idle = transparent stroke.
        border: `1px solid ${(hover || isActive) ? ink : 'transparent'}`,
        background: hover ? ink : 'transparent',
        color: isInked && hover ? paper : ink,
        borderRadius: 999,
        padding: '6px 14px',
        transition: 'background-color 120ms ease, color 120ms ease, border-color 120ms ease',
      }}
    >
      <CapV2 size={11} color={hover ? paper : ink}>{label}</CapV2>
    </Link>
  );
};

/** Public top nav — wordmark left, Works / About / Contact right. */
const TopRibbon: React.FC<TopRibbonProps> = ({ active = null }) => {
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const muted = PALETTE.textSecondary;
  const links: Array<{ label: string; to: string; key: Exclude<Active, null> }> = [
    { label: 'Works', to: '/', key: 'works' },
    { label: 'About', to: '/about', key: 'about' },
    { label: 'Contact', to: '/contact', key: 'contact' },
  ];

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
            fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
            fontSize: 22,
            letterSpacing: '-0.035em',
            lineHeight: 1,
            fontWeight: 500,
          }}
        >
          sphnsx
        </span>
        <span
          style={{
            fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
            fontSize: 10,
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: muted,
            marginLeft: 4,
          }}
        >
          .com
        </span>
      </Link>
      <nav style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
        {links.map((l) => (
          <NavPill key={l.key} to={l.to} label={l.label} isActive={active === l.key} ink={ink} paper={paper} />
        ))}
      </nav>
    </div>
  );
};

export default TopRibbon;
