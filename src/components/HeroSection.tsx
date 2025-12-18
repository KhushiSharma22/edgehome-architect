import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-luxury-interior.jpg";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    setMousePosition({
      x: (clientX / innerWidth - 0.5) * 20,
      y: (clientY / innerHeight - 0.5) * 20,
    });
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToNext = () => {
    const nextSection = document.querySelector('#signature');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image with parallax */}
      <div 
        className="absolute inset-0 z-0 transition-transform duration-700 ease-out"
        style={{
          transform: `translate(${mousePosition.x * 0.3}px, ${mousePosition.y * 0.3}px) scale(1.1)`,
        }}
      >
        <img
          src={heroImage}
          alt="Luxury interior design showcase"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60 z-10" />
      
      {/* Animated vignette */}
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.4) 70%, hsl(var(--background)) 100%)'
      }} />
      
      {/* Subtle animated grain */}
      <div className="absolute inset-0 grain z-20 opacity-60" />
      
      {/* Light sweep effect */}
      <div className="absolute inset-0 light-sweep z-20 pointer-events-none" />
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-30 container mx-auto px-6 text-center">
        {/* Premium tag with reveal animation */}
        <div className={`mb-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-3">
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary animate-pulse" />
            <span className="text-primary text-xs tracking-[0.4em] uppercase font-medium">
              Premium Interior Designers
            </span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary animate-pulse" />
          </span>
        </div>

        {/* Main headline with staggered reveal */}
        <h1 
          className={`text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-foreground mb-6 transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="block overflow-hidden">
            <span className={`inline-block transition-transform duration-1000 delay-300 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
              Design That
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className={`inline-block text-shimmer transition-transform duration-1000 delay-500 ${isLoaded ? 'translate-y-0' : 'translate-y-full'}`}>
              Defines Space
            </span>
          </span>
        </h1>

        {/* Subheadline */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}
        >
          Architectural excellence meets refined interiors.
          <span className="text-foreground/90"> Transform your vision</span> into reality.
        </p>

        {/* CTA Button with magnetic effect */}
        <div 
          className={`mb-12 transition-all duration-1000 delay-900 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <Button 
            onClick={scrollToContact}
            className="btn-gold text-lg px-10 py-6 animate-pulse-glow relative group overflow-hidden"
          >
            <span className="relative z-10">Get Free Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-gold-light to-primary bg-[length:200%_100%] opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
          </Button>
        </div>

        {/* Trust line */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-muted-foreground transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {['Design + Build', 'Turnkey Execution', 'Delhi NCR'].map((item, index) => (
            <span key={item} className="flex items-center gap-4">
              <span className="relative">
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary/50 group-hover:w-full transition-all duration-500" />
              </span>
              {index < 2 && <span className="w-1.5 h-1.5 rounded-full bg-primary/50 animate-pulse" />}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center gap-2 group">
          <span className="text-2xs text-muted-foreground tracking-widest uppercase group-hover:text-primary transition-colors">
            Scroll
          </span>
          <div className="w-px h-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary to-transparent animate-scroll-hint" />
          </div>
        </div>
      </div>

      {/* Corner decorations */}
      <div className={`absolute top-8 left-8 w-20 h-20 border-l-2 border-t-2 border-primary/20 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
      <div className={`absolute top-8 right-8 w-20 h-20 border-r-2 border-t-2 border-primary/20 transition-all duration-1000 delay-1100 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
      <div className={`absolute bottom-8 left-8 w-20 h-20 border-l-2 border-b-2 border-primary/20 transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
      <div className={`absolute bottom-8 right-8 w-20 h-20 border-r-2 border-b-2 border-primary/20 transition-all duration-1000 delay-1300 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
    </section>
  );
};

export default HeroSection;
