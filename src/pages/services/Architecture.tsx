import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Compass, Lightbulb, Ruler, Eye, Wind, Layers, Move, Box } from "lucide-react";
import architectureHero from "@/assets/architecture-hero-epic.jpg";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const principles = [
    {
      title: "Function Becomes Form",
      desc: "We design from how life moves, not how trends look. Every space tells a story of purpose.",
      num: "01",
      icon: Compass
    },
    {
      title: "Light Is A Material",
      desc: "Every opening is shaped to invite silence, warmth, and the passage of time.",
      num: "02",
      icon: Lightbulb
    },
    {
      title: "Details Carry Weight",
      desc: "Precision is not decorative. It is the foundation of lasting beauty.",
      num: "03",
      icon: Ruler
    }
  ];

  const blueprintAnnotations = [
    { id: "entry", label: "Entry Sequence", x: 15, y: 30, icon: Move },
    { id: "courtyard", label: "Courtyard / Void", x: 50, y: 45, icon: Box },
    { id: "stair", label: "Stair as Sculpture", x: 75, y: 25, icon: Layers },
    { id: "sightlines", label: "Sightlines", x: 35, y: 70, icon: Eye },
    { id: "ventilation", label: "Ventilation Logic", x: 65, y: 75, icon: Wind }
  ];

  const faqs = [
    { q: "What is your typical timeline?", a: "Most residential projects take 8-16 weeks for design, depending on complexity. We believe in thorough exploration over rushed decisions." },
    { q: "Do you do turnkey?", a: "We focus on design and documentation. For construction, we partner with trusted contractors or work with your chosen builder." },
    { q: "How do you charge?", a: "We work on a phased fee structure based on project scope. An initial consultation helps us provide a detailed proposal." },
    { q: "Can you work with my contractor?", a: "Absolutely. We're experienced in coordinating with external teams and ensuring our design intent is executed precisely." },
    { q: "How many concepts do you provide?", a: "We typically present 2-3 distinct directions, then refine the chosen approach through iterations." },
    { q: "What do you need from me to start?", a: "Site survey, plot documents, a brief conversation about your vision, and trust in the process." }
  ];

  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION - NEXT LEVEL CRAZY ===== */}
      <section ref={heroRef} className="relative min-h-[120vh] flex items-center overflow-hidden">
        {/* Dynamic cursor glow */}
        <div 
          className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-50 opacity-20 mix-blend-screen"
          style={{
            background: "radial-gradient(circle, rgba(198,164,106,0.4) 0%, transparent 70%)",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "left 0.3s ease-out, top 0.3s ease-out"
          }}
        />

        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C6A46A]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>

        {/* Hero image with parallax */}
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <img 
            src={architectureHero}
            alt="Architectural masterpiece"
            className="w-full h-[130%] object-cover"
            style={{
              filter: `brightness(0.6) saturate(1.2)`,
              animation: "slowZoom 25s ease-in-out infinite alternate"
            }}
            loading="eager"
          />
        </div>

        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />
        
        {/* Animated geometric lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="50%" stopColor="#C6A46A" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
          {/* Horizontal animated lines */}
          <line 
            x1="0" y1="30%" x2="100%" y2="30%" 
            stroke="url(#lineGradient)" 
            strokeWidth="0.5"
            className="opacity-20"
            style={{ animation: "expandLine 4s ease-in-out infinite" }}
          />
          <line 
            x1="0" y1="70%" x2="100%" y2="70%" 
            stroke="url(#lineGradient)" 
            strokeWidth="0.5"
            className="opacity-20"
            style={{ animation: "expandLine 4s ease-in-out infinite 1s" }}
          />
          {/* Vertical animated lines */}
          <line 
            x1="20%" y1="0" x2="20%" y2="100%" 
            stroke="#C6A46A" 
            strokeWidth="0.5"
            className="opacity-10"
            style={{ animation: "expandLineVertical 5s ease-in-out infinite" }}
          />
          <line 
            x1="80%" y1="0" x2="80%" y2="100%" 
            stroke="#C6A46A" 
            strokeWidth="0.5"
            className="opacity-10"
            style={{ animation: "expandLineVertical 5s ease-in-out infinite 1.5s" }}
          />
        </svg>

        {/* Floating architectural shapes */}
        <div className="absolute top-20 right-20 w-40 h-40 border border-[#C6A46A]/20 rotate-45" 
          style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
        <div className="absolute bottom-40 left-20 w-24 h-24 border-2 border-[#C6A46A]/10" 
          style={{ animation: "spinSlow 30s linear infinite" }} />
        <div className="absolute top-1/2 right-1/4 w-32 h-32 border border-[#C6A46A]/15 rounded-full" 
          style={{ animation: "pulseGlow 4s ease-in-out infinite" }} />

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28">
          {/* Breadcrumb with animation */}
          <nav 
            className="flex items-center gap-2 text-[10px] tracking-[0.25em] text-ivory/40 mb-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-[#C6A46A] transition-colors duration-300">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C6A46A]">ARCHITECTURE</span>
          </nav>

          <div className="relative max-w-7xl grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Typography */}
            <div>
              {/* Animated accent line */}
              <div 
                className="w-20 h-[2px] bg-gradient-to-r from-[#C6A46A] to-transparent mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "scaleX(1)" : "scaleX(0)",
                  transformOrigin: "left",
                  transition: "all 1s ease-out 0.5s"
                }}
              />

              {/* Main headline with stagger reveal */}
              <h1 className="relative">
                {["We", "Design", "Spaces", "That", "Breathe"].map((word, i) => (
                  <span key={i} className="block overflow-hidden">
                    <span 
                      className={`block ${i === 2 || i === 4 ? "text-[#C6A46A] italic" : "text-ivory"} ${
                        i < 3 ? "text-5xl md:text-7xl lg:text-8xl" : "text-4xl md:text-5xl lg:text-6xl"
                      } font-heading leading-[0.9] tracking-tight`}
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? "translateY(0) rotate(0deg)" : "translateY(120%) rotate(3deg)",
                        transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + i * 0.12}s`
                      }}
                    >
                      {word}
                    </span>
                  </span>
                ))}
              </h1>

              {/* Subtext */}
              <p 
                className="text-lg md:text-xl text-ivory/50 leading-relaxed max-w-md mt-10"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: "all 1s ease-out 1.2s"
                }}
              >
                Architecture that whispers rather than shouts. Where every line serves a purpose, 
                and every space tells your story.
              </p>

              {/* CTA with hover effect */}
              <div 
                className="mt-12 flex items-center gap-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: "all 1s ease-out 1.4s"
                }}
              >
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center gap-4 bg-[#C6A46A] text-[#0A0A0A] px-10 py-5 text-sm tracking-widest font-semibold overflow-hidden"
                >
                  <span className="relative z-10">START YOUR VISION</span>
                  <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-ivory translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
                
                <div className="hidden md:flex items-center gap-3 text-ivory/40 text-sm">
                  <div className="w-12 h-[1px] bg-ivory/20" />
                  <span>Award-winning designs</span>
                </div>
              </div>
            </div>

            {/* Right: Floating stats/features */}
            <div 
              className="relative hidden lg:block"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateX(0)" : "translateX(80px)",
                transition: "all 1.2s ease-out 0.8s"
              }}
            >
              {/* Floating cards with stagger */}
              <div className="space-y-6">
                {[
                  { num: "150+", label: "Projects Delivered", delay: 0 },
                  { num: "25+", label: "Design Awards", delay: 0.2 },
                  { num: "100%", label: "Client Satisfaction", delay: 0.4 }
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="relative bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#C6A46A]/20 p-6 overflow-hidden group hover:border-[#C6A46A]/50 transition-all duration-500"
                    style={{
                      animation: `floatSlow ${6 + i * 2}s ease-in-out infinite`,
                      animationDelay: `${stat.delay}s`,
                      marginLeft: `${i * 30}px`
                    }}
                  >
                    {/* Shine sweep on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A46A]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    <span className="text-4xl font-heading text-[#C6A46A]">{stat.num}</span>
                    <span className="block text-sm text-ivory/50 mt-2">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Animated scroll indicator */}
          <div 
            className="absolute bottom-16 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 2s"
            }}
          >
            <span className="text-[9px] tracking-[0.4em] text-ivory/30">EXPLORE</span>
            <div className="relative w-6 h-12 border border-[#C6A46A]/30 rounded-full flex justify-center">
              <div 
                className="w-1.5 h-1.5 bg-[#C6A46A] rounded-full mt-2"
                style={{ animation: "scrollLine 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE PRINCIPLES - CRAZY ANIMATIONS ===== */}
      <section className="relative py-32 bg-ivory overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 100px, #C6A46A 100px, #C6A46A 101px),
                               repeating-linear-gradient(90deg, transparent, transparent 100px, #C6A46A 100px, #C6A46A 101px)`,
              animation: "gridReveal 20s linear infinite"
            }}
          />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-[#C6A46A]/5 blur-3xl" 
          style={{ animation: "floatSlow 12s ease-in-out infinite" }} />
        <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-[#C6A46A]/5 blur-3xl" 
          style={{ animation: "floatSlow 15s ease-in-out infinite reverse" }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section header */}
          <div 
            className="text-center mb-20"
            style={{
              opacity: scrollY > 600 ? 1 : 0,
              transform: scrollY > 600 ? "translateY(0)" : "translateY(50px)",
              transition: "all 1s ease-out"
            }}
          >
            <span className="inline-block px-6 py-2 border border-[#C6A46A]/30 text-[10px] tracking-[0.3em] text-[#C6A46A] mb-6">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-[#1A1A1A]">
              Core <span className="italic text-[#C6A46A]">Principles</span>
            </h2>
          </div>

          {/* Principles cards with crazy hover effects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const isVisible = scrollY > 700 + index * 100;
              
              return (
                <div 
                  key={index}
                  className="group relative cursor-pointer"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0) rotate(0deg)" : "translateY(60px) rotate(2deg)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                  }}
                  onMouseEnter={() => setActivePrinciple(index)}
                  onMouseLeave={() => setActivePrinciple(null)}
                >
                  <div 
                    className={`relative p-10 h-full border-2 transition-all duration-700 overflow-hidden ${
                      activePrinciple === index 
                        ? "bg-[#1A1A1A] border-[#C6A46A] scale-105 shadow-2xl shadow-[#C6A46A]/20" 
                        : "bg-white border-[#E5E0D8] hover:border-[#C6A46A]/50"
                    }`}
                  >
                    {/* Animated corner accents */}
                    <div className={`absolute top-0 left-0 w-12 h-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] w-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute top-0 left-0 h-12 w-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] h-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute bottom-0 right-0 w-12 h-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] w-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute bottom-0 right-0 h-12 w-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] h-20" : "bg-[#C6A46A]/30"
                    }`} />
                    
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Icon */}
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-all duration-500 ${
                      activePrinciple === index 
                        ? "bg-[#C6A46A] text-[#0A0A0A]" 
                        : "bg-[#C6A46A]/10 text-[#C6A46A]"
                    }`}>
                      <Icon className="w-7 h-7" />
                    </div>

                    {/* Number */}
                    <span 
                      className={`absolute top-8 right-8 text-6xl font-heading transition-all duration-500 ${
                        activePrinciple === index ? "text-[#C6A46A]/30" : "text-[#C6A46A]/10"
                      }`}
                    >
                      {principle.num}
                    </span>

                    {/* Title */}
                    <h3 
                      className={`text-2xl font-heading mb-4 transition-all duration-500 ${
                        activePrinciple === index ? "text-ivory" : "text-[#1A1A1A]"
                      }`}
                    >
                      {principle.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className={`text-base leading-relaxed transition-all duration-500 ${
                        activePrinciple === index ? "text-ivory/70" : "text-[#5A544A]"
                      }`}
                    >
                      {principle.desc}
                    </p>

                    {/* Hover arrow */}
                    <div className={`absolute bottom-8 right-8 transition-all duration-500 ${
                      activePrinciple === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}>
                      <ArrowRight className="w-6 h-6 text-[#C6A46A]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DESIGN DNA - INTERACTIVE BLUEPRINT ===== */}
      <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
        {/* Animated grid background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full">
            <defs>
              <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C6A46A" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />
          </svg>
        </div>

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#C6A46A]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Interactive Blueprint */}
            <div 
              className="relative"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: scrollY > 1200 ? "translateX(0) rotate(0deg)" : "translateX(-60px) rotate(-2deg)",
                transition: "all 1s ease-out"
              }}
            >
              <div className="relative aspect-[4/3] bg-[#0E0E0E]/80 border border-[#C6A46A]/20 p-8 overflow-hidden group">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-[#C6A46A]/40" />
                <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-[#C6A46A]/40" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-[#C6A46A]/40" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-[#C6A46A]/40" />

                {/* Blueprint SVG */}
                <svg viewBox="0 0 400 300" className="w-full h-full">
                  <defs>
                    <pattern id="blueprintGridNew" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#C6A46A" strokeWidth="0.2" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#blueprintGridNew)" />
                  
                  {/* Animated floor plan lines */}
                  <g stroke="#C6A46A" strokeWidth="1" fill="none" opacity="0.6">
                    <rect x="50" y="40" width="300" height="220" style={{ animation: "drawLine 3s ease-out forwards" }} />
                    <line x1="50" y1="120" x2="200" y2="120" strokeDasharray="150" style={{ animation: "drawDash 2s ease-out 0.5s forwards" }} />
                    <line x1="200" y1="40" x2="200" y2="160" strokeDasharray="120" style={{ animation: "drawDash 2s ease-out 0.8s forwards" }} />
                    <line x1="200" y1="200" x2="350" y2="200" strokeDasharray="150" style={{ animation: "drawDash 2s ease-out 1.1s forwards" }} />
                    <line x1="260" y1="120" x2="260" y2="260" strokeDasharray="140" style={{ animation: "drawDash 2s ease-out 1.4s forwards" }} />
                    <rect x="150" y="120" width="70" height="70" strokeDasharray="4 2" opacity="0.4" />
                  </g>

                  {/* Interactive annotation points */}
                  {blueprintAnnotations.map((anno) => (
                    <g key={anno.id}>
                      {/* Pulse ring */}
                      <circle 
                        cx={anno.x * 4} 
                        cy={anno.y * 3} 
                        r="20"
                        fill="transparent"
                        stroke={activeBlueprint === anno.id ? "#C6A46A" : "transparent"}
                        strokeWidth="1"
                        style={{ animation: activeBlueprint === anno.id ? "pulseGlow 2s ease-in-out infinite" : "none" }}
                      />
                      <circle 
                        cx={anno.x * 4} 
                        cy={anno.y * 3} 
                        r={activeBlueprint === anno.id ? "12" : "8"}
                        fill={activeBlueprint === anno.id ? "#C6A46A" : "rgba(198,164,106,0.3)"}
                        style={{ transition: "all 0.4s ease-out" }}
                      />
                      <circle 
                        cx={anno.x * 4} 
                        cy={anno.y * 3} 
                        r="4"
                        fill={activeBlueprint === anno.id ? "#0A0A0A" : "#C6A46A"}
                        style={{ transition: "all 0.4s ease-out" }}
                      />
                    </g>
                  ))}
                </svg>

                {/* "Blueprint" label */}
                <div className="absolute bottom-4 left-4 text-[10px] tracking-[0.3em] text-[#C6A46A]/50 font-mono">
                  FLOOR PLAN — CONCEPT 01
                </div>
              </div>
            </div>

            {/* Right: Content & Annotations */}
            <div 
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: scrollY > 1200 ? "translateX(0)" : "translateX(60px)",
                transition: "all 1s ease-out 0.3s"
              }}
            >
              <span className="inline-block px-4 py-1.5 border border-[#C6A46A]/30 text-[10px] tracking-[0.3em] text-[#C6A46A] mb-6">
                DESIGN DNA
              </span>
              
              <h2 className="text-3xl md:text-5xl font-heading text-ivory leading-tight mb-8">
                Good architecture is invisible engineering — 
                <br />
                <span className="italic text-[#C6A46A]">disguised as ease</span>
              </h2>

              <p className="text-ivory/50 mb-10 leading-relaxed">
                Every element has purpose. We choreograph light, movement, and material 
                to create spaces that feel inevitable — as if they could exist no other way.
              </p>

              {/* Interactive annotation list */}
              <div className="space-y-3">
                {blueprintAnnotations.map((anno, index) => {
                  const Icon = anno.icon;
                  return (
                    <button
                      key={anno.id}
                      className={`group w-full text-left flex items-center gap-5 p-4 border transition-all duration-500 ${
                        activeBlueprint === anno.id 
                          ? "border-[#C6A46A] bg-[#C6A46A]/10" 
                          : "border-ivory/10 hover:border-[#C6A46A]/50 hover:bg-ivory/5"
                      }`}
                      onMouseEnter={() => setActiveBlueprint(anno.id)}
                      onMouseLeave={() => setActiveBlueprint(null)}
                      style={{
                        animation: `fadeInUpNew 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                        activeBlueprint === anno.id 
                          ? "bg-[#C6A46A] text-[#0A0A0A]" 
                          : "bg-ivory/5 text-[#C6A46A]"
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <span className={`text-sm tracking-wide transition-colors duration-300 ${
                          activeBlueprint === anno.id ? "text-[#C6A46A]" : "text-ivory/60"
                        }`}>
                          {anno.label}
                        </span>
                      </div>
                      <span className={`text-[10px] font-mono transition-all duration-300 ${
                        activeBlueprint === anno.id ? "text-[#C6A46A]" : "text-ivory/20"
                      }`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION - ANIMATED ===== */}
      <section className="relative py-32 bg-[#F8F6F3] overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#C6A46A]/5 to-transparent" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left: Header */}
            <div 
              className="lg:sticky lg:top-32 lg:h-fit"
              style={{
                opacity: scrollY > 1800 ? 1 : 0,
                transform: scrollY > 1800 ? "translateY(0)" : "translateY(50px)",
                transition: "all 1s ease-out"
              }}
            >
              <span className="inline-block px-4 py-1.5 bg-[#1A1A1A] text-[10px] tracking-[0.3em] text-[#C6A46A] mb-6">
                QUESTIONS
              </span>
              <h2 className="text-4xl md:text-6xl font-heading text-[#1A1A1A] mb-6">
                Common <span className="italic text-[#C6A46A]">Questions</span>
              </h2>
              <p className="text-[#5A544A] leading-relaxed mb-8">
                Architecture is a conversation. Here are answers to what clients ask most.
              </p>
              
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-3 text-[#1A1A1A] font-medium"
              >
                <span>Have another question?</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>

            {/* Right: FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => {
                const isVisible = scrollY > 1900 + index * 50;
                
                return (
                  <div 
                    key={index}
                    className="group"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? "translateX(0)" : "translateX(40px)",
                      transition: `all 0.6s ease-out ${index * 0.1}s`
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === index ? null : index)}
                      className={`w-full text-left p-6 border transition-all duration-500 ${
                        openFaq === index 
                          ? "bg-[#1A1A1A] border-[#C6A46A]" 
                          : "bg-white border-[#E5E0D8] hover:border-[#C6A46A]/50"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span className={`font-heading text-lg transition-colors duration-300 ${
                          openFaq === index ? "text-ivory" : "text-[#1A1A1A]"
                        }`}>
                          {faq.q}
                        </span>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                          openFaq === index 
                            ? "bg-[#C6A46A] rotate-180" 
                            : "bg-[#C6A46A]/10"
                        }`}>
                          <ChevronRight className={`w-4 h-4 rotate-90 transition-colors ${
                            openFaq === index ? "text-[#0A0A0A]" : "text-[#C6A46A]"
                          }`} />
                        </div>
                      </div>
                      
                      <div className={`overflow-hidden transition-all duration-500 ${
                        openFaq === index ? "max-h-40 mt-4 pt-4 border-t border-ivory/10" : "max-h-0"
                      }`}>
                        <p className="text-ivory/70 leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="relative py-32 bg-[#0A0A0A] overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute h-[1px] bg-gradient-to-r from-transparent via-[#C6A46A]/20 to-transparent w-full"
              style={{
                top: `${20 + i * 15}%`,
                animation: `expandLine ${3 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
          <div 
            style={{
              opacity: scrollY > 2400 ? 1 : 0,
              transform: scrollY > 2400 ? "scale(1)" : "scale(0.9)",
              transition: "all 1s ease-out"
            }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-8xl font-heading text-ivory mb-8">
              Ready to <span className="italic text-[#C6A46A]">Begin?</span>
            </h2>
            <p className="text-ivory/50 text-lg max-w-2xl mx-auto mb-12">
              Every great space starts with a conversation. Let's discuss your vision and 
              explore the possibilities together.
            </p>
            
            <Link 
              to="/contact"
              className="group inline-flex items-center gap-4 bg-[#C6A46A] text-[#0A0A0A] px-12 py-6 text-sm tracking-widest font-semibold hover:bg-ivory transition-colors duration-500"
            >
              SCHEDULE A CONSULTATION
              <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style>{`
        @keyframes drawLine {
          from { stroke-dashoffset: 1000; stroke-dasharray: 1000; }
          to { stroke-dashoffset: 0; stroke-dasharray: 1000; }
        }
        @keyframes drawDash {
          from { stroke-dashoffset: 150; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes expandLineVertical {
          0%, 100% { opacity: 0.05; transform: scaleY(0.5); }
          50% { opacity: 0.15; transform: scaleY(1); }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Architecture;
