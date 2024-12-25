import React from 'react';
import { Loan } from '../types/loan';
import { LoanCalculationResponse } from '../types/api';
import { calculateTotalMonthlyPayment } from '../utils/calculations';
import { DollarSign, TrendingUp, Clock, PieChart } from 'lucide-react';

interface SummaryCardProps {
  loans: Loan[];
  income: number;
  calculationResult: LoanCalculationResponse | null;
  loading?: boolean;
  error?: string | null;
}

export const SummaryCard: React.FC<SummaryCardProps> = ({ 
  loans,
  income = 0,
  calculationResult,
  loading,
  error
}) => {
  const totalMonthlyPayment = calculateTotalMonthlyPayment(loans);
  const debtToIncomeRatio = income > 0 ? (totalMonthlyPayment * 12 / income) * 100 : 0;

  if (loading) {
    return (
      <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-800">
        <p className="text-indigo-400 text-sm">Calculating...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-800">
        <p className="text-red-400 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-4 border border-neutral-800">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
          <DollarSign className="w-4 h-4 text-indigo-400 mb-1" />
          <p className="text-xs text-neutral-400">Monthly Payment</p>
          <p className="text-lg font-bold text-white">
            ${totalMonthlyPayment.toFixed(2)}
          </p>
        </div>

        <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
          <TrendingUp className="w-4 h-4 text-green-400 mb-1" />
          <p className="text-xs text-neutral-400">Debt-to-Income</p>
          <p className="text-lg font-bold text-white">
            {debtToIncomeRatio.toFixed(1)}%
          </p>
        </div>

        {calculationResult && (
          <>
            <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <Clock className="w-4 h-4 text-orange-400 mb-1" />
              <p className="text-xs text-neutral-400">Total Interest</p>
              <p className="text-lg font-bold text-white">
                ${Number(calculationResult.totalInterest || 0).toFixed(2)}
              </p>
            </div>

            <div className="p-3 bg-neutral-800/50 rounded-lg border border-neutral-700">
              <PieChart className="w-4 h-4 text-purple-400 mb-1" />
              <p className="text-xs text-neutral-400">Total Payment</p>
              <p className="text-lg font-bold text-white">
                ${Number(calculationResult.totalPayment || 0).toFixed(2)}
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};