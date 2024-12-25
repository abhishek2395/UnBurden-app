import React from 'react';
import { Calendar, DollarSign, TrendingDown, ArrowRight } from 'lucide-react';

interface RepaymentScheduleHeaderProps {
  showDate: boolean;
}

export const RepaymentScheduleHeader: React.FC<RepaymentScheduleHeaderProps> = ({ showDate }) => (
  <tr className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50">
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
      <div className="flex items-center gap-2">
        <Calendar className="w-4 h-4 text-indigo-400" />
        Month
      </div>
    </th>
    {showDate && (
      <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-400" />
          Date
        </div>
      </th>
    )}
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
      <div className="flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-green-400" />
        Opening Balance
      </div>
    </th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
      <div className="flex items-center gap-2">
        <ArrowRight className="w-4 h-4 text-blue-400" />
        EMI Amount
      </div>
    </th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
      <div className="flex items-center gap-2">
        <TrendingDown className="w-4 h-4 text-purple-400" />
        Principal
      </div>
    </th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">Interest</th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">Extra EMI</th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">Lump Sum</th>
    <th className="p-4 text-left text-sm font-medium text-white border-b border-neutral-700/50">
      <div className="flex items-center gap-2">
        <DollarSign className="w-4 h-4 text-orange-400" />
        Closing Balance
      </div>
    </th>
  </tr>
);