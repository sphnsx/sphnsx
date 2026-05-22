import React from 'react';
import { PALETTE } from '../../constants';

interface MarkerTitleV2Props {
  title: string;
  meta?: string[];
  hue: string;
  color?: string;
  size?: number;
  washHeight?: number;
  washInset?: number;
  metaColor?: string;
}

/** Highlighter-wash title — the Option C hero motif. The wash sits behind the bottom `washHeight * 100%` of the type. */
const MarkerTitleV2: React.FC<MarkerTitleV2Props> = ({
  title,
  meta = [],
  hue,
  color = PALETTE.textPrimary,
  size = 156,
  washHeight = 0.55,
  washInset = -8,
  metaColor,
}) => (
  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'flex-start', gap: 18 }}>
    <span
      style={{
        position: 'relative',
        display: 'inline-block',
        fontFamily: '"abril-display", ui-serif, Georgia, serif',
        fontWeight: 700,
        fontSize: size,
        lineHeight: 0.9,
        letterSpacing: '-0.055em',
        color,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          left: washInset,
          right: washInset,
          bottom: 0,
          height: `${washHeight * 100}%`,
          background: hue,
          zIndex: 0,
        }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{title}</span>
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

export default MarkerTitleV2;
