import React from 'react';

const HEIGHT = 8;

export const ZigZagDivider: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = HEIGHT,
}) => (
  <div
    className={`w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-bgMain ${className}`}
    style={{ height }}
    aria-hidden
  >
    <img
      src="/dividers/zigzag.svg"
      alt=""
      className="block w-full h-full"
      loading="lazy"
    />
  </div>
);

export const WaveDivider: React.FC<{ className?: string; height?: number }> = ({
  className = '',
  height = HEIGHT,
}) => (
  <div
    className={`w-screen relative left-1/2 -translate-x-1/2 overflow-hidden bg-bgMain ${className}`}
    style={{ height }}
    aria-hidden
  >
    <img
      src="/dividers/wave.svg"
      alt=""
      className="block w-full h-full"
      loading="lazy"
    />
  </div>
);

/** Mobile section divider: zigzag or wave. Use between content blocks on mobile. */
export const MobileSectionDivider: React.FC<{
  type: 'zigzag' | 'wave';
  className?: string;
  height?: number;
}> = ({ type, className = '', height = HEIGHT }) =>
  type === 'zigzag' ? (
    <ZigZagDivider className={className} height={height} />
  ) : (
    <WaveDivider className={className} height={height} />
  );
