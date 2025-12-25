import { useState } from "react";
import { Home, PaintBucket, Wrench, Package, Building2 } from "lucide-react";
import portfolioBathroom from "@/assets/portfolio-bathroom.jpg";
import portfolioBedroom from "@/assets/portfolio-bedroom.jpg";
import portfolioDining from "@/assets/portfolio-dining.jpg";
import portfolioKitchen from "@/assets/portfolio-kitchen.jpg";

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
    hasOrbitImages: true,
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

const orbitImages = [
  { src: portfolioBathroom, angle: 0 },
  { src: portfolioBedroom, angle: 72 },
  { src: portfolioDining, angle: 144 },
  { src: portfolioKitchen, angle: 216 },
  { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=200&q=80", angle: 288 },
];

const SignatureStrip = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="signature" className="relative py-0 overflow-hidden border-y border-border/30">
      {/* Static gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5" />
      
      {/* Static glow orbs */}
      <div className="absolute top-0 left-1/4 w-48 h-48 bg-primary/8 rounded-full blur-2xl" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
      
      {/* Marquee container */}
      <div className="relative flex">
        <div className="flex marquee py-8">
          {[...signatures, ...signatures, ...signatures].map((item, index) => {
            const isInterior = item.title === "Interior Design";
            const isHovered = hoveredIndex === index % signatures.length;
            
            return (
              <div
                key={index}
                className="relative flex-shrink-0 px-10 md:px-16 cursor-pointer group"
                onMouseEnter={() => setHoveredIndex(index % signatures.length)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="flex items-center gap-4">
                  {/* Animated icon container with orbiting images for Interior */}
                  <div className="relative">
                    {/* Orbiting images for Interior Design */}
                    {isInterior && (
                      <div className={`absolute inset-0 transition-all duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                        {orbitImages.map((img, imgIndex) => (
                          <div
                            key={imgIndex}
                            className="absolute w-10 h-10 rounded-lg overflow-hidden shadow-lg border border-primary/30"
                            style={{
                              animation: isHovered ? `orbitRotate 8s linear infinite` : 'none',
                              animationDelay: `${imgIndex * -1.6}s`,
                              transformOrigin: '30px 30px',
                              left: '50%',
                              top: '50%',
                              marginLeft: '-5px',
                              marginTop: '-5px',
                              transform: `rotate(${img.angle}deg) translateX(55px) rotate(-${img.angle}deg)`,
                            }}
                          >
                            <img 
                              src={img.src}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                        {/* Orbit path ring */}
                        <div 
                          className="absolute rounded-full border border-primary/20"
                          style={{
                            width: '120px',
                            height: '120px',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                          }}
                        />
                      </div>
                    )}
                    
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 relative z-10 ${
                      isHovered 
                        ? 'bg-primary/30 border-2 border-primary scale-110 shadow-[0_0_30px_rgba(199,163,107,0.4)]' 
                        : 'bg-primary/10 border border-primary/20'
                    }`}>
                      <item.icon className={`w-6 h-6 transition-all duration-500 ${
                        isHovered ? 'text-primary scale-110' : 'text-primary/70'
                      }`} />
                    </div>
                  </div>
                  
                  <div className="min-w-[180px]">
                    <h3 className={`font-heading text-lg transition-all duration-500 ${
                      isHovered ? 'text-primary' : 'text-foreground'
                    }`}>
                      {item.title}
                    </h3>
                    
                    {/* Expanded panel on hover with smooth height animation */}
                    <div className={`overflow-hidden transition-all duration-700 ease-out ${
                      isHovered ? 'max-h-24 opacity-100 mt-2' : 'max-h-0 opacity-0'
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
            );
          })}
        </div>
      </div>
      
      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      {/* CSS for orbit animation */}
      <style>{`
        @keyframes orbitRotate {
          from {
            transform: rotate(0deg) translateX(55px) rotate(0deg);
          }
          to {
            transform: rotate(360deg) translateX(55px) rotate(-360deg);
          }
        }
      `}</style>
    </section>
  );
};

export default SignatureStrip;
