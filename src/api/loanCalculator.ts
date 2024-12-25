import { LoanCalculationRequest, LoanCalculationResponse } from '../types/api';

const API_KEY = import.meta.env.VITE_RAPID_API_KEY;
const API_HOST = import.meta.env.VITE_RAPID_API_HOST;

export async function calculateLoanAmortization(params: LoanCalculationRequest): Promise<LoanCalculationResponse> {
  try {
    const response = await fetch(`https://${API_HOST}/api/calculate/amortization`, {
      method: 'POST',
      headers: {
        'x-rapidapi-key': API_KEY,
        'x-rapidapi-host': API_HOST,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loan_amount: Math.round(params.loanAmount).toString(),
        annual_interest_rate: params.annualInterestRate.toFixed(2),
        num_payments: Math.round(params.numPayments).toString(),
        extra_payment: '0',
        frequency: params.frequency,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || 'Failed to calculate loan amortization');
    }

    return response.json();
  } catch (error) {
    throw new Error(error instanceof Error ? error.message : 'Failed to calculate loan');
  }
}