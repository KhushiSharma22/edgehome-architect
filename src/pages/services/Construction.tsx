import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, MessageCircle, Check, ChevronDown } from "lucide-react";
import constructionTexture from "@/assets/construction-hero-texture.jpg";

const Construction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [activePhase, setActivePhase] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const buildSystemRef = useRef<HTMLDivElement>(null);
  
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    location: "",
    projectType: "",
    timeline: "",
    budgetLevel: 1,
    message: ""
  });

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate active phase based on scroll
      if (buildSystemRef.current) {
        const rect = buildSystemRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        
        if (sectionTop < window.innerHeight * 0.5) {
          const progress = Math.min(1, Math.max(0, (window.innerHeight * 0.5 - sectionTop) / (sectionHeight * 0.7)));
          setActivePhase(Math.floor(progress * 4));
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const assuranceMetrics = [
    { 
      label: "Planning Accuracy", 
      tooltip: "Daily checklists. Weekly audits.",
      value: 96
    },
    { 
      label: "Material Integrity", 
      tooltip: "Vendor traceability. Quality certifications.",
      value: 98
    },
    { 
      label: "On-Site Control", 
      tooltip: "Stage-wise signoffs. Zero deviations.",
      value: 94
    }
  ];

  const buildPhases = [
    {
      title: "Site & Structure",
      description: "Ground truth checks. Reinforcement done right.",
      detail: "±2mm foundation tolerance"
    },
    {
      title: "Shell & Services",
      description: "MEP coordination without clashes.",
      detail: "BIM-verified routing"
    },
    {
      title: "Finishes & Detailing",
      description: "Edges align. Materials meet cleanly.",
      detail: "±1mm finish tolerance"
    },
    {
      title: "Handover & Aftercare",
      description: "Snag-free delivery. Post-handover support.",
      detail: "12-month warranty"
    }
  ];

  const budgetLabels = ["Essential Build", "Signature Build", "Bespoke Build"];
  const budgetDescriptions = [
    "Focus: speed + efficiency.",
    "Focus: craft + longevity.",
    "Focus: rare materials + detailing."
  ];

  const getCompletionStatus = () => {
    const checks = {
      timeline: formData.timeline !== "",
      location: formData.location !== "",
      projectType: formData.projectType !== ""
    };
    return checks;
  };

  const completionStatus = getCompletionStatus();

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-[#F4EFE8] overflow-x-hidden">
      <Header />
      
      {/* Blueprint Grid Overlay - Global */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(198, 164, 106, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(198, 164, 106, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* Grain Texture Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-[1]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          opacity: 0.04
        }}
      />

      {/* SECTION 1: HERO - "Built with certainty" */}
      <section className="relative min-h-screen flex items-center">
        {/* Background Texture */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${constructionTexture})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.3)',
            transform: `translateY(${scrollY * 0.1}px)`
          }}
        />
        
        {/* Gradient Overlay with scroll-reactive light */}
        <div 
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at ${30 + (scrollY * 0.02)}% ${40 + (scrollY * 0.01)}%, rgba(198, 164, 106, 0.08) 0%, transparent 50%),
              linear-gradient(to bottom, rgba(11, 11, 11, 0.5) 0%, rgba(11, 11, 11, 0.9) 100%)
            `
          }}
        />

        {/* Heavy Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,#0B0B0B_80%)]" />

        {/* Vertical Brass Measuring Line */}
        <div 
          className="absolute right-[15%] top-0 bottom-0 w-px hidden lg:block"
          style={{
            background: `linear-gradient(to bottom, transparent, rgba(198, 164, 106, 0.3) 20%, rgba(198, 164, 106, 0.3) 80%, transparent)`,
            transform: `translateY(${scrollY * 0.05}px)`
          }}
        >
          {/* Tick marks */}
          {[...Array(10)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-px bg-[#C6A46A]/40"
              style={{ top: `${10 + i * 8}%`, right: 0 }}
            />
          ))}
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <span 
                className="inline-block text-[10px] tracking-[0.4em] uppercase text-[#C6A46A] font-mono"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                Construction
              </span>

              <h1 
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95]"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                  transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s'
                }}
              >
                Built with
                <br />
                <span className="text-[#C6A46A]">certainty.</span>
              </h1>

              <p 
                className="text-base md:text-lg text-[#A7A7A7] max-w-md leading-relaxed"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.8s'
                }}
              >
                From foundation to finish, we obsess over tolerance, timelines, and workmanship — so your space lasts decades.
              </p>

              <div 
                className="flex flex-wrap gap-4 pt-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s'
                }}
              >
                <button className="px-8 py-4 rounded-full bg-[#C6A46A] text-[#0B0B0B] font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(198,164,106,0.3)] transition-all duration-500">
                  Request a Build Consultation
                </button>
                <button className="px-8 py-4 rounded-full border border-[#C6A46A]/40 text-[#C6A46A] font-medium text-sm tracking-wide hover:bg-[#C6A46A]/10 transition-all duration-500 flex items-center gap-2">
                  See Our Process
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right: Build Assurance Index */}
            <div 
              className="hidden lg:block"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateX(0)' : 'translateX(40px)',
                transition: 'all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.2s'
              }}
            >
              <div className="relative pl-12">
                {/* Vertical Track */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#1A1A1A]">
                  <div 
                    className="absolute top-0 left-0 w-full bg-gradient-to-b from-[#C6A46A] to-[#C6A46A]/30"
                    style={{
                      height: `${Math.min(100, 30 + scrollY * 0.1)}%`,
                      transition: 'height 0.3s ease-out',
                      boxShadow: '0 0 20px rgba(198, 164, 106, 0.2)'
                    }}
                  />
                </div>

                <div className="space-y-12">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[#A7A7A7] font-mono">
                    Build Assurance Index
                  </span>

                  {assuranceMetrics.map((metric, index) => (
                    <div 
                      key={index}
                      className="group relative"
                      onMouseEnter={() => setHoveredIndex(index)}
                      onMouseLeave={() => setHoveredIndex(null)}
                    >
                      {/* Marker dot */}
                      <div 
                        className="absolute -left-12 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 border-[#C6A46A] transition-all duration-500"
                        style={{
                          background: hoveredIndex === index ? '#C6A46A' : 'transparent',
                          boxShadow: hoveredIndex === index ? '0 0 15px rgba(198, 164, 106, 0.5)' : 'none'
                        }}
                      />

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-[#F4EFE8] font-medium">{metric.label}</span>
                          <span className="text-xs font-mono text-[#C6A46A]">{metric.value}%</span>
                        </div>

                        {/* Gauge bar */}
                        <div className="h-1 bg-[#1A1A1A] rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-[#C6A46A] to-[#C6A46A]/60 rounded-full transition-all duration-1000"
                            style={{
                              width: isLoaded ? `${metric.value}%` : '0%',
                              transitionDelay: `${1.5 + index * 0.2}s`
                            }}
                          />
                        </div>

                        {/* Tooltip */}
                        <div 
                          className="overflow-hidden transition-all duration-500"
                          style={{
                            maxHeight: hoveredIndex === index ? '40px' : '0',
                            opacity: hoveredIndex === index ? 1 : 0
                          }}
                        >
                          <p className="text-[11px] text-[#A7A7A7] font-mono tracking-wide">
                            {metric.tooltip}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-pulse">
          <span className="text-[9px] tracking-[0.3em] uppercase text-[#A7A7A7]">Scroll</span>
          <ChevronDown className="w-4 h-4 text-[#C6A46A]" />
        </div>
      </section>

      {/* SECTION 2: THE BUILD SYSTEM */}
      <section 
        ref={buildSystemRef}
        className="relative py-32 md:py-48 min-h-screen"
      >
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-24 md:mb-32">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C6A46A] font-mono">
              The Build System
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Construction as
              <br />
              <span className="text-[#A7A7A7]">precision assembly.</span>
            </h2>
          </div>

          {/* Blueprint Timeline */}
          <div className="grid lg:grid-cols-[120px_1fr] gap-8 lg:gap-16">
            {/* Left: Vertical Blueprint Line */}
            <div className="hidden lg:block relative">
              <div className="sticky top-1/3">
                {/* Background track */}
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-[400px] bg-[#1A1A1A]" />
                
                {/* Animated drawing line */}
                <div 
                  className="absolute left-1/2 -translate-x-1/2 top-0 w-px bg-[#C6A46A] transition-all duration-700"
                  style={{
                    height: `${Math.min(400, (activePhase + 1) * 100)}px`,
                    boxShadow: '0 0 10px rgba(198, 164, 106, 0.3)'
                  }}
                />

                {/* Phase markers */}
                {buildPhases.map((_, index) => (
                  <div 
                    key={index}
                    className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 transition-all duration-500"
                    style={{
                      top: `${index * 100}px`,
                      borderColor: activePhase >= index ? '#C6A46A' : '#1A1A1A',
                      background: activePhase >= index ? '#C6A46A' : 'transparent',
                      boxShadow: activePhase >= index ? '0 0 20px rgba(198, 164, 106, 0.4)' : 'none'
                    }}
                  >
                    <span 
                      className="absolute left-6 top-1/2 -translate-y-1/2 text-[10px] font-mono text-[#A7A7A7] whitespace-nowrap"
                    >
                      0{index + 1}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Phase Cards */}
            <div className="space-y-8">
              {buildPhases.map((phase, index) => (
                <div
                  key={index}
                  className="group relative p-8 md:p-12 border transition-all duration-700"
                  style={{
                    borderColor: activePhase >= index ? 'rgba(198, 164, 106, 0.3)' : 'rgba(26, 26, 26, 1)',
                    background: activePhase >= index ? 'rgba(26, 26, 26, 0.5)' : 'transparent',
                    opacity: activePhase >= index ? 1 : 0.4,
                    transform: activePhase >= index ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {/* Phase number */}
                  <span 
                    className="absolute top-4 right-4 text-6xl md:text-8xl font-heading font-bold text-[#1A1A1A] select-none transition-all duration-500"
                    style={{
                      opacity: activePhase >= index ? 0.5 : 0.2
                    }}
                  >
                    0{index + 1}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-[#C6A46A] transition-colors duration-500">
                      {phase.title}
                    </h3>
                    <p className="text-[#A7A7A7] text-base md:text-lg max-w-md">
                      {phase.description}
                    </p>

                    {/* Technical detail overlay */}
                    <div 
                      className="mt-6 overflow-hidden transition-all duration-500"
                      style={{
                        maxHeight: activePhase >= index ? '40px' : '0',
                        opacity: activePhase >= index ? 1 : 0
                      }}
                    >
                      <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#C6A46A]/10 border border-[#C6A46A]/20 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                        <span className="text-[11px] font-mono text-[#C6A46A] tracking-wide">
                          {phase.detail}
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* Gold edge highlight */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-px transition-all duration-700"
                    style={{
                      background: activePhase >= index 
                        ? 'linear-gradient(to bottom, transparent, #C6A46A, transparent)'
                        : 'transparent'
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: REQUEST A BUILD */}
      <section className="relative py-32 md:py-48 bg-gradient-to-b from-[#0B0B0B] to-[#0F0F0F]">
        <div className="container mx-auto px-6 lg:px-12">
          {/* Section Header */}
          <div className="mb-16 md:mb-24 text-center">
            <span className="text-[10px] tracking-[0.4em] uppercase text-[#C6A46A] font-mono">
              Start Your Project
            </span>
            <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-heading font-bold">
              Request a Build
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Project Brief Console */}
            <div className="p-8 md:p-12 bg-[#1A1A1A]/50 border border-[#1A1A1A]">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#A7A7A7] font-mono mb-8 block">
                Project Brief Console
              </span>

              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#F4EFE8] placeholder:text-[#4A4A4A] focus:border-[#C6A46A] outline-none transition-colors duration-300"
                    placeholder="Your name"
                  />
                </div>

                {/* Contact */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">Phone / Email</label>
                  <input
                    type="text"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#F4EFE8] placeholder:text-[#4A4A4A] focus:border-[#C6A46A] outline-none transition-colors duration-300"
                    placeholder="Contact details"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">City / Site Location</label>
                  <input
                    type="text"
                    value={formData.location}
                    onChange={(e) => setFormData({...formData, location: e.target.value})}
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#F4EFE8] placeholder:text-[#4A4A4A] focus:border-[#C6A46A] outline-none transition-colors duration-300"
                    placeholder="Project location"
                  />
                </div>

                {/* Project Type */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">Project Type</label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#F4EFE8] focus:border-[#C6A46A] outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select type</option>
                    <option value="residential" className="bg-[#1A1A1A]">Residential</option>
                    <option value="commercial" className="bg-[#1A1A1A]">Commercial</option>
                    <option value="renovation" className="bg-[#1A1A1A]">Renovation</option>
                    <option value="other" className="bg-[#1A1A1A]">Other</option>
                  </select>
                </div>

                {/* Timeline */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">Timeline Preference</label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({...formData, timeline: e.target.value})}
                    className="w-full bg-transparent border-b border-[#2A2A2A] py-3 text-[#F4EFE8] focus:border-[#C6A46A] outline-none transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-[#1A1A1A]">Select timeline</option>
                    <option value="1-3" className="bg-[#1A1A1A]">1–3 months</option>
                    <option value="3-6" className="bg-[#1A1A1A]">3–6 months</option>
                    <option value="6+" className="bg-[#1A1A1A]">6+ months</option>
                  </select>
                </div>

                {/* Budget Comfort Slider */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-4 block">Budget Comfort Zone</label>
                  <div className="space-y-4">
                    <input
                      type="range"
                      min="0"
                      max="2"
                      value={formData.budgetLevel}
                      onChange={(e) => setFormData({...formData, budgetLevel: parseInt(e.target.value)})}
                      className="w-full h-1 bg-[#2A2A2A] rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#C6A46A] [&::-webkit-slider-thumb]:shadow-[0_0_10px_rgba(198,164,106,0.5)]"
                    />
                    <div className="flex justify-between">
                      {budgetLabels.map((label, i) => (
                        <span 
                          key={label}
                          className={`text-[10px] font-mono tracking-wide transition-colors duration-300 ${
                            formData.budgetLevel === i ? 'text-[#C6A46A]' : 'text-[#4A4A4A]'
                          }`}
                        >
                          {label}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="text-xs text-[#A7A7A7] tracking-wide mb-2 block">What are you building?</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    rows={4}
                    className="w-full bg-transparent border border-[#2A2A2A] p-4 text-[#F4EFE8] placeholder:text-[#4A4A4A] focus:border-[#C6A46A] outline-none transition-colors duration-300 resize-none"
                    placeholder="Describe your project..."
                  />
                </div>

                <button className="w-full mt-4 px-8 py-4 rounded-full bg-[#C6A46A] text-[#0B0B0B] font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(198,164,106,0.3)] transition-all duration-500">
                  Submit Project Brief
                </button>
              </div>
            </div>

            {/* Right: Build Readiness Panel */}
            <div className="p-8 md:p-12 border border-[#C6A46A]/20 bg-gradient-to-br from-[#1A1A1A]/30 to-transparent">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#C6A46A] font-mono mb-8 block">
                Build Readiness Panel
              </span>

              <div className="space-y-8">
                {/* Checklist */}
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      completionStatus.timeline ? 'border-[#C6A46A] bg-[#C6A46A]/20' : 'border-[#2A2A2A]'
                    }`}>
                      {completionStatus.timeline && <Check className="w-3 h-3 text-[#C6A46A]" />}
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${
                      completionStatus.timeline ? 'text-[#F4EFE8]' : 'text-[#4A4A4A]'
                    }`}>
                      Timeline clarity {completionStatus.timeline && '✓'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      completionStatus.location ? 'border-[#C6A46A] bg-[#C6A46A]/20' : 'border-[#2A2A2A]'
                    }`}>
                      {completionStatus.location && <Check className="w-3 h-3 text-[#C6A46A]" />}
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${
                      completionStatus.location ? 'text-[#F4EFE8]' : 'text-[#4A4A4A]'
                    }`}>
                      Site location {completionStatus.location && '✓'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      completionStatus.projectType ? 'border-[#C6A46A] bg-[#C6A46A]/20' : 'border-[#2A2A2A]'
                    }`}>
                      {completionStatus.projectType && <Check className="w-3 h-3 text-[#C6A46A]" />}
                    </div>
                    <span className={`text-sm transition-colors duration-300 ${
                      completionStatus.projectType ? 'text-[#F4EFE8]' : 'text-[#4A4A4A]'
                    }`}>
                      Project type {completionStatus.projectType && '✓'}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-[#C6A46A]/30 via-[#C6A46A]/10 to-transparent" />

                {/* Budget Focus Statement */}
                <div className="p-6 bg-[#0B0B0B]/50 border border-[#1A1A1A]">
                  <span className="text-[10px] tracking-[0.2em] uppercase text-[#A7A7A7] font-mono block mb-3">
                    Selected Focus
                  </span>
                  <p className="text-lg text-[#F4EFE8] font-heading">
                    {budgetDescriptions[formData.budgetLevel]}
                  </p>
                </div>

                {/* Next Step */}
                <div className="pt-4">
                  <p className="text-sm text-[#A7A7A7] mb-6">
                    <span className="text-[#C6A46A]">Next step:</span> a 15-min discovery call + site requirements checklist.
                  </p>

                  {/* Quick Contact Buttons */}
                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 rounded-full border border-[#C6A46A]/30 text-[#C6A46A] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C6A46A]/10 transition-all duration-300">
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp
                    </button>
                    <button className="flex-1 px-6 py-3 rounded-full border border-[#C6A46A]/30 text-[#C6A46A] text-sm font-medium flex items-center justify-center gap-2 hover:bg-[#C6A46A]/10 transition-all duration-300">
                      <Phone className="w-4 h-4" />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
