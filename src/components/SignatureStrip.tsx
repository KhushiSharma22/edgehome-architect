import { useState } from "react";
import { Home, PaintBucket, Wrench, Package, Building2 } from "lucide-react";

const signatures = [
  {
    icon: Home,
    title: "Architectural Design",
    description: "Custom architectural solutions that blend form with function",
    stat: "150+ Projects",
  },
  {
    icon: PaintBucket,
    title: "Interior Design",
    description: "Curated spaces that reflect your personality and lifestyle",
    stat: "200+ Homes",
  },
  {
    icon: Wrench,
    title: "Renovation",
    description: "Transforming existing spaces into modern masterpieces",
    stat: "10+ Years",
  },
  {
    icon: Package,
    title: "Turnkey Solutions",
    description: "End-to-end execution from concept to handover",
    stat: "100% Delivery",
  },
  {
    icon: Building2,
    title: "Commercial Spaces",
    description: "Professional environments designed for productivity",
    stat: "50+ Offices",
  },
];

const SignatureStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="signature" className="relative py-0 overflow-hidden border-y border-border/50">
      {/* Subtle glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      {/* Marquee container */}
      <div className="relative flex">
        <div className="flex marquee py-6">
          {[...signatures, ...signatures].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 px-8 md:px-12 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index % signatures.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-foreground font-heading text-lg group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  {/* Expanded panel on hover */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    hoveredIndex === index % signatures.length ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-xs text-muted-foreground max-w-[200px] leading-relaxed">
                      {item.description}
                    </p>
                    <span className="text-2xs text-primary font-medium tracking-wider uppercase mt-1 block">
                      {item.stat}
                    </span>
                  </div>
                </div>
              </div>
              
              {/* Divider */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-8 bg-border/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureStrip;
