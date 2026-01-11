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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

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
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-10" />
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.5) 70%, hsl(var(--background)) 100%)'
      }} />
      
      {/* Subtle grain texture - reduced opacity */}
      <div className="absolute inset-0 grain z-20 opacity-20" />
      
      {/* Static accent lines instead of animated */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      </div>
      
      {/* Static background orbs - no animation */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/8 rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[150px]" />

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        {/* Premium tag with line animation */}
        <div className={`mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-4">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 delay-500 ${isLoaded ? 'w-16' : 'w-0'}`} />
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-medium text-center">
              One Stop Solution For Construction & Designs
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

        {/* CTA Button */}
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
          </Button>
        </div>

        {/* Trust badges */}
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
