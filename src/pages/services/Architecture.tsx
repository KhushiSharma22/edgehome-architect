import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, Compass, Lightbulb, Ruler, Eye, Wind, Layers, Move, Box, Sparkles, Zap, Target } from "lucide-react";
import architectureHero from "@/assets/architecture-hero-epic.jpg";
import architectureCase1 from "@/assets/architecture-case-1.jpg";
import architectureCase2 from "@/assets/architecture-case-2.jpg";
import architectureCase3 from "@/assets/architecture-case-3.jpg";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<string | null>(null);
  const [activeVision, setActiveVision] = useState(0);
  const [visionHover, setVisionHover] = useState<number | null>(null);
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

  const visionProjects = [
    { 
      title: "The Glass Pavilion",
      location: "Gurgaon, Haryana",
      year: "2024",
      area: "8,500 sq.ft",
      image: architectureCase1,
      description: "Where indoor and outdoor dissolve into one continuous experience.",
      accent: "Transparency",
      icon: Sparkles
    },
    { 
      title: "Courtyard Residence",
      location: "South Delhi",
      year: "2023",
      area: "6,200 sq.ft",
      image: architectureCase2,
      description: "Ancient wisdom meets contemporary precision in perfect harmony.",
      accent: "Heritage",
      icon: Target
    },
    { 
      title: "Sky Villa",
      location: "Noida, UP",
      year: "2024",
      area: "4,800 sq.ft",
      image: architectureCase3,
      description: "Elevated living where every angle captures the horizon.",
      accent: "Elevation",
      icon: Zap
    }
  ];

  const parallaxOffset = scrollY * 0.3;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION - NEXT LEVEL CRAZY ===== */}
      <section ref={heroRef} className="relative min-h-screen lg:min-h-[120vh] flex items-center overflow-hidden">
        {/* Dynamic cursor glow - hidden on touch devices */}
        <div 
          className="fixed w-[400px] lg:w-[600px] h-[400px] lg:h-[600px] rounded-full pointer-events-none z-50 opacity-20 mix-blend-screen hidden lg:block"
          style={{
            background: "radial-gradient(circle, rgba(198,164,106,0.4) 0%, transparent 70%)",
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "left 0.3s ease-out, top 0.3s ease-out"
          }}
        />

        {/* Animated background particles - reduced on mobile */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#C6A46A]/30 rounded-full hidden sm:block"
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
        
        {/* Animated geometric lines - hidden on mobile */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block">
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

        {/* Floating architectural shapes - hidden on mobile */}
        <div className="absolute top-20 right-10 md:right-20 w-20 md:w-40 h-20 md:h-40 border border-[#C6A46A]/20 rotate-45 hidden sm:block" 
          style={{ animation: "floatSlow 10s ease-in-out infinite" }} />
        <div className="absolute bottom-40 left-10 md:left-20 w-16 md:w-24 h-16 md:h-24 border-2 border-[#C6A46A]/10 hidden md:block" 
          style={{ animation: "spinSlow 30s linear infinite" }} />
        <div className="absolute top-1/2 right-1/4 w-20 md:w-32 h-20 md:h-32 border border-[#C6A46A]/15 rounded-full hidden lg:block" 
          style={{ animation: "pulseGlow 4s ease-in-out infinite" }} />

        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10 pt-24 sm:pt-28">
          {/* Breadcrumb with animation */}
          <nav 
            className="flex items-center gap-1.5 sm:gap-2 text-[9px] sm:text-[10px] tracking-[0.15em] sm:tracking-[0.25em] text-ivory/40 mb-8 sm:mb-12 lg:mb-16 flex-wrap"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-[#C6A46A] transition-colors duration-300">HOME</Link>
            <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
            <span className="text-[#C6A46A]">ARCHITECTURE</span>
          </nav>

          <div className="relative max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Typography */}
            <div>
              {/* Animated accent line */}
              <div 
                className="w-12 sm:w-16 lg:w-20 h-[2px] bg-gradient-to-r from-[#C6A46A] to-transparent mb-4 sm:mb-6 lg:mb-8"
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
                        i < 3 ? "text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl" : "text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
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
                className="text-base sm:text-lg md:text-xl text-ivory/50 leading-relaxed max-w-md mt-6 sm:mt-8 lg:mt-10"
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
                className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: "all 1s ease-out 1.4s"
                }}
              >
                <Link 
                  to="/contact"
                  className="group relative inline-flex items-center gap-3 sm:gap-4 bg-[#C6A46A] text-[#0A0A0A] px-6 sm:px-8 lg:px-10 py-3.5 sm:py-4 lg:py-5 text-xs sm:text-sm tracking-widest font-semibold overflow-hidden"
                >
                  <span className="relative z-10">START YOUR VISION</span>
                  <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-2 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-ivory translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
                </Link>
                
                <div className="hidden md:flex items-center gap-3 text-ivory/40 text-sm">
                  <div className="w-8 lg:w-12 h-[1px] bg-ivory/20" />
                  <span>Award-winning designs</span>
                </div>
              </div>
            </div>

            {/* Right: Floating stats/features - mobile version */}
            <div 
              className="lg:hidden grid grid-cols-2 gap-3 mt-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1s ease-out 1.6s"
              }}
            >
              {[
                { num: "150+", label: "Projects" },
                { num: "100%", label: "Satisfaction" }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#C6A46A]/20 p-3 sm:p-4 text-center"
                >
                  <span className="text-xl sm:text-2xl font-heading text-[#C6A46A]">{stat.num}</span>
                  <span className="block text-[10px] sm:text-xs text-ivory/50 mt-1">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Right: Floating stats/features - Desktop */}
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
                  { num: "100%", label: "Client Satisfaction", delay: 0.2 }
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

          {/* Animated scroll indicator - hidden on mobile */}
          <div 
            className="absolute bottom-8 sm:bottom-16 left-1/2 -translate-x-1/2 flex-col items-center gap-3 sm:gap-4 hidden sm:flex"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 2s"
            }}
          >
            <span className="text-[8px] sm:text-[9px] tracking-[0.3em] sm:tracking-[0.4em] text-ivory/30">EXPLORE</span>
            <div className="relative w-5 sm:w-6 h-10 sm:h-12 border border-[#C6A46A]/30 rounded-full flex justify-center">
              <div 
                className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-[#C6A46A] rounded-full mt-2"
                style={{ animation: "scrollLine 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CORE PRINCIPLES - CRAZY ANIMATIONS ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-ivory overflow-hidden">
        {/* Animated background pattern - hidden on mobile */}
        <div className="absolute inset-0 opacity-5 hidden sm:block">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 100px, #C6A46A 100px, #C6A46A 101px),
                               repeating-linear-gradient(90deg, transparent, transparent 100px, #C6A46A 100px, #C6A46A 101px)`,
              animation: "gridReveal 20s linear infinite"
            }}
          />
        </div>

        {/* Floating orbs - responsive sizes */}
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 rounded-full bg-[#C6A46A]/5 blur-2xl sm:blur-3xl" 
          style={{ animation: "floatSlow 12s ease-in-out infinite" }} />
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-[#C6A46A]/5 blur-2xl sm:blur-3xl hidden sm:block" 
          style={{ animation: "floatSlow 15s ease-in-out infinite reverse" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section header */}
          <div 
            className="text-center mb-10 sm:mb-14 lg:mb-20"
            style={{
              opacity: scrollY > 600 ? 1 : 0,
              transform: scrollY > 600 ? "translateY(0)" : "translateY(50px)",
              transition: "all 1s ease-out"
            }}
          >
            <span className="inline-block px-4 sm:px-6 py-1.5 sm:py-2 border border-[#C6A46A]/30 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-[#C6A46A] mb-4 sm:mb-6">
              OUR PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-[#1A1A1A]">
              Core <span className="italic text-[#C6A46A]">Principles</span>
            </h2>
          </div>

          {/* Principles cards with crazy hover effects */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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
                    className={`relative p-6 sm:p-8 lg:p-10 h-full border-2 transition-all duration-700 overflow-hidden ${
                      activePrinciple === index 
                        ? "bg-[#1A1A1A] border-[#C6A46A] scale-[1.02] sm:scale-105 shadow-2xl shadow-[#C6A46A]/20" 
                        : "bg-white border-[#E5E0D8] hover:border-[#C6A46A]/50"
                    }`}
                  >
                    {/* Animated corner accents */}
                    <div className={`absolute top-0 left-0 w-8 sm:w-12 h-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] w-12 sm:w-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute top-0 left-0 h-8 sm:h-12 w-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] h-12 sm:h-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute bottom-0 right-0 w-8 sm:w-12 h-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] w-12 sm:w-20" : "bg-[#C6A46A]/30"
                    }`} />
                    <div className={`absolute bottom-0 right-0 h-8 sm:h-12 w-[2px] transition-all duration-500 ${
                      activePrinciple === index ? "bg-[#C6A46A] h-12 sm:h-20" : "bg-[#C6A46A]/30"
                    }`} />
                    
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                    
                    {/* Icon */}
                    <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 transition-all duration-500 ${
                      activePrinciple === index 
                        ? "bg-[#C6A46A] text-[#0A0A0A]" 
                        : "bg-[#C6A46A]/10 text-[#C6A46A]"
                    }`}>
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7" />
                    </div>

                    {/* Number */}
                    <span 
                      className={`absolute top-4 sm:top-6 lg:top-8 right-4 sm:right-6 lg:right-8 text-4xl sm:text-5xl lg:text-6xl font-heading transition-all duration-500 ${
                        activePrinciple === index ? "text-[#C6A46A]/30" : "text-[#C6A46A]/10"
                      }`}
                    >
                      {principle.num}
                    </span>

                    {/* Title */}
                    <h3 
                      className={`text-lg sm:text-xl lg:text-2xl font-heading mb-2 sm:mb-4 transition-all duration-500 ${
                        activePrinciple === index ? "text-ivory" : "text-[#1A1A1A]"
                      }`}
                    >
                      {principle.title}
                    </h3>
                    
                    {/* Description */}
                    <p 
                      className={`text-sm sm:text-base leading-relaxed transition-all duration-500 ${
                        activePrinciple === index ? "text-ivory/70" : "text-[#5A544A]"
                      }`}
                    >
                      {principle.desc}
                    </p>

                    {/* Hover arrow */}
                    <div className={`absolute bottom-6 sm:bottom-8 right-6 sm:right-8 transition-all duration-500 ${
                      activePrinciple === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                    }`}>
                      <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-[#C6A46A]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== DESIGN DNA - INTERACTIVE BLUEPRINT ===== */}
      <section className="relative py-16 sm:py-24 lg:py-32 bg-[#0A0A0A] overflow-hidden">
        {/* Animated grid background - hidden on mobile */}
        <div className="absolute inset-0 opacity-10 hidden sm:block">
          <svg className="w-full h-full">
            <defs>
              <pattern id="archGrid" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#C6A46A" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />
          </svg>
        </div>

        {/* Floating particles - reduced on mobile */}
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#C6A46A]/20 rounded-full hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floatParticle ${10 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left: Interactive Blueprint */}
            <div 
              className="relative order-2 lg:order-1"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: scrollY > 1200 ? "translateX(0) rotate(0deg)" : "translateX(-60px) rotate(-2deg)",
                transition: "all 1s ease-out"
              }}
            >
              <div className="relative aspect-[4/3] bg-[#0E0E0E]/80 border border-[#C6A46A]/20 p-4 sm:p-6 lg:p-8 overflow-hidden group">
                {/* Corner decorations */}
                <div className="absolute top-0 left-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-l-2 border-t-2 border-[#C6A46A]/40" />
                <div className="absolute top-0 right-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-r-2 border-t-2 border-[#C6A46A]/40" />
                <div className="absolute bottom-0 left-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-l-2 border-b-2 border-[#C6A46A]/40" />
                <div className="absolute bottom-0 right-0 w-8 sm:w-12 lg:w-16 h-8 sm:h-12 lg:h-16 border-r-2 border-b-2 border-[#C6A46A]/40" />

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
              className="order-1 lg:order-2"
              style={{
                opacity: scrollY > 1200 ? 1 : 0,
                transform: scrollY > 1200 ? "translateX(0)" : "translateX(60px)",
                transition: "all 1s ease-out 0.3s"
              }}
            >
              <span className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 border border-[#C6A46A]/30 text-[9px] sm:text-[10px] tracking-[0.2em] sm:tracking-[0.3em] text-[#C6A46A] mb-4 sm:mb-6">
                DESIGN DNA
              </span>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-ivory leading-tight mb-4 sm:mb-6 lg:mb-8">
                Good architecture is invisible engineering — 
                <br className="hidden sm:block" />
                <span className="italic text-[#C6A46A]">disguised as ease</span>
              </h2>

              <p className="text-ivory/50 mb-6 sm:mb-8 lg:mb-10 leading-relaxed text-sm sm:text-base">
                Every element has purpose. We choreograph light, movement, and material 
                to create spaces that feel inevitable — as if they could exist no other way.
              </p>

              {/* Interactive annotation list */}
              <div className="space-y-2 sm:space-y-3">
                {blueprintAnnotations.map((anno, index) => {
                  const Icon = anno.icon;
                  return (
                    <button
                      key={anno.id}
                      className={`group w-full text-left flex items-center gap-3 sm:gap-5 p-3 sm:p-4 border transition-all duration-500 ${
                        activeBlueprint === anno.id 
                          ? "border-[#C6A46A] bg-[#C6A46A]/10" 
                          : "border-ivory/10 hover:border-[#C6A46A]/50 hover:bg-ivory/5"
                      }`}
                      onMouseEnter={() => setActiveBlueprint(anno.id)}
                      onMouseLeave={() => setActiveBlueprint(null)}
                      onClick={() => setActiveBlueprint(activeBlueprint === anno.id ? null : anno.id)}
                      style={{
                        animation: `fadeInUpNew 0.6s ease-out ${index * 0.1}s both`
                      }}
                    >
                      <div className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all duration-400 ${
                        activeBlueprint === anno.id 
                          ? "bg-[#C6A46A] text-[#0A0A0A]" 
                          : "bg-ivory/5 text-[#C6A46A]"
                      }`}>
                        <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                      <div className="flex-1">
                        <span className={`text-xs sm:text-sm tracking-wide transition-colors duration-300 ${
                          activeBlueprint === anno.id ? "text-[#C6A46A]" : "text-ivory/60"
                        }`}>
                          {anno.label}
                        </span>
                      </div>
                      <span className={`text-[9px] sm:text-[10px] font-mono transition-all duration-300 ${
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

      {/* ===== ARCHITECTURAL VISION - IMMERSIVE 3D GALLERY ===== */}
      <section className="relative py-20 sm:py-32 lg:py-40 bg-[#0A0A0A] overflow-hidden">
        {/* Animated mesh gradient background */}
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `
                radial-gradient(ellipse 80% 50% at 20% 40%, rgba(198,164,106,0.15) 0%, transparent 50%),
                radial-gradient(ellipse 60% 40% at 80% 60%, rgba(198,164,106,0.1) 0%, transparent 50%)
              `,
              animation: "meshFloat 15s ease-in-out infinite"
            }}
          />
          {/* Animated grid lines */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(90deg, #C6A46A 1px, transparent 1px),
                linear-gradient(#C6A46A 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
              animation: "gridPulse 8s ease-in-out infinite"
            }}
          />
        </div>

        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#C6A46A]/5 blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-[#C6A46A]/8 blur-[80px]" style={{ animation: "floatSlow 10s ease-in-out infinite reverse" }} />

        <div className="container mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div 
            className="text-center mb-16 sm:mb-20 lg:mb-28"
            style={{
              opacity: scrollY > 1800 ? 1 : 0,
              transform: scrollY > 1800 ? "translateY(0)" : "translateY(60px)",
              transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C6A46A]" />
              <span className="text-[10px] sm:text-xs tracking-[0.4em] text-[#C6A46A] font-medium">SIGNATURE WORKS</span>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C6A46A]" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory leading-[0.9]">
              Architectural
              <br />
              <span className="italic text-[#C6A46A] relative">
                Vision
                <svg className="absolute -bottom-2 left-0 w-full h-3 overflow-visible" viewBox="0 0 200 12">
                  <path 
                    d="M0,8 Q50,0 100,8 T200,8" 
                    fill="none" 
                    stroke="#C6A46A" 
                    strokeWidth="1.5"
                    strokeDasharray="200"
                    style={{ animation: "drawUnderline 2s ease-out forwards", animationDelay: "0.5s" }}
                  />
                </svg>
              </span>
            </h2>
          </div>

          {/* 3D Perspective Gallery */}
          <div className="relative">
            {/* Main showcase - large featured card */}
            <div 
              className="relative mb-8 lg:mb-0 lg:absolute lg:left-0 lg:top-0 lg:w-[60%] lg:h-[600px] z-20"
              style={{
                opacity: scrollY > 1900 ? 1 : 0,
                transform: scrollY > 1900 
                  ? "perspective(1000px) rotateY(0deg) translateZ(0)" 
                  : "perspective(1000px) rotateY(-15deg) translateZ(-100px)",
                transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div 
                className="group relative h-[350px] sm:h-[450px] lg:h-full overflow-hidden cursor-pointer"
                onMouseEnter={() => setVisionHover(activeVision)}
                onMouseLeave={() => setVisionHover(null)}
              >
                {/* Image with zoom effect */}
                <div className="absolute inset-0 overflow-hidden">
                  <img 
                    src={visionProjects[activeVision].image}
                    alt={visionProjects[activeVision].title}
                    className="w-full h-full object-cover transition-all duration-[2s] ease-out"
                    style={{
                      transform: visionHover === activeVision ? "scale(1.15)" : "scale(1.05)",
                      filter: visionHover === activeVision ? "brightness(0.7)" : "brightness(0.5)"
                    }}
                  />
                </div>

                {/* Animated border frame */}
                <div className="absolute inset-4 sm:inset-6 lg:inset-8 border border-[#C6A46A]/30 pointer-events-none">
                  <div 
                    className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C6A46A] transition-all duration-500"
                    style={{ transform: visionHover === activeVision ? "translate(-4px, -4px)" : "translate(0, 0)" }}
                  />
                  <div 
                    className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C6A46A] transition-all duration-500"
                    style={{ transform: visionHover === activeVision ? "translate(4px, -4px)" : "translate(0, 0)" }}
                  />
                  <div 
                    className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C6A46A] transition-all duration-500"
                    style={{ transform: visionHover === activeVision ? "translate(-4px, 4px)" : "translate(0, 0)" }}
                  />
                  <div 
                    className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C6A46A] transition-all duration-500"
                    style={{ transform: visionHover === activeVision ? "translate(4px, 4px)" : "translate(0, 0)" }}
                  />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 lg:p-12">
                  {/* Accent badge */}
                  <div 
                    className="inline-flex items-center gap-2 w-fit mb-4 px-3 py-1.5 bg-[#C6A46A] text-[#0A0A0A] text-[10px] sm:text-xs tracking-wider font-semibold"
                    style={{
                      opacity: visionHover === activeVision ? 1 : 0.8,
                      transform: visionHover === activeVision ? "translateY(0)" : "translateY(10px)",
                      transition: "all 0.5s ease-out"
                    }}
                  >
                    {(() => { const Icon = visionProjects[activeVision].icon; return <Icon className="w-3 h-3" />; })()}
                    {visionProjects[activeVision].accent}
                  </div>

                  {/* Title with reveal animation */}
                  <h3 
                    className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-heading text-ivory mb-3 leading-[0.95]"
                    style={{
                      transform: visionHover === activeVision ? "translateY(0)" : "translateY(20px)",
                      transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    {visionProjects[activeVision].title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-ivory/60 text-sm sm:text-base lg:text-lg max-w-md mb-6"
                    style={{
                      opacity: visionHover === activeVision ? 1 : 0.7,
                      transform: visionHover === activeVision ? "translateY(0)" : "translateY(10px)",
                      transition: "all 0.5s ease-out 0.1s"
                    }}
                  >
                    {visionProjects[activeVision].description}
                  </p>

                  {/* Meta info */}
                  <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[10px] sm:text-xs tracking-wider text-ivory/50">
                    <span>{visionProjects[activeVision].location}</span>
                    <span className="w-1 h-1 bg-[#C6A46A] rounded-full" />
                    <span>{visionProjects[activeVision].year}</span>
                    <span className="w-1 h-1 bg-[#C6A46A] rounded-full" />
                    <span>{visionProjects[activeVision].area}</span>
                  </div>
                </div>

                {/* Animated scan line effect */}
                <div 
                  className="absolute inset-0 pointer-events-none overflow-hidden"
                  style={{ opacity: visionHover === activeVision ? 1 : 0 }}
                >
                  <div 
                    className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent"
                    style={{ animation: "scanLine 2s ease-in-out infinite" }}
                  />
                </div>
              </div>
            </div>

            {/* Thumbnail selector - stacked cards */}
            <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-[35%] space-y-4 lg:space-y-6">
              {visionProjects.map((project, index) => (
                <button
                  key={index}
                  onClick={() => setActiveVision(index)}
                  onMouseEnter={() => setVisionHover(index)}
                  onMouseLeave={() => setVisionHover(null)}
                  className={`group relative w-full overflow-hidden transition-all duration-700 ${
                    activeVision === index 
                      ? "h-32 sm:h-36 lg:h-40" 
                      : "h-20 sm:h-24 lg:h-28"
                  }`}
                  style={{
                    opacity: scrollY > 2000 + index * 100 ? 1 : 0,
                    transform: scrollY > 2000 + index * 100 
                      ? "translateX(0) perspective(1000px) rotateY(0deg)" 
                      : "translateX(60px) perspective(1000px) rotateY(10deg)",
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                  }}
                >
                  {/* Background image */}
                  <div className="absolute inset-0">
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-all duration-700"
                      style={{
                        filter: activeVision === index ? "brightness(0.4)" : "brightness(0.25) grayscale(0.5)",
                        transform: visionHover === index ? "scale(1.1)" : "scale(1)"
                      }}
                    />
                  </div>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 transition-opacity duration-500 ${
                    activeVision === index 
                      ? "bg-gradient-to-r from-[#C6A46A]/20 to-transparent" 
                      : "bg-gradient-to-r from-[#0A0A0A]/60 to-transparent"
                  }`} />

                  {/* Active indicator line */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-1 bg-[#C6A46A] transition-all duration-500"
                    style={{
                      transform: activeVision === index ? "scaleY(1)" : "scaleY(0)",
                      transformOrigin: "top"
                    }}
                  />

                  {/* Content */}
                  <div className="absolute inset-0 flex items-center px-4 sm:px-6 lg:px-8">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`text-[10px] sm:text-xs font-mono transition-colors duration-300 ${
                          activeVision === index ? "text-[#C6A46A]" : "text-ivory/30"
                        }`}>
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <div className={`h-[1px] w-4 sm:w-6 transition-all duration-500 ${
                          activeVision === index ? "bg-[#C6A46A] w-8" : "bg-ivory/20"
                        }`} />
                      </div>
                      <h4 className={`text-base sm:text-lg lg:text-xl font-heading transition-colors duration-300 ${
                        activeVision === index ? "text-ivory" : "text-ivory/50"
                      }`}>
                        {project.title}
                      </h4>
                      <span className={`text-[10px] sm:text-xs tracking-wider transition-colors duration-300 ${
                        activeVision === index ? "text-ivory/60" : "text-ivory/30"
                      }`}>
                        {project.location}
                      </span>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-500 ${
                      activeVision === index 
                        ? "border-[#C6A46A] bg-[#C6A46A]/10" 
                        : "border-ivory/10 bg-transparent"
                    }`}>
                      <ArrowRight className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 ${
                        activeVision === index ? "text-[#C6A46A] translate-x-0" : "text-ivory/30 -translate-x-1"
                      }`} />
                    </div>
                  </div>

                  {/* Hover shine effect */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div 
            className="text-center mt-16 sm:mt-20 lg:mt-28"
            style={{
              opacity: scrollY > 2200 ? 1 : 0,
              transform: scrollY > 2200 ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s ease-out"
            }}
          >
            <Link 
              to="/contact"
              className="group relative inline-flex items-center gap-4 px-8 sm:px-12 py-4 sm:py-5 border border-[#C6A46A] text-[#C6A46A] text-xs sm:text-sm tracking-[0.2em] font-medium overflow-hidden"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-[#0A0A0A]">
                EXPLORE ALL PROJECTS
              </span>
              <ArrowRight className="relative z-10 w-4 h-4 sm:w-5 sm:h-5 transition-all duration-500 group-hover:translate-x-2 group-hover:text-[#0A0A0A]" />
              <div className="absolute inset-0 bg-[#C6A46A] -translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
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
        @keyframes meshFloat {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.05); }
          66% { transform: translate(-20px, 30px) scale(0.95); }
        }
        @keyframes gridPulse {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.06; }
        }
        @keyframes drawUnderline {
          from { stroke-dashoffset: 200; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes scanLine {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default Architecture;
