import React from 'react';
import { PALETTE } from '../../../constants';

interface AdminBtnProps {
  primary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  fullWidth?: boolean;
}

/** Bordered, mono-caps button — Option C admin chrome. */
const AdminBtn: React.FC<AdminBtnProps> = ({
  primary = false,
  danger = false,
  disabled = false,
  onClick,
  type = 'button',
  children,
  fullWidth = false,
}) => {
  const ink = PALETTE.textPrimary;
  const paper = PALETTE.backgroundMain;
  const red = PALETTE.destructive;

  const bg = primary ? ink : 'transparent';
  const color = primary ? paper : danger ? red : ink;
  const border = primary ? ink : danger ? red : ink;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={{
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        padding: '10px 14px',
        background: bg,
        color,
        border: `1px solid ${border}`,
        fontFamily: 'Sukhumvit Set, -apple-system, BlinkMacSystemFont, ui-sans-serif, system-ui, sans-serif',
        fontSize: 11,
        textTransform: 'uppercase',
        letterSpacing: '0.14em',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        borderRadius: 0,
      }}
    >
      {children}
    </button>
  );
};

export default AdminBtn;
