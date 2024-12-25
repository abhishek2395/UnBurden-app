import React from 'react';
import { Sparkles } from 'lucide-react';

export const Logo = () => (
  <div className="flex items-center space-x-2 group">
    <div className="relative">
      <Sparkles className="w-6 h-6 text-indigo-400 transform transition-transform group-hover:scale-110 duration-300" />
      <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full transform scale-150 group-hover:scale-175 transition-transform duration-300" />
    </div>
    <span className="text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
      UnBurden
    </span>
  </div>
);