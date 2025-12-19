import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import constructionHero from "@/assets/construction-hero-texture.jpg";

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
      metric: "Load tested to 3× design capacity",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=300&fit=crop"
    },
    { 
      name: "Structure", 
      depth: "Primary Frame",
      principle: "Steel and concrete don't negotiate.",
      metric: "±2mm column alignment tolerance",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?w=400&h=300&fit=crop"
    },
    { 
      name: "Envelope", 
      depth: "Building Skin",
      principle: "Protection before appearance.",
      metric: "Zero water ingress warranty",
      image: "https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=400&h=300&fit=crop"
    },
    { 
      name: "Services", 
      depth: "MEP Systems",
      principle: "The invisible makes the visible work.",
      metric: "BIM-coordinated routing",
      image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=400&h=300&fit=crop"
    },
    { 
      name: "Finish", 
      depth: "Final Layer",
      principle: "Details reveal discipline.",
      metric: "±0.5mm edge tolerance",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&h=300&fit=crop"
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
                hsl(var(--primary) / 0.08) 0%, 
                transparent 40%
              )
            `
          }}
        />

        {/* Blueprint Fragments */}
        <BlueprintFragments />

        {/* 3D Grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
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
            <div className="col-span-12 lg:col-span-6">
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

            {/* Right: Real Construction Image Collage */}
            <div className="col-span-12 lg:col-span-6 hidden lg:block">
              <div 
                className="relative"
                style={{ 
                  transform: `perspective(1000px) rotateY(${mousePos.x * 3}deg) rotateX(${mousePos.y * -3}deg)`,
                  transition: 'transform 0.4s ease-out',
                }}
              >
                {/* Main Image */}
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm">
                  <img 
                    src={constructionHero}
                    alt="Precision construction"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/40 to-transparent" />
                  
                  {/* Overlay accent lines */}
                  <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary/60" />
                  <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary/60" />
                </div>

                {/* Floating stat cards */}
                <div className="absolute -bottom-6 -left-6 bg-background/90 backdrop-blur-md border border-border/50 p-4 rounded-sm">
                  <div className="text-2xl font-heading text-primary">150+</div>
                  <div className="text-[10px] tracking-widest uppercase text-muted-foreground">Projects Delivered</div>
                </div>

                <div className="absolute -top-4 -right-4 bg-background/90 backdrop-blur-md border border-border/50 p-3 rounded-sm">
                  <div className="text-[9px] tracking-[0.3em] uppercase text-primary">Since 2015</div>
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
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--foreground)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--foreground)) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
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

          {/* Elegant Moving Strip */}
          <div className="relative w-full overflow-hidden py-4 mb-20">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
            
            {/* Top & bottom lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Scrolling text */}
            <div className="relative flex whitespace-nowrap">
              <div className="animate-marquee flex items-center gap-16">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-foreground/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-border" />
                  </span>
                ))}
              </div>
              <div className="animate-marquee2 flex items-center gap-16 absolute left-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-foreground/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-muted-foreground">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-border" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Layers with Real Images */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border/40">
              <div 
                className="absolute top-0 left-0 w-full bg-primary transition-all duration-500"
                style={{ height: `${Math.min(100, (activeLayer + 1) * 20)}%` }}
              />
            </div>

            {/* Layers */}
            <div className="space-y-16 pl-8 md:pl-20">
              {constructionLayers.map((layer, index) => (
                <div 
                  key={layer.name}
                  className={`relative transition-all duration-500 ${activeLayer >= index ? 'opacity-100' : 'opacity-40'}`}
                >
                  {/* Layer Marker */}
                  <div 
                    className={`absolute -left-8 md:-left-20 top-2 w-3 h-3 rounded-full border-2 transition-all duration-400 ${
                      activeLayer >= index 
                        ? 'border-primary bg-primary' 
                        : 'border-border/60 bg-background'
                    }`}
                  >
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] font-mono text-muted-foreground/70">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Image */}
                    <div className="md:col-span-4">
                      <div className="relative overflow-hidden rounded-sm aspect-[4/3]">
                        <img 
                          src={layer.image}
                          alt={layer.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-primary/50" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-primary/50" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-8 flex flex-col justify-center">
                      <div className="flex items-baseline gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-heading text-foreground group-hover:text-primary transition-colors duration-300">
                          {layer.name}
                        </h3>
                        <span className="text-xs tracking-[0.15em] uppercase text-primary/60">
                          {layer.depth}
                        </span>
                      </div>

                      <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                        {layer.principle}
                      </p>
                      
                      {/* Metric Badge */}
                      <span 
                        className={`inline-flex items-center gap-2 text-xs tracking-wide text-muted-foreground/80 transition-all duration-400 ${
                          activeLayer >= index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {layer.metric}
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="mt-10 h-px bg-border/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* === SECTION 3: THE PROMISE === */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Architecture detail"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        </div>
        
        {/* Diagonal accent */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: `linear-gradient(135deg, transparent 35%, hsl(var(--primary) / 0.02) 50%, transparent 65%)`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rotate-45 border border-primary/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>

          {/* Quote */}
          <div className="mb-12">
            <span className="text-xs tracking-[0.35em] uppercase text-primary/50 block mb-8">
              Our Commitment
            </span>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-foreground leading-relaxed mb-8">
              "We measure twice not because we might be wrong,
              <span className="text-muted-foreground"> but because our clients deserve </span>
              <span className="text-primary">certainty.</span>"
            </blockquote>

            <div className="flex items-center justify-center gap-4 text-muted-foreground/60">
              <span className="h-px w-10 bg-border" />
              <span className="text-xs tracking-[0.15em] uppercase">EdgeHomes Construction</span>
              <span className="h-px w-10 bg-border" />
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
                <div className="text-2xl md:text-3xl font-heading text-primary mb-2 group-hover:scale-105 transition-transform duration-200">
                  {item.stat}
                </div>
                <div className="text-xs text-muted-foreground/70 tracking-wider uppercase">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <a 
            href="/contact"
            className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.2em] uppercase hover:bg-primary/90 transition-all duration-300 group"
          >
            <span>Discuss Your Project</span>
            <svg 
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
