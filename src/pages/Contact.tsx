import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Architectural Background Layer
const ArchitecturalBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Deep base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#070707]" />
      
      {/* Blueprint grid - angled */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(199, 163, 107, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(199, 163, 107, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: 'rotate(-3deg) scale(1.2)',
        }}
      />
      
      {/* Secondary finer grid */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '15px 15px',
        }}
      />
      
      {/* Architectural outline - abstract building forms */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        {/* Structural lines */}
        <line x1="200" y1="0" x2="200" y2="1080" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="400" y1="100" x2="400" y2="900" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="1500" y1="0" x2="1500" y2="1080" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="1720" y1="200" x2="1720" y2="880" stroke="#C7A36B" strokeWidth="0.5" />
        
        {/* Horizontal architectural lines */}
        <line x1="0" y1="300" x2="600" y2="300" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="1400" y1="400" x2="1920" y2="400" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="0" y1="700" x2="500" y2="700" stroke="#C7A36B" strokeWidth="0.5" />
        <line x1="1300" y1="750" x2="1920" y2="750" stroke="#C7A36B" strokeWidth="0.5" />
        
        {/* Abstract building forms */}
        <rect x="100" y="200" width="150" height="400" fill="none" stroke="#C7A36B" strokeWidth="0.3" />
        <rect x="1650" y="300" width="120" height="350" fill="none" stroke="#C7A36B" strokeWidth="0.3" />
        
        {/* Diagonal compositional lines */}
        <line x1="0" y1="0" x2="600" y2="400" stroke="#C7A36B" strokeWidth="0.3" strokeDasharray="4 8" />
        <line x1="1920" y1="0" x2="1400" y2="350" stroke="#C7A36B" strokeWidth="0.3" strokeDasharray="4 8" />
        <line x1="0" y1="1080" x2="700" y2="600" stroke="#C7A36B" strokeWidth="0.3" strokeDasharray="4 8" />
      </svg>
      
      {/* Light gradients - architectural lighting - enhanced atmosphere */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[700px] bg-gradient-to-b from-primary/[0.04] to-transparent blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[600px] bg-gradient-to-t from-primary/[0.03] to-transparent blur-3xl" />
      <div className="absolute top-1/3 right-1/3 w-[400px] h-[400px] bg-gradient-radial from-primary/[0.025] to-transparent blur-2xl rounded-full" />
      
      {/* Subtle ambient orbs */}
      <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-primary/[0.02] rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute bottom-[30%] right-[15%] w-48 h-48 bg-primary/[0.015] rounded-full blur-2xl animate-pulse" style={{ animationDuration: '10s' }} />
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent via-transparent to-background/40" />
      
      {/* Corner architectural details */}
      <div className="absolute top-8 left-8 w-24 h-24 opacity-[0.06]">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-primary" />
        <div className="absolute top-0 left-0 w-[1px] h-full bg-primary" />
        <div className="absolute top-4 left-4 text-[8px] text-primary/60 font-mono tracking-widest">PLAN 01</div>
      </div>
      <div className="absolute top-8 right-8 w-24 h-24 opacity-[0.06]">
        <div className="absolute top-0 right-0 w-full h-[1px] bg-primary" />
        <div className="absolute top-0 right-0 w-[1px] h-full bg-primary" />
      </div>
      <div className="absolute bottom-8 left-8 w-24 h-24 opacity-[0.06]">
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
        <div className="absolute bottom-0 left-0 w-[1px] h-full bg-primary" />
      </div>
      <div className="absolute bottom-8 right-8 w-24 h-24 opacity-[0.06]">
        <div className="absolute bottom-0 right-0 w-full h-[1px] bg-primary" />
        <div className="absolute bottom-0 right-0 w-[1px] h-full bg-primary" />
        <div className="absolute bottom-4 right-4 text-[8px] text-primary/60 font-mono tracking-widest">SEC A-A</div>
      </div>
      
      {/* Subtle grain */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
};

// Measurement tick component
const MeasurementTick = ({ position = 'left' }: { position?: 'left' | 'right' | 'top' | 'bottom' }) => {
  const isVertical = position === 'left' || position === 'right';
  return (
    <div className={`absolute opacity-[0.15] ${
      position === 'left' ? '-left-6 top-0 h-full w-4' :
      position === 'right' ? '-right-6 top-0 h-full w-4' :
      position === 'top' ? 'left-0 -top-6 w-full h-4' :
      'left-0 -bottom-6 w-full h-4'
    }`}>
      {isVertical ? (
        <div className="h-full flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex items-center gap-1">
              <div className={`h-[1px] ${position === 'left' ? 'w-2' : 'w-2 ml-auto'} bg-primary/60`} />
              <span className="text-[6px] font-mono text-primary/40">{i * 25}</span>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full flex justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="flex flex-col items-center gap-1">
              <div className={`w-[1px] ${position === 'top' ? 'h-2' : 'h-2 mt-auto'} bg-primary/60`} />
              <span className="text-[6px] font-mono text-primary/40">{i * 25}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// Custom styled input
const ArchitecturalInput = ({ 
  label, 
  type = 'text', 
  placeholder,
  value,
  onChange,
  isTextarea = false,
  className = ''
}: {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isTextarea?: boolean;
  className?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className={`relative group ${className}`}>
      {/* Label */}
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/50 mb-3 uppercase">
        {label}
      </label>
      
      {/* Input container */}
      <div className="relative">
        {/* Focus glow */}
        <div className={`absolute -inset-4 bg-primary/[0.02] rounded-lg blur-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
        
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={4}
            className="relative w-full bg-transparent text-foreground/90 text-base font-body 
                       border-0 border-b border-foreground/10 pb-3 pt-1
                       focus:border-primary/40 focus:outline-none transition-all duration-300
                       placeholder:text-foreground/20 resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="relative w-full bg-transparent text-foreground/90 text-base font-body 
                       border-0 border-b border-foreground/10 pb-3 pt-1
                       focus:border-primary/40 focus:outline-none transition-all duration-300
                       placeholder:text-foreground/20"
          />
        )}
        
        {/* Gold underline on focus */}
        <div className={`absolute bottom-0 left-0 h-[1px] bg-gradient-to-r from-primary/60 via-primary to-primary/60 
                        transition-all duration-500 ${isFocused ? 'w-full' : 'w-0'}`} />
        
        {/* Measurement tick at end */}
        <div className={`absolute -right-3 bottom-3 w-[6px] h-[1px] bg-primary/20 transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
      </div>
    </div>
  );
};

// Budget slider
const BudgetSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const [isFocused, setIsFocused] = useState(false);
  const budgetRanges = ['Under ₹25L', '₹25L - ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+'];
  
  return (
    <div className="relative">
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/50 mb-6 uppercase">
        Approximate Budget (Optional)
      </label>
      
      {/* Track */}
      <div 
        className="relative h-[2px] bg-foreground/10 rounded-full cursor-pointer"
        onMouseEnter={() => setIsFocused(true)}
        onMouseLeave={() => setIsFocused(false)}
      >
        {/* Progress */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/40 to-primary rounded-full transition-all duration-300"
          style={{ width: `${(value / 4) * 100}%` }}
        />
        
        {/* Thumb */}
        <input
          type="range"
          min="0"
          max="4"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-background border border-primary/60 
                     shadow-[0_0_20px_rgba(199,163,107,0.3)] transition-all duration-300"
          style={{ left: `calc(${(value / 4) * 100}% - 8px)` }}
        >
          <div className={`absolute inset-2 rounded-full bg-primary transition-opacity duration-300 ${isFocused ? 'opacity-100' : 'opacity-60'}`} />
        </div>
        
        {/* Range markers */}
        <div className="absolute -bottom-8 left-0 right-0 flex justify-between">
          {budgetRanges.map((range, i) => (
            <span 
              key={i} 
              className={`text-[8px] font-mono transition-colors duration-300 ${
                i <= value ? 'text-primary/60' : 'text-foreground/20'
              }`}
            >
              {i === 0 || i === 4 ? range : '•'}
            </span>
          ))}
        </div>
      </div>
      
      {/* Current value display */}
      <div className="mt-12 text-center">
        <span className="text-sm font-body text-foreground/60">{budgetRanges[value]}</span>
      </div>
    </div>
  );
};

// Project type selector
const ProjectTypeSelector = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const types = ['New Construction', 'Renovation', 'Interior Design', 'Architectural Design', 'Turnkey Project'];
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/50 mb-3 uppercase">
        Project Type
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent text-foreground/90 text-base font-body 
                   border-0 border-b border-foreground/10 pb-3 pt-1 transition-all duration-300
                   hover:border-primary/30 focus:outline-none"
      >
        {value || <span className="text-foreground/20">Select project type</span>}
        
        {/* Arrow */}
        <span className="absolute right-0 bottom-3 text-primary/40 transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ↓
        </span>
      </button>
      
      {/* Dropdown */}
      <div className={`absolute top-full left-0 right-0 mt-2 bg-background/95 backdrop-blur-xl 
                      border border-foreground/10 overflow-hidden transition-all duration-300 z-50
                      ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => { onChange(type); setIsOpen(false); }}
            className="block w-full text-left px-4 py-3 text-sm text-foreground/70 
                       hover:bg-primary/5 hover:text-foreground transition-all duration-200"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

// Zone wrapper with crop marks
const ZoneWrapper = ({ children, label, className = '' }: { children: React.ReactNode; label: string; className?: string }) => {
  return (
    <div className={`relative ${className}`}>
      {/* Crop marks */}
      <div className="absolute -top-4 -left-4 w-8 h-8 opacity-[0.1]">
        <div className="absolute top-0 left-0 w-4 h-[1px] bg-primary" />
        <div className="absolute top-0 left-0 h-4 w-[1px] bg-primary" />
      </div>
      <div className="absolute -top-4 -right-4 w-8 h-8 opacity-[0.1]">
        <div className="absolute top-0 right-0 w-4 h-[1px] bg-primary" />
        <div className="absolute top-0 right-0 h-4 w-[1px] bg-primary" />
      </div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 opacity-[0.1]">
        <div className="absolute bottom-0 left-0 w-4 h-[1px] bg-primary" />
        <div className="absolute bottom-0 left-0 h-4 w-[1px] bg-primary" />
      </div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-[0.1]">
        <div className="absolute bottom-0 right-0 w-4 h-[1px] bg-primary" />
        <div className="absolute bottom-0 right-0 h-4 w-[1px] bg-primary" />
      </div>
      
      {/* Zone label */}
      <div className="absolute -top-8 left-0 text-[8px] font-mono tracking-[0.3em] text-primary/30 uppercase">
        {label}
      </div>
      
      {children}
    </div>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    projectType: '',
    budget: 2,
    message: ''
  });
  
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);
  
  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <ArchitecturalBackground />
      
      {/* Mouse-following ambient light */}
      <div 
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none transition-all duration-1000 ease-out opacity-[0.03]"
        style={{
          background: 'radial-gradient(circle, rgba(199,163,107,0.3) 0%, transparent 70%)',
          left: `calc(${mousePosition.x * 100}% - 300px)`,
          top: `calc(${mousePosition.y * 100}% - 300px)`,
        }}
      />
      
      <Header />
      
      <main className="relative z-10">
        {/* Hero Moment */}
        <section className="min-h-[60vh] flex items-center justify-center px-6 pt-32">
          <div className="text-center max-w-3xl mx-auto">
            {/* Small label */}
            <div className="mb-8 animate-fade-in">
              <span className="text-[10px] font-mono tracking-[0.5em] text-primary/60 uppercase">
                Begin the Conversation
              </span>
            </div>
            
            {/* Main line */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-light text-foreground/90 mb-6 leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
              Every space begins with a{' '}
              <span className="text-primary/70 italic">conversation.</span>
            </h1>
            
            {/* Subtle subtext */}
            <p className="text-sm md:text-base text-foreground/40 font-body font-light max-w-xl mx-auto animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
              Tell us what you're building. We'll help you shape it.
            </p>
            
            {/* Decorative line */}
            <div className="mt-16 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-primary/30" />
              <div className="w-1 h-1 rounded-full bg-primary/40" />
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-primary/30" />
            </div>
          </div>
        </section>
        
        {/* Three Zones - Asymmetric Layout */}
        <section className="py-24 px-6 md:px-12 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-8">
              
              {/* ZONE 1 - Speak to Us (Primary Form) */}
              <div className="lg:col-span-7 lg:pr-12">
                <ZoneWrapper label="Zone 01 — Speak to Us">
                  <div className="space-y-10">
                    {/* Form heading */}
                    <div className="mb-12">
                      <h2 className="text-xl font-heading font-light text-foreground/80 mb-2">
                        Request a Private Consultation
                      </h2>
                      <div className="w-16 h-[1px] bg-primary/30" />
                    </div>
                    
                    {/* Form grid */}
                    <div className="grid md:grid-cols-2 gap-x-12 gap-y-10">
                      <ArchitecturalInput
                        label="Your Name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(v) => setFormData({...formData, name: v})}
                      />
                      
                      <ArchitecturalInput
                        label="Phone / Email"
                        placeholder="How can we reach you"
                        value={formData.contact}
                        onChange={(v) => setFormData({...formData, contact: v})}
                      />
                      
                      <ArchitecturalInput
                        label="City"
                        placeholder="Project location"
                        value={formData.city}
                        onChange={(v) => setFormData({...formData, city: v})}
                      />
                      
                      <ProjectTypeSelector
                        value={formData.projectType}
                        onChange={(v) => setFormData({...formData, projectType: v})}
                      />
                    </div>
                    
                    {/* Budget slider */}
                    <div className="pt-4">
                      <BudgetSlider
                        value={formData.budget}
                        onChange={(v) => setFormData({...formData, budget: v})}
                      />
                    </div>
                    
                    {/* Message */}
                    <div className="pt-8">
                      <ArchitecturalInput
                        label="Tell us about your vision"
                        placeholder="Describe your project, timeline, or any specific requirements..."
                        value={formData.message}
                        onChange={(v) => setFormData({...formData, message: v})}
                        isTextarea
                      />
                    </div>
                    
                    {/* Submit button */}
                    <div className="pt-8">
                      <button className="group relative px-10 py-4 bg-transparent border border-primary/30 
                                        text-primary font-body text-sm tracking-wider uppercase
                                        hover:bg-primary/5 hover:border-primary/50 transition-all duration-500
                                        overflow-hidden">
                        {/* Button glow */}
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                        
                        <span className="relative flex items-center gap-3">
                          Request a Private Consultation
                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </ZoneWrapper>
              </div>
              
              {/* Right column - Zones 2 & 3 */}
              <div className="lg:col-span-5 space-y-16">
                
                {/* ZONE 2 - Where We Work */}
                <ZoneWrapper label="Zone 02 — Where We Work" className="p-8 border border-foreground/5 bg-foreground/[0.01]">
                  <div className="relative">
                    {/* City name */}
                    <div className="mb-8">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-primary/40 uppercase block mb-2">
                        Studio Location
                      </span>
                      <h3 className="text-2xl font-heading font-light text-foreground/80">
                        Faridabad, Haryana
                      </h3>
                    </div>
                    
                    {/* Abstract city grid */}
                    <div className="relative h-32 mb-8 overflow-hidden opacity-20">
                      <svg viewBox="0 0 200 80" className="w-full h-full">
                        {/* Abstract map lines */}
                        <path d="M0 40 Q50 20 100 40 T200 40" stroke="#C7A36B" strokeWidth="0.5" fill="none" />
                        <path d="M0 50 Q60 70 120 50 T200 50" stroke="#C7A36B" strokeWidth="0.3" fill="none" />
                        <circle cx="100" cy="40" r="3" fill="#C7A36B" fillOpacity="0.6" />
                        <circle cx="100" cy="40" r="8" stroke="#C7A36B" strokeWidth="0.3" fill="none" />
                        <circle cx="100" cy="40" r="15" stroke="#C7A36B" strokeWidth="0.2" fill="none" strokeDasharray="2 2" />
                        
                        {/* Grid overlay */}
                        {[...Array(10)].map((_, i) => (
                          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="80" stroke="#C7A36B" strokeWidth="0.1" />
                        ))}
                        {[...Array(4)].map((_, i) => (
                          <line key={`h${i}`} x1="0" y1={i * 20} x2="200" y2={i * 20} stroke="#C7A36B" strokeWidth="0.1" />
                        ))}
                      </svg>
                    </div>
                    
                    {/* Location details */}
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-4">
                        <span className="text-primary/40 text-[10px] font-mono">01</span>
                        <span className="text-foreground/60 font-body leading-relaxed">SCO 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121004</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-primary/40 text-[10px] font-mono">02</span>
                        <span className="text-foreground/50 font-body">Site visits by appointment</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-primary/40 text-[10px] font-mono">03</span>
                        <span className="text-foreground/50 font-body">Design & Build Studio</span>
                      </div>
                    </div>
                    
                    {/* Hours */}
                    <div className="mt-8 pt-6 border-t border-foreground/5">
                      <span className="text-[9px] font-mono tracking-[0.2em] text-foreground/30 uppercase">
                        Mon – Sat • 10:00 AM – 7:00 PM
                      </span>
                    </div>
                  </div>
                </ZoneWrapper>
                
                {/* ZONE 3 - Quick Contact */}
                <ZoneWrapper label="Zone 03 — Quick Connect">
                  <div className="p-6 border border-primary/10 bg-primary/[0.02]">
                    <p className="text-foreground/40 text-sm font-body mb-6">
                      Prefer a quick conversation?
                    </p>
                    
                    {/* Contact capsules */}
                    <div className="flex gap-4">
                      {/* WhatsApp */}
                      <a 
                        href="https://wa.me/919999999999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 flex items-center justify-center gap-3 py-4 px-6 
                                  border border-foreground/10 hover:border-primary/30 
                                  bg-foreground/[0.02] hover:bg-primary/5
                                  transition-all duration-300"
                      >
                        {/* Custom WhatsApp icon */}
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="text-xs font-mono tracking-wider text-foreground/50 group-hover:text-foreground/70 transition-colors duration-300">
                          WhatsApp
                        </span>
                      </a>
                      
                      {/* Call */}
                      <a 
                        href="tel:+919999999999"
                        className="group flex-1 flex items-center justify-center gap-3 py-4 px-6 
                                  border border-foreground/10 hover:border-primary/30 
                                  bg-foreground/[0.02] hover:bg-primary/5
                                  transition-all duration-300"
                      >
                        {/* Custom phone icon */}
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary/60 group-hover:text-primary transition-colors duration-300" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.2.099-.446.099-.939v-2.794c0-.402 0-.603-.062-.779a1 1 0 00-.244-.387c-.133-.129-.32-.21-.694-.373l-3.197-1.394c-.429-.187-.643-.28-.854-.283a1 1 0 00-.544.145c-.182.109-.327.296-.616.67l-.58.75c-.16.208-.241.311-.35.378a.998.998 0 01-.358.126c-.127.017-.262-.012-.53-.07-1.327-.286-2.578-.906-3.636-1.818-.951-.82-1.727-1.88-2.27-3.091-.11-.246-.164-.369-.168-.495a.998.998 0 01.076-.37c.05-.114.143-.214.328-.413l.675-.724c.324-.348.486-.522.56-.717a1 1 0 00.052-.56c-.038-.206-.163-.4-.412-.791L6.17 4.345c-.229-.359-.343-.538-.5-.66a1 1 0 00-.42-.2C5.07 3.45 4.862 3.45 4.447 3.5 3.608 3.624 3 4.478 3 5.5z"/>
                        </svg>
                        <span className="text-xs font-mono tracking-wider text-foreground/50 group-hover:text-foreground/70 transition-colors duration-300">
                          Call Us
                        </span>
                      </a>
                    </div>
                    
                    <p className="text-[10px] text-foreground/30 font-mono mt-4 text-center tracking-wider">
                      Quick conversations welcome
                    </p>
                  </div>
                </ZoneWrapper>
              </div>
            </div>
          </div>
        </section>
        
        {/* Gold divider */}
        <div className="flex items-center justify-center py-12">
          <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </div>
        
        {/* Closing Moment */}
        <section className="py-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg md:text-xl font-heading font-light text-foreground/50 leading-relaxed italic">
              We take on a limited number of projects each year.
            </p>
            <p className="mt-4 text-base md:text-lg font-heading font-light text-foreground/30">
              Thoughtful work takes time.
            </p>
            
            {/* Decorative element */}
            <div className="mt-12 flex justify-center">
              <div className="w-8 h-8 relative">
                <div className="absolute inset-0 border border-primary/20 rotate-45" />
                <div className="absolute inset-2 border border-primary/10 rotate-45" />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
