import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <footer ref={ref} id="contact" className="relative bg-card overflow-hidden">
      {/* Static background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-56 h-56 bg-primary/3 rounded-full blur-[80px]" />
      </div>
      
      {/* Top decorative border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      
      <div className="container mx-auto px-6 py-24 relative z-10">
        {/* Main CTA Section */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-primary text-xs tracking-[0.5em] uppercase mb-6 block">
            Start Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-heading text-foreground mb-8 leading-[0.9]">
            Let's Create
            <br />
            <span className="text-shimmer italic">Something Beautiful</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto mb-10">
            Ready to transform your space? Get in touch for a free consultation.
          </p>
          
          {/* Contact buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="tel:+919871522556"
              className="group relative px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(199,163,107,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <Phone className="w-5 h-5" />
                Call Now
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
            <a 
              href="https://wa.me/919871522556"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 rounded-full border border-primary/50 text-primary font-semibold overflow-hidden transition-all duration-500 hover:bg-primary/10"
            >
              <span className="relative z-10 flex items-center gap-3">
                WhatsApp Us
                <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </span>
            </a>
          </div>
        </div>

        {/* Footer grid */}
        <div className={`grid md:grid-cols-4 gap-12 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-heading font-bold text-primary mb-4">
              EdgeHomes
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
              Delhi NCR's trusted architects and interior designers, crafting exceptional spaces with precision, passion, and professionalism.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }, index) => (
                <a
                  key={label}
                  href="#"
                  className="w-12 h-12 rounded-xl bg-muted/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                  aria-label={label}
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "Process", "Materials", "Contact"].map((link, index) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-px bg-primary group-hover:w-4 transition-all duration-300" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-6 tracking-wider uppercase">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground group">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">SCO - 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121101</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919871522556" className="group-hover:text-foreground transition-colors">+91 98715 22556</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+919971022556" className="group-hover:text-foreground transition-colors">+91 99710 22556</a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground group">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-foreground transition-colors">info@edgehomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className={`pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-sm text-muted-foreground">
            © 2024 EdgeHomes Architects & Construction. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground/60">
            Crafted with passion in Delhi
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
