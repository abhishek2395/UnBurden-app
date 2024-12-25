import React from 'react';

export const StepConnection = () => {
  return (
    <div className="hidden lg:flex items-center justify-center w-24 -mx-4">
      <div className="relative w-full h-[2px] bg-neutral-800">
        {/* Animated dots */}
        <div className="absolute inset-0 flex justify-between">
          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-glow" />
          <div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-glow [animation-delay:150ms]" />
          <div className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-glow [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  );
};