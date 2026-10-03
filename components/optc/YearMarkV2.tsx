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

/**
 * Widths inside the mark, as fractions of its font size — the "> " arrow and a
 * four-digit year. Measured from the live font and verified at two sizes, so
 * callers can line other rows up with the mark's parts instead of guessing.
 */
const ARROW_EM = 0.51;
const YEAR_DIGITS_EM = 2.07;
/** Matches the component's own default `gap`. */
const DEFAULT_GAP = 18;

/** Left offset, in px, of the year's digits within a mark of this size. */
export function yearDigitsOffset(size: number, gap: number = DEFAULT_GAP): number {
  return Math.round(size * ARROW_EM + gap);
}

/** Left offset, in px, of the colour chip within a mark of this size. */
export function yearChipOffset(size: number, gap: number = DEFAULT_GAP): number {
  return Math.round(size * (ARROW_EM + YEAR_DIGITS_EM) + gap * 2);
}

/**
 * Abril Display sets lining figures, whose ink box sits well above the centre of
 * the line box `align-items: center` would otherwise use — so the bar reads low
 * against the year. This raises it onto the digits' centre; it is in em, so it
 * follows the `size` prop. Measured from the live font.
 */
const DIGIT_CENTRE_OFFSET_EM = -0.059;

/** > YYYY ─ motif. The colour-bearing year header for the works index. */
const YearMarkV2: React.FC<YearMarkV2Props> = ({
  year,
  hue,
  size = 64,
  color = PALETTE.textPrimary,
  barW = 44,
  barH = 10,
  gap = DEFAULT_GAP,
}) => (
  <span
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap,
      fontFamily: '"abril-display", ui-serif, Georgia, serif',
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
      style={{ display: 'inline-block', width: barW, height: barH, background: hue, flexShrink: 0, position: 'relative', top: `${DIGIT_CENTRE_OFFSET_EM}em` }}
    />
  </span>
);

export default YearMarkV2;
