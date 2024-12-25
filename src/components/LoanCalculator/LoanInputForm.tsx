import React from 'react';
import { RotateCcw } from 'lucide-react';
import { LoanInputs } from '../../types/calculator';
import { InputField } from '../ui/InputField';
import { CosmicToggle } from '../ui/CosmicToggle';
import { UnburdenFeatures } from './UnburdenFeatures';
import { MonthYearPicker } from './MonthYearPicker';

interface LoanInputFormProps {
  inputs: LoanInputs;
  onInputChange: (field: keyof LoanInputs, value: number | Date | null) => void;
  onCalculate: () => void;
  onReset: () => void;
  showUnburden: boolean;
  onUnburdenToggle: (show: boolean) => void;
}

export const LoanInputForm: React.FC<LoanInputFormProps> = ({
  inputs,
  onInputChange,
  onCalculate,
  onReset,
  showUnburden,
  onUnburdenToggle,
}) => {
  const isFormValid = Boolean(
    inputs.amount && 
    inputs.amount > 0 && 
    inputs.interestRate && 
    inputs.interestRate > 0 && 
    inputs.termYears && 
    inputs.termYears > 0
  );

  return (
    <div className="bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 overflow-hidden">
      <div className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <InputField
            label="Loan Amount"
            value={inputs.amount ?? ''}
            onChange={(value) => onInputChange('amount', Number(value) || null)}
            prefix="$"
            type="number"
            currency="USD"
            required
          />

          <InputField
            label="Interest Rate"
            value={inputs.interestRate ?? ''}
            onChange={(value) => onInputChange('interestRate', Number(value) || null)}
            suffix="%"
            type="number"
            step="0.1"
            required
          />

          <InputField
            label="Loan Term"
            value={inputs.termYears ?? ''}
            onChange={(value) => onInputChange('termYears', Number(value) || null)}
            suffix="years"
            type="number"
            required
          />

          <MonthYearPicker
            value={inputs.startDate}
            onChange={(date) => onInputChange('startDate', date)}
          />
        </div>

        <div className="flex justify-center">
          <CosmicToggle
            checked={showUnburden}
            onChange={onUnburdenToggle}
            label="Enable UnBurden Features"
          />
        </div>

        {showUnburden && (
          <UnburdenFeatures
            extraEMIs={inputs.extraEMIs}
            annualIncrease={inputs.annualEMIIncrease}
            lumpSum={inputs.lumpSumAmount}
            lumpSumFrequency={inputs.lumpSumFrequency}
            onExtraEMIsChange={(value) => onInputChange('extraEMIs', value)}
            onAnnualIncreaseChange={(value) => onInputChange('annualEMIIncrease', value)}
            onLumpSumChange={(value) => onInputChange('lumpSumAmount', value)}
            onLumpSumFrequencyChange={(value) => onInputChange('lumpSumFrequency', value)}
          />
        )}

        <div className="flex gap-4">
          <button
            onClick={onCalculate}
            disabled={!isFormValid}
            className={`flex-1 rounded-lg px-6 py-3 font-medium shadow-lg transition-colors ${
              isFormValid
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-700 hover:to-purple-700 hover:shadow-indigo-500/25'
                : 'bg-neutral-800/50 text-neutral-400 cursor-not-allowed'
            }`}
          >
            Calculate Loan
          </button>

          <button
            onClick={onReset}
            className="px-6 py-3 rounded-lg font-medium bg-neutral-800/30 text-neutral-400 hover:bg-neutral-800/50 hover:text-neutral-300 transition-colors flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};