import React from 'react';
import { PALETTE } from '../../constants';
import CapV2 from './CapV2';

interface FooterProps {
  /**
   * When true, the footer claims the spare vertical space (margin-top: auto) so
   * it pins to the viewport bottom. Use only on pages with NO trailing bottom-nav
   * (e.g. home) — on pages that have a bottom-nav, the nav owns the spacer instead
   * so the nav + footer stay glued together. Two auto-margins would split the gap.
   */
  floatToBottom?: boolean;
}

/** Black plinth at the bottom of each public page. */
const Footer: React.FC<FooterProps> = ({ floatToBottom = false }) => (
  <div
    style={{
      padding: '20px 40px',
      background: PALETTE.textPrimary,
      color: PALETTE.backgroundMain,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
      marginTop: floatToBottom ? 'auto' : undefined,
    }}
  >
    <CapV2 size={10} color="rgba(250,250,250,0.55)">
      © {new Date().getFullYear()} — All photographs by the artist
    </CapV2>
    <span />
  </div>
);

export default Footer;
