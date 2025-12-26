import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import eggChair from "@/assets/egg-chair.png";
import pelicanChair from "@/assets/pelican-chair.png";

const Furniture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);
  const collectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (collectionRef.current) {
        const rect = collectionRef.current.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight * 0.5 - rect.top) / (rect.height * 0.6)));
        setActiveCollection(Math.floor(progress * furnitureCollections.length));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const furnitureCollections = [
    {
      name: "Living",
      tagline: "Where life unfolds",
      pieces: ["Sofas", "Armchairs", "Coffee Tables", "Consoles"],
      image: "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&h=600&fit=crop",
      stat: "50+",
      statLabel: "Pieces Crafted"
    },
    {
      name: "Dining",
      tagline: "Where stories are shared",
      pieces: ["Dining Tables", "Chairs", "Sideboards", "Bar Units"],
      image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&h=600&fit=crop",
      stat: "30+",
      statLabel: "Custom Designs"
    },
    {
      name: "Bedroom",
      tagline: "Where dreams take form",
      pieces: ["Beds", "Nightstands", "Wardrobes", "Dressers"],
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&h=600&fit=crop",
      stat: "40+",
      statLabel: "Restful Spaces"
    },
    {
      name: "Study",
      tagline: "Where ideas are born",
      pieces: ["Desks", "Bookcases", "Shelving", "Organizers"],
      image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&h=600&fit=crop",
      stat: "25+",
      statLabel: "Work Sanctuaries"
    },
  ];

  const signaturePieces = [
    {
      name: "The Console",
      material: "Blackened Steel + White Oak",
      description: "Clean lines meet raw materiality",
      image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop",
    },
    {
      name: "The Credenza",
      material: "Walnut + Brushed Brass",
      description: "Storage elevated to sculpture",
      image: "https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=800&fit=crop",
    },
    {
      name: "The Lounge Chair",
      material: "Aniline Leather + Ash Frame",
      description: "Comfort without compromise",
      image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&h=800&fit=crop",
    },
    {
      name: "The Dining Table",
      material: "Solid Teak + Stone Base",
      description: "The heart of every gathering",
      image: "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?w=600&h=800&fit=crop",
    },
  ];

  const craftPrinciples = [
    { title: "Material Honesty", desc: "We never hide what things are made of" },
    { title: "Form Follows Touch", desc: "Every surface is designed for human contact" },
    { title: "Built to Last", desc: "Furniture meant for generations, not seasons" },
  ];

  return (
    <div className="min-h-screen bg-[#0E0E0E] text-ivory overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background with subtle texture */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&q=80"
            alt="Custom furniture"
            className="w-full h-full object-cover"
            style={{ filter: 'blur(2px) brightness(0.35)' }}
          />
          <div className="absolute inset-0 bg-[#0E0E0E]/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#0E0E0E_85%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0E0E0E] to-transparent" />
        </div>

        {/* Subtle grain */}
        <div 
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28">
          {/* Breadcrumb */}
          <nav 
            className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/30 mb-20"
            style={{
              opacity: isLoaded ? 0.3 : 0,
              transform: isLoaded ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s ease-out 0.3s"
            }}
          >
            <Link to="/" className="hover:text-ivory/50 transition-colors">HOME</Link>
            <ChevronRight className="w-3 h-3" />
            <span>SERVICES</span>
            <ChevronRight className="w-3 h-3" />
            <span className="text-[#C6A46A]/60">FURNITURE</span>
          </nav>

          <div className="relative max-w-5xl">
            {/* Watermark */}
            <div 
              className="absolute -top-16 right-0 lg:right-20 pointer-events-none select-none"
              style={{
                opacity: isLoaded ? 0.04 : 0,
                transition: "opacity 2s ease-out 1s"
              }}
            >
              <span className="text-[8rem] md:text-[14rem] lg:text-[18rem] font-heading italic text-[#C6A46A] leading-none">
                craft
              </span>
            </div>

            {/* Headline */}
            <h1 
              className="relative z-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(40px)",
                transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s"
              }}
            >
              <span className="block text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading text-ivory/90 tracking-tight leading-tight">
                Custom Furniture,{' '}
                <span 
                  className="text-[#C6A46A]"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transition: "opacity 0.4s ease-out 0.8s"
                  }}
                >
                  built to endure.
                </span>
              </span>
            </h1>

            {/* Sub-headline */}
            <p 
              className="text-base md:text-lg text-ivory/45 leading-relaxed max-w-lg mt-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                transition: "all 1s ease-out 0.8s"
              }}
            >
              Handcrafted pieces that bridge function and art.<br />
              Made for your space. Made to last generations.
            </p>

            {/* CTA */}
            <div 
              className="mt-10"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 1s ease-out 1s'
              }}
            >
              <Link
                to="/contact"
                className="group inline-flex items-center gap-4 bg-[#C6A46A] text-[#0E0E0E] px-8 py-4 text-sm tracking-wider font-medium hover:bg-ivory transition-colors duration-500"
              >
                Commission a Piece
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
            style={{
              opacity: isLoaded ? 0.4 : 0,
              transition: "opacity 1s ease-out 1.5s"
            }}
          >
            <div className="w-1 h-1 rounded-full bg-ivory/50 mb-2" />
            <div className="w-[1px] h-16 bg-gradient-to-b from-ivory/30 to-transparent" />
          </div>
        </div>
      </section>

      {/* ===== CRAFT PRINCIPLES STRIP ===== */}
      <section className="relative py-8 bg-ivory overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="flex items-center gap-12 mx-12">
              {craftPrinciples.map((principle, j) => (
                <span key={j} className="flex items-center gap-8">
                  <span className="text-lg md:text-xl font-heading text-[#0E0E0E] tracking-wide">
                    {principle.title}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C6A46A]" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ===== COLLECTIONS SECTION ===== */}
      <section ref={collectionRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Subtle grid background */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px',
          }}
        />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
              <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono uppercase">
                Collections
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory mb-4">
              Furniture for every
              <span className="text-ivory/40"> room.</span>
            </h2>
            <p className="text-base md:text-lg text-ivory/50 max-w-lg">
              Each piece thoughtfully designed to complement your space and lifestyle.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {furnitureCollections.map((collection, index) => (
              <div
                key={collection.name}
                className={`group relative overflow-hidden rounded-sm transition-all duration-700 ${
                  activeCollection >= index ? 'opacity-100 translate-y-0' : 'opacity-40 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/50 to-transparent" />
                  
                  {/* Corner accents */}
                  <div className="absolute top-4 left-4 w-6 h-6 border-l border-t border-[#C6A46A]/40 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
                  <div className="absolute bottom-4 right-4 w-6 h-6 border-r border-b border-[#C6A46A]/40 transition-all duration-500 group-hover:w-8 group-hover:h-8" />
                </div>

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Stat */}
                  <div className="absolute top-6 right-6 text-right">
                    <div className="text-2xl md:text-3xl font-heading text-[#C6A46A]">{collection.stat}</div>
                    <div className="text-[10px] text-ivory/50 tracking-wider uppercase">{collection.statLabel}</div>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-4xl font-heading text-ivory mb-2 group-hover:text-[#C6A46A] transition-colors duration-300">
                    {collection.name}
                  </h3>
                  <p className="text-sm text-ivory/50 italic mb-4">{collection.tagline}</p>

                  {/* Pieces list */}
                  <div className="flex flex-wrap gap-2">
                    {collection.pieces.map((piece, i) => (
                      <span 
                        key={i}
                        className="text-[10px] tracking-wider uppercase text-ivory/40 px-3 py-1 border border-ivory/10 rounded-full"
                      >
                        {piece}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SIGNATURE PIECES ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[#0A0A0A]">
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-[1px] bg-[#C6A46A]/50" />
                <span className="text-[10px] tracking-[0.3em] text-[#C6A46A]/70 font-mono uppercase">
                  Signature Pieces
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-ivory">
                Objects of <span className="italic text-[#C6A46A]">permanence.</span>
              </h2>
            </div>
            <Link 
              to="/contact"
              className="group flex items-center gap-3 text-sm text-ivory/50 hover:text-[#C6A46A] transition-colors"
            >
              Request Custom Design
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>

          {/* Pieces Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {signaturePieces.map((piece, index) => (
              <div
                key={piece.name}
                className="group relative"
                onMouseEnter={() => setHoveredPiece(index)}
                onMouseLeave={() => setHoveredPiece(null)}
              >
                <div className={`relative overflow-hidden aspect-[3/4] rounded-sm border transition-all duration-500 ${
                  hoveredPiece === index 
                    ? 'border-[#C6A46A]/50 shadow-[0_0_40px_rgba(198,164,106,0.15)]' 
                    : 'border-ivory/10'
                }`}>
                  {/* Image */}
                  <img 
                    src={piece.image}
                    alt={piece.name}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-0 p-5 flex flex-col justify-end">
                    <span className="text-[10px] tracking-[0.2em] uppercase text-[#C6A46A]/80 mb-2">
                      {piece.material}
                    </span>
                    <h3 className="text-xl md:text-2xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                      {piece.name}
                    </h3>
                    
                    {/* Description - appears on hover */}
                    <p className={`text-xs text-ivory/50 mt-2 transition-all duration-500 ${
                      hoveredPiece === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                    }`}>
                      {piece.description}
                    </p>
                  </div>

                  {/* Corner accent on hover */}
                  <div className={`absolute top-3 right-3 w-5 h-5 border-t border-r border-[#C6A46A]/50 transition-all duration-500 ${
                    hoveredPiece === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                  }`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CRAFT PHILOSOPHY ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-1/4 w-1/2 h-1/2 bg-[#C6A46A]/3 blur-[150px]" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Section Label */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-[#C6A46A]/50" />
              <span className="text-[10px] tracking-[0.4em] text-[#C6A46A]/70 font-mono uppercase">
                Our Approach
              </span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-[#C6A46A]/50" />
            </div>

            {/* Principles */}
            <div className="space-y-12">
              {craftPrinciples.map((principle, index) => (
                <div 
                  key={principle.title}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 py-8 border-b border-ivory/10 hover:border-[#C6A46A]/30 transition-colors duration-500"
                >
                  <span className="text-xs font-mono text-[#C6A46A]/50">0{index + 1}</span>
                  <h3 className="text-2xl md:text-3xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                    {principle.title}
                  </h3>
                  <p className="text-ivory/50 md:ml-auto md:text-right max-w-xs">
                    {principle.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CLOSING STATEMENT ===== */}
      <section className="relative py-32 md:py-40 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920&q=80"
            alt="Craftsmanship detail"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0E0E0E] via-[#0E0E0E]/95 to-[#0E0E0E]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          {/* Decorative element */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center gap-4">
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#C6A46A]/50" />
              <div className="w-2 h-2 rotate-45 border border-[#C6A46A]/50" />
              <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#C6A46A]/50" />
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-2xl md:text-3xl lg:text-4xl font-heading text-ivory leading-relaxed mb-12">
            "Good furniture disappears into daily life,
            <span className="text-ivory/50"> becoming part of </span>
            <span className="text-[#C6A46A] italic">how you live.</span>"
          </blockquote>

          <div className="flex items-center justify-center gap-4 text-ivory/40 mb-16">
            <span className="h-px w-10 bg-ivory/20" />
            <span className="text-xs tracking-[0.15em] uppercase">EdgeHomes Furniture</span>
            <span className="h-px w-10 bg-ivory/20" />
          </div>

          {/* CTA */}
          <Link 
            to="/contact"
            className="group inline-flex items-center gap-4 bg-[#C6A46A] text-[#0E0E0E] px-8 py-4 text-sm tracking-wider font-medium hover:bg-ivory transition-colors duration-500"
          >
            Start Your Commission
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>

      {/* ===== NAVIGATION ===== */}
      <section className="py-16 border-t border-ivory/10">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <Link 
              to="/services/interior" 
              className="group text-ivory/40 hover:text-ivory transition-colors duration-500"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase block mb-2">Previous</span>
              <span className="text-xl font-heading flex items-center gap-2">
                <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
                Interior Design
              </span>
            </Link>
            <Link 
              to="/services/architecture" 
              className="group text-ivory/40 hover:text-ivory transition-colors duration-500 text-right"
            >
              <span className="text-[10px] font-mono tracking-[0.2em] uppercase block mb-2">Next</span>
              <span className="text-xl font-heading flex items-center gap-2">
                Architecture
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Furniture;
