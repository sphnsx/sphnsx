import React from 'react';
import { PALETTE } from '../../constants';
import CapV2 from './CapV2';

/** Black plinth at the bottom of each public page. */
const Footer: React.FC = () => (
  <div
    style={{
      padding: '20px 40px',
      background: PALETTE.textPrimary,
      color: PALETTE.backgroundMain,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexShrink: 0,
    }}
  >
    <CapV2 size={10} color="rgba(250,250,250,0.55)">
      © {new Date().getFullYear()} — All photographs by the artist
    </CapV2>
    <span />
  </div>
);

export default Footer;
