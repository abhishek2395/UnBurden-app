export type PaymentFrequency = 'daily' | 'weekly' | 'bi-weekly' | 'monthly' | 'yearly';

export interface LoanCalculationRequest {
  loanAmount: number;
  annualInterestRate: number;
  numPayments: number;
  extraPayment?: number;
  frequency: PaymentFrequency;
}

export interface AmortizationScheduleEntry {
  paymentNumber: number;
  paymentAmount: number;
  principalPaid: number;
  interestPaid: number;
  remainingBalance: number;
}

export interface LoanCalculationResponse {
  monthlyPayment: number;
  totalInterest: number;
  totalPayment: number;
  schedule: AmortizationScheduleEntry[];
}