import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight } from "lucide-react";
import eggChair from "@/assets/egg-chair.png";
import pelicanChair from "@/assets/pelican-chair.png";
import furnitureHero from "@/assets/furniture-hero-luxury.jpg";
import livingCrazy from "@/assets/furniture-living-crazy.jpg";
import studyCrazy from "@/assets/furniture-study-crazy.jpg";

const Furniture = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeCollection, setActiveCollection] = useState(0);
  const [hoveredPiece, setHoveredPiece] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const collectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
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
      image: livingCrazy,
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
      image: studyCrazy,
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

      {/* ===== HERO SECTION - CRAZY DRAMATIC ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        {/* Dynamic cursor follower glow */}
        <div 
          className="fixed w-96 h-96 rounded-full pointer-events-none z-0 transition-all duration-300 ease-out"
          style={{
            left: mousePos.x - 192,
            top: mousePos.y - 192,
            background: 'radial-gradient(circle, rgba(198,164,106,0.08) 0%, transparent 70%)',
            opacity: isLoaded ? 1 : 0,
          }}
        />

        {/* Split layout */}
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-5">
          {/* Left dark section */}
          <div className="lg:col-span-2 relative bg-[#0A0A0A]">
            {/* Animated vertical lines */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute top-0 h-full w-px animate-line-grow"
                  style={{
                    left: `${20 * (i + 1)}%`,
                    background: `linear-gradient(to bottom, transparent, rgba(198,164,106,${0.05 + i * 0.02}) 50%, transparent)`,
                    animationDelay: `${i * 0.2}s`,
                  }}
                />
              ))}
            </div>
            
            {/* Floating geometric accents */}
            <div 
              className="absolute top-1/4 left-1/4 w-16 h-16 border border-[#C6A46A]/20 animate-spin-slow"
              style={{ animationDuration: '25s' }}
            />
            <div 
              className="absolute bottom-1/3 right-1/4 w-8 h-8 bg-[#C6A46A]/10 animate-pulse-glow"
            />
          </div>
          
          {/* Right image section */}
          <div className="lg:col-span-3 relative hidden lg:block">
            <img 
              src={furnitureHero}
              alt="Luxury furniture showroom"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                filter: 'brightness(0.8) contrast(1.1)',
                transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
                transition: 'transform 2s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            {/* Dramatic overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/30" />
            
            {/* Animated frame accents */}
            <div 
              className="absolute top-16 right-16 w-40 h-40 border border-[#C6A46A]/30"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translate(0,0) rotate(0deg)' : 'translate(30px,-30px) rotate(10deg)',
                transition: 'all 1.5s ease-out 1s',
              }}
            />
            <div 
              className="absolute bottom-24 right-24 w-24 h-24 border border-[#C6A46A]/20"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'rotate(45deg)' : 'rotate(0deg)',
                transition: 'all 1.2s ease-out 1.3s',
              }}
            />
            
            {/* Spotlight beams effect */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div 
                className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-[#C6A46A]/20 via-[#C6A46A]/5 to-transparent animate-beam"
                style={{ animationDelay: '0s' }}
              />
              <div 
                className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-[#C6A46A]/15 via-[#C6A46A]/5 to-transparent animate-beam"
                style={{ animationDelay: '0.5s' }}
              />
              <div 
                className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-[#C6A46A]/10 via-transparent to-transparent animate-beam"
                style={{ animationDelay: '1s' }}
              />
            </div>
          </div>
        </div>

        {/* Mobile background */}
        <div className="absolute inset-0 lg:hidden">
          <img 
            src={furnitureHero}
            alt="Luxury furniture"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/70 via-[#0A0A0A]/50 to-[#0A0A0A]" />
        </div>

        {/* Giant watermark text */}
        <div 
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[25vw] font-heading text-[#C6A46A]/[0.02] leading-none tracking-tighter whitespace-nowrap pointer-events-none select-none hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateX(10%)' : 'translateX(20%)',
            transition: 'all 2s ease-out 0.5s',
          }}
        >
          CRAFT
        </div>

        {/* Main content */}
        <div className="container mx-auto px-6 lg:px-12 relative z-10 pt-28 lg:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-5 items-center min-h-screen">
            <div className="lg:col-span-2 relative py-20">
              {/* Animated accent bar */}
              <div 
                className="absolute -top-4 left-0 h-1 bg-[#C6A46A]"
                style={{
                  width: isLoaded ? '100px' : '0',
                  transition: 'width 1s ease-out 0.5s',
                }}
              />
              
              {/* Breadcrumb with animation */}
              <nav 
                className="flex items-center gap-2 text-[10px] tracking-[0.2em] text-ivory/30 mb-12"
                style={{
                  opacity: isLoaded ? 0.5 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 0.8s ease-out 0.3s"
                }}
              >
                <Link to="/" className="hover:text-[#C6A46A] transition-colors">HOME</Link>
                <ChevronRight className="w-3 h-3" />
                <span>SERVICES</span>
                <ChevronRight className="w-3 h-3" />
                <span className="text-[#C6A46A]">FURNITURE</span>
              </nav>

              {/* Label with diamond */}
              <div 
                className="flex items-center gap-4 mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateX(0)" : "translateX(-30px)",
                  transition: "all 1s ease-out 0.5s"
                }}
              >
                <div className="w-2 h-2 bg-[#C6A46A] rotate-45 animate-pulse" />
                <span className="text-[11px] tracking-[0.5em] text-[#C6A46A] uppercase font-medium">
                  Bespoke Craftsmanship
                </span>
              </div>

              {/* MASSIVE Headline with stagger */}
              <h1 className="relative mb-10">
                <span 
                  className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory tracking-tight leading-[0.9]"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s"
                  }}
                >
                  Furniture
                </span>
                <span 
                  className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading text-ivory/60 tracking-tight leading-[0.9] mt-2"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.8s"
                  }}
                >
                  That Tells
                </span>
                <span 
                  className="block text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-heading tracking-tight leading-[0.9] mt-2"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? "translateY(0)" : "translateY(50px)",
                    transition: "all 1.2s cubic-bezier(0.16, 1, 0.3, 1) 1s"
                  }}
                >
                  <span className="relative inline-block">
                    <span className="text-[#C6A46A] italic animate-glow-text">Stories</span>
                    <div 
                      className="absolute -bottom-2 left-0 h-[3px] bg-[#C6A46A]"
                      style={{
                        width: isLoaded ? '100%' : '0',
                        transition: 'width 0.8s ease-out 1.5s',
                      }}
                    />
                  </span>
                </span>
              </h1>

              {/* Tagline */}
              <p 
                className="text-lg md:text-xl text-ivory/50 max-w-md leading-relaxed mb-10"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(30px)",
                  transition: "all 1s ease-out 1.2s"
                }}
              >
                Handcrafted pieces that transcend trends. Made for your space. Made to last generations.
              </p>

              {/* Stats row */}
              <div 
                className="flex items-start gap-10 mb-12"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s ease-out 1.4s"
                }}
              >
                {[
                  { value: "150", suffix: "+", label: "Pieces Crafted" },
                  { value: "100", suffix: "%", label: "Handmade" },
                  { value: "25", suffix: "YRS", label: "Warranty" },
                ].map((stat, i) => (
                  <div key={i} className="relative group">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-heading text-ivory group-hover:text-[#C6A46A] transition-colors duration-300">
                        {stat.value}
                      </span>
                      <span className="text-lg text-[#C6A46A]">{stat.suffix}</span>
                    </div>
                    <div className="text-[10px] text-ivory/40 tracking-[0.15em] uppercase mt-1">
                      {stat.label}
                    </div>
                    <div className="absolute -bottom-1 left-0 w-0 h-px bg-[#C6A46A] group-hover:w-full transition-all duration-300" />
                  </div>
                ))}
              </div>

              {/* CTA with shine effect */}
              <div 
                className="flex items-center gap-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? "translateY(0)" : "translateY(20px)",
                  transition: "all 1s ease-out 1.6s"
                }}
              >
                <Link
                  to="/contact"
                  className="group relative bg-[#C6A46A] text-[#0A0A0A] px-10 py-5 text-sm tracking-[0.2em] uppercase font-medium overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    Commission a Piece
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <div className="absolute inset-0 bg-ivory transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                </Link>
                
                <Link 
                  to="/" 
                  className="group flex items-center gap-3 text-ivory/60 hover:text-ivory transition-colors"
                >
                  <span className="text-sm tracking-wider">Our Portfolio</span>
                  <div className="w-8 h-px bg-ivory/30 group-hover:w-12 group-hover:bg-[#C6A46A] transition-all duration-300" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 hidden lg:block" />
          </div>
        </div>

        {/* Vertical text */}
        <div 
          className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out 2s"
          }}
        >
          <span 
            className="text-[10px] tracking-[0.4em] text-ivory/20 uppercase"
            style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
          >
            EdgeHomes Furniture
          </span>
        </div>

        {/* Animated scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 1s ease-out 2.2s"
          }}
        >
          <div className="relative w-[1px] h-20 bg-ivory/10 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-10 bg-[#C6A46A] animate-scroll-line" />
          </div>
          <span className="text-[8px] tracking-[0.4em] text-ivory/30 uppercase">Explore</span>
        </div>

        {/* Corner accents */}
        <div 
          className="absolute top-8 left-8 w-20 h-20 border-l border-t border-[#C6A46A]/30 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.5s ease-out 1s',
          }}
        />
        <div 
          className="absolute bottom-8 right-8 w-20 h-20 border-r border-b border-[#C6A46A]/30 hidden lg:block"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1.5s ease-out 1.2s',
          }}
        />
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

      {/* ===== COLLECTIONS SECTION - ENHANCED ===== */}
      <section ref={collectionRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.03] animate-grid-reveal"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(198,164,106,0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(198,164,106,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Floating orbs */}
        <div className="absolute top-20 right-[10%] w-40 h-40 rounded-full bg-[#C6A46A]/5 blur-3xl animate-float-slow" />
        <div className="absolute bottom-32 left-[15%] w-56 h-56 rounded-full bg-[#C6A46A]/3 blur-3xl animate-float-slow" style={{ animationDelay: '3s' }} />

        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header with animations */}
          <div className="mb-20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-[#C6A46A]/50 animate-expand-line" />
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

          {/* Collections Grid with enhanced animations */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {furnitureCollections.map((collection, index) => (
              <div
                key={collection.name}
                className={`group relative overflow-hidden rounded-sm transition-all duration-700 transform ${
                  activeCollection >= index 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-30 translate-y-12 scale-98'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Image with enhanced effects */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={collection.image}
                    alt={collection.name}
                    className={`w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 ${
                      activeCollection >= index ? 'filter-none' : 'grayscale'
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/50 to-transparent" />
                  
                  {/* Shine sweep on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Animated corner accents */}
                  <div className={`absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-[#C6A46A]/50 transition-all duration-500 group-hover:w-12 group-hover:h-12 ${
                    activeCollection >= index ? 'opacity-100' : 'opacity-0'
                  }`} />
                  <div className={`absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-[#C6A46A]/50 transition-all duration-500 group-hover:w-12 group-hover:h-12 ${
                    activeCollection >= index ? 'opacity-100' : 'opacity-0'
                  }`} style={{ transitionDelay: '100ms' }} />
                  
                  {/* Large number overlay */}
                  <div className={`absolute bottom-8 right-8 text-7xl font-heading text-[#C6A46A]/10 transition-all duration-500 group-hover:text-[#C6A46A]/20 ${
                    activeCollection >= index ? 'opacity-100' : 'opacity-0'
                  }`}>
                    0{index + 1}
                  </div>
                </div>

                {/* Content overlay with stagger */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                  {/* Stat with glow */}
                  <div className={`absolute top-6 right-6 text-right transition-all duration-500 ${
                    activeCollection >= index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                  }`}>
                    <div className="text-2xl md:text-3xl font-heading text-[#C6A46A] group-hover:animate-glow-text">{collection.stat}</div>
                    <div className="text-[10px] text-ivory/50 tracking-wider uppercase">{collection.statLabel}</div>
                  </div>

                  {/* Title with animation */}
                  <h3 className={`text-3xl md:text-4xl font-heading text-ivory mb-2 group-hover:text-[#C6A46A] transition-all duration-500 ${
                    activeCollection >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`}>
                    {collection.name}
                  </h3>
                  <p className={`text-sm text-ivory/50 italic mb-4 transition-all duration-500 ${
                    activeCollection >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                  }`} style={{ transitionDelay: '100ms' }}>
                    {collection.tagline}
                  </p>

                  {/* Pieces list with stagger */}
                  <div className="flex flex-wrap gap-2">
                    {collection.pieces.map((piece, i) => (
                      <span 
                        key={i}
                        className={`text-[10px] tracking-wider uppercase text-ivory/40 px-3 py-1 border border-ivory/10 rounded-full group-hover:border-[#C6A46A]/30 group-hover:text-ivory/60 transition-all duration-500 ${
                          activeCollection >= index ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}
                        style={{ transitionDelay: `${150 + i * 50}ms` }}
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

      <Footer />
    </div>
  );
};

export default Furniture;
