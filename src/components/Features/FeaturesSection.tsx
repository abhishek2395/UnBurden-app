import React from 'react';
import { Calculator, Coins, TrendingUp, PieChart, ArrowRight } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { ScrollAnimation } from '../ScrollAnimation';

interface FeaturesSectionProps {
  onCalculateClick: () => void;
}

export const FeaturesSection: React.FC<FeaturesSectionProps> = ({ onCalculateClick }) => {
  const features = [
    {
      icon: Calculator,
      title: "Calculate in Real-Time",
      description: "Get an instant overview of your monthly payments, total interest, and loan duration—no complicated formulas needed."
    },
    {
      icon: Coins,
      title: "Pay Off Faster with Extra EMIs",
      description: "Add optional extra payments any time of the year. Watch how just a few extra EMIs cut down your total interest."
    },
    {
      icon: TrendingUp,
      title: "Raise Monthly Payments Annually",
      description: "Choose a small percentage increase in your EMI each year to shorten your repayment term and save more."
    },
    {
      icon: PieChart,
      title: "See Your Time & Money Saved",
      description: "Instantly compare your standard repayment schedule to your optimized plan, highlighting months saved and interest reduced."
    }
  ];

  return (
    <section className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        <ScrollAnimation className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Simplify. Optimize. Conquer.
          </h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            From monthly calculations to annual boosts, see how quickly you can become debt-free.
          </p>
        </ScrollAnimation>

        <ScrollAnimation className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </ScrollAnimation>

        <ScrollAnimation className="text-center">
          <h3 className="text-2xl font-bold text-white mb-2">
            Ready to Lower Your Loan Burden?
          </h3>
          <p className="text-neutral-400 mb-6">
            Click below to see how fast you can pay off your loans!
          </p>
          <button 
            onClick={onCalculateClick}
            className="group inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-indigo-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-indigo-500/25"
          >
            Try the UnBurden Calculator Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </ScrollAnimation>
      </div>
    </section>
  );
};