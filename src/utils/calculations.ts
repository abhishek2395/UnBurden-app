import { Loan } from '../types/loan';

export const calculateMonthlyPayment = (loan: Loan): number => {
  if (!loan || loan.amount <= 0 || loan.rate <= 0 || loan.term <= 0) {
    return 0;
  }
  const monthlyRate = loan.rate / 1200;
  const months = loan.term * 12;
  return (loan.amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / 
         (Math.pow(1 + monthlyRate, months) - 1);
};

export const calculateTotalMonthlyPayment = (loans: Loan[]): number => {
  if (!loans || loans.length === 0) {
    return 0;
  }
  return loans.reduce((sum, loan) => sum + calculateMonthlyPayment(loan), 0);
};

export const calculateTotalDebt = (loans: Loan[]): number => {
  if (!loans || loans.length === 0) {
    return 0;
  }
  return loans.reduce((sum, loan) => sum + loan.amount, 0);
};

export const calculateAverageRate = (loans: Loan[]): number => {
  if (!loans || loans.length === 0) {
    return 0;
  }
  const totalAmount = calculateTotalDebt(loans);
  if (totalAmount === 0) {
    return 0;
  }
  const weightedRates = loans.reduce((sum, loan) => 
    sum + (loan.amount / totalAmount) * loan.rate, 0
  );
  return weightedRates;
};

export const calculateTimeToPayoff = (loans: Loan[]): number => {
  if (!loans || loans.length === 0) {
    return 0;
  }
  return Math.max(...loans.map(loan => loan.term));
};