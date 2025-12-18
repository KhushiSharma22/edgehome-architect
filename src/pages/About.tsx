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

      {/* Subtle gradient on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[50%] bg-gradient-to-r from-black/30 to-transparent" />

      {/* Left Side - Architectural Visual Element */}
      <div 
        className={`absolute left-[5%] top-[15%] bottom-[15%] w-[18%] hidden lg:block transition-all duration-[2500ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          transitionDelay: '1200ms',
          transform: `translateY(${scrollY * 0.02}px)`,
        }}
      >
        {/* Subtle architectural frame */}
        <div className="relative w-full h-full">
          {/* Blueprint grid background */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]">
            <defs>
              <pattern id="leftGrid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="hsl(38 42% 55%)" strokeWidth="0.3" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#leftGrid)" />
          </svg>
          
          {/* Architectural outline */}
          <div className="absolute inset-4 border border-primary/[0.06]" />
          
          {/* Corner accents */}
          <div className="absolute top-8 left-8 w-8 h-8 border-l border-t border-primary/10" />
          <div className="absolute bottom-8 right-8 w-8 h-8 border-r border-b border-primary/10" />
          
          {/* Center measurement cross */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.06]">
            <div className="w-12 h-px bg-primary" />
            <div className="w-px h-12 bg-primary absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
          </div>
          
          {/* Floating diamond */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-3 h-3 border border-primary/10 rotate-45" />
        </div>
      </div>

      {/* Designer Easter Egg - Thin Vertical Gold Line (center divider) */}
      <div 
        className={`absolute left-[42%] top-[20%] bottom-[20%] w-px hidden lg:block transition-all duration-[2500ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Cinematic Vertical Image Strip - moved further right */}
      <div 
        className={`absolute right-[3%] top-[12%] bottom-[12%] w-[12%] hidden xl:block transition-all duration-[2800ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        style={{ 
          transitionDelay: '1500ms',
          transform: `translateY(${scrollY * -0.025}px)`,
        }}
      >
        {/* Gold Border with soft glow */}
        <div 
          className="absolute -inset-px"
          style={{
            background: 'linear-gradient(180deg, hsl(38 42% 55% / 0.2), hsl(38 42% 55% / 0.1), hsl(38 42% 55% / 0.2))',
            boxShadow: '0 0 25px hsl(38 42% 55% / 0.08)',
          }}
        />
        
        {/* Image Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Interior Image - warm minimal */}
          <img 
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
            alt="Luxury interior detail"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.15) translateY(${scrollY * 0.015}px)`,
              transition: 'transform 0.8s ease-out',
            }}
          />
          
          {/* Heavy Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/85" />
          
          {/* Blueprint Wireframe Overlay */}
          <svg 
            className="absolute inset-0 w-full h-full opacity-[0.08]"
            style={{
              transform: `translateY(${scrollY * 0.01}px)`,
              transition: 'transform 0.6s ease-out',
            }}
          >
            <defs>
              <pattern id="stripBlueprint" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="hsl(38 42% 65%)" strokeWidth="0.4" />
                <path d="M 16 0 L 16 32 M 0 16 L 32 16" fill="none" stroke="hsl(38 42% 65%)" strokeWidth="0.2" opacity="0.4" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#stripBlueprint)" />
          </svg>
          
          {/* Inner Gold Edge */}
          <div className="absolute inset-[1px] border border-primary/15 pointer-events-none" />
          
          {/* Corner Crop Marks */}
          <div className="absolute top-3 left-3">
            <div className="w-4 h-px bg-primary/35" />
            <div className="w-px h-4 bg-primary/35" />
          </div>
          <div className="absolute top-3 right-3 flex flex-col items-end">
            <div className="w-4 h-px bg-primary/35" />
            <div className="w-px h-4 bg-primary/35 ml-auto" />
          </div>
          <div className="absolute bottom-3 left-3 flex flex-col justify-end">
            <div className="w-px h-4 bg-primary/35" />
            <div className="w-4 h-px bg-primary/35" />
          </div>
          <div className="absolute bottom-3 right-3 flex flex-col items-end justify-end">
            <div className="w-px h-4 bg-primary/35 ml-auto" />
            <div className="w-4 h-px bg-primary/35" />
          </div>
          
          {/* Micro Label - Project Snapshot */}
          <div className="absolute bottom-5 left-0 right-0 px-3">
            <div className="text-center">
              <p className="text-primary/45 text-[7px] tracking-[0.2em] uppercase mb-0.5">
                Project Snapshot
              </p>
              <p className="text-foreground/25 text-[6px] tracking-[0.1em]">
                Residential · Delhi
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Asymmetrical Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-32">
          
          {/* Left Side - Intentional negative space */}
          <div className="col-span-12 lg:col-span-5 hidden lg:block" />

          {/* Right Side - Text Content */}
          <div className="col-span-12 lg:col-span-7 lg:pl-6">
            
            {/* Philosophy Label - First to appear */}
            <div 
              className={`mb-12 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <span className="text-primary/45 text-[9px] tracking-[0.5em] uppercase font-light">
                The EdgeHomes Philosophy
              </span>
            </div>

            {/* Headline - Refined Editorial Scale */}
            <div className="mb-12">
              <h1 className="font-heading leading-[1.12] tracking-[-0.01em]">
                {/* Line 1 */}
                <span 
                  className={`block text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] text-foreground/95 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '450ms' }}
                >
                  Design is not what we do.
                </span>
                
                {/* Line 2 */}
                <span 
                  className={`block text-[1.75rem] sm:text-[2rem] md:text-[2.5rem] lg:text-[2.85rem] mt-1 transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                  style={{ transitionDelay: '650ms' }}
                >
                  <span className="text-foreground/65">It's how we </span>
                  <span className="italic text-primary/90">think.</span>
                </span>
              </h1>
            </div>

            {/* Subtle Divider Line */}
            <div 
              className={`mb-8 transition-all duration-[1800ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '900ms' }}
            >
              <div className={`h-px bg-gradient-to-r from-primary/35 via-primary/20 to-transparent transition-all duration-[1800ms] ease-out ${isLoaded ? 'w-20' : 'w-0'}`} style={{ transitionDelay: '1100ms' }} />
            </div>

            {/* Subtext - Single Line, improved contrast */}
            <p 
              className={`text-muted-foreground/70 text-[13px] md:text-[15px] max-w-[420px] leading-[1.7] font-light tracking-wide transition-all duration-[1200ms] ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              A design & build studio shaping spaces that feel lived in, timeless, and intentional.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Hint - Minimal */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '2000ms' }}
      >
        <div className="w-px h-8 bg-gradient-to-b from-primary/30 to-transparent" />
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

      {/* === CONTENT: Three Spatial Philosophy Zones === */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        
        {/* Layout grid for three visible zones */}
        <div className="grid grid-cols-12 gap-6 min-h-[70vh] items-start">
          
          {/* === ZONE A: Left Upper - Simplicity as Luxury === */}
          <div 
            className={`col-span-12 md:col-span-5 lg:col-span-4 pt-8 md:pt-0 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Attached to structural edge - vertical gold rule */}
              <div className="absolute -left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/25 via-primary/10 to-transparent hidden lg:block" />
              
              {/* Defined architectural plane background */}
              <div className="absolute -inset-6 border-l border-t border-primary/[0.04] -z-10" />
              <div className="absolute -inset-6 bg-gradient-to-br from-primary/[0.015] to-transparent -z-10" />
              
              {/* Tiny index label */}
              <span className="text-primary/15 text-[9px] tracking-[0.3em] uppercase font-mono mb-6 block">
                Philosophy
              </span>
              
              {/* Title - serif, left aligned */}
              <h3 className="font-heading text-lg md:text-xl lg:text-2xl text-foreground/85 mb-4 tracking-tight text-left">
                Simplicity as <span className="text-primary/70">Luxury</span>
              </h3>
              
              {/* Thought - 1-2 lines */}
              <p className="text-foreground/50 text-[13px] md:text-sm leading-[1.7] font-light text-left max-w-xs">
                The most powerful design is invisible. It earns attention through <span className="text-primary/50">restraint</span>, not noise.
              </p>
              
              {/* Corner accent */}
              <div className="absolute -top-3 -right-3 w-5 h-5 border-r border-b border-primary/10 hidden md:block" />
            </div>
          </div>

          {/* Middle spacer */}
          <div className="hidden lg:block lg:col-span-4" />

          {/* === ZONE B: Right Center - Execution Over Promises === */}
          <div 
            className={`col-span-12 md:col-span-6 lg:col-span-4 md:col-start-7 lg:col-start-auto self-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
            style={{ transitionDelay: '500ms' }}
          >
            <div className="relative md:pl-8">
              {/* Anchored to vertical structural line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden md:block" />
              
              {/* Slightly more prominent glow */}
              <div className="absolute -inset-8 bg-gradient-to-l from-primary/[0.02] to-transparent rounded-lg -z-10" />
              
              {/* Geometry hint */}
              <div className="absolute -top-4 left-8 w-3 h-3 border border-primary/10 rotate-45 hidden md:block" />
              
              <span className="text-primary/15 text-[9px] tracking-[0.3em] uppercase font-mono mb-6 block">
                Commitment
              </span>
              
              <h3 className="font-heading text-lg md:text-xl lg:text-2xl text-foreground/90 mb-4 tracking-tight text-left">
                Execution Over <span className="text-primary/75">Promises</span>
              </h3>
              
              <p className="text-foreground/55 text-[13px] md:text-sm leading-[1.7] font-light text-left max-w-sm">
                Ideas are abundant. What separates us is obsessive focus on bringing every <span className="text-primary/55">detail</span> to life—without compromise.
              </p>
              
              {/* Thin gold rule attached */}
              <div className="mt-6 h-px w-24 bg-gradient-to-r from-primary/25 to-transparent" />
            </div>
          </div>

          {/* === ZONE C: Lower Left - Timeless Over Trendy === */}
          <div 
            className={`col-span-12 md:col-span-5 lg:col-span-5 mt-16 md:mt-24 lg:mt-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="relative">
              {/* Embedded inside a darker material block */}
              <div className="absolute -inset-8 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-lg -z-10" />
              <div className="absolute -inset-8 border border-primary/[0.03] rounded-lg -z-10" />
              
              {/* Softer ambient light */}
              <div className="absolute -inset-12 bg-radial-gradient opacity-30 -z-20" style={{
                background: 'radial-gradient(ellipse at center, hsl(38 42% 55% / 0.02) 0%, transparent 70%)'
              }} />
              
              <span className="text-primary/12 text-[9px] tracking-[0.3em] uppercase font-mono mb-6 block">
                Permanence
              </span>
              
              <h3 className="font-heading text-lg md:text-xl text-foreground/75 mb-4 tracking-tight text-left">
                Timeless Over <span className="text-primary/60">Trendy</span>
              </h3>
              
              <p className="text-foreground/40 text-[13px] leading-[1.7] font-light text-left max-w-xs">
                Trends fade in seasons. We build for <span className="text-primary/45">decades</span>.
              </p>
              
              {/* Bottom crop marks */}
              <div className="absolute -bottom-4 -left-4 flex items-end gap-px opacity-60">
                <div className="w-4 h-px bg-primary/15" />
                <div className="w-px h-4 bg-primary/15 -mb-[3px]" />
              </div>
            </div>
          </div>

          {/* Right side closing element */}
          <div 
            className={`hidden lg:block lg:col-span-6 lg:col-start-7 mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '1100ms' }}
          >
            <div className="relative h-full flex items-end justify-end pr-8 pb-8">
              {/* Closing architectural notation */}
              <div className="text-right">
                <div className="flex items-center justify-end gap-3 mb-3">
                  <div className="w-12 h-px bg-gradient-to-l from-primary/20 to-transparent" />
                  <span className="text-primary/15 text-[8px] tracking-[0.4em] uppercase font-mono">These guide us</span>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <div className="w-1.5 h-1.5 border border-primary/20 rotate-45" />
                  <div className="w-1 h-1 bg-primary/15 rounded-full" />
                  <div className="w-1.5 h-1.5 border border-primary/15" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section viewport glow effect */}
      <div 
        className="absolute inset-0 pointer-events-none transition-opacity duration-[2000ms]"
        style={{
          background: 'radial-gradient(ellipse 100% 60% at 50% 100%, hsl(38 42% 55% / 0.012) 0%, transparent 50%)',
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
    <section ref={containerRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-background to-[#050505]" />
      
      {/* Progress Line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/5 -translate-y-1/2 hidden lg:block">
        <div 
          className="h-full bg-gradient-to-r from-primary/40 to-primary/15 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="text-primary/40 text-[8px] tracking-[0.5em] uppercase mb-4 block">Our Journey</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/85">
            From <span className="text-primary/70">First Call</span> to Handover
          </h2>
        </div>

        {/* Timeline */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              {index < phases.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/20 to-transparent hidden lg:block" />
              )}
              
              <div className="relative p-6 rounded-xl border border-border/5 bg-card/5 hover:border-primary/15 hover:bg-card/10 transition-all duration-500">
                {/* Number */}
                <div className="relative mb-6">
                  <span className="text-5xl font-heading text-primary/8 group-hover:text-primary/15 transition-colors duration-500">
                    {phase.number}
                  </span>
                  <span className="absolute top-2 left-12 text-xl text-primary/20 group-hover:text-primary/35 group-hover:rotate-6 transition-all duration-500">
                    {phase.icon}
                  </span>
                </div>

                <h3 className="font-heading text-base text-foreground/80 mb-1 group-hover:text-foreground/90 transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-primary/45 text-[11px] italic mb-4">{phase.subtitle}</p>
                <p className="text-muted-foreground/50 text-[12px] leading-relaxed group-hover:text-muted-foreground/65 transition-colors duration-500">
                  {phase.description}
                </p>

                <div className="absolute bottom-6 left-6 right-6 h-px bg-gradient-to-r from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      className="relative py-24 md:py-32 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#040404]" />
      
      {/* Subtle Orbs */}
      <div 
        className="absolute w-[500px] h-[500px] rounded-full blur-[150px] opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(38 42% 60% / 0.25), transparent)',
          left: `${mousePos.x * 20}%`,
          top: `${mousePos.y * 20}%`,
          transition: 'all 1.5s ease-out',
        }}
      />

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

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="text-primary/35 text-[8px] tracking-[0.5em] uppercase mb-4 block">The Visionaries</span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl text-foreground/85">
            Who We <span className="text-primary/70">Are</span>
          </h2>
          <div className="flex items-center justify-center gap-4 mt-6">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/25" />
            <span className="text-muted-foreground/25 text-[8px] tracking-[0.3em] uppercase">Our Team</span>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary/25" />
          </div>
        </div>

        {/* Founders - Compact Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
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
                <div className={`absolute -inset-2 bg-gradient-to-br from-primary/8 via-transparent to-primary/4 rounded-2xl blur-xl transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card */}
                <div className={`
                  relative rounded-xl overflow-hidden p-8
                  border border-border/5 bg-gradient-to-br from-card/15 via-card/5 to-transparent
                  backdrop-blur-sm transition-all duration-500
                  ${isActive ? 'border-primary/15' : ''}
                `}>
                  {/* Initial Background */}
                  <div className="absolute top-0 right-0 -mr-8 -mt-8 overflow-hidden">
                    <span 
                      className={`
                        text-[180px] font-heading leading-none select-none
                        bg-gradient-to-b from-primary/[0.05] to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isActive ? 'from-primary/[0.08]' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accent */}
                  <div className={`
                    absolute top-6 right-6 w-12 h-12 border border-primary/8 rotate-45
                    transition-all duration-700
                    ${isActive ? 'rotate-[55deg] border-primary/20' : ''}
                  `} />

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`
                      font-heading text-xl md:text-2xl text-foreground/85 mb-2
                      transition-all duration-500
                      ${isActive ? 'text-foreground/95' : ''}
                    `}>
                      {founder.name}
                    </h3>
                    
                    <div className="flex flex-col gap-0.5 mb-6">
                      <span className={`text-primary/60 text-[10px] tracking-[0.2em] uppercase font-medium transition-all duration-500`}>
                        {founder.role}
                      </span>
                      <span className="text-muted-foreground/40 text-[9px] tracking-wider">
                        {founder.department}
                      </span>
                    </div>

                    <p className={`text-muted-foreground/55 text-[13px] leading-relaxed mb-3 transition-all duration-500 ${isActive ? 'text-muted-foreground/70' : ''}`}>
                      {founder.description}
                    </p>
                    <p className={`text-muted-foreground/40 text-[12px] italic leading-relaxed transition-all duration-500 ${isActive ? 'text-muted-foreground/55' : ''}`}>
                      {founder.philosophy}
                    </p>

                    {/* Bottom Accent */}
                    <div className={`mt-6 h-px bg-gradient-to-r from-primary/40 via-primary/20 to-transparent transition-all duration-700 ${isActive ? 'w-full' : 'w-16'}`} />
                  </div>

                  {/* Corner Frames */}
                  <div className="absolute top-4 left-4">
                    <div className={`w-6 h-px bg-primary/20 transition-all duration-500 ${isActive ? 'w-8' : ''}`} />
                    <div className={`w-px h-6 bg-primary/20 transition-all duration-500 ${isActive ? 'h-8' : ''}`} />
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className={`w-6 h-px bg-primary/20 ml-auto transition-all duration-500 ${isActive ? 'w-8' : ''}`} />
                    <div className={`w-px h-6 bg-primary/20 ml-auto transition-all duration-500 ${isActive ? 'h-8' : ''}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className={`text-center mt-16 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground/20 text-[9px] tracking-[0.4em] uppercase">
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
