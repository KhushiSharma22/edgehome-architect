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
    <section id="signature" className="relative py-0 overflow-hidden border-y border-border/30">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-shimmer" />
      
      {/* Glow orbs */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-7s' }} />
      
      {/* Marquee container */}
      <div className="relative flex">
        <div className="flex marquee py-8">
          {[...signatures, ...signatures, ...signatures].map((item, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 px-10 md:px-16 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(index % signatures.length)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex items-center gap-4">
                {/* Animated icon container */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                  hoveredIndex === index % signatures.length 
                    ? 'bg-primary/30 border-2 border-primary scale-110 shadow-[0_0_30px_rgba(199,163,107,0.4)]' 
                    : 'bg-primary/10 border border-primary/20'
                }`}>
                  <item.icon className={`w-6 h-6 transition-all duration-500 ${
                    hoveredIndex === index % signatures.length ? 'text-primary scale-110' : 'text-primary/70'
                  }`} />
                </div>
                
                <div className="min-w-[180px]">
                  <h3 className={`font-heading text-lg transition-all duration-500 ${
                    hoveredIndex === index % signatures.length ? 'text-primary' : 'text-foreground'
                  }`}>
                    {item.title}
                  </h3>
                  
                  {/* Expanded panel on hover with smooth height animation */}
                  <div className={`overflow-hidden transition-all duration-700 ease-out ${
                    hoveredIndex === index % signatures.length ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}>
                    <p className="text-xs text-muted-foreground max-w-[220px] leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent" />
                      <span className="text-2xs text-primary font-semibold tracking-wider uppercase">
                        {item.stat}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Divider with glow effect */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-border to-transparent" />
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
    </section>
  );
};

export default SignatureStrip;
