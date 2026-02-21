import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { PALETTE } from '../constants';

const AdminLoginPage: React.FC = () => {
  const { login } = useAdminAuth();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/');
    } else {
      alert('Incorrect password.');
    }
  };

  return (
    <div className="min-h-screen bg-bgMain flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="font-mono text-sm uppercase tracking-wider text-textPrimary mb-8">Admin login</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full py-3 border-b border-paletteBorder bg-transparent font-mono text-sm uppercase tracking-wider placeholder:text-textSecondary text-textPrimary focus:outline-none mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="font-mono text-base uppercase tracking-wider text-textPrimary py-4 px-5 transition-opacity duration-150 hover:opacity-90 rounded-sm w-full"
          style={{ backgroundColor: PALETTE.accent }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
