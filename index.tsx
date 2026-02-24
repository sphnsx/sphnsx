import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Migrate legacy hash-based routes (e.g. sphnsx.com/#/about) to path-based URLs before React mounts.
(() => {
  if (typeof window === 'undefined') return;
  const { hash, search, origin } = window.location;
  if (hash && hash.startsWith('#/')) {
    const newPath = hash.slice(1); // "/about", "/project/123", etc.
    const newUrl = `${origin}${newPath}${search}`;
    if (window.location.href !== newUrl) {
      window.history.replaceState(undefined, '', newUrl);
    }
  }
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
