import React from 'react';
import { DollarSign, TrendingDown, Sparkles } from 'lucide-react';
import { LoanSummary } from '../../types/calculator';
import { Celebration } from '../ui/Celebration';
import { PayoffComparison } from './PayoffComparison';

interface ResultsDashboardProps {
  summary: LoanSummary;
  startDate: Date | null;
  showUnburden: boolean;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({ 
  summary,
  startDate,
  showUnburden
}) => {
  return (
    <div className="space-y-8">
      {/* Show celebration card only when UnBurden features are enabled and there are savings */}
      {showUnburden && summary.interestSaved > 0 && (
        <Celebration 
          amount={summary.interestSaved} 
          monthsSaved={summary.monthsSaved} 
        />
      )}

      <div className="space-y-6">
        <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Loan Summary
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-6 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 hover:border-indigo-500/20 transition-colors">
            <DollarSign className="w-6 h-6 text-indigo-400 mb-2" />
            <p className="text-sm font-medium text-neutral-400 mb-1">Monthly EMI</p>
            <p className="text-2xl font-bold text-white">
              ${summary.monthlyEMI.toFixed(2)}
            </p>
          </div>
          
          <div className="p-6 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 hover:border-red-500/20 transition-colors">
            <TrendingDown className="w-6 h-6 text-red-400 mb-2" />
            <p className="text-sm font-medium text-neutral-400 mb-1">Standard Interest</p>
            <p className="text-2xl font-bold text-white">
              ${summary.standardInterest.toFixed(2)}
            </p>
          </div>
          
          <div className="p-6 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 hover:border-green-500/20 transition-colors">
            <TrendingDown className="w-6 h-6 text-green-400 mb-2" />
            <p className="text-sm font-medium text-neutral-400 mb-1">UnBurden Interest</p>
            <p className="text-2xl font-bold text-white">
              ${summary.totalInterest.toFixed(2)}
            </p>
          </div>
          
          <div className="p-6 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 hover:border-purple-500/20 transition-colors">
            <Sparkles className="w-6 h-6 text-purple-400 mb-2" />
            <p className="text-sm font-medium text-neutral-400 mb-1">Interest Saved</p>
            <p className="text-2xl font-bold text-white">
              ${summary.interestSaved.toFixed(2)}
            </p>
          </div>
        </div>

        {/* Payoff date comparison */}
        {showUnburden && startDate && (
          <PayoffComparison
            startDate={startDate}
            standardMonths={summary.standardMonths}
            acceleratedMonths={summary.standardMonths - summary.monthsSaved}
          />
        )}
      </div>
    </div>
  );
};