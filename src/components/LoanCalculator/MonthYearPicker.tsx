import React from 'react';
import { Calendar } from 'lucide-react';

interface MonthYearPickerProps {
  value: Date | null;
  onChange: (date: Date | null) => void;
}

const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

// Generate years from current year to 2000 in descending order
const currentYear = new Date().getFullYear();
const years = Array.from(
  { length: currentYear - 1999 }, 
  (_, i) => currentYear - i
);

export const MonthYearPicker: React.FC<MonthYearPickerProps> = ({ value, onChange }) => {
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const month = parseInt(e.target.value);
    if (value) {
      const newDate = new Date(value.getFullYear(), month);
      onChange(newDate);
    } else {
      const newDate = new Date(currentYear, month);
      onChange(newDate);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const year = parseInt(e.target.value);
    if (value) {
      const newDate = new Date(year, value.getMonth());
      onChange(newDate);
    } else {
      const newDate = new Date(year, 0);
      onChange(newDate);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-neutral-300">
        Loan Disbursement Date
        <span className="ml-2 text-xs text-neutral-400">(Optional)</span>
      </label>
      <div className="flex gap-4">
        {/* Month Dropdown */}
        <div className="relative flex-1">
          <select
            value={value ? value.getMonth() : ''}
            onChange={handleMonthChange}
            className="w-full appearance-none bg-neutral-800/30 outline-none border border-neutral-700/50 focus:border-indigo-600 shadow-sm rounded-lg py-2.5 px-4 pr-10 text-white cursor-pointer hover:bg-neutral-800/50 transition-colors"
          >
            <option value="" disabled>Month</option>
            {months.map((month, index) => (
              <option key={month} value={index} className="bg-neutral-800">
                {month}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="border-t-2 border-r-2 border-indigo-400 w-2 h-2 transform rotate-45 translate-y-[-4px]" />
          </div>
        </div>

        {/* Year Dropdown */}
        <div className="relative flex-1">
          <select
            value={value ? value.getFullYear() : ''}
            onChange={handleYearChange}
            className="w-full appearance-none bg-neutral-800/30 outline-none border border-neutral-700/50 focus:border-indigo-600 shadow-sm rounded-lg py-2.5 px-4 pr-10 text-white cursor-pointer hover:bg-neutral-800/50 transition-colors"
          >
            <option value="" disabled>Year</option>
            {years.map(year => (
              <option key={year} value={year} className="bg-neutral-800">
                {year}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <div className="border-t-2 border-r-2 border-indigo-400 w-2 h-2 transform rotate-45 translate-y-[-4px]" />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 mt-2">
        <Calendar className="w-4 h-4 text-indigo-400" />
        <span className="text-xs text-neutral-400">
          {value 
            ? `Selected: ${months[value.getMonth()]} ${value.getFullYear()}`
            : 'Select month and year of loan disbursement'}
        </span>
      </div>
    </div>
  );
};