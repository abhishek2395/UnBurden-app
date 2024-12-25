import { addMonths, format } from 'date-fns';

export const formatDate = (date: Date): string => {
  return format(date, 'MMM yyyy');
};

export const getPaymentDate = (startDate: Date, monthNumber: number): Date => {
  return addMonths(startDate, monthNumber - 1);
};