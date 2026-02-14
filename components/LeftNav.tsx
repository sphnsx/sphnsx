import React from 'react';
import { Link } from 'react-router-dom';

export interface LeftNavProps {
  scrollToAbout?: () => void;
  scrollToContact?: () => void;
}

const LeftNav: React.FC<LeftNavProps> = () => {
  return (
    <nav className="h-full flex flex-col border-r border-black">
      <Link
        to="/"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors min-h-0 shrink-0"
      >
        Home
      </Link>
      <div className="border-t border-black shrink-0" />
      <Link
        to="/about"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors min-h-0 shrink-0"
      >
        About me
      </Link>
      <div className="border-t border-black shrink-0" />
      <Link
        to="/contact"
        className="flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors min-h-0 flex-1"
      >
        Contact
      </Link>
    </nav>
  );
};

export default LeftNav;
