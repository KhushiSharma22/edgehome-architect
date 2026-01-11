import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import indianLivingBefore from "@/assets/indian-living-before.jpg";
import indianLivingAfter from "@/assets/indian-living-after.jpg";
import indianKitchenBefore from "@/assets/indian-kitchen-before.jpg";
import indianKitchenAfter from "@/assets/indian-kitchen-after.jpg";

const transformations = [
  {
    id: 1,
    before: indianLivingBefore,
    after: indianLivingAfter,
    title: "Living Room Transformation",
    location: "Faridabad, Haryana",
  },
  {
    id: 2,
    before: indianKitchenBefore,
    after: indianKitchenAfter,
    title: "Modern Kitchen Makeover",
    location: "Greater Noida, UP",
  },
];

const BeforeAfterSlider = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="py-16 md:py-24 bg-card relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-56 h-56 bg-primary/3 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Show, Don't Tell
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-shimmer">Concept</span> → Reality
          </h2>
          <p className={`text-muted-foreground max-w-md mx-auto text-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Hover to reveal the transformation
          </p>
        </div>

        {/* Transformation Cards - Hover to Reveal */}
        <div className={`grid md:grid-cols-2 gap-8 max-w-5xl mx-auto transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {transformations.map((item, index) => (
            <div
              key={item.id}
              className="group relative cursor-pointer"
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Card Container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-border/20">
                
                {/* Before Image (Default - Grayscale) */}
                <img
                  src={item.before}
                  alt={`${item.title} - Before`}
                  className={`absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 ease-out ${
                    hoveredId === item.id ? 'opacity-0 scale-105' : 'opacity-100 scale-100'
                  }`}
                />
                
                {/* After Image (Revealed on Hover) */}
                <img
                  src={item.after}
                  alt={`${item.title} - After`}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
                    hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80" />
                
                {/* Before/After Labels */}
                <div className={`absolute top-5 left-5 px-4 py-2 rounded-full backdrop-blur-xl transition-all duration-500 ${
                  hoveredId === item.id 
                    ? 'bg-primary/30 text-primary-foreground' 
                    : 'bg-background/60 text-foreground'
                }`}>
                  <span className="text-xs font-semibold tracking-widest uppercase">
                    {hoveredId === item.id ? 'After' : 'Before'}
                  </span>
                </div>
                
                {/* Hover Instruction */}
                <div className={`absolute top-5 right-5 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-xl transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-0 translate-x-4' : 'opacity-100'
                }`}>
                  <span className="text-[10px] text-primary tracking-wider uppercase font-medium">
                    Hover to Reveal
                  </span>
                </div>
                
                {/* Project Info */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className={`text-xl md:text-2xl font-heading text-foreground mb-1 transition-all duration-500 ${
                    hoveredId === item.id ? 'translate-y-0' : 'translate-y-1'
                  }`}>
                    {item.title}
                  </h3>
                  <p className="text-sm text-primary">{item.location}</p>
                </div>
                
                {/* Animated Border on Hover */}
                <div className={`absolute inset-0 rounded-2xl border-2 transition-all duration-500 pointer-events-none ${
                  hoveredId === item.id 
                    ? 'border-primary/60 shadow-[inset_0_0_30px_rgba(199,163,107,0.1)]' 
                    : 'border-transparent'
                }`} />
                
                {/* Corner Accents on Hover */}
                <div className={`absolute top-3 left-3 w-8 h-8 border-l-2 border-t-2 border-primary/60 rounded-tl-lg transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`} />
                <div className={`absolute bottom-3 right-3 w-8 h-8 border-r-2 border-b-2 border-primary/60 rounded-br-lg transition-all duration-500 ${
                  hoveredId === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                }`} />
              </div>
            </div>
          ))}
        </div>
        
        {/* Instruction Text */}
        <p className={`text-center text-muted-foreground/60 text-sm mt-10 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          Move your cursor over each project to see the transformation
        </p>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;