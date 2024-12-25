import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, DollarSign, Clock, ArrowRight } from 'lucide-react';
import './FlipCard.css';

interface CelebrationProps {
  amount: number;
  monthsSaved: number;
}

export const Celebration: React.FC<CelebrationProps> = ({ amount, monthsSaved }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    if (!hasTriggered) {
      // Trigger confetti
      const duration = 2000;
      const end = Date.now() + duration;

      const frame = () => {
        confetti({
          particleCount: 4,
          angle: 60,
          spread: 55,
          origin: { x: 0, y: 0.8 },
          colors: ['#6366f1', '#a855f7', '#ec4899', '#8b5cf6'],
          gravity: 1.2,
          scalar: 1.2,
          drift: -0.5,
        });
        
        confetti({
          particleCount: 4,
          angle: 120,
          spread: 55,
          origin: { x: 1, y: 0.8 },
          colors: ['#6366f1', '#a855f7', '#ec4899', '#8b5cf6'],
          gravity: 1.2,
          scalar: 1.2,
          drift: 0.5,
        });

        if (Date.now() < end) {
          requestAnimationFrame(frame);
        }
      };

      frame();
      setHasTriggered(true);

      // Auto flip after a delay
      setTimeout(() => setIsFlipped(true), 1500);
    }
  }, [hasTriggered]);

  return (
    <div 
      className={`flip-card ${isFlipped ? 'flipped' : ''}`}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div className="flip-card-inner">
        {/* Front of card */}
        <div className="flip-card-front">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 border border-indigo-500/20">
            <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
            
            <div className="relative flex items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="flex-shrink-0">
                  <div className="relative floating">
                    <Sparkles className="w-12 h-12 text-indigo-400" />
                    <div className="absolute inset-0 bg-indigo-400/20 blur-xl rounded-full transform scale-150 glow" />
                  </div>
                </div>
                
                <div>
                  <h4 className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text mb-2">
                    You Unburdened Yourself! 🎉
                  </h4>
                  <p className="text-lg text-neutral-300">
                    Click to see your savings
                  </p>
                </div>
              </div>
              
              <ArrowRight className="w-6 h-6 text-indigo-400 animate-bounce" />
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="flip-card-back">
          <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 p-8 border border-indigo-500/20">
            <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-sm" />
            
            <div className="relative flex items-center justify-between">
              <div className="flex items-center gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-indigo-500/10">
                      <DollarSign className="w-6 h-6 text-indigo-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">Total Savings</p>
                      <p className="text-xl font-bold text-white">
                        ${amount.toLocaleString(undefined, {
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2
                        })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-purple-500/10">
                      <Clock className="w-6 h-6 text-purple-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-400">Time Saved</p>
                      <p className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 text-transparent bg-clip-text">
                        {monthsSaved} months earlier
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 text-sm text-neutral-400">
                <ArrowRight className="w-4 h-4 rotate-180" />
                Click to flip back
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};