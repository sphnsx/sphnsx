import React from 'react';
import ResizableColumn from './ResizableColumn';

interface ThreeColumnLayoutProps {
  leftRows: React.ReactNode[];
  middleRows: React.ReactNode[];
  rightRows: React.ReactNode[];
  leftHeights: number[];
  middleHeights: number[];
  rightHeights: number[];
  onLeftHeightsChange: (heights: number[]) => void;
  onMiddleHeightsChange: (heights: number[]) => void;
  onRightHeightsChange: (heights: number[]) => void;
}

const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftRows,
  middleRows,
  rightRows,
  leftHeights,
  middleHeights,
  rightHeights,
  onLeftHeightsChange,
  onMiddleHeightsChange,
  onRightHeightsChange,
}) => {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white text-black">
      <aside className="w-[20%] min-w-[160px] shrink-0 h-full border-r border-black">
        <ResizableColumn
          rows={leftRows}
          heights={leftHeights}
          onHeightsChange={onLeftHeightsChange}
        />
      </aside>
      <main className="w-[40%] shrink-0 h-full border-r border-black">
        <ResizableColumn
          rows={middleRows}
          heights={middleHeights}
          onHeightsChange={onMiddleHeightsChange}
        />
      </main>
      <aside className="w-[40%] shrink-0 h-full">
        <ResizableColumn
          rows={rightRows}
          heights={rightHeights}
          onHeightsChange={onRightHeightsChange}
        />
      </aside>
    </div>
  );
};

export default ThreeColumnLayout;
