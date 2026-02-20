import React, { useCallback, useEffect, useMemo, useState } from 'react';
import ThreeColumnLayout from './ThreeColumnLayout';
import ModularSection from './ModularSection';
import AboutMePreview from './AboutMePreview';
import { PortfolioData, Project } from '../types';
import { useAdminAuth } from '../contexts/AdminAuthContext';
import { reorderProjects } from '../services/storageService';

const STORAGE_KEYS = { left: 'sphnsx_left_heights', middle: 'sphnsx_middle_heights', right: 'sphnsx_right_heights' };

const SECTION_PALETTE = ['#FF0080', '#C8A2C8', '#F5DD7B', '#70D1D1', '#FFDDE1', '#6A0DAD'] as const;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
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

const ProjectPreview: React.FC<{ project: Project; hoverColor?: string; dragDisabled?: boolean }> = ({ project, hoverColor, dragDisabled }) => (
  <ModularSection
    to={`/project/${project.id}`}
    title={project.title}
    hoverColor={hoverColor}
    draggable={!dragDisabled}
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
        <div className="w-full h-full flex items-center justify-center font-mono text-xs text-neutral-400 uppercase tracking-wider">
          No image
        </div>
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
      <div className="pl-5 pr-4 mt-4">
        <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
          New project
        </span>
      </div>
    }
  />
);

const ShowcaseView: React.FC<{ data: PortfolioData; onRefresh?: () => void }> = ({ data, onRefresh }) => {
  const { isAdmin } = useAdminAuth();
  const mid = Math.ceil(data.projects.length / 2);
  const middleProjects = data.projects.slice(0, mid);
  const rightProjects = data.projects.slice(mid);

  const addProjectInMiddle = isAdmin && middleProjects.length <= rightProjects.length;
  const leftLen = 2;
  const middleLen = middleProjects.length + (addProjectInMiddle ? 1 : 0);
  const rightLen = rightProjects.length + (addProjectInMiddle ? 0 : 1);
  const totalSections = leftLen + middleLen + rightLen;

  const { leftColors, middleColors, rightColors } = useMemo(() => {
    const shuffled = shuffle([...SECTION_PALETTE]);
    const sectionColors = Array.from({ length: totalSections }, (_, i) => shuffled[i % 6]!);
    return {
      leftColors: sectionColors.slice(0, leftLen),
      middleColors: sectionColors.slice(leftLen, leftLen + middleLen),
      rightColors: sectionColors.slice(leftLen + middleLen, totalSections),
    };
  }, [totalSections, leftLen, middleLen, rightLen]);

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
      !addProjectInMiddle && isAdmin
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
      setRightHeights(s?.right ?? heightsFromAspectRatios(rightProjects.map((p) => p.coverAspectRatio ?? 1), !addProjectInMiddle && isAdmin));
    }
  }, [leftLen, middleLen, rightLen, middleProjects, rightProjects, addProjectInMiddle, isAdmin]);

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
    (draggedId: string, targetId: string) => {
      const newOrder = allProjectIds.filter((id) => id !== draggedId);
      const idx = newOrder.indexOf(targetId);
      if (idx === -1) return;
      newOrder.splice(idx, 0, draggedId);
      reorderProjects(newOrder);
      onRefresh?.();
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
        preview={
          <div className="pl-5 pr-4 mt-4">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
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
      ...middleProjects.map((project, i) =>
        isAdmin ? (
          <DraggableProjectRow key={project.id} projectId={project.id} onReorder={handleReorder}>
            <ProjectPreview project={project} hoverColor={middleColors[i]} dragDisabled />
          </DraggableProjectRow>
        ) : (
          <ProjectPreview key={project.id} project={project} hoverColor={middleColors[i]} />
        )
      ),
      ...(addProjectInMiddle ? [<AddProjectSection key="add-project" hoverColor={middleColors[middleProjects.length]} />] : []),
    ],
    [data, middleProjects, middleColors, addProjectInMiddle, isAdmin, handleReorder]
  );

  const rightRows = useMemo(
    () => [
      ...rightProjects.map((project, i) =>
        isAdmin ? (
          <DraggableProjectRow key={project.id} projectId={project.id} onReorder={handleReorder}>
            <ProjectPreview project={project} hoverColor={rightColors[i]} dragDisabled />
          </DraggableProjectRow>
        ) : (
          <ProjectPreview key={project.id} project={project} hoverColor={rightColors[i]} />
        )
      ),
      ...(!addProjectInMiddle && isAdmin ? [<AddProjectSection key="add-project" hoverColor={rightColors[rightProjects.length]} />] : []),
    ],
    [data, rightProjects, rightColors, addProjectInMiddle, isAdmin, handleReorder]
  );

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
    />
  );
};

export default ShowcaseView;
