import React, { useCallback, useEffect, useRef, useState } from 'react';

const HIT_HEIGHT_PX = 8;
const MIN_ROW_PCT = 10;
const MAX_ROW_PCT = 80;

interface DraggableDividerProps {
  index: number;
  heights: number[];
  onHeightsChange: (heights: number[]) => void;
}

const DraggableDivider: React.FC<DraggableDividerProps> = ({
  index,
  heights,
  onHeightsChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef(0);
  const startHeightsRef = useRef<number[]>([0, 0]);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      startYRef.current = e.clientY;
      startHeightsRef.current = [...heights];
    },
    [heights]
  );

  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      const columnHeight = window.innerHeight;
      if (columnHeight <= 0) return;
      const deltaPct = ((e.clientY - startYRef.current) / columnHeight) * 100;
      const prev = startHeightsRef.current;
      const above = prev[index];
      const below = prev[index + 1];
      const total = above + below;
      let newAbove = Math.max(MIN_ROW_PCT, Math.min(MAX_ROW_PCT, above + deltaPct));
      let newBelow = total - newAbove;
      if (newBelow < MIN_ROW_PCT) {
        newBelow = MIN_ROW_PCT;
        newAbove = total - MIN_ROW_PCT;
      } else if (newBelow > MAX_ROW_PCT) {
        newBelow = MAX_ROW_PCT;
        newAbove = total - MAX_ROW_PCT;
      }
      const next = [...prev];
      next[index] = newAbove;
      next[index + 1] = newBelow;
      onHeightsChange(next);
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, index, onHeightsChange]);

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      onMouseDown={handleMouseDown}
      className="shrink-0 border-t border-black cursor-row-resize select-none flex items-center justify-center hover:bg-neutral-200 transition-colors"
      style={{ height: HIT_HEIGHT_PX, minHeight: HIT_HEIGHT_PX }}
    />
  );
};

export default DraggableDivider;
