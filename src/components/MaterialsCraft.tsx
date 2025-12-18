import { useState } from "react";
import { X } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const materials = [
  {
    id: 1,
    name: "Italian Marble",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=600&h=600&fit=crop",
    finish: "Polished / Honed",
    durability: "25+ Years",
    vibe: "Timeless elegance",
    description: "Premium Statuario and Calacatta marble sourced directly from Italy.",
  },
  {
    id: 2,
    name: "Engineered Wood",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=600&fit=crop",
    finish: "Matte / Textured",
    durability: "15+ Years",
    vibe: "Warm & natural",
    description: "Premium oak and walnut veneers with superior moisture resistance.",
  },
  {
    id: 3,
    name: "Designer Lighting",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=600&fit=crop",
    finish: "Gold / Chrome",
    durability: "10+ Years",
    vibe: "Statement luxury",
    description: "Curated collection from leading European lighting houses.",
  },
  {
    id: 4,
    name: "Modular Kitchen",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop",
    finish: "Acrylic / Lacquer",
    durability: "20+ Years",
    vibe: "Sleek & functional",
    description: "German-engineered modular systems with soft-close mechanisms.",
  },
  {
    id: 5,
    name: "Premium Wardrobes",
    image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&h=600&fit=crop",
    finish: "Veneer / Glass",
    durability: "20+ Years",
    vibe: "Organized luxury",
    description: "Walk-in solutions with integrated lighting and accessories.",
  },
  {
    id: 6,
    name: "Wall Textures",
    image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop",
    finish: "Textured / 3D",
    durability: "15+ Years",
    vibe: "Artistic depth",
    description: "Custom wall panels and textured finishes for feature walls.",
  },
  {
    id: 7,
    name: "Smart Home",
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=600&fit=crop",
    finish: "Concealed Tech",
    durability: "10+ Years",
    vibe: "Future-ready",
    description: "Integrated automation for lighting, climate, and security.",
  },
  {
    id: 8,
    name: "Bath Fixtures",
    image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=600&h=600&fit=crop",
    finish: "Brushed / Matte",
    durability: "20+ Years",
    vibe: "Spa-like serenity",
    description: "Premium faucets and fixtures from Grohe, Kohler & Jaquar.",
  },
];

const MaterialsCraft = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="materials" ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grain" />
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-1/3 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-8s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Premium Materials
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Materials & <span className="text-shimmer">Craft</span>
          </h2>
          <p className={`text-muted-foreground max-w-lg mx-auto text-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            We source only the finest materials to ensure lasting beauty and durability.
          </p>
        </div>

        {/* Materials grid with staggered animation */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {materials.map((material, index) => (
            <div
              key={material.id}
              className={`relative group cursor-pointer transition-all duration-700 ${
                expandedId === material.id ? 'col-span-2 row-span-2 z-20' : ''
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${500 + index * 100}ms` }}
              onClick={() => setExpandedId(expandedId === material.id ? null : material.id)}
              onMouseEnter={() => setHoveredId(material.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={`relative aspect-square rounded-2xl overflow-hidden transition-all duration-700 ${
                hoveredId === material.id ? 'shadow-[0_0_40px_rgba(199,163,107,0.3)]' : ''
              }`}>
                <img
                  src={material.image}
                  alt={material.name}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    hoveredId === material.id ? 'scale-110 blur-0' : 'scale-100'
                  }`}
                />
                
                {/* Default overlay with animation */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-all duration-500 ${
                  expandedId === material.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className={`text-foreground font-heading text-lg mb-1 transition-all duration-500 ${
                      hoveredId === material.id ? 'translate-y-0' : 'translate-y-1'
                    }`}>
                      {material.name}
                    </h3>
                    <p className={`text-xs text-primary transition-all duration-500 ${
                      hoveredId === material.id ? 'opacity-100 translate-y-0' : 'opacity-70 translate-y-1'
                    }`}>
                      {material.vibe}
                    </p>
                  </div>
                  
                  {/* Animated hotspot indicator */}
                  <div className="absolute top-4 right-4">
                    <div className="w-3 h-3 rounded-full bg-primary/60 animate-pulse" />
                    <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary/30 animate-ping" />
                  </div>
                </div>

                {/* Expanded overlay with slide animation */}
                <div className={`absolute inset-0 bg-background/98 backdrop-blur-md p-6 md:p-8 flex flex-col justify-between transition-all duration-700 ${
                  expandedId === material.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(null);
                      }}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-muted/50 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:rotate-90"
                    >
                      <X className="w-5 h-5 text-foreground" />
                    </button>
                    
                    <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-3">{material.name}</h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed mb-6">
                      {material.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {[
                      { label: 'Finish', value: material.finish },
                      { label: 'Durability', value: material.durability },
                      { label: 'Aesthetic', value: material.vibe, highlight: true },
                    ].map((item, i) => (
                      <div 
                        key={item.label}
                        className="flex justify-between items-center py-2 border-b border-border/30"
                        style={{ transitionDelay: `${i * 100}ms` }}
                      >
                        <span className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</span>
                        <span className={`text-sm ${item.highlight ? 'text-primary' : 'text-foreground'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MaterialsCraft;
