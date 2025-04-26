
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card } from "@/components/ui/card";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is BitConned?",
      answer: "BitConned is a cross-chain platform connecting BSC and Solana networks to provide transparency and security in the crypto space. Our ecosystem includes tokens, bridges, and tools designed to protect users and expose fraudulent activities."
    },
    {
      question: "How does the cross-chain functionality work?",
      answer: "BitConned uses the Wormhole bridge to enable seamless transfers between BSC and Solana blockchains. Our EquilibriumBot ensures price stability across networks, while wrapped tokens maintain liquidity and functionality across chains."
    },
    {
      question: "What are $FVCK and FVCKBEEB tokens?",
      answer: "BitConned($FVCK) is our primary BEP-20 token on the BSC network, while FVCKBEEB($FVCK) is the equivalent SPL token on the Solana network. Both tokens are used for governance, reporting, and ecosystem participation."
    },
    {
      question: "What are the transaction fees?",
      answer: "BSC transactions incur a 5% fee, while Solana transactions have a 0.25% fee. These fees contribute to ecosystem development, marketing, and maintaining liquidity pools."
    },
    {
      question: "How does the EquilibriumBot work?",
      answer: "EquilibriumBot monitors price disparities between exchanges and networks, executing trades to maintain price equilibrium. This reduces arbitrage opportunities and creates a more stable environment for all users."
    },
    {
      question: "How can I participate in the airdrop?",
      answer: "To participate in our airdrop, subscribe to our newsletter and complete social tasks such as following our accounts on Twitter, Telegram, Instagram, and TikTok. The more tasks you complete, the higher your allocation may be."
    },
    {
      question: "Is BitConned audited?",
      answer: "Yes, BitConned smart contracts undergo rigorous security audits by reputable third-party firms. We prioritize security and transparency, with all audit reports publicly available in our documentation."
    },
    {
      question: "How can I join the BitConned team?",
      answer: "We're always looking for talented individuals! Visit our Careers page or click the 'Careers' button to submit your application. We have positions in development, marketing, design, and community management."
    }
  ];

  return (
    <section id="faq" className="py-16 bg-gradient-to-br from-bitconned-dark-blue to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient text-center mb-12">
          Frequently Asked Questions
        </h2>
        
        <Card className="glassmorphism border-white/10">
          <div className="p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-white/10">
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
    </section>
  );
};

export default FAQSection;
