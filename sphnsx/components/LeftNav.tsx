import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export interface LeftNavProps {
  scrollToAbout?: () => void;
  scrollToContact?: () => void;
}

const LeftNav: React.FC<LeftNavProps> = ({ scrollToAbout, scrollToContact }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleAboutClick = (e: React.MouseEvent) => {
    if (isHome && scrollToAbout) {
      e.preventDefault();
      scrollToAbout();
    }
  };
  const handleContactClick = (e: React.MouseEvent) => {
    if (isHome && scrollToContact) {
      e.preventDefault();
      scrollToContact();
    }
  };

  return (
    <nav className="h-full flex flex-col border-r border-black">
      <div className="p-6 border-b border-black">
        <Link
          to="/"
          className="font-mono text-sm font-semibold tracking-tight block border border-black border-solid px-4 py-3 w-fit hover:bg-black hover:text-white transition-colors duration-200"
        >
          SPHNSX
        </Link>
      </div>
      <div className="flex-1 flex flex-col p-6 gap-0">
        <div className="border-t border-black my-2" />
        <Link
          to="/"
          className="font-mono text-xs uppercase tracking-wider border border-black border-solid px-4 py-3 w-full text-left hover:bg-black hover:text-white transition-colors duration-200"
        >
          Home
        </Link>
        <div className="border-t border-black my-2" />
        <Link
          to="/"
          state={isHome ? undefined : { scrollTo: 'about' }}
          onClick={isHome ? handleAboutClick : undefined}
          className="font-mono text-xs uppercase tracking-wider border border-black border-solid px-4 py-3 w-full text-left hover:bg-black hover:text-white transition-colors duration-200"
        >
          About me
        </Link>
        <div className="border-t border-black my-2" />
        <Link
          to="/"
          state={isHome ? undefined : { scrollTo: 'contact' }}
          onClick={isHome ? handleContactClick : undefined}
          className="font-mono text-xs uppercase tracking-wider border border-black border-solid px-4 py-3 w-full text-left hover:bg-black hover:text-white transition-colors duration-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default LeftNav;
