import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import '@/styles/components/token-distribution-chart.css';

interface TokenDistributionData {
  name: string;
  value: number;
  color: string;
  tokens: string;
  description: string;
}

interface TokenDistributionChartProps {
  data: TokenDistributionData[];
}

export const TokenDistributionChart: React.FC<TokenDistributionChartProps> = ({ data }) => {
  return (
    <div className="chart-wrapper">
      <div className="chart-container">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={85}
              outerRadius={120}
              paddingAngle={5}
              dataKey="value"
              startAngle={90}
              endAngle={450}
              stroke="none"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill="#FFD700"
                  className="neon-segment"
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="center-circle">
          <div className="center-icon">
            <img
              src="/lovable-uploads/bitconned-icon-black.png"
              alt="Bitconned"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}; 