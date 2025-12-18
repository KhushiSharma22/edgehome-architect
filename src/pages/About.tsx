import { useEffect, useState, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';


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

// Immersive Architectural Philosophy Section - Exploded Sectional View
const ArchitecturalPhilosophySection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [sectionVisible, setSectionVisible] = useState(false);
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

  return (
    <section ref={sectionRef} className="relative min-h-screen py-32 md:py-40 overflow-hidden">
      {/* === LAYER 1: Base Dark Background === */}
      <div className="absolute inset-0 bg-[#030303]" />
      
      {/* === LAYER 2: Structural Blueprint Grid === */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translate(${scrollY * 0.08}px, ${scrollY * 0.05}px)`,
          transition: 'transform 1.2s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <defs>
          <pattern id="structuralGrid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.4" opacity="0.04" />
            <path d="M 60 0 L 60 120 M 0 60 L 120 60" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.2" opacity="0.02" />
            {/* Measurement ticks */}
            <line x1="0" y1="0" x2="6" y2="0" stroke="hsl(38 42% 55%)" strokeWidth="0.4" opacity="0.06" />
            <line x1="0" y1="0" x2="0" y2="6" stroke="hsl(38 42% 55%)" strokeWidth="0.4" opacity="0.06" />
            <circle cx="60" cy="60" r="1" fill="hsl(38 42% 55%)" opacity="0.03" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#structuralGrid)" />
      </svg>

      {/* === LAYER 3: Abstract Architectural Forms (Wall/Ceiling Volumes) === */}
      <svg 
        className="absolute inset-0 w-full h-full"
        style={{ 
          transform: `translate(${scrollY * -0.03}px, ${scrollY * -0.02}px)`,
          transition: 'transform 1.5s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Large rectangular volume - top left */}
        <rect x="5%" y="8%" width="28%" height="35%" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.5" opacity="0.04" />
        <rect x="7%" y="12%" width="22%" height="26%" fill="hsl(38 42% 55%)" opacity="0.008" />
        
        {/* Ceiling edge planes - right */}
        <path d="M 70% 5% L 95% 5% L 95% 25% L 85% 25% L 85% 15% L 70% 15% Z" fill="none" stroke="hsl(30 8% 55%)" strokeWidth="0.4" opacity="0.03" />
        <path d="M 72% 7% L 93% 7% L 93% 23% L 87% 23% L 87% 13% L 72% 13% Z" fill="hsl(30 8% 55%)" opacity="0.006" />
        
        {/* Wall outline - bottom right */}
        <path d="M 60% 65% L 92% 65% L 92% 95% L 75% 95% L 75% 80% L 60% 80% Z" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.5" opacity="0.035" />
        
        {/* Floating volume - center */}
        <rect x="40%" y="40%" width="20%" height="18%" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.025" />
        
        {/* Overlapping planes - bottom left */}
        <rect x="3%" y="70%" width="32%" height="25%" fill="none" stroke="hsl(30 8% 55%)" strokeWidth="0.4" opacity="0.03" />
        <rect x="8%" y="75%" width="25%" height="17%" fill="hsl(38 42% 55%)" opacity="0.01" />
      </svg>

      {/* === LAYER 4: Light & Material Texture Gradients === */}
      <div 
        className="absolute inset-0"
        style={{ 
          background: `
            radial-gradient(ellipse 80% 50% at 20% 30%, hsl(38 42% 55% / 0.02) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 70%, hsl(30 15% 50% / 0.015) 0%, transparent 45%),
            radial-gradient(ellipse 50% 60% at 50% 50%, hsl(38 42% 55% / 0.008) 0%, transparent 60%)
          `,
          transform: `translateY(${scrollY * 0.15}px)`,
          transition: 'transform 1s ease-out',
        }}
      />

      {/* Subtle stone/concrete texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* === LAYER 5: Architectural Micro-Details === */}
      <svg 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ 
          opacity: sectionVisible ? 1 : 0,
          transition: 'opacity 1.5s ease-out',
        }}
      >
        {/* Corner crop marks - top left */}
        <g opacity="0.08">
          <line x1="3%" y1="5%" x2="6%" y2="5%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
          <line x1="3%" y1="5%" x2="3%" y2="8%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
        </g>
        
        {/* Corner crop marks - top right */}
        <g opacity="0.08">
          <line x1="94%" y1="5%" x2="97%" y2="5%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
          <line x1="97%" y1="5%" x2="97%" y2="8%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
        </g>
        
        {/* Corner crop marks - bottom left */}
        <g opacity="0.08">
          <line x1="3%" y1="95%" x2="6%" y2="95%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
          <line x1="3%" y1="92%" x2="3%" y2="95%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
        </g>
        
        {/* Corner crop marks - bottom right */}
        <g opacity="0.08">
          <line x1="94%" y1="95%" x2="97%" y2="95%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
          <line x1="97%" y1="92%" x2="97%" y2="95%" stroke="hsl(38 42% 55%)" strokeWidth="0.5" />
        </g>
        
        {/* Measurement dots scattered */}
        <circle cx="15%" cy="25%" r="1.5" fill="hsl(38 42% 55%)" opacity="0.05" />
        <circle cx="85%" cy="35%" r="1.5" fill="hsl(38 42% 55%)" opacity="0.04" />
        <circle cx="50%" cy="75%" r="1.5" fill="hsl(38 42% 55%)" opacity="0.05" />
        <circle cx="25%" cy="85%" r="1.5" fill="hsl(30 8% 55%)" opacity="0.04" />
        
        {/* Alignment crosses */}
        <g opacity="0.04">
          <line x1="47%" y1="15%" x2="53%" y2="15%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
          <line x1="50%" y1="12%" x2="50%" y2="18%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
        </g>
        <g opacity="0.035">
          <line x1="12%" y1="55%" x2="18%" y2="55%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
          <line x1="15%" y1="52%" x2="15%" y2="58%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
        </g>
        
        {/* Thin gold construction rules */}
        <line x1="10%" y1="45%" x2="35%" y2="45%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.06" />
        <line x1="65%" y1="55%" x2="90%" y2="55%" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.05" />
        
        {/* Tiny labels */}
        <text x="3.5%" y="9%" fill="hsl(38 42% 55%)" fontSize="6" opacity="0.06" fontFamily="monospace">A-01</text>
        <text x="93%" y="9%" fill="hsl(38 42% 55%)" fontSize="6" opacity="0.05" fontFamily="monospace">SEC</text>
        <text x="3.5%" y="91%" fill="hsl(30 8% 55%)" fontSize="6" opacity="0.05" fontFamily="monospace">PL-1</text>
        
        {/* Faint geometry accents near zones */}
        <rect x="8%" y="18%" width="8" height="8" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.04" transform="rotate(45, 12%, 22%)" />
        <polygon points="82,200 88,192 94,200" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.035" />
        <circle cx="18%" cy="78%" r="4" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" opacity="0.04" />
      </svg>

      {/* Floating orbs */}
      <div className="absolute top-1/3 left-1/5 w-72 h-72 bg-primary/8 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '-4s' }} />

      {/* === CONTENT: Three Spatial Philosophy Zones === */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
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
        
        {/* Layout grid for three visible zones */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          
          {/* === ZONE A: Simplicity as Luxury === */}
          <div 
            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative p-8 lg:p-10 rounded-2xl border border-border/10 bg-card/5 hover:border-primary/20 hover:bg-card/10 transition-all duration-500 h-full">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
              
              {/* Icon */}
              <div className="relative mb-8">
                <span className="text-6xl text-primary/15 group-hover:text-primary/25 transition-colors duration-500">◯</span>
              </div>
              
              <h3 className="font-heading text-2xl lg:text-3xl text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-500">
                Simplicity as <span className="text-primary">Luxury</span>
              </h3>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                The most powerful design is invisible. It earns attention through <span className="text-primary/70">restraint</span>, not noise.
              </p>
              
              {/* Bottom line */}
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* === ZONE B: Execution Over Promises === */}
          <div 
            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '400ms' }}
          >
            <div className="relative p-8 lg:p-10 rounded-2xl border border-border/10 bg-card/5 hover:border-primary/20 hover:bg-card/10 transition-all duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
              
              <div className="relative mb-8">
                <span className="text-6xl text-primary/15 group-hover:text-primary/25 transition-colors duration-500">◇</span>
              </div>
              
              <h3 className="font-heading text-2xl lg:text-3xl text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-500">
                Execution Over <span className="text-primary">Promises</span>
              </h3>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Ideas are abundant. What separates us is obsessive focus on bringing every <span className="text-primary/70">detail</span> to life—without compromise.
              </p>
              
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>

          {/* === ZONE C: Timeless Over Trendy === */}
          <div 
            className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: '600ms' }}
          >
            <div className="relative p-8 lg:p-10 rounded-2xl border border-border/10 bg-card/5 hover:border-primary/20 hover:bg-card/10 transition-all duration-500 h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
              
              <div className="absolute top-0 left-0 w-12 h-12 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
              
              <div className="relative mb-8">
                <span className="text-6xl text-primary/15 group-hover:text-primary/25 transition-colors duration-500">△</span>
              </div>
              
              <h3 className="font-heading text-2xl lg:text-3xl text-foreground/90 mb-4 group-hover:text-foreground transition-colors duration-500">
                Timeless Over <span className="text-primary">Trendy</span>
              </h3>
              
              <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
                Trends fade in seasons. We build for <span className="text-primary/70">decades</span>.
              </p>
              
              <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Section viewport glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms]"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 100%, hsl(38 42% 55% / 0.02) 0%, transparent 50%)',
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
      {/* Background */}
      <div className="absolute inset-0 bg-[#040404]" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[140px] animate-float" style={{ animationDelay: '-4s' }} />
      
      {/* Dynamic Orb */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[180px] opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(38 42% 60% / 0.3), transparent)',
          left: `${mousePos.x * 25}%`,
          top: `${mousePos.y * 25}%`,
          transition: 'all 1.5s ease-out',
        }}
      />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-30" />

      {/* Subtle Grid */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.04]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="foundersGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(38 42% 60%)" strokeWidth="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundersGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-4 mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
            <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
              The Visionaries
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 ${isVisible ? 'w-16' : 'w-0'}`} />
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">Who We</span>
            <span className="text-shimmer italic">Are</span>
          </h2>
        </div>

        {/* Founders - Enhanced Cards */}
        <div className="grid lg:grid-cols-2 gap-10">
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
                {/* Card Glow */}
                <div className={`absolute -inset-3 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-3xl blur-xl transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card */}
                <div className={`
                  relative rounded-2xl overflow-hidden p-10 lg:p-12
                  border border-border/10 bg-gradient-to-br from-card/15 via-card/5 to-transparent
                  backdrop-blur-sm transition-all duration-500
                  ${isActive ? 'border-primary/20' : ''}
                `}>
                  {/* Corner accent */}
                  <div className="absolute top-0 left-0 w-14 h-14 border-l-2 border-t-2 border-primary/20 rounded-tl-2xl" />
                  
                  {/* Initial Background */}
                  <div className="absolute top-0 right-0 -mr-6 -mt-6 overflow-hidden">
                    <span 
                      className={`
                        text-[220px] font-heading leading-none select-none
                        bg-gradient-to-b from-primary/[0.06] to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isActive ? 'from-primary/[0.1]' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accent */}
                  <div className={`
                    absolute top-8 right-8 w-14 h-14 border border-primary/10 rotate-45
                    transition-all duration-700
                    ${isActive ? 'rotate-[55deg] border-primary/25' : ''}
                  `} />

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`
                      font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/90 mb-3
                      transition-all duration-500
                      ${isActive ? 'text-foreground' : ''}
                    `}>
                      {founder.name}
                    </h3>
                    
                    <div className="flex flex-col gap-1 mb-8">
                      <span className={`text-primary text-sm tracking-[0.2em] uppercase font-medium transition-all duration-500`}>
                        {founder.role}
                      </span>
                      <span className="text-muted-foreground/50 text-xs tracking-wider">
                        {founder.department}
                      </span>
                    </div>

                    <p className={`text-muted-foreground text-base lg:text-lg leading-relaxed mb-4 transition-all duration-500 ${isActive ? 'text-muted-foreground/90' : ''}`}>
                      {founder.description}
                    </p>
                    <p className={`text-muted-foreground/60 text-sm lg:text-base italic leading-relaxed transition-all duration-500 ${isActive ? 'text-muted-foreground/75' : ''}`}>
                      {founder.philosophy}
                    </p>

                    {/* Bottom Accent */}
                    <div className={`mt-8 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent transition-all duration-700 ${isActive ? 'w-full' : 'w-20'}`} />
                  </div>

                  {/* Corner Frames */}
                  <div className="absolute top-6 left-6">
                    <div className={`w-8 h-px bg-primary/25 transition-all duration-500 ${isActive ? 'w-10' : ''}`} />
                    <div className={`w-px h-8 bg-primary/25 transition-all duration-500 ${isActive ? 'h-10' : ''}`} />
                  </div>
                  <div className="absolute bottom-6 right-6">
                    <div className={`w-8 h-px bg-primary/25 ml-auto transition-all duration-500 ${isActive ? 'w-10' : ''}`} />
                    <div className={`w-px h-8 bg-primary/25 ml-auto transition-all duration-500 ${isActive ? 'h-10' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className={`text-center mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground/30 text-sm tracking-[0.4em] uppercase">
            Design × Construction × Vision
          </p>
        </div>
      </div>
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
