import React from 'react';

interface EnhancedSliderProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  step: number;
  suffix?: string;
}

export const EnhancedSlider: React.FC<EnhancedSliderProps> = ({
  label,
  value,
  onChange,
  min,
  max,
  step,
  suffix,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium text-neutral-300">{label}</label>
        <span className="text-sm font-medium text-indigo-400">
          {value}{suffix && ` ${suffix}`}
        </span>
      </div>
      
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-2 bg-neutral-800/50 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(99 102 241) 0%, rgb(147 51 234) ${percentage}%, rgba(38, 38, 38, 0.5) ${percentage}%)`
          }}
        />
        
        <div className="flex justify-between text-xs text-neutral-500 mt-1">
          <span>{min}{suffix}</span>
          <span>{max}{suffix}</span>
        </div>
      </div>
    </div>
  );
};