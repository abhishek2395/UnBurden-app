import React from 'react';
import './CosmicToggle.css';

interface CosmicToggleProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
}

export const CosmicToggle: React.FC<CosmicToggleProps> = ({
  checked,
  onChange,
  label
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.checked);
  };

  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div className="cosmic-toggle">
        <input
          type="checkbox"
          className="toggle"
          checked={checked}
          onChange={handleChange}
        />
        <div className="slider">
          <div className="cosmos" />
          <div className="toggle-orb">
            <div className="inner-orb">
              <div className="ring" />
            </div>
          </div>
          <div className="energy-line" />
          <div className="energy-line" />
          <div className="energy-line" />
          <div className="particles">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="particle" style={{ '--angle': `${i * 60}deg` } as any} />
            ))}
          </div>
        </div>
      </div>
      {label && (
        <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
          {label}
        </span>
      )}
    </label>
  );
};