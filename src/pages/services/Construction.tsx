import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import constructionHero from "@/assets/construction-hero-epic.jpg";
import foundationImg from "@/assets/construction-foundation.jpg";
import structureImg from "@/assets/construction-structure.jpg";
import envelopeImg from "@/assets/construction-envelope.jpg";
import servicesImg from "@/assets/construction-services.jpg";
import finishImg from "@/assets/construction-finish.jpg";

const Construction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLayer, setActiveLayer] = useState(-1);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (layersRef.current) {
        const rect = layersRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / (rect.height * 0.8)));
        setActiveLayer(Math.floor(progress * 5) - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Real construction phases with accurate descriptions
  const constructionLayers = [
    { 
      name: "Foundation", 
      depth: "Base Level",
      principle: "The unseen strength that holds everything above.",
      metric: "PCC + RCC footing with rebar reinforcement",
      image: foundationImg
    },
    { 
      name: "Structure", 
      depth: "RCC Framework",
      principle: "Columns, beams, and slabs — the skeleton of your home.",
      metric: "IS 456 compliant concrete & steel work",
      image: structureImg
    },
    { 
      name: "Envelope", 
      depth: "Brick & Plaster",
      principle: "Walls that define space and protect from elements.",
      metric: "AAC/Red brick masonry with cement plaster",
      image: envelopeImg
    },
    { 
      name: "Services", 
      depth: "MEP Systems",
      principle: "Electrical, plumbing, and AC — making the home functional.",
      metric: "Concealed wiring & CPVC/PPR plumbing",
      image: servicesImg
    },
    { 
      name: "Finish", 
      depth: "Final Touches",
      principle: "Flooring, painting, woodwork — what you see and touch daily.",
      metric: "Vitrified tiles, POP ceiling, premium paints",
      image: finishImg
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== SECTION 1: HERO - DASHING DESIGNER VIBE ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Split Background - Image on Right */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
          {/* Left - Dark with texture */}
          <div className="relative bg-[#0A0A0A]">
            {/* Dramatic vertical lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 bottom-0 w-px"
                  style={{
                    left: `${12.5 * (i + 1)}%`,
                    background: `linear-gradient(to bottom, transparent, rgba(198,164,106,${0.03 + i * 0.01}) 50%, transparent)`,
                  }}
                />
              ))}
            </div>
          </div>
          
          {/* Right - Hero Image */}
          <div className="relative hidden lg:block">
            <img 
              src={constructionHero}
              alt="Construction precision"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'brightness(0.7) contrast(1.1)',
                transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 1.5s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            {/* Diagonal overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(135deg, #0A0A0A 0%, transparent 50%, transparent 100%)',
              }}
            />
            {/* Edge fade */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-transparent" />
            
            {/* Floating frame accent */}
            <div 
              className="absolute top-20 right-20 w-32 h-32 border border-[#C6A46A]/40"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translate(0,0) rotate(0deg)' : 'translate(20px,-20px) rotate(5deg)',
                transition: 'all 1.2s ease-out 1s',
              }}
            />
            <div 
              className="absolute bottom-32 right-32 w-20 h-20 border border-[#C6A46A]/20"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'all 1s ease-out 1.2s',
              }}
            />
          </div>
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <img 
            src={constructionHero}
            alt="Construction precision"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/80 via-[#0A0A0A]/60 to-[#0A0A0A]" />
        </div>

        {/* Animated diagonal stripes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div 
            className="absolute -left-1/4 top-0 w-[150%] h-full opacity-[0.03]"
            style={{
              background: 'repeating-linear-gradient(45deg, transparent, transparent 60px, rgba(198,164,106,0.3) 60px, rgba(198,164,106,0.3) 61px)',
              transform: isLoaded ? 'translateX(0)' : 'translateX(-100px)',
              transition: 'transform 2s ease-out',
            }}
          />
        </div>

        {/* Giant decorative text behind */}
        <div 
          className="absolute left-0 top-1/2 -translate-y-1/2 text-[20vw] font-heading text-[#C6A46A]/[0.03] leading-none tracking-tighter whitespace-nowrap pointer-events-none select-none"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(-10%)' : 'translateX(-20%)',
            transition: 'all 1.5s ease-out 0.5s',
          }}
        >
          BUILD
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-screen">
            {/* Left Content */}
            <div className="relative py-20">
              {/* Top accent bar */}
              <div 
                className="absolute -top-4 left-0 h-1 bg-[#C6A46A]"
                style={{
                  width: isLoaded ? '80px' : '0',
                  transition: 'width 0.8s ease-out 0.5s',
                }}
              />
              
              {/* Label */}
              <div 
                className="flex items-center gap-4 mb-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 0.6s"
                }}
              >
                <div className="w-2 h-2 bg-[#C6A46A] rotate-45" />
                <span className="text-[11px] tracking-[0.5em] text-[#C6A46A] uppercase font-medium">
                  Construction Excellence
                </span>
              </div>

              {/* MASSIVE Headline */}
              <h1 
                className="relative mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.7s"
                }}
              >
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory tracking-tight leading-[0.9]">
                  We Don't
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory tracking-tight leading-[0.9] mt-1">
                  Just Build
                </span>
                <span className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight leading-[0.9] mt-1">
                  <span className="relative inline-block">
                    <span className="text-[#C6A46A]">We Craft</span>
                    {/* Underline accent */}
                    <div 
                      className="absolute -bottom-2 left-0 h-[3px] bg-[#C6A46A]"
                      style={{
                        width: isLoaded ? '100%' : '0',
                        transition: 'width 0.6s ease-out 1.4s',
                      }}
                    />
                  </span>
                </span>
              </h1>

              {/* Tagline */}
              <p 
                className="text-lg md:text-xl text-ivory/60 max-w-md leading-relaxed mb-10"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 0.8s ease-out 1s"
                }}
              >
                Where engineering meets artistry. Every structure we build is a statement of precision, quality, and uncompromising standards.
              </p>

              {/* Stats - Horizontal with dramatic styling */}
              <div 
                className="flex items-start gap-8 md:gap-12 mb-12"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 1.2s"
                }}
              >
                {[
                  { value: "200", suffix: "+", label: "Projects Delivered" },
                  { value: "10", suffix: "YRS", label: "Experience" },
                  { value: "0", suffix: "%", label: "Delays", prefix: "Zero" },
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="flex items-baseline gap-1">
                      {stat.prefix && (
                        <span className="text-xs text-ivory/40 tracking-wider uppercase">{stat.prefix}</span>
                      )}
                      <span className="text-4xl md:text-5xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="text-lg text-[#C6A46A] font-medium">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-ivory/40 tracking-[0.15em] uppercase mt-1">
                      {stat.label}
                    </div>
                    {/* Hover underline */}
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#C6A46A] group-hover:w-full transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div 
                className="flex items-center gap-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 1.4s"
                }}
              >
                <Link 
                  to="/contact" 
                  className="group relative bg-[#C6A46A] text-[#0A0A0A] px-8 py-4 text-sm tracking-[0.2em] uppercase font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-ivory transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/" 
                  className="group flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors"
                >
                  <span className="text-sm tracking-wider">View Projects</span>
                  <div className="w-8 h-px bg-ivory/30 group-hover:w-12 group-hover:bg-[#C6A46A] transition-all duration-300" />
                </Link>
              </div>

            </div>

            {/* Right side - decorative elements for desktop (image is in background) */}
            <div className="hidden lg:block" />
          </div>
        </div>

        {/* Vertical text on left edge */}
        <div 
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out 1.5s"
          }}
        >
          <span 
            className="text-[10px] tracking-[0.4em] text-ivory/20 uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            EdgeHomes Construction
          </span>
        </div>

        {/* Animated floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Rotating diamond */}
          <div 
            className="absolute top-1/4 right-[15%] w-4 h-4 border border-[#C6A46A]/30 animate-spin-slow hidden lg:block"
            style={{ animationDuration: '20s' }}
          />
          {/* Pulsing circle */}
          <div className="absolute bottom-1/3 right-[25%] w-3 h-3 rounded-full bg-[#C6A46A]/20 animate-pulse-glow hidden lg:block" />
          {/* Floating bars */}
          <div className="absolute top-1/3 right-[10%] flex flex-col gap-1 hidden lg:block">
            {[...Array(3)].map((_, i) => (
              <div 
                key={i}
                className="h-px bg-[#C6A46A]/30 animate-width-pulse"
                style={{ 
                  width: `${20 + i * 10}px`,
                  animationDelay: `${i * 0.3}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Scroll indicator - sleek */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out 2s"
          }}
        >
          <div className="relative w-[1px] h-16 bg-ivory/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-8 bg-[#C6A46A] animate-scroll-line" />
          </div>
          <span className="text-[8px] tracking-[0.4em] text-ivory/30 uppercase">Scroll</span>
        </div>

        {/* Corner frame accents */}
        <div 
          className="absolute top-8 left-8 w-16 h-16 border-l border-t border-[#C6A46A]/30 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-out 1s',
          }}
        />
        <div 
          className="absolute bottom-8 right-8 w-16 h-16 border-r border-b border-[#C6A46A]/30 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease-out 1.2s',
          }}
        />
      </section>

      {/* ===== SECTION 2: THE ANATOMY ===== */}
      <section ref={layersRef} className="relative py-20 md:py-28 overflow-hidden bg-[#0E0E0E]">
        {/* Animated Grid with reveal effect */}
        <div 
          className="absolute inset-0 opacity-[0.03] animate-grid-reveal"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(198,164,106,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(198,164,106,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-[#C6A46A]/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-40 right-[15%] w-48 h-48 rounded-full bg-[#C6A46A]/3 blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Header with animation */}
          <div className="mb-20 animate-fade-in-section">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50 animate-expand-line" />
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono animate-text-reveal">
                THE ANATOMY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-4 animate-slide-up-text">
              Every layer carries
              <span className="text-ivory/50 animate-text-fade"> responsibility.</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/50 max-w-lg leading-relaxed animate-fade-in-delayed">
              Construction is not sequential steps. It's interlocking systems where each depends on every other.
            </p>
          </div>

          {/* Elegant Moving Strip */}
          <div className="relative w-full overflow-hidden py-4 mb-20">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A46A]/5 to-transparent" />
            
            {/* Top & bottom lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />

            {/* Scrolling text */}
            <div className="relative flex whitespace-nowrap">
              <div className="animate-marquee flex items-center gap-16">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-ivory/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-ivory/50">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-ivory/20" />
                  </span>
                ))}
              </div>
              <div className="animate-marquee2 flex items-center gap-16 absolute left-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-ivory/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-ivory/50">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-ivory/20" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Layers with Real Images */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-ivory/10">
              <div 
                className="absolute top-0 left-0 w-full bg-[#C6A46A] transition-all duration-500"
                style={{ height: `${Math.min(100, (activeLayer + 1) * 20)}%` }}
              />
            </div>

            {/* Layers with enhanced animations */}
            <div className="space-y-16 pl-8 md:pl-20">
              {constructionLayers.map((layer, index) => (
                <div 
                  key={layer.name}
                  className={`relative transition-all duration-700 transform ${
                    activeLayer >= index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-30 translate-x-4'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Layer Marker with pulse */}
                  <div 
                    className={`absolute -left-8 md:-left-20 top-2 w-3 h-3 rounded-full border-2 transition-all duration-500 ${
                      activeLayer >= index 
                        ? 'border-[#C6A46A] bg-[#C6A46A] animate-marker-pulse shadow-[0_0_15px_rgba(198,164,106,0.5)]' 
                        : 'border-ivory/30 bg-[#0E0E0E]'
                    }`}
                  >
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] font-mono text-ivory/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Image with advanced hover */}
                    <div className="md:col-span-4">
                      <div className="relative overflow-hidden aspect-[4/3] group/image">
                        <img 
                          src={layer.image}
                          alt={layer.name}
                          className={`w-full h-full object-cover transition-all duration-1000 group-hover/image:scale-110 ${
                            activeLayer >= index ? 'filter-none' : 'grayscale'
                          }`}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/80 via-transparent to-transparent" />
                        
                        {/* Animated corner accents */}
                        <div className={`absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-[#C6A46A]/50 transition-all duration-500 ${
                          activeLayer >= index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`} />
                        <div className={`absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-[#C6A46A]/50 transition-all duration-500 ${
                          activeLayer >= index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`} style={{ transitionDelay: '100ms' }} />
                        
                        {/* Shine effect on hover */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/image:translate-x-[200%] transition-transform duration-1000" />
                        
                        {/* Number overlay */}
                        <div className={`absolute bottom-4 right-4 text-5xl font-heading text-[#C6A46A]/20 transition-all duration-500 ${
                          activeLayer >= index ? 'opacity-100' : 'opacity-0'
                        }`}>
                          0{index + 1}
                        </div>
                      </div>
                    </div>

                    {/* Text Content with stagger */}
                    <div className="md:col-span-8 flex flex-col justify-center">
                      <div className="flex items-baseline gap-4 mb-3">
                        <h3 className={`text-2xl md:text-3xl font-heading text-ivory group-hover:text-[#C6A46A] transition-all duration-500 ${
                          activeLayer >= index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-50'
                        }`}>
                          {layer.name}
                        </h3>
                        <span className={`text-xs tracking-[0.15em] uppercase text-[#C6A46A]/60 transition-all duration-500 ${
                          activeLayer >= index ? 'translate-x-0 opacity-100' : '-translate-x-2 opacity-0'
                        }`} style={{ transitionDelay: '100ms' }}>
                          {layer.depth}
                        </span>
                      </div>

                      <p className={`text-lg text-ivory/60 leading-relaxed mb-4 transition-all duration-500 ${
                        activeLayer >= index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-30'
                      }`} style={{ transitionDelay: '150ms' }}>
                        {layer.principle}
                      </p>
                      
                      {/* Metric Badge with animation */}
                      <span 
                        className={`inline-flex items-center gap-2 text-xs tracking-wide text-ivory/50 transition-all duration-500 ${
                          activeLayer >= index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                        }`}
                        style={{ transitionDelay: '200ms' }}
                      >
                        <span className={`w-1.5 h-1.5 rounded-full bg-[#C6A46A] ${activeLayer >= index ? 'animate-pulse' : ''}`} />
                        {layer.metric}
                      </span>
                    </div>
                  </div>

                  {/* Animated Separator */}
                  <div className="mt-10 h-px bg-ivory/5 relative overflow-hidden">
                    <div 
                      className={`absolute left-0 top-0 h-full bg-gradient-to-r from-[#C6A46A]/50 to-transparent transition-all duration-1000 ${
                        activeLayer >= index ? 'w-full' : 'w-0'
                      }`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE PROMISE ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Architecture detail"
            className="w-full h-full object-cover opacity-10 animate-slow-zoom"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/95 to-[#0E0E0E]" />
          
          {/* Animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#C6A46A]/30 rounded-full animate-float-particle"
                style={{
                  left: `${8 + i * 8}%`,
                  top: `${20 + (i % 4) * 20}%`,
                  animationDuration: `${6 + i % 4}s`,
                  animationDelay: `${i * 0.5}s`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          {/* Animated decorative element */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A46A]/50 animate-expand-left" />
              <div className="w-3 h-3 rotate-45 border border-[#C6A46A]/50 animate-spin-slow" style={{ animationDuration: '8s' }} />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A46A]/50 animate-expand-right" />
            </div>
          </div>

          {/* Quote with reveal */}
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono block mb-8 animate-fade-in-up">
              OUR COMMITMENT
            </span>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-ivory leading-relaxed mb-8">
              <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.1s' }}>"We measure twice </span>
              <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.3s' }}>not because we might be wrong,</span>
              <span className="text-ivory/50 inline-block animate-word-reveal" style={{ animationDelay: '0.5s' }}> but because our clients deserve </span>
              <span className="text-[#C6A46A] italic inline-block animate-word-reveal animate-glow-text" style={{ animationDelay: '0.7s' }}>certainty.</span>
              <span className="inline-block animate-word-reveal" style={{ animationDelay: '0.9s' }}>"</span>
            </blockquote>

            <div className="flex items-center justify-center gap-4 text-ivory/40 animate-fade-in-up" style={{ animationDelay: '1s' }}>
              <span className="h-px w-10 bg-ivory/20" />
              <span className="text-xs tracking-[0.15em] uppercase">EdgeHomes Construction</span>
              <span className="h-px w-10 bg-ivory/20" />
            </div>
          </div>

          {/* Key Points with stagger animation */}
          <div className="grid grid-cols-3 gap-8 mt-16 mb-16">
            {[
              { stat: "Zero", desc: "Material compromise" },
              { stat: "Daily", desc: "Progress updates" },
              { stat: "Full", desc: "Cost transparency" },
            ].map((item, i) => (
              <div 
                key={i} 
                className="text-center group animate-scale-in-up"
                style={{ animationDelay: `${1.2 + i * 0.2}s` }}
              >
                <div className="text-2xl md:text-3xl font-heading text-[#C6A46A] mb-2 group-hover:scale-110 group-hover:text-shadow-glow transition-all duration-300">
                  {item.stat}
                </div>
                <div className="text-xs text-ivory/50 tracking-wider uppercase group-hover:text-ivory/70 transition-colors duration-300">
                  {item.desc}
                </div>
                {/* Underline on hover */}
                <div className="h-px w-0 bg-[#C6A46A]/50 mx-auto mt-2 group-hover:w-12 transition-all duration-300" />
              </div>
            ))}
          </div>

          {/* CTA with magnetic effect */}
          <Link 
            to="/contact"
            className="group relative inline-flex items-center gap-4 bg-[#C6A46A] text-[#0E0E0E] px-10 py-5 text-sm tracking-wider font-medium overflow-hidden animate-fade-in-up"
            style={{ animationDelay: '1.8s' }}
          >
            {/* Shine sweep */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            <span className="relative z-10">Discuss Your Project</span>
            <ArrowRight className="relative z-10 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
