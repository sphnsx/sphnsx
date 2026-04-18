import React from 'react';
import { Link } from 'react-router-dom';
import { PALETTE } from '../constants';

/** Green "Home" bar — sits fixed top-left on mobile, matches desktop Home button height (48px). */
const MobileHeader: React.FC = () => (
  <Link
    to="/"
    className="fixed top-0 left-0 z-[100] h-12 flex items-center font-mono uppercase text-textPrimary"
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
);

export default MobileHeader;
