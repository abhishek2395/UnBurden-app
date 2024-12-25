import React from 'react';
import { Zap, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-neutral-900/50 border-t border-neutral-800 py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Made with</span>
            <Zap className="w-4 h-4 text-indigo-400" />
            <span>by</span>
            <a 
              href="https://stackblitz.com/bolt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Bolt
            </a>
          </div>
          
          <div className="flex items-center gap-2 text-neutral-400">
            <span>Created with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>by</span>
            <a 
              href="https://www.linkedin.com/in/iamabhishekjaiswal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Abhishek Jaiswal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};