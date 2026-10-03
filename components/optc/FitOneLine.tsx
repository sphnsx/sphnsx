import React from 'react';

export interface FitOneLineProps {
  text: string;
  /** Size used when the text already fits on one line. */
  size: number;
  /**
   * Floor for the shrinking. Below this the text is allowed to wrap instead of
   * becoming unreadable — a sentence long enough to hit it has no one-line size
   * worth reading.
   */
  minSize: number;
  style?: React.CSSProperties;
}

/**
 * A heading that always sits on ONE line: it renders at `size`, and if the text
 * is wider than the column it steps the font size down until it fits (never
 * below `minSize`).
 *
 * The fit is measured from the rendered element — `scrollWidth` against
 * `clientWidth` — rather than estimated from character counts, so it is exact for
 * any string. It re-runs when the column resizes and once the webfont has loaded,
 * since the fallback serif measures differently from Sarvatrik.
 */
const FitOneLine: React.FC<FitOneLineProps> = ({ text, size, minSize, style }) => {
  const ref = React.useRef<HTMLHeadingElement>(null);

  React.useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      el.style.whiteSpace = 'nowrap';
      el.style.fontSize = `${size}px`;
      const available = el.clientWidth;
      if (!available) return;
      if (el.scrollWidth > available) {
        // One proportional step gets very close; the loop absorbs the rounding
        // that letter-spacing and hinting leave behind.
        let next = Math.max(minSize, Math.floor((size * available) / el.scrollWidth));
        el.style.fontSize = `${next}px`;
        let guard = 32;
        while (el.scrollWidth > el.clientWidth && next > minSize && guard-- > 0) {
          next -= 1;
          el.style.fontSize = `${next}px`;
        }
      }
      // Still too wide at the floor: wrap rather than clip or overflow the column.
      el.style.whiteSpace = el.scrollWidth > el.clientWidth ? 'normal' : 'nowrap';
    };

    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    // Webfonts land after first paint and change the measurement.
    let cancelled = false;
    document.fonts?.ready.then(() => { if (!cancelled) fit(); }).catch(() => {});
    return () => { cancelled = true; ro.disconnect(); };
  }, [text, size, minSize]);

  return (
    <h2 ref={ref} style={{ ...style, fontSize: size }}>
      {text}
    </h2>
  );
};

export default FitOneLine;
