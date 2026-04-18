import React from 'react';
import { PALETTE } from '../constants';

interface BreadcrumbProps {
  /** Ordered trail segments, e.g. ['SPHNSX', 'INDEX']. Last segment is rendered as the current location. */
  trail: string[];
  className?: string;
}

/** Editorial breadcrumb with '>' separators (fotohof absorption). */
const Breadcrumb: React.FC<BreadcrumbProps> = ({ trail, className }) => (
  <nav
    aria-label="Breadcrumb"
    className={className}
    style={{
      fontFamily: 'ui-monospace, SFMono-Regular, "JetBrains Mono", monospace',
      fontSize: 11,
      textTransform: 'uppercase',
      letterSpacing: '0.12em',
      color: PALETTE.textSecondary,
      display: 'flex',
      alignItems: 'center',
      gap: 6,
    }}
  >
    {trail.map((segment, i) => (
      <React.Fragment key={i}>
        {i > 0 && <span style={{ color: '#bbb' }} aria-hidden>{'>'}</span>}
        <span style={i === trail.length - 1 ? { color: PALETTE.textPrimary } : undefined}>{segment}</span>
      </React.Fragment>
    ))}
  </nav>
);

export default Breadcrumb;
