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
      
      {/* Architectural Blueprint Layer */}
      <ArchitecturalBackground scrollY={scrollY} />

      {/* Subtle gradient on left side */}
      <div className="absolute left-0 top-0 bottom-0 w-[40%] bg-gradient-to-r from-black/20 to-transparent" />

      {/* Designer Easter Egg - Thin Vertical Gold Line */}
      <div 
        className={`absolute left-[38%] top-[15%] bottom-[15%] w-px transition-all duration-[2000ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1800ms' }}
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-primary/30 to-transparent" />
      </div>

      {/* Small Diamond Accent - Floating */}
      <div 
        className={`absolute left-[32%] top-[25%] transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        style={{ 
          transitionDelay: '2200ms',
          transform: `translateY(${scrollY * 0.05}px)`,
        }}
      >
        <div className="w-3 h-3 border border-primary/20 rotate-45" />
      </div>

      {/* Main Content - Asymmetrical Layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-32">
          
          {/* Left Side - Empty Space with subtle element */}
          <div className="col-span-12 lg:col-span-5 hidden lg:block">
            {/* Intentional negative space */}
          </div>

          {/* Right Side - Text Content */}
          <div className="col-span-12 lg:col-span-7 lg:pl-8">
            
            {/* Philosophy Label - Micro Story */}
            <div 
              className={`mb-10 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '300ms' }}
            >
              <span className="text-primary/50 text-[10px] tracking-[0.4em] uppercase font-light">
                The EdgeHomes Philosophy
              </span>
            </div>

            {/* Headline - Refined Editorial Scale */}
            <div className="mb-10">
              <h1 className="font-heading leading-[1.15] tracking-tight">
                {/* Line 1 */}
                <span 
                  className={`block text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl text-foreground/90 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: '500ms' }}
                >
                  Design is not what we do.
                </span>
                
                {/* Line 2 */}
                <span 
                  className={`block text-3xl sm:text-4xl md:text-[2.75rem] lg:text-5xl mt-2 transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                  style={{ transitionDelay: '700ms' }}
                >
                  <span className="text-foreground/70">It's how we </span>
                  <span className="italic text-primary">think.</span>
                </span>
              </h1>
            </div>

            {/* Subtle Divider Line */}
            <div 
              className={`mb-8 transition-all duration-[1500ms] ease-out ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '1000ms' }}
            >
              <div className={`h-px bg-gradient-to-r from-primary/40 to-transparent transition-all duration-[1500ms] ease-out ${isLoaded ? 'w-24' : 'w-0'}`} style={{ transitionDelay: '1200ms' }} />
            </div>

            {/* Subtext - Single Line */}
            <p 
              className={`text-muted-foreground/60 text-sm md:text-base max-w-md leading-relaxed font-light transition-all duration-1000 ease-out ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '1100ms' }}
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

// Philosophy Section - Immersive 3D Cards
const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const philosophies = [
    {
      number: '01',
      title: 'Simplicity as Luxury',
      quote: 'The most powerful design is invisible.',
      description: 'It doesn\'t demand attention—it earns it through quiet confidence and intentional restraint.',
      visual: '◇',
    },
    {
      number: '02',
      title: 'Execution Over Promises',
      quote: 'Ideas are abundant.',
      description: 'What separates us is our obsessive focus on bringing every detail to life exactly as envisioned—no compromises.',
      visual: '△',
    },
    {
      number: '03',
      title: 'Timeless Over Trendy',
      quote: 'Trends fade in seasons.',
      description: 'We design spaces meant to age gracefully. We build for decades.',
      visual: '○',
    },
  ];

  return (
    <section 
      ref={containerRef}
      className="relative py-48 md:py-64 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-[#050505]" />
      
      {/* Animated Mesh Gradient */}
      <div 
        className="absolute inset-0 opacity-30 transition-all duration-1000"
        style={{
          background: `
            conic-gradient(from ${mousePos.x * 360}deg at ${mousePos.x * 100}% ${mousePos.y * 100}%, 
              hsl(38 42% 60% / 0.1) 0deg, 
              transparent 60deg, 
              hsl(30 8% 70% / 0.05) 120deg, 
              transparent 180deg,
              hsl(38 42% 60% / 0.1) 240deg,
              transparent 300deg,
              hsl(38 42% 60% / 0.1) 360deg
            )
          `,
        }}
      />

      {/* Floating Lines */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
            style={{
              width: `${30 + i * 15}%`,
              top: `${20 + i * 15}%`,
              left: `${10 + i * 5}%`,
              transform: `translateX(${Math.sin((mousePos.x + i) * Math.PI) * 30}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
      </div>

      <div ref={ref} className="relative z-10 max-w-8xl mx-auto px-6">
        {/* Section Quote - Massive Typography */}
        <div className={`text-center mb-32 md:mb-48 transition-all duration-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Decorative Quote Mark */}
          <div className="relative">
            <span className="absolute -top-32 left-1/2 -translate-x-1/2 text-[300px] md:text-[500px] font-heading text-primary/[0.02] leading-none select-none pointer-events-none">
              "
            </span>
          </div>
          
          <blockquote className="relative font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] max-w-6xl mx-auto">
            <span className={`block overflow-hidden transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className={`inline-block ${isVisible ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000 delay-300`}>
                A space should feel
              </span>
            </span>
            <span className={`block overflow-hidden transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className={`inline-block text-gradient-gold ${isVisible ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000 delay-500`}>
                calm
              </span>
            </span>
            <span className={`block overflow-hidden text-foreground/50 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <span className={`inline-block ${isVisible ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-1000 delay-700`}>
                before it looks beautiful.
              </span>
            </span>
          </blockquote>

          {/* Animated Line Below Quote */}
          <div className={`flex items-center justify-center gap-4 mt-16 transition-all duration-1500 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className={`h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-all duration-2000 delay-1200 ${isVisible ? 'w-96' : 'w-0'}`} />
          </div>
        </div>

        {/* Philosophy Cards - 3D Perspective Grid */}
        <div className="relative perspective-[2000px]">
          {/* Section Label */}
          <div className={`flex items-center justify-center gap-8 mb-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-r from-transparent to-primary/30" />
            <span className="text-[10px] text-primary/50 tracking-[0.6em] uppercase">Our Philosophy</span>
            <div className="h-px flex-1 max-w-48 bg-gradient-to-l from-transparent to-primary/30" />
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {philosophies.map((philosophy, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={philosophy.number}
                  className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                  style={{ 
                    transitionDelay: `${800 + index * 200}ms`,
                    transform: isHovered 
                      ? `perspective(1000px) rotateX(${(mousePos.y - 0.5) * 5}deg) rotateY(${(mousePos.x - 0.5) * 5}deg) translateZ(50px)` 
                      : 'none',
                  }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Card Glow Effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-[2rem] blur-xl transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`} />
                  
                  {/* Card */}
                  <div className={`
                    relative min-h-[500px] lg:min-h-[600px] rounded-[2rem] overflow-hidden
                    border border-border/10 bg-card/20 backdrop-blur-md
                    transition-all duration-700
                    ${isHovered ? 'border-primary/30 bg-card/30' : ''}
                  `}>
                    {/* Animated Background Pattern */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000`}>
                      <div className="absolute inset-0" style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, hsl(38 42% 60% / 0.05) 0%, transparent 50%)`,
                        backgroundSize: '100px 100px',
                      }} />
                    </div>

                    {/* Number - Oversized */}
                    <div className="absolute top-8 left-8 right-8">
                      <span className={`
                        text-[180px] md:text-[220px] font-heading leading-none
                        bg-gradient-to-b from-primary/10 via-primary/5 to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isHovered ? 'from-primary/20 scale-105' : ''}
                      `}>
                        {philosophy.number}
                      </span>
                    </div>

                    {/* Floating Visual */}
                    <div className={`
                      absolute top-16 right-8 text-6xl text-primary/20
                      transition-all duration-700
                      ${isHovered ? 'text-primary/40 scale-125 rotate-12' : ''}
                    `}>
                      {philosophy.visual}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                      {/* Animated Top Border */}
                      <div className={`absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-30'}`} />
                      
                      <div className="relative pt-8">
                        {/* Title */}
                        <h3 className={`
                          font-heading text-3xl md:text-4xl text-foreground/90 mb-4
                          transition-all duration-500
                          ${isHovered ? 'text-foreground translate-x-2' : ''}
                        `}>
                          {philosophy.title}
                        </h3>
                        
                        {/* Quote Highlight */}
                        <p className={`
                          text-primary/80 text-lg md:text-xl font-light italic mb-4
                          transition-all duration-500 delay-100
                          ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-70'}
                        `}>
                          "{philosophy.quote}"
                        </p>
                        
                        {/* Description */}
                        <p className={`
                          text-muted-foreground/70 text-base leading-relaxed
                          transition-all duration-500 delay-200
                          ${isHovered ? 'opacity-100 translate-x-2' : 'opacity-50'}
                        `}>
                          {philosophy.description}
                        </p>

                        {/* Bottom Accent Line */}
                        <div className={`
                          mt-8 h-[2px] bg-gradient-to-r from-primary/60 to-transparent
                          transition-all duration-700
                          ${isHovered ? 'w-full' : 'w-16'}
                        `} />
                      </div>
                    </div>

                    {/* Corner Decorations */}
                    <div className="absolute top-6 left-6 w-12 h-12">
                      <div className={`absolute top-0 left-0 w-8 h-px bg-primary/30 transition-all duration-500 ${isHovered ? 'w-12' : ''}`} />
                      <div className={`absolute top-0 left-0 w-px h-8 bg-primary/30 transition-all duration-500 ${isHovered ? 'h-12' : ''}`} />
                    </div>
                    <div className="absolute bottom-6 right-6 w-12 h-12">
                      <div className={`absolute bottom-0 right-0 w-8 h-px bg-primary/30 transition-all duration-500 ${isHovered ? 'w-12' : ''}`} />
                      <div className={`absolute bottom-0 right-0 w-px h-8 bg-primary/30 transition-all duration-500 ${isHovered ? 'h-12' : ''}`} />
                    </div>

                    {/* Shimmer Sweep */}
                    <div className={`
                      absolute inset-0 -translate-x-full group-hover:translate-x-full
                      bg-gradient-to-r from-transparent via-white/[0.03] to-transparent
                      transition-transform duration-1500 ease-out
                      pointer-events-none
                    `} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Accent */}
        <div className={`flex items-center justify-center mt-32 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center gap-6">
            <div className="w-2 h-2 bg-primary/40 rotate-45" />
            <span className="text-muted-foreground/30 text-xs tracking-[0.4em] uppercase">These guide everything we create</span>
            <div className="w-2 h-2 bg-primary/40 rotate-45" />
          </div>
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
    <section ref={containerRef} className="relative py-48 md:py-64 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-background to-[#050505]" />
      
      {/* Progress Line - Animated */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-border/10 -translate-y-1/2 hidden lg:block">
        <div 
          className="h-full bg-gradient-to-r from-primary/50 to-primary/20 transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      <div ref={ref} className="relative z-10 max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-primary/50 text-[10px] tracking-[0.6em] uppercase mb-6 block">Our Journey Together</span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground/90">
            From <span className="text-gradient-gold">First Call</span> to Final Handover
          </h2>
        </div>

        {/* Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {phases.map((phase, index) => (
            <div
              key={phase.number}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Connection Line */}
              {index < phases.length - 1 && (
                <div className="absolute top-1/2 -right-3 w-6 h-px bg-gradient-to-r from-primary/30 to-transparent hidden lg:block" />
              )}
              
              {/* Card */}
              <div className="relative min-h-[400px] p-8 rounded-2xl border border-border/10 bg-card/10 backdrop-blur-sm hover:border-primary/20 hover:bg-card/20 transition-all duration-700">
                {/* Number */}
                <div className="relative mb-12">
                  <span className="text-8xl font-heading text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {phase.number}
                  </span>
                  <span className="absolute top-4 left-20 text-3xl text-primary/30 group-hover:text-primary/50 group-hover:rotate-12 transition-all duration-500">
                    {phase.icon}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-heading text-2xl text-foreground/90 mb-2 group-hover:text-foreground transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-primary/60 text-sm italic mb-6">{phase.subtitle}</p>
                <p className="text-muted-foreground/60 text-sm leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-500">
                  {phase.description}
                </p>

                {/* Bottom Line */}
                <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      className="relative py-48 md:py-64 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background with Gradient Orbs */}
      <div className="absolute inset-0 bg-[#040404]" />
      
      {/* Animated Orbs */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full blur-[200px] opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(38 42% 60% / 0.3), transparent)',
          left: `${mousePos.x * 30}%`,
          top: `${mousePos.y * 30}%`,
          transition: 'all 1s ease-out',
        }}
      />
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(30 8% 70% / 0.3), transparent)',
          right: `${(1 - mousePos.x) * 30}%`,
          bottom: `${(1 - mousePos.y) * 30}%`,
          transition: 'all 1.5s ease-out',
        }}
      />

      {/* Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="foundersGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(38 42% 60%)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundersGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-8xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-32 md:mb-48 transition-all duration-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <span className="text-primary/50 text-[10px] tracking-[0.6em] uppercase mb-6 block">The Visionaries</span>
          <h2 className="font-heading text-6xl md:text-7xl lg:text-8xl text-foreground/90">
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="h-px w-24 bg-gradient-to-r from-transparent to-primary/40" />
            <span className="text-muted-foreground/30 text-[10px] tracking-[0.4em] uppercase">Our Team</span>
            <div className="h-px w-24 bg-gradient-to-l from-transparent to-primary/40" />
          </div>
        </div>

        {/* Founders Cards - Magazine Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {founders.map((founder, index) => {
            const isActive = activeFounder === index;
            
            return (
              <div
                key={founder.name}
                className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-24'}`}
                style={{ transitionDelay: `${500 + index * 300}ms` }}
                onMouseEnter={() => setActiveFounder(index)}
                onMouseLeave={() => setActiveFounder(null)}
              >
                {/* Card Glow */}
                <div className={`absolute -inset-4 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 rounded-[3rem] blur-2xl transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card */}
                <div className={`
                  relative min-h-[700px] rounded-[2.5rem] overflow-hidden
                  border border-border/10 bg-gradient-to-br from-card/30 via-card/10 to-transparent
                  backdrop-blur-xl transition-all duration-700
                  ${isActive ? 'border-primary/20 scale-[1.02]' : ''}
                `}>
                  {/* Giant Initial - Background */}
                  <div className="absolute top-0 left-0 right-0 h-[400px] flex items-center justify-center overflow-hidden">
                    <span 
                      className={`
                        text-[400px] md:text-[500px] font-heading leading-none select-none
                        bg-gradient-to-b from-primary/[0.08] to-transparent bg-clip-text text-transparent
                        transition-all duration-1000
                        ${isActive ? 'scale-110 from-primary/[0.12]' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accents */}
                  <div className={`
                    absolute top-16 right-16 w-32 h-32 border border-primary/10 rotate-45
                    transition-all duration-1000
                    ${isActive ? 'rotate-[60deg] scale-110 border-primary/30' : ''}
                  `} />
                  <div className={`
                    absolute top-24 right-24 w-20 h-20 border border-primary/5 rotate-12
                    transition-all duration-1000
                    ${isActive ? 'rotate-[30deg] scale-90 border-primary/20' : ''}
                  `} />

                  {/* Content Area */}
                  <div className="absolute bottom-0 left-0 right-0 p-10 lg:p-14">
                    {/* Top Border Glow */}
                    <div className={`absolute top-0 left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-30'}`} />
                    
                    <div className="relative pt-10">
                      {/* Name */}
                      <h3 className={`
                        font-heading text-4xl md:text-5xl lg:text-6xl text-foreground/90 mb-4
                        transition-all duration-500
                        ${isActive ? 'text-foreground translate-x-2' : ''}
                      `}>
                        {founder.name}
                      </h3>
                      
                      {/* Role */}
                      <div className="flex flex-col gap-1 mb-10">
                        <span className={`text-primary text-sm tracking-[0.3em] uppercase font-medium transition-all duration-500 ${isActive ? 'translate-x-2' : ''}`}>
                          {founder.role}
                        </span>
                        <span className={`text-muted-foreground/50 text-xs tracking-wider transition-all duration-500 delay-100 ${isActive ? 'translate-x-2' : ''}`}>
                          ({founder.department})
                        </span>
                      </div>

                      {/* Description */}
                      <div className={`space-y-4 transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-60'}`}>
                        <p className={`text-muted-foreground leading-relaxed transition-all duration-500 delay-200 ${isActive ? 'translate-x-2' : ''}`}>
                          "{founder.description}"
                        </p>
                        <p className={`text-muted-foreground/60 text-sm italic leading-relaxed transition-all duration-500 delay-300 ${isActive ? 'translate-x-2' : ''}`}>
                          {founder.philosophy}
                        </p>
                      </div>

                      {/* Bottom Accent */}
                      <div className={`mt-10 h-[2px] bg-gradient-to-r from-primary/60 via-primary/30 to-transparent transition-all duration-1000 ${isActive ? 'w-full' : 'w-24'}`} />
                    </div>
                  </div>

                  {/* Corner Frames */}
                  <div className="absolute top-8 left-8 w-16 h-16">
                    <div className={`absolute top-0 left-0 w-12 h-px bg-primary/30 transition-all duration-500 ${isActive ? 'w-16' : ''}`} />
                    <div className={`absolute top-0 left-0 w-px h-12 bg-primary/30 transition-all duration-500 ${isActive ? 'h-16' : ''}`} />
                  </div>
                  <div className="absolute bottom-8 right-8 w-16 h-16">
                    <div className={`absolute bottom-0 right-0 w-12 h-px bg-primary/30 transition-all duration-500 ${isActive ? 'w-16' : ''}`} />
                    <div className={`absolute bottom-0 right-0 w-px h-12 bg-primary/30 transition-all duration-500 ${isActive ? 'h-16' : ''}`} />
                  </div>

                  {/* Shimmer Effect */}
                  <div className={`
                    absolute inset-0 -translate-x-full group-hover:translate-x-full
                    bg-gradient-to-r from-transparent via-white/[0.02] to-transparent
                    transition-transform duration-2000 ease-out pointer-events-none
                  `} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline */}
        <div className={`text-center mt-32 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-muted-foreground/30 text-[10px] tracking-[0.5em] uppercase">
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
        <PhilosophySection />
        <ProcessSection />
        <FoundersSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
