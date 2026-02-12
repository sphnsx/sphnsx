import React, { useState } from 'react';

interface ModularSectionProps {
  title: string;
  preview: React.ReactNode;
  hoverContent?: React.ReactNode;
  className?: string;
  onClick?: () => void;
  as?: 'div' | 'button';
}

const ModularSection: React.FC<ModularSectionProps> = ({
  title,
  preview,
  hoverContent,
  className = '',
  onClick,
  as: Component = 'div',
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Component
      role={Component === 'button' ? 'button' : undefined}
      onClick={Component === 'button' ? onClick : undefined}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`block w-full text-left border-b border-black overflow-hidden ${className}`}
    >
      <div className="relative w-full aspect-[4/3] min-h-[200px] overflow-hidden bg-neutral-100">
        {/* Preview area - scales slightly on hover (effect of "bigger" within same frame) */}
        <div
          className={`absolute inset-0 transition-transform duration-300 ease-out ${
            isHovered ? 'scale-105' : 'scale-100'
          }`}
        >
          {preview}
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-black">
          <span className="font-mono text-xs uppercase tracking-wider">{title}</span>
        </div>
        {/* Hover-only content (first words / extra info) - appears over same frame */}
        {hoverContent && (
          <div
            className={`absolute inset-0 bg-white/95 flex items-center justify-center p-6 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <div className="font-sans text-sm leading-relaxed max-w-full line-clamp-4">
              {hoverContent}
            </div>
          </div>
        )}
      </div>
    </Component>
  );
};

export default ModularSection;
