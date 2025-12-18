import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const horizontalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (horizontalRef.current) {
        const rect = horizontalRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementHeight = rect.height;
        
        if (rect.top <= windowHeight && rect.bottom >= 0) {
          const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + elementHeight)));
          setScrollProgress(progress);
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const processSteps = [
    { title: "Massing", desc: "Volume exploration in context" },
    { title: "Section Logic", desc: "Vertical relationships defined" },
    { title: "Spatial Hierarchy", desc: "Public to private transitions" },
    { title: "Material Intent", desc: "Tactile decisions emerge" },
  ];

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1C1C1C]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Drafting Grid Background */}
        <div className="absolute inset-0 opacity-0 transition-opacity duration-[2000ms] ease-out"
          style={{ opacity: isLoaded ? 0.15 : 0 }}>
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#9A9A9A" strokeWidth="0.5" opacity="0.4"/>
              </pattern>
              <pattern id="smallGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#9A9A9A" strokeWidth="0.25" opacity="0.2"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#smallGrid)" />
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Architectural Lines - trace themselves */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
          {/* Section line A-A */}
          <line 
            x1="10%" y1="30%" x2="90%" y2="30%" 
            stroke="#C7A76A" 
            strokeWidth="1" 
            strokeDasharray="1000"
            strokeDashoffset={isLoaded ? 0 : 1000}
            style={{ transition: "stroke-dashoffset 3s ease-out 0.5s" }}
          />
          <text x="92%" y="30%" fill="#C7A76A" fontSize="12" fontFamily="monospace" 
            className="opacity-0 transition-opacity duration-1000"
            style={{ opacity: isLoaded ? 0.8 : 0, transitionDelay: "2s" }}>A</text>
          
          {/* Column markers */}
          {[20, 35, 50, 65, 80].map((x, i) => (
            <g key={i}>
              <line 
                x1={`${x}%`} y1="25%" x2={`${x}%`} y2="75%" 
                stroke="#9A9A9A" 
                strokeWidth="0.5" 
                strokeDasharray="4,4"
                opacity="0"
                style={{ 
                  opacity: isLoaded ? 0.3 : 0, 
                  transition: `opacity 1s ease-out ${1 + i * 0.2}s` 
                }}
              />
              <circle 
                cx={`${x}%`} cy="25%" r="3" 
                fill="none" 
                stroke="#9A9A9A" 
                strokeWidth="0.5"
                opacity="0"
                style={{ 
                  opacity: isLoaded ? 0.4 : 0, 
                  transition: `opacity 1s ease-out ${1.5 + i * 0.2}s` 
                }}
              />
            </g>
          ))}

          {/* Reference arrows */}
          <path 
            d="M 15% 60% L 25% 60% L 23% 58% M 25% 60% L 23% 62%" 
            fill="none" 
            stroke="#9A9A9A" 
            strokeWidth="0.75"
            opacity="0"
            style={{ opacity: isLoaded ? 0.5 : 0, transition: "opacity 1s ease-out 2s" }}
          />

          {/* Dimension line */}
          <g opacity="0" style={{ opacity: isLoaded ? 0.4 : 0, transition: "opacity 1s ease-out 2.5s" }}>
            <line x1="20%" y1="80%" x2="80%" y2="80%" stroke="#9A9A9A" strokeWidth="0.5"/>
            <line x1="20%" y1="78%" x2="20%" y2="82%" stroke="#9A9A9A" strokeWidth="0.5"/>
            <line x1="80%" y1="78%" x2="80%" y2="82%" stroke="#9A9A9A" strokeWidth="0.5"/>
            <text x="50%" y="78%" textAnchor="middle" fill="#9A9A9A" fontSize="10" fontFamily="monospace">
              —
            </text>
          </g>
        </svg>

        {/* Text Content - anchored lower */}
        <div className="container mx-auto px-6 relative z-10 pt-32">
          <div className="max-w-3xl ml-0 md:ml-12 mt-32 md:mt-48">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight opacity-0"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2.5s"
              }}
            >
              ARCHITECTURE
            </h1>
            <p 
              className="mt-6 text-lg md:text-xl text-[#9A9A9A] tracking-[0.2em] uppercase opacity-0"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 3s"
              }}
            >
              Spaces begin long before walls exist.
            </p>

            {/* Architect's note */}
            <div 
              className="mt-12 opacity-0"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transition: "opacity 1s ease-out 3.5s"
              }}
            >
              <span className="text-xs text-[#9A9A9A] font-mono tracking-wider">
                Scale 1:100 · Not to scale
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block - Editorial Journal Style */}
      <section className="py-32 md:py-48 relative">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto relative">
            {/* Marginal notes */}
            <div className="absolute -left-4 md:-left-32 top-0 text-xs text-[#9A9A9A] font-mono tracking-wider transform -rotate-90 origin-left whitespace-nowrap">
              Scale varies
            </div>
            <div className="absolute -right-4 md:-right-28 top-1/3 text-xs text-[#9A9A9A] font-mono tracking-wider transform rotate-90 origin-right whitespace-nowrap">
              Conceptual
            </div>
            <div className="absolute -left-4 md:-left-36 bottom-1/4 text-xs text-[#9A9A9A] font-mono tracking-wider transform -rotate-90 origin-left whitespace-nowrap">
              Not to execution
            </div>

            <p className="text-2xl md:text-3xl lg:text-4xl font-heading leading-relaxed text-[#1C1C1C]">
              Architecture is the thoughtful making of space. Before a line is drawn, there is{" "}
              <span className="text-[#C7A76A]">intention</span>. Before a wall rises, there is{" "}
              <span className="text-[#C7A76A]">understanding</span>. We design spaces that 
              acknowledge the passage of time, the movement of light, and the rituals of daily life.
            </p>

            <div className="mt-16 w-32 h-px bg-gradient-to-r from-[#C7A76A] to-transparent"></div>

            <p className="mt-16 text-lg md:text-xl text-[#9A9A9A] leading-loose max-w-2xl">
              Every project begins with listening — to the site, to the client, to the constraints 
              that ultimately become the seeds of design. We believe architecture must serve the 
              human condition while responding to its context with sensitivity and purpose.
            </p>
          </div>
        </div>
      </section>

      {/* Process as Drawing Sequence - Horizontal Scroll */}
      <section ref={horizontalRef} className="py-24 overflow-hidden relative">
        <div className="container mx-auto px-6 mb-12">
          <span className="text-xs text-[#9A9A9A] font-mono tracking-[0.3em] uppercase">
            Process
          </span>
        </div>
        
        <div 
          className="flex gap-24 md:gap-40 px-6 md:px-24 transition-transform duration-100"
          style={{ transform: `translateX(${-scrollProgress * 50}%)` }}
        >
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-64 md:w-80"
              style={{
                opacity: Math.max(0.2, 1 - Math.abs(scrollProgress - (index * 0.25)) * 2),
                transition: "opacity 0.3s ease-out"
              }}
            >
              <div className="relative">
                {/* Thin architectural line */}
                <div className="absolute -left-8 top-0 bottom-0 w-px bg-[#C7A76A] opacity-30"></div>
                
                <span className="text-xs font-mono text-[#9A9A9A] tracking-[0.2em]">
                  0{index + 1}
                </span>
                <h3 className="mt-4 text-3xl md:text-4xl font-heading font-bold text-[#1C1C1C]">
                  {step.title}
                </h3>
                <p className="mt-4 text-[#9A9A9A] text-sm tracking-wide">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tracing paper overlay effect */}
        <div 
          className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#F6F1EA] via-transparent to-[#F6F1EA]"
          style={{ opacity: 0.5 }}
        ></div>
      </section>

      {/* Architectural Promise */}
      <section className="py-40 md:py-56">
        <div className="container mx-auto px-6">
          <p className="text-center text-2xl md:text-3xl lg:text-4xl font-heading text-[#1C1C1C] tracking-wide">
            We design for time, light, and human movement.
          </p>
        </div>
      </section>

      {/* Subtle Navigation */}
      <section className="py-24 border-t border-[#1C1C1C]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/construction" 
              className="group text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Next</span>
              <span className="block mt-2 text-2xl font-heading">Construction →</span>
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-[#C7A76A] hover:text-[#1C1C1C] transition-colors duration-500 tracking-[0.2em] uppercase"
            >
              Begin a conversation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;
