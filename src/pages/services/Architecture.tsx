import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Plus, Minus, ArrowRight } from "lucide-react";
import architectureHero from "@/assets/architecture-hero.jpg";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const principles = [
    {
      title: "Function becomes form.",
      desc: "Every space earns its shape. We design around how you live — not around trends.",
      num: "01"
    },
    {
      title: "Light is a material.",
      desc: "We sculpt with sunlight. Every window, every void is placed with intention.",
      num: "02"
    },
    {
      title: "Details carry the weight.",
      desc: "The joints, the thresholds, the edges — these are where architecture lives.",
      num: "03"
    }
  ];

  const blueprintAnnotations = [
    { id: "entry", label: "Entry sequence", x: 15, y: 30 },
    { id: "courtyard", label: "Courtyard / void", x: 50, y: 45 },
    { id: "stair", label: "Stair as sculpture", x: 75, y: 25 },
    { id: "sightlines", label: "Sightlines", x: 35, y: 70 },
    { id: "ventilation", label: "Ventilation logic", x: 65, y: 75 }
  ];

  const faqs = [
    { q: "What is your typical timeline?", a: "Most residential projects take 8-16 weeks for design, depending on complexity. We believe in thorough exploration over rushed decisions." },
    { q: "Do you do turnkey?", a: "We focus on design and documentation. For construction, we partner with trusted contractors or work with your chosen builder." },
    { q: "How do you charge?", a: "We work on a phased fee structure based on project scope. An initial consultation helps us provide a detailed proposal." },
    { q: "Can you work with my contractor?", a: "Absolutely. We're experienced in coordinating with external teams and ensuring our design intent is executed precisely." },
    { q: "How many concepts do you provide?", a: "We typically present 2-3 distinct directions, then refine the chosen approach through iterations." },
    { q: "What do you need from me to start?", a: "Site survey, plot documents, a brief conversation about your vision, and trust in the process." }
  ];

  return (
    <div className="min-h-screen bg-ivory text-charcoal overflow-x-hidden">
      <Header />

      {/* ===== SECTION 1: HERO - CINEMATIC IMMERSIVE ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Full background image with overlay */}
        <div className="absolute inset-0">
          <img 
            src={architectureHero}
            alt="Modern architecture"
            className="w-full h-full object-cover"
            style={{
              transform: `scale(1.05) translateY(${scrollY * 0.1}px)`,
              transition: "transform 0.1s ease-out"
            }}
          />
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal/90 via-charcoal/60 to-charcoal/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-charcoal/40" />
        </div>

        {/* Animated geometric elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating lines */}
          <div 
            className="absolute top-1/4 left-0 w-[40%] h-[1px] bg-gradient-to-r from-muted-gold/60 to-transparent"
            style={{
              transform: `translateX(${isLoaded ? 0 : -100}%)`,
              transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
            }}
          />
          <div 
            className="absolute top-1/2 right-0 w-[30%] h-[1px] bg-gradient-to-l from-muted-gold/40 to-transparent"
            style={{
              transform: `translateX(${isLoaded ? 0 : 100}%)`,
              transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s"
            }}
          />
          <div 
            className="absolute bottom-1/3 left-[10%] w-[1px] h-[20%] bg-gradient-to-b from-muted-gold/30 to-transparent"
            style={{
              transform: `translateY(${isLoaded ? 0 : -100}%)`,
              transition: "transform 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.2s"
            }}
          />

          {/* Corner frames */}
          <div 
            className="absolute top-20 left-8 lg:left-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 1.5s"
            }}
          >
            <div className="w-20 h-20 border-l border-t border-muted-gold/40" />
          </div>
          <div 
            className="absolute bottom-20 right-8 lg:right-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 1.7s"
            }}
          >
            <div className="w-20 h-20 border-r border-b border-muted-gold/40" />
          </div>

          {/* Floating dots */}
          <div 
            className="absolute top-[30%] right-[15%] w-2 h-2 rounded-full bg-muted-gold/50"
            style={{
              transform: `translate(${(mousePosition.x - window.innerWidth/2) * 0.02}px, ${(mousePosition.y - window.innerHeight/2) * 0.02}px)`
            }}
          />
          <div 
            className="absolute bottom-[40%] left-[20%] w-1.5 h-1.5 rounded-full bg-muted-gold/30"
            style={{
              transform: `translate(${(mousePosition.x - window.innerWidth/2) * -0.015}px, ${(mousePosition.y - window.innerHeight/2) * -0.015}px)`
            }}
          />
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28">
          {/* Breadcrumb */}
          <nav 
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/50 mb-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-ivory transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-muted-gold">ARCHITECTURE</span>
          </nav>

          <div className="max-w-4xl">
            {/* Edition tag */}
            <div 
              className="inline-flex items-center gap-4 mb-8"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.9s ease-out 0.5s"
              }}
            >
              <div className="w-12 h-[1px] bg-muted-gold" />
              <span className="text-[10px] tracking-[0.3em] text-muted-gold font-mono">
                ARCHITECTURE STUDIO
              </span>
              <div className="w-3 h-3 rotate-45 border border-muted-gold/60" />
            </div>

            {/* Main headline - staggered reveal */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory leading-[0.95] mb-8">
              {["Architecture", "that feels", "calm"].map((line, i) => (
                <span 
                  key={i}
                  className="block overflow-hidden"
                >
                  <span 
                    className={`inline-block ${i === 2 ? "italic text-muted-gold" : ""}`}
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                      transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.7 + i * 0.12}s`
                    }}
                  >
                    {line}
                  </span>
                </span>
              ))}
            </h1>

            {/* Subcopy */}
            <p 
              className="text-lg md:text-xl text-ivory/70 leading-relaxed max-w-xl mb-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 1.2s"
              }}
            >
              We design homes with restraint, clarity, and quiet confidence. 
              Every line has a reason, every space has a story.
            </p>

            {/* CTA */}
            <div 
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 1.4s"
              }}
            >
              <Link 
                to="/contact"
                className="group inline-flex items-center gap-4 bg-muted-gold text-charcoal px-8 py-4 text-sm tracking-wider font-medium hover:bg-ivory transition-all duration-500"
              >
                Begin Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Bottom signature */}
          <div 
            className="absolute bottom-12 left-6 lg:left-12 flex items-center gap-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 1.8s"
            }}
          >
            <span className="text-[9px] tracking-[0.2em] text-ivory/40">DESIGN-FIRST</span>
            <div className="w-8 h-[1px] bg-ivory/20" />
            <span className="text-[9px] tracking-[0.2em] text-ivory/40">DETAIL-OBSESSED</span>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-12 right-6 lg:right-12 flex flex-col items-center gap-3"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-out 2s"
            }}
          >
            <span className="text-[9px] tracking-[0.3em] text-ivory/40 rotate-90 origin-center translate-x-6">SCROLL</span>
            <div className="w-[1px] h-16 bg-gradient-to-b from-muted-gold/60 to-transparent animate-pulse" />
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: PRINCIPLES - IMMERSIVE CARDS ===== */}
      <section className="relative py-28 lg:py-40 bg-ivory overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full">
            <defs>
              <pattern id="archGrid" width="100" height="100" patternUnits="userSpaceOnUse">
                <circle cx="50" cy="50" r="1" fill="hsl(var(--charcoal))" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#archGrid)" />
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div 
          className="absolute top-20 right-20 w-40 h-40 border border-muted-gold/10 rounded-full"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-40 left-10 w-24 h-24 border border-graphite/5"
          style={{ transform: `rotate(45deg) translateY(${scrollY * -0.03}px)` }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section header */}
          <div 
            className="flex items-center justify-between mb-20"
            style={{
              opacity: scrollY > 400 ? 1 : 0,
              transform: scrollY > 400 ? "translateY(0)" : "translateY(40px)",
              transition: "all 1s ease-out"
            }}
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border border-muted-gold/30 flex items-center justify-center">
                <span className="text-[10px] tracking-[0.2em] text-muted-gold">03</span>
              </div>
              <div>
                <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-2">
                  OUR PHILOSOPHY
                </span>
                <h2 className="text-3xl md:text-4xl font-heading text-charcoal">
                  Core <em className="italic text-muted-gold">Principles</em>
                </h2>
              </div>
            </div>
            <div className="hidden lg:block w-32 h-[1px] bg-gradient-to-r from-muted-gold/50 to-transparent" />
          </div>

          {/* Principles grid - asymmetric layout */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-6">
            {principles.map((principle, index) => {
              const colSpan = index === 0 ? "lg:col-span-5" : index === 1 ? "lg:col-span-4" : "lg:col-span-3";
              const marginTop = index === 1 ? "lg:mt-20" : index === 2 ? "lg:mt-40" : "";
              
              return (
                <div 
                  key={index}
                  className={`${colSpan} ${marginTop} group`}
                  onMouseEnter={() => setActivePrinciple(index)}
                  onMouseLeave={() => setActivePrinciple(null)}
                  style={{
                    opacity: scrollY > 500 ? 1 : 0,
                    transform: scrollY > 500 ? "translateY(0)" : "translateY(60px)",
                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.15}s`
                  }}
                >
                  <div 
                    className={`relative p-8 lg:p-10 transition-all duration-700 ${
                      activePrinciple === index 
                        ? "bg-charcoal" 
                        : "bg-ivory-dark/30 hover:bg-ivory-dark/50"
                    }`}
                  >
                    {/* Number */}
                    <span 
                      className={`text-6xl lg:text-7xl font-heading transition-colors duration-500 ${
                        activePrinciple === index ? "text-muted-gold/30" : "text-graphite/10"
                      }`}
                    >
                      {principle.num}
                    </span>

                    {/* Content */}
                    <div className="mt-6">
                      <h3 
                        className={`text-xl md:text-2xl font-heading mb-4 transition-colors duration-500 ${
                          activePrinciple === index ? "text-ivory" : "text-charcoal"
                        }`}
                      >
                        {principle.title}
                      </h3>
                      <p 
                        className={`text-sm leading-relaxed transition-all duration-500 ${
                          activePrinciple === index ? "text-ivory/70" : "text-graphite"
                        }`}
                      >
                        {principle.desc}
                      </p>
                    </div>

                    {/* Corner accent */}
                    <div 
                      className={`absolute top-0 right-0 w-12 h-12 transition-all duration-500 ${
                        activePrinciple === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute top-0 right-0 w-full h-[1px] bg-muted-gold" />
                      <div className="absolute top-0 right-0 h-full w-[1px] bg-muted-gold" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: DESIGN DNA - COMPACT ===== */}
      <section className="relative py-16 lg:py-24 bg-charcoal overflow-hidden">
        {/* Animated background lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-ivory/5 to-transparent"
            style={{ transform: `translateY(${(scrollY - 1000) * 0.1}px)` }}
          />
          <div 
            className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-muted-gold/10 to-transparent"
            style={{ transform: `translateY(${(scrollY - 1000) * -0.08}px)` }}
          />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* Left: Blueprint panel */}
            <div 
              className="relative aspect-[4/3] group"
              style={{
                opacity: scrollY > 900 ? 1 : 0,
                transform: scrollY > 900 ? "translateX(0)" : "translateX(-40px)",
                transition: "all 1s ease-out"
              }}
            >
              {/* Outer frame */}
              <div className="absolute -inset-4 border border-muted-gold/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Blueprint SVG */}
              <svg viewBox="0 0 400 300" className="w-full h-full bg-charcoal/50">
                <defs>
                  <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--ivory) / 0.08)" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
                
                {/* Floor plan lines */}
                <g stroke="hsl(var(--ivory))" strokeWidth="0.5" fill="none" opacity="0.4">
                  <rect x="50" y="40" width="300" height="220" />
                  <line x1="50" y1="120" x2="200" y2="120" />
                  <line x1="200" y1="40" x2="200" y2="160" />
                  <line x1="200" y1="200" x2="350" y2="200" />
                  <line x1="260" y1="120" x2="260" y2="260" />
                  <rect x="150" y="120" width="70" height="70" strokeDasharray="4 2" />
                  <path d="M50 180 L30 180 L30 220 L50 220" />
                  <g>
                    <line x1="280" y1="60" x2="280" y2="110" />
                    <line x1="280" y1="70" x2="320" y2="70" />
                    <line x1="280" y1="80" x2="320" y2="80" />
                    <line x1="280" y1="90" x2="320" y2="90" />
                    <line x1="280" y1="100" x2="320" y2="100" />
                  </g>
                </g>

                {/* Annotation highlights */}
                {blueprintAnnotations.map((anno) => (
                  <g key={anno.id}>
                    <circle 
                      cx={anno.x * 4} 
                      cy={anno.y * 3} 
                      r="16"
                      fill={activeBlueprint === anno.id ? "hsl(var(--muted-gold) / 0.2)" : "transparent"}
                      stroke={activeBlueprint === anno.id ? "hsl(var(--muted-gold))" : "transparent"}
                      strokeWidth="1.5"
                      style={{ transition: "all 0.5s ease-out" }}
                    />
                  </g>
                ))}
              </svg>

              {/* Corner labels */}
              <div className="absolute -top-2 -left-2 text-[8px] font-mono text-muted-gold/60">A1</div>
              <div className="absolute -bottom-2 -right-2 text-[8px] font-mono text-muted-gold/60">B4</div>
            </div>

            {/* Right: Annotations */}
            <div 
              className="space-y-6"
              style={{
                opacity: scrollY > 900 ? 1 : 0,
                transform: scrollY > 900 ? "translateX(0)" : "translateX(40px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full border border-muted-gold/40 flex items-center justify-center">
                  <div className="w-2 h-2 bg-muted-gold rounded-full" />
                </div>
                <span className="text-[9px] tracking-[0.3em] text-muted-gold font-mono">
                  DESIGN DNA
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-heading text-ivory leading-tight">
                Good architecture is invisible engineering — disguised as <em className="italic text-muted-gold">ease</em>.
              </h2>

              <div className="space-y-2 pt-4">
                {blueprintAnnotations.map((anno, index) => (
                  <button
                    key={anno.id}
                    className={`group w-full text-left flex items-center gap-4 py-3 border-b transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "border-muted-gold/50" 
                        : "border-ivory/10 hover:border-ivory/30"
                    }`}
                    onMouseEnter={() => setActiveBlueprint(anno.id)}
                    onMouseLeave={() => setActiveBlueprint(null)}
                  >
                    <span className={`w-6 h-6 rounded-full border flex items-center justify-center text-[9px] font-mono transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "border-muted-gold text-muted-gold" 
                        : "border-ivory/20 text-ivory/40"
                    }`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-sm tracking-wide transition-colors duration-300 ${
                      activeBlueprint === anno.id ? "text-muted-gold" : "text-ivory/70"
                    }`}>
                      {anno.label}
                    </span>
                    <ArrowRight className={`w-4 h-4 ml-auto transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "opacity-100 translate-x-0 text-muted-gold" 
                        : "opacity-0 -translate-x-2 text-ivory"
                    }`} />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: FAQ ===== */}
      <section id="faq-section" className="relative py-24 lg:py-32 bg-ivory overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-32 h-32 border border-graphite/5 rounded-full" />
        <div className="absolute bottom-20 left-10 w-2 h-2 bg-muted-gold/40 rounded-full" />

        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div 
              className="text-center mb-14"
              style={{
                opacity: scrollY > 1300 ? 1 : 0,
                transform: scrollY > 1300 ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out"
              }}
            >
              <div className="inline-flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-muted-gold/50" />
                <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono">
                  QUESTIONS
                </span>
                <div className="w-8 h-[1px] bg-muted-gold/50" />
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal">
                Common questions
              </h2>
            </div>

            {/* FAQ accordion */}
            <div 
              className="space-y-0"
              style={{
                opacity: scrollY > 1400 ? 1 : 0,
                transition: "opacity 1s ease-out"
              }}
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-graphite/10"
                >
                  <button
                    className="w-full py-5 flex items-center justify-between text-left group"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className={`text-base transition-colors duration-300 ${
                      openFaq === index ? "text-muted-gold" : "text-charcoal group-hover:text-muted-gold"
                    }`}>
                      {faq.q}
                    </span>
                    {openFaq === index ? (
                      <Minus className="w-4 h-4 text-muted-gold flex-shrink-0" />
                    ) : (
                      <Plus className="w-4 h-4 text-graphite/50 group-hover:text-muted-gold flex-shrink-0" />
                    )}
                  </button>
                  <div 
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: openFaq === index ? "200px" : "0",
                      opacity: openFaq === index ? 1 : 0
                    }}
                  >
                    <p className="pb-5 text-sm text-graphite leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;
