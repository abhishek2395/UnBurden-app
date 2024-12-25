import React from 'react';
import { DollarSign } from 'lucide-react';

interface LumpSumPaymentProps {
  amount: number | null;
  frequency: 'monthly' | 'yearly';
  onAmountChange: (value: number | null) => void;
  onFrequencyChange: (value: 'monthly' | 'yearly') => void;
}

export const LumpSumPayment: React.FC<LumpSumPaymentProps> = ({
  amount,
  frequency,
  onAmountChange,
  onFrequencyChange,
}) => {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-neutral-300">
        Lump Sum Payment
      </label>
      
      <div className="relative">
        <DollarSign className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
        <input
          type="number"
          value={amount || ''}
          onChange={(e) => {
            const value = e.target.value === '' ? null : Number(e.target.value);
            onAmountChange(value);
          }}
          className="w-full pl-10 pr-4 py-2.5 bg-neutral-800/30 border border-neutral-700/50 rounded-lg text-white focus:border-indigo-600 focus:ring-1 focus:ring-indigo-600"
          placeholder="Enter amount"
        />
      </div>

      <div className="inline-flex p-1 gap-1 bg-neutral-800/30 rounded-lg">
        <button
          onClick={() => onFrequencyChange('monthly')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
            frequency === 'monthly'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-neutral-400 hover:text-neutral-300'
          }`}
        >
          Monthly
        </button>

        <button
          onClick={() => onFrequencyChange('yearly')}
          className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
            frequency === 'yearly'
              ? 'bg-indigo-600 text-white shadow-lg'
              : 'text-neutral-400 hover:text-neutral-300'
          }`}
        >
          Yearly
        </button>
      </div>
    </div>
  );
};