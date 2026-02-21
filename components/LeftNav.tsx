import React from 'react';
import { Link } from 'react-router-dom';

export interface LeftNavProps {
  scrollToAbout?: () => void;
  scrollToContact?: () => void;
}

const LeftNav: React.FC<LeftNavProps> = () => {
  return (
    <nav className="h-full flex flex-col border-r border-paletteBorder text-textPrimary">
      <Link
        to="/"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider transition-colors duration-150 min-h-0 shrink-0 hover:underline underline-offset-2 text-textPrimary"
      >
        Home
      </Link>
      <div className="border-t border-paletteBorder shrink-0" />
      <Link
        to="/about"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider transition-colors duration-150 min-h-0 shrink-0 hover:underline underline-offset-2 text-textPrimary"
      >
        About me
      </Link>
      <div className="border-t border-paletteBorder shrink-0" />
      <Link
        to="/contact"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider transition-colors duration-150 min-h-0 flex-1 hover:underline underline-offset-2 text-textPrimary"
      >
        Contact
      </Link>
    </nav>
  );
};

export default LeftNav;
