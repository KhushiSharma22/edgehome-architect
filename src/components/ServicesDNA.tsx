import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Layers, Compass, Building2, Paintbrush } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Import service background images
import architectureBg from "@/assets/service-architecture-bg.jpg";
import constructionBg from "@/assets/service-construction-bg.jpg";
import interiorBg from "@/assets/service-interior-bg.jpg";
import furnitureBg from "@/assets/service-furniture-bg.jpg";

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  stat: string;
  statLabel: string;
  link: string;
  bgImage: string;
}

const services: Service[] = [
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
  },
];

const ServicesDNA = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

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

  // Subtle mouse tracking for premium feel
  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <section 
      ref={sectionRef}
      className="relative py-20 sm:py-28 md:py-36 overflow-hidden bg-background"
    >
      {/* Ambient Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Premium Section Header */}
        <div className={`max-w-4xl mx-auto text-center mb-16 sm:mb-20 md:mb-28 transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
        }`}>
          {/* Decorative Element */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/60" />
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/60" />
          </div>

          <span className="inline-block text-primary text-[10px] sm:text-xs tracking-[0.4em] uppercase mb-6 font-medium">
            Complete Ecosystem
          </span>
          
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6 leading-[1.1]">
            One Vision.
            <br />
            <span className="text-shimmer">Four Disciplines.</span>
          </h2>
          
          <p className="text-muted-foreground max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed">
            From the first sketch to the final finish — everything under one roof, 
            with one team, one commitment.
          </p>
        </div>

        {/* Services Grid - Editorial Magazine Style */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeIndex === index;
            const isEven = index % 2 === 0;
            
            return (
              <Link
                key={service.id}
                to={service.link}
                className={`group relative block transition-all duration-700 ease-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ 
                  transitionDelay: `${200 + index * 100}ms`,
                }}
                onMouseEnter={() => setActiveIndex(index)}
                onMouseMove={(e) => handleMouseMove(e, index)}
              >
                <div
                  ref={el => cardsRef.current[index] = el}
                  className={`relative overflow-hidden rounded-2xl sm:rounded-3xl transition-all duration-700 ease-out ${
                    isActive 
                      ? 'shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)]' 
                      : 'shadow-xl'
                  }`}
                  style={{
                    transform: isActive 
                      ? `perspective(1000px) rotateX(${(mousePosition.y - 0.5) * -3}deg) rotateY(${(mousePosition.x - 0.5) * 3}deg) scale(1.02)` 
                      : 'perspective(1000px) rotateX(0) rotateY(0) scale(1)',
                  }}
                >
                  {/* Background Image Container */}
                  <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                    {/* Image with Premium Animation */}
                    <div className={`absolute inset-0 transition-all duration-1000 ease-out ${
                      isActive ? 'scale-110' : 'scale-100'
                    }`}>
                      <img
                        src={service.bgImage}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Layered Gradients for Depth */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 via-transparent to-primary/20 transition-opacity duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`} />
                    
                    {/* Subtle Vignette */}
                    <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)]" />

                    {/* Step Number - Top Right */}
                    <div className={`absolute top-6 right-6 transition-all duration-500 ${
                      isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-95'
                    }`}>
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl border backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'border-primary/50 bg-primary/20' 
                          : 'border-white/20 bg-white/5'
                      }`}>
                        <span className="text-xl sm:text-2xl font-heading text-white font-light">
                          0{index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Icon - Elegant Positioning */}
                    <div className={`absolute top-6 left-6 transition-all duration-700 ease-out ${
                      isActive ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-70'
                    }`}>
                      <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl backdrop-blur-md flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? 'bg-primary/30 shadow-lg shadow-primary/20' 
                          : 'bg-white/10'
                      }`}>
                        <Icon className={`w-6 h-6 sm:w-7 sm:h-7 transition-all duration-500 ${
                          isActive ? 'text-white' : 'text-white/70'
                        }`} />
                      </div>
                    </div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                      {/* Stat - Animated Reveal */}
                      <div className={`flex items-baseline gap-2 mb-3 transition-all duration-500 ${
                        isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                      }`}>
                        <span className="text-3xl sm:text-4xl md:text-5xl font-heading text-primary">
                          {service.stat}
                        </span>
                        <span className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                          {service.statLabel}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <div className={`overflow-hidden mb-2 transition-all duration-500 ${
                        isActive ? 'max-h-10 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <span className="text-[10px] sm:text-xs text-primary/80 uppercase tracking-[0.3em]">
                          {service.subtitle}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className={`text-2xl sm:text-3xl md:text-4xl font-heading text-white mb-3 transition-all duration-500 ${
                        isActive ? 'translate-x-0' : 'translate-x-0'
                      }`}>
                        {service.title}
                      </h3>

                      {/* Description - Reveal on Hover */}
                      <div className={`overflow-hidden transition-all duration-700 ease-out ${
                        isActive ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm sm:text-base text-white/70 leading-relaxed mb-4 max-w-md">
                          {service.description}
                        </p>
                      </div>

                      {/* CTA Line */}
                      <div className={`flex items-center gap-3 transition-all duration-500 ${
                        isActive ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                      }`}>
                        <div className={`h-px bg-primary transition-all duration-700 ease-out ${
                          isActive ? 'w-12' : 'w-0'
                        }`} />
                        <span className="text-sm text-white/80 font-medium">
                          Explore
                        </span>
                        <ArrowUpRight className={`w-4 h-4 text-primary transition-all duration-500 ${
                          isActive ? 'translate-x-0 rotate-0' : '-translate-x-2 -rotate-45'
                        }`} />
                      </div>
                    </div>

                    {/* Animated Border on Hover */}
                    <div className={`absolute inset-0 rounded-2xl sm:rounded-3xl border-2 transition-all duration-500 pointer-events-none ${
                      isActive ? 'border-primary/40' : 'border-transparent'
                    }`} />

                    {/* Corner Accents */}
                    <div className={`absolute top-4 left-4 w-8 h-8 transition-all duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-transparent" />
                      <div className="absolute top-0 left-0 w-0.5 h-full bg-gradient-to-b from-primary to-transparent" />
                    </div>
                    <div className={`absolute bottom-4 right-4 w-8 h-8 transition-all duration-700 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}>
                      <div className="absolute bottom-0 right-0 w-full h-0.5 bg-gradient-to-l from-primary to-transparent" />
                      <div className="absolute bottom-0 right-0 w-0.5 h-full bg-gradient-to-t from-primary to-transparent" />
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className={`text-center mt-16 sm:mt-20 md:mt-28 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '800ms' }}>
          <Link 
            to="/contact"
            className="group relative inline-flex items-center gap-4 overflow-hidden"
          >
            <span className="relative z-10 px-8 py-4 bg-primary text-primary-foreground rounded-full text-sm font-medium tracking-wider transition-all duration-500 group-hover:shadow-[0_0_50px_hsl(var(--primary)/0.5)]">
              Start Your Project
            </span>
            <div className="relative z-10 w-12 h-12 rounded-full bg-primary flex items-center justify-center transition-all duration-500 group-hover:scale-110">
              <ArrowUpRight className="w-5 h-5 text-primary-foreground transition-transform duration-500 group-hover:rotate-45" />
            </div>
          </Link>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className={`absolute top-1/3 left-8 w-1 h-24 bg-gradient-to-b from-primary/30 to-transparent rounded-full transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />
      <div className={`absolute bottom-1/3 right-8 w-1 h-24 bg-gradient-to-t from-primary/30 to-transparent rounded-full transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`} />
    </section>
  );
};

export default ServicesDNA;