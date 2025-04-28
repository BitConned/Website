import React, { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface BlackHoleCounterProps {
  amount: string;
  tooltipText: string;
}

export const BlackHoleCounter: React.FC<BlackHoleCounterProps> = ({ amount, tooltipText }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(amount.replace(/,/g, ''));

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60; // 60 steps for smooth animation
    const increment = targetNumber / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(Math.round(increment * currentStep));
        currentStep++;
      } else {
        setCount(targetNumber);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [targetNumber]);

  return (
    <div className="relative w-full h-[200px] overflow-hidden rounded-lg bg-black">
      {/* Animated universe background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black animate-pulse">
        <div className="stars"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-6">
        <div className="flex items-center gap-2 mb-4">
          <h3 className="text-xl font-bold">Black Hole Tokens</h3>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <HelpCircle className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs text-sm">{tooltipText}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="text-4xl md:text-5xl font-bold text-yellow-400 font-mono">
          {count.toLocaleString()}
        </div>
        <p className="text-gray-400 mt-2">Tokens permanently removed from circulation</p>
      </div>
    </div>
  );
}; 