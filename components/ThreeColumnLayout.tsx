import React from 'react';
import ResizableColumn from './ResizableColumn';

const TOP_OFFSET_PX = 56; // space for fixed Home button

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
  leftColors?: string[];
  middleColors?: string[];
  rightColors?: string[];
}

const ColumnWithOffset: React.FC<{
  className: string;
  rows: React.ReactNode[];
  heights: number[];
  onHeightsChange: (heights: number[]) => void;
  sectionColors?: string[];
  topOffset?: number;
}> = ({ className, rows, heights, onHeightsChange, sectionColors, topOffset = 0 }) => (
  <div className={`flex flex-col shrink-0 h-full ${className}`}>
    {topOffset > 0 && <div style={{ height: topOffset }} aria-hidden />}
    <div className="flex-1 min-h-0 flex flex-col">
      <ResizableColumn
        rows={rows}
        heights={heights}
        onHeightsChange={onHeightsChange}
        sectionColors={sectionColors}
      />
    </div>
  </div>
);

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
  leftColors,
  middleColors,
  rightColors,
}) => {
  return (
    <div className="h-screen w-full flex overflow-hidden bg-white text-black">
      <ColumnWithOffset
        className="w-[20%] min-w-[160px] border-r border-black"
        rows={leftRows}
        heights={leftHeights}
        onHeightsChange={onLeftHeightsChange}
        sectionColors={leftColors}
        topOffset={TOP_OFFSET_PX}
      />
      <ColumnWithOffset
        className="w-[40%] border-r border-black"
        rows={middleRows}
        heights={middleHeights}
        onHeightsChange={onMiddleHeightsChange}
        sectionColors={middleColors}
      />
      <ColumnWithOffset
        className="w-[40%]"
        rows={rightRows}
        heights={rightHeights}
        onHeightsChange={onRightHeightsChange}
        sectionColors={rightColors}
      />
    </div>
  );
};

export default ThreeColumnLayout;
