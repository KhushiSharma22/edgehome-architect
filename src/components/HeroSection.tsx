import { Button } from "@/components/ui/button";
import { Home, PaintBucket, Wrench, Package } from "lucide-react";
import heroImage from "@/assets/hero-luxury-interior.jpg";

const HeroSection = () => {
  const services = [
    { icon: Home, label: "Architectural Design" },
    { icon: PaintBucket, label: "Interior Design" },
    { icon: Wrench, label: "Renovation" },
    { icon: Package, label: "Turnkey Solutions" },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center fade-in-up">
        {/* Premium Label */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary"></div>
          <p className="text-primary text-sm tracking-[0.3em] font-body uppercase">
            Premium Interior Designers
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-primary"></div>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-8 tracking-tight leading-tight">
          Professional Interior Design &<br />Construction Solutions
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-body max-w-2xl mx-auto">
          KR Construction – Pitampura, Delhi's Trusted Design & Build Partner
        </p>

        <Button 
          variant="luxury" 
          size="lg" 
          className="mb-20 font-semibold rounded-full px-10 py-6 text-base hover:scale-105 transition-transform shadow-[0_4px_20px_rgba(197,165,107,0.2)] hover:shadow-[0_8px_30px_rgba(197,165,107,0.3)]"
        >
          Get Free Consultation
        </Button>

        {/* Enhanced Services Bar with Glassmorphism */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="glass-card rounded-2xl p-6 smooth-transition hover:scale-[1.03] hover:shadow-[0_8px_30px_rgba(197,165,107,0.15)] group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 smooth-transition shadow-[0_0_20px_rgba(197,165,107,0.1)]">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <p className="text-foreground text-sm font-body font-medium">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
