import React, { ButtonHTMLAttributes, LabelHTMLAttributes, ReactNode } from 'react';

type Size = 'sm' | 'md' | 'lg';
type Variant = 'primary' | 'ghost' | 'ghost-destructive';

interface AdminButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asLabel?: boolean;
  htmlFor?: string;
  children: ReactNode;
}

const sizeClass: Record<Size, string> = {
  sm: 'px-[10px] py-[6px] text-[11px]',
  md: 'px-[14px] py-[9px] text-[11px]',
  lg: 'px-[18px] py-[12px] text-[13px]',
};

export const AdminButton: React.FC<AdminButtonProps> = ({
  variant = 'ghost',
  size = 'md',
  asLabel,
  className = '',
  children,
  ...rest
}) => {
  const base = `relative inline-flex items-center gap-2 font-mono uppercase tracking-wider rounded-none transition-none ${sizeClass[size]}`;

  let chrome = '';
  let hover = '';
  if (variant === 'primary') {
    chrome = 'bg-accent text-textPrimary border-none';
    hover = 'hover:opacity-90';
  } else if (variant === 'ghost-destructive') {
    chrome = 'bg-bgMain text-destructive border border-paletteBorder';
    hover = 'hover:bg-destructive hover:text-white';
  } else {
    chrome = 'bg-bgMain text-textPrimary border border-paletteBorder';
    hover = 'hover:bg-accent hover:text-textPrimary';
  }

  const cls = `${base} ${chrome} ${hover} disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer ${className}`;

  if (asLabel) {
    const labelProps = rest as unknown as LabelHTMLAttributes<HTMLLabelElement>;
    return (
      <label className={cls} {...labelProps}>
        {children}
      </label>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default AdminButton;
