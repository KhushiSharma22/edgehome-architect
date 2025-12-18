import { useEffect, useState, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";


// Architectural Blueprint Background - Refined & Subtle
const ArchitecturalBackground = ({ scrollY = 0 }: { scrollY?: number }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint Grid - Very Subtle */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        style={{ 
          transform: `translate(${scrollY * 0.015}px, ${scrollY * 0.01}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      >
        <defs>
          <pattern id="blueprintGrid" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
            <path d="M 50 0 L 50 100 M 0 50 L 100 50" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.15" opacity="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
      </svg>

      {/* Interior Wall Outlines - Abstract */}
      <svg 
        className="absolute inset-0 w-full h-full opacity-[0.04]"
        style={{ 
          transform: `translate(${scrollY * 0.02}px, ${scrollY * 0.015}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      >
        {/* Wall frame suggestion - left side */}
        <path 
          d="M 8% 35% L 8% 75% L 28% 75% L 28% 55% L 18% 55% L 18% 35% Z" 
          fill="none" 
          stroke="hsl(38 42% 55%)" 
          strokeWidth="0.4"
          opacity="0.6"
        />
        
        {/* Ceiling grid hints */}
        <line x1="15%" y1="20%" x2="45%" y2="20%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.4" />
        <line x1="18%" y1="24%" x2="42%" y2="24%" stroke="hsl(30 8% 60%)" strokeWidth="0.2" opacity="0.3" />
        
        {/* Furniture geometry - table silhouette */}
        <rect x="20%" y="60%" width="15%" height="8%" fill="none" stroke="hsl(30 8% 55%)" strokeWidth="0.3" opacity="0.4" />
        
        {/* Construction framing - corner joint */}
        <path d="M 5% 30% L 5% 35% L 10% 35%" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.4" opacity="0.5" />
        
        {/* Measurement marker */}
        <g opacity="0.3">
          <line x1="12%" y1="85%" x2="12%" y2="88%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
          <line x1="12%" y1="86.5%" x2="25%" y2="86.5%" stroke="hsl(38 42% 55%)" strokeWidth="0.2" strokeDasharray="2,4" />
          <line x1="25%" y1="85%" x2="25%" y2="88%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
        </g>
      </svg>

      {/* Diagonal drift lines - very faint */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          background: `
            linear-gradient(135deg, transparent 48%, hsl(38 42% 55% / 0.3) 49%, hsl(38 42% 55% / 0.3) 51%, transparent 52%),
            linear-gradient(135deg, transparent 58%, hsl(30 8% 55% / 0.2) 59%, hsl(30 8% 55% / 0.2) 61%, transparent 62%)
          `,
          backgroundSize: '200px 200px',
          transform: `translate(${scrollY * 0.03}px, ${scrollY * 0.02}px)`,
          transition: 'transform 0.8s ease-out',
        }}
      />
    </div>
  );
};

// Hero Section - Asymmetrical Editorial Composition
const HeroAbout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Base Background */}
      <div className="absolute inset-0 bg-background" />
      
      {/* Architectural Blueprint Layer - with slight blur */}
      <div className="absolute inset-0" style={{ filter: 'blur(0.5px)' }}>
        <ArchitecturalBackground scrollY={scrollY} />
      </div>

      {/* Cinematic overlays matching homepage */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/40 to-background z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70 z-10" />
      <div className="absolute inset-0 z-10" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, hsl(var(--background) / 0.5) 60%, hsl(var(--background)) 100%)'
      }} />
      
      {/* Animated grain texture */}
      <div className="absolute inset-0 grain z-20 opacity-40" />
      
      {/* Floating orbs like homepage */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-primary/8 rounded-full blur-[80px] animate-float" style={{ animationDelay: '-5s' }} />
      
      {/* Light rays */}
      <div className="absolute inset-0 z-15 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Cinematic Vertical Image Strip */}
      <div 
        className={`absolute right-[5%] top-[15%] bottom-[15%] w-[15%] hidden xl:block transition-all duration-[2800ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ 
          transitionDelay: '1500ms',
          transform: `translateY(${scrollY * -0.025}px)`,
        }}
      >
        <div 
          className="absolute -inset-px"
          style={{
            background: 'linear-gradient(180deg, hsl(38 42% 55% / 0.25), hsl(38 42% 55% / 0.15), hsl(38 42% 55% / 0.25))',
            boxShadow: '0 0 40px hsl(38 42% 55% / 0.12)',
          }}
        />
        <div className="relative w-full h-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
            alt="Luxury interior detail"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.15) translateY(${scrollY * 0.015}px)`,
              transition: 'transform 0.8s ease-out',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/75" />
          
          {/* Corner Crop Marks */}
          <div className="absolute top-4 left-4">
            <div className="w-6 h-px bg-primary/50" />
            <div className="w-px h-6 bg-primary/50" />
          </div>
          <div className="absolute top-4 right-4 flex flex-col items-end">
            <div className="w-6 h-px bg-primary/50" />
            <div className="w-px h-6 bg-primary/50 ml-auto" />
          </div>
          <div className="absolute bottom-4 left-4 flex flex-col justify-end">
            <div className="w-px h-6 bg-primary/50" />
            <div className="w-6 h-px bg-primary/50" />
          </div>
          <div className="absolute bottom-4 right-4 flex flex-col items-end justify-end">
            <div className="w-px h-6 bg-primary/50 ml-auto" />
            <div className="w-6 h-px bg-primary/50" />
          </div>
          
          <div className="absolute bottom-6 left-0 right-0 px-4">
            <div className="text-center">
              <p className="text-primary/60 text-[9px] tracking-[0.25em] uppercase mb-1">
                Project Snapshot
              </p>
              <p className="text-foreground/35 text-[8px] tracking-[0.15em]">
                Residential · Delhi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-32">
          
          {/* Left Side - Intentional negative space */}
          <div className="col-span-12 lg:col-span-4 hidden lg:block" />

          {/* Center/Right Side - Text Content */}
          <div className="col-span-12 lg:col-span-8 text-center lg:text-left">
            
            {/* Philosophy Label */}
            <div 
              className={`mb-10 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            >
              <span className="inline-flex items-center gap-4">
                <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 delay-500 ${isLoaded ? 'w-16' : 'w-0'}`} />
                <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
                  The EdgeHomes Philosophy
                </span>
                <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 delay-500 ${isLoaded ? 'w-16' : 'w-0'}`} />
              </span>
            </div>

            {/* Headline - Large like homepage */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-foreground mb-10 leading-[0.95]">
              <span 
                className={`block overflow-hidden mb-3 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '400ms' }}
              >
                Design is not
              </span>
              <span 
                className={`block overflow-hidden mb-3 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '600ms' }}
              >
                what we do.
              </span>
              <span 
                className={`block overflow-hidden transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: '800ms' }}
              >
                <span className="text-muted-foreground">It's how we </span>
                <span className="text-shimmer italic">think.</span>
              </span>
            </h1>

            {/* Subtext */}
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-12 leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              A design & build studio shaping spaces that feel lived in, timeless, and intentional.
            </p>

            {/* Trust badges */}
            <div 
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1200ms' }}
            >
              {[
                'Design Studio',
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
        </div>
      </div>

      {/* Corner accents like homepage */}
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

      {/* Scroll indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all duration-1000 delay-[2000ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
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
    </section>
  );
};

// Immersive Architectural Philosophy Section with Center Image
const ArchitecturalPhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const progress = Math.max(0, (window.innerHeight - rect.top) / (window.innerHeight + rect.height));
      setScrollY(progress * 100);
      setSectionVisible(rect.top < window.innerHeight * 0.8);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-rotate images
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const galleryImages = [
    { src: portfolioKitchen, label: 'Kitchen Design' },
    { src: portfolioBedroom, label: 'Bedroom Interiors' },
    { src: portfolioDining, label: 'Dining Spaces' },
  ];

  return (
    <section ref={sectionRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* === Rich Gradient Background === */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] via-[#0d0b08] to-[#080705]" />
      
      {/* Warm ambient glow */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 60% at 50% 40%, hsl(38 50% 50% / 0.06) 0%, transparent 50%),
          radial-gradient(ellipse 60% 50% at 20% 80%, hsl(38 40% 45% / 0.04) 0%, transparent 40%),
          radial-gradient(ellipse 60% 50% at 80% 20%, hsl(30 45% 50% / 0.04) 0%, transparent 40%)
        `
      }} />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-primary/15 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Floating orbs - More vibrant */}
      <div className="absolute top-1/4 left-1/5 w-80 h-80 bg-primary/15 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/5 w-96 h-96 bg-primary/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: '-2s' }} />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-40" />

      {/* === CONTENT === */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-4 mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
            <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
              Our Philosophy
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">What We</span>
            <span className="text-shimmer italic">Believe</span>
          </h2>
        </div>
        
        {/* Main Grid: Left Content + Center Image + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* Left Column - Philosophy Cards */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 1 */}
            <div 
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative p-6 lg:p-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
                
                <div className="relative mb-4">
                  <span className="text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">◯</span>
                </div>
                
                <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary/90 transition-colors duration-500">
                  Simplicity as <span className="text-primary">Luxury</span>
                </h3>
                
                <p className="text-muted-foreground/80 text-sm lg:text-base leading-relaxed">
                  The most powerful design is invisible. It earns attention through <span className="text-primary/80">restraint</span>.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div 
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="relative p-6 lg:p-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-primary/30 rounded-tl-2xl" />
                
                <div className="relative mb-4">
                  <span className="text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">◇</span>
                </div>
                
                <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary/90 transition-colors duration-500">
                  Execution Over <span className="text-primary">Promises</span>
                </h3>
                
                <p className="text-muted-foreground/80 text-sm lg:text-base leading-relaxed">
                  What separates us is obsessive focus on bringing every <span className="text-primary/80">detail</span> to life.
                </p>
              </div>
            </div>
          </div>

          {/* Center Column - Featured Image Gallery */}
          <div 
            className={`lg:col-span-4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Decorative frame */}
              <div className="absolute -inset-4 border border-primary/20 rounded-3xl" />
              <div className="absolute -inset-8 border border-primary/10 rounded-[2rem]" />
              
              {/* Gold corner accents */}
              <div className="absolute -top-6 -left-6 w-12 h-12 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute -top-6 -right-6 w-12 h-12 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-r-2 border-b-2 border-primary/50" />
              
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-2xl blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {galleryImages.map((img, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-1000 ${
                      activeImage === index 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-105'
                    }`}
                  >
                    <img 
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  </div>
                ))}
                
                {/* Image label */}
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-primary/80 text-xs tracking-[0.3em] uppercase mb-2">Our Work</p>
                  <p className="text-foreground/90 text-lg font-heading">{galleryImages[activeImage].label}</p>
                </div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-6 right-6 flex gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeImage === index 
                          ? 'bg-primary w-6' 
                          : 'bg-foreground/30 hover:bg-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
                {/* Decorative corner marks inside */}
                <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-primary/40" />
                <div className="absolute top-4 right-4 w-6 h-6 border-r border-t border-primary/40" />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -right-4 top-1/4 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full px-4 py-2">
                <span className="text-primary text-xs font-medium tracking-wider">10+ Years</span>
              </div>
            </div>
          </div>

          {/* Right Column - Philosophy Card + Quote */}
          <div className="lg:col-span-4 space-y-6">
            {/* Card 3 */}
            <div 
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative p-6 lg:p-8 rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 right-0 w-10 h-10 border-r-2 border-t-2 border-primary/30 rounded-tr-2xl" />
                
                <div className="relative mb-4">
                  <span className="text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">△</span>
                </div>
                
                <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary/90 transition-colors duration-500">
                  Timeless Over <span className="text-primary">Trendy</span>
                </h3>
                
                <p className="text-muted-foreground/80 text-sm lg:text-base leading-relaxed">
                  Trends fade in seasons. We build for <span className="text-primary/80">decades</span>.
                </p>
              </div>
            </div>

            {/* Quote Block */}
            <div 
              className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '800ms' }}
            >
              <div className="relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                <span className="text-6xl text-primary/20 font-heading leading-none absolute -top-2 left-4">"</span>
                <p className="text-foreground/70 text-lg lg:text-xl italic leading-relaxed pt-4">
                  A space should feel <span className="text-primary/90">calm</span> before it looks beautiful.
                </p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="w-8 h-px bg-primary/40" />
                  <span className="text-muted-foreground/60 text-xs tracking-wider uppercase">Our Belief</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms]"
        style={{
          background: 'radial-gradient(ellipse 100% 40% at 50% 100%, hsl(38 42% 55% / 0.05) 0%, transparent 50%)',
          opacity: sectionVisible ? 1 : 0,
        }}
      />
    </section>
  );
};

// Process Section - Horizontal Scroll Timeline
const ProcessSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const phases = [
    { 
      number: '01', 
      title: 'The First Conversation', 
      subtitle: 'Where dreams find words',
      description: 'Before any line is drawn, we listen. To understand not just what you want—but why you want it.',
      icon: '◯',
    },
    { 
      number: '02', 
      title: 'The First Drawing', 
      subtitle: 'Where vision takes shape',
      description: 'Ideas crystallize. Rough sketches become refined plans. Your future home begins to breathe on paper.',
      icon: '◇',
    },
    { 
      number: '03', 
      title: 'The First Brick', 
      subtitle: 'Where intention meets action',
      description: 'Ground breaks. Material arrives. The invisible becomes tangible, one carefully placed element at a time.',
      icon: '△',
    },
    { 
      number: '04', 
      title: 'The Final Silence', 
      subtitle: 'Where we hand over the keys',
      description: 'The dust settles. The tools retreat. What remains is a space that was always meant for you.',
      icon: '□',
    }
  ];

  return (
    <section ref={containerRef} className="relative py-32 md:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-background to-[#050505]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 left-1/5 w-80 h-80 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-30" />
      
      {/* Progress Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/5 -translate-y-1/2 hidden lg:block">
        <div 
          className="h-full bg-gradient-to-r from-primary/40 to-primary/15 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-4 mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
            <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
              Our Journey
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">From First Call to</span>
            <span className="text-shimmer italic">Handover</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {index < phases.length - 1 && (
                <div className="absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-primary/25 to-transparent hidden lg:block" />
              )}
              
              <div className="relative p-8 rounded-2xl border border-border/10 bg-card/5 hover:border-primary/20 hover:bg-card/10 transition-all duration-500 h-full">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Corner */}
                <div className="absolute top-0 left-0 w-10 h-10 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
                
                {/* Number */}
                <div className="relative mb-8">
                  <span className="text-7xl font-heading text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {phase.number}
                  </span>
                  <span className="absolute top-3 left-16 text-2xl text-primary/25 group-hover:text-primary/40 group-hover:rotate-6 transition-all duration-500">
                    {phase.icon}
                  </span>
                </div>

                <h3 className="font-heading text-xl lg:text-2xl text-foreground/90 mb-2 group-hover:text-foreground transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-primary/50 text-sm italic mb-5">{phase.subtitle}</p>
                <p className="text-muted-foreground text-base leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-500">
                  {phase.description}
                </p>

                <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Founders Section - Magazine Editorial Style
const FoundersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeFounder, setActiveFounder] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const founders = [
    {
      name: 'Ar. Bhanupriya',
      role: 'Principal Architect',
      department: 'Design & Development',
      initial: 'B',
      description: 'Her designs, effected by an intuitive sensitivity to client preferences and an obsessive attention to detail, synchronizes social and cultural nuances to exude a subtle, yet distinctive, individuality.',
      philosophy: 'Bringing the serenity of spiritualism to the design desk, she translates her own connection to nature and human interaction with space to compose ergonomic and responsive structural forms.',
    },
    {
      name: 'Deepak Manchanda',
      role: 'Director',
      department: 'Constructions & Operations',
      initial: 'D',
      description: 'In the world of construction, where every brick laid and beam placed plays a pivotal role in shaping dreams into reality, there exists an unsung hero who embodies dedication, expertise, and relentless pursuit of excellence.',
      philosophy: 'In an industry where trust is paramount, his integrity and client-centric approach have set EdgeHomes apart as the benchmark for quality construction.',
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative py-32 md:py-40 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Brighter Background with warm gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0908] via-[#100c09] to-[#0c0908]" />
      
      {/* Rich warm ambient lighting */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 80% 70% at 30% 30%, hsl(38 55% 50% / 0.12) 0%, transparent 50%),
          radial-gradient(ellipse 70% 60% at 70% 70%, hsl(32 50% 45% / 0.10) 0%, transparent 45%),
          radial-gradient(ellipse 50% 50% at 50% 50%, hsl(38 45% 55% / 0.06) 0%, transparent 50%)
        `
      }} />
      
      {/* Animated light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/20 via-primary/5 to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/15 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
        <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '2s' }} />
      </div>
      
      {/* Brighter Floating orbs */}
      <div className="absolute top-1/4 left-1/6 w-80 h-80 bg-primary/20 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/6 w-96 h-96 bg-primary/15 rounded-full blur-[140px] animate-float" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px]" />
      
      {/* Dynamic Orb following mouse */}
      <div 
        className="absolute w-[700px] h-[700px] rounded-full blur-[200px] opacity-25"
        style={{
          background: 'radial-gradient(circle, hsl(38 55% 55% / 0.4), transparent)',
          left: `${mousePos.x * 30}%`,
          top: `${mousePos.y * 30}%`,
          transition: 'all 1.5s ease-out',
        }}
      />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-25" />

      {/* Enhanced Grid with gold tint */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.06]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="foundersGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(38 50% 65%)" strokeWidth="0.3" />
              <circle cx="0" cy="0" r="1" fill="hsl(38 50% 65%)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundersGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-4 mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-20' : 'w-0'}`} />
            <span className="text-primary text-sm tracking-[0.5em] uppercase font-medium">
              The Visionaries
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-20' : 'w-0'}`} />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">Who We</span>
            <span className="text-shimmer italic">Are</span>
          </h2>
          <p className="mt-6 text-muted-foreground/70 text-lg max-w-2xl mx-auto">
            Meet the minds behind EdgeHomes — where passion meets precision.
          </p>
        </div>

        {/* Founders - Brighter Enhanced Cards */}
        <div className="grid lg:grid-cols-2 gap-12">
          {founders.map((founder, index) => {
            const isActive = activeFounder === index;
            
            return (
              <div
                key={founder.name}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setActiveFounder(index)}
                onMouseLeave={() => setActiveFounder(null)}
              >
                {/* Card Glow - More vibrant */}
                <div className={`absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 rounded-3xl blur-2xl transition-all duration-700 ${isActive ? 'opacity-100 scale-105' : 'opacity-40'}`} />
                
                {/* Main Card - Brighter */}
                <div className={`
                  relative rounded-2xl overflow-hidden p-10 lg:p-12
                  border transition-all duration-500
                  ${isActive 
                    ? 'border-primary/40 bg-gradient-to-br from-primary/20 via-card/20 to-primary/10' 
                    : 'border-primary/20 bg-gradient-to-br from-primary/10 via-card/10 to-transparent'
                  }
                  backdrop-blur-sm
                `}>
                  {/* Animated border glow */}
                  <div className={`absolute inset-0 rounded-2xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`}
                    style={{
                      background: 'linear-gradient(135deg, hsl(38 50% 50% / 0.15), transparent, hsl(38 50% 50% / 0.15))',
                    }}
                  />
                  
                  {/* Corner accent - More prominent */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-primary/40 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-primary/40 rounded-br-2xl" />
                  
                  {/* Initial Background - Brighter */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 overflow-hidden">
                    <span 
                      className={`
                        text-[200px] font-heading leading-none select-none
                        bg-gradient-to-br from-primary/15 via-primary/10 to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isActive ? 'from-primary/25 via-primary/15' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accent - More visible */}
                  <div className={`
                    absolute top-8 right-8 w-16 h-16 border-2 border-primary/20 rotate-45
                    transition-all duration-700
                    ${isActive ? 'rotate-[55deg] border-primary/40 scale-110' : ''}
                  `} />

                  {/* Content */}
                  <div className="relative">
                    {/* Role badge */}
                    <div className={`inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full border transition-all duration-500 ${
                      isActive 
                        ? 'bg-primary/20 border-primary/40' 
                        : 'bg-primary/10 border-primary/20'
                    }`}>
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-primary text-xs tracking-[0.2em] uppercase font-medium">
                        {founder.role}
                      </span>
                    </div>
                    
                    <h3 className={`
                      font-heading text-3xl md:text-4xl lg:text-5xl mb-2
                      transition-all duration-500
                      ${isActive ? 'text-foreground' : 'text-foreground/90'}
                    `}>
                      {founder.name}
                    </h3>
                    
                    <span className="text-primary/60 text-sm tracking-wider block mb-8">
                      {founder.department}
                    </span>

                    <p className={`text-foreground/70 text-base lg:text-lg leading-relaxed mb-4 transition-all duration-500 ${isActive ? 'text-foreground/85' : ''}`}>
                      {founder.description}
                    </p>
                    <p className={`text-muted-foreground/60 text-sm lg:text-base italic leading-relaxed transition-all duration-500 ${isActive ? 'text-muted-foreground/80' : ''}`}>
                      "{founder.philosophy}"
                    </p>

                    {/* Bottom Accent - More prominent */}
                    <div className={`mt-8 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-700 ${isActive ? 'w-full' : 'w-24'}`} />
                  </div>

                  {/* Decorative dots */}
                  <div className="absolute top-1/2 -left-2 flex flex-col gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-primary' : 'bg-primary/30'}`} />
                    <div className={`w-1 h-1 rounded-full transition-all duration-500 ${isActive ? 'bg-primary/70' : 'bg-primary/20'}`} />
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-primary/50' : 'bg-primary/15'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline - Enhanced */}
        <div className={`text-center mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-primary/60 text-base tracking-[0.4em] uppercase font-medium">
              Design × Construction × Vision
            </p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>
      </div>
      
      {/* Bottom warm glow */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
    </section>
  );
};

// Main About Page
const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroAbout />
        <ArchitecturalPhilosophySection />
        <ProcessSection />
        <FoundersSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
