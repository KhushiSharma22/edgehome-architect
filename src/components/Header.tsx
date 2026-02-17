import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Phone, MessageCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const PHONE_NUMBER = "+919871522556";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const [isMobileProjectsOpen, setIsMobileProjectsOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const location = useLocation();
  const isServicePage = location.pathname.startsWith("/services");
  const isProjectPage = location.pathname.startsWith("/projects");

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
      if (projectsRef.current && !projectsRef.current.contains(event.target as Node)) {
        setIsProjectsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const serviceItems = [
    { label: "Architecture", href: "/services/architecture" },
    { label: "Construction", href: "/services/construction" },
    { label: "Interior", href: "/services/interior" },
    { label: "Furniture", href: "/services/furniture" },
  ];

  const projectItems = [
    { label: "Elevations", href: "/projects/elevations" },
  ];

  const menuItems = [
    { label: "Home", href: "/", isRoute: true },
    { label: "About", href: "/about", isRoute: true },
    { label: "Social", href: "/social", isRoute: true },
    { label: "Contact", href: "/contact", isRoute: true },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileProjectsOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled 
            ? "py-2 sm:py-3 bg-background/80 backdrop-blur-2xl border-b border-border/20 shadow-[0_10px_40px_rgba(0,0,0,0.3)]" 
            : "py-3 sm:py-4 lg:py-6 bg-transparent"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            {/* Logo with animated underline */}
            <Link to="/" className="group relative flex items-baseline gap-0.5 sm:gap-1">
              <span className="text-xl sm:text-2xl md:text-3xl font-heading font-bold tracking-tight transition-all duration-500">
                <span className="text-primary">Edge</span>
                <span className="text-foreground">homes</span>
              </span>
              <span className="text-[8px] sm:text-[10px] md:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] text-primary/80 font-medium -translate-y-0.5">
                Architects
              </span>
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary via-primary/60 to-transparent group-hover:w-full transition-all duration-700 ease-out" />
            </Link>

            {/* Desktop Menu with active indicators */}
            <ul className="hidden lg:flex items-center gap-1">
              {menuItems.slice(0, 2).map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={`relative px-4 xl:px-5 py-2 text-sm uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-500 group ${
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
                  className={`relative px-4 xl:px-5 py-2 text-sm uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-500 group flex items-center gap-1 ${
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
                  className={`absolute top-full left-0 mt-2 min-w-[200px] bg-card/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-300 z-50 ${
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

              {/* Projects Dropdown */}
              <div className="relative group" ref={projectsRef}>
                <button
                  onMouseEnter={() => !isMobileMenuOpen && setIsProjectsOpen(true)}
                  onMouseLeave={(e) => {
                    // Small delay to allow moving to dropdown
                    const target = e.relatedTarget as HTMLElement;
                    if (!target?.closest('.projects-dropdown')) {
                      setTimeout(() => {
                        const isHoveringDropdown = document.querySelector('.projects-dropdown:hover');
                        const isHoveringButton = (e.currentTarget as HTMLElement).matches(':hover');
                        if (!isHoveringDropdown && !isHoveringButton) {
                          setIsProjectsOpen(false);
                        }
                      }, 100);
                    }
                  }}
                  onClick={() => {
                    if (window.innerWidth < 1024) { // Only toggle on mobile
                      setIsProjectsOpen(!isProjectsOpen);
                    } else {
                      setIsProjectsOpen(true); // Keep open on desktop when clicked
                    }
                  }}
                  className={`relative px-4 xl:px-5 py-2 text-sm uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-300 ease-out group flex items-center gap-1 ${
                    isProjectPage || isProjectsOpen
                      ? 'text-primary' 
                      : 'text-foreground/70 hover:text-foreground'
                  }`}
                  aria-expanded={isProjectsOpen}
                  aria-haspopup="true"
                >
                  <span className="relative z-10">Projects</span>
                  <ChevronDown 
                    size={14} 
                    className={`transition-transform duration-300 ease-out ${isProjectsOpen ? 'rotate-180' : ''}`}
                    aria-hidden="true"
                  />
                  <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-300 ease-out" />
                  {(isProjectPage || isProjectsOpen) && (
                    <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full animate-pulse" />
                  )}
                </button>

                {/* Dropdown Menu */}
                <motion.div 
                  initial={false}
                  animate={{
                    opacity: isProjectsOpen ? 1 : 0,
                    y: isProjectsOpen ? 0 : -10,
                    scale: isProjectsOpen ? 1 : 0.98,
                    pointerEvents: isProjectsOpen ? 'auto' : 'none',
                    display: isProjectsOpen ? 'block' : 'none', // Ensure it doesn't block hover when hidden
                  }}
                  transition={{
                    duration: 0.2,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="projects-dropdown absolute top-full left-0 mt-2 min-w-[220px] bg-card/95 backdrop-blur-xl border border-border/30 rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] overflow-hidden z-50 origin-top-left"
                  onMouseEnter={() => !isMobileMenuOpen && setIsProjectsOpen(true)}
                  onMouseLeave={() => {
                    if (!isMobileMenuOpen) {
                      const isHoveringButton = document.querySelector('li.group > button:hover');
                      if (!isHoveringButton) {
                        setIsProjectsOpen(false);
                      }
                    }
                  }}
                >
                  <div className="py-1.5">
                    {projectItems.map((project, index) => (
                      <Link
                        key={project.label}
                        to={project.href}
                        onClick={() => {
                          setIsProjectsOpen(false);
                          closeMobileMenu();
                        }}
                        className={`block px-5 py-2.5 text-sm tracking-wider transition-all duration-200 ease-out ${
                          location.pathname === project.href
                            ? 'text-primary bg-primary/10 font-medium'
                            : 'text-foreground/80 hover:text-foreground hover:bg-primary/5'
                        }`}
                        style={{
                          transform: isProjectsOpen ? 'translateX(0)' : 'translateX(-5px)',
                          opacity: isProjectsOpen ? 1 : 0,
                          transition: `all 0.2s ease-out ${index * 0.03}s`,
                        }}
                      >
                        {project.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>

              {menuItems.slice(2).map((item) => (
                <li key={item.label}>
                  {item.isRoute ? (
                    <Link
                      to={item.href}
                      className={`relative px-4 xl:px-5 py-2 text-sm uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-500 group ${
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
                      className="relative px-4 xl:px-5 py-2 text-sm uppercase tracking-[0.15em] xl:tracking-[0.2em] font-medium transition-all duration-500 group text-foreground/70 hover:text-foreground"
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute inset-0 rounded-full bg-primary/0 group-hover:bg-primary/10 transition-all duration-500" />
                    </a>
                  )}
                </li>
              ))}
              
              {/* CTA Button */}
              <li className="ml-3 xl:ml-4">
                <Link
                  to="/contact"
                  className="px-5 xl:px-6 py-2 xl:py-2.5 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm uppercase tracking-wider font-medium hover:bg-primary/20 hover:border-primary/60 transition-all duration-500"
                >
                  Get Quote
                </Link>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`transition-all duration-300 ${isMobileMenuOpen ? 'rotate-180' : ''}`}>
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </span>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar Overlay */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] lg:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMobileMenu}
      />

      {/* Mobile Sidebar */}
      <aside 
        className={`fixed top-0 right-0 h-full w-[280px] sm:w-[320px] bg-background border-l border-border/30 z-[70] lg:hidden transition-transform duration-500 ease-out overflow-y-auto ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border/20">
          <Link to="/" onClick={closeMobileMenu} className="flex items-baseline gap-0.5">
            <span className="text-xl font-heading font-bold">
              <span className="text-primary">Edge</span>
              <span className="text-foreground">homes</span>
            </span>
          </Link>
          <button
            onClick={closeMobileMenu}
            className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-all"
            aria-label="Close menu"
          >
            <X size={18} />
          </button>
        </div>

        {/* Sidebar Content */}
        <div className="p-4 sm:p-6">
          <ul className="space-y-1">
            {menuItems.slice(0, 2).map((item, index) => (
              <li 
                key={item.label}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${index * 50 + 100}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                }}
                className="transition-all duration-300"
              >
                <Link
                  to={item.href}
                  className={`flex items-center py-3 px-4 rounded-xl font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                    location.pathname === item.href 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                  onClick={closeMobileMenu}
                >
                  {item.label}
                  {location.pathname === item.href && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              </li>
            ))}

            {/* Mobile Services Accordion */}
            <li 
              style={{ 
                transitionDelay: isMobileMenuOpen ? '200ms' : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
              }}
              className="transition-all duration-300"
            >
              <button
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                  isServicePage 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  Services
                  {isServicePage && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileServicesOpen ? 'max-h-[200px] opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 border-l-2 border-primary/20 ml-4 space-y-1">
                  {serviceItems.map((service) => (
                    <Link
                      key={service.label}
                      to={service.href}
                      className={`block py-2.5 px-4 rounded-lg text-sm tracking-wide transition-all duration-300 ${
                        location.pathname === service.href
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {service.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {/* Mobile Projects Accordion */}
            <li 
              style={{ 
                transitionDelay: isMobileMenuOpen ? '250ms' : '0ms',
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
              }}
              className="transition-all duration-300"
            >
              <button
                onClick={() => setIsMobileProjectsOpen(!isMobileProjectsOpen)}
                className={`w-full flex items-center justify-between py-3 px-4 rounded-xl font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                  isProjectPage 
                    ? 'text-primary bg-primary/10' 
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                <span className="flex items-center gap-2">
                  Projects
                  {isProjectPage && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </span>
                <ChevronDown 
                  size={16} 
                  className={`transition-transform duration-300 ${isMobileProjectsOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${
                isMobileProjectsOpen ? 'max-h-[200px] opacity-100 mt-1' : 'max-h-0 opacity-0'
              }`}>
                <div className="pl-4 border-l-2 border-primary/20 ml-4 space-y-1">
                  {projectItems.map((project) => (
                    <Link
                      key={project.label}
                      to={project.href}
                      className={`block py-2.5 px-4 rounded-lg text-sm tracking-wide transition-all duration-300 ${
                        location.pathname === project.href
                          ? 'text-primary bg-primary/10'
                          : 'text-foreground/70 hover:text-primary hover:bg-primary/5'
                      }`}
                      onClick={closeMobileMenu}
                    >
                      {project.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            {menuItems.slice(2).map((item, index) => (
              <li 
                key={item.label}
                style={{ 
                  transitionDelay: isMobileMenuOpen ? `${(index + 3) * 50 + 100}ms` : '0ms',
                  opacity: isMobileMenuOpen ? 1 : 0,
                  transform: isMobileMenuOpen ? 'translateX(0)' : 'translateX(20px)'
                }}
                className="transition-all duration-300"
              >
                {item.isRoute ? (
                  <Link
                    to={item.href}
                    className={`flex items-center py-3 px-4 rounded-xl font-medium tracking-wider uppercase text-sm transition-all duration-300 ${
                      location.pathname === item.href 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                    {location.pathname === item.href && (
                      <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />
                    )}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    className="flex items-center py-3 px-4 rounded-xl text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium tracking-wider uppercase text-sm"
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>

          {/* Divider */}
          <div className="my-6 h-px bg-border/30" />

          {/* Quick Actions */}
          <div 
            className="space-y-3"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '400ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground px-4 mb-3">Quick Contact</p>
            
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="flex items-center gap-3 py-3 px-4 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-300"
            >
              <Phone size={18} />
              <span className="text-sm font-medium">Call Now</span>
            </a>
            
            <a
              href={buildWhatsAppLink(PHONE_NUMBER)}
              className="flex items-center gap-3 py-3 px-4 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-all duration-300"
            >
              <MessageCircle size={18} />
              <span className="text-sm font-medium">WhatsApp</span>
            </a>
          </div>

          {/* Get Quote Button */}
          <div 
            className="mt-6"
            style={{ 
              transitionDelay: isMobileMenuOpen ? '450ms' : '0ms',
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? 'translateY(0)' : 'translateY(10px)'
            }}
          >
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className="block w-full py-4 rounded-xl bg-primary text-primary-foreground text-center text-sm uppercase tracking-wider font-medium hover:bg-primary/90 transition-all duration-300"
            >
              Get Free Quote
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 border-t border-border/20 bg-background">
          <p className="text-[10px] text-muted-foreground text-center tracking-wide">
            © 2024 EdgeHomes Architects
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;
