import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Play, ExternalLink, Heart, MessageCircle, Share2, ArrowRight } from "lucide-react";

// Instagram Reels data
const reels = [
  {
    id: "DSKVHqdAZ7x",
    embedUrl: "https://www.instagram.com/reel/DSKVHqdAZ7x/embed",
    link: "https://www.instagram.com/reel/DSKVHqdAZ7x/",
    title: "Latest Project Reveal",
  },
  {
    id: "DSjvt2LARR1",
    embedUrl: "https://www.instagram.com/reel/DSjvt2LARR1/embed",
    link: "https://www.instagram.com/reel/DSjvt2LARR1/",
    title: "Design Process",
  },
  {
    id: "DRotV-1AQI-",
    embedUrl: "https://www.instagram.com/reel/DRotV-1AQI-/embed",
    link: "https://www.instagram.com/reel/DRotV-1AQI-/",
    title: "Before & After",
  },
  {
    id: "DRg8cTLAXIK",
    embedUrl: "https://www.instagram.com/reel/DRg8cTLAXIK/embed",
    link: "https://www.instagram.com/reel/DRg8cTLAXIK/",
    title: "Craftsmanship",
  },
];

// Floating particles for background
const FloatingParticle = ({ delay, size, duration, left, top }: { delay: number; size: number; duration: number; left: string; top: string }) => (
  <div
    className="absolute rounded-full bg-gradient-to-br from-primary/20 to-primary/5 blur-sm"
    style={{
      width: size,
      height: size,
      left,
      top,
      animation: `float ${duration}s ease-in-out infinite`,
      animationDelay: `${delay}s`,
    }}
  />
);

const Social = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);
  const [activeReel, setActiveReel] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    delay: i * 0.5,
    size: Math.random() * 80 + 40,
    duration: Math.random() * 4 + 6,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
  }));

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((p, i) => (
            <FloatingParticle key={i} {...p} />
          ))}
        </div>

        {/* Instagram gradient glow */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div 
            className="w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
            style={{
              background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
            }}
          />
        </div>

        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary) / 0.5) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--primary) / 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center pt-24">
          {/* Instagram icon with glow */}
          <div 
            className="inline-flex items-center justify-center mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.8)',
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
            }}
          >
            <div className="relative">
              <div 
                className="absolute inset-0 rounded-3xl blur-xl opacity-60"
                style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                }}
              />
              <div className="relative w-24 h-24 rounded-3xl flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]">
                <Instagram className="w-12 h-12 text-white" />
              </div>
            </div>
          </div>

          {/* Handle */}
          <div 
            className="mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.4s',
            }}
          >
            <a 
              href="https://www.instagram.com/edgehomes_architects/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
            >
              <span className="text-lg md:text-xl font-medium">@edgehomes_architects</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Main heading */}
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
              transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
            }}
          >
            Behind the
            <br />
            <span className="text-shimmer italic">Design</span>
          </h1>

          {/* Subtitle */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto mb-10"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 0.8s ease-out 0.7s',
            }}
          >
            Follow our journey as we craft extraordinary spaces. 
            Peek behind the scenes of luxury interior design.
          </p>

          {/* Stats */}
          <div 
            className="flex items-center justify-center gap-8 md:gap-16"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.9s',
            }}
          >
            {[
              { value: "500+", label: "Projects Shared" },
              { value: "10K+", label: "Design Lovers" },
              { value: "Daily", label: "Inspiration" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-2xl md:text-3xl font-heading text-primary mb-1">{stat.value}</div>
                <div className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Follow button */}
          <a
            href="https://www.instagram.com/edgehomes_architects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-12 px-8 py-4 rounded-full text-white font-medium transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(220,39,67,0.3)]"
            style={{
              background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 1.1s, transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>

        {/* Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          style={{
            opacity: isLoaded ? 0.5 : 0,
            transition: 'opacity 1s ease-out 1.5s',
          }}
        >
          <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-muted-foreground to-transparent" />
        </div>
      </section>

      {/* ===== REELS SECTION ===== */}
      <section ref={sectionRef} className="relative py-24 md:py-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary" />
              <Play className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-[0.4em] uppercase text-primary">Featured Reels</span>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              Watch Our <span className="text-shimmer">Story</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Quick glimpses into our design process, project reveals, and the craftsmanship that defines EdgeHomes.
            </p>
          </div>

          {/* Reels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className="group relative"
                onMouseEnter={() => setHoveredReel(index)}
                onMouseLeave={() => setHoveredReel(null)}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(40px)',
                  transition: `all 0.8s ease-out ${0.2 + index * 0.1}s`,
                }}
              >
                {/* Card container */}
                <div className={`relative overflow-hidden rounded-3xl border transition-all duration-500 ${
                  hoveredReel === index 
                    ? 'border-primary/50 shadow-[0_0_60px_hsl(var(--primary)/0.2)]' 
                    : 'border-border/30 hover:border-primary/30'
                }`}>
                  {/* Aspect ratio container for reel */}
                  <div className="relative aspect-[9/16] bg-card">
                    {/* Instagram Embed iframe */}
                    <iframe
                      src={reel.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      loading="lazy"
                      title={reel.title}
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60 pointer-events-none" />
                    
                    {/* Play button overlay - visible when not hovering */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-background/40 backdrop-blur-sm transition-all duration-500 pointer-events-none ${
                      hoveredReel === index ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                        <Play className="w-6 h-6 text-white fill-white ml-1" />
                      </div>
                    </div>
                  </div>

                  {/* Reel info footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background to-transparent">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-foreground/90">{reel.title}</span>
                      <a 
                        href={reel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 text-xs text-primary hover:underline"
                      >
                        View
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                  {/* Engagement icons */}
                  <div className={`absolute right-3 bottom-20 flex flex-col items-center gap-4 transition-all duration-500 ${
                    hoveredReel === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
                  }`}>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Heart className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors">
                      <Share2 className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>

                {/* Glow effect on hover */}
                <div className={`absolute -inset-1 rounded-3xl transition-opacity duration-500 -z-10 ${
                  hoveredReel === index ? 'opacity-100' : 'opacity-0'
                }`} style={{
                  background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                  filter: 'blur(20px)',
                  opacity: hoveredReel === index ? 0.3 : 0,
                }} />
              </div>
            ))}
          </div>

          {/* View all CTA */}
          <div className="text-center mt-16">
            <a
              href="https://www.instagram.com/edgehomes_architects/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-primary/30 text-primary hover:bg-primary/10 hover:border-primary/60 transition-all duration-500"
            >
              <span className="font-medium tracking-wider">View All Reels</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== INSTAGRAM FEED EMBED ===== */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
        
        {/* Corner decorations */}
        <div className="absolute top-20 left-10 w-32 h-32 border-l-2 border-t-2 border-primary/10" />
        <div className="absolute bottom-20 right-10 w-32 h-32 border-r-2 border-b-2 border-primary/10" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="text-primary text-xs tracking-[0.4em] uppercase mb-4 block">
              Stay Connected
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              Join Our <span className="text-shimmer">Community</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Get daily design inspiration, behind-the-scenes content, and be the first to see our latest projects.
            </p>
          </div>

          {/* Large Instagram profile card */}
          <div className="max-w-3xl mx-auto">
            <div className="relative rounded-3xl border border-border/30 overflow-hidden bg-card/50 backdrop-blur-sm">
              {/* Header gradient */}
              <div 
                className="h-32 md:h-40"
                style={{
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 20%, #dc2743 40%, #cc2366 60%, #bc1888 80%, #8134af 100%)',
                }}
              />

              {/* Profile content */}
              <div className="relative px-8 pb-8">
                {/* Avatar */}
                <div className="absolute -top-16 left-8">
                  <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl border-4 border-card bg-card overflow-hidden shadow-2xl">
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                      <span className="text-4xl font-heading text-primary">EH</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-20 md:pt-16 md:pl-40">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-heading text-foreground mb-1">EdgeHomes Architects</h3>
                      <p className="text-primary text-sm mb-4">@edgehomes_architects</p>
                      <p className="text-muted-foreground max-w-md leading-relaxed">
                        🏠 Premium Interior Design & Architecture
                        <br />
                        📍 Delhi NCR
                        <br />
                        ✨ Crafting dream spaces since 2015
                      </p>
                    </div>

                    <a
                      href="https://www.instagram.com/edgehomes_architects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-white font-medium transition-all duration-300 hover:scale-105 shrink-0"
                      style={{
                        background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
                      }}
                    >
                      <Instagram className="w-4 h-4" />
                      Follow
                    </a>
                  </div>

                  {/* Stats row */}
                  <div className="flex items-center gap-8 mt-8 pt-8 border-t border-border/30">
                    {[
                      { value: "500+", label: "Posts" },
                      { value: "10K+", label: "Followers" },
                      { value: "200+", label: "Projects" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-xl md:text-2xl font-heading text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-20">
            <div className="inline-flex flex-col md:flex-row items-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_40px_hsl(var(--primary)/0.4)] transition-all duration-500"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
              <span className="text-muted-foreground text-sm">or</span>
              <a
                href="https://www.instagram.com/edgehomes_architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                DM us on Instagram
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* CSS for floating animation */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
    </div>
  );
};

export default Social;
