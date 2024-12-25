import React, { useState } from 'react';
import { LoanInputForm } from './LoanInputForm';
import { ResultsDashboard } from './ResultsDashboard';
import { RepaymentSchedule } from './RepaymentSchedule';
import { LoanInputs } from '../../types/calculator';
import { calculateLoanDetails } from '../../utils/loanCalculations';

const initialInputs: LoanInputs = {
  amount: null,
  interestRate: null,
  termYears: null,
  startDate: null,
  extraEMIs: 0,
  annualEMIIncrease: 0,
  lumpSumAmount: null,
  lumpSumFrequency: 'monthly'
};

export const LoanCalculator: React.FC = () => {
  const [inputs, setInputs] = useState<LoanInputs>(initialInputs);
  const [showUnburden, setShowUnburden] = useState(false);
  const [results, setResults] = useState<ReturnType<typeof calculateLoanDetails> | null>(null);

  const handleInputChange = (field: keyof LoanInputs, value: number | Date | null | string) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };

  const handleUnburdenToggle = (enabled: boolean) => {
    setShowUnburden(enabled);
    if (!enabled) {
      setInputs(prev => ({
        ...prev,
        extraEMIs: 0,
        annualEMIIncrease: 0,
        lumpSumAmount: null
      }));
    }
  };

  const handleCalculate = () => {
    if (!inputs.amount || !inputs.interestRate || !inputs.termYears) return;
    const calculationResults = calculateLoanDetails(inputs);
    setResults(calculationResults);
  };

  const handleReset = () => {
    setInputs(initialInputs);
    setResults(null);
    setShowUnburden(false);
  };

  return (
    <div className="container mx-auto max-w-5xl px-4">
      <div className="space-y-16">
        <LoanInputForm
          inputs={inputs}
          onInputChange={handleInputChange}
          onCalculate={handleCalculate}
          onReset={handleReset}
          showUnburden={showUnburden}
          onUnburdenToggle={handleUnburdenToggle}
        />

        {results && (
          <div className="space-y-16">
            <ResultsDashboard
              summary={results.summary}
              startDate={inputs.startDate}
              showUnburden={showUnburden}
            />
            
            <RepaymentSchedule
              schedule={results.schedule}
              startDate={inputs.startDate}
            />
          </div>
        )}
      </div>
    </div>
  );
};