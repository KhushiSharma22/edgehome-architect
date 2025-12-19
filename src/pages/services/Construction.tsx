import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Construction = () => {
  const [scrollY, setScrollY] = useState(0);
  const [slabCrackLevel, setSlabCrackLevel] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Calculate slab crack level based on scroll in first section
      const viewportHeight = window.innerHeight;
      const crackProgress = Math.min(1, scrollY / (viewportHeight * 0.6));
      setSlabCrackLevel(crackProgress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  const layers = [
    {
      id: "foundation",
      label: "FOUNDATION LAYER",
      text: "If this fails,\nnothing above matters.",
      offset: 0,
    },
    {
      id: "structure",
      label: "STRUCTURE LAYER",
      text: "Columns don't forgive shortcuts.",
      offset: 1,
    },
    {
      id: "services",
      label: "SERVICES LAYER",
      text: "Most mistakes are hidden here.\nWe expose them early.",
      offset: 2,
    },
    {
      id: "tolerance",
      label: "TOLERANCE LAYER",
      text: "We build for years, not handovers.",
      offset: 3,
    },
  ];

  return (
    <div ref={containerRef} className="min-h-screen bg-[#0A0A0A] text-[#F4EFE8]">
      <Header />
      
      {/* Grain overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-50 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* SECTION 1 — THE WEIGHT OF BUILDING */}
      <section className="relative h-[200vh]">
        <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
          {/* Vignette */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, transparent 30%, #0A0A0A 90%)",
            }}
          />

          {/* Label */}
          <div className="absolute top-24 left-8 md:left-16">
            <span 
              className="text-[10px] tracking-[0.3em] text-[#A7A7A7] opacity-50"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              EDGEHOMES / CONSTRUCTION
            </span>
          </div>

          {/* Concrete Slab */}
          <div className="relative">
            {/* The slab itself */}
            <div 
              className="relative w-20 md:w-32 h-[60vh] md:h-[70vh]"
              style={{
                background: `linear-gradient(180deg, #1A1A1A 0%, #0E0E0E 50%, #1A1A1A 100%)`,
                opacity: 1 - slabCrackLevel * 0.7,
                transform: `scaleX(${1 - slabCrackLevel * 0.3})`,
                transition: "transform 0.1s ease-out",
              }}
            >
              {/* Grain texture on slab */}
              <div 
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
              />

              {/* Hairline cracks */}
              <svg 
                className="absolute inset-0 w-full h-full"
                style={{ opacity: slabCrackLevel }}
              >
                <line 
                  x1="30%" y1="20%" x2="45%" y2="35%" 
                  stroke="#C6A46A" strokeWidth="0.5" opacity="0.3"
                />
                <line 
                  x1="45%" y1="35%" x2="40%" y2="55%" 
                  stroke="#C6A46A" strokeWidth="0.5" opacity="0.3"
                />
                <line 
                  x1="60%" y1="40%" x2="55%" y2="65%" 
                  stroke="#C6A46A" strokeWidth="0.5" opacity="0.3"
                />
                <line 
                  x1="50%" y1="60%" x2="65%" y2="80%" 
                  stroke="#C6A46A" strokeWidth="0.5" opacity="0.3"
                />
              </svg>
            </div>

            {/* Text revealed behind slab */}
            <div 
              className="absolute inset-0 flex flex-col items-center justify-center text-center px-8"
              style={{
                opacity: slabCrackLevel,
                transform: `translateY(${20 - slabCrackLevel * 20}px)`,
              }}
            >
              <h1 
                className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                <span className="block">Construction</span>
                <span className="block text-[#A7A7A7]">is not speed.</span>
              </h1>
              
              <p 
                className="text-2xl md:text-4xl font-light text-[#C6A46A] mb-12"
                style={{ 
                  fontFamily: "'Playfair Display', serif",
                  opacity: Math.max(0, slabCrackLevel - 0.3) / 0.7,
                }}
              >
                It is weight.
              </p>

              <p 
                className="text-sm md:text-base text-[#A7A7A7] max-w-md leading-relaxed mb-8"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  opacity: Math.max(0, slabCrackLevel - 0.5) / 0.5,
                }}
              >
                Every structure carries responsibility —<br />
                to people, to time, to failure.
              </p>

              <p 
                className="text-[10px] md:text-xs tracking-[0.15em] text-[#A7A7A7] opacity-50"
                style={{ 
                  fontFamily: "Inter, sans-serif",
                  opacity: Math.max(0, slabCrackLevel - 0.7) / 0.3 * 0.5,
                }}
              >
                We build knowing nothing can be hidden later.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — THE UNSEEN WORK */}
      <section className="relative min-h-screen py-32 md:py-48 overflow-hidden">
        {/* Section label */}
        <div className="absolute top-16 left-8 md:left-16">
          <span 
            className="text-[10px] tracking-[0.3em] text-[#A7A7A7] opacity-30"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            THE UNSEEN WORK
          </span>
        </div>

        {/* Layers */}
        <div className="relative max-w-6xl mx-auto px-8 md:px-16">
          {layers.map((layer, index) => {
            const layerStart = window.innerHeight * 1.5 + index * 300;
            const layerProgress = Math.min(1, Math.max(0, (scrollY - layerStart) / 400));
            const parallaxOffset = (scrollY - layerStart) * 0.1 * (index % 2 === 0 ? 1 : -1);

            return (
              <div 
                key={layer.id}
                className="relative mb-32 md:mb-48"
                style={{
                  transform: `translateX(${parallaxOffset}px)`,
                  opacity: 0.3 + layerProgress * 0.7,
                }}
              >
                {/* Layer band */}
                <div className="relative">
                  {/* Thin brass line */}
                  <div 
                    className="absolute left-0 top-0 h-px bg-[#C6A46A] opacity-20"
                    style={{
                      width: `${30 + layerProgress * 40}%`,
                      transition: "width 0.5s ease-out",
                    }}
                  />

                  {/* Layer label */}
                  <span 
                    className="text-[9px] tracking-[0.4em] text-[#C6A46A] opacity-40 block pt-6 mb-8"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {layer.label}
                  </span>

                  {/* Layer text */}
                  <p 
                    className="text-xl md:text-3xl lg:text-4xl font-light leading-relaxed text-[#F4EFE8] whitespace-pre-line"
                    style={{ 
                      fontFamily: "'Playfair Display', serif",
                      transform: `translateY(${20 - layerProgress * 20}px)`,
                      transition: "transform 0.5s ease-out",
                    }}
                  >
                    {layer.text}
                  </p>

                  {/* Bottom thin line */}
                  <div 
                    className="mt-12 h-px bg-[#1A1A1A]"
                    style={{ width: "100%" }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 3 — CONTROL IS THE DIFFERENCE */}
      <section className="relative min-h-screen py-32 md:py-48 overflow-hidden">
        {/* Blueprint grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(to right, #C6A46A 1px, transparent 1px),
              linear-gradient(to bottom, #C6A46A 1px, transparent 1px)
            `,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Horizontal brass line with subtle vibration */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2">
          <div 
            className="h-px bg-[#C6A46A] opacity-30"
            style={{
              animation: "subtleVibrate 8s ease-in-out infinite",
            }}
          />
        </div>

        <style>{`
          @keyframes subtleVibrate {
            0%, 100% { transform: scaleX(1); opacity: 0.3; }
            25% { transform: scaleX(1.001); opacity: 0.35; }
            50% { transform: scaleX(0.999); opacity: 0.25; }
            75% { transform: scaleX(1.002); opacity: 0.32; }
          }
        `}</style>

        <div className="relative max-w-4xl mx-auto px-8 md:px-16">
          {/* Opening statement */}
          <div className="mb-24 md:mb-32">
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight mb-8"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Control is not visible.
            </h2>

            <p 
              className="text-2xl md:text-4xl font-light text-[#A7A7A7]"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              But its absence is.
            </p>
          </div>

          {/* Manifesto paragraph */}
          <div className="mb-24 md:mb-32">
            <p 
              className="text-sm md:text-base text-[#A7A7A7] leading-loose max-w-xl"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our construction approach is quiet, methodical,<br />
              and intolerant of compromise.
            </p>

            <div className="mt-12 space-y-3">
              <p 
                className="text-sm md:text-base text-[#F4EFE8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Materials are checked.
              </p>
              <p 
                className="text-sm md:text-base text-[#F4EFE8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Lines are aligned.
              </p>
              <p 
                className="text-sm md:text-base text-[#F4EFE8]"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                Decisions are documented.
              </p>
            </div>

            <p 
              className="mt-12 text-xs md:text-sm text-[#C6A46A] tracking-wide"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Nothing relies on luck.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-16 border-t border-[#1A1A1A]">
            <p 
              className="text-xs tracking-[0.2em] text-[#A7A7A7] opacity-60"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              — EdgeHomes, Faridabad
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
