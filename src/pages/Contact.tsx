import { useState, useEffect, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Animated traveling dot component
const TravelingDot = () => {
  return (
    <div className="relative w-64 h-[2px] mx-auto mt-8">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(199,165,106,0.6)] animate-traveling-dot" />
    </div>
  );
};

// Floating gold particles
const GoldParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 6,
    size: 2 + Math.random() * 3,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-primary/40 animate-float-up"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

// Blueprint background for light sections
const BlueprintBackground = ({ light = true }: { light?: boolean }) => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div 
      className={`absolute inset-0 ${light ? 'opacity-[0.03]' : 'opacity-[0.04]'}`}
      style={{
        backgroundImage: `
          linear-gradient(${light ? 'rgba(13,13,13,0.15)' : 'rgba(199,165,106,0.3)'} 1px, transparent 1px),
          linear-gradient(90deg, ${light ? 'rgba(13,13,13,0.15)' : 'rgba(199,165,106,0.3)'} 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        animation: 'drift 60s linear infinite',
      }}
    />
    {/* Grain texture */}
    <div 
      className="absolute inset-0 opacity-[0.015]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
      }}
    />
  </div>
);

// Architectural Input with gold cursor trail effect
const LuxuryInput = ({ 
  label, 
  placeholder,
  value,
  onChange,
  isTextarea = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isTextarea?: boolean;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative group">
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/70 mb-4 uppercase font-medium">
        {label}
      </label>
      
      <div className="relative">
        {/* Focus glow trail */}
        <div className={`absolute -inset-4 bg-primary/[0.04] rounded-2xl blur-2xl transition-opacity duration-700 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
        
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={4}
            className="relative w-full bg-transparent text-background/90 text-base font-body 
                       border-0 border-b border-background/15 pb-4 pt-2
                       focus:border-primary/50 focus:outline-none transition-all duration-500
                       placeholder:text-background/25 resize-none"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="relative w-full bg-transparent text-background/90 text-base font-body 
                       border-0 border-b border-background/15 pb-4 pt-2
                       focus:border-primary/50 focus:outline-none transition-all duration-500
                       placeholder:text-background/25"
          />
        )}
        
        {/* Animated gold underline */}
        <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary/80 via-primary to-primary/80 
                        transition-all duration-700 ease-out ${isFocused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
};

// Elegant budget slider with glow
const BudgetSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const budgetRanges = ['Under ₹25L', '₹25L - ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+'];
  const [isActive, setIsActive] = useState(false);
  
  return (
    <div className="relative">
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/70 mb-8 uppercase font-medium">
        Approximate Budget
      </label>
      
      <div 
        className="relative h-[3px] bg-background/10 rounded-full"
        onMouseEnter={() => setIsActive(true)}
        onMouseLeave={() => setIsActive(false)}
      >
        {/* Glow effect */}
        <div className={`absolute -inset-4 bg-primary/[0.08] rounded-full blur-xl transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0'}`} />
        
        {/* Progress */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/60 to-primary rounded-full transition-all duration-300"
          style={{ width: `${(value / 4) * 100}%` }}
        />
        
        <input
          type="range"
          min="0"
          max="4"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full opacity-0 cursor-pointer"
        />
        
        {/* Thumb with glow */}
        <div 
          className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-2 border-white
                     transition-all duration-300 ${isActive ? 'shadow-[0_0_20px_rgba(199,165,106,0.6)]' : 'shadow-[0_2px_10px_rgba(199,165,106,0.3)]'}`}
          style={{ left: `calc(${(value / 4) * 100}% - 10px)` }}
        />
        
        {/* Labels */}
        <div className="absolute -bottom-12 left-0 right-0 flex justify-between px-1">
          {budgetRanges.map((range, i) => (
            <span 
              key={i} 
              className={`text-[8px] font-mono transition-all duration-300 ${
                i <= value ? 'text-primary font-medium' : 'text-background/30'
              }`}
            >
              {i === 0 || i === 4 ? range : '·'}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <span className="text-base font-body text-background/70">{budgetRanges[value]}</span>
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
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/70 mb-4 uppercase font-medium">
        Project Type
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent text-background/90 text-base font-body 
                   border-0 border-b border-background/15 pb-4 pt-2 transition-all duration-300
                   hover:border-primary/30 focus:outline-none"
      >
        {value || <span className="text-background/25">Select project type</span>}
        <span className="absolute right-0 bottom-4 text-primary/60 transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>↓</span>
      </button>
      
      <div className={`absolute top-full left-0 right-0 mt-3 bg-white/98 backdrop-blur-xl 
                      border border-background/10 shadow-2xl overflow-hidden transition-all duration-300 z-50 rounded-xl
                      ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => { onChange(type); setIsOpen(false); }}
            className="block w-full text-left px-6 py-4 text-sm text-background/70 
                       hover:bg-primary/5 hover:text-background transition-all duration-200"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

// Abstract map with pulsing location
const AbstractMap = () => (
  <div className="relative h-44 w-full overflow-hidden">
    <svg viewBox="0 0 300 120" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Contour lines */}
      <path d="M0 80 Q75 40 150 80 T300 80" stroke="#C7A56A" strokeWidth="0.5" fill="none" opacity="0.3" />
      <path d="M0 60 Q100 90 200 60 T300 60" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.2" />
      <path d="M0 100 Q50 70 150 100 T300 100" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.2" />
      
      {/* Grid */}
      {[...Array(15)].map((_, i) => (
        <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="120" stroke="#0E0E0E" strokeWidth="0.15" opacity="0.15" />
      ))}
      {[...Array(6)].map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 20} x2="300" y2={i * 20} stroke="#0E0E0E" strokeWidth="0.15" opacity="0.15" />
      ))}
      
      {/* Location marker with pulse */}
      <circle cx="150" cy="60" r="20" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.2">
        <animate attributeName="r" from="15" to="30" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="150" cy="60" r="12" fill="none" stroke="#C7A56A" strokeWidth="0.3" opacity="0.3" strokeDasharray="2 2" />
      <circle cx="150" cy="60" r="5" fill="#C7A56A" opacity="0.8" />
      
      {/* Coordinates */}
      <text x="165" y="55" fontSize="6" fill="#C7A56A" opacity="0.5" fontFamily="monospace">28.4089° N</text>
      <text x="165" y="65" fontSize="6" fill="#C7A56A" opacity="0.5" fontFamily="monospace">77.3178° E</text>
    </svg>
  </div>
);

// Geometric diamond
const GeometricDiamond = () => (
  <div className="relative w-16 h-16 mx-auto">
    <div className="absolute inset-0 border border-primary/20 rotate-45 animate-pulse" style={{ animationDuration: '4s' }} />
    <div className="absolute inset-3 border border-primary/30 rotate-45" />
    <div className="absolute inset-6 bg-primary/10 rotate-45" />
  </div>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    city: '',
    projectType: '',
    budget: 2,
    message: ''
  });
  
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO (Light, Airy, Intentional)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-screen flex items-center justify-center px-6 bg-[#F7F3EE]">
          <BlueprintBackground light={true} />
          
          {/* Soft radial glow */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/80 via-transparent to-transparent rounded-full" />
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            {/* Label */}
            <div className="mb-10 animate-fade-in">
              <span className="text-[11px] font-mono tracking-[0.6em] text-primary uppercase font-medium">
                Begin the Conversation
              </span>
            </div>
            
            {/* Main headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-[#0E0E0E] mb-8 leading-[1.2] animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
              Every space begins with a{' '}
              <span className="text-primary italic font-normal">conversation.</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-lg text-[#0E0E0E]/50 font-body font-light max-w-lg mx-auto animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
              Tell us what you're building. We'll help you shape it.
            </p>
            
            {/* Animated traveling dot line */}
            <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <TravelingDot />
            </div>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-fade-in" style={{ animationDelay: '1s' }}>
            <span className="text-[9px] font-mono tracking-[0.3em] text-[#0E0E0E]/30 uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-primary/40 to-transparent" />
          </div>
        </section>
        
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — CONSULTATION FORM (Designed Object)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 px-6 md:px-12 lg:px-20 bg-[#F7F3EE]">
          <BlueprintBackground light={true} />
          
          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
              
              {/* Form Container */}
              <div className="lg:col-span-3">
                <div className="p-10 md:p-12 bg-white/70 backdrop-blur-sm rounded-[32px] 
                               shadow-[inset_0_2px_20px_rgba(0,0,0,0.03),0_20px_60px_rgba(0,0,0,0.06)]
                               border border-white/80">
                  
                  {/* Form header */}
                  <div className="mb-12">
                    <span className="text-[10px] font-mono tracking-[0.3em] text-primary/60 uppercase block mb-4">
                      Private Consultation
                    </span>
                    <h2 className="text-2xl md:text-3xl font-heading font-light text-[#0E0E0E] mb-3">
                      Request a Private Consultation
                    </h2>
                    <p className="text-sm text-[#0E0E0E]/40 font-body italic">
                      "This is where your space begins."
                    </p>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-primary to-primary/20 mt-6" />
                  </div>
                  
                  {/* Form fields */}
                  <div className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <LuxuryInput
                        label="Your Name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(v) => setFormData({...formData, name: v})}
                      />
                      
                      <LuxuryInput
                        label="Phone / Email"
                        placeholder="How can we reach you"
                        value={formData.contact}
                        onChange={(v) => setFormData({...formData, contact: v})}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <LuxuryInput
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
                    
                    <div className="pt-4">
                      <BudgetSlider
                        value={formData.budget}
                        onChange={(v) => setFormData({...formData, budget: v})}
                      />
                    </div>
                    
                    <div className="pt-6">
                      <LuxuryInput
                        label="Tell us about your vision"
                        placeholder="Describe your project, timeline, or any specific requirements..."
                        value={formData.message}
                        onChange={(v) => setFormData({...formData, message: v})}
                        isTextarea
                      />
                    </div>
                    
                    {/* Submit button */}
                    <div className="pt-6">
                      <button className="group relative w-full md:w-auto px-12 py-5 bg-primary text-white font-body text-sm tracking-wider uppercase
                                        rounded-full overflow-hidden transition-all duration-500
                                        shadow-[0_4px_25px_rgba(199,165,106,0.35)] hover:shadow-[0_8px_40px_rgba(199,165,106,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/25 to-white/0 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        <span className="relative flex items-center justify-center gap-3 font-medium">
                          Begin Your Journey
                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Studio Presence Card */}
              <div className="lg:col-span-2">
                <div className="p-8 bg-[#0E0E0E] rounded-[28px] h-full flex flex-col">
                  <span className="text-[10px] font-mono tracking-[0.3em] text-primary/70 uppercase block mb-3">
                    Studio Location
                  </span>
                  <h3 className="text-2xl font-heading font-light text-white mb-8">
                    Faridabad, Haryana
                  </h3>
                  
                  {/* Abstract map */}
                  <AbstractMap />
                  
                  {/* Location details */}
                  <div className="mt-8 space-y-4 flex-grow">
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-[10px] font-mono font-bold mt-1">01</span>
                      <span className="text-white/60 font-body text-sm leading-relaxed">
                        SCO 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121004
                      </span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-[10px] font-mono font-bold mt-1">02</span>
                      <span className="text-white/50 font-body text-sm">Design & Build Studio</span>
                    </div>
                    <div className="flex items-start gap-4">
                      <span className="text-primary text-[10px] font-mono font-bold mt-1">03</span>
                      <span className="text-white/50 font-body text-sm">By appointment only</span>
                    </div>
                  </div>
                  
                  {/* Quick contact */}
                  <div className="mt-8 pt-6 border-t border-white/10">
                    <div className="flex gap-3">
                      <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
                         className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 
                                   rounded-xl transition-all duration-300 text-white/60 hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="text-xs font-mono">WhatsApp</span>
                      </a>
                      <a href="tel:+919999999999"
                         className="flex-1 flex items-center justify-center gap-2 py-3 bg-white/5 hover:bg-white/10 
                                   rounded-xl transition-all duration-300 text-white/60 hover:text-white">
                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.2.099-.446.099-.939v-2.794c0-.402 0-.603-.062-.779a1 1 0 00-.244-.387c-.133-.129-.32-.21-.694-.373l-3.197-1.394c-.429-.187-.643-.28-.854-.283a1 1 0 00-.544.145c-.182.109-.327.296-.616.67l-.58.75a1 1 0 01-.358.126c-.127.017-.262-.012-.53-.07-1.327-.286-2.578-.906-3.636-1.818-.951-.82-1.727-1.88-2.27-3.091-.11-.246-.164-.369-.168-.495a1 1 0 01.076-.37c.05-.114.143-.214.328-.413l.675-.724c.324-.348.486-.522.56-.717a1 1 0 00.052-.56c-.038-.206-.163-.4-.412-.791L6.17 4.345c-.229-.359-.343-.538-.5-.66a1 1 0 00-.42-.2C5.07 3.45 4.862 3.45 4.447 3.5 3.608 3.624 3 4.478 3 5.5z"/>
                        </svg>
                        <span className="text-xs font-mono">Call</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 4 — QUIET AUTHORITY (Light → Dark Transition)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 px-6 bg-gradient-to-b from-[#F7F3EE] via-[#E8E4DE] to-[#2A2A2A]">
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-xl md:text-2xl font-heading font-light text-[#0E0E0E]/60 leading-relaxed italic mb-4">
              We take on a limited number of projects each year.
            </p>
            <p className="text-lg md:text-xl font-heading font-light text-[#0E0E0E]/40">
              Thoughtful work takes time.
            </p>
            
            <div className="mt-16">
              <GeometricDiamond />
            </div>
          </div>
        </section>
        
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — FINAL CTA (Dark, Cinematic)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-40 px-6 bg-[#0E0E0E] overflow-hidden">
          {/* Spotlight gradient */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-primary/[0.08] via-primary/[0.02] to-transparent blur-3xl" />
          
          {/* Floating gold particles */}
          <GoldParticles />
          
          {/* Blueprint grid */}
          <BlueprintBackground light={false} />
          
          <div className="max-w-3xl mx-auto text-center relative z-10">
            {/* Label */}
            <span className="text-[11px] font-mono tracking-[0.5em] text-primary uppercase block mb-8">
              Start Your Journey
            </span>
            
            {/* Main headline */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white mb-8 leading-tight">
              Let's Create Something{' '}
              <span className="text-primary italic">Beautiful</span>
            </h2>
            
            {/* Subtext */}
            <p className="text-lg text-white/40 font-body font-light max-w-md mx-auto mb-12">
              Ready to transform your space?<br />
              Get in touch for a private consultation.
            </p>
            
            {/* CTA Button */}
            <button className="group relative px-14 py-5 bg-transparent border-2 border-primary text-primary 
                              font-body text-sm tracking-wider uppercase rounded-full overflow-hidden
                              transition-all duration-700 hover:text-white">
              {/* Fill animation */}
              <div className="absolute inset-0 bg-primary translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative flex items-center justify-center gap-3 font-medium">
                Begin Your Journey
                <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">→</span>
              </span>
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
