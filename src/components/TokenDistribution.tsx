
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const TokenDistribution = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const distributionData = [
    { name: 'Public Sale', value: 30, color: '#00FF8F' },
    { name: 'Team', value: 15, color: '#0066FF' },
    { name: 'Marketing', value: 15, color: '#FF00C7' },
    { name: 'Development', value: 20, color: '#00FFFF' },
    { name: 'Liquidity', value: 10, color: '#FFCC00' },
    { name: 'Rewards & Airdrops', value: 10, color: '#9966FF' }
  ];
  
  const onPieEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  return (
    <section id="token-distribution" className="py-16 bg-gradient-to-br from-bitconned-dark-blue to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Token Distribution
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="glassmorphism border-white/10 h-[400px]">
            <CardHeader>
              <CardTitle className="text-center text-white">$FVCK Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    activeIndex={activeIndex}
                    data={distributionData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    animationBegin={0}
                    animationDuration={1500}
                    isAnimationActive={true}
                  >
                    {distributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => [`${value}%`, 'Allocation']}
                    contentStyle={{ backgroundColor: '#0f1923', borderColor: '#00FF8F' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <div>
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">
                  Token Allocation Breakdown
                </h3>
                <div className="space-y-3">
                  {distributionData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-white">{item.name}</span>
                      </div>
                      <span className="text-bitconned-neon font-bold">{item.value}%</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 border border-white/10 rounded-lg bg-white/5">
                  <h4 className="font-bold text-white mb-2">Total Supply</h4>
                  <div className="flex items-center space-x-2">
                    <img src="/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png" alt="$FVCK" className="h-6 w-6" />
                    <span className="text-white font-bold">1,000,000,000 $FVCK</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TokenDistribution;
