import React from 'react';
import { Sparkles } from 'lucide-react';
import { EnhancedSlider } from './EnhancedSlider';
import { LumpSumPayment } from './LumpSumPayment';

interface UnburdenFeaturesProps {
  extraEMIs: number;
  annualIncrease: number;
  lumpSum: number;
  lumpSumFrequency: 'monthly' | 'yearly';
  onExtraEMIsChange: (value: number) => void;
  onAnnualIncreaseChange: (value: number) => void;
  onLumpSumChange: (value: number) => void;
  onLumpSumFrequencyChange: (value: 'monthly' | 'yearly') => void;
}

export const UnburdenFeatures: React.FC<UnburdenFeaturesProps> = ({
  extraEMIs,
  annualIncrease,
  lumpSum,
  lumpSumFrequency,
  onExtraEMIsChange,
  onAnnualIncreaseChange,
  onLumpSumChange,
  onLumpSumFrequencyChange,
}) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-5 h-5 text-indigo-400" />
        <h3 className="text-lg font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          UnBurden Features
        </h3>
      </div>

      <EnhancedSlider
        label="Extra EMI Payments per Year"
        value={extraEMIs}
        onChange={onExtraEMIsChange}
        min={0}
        max={12}
        step={1}
        suffix="payments"
      />

      <EnhancedSlider
        label="Annual EMI Increase"
        value={annualIncrease}
        onChange={onAnnualIncreaseChange}
        min={0}
        max={100}
        step={5}
        suffix="%"
      />

      <LumpSumPayment
        amount={lumpSum}
        frequency={lumpSumFrequency}
        onAmountChange={onLumpSumChange}
        onFrequencyChange={onLumpSumFrequencyChange}
      />
    </div>
  );
};