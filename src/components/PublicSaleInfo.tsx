import { Wallet, Link, Clock, CircleDollarSign, Activity } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const PublicSaleInfo = () => {
  const info = {
    contract: {
      address: '0x742d35Cc6634C0532925a3b844Bc454e4438f44e',
      spaceId: 'PublicSale.bnb',
      type: 'Smart Contract'
    },
    status: {
      lastTransaction: '2024-03-10 15:45 UTC',
      inCirculation: true,
      circulatingSupply: '125,000,000',
      currentAmount: '300,000,000',
      marketValue: '$750,000'
    }
  };

  return (
    <div className="bg-[#0a0b0d] border border-white/5 rounded-lg p-3 shadow-lg hover:border-white/10 transition-all">
      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-white/5">
        <Activity className="h-4 w-4 text-[#FFD700]" />
        <h3 className="text-white font-bold text-sm">Public Sale</h3>
        <span className={`ml-auto px-1.5 py-0.5 rounded text-xs ${info.status.inCirculation ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
          {info.status.inCirculation ? 'Active' : 'Inactive'}
        </span>
      </div>

      <div className="flex items-center gap-2 text-xs">
        <div className="flex-1 font-mono text-[10px] text-gray-400">
          {info.contract.address}
          <span className="ml-1 font-bold text-[#FFD700]">- {info.contract.spaceId}</span>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link className="h-3 w-3 text-[#FFD700]" />
            </TooltipTrigger>
            <TooltipContent>
              <p>View on BscScan</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="mt-2 grid grid-cols-2 gap-2 text-[11px] text-gray-400">
        <div className="flex items-center gap-1.5">
          <Clock className="h-3 w-3" />
          <span>Última Transação: <span className="text-white">{info.status.lastTransaction}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <CircleDollarSign className="h-3 w-3" />
          <span>Market Value: <span className="text-[#FFD700]">{info.status.marketValue}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wallet className="h-3 w-3" />
          <span>Total: <span className="text-white">{info.status.currentAmount}</span></span>
        </div>
        <div className="flex items-center gap-1.5">
          <Wallet className="h-3 w-3" />
          <span>Circulating: <span className="text-white">{info.status.circulatingSupply}</span></span>
        </div>
      </div>
    </div>
  );
};

export default PublicSaleInfo; 