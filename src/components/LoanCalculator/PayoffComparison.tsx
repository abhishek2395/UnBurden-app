import React from 'react';
import { Calendar } from 'lucide-react';
import { addMonths, format } from 'date-fns';

interface PayoffComparisonProps {
  startDate: Date | null;
  standardMonths: number;
  acceleratedMonths: number;
}

export const PayoffComparison: React.FC<PayoffComparisonProps> = ({
  startDate,
  standardMonths,
  acceleratedMonths
}) => {
  if (!startDate) return null;

  const standardPayoffDate = addMonths(startDate, standardMonths);
  const acceleratedPayoffDate = addMonths(startDate, acceleratedMonths);
  const formatDate = (date: Date) => format(date, 'MMM yyyy');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="p-4 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-red-400" />
          <p className="text-sm text-neutral-400">Standard Payoff</p>
        </div>
        <p className="text-lg font-semibold text-white">{formatDate(standardPayoffDate)}</p>
      </div>

      <div className="p-4 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-indigo-500/20">
        <div className="flex items-center gap-2 mb-2">
          <Calendar className="w-4 h-4 text-indigo-400" />
          <p className="text-sm text-neutral-400">UnBurden Payoff</p>
        </div>
        <p className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          {formatDate(acceleratedPayoffDate)}
        </p>
      </div>
    </div>
  );
};