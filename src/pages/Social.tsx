import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Instagram, Play, ExternalLink, ArrowRight, Sparkles } from "lucide-react";

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

const Social = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hoveredReel, setHoveredReel] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />

      {/* ===== HERO SECTION - Clean & Sophisticated ===== */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        
        {/* Minimal accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/5 blur-[150px]" />

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        />

        {/* Corner accents */}
        <div className="absolute top-32 left-12 w-24 h-24 border-l border-t border-primary/20" />
        <div className="absolute bottom-32 right-12 w-24 h-24 border-r border-b border-primary/20" />

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10 text-center pt-24">
          {/* Instagram icon - refined */}
          <div 
            className="inline-flex items-center justify-center mb-10"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div className="relative">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
                <Instagram className="w-10 h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Handle with subtle styling */}
          <a 
            href="https://www.instagram.com/edgehomes_architects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-8 group"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.3s',
            }}
          >
            <span className="text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">@edgehomes_architects</span>
            <ExternalLink className="w-4 h-4 text-primary/60" />
          </a>

          {/* Main heading - elegant typography */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-6 leading-tight"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
              transition: 'all 1s ease-out 0.4s',
            }}
          >
            Behind the <span className="text-primary italic">Design</span>
          </h1>

          {/* Subtitle - clean */}
          <p 
            className="text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.5s',
            }}
          >
            Follow our journey crafting extraordinary spaces across Delhi NCR.
          </p>

          {/* Stats - refined with dividers */}
          <div 
            className="flex items-center justify-center gap-0 mb-12"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.6s',
            }}
          >
            {[
              { value: "200+", label: "Posts" },
              { value: "5K+", label: "Followers" },
              { value: "100+", label: "Projects" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center">
                <div className="text-center px-8 md:px-12">
                  <div className="text-2xl md:text-3xl font-heading text-foreground mb-1">{stat.value}</div>
                  <div className="text-[10px] text-muted-foreground tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-10 bg-border" />}
              </div>
            ))}
          </div>

          {/* Follow button - refined */}
          <a
            href="https://www.instagram.com/edgehomes_architects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.7s, transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Instagram className="w-5 h-5" />
            Follow on Instagram
          </a>
        </div>

        {/* Scroll hint */}
        <div 
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
          style={{
            opacity: isLoaded ? 0.4 : 0,
            transition: 'opacity 1s ease-out 1s',
          }}
        >
          <div className="w-px h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </section>

      {/* ===== REELS SECTION - Clean Layout ===== */}
      <section ref={sectionRef} className="relative py-20 md:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-card/30" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section header - minimal */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Play className="w-4 h-4 text-primary" />
                <span className="text-xs tracking-[0.3em] uppercase text-primary">Featured Reels</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-heading text-foreground">
                Watch Our Story
              </h2>
            </div>
            <a
              href="https://www.instagram.com/edgehomes_architects/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>View all reels</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Reels Grid - Clean cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {reels.map((reel, index) => (
              <div
                key={reel.id}
                className="group relative"
                onMouseEnter={() => setHoveredReel(index)}
                onMouseLeave={() => setHoveredReel(null)}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${0.1 + index * 0.08}s`,
                }}
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-2xl border transition-all duration-400 ${
                  hoveredReel === index 
                    ? 'border-primary/40 shadow-lg' 
                    : 'border-border/40 hover:border-border'
                }`}>
                  {/* Reel embed */}
                  <div className="relative aspect-[9/16] bg-muted">
                    <iframe
                      src={reel.embedUrl}
                      className="absolute inset-0 w-full h-full"
                      frameBorder="0"
                      scrolling="no"
                      allowFullScreen
                      loading="lazy"
                      title={reel.title}
                    />
                    
                    {/* Subtle overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Play overlay */}
                    <div className={`absolute inset-0 flex items-center justify-center bg-background/30 backdrop-blur-[2px] transition-opacity duration-400 pointer-events-none ${
                      hoveredReel === index ? 'opacity-0' : 'opacity-100'
                    }`}>
                      <div className="w-14 h-14 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-medium text-white/90">{reel.title}</span>
                      <a 
                        href={reel.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[10px] text-white/60 hover:text-white transition-colors"
                      >
                        View →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROFILE SECTION - Refined Card ===== */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Section label */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-[0.3em] uppercase text-primary">Stay Connected</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-heading text-foreground">
              Join Our Community
            </h2>
          </div>

          {/* Profile Card - Clean design */}
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-2xl border border-border/40 overflow-hidden bg-card/80 backdrop-blur-sm">
              {/* Header with gradient */}
              <div 
                className="h-24 md:h-28"
                style={{
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              />

              {/* Content */}
              <div className="relative px-6 md:px-8 pb-8">
                {/* Avatar */}
                <div className="absolute -top-12 left-6 md:left-8">
                  <div className="w-24 h-24 rounded-xl border-4 border-card bg-card overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <span className="text-3xl font-heading text-primary">EH</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-16 md:pt-14">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-heading text-foreground mb-0.5">EdgeHomes Architects</h3>
                      <p className="text-sm text-primary">@edgehomes_architects</p>
                    </div>

                    <a
                      href="https://www.instagram.com/edgehomes_architects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-white text-sm font-medium transition-all duration-300 hover:scale-[1.02] shrink-0"
                      style={{
                        background: 'linear-gradient(135deg, #f09433, #dc2743, #bc1888)',
                      }}
                    >
                      <Instagram className="w-4 h-4" />
                      Follow
                    </a>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    🏠 Premium Interior Design & Architecture<br />
                    📍 Delhi NCR | Pitampura<br />
                    ✨ Crafting dream spaces since 2015
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-6 pt-6 border-t border-border/40">
                    {[
                      { value: "200+", label: "Posts" },
                      { value: "5K+", label: "Followers" },
                      { value: "100+", label: "Projects" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-heading text-foreground">{stat.value}</div>
                        <div className="text-[10px] text-muted-foreground tracking-wider uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:shadow-lg transition-all duration-300"
              >
                Start Your Project
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-muted-foreground text-sm">or</span>
              <a
                href="https://www.instagram.com/edgehomes_architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                DM us on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Social;
