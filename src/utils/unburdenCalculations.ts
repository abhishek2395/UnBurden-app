import { LoanInputs } from '../types/calculator';

export function calculateUnburdenSavings(
  loanAmount: number,
  interestRate: number,
  termYears: number,
  extraEMIs: number | null,
  annualEMIIncrease: number | null
): number {
  // Calculate base monthly payment without UnBurden features
  const monthlyRate = interestRate / 1200;
  const totalMonths = termYears * 12;
  const baseEMI = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                 (Math.pow(1 + monthlyRate, totalMonths) - 1);

  // Calculate total interest without UnBurden features
  let standardBalance = loanAmount;
  let standardTotalInterest = 0;
  
  for (let i = 0; i < totalMonths; i++) {
    const monthlyInterest = standardBalance * monthlyRate;
    standardTotalInterest += monthlyInterest;
    standardBalance -= (baseEMI - monthlyInterest);
  }

  // Calculate total interest with UnBurden features
  let unburdenBalance = loanAmount;
  let unburdenTotalInterest = 0;
  
  for (let i = 0; i < totalMonths && unburdenBalance > 0; i++) {
    // Apply annual EMI increase if enabled
    const yearNumber = Math.floor(i / 12);
    const emiIncrease = 1 + ((annualEMIIncrease || 0) * yearNumber / 100);
    const adjustedEMI = baseEMI * emiIncrease;

    // Calculate monthly components
    const monthlyInterest = unburdenBalance * monthlyRate;
    unburdenTotalInterest += monthlyInterest;
    
    let payment = adjustedEMI;
    
    // Add extra EMI if applicable
    if (extraEMIs && extraEMIs > 0 && i % Math.floor(12 / extraEMIs) === 0) {
      payment += adjustedEMI;
    }
    
    unburdenBalance -= (payment - monthlyInterest);
  }

  // Return the difference in total interest paid
  return Math.max(0, standardTotalInterest - unburdenTotalInterest);
}