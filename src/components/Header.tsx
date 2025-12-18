import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Track active section
      const sections = ["home", "signature", "method", "materials"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "#home" },
    { label: "Process", href: "#method" },
    { label: "Materials", href: "#materials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? "py-3 bg-background/80 backdrop-blur-2xl border-b border-border/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]" 
          : "py-6 bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo with animated underline */}
          <a href="#home" className="group relative">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary transition-all duration-500 group-hover:text-shimmer">
              EdgeHomes
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-gold-light group-hover:w-full transition-all duration-500" />
          </a>

          {/* Desktop Menu with active indicators */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.map((item, index) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 group ${
                    activeSection === item.href.slice(1) 
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Hover background */}
                  <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                  
                  {/* Active indicator dot */}
                  {activeSection === item.href.slice(1) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </a>
              </li>
            ))}
            
            {/* CTA Button */}
            <li className="ml-4">
              <a
                href="#contact"
                className="relative px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm uppercase tracking-wider font-medium overflow-hidden group hover:border-primary/60 transition-all duration-500"
              >
                <span className="relative z-10">Get Quote</span>
                <span className="absolute inset-0 bg-primary/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </a>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </span>
          </button>
        </div>

        {/* Mobile Menu with slide animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-80 opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <ul className="space-y-2 pb-4">
            {menuItems.map((item, index) => (
              <li 
                key={item.label}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                }}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
              >
                <a
                  href={item.href}
                  className="block py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
