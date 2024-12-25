import React from 'react';

interface NavItemProps {
  label: string;
  href: string;
  isActive: boolean;
  isMobile?: boolean;
  onClick?: () => void;
  index?: number;
}

export const NavItem = ({ 
  label, 
  href, 
  isActive, 
  isMobile = false,
  onClick,
  index = 0
}: NavItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
      onClick?.();
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`nav-item relative group ${isMobile ? 'py-2' : ''}`}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <span 
        className={`
          relative z-10 
          ${isMobile ? 'text-base' : 'text-sm'} 
          font-medium 
          transition-all 
          duration-300 
          ${isActive ? 'text-white' : 'text-neutral-400 group-hover:text-white'}
        `}
      >
        {label}
      </span>
      
      {/* Animated underline */}
      <span 
        className={`
          absolute 
          -bottom-1 
          left-0 
          w-full 
          h-px 
          bg-gradient-to-r 
          from-indigo-500 
          to-purple-500 
          transform 
          origin-left 
          transition-transform 
          duration-300 
          ease-out 
          scale-x-0 
          group-hover:scale-x-100
        `}
      />
      
      {/* Active state glow */}
      {isActive && (
        <span 
          className="
            absolute 
            inset-0 
            bg-indigo-500/10 
            blur-lg 
            transform 
            scale-150 
            pointer-events-none
            transition-opacity 
            duration-300
          "
        />
      )}
    </a>
  );
};