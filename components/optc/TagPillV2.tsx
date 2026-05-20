import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PALETTE } from '../../constants';

interface TagPillV2Props {
  hue: string;
  label: string;
  size?: number;
  chip?: number;
  color?: string;
  borderColor?: string;
  /** When set, the pill renders as a react-router Link (internal) or an `<a>` (external/anchor). */
  to?: string;
}

/** Bordered pill with hue square + mono caps label. Optionally a link. Hover = inked. */
const TagPillV2: React.FC<TagPillV2Props> = ({
  hue,
  label,
  size = 12,
  chip = 14,
  color = PALETTE.textPrimary,
  borderColor,
  to,
}) => {
  const [hover, setHover] = useState(false);
  const interactive = Boolean(to);
  // On hover (interactive only): fill ink, flip text to paper. Hue chip stays its colour.
  const isInked = interactive && hover;
  const fg = isInked ? PALETTE.backgroundMain : color;

  const wrapperStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: 12,
    padding: '10px 16px',
    border: `1.5px solid ${borderColor || (isInked ? PALETTE.textPrimary : color)}`,
    background: isInked ? PALETTE.textPrimary : 'transparent',
    textDecoration: 'none',
    cursor: interactive ? 'pointer' : 'default',
    color: fg,
    transition: 'background-color 120ms ease, color 120ms ease, border-color 120ms ease',
  };

  const inner = (
    <>
      <span
        aria-hidden="true"
        style={{
          display: 'block',
          width: chip,
          height: chip,
          background: hue,
          flexShrink: 0,
          // Uppercase glyphs sit in the upper part of their line box, so their
          // optical centre is above the box centre. A small bottom margin on a
          // centre-aligned flex row lifts the square ~1px to match the caps.
          marginBottom: '2px',
        }}
      />
      <span
        style={{
          fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
          fontSize: size,
          textTransform: 'uppercase',
          letterSpacing: '0.14em',
          // line-height 1 trims the cap text box; negative right margin cancels
          // the trailing letter-spacing so padding looks equal on both sides.
          lineHeight: 1,
          marginRight: '-0.14em',
          color: fg,
        }}
      >
        {label}
      </span>
    </>
  );

  if (!to) return <span style={wrapperStyle}>{inner}</span>;
  const hoverProps = { onMouseEnter: () => setHover(true), onMouseLeave: () => setHover(false) };
  // Anchor links (#…) and external (http…) get a plain <a>; everything else a Link.
  if (to.startsWith('#') || /^https?:/.test(to)) {
    return <a href={to} style={wrapperStyle} {...hoverProps}>{inner}</a>;
  }
  return <Link to={to} style={wrapperStyle} {...hoverProps}>{inner}</Link>;
};

export default TagPillV2;
