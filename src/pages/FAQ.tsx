
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General",
      faqs: [
        {
          question: "What is BitConned?",
          answer: "BitConned is a cross-chain platform connecting BSC and Solana networks to provide transparency and security in the crypto space. Our ecosystem includes tokens, bridges, and tools designed to protect users and expose fraudulent activities."
        },
        {
          question: "How can I get started with BitConned?",
          answer: "You can get started by exploring our documentation, joining our community on social media, and participating in our airdrop. Once our tokens are live, you can acquire them through supported exchanges or our official swap interface."
        },
        {
          question: "Is BitConned open source?",
          answer: "Parts of the BitConned ecosystem are open source, with code available for review on our GitHub repository. However, certain components like the EquilibriumBot have proprietary elements to prevent exploitation."
        }
      ]
    },
    {
      title: "Technology",
      faqs: [
        {
          question: "How does the cross-chain functionality work?",
          answer: "BitConned uses the Wormhole bridge to enable seamless transfers between BSC and Solana blockchains. Our EquilibriumBot ensures price stability across networks, while wrapped tokens maintain liquidity and functionality across chains."
        },
        {
          question: "How does the EquilibriumBot work?",
          answer: "EquilibriumBot monitors price disparities between exchanges and networks, executing trades to maintain price equilibrium. This reduces arbitrage opportunities and creates a more stable environment for all users."
        },
        {
          question: "What blockchain technologies does BitConned use?",
          answer: "BitConned primarily operates on Binance Smart Chain (BSC) and Solana blockchain networks. We utilize smart contracts, SPL tokens, and cross-chain bridges to create a seamless interoperable ecosystem."
        }
      ]
    },
    {
      title: "Tokens",
      faqs: [
        {
          question: "What are $FVCK and FVCKBEEB tokens?",
          answer: "BitConned($FVCK) is our primary BEP-20 token on the BSC network, while FVCKBEEB($FVCK) is the equivalent SPL token on the Solana network. Both tokens are used for governance, reporting, and ecosystem participation."
        },
        {
          question: "What are the transaction fees?",
          answer: "BSC transactions incur a 5% fee, while Solana transactions have a 0.25% fee. These fees contribute to ecosystem development, marketing, and maintaining liquidity pools."
        },
        {
          question: "How can I bridge my tokens between networks?",
          answer: "You can use our integrated Wormhole bridge solution to transfer tokens between BSC and Solana networks. The process is designed to be user-friendly with minimal fees and quick confirmation times."
        }
      ]
    },
    {
      title: "Community",
      faqs: [
        {
          question: "How can I participate in the airdrop?",
          answer: "To participate in our airdrop, subscribe to our newsletter and complete social tasks such as following our accounts on Twitter, Telegram, Instagram, and TikTok. The more tasks you complete, the higher your allocation may be."
        },
        {
          question: "How can I join the BitConned team?",
          answer: "We're always looking for talented individuals! Visit our Careers page or click the 'Careers' button to submit your application. We have positions in development, marketing, design, and community management."
        },
        {
          question: "How can I contribute to the project?",
          answer: "You can contribute by participating in community discussions, providing feedback, reporting bugs, and helping spread awareness about BitConned. Technical contributors can also submit pull requests to our GitHub repositories."
        }
      ]
    },
    {
      title: "Security",
      faqs: [
        {
          question: "Is BitConned audited?",
          answer: "Yes, BitConned smart contracts undergo rigorous security audits by reputable third-party firms. We prioritize security and transparency, with all audit reports publicly available in our documentation."
        },
        {
          question: "How does BitConned protect user assets?",
          answer: "BitConned implements multi-layer security measures including formal verification, timelock mechanisms, multi-signature wallets, and regular security audits to ensure the highest level of protection for user assets."
        },
        {
          question: "What should I do if I suspect a security issue?",
          answer: "If you suspect a security vulnerability, please contact us immediately at security@bitconned.com. Do not disclose potential security issues publicly. We take all reports seriously and will investigate promptly."
        }
      ]
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-6 text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-xl text-gray-300 mb-12 text-center max-w-3xl mx-auto">
          Find answers to the most common questions about BitConned, our technology, tokens, and services.
        </p>
        
        <div className="space-y-8">
          {faqCategories.map((category, i) => (
            <div key={i} className="mb-10">
              <h2 className="text-2xl font-bold text-bitconned-neon mb-6">{category.title}</h2>
              
              <Card className="glassmorphism border-white/10">
                <div className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    {category.faqs.map((faq, j) => (
                      <AccordionItem key={j} value={`item-${i}-${j}`} className="border-b border-white/10">
                        <AccordionTrigger className="text-white hover:text-bitconned-neon">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-300">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default FAQ;
