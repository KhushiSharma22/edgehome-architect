import { useState, useRef, useEffect } from "react";
import { X, ArrowUpRight, Sparkles } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const materials = [
  {
    id: 1,
    name: "Italian Marble",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=1000&fit=crop",
    finish: "Polished / Honed",
    durability: "25+ Years",
    vibe: "Timeless elegance",
    description: "Premium Statuario and Calacatta marble sourced directly from Italy.",
    color: "#E8DDD4",
  },
  {
    id: 2,
    name: "Engineered Wood",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=1000&fit=crop",
    finish: "Matte / Textured",
    durability: "15+ Years",
    vibe: "Warm & natural",
    description: "Premium oak and walnut veneers with superior moisture resistance.",
    color: "#8B7355",
  },
  {
    id: 3,
    name: "Designer Lighting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    finish: "Gold / Chrome",
    durability: "10+ Years",
    vibe: "Statement luxury",
    description: "Curated collection from leading European lighting houses.",
    color: "#D4AF37",
  },
  {
    id: 4,
    name: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=1000&fit=crop",
    finish: "Acrylic / Lacquer",
    durability: "20+ Years",
    vibe: "Sleek & functional",
    description: "German-engineered modular systems with soft-close mechanisms.",
    color: "#4A4A4A",
  },
  {
    id: 5,
    name: "Premium Wardrobes",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=800&h=1000&fit=crop",
    finish: "Veneer / Glass",
    durability: "20+ Years",
    vibe: "Organized luxury",
    description: "Walk-in solutions with integrated lighting and accessories.",
    color: "#6B5B4F",
  },
  {
    id: 6,
    name: "Wall Textures",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=800&h=1000&fit=crop",
    finish: "Textured / 3D",
    durability: "15+ Years",
    vibe: "Artistic depth",
    description: "Custom wall panels and textured finishes for feature walls.",
    color: "#9A8B7A",
  },
  {
    id: 7,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=800&h=1000&fit=crop",
    finish: "Concealed Tech",
    durability: "10+ Years",
    vibe: "Future-ready",
    description: "Integrated automation for lighting, climate, and security.",
    color: "#2C3E50",
  },
  {
    id: 8,
    name: "Bath Fixtures",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=800&h=1000&fit=crop",
    finish: "Brushed / Matte",
    durability: "20+ Years",
    vibe: "Spa-like serenity",
    description: "Premium faucets and fixtures from Grohe, Kohler & Jaquar.",
    color: "#B8C4C2",
  },
];

const MaterialsCraft = () => {
  const [selectedMaterial, setSelectedMaterial] = useState<typeof materials[0] | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  // Track mouse for spotlight effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getCardStyle = (index: number) => {
    // Unique bento grid positions
    const positions = [
      'col-span-2 row-span-2', // Large feature
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-1 row-span-1', // Small
      'col-span-2 row-span-1', // Wide
      'col-span-1 row-span-1', // Small
      'col-span-1 row-span-2', // Tall
      'col-span-1 row-span-1', // Small
    ];
    return positions[index] || 'col-span-1 row-span-1';
  };

  return (
    <section id="materials" ref={ref} className="relative overflow-hidden bg-background">
      {/* Cinematic spotlight that follows mouse */}
      <div 
        className="absolute pointer-events-none z-0 transition-opacity duration-500"
        style={{
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          width: 600,
          height: 600,
          background: 'radial-gradient(circle, hsl(var(--primary) / 0.08) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: hoveredId ? 1 : 0.3,
        }}
      />
      
      {/* Animated grain */}
      <div className="absolute inset-0 grain opacity-40" />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-primary/40 rounded-full animate-float" />
      <div className="absolute top-40 right-40 w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-40 left-1/4 w-2 h-2 bg-primary/50 rounded-full animate-float" style={{ animationDelay: '-4s' }} />
      
      <div ref={containerRef} className="container mx-auto px-6 py-32 md:py-40 relative z-10">
        {/* Premium editorial header */}
        <div className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}>
          <div className="max-w-2xl">
            {/* Decorative line */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-px bg-gradient-to-r from-primary to-transparent" />
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
            </div>
            
            <span className="text-primary text-xs tracking-[0.5em] uppercase mb-4 block font-medium">
              Chapter III
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground leading-[0.9] mb-6">
              The Art of
              <br />
              <span className="text-shimmer italic">Materials</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Every surface tells a story. We curate materials that transform spaces into experiences.
            </p>
          </div>
          
          {/* Material count indicator */}
          <div className={`flex items-end gap-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="text-8xl md:text-9xl font-heading text-primary/10 leading-none">
              08
            </div>
            <span className="text-xs text-muted-foreground tracking-widest uppercase mb-4">
              Curated<br />Materials
            </span>
          </div>
        </div>

        {/* Unique asymmetric bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 auto-rows-[200px] md:auto-rows-[220px]">
          {materials.map((material, index) => (
            <div
              key={material.id}
              className={`${getCardStyle(index)} relative group cursor-pointer transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ 
                transitionDelay: `${500 + index * 100}ms`,
              }}
              onMouseEnter={() => setHoveredId(material.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedMaterial(material)}
            >
              {/* Card with 3D transform on hover */}
              <div 
                className={`absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden transition-all duration-700 ${
                  hoveredId === material.id 
                    ? 'shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5),0_0_40px_rgba(199,163,107,0.2)] scale-[1.02] z-20' 
                    : 'shadow-lg'
                }`}
                style={{
                  transform: hoveredId === material.id 
                    ? 'perspective(1000px) rotateX(2deg) rotateY(-2deg)' 
                    : 'perspective(1000px) rotateX(0) rotateY(0)',
                }}
              >
                {/* Image */}
                <img
                  src={material.image}
                  alt={material.name}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ${
                    hoveredId === material.id ? 'scale-110 brightness-110' : 'scale-100'
                  }`}
                />
                
                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                <div className={`absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/20 transition-opacity duration-500 ${
                  hoveredId === material.id ? 'opacity-100' : 'opacity-0'
                }`} />
                
                {/* Content */}
                <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-between">
                  {/* Top row - Material swatch */}
                  <div className="flex items-start justify-between">
                    <div 
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white/30 transition-all duration-500 ${
                        hoveredId === material.id ? 'scale-125 shadow-[0_0_20px_rgba(255,255,255,0.3)]' : ''
                      }`}
                      style={{ backgroundColor: material.color }}
                    />
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-500 ${
                      hoveredId === material.id ? 'bg-primary/30 rotate-45' : ''
                    }`}>
                      <ArrowUpRight className={`w-4 h-4 text-white transition-all duration-500 ${
                        hoveredId === material.id ? 'scale-110' : ''
                      }`} />
                    </div>
                  </div>
                  
                  {/* Bottom content */}
                  <div>
                    {/* Animated line */}
                    <div className={`h-px bg-gradient-to-r from-primary to-transparent mb-4 transition-all duration-700 origin-left ${
                      hoveredId === material.id ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                    }`} />
                    
                    <div className={`transition-all duration-500 ${
                      hoveredId === material.id ? 'translate-y-0' : 'translate-y-2'
                    }`}>
                      <span className="text-primary/80 text-2xs tracking-[0.3em] uppercase block mb-1">
                        {material.vibe}
                      </span>
                      <h3 className="text-lg md:text-xl lg:text-2xl font-heading text-white leading-tight">
                        {material.name}
                      </h3>
                      
                      {/* Extended info on hover */}
                      <div className={`overflow-hidden transition-all duration-700 ${
                        hoveredId === material.id ? 'max-h-20 opacity-100 mt-3' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-xs text-white/70 line-clamp-2">
                          {material.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className={`absolute top-0 right-0 w-20 h-20 transition-all duration-700 ${
                  hoveredId === material.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute top-4 right-4 w-full h-full border-t-2 border-r-2 border-primary/50 rounded-tr-3xl" />
                </div>
                
                {/* Bottom accent */}
                <div className={`absolute bottom-0 left-0 w-20 h-20 transition-all duration-700 ${
                  hoveredId === material.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <div className="absolute bottom-4 left-4 w-full h-full border-b-2 border-l-2 border-primary/50 rounded-bl-3xl" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className={`mt-16 flex items-center justify-center gap-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '1400ms' }}>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-r from-transparent to-border" />
          <span className="text-xs text-muted-foreground tracking-[0.4em] uppercase">
            Click any material to explore
          </span>
          <div className="h-px flex-1 max-w-32 bg-gradient-to-l from-transparent to-border" />
        </div>
      </div>

      {/* Full-screen material modal */}
      {selectedMaterial && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setSelectedMaterial(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/95 backdrop-blur-xl" />
          
          {/* Modal content */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0 bg-card rounded-3xl overflow-hidden border border-border/30 shadow-2xl">
              {/* Image side */}
              <div className="relative aspect-square md:aspect-auto">
                <img
                  src={selectedMaterial.image}
                  alt={selectedMaterial.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/50 md:block hidden" />
                
                {/* Color swatch overlay */}
                <div className="absolute bottom-6 left-6 flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl border-2 border-white/30 shadow-lg"
                    style={{ backgroundColor: selectedMaterial.color }}
                  />
                  <span className="text-xs text-white/80 uppercase tracking-wider">
                    {selectedMaterial.vibe}
                  </span>
                </div>
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-12 flex flex-col justify-between">
                <div>
                  {/* Close button */}
                  <button
                    onClick={() => setSelectedMaterial(null)}
                    className="absolute top-6 right-6 w-12 h-12 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:rotate-90 group"
                  >
                    <X className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </button>
                  
                  <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
                    Material Details
                  </span>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-6 leading-tight">
                    {selectedMaterial.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-lg mb-8">
                    {selectedMaterial.description}
                  </p>
                </div>

                {/* Specs */}
                <div className="space-y-4">
                  <div className="h-px bg-gradient-to-r from-primary/50 via-border to-transparent mb-6" />
                  
                  {[
                    { label: 'Finish Options', value: selectedMaterial.finish },
                    { label: 'Expected Lifespan', value: selectedMaterial.durability },
                    { label: 'Design Character', value: selectedMaterial.vibe },
                  ].map((item, i) => (
                    <div 
                      key={item.label}
                      className="flex items-center justify-between py-4 border-b border-border/30 group hover:border-primary/30 transition-colors"
                    >
                      <span className="text-sm text-muted-foreground uppercase tracking-wider group-hover:text-foreground transition-colors">
                        {item.label}
                      </span>
                      <span className="text-foreground font-heading text-lg group-hover:text-primary transition-colors">
                        {item.value}
                      </span>
                    </div>
                  ))}
                  
                  {/* CTA */}
                  <button className="w-full mt-6 btn-gold flex items-center justify-center gap-3 text-base">
                    <span>Explore in Your Project</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default MaterialsCraft;
