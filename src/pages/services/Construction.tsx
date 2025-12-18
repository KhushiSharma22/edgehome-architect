import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Construction = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const materials = [
    { 
      name: "Concrete", 
      note: "Compressive strength: 40 MPa minimum",
      texture: "linear-gradient(135deg, #8B8B8B 0%, #A0A0A0 50%, #787878 100%)"
    },
    { 
      name: "Steel", 
      note: "Grade Fe 500D reinforcement",
      texture: "linear-gradient(135deg, #B8B8B8 0%, #D0D0D0 50%, #9A9A9A 100%)"
    },
    { 
      name: "Wood", 
      note: "Kiln-dried, moisture content <12%",
      texture: "linear-gradient(135deg, #C4A574 0%, #D4B584 50%, #A48554 100%)"
    },
    { 
      name: "Stone", 
      note: "Indigenous sourcing preferred",
      texture: "linear-gradient(135deg, #A09080 0%, #B0A090 50%, #908070 100%)"
    },
  ];

  const philosophyStatements = [
    "Tolerance matters.",
    "Details decide longevity.",
    "Craft over shortcuts.",
    "Precision is not negotiable.",
  ];

  return (
    <div className="min-h-screen bg-[#1C1C1C] text-[#F6F1EA]">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Concrete/Stone grain texture */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-[2000ms]"
          style={{ 
            opacity: isLoaded ? 0.05 : 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        ></div>

        {/* Charcoal gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C] via-[#252525] to-[#1C1C1C]"></div>

        {/* Gold horizontal line */}
        <div 
          className="absolute top-1/2 left-0 right-0 h-px bg-[#C7A76A]"
          style={{
            transform: `scaleX(${isLoaded ? 1 : 0})`,
            transition: "transform 2s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
            transformOrigin: "left"
          }}
        ></div>

        {/* Text Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1.5s"
              }}
            >
              CONSTRUCTION
            </h1>
            <p 
              className="mt-8 text-lg md:text-xl text-[#9A9A9A] tracking-[0.2em] uppercase"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 2s"
              }}
            >
              Excellence lives in the details.
            </p>
          </div>
        </div>
      </section>

      {/* Material Intelligence Section */}
      <section className="py-32 md:py-48 bg-[#1C1C1C]">
        <div className="container mx-auto px-6">
          <span className="text-xs text-[#9A9A9A] font-mono tracking-[0.3em] uppercase">
            Material Intelligence
          </span>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#C7A76A]/20">
            {materials.map((material, index) => (
              <div
                key={index}
                className="relative bg-[#1C1C1C] p-8 md:p-12 cursor-pointer group transition-all duration-500"
                onMouseEnter={() => setActiveMaterial(material.name)}
                onMouseLeave={() => setActiveMaterial(null)}
              >
                {/* Texture reveal on hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-700"
                  style={{ background: material.texture }}
                ></div>

                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-heading font-bold tracking-wide text-[#F6F1EA] group-hover:text-[#C7A76A] transition-colors duration-500">
                    {material.name}
                  </h3>
                  
                  {/* Technical note reveal */}
                  <p 
                    className="mt-4 text-xs font-mono text-[#9A9A9A] tracking-wider overflow-hidden"
                    style={{
                      maxHeight: activeMaterial === material.name ? "60px" : "0",
                      opacity: activeMaterial === material.name ? 1 : 0,
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)"
                    }}
                  >
                    {material.note}
                  </p>
                </div>

                {/* Index number */}
                <span className="absolute bottom-4 right-4 text-xs font-mono text-[#9A9A9A]/30">
                  0{index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Execution Philosophy */}
      <section className="py-32 md:py-48 bg-[#1C1C1C]">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            {philosophyStatements.map((statement, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="my-12 h-px bg-gradient-to-r from-[#C7A76A]/50 via-[#C7A76A]/20 to-transparent"></div>
                )}
                <p className="text-2xl md:text-3xl lg:text-4xl font-heading text-[#F6F1EA] tracking-wide">
                  {statement}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Seal */}
      <section className="py-32 md:py-40">
        <div className="container mx-auto px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="inline-block border border-[#C7A76A]/30 px-12 py-8">
              <p className="text-sm font-mono tracking-[0.3em] uppercase text-[#C7A76A]">
                Limited annual projects
              </p>
              <p className="mt-2 text-xs text-[#9A9A9A] tracking-wider">
                Built to last decades
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-[#F6F1EA]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/architecture" 
              className="group text-[#9A9A9A] hover:text-[#F6F1EA] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Previous</span>
              <span className="block mt-2 text-2xl font-heading">← Architecture</span>
            </Link>
            <Link 
              to="/services/interior" 
              className="group text-[#9A9A9A] hover:text-[#F6F1EA] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Next</span>
              <span className="block mt-2 text-2xl font-heading">Interior →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Construction;
