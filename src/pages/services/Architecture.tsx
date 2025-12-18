import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Phone, MessageCircle, Plus, Minus } from "lucide-react";
import architectureHero from "@/assets/architecture-hero.jpg";

const Architecture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePrinciple, setActivePrinciple] = useState<number | null>(null);
  const [activeBlueprint, setActiveBlueprint] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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

  const principles = [
    {
      title: "Function becomes form.",
      desc: "Every space earns its shape. We design around how you live — not around trends.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6">
          <rect x="8" y="8" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1"/>
          <circle cx="20" cy="20" r="6" fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "Light is a material.",
      desc: "We sculpt with sunlight. Every window, every void is placed with intention.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6">
          <circle cx="20" cy="20" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
          <line x1="20" y1="4" x2="20" y2="10" stroke="currentColor" strokeWidth="1"/>
          <line x1="20" y1="30" x2="20" y2="36" stroke="currentColor" strokeWidth="1"/>
          <line x1="4" y1="20" x2="10" y2="20" stroke="currentColor" strokeWidth="1"/>
          <line x1="30" y1="20" x2="36" y2="20" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
    },
    {
      title: "Details carry the weight.",
      desc: "The joints, the thresholds, the edges — these are where architecture lives.",
      icon: (
        <svg viewBox="0 0 40 40" className="w-6 h-6">
          <path d="M8 32 L20 8 L32 32" fill="none" stroke="currentColor" strokeWidth="1"/>
          <line x1="12" y1="24" x2="28" y2="24" stroke="currentColor" strokeWidth="1"/>
        </svg>
      )
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

      {/* ===== SECTION 1: HERO - REDESIGNED PREMIUM ===== */}
      <section className="relative pt-28 pb-20 lg:pt-32 lg:pb-28 overflow-hidden">
        {/* Breadcrumb - inline */}
        <div className="container mx-auto px-6 lg:px-12 mb-12">
          <nav className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-graphite/60">
            <Link to="/" className="hover:text-charcoal transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-charcoal">ARCHITECTURE</span>
          </nav>
        </div>

        {/* Paper grain texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Decorative grid lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted-gold/20 to-transparent" />
          <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-muted-gold/10 to-transparent" />
          <div className="absolute left-1/4 top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-graphite/5 to-transparent hidden lg:block" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Main hero layout */}
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            
            {/* Left column - Text content */}
            <div className="lg:col-span-5 space-y-8">
              {/* Edition tag */}
              <div 
                className="inline-flex items-center gap-3"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 0.2s"
                }}
              >
                <div className="w-8 h-[1px] bg-muted-gold" />
                <span className="text-[9px] tracking-[0.25em] text-muted-gold font-mono">
                  ARCHITECTURE STUDIO
                </span>
              </div>

              {/* Main headline */}
              <div 
                className="space-y-1"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
                }}
              >
                <h1 className="text-4xl md:text-5xl lg:text-[3.2rem] font-heading leading-[1.15] text-charcoal">
                  Architecture that
                  <br />
                  <em className="italic text-muted-gold">feels calm</em> —
                  <br />
                  long before it
                  <br />
                  looks beautiful.
                </h1>
              </div>

              {/* Subcopy */}
              <p 
                className="text-base text-graphite leading-relaxed max-w-md"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(25px)",
                  transition: "all 0.9s ease-out 0.8s"
                }}
              >
                We design homes with restraint, clarity, and quiet confidence. 
                Every line has a reason, every space has a story.
              </p>

              {/* CTAs */}
              <div 
                className="flex flex-wrap gap-4 pt-2"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(25px)",
                  transition: "all 0.9s ease-out 1s"
                }}
              >
                <Link 
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-charcoal text-ivory px-7 py-3.5 text-sm tracking-wider hover:bg-charcoal/90 transition-all duration-500"
                >
                  Request a Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => document.getElementById('faq-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 border border-charcoal/30 text-charcoal px-7 py-3.5 text-sm tracking-wider hover:bg-charcoal/5 transition-all duration-500"
                >
                  Learn More
                </button>
              </div>

              {/* Signature line */}
              <div 
                className="pt-8 flex items-center gap-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: "opacity 1s ease-out 1.3s"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-gold/60" />
                  <span className="text-[9px] tracking-[0.2em] text-graphite/50">DESIGN-FIRST</span>
                </div>
                <div className="w-6 h-[1px] bg-graphite/20" />
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-gold/60" />
                  <span className="text-[9px] tracking-[0.2em] text-graphite/50">DETAIL-OBSESSED</span>
                </div>
              </div>
            </div>

            {/* Right column - Hero image with artistic frame */}
            <div className="lg:col-span-7 relative">
              <div 
                className="relative"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.98)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.3s"
                }}
              >
                {/* Outer decorative frame */}
                <div className="absolute -top-4 -right-4 w-32 h-32 border-t border-r border-muted-gold/30" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 border-b border-l border-muted-gold/30" />
                
                {/* Floating measurement marks */}
                <div className="absolute -left-6 top-1/4 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-graphite/30" />
                  <span className="text-[8px] font-mono text-graphite/40">A</span>
                </div>
                <div className="absolute -left-6 top-3/4 flex items-center gap-2">
                  <div className="w-4 h-[1px] bg-graphite/30" />
                  <span className="text-[8px] font-mono text-graphite/40">B</span>
                </div>

                {/* Main image container */}
                <div className="relative aspect-[4/3] lg:aspect-[5/4] overflow-hidden bg-graphite/5">
                  <img 
                    src={architectureHero}
                    alt="Modern architecture by EdgeHomes"
                    className="w-full h-full object-cover"
                    style={{
                      transform: `translateY(${scrollY * 0.03}px)`,
                      transition: "transform 0.1s ease-out"
                    }}
                  />
                  
                  {/* Subtle blueprint overlay lines */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 500 400"
                    preserveAspectRatio="none"
                    style={{ opacity: 0.08 }}
                  >
                    <g stroke="hsl(var(--muted-gold))" strokeWidth="0.5" fill="none">
                      <line x1="0" y1="100" x2="500" y2="100" />
                      <line x1="0" y1="300" x2="500" y2="300" />
                      <line x1="150" y1="0" x2="150" y2="400" />
                      <line x1="350" y1="0" x2="350" y2="400" />
                      <circle cx="250" cy="200" r="60" strokeDasharray="4 4" />
                    </g>
                  </svg>

                  {/* Edge gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory/20 via-transparent to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-ivory/10 via-transparent to-ivory/10" />
                </div>

                {/* Bottom label */}
                <div className="absolute -bottom-3 left-8 bg-ivory px-4 py-2">
                  <span className="text-[8px] tracking-[0.25em] text-graphite/60 font-mono">
                    EDGEHOMES / EDITION 01
                  </span>
                </div>

                {/* Floating accent element */}
                <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-24 flex flex-col items-center justify-between">
                  <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-muted-gold/40" />
                  <div className="w-2 h-2 rotate-45 border border-muted-gold/60" />
                  <div className="w-[1px] h-8 bg-gradient-to-t from-transparent to-muted-gold/40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: THE 3 PRINCIPLES - STUDIO WALL ===== */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        {/* Split tone: ivory top fading to warm grey */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-ivory-dark/30" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section label */}
          <div 
            className="mb-16"
            style={{
              opacity: scrollY > 300 ? 1 : 0,
              transform: scrollY > 300 ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out"
            }}
          >
            <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono">
              OUR PHILOSOPHY
            </span>
          </div>

          {/* Gallery rail - horizontal scrollable on mobile */}
          <div className="relative">
            {/* Thin horizontal rail line */}
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-graphite/10" />

            <div className="flex flex-col lg:flex-row lg:justify-between gap-12 lg:gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="relative group flex-1 max-w-md"
                  onMouseEnter={() => setActivePrinciple(index)}
                  onMouseLeave={() => setActivePrinciple(null)}
                  style={{
                    opacity: scrollY > 400 ? 1 : 0,
                    transform: scrollY > 400 
                      ? `translateY(0) translateX(${activePrinciple === index ? 0 : (index - 1) * 3}px)` 
                      : "translateY(40px)",
                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`
                  }}
                >
                  {/* Connector line to rail */}
                  <div className="hidden lg:block absolute top-0 left-8 w-[1px] h-10 bg-gradient-to-b from-muted-gold/50 to-transparent" />
                  
                  {/* Pin dot */}
                  <div className="hidden lg:block absolute -top-1 left-8 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-gold/60" />

                  {/* Principle card */}
                  <div className="pt-14 lg:pt-16">
                    <div className="flex items-start gap-4">
                      <div className="text-muted-gold opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                        {principle.icon}
                      </div>
                      <div>
                        <h3 className="text-xl md:text-2xl font-heading text-charcoal mb-3">
                          {principle.title}
                        </h3>
                        <p 
                          className="text-sm text-graphite leading-relaxed max-w-xs"
                          style={{
                            opacity: activePrinciple === index ? 1 : 0.7,
                            maxHeight: activePrinciple === index ? "100px" : "0",
                            overflow: "hidden",
                            transition: "all 0.5s ease-out"
                          }}
                        >
                          {principle.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: DESIGN DNA - COMPACT ===== */}
      <section className="relative py-16 lg:py-20 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left: Blueprint panel */}
            <div 
              className="relative aspect-[4/3]"
              style={{
                opacity: scrollY > 700 ? 1 : 0,
                transform: scrollY > 700 ? "translateX(0)" : "translateX(-40px)",
                transition: "all 1s ease-out"
              }}
            >
              {/* Blueprint SVG */}
              <svg viewBox="0 0 400 300" className="w-full h-full">
                <defs>
                  <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--ivory) / 0.1)" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
                
                {/* Floor plan lines */}
                <g stroke="hsl(var(--ivory))" strokeWidth="0.5" fill="none" opacity="0.4">
                  {/* Outer walls */}
                  <rect x="50" y="40" width="300" height="220" />
                  
                  {/* Rooms */}
                  <line x1="50" y1="120" x2="200" y2="120" />
                  <line x1="200" y1="40" x2="200" y2="160" />
                  <line x1="200" y1="200" x2="350" y2="200" />
                  <line x1="260" y1="120" x2="260" y2="260" />
                  
                  {/* Courtyard */}
                  <rect x="150" y="120" width="70" height="70" strokeDasharray="4 2" />
                  
                  {/* Entry */}
                  <path d="M50 180 L30 180 L30 220 L50 220" />
                  
                  {/* Stairs */}
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
                      fill={activeBlueprint === anno.id ? "hsl(var(--muted-gold) / 0.15)" : "transparent"}
                      stroke={activeBlueprint === anno.id ? "hsl(var(--muted-gold))" : "transparent"}
                      strokeWidth="1"
                      style={{ transition: "all 0.5s ease-out" }}
                    />
                  </g>
                ))}
              </svg>
            </div>

            {/* Right: Annotations */}
            <div 
              className="space-y-6"
              style={{
                opacity: scrollY > 700 ? 1 : 0,
                transform: scrollY > 700 ? "translateX(0)" : "translateX(40px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-muted-gold font-mono">
                DESIGN DNA
              </span>
              
              <h2 className="text-2xl md:text-3xl font-heading text-ivory leading-tight">
                Good architecture is invisible engineering — disguised as <em className="italic text-muted-gold">ease</em>.
              </h2>

              <div className="space-y-3 pt-4">
                {blueprintAnnotations.map((anno, index) => (
                  <button
                    key={anno.id}
                    className={`group w-full text-left flex items-center gap-4 py-2.5 border-b transition-all duration-300 ${
                      activeBlueprint === anno.id 
                        ? "border-muted-gold/50" 
                        : "border-ivory/10 hover:border-ivory/30"
                    }`}
                    onMouseEnter={() => setActiveBlueprint(anno.id)}
                    onMouseLeave={() => setActiveBlueprint(null)}
                  >
                    <span className="text-[10px] font-mono text-graphite/60 w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className={`text-sm tracking-wide transition-colors duration-300 ${
                      activeBlueprint === anno.id ? "text-muted-gold" : "text-ivory/70"
                    }`}>
                      {anno.label}
                    </span>
                    <ChevronRight className={`w-4 h-4 ml-auto transition-all duration-300 ${
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
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div 
              className="text-center mb-14"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-6">
                QUESTIONS
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal">
                Common questions
              </h2>
            </div>

            {/* FAQ accordion */}
            <div 
              className="space-y-0"
              style={{
                opacity: scrollY > 1100 ? 1 : 0,
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

      {/* ===== SECTION 5: CTA - BEGIN THE CONVERSATION ===== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[50vh]">
          {/* Left: Warm ivory */}
          <div className="bg-ivory flex items-center justify-center p-10 lg:p-16">
            <div 
              className="max-w-md"
              style={{
                opacity: scrollY > 1400 ? 1 : 0,
                transform: scrollY > 1400 ? "translateX(0)" : "translateX(-30px)",
                transition: "all 1s ease-out"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-5">
                LET'S BEGIN
              </span>
              <h2 className="text-2xl md:text-3xl font-heading text-charcoal leading-tight mb-5">
                Bring us the site. We'll bring the <em className="italic text-muted-gold">clarity</em>.
              </h2>
              <p className="text-xs text-graphite/60">
                Limited annual projects. Thoughtful work takes time.
              </p>
            </div>
          </div>

          {/* Right: Charcoal */}
          <div className="bg-charcoal flex items-center justify-center p-10 lg:p-16">
            <div 
              className="space-y-5"
              style={{
                opacity: scrollY > 1400 ? 1 : 0,
                transform: scrollY > 1400 ? "translateX(0)" : "translateX(30px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <Link 
                to="/contact"
                className="group flex items-center gap-4 bg-muted-gold text-charcoal px-7 py-3.5 text-sm tracking-wider hover:bg-muted-gold/90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Request a Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-ivory/30 text-ivory px-7 py-3.5 text-sm tracking-wider hover:bg-ivory/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Credibility line */}
        <div className="absolute bottom-6 left-0 right-0 text-center">
          <span className="text-[9px] tracking-[0.3em] text-graphite/40">
            DESIGN-FIRST. DETAIL-OBSESSED. BUILT FOR DECADES.
          </span>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Architecture;
