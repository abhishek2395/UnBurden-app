import React from 'react';
import { PieChart, Clock, DollarSign, TrendingDown } from 'lucide-react';
import { Loan } from '../types/loan';
import { 
  calculateTotalDebt, 
  calculateAverageRate, 
  calculateTimeToPayoff,
  calculateMonthlyPayment 
} from '../utils/calculations';

interface DashboardProps {
  loans: Loan[];
}

export const Dashboard: React.FC<DashboardProps> = ({ loans }) => {
  const totalDebt = calculateTotalDebt(loans);
  const averageRate = calculateAverageRate(loans);
  const timeToPayoff = calculateTimeToPayoff(loans);
  const monthlyPayment = loans.reduce((sum, loan) => 
    sum + calculateMonthlyPayment(loan), 0
  );

  return (
    <div className="bg-neutral-900 rounded-xl p-8 border border-neutral-800">
      <h2 className="text-2xl font-bold text-white mb-6">Your Dashboard</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
          <DollarSign className="w-8 h-8 text-indigo-400 mb-2" />
          <p className="text-sm text-neutral-400">Total Debt</p>
          <p className="text-2xl font-bold text-white">
            ${totalDebt.toLocaleString()}
          </p>
        </div>
        
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
          <Clock className="w-8 h-8 text-indigo-400 mb-2" />
          <p className="text-sm text-neutral-400">Time to Payoff</p>
          <p className="text-2xl font-bold text-white">
            {timeToPayoff.toFixed(1)} years
          </p>
        </div>
        
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
          <PieChart className="w-8 h-8 text-indigo-400 mb-2" />
          <p className="text-sm text-neutral-400">Average Rate</p>
          <p className="text-2xl font-bold text-white">
            {averageRate.toFixed(1)}%
          </p>
        </div>
        
        <div className="p-6 bg-neutral-800 rounded-xl border border-neutral-700">
          <TrendingDown className="w-8 h-8 text-indigo-400 mb-2" />
          <p className="text-sm text-neutral-400">Monthly Payment</p>
          <p className="text-2xl font-bold text-white">
            ${monthlyPayment.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};