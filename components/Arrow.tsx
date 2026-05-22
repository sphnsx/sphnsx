import React from 'react';

type Dir = 'right' | 'left' | 'up' | 'down';

interface ArrowProps {
  dir?: Dir;
  /** Pixel size driving the glyph's font-size (text chevron). */
  size?: number;
  /** Colour (currentColor by default — inherits from parent). */
  stroke?: string;
  /** Kept for back-compat; unused (text chevron weight is set by the font). */
  strokeWidth?: number;
  className?: string;
}

const GLYPH: Record<Dir, string> = {
  right: '>',
  left: '<',
  // Up/down fall back to forward chevron since the design only uses `>` and `<`.
  up: '>',
  down: '>',
};

/**
 * Text chevron arrow. Renders `>` or `<` at `size` px so callers can drop us in
 * inline next to text. Replaces the prior SVG arrow per design direction.
 */
const Arrow: React.FC<ArrowProps> = ({
  dir = 'right',
  size = 16,
  stroke = 'currentColor',
  className,
}) => (
  <span
    aria-hidden
    className={className}
    style={{
      display: 'inline-block',
      fontFamily: '"abril-text", ui-serif, Georgia, serif',
      fontSize: size,
      fontWeight: 700,
      lineHeight: 1,
      color: stroke,
      verticalAlign: 'baseline',
    }}
  >
    {GLYPH[dir]}
  </span>
);

export default Arrow;
