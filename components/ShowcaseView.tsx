import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeColumnLayout from './ThreeColumnLayout';
import ModularSection from './ModularSection';
import { PortfolioData, Project } from '../types';

const STORAGE_KEYS = { left: 'sphnsx_left_heights', middle: 'sphnsx_middle_heights', right: 'sphnsx_right_heights' };

function equalSplit(n: number): number[] {
  const pct = 100 / n;
  return Array(n).fill(0).map((_, i) => (i === n - 1 ? 100 - pct * (n - 1) : pct));
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

const ProjectPreview: React.FC<{ project: Project }> = ({ project }) => (
  <ModularSection
    to={`/project/${project.id}`}
    title={project.title}
    preview={
      project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
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

const ShowcaseView: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const mid = Math.ceil(data.projects.length / 2);
  const middleProjects = data.projects.slice(0, mid);
  const rightProjects = data.projects.slice(mid);

  const leftLen = 3;
  const middleLen = 1 + middleProjects.length;
  const rightLen = rightProjects.length + 1;

  const saved = useMemo(
    () => loadHeights(leftLen, middleLen, rightLen),
    [leftLen, middleLen, rightLen]
  );

  const [leftHeights, setLeftHeights] = useState<number[]>(
    () => saved?.left ?? equalSplit(leftLen)
  );
  const [middleHeights, setMiddleHeights] = useState<number[]>(
    () => saved?.middle ?? equalSplit(middleLen)
  );
  const [rightHeights, setRightHeights] = useState<number[]>(
    () => saved?.right ?? equalSplit(rightLen)
  );

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

  const leftRows = useMemo(
    () => [
      <Link
        key="home"
        to="/"
        className="block h-full flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
      >
        Home
      </Link>,
      <Link
        key="about"
        to="/about"
        className="block h-full flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
      >
        About me
      </Link>,
      <Link
        key="contact"
        to="/contact"
        className="block h-full flex items-start p-4 font-mono text-xs uppercase tracking-wider hover:bg-neutral-100 transition-colors"
      >
        Contact
      </Link>,
    ],
    []
  );

  const middleRows = useMemo(
    () => [
      <ModularSection
        key="about"
        to="/about"
        title="About me"
        preview={
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 border-2 border-black bg-neutral-200 flex items-center justify-center font-mono text-2xl font-semibold shrink-0">
              S
            </div>
          </div>
        }
      />,
      ...middleProjects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      )),
    ],
    [data, middleProjects]
  );

  const rightRows = useMemo(
    () => [
      ...rightProjects.map((project) => (
        <ProjectPreview key={project.id} project={project} />
      )),
      <ModularSection
        key="contact"
        to="/contact"
        title="Contact"
        preview={
          <span className="font-mono text-xs text-neutral-500 uppercase tracking-wider">
            Get in touch
          </span>
        }
      />,
    ],
    [data, rightProjects]
  );

  return (
    <ThreeColumnLayout
      leftRows={leftRows}
      middleRows={middleRows}
      rightRows={rightRows}
      leftHeights={leftHeights}
      middleHeights={middleHeights}
      rightHeights={rightHeights}
      onLeftHeightsChange={onLeftHeightsChange}
      onMiddleHeightsChange={onMiddleHeightsChange}
      onRightHeightsChange={onRightHeightsChange}
    />
  );
};

export default ShowcaseView;
