import React from 'react';
import { PALETTE } from '../../constants';

interface CapV2Props {
  children: React.ReactNode;
  size?: number;
  color?: string;
  style?: React.CSSProperties;
}

/**
 * Mono uppercase span — the Option C label motif.
 *
 * `lineHeight: 1` trims the cap-text box so the label centres cleanly against
 * adjacent chips/icons. `marginRight: -0.14em` cancels the trailing
 * letter-spacing so the label has equal optical padding on both sides when
 * centred inside a bordered/padded container (pills, buttons).
 */
const CapV2: React.FC<CapV2Props> = ({ children, size = 11, color, style }) => (
  <span
    style={{
      fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
      fontSize: size,
      textTransform: 'uppercase',
      letterSpacing: '0.14em',
      lineHeight: 1,
      marginRight: '-0.14em',
      color: color || PALETTE.textPrimary,
      ...style,
    }}
  >
    {children}
  </span>
);

export default CapV2;
