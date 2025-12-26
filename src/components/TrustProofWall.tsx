import { useState, useEffect, useRef } from "react";
import { Quote, Volume2, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const proofStats = [
  { value: 98, suffix: "%", label: "On-Time Delivery", description: "Projects completed within promised timeline" },
  { value: 200, suffix: "+", label: "Happy Families", description: "Homes transformed across Delhi NCR" },
  { value: 10, suffix: "+", label: "Years Excellence", description: "Decade of crafting dream spaces" },
  { value: 5, suffix: " Yr", label: "Warranty", description: "Comprehensive coverage on all work" },
];

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    location: "Pitampura, Delhi",
    text: "EdgeHomes transformed our 3BHK into a space we're truly proud of. The attention to detail was exceptional, and they delivered exactly what was promised.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    project: "3 BHK Interior",
  },
  {
    id: 2,
    name: "Dr. Anand Mehta",
    location: "Model Town, Delhi",
    text: "Professional, punctual, and perfect. Our clinic interior exceeded all expectations. The team understood our vision from day one.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    project: "Clinic Design",
  },
  {
    id: 3,
    name: "The Kapoor Family",
    location: "Rohini, Delhi",
    text: "From design to execution, the team was transparent and delivered exactly what was promised. Our home feels like a luxury hotel now.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    project: "Villa Renovation",
  },
];

// Animated counter component
const AnimatedCounter = ({ value, suffix, isVisible }: { value: number; suffix: string; isVisible: boolean }) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!isVisible) return;
    
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, isVisible]);
  
  return <span>{count}{suffix}</span>;
};

const TrustProofWall = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const testimonialRef = useRef<HTMLDivElement>(null);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={ref} className="relative overflow-hidden bg-background">
      {/* Static background - no heavy animations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] bg-primary/8 rounded-full blur-[80px] sm:blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[250px] sm:w-[350px] h-[250px] sm:h-[350px] bg-primary/5 rounded-full blur-[60px] sm:blur-[80px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-20 sm:py-28 md:py-40 relative z-10">
        
        {/* Section 1: Dramatic Stats */}
        <div className={`mb-20 sm:mb-28 md:mb-32 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {/* Header with dramatic typography */}
          <div className="text-center mb-12 sm:mb-16 md:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <span className="text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.5em] uppercase font-medium">Trust Metrics</span>
              <div className="w-8 sm:w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-heading text-foreground leading-[0.9]">
              Numbers That
              <br />
              <span className="text-shimmer italic">Speak</span>
            </h2>
          </div>

          {/* Stats grid - Cinematic cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 max-w-6xl mx-auto">
            {proofStats.map((stat, index) => (
              <div
                key={stat.label}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${300 + index * 150}ms` }}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                {/* Card */}
                <div className={`relative h-full p-4 sm:p-6 md:p-8 lg:p-10 rounded-2xl sm:rounded-3xl border transition-all duration-700 overflow-hidden ${
                  hoveredStat === index 
                    ? 'bg-primary/10 border-primary/50 shadow-[0_0_60px_rgba(199,163,107,0.2)]' 
                    : 'bg-card/50 border-border/30 hover:border-primary/30'
                }`}>
                  {/* Animated background glow */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent transition-opacity duration-700 ${
                    hoveredStat === index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  
                  {/* Decorative corner - hidden on mobile */}
                  <div className={`hidden sm:block absolute top-0 right-0 w-20 sm:w-24 h-20 sm:h-24 transition-all duration-700 ${
                    hoveredStat === index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-full h-full border-t-2 border-r-2 border-primary/40 rounded-tr-2xl sm:rounded-tr-3xl" />
                  </div>
                  
                  <div className="relative z-10">
                    {/* Large number */}
                    <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading mb-2 sm:mb-4 transition-all duration-500 ${
                      hoveredStat === index ? 'text-primary sm:scale-110' : 'text-foreground'
                    }`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} isVisible={isVisible} />
                    </div>
                    
                    {/* Label */}
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-heading text-foreground mb-1 sm:mb-2">
                      {stat.label}
                    </h3>
                    
                    {/* Description - appears on hover, hidden on mobile */}
                    <p className={`hidden sm:block text-xs sm:text-sm text-muted-foreground transition-all duration-500 ${
                      hoveredStat === index ? 'opacity-100 max-h-20 mt-2 sm:mt-3' : 'opacity-0 max-h-0'
                    }`}>
                      {stat.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Cinematic Testimonials */}
        <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          {/* Testimonial header */}
          <div className="flex items-center justify-center gap-4 sm:gap-6 mb-10 sm:mb-16">
            <div className="h-px flex-1 max-w-20 sm:max-w-40 bg-gradient-to-r from-transparent via-border to-transparent" />
            <div className="flex items-center gap-2 sm:gap-3">
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary rotate-180" />
              <span className="text-[10px] sm:text-xs text-muted-foreground tracking-[0.2em] sm:tracking-[0.4em] uppercase">Client Stories</span>
              <Quote className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
            </div>
            <div className="h-px flex-1 max-w-20 sm:max-w-40 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          {/* Main testimonial showcase */}
          <div className="max-w-5xl mx-auto">
            <div className="relative" ref={testimonialRef}>
              {/* Large quote background - smaller on mobile */}
              <div className="absolute -top-6 sm:-top-10 -left-4 sm:-left-10 text-[120px] sm:text-[200px] md:text-[300px] font-heading text-primary/5 leading-none select-none pointer-events-none">
                "
              </div>
              
              {/* Testimonial content */}
              <div className="relative flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-12 items-center">
                {/* Left: Profile showcase */}
                <div className="md:col-span-2 flex flex-col items-center md:items-start w-full">
                  {/* Testimonial navigation - Profile images */}
                  <div className="flex gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center md:justify-start">
                    {testimonials.map((t, index) => (
                      <button
                        key={t.id}
                        onClick={() => setActiveTestimonial(index)}
                        className={`relative transition-all duration-500 ${
                          activeTestimonial === index 
                            ? 'scale-110 z-10' 
                            : 'opacity-50 hover:opacity-80 scale-90'
                        }`}
                      >
                        <div className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl overflow-hidden border-2 transition-all duration-500 ${
                          activeTestimonial === index 
                            ? 'border-primary shadow-[0_0_30px_rgba(199,163,107,0.4)]' 
                            : 'border-border/50'
                        }`}>
                          <img 
                            src={t.image} 
                            alt={t.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        {/* Active indicator */}
                        {activeTestimonial === index && (
                          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse" />
                        )}
                      </button>
                    ))}
                  </div>
                  
                  {/* Client info */}
                  <div className="text-center md:text-left">
                    <div className="flex items-center gap-1 mb-2 justify-center md:justify-start">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <h4 className="text-lg sm:text-xl md:text-2xl font-heading text-foreground mb-1">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-xs sm:text-sm text-primary mb-1">
                      {testimonials[activeTestimonial].location}
                    </p>
                    <span className="text-[10px] sm:text-xs text-muted-foreground tracking-wider uppercase">
                      {testimonials[activeTestimonial].project}
                    </span>
                  </div>
                </div>
                
                {/* Right: Quote content */}
                <div className="md:col-span-3 relative w-full">
                  {/* Voice indicator - simplified */}
                  <div className="flex items-center gap-3 mb-4 sm:mb-6 justify-center md:justify-start">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                    </div>
                    <div className="flex items-center gap-1 h-6 sm:h-8">
                      {[...Array(8)].map((_, i) => (
                        <div
                          key={i}
                          className="w-0.5 sm:w-1 bg-primary/40 rounded-full"
                          style={{ height: `${30 + (i % 3) * 25}%` }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  {/* Quote text with animation */}
                  <div className="relative overflow-hidden min-h-[100px] sm:min-h-[120px]">
                    {testimonials.map((t, index) => (
                      <p
                        key={t.id}
                        className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-heading text-foreground leading-relaxed text-center md:text-left transition-all duration-700 ${
                          activeTestimonial === index 
                            ? 'opacity-100 translate-y-0' 
                            : 'opacity-0 translate-y-8 absolute inset-0'
                        }`}
                      >
                        "{t.text}"
                      </p>
                    ))}
                  </div>
                  
                  {/* Progress bar */}
                  <div className="mt-6 sm:mt-8 flex gap-2">
                    {testimonials.map((_, index) => (
                      <div 
                        key={index}
                        className="h-1 flex-1 bg-border/30 rounded-full overflow-hidden cursor-pointer"
                        onClick={() => setActiveTestimonial(index)}
                      >
                        <div 
                          className={`h-full bg-primary rounded-full transition-all duration-500 ${
                            activeTestimonial === index ? 'animate-progress' : 'w-0'
                          }`}
                          style={{
                            animation: activeTestimonial === index ? 'progress 5s linear forwards' : 'none'
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add progress animation keyframe */}
      <style>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default TrustProofWall;
