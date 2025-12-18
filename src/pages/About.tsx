import { useEffect, useState, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";


// Particle System Component
const ParticleField = () => {
  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/30"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: p.size,
            height: p.size,
            animation: `float ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
            filter: 'blur(0.5px)',
          }}
        />
      ))}
    </div>
  );
};

// Morphing 3D Shape
const MorphingShape = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
  return (
    <div 
      className={`absolute ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <linearGradient id="morphGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(38 42% 55% / 0.3)" />
            <stop offset="50%" stopColor="hsl(38 50% 60% / 0.15)" />
            <stop offset="100%" stopColor="hsl(30 40% 50% / 0.2)" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        <path 
          fill="url(#morphGradient)" 
          filter="url(#glow)"
          className="animate-morph"
          d="M47.5,-57.2C59.9,-45.8,67.5,-29.5,70.8,-12.1C74.1,5.4,73.1,24,64.3,37.6C55.5,51.2,38.9,59.8,21.5,65.2C4.1,70.6,-14.2,72.8,-30.3,67.2C-46.4,61.6,-60.4,48.2,-68.5,31.6C-76.6,15,-78.9,-4.8,-73.2,-22.1C-67.5,-39.4,-53.8,-54.2,-38.4,-65C-23,-75.8,-5.8,-82.6,9.4,-79.8C24.6,-77,35.1,-68.6,47.5,-57.2Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

// Animated Text Reveal with Stagger
const RevealText = ({ text, className = "", delay = 0 }: { text: string; className?: string; delay?: number }) => {
  const words = text.split(' ');
  return (
    <span className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden">
          <span 
            className="inline-block animate-slide-up"
            style={{ animationDelay: `${delay + i * 0.1}s`, animationFillMode: 'backwards' }}
          >
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
};

// Hero Section - Unprecedented Cinematic Design
const HeroAbout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left - rect.width / 2) / rect.width,
      y: (e.clientY - rect.top - rect.height / 2) / rect.height,
    });
  };

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* === LAYERED BACKGROUND SYSTEM === */}
      
      {/* Base - Deep Dark with Warmth */}
      <div className="absolute inset-0 bg-[#050403]" />
      
      {/* Dynamic Gradient that follows mouse */}
      <div 
        className="absolute inset-0 transition-all duration-1000 ease-out"
        style={{
          background: `
            radial-gradient(circle at ${50 + mousePos.x * 20}% ${50 + mousePos.y * 20}%, 
              hsl(38 50% 50% / 0.12) 0%, 
              transparent 50%
            ),
            radial-gradient(circle at ${30 - mousePos.x * 10}% ${70 - mousePos.y * 10}%, 
              hsl(25 45% 45% / 0.08) 0%, 
              transparent 40%
            ),
            radial-gradient(circle at ${70 + mousePos.x * 15}% ${30 + mousePos.y * 15}%, 
              hsl(42 55% 55% / 0.06) 0%, 
              transparent 35%
            )
          `
        }}
      />

      {/* Animated Mesh Grid - 3D Perspective */}
      <div 
        className="absolute inset-0 opacity-[0.04]"
        style={{
          perspective: '1000px',
          perspectiveOrigin: `${50 + mousePos.x * 30}% ${50 + mousePos.y * 30}%`,
        }}
      >
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(38 42% 55%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(38 42% 55%) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
            transform: `rotateX(${60 + mousePos.y * 10}deg) translateZ(-100px) scale(2.5)`,
            transformOrigin: 'center center',
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      {/* Morphing Shapes Layer - Reduced opacity */}
      <MorphingShape className="w-[600px] h-[600px] -top-32 -left-32 opacity-20" delay={0} />
      <MorphingShape className="w-[500px] h-[500px] -bottom-20 -right-20 opacity-15" delay={-5} />
      <MorphingShape className="w-[300px] h-[300px] top-1/2 left-1/4 opacity-10" delay={-10} />

      {/* Particle Field */}
      <ParticleField />

      {/* Diagonal Light Beams - Reduced */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary/15 to-transparent"
          style={{
            top: '30%',
            left: '-50%',
            transform: `rotate(-15deg) translateX(${scrollY * 0.3}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
        <div 
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            top: '60%',
            left: '-50%',
            transform: `rotate(-15deg) translateX(${-scrollY * 0.2}px)`,
            transition: 'transform 0.1s ease-out',
          }}
        />
      </div>

      {/* Vertical Light Pillars - Reduced */}
      <div className="absolute inset-0 pointer-events-none">
        {[15, 35, 65, 85].map((pos, i) => (
          <div 
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{
              left: `${pos}%`,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsl(38 42% 55% / ${0.04 + i * 0.01}) 30%, 
                hsl(38 42% 55% / ${0.06 + i * 0.01}) 50%, 
                hsl(38 42% 55% / ${0.04 + i * 0.01}) 70%, 
                transparent 100%
              )`,
              opacity: isLoaded ? 1 : 0,
              transition: `opacity 2s ease-out ${1 + i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Orbs - Reduced glow */}
      <div 
        className="absolute w-80 h-80 rounded-full blur-[120px] animate-float"
        style={{
          top: '10%',
          left: '20%',
          background: 'radial-gradient(circle, hsl(38 50% 55% / 0.08) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px)`,
          transition: 'transform 0.5s ease-out',
        }}
      />
      <div 
        className="absolute w-96 h-96 rounded-full blur-[150px] animate-float"
        style={{
          bottom: '10%',
          right: '15%',
          background: 'radial-gradient(circle, hsl(30 45% 50% / 0.06) 0%, transparent 70%)',
          transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)`,
          transition: 'transform 0.7s ease-out',
          animationDelay: '-7s',
        }}
      />

      {/* Cinematic Vignette - Lighter */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 120% 100% at 50% 50%, transparent 40%, hsl(0 0% 3% / 0.4) 100%),
          linear-gradient(180deg, hsl(0 0% 3% / 0.2) 0%, transparent 30%, transparent 70%, hsl(0 0% 3% / 0.3) 100%)
        `
      }} />

      {/* Grain Texture - Reduced */}
      <div className="absolute inset-0 grain opacity-30" />

      {/* === SPLIT SCREEN REVEAL PANELS === */}
      <div 
        className={`absolute inset-0 flex transition-all duration-[2000ms] ease-out ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
        style={{ zIndex: 50 }}
      >
        <div 
          className="w-1/2 h-full bg-[#050403]"
          style={{
            transform: isLoaded ? 'translateX(-100%)' : 'translateX(0)',
            transition: 'transform 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        />
        <div 
          className="w-1/2 h-full bg-[#050403]"
          style={{
            transform: isLoaded ? 'translateX(100%)' : 'translateX(0)',
            transition: 'transform 1.5s cubic-bezier(0.77, 0, 0.175, 1)',
          }}
        />
      </div>

      {/* === MAIN CONTENT === */}
      <div className="relative z-30 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-6 items-center min-h-screen py-32">
          
          {/* Left Column - Large Typography */}
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
            
            {/* Philosophy Label with animated line */}
            <div 
              className={`mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '1.5s' }}
            >
              <span className="inline-flex items-center gap-4">
                <span 
                  className="h-px bg-gradient-to-r from-transparent to-primary"
                  style={{
                    width: isLoaded ? '4rem' : '0',
                    transition: 'width 1s ease-out 2s',
                  }}
                />
                <span className="text-primary text-xs tracking-[0.5em] uppercase font-medium">
                  The EdgeHomes Philosophy
                </span>
                <span 
                  className="h-px bg-gradient-to-l from-transparent to-primary"
                  style={{
                    width: isLoaded ? '4rem' : '0',
                    transition: 'width 1s ease-out 2s',
                  }}
                />
              </span>
            </div>

            {/* Main Headline - Refined Size */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground mb-10 leading-[0.9] tracking-tight">
              <span 
                className={`block overflow-hidden mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '1.7s' }}
              >
                <span className="block" style={{
                  transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(-45deg)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.8s',
                }}>
                  Design is
                </span>
              </span>
              <span 
                className={`block overflow-hidden mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '2s' }}
              >
                <span className="block text-muted-foreground" style={{
                  transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(-45deg)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.1s',
                }}>
                  not what
                </span>
              </span>
              <span 
                className={`block overflow-hidden mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '2.3s' }}
              >
                <span className="block text-muted-foreground" style={{
                  transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(-45deg)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.4s',
                }}>
                  we do.
                </span>
              </span>
              <span 
                className={`block overflow-hidden transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                style={{ transitionDelay: '2.6s' }}
              >
                <span className="block" style={{
                  transform: isLoaded ? 'translateY(0) rotateX(0)' : 'translateY(100%) rotateX(-45deg)',
                  transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2.7s',
                }}>
                  It's how we{' '}
                  <span className="relative inline-block">
                    <span className="text-primary italic">think.</span>
                    {/* Subtle underline */}
                    <span 
                      className="absolute -bottom-1 left-0 h-[2px] bg-gradient-to-r from-primary/60 to-primary/30"
                      style={{
                        width: isLoaded ? '100%' : '0%',
                        transition: 'width 1s ease-out 3.5s',
                      }}
                    />
                  </span>
                </span>
              </span>
            </h1>

            {/* Subtext */}
            <p 
              className={`text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-14 leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}
              style={{ transitionDelay: '3s' }}
            >
              A design & build studio shaping spaces that feel lived in, timeless, and intentional.
            </p>

            {/* Interactive Stats Row */}
            <div 
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ transitionDelay: '3.3s' }}
            >
              {[
                { value: '10+', label: 'Years Experience' },
                { value: '200+', label: 'Projects Delivered' },
                { value: '100%', label: 'Client Satisfaction' },
              ].map((stat, i) => (
                <div 
                  key={stat.label}
                  className="group relative text-center lg:text-left cursor-default"
                >
                  <div className="text-3xl md:text-4xl font-heading text-primary mb-1 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute -inset-4 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual Element */}
          <div className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-center">
            <div 
              className={`relative transition-all duration-[2000ms] ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}
              style={{ transitionDelay: '2s' }}
            >
              {/* Floating architectural frame */}
              <div 
                className="relative w-80 h-96"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePos.x * 10}deg) rotateX(${mousePos.y * -10}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Outer frame */}
                <div className="absolute inset-0 border border-primary/30">
                  {/* Corner accents */}
                  <div className="absolute -top-2 -left-2 w-6 h-6 border-l-2 border-t-2 border-primary" />
                  <div className="absolute -top-2 -right-2 w-6 h-6 border-r-2 border-t-2 border-primary" />
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 border-l-2 border-b-2 border-primary" />
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-r-2 border-b-2 border-primary" />
                </div>
                
                {/* Inner content */}
                <div className="absolute inset-4 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80"
                    alt="Luxury interior"
                    className="w-full h-full object-cover"
                    style={{
                      transform: `scale(1.1) translate(${mousePos.x * -10}px, ${mousePos.y * -10}px)`,
                      transition: 'transform 0.5s ease-out',
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  
                  {/* Floating label */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="text-[10px] text-primary tracking-[0.3em] uppercase mb-1">Featured Project</div>
                    <div className="text-sm text-foreground/80">Modern Residence • Delhi</div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-px h-32 bg-gradient-to-b from-transparent via-primary/50 to-transparent" />
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-px w-32 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                
                {/* Floating diamonds */}
                <div className="absolute -top-6 right-12 w-3 h-3 bg-primary/40 rotate-45 animate-pulse" style={{ animationDuration: '3s' }} />
                <div className="absolute -left-6 bottom-20 w-2 h-2 bg-primary/30 rotate-45 animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corner Frames */}
      <div className={`absolute top-8 left-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.5s' }}>
        <div className="w-20 h-20 border-l-2 border-t-2 border-primary/30" />
      </div>
      <div className={`absolute top-8 right-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.6s' }}>
        <div className="w-20 h-20 border-r-2 border-t-2 border-primary/30" />
      </div>
      <div className={`absolute bottom-8 left-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.7s' }}>
        <div className="w-20 h-20 border-l-2 border-b-2 border-primary/30" />
      </div>
      <div className={`absolute bottom-8 right-8 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.8s' }}>
        <div className="w-20 h-20 border-r-2 border-b-2 border-primary/30" />
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`absolute bottom-12 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '4s' }}
      >
        <div className="flex flex-col items-center gap-4 group">
          <span className="text-[10px] text-muted-foreground tracking-[0.4em] uppercase group-hover:text-primary transition-colors duration-500">
            Discover
          </span>
          <div className="relative">
            <div className="w-8 h-14 rounded-full border-2 border-primary/40 group-hover:border-primary transition-colors duration-500">
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-3 bg-primary rounded-full animate-scroll-mouse" />
            </div>
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping" style={{ animationDuration: '2s' }} />
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

// Inspiration Banner Section
const InspirationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 md:py-20 bg-[#F6F1EA] overflow-hidden"
    >
      {/* Subtle texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Left Furniture - Pelican Chair (Finn Juhl inspired) */}
          <div 
            className={`hidden md:block w-48 lg:w-56 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <svg viewBox="0 0 280 260" className="w-full h-auto">
              <defs>
                {/* Fabric gradients with realistic shading */}
                <linearGradient id="fabricMain" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3D6B66" />
                  <stop offset="40%" stopColor="#2D524E" />
                  <stop offset="100%" stopColor="#1E3835" />
                </linearGradient>
                <linearGradient id="fabricHighlight" x1="0%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#4A7A75" />
                  <stop offset="100%" stopColor="#3D6B66" />
                </linearGradient>
                <linearGradient id="fabricShadow" x1="100%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#2D524E" />
                  <stop offset="100%" stopColor="#1A2E2C" />
                </linearGradient>
                <linearGradient id="woodLeg" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E8C9A0" />
                  <stop offset="30%" stopColor="#D4A574" />
                  <stop offset="70%" stopColor="#C49564" />
                  <stop offset="100%" stopColor="#A67B4A" />
                </linearGradient>
                <linearGradient id="pillowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#C8CED0" />
                  <stop offset="50%" stopColor="#A8B0B3" />
                  <stop offset="100%" stopColor="#8A9396" />
                </linearGradient>
                <filter id="softShadow">
                  <feDropShadow dx="4" dy="6" stdDeviation="8" floodOpacity="0.25"/>
                </filter>
              </defs>
              
              {/* Chair back - organic wing shape */}
              <path d="M45 85 Q30 60 50 35 Q80 10 130 15 Q170 20 190 50 Q200 75 185 110 Q175 130 160 145 Q140 160 120 165 Q90 170 65 155 Q45 140 45 115 Z" 
                fill="url(#fabricMain)" filter="url(#softShadow)"/>
              {/* Back highlight */}
              <path d="M55 80 Q45 60 60 40 Q85 20 125 22 Q155 25 170 50 Q178 70 168 95 Q160 115 145 128 Q125 142 105 145 Q80 148 62 135 Q50 120 55 100 Z" 
                fill="url(#fabricHighlight)" opacity="0.6"/>
              
              {/* Seat cushion - thick and plush */}
              <ellipse cx="125" cy="155" rx="70" ry="28" fill="url(#fabricShadow)" filter="url(#softShadow)"/>
              <ellipse cx="125" cy="152" rx="68" ry="26" fill="url(#fabricMain)"/>
              <ellipse cx="120" cy="148" rx="55" ry="18" fill="url(#fabricHighlight)" opacity="0.4"/>
              
              {/* Pillow with realistic form */}
              <ellipse cx="85" cy="115" rx="28" ry="22" fill="url(#pillowGrad)" transform="rotate(-18 85 115)" filter="url(#softShadow)"/>
              <ellipse cx="82" cy="112" rx="22" ry="16" fill="#D8DEE0" transform="rotate(-18 82 112)" opacity="0.5"/>
              
              {/* Wooden legs with grain detail */}
              <path d="M68 178 L58 235 Q57 240 60 242 L65 240 L78 180 Z" fill="url(#woodLeg)"/>
              <path d="M180 175 L195 232 Q196 238 193 240 L188 238 L177 178 Z" fill="url(#woodLeg)"/>
              <path d="M125 180 L125 238 Q125 242 128 243 L132 241 L132 180 Z" fill="url(#woodLeg)"/>
              
              {/* Small side table */}
              <ellipse cx="215" cy="142" rx="22" ry="7" fill="url(#woodLeg)" filter="url(#softShadow)"/>
              <rect x="212" y="145" width="6" height="48" rx="2" fill="url(#woodLeg)"/>
              
              {/* Cup on table */}
              <ellipse cx="215" cy="130" rx="8" ry="3" fill="#FFFFFF"/>
              <path d="M207 130 L207 142 Q207 145 215 145 Q223 145 223 142 L223 130 Z" fill="#FAFAFA"/>
              <ellipse cx="215" cy="135" rx="6" ry="2" fill="#E8DDD4"/>
            </svg>
          </div>

          {/* Center Text */}
          <div 
            className={`flex-1 text-center px-6 md:px-12 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#1C1C1C] tracking-[0.12em] leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              INSPIRED BY ARTISTRY,
              <br />
              <span className="text-[#C7A76A]">OBJECTS</span>, DESIGNS
              <br />
              AND THE FUTURE
            </h2>
          </div>

          {/* Right Furniture - Egg Chair (Arne Jacobsen inspired) */}
          <div 
            className={`hidden md:block w-48 lg:w-56 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <svg viewBox="0 0 260 300" className="w-full h-auto">
              <defs>
                {/* Leather gradients */}
                <linearGradient id="leatherOuter" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D68B5A" />
                  <stop offset="30%" stopColor="#C47A4A" />
                  <stop offset="70%" stopColor="#B5693C" />
                  <stop offset="100%" stopColor="#8B4D2A" />
                </linearGradient>
                <linearGradient id="leatherInner" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#E8A070" />
                  <stop offset="50%" stopColor="#D68B5A" />
                  <stop offset="100%" stopColor="#C47A4A" />
                </linearGradient>
                <linearGradient id="leatherDeep" x1="50%" y1="0%" x2="50%" y2="100%">
                  <stop offset="0%" stopColor="#B5693C" />
                  <stop offset="100%" stopColor="#7A4025" />
                </linearGradient>
                <linearGradient id="chromeMetal" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D0D0D0" />
                  <stop offset="25%" stopColor="#A8A8A8" />
                  <stop offset="50%" stopColor="#E8E8E8" />
                  <stop offset="75%" stopColor="#909090" />
                  <stop offset="100%" stopColor="#787878" />
                </linearGradient>
                <radialGradient id="leatherShine" cx="30%" cy="20%" r="60%">
                  <stop offset="0%" stopColor="#F0B080" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#D68B5A" stopOpacity="0"/>
                </radialGradient>
                <filter id="chairShadow">
                  <feDropShadow dx="5" dy="8" stdDeviation="10" floodOpacity="0.3"/>
                </filter>
              </defs>
              
              {/* Main egg shell body */}
              <path d="M130 20 Q45 25 35 120 Q30 180 55 210 Q85 245 130 248 Q175 245 205 210 Q230 180 225 120 Q215 25 130 20 Z" 
                fill="url(#leatherOuter)" filter="url(#chairShadow)"/>
              
              {/* Inner shell curve */}
              <path d="M130 35 Q65 40 55 115 Q52 165 72 192 Q95 220 130 222 Q165 220 188 192 Q208 165 205 115 Q195 40 130 35 Z" 
                fill="url(#leatherInner)"/>
              
              {/* Deep interior/seat cavity */}
              <path d="M130 55 Q85 60 78 120 Q75 155 90 175 Q110 195 130 196 Q150 195 170 175 Q185 155 182 120 Q175 60 130 55 Z" 
                fill="url(#leatherDeep)"/>
              
              {/* Highlight shine */}
              <ellipse cx="95" cy="80" rx="35" ry="50" fill="url(#leatherShine)"/>
              
              {/* Stitching detail */}
              <path d="M65 50 Q130 30 195 50" stroke="#7A4025" strokeWidth="1.5" fill="none" strokeDasharray="6,4" opacity="0.6"/>
              <path d="M55 100 Q130 85 205 100" stroke="#7A4025" strokeWidth="1" fill="none" strokeDasharray="4,3" opacity="0.4"/>
              
              {/* Chrome pedestal */}
              <ellipse cx="130" cy="268" rx="35" ry="8" fill="url(#chromeMetal)"/>
              <path d="M122 248 L118 268 L142 268 L138 248 Z" fill="url(#chromeMetal)"/>
              
              {/* Chrome star base */}
              <path d="M130 268 L85 288 L82 292 L88 292 L130 275 Z" fill="url(#chromeMetal)"/>
              <path d="M130 268 L175 288 L178 292 L172 292 L130 275 Z" fill="url(#chromeMetal)"/>
              <path d="M130 268 L105 292 L102 296 L110 296 L130 278 Z" fill="url(#chromeMetal)"/>
              <path d="M130 268 L155 292 L158 296 L150 296 L130 278 Z" fill="url(#chromeMetal)"/>
            </svg>
          </div>
        </div>

        {/* Mobile: Compact furniture */}
        <div className="md:hidden flex justify-center gap-6 mt-8">
          <svg viewBox="0 0 120 110" className="w-24 h-auto">
            <defs>
              <linearGradient id="mobFabric" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3D6B66" />
                <stop offset="100%" stopColor="#1E3835" />
              </linearGradient>
            </defs>
            <path d="M20 35 Q15 20 30 12 Q50 5 70 8 Q88 12 92 30 Q95 45 85 55 Q70 68 55 70 Q35 72 22 60 Q15 50 20 40 Z" fill="url(#mobFabric)"/>
            <ellipse cx="55" cy="68" rx="32" ry="12" fill="#2D524E"/>
          </svg>
          <svg viewBox="0 0 100 120" className="w-20 h-auto">
            <defs>
              <linearGradient id="mobLeather" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#D68B5A" />
                <stop offset="100%" stopColor="#8B4D2A" />
              </linearGradient>
            </defs>
            <path d="M50 8 Q18 12 15 50 Q12 75 28 90 Q42 102 50 103 Q58 102 72 90 Q88 75 85 50 Q82 12 50 8 Z" fill="url(#mobLeather)"/>
          </svg>
        </div>
      </div>

      {/* Subtle bottom line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-[1px] bg-[#C7A76A]/30" />
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
      {/* Clean dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#080807] via-background to-[#080807]" />
      
      {/* Subtle ambient lighting - toned down */}
      <div className="absolute inset-0" style={{
        background: `
          radial-gradient(ellipse 70% 50% at 30% 30%, hsl(38 40% 50% / 0.05) 0%, transparent 50%),
          radial-gradient(ellipse 60% 40% at 70% 70%, hsl(30 35% 45% / 0.04) 0%, transparent 45%)
        `
      }} />
      
      {/* Subtle light rays */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/8 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/6 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
      
      {/* Subtle floating orbs - reduced opacity */}
      <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-primary/8 rounded-full blur-[140px] animate-float" />
      <div className="absolute bottom-1/4 right-1/6 w-80 h-80 bg-primary/6 rounded-full blur-[160px] animate-float" style={{ animationDelay: '-4s' }} />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-30" />

      {/* Clean Grid - subtle */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        <svg className="w-full h-full">
          <defs>
            <pattern id="foundersGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(38 40% 55%)" strokeWidth="0.3" />
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

        {/* Founders Cards - Clean Professional */}
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
                {/* Subtle card glow */}
                <div className={`absolute -inset-3 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 rounded-3xl blur-xl transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card - Clean */}
                <div className={`
                  relative rounded-2xl overflow-hidden p-8 lg:p-10
                  border transition-all duration-500
                  ${isActive 
                    ? 'border-primary/25 bg-card/15' 
                    : 'border-border/20 bg-card/5'
                  }
                `}>
                  {/* Corner accent - Subtle */}
                  <div className="absolute top-0 left-0 w-12 h-12 border-l border-t border-primary/20 rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-12 h-12 border-r border-b border-primary/20 rounded-br-2xl" />
                  
                  {/* Initial Background - Subtle */}
                  <div className="absolute top-0 right-0 -mr-4 -mt-4 overflow-hidden">
                    <span 
                      className={`
                        text-[180px] font-heading leading-none select-none
                        bg-gradient-to-br from-primary/8 via-primary/5 to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isActive ? 'from-primary/12 via-primary/8' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accent - Subtle */}
                  <div className={`
                    absolute top-6 right-6 w-12 h-12 border border-primary/10 rotate-45
                    transition-all duration-700
                    ${isActive ? 'rotate-[55deg] border-primary/20' : ''}
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
        <InspirationBanner />
        <FoundersSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
