import React from 'react';

interface YearTabsProps {
  totalYears: number;
  selectedYear: number;
  onYearChange: (year: number) => void;
}

export const YearTabs: React.FC<YearTabsProps> = ({
  totalYears,
  selectedYear,
  onYearChange,
}) => {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {Array.from({ length: totalYears }, (_, i) => i + 1).map((year) => (
        <button
          key={year}
          onClick={() => onYearChange(year)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            selectedYear === year
              ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/25'
              : 'bg-neutral-800/30 text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-300'
          }`}
        >
          Year {year}
        </button>
      ))}
    </div>
  );
};