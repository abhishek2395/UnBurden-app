import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`fixed top-4 right-4 p-3 rounded-full transition-colors ${
        theme === 'indigo'
          ? 'bg-indigo-600/20 hover:bg-indigo-600/30'
          : 'bg-primary-500/20 hover:bg-primary-500/30'
      }`}
    >
      {theme === 'indigo' ? (
        <Sun className="w-5 h-5 text-indigo-400" />
      ) : (
        <Moon className="w-5 h-5 text-primary-400" />
      )}
    </button>
  );
};