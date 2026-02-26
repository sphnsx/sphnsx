import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { getPortfolioDataAsync } from './services/storageService';

// Start loading portfolio as early as possible (helps private/incognito where there is no cache).
getPortfolioDataAsync().catch(() => {});

// Migrate legacy hash-based routes (e.g. sphnsx.com/#/about) to path-based URLs before React mounts,
// and also if any old hash links are clicked while the app is running.
(() => {
  if (typeof window === 'undefined') return;
  const normalizeHashToPath = () => {
    const { hash, search, origin } = window.location;
    if (hash && hash.startsWith('#/')) {
      const newPath = hash.slice(1); // "/about", "/project/123", etc.
      const newUrl = `${origin}${newPath}${search}`;
      if (window.location.href !== newUrl) {
        window.history.replaceState(undefined, '', newUrl);
        // Notify BrowserRouter that the URL changed.
        window.dispatchEvent(new PopStateEvent('popstate', { state: window.history.state }));
      }
    }
  };

  // Normalize on initial load.
  normalizeHashToPath();

  // And normalize any future hash-based navigations triggered by old links.
  window.addEventListener('hashchange', normalizeHashToPath);
})();

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Could not find root element to mount to');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
