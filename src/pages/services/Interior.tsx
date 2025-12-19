import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronRight } from "lucide-react";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";

const Interior = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
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

  // Floating images for COSMOS-style hero
  const floatingImages = [
    { src: portfolioBathroom, x: 8, y: 15, size: 180, rotation: -12, delay: 0 },
    { src: portfolioBedroom, x: 75, y: 12, size: 200, rotation: 8, delay: 0.2 },
    { src: portfolioDining, x: 5, y: 55, size: 160, rotation: 15, delay: 0.4 },
    { src: portfolioKitchen, x: 80, y: 58, size: 170, rotation: -8, delay: 0.6 },
    { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80", x: 18, y: 75, size: 140, rotation: 5, delay: 0.8 },
    { src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&q=80", x: 70, y: 80, size: 150, rotation: -10, delay: 1 },
    { src: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&q=80", x: 88, y: 35, size: 130, rotation: 12, delay: 1.2 },
    { src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80", x: 2, y: 35, size: 120, rotation: -6, delay: 1.4 },
  ];

  const portfolioItems = [
    { title: "Penthouse Noir", location: "South Delhi", image: portfolioBathroom, year: "2024" },
    { title: "Minimalist Haven", location: "Gurgaon", image: portfolioBedroom, year: "2024" },
    { title: "Urban Sanctuary", location: "Noida", image: portfolioDining, year: "2023" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery", desc: "Understanding your vision, lifestyle, and aspirations" },
    { num: "02", title: "Concept", desc: "Translating dreams into tangible design directions" },
    { num: "03", title: "Development", desc: "Refining every detail until perfection emerges" },
    { num: "04", title: "Execution", desc: "Bringing the vision to life with precision" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ═══════════════════════════════════════════════════════════════════════
          HERO: COSMOS-STYLE FLOATING IMAGES WITH CENTRAL TYPOGRAPHY
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Deep dark background */}
        <div className="absolute inset-0 bg-[#0E0E0E]" />
        
        {/* Subtle radial glow in center */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(ellipse at ${50 + (mousePos.x - 0.5) * 10}% ${50 + (mousePos.y - 0.5) * 10}%, rgba(198,164,106,0.03) 0%, transparent 50%)`
          }}
        />

        {/* Very subtle grain */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Floating images - COSMOS style */}
        {floatingImages.map((img, index) => (
          <div
            key={index}
            className="absolute pointer-events-none"
            style={{
              left: `${img.x}%`,
              top: `${img.y}%`,
              width: img.size,
              height: img.size * 0.75,
              transform: `
                translate(-50%, -50%) 
                rotate(${img.rotation + (mousePos.x - 0.5) * 5}deg)
                translateX(${(mousePos.x - 0.5) * (index % 2 === 0 ? 30 : -30)}px)
                translateY(${(mousePos.y - 0.5) * (index % 2 === 0 ? -20 : 20)}px)
              `,
              opacity: isLoaded ? 0.6 : 0,
              transition: `all 1.2s cubic-bezier(0.16, 1, 0.3, 1) ${img.delay}s`,
            }}
          >
            <div className="w-full h-full relative overflow-hidden rounded-sm shadow-2xl">
              <img 
                src={img.src}
                alt=""
                className="w-full h-full object-cover"
              />
              {/* Subtle overlay */}
              <div className="absolute inset-0 bg-[#0E0E0E]/30" />
              {/* Gold corner accent */}
              <div className="absolute top-1 left-1 w-3 h-3 border-l border-t border-[#C6A46A]/30" />
              <div className="absolute bottom-1 right-1 w-3 h-3 border-r border-b border-[#C6A46A]/30" />
            </div>
          </div>
        ))}

        {/* Central content */}
        <div className="relative z-10 text-center px-6">
          {/* Main headline */}
          <h1 
            className="relative"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'scale(1)' : 'scale(0.95)',
              transition: 'all 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
            }}
          >
            <span className="block text-6xl md:text-8xl lg:text-[10rem] xl:text-[12rem] font-heading font-normal tracking-tight text-ivory leading-[0.9]">
              INTERIOR
            </span>
          </h1>

          {/* Tagline with rotating word */}
          <div 
            className="mt-8 flex items-center justify-center gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 1s ease-out 0.8s'
            }}
          >
            <span className="text-base md:text-lg text-ivory/50 tracking-wide">
              A sanctuary crafted for
            </span>
            <span className="px-5 py-2 border border-ivory/20 rounded-full text-base md:text-lg text-ivory/90 bg-ivory/5">
              living
            </span>
          </div>

          {/* Subtle dot indicator */}
          <div 
            className="mt-16"
            style={{
              opacity: isLoaded ? 0.4 : 0,
              transition: 'opacity 1s ease-out 1.2s'
            }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#C6A46A] mx-auto animate-pulse" />
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 0.4 : 0,
            transition: 'opacity 1s ease-out 1.5s'
          }}
        >
          <span className="text-[9px] tracking-[0.3em] text-ivory/30 uppercase">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#C6A46A]/50 to-transparent" />
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PHILOSOPHY SECTION
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-28 md:py-40 overflow-hidden">
        {/* Light column on left */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-gradient-to-r from-[#1A1A1A] to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono">
                OUR PHILOSOPHY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-4">
              Design that
              <span className="text-ivory/50"> feels like home.</span>
            </h2>
          </div>

          {/* Philosophy content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Quote */}
            <div 
              className="relative"
              style={{
                opacity: scrollY > 400 ? 1 : 0,
                transform: scrollY > 400 ? 'translateX(0)' : 'translateX(-30px)',
                transition: 'all 0.8s ease-out'
              }}
            >
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-[#C6A46A]/50 via-[#C6A46A]/20 to-transparent" />
              <blockquote className="text-xl md:text-2xl lg:text-3xl font-heading text-ivory/80 leading-relaxed">
                "Interior design is not decoration.
                <span className="block mt-4 text-ivory/50">
                  It is the art of shaping how you{' '}
                  <span className="text-[#C6A46A]">live</span>,{' '}
                  <span className="text-[#C6A46A]">breathe</span>, and{' '}
                  <span className="text-[#C6A46A]">feel</span>{' '}
                  within walls."
                </span>
              </blockquote>
            </div>

            {/* Right: Stats */}
            <div 
              className="grid grid-cols-3 gap-8"
              style={{
                opacity: scrollY > 500 ? 1 : 0,
                transform: scrollY > 500 ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.2s'
              }}
            >
              {[
                { stat: "200+", desc: "Spaces transformed" },
                { stat: "15", desc: "Design awards" },
                { stat: "98%", desc: "Client satisfaction" },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl md:text-3xl font-heading text-[#C6A46A] mb-2 group-hover:scale-105 transition-transform duration-200">
                    {item.stat}
                  </div>
                  <div className="text-xs text-ivory/50 tracking-wider uppercase">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PORTFOLIO: INTERACTIVE HOVER GRID
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="flex items-end justify-between mb-16">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
                <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono">
                  SELECTED WORKS
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
                Portfolio
              </h2>
            </div>
            <Link 
              to="/portfolio"
              className="hidden md:flex items-center gap-3 text-sm text-ivory/40 hover:text-[#C6A46A] transition-colors duration-500 group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Portfolio grid with hover expansion */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {portfolioItems.map((item, index) => (
              <div 
                key={index}
                className="group relative cursor-pointer"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  opacity: scrollY > 900 + index * 100 ? 1 : 0,
                  transform: scrollY > 900 + index * 100 ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 0.8s ease-out'
                }}
              >
                <div 
                  className="relative overflow-hidden aspect-[4/5] transition-all duration-700"
                  style={{
                    transform: hoveredCard === index ? 'scale(1.02)' : 'scale(1)',
                  }}
                >
                  {/* Image */}
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-3 left-3 w-6 h-6 border-l border-t border-[#C6A46A]/0 group-hover:border-[#C6A46A]/50 transition-colors duration-500" />
                  <div className="absolute bottom-3 right-3 w-6 h-6 border-r border-b border-[#C6A46A]/0 group-hover:border-[#C6A46A]/50 transition-colors duration-500" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 uppercase mb-2">
                      {item.year} · {item.location}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                      {item.title}
                    </h3>
                    
                    {/* Hover arrow */}
                    <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
                      <span className="text-xs text-ivory/60">View Project</span>
                      <ArrowRight className="w-3 h-3 text-[#C6A46A]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          PROCESS: HORIZONTAL STEPS
      ═══════════════════════════════════════════════════════════════════════ */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Light gradient on right */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-gradient-to-l from-[#1A1A1A] to-transparent" />
        
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono">
                OUR PROCESS
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-4">
              From vision to
              <span className="text-[#C6A46A] italic"> reality.</span>
            </h2>
          </div>

          {/* Process steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <div 
                key={index}
                className="group relative p-8 bg-[#1A1A1A]/50 border border-ivory/5 hover:border-[#C6A46A]/30 transition-all duration-500"
                style={{
                  opacity: scrollY > 1400 + index * 80 ? 1 : 0,
                  transform: scrollY > 1400 + index * 80 ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${index * 0.1}s`
                }}
              >
                {/* Number */}
                <span className="text-5xl font-heading text-ivory/[0.05] group-hover:text-[#C6A46A]/20 transition-colors duration-500 absolute top-4 right-4">
                  {step.num}
                </span>
                
                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-ivory/50 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Bottom line accent */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C6A46A]/0 to-transparent group-hover:via-[#C6A46A]/50 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation to other services */}

      {/* Navigation to other services */}
      <section className="relative py-12 border-t border-ivory/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex justify-between items-center">
            <Link 
              to="/services/construction"
              className="group flex items-center gap-3 text-ivory/40 hover:text-[#C6A46A] transition-colors duration-300"
            >
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-2 transition-transform duration-300" />
              <span className="text-sm tracking-wider">Construction</span>
            </Link>
            <Link 
              to="/services/furniture"
              className="group flex items-center gap-3 text-ivory/40 hover:text-[#C6A46A] transition-colors duration-300"
            >
              <span className="text-sm tracking-wider">Furniture</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interior;
