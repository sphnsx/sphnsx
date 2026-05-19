import React from 'react';
import { PALETTE } from '../../constants';

interface YearMarkV2Props {
  year: string | number;
  hue: string;
  size?: number;
  color?: string;
  barW?: number;
  barH?: number;
  gap?: number;
}

/** > YYYY ─ motif. The colour-bearing year header for the works index. */
const YearMarkV2: React.FC<YearMarkV2Props> = ({
  year,
  hue,
  size = 64,
  color = PALETTE.textPrimary,
  barW = 44,
  barH = 10,
  gap = 18,
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      fontFamily: '"Source Serif 4", ui-serif, Georgia, serif',
      color,
      fontSize: size,
      fontWeight: 700,
      lineHeight: 0.95,
      letterSpacing: '-0.04em',
    }}
  >
    <span style={{ fontWeight: 600 }}>{'>'}</span>
    <span>{year}</span>
    <span
      aria-hidden="true"
      style={{ display: 'inline-block', width: barW, height: barH, background: hue, flexShrink: 0 }}
    />
  </span>
);

export default YearMarkV2;
