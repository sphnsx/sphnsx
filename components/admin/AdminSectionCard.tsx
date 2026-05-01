import React, { ReactNode } from 'react';

interface AdminSectionCardProps {
  heading: string;
  sub?: ReactNode;
  children: ReactNode;
}

export const AdminSectionCard: React.FC<AdminSectionCardProps> = ({
  heading,
  sub,
  children,
}) => (
  <section className="border border-paletteBorder p-7 bg-bgMain rounded-none flex flex-col gap-4">
    <div>
      <span className="block font-mono text-[11px] uppercase tracking-wider text-textPrimary">
        {heading}
      </span>
      {sub && (
        <p className="mt-2.5 font-sans text-sm leading-relaxed text-textSecondary max-w-xl">
          {sub}
        </p>
      )}
    </div>
    {children}
  </section>
);

export default AdminSectionCard;
