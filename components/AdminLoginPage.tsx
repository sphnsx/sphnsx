import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { HOME_BUTTON_GREEN } from '../constants';

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
    <div className="min-h-screen flex items-center justify-center px-6">
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <h2 className="font-mono text-sm uppercase tracking-wider text-black mb-8">Admin login</h2>
        <input
          type="password"
          placeholder="Password"
          className="w-full py-3 border-b border-black bg-transparent font-mono text-sm uppercase tracking-wider placeholder:text-neutral-400 focus:outline-none mb-8"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="font-mono text-base uppercase tracking-wider text-black py-4 px-5 transition-opacity hover:opacity-90"
          style={{ backgroundColor: HOME_BUTTON_GREEN }}
        >
          Log in
        </button>
      </form>
    </div>
  );
};

export default AdminLoginPage;
