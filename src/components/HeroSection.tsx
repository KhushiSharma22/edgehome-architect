import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

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

// Animated geometric shapes for unique background
const GeometricBackground = ({ mouseX, mouseY }: { mouseX: number; mouseY: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient mesh */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 100% 80% at 20% 10%, hsl(38 45% 45% / 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 80% 60% at 80% 80%, hsl(30 40% 50% / 0.12) 0%, transparent 45%),
            radial-gradient(ellipse 60% 50% at 50% 50%, hsl(38 50% 55% / 0.08) 0%, transparent 40%)
          `,
          transform: `translate(${mouseX * 10}px, ${mouseY * 10}px)`,
          transition: 'transform 1s ease-out',
        }}
      />
      
      {/* Floating geometric shapes */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.06]">
        {/* Large rotating square */}
        <rect 
          x="10%" y="15%" 
          width="180" height="180" 
          fill="none" 
          stroke="hsl(38 42% 55%)" 
          strokeWidth="0.5"
          style={{ 
            transform: `rotate(${45 + mouseX * 5}deg)`,
            transformOrigin: '19% 24%',
            transition: 'transform 2s ease-out',
          }}
        />
        
        {/* Diagonal lines grid */}
        <line x1="0" y1="100%" x2="50%" y2="0" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.5" />
        <line x1="30%" y1="100%" x2="80%" y2="0" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.3" />
        <line x1="60%" y1="100%" x2="100%" y2="20%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.4" />
        
        {/* Circles */}
        <circle cx="75%" cy="25%" r="80" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.4" opacity="0.6" />
        <circle cx="75%" cy="25%" r="120" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.3" />
        
        {/* Triangle */}
        <polygon 
          points="85%,70% 95%,90% 75%,90%" 
          fill="none" 
          stroke="hsl(38 42% 55%)" 
          strokeWidth="0.5"
          opacity="0.5"
        />
        
        {/* Small decorative dots */}
        <circle cx="15%" cy="75%" r="3" fill="hsl(38 42% 55%)" opacity="0.4" />
        <circle cx="90%" cy="15%" r="2" fill="hsl(38 42% 55%)" opacity="0.5" />
        <circle cx="5%" cy="40%" r="2" fill="hsl(38 42% 55%)" opacity="0.3" />
      </svg>
      
      {/* Animated blueprint grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(38 42% 55% / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(38 42% 55% / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translate(${mouseX * 5}px, ${mouseY * 5}px)`,
          transition: 'transform 1.5s ease-out',
        }}
      />
      
      {/* Architectural frame corners */}
      <div className="absolute top-[15%] left-[10%] w-32 h-32 border-l border-t border-primary/10" />
      <div className="absolute top-[15%] right-[10%] w-32 h-32 border-r border-t border-primary/10" />
      <div className="absolute bottom-[20%] left-[15%] w-24 h-24 border-l border-b border-primary/8" />
      <div className="absolute bottom-[25%] right-[12%] w-20 h-20 border-r border-b border-primary/8" />
      
      {/* Floating vertical lines */}
      <div className="absolute left-[20%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/8 to-transparent" />
      <div className="absolute left-[80%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/6 to-transparent" />
      <div className="absolute right-[35%] top-0 bottom-0 w-px bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
    </div>
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
      {/* Base dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070706] via-background to-[#050504]" />
      
      {/* Geometric animated background */}
      <GeometricBackground mouseX={mousePosition.x} mouseY={mousePosition.y} />

      {/* Layered cinematic overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-transparent to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/50 via-transparent to-background/50 z-10" />
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 70%, hsl(var(--background)) 100%)'
      }} />
      
      {/* Animated grain texture */}
      <div className="absolute inset-0 grain z-20 opacity-40" />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/15 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1.5s' }} />
        <div className="absolute top-0 left-[60%] w-px h-full bg-gradient-to-b from-primary/8 via-transparent to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/12 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-primary/6 rounded-full blur-[100px] animate-float" style={{ animationDelay: '-2s' }} />

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
            'Design + Build',
            'Turnkey Execution',
            'Delhi NCR',
          ].map((label) => (
            <span 
              key={label} 
              className="flex items-center gap-3 text-sm text-muted-foreground group cursor-default"
            >
              <span className="w-1.5 h-1.5 bg-primary/60 rotate-45 group-hover:bg-primary group-hover:scale-125 transition-all duration-300" />
              <span className="group-hover:text-foreground transition-colors duration-300">{label}</span>
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
            Scroll
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
