import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-heading font-bold text-primary mb-4">
              KR Construction
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Delhi's trusted construction and interior design company, delivering quality projects with professionalism and expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-muted-foreground hover:text-primary smooth-transition font-body text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Our Services
            </h4>
            <ul className="space-y-2 text-muted-foreground font-body text-sm">
              <li>Architectural Design</li>
              <li>Interior Design</li>
              <li>Renovation</li>
              <li>Turnkey Solutions</li>
              <li>Project Management</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-heading font-semibold text-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-muted-foreground font-body text-sm">
                <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                <span>Delhi, India</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                <span>+91 XXXXX XXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                <span>info@dzigntales.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © 2024 KR Construction. All rights reserved.
          </p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            {[Facebook, Instagram, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 smooth-transition"
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
