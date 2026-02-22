import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Admin entry: typing sphnsx.com/admin or sphnsx.com/a must show admin login. Set hash before React mounts.
const pathname = window.location.pathname.replace(/\/$/, '') || '/';
if (pathname === '/admin' || pathname === '/a') {
  window.location.hash = '#/admin';
}

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
