import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface ModularSectionProps {
  title: string;
  preview: React.ReactNode;
  to: string;
  hoverColor?: string;
  className?: string;
  /** Set false when section is inside a draggable wrapper (e.g. admin reorder). */
  draggable?: boolean;
}

const ModularSection: React.FC<ModularSectionProps> = ({
  title,
  preview,
  to,
  hoverColor,
  className = '',
  draggable = true,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();
  const normalizedTo = to.startsWith('/') ? to : `/${to}`;
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate(normalizedTo);
  };

  return (
    <Link
      to={normalizedTo}
      draggable={draggable}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block w-full h-full text-left overflow-hidden bg-bgMain relative group ${className}`}
    >
      <div className="absolute top-0 left-0 pl-6 pt-4 pr-4 pb-4 z-10">
        <span className="relative inline-block pt-0 pb-1.5 pl-0 pr-3">
          {hoverColor && isHovered && (
            <div
              className="absolute inset-0 rounded-none"
              style={{ backgroundColor: hoverColor }}
            />
          )}
          <span className="relative font-mono text-sm uppercase tracking-wider group-hover:underline underline-offset-2">{title}</span>
        </span>
      </div>
      <div className="absolute inset-0 pt-16">
        {preview}
      </div>
    </Link>
  );
};

export default ModularSection;
