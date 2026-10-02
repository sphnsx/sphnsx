import React from 'react';
import { PALETTE } from '../../constants';

interface MarkerTitleV2Props {
  title: string;
  meta?: string[];
  hue: string;
  color?: string;
  size?: number;
  washHeight?: number;
  metaColor?: string;
}

/** Line-height of the title type; the wash is sized against it. */
const TITLE_LINE_HEIGHT = 0.9;
/** How far the wash runs past the baseline, in em — where the old block wash ended. */
const WASH_BELOW_BASELINE_EM = 0.16;

/**
 * Highlighter-wash title — the Option C hero motif.
 *
 * The wash is a thick underline rather than a positioned block. Underlines are
 * anchored to the baseline, repeat on every line of a wrapped title, and stop at
 * each line's last glyph — which is exactly how a marker behaves. A block wash
 * could only ever cover one band across the full width of the column, so a title
 * that wrapped got a single stroke under its last line, running far past the end
 * of the text. The band keeps the old geometry on a single-line title: it is
 * `washHeight` of the line box tall and ends just below the baseline.
 */
const MarkerTitleV2: React.FC<MarkerTitleV2Props> = ({
  title,
  meta = [],
  hue,
  color = PALETTE.textPrimary,
  size = 156,
  washHeight = 0.55,
  metaColor,
}) => {
  const thicknessEm = washHeight * TITLE_LINE_HEIGHT;
  // Negative offset raises the band's top edge above the baseline.
  const offsetEm = WASH_BELOW_BASELINE_EM - thicknessEm;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
      <span
        style={{
          fontFamily: '"abril-display", ui-serif, Georgia, serif',
          fontWeight: 700,
          fontSize: size,
          lineHeight: TITLE_LINE_HEIGHT,
          letterSpacing: '-0.055em',
          color,
          textDecorationLine: 'underline',
          textDecorationColor: hue,
          textDecorationThickness: `${thicknessEm.toFixed(3)}em`,
          textUnderlineOffset: `${offsetEm.toFixed(3)}em`,
          // Without this the band is carved away around descenders (p, j).
          textDecorationSkipInk: 'none',
          WebkitTextDecorationSkipInk: 'none',
        } as React.CSSProperties}
      >
        {title}
      </span>
      {meta.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {meta.map((line, i) => (
            <span
              key={i}
              style={{
                fontFamily: '"abril-text", ui-serif, Georgia, serif',
                fontSize: 12,
                textTransform: 'uppercase',
                letterSpacing: '0.16em',
                color: metaColor || color,
              }}
            >
              {line}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MarkerTitleV2;
