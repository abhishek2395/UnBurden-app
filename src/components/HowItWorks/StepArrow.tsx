import React from 'react';
import { ArrowRight } from 'lucide-react';

export const StepArrow = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-24 -mx-4">
      <div className="relative w-full">
        {/* Curved path */}
        <svg className="w-full h-12" viewBox="0 0 100 48">
          <path
            d="M0,24 C20,24 30,24 50,24 C70,24 80,24 100,24"
            className="stroke-indigo-600/20"
            fill="none"
            strokeWidth="2"
          />
          <path
            d="M0,24 C20,24 30,24 50,24 C70,24 80,24 100,24"
            className="stroke-indigo-600 animate-draw"
            fill="none"
            strokeWidth="2"
            strokeDasharray="100"
            strokeDashoffset="100"
          />
          {/* Arrow head */}
          <circle
            cx="96"
            cy="24"
            r="3"
            className="fill-purple-400 animate-pulse"
          />
        </svg>
      </div>
    </div>
  );
};