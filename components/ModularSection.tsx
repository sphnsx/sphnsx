import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';
import { PALETTE } from '../constants';

interface ModularSectionProps {
  title: string;
  preview: React.ReactNode;
  to: string;
  hoverColor?: string;
  className?: string;
  /** Set false when section is inside a draggable wrapper (e.g. admin reorder). */
  draggable?: boolean;
  /** Optional small year label shown next to the title (e.g. project cover). */
  year?: string;
  /** Optional background override (e.g. grey accent on Contact). Defaults to bgMain. */
  background?: string;
  /** External hover control (for cross-column sync). ORs with internal hover state. */
  forceHovered?: boolean;
  /** Called when pointer enters/leaves this section (for cross-column sync). */
  onHoverChange?: (hovered: boolean) => void;
  /** Optional label shown next to the hover arrow in bottom-right (e.g. "VIEW"). */
  hoverLabel?: string;
}

const ModularSection: React.FC<ModularSectionProps> = ({
  title,
  preview,
  to,
  hoverColor,
  className = '',
  draggable = true,
  year,
  background,
  forceHovered,
  onHoverChange,
  hoverLabel,
}) => {
  const [internalHover, setInternalHover] = useState(false);
  const isHovered = internalHover || !!forceHovered;
  const normalizedTo = to.startsWith('/') ? to : `/${to}`;

  return (
    <Link
      to={normalizedTo}
      draggable={draggable}
      onMouseEnter={() => { setInternalHover(true); onHoverChange?.(true); }}
      onMouseLeave={() => { setInternalHover(false); onHoverChange?.(false); }}
      className={`block w-full h-full text-left overflow-hidden relative group ${className}`}
      style={background ? { backgroundColor: background } : { backgroundColor: PALETTE.backgroundMain }}
    >
      <div className="absolute top-0 left-0 pl-6 pt-4 pr-4 pb-4 z-10 flex items-center gap-3">
        <span className="relative inline-block pt-0 pb-1.5 pl-0 pr-3">
          {hoverColor && isHovered && (
            <div
              className="absolute inset-0 rounded-none"
              style={{ backgroundColor: hoverColor }}
            />
          )}
          <span className="relative font-mono text-sm uppercase tracking-wider group-hover:underline underline-offset-2">{title}</span>
        </span>
        {year && (
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10, color: PALETTE.textSecondary, letterSpacing: '0.12em' }}
          >
            {year}
          </span>
        )}
      </div>
      <div className="absolute inset-0 pt-16">
        {preview}
      </div>
      {/* Hover arrow glyph (fotohof absorption) — bottom-right, only while hovered. */}
      <div
        aria-hidden
        className="absolute pointer-events-none"
        style={{
          right: 16,
          bottom: 16,
          zIndex: 20,
          opacity: isHovered ? 1 : 0,
          transform: `translateX(${isHovered ? '0' : '-4px'})`,
          transition: 'opacity 150ms ease, transform 150ms ease',
          color: PALETTE.textPrimary,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}
      >
        {hoverLabel && (
          <span
            className="font-mono uppercase"
            style={{ fontSize: 10, letterSpacing: '0.12em' }}
          >
            {hoverLabel}
          </span>
        )}
        <Arrow dir="right" size={28} strokeWidth={1.5} />
      </div>
    </Link>
  );
};

export default ModularSection;
