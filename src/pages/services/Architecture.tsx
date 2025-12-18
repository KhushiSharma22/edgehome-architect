import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, Phone, MessageCircle, Plus, Minus } from "lucide-react";
import architectureHero from "@/assets/architecture-hero.jpg";
import architectureCase1 from "@/assets/architecture-case-1.jpg";
import architectureCase2 from "@/assets/architecture-case-2.jpg";
import architectureCase3 from "@/assets/architecture-case-3.jpg";

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

  const services = [
    "New homes & villas",
    "Renovations & extensions",
    "Facade studies",
    "Layout optimization",
    "Structural coordination",
    "Landscape integration",
    "3D massing & spatial studies",
    "Municipal drawing sets"
  ];

  const processSteps = [
    { num: "01", title: "Discovery & site reading", deliverable: "Site report" },
    { num: "02", title: "Concept & massing", deliverable: "Concept deck" },
    { num: "03", title: "Plans, elevations, and light studies", deliverable: "Plan set" },
    { num: "04", title: "Technical coordination", deliverable: "Technical drawings" },
    { num: "05", title: "Detailing & documentation", deliverable: "Material palette" },
    { num: "06", title: "On-site review (optional)", deliverable: "Site visits" }
  ];

  const caseStudies = [
    {
      image: architectureCase1,
      title: "The Light House",
      location: "Gurgaon, 2024",
      type: "Private Residence",
      highlights: ["Double-height living", "North light control", "Warm material palette"]
    },
    {
      image: architectureCase2,
      title: "Courtyard Villa",
      location: "Noida, 2023",
      type: "Weekend Home",
      highlights: ["Central courtyard", "Passive cooling", "Stone facade"]
    },
    {
      image: architectureCase3,
      title: "The Sculptural Stair",
      location: "Delhi, 2024",
      type: "Renovation",
      highlights: ["Sculptural staircase", "Skylight integration", "Concrete & wood"]
    }
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

      {/* Breadcrumb */}
      <div className="fixed top-24 left-8 z-40 hidden lg:block">
        <nav className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-graphite/60">
          <Link to="/" className="hover:text-charcoal transition-colors">HOME</Link>
          <ChevronRight className="w-3 h-3" />
          <span>SERVICES</span>
          <ChevronRight className="w-3 h-3" />
          <span className="text-charcoal">ARCHITECTURE</span>
        </nav>
      </div>

      {/* ===== SECTION 1: HERO - THE BLUEPRINT MOMENT ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Paper grain texture */}
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        {/* Drafting grid */}
        <svg className="absolute inset-0 w-full h-full" style={{ opacity: isLoaded ? 0.05 : 0, transition: "opacity 2s ease-out" }}>
          <defs>
            <pattern id="draftGrid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="hsl(var(--charcoal))" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#draftGrid)" />
        </svg>

        {/* Top dark vignette */}
        <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-charcoal/10 to-transparent" />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[80vh]">
            
            {/* Left: Editorial content */}
            <div className="lg:col-span-5 lg:col-start-1 space-y-8 pt-24 lg:pt-0">
              {/* Project sheet tag */}
              <div 
                className="inline-block"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s ease-out 0.3s"
                }}
              >
                <span className="text-[9px] tracking-[0.3em] text-graphite/70 font-mono border border-graphite/20 px-4 py-2">
                  EDGEHOMES / ARCHITECTURE / EDITION 01
                </span>
              </div>

              {/* Headline */}
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-heading leading-[1.1] text-charcoal">
                  {["Architecture that", "feels calm —", "long before it", "looks beautiful."].map((line, i) => (
                    <span 
                      key={i}
                      className="block overflow-hidden"
                    >
                      <span 
                        className="inline-block"
                        style={{
                          opacity: isLoaded ? 1 : 0,
                          transform: isLoaded ? "translateY(0)" : "translateY(100%)",
                          transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${0.5 + i * 0.15}s`
                        }}
                      >
                        {line.includes("calm") ? (
                          <>Architecture that <em className="font-serif italic text-muted-gold">feels calm</em> —</>
                        ) : line}
                      </span>
                    </span>
                  ))}
                </h1>
              </div>

              {/* Subcopy */}
              <p 
                className="text-base md:text-lg text-graphite leading-relaxed max-w-md"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s ease-out 1.2s"
                }}
              >
                We design homes with restraint, clarity, and quiet confidence. Every line has a reason, every space has a story.
              </p>

              {/* CTAs */}
              <div 
                className="flex flex-wrap gap-4 pt-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s ease-out 1.4s"
                }}
              >
                <Link 
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-charcoal text-ivory px-8 py-4 text-sm tracking-wider hover:bg-charcoal/90 transition-all duration-500"
                >
                  Request a Consultation
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button 
                  onClick={() => document.getElementById('signature-work')?.scrollIntoView({ behavior: 'smooth' })}
                  className="inline-flex items-center gap-3 border border-charcoal/30 text-charcoal px-8 py-4 text-sm tracking-wider hover:bg-charcoal/5 transition-all duration-500"
                >
                  View Signature Work
                </button>
              </div>
            </div>

            {/* Right: Hero image with blueprint overlay */}
            <div className="lg:col-span-6 lg:col-start-7 relative">
              <div 
                className="relative"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0) translateX(0)" : "translateY(40px) translateX(20px)",
                  transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
                }}
              >
                {/* Scale ruler line */}
                <div className="absolute -left-8 top-0 bottom-0 flex flex-col items-center">
                  <div className="w-[1px] h-full bg-gradient-to-b from-transparent via-muted-gold/50 to-transparent" />
                  {[0, 25, 50, 75, 100].map((tick) => (
                    <div 
                      key={tick}
                      className="absolute flex items-center gap-2"
                      style={{ top: `${tick}%` }}
                    >
                      <div className="w-3 h-[1px] bg-muted-gold/50" />
                      <span className="text-[8px] font-mono text-graphite/40">{tick}</span>
                    </div>
                  ))}
                </div>

                {/* Main image container */}
                <div className="relative aspect-[3/4] lg:aspect-[4/5] overflow-hidden">
                  <img 
                    src={architectureHero}
                    alt="Modern architecture by EdgeHomes"
                    className="w-full h-full object-cover"
                    style={{
                      transform: `translateY(${scrollY * 0.05}px)`,
                      transition: "transform 0.1s ease-out"
                    }}
                  />
                  
                  {/* Blueprint overlay */}
                  <svg 
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 500"
                    style={{ opacity: 0.15 }}
                  >
                    {/* Blueprint lines that draw in */}
                    <g stroke="hsl(var(--muted-gold))" strokeWidth="0.5" fill="none">
                      <rect 
                        x="40" y="80" width="320" height="340" 
                        strokeDasharray="1320"
                        strokeDashoffset={isLoaded ? 0 : 1320}
                        style={{ transition: "stroke-dashoffset 3s ease-out 1s" }}
                      />
                      <line 
                        x1="40" y1="200" x2="360" y2="200"
                        strokeDasharray="320"
                        strokeDashoffset={isLoaded ? 0 : 320}
                        style={{ transition: "stroke-dashoffset 2s ease-out 2s" }}
                      />
                      <line 
                        x1="200" y1="80" x2="200" y2="420"
                        strokeDasharray="340"
                        strokeDashoffset={isLoaded ? 0 : 340}
                        style={{ transition: "stroke-dashoffset 2s ease-out 2.3s" }}
                      />
                      <circle 
                        cx="200" cy="250" r="60"
                        strokeDasharray="377"
                        strokeDashoffset={isLoaded ? 0 : 377}
                        style={{ transition: "stroke-dashoffset 2s ease-out 2.6s" }}
                      />
                    </g>
                  </svg>

                  {/* Soft gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ivory/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out 2s"
          }}
        >
          <span className="text-[9px] tracking-[0.3em] text-graphite/50">SCROLL</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-muted-gold to-transparent" />
        </div>
      </section>

      {/* ===== SECTION 2: THE 3 PRINCIPLES - STUDIO WALL ===== */}
      <section className="relative py-32 lg:py-48 overflow-hidden">
        {/* Split tone: ivory top fading to warm grey */}
        <div className="absolute inset-0 bg-gradient-to-b from-ivory via-ivory to-ivory-dark/30" />
        
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section label */}
          <div 
            className="mb-20"
            style={{
              opacity: scrollY > 400 ? 1 : 0,
              transform: scrollY > 400 ? "translateY(0)" : "translateY(30px)",
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

            <div className="flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-8">
              {principles.map((principle, index) => (
                <div 
                  key={index}
                  className="relative group flex-1 max-w-md"
                  onMouseEnter={() => setActivePrinciple(index)}
                  onMouseLeave={() => setActivePrinciple(null)}
                  style={{
                    opacity: scrollY > 500 ? 1 : 0,
                    transform: scrollY > 500 
                      ? `translateY(0) translateX(${activePrinciple === index ? 0 : (index - 1) * 3}px)` 
                      : "translateY(40px)",
                    transition: `all 1s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.2}s`
                  }}
                >
                  {/* Connector line to rail */}
                  <div className="hidden lg:block absolute top-0 left-8 w-[1px] h-12 bg-gradient-to-b from-muted-gold/50 to-transparent" />
                  
                  {/* Pin dot */}
                  <div className="hidden lg:block absolute -top-1 left-8 -translate-x-1/2 w-2 h-2 rounded-full bg-muted-gold/60" />

                  {/* Principle card */}
                  <div className="pt-16 lg:pt-20">
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

      {/* ===== SECTION 3: DESIGN DNA - INTERACTIVE BLUEPRINT ===== */}
      <section className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
        {/* Subtle paper texture */}
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Blueprint panel */}
            <div 
              className="relative aspect-square"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? "translateX(0)" : "translateX(-40px)",
                transition: "all 1s ease-out"
              }}
            >
              {/* Blueprint SVG */}
              <svg viewBox="0 0 400 400" className="w-full h-full">
                <defs>
                  <pattern id="blueprintGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="hsl(var(--ivory) / 0.1)" strokeWidth="0.3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#blueprintGrid)" />
                
                {/* Floor plan lines */}
                <g stroke="hsl(var(--ivory))" strokeWidth="0.5" fill="none" opacity="0.4">
                  {/* Outer walls */}
                  <rect x="60" y="60" width="280" height="280" />
                  
                  {/* Rooms */}
                  <line x1="60" y1="160" x2="200" y2="160" />
                  <line x1="200" y1="60" x2="200" y2="200" />
                  <line x1="200" y1="260" x2="340" y2="260" />
                  <line x1="260" y1="160" x2="260" y2="340" />
                  
                  {/* Courtyard */}
                  <rect x="160" y="160" width="80" height="80" strokeDasharray="4 2" />
                  
                  {/* Entry */}
                  <path d="M60 240 L40 240 L40 280 L60 280" />
                  
                  {/* Stairs */}
                  <g>
                    <line x1="280" y1="80" x2="280" y2="140" />
                    <line x1="280" y1="90" x2="320" y2="90" />
                    <line x1="280" y1="100" x2="320" y2="100" />
                    <line x1="280" y1="110" x2="320" y2="110" />
                    <line x1="280" y1="120" x2="320" y2="120" />
                    <line x1="280" y1="130" x2="320" y2="130" />
                  </g>
                </g>

                {/* Annotation highlights */}
                {blueprintAnnotations.map((anno) => (
                  <g key={anno.id}>
                    <circle 
                      cx={anno.x * 4} 
                      cy={anno.y * 4} 
                      r="20"
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
              className="space-y-8"
              style={{
                opacity: scrollY > 1000 ? 1 : 0,
                transform: scrollY > 1000 ? "translateX(0)" : "translateX(40px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-muted-gold font-mono">
                DESIGN DNA
              </span>
              
              <h2 className="text-3xl md:text-4xl font-heading text-ivory leading-tight">
                Good architecture is invisible engineering — disguised as <em className="italic text-muted-gold">ease</em>.
              </h2>

              <div className="space-y-4 pt-8">
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

      {/* ===== SECTION 4: WHAT WE DESIGN ===== */}
      <section className="relative py-32 lg:py-48 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
            {/* Left: Title */}
            <div 
              className="lg:col-span-4"
              style={{
                opacity: scrollY > 1600 ? 1 : 0,
                transform: scrollY > 1600 ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-6">
                OUR SCOPE
              </span>
              <h2 className="text-4xl md:text-5xl font-heading text-charcoal">
                We design:
              </h2>
            </div>

            {/* Right: Services list */}
            <div 
              className="lg:col-span-7 lg:col-start-6"
              style={{
                opacity: scrollY > 1600 ? 1 : 0,
                transform: scrollY > 1600 ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <li 
                    key={index}
                    className="flex items-center gap-4 py-3 border-b border-graphite/10 group hover:border-muted-gold/30 transition-colors duration-300"
                  >
                    <span className="text-[10px] font-mono text-graphite/40 w-6">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="text-lg text-charcoal group-hover:text-muted-gold transition-colors duration-300">
                      {service}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Footnote */}
              <p className="mt-8 text-xs text-graphite/60 italic">
                Every scope can be tailored. We don't force packages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 5: THE PROCESS - CINEMATIC TIMELINE ===== */}
      <section className="relative py-32 lg:py-48 bg-ivory-dark/30 overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div 
            className="text-center mb-20"
            style={{
              opacity: scrollY > 2200 ? 1 : 0,
              transform: scrollY > 2200 ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out"
            }}
          >
            <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-6">
              THE JOURNEY
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-charcoal">
              From vision to <em className="italic text-muted-gold">reality</em>
            </h2>
          </div>

          {/* Timeline */}
          <div className="relative max-w-4xl mx-auto">
            {/* Center spine */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-muted-gold/50 to-transparent -translate-x-1/2" />

            <div className="space-y-16">
              {processSteps.map((step, index) => {
                const isLeft = index % 2 === 0;
                const stepScrollThreshold = 2300 + index * 100;
                const isActive = scrollY > stepScrollThreshold;

                return (
                  <div 
                    key={index}
                    className={`relative flex items-center gap-8 ${isLeft ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                    style={{
                      opacity: isActive ? 1 : 0.3,
                      transform: isActive ? "translateY(0)" : "translateY(20px)",
                      transition: "all 0.8s ease-out"
                    }}
                  >
                    {/* Node */}
                    <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
                      <div 
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                          isActive ? "border-muted-gold bg-ivory" : "border-graphite/20 bg-ivory-dark/50"
                        }`}
                      >
                        <div className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          isActive ? "bg-muted-gold" : "bg-graphite/30"
                        }`} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className={`w-full lg:w-[45%] ${isLeft ? "lg:pr-16 lg:text-right" : "lg:pl-16 lg:text-left"} ${!isLeft && "lg:ml-auto"}`}>
                      <span className={`text-2xl font-heading transition-all duration-500 ${
                        isActive ? "text-muted-gold" : "text-graphite/30"
                      }`}>
                        {step.num}
                      </span>
                      <h3 className="text-xl font-heading text-charcoal mt-2 mb-3">
                        {step.title}
                      </h3>
                      <span className="inline-block text-[10px] tracking-wider font-mono text-graphite/60 border border-graphite/20 px-3 py-1">
                        {step.deliverable}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 6: SIGNATURE WORK ===== */}
      <section id="signature-work" className="relative py-32 lg:py-48 bg-charcoal overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section header */}
          <div 
            className="mb-20"
            style={{
              opacity: scrollY > 3000 ? 1 : 0,
              transform: scrollY > 3000 ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s ease-out"
            }}
          >
            <span className="text-[9px] tracking-[0.3em] text-muted-gold font-mono block mb-6">
              CURATED WORK
            </span>
            <h2 className="text-4xl md:text-5xl font-heading text-ivory">
              Signature projects
            </h2>
          </div>

          {/* Case studies grid */}
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                className="group"
                style={{
                  opacity: scrollY > 3100 ? 1 : 0,
                  transform: scrollY > 3100 ? "translateY(0)" : "translateY(40px)",
                  transition: `all 1s ease-out ${index * 0.15}s`
                }}
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden mb-6">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent" />
                </div>

                {/* Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-[10px] tracking-wider text-graphite/60">
                    <span>{study.location}</span>
                    <span>•</span>
                    <span>{study.type}</span>
                  </div>
                  <h3 className="text-xl font-heading text-ivory group-hover:text-muted-gold transition-colors duration-300">
                    {study.title}
                  </h3>
                  <ul className="space-y-1">
                    {study.highlights.map((highlight, i) => (
                      <li key={i} className="text-xs text-ivory/60 flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-muted-gold/60" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <button className="text-xs tracking-wider text-muted-gold hover:text-ivory transition-colors duration-300 flex items-center gap-2 mt-4">
                    View full project
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 7: FAQ ===== */}
      <section className="relative py-32 lg:py-48 bg-ivory overflow-hidden">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl mx-auto">
            {/* Section header */}
            <div 
              className="text-center mb-16"
              style={{
                opacity: scrollY > 3700 ? 1 : 0,
                transform: scrollY > 3700 ? "translateY(0)" : "translateY(30px)",
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
                opacity: scrollY > 3800 ? 1 : 0,
                transition: "opacity 1s ease-out"
              }}
            >
              {faqs.map((faq, index) => (
                <div 
                  key={index}
                  className="border-b border-graphite/10"
                >
                  <button
                    className="w-full py-6 flex items-center justify-between text-left group"
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
                    <p className="pb-6 text-sm text-graphite leading-relaxed pr-8">
                      {faq.a}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 8: CTA - BEGIN THE CONVERSATION ===== */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-2 min-h-[60vh]">
          {/* Left: Warm ivory */}
          <div className="bg-ivory flex items-center justify-center p-12 lg:p-20">
            <div 
              className="max-w-md"
              style={{
                opacity: scrollY > 4300 ? 1 : 0,
                transform: scrollY > 4300 ? "translateX(0)" : "translateX(-30px)",
                transition: "all 1s ease-out"
              }}
            >
              <span className="text-[9px] tracking-[0.3em] text-graphite/50 font-mono block mb-6">
                LET'S BEGIN
              </span>
              <h2 className="text-3xl md:text-4xl font-heading text-charcoal leading-tight mb-6">
                Bring us the site. We'll bring the <em className="italic text-muted-gold">clarity</em>.
              </h2>
              <p className="text-xs text-graphite/60 mb-8">
                Limited annual projects. Thoughtful work takes time.
              </p>
            </div>
          </div>

          {/* Right: Charcoal */}
          <div className="bg-charcoal flex items-center justify-center p-12 lg:p-20">
            <div 
              className="space-y-6"
              style={{
                opacity: scrollY > 4300 ? 1 : 0,
                transform: scrollY > 4300 ? "translateX(0)" : "translateX(30px)",
                transition: "all 1s ease-out 0.2s"
              }}
            >
              <Link 
                to="/contact"
                className="group flex items-center gap-4 bg-muted-gold text-charcoal px-8 py-4 text-sm tracking-wider hover:bg-muted-gold/90 transition-all duration-300"
              >
                <Phone className="w-4 h-4" />
                Request a Consultation
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 border border-ivory/30 text-ivory px-8 py-4 text-sm tracking-wider hover:bg-ivory/10 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Credibility line */}
        <div className="absolute bottom-8 left-0 right-0 text-center">
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