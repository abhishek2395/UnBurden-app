import React from 'react';

interface SliderProps {
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
  value,
  min,
  max,
  step,
  onChange,
}) => {
  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="relative pt-1">
      <div className="relative">
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full h-1.5 bg-neutral-800/50 rounded-lg appearance-none cursor-pointer"
          style={{
            backgroundImage: `linear-gradient(to right, rgb(99 102 241) 0%, rgb(147 51 234) ${percentage}%, rgba(38, 38, 38, 0.5) ${percentage}%)`
          }}
        />
        <div 
          className="absolute -top-4 left-0 text-xs text-neutral-500 transform -translate-x-1/2"
          style={{ left: `${percentage}%` }}
        >
          {value.toLocaleString()}
        </div>
      </div>
      <div className="flex justify-between text-xs text-neutral-500 mt-2">
        <span>{min.toLocaleString()}</span>
        <span>{max.toLocaleString()}</span>
      </div>
    </div>
  );
};