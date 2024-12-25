import React from 'react';

export const GradientBackground: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated pattern background */}
      <div className="absolute inset-0 bg-neutral-950">
        <div className="absolute inset-0 [background:radial-gradient(circle_at_center,rgba(99,102,241,0.15)_10%,transparent_20%),radial-gradient(circle_at_center,transparent_10%,rgba(99,102,241,0.15)_20%)] bg-neutral-950 [background-size:30px_30px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] animate-background-pattern" />
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-purple-600/15 to-pink-600/15 blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute -bottom-40 right-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-blue-600/15 to-indigo-600/15 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};