import React from 'react';
import { PALETTE } from '../../constants';

interface CapV2Props {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

/** Mono uppercase span — the Option C label motif. */
const CapV2: React.FC<CapV2Props> = ({ children, size = 11, color, style }) => (
  <span
    style={{
      fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
      fontSize: size,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      color: color || PALETTE.textPrimary,
      ...style,
    }}
  >
    {children}
  </span>
);

export default CapV2;
