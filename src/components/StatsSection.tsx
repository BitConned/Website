import { Card } from "@/components/ui/card";
import { ArrowUp, Flame, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      title: "Price",
      value: "$0.0025",
      change: "+15.4%",
      isPositive: true,
    },
    {
      title: "Market Cap",
      value: "$2.5M",
      change: "+8.2%",
      isPositive: true,
    },
    {
      title: "Holders",
      value: "12.5K",
      icon: Users,
    },
    {
      title: "Tokens Burned",
      value: "1.2M",
      icon: Flame,
    },
  ];

  return (
    <section className="py-12 bg-gradient-to-b from-black to-bitconned-dark-blue">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-bitconned-blue/20 to-black border border-white/10 rounded-xl p-6 text-white">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-white font-semibold">{stat.title}</h3>
                {stat.icon && <stat.icon className="h-5 w-5 text-bitconned-neon" />}
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="text-2xl font-bold text-bitconned-neon">{stat.value}</span>
                {stat.change && (
                  <span className={`flex items-center text-sm ${stat.isPositive ? 'text-green-400' : 'text-red-400'}`}>
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
