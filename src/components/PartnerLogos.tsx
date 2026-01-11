import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const partners = [
  { name: "EMAAR", style: "font-light tracking-[0.3em]" },
  { name: "M3M", style: "font-bold tracking-wide" },
  { name: "BPTP", style: "font-bold tracking-wider" },
  { name: "TATA", style: "font-semibold tracking-widest" },
  { name: "DLF", style: "font-black tracking-[0.2em]" },
];

const PartnerLogos = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section 
      ref={ref}
      className={`py-12 md:py-16 bg-background relative overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-transparent to-card/50" />
      
      {/* Gold line decorations */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto px-6 mb-10 relative">
        <p className={`text-center text-xs text-muted-foreground tracking-[0.4em] uppercase transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          Collaborated With Leading Developers
        </p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
        
        {/* Scrolling track - continuous marquee */}
        <div className="flex marquee">
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-16 md:px-24 flex-shrink-0"
            >
              <span 
                className={`text-3xl md:text-5xl text-foreground/30 hover:text-primary hover:scale-110 transition-all duration-700 cursor-default select-none ${partner.style}`}
                style={{
                  textShadow: 'none',
                  transition: 'all 0.7s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.textShadow = '0 0 40px hsl(var(--primary) / 0.5)';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.textShadow = 'none';
                }}
              >
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerLogos;
