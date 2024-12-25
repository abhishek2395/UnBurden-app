import React, { useState } from 'react';
import { NavLinks } from './NavLinks';
import { HamburgerButton } from './HamburgerButton';
import { MobileMenu } from './MobileMenu';
import { useNavigation } from './hooks/useNavigation';
import { Logo } from './Logo';

export const NavigationBar = () => {
  const { isVisible, isAtTop, activeSection } = useNavigation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <HamburgerButton 
        isVisible={!isVisible && !isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen(true)}
      />

      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out transform
          ${isVisible ? 'translate-y-0' : '-translate-y-full'}
          ${!isAtTop ? 'backdrop-blur-sm' : ''}`}
      >
        <nav className="h-20">
          <div className="container mx-auto px-4 h-full">
            <div className="flex items-center justify-between h-full">
              <Logo />
              <NavLinks 
                activeSection={activeSection}
                className="hidden md:flex"
              />
            </div>
          </div>
        </nav>

        <MobileMenu
          isOpen={isMobileMenuOpen}
          activeSection={activeSection}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </header>
    </>
  );
}