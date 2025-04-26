import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { CheckCircle, X } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface AirdropPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AirdropPopup = ({ isOpen, onClose }: AirdropPopupProps) => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [socialTasks, setSocialTasks] = useState({
    twitter: false,
    telegram: false,
    instagram: false,
    tiktok: false,
    share: false
  });
  
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
      description: "Complete social tasks to increase your airdrop chances!",
    });
  };

  const handleSocialTask = (task: keyof typeof socialTasks) => {
    setSocialTasks({...socialTasks, [task]: true});
    
    toast({
      title: "Task completed!",
      description: "Your airdrop points have increased",
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto relative">
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
            <h3 className="text-3xl font-bold text-gradient text-center mb-6">
              Join the BitConned Airdrop
            </h3>
            
            {!submitted ? (
              <div>
                <p className="text-gray-300 text-center mb-8">
                  Subscribe to our newsletter and participate in the upcoming $FVCK token airdrop. Be the first to know about new features and opportunities.
                </p>
                
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                  <Input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Your email address" 
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button type="submit" className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90">
                    Join Airdrop
                  </Button>
                </form>
              </div>
            ) : (
              <div>
                <p className="text-gray-300 text-center mb-8">
                  Thanks for joining! Complete the following tasks to increase your airdrop chances:
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">𝕏</div>
                      <span>Follow BitConned on Twitter</span>
                    </div>
                    {socialTasks.twitter ? (
                      <CheckCircle className="h-6 w-6 text-bitconned-neon" />
                    ) : (
                      <Button 
                        onClick={() => handleSocialTask('twitter')}
                        className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">📱</div>
                      <span>Join Telegram community</span>
                    </div>
                    {socialTasks.telegram ? (
                      <CheckCircle className="h-6 w-6 text-bitconned-neon" />
                    ) : (
                      <Button 
                        onClick={() => handleSocialTask('telegram')}
                        className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">📸</div>
                      <span>Follow on Instagram</span>
                    </div>
                    {socialTasks.instagram ? (
                      <CheckCircle className="h-6 w-6 text-bitconned-neon" />
                    ) : (
                      <Button 
                        onClick={() => handleSocialTask('instagram')}
                        className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">🎬</div>
                      <span>Follow on TikTok</span>
                    </div>
                    {socialTasks.tiktok ? (
                      <CheckCircle className="h-6 w-6 text-bitconned-neon" />
                    ) : (
                      <Button 
                        onClick={() => handleSocialTask('tiktok')}
                        className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between p-3 border border-white/10 rounded-lg bg-white/5">
                    <div className="flex items-center">
                      <div className="text-2xl mr-3">🔄</div>
                      <span>Share BitConned with your network</span>
                    </div>
                    {socialTasks.share ? (
                      <CheckCircle className="h-6 w-6 text-bitconned-neon" />
                    ) : (
                      <Button 
                        onClick={() => handleSocialTask('share')}
                        className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90"
                      >
                        Complete
                      </Button>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 p-4 border border-bitconned-neon/30 rounded-lg bg-bitconned-neon/10">
                  <p className="text-white text-sm text-center">
                    Complete all tasks to maximize your airdrop allocation. Results will be announced soon!
                  </p>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AirdropPopup;
