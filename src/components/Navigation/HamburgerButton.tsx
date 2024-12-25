import React from 'react';
import { Menu } from 'lucide-react';

interface HamburgerButtonProps {
  isVisible: boolean;
  onClick: () => void;
}

export const HamburgerButton = ({ isVisible, onClick }: HamburgerButtonProps) => (
  <button
    onClick={onClick}
    className={`fixed top-4 right-4 z-50 transition-all duration-500 transform ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
    } focus:outline-none group`}
    aria-label="Open navigation menu"
  >
    <div className="relative w-12 h-12">
      {/* Button content */}
      <div className="relative w-full h-full rounded-full border border-indigo-500/20 flex items-center justify-center group-hover:border-indigo-500/40 transition-colors">
        <Menu className="w-6 h-6 text-neutral-400 group-hover:text-white transition-colors" />
      </div>
      
      {/* Subtle ring animation */}
      <div className="absolute -inset-px rounded-full border border-indigo-500/10">
        <div className="absolute -inset-px rounded-full border border-indigo-500/5 animate-ping" />
      </div>
    </div>
  </button>
);