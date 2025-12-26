import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  
  const location = useLocation();
  const isAboutPage = location.pathname === "/about";
  const isServicePage = location.pathname.startsWith("/services");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const serviceItems = [
    { label: "Architecture", href: "/services/architecture" },
    { label: "Construction", href: "/services/construction" },
    { label: "Interior", href: "/services/interior" },
    { label: "Furniture", href: "/services/furniture" },
  ];

  const menuItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Process", href: "/#method", isRoute: false },
    { label: "Social", href: "/social", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
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
          <Link to="/" className="group relative">
            <span className="text-2xl md:text-3xl font-heading font-bold text-primary transition-all duration-500 group-hover:text-shimmer">
              EdgeHomes
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-gold-light group-hover:w-full transition-all duration-500" />
          </Link>

          {/* Desktop Menu with active indicators */}
          <ul className="hidden md:flex items-center gap-1">
            {menuItems.slice(0, 2).map((item) => (
              <li key={item.label}>
                <Link
                  to={item.href}
                  className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 group ${
                    location.pathname === item.href 
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                  {location.pathname === item.href && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </Link>
              </li>
            ))}

            {/* Services Dropdown */}
            <li ref={servicesRef} className="relative">
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 group flex items-center gap-1 ${
                  isServicePage 
                    ? 'text-primary' 
                    : 'text-foreground/70 hover:text-foreground'
                }`}
              >
                <span className="relative z-10">Services</span>
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`}
                />
                <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                {isServicePage && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                )}
              </button>

              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 ${
                  isServicesOpen 
                    ? 'opacity-100 translate-y-0 pointer-events-auto' 
                    : 'opacity-0 -translate-y-2 pointer-events-none'
                }`}
              >
                {serviceItems.map((service, index) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    onClick={() => setIsServicesOpen(false)}
                    className={`block px-5 py-3 text-sm tracking-wider transition-all duration-300 ${
                      location.pathname === service.href
                        ? 'text-primary bg-primary/10'
                        : 'text-foreground/70 hover:text-foreground hover:bg-primary/5'
                    }`}
                    style={{ transitionDelay: `${index * 30}ms` }}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </li>

            {menuItems.slice(2).map((item) => (
              <li key={item.label}>
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 group ${
                      location.pathname === item.href 
                        ? 'text-primary' 
                        : 'text-foreground/70 hover:text-foreground'
                    }`}
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                    {location.pathname === item.href && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="relative px-5 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 group text-foreground/70 hover:text-foreground"
                  >
                    <span className="relative z-10">{item.label}</span>
                    <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                  </a>
                )}
              </li>
            ))}
            
            {/* CTA Button */}
            <li className="ml-4">
              <Link
                to="/contact"
                className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm uppercase tracking-wider font-medium hover:bg-primary/20 hover:border-primary/60 transition-all duration-500"
              >
                Get Quote
              </Link>
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
          isMobileMenuOpen ? 'max-h-[500px] opacity-100 mt-6' : 'max-h-0 opacity-0'
        }`}>
          <ul className="space-y-2 pb-4">
            {menuItems.slice(0, 2).map((item, index) => (
              <li 
                key={item.label}
                style={{ transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms' }}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
              >
                <Link
                  to={item.href}
                  className="block py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            {/* Mobile Services Accordion */}
            <li 
              style={{ transitionDelay: isMobileMenuOpen ? '100ms' : '0ms' }}
              className={`transform transition-all duration-500 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
              }`}
            >
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className="w-full flex items-center justify-between py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
              >
                Services
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'
              }`}>
                {serviceItems.map((service) => (
                  <Link
                    key={service.label}
                    to={service.href}
                    className="block py-2 px-8 text-foreground/70 hover:text-primary transition-all duration-300 text-sm tracking-wide"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      setIsMobileServicesOpen(false);
                    }}
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </li>

            {menuItems.slice(2).map((item, index) => (
              <li 
                key={item.label}
                style={{ transitionDelay: isMobileMenuOpen ? `${(index + 3) * 50}ms` : '0ms' }}
                className={`transform transition-all duration-500 ${
                  isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
                }`}
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className="block py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="block py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
