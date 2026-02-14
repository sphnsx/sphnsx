import React from 'react';
import DraggableDivider from './DraggableDivider';

interface ResizableColumnProps {
  rows: React.ReactNode[];
  heights: number[];
  onHeightsChange: (heights: number[]) => void;
  className?: string;
}

const ResizableColumn: React.FC<ResizableColumnProps> = ({
  rows,
  heights,
  onHeightsChange,
  className = '',
}) => {
  return (
    <div className={`flex flex-col h-full overflow-hidden ${className}`}>
      {rows.map((row, i) => (
        <React.Fragment key={i}>
          <div
            className="shrink-0 overflow-hidden min-h-0"
            style={{ flex: `0 0 ${heights[i] ?? 100 / rows.length}%` }}
          >
            {row}
          </div>
          {i < rows.length - 1 && (
            <DraggableDivider
              index={i}
              heights={heights}
              onHeightsChange={onHeightsChange}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ResizableColumn;
