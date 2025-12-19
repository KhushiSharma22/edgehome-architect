import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Floating Blueprint Fragments
const BlueprintFragments = () => {
  const fragments = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 50 + 25,
    rotation: Math.random() * 360,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {fragments.map((f) => (
        <div
          key={f.id}
          className="absolute opacity-[0.04]"
          style={{
            left: `${f.x}%`,
            top: `${f.y}%`,
            width: f.size,
            height: f.size,
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full" style={{ transform: `rotate(${f.rotation}deg)` }}>
            <rect x="10" y="10" width="80" height="80" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
            <line x1="10" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
            <line x1="50" y1="10" x2="50" y2="90" stroke="currentColor" strokeWidth="0.3" className="text-primary" />
          </svg>
        </div>
      ))}
    </div>
  );
};

const Construction = () => {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeLayer, setActiveLayer] = useState(-1);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (layersRef.current) {
        const rect = layersRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / (rect.height * 0.8)));
        setActiveLayer(Math.floor(progress * 5) - 1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  const constructionLayers = [
    { 
      name: "Foundation", 
      depth: "0m to -3m",
      principle: "What holds everything must be perfect first.",
      metric: "Load tested to 3× design capacity"
    },
    { 
      name: "Structure", 
      depth: "Primary Frame",
      principle: "Steel and concrete don't negotiate.",
      metric: "±2mm column alignment tolerance"
    },
    { 
      name: "Envelope", 
      depth: "Building Skin",
      principle: "Protection before appearance.",
      metric: "Zero water ingress warranty"
    },
    { 
      name: "Services", 
      depth: "MEP Systems",
      principle: "The invisible makes the visible work.",
      metric: "BIM-coordinated routing"
    },
    { 
      name: "Finish", 
      depth: "Final Layer",
      principle: "Details reveal discipline.",
      metric: "±0.5mm edge tolerance"
    },
  ];

  const metrics = [
    { value: "98%", label: "Quality Score" },
    { value: "47", label: "Avg Weeks" },
    { value: "0%", label: "Rework Rate" },
  ];

  return (
    <div 
      className="min-h-screen bg-background text-foreground"
      onMouseMove={handleMouseMove}
    >
      <Header />

      {/* === SECTION 1: HERO === */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Base Background */}
        <div className="absolute inset-0 bg-[#050403]" />
        
        {/* Dynamic Gradient following mouse */}
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{
            background: `
              radial-gradient(circle at ${50 + mousePos.x * 15}% ${50 + mousePos.y * 15}%, 
                hsl(var(--primary) / 0.1) 0%, 
                transparent 40%
              ),
              radial-gradient(circle at ${30 - mousePos.x * 10}% ${70 - mousePos.y * 10}%, 
                hsl(var(--primary) / 0.06) 0%, 
                transparent 35%
              )
            `
          }}
        />

        {/* Blueprint Fragments */}
        <BlueprintFragments />

        {/* 3D Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            perspective: '1000px',
            perspectiveOrigin: `${50 + mousePos.x * 15}% ${50 + mousePos.y * 15}%`,
          }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
              transform: `rotateX(${55 + mousePos.y * 5}deg) translateZ(-30px) scale(1.8)`,
              transformOrigin: 'center center',
            }}
          />
        </div>

        {/* Vignette */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 100% 80% at 50% 50%, transparent 20%, hsl(0 0% 2% / 0.6) 100%)`
          }}
        />

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <div className="grid grid-cols-12 gap-8 items-center">
            
            {/* Left: Typography */}
            <div className="col-span-12 lg:col-span-7">
              {/* Label */}
              <div className="mb-8 flex items-center gap-4">
                <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary" />
                <span className="text-primary text-[10px] tracking-[0.4em] uppercase">
                  Construction Studio
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-8 leading-[1.1]">
                We don't build
                <br />
                <span className="text-muted-foreground">structures.</span>
                <br />
                We build{' '}
                <span className="text-primary relative">
                  certainty.
                  <span className="absolute -bottom-2 left-0 w-full h-px bg-primary/40" />
                </span>
              </h1>

              {/* Subtext */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-12 leading-relaxed">
                Every joint, every pour, every weld — executed with the precision 
                of instruments, not the approximation of trades.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-8 border-t border-border/30 pt-10">
                {metrics.map((metric, i) => (
                  <div key={i} className="text-center lg:text-left">
                    <div className="text-3xl md:text-4xl font-heading text-primary mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xs tracking-[0.15em] uppercase text-muted-foreground">
                      {metric.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Glowing 3D Construction Cube */}
            <div className="col-span-12 lg:col-span-5 hidden lg:flex items-center justify-center">
              <div 
                className="relative w-80 h-80"
                style={{ 
                  transform: `perspective(1000px) rotateY(${mousePos.x * 8}deg) rotateX(${mousePos.y * -8}deg)`,
                  transition: 'transform 0.3s ease-out',
                }}
              >
                {/* Glowing orb background */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-48 h-48 rounded-full blur-3xl animate-pulse"
                    style={{
                      background: `radial-gradient(circle, hsl(45 80% 55% / 0.4) 0%, hsl(35 70% 50% / 0.2) 40%, transparent 70%)`,
                    }}
                  />
                </div>

                {/* Rotating rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div 
                    className="w-56 h-56 border border-primary/30 rounded-full"
                    style={{ animation: 'spin 20s linear infinite' }}
                  />
                  <div 
                    className="absolute w-44 h-44 border border-primary/40 rounded-full"
                    style={{ animation: 'spin 15s linear infinite reverse' }}
                  />
                  <div 
                    className="absolute w-32 h-32 border-2 border-primary/50 rounded-full"
                    style={{ animation: 'spin 10s linear infinite' }}
                  />
                </div>

                {/* Central glowing cube structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-28 h-28" style={{ transformStyle: 'preserve-3d' }}>
                    {/* Cube faces with gradient */}
                    <div 
                      className="absolute inset-0 border-2 border-primary/60"
                      style={{
                        background: `linear-gradient(135deg, hsl(45 80% 55% / 0.15) 0%, hsl(35 70% 45% / 0.08) 50%, transparent 100%)`,
                        boxShadow: `0 0 40px hsl(45 80% 55% / 0.3), inset 0 0 30px hsl(45 80% 55% / 0.1)`,
                      }}
                    />
                    
                    {/* Floating particles */}
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary rounded-full"
                        style={{
                          left: `${20 + i * 12}%`,
                          top: `${15 + (i % 3) * 25}%`,
                          animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                          animationDelay: `${i * 0.2}s`,
                          boxShadow: `0 0 10px hsl(45 80% 55% / 0.8)`,
                        }}
                      />
                    ))}

                    {/* Corner accent lights */}
                    <div className="absolute -top-1 -left-1 w-3 h-3 bg-primary rounded-full blur-sm" style={{ boxShadow: '0 0 15px hsl(45 80% 55%)' }} />
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary rounded-full blur-sm" style={{ boxShadow: '0 0 15px hsl(45 80% 55%)' }} />
                    <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-primary rounded-full blur-sm" style={{ boxShadow: '0 0 15px hsl(45 80% 55%)' }} />
                    <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-primary rounded-full blur-sm" style={{ boxShadow: '0 0 15px hsl(45 80% 55%)' }} />
                  </div>
                </div>

                {/* Orbiting elements */}
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ animation: 'spin 8s linear infinite' }}
                >
                  <div className="absolute w-4 h-4 bg-gradient-to-br from-primary to-primary/50 rounded-sm" style={{ transform: 'translateX(90px)', boxShadow: '0 0 20px hsl(45 80% 55% / 0.6)' }} />
                </div>
                <div 
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ animation: 'spin 12s linear infinite reverse' }}
                >
                  <div className="absolute w-3 h-3 bg-gradient-to-br from-primary to-primary/50 rounded-sm" style={{ transform: 'translateY(-85px)', boxShadow: '0 0 15px hsl(45 80% 55% / 0.5)' }} />
                </div>

                {/* Text label */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[9px] tracking-[0.3em] uppercase text-primary/70">
                  Precision Built
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-[8px] tracking-[0.25em] uppercase text-muted-foreground/60">Scroll</span>
          <div className="w-px h-6 bg-gradient-to-b from-primary/40 to-transparent" />
        </div>
      </section>

      {/* === SECTION 2: THE ANATOMY === */}
      <section ref={layersRef} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#060605]" />
        
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--primary)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--primary)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-20">
            <span className="text-xs tracking-[0.35em] uppercase text-primary/50 block mb-4">
              The Anatomy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
              Every layer carries
              <span className="text-muted-foreground"> responsibility.</span>
            </h2>
            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Construction is not sequential steps. It's interlocking systems where each depends on every other.
            </p>
          </div>

          {/* Animated Gradient Strip */}
          <div className="relative w-full overflow-hidden py-6 mb-16">
            {/* Glowing background */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%, 
                  hsl(45 85% 55% / 0.15) 20%, 
                  hsl(40 80% 50% / 0.25) 50%, 
                  hsl(45 85% 55% / 0.15) 80%, 
                  transparent 100%
                )`,
              }}
            />
            
            {/* Moving gradient overlay */}
            <div 
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, 
                  transparent 0%,
                  hsl(50 90% 60% / 0.3) 25%,
                  hsl(45 85% 55% / 0.5) 50%,
                  hsl(50 90% 60% / 0.3) 75%,
                  transparent 100%
                )`,
                animation: 'shimmer 3s ease-in-out infinite',
              }}
            />

            {/* Border lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />

            {/* Scrolling text */}
            <div className="relative flex whitespace-nowrap">
              <div className="animate-marquee flex items-center gap-12">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-12">
                    <span className="text-sm md:text-base font-heading tracking-[0.4em] uppercase text-primary drop-shadow-[0_0_10px_hsl(45_80%_55%/0.5)]">
                      EdgeHomes Construction Service
                    </span>
                    <span className="w-3 h-3 bg-primary/80 rotate-45" style={{ boxShadow: '0 0 15px hsl(45 80% 55% / 0.8)' }} />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-primary/70">
                      Built with Precision
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: '0 0 12px hsl(45 80% 55%)' }} />
                  </span>
                ))}
              </div>
              <div className="animate-marquee2 flex items-center gap-12 absolute left-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-12">
                    <span className="text-sm md:text-base font-heading tracking-[0.4em] uppercase text-primary drop-shadow-[0_0_10px_hsl(45_80%_55%/0.5)]">
                      EdgeHomes Construction Service
                    </span>
                    <span className="w-3 h-3 bg-primary/80 rotate-45" style={{ boxShadow: '0 0 15px hsl(45 80% 55% / 0.8)' }} />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-primary/70">
                      Built with Precision
                    </span>
                    <span className="w-2 h-2 rounded-full bg-primary" style={{ boxShadow: '0 0 12px hsl(45 80% 55%)' }} />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Layers - Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-border/50">
              <div 
                className="absolute top-0 left-0 w-full bg-primary/80 transition-all duration-500"
                style={{ height: `${Math.min(100, (activeLayer + 1) * 20)}%` }}
              />
            </div>

            {/* Layers */}
            <div className="space-y-10 md:space-y-12 pl-6 md:pl-16">
              {constructionLayers.map((layer, index) => (
                <div 
                  key={layer.name}
                  className={`relative transition-all duration-500 ${activeLayer >= index ? 'opacity-100' : 'opacity-40'}`}
                >
                  {/* Layer Marker */}
                  <div 
                    className={`absolute -left-6 md:-left-16 top-0 w-3 h-3 rounded-full border-2 transition-all duration-400 ${
                      activeLayer >= index 
                        ? 'border-primary bg-primary shadow-[0_0_12px_hsl(var(--primary)/0.5)]' 
                        : 'border-border/60 bg-background'
                    }`}
                  >
                    <span className="absolute -left-5 top-1/2 -translate-y-1/2 text-[8px] font-mono text-muted-foreground/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="group">
                    <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-8">
                      {/* Name & Depth */}
                      <div className="md:w-40 shrink-0">
                        <h3 className="text-xl md:text-2xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                          {layer.name}
                        </h3>
                        <span className="text-xs tracking-[0.12em] uppercase text-muted-foreground/70">
                          {layer.depth}
                        </span>
                      </div>

                      {/* Principle */}
                      <div className="flex-1">
                        <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-3">
                          {layer.principle}
                        </p>
                        
                        {/* Metric Badge */}
                        <span 
                          className={`inline-flex items-center gap-1.5 px-2 py-1 bg-primary/5 border border-primary/15 text-[9px] tracking-wide text-primary/80 transition-all duration-400 ${
                            activeLayer >= index ? 'opacity-100' : 'opacity-0'
                          }`}
                        >
                          <span className="w-1 h-1 rounded-full bg-primary/80" />
                          {layer.metric}
                        </span>
                      </div>
                    </div>

                    {/* Separator */}
                    <div className="mt-6 h-px bg-border/30" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: THE PROMISE === */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#040403]" />
        
        {/* Diagonal accent */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 35%, hsl(var(--primary) / 0.03) 50%, transparent 65%)`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          {/* Quote */}
          <div className="mb-12">
            <span className="text-xs tracking-[0.35em] uppercase text-primary/50 block mb-8">
              Our Commitment
            </span>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground leading-relaxed mb-8">
              "We measure twice not because we might be wrong,
              <span className="text-muted-foreground"> but because our clients deserve </span>
              <span className="text-primary italic">certainty.</span>"
            </blockquote>

            <div className="flex items-center justify-center gap-4 text-muted-foreground/60">
              <span className="h-px w-10 bg-border/50" />
              <span className="text-xs tracking-[0.15em] uppercase">EdgeHomes Construction</span>
              <span className="h-px w-10 bg-border/50" />
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-3 gap-8 mt-16 mb-16">
            {[
              { stat: "Zero", desc: "Material compromise" },
              { stat: "Daily", desc: "Progress updates" },
              { stat: "Full", desc: "Cost transparency" },
            ].map((item, i) => (
              <div key={i} className="text-center group">
                <div className="text-xl md:text-2xl font-heading text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                  {item.stat}
                </div>
                <div className="text-xs text-muted-foreground/70 tracking-wider">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary/10 border border-primary/30 text-primary text-sm tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-all duration-400 group"
          >
            <span>Discuss Your Project</span>
            <span className="w-4 h-px bg-current transition-all duration-200 group-hover:w-6" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
