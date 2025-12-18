import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-luxury-interior.jpg";

// Split text into characters for animation
const SplitText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  return (
    <span className={className}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className="inline-block animate-char-reveal"
          style={{ 
            animationDelay: `${delay + index * 40}ms`,
            animationFillMode: 'backwards'
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left - rect.width / 2) / 50,
      y: (e.clientY - rect.top - rect.height / 2) / 50,
    });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToNext = () => {
    document.querySelector('#signature')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Animated background with parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-1000 ease-out scale-110"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px) scale(1.1)`,
        }}
      >
        <img
          src={heroImage}
          alt="Luxury interior design showcase"
          className={`w-full h-full object-cover transition-all duration-[2s] ${isLoaded ? 'scale-100 blur-0' : 'scale-110 blur-md'}`}
        />
      </div>

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 z-10" />
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.5) 60%, hsl(var(--background)) 100%)'
      }} />
      
      {/* Animated grain texture */}
      <div className="absolute inset-0 grain z-20 opacity-50" />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        {/* Premium tag with line animation */}
        <div className={`mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-4">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 delay-500 ${isLoaded ? 'w-16' : 'w-0'}`} />
            <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
              Premium Interior Designers
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 delay-500 ${isLoaded ? 'w-16' : 'w-0'}`} />
          </span>
        </div>

        {/* Main headline with character animation */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-heading text-foreground mb-8 leading-[0.9]">
          <span className="block overflow-hidden mb-2">
            {isLoaded && <SplitText text="Design That" delay={600} />}
          </span>
          <span className="block overflow-hidden">
            <span className="text-shimmer italic">
              {isLoaded && <SplitText text="Defines Space" delay={1000} />}
            </span>
          </span>
        </h1>

        {/* Subheadline with fade */}
        <p 
          className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-[1400ms] ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}
        >
          Where architectural vision meets exceptional craftsmanship
        </p>

        {/* CTA Button with magnetic hover */}
        <div 
          className={`mb-16 transition-all duration-1000 delay-[1600ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Button 
            onClick={scrollToContact}
            className="group relative btn-gold text-lg px-12 py-7 overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3">
              Get Free Consultation
              <svg className="w-5 h-5 transition-transform duration-500 group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-gold-light via-primary to-gold-dark bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundPosition: '100% 0', animation: 'shimmer 2s linear infinite' }} />
          </Button>
        </div>

        {/* Trust badges with stagger */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-8 transition-all duration-1000 delay-[1800ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {[
            { label: 'Design + Build', icon: '◆' },
            { label: 'Turnkey Execution', icon: '◆' },
            { label: 'Delhi NCR', icon: '◆' },
          ].map((item, index) => (
            <span 
              key={item.label} 
              className="flex items-center gap-3 text-sm text-muted-foreground group cursor-default"
              style={{ animationDelay: `${1800 + index * 100}ms` }}
            >
              <span className="w-1.5 h-1.5 bg-primary/60 rotate-45 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
              <span className="group-hover:text-foreground transition-colors duration-300">{item.label}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator with enhanced animation */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all duration-1000 delay-[2000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-3 group">
          <span className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase group-hover:text-primary transition-colors duration-500">
            Explore
          </span>
          <div className="relative w-6 h-10 rounded-full border border-primary/30 group-hover:border-primary/60 transition-colors duration-500">
            <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-2 bg-primary rounded-full animate-scroll-mouse" />
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className={`absolute top-8 left-8 transition-all duration-1000 delay-[2200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-l border-t border-primary/20" />
      </div>
      <div className={`absolute top-8 right-8 transition-all duration-1000 delay-[2300ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-r border-t border-primary/20" />
      </div>
      <div className={`absolute bottom-8 left-8 transition-all duration-1000 delay-[2400ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-l border-b border-primary/20" />
      </div>
      <div className={`absolute bottom-8 right-8 transition-all duration-1000 delay-[2500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="w-16 h-16 border-r border-b border-primary/20" />
      </div>
    </section>
  );
};

export default HeroSection;
