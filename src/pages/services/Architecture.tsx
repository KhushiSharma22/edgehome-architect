import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Plus, Minus, ArrowRight } from "lucide-react";
import architectureHero from "@/assets/architecture-hero.jpg";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate light shift based on scroll
  const lightShiftX = Math.sin(scrollY * 0.002) * 15;
  const lightShiftY = Math.cos(scrollY * 0.002) * 10;

  const principles = [
    {
      title: "Function becomes form",
      desc: "We design from how life moves, not how trends look.",
      num: "01"
    },
    {
      title: "Light is a material",
      desc: "Every opening is shaped to invite silence, warmth, and time.",
      num: "02"
    },
    {
      title: "Details carry weight",
      desc: "Precision is not decorative. It is structural.",
      num: "03"
    }
  ];

  const blueprintAnnotations = [
    { id: "entry", label: "Entry sequence", x: 15, y: 30 },
    { id: "courtyard", label: "Courtyard / void", x: 50, y: 45 },
    { id: "stair", label: "Stair as sculpture", x: 75, y: 25 },
    { id: "sightlines", label: "Sightlines", x: 35, y: 70 },
    { id: "ventilation", label: "Ventilation logic", x: 65, y: 75 }
  ];

  const faqs = [
    { q: "What is your typical timeline?", a: "Most residential projects take 8-16 weeks for design, depending on complexity. We believe in thorough exploration over rushed decisions." },
    { q: "Do you do turnkey?", a: "We focus on design and documentation. For construction, we partner with trusted contractors or work with your chosen builder." },
    { q: "How do you charge?", a: "We work on a phased fee structure based on project scope. An initial consultation helps us provide a detailed proposal." },
    { q: "Can you work with my contractor?", a: "Absolutely. We're experienced in coordinating with external teams and ensuring our design intent is executed precisely." },
    { q: "How many concepts do you provide?", a: "We typically present 2-3 distinct directions, then refine the chosen approach through iterations." },
    { q: "What do you need from me to start?", a: "Site survey, plot documents, a brief conversation about your vision, and trust in the process." }
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== SECTION 1: HERO - CINEMATIC WITH TEMPORAL TYPOGRAPHY ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full background image with scroll-reactive light */}
        <div className="absolute inset-0">
          <img 
            src={architectureHero}
            alt="Architectural mass study"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.1)`,
              filter: `brightness(${0.7 + scrollY * 0.0002})`
            }}
          />
          {/* Scroll-reactive light gradient overlay */}
          <div 
            className="absolute inset-0 transition-all duration-1000 ease-out"
            style={{
              background: `radial-gradient(ellipse at ${50 + lightShiftX}% ${40 + lightShiftY}%, transparent 0%, rgba(14,14,14,0.4) 40%, rgba(14,14,14,0.85) 100%)`
            }}
          />
          {/* Heavy vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0E0E0E_80%)]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0E0E0E] to-transparent" />
        </div>

        {/* Subtle grain texture */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28">
          {/* Breadcrumb */}
          <nav 
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/40 mb-20"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-ivory transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C6A46A]">ARCHITECTURE</span>
          </nav>

          <div className="relative max-w-6xl">
            {/* Oversized "calm" watermark - positioned behind */}
            <div 
              className="absolute -top-20 right-0 lg:right-10 pointer-events-none select-none"
              style={{
                opacity: isLoaded ? 0.06 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s"
              }}
            >
              <span 
                className="text-[12rem] md:text-[18rem] lg:text-[24rem] font-heading italic text-[#C6A46A] leading-none"
                style={{
                  animation: "breathe 8s ease-in-out infinite"
                }}
              >
                calm
              </span>
            </div>

            {/* Main headline - temporal typography */}
            <h1 className="relative z-10">
              {/* Line 1: Architecture - solid serif white */}
              <span className="block overflow-hidden">
                <span 
                  className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading text-ivory tracking-tight"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
                  }}
                >
                  Architecture
                </span>
              </span>
              
              {/* Line 2: that feels - ultra light, letter spaced */}
              <span className="block overflow-hidden mt-2">
                <span 
                  className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-ivory/60 tracking-[0.15em] pl-2 lg:pl-4"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
                  }}
                >
                  that feels
                </span>
              </span>
              
              {/* Line 3: calm - gold italic, appears last with fade */}
              <span className="block overflow-hidden mt-4 lg:mt-6 pl-8 lg:pl-20">
                <span 
                  className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic text-[#C6A46A]"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0) scale(1)" : "translateY(100%) scale(0.95)",
                    transition: "all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.9s"
                  }}
                >
                  calm
                </span>
              </span>
            </h1>

            {/* Subcopy */}
            <p 
              className="text-base md:text-lg text-ivory/50 leading-relaxed max-w-md mt-12 lg:mt-16"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 1.4s"
              }}
            >
              We design homes with restraint, clarity, and quiet confidence. 
              Every line has a reason, every space has a story.
            </p>

            {/* CTA */}
            <div 
              className="mt-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 1.6s"
              }}
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-4 border border-[#C6A46A]/60 text-[#C6A46A] px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#C6A46A] hover:text-[#0E0E0E] transition-all duration-500"
              >
                Begin Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 2s"
            }}
          >
            <span className="text-[9px] tracking-[0.3em] text-ivory/30">SCROLL</span>
            <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A46A]/50 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: CORE PRINCIPLES - OVERLAPPING SLABS ===== */}
      <section className="relative py-16 lg:py-20 bg-ivory overflow-hidden">
        {/* Section header */}
        <div className="container mx-auto px-6 lg:px-12 mb-10">
          <div 
            className="flex items-center gap-4"
            style={{
              opacity: scrollY > 400 ? 1 : 0,
              transform: scrollY > 400 ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out"
            }}
          >
            <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
            <span className="text-[10px] tracking-[0.3em] text-[#C6A46A] font-mono">
              CORE PRINCIPLES
            </span>
          </div>
        </div>

        {/* Overlapping architectural slabs */}
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="relative max-w-5xl ml-auto">
            {principles.map((principle, index) => {
              const scrollThreshold = 500 + index * 150;
              const isVisible = scrollY > scrollThreshold;
              
              // Offset positions for overlapping effect
              const offsetX = index * 60; // Diagonal offset
              const offsetY = index * 80;
              
              return (
                <div 
                  key={index}
                  className="relative group"
                  style={{
                    marginLeft: `${offsetX}px`,
                    marginTop: index === 0 ? 0 : `-40px`,
                    zIndex: 10 - index,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? "translateY(0) translateX(0)" 
                      : `translateY(60px) translateX(-30px)`,
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                  }}
                  onMouseEnter={() => setActivePrinciple(index)}
                  onMouseLeave={() => setActivePrinciple(null)}
                >
                  <div 
                    className={`relative bg-[#F5F3EF] p-10 lg:p-14 transition-all duration-700 ${
                      activePrinciple === index ? "bg-[#EBE8E2]" : ""
                    }`}
                    style={{
                      boxShadow: `${20 + index * 10}px ${20 + index * 10}px ${40 + index * 15}px rgba(0,0,0,${0.08 + index * 0.02})`
                    }}
                  >
                    {/* Gold edge stroke - top and left only for slab effect */}
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-[#C6A46A]/40 via-[#C6A46A]/20 to-transparent" />
                    <div className="absolute top-0 left-0 w-[1px] h-full bg-gradient-to-b from-[#C6A46A]/40 via-[#C6A46A]/20 to-transparent" />
                    
                    {/* Engraved number - large scale, low opacity */}
                    <span 
                      className={`absolute top-6 right-8 text-[8rem] lg:text-[12rem] font-heading leading-none transition-all duration-500 ${
                        activePrinciple === index ? "text-[#C6A46A]/20" : "text-[#0E0E0E]/[0.04]"
                      }`}
                      style={{
                        fontWeight: 200,
                        letterSpacing: "-0.05em"
                      }}
                    >
                      {principle.num}
                    </span>

                    {/* Content - slides up on hover */}
                    <div className="relative z-10 max-w-md">
                      <h3 
                        className={`text-2xl md:text-3xl font-heading mb-4 transition-all duration-500 ${
                          activePrinciple === index 
                            ? "text-[#C6A46A] transform -translate-y-1" 
                            : "text-[#0E0E0E]"
                        }`}
                      >
                        {principle.title}
                      </h3>
                      <p 
                        className={`text-sm leading-relaxed transition-all duration-500 overflow-hidden ${
                          activePrinciple === index 
                            ? "max-h-20 opacity-100 text-[#0E0E0E]/70" 
                            : "max-h-0 opacity-0"
                        }`}
                      >
                        {principle.desc}
                      </p>
                    </div>

                    {/* Hover indicator */}
                    <div 
                      className={`absolute bottom-6 right-8 flex items-center gap-2 text-[10px] tracking-wider transition-all duration-500 ${
                        activePrinciple === index 
                          ? "opacity-100 translate-x-0" 
                          : "opacity-0 translate-x-4"
                      }`}
                    >
                      <span className="text-[#C6A46A]">EXPLORE</span>
                      <ArrowRight className="w-3 h-3 text-[#C6A46A]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: DESIGN DNA - COMPACT ===== */}
      <section className="relative py-20 lg:py-28 bg-[#0E0E0E] overflow-hidden">
        {/* Subtle divider */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-gradient-to-b from-transparent via-[#C6A46A]/20 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Blueprint panel */}
            <div 
              className="relative aspect-[4/3] group"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? "translateX(0)" : "translateX(-30px)",
                transition: "all 0.8s ease-out"
              }}
            >
              {/* Blueprint SVG */}
              <svg viewBox="0 0 400 300" className="w-full h-full bg-[#0E0E0E]/50 border border-ivory/5">
                <defs>
                  <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--ivory) / 0.05)" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
                
                {/* Floor plan lines */}
                <g stroke="hsl(var(--ivory))" strokeWidth="0.5" fill="none" opacity="0.3">
                  <rect x="50" y="40" width="300" height="220" />
                  <line x1="50" y1="120" x2="200" y2="120" />
                  <line x1="200" y1="40" x2="200" y2="160" />
                  <line x1="200" y1="200" x2="350" y2="200" />
                  <line x1="260" y1="120" x2="260" y2="260" />
                  <rect x="150" y="120" width="70" height="70" strokeDasharray="4 2" />
                </g>

                {/* Annotation highlights */}
                {blueprintAnnotations.map((anno) => (
                  <g key={anno.id}>
                    <circle 
                      cx={anno.x * 4} 
                      cy={anno.y * 3} 
                      r="14"
                      fill={activeBlueprint === anno.id ? "rgba(198,164,106,0.15)" : "transparent"}
                      stroke={activeBlueprint === anno.id ? "#C6A46A" : "transparent"}
                      strokeWidth="1"
                      style={{ transition: "all 0.5s ease-out" }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Right: Annotations */}
            <div 
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? "translateX(0)" : "translateX(30px)",
                transition: "all 0.8s ease-out 0.2s"
              }}
            >
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono">
                DESIGN DNA
              </span>
              
              <h2 className="text-2xl md:text-3xl font-heading text-ivory leading-tight mt-4 mb-8">
                Good architecture is invisible engineering — disguised as <em className="italic text-[#C6A46A]">ease</em>.
              </h2>

              <div className="space-y-1">
                {blueprintAnnotations.map((anno, index) => (
                  <button
                    key={anno.id}
                    className={`group w-full text-left flex items-center gap-4 py-3 border-b transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "border-[#C6A46A]/40" 
                        : "border-ivory/5 hover:border-ivory/20"
                    }`}
                    onMouseEnter={() => setActiveBlueprint(anno.id)}
                    onMouseLeave={() => setActiveBlueprint(null)}
                  >
                    <span className={`w-5 h-5 rounded-full border flex items-center justify-center text-[8px] font-mono transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "border-[#C6A46A] text-[#C6A46A]" 
                        : "border-ivory/20 text-ivory/30"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-sm tracking-wide transition-colors duration-300 ${
                      activeBlueprint === anno.id ? "text-[#C6A46A]" : "text-ivory/50"
                    }`}>
                      {anno.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Breathing animation keyframes */}
      <style>{`
        @keyframes breathe {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.08; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Architecture;
