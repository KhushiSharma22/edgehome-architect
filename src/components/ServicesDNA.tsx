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
    bgImage: architectureBg,
    accent: "from-cyan-500/20 to-emerald-500/20"
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
    bgImage: constructionBg,
    accent: "from-orange-500/20 to-amber-500/20"
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
    bgImage: interiorBg,
    accent: "from-rose-500/20 to-pink-500/20"
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
    bgImage: furnitureBg,
    accent: "from-amber-500/20 to-yellow-500/20"
  },
];

const ServicesDNA = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [scrollY, setScrollY] = useState(0);
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
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative overflow-hidden bg-background"
    >
      {/* Section Header */}
      <div className="container mx-auto px-4 sm:px-6 pt-16 sm:pt-24 md:pt-32 pb-12 sm:pb-16">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
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
      </div>

      {/* Full-Width Service Sections */}
      <div className="relative">
        {services.map((service, index) => {
          const Icon = service.icon;
          const isHovered = hoveredIndex === index;
          const isEven = index % 2 === 0;
          
          return (
            <Link
              key={service.id}
              to={service.link}
              className="block relative group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Full-Width Background Image Container */}
              <div 
                className={`relative w-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] overflow-hidden transition-all duration-1000 ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ 
                  transitionDelay: `${index * 150}ms`,
                }}
              >
                {/* Background Image with Parallax */}
                <div 
                  className="absolute inset-0 w-full h-[120%] -top-[10%]"
                  style={{
                    transform: `translateY(${scrollY * 0.05}px)`,
                  }}
                >
                  <img
                    src={service.bgImage}
                    alt={service.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      isHovered ? 'scale-110 brightness-50' : 'scale-100 brightness-[0.3]'
                    }`}
                  />
                </div>

                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} ${service.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
                
                {/* Animated Grain Texture */}
                <div className="absolute inset-0 grain opacity-20" />

                {/* Content Container */}
                <div className="relative h-full min-h-[50vh] sm:min-h-[60vh] md:min-h-[70vh] flex items-center">
                  <div className="container mx-auto px-4 sm:px-6">
                    <div className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}>
                      
                      {/* Text Content Side */}
                      <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>
                        {/* Step Number */}
                        <div className={`flex items-center gap-4 mb-6 transition-all duration-700 ${
                          isHovered ? 'translate-x-2' : ''
                        }`}>
                          <div className={`relative w-16 h-16 rounded-2xl border-2 flex items-center justify-center overflow-hidden transition-all duration-500 ${
                            isHovered 
                              ? 'border-primary bg-primary/20 shadow-[0_0_40px_hsl(var(--primary)/0.4)]' 
                              : 'border-border/50 bg-background/50 backdrop-blur-sm'
                          }`}>
                            <span className="text-2xl font-heading text-primary font-bold">0{index + 1}</span>
                          </div>
                          
                          {/* Connecting Line */}
                          <div className={`h-px flex-1 max-w-24 bg-gradient-to-r from-primary to-transparent transition-all duration-700 origin-left ${
                            isHovered ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                          }`} />
                        </div>

                        {/* Stat */}
                        <div className={`mb-4 transition-all duration-500 ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'}`}>
                          <div className="flex items-baseline gap-2">
                            <span className={`text-4xl sm:text-5xl md:text-6xl font-heading transition-colors duration-500 ${
                              isHovered ? 'text-primary' : 'text-foreground'
                            }`}>
                              {service.stat}
                            </span>
                            <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-wider">
                              {service.statLabel}
                            </span>
                          </div>
                        </div>

                        {/* Subtitle */}
                        <span className={`text-xs sm:text-sm text-primary/80 uppercase tracking-[0.3em] block mb-2 transition-all duration-500 ${
                          isHovered ? 'tracking-[0.4em]' : ''
                        }`}>
                          {service.subtitle}
                        </span>

                        {/* Title */}
                        <h3 className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-500 ${
                          isHovered ? 'text-white' : ''
                        }`}>
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className={`text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md mb-6 transition-all duration-500 ${
                          isHovered ? 'text-white/80' : ''
                        }`}>
                          {service.description}
                        </p>

                        {/* CTA */}
                        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-500 ${
                          isHovered 
                            ? 'border-primary bg-primary/20 gap-5' 
                            : 'border-border/50 bg-background/30 backdrop-blur-sm'
                        }`}>
                          <span className={`text-sm font-medium transition-colors duration-300 ${
                            isHovered ? 'text-primary' : 'text-foreground'
                          }`}>
                            Explore {service.title}
                          </span>
                          <ArrowUpRight className={`w-4 h-4 transition-all duration-500 ${
                            isHovered ? 'rotate-45 text-primary' : 'text-muted-foreground'
                          }`} />
                        </div>
                      </div>

                      {/* Icon Side - Large Floating Icon */}
                      <div className={`hidden md:flex w-1/2 items-center ${isEven ? 'justify-end' : 'justify-start'}`}>
                        <div className={`relative transition-all duration-700 ${
                          isHovered ? 'scale-110' : 'scale-100'
                        }`}>
                          {/* Glowing Background */}
                          <div className={`absolute inset-0 rounded-full blur-3xl transition-all duration-700 ${
                            isHovered ? 'bg-primary/30 scale-150' : 'bg-primary/10 scale-100'
                          }`} />
                          
                          {/* Icon Container */}
                          <div className={`relative w-32 h-32 lg:w-40 lg:h-40 rounded-3xl border-2 flex items-center justify-center backdrop-blur-sm transition-all duration-500 ${
                            isHovered 
                              ? 'border-primary/50 bg-primary/10 shadow-[0_0_60px_hsl(var(--primary)/0.3)]' 
                              : 'border-border/30 bg-background/20'
                          }`}>
                            <Icon className={`w-16 h-16 lg:w-20 lg:h-20 transition-all duration-500 ${
                              isHovered ? 'text-primary scale-110' : 'text-muted-foreground'
                            }`} />
                          </div>

                          {/* Orbiting Dots */}
                          <div className={`absolute -top-4 -right-4 w-3 h-3 rounded-full bg-primary transition-all duration-500 ${
                            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`} />
                          <div className={`absolute -bottom-2 -left-6 w-2 h-2 rounded-full bg-primary/70 transition-all duration-700 ${
                            isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
                          }`} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Gradient Line */}
                <div className={`absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent transition-opacity duration-500 ${
                  isHovered ? 'opacity-100' : 'opacity-30'
                }`} />
              </div>
            </Link>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <div className={`text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-3 sm:gap-4 bg-primary text-primary-foreground px-6 sm:px-8 py-3 sm:py-4 rounded-full text-xs sm:text-sm font-medium tracking-wider hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
          >
            Start Your Project
            <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesDNA;