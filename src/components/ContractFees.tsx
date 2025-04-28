import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ContractFees = () => {
  const feeDistribution = [
    { name: 'Treasury', percentage: '40%', description: '40% of fees go to treasury' },
    { name: 'Marketing', percentage: '25%', description: '25% of fees for marketing initiatives' },
    { name: 'Liquidity', percentage: '20%', description: '20% of fees added to liquidity' },
    { name: 'USDT Staking', percentage: '15%', description: '15% of fees for USDT staking rewards' },
  ];

  return (
    <section id="contract-fees" className="py-16 bg-gradient-to-br from-black to-bitconned-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Network Fees & Distribution
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <Card className="bg-[#0a0b0d] border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-white">Contract Fees</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="bg-[#0a0b0d] p-6 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/images/bsc.svg" alt="BSC" className="h-8 w-8 rounded-full" />
                    <h3 className="text-xl font-bold text-white">BSC Network</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transaction Fee:</span>
                      <span className="text-[#FFD700] font-bold">5%</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm">Treasury</span>
                      <span className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm">Marketing</span>
                      <span className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm">Liquidity</span>
                      <span className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm">USDT Staking</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-[#0a0b0d] p-6 rounded-xl border border-white/10">
                  <div className="flex items-center space-x-3 mb-4">
                    <img src="/images/solana.svg" alt="Solana" className="h-8 w-8 rounded-full" />
                    <h3 className="text-xl font-bold text-white">Solana Network</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Transaction Fee:</span>
                      <span className="text-[#FFD700] font-bold">0.25%</span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm">Liquidity</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-[#0a0b0d] border-white/10">
            <CardHeader>
              <CardTitle className="text-center text-white">Fee Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {feeDistribution.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[#0a0b0d] border border-white/10 rounded-lg">
                    <div className="flex items-center gap-4">
                      <div className="w-3 h-3 rounded-full bg-[#FFD700]"></div>
                      <div>
                        <h4 className="text-white font-semibold">{item.name}</h4>
                        <p className="text-sm text-gray-400">{item.description}</p>
                      </div>
                    </div>
                    <span className="text-[#FFD700] font-bold text-xl">{item.percentage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContractFees;
