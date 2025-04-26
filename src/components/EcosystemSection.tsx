
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EcosystemSection = () => {
  const [activeTab, setActiveTab] = useState<'bsc-to-solana' | 'solana-to-bsc'>('bsc-to-solana');

  const ecosystemComponents = [
    {
      name: "$FVCK",
      description: "Main token on BSC used for reporting and governance.",
      icon: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      logo: "/lovable-uploads/d5a976bd-06c4-4a90-af06-22e013b0088c.png",
      network: "BSC",
      link: "/products/fvck-token",
    },
    {
      name: "FVCKBEEB",
      description: "Solana token for reporting on the Solana network.",
      icon: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      logo: "/lovable-uploads/0da7e1e1-7b0c-4f11-8010-d24a16ab32cd.png",
      network: "Solana",
      link: "/products/fvckbeeb-token",
    },
    {
      name: "BitConned(WH)",
      description: "Wrapped token for liquidity and interoperability.",
      icon: "/lovable-uploads/23e7e599-43da-4968-a0d9-32d947ae2ca2.png",
      logo: "/lovable-uploads/23e7e599-43da-4968-a0d9-32d947ae2ca2.png",
      network: "Cross-chain",
      link: "/products/wrapped-token",
    },
    {
      name: "Wormhole Bridge",
      description: "Bridge for secure transfer between blockchains.",
      icon: "/lovable-uploads/23e7e599-43da-4968-a0d9-32d947ae2ca2.png",
      logo: "/lovable-uploads/23e7e599-43da-4968-a0d9-32d947ae2ca2.png",
      network: "Cross-chain",
      link: "/products/wormhole",
    },
    {
      name: "EquilibriumBot",
      description: "Bot for price equalization between DEXs.",
      icon: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      logo: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      network: "Cross-chain",
      link: "/products/equilibrium-bot",
    },
    {
      name: "Swap Contract",
      description: "Smart contract for exchanges with reduced fees.",
      icon: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      logo: "/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png",
      network: "Cross-chain",
      link: "/products/swap-contract",
    },
  ];

  return (
    <section id="ecosystem" className="py-20 bg-gradient-to-b from-bitconned-dark-blue/80 to-black relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
          The BitConned Ecosystem
        </h2>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          A complete and interoperable infrastructure between BSC and Solana, designed for 
          maximum security and transparency.
        </p>

        <Tabs defaultValue="bsc-to-solana" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 mb-8">
            <TabsTrigger 
              value="bsc-to-solana"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
              onClick={() => setActiveTab('bsc-to-solana')}
            >
              <img src="/lovable-uploads/d5a976bd-06c4-4a90-af06-22e013b0088c.png" alt="BSC" className="h-6 w-6 mr-2" />
              BSC → Solana
            </TabsTrigger>
            <TabsTrigger 
              value="solana-to-bsc"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
              onClick={() => setActiveTab('solana-to-bsc')}
            >
              <img src="/lovable-uploads/0da7e1e1-7b0c-4f11-8010-d24a16ab32cd.png" alt="Solana" className="h-6 w-6 mr-2" />
              Solana → BSC
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="bsc-to-solana" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemComponents.map((component, index) => (
                <Card key={index} className="bg-gradient-to-br from-bitconned-neon/10 via-bitconned-blue/20 to-black overflow-hidden transition-all duration-300 hover:-translate-y-2 group border border-white/10">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={component.icon} alt={component.name} className="h-10 w-10 mr-3" />
                      <h3 className="text-xl font-bold text-white">{component.name}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <img src={component.logo} alt={component.network} className="h-6 w-6 mr-2" />
                      <span className="text-sm text-gray-300">{component.network}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{component.description}</p>
                    <Link to={component.link} className="flex items-center text-black font-medium bg-bitconned-neon px-3 py-1 rounded-md w-fit transition-colors hover:bg-bitconned-neon/80">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="h-1 w-0 group-hover:w-full bg-bitconned-neon mt-4 transition-all duration-500"></div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="solana-to-bsc" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ecosystemComponents.map((component, index) => (
                <Card key={index} className="bg-gradient-to-br from-bitconned-neon/10 via-bitconned-blue/20 to-black overflow-hidden transition-all duration-300 hover:-translate-y-2 group border border-white/10">
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img src={component.icon} alt={component.name} className="h-10 w-10 mr-3" />
                      <h3 className="text-xl font-bold text-white">{component.name}</h3>
                    </div>
                    <div className="flex items-center mb-4">
                      <img src={component.logo} alt={component.network} className="h-6 w-6 mr-2" />
                      <span className="text-sm text-gray-300">{component.network}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{component.description}</p>
                    <Link to={component.link} className="flex items-center text-black font-medium bg-bitconned-neon px-3 py-1 rounded-md w-fit transition-colors hover:bg-bitconned-neon/80">
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                    <div className="h-1 w-0 group-hover:w-full bg-bitconned-neon mt-4 transition-all duration-500"></div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 flex justify-center">
          <div className="flex items-center justify-center glassmorphism px-6 py-3 rounded-full">
            <span className="text-white text-sm">
              Real-time transfers with block confirmation: {activeTab === 'bsc-to-solana' ? '~3 seconds' : '~0.4 seconds'}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcosystemSection;
