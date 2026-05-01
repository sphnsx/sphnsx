import React from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import { PALETTE } from '../constants';

const BREADCRUMB_NAV: Record<string, string> = {
  SPHNSX: '/',
  WORKS: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
};

const BreadcrumbCrumb: React.FC<{ label: string; isLast: boolean }> = ({ label, isLast }) => {
  const [hover, setHover] = React.useState(false);
  const to = BREADCRUMB_NAV[label.toUpperCase()];
  if (isLast || !to) {
    return <span style={isLast ? { color: PALETTE.textPrimary } : undefined}>{label}</span>;
  }
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        display: 'inline-block',
        padding: '2px 4px',
        margin: '-2px -4px',
        textDecoration: 'none',
        color: hover ? PALETTE.textPrimary : 'inherit',
      }}
    >
      {hover && <span aria-hidden style={{ position: 'absolute', inset: 0, background: PALETTE.accent }} />}
      <span style={{ position: 'relative' }}>{label}</span>
    </Link>
  );
};

/** Breadcrumb strip at the top of a detail page's left column (below Home offset). */
export const DetailBreadcrumb: React.FC<{ trail: string[] }> = ({ trail }) => (
  <div
    style={{
      padding: '16px 24px',
      borderBottom: `1px solid ${PALETTE.border}`,
    }}
  >
    <nav
      aria-label="Breadcrumb"
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: PALETTE.textSecondary,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flexWrap: 'wrap',
      }}
    >
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          {i > 0 && <span style={{ color: '#bbb' }} aria-hidden>{'\u203A'}</span>}
          <BreadcrumbCrumb label={t} isLast={i === trail.length - 1} />
        </React.Fragment>
      ))}
    </nav>
  </div>
);

/** Grey footer strip echoing the home-page Contact footer. */
export const DetailGreyFooter: React.FC<{
  to: string;
  label: string;
}> = ({ to, label }) => {
  const [hover, setHover] = React.useState(false);
  return (
    <Link
      to={to}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none',
        color: PALETTE.textPrimary,
        padding: '14px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: PALETTE.greySoft,
        borderTop: `1px solid ${PALETTE.border}`,
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          padding: '0 8px',
          fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
        }}
      >
        {hover && (
          <span
            style={{ position: 'absolute', inset: 0, background: PALETTE.accent }}
            aria-hidden
          />
        )}
        <span style={{ position: 'relative' }}>{label}</span>
      </span>
      <Arrow dir="right" size={20} strokeWidth={1.5} />
    </Link>
  );
};

/** Editorial-style heading: optional eyebrow label + bold display H1. */
export const DetailHeading: React.FC<{
  eyebrow?: string;
  title: string;
}> = ({ eyebrow, title }) => (
  <>
    {eyebrow && (
      <div
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: PALETTE.textSecondary,
          marginBottom: 8,
        }}
      >
        {eyebrow}
      </div>
    )}
    <h1
      style={{
        fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        fontSize: 40,
        fontWeight: 700,
        lineHeight: 1.05,
        letterSpacing: '-0.01em',
        margin: '0 0 18px',
      }}
    >
      {title}
    </h1>
  </>
);

/** Record-card style metadata row (top and bottom rules, muted caption + value chips). */
export const DetailMetaRow: React.FC<{
  items: Array<{ label: string; value: React.ReactNode }>;
}> = ({ items }) => (
  <div
    style={{
      borderTop: `1px solid ${PALETTE.border}`,
      borderBottom: '1px solid #e4e4e4',
      padding: '10px 0',
      margin: '0 0 32px',
      display: 'flex',
      flexWrap: 'wrap',
      gap: 18,
      fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
    }}
  >
    {items.map((it, i) => (
      <span key={i}>
        <span style={{ color: PALETTE.textSecondary }}>{it.label}</span> {it.value}
      </span>
    ))}
  </div>
);

/** Slim right-column header (e.g. "Plates · 06 total   Scroll ↓"). */
export const DetailRightBar: React.FC<{
  left: React.ReactNode;
  right?: React.ReactNode;
}> = ({ left, right }) => (
  <div
    style={{
      padding: '16px 32px',
      borderBottom: `1px solid ${PALETTE.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexShrink: 0,
    }}
  >
    <span
      style={{
        fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.12em',
        color: PALETTE.textSecondary,
      }}
    >
      {left}
    </span>
    {right !== undefined && (
      <span
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.12em',
          color: PALETTE.textSecondary,
        }}
      >
        {right}
      </span>
    )}
  </div>
);

/** Contact link row: numbered mono label + hover-green-block on value. */
export const DetailContactRow: React.FC<{
  index: number;
  label: string;
  value: string;
  display?: string;
}> = ({ index, label, value, display }) => {
  const [hover, setHover] = React.useState(false);
  const isEmail = value.includes('@');
  const href = isEmail ? `mailto:${value}` : value;
  const shownText = display ?? value;
  return (
    <a
      href={href}
      target={isEmail ? undefined : '_blank'}
      rel={isEmail ? undefined : 'noopener noreferrer'}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none',
        color: PALETTE.textPrimary,
        display: 'grid',
        gridTemplateColumns: '110px 1fr',
        alignItems: 'center',
        gap: 16,
        padding: '18px 0',
        borderBottom: '1px solid #e4e4e4',
      }}
    >
      <span
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
          fontSize: 11,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          color: PALETTE.textSecondary,
        }}
      >
        {String(index + 1).padStart(2, '0')} · {label}
      </span>
      <span
        style={{
          position: 'relative',
          display: 'inline-block',
          padding: '2px 8px',
          justifySelf: 'start',
        }}
      >
        {hover && (
          <span
            aria-hidden
            style={{ position: 'absolute', inset: 0, background: PALETTE.accent }}
          />
        )}
        <span
          style={{
            position: 'relative',
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: 17,
            textDecoration: hover ? 'underline' : 'none',
            textUnderlineOffset: 3,
          }}
        >
          {shownText}
        </span>
      </span>
    </a>
  );
};
