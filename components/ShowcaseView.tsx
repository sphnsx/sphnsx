import React, { useCallback, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import ThreeColumnLayout from './ThreeColumnLayout';
import ModularSection from './ModularSection';
import AboutMePreview from './AboutMePreview';
import { PortfolioData, Project } from '../types';

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

const ProjectPreview: React.FC<{ project: Project; hoverColor?: string }> = ({ project, hoverColor }) => (
  <ModularSection
    to={`/project/${project.id}`}
    title={project.title}
    hoverColor={hoverColor}
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

  const leftLen = 2;
  const middleLen = middleProjects.length;
  const rightLen = rightProjects.length;
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
    () =>
      middleProjects.map((project, i) => (
        <ProjectPreview key={project.id} project={project} hoverColor={middleColors[i]} />
      )),
    [data, middleProjects, middleColors]
  );

  const rightRows = useMemo(
    () =>
      rightProjects.map((project, i) => (
        <ProjectPreview key={project.id} project={project} hoverColor={rightColors[i]} />
      )),
    [data, rightProjects, rightColors]
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
