import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

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
        // #region agent log
        fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Debug-Session-Id': 'bc9388',
          },
          body: JSON.stringify({
            sessionId: 'bc9388',
            runId: 'pre-fix-1',
            hypothesisId: 'H1',
            location: 'index.tsx:17',
            message: 'normalizeHashToPath rewriting URL',
            data: {
              hash,
              newUrl,
            },
            timestamp: Date.now(),
          }),
        }).catch(() => {});
        // #endregion agent log
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
