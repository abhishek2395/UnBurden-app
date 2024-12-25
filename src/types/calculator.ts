export interface LoanSummary {
  monthlyEMI: number;
  standardInterest: number;
  totalInterest: number;
  totalPayment: number;
  interestSaved: number;
  monthsSaved: number;
  standardMonths: number;  // Added this field
}

export interface LoanInputs {
  amount: number | null;
  interestRate: number | null;
  termYears: number | null;
  startDate: Date | null;
  extraEMIs: number;
  annualEMIIncrease: number;
  lumpSumAmount: number | null;
  lumpSumFrequency: 'monthly' | 'yearly';
}

export interface EMIScheduleEntry {
  monthNumber: number;
  openingBalance: number;
  emiAmount: number;
  principal: number;
  interest: number;
  extraEMI: number;
  lumpSumPayment: number;
  closingBalance: number;
  isExtraPayment: boolean;
}