import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface ModularSectionProps {
  title: string;
  preview: React.ReactNode;
  to: string;
  hoverColor?: string;
  className?: string;
}

const ModularSection: React.FC<ModularSectionProps> = ({
  title,
  preview,
  to,
  hoverColor,
  className = '',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      to={to}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block w-full h-full text-left overflow-hidden bg-white relative ${className}`}
    >
      <div className="absolute top-0 left-0 pl-5 pt-4 pr-4 pb-4 z-10">
        <span className="relative inline-block pt-0 pb-1.5 pl-0 pr-3">
          {hoverColor && isHovered && (
            <div
              className="absolute inset-0 rounded-none"
              style={{ backgroundColor: hoverColor }}
            />
          )}
          <span className="relative font-mono text-sm uppercase tracking-wider">{title}</span>
        </span>
      </div>
      <div className="absolute inset-0 pt-16">
        {preview}
      </div>
    </Link>
  );
};

export default ModularSection;
