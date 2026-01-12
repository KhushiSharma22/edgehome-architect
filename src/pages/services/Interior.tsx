import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronRight } from "lucide-react";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import heroInterior from "@/assets/interior-hero-luxury.jpg";
import { Link } from "react-router-dom";

const Interior = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeProcess, setActiveProcess] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioItems = [
    { title: "Penthouse Noir", location: "South Delhi", image: portfolioBathroom, year: "2024", category: "Luxury" },
    { title: "Minimalist Haven", location: "Gurgaon", image: portfolioBedroom, year: "2024", category: "Modern" },
    { title: "Urban Sanctuary", location: "Noida", image: portfolioDining, year: "2023", category: "Contemporary" },
    { title: "Serene Escape", location: "Greater Noida", image: portfolioKitchen, year: "2023", category: "Minimal" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "Deep dive into your lifestyle, preferences, and dreams to understand what makes a space truly yours." },
    { num: "02", title: "Concept", desc: "Transform abstract ideas into tangible design directions through mood boards and spatial planning." },
    { num: "03", title: "Development", desc: "Refine every material, color, and detail until the design reaches absolute perfection." },
    { num: "04", title: "Execution", desc: "Meticulous implementation with craftsmen who share our obsession with quality." },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO: CINEMATIC WITH BACKGROUND IMAGE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section ref={heroRef} className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full background image - static for performance */}
        <div className="absolute inset-0">
          <img 
            src={heroInterior}
            alt="Luxury interior design"
            className="w-full h-full object-cover brightness-[0.65]"
            loading="eager"
          />
          {/* Static gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E0E0E]/50 via-[#0E0E0E]/60 to-[#0E0E0E]/90" />
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
            <span className="text-[#C6A46A]">INTERIOR DESIGN</span>
          </nav>

          <div className="relative max-w-6xl">
            {/* Oversized watermark - positioned behind */}
            <div 
              className="absolute -top-20 right-0 lg:right-10 pointer-events-none select-none"
              style={{
                opacity: isLoaded ? 0.06 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                transition: "all 2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s"
              }}
            >
              <span 
                className="text-[10rem] md:text-[16rem] lg:text-[22rem] font-heading italic text-[#C6A46A] leading-none"
                style={{
                  animation: "breathe 8s ease-in-out infinite"
                }}
              >
                luxe
              </span>
            </div>

            {/* Main headline */}
            <h1 className="relative z-10">
              {/* Line 1 */}
              <span className="block overflow-hidden">
                <span 
                  className="block text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading text-ivory tracking-tight"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
                  }}
                >
                  Interior Design,
                </span>
              </span>
              {/* Line 2 */}
              <span className="block overflow-hidden mt-2">
                <span 
                  className="block text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading italic text-ivory/30 tracking-tight"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.7s"
                  }}
                >
                  crafted with{' '}
                  <span className="text-[#C6A46A] not-italic">soul.</span>
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p 
              className="text-base md:text-lg text-ivory/50 leading-relaxed max-w-lg mt-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out 0.9s"
            }}
          >
            Spaces that whisper elegance and speak your story. We transform interiors into experiences that resonate.
          </p>

          {/* CTA Button */}
          <div 
            className="mt-10"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 1.1s'
            }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 bg-[#C6A46A] text-[#0E0E0E] text-sm tracking-[0.2em] uppercase font-medium hover:bg-ivory transition-colors duration-500"
            >
              <span>Begin Your Journey</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 0.5 : 0,
            transition: 'opacity 1s ease-out 1.3s'
          }}
        >
          <div className="w-px h-16 bg-gradient-to-b from-[#C6A46A]/50 via-[#C6A46A]/20 to-transparent relative overflow-hidden">
            <div 
              className="absolute top-0 left-0 w-full h-4 bg-[#C6A46A]"
              style={{
                animation: 'scrollLine 2s ease-in-out infinite'
              }}
            />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          MARQUEE STRIP
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-6 bg-ivory overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-8 mx-8">
              <span className="text-2xl md:text-3xl font-heading text-[#0E0E0E] tracking-wide">
                INTERIOR DESIGN
              </span>
              <span className="text-[#C6A46A] text-2xl">✦</span>
              <span className="text-2xl md:text-3xl font-heading text-[#0E0E0E]/30 tracking-wide">
                LUXURY SPACES
              </span>
              <span className="text-[#C6A46A] text-2xl">✦</span>
              <span className="text-2xl md:text-3xl font-heading text-[#0E0E0E] tracking-wide">
                BESPOKE INTERIORS
              </span>
              <span className="text-[#C6A46A] text-2xl">✦</span>
              <span className="text-2xl md:text-3xl font-heading text-[#0E0E0E]/30 tracking-wide">
                TIMELESS ELEGANCE
              </span>
              <span className="text-[#C6A46A] text-2xl">✦</span>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PHILOSOPHY: SPLIT SCREEN WITH REVEAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute left-0 top-0 bottom-0 w-1/2 bg-gradient-to-r from-[#151515] to-transparent" />
          <div className="absolute right-0 top-1/4 w-px h-1/2 bg-gradient-to-b from-transparent via-[#C6A46A]/20 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-0 items-center">
            {/* Left: Large typography */}
            <div 
              className="lg:col-span-5"
              style={{
                opacity: scrollY > 300 ? 1 : 0,
                transform: scrollY > 300 ? 'translateX(0)' : 'translateX(-50px)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-8 h-px bg-[#C6A46A]" />
                <span className="text-[10px] tracking-[0.4em] text-[#C6A46A] font-mono uppercase">Philosophy</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-ivory leading-[1.1]">
                Design is
                <span className="block text-ivory/30 mt-2">not what you see.</span>
              </h2>
              <p className="mt-8 text-lg text-ivory/40 leading-relaxed max-w-md">
                It's what you feel when you walk into a room. The light that greets you. The silence that comforts you.
              </p>
            </div>

            {/* Center: Vertical line with stats */}
            <div 
              className="lg:col-span-2 flex flex-col items-center py-8"
              style={{
                opacity: scrollY > 400 ? 1 : 0,
                transition: 'opacity 1s ease-out 0.3s'
              }}
            >
              <div className="hidden lg:block w-px h-full bg-gradient-to-b from-transparent via-ivory/10 to-transparent absolute" />
              <div className="flex lg:flex-col gap-8 lg:gap-12">
                {[
                  { num: "200+", label: "Projects" },
                  { num: "15", label: "Awards" },
                  { num: "98%", label: "Satisfaction" },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="text-center"
                    style={{
                      opacity: scrollY > 450 + i * 50 ? 1 : 0,
                      transform: scrollY > 450 + i * 50 ? 'scale(1)' : 'scale(0.8)',
                      transition: `all 0.6s ease-out ${i * 0.1}s`
                    }}
                  >
                    <div className="text-3xl lg:text-4xl font-heading text-[#C6A46A]">{stat.num}</div>
                    <div className="text-[10px] tracking-[0.2em] text-ivory/40 uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Quote */}
            <div 
              className="lg:col-span-5 lg:pl-12"
              style={{
                opacity: scrollY > 400 ? 1 : 0,
                transform: scrollY > 400 ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
              }}
            >
              <blockquote className="relative">
                <div className="absolute -left-6 top-0 text-6xl text-[#C6A46A]/20 font-serif">"</div>
                <p className="text-xl md:text-2xl font-heading text-ivory/70 leading-relaxed pl-4 border-l border-[#C6A46A]/30">
                  Interior design is the art of shaping how you 
                  <span className="text-[#C6A46A]"> live</span>,
                  <span className="text-[#C6A46A]"> breathe</span>, and
                  <span className="text-[#C6A46A]"> feel</span> within walls.
                </p>
                <footer className="mt-6 pl-4">
                  <div className="text-sm text-ivory/50">— Edge Homes Design Philosophy</div>
                </footer>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PORTFOLIO: STAGGERED MASONRY WITH HOVER REVEAL
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#F5F3EF] via-[#EBE8E2] to-[#F5F3EF]" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div 
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
            style={{
              opacity: scrollY > 800 ? 1 : 0,
              transform: scrollY > 800 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-px bg-[#C6A46A]" />
                <span className="text-[10px] tracking-[0.4em] text-[#C6A46A] font-mono uppercase">Selected Works</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-heading text-[#0E0E0E]">
                Portfolio
              </h2>
            </div>
            <Link 
              to="/portfolio"
              className="group flex items-center gap-3 text-sm text-[#0E0E0E]/50 hover:text-[#C6A46A] transition-colors duration-500"
            >
              View All Projects
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Staggered grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative overflow-hidden"
                style={{
                  opacity: scrollY > 900 + index * 80 ? 1 : 0,
                  transform: scrollY > 900 + index * 80 ? 'translateY(0)' : 'translateY(50px)',
                  transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
                }}
              >
                <div className="relative overflow-hidden aspect-[3/4]">
                  {/* Image */}
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/30 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  
                  {/* Category tag - top */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-[9px] tracking-[0.2em] uppercase text-[#C6A46A] border border-[#C6A46A]/30 bg-[#0E0E0E]/50 backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 right-4 w-8 h-8 border-r border-t border-ivory/0 group-hover:border-[#C6A46A]/50 transition-all duration-500 origin-top-right group-hover:scale-100 scale-0" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l border-b border-ivory/0 group-hover:border-[#C6A46A]/50 transition-all duration-500 origin-bottom-left group-hover:scale-100 scale-0" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <span className="text-[10px] tracking-[0.3em] text-ivory/50 uppercase">
                        {item.year} · {item.location}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-heading text-ivory mt-2 group-hover:text-[#C6A46A] transition-colors duration-300">
                        {item.title}
                      </h3>
                      
                      {/* View button */}
                      <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                        <div className="w-8 h-px bg-[#C6A46A]" />
                        <span className="text-xs text-[#C6A46A] tracking-wider">Explore</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PROCESS: INTERACTIVE TIMELINE
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#121212] to-[#0E0E0E]" />
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#1A1815]/50 to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div 
            className="mb-16"
            style={{
              opacity: scrollY > 1400 ? 1 : 0,
              transform: scrollY > 1400 ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out'
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-px bg-[#C6A46A]" />
              <span className="text-[10px] tracking-[0.4em] text-[#C6A46A] font-mono uppercase">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-heading text-ivory">
              From vision to
              <span className="text-[#C6A46A] italic"> reality</span>
            </h2>
          </div>

          {/* Interactive process steps */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Step navigation */}
            <div className="space-y-0">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`group relative cursor-pointer py-6 border-b border-ivory/5 transition-all duration-500 ${activeProcess === index ? 'border-[#C6A46A]/30' : ''}`}
                  onClick={() => setActiveProcess(index)}
                  onMouseEnter={() => setActiveProcess(index)}
                  style={{
                    opacity: scrollY > 1500 + index * 60 ? 1 : 0,
                    transform: scrollY > 1500 + index * 60 ? 'translateX(0)' : 'translateX(-30px)',
                    transition: `all 0.6s ease-out ${index * 0.1}s`
                  }}
                >
                  {/* Active indicator */}
                  <div 
                    className={`absolute left-0 top-0 bottom-0 w-px transition-all duration-500 ${activeProcess === index ? 'bg-[#C6A46A]' : 'bg-transparent'}`}
                  />
                  
                  <div className="flex items-start gap-6 pl-6">
                    <span className={`text-4xl font-heading transition-colors duration-300 ${activeProcess === index ? 'text-[#C6A46A]' : 'text-ivory/10'}`}>
                      {step.num}
                    </span>
                    <div>
                      <h3 className={`text-xl font-heading transition-colors duration-300 ${activeProcess === index ? 'text-ivory' : 'text-ivory/50'}`}>
                        {step.title}
                      </h3>
                      <p className={`mt-2 text-sm leading-relaxed transition-all duration-500 ${activeProcess === index ? 'text-ivory/60 max-h-20 opacity-100' : 'text-ivory/30 max-h-0 opacity-0 overflow-hidden'}`}>
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Visual representation */}
            <div 
              className="relative hidden lg:block"
              style={{
                opacity: scrollY > 1500 ? 1 : 0,
                transform: scrollY > 1500 ? 'translateX(0)' : 'translateX(50px)',
                transition: 'all 1s ease-out 0.3s'
              }}
            >
              <div className="relative aspect-square max-w-md ml-auto">
                {/* Circular progress indicator */}
                <svg className="w-full h-full" viewBox="0 0 200 200">
                  {/* Background circle */}
                  <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
                  {/* Progress arc */}
                  <circle 
                    cx="100" 
                    cy="100" 
                    r="80" 
                    fill="none" 
                    stroke="#C6A46A" 
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray={`${(activeProcess + 1) * 125.6} 502.4`}
                    transform="rotate(-90 100 100)"
                    className="transition-all duration-700"
                  />
                  {/* Center content */}
                  <text x="100" y="90" textAnchor="middle" className="fill-ivory text-5xl font-heading">
                    {processSteps[activeProcess].num}
                  </text>
                  <text x="100" y="115" textAnchor="middle" className="fill-[#C6A46A] text-xs tracking-widest uppercase">
                    {processSteps[activeProcess].title}
                  </text>
                </svg>
                
                {/* Decorative elements */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-full pr-4">
                  <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C6A46A]/30" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom animations */}
      <style>{`
        @keyframes shimmerText {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scrollLine {
          0% { transform: translateY(-100%); opacity: 0; }
          30% { opacity: 1; }
          70% { opacity: 1; }
          100% { transform: translateY(400%); opacity: 0; }
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Interior;
