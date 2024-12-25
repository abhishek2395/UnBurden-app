import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { LoanCalculator } from '../components/LoanCalculator';

interface CalculatorPageProps {
  onBackClick: () => void;
}

export const CalculatorPage = ({ onBackClick }: CalculatorPageProps) => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          Unburden
        </h1>
        <p className="text-xl text-neutral-400 text-center">
          Student Loan Calculator
        </p>
      </div>

      <button 
        onClick={onBackClick}
        className="flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to Home
      </button>
      
      <LoanCalculator />
    </div>
  );
};