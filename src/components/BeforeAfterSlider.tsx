import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const transformations = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
    title: "Living Room Transformation",
    location: "Pitampura, Delhi",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
    title: "Kitchen Renovation",
    location: "Model Town, Delhi",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&h=800&fit=crop",
    after: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop",
    title: "Master Bedroom",
    location: "Rohini, Delhi",
  },
];

const BeforeAfterSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 5), 95));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
    setSliderPosition(Math.min(Math.max(x, 5), 95));
  };

  const current = transformations[activeIndex];

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-10s' }} />
      
      {/* Grain overlay */}
      <div className="grain absolute inset-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header with stagger animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Show, Don't Tell
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-shimmer">Concept</span> → Reality
          </h2>
          <p className={`text-muted-foreground max-w-md mx-auto text-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            We don't just design. We execute.
          </p>
        </div>

        {/* Main slider with reveal animation */}
        <div className={`max-w-5xl mx-auto transition-all duration-1200 delay-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div
            className="relative aspect-[16/10] rounded-3xl overflow-hidden cursor-ew-resize select-none shadow-2xl shadow-black/50 border border-border/30"
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onTouchStart={() => setIsDragging(true)}
            onTouchEnd={() => setIsDragging(false)}
          >
            {/* After image (full) */}
            <img
              src={current.after}
              alt="After transformation"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
            />
            
            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden transition-all duration-100"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={current.before}
                alt="Before transformation"
                className="absolute inset-0 w-full h-full object-cover grayscale transition-transform duration-700"
              />
              {/* Before label */}
              <div className="absolute top-6 left-6 px-5 py-2.5 glass rounded-full backdrop-blur-xl">
                <span className="text-xs tracking-widest uppercase text-foreground font-medium">Before</span>
              </div>
            </div>

            {/* After label */}
            <div className="absolute top-6 right-6 px-5 py-2.5 glass rounded-full backdrop-blur-xl">
              <span className="text-xs tracking-widest uppercase text-foreground font-medium">After</span>
            </div>

            {/* Slider handle with enhanced animation */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary to-primary/50 cursor-ew-resize transition-all duration-100 shadow-[0_0_20px_rgba(199,163,107,0.5)]"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-2xl transition-all duration-300 ${isDragging ? 'scale-110 shadow-[0_0_40px_rgba(199,163,107,0.6)]' : ''}`}>
                <ArrowLeftRight className="w-6 h-6 text-primary-foreground" />
              </div>
              
              {/* Animated pulse rings */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border-2 border-primary/50 animate-ping" style={{ animationDuration: '2s' }} />
            </div>

            {/* Project info overlay with slide-up animation */}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background via-background/80 to-transparent">
              <h3 className="text-2xl font-heading text-foreground mb-1">{current.title}</h3>
              <p className="text-sm text-primary">{current.location}</p>
            </div>
          </div>

          {/* Thumbnail navigation with stagger */}
          <div className="flex justify-center gap-4 mt-10">
            {transformations.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`relative w-28 h-20 rounded-xl overflow-hidden transition-all duration-500 group ${
                  activeIndex === index
                    ? 'ring-2 ring-primary ring-offset-4 ring-offset-background scale-105'
                    : 'opacity-40 hover:opacity-70 hover:scale-105'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {activeIndex === index && (
                  <div className="absolute inset-0 bg-primary/10" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
