import React from 'react';

interface ChipV2Props {
  color: string;
  size?: number;
}

/** Solid coloured square — used inline beside section labels. */
const ChipV2: React.FC<ChipV2Props> = ({ color, size = 14 }) => (
  <span
    aria-hidden="true"
    style={{
      display: 'inline-block',
      width: size,
      height: size,
      background: color,
      flexShrink: 0,
    }}
  />
);

export default ChipV2;
