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
      <section className="relative min-h-[70vh] sm:min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        
        {/* Minimal accent glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[600px] md:w-[800px] h-[400px] sm:h-[600px] md:h-[800px] rounded-full bg-primary/5 blur-[100px] md:blur-[150px]" />

        {/* Subtle grid */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                              linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Corner accents - hidden on mobile */}
        <div className="hidden sm:block absolute top-24 md:top-32 left-6 md:left-12 w-16 md:w-24 h-16 md:h-24 border-l border-t border-primary/20" />
        <div className="hidden sm:block absolute bottom-24 md:bottom-32 right-6 md:right-12 w-16 md:w-24 h-16 md:h-24 border-r border-b border-primary/20" />

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 relative z-10 text-center pt-20 sm:pt-24">
          {/* Instagram icon - refined */}
          <div 
            className="inline-flex items-center justify-center mb-6 sm:mb-10"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'all 0.8s ease-out 0.2s',
            }}
          >
            <div className="relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] shadow-lg">
                <Instagram className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
            </div>
          </div>

          {/* Handle with subtle styling */}
          <a 
            href="https://www.instagram.com/edgehomes_architects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-6 sm:mb-8 group"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.3s',
            }}
          >
            <span className="text-base sm:text-lg font-medium text-primary group-hover:text-primary/80 transition-colors">@edgehomes_architects</span>
            <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-primary/60" />
          </a>

          {/* Main heading - elegant typography */}
          <h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 sm:mb-6 leading-tight"
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
            className="text-sm sm:text-base md:text-lg text-muted-foreground max-w-sm sm:max-w-lg mx-auto mb-8 sm:mb-12 px-4 sm:px-0"
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
            className="flex items-center justify-center gap-0 mb-8 sm:mb-12"
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
                <div className="text-center px-4 sm:px-8 md:px-12">
                  <div className="text-xl sm:text-2xl md:text-3xl font-heading text-foreground mb-0.5 sm:mb-1">{stat.value}</div>
                  <div className="text-[8px] sm:text-[10px] text-muted-foreground tracking-[0.15em] sm:tracking-[0.2em] uppercase">{stat.label}</div>
                </div>
                {i < 2 && <div className="w-px h-8 sm:h-10 bg-border" />}
              </div>
            ))}
          </div>

          {/* Follow button - refined */}
          <a
            href="https://www.instagram.com/edgehomes_architects/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 sm:gap-3 px-6 py-3 sm:px-8 sm:py-4 rounded-full text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            style={{
              background: 'linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)',
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(15px)',
              transition: 'all 0.8s ease-out 0.7s, transform 0.3s ease, box-shadow 0.3s ease',
            }}
          >
            <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
            Follow on Instagram
          </a>
        </div>

        {/* Scroll hint - hidden on mobile */}
        <div 
          className="hidden sm:block absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2"
          style={{
            opacity: isLoaded ? 0.4 : 0,
            transition: 'opacity 1s ease-out 1s',
          }}
        >
          <div className="w-px h-10 md:h-12 bg-gradient-to-b from-muted-foreground/50 to-transparent" />
        </div>
      </section>

      {/* ===== REELS SECTION - Premium Cinematic Layout ===== */}
      <section ref={sectionRef} className="relative py-16 md:py-28 overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section header - cinematic */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 md:gap-6 mb-8 md:mb-14">
            <div>
              <div className="flex items-center gap-3 mb-3 md:mb-4">
                <div className="w-8 md:w-12 h-px bg-gradient-to-r from-primary to-transparent" />
                <Play className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                <span className="text-[10px] md:text-xs tracking-[0.2em] md:tracking-[0.3em] uppercase text-primary">Featured Reels</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading text-foreground leading-tight">
                Watch Our <span className="text-primary italic">Story</span>
              </h2>
            </div>
            <a
              href="https://www.instagram.com/edgehomes_architects/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-xs md:text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <span>View all reels</span>
              <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Reels Grid - Direct Instagram Links */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
            {reels.map((reel, index) => (
              <a
                key={reel.id}
                href={reel.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block"
                onMouseEnter={() => setHoveredReel(index)}
                onMouseLeave={() => setHoveredReel(null)}
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                  transition: `all 0.6s ease-out ${0.1 + index * 0.1}s`,
                }}
              >
                {/* Card */}
                <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl border-2 transition-all duration-500 ${
                  hoveredReel === index 
                    ? 'border-primary/60 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5),0_0_40px_rgba(199,163,107,0.15)]' 
                    : 'border-border/30 hover:border-border/50'
                }`}>
                  
                  {/* Reel preview card */}
                  <div className="relative aspect-[9/16] bg-gradient-to-br from-card via-muted to-card overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 opacity-30">
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-primary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                    
                    {/* Instagram branding strip */}
                    <div className="absolute top-0 left-0 right-0 p-3 sm:p-4 flex items-center justify-between bg-gradient-to-b from-background/80 to-transparent z-10">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-lg bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888] flex items-center justify-center">
                          <Instagram className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-white" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] text-foreground/80 font-medium tracking-wide">Reel</span>
                      </div>
                      <div className={`w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                        hoveredReel === index ? 'bg-primary/30' : 'bg-white/10'
                      }`}>
                        <ExternalLink className="w-3 h-3 text-white" />
                      </div>
                    </div>
                    
                    {/* Center play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`relative transition-all duration-500 ${
                        hoveredReel === index ? 'scale-110' : 'scale-100'
                      }`}>
                        {/* Outer ring */}
                        <div className={`absolute inset-0 rounded-full border-2 transition-all duration-700 ${
                          hoveredReel === index 
                            ? 'border-primary scale-150 opacity-0' 
                            : 'border-primary/30 scale-100 opacity-100'
                        }`} style={{ width: '60px', height: '60px', margin: '-10px' }} />
                        
                        {/* Main play button */}
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center backdrop-blur-xl transition-all duration-500 ${
                          hoveredReel === index 
                            ? 'bg-primary shadow-[0_0_40px_rgba(199,163,107,0.6)]' 
                            : 'bg-foreground/20 border border-foreground/20'
                        }`}>
                          <Play className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-300 ml-0.5 ${
                            hoveredReel === index ? 'text-primary-foreground scale-110' : 'text-foreground'
                          }`} fill={hoveredReel === index ? 'currentColor' : 'none'} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Bottom content */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-background via-background/90 to-transparent">
                      <div className={`transition-all duration-500 ${
                        hoveredReel === index ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-80'
                      }`}>
                        <h3 className="text-xs sm:text-sm font-heading text-foreground mb-1 line-clamp-1">{reel.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-[9px] sm:text-[10px] text-primary tracking-wide uppercase">Watch on Instagram</span>
                          <ArrowRight className={`w-2.5 h-2.5 sm:w-3 sm:h-3 text-primary transition-all duration-300 ${
                            hoveredReel === index ? 'translate-x-1' : ''
                          }`} />
                        </div>
                      </div>
                    </div>
                    
                    {/* Corner accents on hover */}
                    <div className={`absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-primary/50 rounded-tr-lg transition-all duration-500 ${
                      hoveredReel === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`} />
                    <div className={`absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-primary/50 rounded-bl-lg transition-all duration-500 ${
                      hoveredReel === index ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                    }`} />
                  </div>
                </div>
              </a>
            ))}
          </div>
          
          {/* View more CTA */}
          <div className="flex items-center justify-center mt-8 md:mt-12">
            <a
              href="https://www.instagram.com/edgehomes_architects/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full border border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              <Instagram className="w-4 h-4 text-primary" />
              <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-foreground transition-colors">Explore all reels on Instagram</span>
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-primary group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* ===== PROFILE SECTION - Refined Card ===== */}
      <section className="relative py-16 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          {/* Section label */}
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-3 md:mb-4">
              <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
              <span className="text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase text-primary">Stay Connected</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading text-foreground">
              Join Our Community
            </h2>
          </div>

          {/* Profile Card - Clean design */}
          <div className="max-w-2xl mx-auto">
            <div className="relative rounded-2xl md:rounded-3xl border border-border/40 overflow-hidden bg-card/80 backdrop-blur-sm">
              {/* Header with gradient */}
              <div 
                className="h-20 sm:h-24 md:h-28"
                style={{
                  background: 'linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)',
                }}
              />

              {/* Content */}
              <div className="relative px-4 sm:px-6 md:px-8 pb-6 sm:pb-8">
                {/* Avatar */}
                <div className="absolute -top-10 sm:-top-12 left-4 sm:left-6 md:left-8">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl border-4 border-card bg-card overflow-hidden shadow-lg">
                    <div className="w-full h-full bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center">
                      <span className="text-2xl sm:text-3xl font-heading text-primary">EH</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="pt-12 sm:pt-14 md:pt-14">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div>
                      <h3 className="text-lg sm:text-xl font-heading text-foreground mb-0.5">EdgeHomes Architects</h3>
                      <p className="text-sm text-primary">@edgehomes_architects</p>
                    </div>

                    <a
                      href="https://www.instagram.com/edgehomes_architects/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-white text-xs sm:text-sm font-medium transition-all duration-300 hover:scale-[1.02] shrink-0 w-full sm:w-auto"
                      style={{
                        background: 'linear-gradient(135deg, #f09433, #dc2743, #bc1888)',
                      }}
                    >
                      <Instagram className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Follow
                    </a>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4 sm:mb-6">
                    🏠 Premium Interior Design & Architecture<br />
                    📍 Delhi NCR | Pitampura<br />
                    ✨ Crafting dream spaces since 2015
                  </p>

                  {/* Stats */}
                  <div className="flex items-center gap-4 sm:gap-6 pt-4 sm:pt-6 border-t border-border/40">
                    {[
                      { value: "200+", label: "Posts" },
                      { value: "5K+", label: "Followers" },
                      { value: "100+", label: "Projects" },
                    ].map((stat, i) => (
                      <div key={i} className="text-center flex-1 sm:flex-none">
                        <div className="text-base sm:text-lg font-heading text-foreground">{stat.value}</div>
                        <div className="text-[9px] sm:text-[10px] text-muted-foreground tracking-wider uppercase">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-8 sm:mt-12">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-full bg-primary text-primary-foreground text-xs sm:text-sm font-medium hover:shadow-lg transition-all duration-300 w-full sm:w-auto justify-center"
              >
                Start Your Project
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <span className="text-muted-foreground text-xs sm:text-sm hidden sm:block">or</span>
              <a
                href="https://www.instagram.com/edgehomes_architects/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-primary hover:underline"
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
