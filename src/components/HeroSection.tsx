import { Button } from "@/components/ui/button";
import NetworkVisualization from "./NetworkVisualization";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import NeonParticles from "./NeonParticles";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-bitconned-dark-blue to-black pt-24 overflow-hidden">
      <NetworkVisualization className="absolute inset-0" />
      <NeonParticles />
      
      <div className="container mx-auto px-4 py-20 hero-content">
        <div className="flex flex-col items-center justify-center min-h-[70vh] max-w-3xl mx-auto text-center">
          <div className="flex items-center space-x-4 mb-6">
            <img src="/lovable-uploads/7b177e96-4939-47b4-9ef1-c0bfaf206071.png" alt="BSC" className="h-8" />
            <span className="text-bitconned-neon font-bold">BitConned</span>
            <img src="/lovable-uploads/5e2a65e2-5fbb-476a-b37f-386a15d6499c.png" alt="Solana" className="h-8" />
            <span className="text-bitconned-neon font-bold">FVCKBEEB</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gradient leading-tight">
            Decentralized Scam Exposure & Reporting System
          </h1>
          
          <p className="text-lg md:text-xl mb-10 text-gray-200">
            Connecting BSC and Solana to expose fraud and protect the crypto community.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link to="/documentation">
              <Button className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90 text-lg px-8 py-6">
                Documentation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button className="bg-bitconned-neon/20 text-bitconned-neon hover:bg-bitconned-neon/30 border border-bitconned-neon text-lg px-8 py-6">
              Launch App <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default HeroSection;