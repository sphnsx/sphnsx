
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-12 py-12 md:px-24 md:py-16 flex justify-between items-center pointer-events-none">
      <div className="pointer-events-auto">
        <Link to="/" className="text-3xl font-artful font-bold tracking-tighter block leading-none hover:underline decoration-citron decoration-4 underline-offset-4">
          SPHNSX
        </Link>
      </div>
      
      <div className="flex gap-10 pointer-events-auto items-center">
        <Link 
          to="/" 
          className={`relative text-xs uppercase tracking-[0.4em] font-bold transition-all py-2 ${isActive('/') ? 'text-midnight border-b-4 border-cornflower' : 'text-midnight/40 hover:text-midnight hover:border-b-4 hover:border-cornflower/30'}`}
        >
          Work
        </Link>
        <Link 
          to="/about" 
          className={`relative text-xs uppercase tracking-[0.4em] font-bold transition-all py-2 ${isActive('/about') ? 'text-midnight border-b-4 border-cornflower' : 'text-midnight/40 hover:text-midnight hover:border-b-4 hover:border-cornflower/30'}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
