import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeColumnLayout from './ThreeColumnLayout';
import ModularSection from './ModularSection';
import AboutMePreview from './AboutMePreview';
import LeftIndexColumn from './LeftIndexColumn';
import { PortfolioData, Project } from '../types';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { reorderProjects } from '../services/storageService';
import { PALETTE } from '../constants';
import { useIsMobile } from '../hooks/useMediaQuery';
import { projectPath } from '../utils/slug';

const STORAGE_KEYS = { left: 'sphnsx_left_heights', middle: 'sphnsx_middle_heights', right: 'sphnsx_right_heights' };

const SECTION_HOVER_ACCENT = PALETTE.accent;

/** Parse project year for sort; non-numeric or empty returns -1 so it sorts last. */
function numericYear(p: Project): number {
  const n = parseInt(p.year.trim(), 10);
  return Number.isNaN(n) ? -1 : n;
}

function equalSplit(n: number): number[] {
  const pct = 100 / n;
  return Array(n).fill(0).map((_, i) => (i === n - 1 ? 100 - pct * (n - 1) : pct));
}

/** Build height percentages from cover aspect ratios (width/height). Taller images get more height. */
function heightsFromAspectRatios(ratios: number[], addSection: boolean): number[] {
  const weights = ratios.map((r) => 1 / (r || 1));
  if (addSection) {
    const avg = weights.length ? weights.reduce((a, b) => a + b, 0) / weights.length : 1;
    weights.push(avg);
  }
  const sum = weights.reduce((a, b) => a + b, 0);
  return weights.map((w) => (w / sum) * 100);
}

function loadHeights(leftLen: number, middleLen: number, rightLen: number) {
  try {
    const left = JSON.parse(localStorage.getItem(STORAGE_KEYS.left) ?? 'null');
    const middle = JSON.parse(localStorage.getItem(STORAGE_KEYS.middle) ?? 'null');
    const right = JSON.parse(localStorage.getItem(STORAGE_KEYS.right) ?? 'null');
    if (
      Array.isArray(left) && left.length === leftLen &&
      Array.isArray(middle) && middle.length === middleLen &&
      Array.isArray(right) && right.length === rightLen
    ) {
      return { left, middle, right };
    }
  } catch {}
  return null;
}

function saveColumnHeights(column: 'left' | 'middle' | 'right', heights: number[]) {
  try {
    localStorage.setItem(STORAGE_KEYS[column], JSON.stringify(heights));
  } catch {}
}

const ProjectPreview: React.FC<{
  project: Project;
  hoverColor?: string;
  dragDisabled?: boolean;
  forceHovered?: boolean;
  onHoverChange?: (hovered: boolean) => void;
}> = ({ project, hoverColor, dragDisabled, forceHovered, onHoverChange }) => (
  <ModularSection
    to={projectPath(project)}
    title={project.title}
    year={project.year}
    hoverColor={hoverColor}
    draggable={!dragDisabled}
    forceHovered={forceHovered}
    onHoverChange={onHoverChange}
    hoverLabel="View"
    preview={
      project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-contain"
          onContextMenu={(e) => e.preventDefault()}
          onDragStart={(e) => e.preventDefault()}
          style={{ pointerEvents: 'none' }}
        />
      ) : (
        <div className="w-full h-full bg-bgMain" aria-hidden />
      )
    }
  />
);

const DraggableProjectRow: React.FC<{
  projectId: string;
  children: React.ReactNode;
  onReorder: (draggedId: string, targetId: string) => void;
}> = ({ projectId, children, onReorder }) => {
  const handleDragStart = (e: React.DragEvent) => {
    e.dataTransfer.setData('text/plain', projectId);
    e.dataTransfer.effectAllowed = 'move';
  };
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };
  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    if (draggedId && draggedId !== projectId) onReorder(draggedId, projectId);
  };
  return (
    <div className="h-full w-full" draggable onDragStart={handleDragStart} onDragOver={handleDragOver} onDrop={handleDrop}>
      {children}
    </div>
  );
};

const AddProjectSection: React.FC<{ hoverColor: string }> = ({ hoverColor }) => (
  <ModularSection
    key="add-project"
    to="/project/new"
    title="Add project"
    hoverColor={hoverColor}
    preview={
      <div className="pl-6 pr-4 mt-4">
        <span className="font-mono text-xs text-textSecondary uppercase tracking-wider">
          New project
        </span>
      </div>
    }
  />
);

const MobileHomeLayout: React.FC<{
  data: PortfolioData;
  projectsByYear: Project[];
}> = ({ data, projectsByYear }) => {
  // Derive year range from projects
  const years = data.projects.map((p) => parseInt(p.year, 10)).filter((n) => !Number.isNaN(n));
  const minYear = years.length ? Math.min(...years) : null;
  const maxYear = years.length ? Math.max(...years) : null;
  const yearRange = minYear && maxYear ? (minYear === maxYear ? String(maxYear) : `${minYear}–${String(maxYear).slice(2)}`) : null;

  // Group by year for index section
  const byYear = new Map<string, Project[]>();
  for (const p of projectsByYear) {
    const bucket = byYear.get(p.year) ?? [];
    bucket.push(p);
    byYear.set(p.year, bucket);
  }
  const yearKeys = Array.from(byYear.keys());

  const P = PALETTE;

  return (
    <div className="h-screen w-full flex flex-col overflow-hidden bg-bgMain text-textPrimary">
      {/* Scrollable content — pushed below fixed 48px MobileHeader */}
      <div
        style={{
          position: 'fixed', top: 48, left: 0, right: 0, bottom: 0, zIndex: 1,
          overflowY: 'auto', background: P.backgroundMain, scrollbarWidth: 'none',
        }}
      >
        {/* Masthead */}
        <div style={{ padding: '22px 18px 18px', borderBottom: `1px solid ${P.border}` }}>
          {yearRange && (
            <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.18em', color: P.textSecondary, marginBottom: 10 }}>
              Portfolio · {yearRange}
            </div>
          )}
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 32, fontWeight: 700, lineHeight: 1.02, letterSpacing: '-0.01em' }}>
            sphnsx
          </div>
          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, lineHeight: 1.45, color: P.textPrimary, marginTop: 10, maxWidth: 300 }}>
            Silvia, London-based fine art photographer.
          </div>
        </div>

        {/* About me row */}
        <Link
          to="/about"
          style={{
            textDecoration: 'none', color: P.textPrimary,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 18px', borderBottom: `1px solid ${P.border}`,
          }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>About me</span>
          <svg width="16" height="16" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <line x1="4" y1="20" x2="36" y2="20" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            <line x1="36" y1="20" x2="24" y2="10" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            <line x1="36" y1="20" x2="24" y2="30" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </Link>

        {/* Year index */}
        <div style={{ padding: '18px 18px 8px', borderBottom: `1px solid ${P.border}` }}>
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.14em', color: P.textSecondary, marginBottom: 14 }}>
            Projects — Index
          </div>
          {yearKeys.map((y) => (
            <div key={y} style={{ marginBottom: 16 }}>
              <div style={{ borderBottom: `1px solid ${P.border}`, paddingBottom: 4, marginBottom: 6, fontFamily: 'JetBrains Mono, monospace', fontSize: 12, letterSpacing: '0.12em' }}>{y}</div>
              {byYear.get(y)!.map((p) => (
                <Link
                  key={p.id}
                  to={projectPath(p)}
                  style={{
                    textDecoration: 'none', color: P.textPrimary,
                    display: 'flex', alignItems: 'baseline', justifyContent: 'space-between',
                    padding: '6px 0', fontFamily: 'Inter, sans-serif', fontSize: 14,
                  }}
                >
                  <span>{p.title}</span>
                  <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: P.textSecondary, letterSpacing: '0.12em' }}>↗</span>
                </Link>
              ))}
            </div>
          ))}
        </div>

        {/* Covers — numbered title bar above image */}
        <div>
          {data.projects.map((p, i, arr) => (
            <Link
              key={p.id}
              to={projectPath(p)}
              style={{
                display: 'block', textDecoration: 'none', color: P.textPrimary,
                borderBottom: i < arr.length - 1 ? `1px solid ${P.border}` : 'none',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', padding: '14px 18px 10px' }}>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 12, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
                  <span style={{ color: P.textSecondary, marginRight: 8 }}>{String(i + 1).padStart(2, '0')}</span>
                  {p.title}
                </span>
                <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 10, color: P.textSecondary, letterSpacing: '0.12em' }}>{p.year}</span>
              </div>
              {p.imageUrl && (
                <div style={{ padding: '0 18px 18px' }}>
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    style={{ width: '100%', display: 'block' }}
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              )}
            </Link>
          ))}
        </div>

        {/* Grey Contact footer */}
        <Link
          to="/contact"
          style={{
            textDecoration: 'none', color: P.textPrimary,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '16px 18px', background: P.greySoft, borderTop: `1px solid ${P.border}`,
          }}
        >
          <span style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.14em', whiteSpace: 'nowrap' }}>Contact</span>
          <svg width="16" height="16" viewBox="0 0 40 40" style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <line x1="4" y1="20" x2="36" y2="20" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            <line x1="36" y1="20" x2="24" y2="10" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
            <line x1="36" y1="20" x2="24" y2="30" stroke={P.textPrimary} strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </Link>

        <div style={{ height: 28 }} aria-hidden />
      </div>
    </div>
  );
};

const ShowcaseView: React.FC<{ data: PortfolioData; onRefresh?: (updatedData?: PortfolioData) => void }> = ({ data, onRefresh }) => {
  const isMobile = useIsMobile();
  const { isAdmin } = useAdminAuth();
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const mid = Math.ceil(data.projects.length / 2);
  const middleProjects = data.projects.slice(0, mid);
  const rightProjects = data.projects.slice(mid);

  const addProjectInMiddle = isAdmin && middleProjects.length <= rightProjects.length;
  const addProjectInRight = !addProjectInMiddle && isAdmin;
  const leftLen = 2;
  const middleLen = middleProjects.length + (addProjectInMiddle ? 1 : 0);
  const rightLen = rightProjects.length + (addProjectInRight ? 1 : 0);
  const totalSections = leftLen + middleLen + rightLen;

  const { leftColors, middleColors, rightColors } = useMemo(
    () => ({
      leftColors: Array.from({ length: leftLen }, () => SECTION_HOVER_ACCENT),
      middleColors: Array.from({ length: middleLen }, () => SECTION_HOVER_ACCENT),
      rightColors: Array.from({ length: rightLen }, () => SECTION_HOVER_ACCENT),
    }),
    [leftLen, middleLen, rightLen]
  );

  const saved = useMemo(
    () => loadHeights(leftLen, middleLen, rightLen),
    [leftLen, middleLen, rightLen]
  );

  const [leftHeights, setLeftHeights] = useState<number[]>(() => {
    const s = loadHeights(leftLen, middleLen, rightLen);
    return s?.left ?? equalSplit(leftLen);
  });
  const [middleHeights, setMiddleHeights] = useState<number[]>(() => {
    const s = loadHeights(leftLen, middleLen, rightLen);
    if (s?.middle) return s.middle;
    return heightsFromAspectRatios(
      middleProjects.map((p) => p.coverAspectRatio ?? 1),
      addProjectInMiddle
    );
  });
  const [rightHeights, setRightHeights] = useState<number[]>(() => {
    const s = loadHeights(leftLen, middleLen, rightLen);
    if (s?.right) return s.right;
    return heightsFromAspectRatios(
      rightProjects.map((p) => p.coverAspectRatio ?? 1),
      addProjectInRight
    );
  });

  useEffect(() => {
    if (leftHeights.length !== leftLen) {
      const s = loadHeights(leftLen, middleLen, rightLen);
      setLeftHeights(s?.left ?? equalSplit(leftLen));
    }
    if (middleHeights.length !== middleLen) {
      const s = loadHeights(leftLen, middleLen, rightLen);
      setMiddleHeights(s?.middle ?? heightsFromAspectRatios(middleProjects.map((p) => p.coverAspectRatio ?? 1), addProjectInMiddle));
    }
    if (rightHeights.length !== rightLen) {
      const s = loadHeights(leftLen, middleLen, rightLen);
      setRightHeights(s?.right ?? heightsFromAspectRatios(rightProjects.map((p) => p.coverAspectRatio ?? 1), addProjectInRight));
    }
  }, [leftLen, middleLen, rightLen, middleProjects, rightProjects, addProjectInMiddle, addProjectInRight]);

  const onLeftHeightsChange = useCallback((h: number[]) => {
    setLeftHeights(h);
    saveColumnHeights('left', h);
  }, []);
  const onMiddleHeightsChange = useCallback((h: number[]) => {
    setMiddleHeights(h);
    saveColumnHeights('middle', h);
  }, []);
  const onRightHeightsChange = useCallback((h: number[]) => {
    setRightHeights(h);
    saveColumnHeights('right', h);
  }, []);

  const allProjectIds = useMemo(
    () => middleProjects.map((p) => p.id).concat(rightProjects.map((p) => p.id)),
    [middleProjects, rightProjects]
  );

  const handleReorder = useCallback(
    async (draggedId: string, targetId: string) => {
      const newOrder = allProjectIds.filter((id) => id !== draggedId);
      const idx = newOrder.indexOf(targetId);
      if (idx === -1) return;
      newOrder.splice(idx, 0, draggedId);
      const updatedData = await reorderProjects(newOrder);
      onRefresh?.(updatedData);
    },
    [allProjectIds, onRefresh]
  );

  const leftRows = useMemo(
    () => [
      <ModularSection
        key="about"
        to="/about"
        title="About me"
        hoverColor={leftColors[0]}
        preview={<AboutMePreview text={data.aboutMe} />}
      />,
      <ModularSection
        key="contact"
        to="/contact"
        title="Contact"
        hoverColor={leftColors[1]}
        background={PALETTE.greySoft}
        preview={
          <div className="pl-6 pr-4 mt-4">
            <span className="font-mono text-xs text-textSecondary uppercase tracking-wider">
              Get in touch
            </span>
          </div>
        }
      />,
    ],
    [data, leftColors]
  );

  const middleRows = useMemo(
    () => [
      ...middleProjects.map((project, i) => {
        const preview = (
          <ProjectPreview
            project={project}
            hoverColor={middleColors[i]}
            dragDisabled={isAdmin}
            forceHovered={hoveredProjectId === project.id}
            onHoverChange={(h) => setHoveredProjectId(h ? project.id : null)}
          />
        );
        return isAdmin ? (
          <DraggableProjectRow key={project.id} projectId={project.id} onReorder={handleReorder}>
            {preview}
          </DraggableProjectRow>
        ) : (
          <React.Fragment key={project.id}>{preview}</React.Fragment>
        );
      }),
      ...(addProjectInMiddle ? [<AddProjectSection key="add-project" hoverColor={middleColors[middleProjects.length]} />] : []),
    ],
    [data, middleProjects, middleColors, addProjectInMiddle, isAdmin, handleReorder, hoveredProjectId]
  );

  const rightRows = useMemo(
    () => [
      ...rightProjects.map((project, i) => {
        const preview = (
          <ProjectPreview
            project={project}
            hoverColor={rightColors[i]}
            dragDisabled={isAdmin}
            forceHovered={hoveredProjectId === project.id}
            onHoverChange={(h) => setHoveredProjectId(h ? project.id : null)}
          />
        );
        return isAdmin ? (
          <DraggableProjectRow key={project.id} projectId={project.id} onReorder={handleReorder}>
            {preview}
          </DraggableProjectRow>
        ) : (
          <React.Fragment key={project.id}>{preview}</React.Fragment>
        );
      }),
      ...(addProjectInRight ? [<AddProjectSection key="add-project" hoverColor={rightColors[rightProjects.length]} />] : []),
    ],
    [data, rightProjects, rightColors, addProjectInRight, isAdmin, handleReorder, hoveredProjectId]
  );

  const projectsByYear = useMemo(
    () => [...data.projects].sort((a, b) => numericYear(b) - numericYear(a)),
    [data.projects]
  );

  if (isMobile) {
    return <MobileHomeLayout data={data} projectsByYear={projectsByYear} />;
  }

  return (
    <ThreeColumnLayout
      leftRows={leftRows}
      middleRows={middleRows}
      rightRows={rightRows}
      leftHeights={leftHeights}
      middleHeights={middleHeights}
      rightHeights={rightHeights}
      leftColors={leftColors}
      middleColors={middleColors}
      rightColors={rightColors}
      onLeftHeightsChange={onLeftHeightsChange}
      onMiddleHeightsChange={onMiddleHeightsChange}
      onRightHeightsChange={onRightHeightsChange}
      leftOverride={
        <LeftIndexColumn
          aboutHeadline="Silvia, London-based fine art photographer."
          projects={data.projects}
          hoveredProjectId={hoveredProjectId}
          onHoverProject={setHoveredProjectId}
        />
      }
    />
  );
};

export default ShowcaseView;
