import { cva } from 'class-variance-authority';

export const gradientButton = cva(
  "group inline-flex items-center gap-2 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 shadow-lg",
  {
    variants: {
      theme: {
        indigo: "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-indigo-500/25",
        orange: "bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 hover:shadow-primary-500/25",
      },
    },
    defaultVariants: {
      theme: "indigo",
    },
  }
);

export const gradientText = cva(
  "bg-clip-text text-transparent",
  {
    variants: {
      theme: {
        indigo: "bg-gradient-to-r from-indigo-400 to-purple-400",
        orange: "bg-gradient-to-r from-primary-400 to-primary-500",
      },
    },
    defaultVariants: {
      theme: "indigo",
    },
  }
);