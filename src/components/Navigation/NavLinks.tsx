import React, { useEffect, useRef } from 'react';
import { NavItem } from './NavItem';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Contact', href: '#contact' }
];

interface NavLinksProps {
  activeSection: string;
  className?: string;
  isMobile?: boolean;
  onItemClick?: () => void;
}

export const NavLinks = ({ 
  activeSection, 
  className = '', 
  isMobile = false,
  onItemClick 
}: NavLinksProps) => {
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const navItems = navRef.current?.querySelectorAll('.nav-item');
    navItems?.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={navRef}
      className={`items-center ${isMobile ? '' : 'space-x-12'} ${className}`}
    >
      {navItems.map((item, index) => (
        <NavItem
          key={item.href}
          {...item}
          isActive={activeSection === item.href.slice(1)}
          isMobile={isMobile}
          onClick={onItemClick}
          index={index}
        />
      ))}
    </div>
  );
};