import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionDividerProps {
  label: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ label }) => {
  return (
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-neutral-800"></div>
      </div>
      <div className="relative flex justify-center">
        <div className="px-4 bg-neutral-950">
          <div className="flex items-center gap-2 text-sm">
            <Sparkles className="w-4 h-4 text-indigo-400" />
            <span className="bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-medium">
              {label}
            </span>
            <Sparkles className="w-4 h-4 text-purple-400" />
          </div>
        </div>
      </div>
    </div>
  );
};