
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const ContractFees = () => {
  const networkComparison = [
    { subject: 'Transaction Fee', BSC: 5, Solana: 0.25 },
    { subject: 'Speed (TPS)', BSC: 60, Solana: 100 },
    { subject: 'Cost Efficiency', BSC: 70, Solana: 95 },
    { subject: 'Integration Ease', BSC: 80, Solana: 75 },
    { subject: 'Ecosystem Size', BSC: 85, Solana: 80 },
  ];

  return (
    <section id="contract-fees" className="py-16 bg-gradient-to-br from-black to-bitconned-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Network Fees & Comparison
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <Card className="glassmorphism border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-white">Contract Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-bitconned-blue/30 to-black p-6 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/lovable-uploads/d5a976bd-06c4-4a90-af06-22e013b0088c.png" alt="BSC" className="h-8 w-8 rounded-full" />
                    <h3 className="text-xl font-bold text-white">BSC Network</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transaction Fee:</span>
                      <span className="text-bitconned-neon font-bold">5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Supply:</span>
                      <span className="text-white font-bold">500,000,000 $FVCK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Simulated Market Cap:</span>
                      <span className="text-white font-bold">$5,000,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">24h Volume:</span>
                      <span className="text-white font-bold">$350,000</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-bitconned-blue/30 to-black p-6 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/lovable-uploads/0da7e1e1-7b0c-4f11-8010-d24a16ab32cd.png" alt="Solana" className="h-8 w-8 rounded-full" />
                    <h3 className="text-xl font-bold text-white">Solana Network</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transaction Fee:</span>
                      <span className="text-bitconned-neon font-bold">0.25%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Supply:</span>
                      <span className="text-white font-bold">500,000,000 $FVCK</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Simulated Market Cap:</span>
                      <span className="text-white font-bold">$5,000,000</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">24h Volume:</span>
                      <span className="text-white font-bold">$420,000</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="glassmorphism border-white/10 h-[400px]">
            <CardHeader>
              <CardTitle className="text-center text-white">Network Comparison</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart outerRadius="70%" data={networkComparison}>
                  <PolarGrid stroke="#ffffff30" />
                  <PolarAngleAxis dataKey="subject" stroke="#ffffff" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#ffffff60" />
                  <Radar
                    name="BSC"
                    dataKey="BSC"
                    stroke="#F0B90B"
                    fill="#F0B90B"
                    fillOpacity={0.4}
                  />
                  <Radar
                    name="Solana"
                    dataKey="Solana"
                    stroke="#00FFE3"
                    fill="#00FFE3"
                    fillOpacity={0.4}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContractFees;
