import React from 'react';
import { NavLinks } from './NavLinks';
import { X } from 'lucide-react';

interface MobileMenuProps {
  isOpen: boolean;
  activeSection: string;
  onClose: () => void;
}

export const MobileMenu = ({ isOpen, activeSection, onClose }: MobileMenuProps) => (
  <div 
    className={`fixed top-0 right-0 z-50 transition-all duration-300 ease-out transform ${
      isOpen ? 'translate-x-0' : 'translate-x-full'
    }`}
  >
    {/* Backdrop - made fully transparent */}
    {isOpen && (
      <div 
        className="fixed inset-0 bg-transparent"
        onClick={onClose}
      />
    )}
    
    {/* Menu Panel */}
    <div className="relative w-64 h-auto rounded-l-2xl backdrop-blur-lg bg-neutral-900/30 border-l border-indigo-500/10 shadow-2xl">
      <div className="p-6">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full hover:bg-indigo-500/10 transition-colors"
          aria-label="Close menu"
        >
          <X className="w-5 h-5 text-neutral-400 hover:text-white" />
        </button>

        <div className="mt-12 mb-6">
          <NavLinks
            activeSection={activeSection}
            className="flex flex-col space-y-6"
            isMobile={true}
            onItemClick={onClose}
          />
        </div>
      </div>
    </div>
  </div>
);