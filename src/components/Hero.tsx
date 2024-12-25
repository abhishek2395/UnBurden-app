import React from 'react';
import { GraduationCap, ArrowRight } from 'lucide-react';

interface HeroProps {
  onCalculateClick: () => void;
}

export const Hero = ({ onCalculateClick }: HeroProps) => {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center max-w-4xl">
        <div className="space-y-8">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-950/50 rounded-full border border-indigo-500/20 mb-8">
            <GraduationCap className="w-5 h-5 text-indigo-400 mr-2" />
            <span className="text-sm font-medium text-indigo-400">Student Loan Management Made Simple</span>
          </div>
          <h1 className="text-6xl font-bold leading-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text font-display">
            Unburden: Simplify Your Student Loan Journey
          </h1>
          <p className="text-2xl bg-gradient-to-r from-neutral-400 to-neutral-200 text-transparent bg-clip-text font-light max-w-2xl mx-auto">
            Understand, Optimize, and Conquer Your Student Debt with our AI-powered tools and personalized insights.
          </p>
          <div className="pt-4">
            <button 
              onClick={onCalculateClick}
              className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
            >
              Calculate Your Loans
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};