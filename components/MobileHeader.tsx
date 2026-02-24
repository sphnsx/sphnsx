import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PALETTE } from '../constants';

const HamburgerIcon: React.FC<{ className?: string }> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="square" aria-hidden>
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

/** Green bar (hamburger + Home) and drawer for phone; render only when isMobile in App. */
const MobileHeader: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setDrawerOpen(false);
  }, [location.pathname]);

  return (
    <>
      <div
        className="fixed top-0 left-0 z-[100] h-12 w-auto max-w-[33.333vw] flex items-center pl-4 rounded-sm transition-opacity duration-150"
        style={{ backgroundColor: PALETTE.accent }}
      >
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setDrawerOpen(true)}
          className="h-12 w-6 flex items-center justify-center text-textPrimary hover:opacity-80 transition-opacity shrink-0"
        >
          <HamburgerIcon />
        </button>
        <Link
          to="/"
          className="font-mono text-base uppercase tracking-wider text-textPrimary flex-1 flex items-center justify-center min-w-0 px-4 hover:opacity-90 transition-opacity duration-150"
        >
          Home
        </Link>
      </div>

      {drawerOpen && (
        <>
          <div
            role="presentation"
            className="fixed inset-0 z-[101] bg-black/40"
            onClick={() => setDrawerOpen(false)}
            aria-hidden
          />
          <nav
            className="fixed top-0 left-0 z-[102] w-64 h-full bg-bgMain border-r border-paletteBorder flex flex-col pt-14 pl-4 pr-4 pb-4"
            aria-label="Main navigation"
          >
            <Link
              to="/about"
              className="font-mono text-sm uppercase tracking-wider py-3 text-textPrimary hover:underline block"
              onClick={() => setDrawerOpen(false)}
            >
              About me
            </Link>
            <Link
              to="/contact"
              className="font-mono text-sm uppercase tracking-wider py-3 text-textPrimary hover:underline block"
              onClick={() => setDrawerOpen(false)}
            >
              Contact
            </Link>
          </nav>
        </>
      )}
    </>
  );
};

export default MobileHeader;
