import React from 'react';
import { Calculator, ArrowRight, LineChart, Download } from 'lucide-react';
import { StepCard } from './StepCard';
import { StepConnection } from './StepConnection';
import { ScrollAnimation } from '../ScrollAnimation';

interface HowItWorksSectionProps {
  onCalculateClick: () => void;
}

export const HowItWorksSection: React.FC<HowItWorksSectionProps> = ({ onCalculateClick }) => {
  const steps = [
    {
      number: 1,
      icon: Calculator,
      title: "Enter Your Loan Details",
      description: "Input your principal amount, interest rate, and term to see your baseline monthly EMI."
    },
    {
      number: 2,
      icon: ArrowRight,
      title: "Add Your Extra Payment Strategy",
      description: "Choose how many extra EMIs you'll pay each year, plus a yearly EMI increment."
    },
    {
      number: 3,
      icon: LineChart,
      title: "Compare & Refine",
      description: "View real-time interest savings, months saved, and fine-tune for optimal results."
    },
    {
      number: 4,
      icon: Download,
      title: "Optimize & Save",
      description: "Enjoy a faster path to being student-loan-free. Download or share your personalized plan."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            How It Works
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Get started in just four easy steps
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="flex flex-col lg:flex-row items-start justify-between gap-4 mb-16">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="w-full lg:w-64">
                <StepCard {...step} />
              </div>
              {index < steps.length - 1 && <StepConnection />}
            </React.Fragment>
          ))}
        </ScrollAnimation>

        <ScrollAnimation className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Speed Up Your Repayment?
          </h3>
          <button 
            onClick={onCalculateClick}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25 mt-6"
          >
            Calculate Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};