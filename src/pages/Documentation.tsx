
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown } from "lucide-react";

const Documentation = () => {
  const [expandedItems, setExpandedItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (expandedItems.includes(id)) {
      setExpandedItems(expandedItems.filter(item => item !== id));
    } else {
      setExpandedItems([...expandedItems, id]);
    }
  };

  const isExpanded = (id: string) => expandedItems.includes(id);

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
          Documentation
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mb-12">
          Comprehensive guides, references, and resources for the BitConned ecosystem.
        </p>
        
        <Tabs defaultValue="guides" className="w-full max-w-5xl">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger 
              value="guides"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
            >
              Guides
            </TabsTrigger>
            <TabsTrigger 
              value="api"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
            >
              API Reference
            </TabsTrigger>
            <TabsTrigger 
              value="whitepaper"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
            >
              Whitepaper
            </TabsTrigger>
            <TabsTrigger 
              value="tutorials"
              className="data-[state=active]:bg-bitconned-neon data-[state=active]:text-bitconned-dark-blue"
            >
              Tutorials
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="guides" className="space-y-6">
            {/* Getting Started Guide */}
            <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg overflow-hidden">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem('getting-started')}
              >
                <h3 className="text-xl font-bold">Getting Started with BitConned</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded('getting-started') ? 'rotate-180' : ''}`} />
              </div>
              
              {isExpanded('getting-started') && (
                <div className="p-6 border-t border-white/10">
                  <div className="prose prose-invert max-w-none">
                    <h4>Introduction</h4>
                    <p>BitConned is a cross-chain platform connecting BSC and Solana networks to promote transparency and security in the crypto space.</p>
                    
                    <h4 className="mt-4">Key Components</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      <li>$FVCK token (BSC)</li>
                      <li>FVCKBEEB token (Solana)</li>
                      <li>Wormhole bridge integration</li>
                      <li>EquilibriumBot</li>
                    </ul>
                    
                    <h4 className="mt-4">First Steps</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      <li>Create a wallet compatible with both BSC and Solana</li>
                      <li>Acquire $FVCK tokens from supported exchanges</li>
                      <li>Connect to the BitConned dApp</li>
                      <li>Explore available features</li>
                    </ol>
                  </div>
                </div>
              )}
            </div>
            
            {/* Token Guide */}
            <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg overflow-hidden">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem('tokens-guide')}
              >
                <h3 className="text-xl font-bold">Understanding BitConned Tokens</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded('tokens-guide') ? 'rotate-180' : ''}`} />
              </div>
              
              {isExpanded('tokens-guide') && (
                <div className="p-6 border-t border-white/10">
                  <div className="prose prose-invert max-w-none">
                    <h4>$FVCK Token (BEP-20)</h4>
                    <p>The primary governance token on BSC that powers community decision making and fraud reporting.</p>
                    
                    <h4 className="mt-4">FVCKBEEB (SPL Token)</h4>
                    <p>The Solana equivalent token used for interactions within the Solana ecosystem.</p>
                    
                    <h4 className="mt-4">TokenomicParameters</h4>
                    <table className="min-w-full">
                      <thead>
                        <tr>
                          <th className="text-left border-b border-white/10 pb-2">Parameter</th>
                          <th className="text-left border-b border-white/10 pb-2">$FVCK (BSC)</th>
                          <th className="text-left border-b border-white/10 pb-2">FVCKBEEB (SOL)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-2">Total Supply</td>
                          <td>10,000,000</td>
                          <td>10,000,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Initial Circulating</td>
                          <td>2,500,000</td>
                          <td>2,500,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Community Allocation</td>
                          <td>40%</td>
                          <td>40%</td>
                        </tr>
                        <tr>
                          <td className="py-2">Treasury</td>
                          <td>30%</td>
                          <td>30%</td>
                        </tr>
                        <tr>
                          <td className="py-2">Team</td>
                          <td>20%</td>
                          <td>20%</td>
                        </tr>
                        <tr>
                          <td className="py-2">Liquidity</td>
                          <td>10%</td>
                          <td>10%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
            
            {/* More Documentation Sections */}
            <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg overflow-hidden">
              <div 
                className="p-4 flex justify-between items-center cursor-pointer"
                onClick={() => toggleItem('bridge-guide')}
              >
                <h3 className="text-xl font-bold">Using the Cross-Chain Bridge</h3>
                <ChevronDown className={`h-5 w-5 transition-transform ${isExpanded('bridge-guide') ? 'rotate-180' : ''}`} />
              </div>
              
              {isExpanded('bridge-guide') && (
                <div className="p-6 border-t border-white/10">
                  <div className="prose prose-invert max-w-none">
                    <p>Detailed guide on how to use the BitConned cross-chain bridge between BSC and Solana.</p>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="api">
            <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">API Reference Documentation</h3>
              <p className="text-gray-300 mb-6">
                Complete API reference for developers building on the BitConned ecosystem.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-bitconned-neon mb-2">Base URLs</h4>
                <div className="bg-black/50 p-3 rounded-md font-mono text-sm">
                  <div>Mainnet: https://api.bitconned.com/v1</div>
                  <div className="mt-1">Testnet: https://testnet-api.bitconned.com/v1</div>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-bitconned-neon mb-2">Authentication</h4>
                <p className="text-gray-300 mb-2">
                  All API calls require an API key that can be obtained from the developer dashboard.
                </p>
                <div className="bg-black/50 p-3 rounded-md font-mono text-sm overflow-x-auto">
                  <pre>{`
// Example request with authentication header
fetch('https://api.bitconned.com/v1/tokens', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => console.log(data));
                  `}</pre>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-bitconned-neon mb-2">Available Endpoints</h4>
                <ul className="space-y-2 text-gray-300">
                  <li>GET /tokens - List all tokens</li>
                  <li>GET /tokens/{"{id}"} - Get specific token details</li>
                  <li>GET /bridge/transactions - List bridge transactions</li>
                  <li>POST /bridge/transfer - Initiate a bridge transfer</li>
                  <li>GET /prices - Get current token prices</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="whitepaper">
            <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">BitConned Whitepaper</h3>
              <p className="text-gray-300 mb-6">
                The official BitConned whitepaper explaining the project's vision, technology, and roadmap.
              </p>
              
              <div className="flex justify-center mb-8">
                <div className="bg-black/50 p-8 rounded-lg w-64 h-80 flex flex-col items-center justify-center border border-white/20">
                  <div className="text-5xl mb-4">📄</div>
                  <div className="text-lg font-bold mb-2">BitConned Whitepaper v1.0</div>
                  <div className="text-sm text-gray-400 mb-4">May 2024 • PDF • 3.2 MB</div>
                  <button className="bg-bitconned-neon text-bitconned-dark-blue px-4 py-2 rounded-md font-medium hover:bg-bitconned-neon/90">
                    Download
                  </button>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-medium text-bitconned-neon">Key Topics Covered</h4>
                <ul className="space-y-2 text-gray-300 list-disc pl-5">
                  <li>Vision and Mission</li>
                  <li>Technical Architecture</li>
                  <li>Token Economics</li>
                  <li>Governance Model</li>
                  <li>Security Measures</li>
                  <li>Team and Advisors</li>
                  <li>Roadmap and Future Development</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Getting Started with BSC</h3>
                <p className="text-gray-300 mb-4">
                  Learn how to set up your wallet and interact with BitConned on Binance Smart Chain.
                </p>
                <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center mb-4">
                  <div className="text-4xl">🎬</div>
                </div>
                <button className="text-bitconned-neon hover:underline">Watch Tutorial</button>
              </div>
              
              <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Solana Integration</h3>
                <p className="text-gray-300 mb-4">
                  Step-by-step guide to using BitConned on the Solana network.
                </p>
                <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center mb-4">
                  <div className="text-4xl">🎬</div>
                </div>
                <button className="text-bitconned-neon hover:underline">Watch Tutorial</button>
              </div>
              
              <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">Cross-Chain Transfers</h3>
                <p className="text-gray-300 mb-4">
                  How to transfer tokens between BSC and Solana networks securely.
                </p>
                <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center mb-4">
                  <div className="text-4xl">🎬</div>
                </div>
                <button className="text-bitconned-neon hover:underline">Watch Tutorial</button>
              </div>
              
              <div className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-3">EquilibriumBot Setup</h3>
                <p className="text-gray-300 mb-4">
                  Configure and deploy your own instance of the EquilibriumBot.
                </p>
                <div className="aspect-video bg-gray-800 rounded-md flex items-center justify-center mb-4">
                  <div className="text-4xl">🎬</div>
                </div>
                <button className="text-bitconned-neon hover:underline">Watch Tutorial</button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <Footer />
    </div>
  );
};

export default Documentation;
