import { Card } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const TokensSection = () => {
  const tokens = [
    {
      name: "$FVCK",
      network: "BSC (BEP-20)",
      logo: "💰",
      description: "Token principal utilizado para governança e denúncias na BSC.",
      supply: "21,000,000",
      utility: ["Denúncias", "Governança", "Staking", "Liquidez"],
    },
    {
      name: "FVCKBEEB",
      network: "Solana (SPL)",
      logo: "🔶",
      description: "Token de denúncia nativo da rede Solana, com taxas reduzidas.",
      supply: "21,000,000",
      utility: ["Denúncias em Solana", "Arbitragem", "Cross-chain"],
    },
  ];

  const fees = [
    { type: "Denúncia Básica", fee: "100 $FVCK", icon: "🚨" },
    { type: "Denúncia Prioritária", fee: "500 $FVCK", icon: "⚡" },
    { type: "Verificação Avançada", fee: "1,000 $FVCK", icon: "🔍" },
    { type: "Arbitragem Cross-chain", fee: "250 $FVCK + 250 FVCKBEEB", icon: "⚖️" },
    { type: "Proteção Comunitária", fee: "1,500 $FVCK", icon: "🛡️" },
  ];

  return (
    <section id="tokens" className="py-20 bg-gradient-to-b from-black to-bitconned-dark-blue">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
          Tokens e Utilidade
        </h2>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          Nossa economia tokenizada é projetada para incentivar denúncias legítimas e
          proteger a comunidade de fraudes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 max-w-5xl mx-auto">
          {tokens.map((token, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-r from-[#0a0b0d] to-[#131517] border border-white/5 rounded-lg overflow-hidden transition-all hover:border-white/10 hover:scale-105"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="text-4xl mr-4">{token.logo}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{token.name}</h3>
                    <p className="text-bitconned-neon">{token.network}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{token.description}</p>
                
                <div className="mb-4">
                  <span className="text-gray-400">Supply Total:</span>
                  <span className="text-white ml-2 font-bold">{token.supply}</span>
                </div>
                
                <div>
                  <span className="text-gray-400 block mb-2">Utilidades:</span>
                  <div className="flex flex-wrap gap-2">
                    {token.utility.map((util, i) => (
                      <span 
                        key={i} 
                        className="bg-bitconned-neon/20 text-bitconned-neon px-3 py-1 rounded-full text-sm"
                      >
                        {util}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-bitconned-dark-blue glassmorphism rounded-xl p-6 md:p-8 max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Tabela de Taxas por Denúncia
          </h3>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-white/10">
                  <TableHead className="text-left text-white">Tipo</TableHead>
                  <TableHead className="text-right text-white">Taxa</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {fees.map((fee, index) => (
                  <TableRow 
                    key={index}
                    className="border-b border-white/10 hover:bg-white/5"
                  >
                    <TableCell className="text-left text-gray-300">
                      <div className="flex items-center">
                        <span className="text-xl mr-3">{fee.icon}</span>
                        {fee.type}
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-bold text-bitconned-neon">
                      {fee.fee}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          
          <p className="text-gray-400 text-sm mt-6">
            * Todas as taxas são sujeitas a alterações via governança comunitária.
            70% das taxas são distribuídas aos denunciantes, 20% para o DAO Treasury e 10% queimadas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TokensSection;
