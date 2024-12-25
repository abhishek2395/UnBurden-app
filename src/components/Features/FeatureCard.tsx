import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-6 bg-neutral-900/30 backdrop-blur-md rounded-xl border border-neutral-800/50 transition-all duration-300 hover:bg-neutral-900/40 hover:border-indigo-500/20 hover:translate-y-[-2px]">
      <div className="w-12 h-12 mb-4 rounded-lg bg-indigo-950/50 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 text-indigo-400" />
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
};