import React, { InputHTMLAttributes } from 'react';

interface AdminInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  variant?: 'boxed' | 'underlined';
}

export const AdminInput: React.FC<AdminInputProps> = ({
  label,
  variant = 'boxed',
  className = '',
  ...rest
}) => {
  const field =
    variant === 'underlined'
      ? 'w-full py-3 border-0 border-b border-paletteBorder bg-transparent font-mono text-sm uppercase tracking-wider placeholder:text-textSecondary text-textPrimary focus:outline-none rounded-none'
      : 'w-full p-3 border border-paletteBorder bg-transparent font-mono text-sm placeholder:text-textSecondary text-textPrimary focus:outline-none rounded-none';
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="font-mono text-[11px] uppercase tracking-wider text-textPrimary">
          {label}
        </span>
      )}
      <input className={`${field} ${className}`} {...rest} />
    </div>
  );
};

export default AdminInput;
