
import { Card } from "@/components/ui/card";
import { Shield, Lock, Fingerprint, RefreshCw } from "lucide-react";

const SecuritySection = () => {
  const securityFeatures = [
    {
      name: "Snapshot",
      description: "Secure governance with snapshots for community decisions",
      icon: <Shield className="h-8 w-8 text-bitconned-neon" />,
    },
    {
      name: "Safe.Global (Gnosis)",
      description: "Multi-sig for secure funds and treasury management",
      icon: <Lock className="h-8 w-8 text-bitconned-neon" />,
    },
    {
      name: "SpaceID",
      description: "Decentralized identity for user verification",
      icon: <Fingerprint className="h-8 w-8 text-bitconned-neon" />,
    },
    {
      name: "WormHole",
      description: "Secure bridge for cross-chain transfers",
      icon: <RefreshCw className="h-8 w-8 text-bitconned-neon" />,
    },
  ];

  return (
    <section id="security" className="py-20 bg-gradient-to-b from-black to-bitconned-dark-blue bg-[url('/security-grid-bg.png')] bg-cover bg-center">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
          Security and Architecture
        </h2>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          BitConned implements the highest security standards available in the blockchain ecosystem.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {securityFeatures.map((feature, index) => (
            <Card key={index} className="glassmorphism overflow-hidden transition-all duration-300 hover:scale-105 bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10">
              <div className="p-6">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center glassmorphism rounded-xl">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">
                  {feature.name}
                </h3>
                <p className="text-gray-300 text-center">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="glassmorphism p-8 rounded-xl max-w-4xl mx-auto bg-gradient-to-br from-bitconned-blue/30 to-black/80 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Security Architecture
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-bitconned-neon font-bold mb-3">Protection Layers</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Smart Contract Firewall
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Multi-sig for all critical operations
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Escalating lock times
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Automated failsafe
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-bitconned-neon font-bold mb-3">Audits & Compliance</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Complete CertiK audit
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Active bug bounty program
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  On-chain verification
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-bitconned-neon mr-2"></div>
                  Community alert system
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-4 border border-bitconned-neon/30 rounded-lg bg-bitconned-dark-blue/50">
            <p className="text-bitconned-neon text-sm">
              BitConned operates under a "layered security" philosophy and total transparency. All
              contracts are open-source and verifiable on their respective blockchains.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;
