
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Check, ExternalLink } from "lucide-react";

interface Product {
  id: string;
  name: string;
  description: string;
  longDescription: string;
  features: string[];
  icon: string;
  logo: string;
  network: string;
  technicalDetails: {
    title: string;
    content: string;
  }[];
  links: {
    label: string;
    url: string;
  }[];
}

const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  // Mock product data - in a real app, this would come from an API
  const products: Record<string, Product> = {
    'fvck-token': {
      id: 'fvck-token',
      name: 'BitConned ($FVCK)',
      description: 'Main governance and utility token on BSC',
      longDescription: 'The BitConned ($FVCK) token is the primary governance and utility token of the BitConned ecosystem, operating on the Binance Smart Chain. It enables users to participate in governance decisions, report fraudulent activities, and access premium features within the ecosystem.',
      features: [
        'Governance voting rights',
        '5% transaction fee (3% to development, 2% to holders)',
        'Deflationary mechanism',
        'Cross-chain compatibility via Wormhole',
        'Staking rewards',
        'Premium feature access'
      ],
      icon: '/bitconned-icon.png',
      logo: '/bsc-logo.png',
      network: 'BSC',
      technicalDetails: [
        {
          title: 'Contract Standard',
          content: 'BEP-20'
        },
        {
          title: 'Total Supply',
          content: '1,000,000,000 $FVCK'
        },
        {
          title: 'Transaction Fee',
          content: '5% (3% development, 2% holder redistribution)'
        },
        {
          title: 'Security Features',
          content: 'Anti-whale mechanics, timelock, multi-signature control'
        }
      ],
      links: [
        {
          label: 'View on BscScan',
          url: 'https://bscscan.com/'
        },
        {
          label: 'Token Documentation',
          url: '/documentation'
        },
        {
          label: 'Buy $FVCK',
          url: '/swap'
        }
      ]
    },
    'fvckbeeb-token': {
      id: 'fvckbeeb-token',
      name: 'FVCKBEEB ($FVCK)',
      description: 'Solana-based token for ecosystem participation',
      longDescription: 'FVCKBEEB ($FVCK) is the Solana version of the BitConned token, designed for high-speed, low-fee transactions within the Solana ecosystem. It maintains value parity with the BSC version through our EquilibriumBot and Wormhole bridge integration.',
      features: [
        'Ultra-low transaction fees (0.25%)',
        'Lightning-fast transfers',
        'Solana ecosystem integration',
        'Cross-chain compatibility',
        'Program governance participation',
        'SPL token standard compliance'
      ],
      icon: '/bitconned-icon.png',
      logo: '/solana-logo.png',
      network: 'Solana',
      technicalDetails: [
        {
          title: 'Contract Standard',
          content: 'SPL Token'
        },
        {
          title: 'Total Supply',
          content: '1,000,000,000 $FVCK'
        },
        {
          title: 'Transaction Fee',
          content: '0.25% (development and ecosystem growth)'
        },
        {
          title: 'Security Features',
          content: 'Program upgrade authority, multi-signature governance'
        }
      ],
      links: [
        {
          label: 'View on Solscan',
          url: 'https://solscan.io/'
        },
        {
          label: 'Token Documentation',
          url: '/documentation'
        },
        {
          label: 'Buy $FVCK on Solana',
          url: '/swap'
        }
      ]
    },
    'wrapped-token': {
      id: 'wrapped-token',
      name: 'BitConned(WH)',
      description: 'Wrapped token for cross-chain liquidity',
      longDescription: 'BitConned(WH) is the wrapped version of our token, designed to facilitate seamless transfers and maintain liquidity between the BSC and Solana blockchains. It uses Wormhole technology to ensure secure and reliable cross-chain transactions.',
      features: [
        '1:1 backed by native tokens',
        'Seamless cross-chain transfers',
        'Maintains value parity',
        'Instant liquidity access',
        'Fully redeemable',
        'Chain-agnostic utility'
      ],
      icon: '/wrapped-icon.png',
      logo: '/wormhole-logo.png',
      network: 'Cross-chain',
      technicalDetails: [
        {
          title: 'Wrapping Mechanism',
          content: 'Wormhole Protocol'
        },
        {
          title: 'Backing Ratio',
          content: '1:1 with native tokens'
        },
        {
          title: 'Supported Networks',
          content: 'BSC and Solana (expanding to others)'
        },
        {
          title: 'Security Features',
          content: 'Guardian validation, proof verification, audited contracts'
        }
      ],
      links: [
        {
          label: 'Wormhole Documentation',
          url: 'https://wormhole.com/docs'
        },
        {
          label: 'Bridge Tokens',
          url: '/bridge'
        },
        {
          label: 'View Wrapped Assets',
          url: '/portfolio'
        }
      ]
    },
    // Add other products here
  };

  useEffect(() => {
    if (productId && products[productId]) {
      setProduct(products[productId]);
    }
  }, [productId]);

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-20 text-center">
          <h1 className="text-4xl font-bold text-gradient mb-6">Product Not Found</h1>
          <p className="text-xl text-gray-300 mb-8">The product you're looking for doesn't exist or has been removed.</p>
          <Button className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90">
            Return to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-12">
          <div className="bg-gradient-to-br from-bitconned-blue/30 to-black p-6 rounded-full">
            <img src={product.icon} alt={product.name} className="h-16 w-16" />
          </div>
          
          <div>
            <div className="flex items-center mb-2">
              <img src={product.logo} alt={product.network} className="h-6 w-6 mr-2" />
              <span className="text-gray-300">{product.network}</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-4">
              {product.name}
            </h1>
            <p className="text-xl text-gray-300">
              {product.description}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
                <p className="text-gray-300 mb-6">
                  {product.longDescription}
                </p>
                
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-bitconned-neon mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold text-white mb-4">Technical Details</h2>
                <div className="space-y-4">
                  {product.technicalDetails.map((detail, index) => (
                    <div key={index} className="bg-white/5 rounded-lg p-4 border border-white/10">
                      <h3 className="text-lg font-bold text-bitconned-neon mb-2">{detail.title}</h3>
                      <p className="text-gray-300">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-6">
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Useful Links</h2>
                <div className="space-y-3">
                  {product.links.map((link, index) => (
                    <Button
                      key={index}
                      className="w-full bg-gradient-to-r from-bitconned-neon/80 to-bitconned-blue/80 text-black hover:from-bitconned-neon hover:to-bitconned-blue flex justify-between items-center"
                      onClick={() => window.open(link.url, '_blank')}
                    >
                      {link.label}
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="glassmorphism border-white/10">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold text-white mb-4">Related Products</h2>
                <div className="space-y-3">
                  {Object.values(products)
                    .filter(p => p.id !== product.id)
                    .slice(0, 3)
                    .map((relatedProduct, index) => (
                      <a 
                        key={index} 
                        href={`/products/${relatedProduct.id}`}
                        className="flex items-center p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      >
                        <img src={relatedProduct.icon} alt={relatedProduct.name} className="h-10 w-10 mr-3" />
                        <div>
                          <h3 className="text-white font-semibold">{relatedProduct.name}</h3>
                          <p className="text-gray-400 text-sm">{relatedProduct.network}</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-bitconned-neon ml-auto" />
                      </a>
                    ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
