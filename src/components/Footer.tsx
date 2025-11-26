import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-[hsl(25,20%,8%)] border-t border-primary/20 py-20 texture-linen relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16 relative">
          {/* Gold borders between columns (desktop) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          <div className="hidden md:block absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
          
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary mb-4">
              EdgeHomes
            </h3>
            <p className="text-muted-foreground/90 font-body text-sm leading-relaxed">
              Pitampura, Delhi's trusted architects and construction company, delivering quality projects with professionalism and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground/90 hover:text-primary smooth-transition font-body text-sm inline-block hover:translate-x-1"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 text-muted-foreground/90 font-body text-sm">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Renovation</li>
              <li>Turnkey Solutions</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-muted-foreground/90 font-body text-sm">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>Pitampura, Delhi, India</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground/90 font-body text-sm">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground/90 font-body text-sm">
                 <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span>info@edgehomes.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground/80 font-body text-sm">
            © 2024 EdgeHomes Architects and Construction. All rights reserved.
          </p>
          
          {/* Social Icons with Gold Styling */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 hover:border-primary smooth-transition hover:scale-110"
                aria-label={`Social link ${index + 1}`}
              >
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
