import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import constructionHero from "@/assets/indian-construction-hero.jpg";
import foundationImg from "@/assets/construction-foundation.jpg";
import structureImg from "@/assets/construction-structure.jpg";
import envelopeImg from "@/assets/construction-envelope.jpg";
import servicesImg from "@/assets/construction-services.jpg";
import finishImg from "@/assets/construction-finish.jpg";

const Construction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeLayer, setActiveLayer] = useState(-1);
  const layersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
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

  // Real construction phases with accurate descriptions
  const constructionLayers = [
    { 
      name: "Foundation", 
      depth: "Base Level",
      principle: "The unseen strength that holds everything above.",
      metric: "PCC + RCC footing with rebar reinforcement",
      image: foundationImg
    },
    { 
      name: "Structure", 
      depth: "RCC Framework",
      principle: "Columns, beams, and slabs — the skeleton of your home.",
      metric: "IS 456 compliant concrete & steel work",
      image: structureImg
    },
    { 
      name: "Envelope", 
      depth: "Brick & Plaster",
      principle: "Walls that define space and protect from elements.",
      metric: "AAC/Red brick masonry with cement plaster",
      image: envelopeImg
    },
    { 
      name: "Services", 
      depth: "MEP Systems",
      principle: "Electrical, plumbing, and AC — making the home functional.",
      metric: "Concealed wiring & CPVC/PPR plumbing",
      image: servicesImg
    },
    { 
      name: "Finish", 
      depth: "Final Touches",
      principle: "Flooring, painting, woodwork — what you see and touch daily.",
      metric: "Vitrified tiles, POP ceiling, premium paints",
      image: finishImg
    },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== SECTION 1: HERO - RAZOR SHARP, CALM, AUTHORITATIVE ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background - Stone behind glass effect */}
        <div className="absolute inset-0">
          <img 
            src={constructionHero}
            alt="Construction precision"
            className="w-full h-full object-cover"
            style={{
              filter: 'blur(1px) brightness(0.5)'
            }}
          />
          {/* Solid dark overlay - 75% */}
          <div className="absolute inset-0 bg-[#0E0E0E]/75" />
          {/* Heavy vignette */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0E0E0E_90%)]" />
          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0E0E0E] to-transparent" />
        </div>

        {/* Very subtle grain - almost imperceptible slow movement */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none animate-grain-drift"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28">
          {/* Breadcrumb - ultra subtle, 30% opacity */}
          <nav 
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/30 mb-24"
            style={{
              opacity: isLoaded ? 0.3 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-ivory/50 transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C6A46A]/60">CONSTRUCTION</span>
          </nav>

          <div className="relative max-w-5xl">
            {/* Main headline - SINGLE LINE for clarity + authority */}
            <h1 
              className="relative z-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
              }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-ivory/90 tracking-tight leading-tight">
                Construction, executed with{' '}
                <span 
                  className="text-[#C6A46A]"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease-out 0.6s"
                  }}
                >
                  precision.
                </span>
              </span>
            </h1>

            {/* Sub-headline - quiet confidence, no italics, no fancy stuff */}
            <p 
              className="text-base md:text-lg text-ivory/45 leading-relaxed max-w-lg mt-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 0.8s"
              }}
            >
              Every joint, every pour, every weld —<br />
              measured, verified, and executed without compromise.
            </p>

            {/* NO CTA HERE - Authority first, action later */}
          </div>

          {/* Scroll indicator - ultra minimal: thin line + tiny dot only */}
          <div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{
              opacity: isLoaded ? 0.4 : 0,
              transition: "opacity 1s ease-out 1.5s"
            }}
          >
            <div className="w-1 h-1 rounded-full bg-ivory/50 mb-2" />
            <div className="w-[1px] h-16 bg-gradient-to-b from-ivory/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE ANATOMY ===== */}
      <section ref={layersRef} className="relative py-20 md:py-28 overflow-hidden bg-[#0E0E0E]">
        {/* Subtle Grid */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono">
                THE ANATOMY
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-4">
              Every layer carries
              <span className="text-ivory/50"> responsibility.</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/50 max-w-lg leading-relaxed">
              Construction is not sequential steps. It's interlocking systems where each depends on every other.
            </p>
          </div>

          {/* Elegant Moving Strip */}
          <div className="relative w-full overflow-hidden py-4 mb-20">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#C6A46A]/5 to-transparent" />
            
            {/* Top & bottom lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ivory/20 to-transparent" />

            {/* Scrolling text */}
            <div className="relative flex whitespace-nowrap">
              <div className="animate-marquee flex items-center gap-16">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-ivory/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-ivory/50">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-ivory/20" />
                  </span>
                ))}
              </div>
              <div className="animate-marquee2 flex items-center gap-16 absolute left-0">
                {[...Array(4)].map((_, i) => (
                  <span key={i} className="flex items-center gap-16">
                    <span className="text-sm md:text-base font-heading tracking-[0.5em] uppercase text-ivory/80">
                      EdgeHomes Construction
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                    <span className="text-sm md:text-base tracking-[0.3em] uppercase text-ivory/50">
                      Precision Built
                    </span>
                    <span className="w-px h-4 bg-ivory/20" />
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Construction Layers with Real Images */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-ivory/10">
              <div 
                className="absolute top-0 left-0 w-full bg-[#C6A46A] transition-all duration-500"
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
                        ? 'border-[#C6A46A] bg-[#C6A46A]' 
                        : 'border-ivory/30 bg-[#0E0E0E]'
                    }`}
                  >
                    <span className="absolute -left-6 top-1/2 -translate-y-1/2 text-[8px] font-mono text-ivory/40">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="group grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                    {/* Image */}
                    <div className="md:col-span-4">
                      <div className="relative overflow-hidden aspect-[4/3]">
                        <img 
                          src={layer.image}
                          alt={layer.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E]/60 to-transparent" />
                        
                        {/* Corner accent */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-l border-t border-[#C6A46A]/50" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-r border-b border-[#C6A46A]/50" />
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="md:col-span-8 flex flex-col justify-center">
                      <div className="flex items-baseline gap-4 mb-3">
                        <h3 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                          {layer.name}
                        </h3>
                        <span className="text-xs tracking-[0.15em] uppercase text-[#C6A46A]/60">
                          {layer.depth}
                        </span>
                      </div>

                      <p className="text-lg text-ivory/60 leading-relaxed mb-4">
                        {layer.principle}
                      </p>
                      
                      {/* Metric Badge */}
                      <span 
                        className={`inline-flex items-center gap-2 text-xs tracking-wide text-ivory/50 transition-all duration-400 ${
                          activeLayer >= index ? 'opacity-100' : 'opacity-0'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                        {layer.metric}
                      </span>
                    </div>
                  </div>

                  {/* Separator */}
                  <div className="mt-10 h-px bg-ivory/10" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: THE PROMISE ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        {/* Background with image */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Architecture detail"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/95 to-[#0E0E0E]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-10">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A46A]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#C6A46A]/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A46A]/50" />
            </div>
          </div>

          {/* Quote */}
          <div className="mb-12">
            <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono block mb-8">
              OUR COMMITMENT
            </span>
            
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-ivory leading-relaxed mb-8">
              "We measure twice not because we might be wrong,
              <span className="text-ivory/50"> but because our clients deserve </span>
              <span className="text-[#C6A46A] italic">certainty.</span>"
            </blockquote>

            <div className="flex items-center justify-center gap-4 text-ivory/40">
              <span className="h-px w-10 bg-ivory/20" />
              <span className="text-xs tracking-[0.15em] uppercase">EdgeHomes Construction</span>
              <span className="h-px w-10 bg-ivory/20" />
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
                <div className="text-2xl md:text-3xl font-heading text-[#C6A46A] mb-2 group-hover:scale-105 transition-transform duration-200">
                  {item.stat}
                </div>
                <div className="text-xs text-ivory/50 tracking-wider uppercase">
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-4 bg-[#C6A46A] text-[#0E0E0E] px-8 py-4 text-sm tracking-wider font-medium hover:bg-[#C6A46A]/90 transition-all duration-500"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
