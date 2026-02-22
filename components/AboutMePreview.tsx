import React, { useEffect, useRef, useState } from 'react';
import SafeHtml from './SafeHtml';

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

  const hasContent = text?.trim() || '';
  const showPlaceholder = !hasContent;

  return (
    <div ref={wrapperRef} className="h-full w-full overflow-hidden pl-6 pr-4 mt-4">
      {showPlaceholder ? (
        <p className="text-sm text-textSecondary leading-relaxed">Introduction…</p>
      ) : (
        <SafeHtml
          html={text}
          className="text-base leading-relaxed text-textPrimary"
          style={{
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: lineClamp,
            overflow: 'hidden',
          }}
        />
      )}
    </div>
  );
};

export default AboutMePreview;
