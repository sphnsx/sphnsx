import React from 'react';
import { Link } from 'react-router-dom';

interface ModularSectionProps {
  title: string;
  preview: React.ReactNode;
  to: string;
  className?: string;
}

const ModularSection: React.FC<ModularSectionProps> = ({
  title,
  preview,
  to,
  className = '',
}) => {
  return (
    <Link
      to={to}
      className={`block w-full h-full text-left overflow-hidden bg-neutral-100 relative ${className}`}
    >
      <span className="absolute top-0 left-0 p-3 font-mono text-xs uppercase tracking-wider z-10">
        {title}
      </span>
      <div className="absolute inset-0 pt-10">
        {preview}
      </div>
    </Link>
  );
};

export default ModularSection;
