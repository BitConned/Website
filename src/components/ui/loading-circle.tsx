import React from 'react';
import '@/styles/animations/loading-circle.css';

export const LoadingCircle: React.FC = () => {
  return (
    <div className="loading-container">
      <svg className="loading-circle" viewBox="0 0 100 100">
        <circle
          className="loading-circle-path"
          cx="50"
          cy="50"
          r="40"
          fill="none"
          strokeWidth="4"
          strokeDasharray="251.2"
          strokeDashoffset="251.2"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}; 