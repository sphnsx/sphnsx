import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { ADMIN_PASSWORD } from '../constants';

const AUTH_STORAGE_KEY = 'sphnsx_admin_authenticated';
const SESSION_DURATION = 24 * 60 * 60 * 1000;

function getAuthData(): string | null {
  if (typeof localStorage === 'undefined') return null;
  const fromLocal = localStorage.getItem(AUTH_STORAGE_KEY);
  if (fromLocal) return fromLocal;
  return sessionStorage.getItem(AUTH_STORAGE_KEY);
}

function setAuthData(value: string): void {
  try {
    localStorage.setItem(AUTH_STORAGE_KEY, value);
  } catch (_) {}
  try {
    sessionStorage.setItem(AUTH_STORAGE_KEY, value);
  } catch (_) {}
}

function clearAuthData(): void {
  try {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
  } catch (_) {}
}

interface AdminAuthContextValue {
  isAdmin: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: React.ReactNode }) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const authData = getAuthData();
    if (authData) {
      try {
        const { timestamp } = JSON.parse(authData);
        if (Date.now() - timestamp < SESSION_DURATION) setIsAdmin(true);
        else clearAuthData();
      } catch {
        clearAuthData();
      }
    }
    // #region agent log
    try {
      fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '9bdf88' },
        body: JSON.stringify({
          sessionId: '9bdf88',
          location: 'AdminAuthContext.tsx:init',
          message: 'auth storage on load',
          data: { authKeyPresent: !!authData, hasLocalStorage: typeof localStorage !== 'undefined', hasSessionStorage: typeof sessionStorage !== 'undefined' },
          timestamp: Date.now(),
          hypothesisId: 'S2',
        }),
      }).catch(() => {});
    } catch (_) {}
    // #endregion
  }, []);

  const login = useCallback((password: string) => {
    const ok = password === ADMIN_PASSWORD;
    if (ok) {
      setIsAdmin(true);
      setAuthData(JSON.stringify({ timestamp: Date.now() }));
    }
    return ok;
  }, []);

  const logout = useCallback(() => {
    clearAuthData();
    setIsAdmin(false);
  }, []);

  return (
    <AdminAuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminAuthContext.Provider>
  );
}

export function useAdminAuth() {
  const ctx = useContext(AdminAuthContext);
  if (!ctx) throw new Error('useAdminAuth must be used within AdminAuthProvider');
  return ctx;
}
