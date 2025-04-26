
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

interface AirdropNewsletterProps {
  onOpenNewsletter: () => void;
}

const AirdropNewsletter = ({ onOpenNewsletter }: AirdropNewsletterProps) => {
  const handleSubscribeClick = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenNewsletter();
  };

  return (
    <section className="py-16 bg-gradient-to-br from-bitconned-dark-blue to-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <Card className="glassmorphism overflow-hidden border-white/10">
            <div className="p-8">
              <div className="flex justify-center mb-4">
                <img src="/bitconned-logo.png" alt="BitConned Logo" className="h-16" />
              </div>
              <h3 className="text-3xl font-bold text-gradient text-center mb-6">
                Join the BitConned Airdrop
              </h3>
              
              <p className="text-gray-300 text-center mb-8">
                Subscribe to our newsletter and participate in the upcoming $FVCK token airdrop. Be the first to know about new features and opportunities.
              </p>
              
              <form onSubmit={handleSubscribeClick} className="flex flex-col sm:flex-row gap-4">
                <Input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button type="submit" className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90">
                  Join Airdrop
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AirdropNewsletter;
