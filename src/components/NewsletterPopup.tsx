import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewsletterPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const NewsletterPopup = ({ isOpen, onClose }: NewsletterPopupProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }
    
    setSubmitted(true);
    toast({
      title: "Success!",
      description: "You've been subscribed to our newsletter!",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-md mx-auto relative">
        <Button 
          onClick={onClose}
          className="absolute top-4 right-4 p-2 h-auto bg-transparent hover:bg-white/10 text-white rounded-full"
          variant="ghost"
        >
          <X className="h-5 w-5" />
        </Button>
        
        <Card className="bg-gradient-to-br from-bitconned-blue/20 to-black border-white/10 overflow-hidden">
          <div className="p-8">
            <div className="flex justify-center mb-4">
              <img src="/bitconned-logo.png" alt="BitConned Logo" className="h-16" />
            </div>
            
            {!submitted ? (
              <>
                <h3 className="text-2xl font-bold text-gradient text-center mb-6">
                  Stay Updated with BitConned
                </h3>
                
                <p className="text-gray-300 text-center mb-6">
                  Subscribe to our newsletter to receive the latest updates, insights, and announcements directly in your inbox.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button 
                    type="submit" 
                    className="w-full"
                  >
                    Subscribe
                  </Button>
                </form>
              </>
            ) : (
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gradient mb-4">Thank You!</h3>
                <p className="text-gray-300">
                  You've been successfully subscribed to our newsletter.
                </p>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default NewsletterPopup;
