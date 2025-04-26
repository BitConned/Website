
import { useEffect, useRef } from "react";
import gsap from "gsap";

const BotSection = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const terminalLines = [
      "> Initializing EquilibriumBot v1.2.4...",
      "> Connecting to BSC and Solana nodes...",
      "> Connection established.",
      "> Scanning DEX liquidity pools...",
      "> Price difference detected: BSC:$FVCK $0.042 vs SOL:$FVCK $0.048",
      "> Executing arbitrage strategy...",
      "> Buying 12,450 $FVCK on BSC PancakeSwap",
      "> Bridging assets via Wormhole...",
      "> Bridge transaction confirmed. Waiting for finality...",
      "> Assets received on Solana. Selling on Raydium...",
      "> Arbitrage complete. Net profit: 5.8%",
      "> Price normalized: BSC:$FVCK $0.045 vs SOL:$FVCK $0.045",
      "> Scanning for next opportunity...",
    ];

    if (terminalRef.current) {
      terminalRef.current.innerHTML = "";
      
      terminalLines.forEach((line, index) => {
        const lineElement = document.createElement("div");
        lineElement.className = "opacity-0 terminal-line";
        lineElement.textContent = line;
        terminalRef.current?.appendChild(lineElement);
        
        gsap.to(lineElement, {
          opacity: 1,
          duration: 0.5,
          delay: index * 0.7,
        });
      });
    }

    if (chartRef.current) {
      // Simple price chart animation
      const pricePoints = [42, 42, 43, 45, 48, 46, 45, 45, 45, 45];
      const chartContainer = chartRef.current;
      chartContainer.innerHTML = "";

      const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      svg.setAttribute("width", "100%");
      svg.setAttribute("height", "100%");
      svg.setAttribute("viewBox", "0 0 100 50");
      chartContainer.appendChild(svg);

      // Create path
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "#00FF8F");
      path.setAttribute("stroke-width", "2");
      
      // Create path data
      const pathData = pricePoints.map((point, index) => {
        const x = index * 10;
        const y = 50 - point;
        return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
      }).join(" ");
      
      path.setAttribute("d", pathData);
      svg.appendChild(path);

      // Animate the path
      const pathLength = path.getTotalLength();
      path.setAttribute("stroke-dasharray", pathLength.toString());
      path.setAttribute("stroke-dashoffset", pathLength.toString());

      gsap.to(path, {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power1.inOut"
      });

      // Add the fill area under the line
      const areaPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
      const areaPathData = `${pathData} L ${(pricePoints.length - 1) * 10} 50 L 0 50 Z`;
      areaPath.setAttribute("d", areaPathData);
      areaPath.setAttribute("fill", "url(#gradient)");
      areaPath.setAttribute("opacity", "0.3");

      // Create gradient
      const gradient = document.createElementNS("http://www.w3.org/2000/svg", "linearGradient");
      gradient.setAttribute("id", "gradient");
      gradient.setAttribute("x1", "0%");
      gradient.setAttribute("y1", "0%");
      gradient.setAttribute("x2", "0%");
      gradient.setAttribute("y2", "100%");
      
      const stop1 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop1.setAttribute("offset", "0%");
      stop1.setAttribute("stop-color", "#00FF8F");
      
      const stop2 = document.createElementNS("http://www.w3.org/2000/svg", "stop");
      stop2.setAttribute("offset", "100%");
      stop2.setAttribute("stop-color", "#00FF8F");
      stop2.setAttribute("stop-opacity", "0");
      
      gradient.appendChild(stop1);
      gradient.appendChild(stop2);
      
      const defs = document.createElementNS("http://www.w3.org/2000/svg", "defs");
      defs.appendChild(gradient);
      svg.appendChild(defs);
      svg.appendChild(areaPath);

      gsap.from(areaPath, { opacity: 0, duration: 2, delay: 6 });
    }
  }, []);

  return (
    <section id="bot" className="py-20 bg-gradient-to-b from-bitconned-dark-blue to-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient text-center">
          EquilibriumBot em Ação
        </h2>
        <p className="text-gray-300 text-lg mb-12 text-center max-w-3xl mx-auto">
          Nosso bot proprietário equaliza preços entre DEXs em diferentes blockchains,
          garantindo estabilidade e previsibilidade para os tokens BitConned.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-black/50 glassmorphism p-6 rounded-lg h-80 overflow-hidden">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <span className="w-3 h-3 bg-bitconned-neon rounded-full mr-2 animate-pulse"></span>
              Terminal do EquilibriumBot
            </h3>
            <div 
              ref={terminalRef} 
              className="font-jetbrains text-sm h-full overflow-y-auto text-gray-300 space-y-1"
            >
              {/* Terminal content will be injected here */}
            </div>
          </div>

          <div className="bg-black/50 glassmorphism p-6 rounded-lg h-80 flex flex-col">
            <h3 className="text-xl font-bold text-white mb-4">Equalização de Preço em Tempo Real</h3>
            <div ref={chartRef} className="flex-1"></div>
            <div className="flex justify-between text-sm text-gray-400 mt-2">
              <span>BSC</span>
              <span>Solana</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="glassmorphism p-6 rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-3">Modularidade</h3>
            <p className="text-gray-300">
              Arquitetura modular que permite adaptar a estratégias de mercado e integração com múltiplas DEXs.
            </p>
          </div>

          <div className="glassmorphism p-6 rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-3">Segurança</h3>
            <p className="text-gray-300">
              Multi-sig para operações críticas, auditorias contínuas e monitoramento anti-manipulação.
            </p>
          </div>

          <div className="glassmorphism p-6 rounded-lg transition-all duration-300 hover:scale-105">
            <h3 className="text-xl font-bold text-white mb-3">Performance</h3>
            <p className="text-gray-300">
              Processamento de até 3,000 TPS em Solana e resposta instantânea às oportunidades de arbitragem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BotSection;
