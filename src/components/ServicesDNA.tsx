import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers, Compass, Building2, Paintbrush } from "lucide-react";

// Import service background images
import architectureBg from "@/assets/service-architecture-bg.jpg";
import constructionBg from "@/assets/service-construction-bg.jpg";
import interiorBg from "@/assets/service-interior-bg.jpg";
import furnitureBg from "@/assets/service-furniture-bg.jpg";

const services = [
  {
    id: "architecture",
    icon: Compass,
    title: "Architecture",
    subtitle: "Vision to Blueprint",
    description: "Where ideas take form. We design spaces that inspire, function, and endure.",
    stat: "50+",
    statLabel: "Projects Designed",
    link: "/services/architecture",
    position: "left",
    bgImage: architectureBg
  },
  {
    id: "construction",
    icon: Building2,
    title: "Construction",
    subtitle: "Blueprint to Reality",
    description: "Every joint, every pour, every weld — measured, verified, and executed without compromise.",
    stat: "100%",
    statLabel: "Precision Built",
    link: "/services/construction",
    position: "right",
    bgImage: constructionBg
  },
  {
    id: "interior",
    icon: Paintbrush,
    title: "Interior Design",
    subtitle: "Spaces to Experiences",
    description: "Transforming empty rooms into living stories. Every detail speaks your personality.",
    stat: "200+",
    statLabel: "Interiors Delivered",
    link: "/services/interior",
    position: "left",
    bgImage: interiorBg
  },
  {
    id: "furniture",
    icon: Layers,
    title: "Custom Furniture",
    subtitle: "Details that Define",
    description: "Handcrafted pieces that bridge function and art. Made for your space, made to last.",
    stat: "500+",
    statLabel: "Pieces Crafted",
    link: "/services/furniture",
    position: "right",
    bgImage: furnitureBg
  },
];

const ServicesDNA = () => {
  const [activeService, setActiveService] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / (rect.height * 0.6)));
        setScrollProgress(progress);
        
        // Update active service based on scroll
        const serviceIndex = Math.floor(progress * services.length);
        setActiveService(Math.min(serviceIndex, services.length - 1));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-gradient-to-b from-card via-background to-card"
    >
      {/* Animated DNA Helix Line in Center - Hidden on mobile */}
      <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="dnaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              <stop offset="20%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="1" />
              <stop offset="80%" stopColor="hsl(var(--primary))" stopOpacity="0.5" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 0.5 0 Q 30 100, 0.5 200 Q -30 300, 0.5 400 Q 30 500, 0.5 600 Q -30 700, 0.5 800 Q 30 900, 0.5 1000"
            fill="none"
            stroke="url(#dnaGradient)"
            strokeWidth="2"
            className="opacity-30"
            style={{ 
              strokeDasharray: '10 5',
              animation: 'dnaFlow 3s linear infinite'
            }}
          />
        </svg>
        
        {/* Progress Line */}
        <div 
          className="absolute left-0 top-0 w-full bg-gradient-to-b from-primary via-primary to-transparent transition-all duration-300"
          style={{ height: `${scrollProgress * 100}%` }}
        />
        
        {/* Glowing Orb */}
        <div 
          className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary shadow-[0_0_20px_hsl(var(--primary)),0_0_40px_hsl(var(--primary)/0.5)] transition-all duration-300"
          style={{ top: `${scrollProgress * 85}%` }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block">
            Complete Ecosystem
          </span>
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 sm:mb-6 px-4">
            One Vision. <span className="text-primary">Four Disciplines.</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base md:text-lg px-4">
            From the first sketch to the final finish — everything under one roof, with one team, one commitment.
          </p>
        </div>

        {/* Services DNA Layout */}
        <div className="relative max-w-5xl mx-auto">
          {/* Mobile Layout - Stacked Cards */}
          <div className="lg:hidden space-y-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService >= index;
              
              return (
                <Link
                  key={service.id}
                  to={service.link}
                  className={`block relative rounded-2xl border transition-all duration-500 overflow-hidden ${
                    isActive 
                      ? 'border-primary/30 bg-card shadow-[0_0_40px_hsl(var(--primary)/0.1)]' 
                      : 'border-border/30 bg-card/50'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(40px)',
                    transition: `all 0.8s ease-out ${index * 0.15}s`
                  }}
                >
                  {/* Step number badge */}
                  <div className={`absolute top-4 right-4 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                    isActive 
                      ? 'border-primary bg-primary/20' 
                      : 'border-border bg-background'
                  }`}>
                    <span className="text-xs font-mono text-primary font-bold">0{index + 1}</span>
                  </div>
                  
                  <div className="p-5">
                      <div className="flex items-start gap-4 mb-4">
                      {/* Icon with Background Image */}
                      <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 group/icon">
                        {/* Background Image */}
                        <img 
                          src={service.bgImage} 
                          alt=""
                          className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                            isActive ? 'scale-110 brightness-75' : 'scale-100 brightness-50'
                          } group-hover/icon:scale-125`}
                        />
                        {/* Gradient Overlay */}
                        <div className={`absolute inset-0 transition-all duration-500 ${
                          isActive 
                            ? 'bg-gradient-to-br from-primary/40 via-primary/20 to-transparent' 
                            : 'bg-gradient-to-br from-background/60 to-background/30'
                        }`} />
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <Icon className={`w-7 h-7 transition-all duration-500 drop-shadow-lg ${
                            isActive ? 'text-white scale-110' : 'text-white/80'
                          }`} />
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-xl transition-all duration-500 ${
                          isActive ? 'shadow-[inset_0_0_20px_hsl(var(--primary)/0.4)]' : ''
                        }`} />
                      </div>
                      
                      <div className="flex-1">
                        <span className="text-[10px] text-primary/70 uppercase tracking-widest block mb-1">
                          {service.subtitle}
                        </span>
                        <h3 className="text-lg font-heading text-foreground">
                          {service.title}
                        </h3>
                      </div>
                      
                      <div className="text-right">
                        <div className={`text-2xl font-heading transition-colors duration-300 ${
                          isActive ? 'text-primary' : 'text-muted-foreground'
                        }`}>
                          {service.stat}
                        </div>
                        <div className="text-[9px] text-muted-foreground uppercase tracking-wider">
                          {service.statLabel}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {service.description}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm text-primary">
                      <span className="font-medium">Explore</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 ${
                    isActive ? 'w-full' : 'w-0'
                  }`} />
                </Link>
              );
            })}
          </div>
          
          {/* Desktop Layout - DNA Helix */}
          <div className="hidden lg:block">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeService >= index;
              const isLeft = service.position === "left";
              
              return (
                <div
                  key={service.id}
                  className={`relative flex items-center mb-24 last:mb-0 ${isLeft ? 'justify-start' : 'justify-end'}`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible 
                      ? 'translateY(0)' 
                      : `translateY(40px)`,
                    transition: `all 0.8s ease-out ${index * 0.15}s`
                  }}
                >
                  {/* Connection Node */}
                  <div 
                    className={`absolute left-1/2 -translate-x-1/2 z-20 transition-all duration-500 ${
                      isActive ? 'scale-100' : 'scale-75 opacity-50'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? 'border-primary bg-primary/20 shadow-[0_0_30px_hsl(var(--primary)/0.4)]' 
                        : 'border-border bg-background'
                    }`}>
                      <span className="text-xs font-mono text-primary font-bold">0{index + 1}</span>
                    </div>
                  </div>

                  {/* Service Card */}
                  <div 
                    className={`relative w-[calc(50%-60px)] group ${isLeft ? 'pr-8' : 'pl-8'}`}
                  >
                    <Link 
                      to={service.link}
                      className={`block relative overflow-hidden rounded-2xl border transition-all duration-500 ${
                        isActive 
                          ? 'border-primary/30 bg-card shadow-[0_0_40px_hsl(var(--primary)/0.1)]' 
                          : 'border-border/30 bg-card/50'
                      }`}
                    >
                      {/* Gradient Border Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5 transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-0'
                      }`} />
                      
                      {/* Content */}
                      <div className="relative p-8">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-6">
                          {/* Icon with Background Image */}
                          <div className="relative w-20 h-20 rounded-2xl overflow-hidden group/icon">
                            {/* Background Image */}
                            <img 
                              src={service.bgImage} 
                              alt=""
                              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                                isActive ? 'scale-110 brightness-75' : 'scale-100 brightness-50'
                              } group-hover:scale-125`}
                            />
                            {/* Gradient Overlay */}
                            <div className={`absolute inset-0 transition-all duration-500 ${
                              isActive 
                                ? 'bg-gradient-to-br from-primary/50 via-primary/20 to-transparent' 
                                : 'bg-gradient-to-br from-background/70 to-background/40'
                            }`} />
                            {/* Icon */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <Icon className={`w-9 h-9 transition-all duration-500 drop-shadow-lg ${
                                isActive ? 'text-white scale-110' : 'text-white/80'
                              }`} />
                            </div>
                            {/* Animated Border Glow */}
                            <div className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                              isActive 
                                ? 'shadow-[inset_0_0_30px_hsl(var(--primary)/0.5),0_0_20px_hsl(var(--primary)/0.3)]' 
                                : ''
                            }`} />
                            {/* Corner Accent */}
                            <div className={`absolute -bottom-1 -right-1 w-6 h-6 transition-all duration-500 ${
                              isActive ? 'opacity-100' : 'opacity-0'
                            }`}>
                              <div className="w-full h-full border-b-2 border-r-2 border-primary rounded-br-xl" />
                            </div>
                          </div>
                          
                          <div className="text-right">
                            <div className={`text-3xl font-heading transition-colors duration-300 ${
                              isActive ? 'text-primary' : 'text-muted-foreground'
                            }`}>
                              {service.stat}
                            </div>
                            <div className="text-xs text-muted-foreground uppercase tracking-wider">
                              {service.statLabel}
                            </div>
                          </div>
                        </div>
                        
                        {/* Title & Description */}
                        <div className="mb-6">
                          <span className="text-xs text-primary/70 uppercase tracking-widest block mb-2">
                            {service.subtitle}
                          </span>
                          <h3 className="text-2xl font-heading text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {service.description}
                          </p>
                        </div>
                        
                        {/* CTA */}
                        <div className="flex items-center gap-2 text-sm text-primary group-hover:gap-4 transition-all duration-300">
                          <span className="font-medium">Explore</span>
                          <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
                        </div>
                      </div>
                      
                      {/* Hover Line */}
                      <div className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-500 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} />
                    </Link>
                    
                    {/* Connecting Arm */}
                    <div 
                      className={`absolute top-1/2 -translate-y-1/2 h-px transition-all duration-500 ${
                        isLeft ? 'right-0' : 'left-0'
                      } ${isActive ? 'bg-primary w-8' : 'bg-border w-8'}`}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-12 sm:mt-16 md:mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 sm:gap-4 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-wider hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>

      {/* CSS Animation for DNA Flow */}
      <style>{`
        @keyframes dnaFlow {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: 30; }
        }
      `}</style>
    </section>
  );
};

export default ServicesDNA;
