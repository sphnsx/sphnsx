import React, { useEffect, useRef, useState } from 'react';

const LINE_HEIGHT_PX = 24; // ~1.5rem

interface AboutMePreviewProps {
  text: string;
}

const AboutMePreview: React.FC<AboutMePreviewProps> = ({ text }) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [lineClamp, setLineClamp] = useState(1);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { height } = entry.contentRect;
        const lines = Math.max(1, Math.floor(height / LINE_HEIGHT_PX));
        setLineClamp(lines);
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const displayText = text?.trim() || '';
  const showPlaceholder = !displayText;

  return (
    <div ref={wrapperRef} className="h-full w-full overflow-hidden px-3 mt-4">
      {showPlaceholder ? (
        <p className="text-sm text-neutral-400 leading-relaxed">Introduction…</p>
      ) : (
        <p
          className="text-sm leading-relaxed text-neutral-700"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lineClamp,
            overflow: 'hidden',
          }}
        >
          {displayText}
        </p>
      )}
    </div>
  );
};

export default AboutMePreview;
