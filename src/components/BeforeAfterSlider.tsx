import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

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
    <section className="section-padding bg-card grain">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
            Show, Don't Tell
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Concept → Reality
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            We don't just design. We execute.
          </p>
        </div>

        {/* Main slider */}
        <div className="max-w-5xl mx-auto">
          <div
            className="relative aspect-[16/10] rounded-2xl overflow-hidden cursor-ew-resize select-none"
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
              alt="After"
              className="absolute inset-0 w-full h-full object-cover"
            />
            
            {/* Before image (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <img
                src={current.before}
                alt="Before"
                className="absolute inset-0 w-full h-full object-cover grayscale"
              />
              {/* Before label */}
              <div className="absolute top-6 left-6 px-4 py-2 glass rounded-full">
                <span className="text-xs tracking-wider uppercase text-foreground">Before</span>
              </div>
            </div>

            {/* After label */}
            <div className="absolute top-6 right-6 px-4 py-2 glass rounded-full">
              <span className="text-xs tracking-wider uppercase text-foreground">After</span>
            </div>

            {/* Slider handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-primary cursor-ew-resize"
              style={{ left: `${sliderPosition}%` }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                <ArrowLeftRight className="w-5 h-5 text-primary-foreground" />
              </div>
            </div>

            {/* Project info overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 to-transparent">
              <h3 className="text-xl font-heading text-foreground mb-1">{current.title}</h3>
              <p className="text-sm text-muted-foreground">{current.location}</p>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="flex justify-center gap-4 mt-8">
            {transformations.map((item, index) => (
              <button
                key={item.id}
                onClick={() => {
                  setActiveIndex(index);
                  setSliderPosition(50);
                }}
                className={`relative w-24 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  activeIndex === index
                    ? 'ring-2 ring-primary ring-offset-2 ring-offset-background'
                    : 'opacity-50 hover:opacity-80'
                }`}
              >
                <img
                  src={item.after}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
