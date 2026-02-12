import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex justify-between items-center bg-white border-b border-gray-200">
      <Link to="/" className="text-lg font-bold">
        SPHNSX
      </Link>
      <div className="flex gap-6">
        <Link
          to="/"
          className={`text-sm ${isActive('/') ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'}`}
        >
          Work
        </Link>
        <Link
          to="/about"
          className={`text-sm ${isActive('/about') ? 'font-semibold text-black' : 'text-gray-600 hover:text-black'}`}
        >
          About
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
