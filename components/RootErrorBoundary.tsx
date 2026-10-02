import React from 'react';
import { PALETTE } from '../constants';

interface State {
  error: Error | null;
}

/**
 * Last line of defence against a blank page: React unmounts the whole tree on an
 * uncaught render error, which looks identical to a failed deploy. Show the
 * message and a reload that bypasses the cache instead.
 */
class RootErrorBoundary extends React.Component<{ children: React.ReactNode }, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('Uncaught render error:', error, info.componentStack);
  }

  render() {
    const { error } = this.state;
    if (!error) return this.props.children;

    const ink = PALETTE.textPrimary;
    const paper = PALETTE.backgroundMain;
    const muted = PALETTE.textSecondary;
    const label: React.CSSProperties = {
      fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
    };

    return (
      <div
        style={{
          position: 'fixed',
          inset: 0,
          background: paper,
          color: ink,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 20,
          padding: '0 40px',
          fontFamily: '"abril-text", ui-serif, Georgia, serif',
        }}
      >
        <span style={{ ...label, color: muted }}>Something went wrong</span>
        <h1 style={{ margin: 0, fontFamily: '"abril-display", ui-serif, Georgia, serif', fontSize: 72, fontWeight: 700, letterSpacing: '-0.045em', lineHeight: 0.95 }}>
          Reload the page.
        </h1>
        <p style={{ margin: 0, maxWidth: 560, fontSize: 16, lineHeight: 1.6, color: muted }}>
          {error.message || 'The page failed to render.'}
        </p>
        <button
          type="button"
          onClick={() => window.location.replace(window.location.pathname + '?r=' + Date.now())}
          style={{ ...label, padding: '10px 14px', background: ink, color: paper, border: `1px solid ${ink}`, borderRadius: 0, cursor: 'pointer' }}
        >
          Reload
        </button>
      </div>
    );
  }
}

export default RootErrorBoundary;
