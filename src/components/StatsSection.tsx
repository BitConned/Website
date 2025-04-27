import { Card } from "@/components/ui/card";
import { ArrowUp, Flame, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      title: "Price",
      value: "$0.0025",
      change: "+15.4%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Market Cap",
      value: "$2.5M",
      change: "+8.2%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Holders",
      value: "12.5K",
      change: "+8.2%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Tokens Burned",
      value: "1.2M",
      icon: Flame,
      change: "+8.2%",
      isPositive: true,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-bitconned-dark-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card 
              key={index} 
              className="bg-gradient-to-r from-[#0a0b0d] to-[#131517] border border-white/5 rounded-lg p-6 text-white hover:border-white/10 transition-all"
            >
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-medium">{stat.title}</h3>
                {stat.icon && <stat.icon className="h-5 w-5 text-[#00ff00]" />}
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-[#ffffff]">{stat.value}</span>
                {stat.change && (
                  <span className={`flex items-center text-sm ${stat.isPositive ? 'text-[#00ff00]' : 'text-red-400'}`}>
                    <ArrowUp className={`h-3 w-3 mr-1 ${!stat.isPositive && 'rotate-180'}`} />
                    {stat.change}
                  </span>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
