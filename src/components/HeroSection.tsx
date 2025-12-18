import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-luxury-interior.jpg";

const HeroSection = () => {
  const scrollToNext = () => {
    document.getElementById('signature')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden grain light-sweep">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center fade-in-up">
        {/* Premium label */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary" />
          <p className="text-primary text-xs tracking-[0.4em] font-body uppercase">
            Premium Interior Designers
          </p>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary" />
        </div>

        {/* Main headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-normal text-foreground mb-6 tracking-tight leading-[1.1]">
          Design That
          <br />
          <span className="text-gradient-gold">Defines Space</span>
        </h1>
        
        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-10 font-body max-w-xl mx-auto leading-relaxed">
          Architectural excellence meets refined interiors.
          <br className="hidden sm:block" />
          Transform your vision into reality.
        </p>

        {/* CTA Button */}
        <Button 
          className="btn-gold text-base mb-6 animate-pulse-glow"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Get Free Consultation
        </Button>

        {/* Trust line */}
        <p className="text-xs text-muted-foreground tracking-widest uppercase mb-20">
          Design + Build • Turnkey Execution • Delhi NCR
        </p>

        {/* Scroll hint */}
        <button 
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-2xs tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-scroll-hint" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
