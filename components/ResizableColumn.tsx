import React from 'react';
import DraggableDivider from './DraggableDivider';

interface ResizableColumnProps {
  rows: React.ReactNode[];
  heights: number[];
  onHeightsChange: (heights: number[]) => void;
  sectionColors?: string[];
  className?: string;
}

const ResizableColumn: React.FC<ResizableColumnProps> = ({
  rows,
  heights,
  onHeightsChange,
  sectionColors,
  className = '',
}) => {
  // #region agent log
  if (rows.length >= 1) {
    const firstFlex = heights[0] ?? 100 / rows.length;
    try {
      fetch('http://127.0.0.1:7244/ingest/d73bb932-4ac7-45e1-8337-35cb70e602f8', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Debug-Session-Id': '9bdf88' },
        body: JSON.stringify({
          sessionId: '9bdf88',
          location: 'ResizableColumn.tsx:render',
          message: 'column first row flex',
          data: { rowsLength: rows.length, heights0: heights[0], firstFlexPct: firstFlex },
          timestamp: Date.now(),
          hypothesisId: 'S6',
        }),
      }).catch(() => {});
    } catch (_) {}
  }
  // #endregion
  return (
    <div className={`flex flex-col gap-0 h-full overflow-hidden ${className}`}>
      {rows.map((row, i) => {
        const pct = heights[i] ?? 100 / rows.length;
        const isSingleRow = rows.length === 1;
        return (
        <React.Fragment key={i}>
          <div
            className="shrink-0 overflow-hidden min-h-0"
            style={
              isSingleRow
                ? { height: '100%', minHeight: 0 }
                : { flex: `0 0 ${pct}%` }
            }
          >
            {row}
          </div>
          {i < rows.length - 1 && (
            <DraggableDivider
              index={i}
              heights={heights}
              onHeightsChange={onHeightsChange}
              hoverColor={sectionColors?.[i]}
            />
          )}
        </React.Fragment>
        );
      })}
    </div>
  );
};

export default ResizableColumn;
