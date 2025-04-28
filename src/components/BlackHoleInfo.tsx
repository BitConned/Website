import { useEffect, useState } from 'react';
import { HelpCircle } from 'lucide-react';
import '@/styles/components/black-hole.css';

const BlackHoleInfo = () => {
  const [count, setCount] = useState(0);
  const targetCount = 100000000; // 100 million tokens in black hole

  useEffect(() => {
    const duration = 2000; // 2 seconds animation
    const steps = 60;
    const increment = targetCount / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      if (currentStep < steps) {
        setCount(Math.round(increment * currentStep));
        currentStep++;
      } else {
        setCount(targetCount);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="black-hole-container">
      <div className="black-hole-content">
        <div className="black-hole-title">
          Black Hole
          <HelpCircle className="info-icon h-5 w-5" />
          <div className="tooltip">
            These tokens are permanently removed from circulation, locked in a "black hole" address. 
            This mechanism helps maintain token scarcity and value over time.
          </div>
        </div>
        <div className="token-count">
          {count.toLocaleString()} $FVCK
        </div>
      </div>
    </div>
  );
};

export default BlackHoleInfo; 