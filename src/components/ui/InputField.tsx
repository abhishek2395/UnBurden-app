import React from 'react';

interface InputFieldProps {
  label: string;
  value: number | string;
  onChange: (value: string) => void;
  type?: string;
  prefix?: string;
  suffix?: string;
  min?: string;
  max?: string;
  step?: string;
  currency?: string;
  required?: boolean;
  isUnburden?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  prefix,
  suffix,
  min,
  max,
  step,
  currency,
  required,
  isUnburden,
}) => {
  return (
    <div>
      <label className="block text-sm font-medium text-neutral-300 mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
        {isUnburden && (
          <span className="ml-2 text-xs bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text font-semibold">
            UnBurden
          </span>
        )}
      </label>
      <div className="relative">
        {prefix && (
          <span className="absolute left-3 inset-y-0 my-auto h-6 flex items-center text-neutral-400">
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          min={min}
          max={max}
          step={step}
          required={required}
          className={`w-full appearance-none bg-neutral-800/30 outline-none border border-neutral-700/50 focus:border-indigo-600 shadow-sm rounded-lg py-2.5 text-white ${
            prefix ? 'pl-8' : 'pl-4'
          } ${currency ? 'pr-20' : suffix ? 'pr-12' : 'pr-4'}`}
        />
        {currency ? (
          <div className="absolute inset-y-0 right-3 flex items-center">
            <select className="text-sm bg-transparent outline-none px-1 rounded-lg h-full text-neutral-400 border-none focus:ring-0">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>INR</option>
            </select>
          </div>
        ) : suffix && (
          <span className="absolute right-3 inset-y-0 my-auto h-6 flex items-center text-neutral-400">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
};