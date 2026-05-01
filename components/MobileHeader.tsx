import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PALETTE } from '../constants';

/**
 * Mobile top-chrome: 48px full-width white bar with a hairline bottom border,
 * green "Home" block flush left, and an X close button flush right when not on home.
 */
const MobileHeader: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[100] h-12 flex items-stretch"
      style={{
        background: PALETTE.backgroundMain,
        borderBottom: `1px solid ${PALETTE.border}`,
      }}
    >
      <Link
        to="/"
        className="flex items-center font-mono uppercase text-textPrimary"
        style={{
          backgroundColor: PALETTE.accent,
          fontSize: 13,
          letterSpacing: '0.1em',
          padding: '0 18px',
          textDecoration: 'none',
        }}
      >
        Home
      </Link>
      <div className="flex-1" />
      {!isHome && (
        <Link
          to="/"
          aria-label="Close"
          className="flex items-center justify-center"
          style={{ width: 48, color: PALETTE.textSecondary, textDecoration: 'none' }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" aria-hidden>
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default MobileHeader;
