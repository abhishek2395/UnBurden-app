import React, { useState, useMemo } from 'react';
import { EMIScheduleEntry } from '../../types/calculator';
import { YearTabs } from './YearTabs';
import { RepaymentScheduleHeader } from './RepaymentScheduleHeader';
import { RepaymentScheduleRow } from './RepaymentScheduleRow';

interface RepaymentScheduleProps {
  schedule: EMIScheduleEntry[];
  startDate?: Date | null;
}

export const RepaymentSchedule: React.FC<RepaymentScheduleProps> = ({ 
  schedule,
  startDate 
}) => {
  const totalYears = Math.ceil(schedule.length / 12);
  const [selectedYear, setSelectedYear] = useState(1);
  const showDate = Boolean(startDate);

  const yearlySchedule = useMemo(() => {
    const startIndex = (selectedYear - 1) * 12;
    const endIndex = startIndex + 12;
    return schedule.slice(startIndex, endIndex);
  }, [schedule, selectedYear]);

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
          Repayment Schedule
        </h3>
        <p className="text-sm text-neutral-400 mt-2">
          Total duration: <span className="text-indigo-400">{schedule.length} months</span> ({totalYears} years)
        </p>
      </div>
      
      <YearTabs
        totalYears={totalYears}
        selectedYear={selectedYear}
        onYearChange={setSelectedYear}
      />
      
      <div className="bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px]">
            <thead>
              <RepaymentScheduleHeader showDate={showDate} />
            </thead>
            <tbody>
              {yearlySchedule.map((entry) => (
                <RepaymentScheduleRow 
                  key={entry.monthNumber}
                  entry={entry}
                  showDate={showDate}
                  startDate={startDate || undefined}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};