
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Check, Clock, ChevronRight } from "lucide-react";

const RoadmapSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const quarters = document.querySelectorAll(".roadmap-quarter");
    
    quarters.forEach((quarter, index) => {
      gsap.fromTo(
        quarter,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: quarter,
            start: "top bottom-=100",
            toggleActions: "play none none none",
          },
          delay: index * 0.2,
        }
      );
    });
    
    // Animate the progress line
    if (timelineRef.current) {
      gsap.fromTo(
        ".timeline-progress",
        {
          scaleX: 0,
          transformOrigin: "left center",
        },
        {
          scaleX: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top bottom-=200",
            end: "bottom bottom-=100",
            scrub: true,
          },
        }
      );
    }
  }, []);

  const roadmapData = [
    {
      quarter: "Q1 2025",
      title: "MVP / Testnet",
      items: [
        "Whitepaper launch",
        "$FVCK token development (BEP-20)",
        "Testnet with BSC↔SOL bridge",
        "Initial community",
      ],
      status: "completed",
    },
    {
      quarter: "Q2 2025",
      title: "Audit + Deploy",
      items: [
        "CertiK audit",
        "$FVCK Mainnet launch",
        "FVCKBEEB launch (SPL)",
        "Wormhole v2.0 integration",
      ],
      status: "in-progress",
    },
    {
      quarter: "Q3 2025",
      title: "EquilibriumBot",
      items: [
        "EquilibriumBot Alpha",
        "Integration with main DEXs",
        "Analytics dashboard",
        "Initial governance",
      ],
      status: "upcoming",
    },
    {
      quarter: "Q4 2025",
      title: "Multi-chain Expansion",
      items: [
        "Polygon integration",
        "Base integration",
        "Complete DAO",
        "Strategic partnerships",
      ],
      status: "upcoming",
    },
  ];

  return (
    <section id="roadmap" className="py-20 bg-gradient-to-br from-bitconned-dark-blue/60 to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
          Roadmap
        </h2>
        <p className="text-gray-300 text-lg mb-16 text-center max-w-3xl mx-auto">
          Our vision to transform security and transparency in the crypto ecosystem.
        </p>
        
        <div className="relative max-w-5xl mx-auto" ref={timelineRef}>
          {/* Timeline progress bar */}
          <div className="absolute left-0 top-[45px] h-2 w-full bg-white/10 rounded">
            <div className="timeline-progress absolute top-0 left-0 h-full bg-bitconned-neon rounded"></div>
          </div>
          
          {/* Timeline items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12 relative">
            {roadmapData.map((item, index) => (
              <div 
                key={index} 
                className={`roadmap-quarter relative ${
                  item.status === "completed" ? "opacity-100" : 
                  item.status === "in-progress" ? "opacity-100" : 
                  "opacity-70"
                }`}
              >
                <div className="absolute top-[-45px] left-1/2 transform -translate-x-1/2">
                  <div 
                    className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      item.status === "completed" ? "bg-bitconned-neon text-black" : 
                      item.status === "in-progress" ? "border-2 border-bitconned-neon bg-black" : 
                      "border-2 border-white/30 bg-black"
                    }`}
                  >
                    {item.status === "completed" && <Check className="h-4 w-4" />}
                    {item.status === "in-progress" && <Clock className="h-3 w-3 text-bitconned-neon" />}
                  </div>
                </div>

                <div className={`bg-gradient-to-br from-bitconned-blue/40 to-black/80 p-6 rounded-lg border ${
                  item.status === "completed" ? "border-bitconned-neon" : 
                  item.status === "in-progress" ? "border-t-bitconned-neon border-r-white/10 border-b-white/10 border-l-white/10" : 
                  "border-white/10"
                }`}>
                  <div className="text-bitconned-neon font-mono mb-2">{item.quarter}</div>
                  <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                  <ul className="text-gray-300 space-y-2">
                    {item.items.map((bullet, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1">
                          <ChevronRight className={`h-4 w-4 ${
                            item.status === "completed" ? "text-bitconned-neon" : 
                            item.status === "in-progress" && i < 2 ? "text-bitconned-neon" : 
                            "text-gray-500"
                          }`} />
                        </div>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
