import { LoanInputs, EMIScheduleEntry, LoanSummary } from '../types/calculator';

// Calculate standard loan details without UnBurden features
function calculateStandardLoan(amount: number, interestRate: number, termYears: number) {
  const monthlyRate = interestRate / 1200;
  const totalMonths = termYears * 12;
  
  // Calculate base EMI
  const baseEMI = (amount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                 (Math.pow(1 + monthlyRate, totalMonths) - 1);

  let remainingBalance = amount;
  let totalInterest = 0;
  
  for (let month = 1; month <= totalMonths && remainingBalance > 0; month++) {
    const monthlyInterest = remainingBalance * monthlyRate;
    const monthlyPrincipal = Math.min(baseEMI - monthlyInterest, remainingBalance);
    
    totalInterest += monthlyInterest;
    remainingBalance -= monthlyPrincipal;
  }

  return {
    monthlyEMI: baseEMI,
    totalInterest,
    totalPayment: amount + totalInterest
  };
}

export function calculateLoanDetails(inputs: LoanInputs) {
  if (!inputs.amount || !inputs.interestRate || !inputs.termYears) {
    throw new Error('Invalid loan parameters');
  }

  // Calculate standard loan details first
  const standardLoan = calculateStandardLoan(inputs.amount, inputs.interestRate, inputs.termYears);
  const monthlyRate = inputs.interestRate / 1200;
  const totalMonths = inputs.termYears * 12;
  const baseEMI = standardLoan.monthlyEMI;

  // Handle lump sum payments
  const applyLumpSum = (balance: number, payment: number) => {
    return Math.max(0, balance - payment);
  };

  let remainingBalance = inputs.amount;
  let totalInterest = 0;
  const schedule: EMIScheduleEntry[] = [];
  
  for (let month = 1; month <= totalMonths && remainingBalance > 0; month++) {
    const yearNumber = Math.floor((month - 1) / 12);
    const emiIncrease = 1 + (inputs.annualEMIIncrease * yearNumber / 100);
    const adjustedEMI = baseEMI * emiIncrease;
    
    // Calculate monthly components
    const monthlyInterest = remainingBalance * monthlyRate;
    let monthlyPrincipal = Math.min(adjustedEMI - monthlyInterest, remainingBalance);
    
    // Apply extra EMI if applicable
    const isExtraMonth = inputs.extraEMIs > 0 && month % Math.floor(12 / inputs.extraEMIs) === 0;
    const extraEMI = isExtraMonth ? adjustedEMI : 0;
    
    // Apply lump sum payment if applicable
    const shouldApplyLumpSum = inputs.lumpSumAmount && inputs.lumpSumAmount > 0 && (
      (inputs.lumpSumFrequency === 'monthly') ||
      (inputs.lumpSumFrequency === 'yearly' && month % 12 === 0)
    );
    
    const lumpSumPayment = shouldApplyLumpSum ? (inputs.lumpSumAmount || 0) : 0;
    
    // Calculate closing balance
    remainingBalance = applyLumpSum(
      remainingBalance - monthlyPrincipal - extraEMI,
      lumpSumPayment
    );
    
    totalInterest += monthlyInterest;
    
    schedule.push({
      monthNumber: month,
      openingBalance: remainingBalance + monthlyPrincipal + extraEMI + lumpSumPayment,
      emiAmount: adjustedEMI,
      principal: monthlyPrincipal,
      interest: monthlyInterest,
      extraEMI,
      lumpSumPayment,
      closingBalance: remainingBalance,
      isExtraPayment: isExtraMonth || lumpSumPayment > 0
    });
    
    if (remainingBalance === 0) break;
  }

  const monthsSaved = totalMonths - schedule.length;
  
  return {
    summary: {
      monthlyEMI: baseEMI,
      standardInterest: standardLoan.totalInterest,
      totalInterest,
      totalPayment: inputs.amount + totalInterest,
      interestSaved: standardLoan.totalInterest - totalInterest,
      monthsSaved,
      standardMonths: totalMonths
    },
    schedule
  };
}