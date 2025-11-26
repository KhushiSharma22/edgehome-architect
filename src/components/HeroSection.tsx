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
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center fade-in-up">
        <h1 className="text-5xl md:text-7xl font-heading font-bold text-foreground mb-6 tracking-tight">
          Luxury, Creative and<br />Comfortable Interiors
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-body">
          KR Construction – Faridabad's Premium Interior Designers
        </p>

        <Button variant="luxury" size="lg" className="mb-16">
          Book Your Consultation
        </Button>

        {/* Services Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.label}
              className="bg-secondary/50 backdrop-blur-sm border border-primary/20 rounded-lg p-6 smooth-transition hover:border-primary/60 hover:bg-secondary/70 fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <service.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-foreground text-sm font-body">{service.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
