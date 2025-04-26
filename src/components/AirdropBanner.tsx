
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface AirdropBannerProps {
  onOpenAirdrop: () => void;
}

const AirdropBanner = ({ onOpenAirdrop }: AirdropBannerProps) => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-bitconned-dark-blue to-black border-t border-bitconned-neon/30 py-3 px-4 z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/1e624dd5-9650-42c9-9714-0ae2d2796494.png" alt="BitConned" className="h-8 w-8" />
          <p className="text-white font-medium md:text-base text-sm">
            <span className="text-bitconned-neon">$FVCK Airdrop:</span> Join now and earn tokens by completing simple tasks!
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Button 
            onClick={onOpenAirdrop}
            className="bg-bitconned-neon text-bitconned-dark-blue hover:bg-bitconned-neon/90 text-sm px-3 py-1 h-auto"
          >
            Join Airdrop
          </Button>
          <Button 
            onClick={handleClose}
            className="p-1 h-auto bg-transparent hover:bg-white/10 text-white rounded-full"
            variant="ghost"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AirdropBanner;
