import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Interior = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [visibleWords, setVisibleWords] = useState<number[]>([]);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const words = [0, 1, 2, 3];
      words.forEach((word, index) => {
        setTimeout(() => {
          setVisibleWords(prev => [...prev, word]);
        }, 2000 + index * 600);
      });
    }
  }, [isLoaded]);

  const experienceWords = ["Mood", "Texture", "Flow", "Silence"];

  return (
    <div className="min-h-screen bg-[#F6F1EA] text-[#1C1C1C]">
      <Header />
      
      {/* Hero Section - Warm & Intimate */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Soft warm background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#F6F1EA] via-[#EDE6DB] to-[#F0E8DC]"></div>
        
        {/* Abstract light through window - animated */}
        <div 
          className="absolute inset-0 overflow-hidden"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 2s ease-out"
          }}
        >
          <div 
            className="absolute top-1/4 right-1/4 w-[600px] h-[800px] bg-gradient-to-b from-white/30 to-transparent blur-3xl"
            style={{
              transform: `translateX(${isLoaded ? 0 : 100}px)`,
              transition: "transform 8s ease-out"
            }}
          ></div>
          {/* Window frame shadow */}
          <div 
            className="absolute top-1/3 right-1/3 w-96 h-[500px] opacity-10"
            style={{
              background: `
                linear-gradient(90deg, transparent 48%, #1C1C1C 48%, #1C1C1C 52%, transparent 52%),
                linear-gradient(0deg, transparent 48%, #1C1C1C 48%, #1C1C1C 52%, transparent 52%)
              `,
              transform: `rotate(-5deg) translateY(${isLoaded ? 0 : -50}px)`,
              transition: "transform 6s ease-out 0.5s"
            }}
          ></div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold tracking-tight"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s"
              }}
            >
              INTERIORS
            </h1>
            <p 
              className="mt-8 text-lg md:text-xl text-[#9A9A9A] tracking-wide max-w-xl leading-relaxed"
              style={{ 
                opacity: isLoaded ? 1 : 0, 
                transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s"
              }}
            >
              Spaces that respond to the people who live in them.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Block - Words fade in one by one */}
      <section className="py-40 md:py-56">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {experienceWords.map((word, index) => (
              <span
                key={index}
                className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold transition-all duration-1000"
                style={{
                  opacity: visibleWords.includes(index) ? 1 : 0.1,
                  transform: visibleWords.includes(index) ? "translateY(0)" : "translateY(20px)",
                  color: visibleWords.includes(index) ? "#1C1C1C" : "#9A9A9A"
                }}
              >
                {word}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Design Approach - Split Screen */}
      <section className="py-32 md:py-48">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left - Text */}
            <div className="space-y-8">
              <span className="text-xs text-[#9A9A9A] font-mono tracking-[0.3em] uppercase">
                Design Approach
              </span>
              
              <p className="text-2xl md:text-3xl font-heading leading-relaxed text-[#1C1C1C]">
                Interior design is not about decoration. It is about creating environments 
                where life unfolds naturally — where every surface, every shadow, every 
                transition serves the human experience.
              </p>

              <div className="w-24 h-px bg-[#C7A76A]"></div>

              <p className="text-lg text-[#9A9A9A] leading-loose">
                We consider how light enters a room at different hours. How sound travels 
                between spaces. How materials feel underfoot and to the touch. These 
                invisible qualities define the character of a space more than any visible element.
              </p>
            </div>

            {/* Right - Abstract material collage (blurred, soft) */}
            <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4C5B0] via-[#C7A76A]/30 to-[#E8DFD0] blur-xl"></div>
              <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-[#1C1C1C]/10 blur-2xl rounded-full"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-[#C7A76A]/20 blur-3xl rounded-full"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white/50 blur-2xl rounded-full"></div>
              
              {/* Subtle texture overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
                }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 bg-[#EDE6DB]/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { num: "01", title: "Listen", desc: "Understanding how you live" },
                { num: "02", title: "Envision", desc: "Translating needs into space" },
                { num: "03", title: "Craft", desc: "Executing with precision" },
              ].map((step, index) => (
                <div key={index} className="text-center md:text-left">
                  <span className="text-xs font-mono text-[#C7A76A] tracking-wider">
                    {step.num}
                  </span>
                  <h3 className="mt-3 text-2xl font-heading font-bold text-[#1C1C1C]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[#9A9A9A]">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Closing Note */}
      <section className="py-40 md:py-56">
        <div className="container mx-auto px-6">
          <p className="text-center text-2xl md:text-3xl lg:text-4xl font-heading italic text-[#1C1C1C] max-w-3xl mx-auto leading-relaxed">
            We don't decorate spaces. We shape experiences.
          </p>
          
          {/* Minimal CTA */}
          <div className="mt-16 text-center">
            <Link 
              to="/contact"
              className="inline-block text-sm text-[#C7A76A] hover:text-[#1C1C1C] transition-colors duration-500 tracking-[0.2em] uppercase border-b border-[#C7A76A]/30 hover:border-[#1C1C1C] pb-1"
            >
              Discuss your space →
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 border-t border-[#1C1C1C]/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/construction" 
              className="group text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Previous</span>
              <span className="block mt-2 text-2xl font-heading">← Construction</span>
            </Link>
            <Link 
              to="/services/furniture" 
              className="group text-[#9A9A9A] hover:text-[#1C1C1C] transition-colors duration-500"
            >
              <span className="text-xs font-mono tracking-[0.2em] uppercase">Next</span>
              <span className="block mt-2 text-2xl font-heading">Furniture →</span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Interior;
