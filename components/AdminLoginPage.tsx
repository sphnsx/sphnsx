import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import AdminButton from './admin/AdminButton';
import AdminInput from './admin/AdminInput';

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
      <form onSubmit={handleSubmit} className="w-full max-w-[380px] flex flex-col gap-9">
        <div>
          <span className="block font-mono text-[11px] uppercase tracking-wider text-textSecondary mb-2.5">
            Restricted area
          </span>
          <h1 className="font-sans text-[32px] font-bold leading-[1.05] tracking-[-0.01em] text-textPrimary">
            Admin login
          </h1>
        </div>
        <AdminInput
          variant="underlined"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex flex-col gap-3.5">
          <AdminButton type="submit" variant="primary" size="lg" className="w-full justify-center">
            Log in
          </AdminButton>
          <Link
            to="/"
            className="self-start font-mono text-[11px] uppercase tracking-wider text-textPrimary hover:bg-accent px-1.5 -mx-1.5 py-0.5"
          >
            Back to home
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AdminLoginPage;
