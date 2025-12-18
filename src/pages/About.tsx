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

// Immersive Manifesto Section - Architectural Path
const ManifestoSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lineHeight, setLineHeight] = useState(0);
  const { ref: beliefRef, isVisible: beliefVisible } = useScrollAnimation({ threshold: 0.3 });
  const { ref: pathRef, isVisible: pathVisible } = useScrollAnimation({ threshold: 0.1 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      // Calculate progress through section
      const progress = Math.max(0, Math.min(1, 
        (viewportHeight - rect.top) / (viewportHeight + sectionHeight * 0.5)
      ));
      setScrollProgress(progress);
      setLineHeight(progress * 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const philosophies = [
    {
      index: '01',
      title: 'Simplicity as Luxury',
      thought: 'The most powerful design is invisible.',
      continuation: 'It earns attention through restraint.',
      align: 'left',
      geometry: '◇',
    },
    {
      index: '02', 
      title: 'Execution Over Promises',
      thought: 'Ideas are abundant.',
      continuation: 'What separates us is obsessive focus on bringing every detail to life—no compromises.',
      align: 'right',
      geometry: '△',
    },
    {
      index: '03',
      title: 'Timeless Over Trendy',
      thought: 'Trends fade in seasons.',
      continuation: 'We build for decades.',
      align: 'left',
      geometry: '○',
    },
  ];

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-[#040404]" />
      
      {/* Subtle ambient glow */}
      <div 
        className="absolute inset-0 transition-opacity duration-[2000ms]"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, hsl(38 42% 55% / 0.015) 0%, transparent 70%)',
          opacity: scrollProgress > 0.1 ? 1 : 0,
        }}
      />

      {/* PART 1 - THE BELIEF */}
      <div ref={beliefRef} className="relative z-10 max-w-3xl mx-auto px-6 mb-20 md:mb-28">
        {/* Small Label */}
        <div className={`text-center mb-8 transition-all duration-1000 ${beliefVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <span className="text-primary/35 text-[8px] tracking-[0.5em] uppercase">Our Belief</span>
        </div>
        
        {/* Main Belief Statement */}
        <div className="text-center">
          <p className={`font-heading text-xl sm:text-2xl md:text-3xl leading-[1.4] tracking-tight transition-all duration-1000 delay-200 ${beliefVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span className="text-foreground/75">A space should feel </span>
            <span className="text-primary/60">calm</span>
            <span className="text-foreground/45"> before it looks beautiful.</span>
          </p>
        </div>
        
        {/* Subtle line */}
        <div className={`flex justify-center mt-10 transition-all duration-1500 delay-500 ${beliefVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className={`h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-[1500ms] delay-700 ${beliefVisible ? 'w-20' : 'w-0'}`} />
        </div>
      </div>

      {/* PART 2 - PHILOSOPHY PATH */}
      <div ref={pathRef} className="relative z-10 max-w-5xl mx-auto px-6">
        
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden md:block">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.05] to-transparent" />
          <div 
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary/25 via-primary/15 to-transparent transition-all duration-500"
            style={{ height: `${lineHeight}%` }}
          />
          {/* Ticks */}
          <div className="absolute top-[20%] left-0 w-2 h-px bg-primary/10 -translate-x-1/2" />
          <div className="absolute top-[50%] left-0 w-2 h-px bg-primary/10 -translate-x-1/2" />
          <div className="absolute top-[80%] left-0 w-2 h-px bg-primary/10 -translate-x-1/2" />
        </div>

        {/* Philosophy Points */}
        <div className="relative space-y-16 md:space-y-24">
          {philosophies.map((philosophy, index) => {
            const isVisible = pathVisible && scrollProgress > (index * 0.15 + 0.15);
            const alignLeft = philosophy.align === 'left';
            
            return (
              <div 
                key={philosophy.index}
                className={`relative flex ${alignLeft ? 'md:justify-start' : 'md:justify-end'} justify-center`}
              >
                {/* Geometry accent */}
                <div 
                  className={`absolute top-0 hidden md:block transition-all duration-1000 ${isVisible ? 'opacity-[0.04]' : 'opacity-0'}`}
                  style={{ left: alignLeft ? '48%' : 'auto', right: alignLeft ? 'auto' : '48%' }}
                >
                  <span className="text-3xl text-primary">{philosophy.geometry}</span>
                </div>

                {/* Content */}
                <div 
                  className={`relative max-w-sm ${alignLeft ? 'md:pr-20 md:text-right' : 'md:pl-20 md:text-left'} text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <span className="text-primary/20 text-[10px] tracking-[0.25em] font-light block mb-4">
                    {philosophy.index}
                  </span>
                  <h3 className="font-heading text-lg md:text-xl text-foreground/80 mb-3 tracking-tight">
                    {philosophy.title}
                  </h3>
                  <p className="text-foreground/50 text-[13px] leading-relaxed font-light">
                    {philosophy.thought} <span className="text-muted-foreground/40">{philosophy.continuation}</span>
                  </p>
                  
                  {/* Connection line */}
                  <div 
                    className={`hidden md:block absolute top-6 h-px bg-gradient-to-r transition-all duration-700 delay-200 ${
                      alignLeft ? 'right-0 from-transparent to-primary/10' : 'left-0 from-primary/10 to-transparent'
                    } ${isVisible ? 'w-16' : 'w-0'}`}
                    style={{ right: alignLeft ? '-80px' : 'auto', left: alignLeft ? 'auto' : '-80px' }}
                  />
                  <div 
                    className={`hidden md:block absolute top-[22px] w-1 h-1 rounded-full bg-primary/15 transition-all duration-500 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ right: alignLeft ? '-84px' : 'auto', left: alignLeft ? 'auto' : '-84px' }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom closure */}
        <div className={`flex flex-col items-center mt-20 transition-all duration-1000 ${pathVisible && scrollProgress > 0.7 ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-1.5 h-1.5 bg-primary/15 rotate-45 mb-5" />
          <p className="text-muted-foreground/25 text-[9px] tracking-[0.35em] uppercase">These guide everything we create</p>
        </div>
      </div>
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
        <ManifestoSection />
        <ProcessSection />
        <FoundersSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
