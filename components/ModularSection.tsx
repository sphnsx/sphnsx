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
      <div
        className="absolute left-0 z-10 flex items-baseline"
        style={{ top: 48, paddingLeft: 24, paddingRight: 16, paddingBottom: 16, gap: 12, whiteSpace: 'nowrap' }}
      >
        <span className="relative inline-block" style={{ padding: '0 12px 4px 0' }}>
          {hoverColor && isHovered && (
            <div
              className="absolute inset-0 rounded-none"
              style={{ backgroundColor: hoverColor }}
            />
          )}
          <span
            className="relative font-mono uppercase group-hover:underline"
            style={{ fontSize: 13, letterSpacing: '0.1em', textUnderlineOffset: 2 }}
          >
            {title}
          </span>
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
      <div className="absolute inset-0" style={{ paddingTop: 84 }}>
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
