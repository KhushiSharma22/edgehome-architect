import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown } from "lucide-react";

const Interior = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const sections = document.querySelectorAll('.reveal-section');
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.6 && rect.bottom > 0) {
          setActiveSection(index);
        }
      });
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const philosophyItems = [
    { word: "空", meaning: "Space", desc: "The void that gives meaning to form" },
    { word: "光", meaning: "Light", desc: "The sculptor of atmosphere" },
    { word: "質", meaning: "Texture", desc: "The language of surfaces" },
    { word: "流", meaning: "Flow", desc: "The rhythm of movement" },
  ];

  const portfolioItems = [
    {
      title: "Penthouse Noir",
      location: "South Delhi",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      year: "2024"
    },
    {
      title: "Minimalist Haven",
      location: "Gurgaon",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      year: "2024"
    },
    {
      title: "Urban Sanctuary",
      location: "Noida",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      year: "2023"
    }
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-white overflow-x-hidden">
      <Header />

      {/* ══════════════════════════════════════════════════════════════════
          HERO: IMMERSIVE DARK CANVAS WITH LIGHT PILLARS
      ══════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-[120vh] flex items-center justify-center overflow-hidden">
        {/* Dynamic gradient mesh background */}
        <div className="absolute inset-0">
          {/* Base dark gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0D0D0D] to-[#080808]" />
          
          {/* Light pillars - architectural light columns */}
          <div 
            className="absolute top-0 left-[15%] w-[1px] h-full bg-gradient-to-b from-white/20 via-white/5 to-transparent"
            style={{ 
              transform: `translateX(${(mousePos.x - 0.5) * 20}px)`,
              transition: 'transform 0.8s ease-out'
            }}
          />
          <div 
            className="absolute top-0 left-[35%] w-[2px] h-full bg-gradient-to-b from-[#C7A56A]/30 via-[#C7A56A]/5 to-transparent"
            style={{ 
              transform: `translateX(${(mousePos.x - 0.5) * 40}px)`,
              transition: 'transform 1s ease-out'
            }}
          />
          <div 
            className="absolute top-0 right-[25%] w-[1px] h-full bg-gradient-to-b from-white/15 via-white/3 to-transparent"
            style={{ 
              transform: `translateX(${(mousePos.x - 0.5) * -30}px)`,
              transition: 'transform 0.9s ease-out'
            }}
          />
          
          {/* Floating light orbs */}
          <div 
            className="absolute w-[600px] h-[600px] rounded-full blur-[150px]"
            style={{
              background: 'radial-gradient(circle, rgba(199,165,106,0.08) 0%, transparent 70%)',
              top: `${20 + mousePos.y * 10}%`,
              left: `${10 + mousePos.x * 20}%`,
              transition: 'all 1.5s ease-out'
            }}
          />
          <div 
            className="absolute w-[400px] h-[400px] rounded-full blur-[120px]"
            style={{
              background: 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)',
              bottom: `${20 + (1 - mousePos.y) * 15}%`,
              right: `${15 + (1 - mousePos.x) * 15}%`,
              transition: 'all 2s ease-out'
            }}
          />

          {/* Diagonal light slash */}
          <div 
            className="absolute top-0 left-1/2 w-[800px] h-[200vh] origin-top-left opacity-[0.03]"
            style={{
              background: 'linear-gradient(90deg, transparent, white, transparent)',
              transform: `rotate(25deg) translateX(-50%) translateY(${scrollY * 0.1}px)`,
            }}
          />
        </div>

        {/* Grain texture overlay */}
        <div 
          className="absolute inset-0 opacity-[0.015] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Main content */}
        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Floating label */}
            <div 
              className="mb-12"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 1s ease-out 0.3s'
              }}
            >
              <span className="inline-flex items-center gap-4 text-[10px] tracking-[0.5em] text-white/40 uppercase">
                <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#C7A56A]/50" />
                Interior Philosophy
                <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#C7A56A]/50" />
              </span>
            </div>

            {/* Main headline - Architectural typography */}
            <h1 className="relative">
              <span 
                className="block text-[12vw] md:text-[10vw] lg:text-[8vw] font-heading font-light leading-[0.85] tracking-tight"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(80px)',
                  transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                }}
              >
                <span className="text-white/90">Spaces</span>
              </span>
              <span 
                className="block text-[12vw] md:text-[10vw] lg:text-[8vw] font-heading font-light leading-[0.85] tracking-tight"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(80px)',
                  transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s'
                }}
              >
                <span className="text-white/40">that</span>{' '}
                <span 
                  className="italic"
                  style={{
                    background: 'linear-gradient(135deg, #C7A56A 0%, #E8D5B5 50%, #C7A56A 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '200% 200%',
                    animation: 'shimmer 4s ease-in-out infinite'
                  }}
                >
                  breathe.
                </span>
              </span>
            </h1>

            {/* Subtext positioned asymmetrically */}
            <div 
              className="mt-16 ml-auto max-w-md text-right"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                transition: 'all 1.2s ease-out 0.9s'
              }}
            >
              <p className="text-base text-white/40 leading-relaxed">
                We don't design rooms. We orchestrate experiences — 
                where light, material, and silence converge into 
                something you feel before you see.
              </p>
            </div>

            {/* Scroll indicator */}
            <div 
              className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
              style={{
                opacity: isLoaded ? 0.4 : 0,
                transition: 'opacity 1s ease-out 1.5s'
              }}
            >
              <span className="text-[9px] tracking-[0.4em] text-white/30 uppercase">Descend</span>
              <div className="w-[1px] h-16 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-4 bg-white/60 animate-[scrollPulse_2s_ease-in-out_infinite]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PHILOSOPHY: KANJI-INSPIRED VERTICAL SCROLL REVEAL
      ══════════════════════════════════════════════════════════════════ */}
      <section className="reveal-section relative py-32 md:py-48">
        {/* Light gradient column on left */}
        <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-[#151515] to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Left: Vertical Kanji strip */}
            <div className="lg:col-span-4 lg:sticky lg:top-32">
              <div className="flex flex-col items-center lg:items-start gap-8">
                {philosophyItems.map((item, index) => (
                  <div 
                    key={index}
                    className="group relative flex items-center gap-6"
                    style={{
                      opacity: scrollY > 400 + index * 100 ? 1 : 0.2,
                      transform: scrollY > 400 + index * 100 ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'all 0.8s ease-out'
                    }}
                  >
                    {/* Kanji character */}
                    <span className="text-6xl md:text-7xl lg:text-8xl font-heading text-white/10 group-hover:text-[#C7A56A]/30 transition-colors duration-700">
                      {item.word}
                    </span>
                    
                    {/* Meaning + description */}
                    <div className="hidden lg:block">
                      <span className="block text-sm text-[#C7A56A] tracking-[0.2em] uppercase mb-1">
                        {item.meaning}
                      </span>
                      <span className="block text-xs text-white/30 max-w-[150px]">
                        {item.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Main content */}
            <div className="lg:col-span-8 space-y-24">
              {/* Philosophy text */}
              <div className="relative">
                <div className="absolute -left-8 top-0 w-px h-full bg-gradient-to-b from-[#C7A56A]/50 via-[#C7A56A]/20 to-transparent" />
                
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading font-light text-white/80 leading-relaxed">
                  Interior design is not decoration.
                  <span className="block mt-4 text-white/40">
                    It is the art of shaping how you{' '}
                    <span className="text-[#C7A56A]">live</span>,{' '}
                    <span className="text-[#C7A56A]">breathe</span>, and{' '}
                    <span className="text-[#C7A56A]">feel</span>{' '}
                    within four walls.
                  </span>
                </p>
              </div>

              {/* Stats in diagonal layout */}
              <div className="relative">
                <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                  {[
                    { num: "200+", label: "Spaces Transformed" },
                    { num: "15", label: "Design Awards" },
                    { num: "98%", label: "Client Satisfaction" },
                  ].map((stat, i) => (
                    <div 
                      key={i}
                      className="group relative"
                      style={{
                        transform: `translateY(${i * 20}px)`
                      }}
                    >
                      <div className="absolute -inset-4 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg" />
                      <div className="relative">
                        <span className="block text-4xl md:text-5xl font-heading text-white/90">
                          {stat.num}
                        </span>
                        <span className="block mt-2 text-xs tracking-[0.15em] text-white/40 uppercase">
                          {stat.label}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PORTFOLIO: OVERLAPPING CARDS WITH DEPTH
      ══════════════════════════════════════════════════════════════════ */}
      <section className="reveal-section relative py-32 md:py-48 overflow-hidden">
        {/* Light column accent on right */}
        <div className="absolute right-0 top-0 bottom-0 w-[35%] bg-gradient-to-l from-[#141414] to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6">
          {/* Section header */}
          <div className="flex items-end justify-between mb-20">
            <div>
              <span className="text-[10px] tracking-[0.4em] text-[#C7A56A]/60 uppercase block mb-4">
                Selected Works
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white/90">
                Portfolio
              </h2>
            </div>
            <Link 
              to="/portfolio"
              className="hidden md:flex items-center gap-3 text-sm text-white/40 hover:text-[#C7A56A] transition-colors duration-500 group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Overlapping portfolio cards */}
          <div className="relative">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative mb-[-15vh] last:mb-0 hover:z-10"
                style={{
                  marginLeft: `${index * 8}%`,
                  marginRight: `${(2 - index) * 8}%`,
                }}
              >
                <div 
                  className="relative overflow-hidden rounded-sm transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(199,165,106,0.15)]"
                  style={{
                    transform: `translateY(${scrollY > 1200 + index * 200 ? 0 : 60}px) rotate(${index % 2 === 0 ? -1 : 1}deg)`,
                    opacity: scrollY > 1200 + index * 200 ? 1 : 0,
                    transition: 'all 0.8s ease-out'
                  }}
                >
                  {/* Image */}
                  <div className="aspect-[16/9] overflow-hidden">
                    <img 
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
                    {/* Year badge */}
                    <span className="absolute top-6 right-6 text-[10px] tracking-[0.3em] text-white/30 uppercase">
                      {item.year}
                    </span>
                    
                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-heading text-white mb-2 group-hover:text-[#C7A56A] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <span className="text-sm text-white/40">{item.location}</span>

                    {/* Hover reveal line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#C7A56A] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          PROCESS: HORIZONTAL SCROLL STRIP
      ══════════════════════════════════════════════════════════════════ */}
      <section className="reveal-section relative py-24">
        {/* Moving gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#111111] to-[#0A0A0A]" />
        
        {/* Horizontal line decoration */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <div className="relative z-10">
          {/* Header */}
          <div className="container mx-auto px-6 mb-16">
            <div className="flex items-center gap-4">
              <span className="text-[10px] tracking-[0.4em] text-[#C7A56A]/60 uppercase">Our Process</span>
              <div className="flex-1 h-px bg-gradient-to-r from-[#C7A56A]/30 to-transparent" />
            </div>
          </div>

          {/* Process steps - horizontal scroll on mobile */}
          <div className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-0 min-w-max px-6">
              {[
                { num: "01", title: "Discovery", desc: "Deep understanding of how you live, work, and dream." },
                { num: "02", title: "Concept", desc: "Translating insights into spatial narratives." },
                { num: "03", title: "Design", desc: "Every detail drawn with intention and precision." },
                { num: "04", title: "Execute", desc: "Bringing vision to life with master craftsmanship." },
              ].map((step, index) => (
                <div 
                  key={index}
                  className="relative group flex-shrink-0 w-[300px] md:w-[400px] border-l border-white/10 first:border-l-0"
                >
                  {/* Hover glow */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#C7A56A]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative p-8 md:p-12">
                    {/* Number */}
                    <span className="text-6xl md:text-7xl font-heading text-white/5 group-hover:text-[#C7A56A]/20 transition-colors duration-500">
                      {step.num}
                    </span>
                    
                    {/* Content */}
                    <div className="mt-8">
                      <h3 className="text-xl md:text-2xl font-heading text-white/80 group-hover:text-white transition-colors duration-300 mb-4">
                        {step.title}
                      </h3>
                      <p className="text-sm text-white/40 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom accent */}
                    <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-[#C7A56A]/50 to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════
          CLOSING: CINEMATIC STATEMENT
      ══════════════════════════════════════════════════════════════════ */}
      <section className="reveal-section relative py-40 md:py-56 overflow-hidden">
        {/* Dramatic lighting */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0D0D0D] to-[#0A0A0A]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[60%] bg-gradient-to-b from-[#C7A56A]/40 via-[#C7A56A]/10 to-transparent" />
          <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#C7A56A]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            {/* Decorative element */}
            <div className="flex justify-center mb-12">
              <div className="w-px h-20 bg-gradient-to-b from-transparent via-[#C7A56A]/50 to-transparent" />
            </div>

            {/* Quote */}
            <blockquote className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-white/80 leading-[1.3]">
              "We don't fill spaces.
              <span className="block mt-4 text-white/40">
                We compose{' '}
                <span className="italic text-[#C7A56A]">silence</span>{' '}
                around your life."
              </span>
            </blockquote>

            {/* CTA */}
            <div className="mt-20">
              <Link 
                to="/contact"
                className="group relative inline-flex items-center gap-4 px-10 py-5 border border-[#C7A56A]/30 hover:border-[#C7A56A] transition-all duration-500"
              >
                {/* Background fill on hover */}
                <div className="absolute inset-0 bg-[#C7A56A] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
                
                <span className="relative z-10 text-sm tracking-[0.2em] uppercase text-[#C7A56A] group-hover:text-[#0A0A0A] transition-colors duration-500">
                  Begin Your Story
                </span>
                <ArrowRight className="relative z-10 w-4 h-4 text-[#C7A56A] group-hover:text-[#0A0A0A] group-hover:translate-x-2 transition-all duration-500" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between services */}
      <section className="relative py-16 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/construction" 
              className="group text-white/30 hover:text-white transition-colors duration-500"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C7A56A]/50 block mb-2">Previous</span>
              <span className="text-xl font-heading flex items-center gap-3">
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-2 transition-transform duration-300" />
                Construction
              </span>
            </Link>
            <Link 
              to="/services/furniture" 
              className="group text-white/30 hover:text-white transition-colors duration-500"
            >
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C7A56A]/50 block mb-2">Next</span>
              <span className="text-xl font-heading flex items-center gap-3">
                Furniture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Custom styles for animations */}
      <style>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes scrollPulse {
          0%, 100% { transform: translateY(0); opacity: 0; }
          50% { transform: translateY(48px); opacity: 1; }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Interior;