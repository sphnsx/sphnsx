import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import Arrow from './Arrow';
import { Project } from '../types';
import { PALETTE } from '../constants';
import { projectPath } from '../utils/slug';

interface LeftIndexColumnProps {
  /** Hero sentence shown in the About preview block. */
  aboutHeadline: string;
  /** Projects to group by year and list in the index. */
  projects: Project[];
  /** Currently-hovered project id (synced with middle/right covers). */
  hoveredProjectId: string | null;
  onHoverProject: (id: string | null) => void;
  /** Offset at top to clear the fixed Home button. */
  topOffset?: number;
}

/** Parse year string to number; non-numeric → -1. */
function yearNum(y: string): number {
  const n = parseInt(y.trim(), 10);
  return Number.isNaN(n) ? -1 : n;
}

/**
 * SPHNSX Final Direction left column:
 *   [Home offset]
 *   About preview block (breadcrumb + headline + "About me →")
 *   Year index (scrollable; grouped by year, "MORE →" per year)
 *   Grey Contact footer
 */
const LeftIndexColumn: React.FC<LeftIndexColumnProps> = ({
  aboutHeadline,
  projects,
  hoveredProjectId,
  onHoverProject,
  topOffset = 48,
}) => {
  // Group by year, sort years descending.
  const byYear = new Map<string, Project[]>();
  for (const p of projects) {
    const bucket = byYear.get(p.year) ?? [];
    bucket.push(p);
    byYear.set(p.year, bucket);
  }
  const years = Array.from(byYear.keys()).sort((a, b) => yearNum(b) - yearNum(a));

  return (
    <div
      className="flex flex-col h-full"
      style={{ background: PALETTE.backgroundMain }}
    >
      {topOffset > 0 && <div style={{ height: topOffset, flexShrink: 0 }} aria-hidden />}

      {/* About preview block */}
      <Link
        to="/about"
        className="block group"
        style={{
          padding: '18px 24px',
          borderBottom: `1px solid ${PALETTE.border}`,
          textDecoration: 'none',
          color: PALETTE.textPrimary,
          flexShrink: 0,
        }}
      >
        <Breadcrumb trail={['SPHNSX', 'ABOUT']} />
        <div
          style={{
            marginTop: 12,
            fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
            fontSize: 20,
            lineHeight: 1.25,
          }}
        >
          {aboutHeadline}
        </div>
        <div style={{ marginTop: 12, display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span
            className="font-mono uppercase group-hover:underline"
            style={{ fontSize: 11, letterSpacing: '0.12em', textUnderlineOffset: 2 }}
          >
            About me
          </span>
          <Arrow dir="right" size={20} strokeWidth={1.5} />
        </div>
      </Link>

      {/* Year index — scrollable middle */}
      <div
        style={{
          padding: '18px 24px',
          borderBottom: `1px solid ${PALETTE.border}`,
          flex: 1,
          minHeight: 0,
          overflow: 'auto',
        }}
      >
        <div
          className="font-mono uppercase"
          style={{
            fontSize: 11,
            letterSpacing: '0.12em',
            color: PALETTE.textSecondary,
            marginBottom: 14,
          }}
        >
          Projects — Index
        </div>

        {years.map((y) => (
          <div key={y} style={{ marginBottom: 18 }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'baseline',
                justifyContent: 'space-between',
                borderBottom: `1px solid ${PALETTE.border}`,
                paddingBottom: 4,
                marginBottom: 8,
              }}
            >
              <span
                className="font-mono"
                style={{ fontSize: 12, letterSpacing: '0.12em' }}
              >
                {y}
              </span>
            </div>
            {byYear.get(y)!.map((p) => {
              const isActive = hoveredProjectId === p.id;
              return (
                <Link
                  key={p.id}
                  to={projectPath(p)}
                  onMouseEnter={() => onHoverProject(p.id)}
                  onMouseLeave={() => onHoverProject(null)}
                  style={{
                    display: 'block',
                    fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
                    fontSize: 13,
                    lineHeight: 1.5,
                    padding: '2px 4px',
                    marginLeft: -4,
                    cursor: 'pointer',
                    background: isActive ? PALETTE.accent : 'transparent',
                    color: PALETTE.textPrimary,
                    textDecoration: 'none',
                  }}
                >
                  {p.title}
                </Link>
              );
            })}
          </div>
        ))}
      </div>

      {/* Grey Contact footer — the only grey block on the page */}
      <Link
        to="/contact"
        className="group"
        style={{
          padding: '14px 24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          background: PALETTE.greySoft,
          textDecoration: 'none',
          color: PALETTE.textPrimary,
          flexShrink: 0,
        }}
      >
        <span
          className="font-mono uppercase group-hover:underline"
          style={{ fontSize: 11, letterSpacing: '0.12em', textUnderlineOffset: 2 }}
        >
          Contact
        </span>
        <Arrow dir="right" size={20} strokeWidth={1.5} />
      </Link>
    </div>
  );
};

export default LeftIndexColumn;
