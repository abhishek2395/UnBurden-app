import React from 'react';
import { Plus } from 'lucide-react';
import { Loan } from '../types/loan';
import { LoanCard } from './LoanCard';
import { SummaryCard } from './SummaryCard';
import { useLoanCalculation } from '../hooks/useLoanCalculation';

interface CalculatorProps {
  income: number;
  loans: Loan[];
  setIncome: (income: number) => void;
  setLoans: (loans: Loan[]) => void;
}

export const Calculator: React.FC<CalculatorProps> = ({ 
  income, 
  loans, 
  setIncome, 
  setLoans 
}) => {
  const { calculate, loading, error, result } = useLoanCalculation();

  const addLoan = () => {
    setLoans([...loans, { 
      id: Date.now().toString(),
      amount: 10000,
      rate: 4.5,
      term: 10
    }]);
  };

  const removeLoan = (id: string) => {
    setLoans(loans.filter(loan => loan.id !== id));
  };

  const updateLoan = (id: string, field: keyof Loan, value: number) => {
    const updatedLoans = loans.map(loan => 
      loan.id === id ? { ...loan, [field]: value } : loan
    );
    setLoans(updatedLoans);
  };

  return (
    <div className="space-y-6">
      <div className="bg-neutral-900 rounded-xl p-6 space-y-4">
        <h2 className="text-xl font-semibold text-white">Annual Income</h2>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(Number(e.target.value))}
          className="w-full bg-neutral-800 border border-neutral-700 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="space-y-4">
        {loans.map(loan => (
          <LoanCard
            key={loan.id}
            loan={loan}
            onUpdate={updateLoan}
            onRemove={removeLoan}
            onCalculate={calculate}
          />
        ))}
      </div>

      <button
        onClick={addLoan}
        className="w-full bg-neutral-800 border border-neutral-700 rounded-xl p-4 text-neutral-400 hover:text-indigo-400 hover:border-indigo-400 transition-colors flex items-center justify-center gap-2"
      >
        <Plus className="w-5 h-5" />
        Add Another Loan
      </button>

      <SummaryCard
        loans={loans}
        income={income}
        calculationResult={result}
        loading={loading}
        error={error}
      />
    </div>
  );
};