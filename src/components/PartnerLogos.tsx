const partners = [
  { name: "EMAAR", style: "font-light tracking-[0.2em]" },
  { name: "M3M", style: "font-bold" },
  { name: "BPTP", style: "font-bold tracking-wider" },
  { name: "TATA", style: "font-semibold tracking-wider" },
  { name: "DLF", style: "font-bold tracking-widest" },
];

const PartnerLogos = () => {
  return (
    <section className="py-16 bg-background border-y border-border/20 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <p className="text-center text-xs text-muted-foreground tracking-[0.3em] uppercase">
          Collaborated With Leading Developers
        </p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling track */}
        <div className="flex animate-marquee">
          {/* First set */}
          {[...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex items-center justify-center px-12 md:px-20"
            >
              <span 
                className={`text-2xl md:text-4xl text-foreground/60 hover:text-primary transition-colors duration-500 cursor-default ${partner.style}`}
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
