import React from 'react';
import { sanitizeHtml } from '../utils/sanitizeHtml';
import { plainTextToHtml } from '../utils/plainTextToHtml';

interface SafeHtmlProps {
  html: string;
  className?: string;
  /** For line-clamp preview (e.g. AboutMePreview). */
  style?: React.CSSProperties;
}

/** Normalize legacy plain text to HTML for display. */
function toDisplayHtml(raw: string): string {
  if (!raw?.trim()) return '';
  return /<[a-z][\s\S]*>/i.test(raw) ? raw : plainTextToHtml(raw);
}

/**
 * Renders sanitized HTML. Use for About me and project descriptions.
 * Legacy plain text (no tags) is converted to paragraphs for display.
 */
const SafeHtml: React.FC<SafeHtmlProps> = ({ html, className, style }) => {
  const normalized = toDisplayHtml(html);
  const cleaned = sanitizeHtml(normalized);
  if (!cleaned) return null;
  return (
    <div
      className={`${className ?? ''} [&_p]:min-h-[1.5em]`}
      style={style}
      dangerouslySetInnerHTML={{ __html: cleaned }}
    />
  );
};

export default SafeHtml;
