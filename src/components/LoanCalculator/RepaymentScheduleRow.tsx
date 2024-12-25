import React from 'react';
import { EMIScheduleEntry } from '../../types/calculator';
import { formatDate, getPaymentDate } from '../../utils/dateUtils';

interface RepaymentScheduleRowProps {
  entry: EMIScheduleEntry;
  showDate: boolean;
  startDate?: Date;
}

export const RepaymentScheduleRow: React.FC<RepaymentScheduleRowProps> = ({ 
  entry, 
  showDate,
  startDate 
}) => (
  <tr className={`text-sm border-t border-neutral-800 hover:bg-neutral-800/20 transition-colors ${
    entry.isExtraPayment ? 'bg-indigo-900/20' : ''
  }`}>
    <td className="p-4 font-medium text-indigo-400 whitespace-nowrap">
      {entry.monthNumber}
    </td>
    {showDate && startDate && (
      <td className="p-4 text-blue-300 whitespace-nowrap">
        {formatDate(getPaymentDate(startDate, entry.monthNumber))}
      </td>
    )}
    <td className="p-4 text-green-300 whitespace-nowrap">
      ${entry.openingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-blue-300 whitespace-nowrap">
      ${entry.emiAmount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-purple-300 whitespace-nowrap">
      ${entry.principal.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-red-300 whitespace-nowrap">
      ${entry.interest.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-emerald-300 whitespace-nowrap">
      ${entry.extraEMI.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-yellow-300 whitespace-nowrap">
      ${entry.lumpSumPayment.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
    <td className="p-4 text-orange-300 whitespace-nowrap">
      ${entry.closingBalance.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
    </td>
  </tr>
);