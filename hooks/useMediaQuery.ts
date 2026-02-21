import { useState, useEffect } from 'react';
import { MOBILE_BREAKPOINT_PX } from '../constants';

const mobileQuery = `(max-width: ${MOBILE_BREAKPOINT_PX - 1}px)`;

/** Returns true when viewport width is below MOBILE_BREAKPOINT_PX (phone layout). */
export function useIsMobile(): boolean {
  const [matches, setMatches] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(mobileQuery).matches : false
  );

  useEffect(() => {
    const m = window.matchMedia(mobileQuery);
    const handler = (e: MediaQueryListEvent) => setMatches(e.matches);
    m.addEventListener('change', handler);
    return () => m.removeEventListener('change', handler);
  }, []);

  return matches;
}
