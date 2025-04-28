import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TokenDistributionChart } from "@/components/ui/token-distribution-chart";
import BlackHoleInfo from "@/components/BlackHoleInfo";
import PublicSaleInfo from "@/components/PublicSaleInfo";
import "@/styles/components/black-hole-counter.css";

const TokenDistribution = () => {
  const distributionData = [
    {
      name: 'Public Sale',
      value: 30,
      color: '#FFD700',
      tokens: '300,000,000',
      description: 'Tokens disponíveis para venda pública, garantindo ampla distribuição e acesso à comunidade.'
    },
    {
      name: 'Team',
      value: 15,
      color: '#FFD700',
      tokens: '150,000,000',
      description: 'Alocação para a equipe de desenvolvimento e gestão, com período de vesting.'
    },
    {
      name: 'Marketing',
      value: 15,
      color: '#FFD700',
      tokens: '150,000,000',
      description: 'Recursos para marketing, parcerias estratégicas e expansão do ecossistema.'
    },
    {
      name: 'Development',
      value: 20,
      color: '#FFD700',
      tokens: '200,000,000',
      description: 'Fundos dedicados ao desenvolvimento contínuo da plataforma e novas funcionalidades.'
    },
    {
      name: 'Liquidity',
      value: 10,
      color: '#FFD700',
      tokens: '100,000,000',
      description: 'Reserva para garantir liquidez nas DEXs e estabilidade do token.'
    },
    {
      name: 'Rewards & Airdrops',
      value: 10,
      color: '#FFD700',
      tokens: '100,000,000',
      description: 'Programa de recompensas para holders e distribuição via airdrops comunitários.'
    }
  ];

  return (
    <section id="token-distribution" className="py-16 bg-gradient-to-br from-bitconned-dark-blue to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Token Distribution
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-6">
            <Card className="bg-[#0a0b0d] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10 h-[400px] relative group">
              <CardHeader>
                <CardTitle className="text-center text-white">$FVCK Distribution</CardTitle>
              </CardHeader>
              <CardContent className="h-[calc(100%-5rem)]">
                <TokenDistributionChart data={distributionData} />
              </CardContent>
            </Card>
            
            <PublicSaleInfo />
            <BlackHoleInfo />
          </div>
          
          <Card className="bg-[#0a0b0d] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Token Allocation Breakdown
              </h3>
              <div className="space-y-3">
                {distributionData.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="flex items-center space-x-3">
                      <div 
                        className="w-4 h-4 rounded-full" 
                        style={{ 
                          backgroundColor: '#FFD700',
                          boxShadow: '0 0 10px #FFD700'
                        }}
                      />
                      <div>
                        <span className="text-white font-medium block">{item.name}</span>
                        <span className="text-white/60 text-sm">{item.tokens} tokens</span>
                      </div>
                    </div>
                    <span className="text-[#FFD700] font-bold text-lg">{item.value}%</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 border border-white/10 rounded-lg bg-[#0a0b0d]/50">
                <h4 className="font-bold text-white mb-2">Total Supply</h4>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src="/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png" alt="$FVCK" className="h-6 w-6" />
                    <span className="text-white font-bold">$FVCK Token</span>
                  </div>
                  <span className="text-[#FFD700] font-bold">1,000,000,000</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TokenDistribution;
