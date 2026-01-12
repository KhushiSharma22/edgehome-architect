import { useEffect, useState, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import pelicanChair from "@/assets/pelican-chair.png";
import eggChair from "@/assets/egg-chair.png";
import studioSketch from "@/assets/studio-sketch.jpg";
import founderPriya from "@/assets/founder-priya.png";
import founderDeepak from "@/assets/founder-deepak.png";


// Animated floating particles - creates energy (hidden on mobile for performance)
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none hidden sm:block">
      {/* Pulsing orbs */}
      <div className="absolute top-[15%] left-[20%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary/40 animate-pulse" style={{ animationDuration: '2s' }} />
      <div className="absolute top-[25%] right-[25%] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/30 animate-pulse" style={{ animationDuration: '3s', animationDelay: '0.5s' }} />
      <div className="absolute top-[60%] left-[15%] w-3 sm:w-4 h-3 sm:h-4 rounded-full bg-primary/25 animate-pulse" style={{ animationDuration: '2.5s', animationDelay: '1s' }} />
      <div className="absolute top-[45%] right-[18%] w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-primary/35 animate-pulse" style={{ animationDuration: '3.5s', animationDelay: '0.3s' }} />
      <div className="absolute bottom-[20%] left-[30%] w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary/20 animate-pulse" style={{ animationDuration: '2.8s', animationDelay: '0.8s' }} />
      <div className="absolute bottom-[35%] right-[35%] w-2 sm:w-3 h-2 sm:h-3 rounded-full bg-primary/30 animate-pulse" style={{ animationDuration: '2.2s', animationDelay: '1.2s' }} />
      
      {/* Floating diamonds - hidden on mobile */}
      <div className="absolute top-[30%] left-[10%] w-2 h-2 bg-primary/25 rotate-45 animate-float hidden md:block" style={{ animationDuration: '6s' }} />
      <div className="absolute top-[70%] right-[12%] w-3 h-3 bg-primary/20 rotate-45 animate-float hidden md:block" style={{ animationDuration: '8s', animationDelay: '-2s' }} />
      <div className="absolute bottom-[25%] left-[45%] w-1.5 h-1.5 bg-primary/30 rotate-45 animate-float hidden md:block" style={{ animationDuration: '5s', animationDelay: '-1s' }} />
      
      {/* Rising lines - reduced on mobile */}
      <div className="absolute bottom-0 left-[20%] w-px h-20 sm:h-32 bg-gradient-to-t from-primary/30 to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 left-[40%] w-px h-28 sm:h-48 bg-gradient-to-t from-primary/20 to-transparent animate-pulse hidden sm:block" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      <div className="absolute bottom-0 right-[30%] w-px h-24 sm:h-40 bg-gradient-to-t from-primary/25 to-transparent animate-pulse hidden sm:block" style={{ animationDuration: '4.5s', animationDelay: '0.5s' }} />
      <div className="absolute bottom-0 right-[15%] w-px h-20 sm:h-36 bg-gradient-to-t from-primary/15 to-transparent animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
    </div>
  );
};

// Animated decorative shape with glow
const DecorativeShape = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/15 to-primary/5 blur-2xl animate-pulse" style={{ animationDuration: '4s' }} />
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
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* === LAYERED BACKGROUND SYSTEM === */}
      
      {/* Base - Deep Dark with Warmth */}
      <div className="absolute inset-0 bg-[#050403]" />
      
      {/* Static Gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 50% 40%, 
              hsl(38 50% 50% / 0.12) 0%, 
              transparent 50%
            ),
            radial-gradient(circle at 30% 70%, 
              hsl(25 45% 45% / 0.08) 0%, 
              transparent 40%
            ),
            radial-gradient(circle at 70% 30%, 
              hsl(42 55% 55% / 0.06) 0%, 
              transparent 35%
            )
          `
        }}
      />

      {/* Static Mesh Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(hsl(38 42% 55%) 1px, transparent 1px),
              linear-gradient(90deg, hsl(38 42% 55%) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Animated Decorative Shapes - Responsive sizes */}
      <DecorativeShape className="w-[250px] sm:w-[350px] lg:w-[500px] h-[250px] sm:h-[350px] lg:h-[500px] -top-16 sm:-top-24 lg:-top-32 -left-16 sm:-left-24 lg:-left-32 opacity-30" />
      <DecorativeShape className="w-[200px] sm:w-[300px] lg:w-[450px] h-[200px] sm:h-[300px] lg:h-[450px] -bottom-12 sm:-bottom-16 lg:-bottom-20 -right-12 sm:-right-16 lg:-right-20 opacity-25" />
      <DecorativeShape className="w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15" />

      {/* Floating Particles */}
      <FloatingParticles />

      {/* Static Light Beams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary/10 to-transparent"
          style={{
            top: '30%',
            left: '-50%',
            transform: 'rotate(-15deg)',
          }}
        />
        <div 
          className="absolute w-[200%] h-[1px] bg-gradient-to-r from-transparent via-primary/8 to-transparent"
          style={{
            top: '60%',
            left: '-50%',
            transform: 'rotate(-15deg)',
          }}
        />
      </div>

      {/* Animated Light Pillars - Hidden on mobile for performance */}
      <div className="absolute inset-0 pointer-events-none hidden sm:block">
        {[15, 30, 50, 70, 85].map((pos, i) => (
          <div 
            key={i}
            className="absolute top-0 bottom-0 w-px animate-pulse"
            style={{
              left: `${pos}%`,
              background: `linear-gradient(180deg, 
                transparent 0%, 
                hsl(38 42% 55% / ${0.08 + i * 0.02}) 30%, 
                hsl(38 42% 55% / ${0.12 + i * 0.02}) 50%, 
                hsl(38 42% 55% / ${0.08 + i * 0.02}) 70%, 
                transparent 100%
              )`,
              opacity: isLoaded ? 1 : 0,
              transition: `opacity 2s ease-out ${1 + i * 0.3}s`,
              animationDuration: `${3 + i * 0.5}s`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>
      
      {/* Scanning light effect */}
      <div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
        style={{
          animation: isLoaded ? 'scanDown 8s ease-in-out infinite' : 'none',
        }}
      />

      {/* Animated Glow Orbs - Responsive sizes */}
      <div 
        className="absolute w-40 sm:w-56 lg:w-72 h-40 sm:h-56 lg:h-72 rounded-full blur-[60px] sm:blur-[80px] lg:blur-[100px] animate-float"
        style={{
          top: '10%',
          left: '20%',
          background: 'radial-gradient(circle, hsl(38 50% 55% / 0.15) 0%, transparent 70%)',
          animationDuration: '8s',
        }}
      />
      <div 
        className="absolute w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float hidden sm:block"
        style={{
          bottom: '10%',
          right: '15%',
          background: 'radial-gradient(circle, hsl(30 45% 50% / 0.12) 0%, transparent 70%)',
          animationDuration: '10s',
          animationDelay: '-3s',
        }}
      />
      <div 
        className="absolute w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px] animate-pulse hidden md:block"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translateX(-50%)',
          background: 'radial-gradient(circle, hsl(38 55% 50% / 0.08) 0%, transparent 60%)',
          animationDuration: '5s',
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
      <div className="relative z-30 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-12 gap-4 sm:gap-6 items-center min-h-screen py-20 sm:py-24 lg:py-32">
          
          {/* Left Column - Large Typography */}
          <div className="col-span-12 lg:col-span-7 text-center lg:text-left">
            
            {/* Philosophy Label with animated line */}
            <div 
              className={`mb-6 sm:mb-8 lg:mb-12 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: '1.5s' }}
            >
              <span className="inline-flex items-center gap-2 sm:gap-4">
                <span 
                  className="h-px bg-gradient-to-r from-transparent to-primary hidden sm:block"
                  style={{
                    width: isLoaded ? '3rem' : '0',
                    transition: 'width 1s ease-out 2s',
                  }}
                />
                <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium">
                  The EdgeHomes Philosophy
                </span>
                <span 
                  className="h-px bg-gradient-to-l from-transparent to-primary hidden sm:block"
                  style={{
                    width: isLoaded ? '3rem' : '0',
                    transition: 'width 1s ease-out 2s',
                  }}
                />
              </span>
            </div>

            {/* Main Headline - Refined Size */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground mb-6 sm:mb-8 lg:mb-10 leading-[0.95] sm:leading-[0.9] tracking-tight">
              <span 
                className={`block overflow-hidden mb-1 sm:mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
                className={`block overflow-hidden mb-1 sm:mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
                className={`block overflow-hidden mb-1 sm:mb-2 transition-all duration-[1500ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
                      className="absolute -bottom-0.5 sm:-bottom-1 left-0 h-[1px] sm:h-[2px] bg-gradient-to-r from-primary/60 to-primary/30"
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
              className={`text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto lg:mx-0 mb-8 sm:mb-10 lg:mb-14 leading-relaxed transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'}`}
              style={{ transitionDelay: '3s' }}
            >
              A design & build studio shaping spaces that feel lived in, timeless, and intentional.
            </p>

            {/* Interactive Stats Row */}
            <div 
              className={`flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8 lg:gap-12 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
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
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading text-primary mb-0.5 sm:mb-1 transition-transform duration-300 group-hover:scale-110">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">
                    {stat.label}
                  </div>
                  {/* Hover glow effect */}
                  <div className="absolute -inset-3 sm:-inset-4 bg-primary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
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
              {/* Static architectural frame */}
              <div className="relative w-80 h-96">
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
                    className="w-full h-full object-cover scale-110"
                    loading="lazy"
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

      {/* Corner Frames - Hidden on small mobile */}
      <div className={`absolute top-4 sm:top-8 left-4 sm:left-8 transition-all duration-1000 hidden sm:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.5s' }}>
        <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-l-2 border-t-2 border-primary/30" />
      </div>
      <div className={`absolute top-4 sm:top-8 right-4 sm:right-8 transition-all duration-1000 hidden sm:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.6s' }}>
        <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-r-2 border-t-2 border-primary/30" />
      </div>
      <div className={`absolute bottom-4 sm:bottom-8 left-4 sm:left-8 transition-all duration-1000 hidden sm:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.7s' }}>
        <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-l-2 border-b-2 border-primary/30" />
      </div>
      <div className={`absolute bottom-4 sm:bottom-8 right-4 sm:right-8 transition-all duration-1000 hidden sm:block ${isLoaded ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '3.8s' }}>
        <div className="w-12 sm:w-16 lg:w-20 h-12 sm:h-16 lg:h-20 border-r-2 border-b-2 border-primary/30" />
      </div>

      {/* Scroll Indicator - Hidden on small mobile */}
      <div 
        className={`absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 cursor-pointer transition-all duration-1000 hidden sm:block ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        style={{ transitionDelay: '4s' }}
      >
        <div className="flex flex-col items-center gap-3 sm:gap-4 group">
          <span className="text-[9px] sm:text-[10px] text-muted-foreground tracking-[0.3em] sm:tracking-[0.4em] uppercase group-hover:text-primary transition-colors duration-500">
            Discover
          </span>
          <div className="relative">
            <div className="w-6 sm:w-8 h-10 sm:h-14 rounded-full border-2 border-primary/40 group-hover:border-primary transition-colors duration-500">
              <div className="absolute top-2 sm:top-3 left-1/2 -translate-x-1/2 w-1 sm:w-1.5 h-2 sm:h-3 bg-primary rounded-full animate-scroll-mouse" />
            </div>
            {/* Animated rings */}
            <div className="absolute inset-0 rounded-full border border-primary/20 animate-ping hidden md:block" style={{ animationDuration: '2s' }} />
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
    <section ref={sectionRef} className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden">
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
      
      {/* Animated light rays - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-0 left-1/3 w-px h-full bg-gradient-to-b from-primary/15 via-transparent to-transparent animate-pulse" style={{ animationDuration: '3s' }} />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-primary/10 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s', animationDelay: '1s' }} />
      </div>

      {/* Floating orbs - Responsive sizes */}
      <div className="absolute top-1/4 left-1/5 w-48 sm:w-64 lg:w-80 h-48 sm:h-64 lg:h-80 bg-primary/15 rounded-full blur-[80px] sm:blur-[100px] lg:blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/5 w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 bg-primary/10 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px] animate-float hidden sm:block" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] sm:w-[380px] lg:w-[500px] h-[280px] sm:h-[380px] lg:h-[500px] bg-primary/8 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[150px] animate-float hidden md:block" style={{ animationDelay: '-2s' }} />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-40" />

      {/* === CONTENT === */}
      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 hidden sm:block ${isVisible ? 'w-10 sm:w-16' : 'w-0'}`} />
            <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium">
              Our Philosophy
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 hidden sm:block ${isVisible ? 'w-10 sm:w-16' : 'w-0'}`} />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">What We</span>
            <span className="text-shimmer italic">Believe</span>
          </h2>
        </div>
        
        {/* Main Grid: Left Content + Center Image + Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left Column - Philosophy Cards */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-2 lg:order-1">
            {/* Card 1 */}
            <div 
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}
              style={{ transitionDelay: '200ms' }}
            >
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-l-2 border-t-2 border-primary/30 rounded-tl-xl sm:rounded-tl-2xl" />
                
                <div className="relative mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">◯</span>
                </div>
                
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground mb-2 sm:mb-3 group-hover:text-primary/90 transition-colors duration-500">
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
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-l-2 border-t-2 border-primary/30 rounded-tl-xl sm:rounded-tl-2xl" />
                
                <div className="relative mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">◇</span>
                </div>
                
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground mb-2 sm:mb-3 group-hover:text-primary/90 transition-colors duration-500">
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
            className={`lg:col-span-4 transition-all duration-1000 order-1 lg:order-2 mb-6 lg:mb-0 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative aspect-[4/5] sm:aspect-[3/4] max-w-xs sm:max-w-sm lg:max-w-md mx-auto">
              {/* Decorative frame - responsive sizing */}
              <div className="absolute -inset-2 sm:-inset-3 lg:-inset-4 border border-primary/20 rounded-2xl sm:rounded-3xl" />
              <div className="absolute -inset-4 sm:-inset-6 lg:-inset-8 border border-primary/10 rounded-2xl sm:rounded-[2rem] hidden sm:block" />
              
              {/* Gold corner accents - responsive */}
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -left-3 sm:-left-4 lg:-left-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-l-2 border-t-2 border-primary/50" />
              <div className="absolute -top-3 sm:-top-4 lg:-top-6 -right-3 sm:-right-4 lg:-right-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-r-2 border-t-2 border-primary/50" />
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -left-3 sm:-left-4 lg:-left-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-l-2 border-b-2 border-primary/50" />
              <div className="absolute -bottom-3 sm:-bottom-4 lg:-bottom-6 -right-3 sm:-right-4 lg:-right-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-r-2 border-b-2 border-primary/50" />
              
              {/* Glowing backdrop */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-xl sm:rounded-2xl blur-xl sm:blur-2xl" />
              
              {/* Main image container */}
              <div className="relative w-full h-full rounded-xl sm:rounded-2xl overflow-hidden">
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
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                  <p className="text-primary/80 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-1 sm:mb-2">Our Work</p>
                  <p className="text-foreground/90 text-base sm:text-lg font-heading">{galleryImages[activeImage].label}</p>
                </div>
                
                {/* Navigation dots */}
                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 flex gap-1.5 sm:gap-2">
                  {galleryImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full transition-all duration-300 ${
                        activeImage === index 
                          ? 'bg-primary w-4 sm:w-6' 
                          : 'bg-foreground/30 hover:bg-foreground/50'
                      }`}
                    />
                  ))}
                </div>
                
              {/* Decorative corner marks inside */}
              <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-l border-t border-primary/40" />
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-r border-t border-primary/40" />
            </div>
            </div>
          </div>

          {/* Right Column - Philosophy Card + Quote */}
          <div className="lg:col-span-4 space-y-4 sm:space-y-6 order-3">
            {/* Card 3 */}
            <div 
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}
              style={{ transitionDelay: '600ms' }}
            >
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/10 via-card/10 to-transparent hover:border-primary/30 hover:from-primary/15 transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                <div className="absolute top-0 right-0 w-8 sm:w-10 h-8 sm:h-10 border-r-2 border-t-2 border-primary/30 rounded-tr-xl sm:rounded-tr-2xl" />
                
                <div className="relative mb-3 sm:mb-4">
                  <span className="text-3xl sm:text-4xl text-primary/30 group-hover:text-primary/50 transition-colors duration-500">△</span>
                </div>
                
                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground mb-2 sm:mb-3 group-hover:text-primary/90 transition-colors duration-500">
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
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/5 to-transparent border border-primary/10">
                <span className="text-4xl sm:text-5xl lg:text-6xl text-primary/20 font-heading leading-none absolute -top-1 sm:-top-2 left-3 sm:left-4">"</span>
                <p className="text-foreground/70 text-base sm:text-lg lg:text-xl italic leading-relaxed pt-3 sm:pt-4">
                  A space should feel <span className="text-primary/90">calm</span> before it looks beautiful.
                </p>
                <div className="mt-3 sm:mt-4 flex items-center gap-2 sm:gap-3">
                  <div className="w-6 sm:w-8 h-px bg-primary/40" />
                  <span className="text-muted-foreground/60 text-[10px] sm:text-xs tracking-wider uppercase">Our Belief</span>
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
                <div className="absolute top-1/2 -right-3 lg:-right-4 w-6 lg:w-8 h-px bg-gradient-to-r from-primary/25 to-transparent hidden lg:block" />
              )}
              
              <div className="relative p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl border border-border/10 bg-card/5 hover:border-primary/20 hover:bg-card/10 transition-all duration-500 h-full">
                {/* Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl sm:rounded-2xl" />
                
                {/* Corner */}
                <div className="absolute top-0 left-0 w-8 sm:w-10 h-8 sm:h-10 border-l-2 border-t-2 border-primary/20 rounded-tl-xl sm:rounded-tl-2xl" />
                
                {/* Number */}
                <div className="relative mb-4 sm:mb-6 lg:mb-8">
                  <span className="text-5xl sm:text-6xl lg:text-7xl font-heading text-primary/10 group-hover:text-primary/20 transition-colors duration-500">
                    {phase.number}
                  </span>
                  <span className="absolute top-2 sm:top-3 left-12 sm:left-14 lg:left-16 text-xl sm:text-2xl text-primary/25 group-hover:text-primary/40 group-hover:rotate-6 transition-all duration-500">
                    {phase.icon}
                  </span>
                </div>

                <h3 className="font-heading text-lg sm:text-xl lg:text-2xl text-foreground/90 mb-1 sm:mb-2 group-hover:text-foreground transition-colors duration-500">
                  {phase.title}
                </h3>
                <p className="text-primary/50 text-xs sm:text-sm italic mb-3 sm:mb-4 lg:mb-5">{phase.subtitle}</p>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed group-hover:text-muted-foreground/80 transition-colors duration-500">
                  {phase.description}
                </p>

                <div className="absolute bottom-5 sm:bottom-6 lg:bottom-8 left-5 sm:left-6 lg:left-8 right-5 sm:right-6 lg:right-8 h-px bg-gradient-to-r from-primary/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
      className="relative py-8 sm:py-10 md:py-12 bg-[#F6F1EA] overflow-hidden"
    >
      <div className="container mx-auto px-4 relative">
        <div className="flex items-center justify-between">
          {/* Left Furniture - Pelican Chair */}
          <div 
            className={`hidden md:block w-28 lg:w-36 xl:w-44 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            <img 
              src={pelicanChair} 
              alt="Mid-century modern chair" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>

          {/* Center Text */}
          <div 
            className={`flex-1 text-center px-2 sm:px-4 md:px-8 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ transitionDelay: '0.4s' }}
          >
            <h2 
              className="text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl font-light text-[#1C1C1C] tracking-[0.08em] sm:tracking-[0.12em] leading-relaxed"
              style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
            >
              INSPIRED BY ARTISTRY,
              <br />
              <span className="text-[#C7A76A]">OBJECTS</span>, DESIGNS
              <br />
              AND THE FUTURE
            </h2>
          </div>

          {/* Right Furniture - Egg Chair */}
          <div 
            className={`hidden md:block w-28 lg:w-36 xl:w-44 transition-all duration-1000 ease-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
            }`}
            style={{ transitionDelay: '0.6s' }}
          >
            <img 
              src={eggChair} 
              alt="Iconic egg chair" 
              className="w-full h-auto object-contain drop-shadow-xl"
            />
          </div>
        </div>

        {/* Mobile: Show furniture */}
        <div className="md:hidden flex justify-center gap-3 sm:gap-4 mt-4 sm:mt-6">
          <img src={pelicanChair} alt="Chair" className="w-16 sm:w-20 md:w-24 h-auto object-contain" />
          <img src={eggChair} alt="Chair" className="w-14 sm:w-16 md:w-20 h-auto object-contain" />
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
      image: founderPriya,
      description: 'Her designs, effected by an intuitive sensitivity to client preferences and an obsessive attention to detail, synchronizes social and cultural nuances to exude a subtle, yet distinctive, individuality.',
      philosophy: 'Bringing the serenity of spiritualism to the design desk, she translates her own connection to nature and human interaction with space to compose ergonomic and responsive structural forms.',
    },
    {
      name: 'Deepak Manchanda',
      role: 'Director',
      department: 'Construction & Interior Execution',
      initial: 'D',
      image: founderDeepak,
      description: 'From laying the first foundation to crafting the finest interior details, Deepak brings dreams to life with precision. His expertise spans structural excellence and luxurious interior finishes — every beam, every texture, every element perfected.',
      philosophy: 'In an industry where trust is paramount, his integrity and client-centric approach have set EdgeHomes apart as the benchmark for quality construction and impeccable interior execution.',
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative py-16 sm:py-24 md:py-32 lg:py-40 overflow-hidden"
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
      
      {/* Subtle light rays - hidden on mobile */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden sm:block">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-primary/8 via-transparent to-transparent animate-pulse" style={{ animationDuration: '4s' }} />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-primary/6 via-transparent to-transparent animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
      </div>
      
      {/* Subtle floating orbs - responsive */}
      <div className="absolute top-1/4 left-1/6 w-48 sm:w-60 lg:w-72 h-48 sm:h-60 lg:h-72 bg-primary/8 rounded-full blur-[100px] sm:blur-[120px] lg:blur-[140px] animate-float" />
      <div className="absolute bottom-1/4 right-1/6 w-56 sm:w-68 lg:w-80 h-56 sm:h-68 lg:h-80 bg-primary/6 rounded-full blur-[120px] sm:blur-[140px] lg:blur-[160px] animate-float hidden sm:block" style={{ animationDelay: '-4s' }} />
      
      {/* Grain */}
      <div className="absolute inset-0 grain opacity-30" />

      {/* Clean Grid - subtle, hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03] hidden sm:block">
        <svg className="w-full h-full">
          <defs>
            <pattern id="foundersGrid" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(38 40% 55%)" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#foundersGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-14 lg:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-flex items-center gap-2 sm:gap-4 mb-4 sm:mb-6 lg:mb-8">
            <span className={`h-px bg-gradient-to-r from-transparent to-primary transition-all duration-1000 hidden sm:block ${isVisible ? 'w-12 sm:w-16 lg:w-20' : 'w-0'}`} />
            <span className="text-primary text-[10px] sm:text-xs lg:text-sm tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium">
              The Visionaries
            </span>
            <span className={`h-px bg-gradient-to-l from-transparent to-primary transition-all duration-1000 hidden sm:block ${isVisible ? 'w-12 sm:w-16 lg:w-20' : 'w-0'}`} />
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-foreground leading-[1]">
            <span className="block">Who We</span>
            <span className="text-shimmer italic">Are</span>
          </h2>
          <p className="mt-4 sm:mt-6 text-muted-foreground/70 text-sm sm:text-base lg:text-lg max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto px-2">
            Meet the minds behind EdgeHomes — where passion meets precision.
          </p>
        </div>

        {/* Studio Illustration Section - Unique Artistic Frame */}
        <div className={`mb-10 sm:mb-12 lg:mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="relative max-w-lg sm:max-w-xl lg:max-w-2xl mx-auto">
            {/* Floating decorative elements - hidden on mobile */}
            <div className="absolute -top-6 sm:-top-8 -left-6 sm:-left-8 w-16 sm:w-20 lg:w-24 h-16 sm:h-20 lg:h-24 border border-primary/20 rounded-full animate-pulse hidden sm:block" style={{ animationDuration: '4s' }} />
            <div className="absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-12 sm:w-14 lg:w-16 h-12 sm:h-14 lg:h-16 border border-primary/30 rotate-45 hidden sm:block" />
            <div className="absolute top-1/2 -left-8 sm:-left-10 lg:-left-12 w-1 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
            <div className="absolute top-1/2 -right-8 sm:-right-10 lg:-right-12 w-1 h-16 sm:h-20 lg:h-24 bg-gradient-to-b from-transparent via-primary/40 to-transparent hidden md:block" />
            
            {/* Geometric corner accents - responsive */}
            <div className="absolute -top-2 sm:-top-3 lg:-top-4 -left-2 sm:-left-3 lg:-left-4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <div className="absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
            </div>
            <div className="absolute -top-2 sm:-top-3 lg:-top-4 -right-2 sm:-right-3 lg:-right-4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
              <div className="absolute top-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
              <div className="absolute top-0 right-0 h-full w-[2px] bg-gradient-to-b from-primary to-transparent" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -left-2 sm:-left-3 lg:-left-4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-primary to-transparent" />
              <div className="absolute bottom-0 left-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
            </div>
            <div className="absolute -bottom-2 sm:-bottom-3 lg:-bottom-4 -right-2 sm:-right-3 lg:-right-4 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12">
              <div className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-primary to-transparent" />
              <div className="absolute bottom-0 right-0 h-full w-[2px] bg-gradient-to-t from-primary to-transparent" />
            </div>

            {/* Floating dots pattern - hidden on mobile */}
            <div className="absolute -top-4 sm:-top-6 left-1/4 flex gap-1.5 sm:gap-2 hidden sm:flex">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary/60" />
              <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-primary/40" />
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary/20" />
            </div>
            <div className="absolute -bottom-4 sm:-bottom-6 right-1/4 flex gap-1.5 sm:gap-2 hidden sm:flex">
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary/20" />
              <div className="w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full bg-primary/40" />
              <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-primary/60" />
            </div>
            
            {/* Main Image Container */}
            <div className="relative group">
              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-xl sm:rounded-2xl blur-lg sm:blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Image frame */}
              <div className="relative rounded-lg sm:rounded-xl overflow-hidden border border-primary/20 shadow-xl sm:shadow-2xl bg-card/5">
                {/* Corner label */}
                <div className="absolute top-2 sm:top-3 left-2 sm:left-3 z-10 bg-background/90 backdrop-blur-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-md border border-primary/30">
                  <span className="text-primary text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">Our Studio</span>
                </div>
                
                {/* Decorative corner brackets */}
                <div className="absolute top-2 right-2 w-6 sm:w-8 h-6 sm:h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
                <div className="absolute bottom-2 left-2 w-6 sm:w-8 h-6 sm:h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
                
                <img 
                  src={studioSketch} 
                  alt="EdgeHomes Design Studio" 
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                />
                
                {/* Artistic overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10 pointer-events-none" />
                
                {/* Film grain effect */}
                <div 
                  className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                  }}
                />
              </div>
            </div>

            {/* Signature line below */}
            <div className="flex items-center justify-center mt-4 sm:mt-6 gap-2 sm:gap-4">
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <span className="text-primary/50 text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase">Where Ideas Take Form</span>
              <div className="h-[1px] w-8 sm:w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </div>

        {/* Founders Cards - Clean Professional */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
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
                <div className={`absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-primary/8 via-transparent to-primary/5 rounded-2xl sm:rounded-3xl blur-lg sm:blur-xl transition-all duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
                
                {/* Main Card - Clean */}
                <div className={`
                  relative rounded-xl sm:rounded-2xl overflow-hidden p-5 sm:p-6 lg:p-8 xl:p-10
                  border transition-all duration-500
                  ${isActive 
                    ? 'border-primary/25 bg-card/15' 
                    : 'border-border/20 bg-card/5'
                  }
                `}>
                  {/* Corner accent - Subtle */}
                  <div className="absolute top-0 left-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-l border-t border-primary/20 rounded-tl-xl sm:rounded-tl-2xl" />
                  <div className="absolute bottom-0 right-0 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border-r border-b border-primary/20 rounded-br-xl sm:rounded-br-2xl" />
                  
                  {/* Initial Background - Subtle, hidden on mobile */}
                  <div className="absolute top-0 right-0 -mr-2 sm:-mr-4 -mt-2 sm:-mt-4 overflow-hidden hidden sm:block">
                    <span 
                      className={`
                        text-[100px] sm:text-[140px] lg:text-[180px] font-heading leading-none select-none
                        bg-gradient-to-br from-primary/8 via-primary/5 to-transparent bg-clip-text text-transparent
                        transition-all duration-700
                        ${isActive ? 'from-primary/12 via-primary/8' : ''}
                      `}
                    >
                      {founder.initial}
                    </span>
                  </div>

                  {/* Geometric Accent - Subtle, hidden on mobile */}
                  <div className={`
                    absolute top-4 sm:top-6 right-4 sm:right-6 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 border border-primary/10 rotate-45
                    transition-all duration-700 hidden sm:block
                    ${isActive ? 'rotate-[55deg] border-primary/20' : ''}
                  `} />

                  {/* Content */}
                  <div className="relative">
                    {/* Avatar + Role */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 sm:gap-4 mb-4">
                      <img
                        src={founder.image}
                        alt={`${founder.name} portrait`}
                        loading="lazy"
                        className="w-28 h-28 sm:w-36 sm:h-36 lg:w-44 lg:h-44 xl:w-48 xl:h-48 rounded-full object-cover border-2 border-primary/30 shadow-lg"
                      />

                      <div className={`inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 lg:px-4 py-1 sm:py-1.5 rounded-full border transition-all duration-500 ${
                        isActive 
                          ? 'bg-primary/20 border-primary/40' 
                          : 'bg-primary/10 border-primary/20'
                      }`}>
                        <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase font-medium">
                          {founder.role}
                        </span>
                      </div>
                    </div>
                    
                    <h3 className={`
                      font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-1 sm:mb-2 text-center sm:text-left
                      transition-all duration-500
                      ${isActive ? 'text-foreground' : 'text-foreground/90'}
                    `}>
                      {founder.name}
                    </h3>
                    
                    <span className="text-primary/60 text-xs sm:text-sm tracking-wider block mb-4 sm:mb-6 lg:mb-8 text-center sm:text-left">
                      {founder.department}
                    </span>

                    <p className={`text-foreground/70 text-sm sm:text-base lg:text-lg leading-relaxed mb-3 sm:mb-4 transition-all duration-500 ${isActive ? 'text-foreground/85' : ''}`}>
                      {founder.description}
                    </p>
                    <p className={`text-muted-foreground/60 text-xs sm:text-sm lg:text-base italic leading-relaxed transition-all duration-500 ${isActive ? 'text-muted-foreground/80' : ''}`}>
                      "{founder.philosophy}"
                    </p>

                    {/* Bottom Accent - More prominent */}
                    <div className={`mt-4 sm:mt-6 lg:mt-8 h-0.5 bg-gradient-to-r from-primary via-primary/50 to-transparent transition-all duration-700 ${isActive ? 'w-full' : 'w-16 sm:w-20 lg:w-24'}`} />
                  </div>

                  {/* Decorative dots - hidden on mobile */}
                  <div className="absolute top-1/2 -left-2 flex-col gap-1.5 sm:gap-2 hidden sm:flex">
                    <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-primary' : 'bg-primary/30'}`} />
                    <div className={`w-0.5 sm:w-1 h-0.5 sm:h-1 rounded-full transition-all duration-500 ${isActive ? 'bg-primary/70' : 'bg-primary/20'}`} />
                    <div className={`w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full transition-all duration-500 ${isActive ? 'bg-primary/50' : 'bg-primary/15'}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Tagline - Enhanced */}
        <div className={`text-center mt-12 sm:mt-16 lg:mt-24 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-flex items-center gap-3 sm:gap-4 lg:gap-6">
            <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <p className="text-primary/60 text-[10px] sm:text-xs lg:text-base tracking-[0.2em] sm:tracking-[0.3em] lg:tracking-[0.4em] uppercase font-medium">
              Design × Construction × Vision
            </p>
            <div className="h-px w-8 sm:w-12 lg:w-16 bg-gradient-to-l from-transparent to-primary/50" />
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
