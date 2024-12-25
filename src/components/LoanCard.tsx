import React, { useEffect } from 'react';
import { DollarSign, X } from 'lucide-react';
import { Loan } from '../types/loan';
import { Slider } from './Slider';
import { LoanCalculationRequest } from '../types/api';

interface LoanCardProps {
  loan: Loan;
  onUpdate: (id: string, field: keyof Loan, value: number) => void;
  onRemove: (id: string) => void;
  onCalculate: (params: LoanCalculationRequest) => Promise<void>;
}

export const LoanCard: React.FC<LoanCardProps> = ({ 
  loan, 
  onUpdate, 
  onRemove,
  onCalculate 
}) => {
  useEffect(() => {
    if (loan.amount > 0 && loan.rate > 0 && loan.term > 0) {
      onCalculate({
        loanAmount: loan.amount,
        annualInterestRate: loan.rate,
        numPayments: loan.term * 12,
        frequency: 'monthly'
      });
    }
  }, [loan.amount, loan.rate, loan.term, onCalculate]);

  const handleUpdate = (field: keyof Loan, value: number) => {
    onUpdate(loan.id, field, value);
  };

  return (
    <div className="bg-neutral-900/50 backdrop-blur-sm rounded-xl p-6 space-y-4 border border-neutral-800">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <DollarSign className="w-5 h-5 text-indigo-400" />
          <h3 className="text-lg font-medium text-white">Loan Details</h3>
        </div>
        <button
          onClick={() => onRemove(loan.id)}
          className="p-1 hover:bg-neutral-800 rounded-lg transition-colors"
        >
          <X className="w-5 h-5 text-neutral-400 hover:text-red-400" />
        </button>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm text-neutral-400">Loan Amount</label>
          <input
            type="number"
            value={loan.amount}
            onChange={(e) => handleUpdate('amount', Number(e.target.value))}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Slider
            value={loan.amount}
            min={1000}
            max={100000}
            step={1000}
            onChange={(value) => handleUpdate('amount', value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-neutral-400">Interest Rate (%)</label>
          <input
            type="number"
            value={loan.rate}
            onChange={(e) => handleUpdate('rate', Number(e.target.value))}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Slider
            value={loan.rate}
            min={0.1}
            max={15}
            step={0.1}
            onChange={(value) => handleUpdate('rate', value)}
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm text-neutral-400">Term (years)</label>
          <input
            type="number"
            value={loan.term}
            onChange={(e) => handleUpdate('term', Number(e.target.value))}
            className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
          <Slider
            value={loan.term}
            min={1}
            max={30}
            step={1}
            onChange={(value) => handleUpdate('term', value)}
          />
        </div>
      </div>
    </div>
  );
};