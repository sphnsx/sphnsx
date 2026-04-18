import React from 'react';

type Dir = 'right' | 'left' | 'up' | 'down';

interface ArrowProps {
  dir?: Dir;
  size?: number;
  stroke?: string;
  strokeWidth?: number;
  className?: string;
}

const ROT: Record<Dir, number> = { right: 0, left: 180, up: -90, down: 90 };

/** Chunky editorial arrow glyph (fotohof absorption). Square-cap lines, no fill. */
const Arrow: React.FC<ArrowProps> = ({
  dir = 'right',
  size = 32,
  stroke = 'currentColor',
  strokeWidth = 2,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 40 40"
    className={className}
    style={{ transform: `rotate(${ROT[dir]}deg)`, display: 'inline-block', verticalAlign: 'middle' }}
    aria-hidden
  >
    <line x1="4" y1="20" x2="36" y2="20" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="square" />
    <line x1="36" y1="20" x2="24" y2="10" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="square" />
    <line x1="36" y1="20" x2="24" y2="30" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="square" />
  </svg>
);

export default Arrow;
