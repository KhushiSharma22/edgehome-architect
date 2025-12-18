import { useEffect, useRef, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const philosophyWords = [
    { word: "VISION", delay: 0 },
    { word: "FORM", delay: 0.2 },
    { word: "LIGHT", delay: 0.4 },
    { word: "SPACE", delay: 0.6 },
  ];

  const processSteps = [
    { num: "01", title: "CONCEPT", desc: "Ideas crystallize into vision" },
    { num: "02", title: "DEVELOP", desc: "Forms emerge from intention" },
    { num: "03", title: "REFINE", desc: "Details define excellence" },
    { num: "04", title: "REALIZE", desc: "Dreams become reality" },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground overflow-hidden">
      <Header />
      
      {/* Hero Section - Cinematic Dark */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <svg className="w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="heroGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M 100 0 L 0 0 0 100" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#heroGrid)" 
              style={{ 
                transform: `translate(${mousePos.x * 0.02}px, ${mousePos.y * 0.02}px)`,
                transition: "transform 0.5s ease-out"
              }}
            />
          </svg>
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Large rotating cube wireframe */}
          <div 
            className="absolute top-1/4 right-[15%] w-64 h-64 md:w-96 md:h-96"
            style={{
              transform: `rotateX(${scrollY * 0.05}deg) rotateY(${scrollY * 0.08}deg) rotateZ(${mousePos.x * 0.01}deg)`,
              transition: "transform 0.3s ease-out"
            }}
          >
            <svg viewBox="0 0 200 200" className="w-full h-full opacity-20">
              <g stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none">
                {/* Front face */}
                <path d="M50,50 L150,50 L150,150 L50,150 Z" 
                  strokeDasharray="400" 
                  strokeDashoffset={isLoaded ? 0 : 400}
                  style={{ transition: "stroke-dashoffset 2s ease-out" }}
                />
                {/* Back face */}
                <path d="M80,20 L180,20 L180,120 L80,120 Z" 
                  strokeDasharray="400" 
                  strokeDashoffset={isLoaded ? 0 : 400}
                  style={{ transition: "stroke-dashoffset 2.5s ease-out 0.3s" }}
                  opacity="0.5"
                />
                {/* Connecting lines */}
                <line x1="50" y1="50" x2="80" y2="20" 
                  strokeDasharray="50" 
                  strokeDashoffset={isLoaded ? 0 : 50}
                  style={{ transition: "stroke-dashoffset 1s ease-out 1s" }}
                />
                <line x1="150" y1="50" x2="180" y2="20"
                  strokeDasharray="50" 
                  strokeDashoffset={isLoaded ? 0 : 50}
                  style={{ transition: "stroke-dashoffset 1s ease-out 1.2s" }}
                />
                <line x1="150" y1="150" x2="180" y2="120"
                  strokeDasharray="50" 
                  strokeDashoffset={isLoaded ? 0 : 50}
                  style={{ transition: "stroke-dashoffset 1s ease-out 1.4s" }}
                />
                <line x1="50" y1="150" x2="80" y2="120"
                  strokeDasharray="50" 
                  strokeDashoffset={isLoaded ? 0 : 50}
                  style={{ transition: "stroke-dashoffset 1s ease-out 1.6s" }}
                />
              </g>
            </svg>
          </div>

          {/* Floating triangles */}
          <div 
            className="absolute top-[60%] left-[10%] w-32 h-32"
            style={{
              transform: `translateY(${Math.sin(scrollY * 0.01) * 20}px) rotate(${scrollY * 0.1}deg)`,
              transition: "transform 0.2s ease-out"
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
              <polygon points="50,10 90,90 10,90" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
            </svg>
          </div>

          {/* Circle rings */}
          <div 
            className="absolute bottom-[20%] right-[20%] w-48 h-48"
            style={{
              transform: `scale(${1 + Math.sin(scrollY * 0.005) * 0.1})`,
            }}
          >
            <svg viewBox="0 0 100 100" className="w-full h-full opacity-20">
              <circle cx="50" cy="50" r="45" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.5"/>
              <circle cx="50" cy="50" r="35" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3"/>
              <circle cx="50" cy="50" r="25" fill="none" stroke="hsl(var(--primary))" strokeWidth="0.3"/>
            </svg>
          </div>
        </div>

        {/* Dramatic Light Beam */}
        <div 
          className="absolute top-0 left-1/2 w-[2px] h-0 bg-gradient-to-b from-primary via-primary/50 to-transparent"
          style={{
            height: isLoaded ? "40%" : "0%",
            transition: "height 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            boxShadow: "0 0 80px 20px hsl(var(--primary) / 0.3)"
          }}
        />

        {/* Main Content */}
        <div className="relative z-10 text-center px-6">
          {/* Eyebrow */}
          <div 
            className="overflow-hidden mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 1s"
            }}
          >
            <span className="inline-block text-xs md:text-sm tracking-[0.4em] text-primary font-mono">
              ARCHITECTURAL EXCELLENCE
            </span>
          </div>

          {/* Main Title with Split Animation */}
          <div className="relative">
            <h1 className="text-[12vw] md:text-[10vw] lg:text-[8vw] font-heading font-bold leading-none tracking-tighter">
              {"ARCHITECTURE".split("").map((letter, i) => (
                <span
                  key={i}
                  className="inline-block"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0) rotateX(0)" : "translateY(100%) rotateX(-90deg)",
                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${1.5 + i * 0.05}s`,
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
            
            {/* Glowing underline */}
            <div 
              className="mx-auto mt-6 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent"
              style={{
                width: isLoaded ? "60%" : "0%",
                transition: "width 1.5s cubic-bezier(0.16, 1, 0.3, 1) 2.5s",
                boxShadow: "0 0 30px hsl(var(--primary) / 0.5)"
              }}
            />
          </div>

          {/* Subtitle */}
          <p 
            className="mt-12 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto tracking-wide"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 2.8s"
            }}
          >
            Where imagination meets precision.
            <br />
            <span className="text-primary">Spaces that transcend time.</span>
          </p>

          {/* Scroll Indicator */}
          <div 
            className="absolute bottom-[-40vh] left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 3.5s"
            }}
          >
            <span className="text-xs tracking-[0.3em] text-muted-foreground">EXPLORE</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-primary to-transparent animate-pulse" />
          </div>
        </div>

        {/* Ambient Glow */}
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)",
            transform: `translate(-50%, -50%) translate(${(mousePos.x - window.innerWidth / 2) * 0.02}px, ${(mousePos.y - window.innerHeight / 2) * 0.02}px)`,
            transition: "transform 0.5s ease-out"
          }}
        />
      </section>

      {/* Philosophy Section - Dramatic Words */}
      <section className="relative py-40 md:py-60 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        {/* Animated diagonal lines */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(5)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-[1px] h-[200%] bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{
                left: `${15 + i * 20}%`,
                top: "-50%",
                transform: `rotate(15deg) translateY(${scrollY * 0.1 * (i % 2 === 0 ? 1 : -1)}px)`,
                transition: "transform 0.3s ease-out"
              }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {philosophyWords.map((item, index) => (
              <div 
                key={index}
                className="group relative"
                style={{
                  opacity: scrollY > 300 ? 1 : 0,
                  transform: scrollY > 300 ? "translateY(0)" : "translateY(60px)",
                  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${item.delay}s`
                }}
              >
                <span className="text-5xl md:text-7xl lg:text-9xl font-heading font-bold tracking-tighter text-foreground/10 group-hover:text-primary transition-colors duration-700">
                  {item.word}
                </span>
                <div className="absolute -bottom-2 left-0 w-0 h-[2px] bg-primary group-hover:w-full transition-all duration-700" />
              </div>
            ))}
          </div>

          {/* Central Philosophy Text */}
          <div 
            className="mt-32 max-w-4xl mx-auto text-center"
            style={{
              opacity: scrollY > 500 ? 1 : 0,
              transform: scrollY > 500 ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <p className="text-2xl md:text-3xl lg:text-4xl font-heading leading-relaxed text-muted-foreground">
              Architecture is the <span className="text-gradient-gold">silent poetry</span> of human existence.
              It shapes not just spaces, but the very fabric of our daily rituals.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section - Cinematic Cards */}
      <section className="relative py-32 md:py-48">
        <div className="container mx-auto px-6">
          {/* Section Header */}
          <div 
            className="mb-24 md:mb-32"
            style={{
              opacity: scrollY > 800 ? 1 : 0,
              transform: scrollY > 800 ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            <span className="text-xs tracking-[0.4em] text-primary font-mono">THE PROCESS</span>
            <h2 className="mt-4 text-4xl md:text-6xl font-heading font-bold">
              How We Create
            </h2>
          </div>

          {/* Process Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="group relative"
                style={{
                  opacity: scrollY > 900 ? 1 : 0,
                  transform: scrollY > 900 ? "translateY(0)" : "translateY(60px)",
                  transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                }}
              >
                {/* Card */}
                <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden glass border border-border/50 hover:border-primary/50 transition-all duration-700 hover:-translate-y-4">
                  {/* Number Background */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-[200px] font-heading font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-700">
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="text-xs font-mono text-primary tracking-wider">{step.num}</span>
                    <h3 className="mt-2 text-2xl md:text-3xl font-heading font-bold tracking-tight group-hover:text-primary transition-colors duration-500">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{step.desc}</p>
                    
                    {/* Hover line */}
                    <div className="mt-6 w-0 h-[1px] bg-primary group-hover:w-full transition-all duration-700" />
                  </div>

                  {/* Corner accent */}
                  <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                    <div className="absolute top-0 right-0 w-[1px] h-0 bg-primary group-hover:h-16 transition-all duration-500" />
                    <div className="absolute top-0 right-0 h-[1px] w-0 bg-primary group-hover:w-16 transition-all duration-500 delay-200" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Immersive Statement Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Morphing Background Shape */}
        <div 
          className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px]"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
            animation: "morphBlob 15s ease-in-out infinite"
          }}
        />

        {/* Orbiting Elements */}
        <div className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px]">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-30">
            <circle 
              cx="100" cy="100" r="90" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.3"
              strokeDasharray="2 8"
              style={{
                transform: `rotate(${scrollY * 0.02}deg)`,
                transformOrigin: "center",
                transition: "transform 0.1s linear"
              }}
            />
            <circle 
              cx="100" cy="100" r="70" 
              fill="none" 
              stroke="hsl(var(--primary))" 
              strokeWidth="0.3"
              strokeDasharray="4 6"
              style={{
                transform: `rotate(${-scrollY * 0.03}deg)`,
                transformOrigin: "center"
              }}
            />
          </svg>
        </div>

        {/* Central Statement */}
        <div 
          className="relative z-10 text-center px-6 max-w-5xl"
          style={{
            opacity: scrollY > 1500 ? 1 : 0,
            transform: scrollY > 1500 ? "scale(1)" : "scale(0.9)",
            transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1)"
          }}
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
            We don't just design
            <br />
            <span className="text-gradient-gold">buildings</span>.
            <br />
            We design
            <br />
            <span className="text-gradient-gold">experiences</span>.
          </h2>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="py-32 md:py-48 relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Visual */}
            <div 
              className="relative aspect-square"
              style={{
                opacity: scrollY > 2000 ? 1 : 0,
                transform: scrollY > 2000 ? "translateX(0)" : "translateX(-60px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              {/* Layered frames */}
              <div className="absolute inset-8 border border-primary/20 rounded-2xl" />
              <div className="absolute inset-4 border border-primary/10 rounded-2xl" />
              <div className="absolute inset-0 rounded-2xl overflow-hidden glass">
                {/* Abstract pattern inside */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-20">
                    <g stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none">
                      <rect x="30" y="30" width="60" height="80" />
                      <rect x="100" y="50" width="70" height="100" />
                      <rect x="50" y="120" width="80" height="50" />
                      <line x1="30" y1="110" x2="170" y2="110" strokeDasharray="4 2" />
                      <line x1="100" y1="30" x2="100" y2="170" strokeDasharray="4 2" />
                    </g>
                  </svg>
                </div>
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/10 opacity-0 hover:opacity-100 transition-opacity duration-700" />
              </div>
            </div>

            {/* Right - Content */}
            <div
              style={{
                opacity: scrollY > 2000 ? 1 : 0,
                transform: scrollY > 2000 ? "translateX(0)" : "translateX(60px)",
                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.2s"
              }}
            >
              <span className="text-xs tracking-[0.4em] text-primary font-mono">OUR APPROACH</span>
              <h3 className="mt-4 text-3xl md:text-5xl font-heading font-bold leading-tight">
                Every project is a
                <br />
                <span className="text-gradient-gold">conversation</span>
              </h3>
              <p className="mt-8 text-lg text-muted-foreground leading-relaxed">
                We listen to the land, to the light, to the dreams of those who will inhabit our spaces. 
                Architecture, for us, is not about imposing form—it's about discovering the form that was always meant to be.
              </p>
              
              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                {[
                  { num: "150+", label: "Projects" },
                  { num: "25", label: "Years" },
                  { num: "40+", label: "Awards" },
                ].map((stat, i) => (
                  <div key={i} className="text-center md:text-left">
                    <span className="text-3xl md:text-4xl font-heading font-bold text-primary">{stat.num}</span>
                    <p className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-40 md:py-56 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <pattern id="ctaPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1" fill="hsl(var(--primary))"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#ctaPattern)" />
          </svg>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <p 
            className="text-3xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight"
            style={{
              opacity: scrollY > 2500 ? 1 : 0,
              transform: scrollY > 2500 ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1)"
            }}
          >
            Ready to shape your
            <br />
            <span className="text-gradient-gold">architectural vision</span>?
          </p>

          <div 
            className="mt-16"
            style={{
              opacity: scrollY > 2600 ? 1 : 0,
              transition: "opacity 1s ease-out 0.3s"
            }}
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-4 px-10 py-5 rounded-full border border-primary/50 hover:border-primary transition-all duration-500 hover:shadow-[0_0_60px_hsl(var(--primary)/0.3)]"
            >
              <span className="text-sm tracking-[0.2em] uppercase">Start a Conversation</span>
              <svg className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/construction" 
              className="group flex items-center gap-4 text-muted-foreground hover:text-foreground transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Next Service</span>
              <span className="text-2xl font-heading group-hover:text-primary transition-colors duration-500">Construction →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;