import { useState } from "react";
import { X } from "lucide-react";

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

  return (
    <section id="materials" className="section-padding bg-background grain">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
            Premium Materials
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Materials & Craft
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We source only the finest materials to ensure lasting beauty and durability.
          </p>
        </div>

        {/* Materials grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
          {materials.map((material) => (
            <div
              key={material.id}
              className={`relative group cursor-pointer transition-all duration-500 ${
                expandedId === material.id ? 'col-span-2 row-span-2' : ''
              }`}
              onClick={() => setExpandedId(expandedId === material.id ? null : material.id)}
            >
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img
                  src={material.image}
                  alt={material.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Default overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent transition-opacity duration-300 ${
                  expandedId === material.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-foreground font-heading text-lg">{material.name}</h3>
                    <p className="text-xs text-primary">{material.vibe}</p>
                  </div>
                  
                  {/* Hotspot indicator */}
                  <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-primary/50 animate-pulse-glow" />
                </div>

                {/* Expanded overlay */}
                <div className={`absolute inset-0 bg-background/95 backdrop-blur-sm p-6 flex flex-col justify-between transition-all duration-500 ${
                  expandedId === material.id ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}>
                  <div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setExpandedId(null);
                      }}
                      className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 transition-colors"
                    >
                      <X className="w-4 h-4 text-foreground" />
                    </button>
                    
                    <h3 className="text-2xl font-heading text-foreground mb-2">{material.name}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {material.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Finish</span>
                      <span className="text-sm text-foreground">{material.finish}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-border/50">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Durability</span>
                      <span className="text-sm text-foreground">{material.durability}</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Aesthetic</span>
                      <span className="text-sm text-primary">{material.vibe}</span>
                    </div>
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
