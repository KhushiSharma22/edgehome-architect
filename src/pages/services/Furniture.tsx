import { useEffect, useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Furniture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visiblePieces, setVisiblePieces] = useState<number[]>([]);
  const piecesRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index"));
            setVisiblePieces((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    piecesRef.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const furniturePieces = [
    { name: "Console", material: "Blackened Steel + Oak", year: "2024" },
    { name: "Dining Table", material: "Walnut + Brass", year: "2023" },
    { name: "Lounge Chair", material: "Leather + Ash", year: "2024" },
    { name: "Credenza", material: "Teak + Stone", year: "2023" },
  ];

  const philosophyLines = [
    "Material honesty",
    "Form follows touch",
    "Built, not styled",
  ];

  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#1C1C1C]">
      <Header />
      
      {/* Hero Section - Gallery-like */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Off-white background */}
        <div className="absolute inset-0 bg-[#FAFAFA]"></div>

        {/* Floating object silhouette with heavy shadow */}
        <div 
          className="absolute right-1/4 top-1/2 -translate-y-1/2 w-64 md:w-96 h-80 md:h-[450px]"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? "translateY(-50%)" : "translateY(-40%)",
            transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
          }}
        >
          {/* Abstract furniture silhouette */}
          <div className="relative w-full h-full">
            {/* Main form */}
            <div className="absolute inset-0 bg-[#1C1C1C] rounded-sm"
              style={{
                clipPath: "polygon(10% 20%, 90% 15%, 95% 85%, 5% 90%)"
              }}
            ></div>
            {/* Heavy shadow */}
            <div 
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-16 bg-black/20 blur-2xl rounded-full"
            ></div>
          </div>
        </div>

        {/* Text Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-xl">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 1s"
              }}
            >
              FURNITURE
            </h1>
            <p 
              className="mt-8 text-lg md:text-xl text-[#9A9A9A] tracking-wide"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1.5s"
              }}
            >
              Designed objects. Crafted to endure.
            </p>
          </div>
        </div>
      </section>

      {/* Collection - Objects appear one at a time on scroll */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6">
          <span className="text-xs text-[#9A9A9A] font-mono tracking-[0.3em] uppercase">
            Collection
          </span>

          <div className="mt-24 space-y-40 md:space-y-56">
            {furniturePieces.map((piece, index) => (
              <div
                key={index}
                ref={(el) => (piecesRef.current[index] = el)}
                data-index={index}
                className="relative transition-all duration-1000"
                style={{
                  opacity: visiblePieces.includes(index) ? 1 : 0,
                  transform: visiblePieces.includes(index) 
                    ? "translateY(0) rotate(0deg)" 
                    : "translateY(60px) rotate(1deg)"
                }}
              >
                <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>
                  {/* Object placeholder with shadow */}
                  <div className="relative w-full md:w-1/2 aspect-[4/3]">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#E8E8E8] to-[#D0D0D0] rounded-sm">
                      {/* Abstract form */}
                      <div 
                        className="absolute inset-8 bg-[#1C1C1C]/10 rounded-sm"
                        style={{
                          transform: visiblePieces.includes(index) ? "rotate(0deg)" : "rotate(2deg)",
                          transition: "transform 1s ease-out"
                        }}
                      ></div>
                    </div>
                    {/* Shadow reacts to scroll */}
                    <div 
                      className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-12 bg-black/15 blur-xl rounded-full transition-all duration-700"
                      style={{
                        transform: `translateX(-50%) scale(${visiblePieces.includes(index) ? 1 : 0.8})`
                      }}
                    ></div>
                  </div>

                  {/* Info */}
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#1C1C1C]">
                      {piece.name}
                    </h3>
                    <p className="mt-4 text-[#9A9A9A] text-sm tracking-wide">
                      {piece.material}
                    </p>
                    <p className="mt-2 text-xs font-mono text-[#C7A76A] tracking-wider">
                      {piece.year}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Craft Philosophy */}
      <section className="py-32 md:py-48 bg-[#F0F0F0]">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center space-y-8">
            {philosophyLines.map((line, index) => (
              <p 
                key={index}
                className="text-2xl md:text-3xl font-heading text-[#1C1C1C]"
              >
                "{line}"
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Final Line */}
      <section className="py-40 md:py-56">
        <div className="container mx-auto px-6">
          <p className="text-center text-2xl md:text-3xl lg:text-4xl font-heading text-[#1C1C1C] max-w-3xl mx-auto">
            Good furniture disappears into daily life.
          </p>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-[#1C1C1C]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/interior" 
              className="group text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Previous</span>
              <span className="block mt-2 text-2xl font-heading">← Interior</span>
            </Link>
            <Link 
              to="/contact" 
              className="text-sm text-[#C7A76A] hover:text-[#1C1C1C] transition-colors duration-500 tracking-[0.2em] uppercase"
            >
              Commission a piece
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Furniture;
