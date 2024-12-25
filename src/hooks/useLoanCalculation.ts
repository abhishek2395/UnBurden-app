import { useState, useCallback } from 'react';
import { calculateLoanAmortization } from '../api/loanCalculator';
import { LoanCalculationRequest, LoanCalculationResponse } from '../types/api';

export function useLoanCalculation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<LoanCalculationResponse | null>(null);

  const calculate = useCallback(async (params: LoanCalculationRequest) => {
    // Validate input parameters
    if (params.loanAmount <= 0 || params.annualInterestRate <= 0 || params.numPayments <= 0) {
      setError('Invalid loan parameters');
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await calculateLoanAmortization(params);
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to calculate loan');
      setResult(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { calculate, loading, error, result };
}