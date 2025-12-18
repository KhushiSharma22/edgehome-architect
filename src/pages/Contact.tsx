import { useState, useRef, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Custom styled input - Light theme
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
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/80 mb-3 uppercase font-medium">
        {label}
      </label>
      
      <div className="relative">
        <div className={`absolute -inset-4 bg-primary/[0.05] rounded-xl blur-xl transition-opacity duration-500 ${isFocused ? 'opacity-100' : 'opacity-0'}`} />
        
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={4}
            className="relative w-full bg-transparent text-background text-base font-body 
                       border-0 border-b-2 border-background/20 pb-3 pt-1
                       focus:border-primary focus:outline-none transition-all duration-300
                       placeholder:text-background/30 resize-none"
          />
        ) : (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="relative w-full bg-transparent text-background text-base font-body 
                       border-0 border-b-2 border-background/20 pb-3 pt-1
                       focus:border-primary focus:outline-none transition-all duration-300
                       placeholder:text-background/30"
          />
        )}
        
        <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-primary via-primary to-primary/60 
                        transition-all duration-500 ${isFocused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
};

// Budget slider
const BudgetSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const budgetRanges = ['Under ₹25L', '₹25L - ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+'];
  
  return (
    <div className="relative">
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/80 mb-8 uppercase font-medium">
        Approximate Budget (Optional)
      </label>
      
      <div className="relative h-[3px] bg-background/15 rounded-full">
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/70 to-primary rounded-full transition-all duration-300"
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
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full bg-primary border-2 border-white
                     shadow-[0_2px_10px_rgba(199,163,107,0.4)] transition-all duration-300"
          style={{ left: `calc(${(value / 4) * 100}% - 10px)` }}
        />
        
        <div className="absolute -bottom-10 left-0 right-0 flex justify-between">
          {budgetRanges.map((range, i) => (
            <span 
              key={i} 
              className={`text-[9px] font-mono transition-colors duration-300 ${
                i <= value ? 'text-primary font-medium' : 'text-background/40'
              }`}
            >
              {i === 0 || i === 4 ? range : '•'}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mt-16 text-center">
        <span className="text-sm font-body text-background/80 font-medium">{budgetRanges[value]}</span>
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
      <label className="block text-[10px] font-mono tracking-[0.3em] text-primary/80 mb-3 uppercase font-medium">
        Project Type
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent text-background text-base font-body 
                   border-0 border-b-2 border-background/20 pb-3 pt-1 transition-all duration-300
                   hover:border-primary/50 focus:outline-none"
      >
        {value || <span className="text-background/30">Select project type</span>}
        
        <span className="absolute right-0 bottom-3 text-primary transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>
          ↓
        </span>
      </button>
      
      <div className={`absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl 
                      border border-background/10 shadow-xl overflow-hidden transition-all duration-300 z-50 rounded-lg
                      ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => { onChange(type); setIsOpen(false); }}
            className="block w-full text-left px-5 py-3.5 text-sm text-background/80 
                       hover:bg-primary/10 hover:text-background transition-all duration-200"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

// Zone wrapper with crop marks
const ZoneWrapper = ({ children, label, dark = false, className = '' }: { children: React.ReactNode; label: string; dark?: boolean; className?: string }) => {
  const color = dark ? 'primary' : 'primary';
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -top-4 -left-4 w-8 h-8 opacity-20">
        <div className={`absolute top-0 left-0 w-4 h-[1px] bg-${color}`} />
        <div className={`absolute top-0 left-0 h-4 w-[1px] bg-${color}`} />
      </div>
      <div className="absolute -top-4 -right-4 w-8 h-8 opacity-20">
        <div className={`absolute top-0 right-0 w-4 h-[1px] bg-${color}`} />
        <div className={`absolute top-0 right-0 h-4 w-[1px] bg-${color}`} />
      </div>
      <div className="absolute -bottom-4 -left-4 w-8 h-8 opacity-20">
        <div className={`absolute bottom-0 left-0 w-4 h-[1px] bg-${color}`} />
        <div className={`absolute bottom-0 left-0 h-4 w-[1px] bg-${color}`} />
      </div>
      <div className="absolute -bottom-4 -right-4 w-8 h-8 opacity-20">
        <div className={`absolute bottom-0 right-0 w-4 h-[1px] bg-${color}`} />
        <div className={`absolute bottom-0 right-0 h-4 w-[1px] bg-${color}`} />
      </div>
      
      <div className={`absolute -top-8 left-0 text-[8px] font-mono tracking-[0.3em] uppercase font-medium ${dark ? 'text-primary/50' : 'text-primary/60'}`}>
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
  
  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
      <Header />
      
      <main className="relative z-10">
        {/* DARK HERO SECTION */}
        <section className="relative min-h-[70vh] flex items-center justify-center px-6 pt-32 pb-24 bg-background overflow-hidden">
          {/* Dark background elements */}
          <div className="absolute inset-0">
            {/* Blueprint grid */}
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
            
            {/* Ambient glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-b from-primary/[0.04] to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-t from-primary/[0.03] to-transparent blur-3xl" />
            
            {/* Architectural lines */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.04]" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
              <line x1="200" y1="0" x2="200" y2="1080" stroke="#C7A36B" strokeWidth="0.5" />
              <line x1="1720" y1="0" x2="1720" y2="1080" stroke="#C7A36B" strokeWidth="0.5" />
              <line x1="0" y1="300" x2="400" y2="300" stroke="#C7A36B" strokeWidth="0.5" />
              <line x1="1520" y1="400" x2="1920" y2="400" stroke="#C7A36B" strokeWidth="0.5" />
            </svg>
            
            {/* Corner details */}
            <div className="absolute top-8 left-8 w-20 h-20 opacity-[0.08]">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-primary" />
              <div className="absolute top-0 left-0 w-[1px] h-full bg-primary" />
              <div className="absolute top-3 left-3 text-[7px] text-primary/60 font-mono tracking-widest">PLAN 01</div>
            </div>
            <div className="absolute top-8 right-8 w-20 h-20 opacity-[0.08]">
              <div className="absolute top-0 right-0 w-full h-[1px] bg-primary" />
              <div className="absolute top-0 right-0 w-[1px] h-full bg-primary" />
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto relative z-10">
            <div className="mb-8 animate-fade-in">
              <span className="text-[11px] font-mono tracking-[0.5em] text-primary uppercase font-medium">
                Begin the Conversation
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-foreground mb-6 leading-relaxed animate-fade-in"
                style={{ animationDelay: '0.2s' }}>
              Every space begins with a{' '}
              <span className="text-primary italic font-normal">conversation.</span>
            </h1>
            
            <p className="text-base md:text-lg text-foreground/50 font-body font-light max-w-xl mx-auto animate-fade-in"
               style={{ animationDelay: '0.4s' }}>
              Tell us what you're building. We'll help you shape it.
            </p>
            
            <div className="mt-14 flex items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 rounded-full bg-primary/60" />
              <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </section>
        
        {/* LIGHT FORM SECTION */}
        <section className="relative py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-[#FAF8F5] via-[#F5F2ED] to-[#EDE9E3]">
          {/* Light section background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div 
              className="absolute inset-0 opacity-[0.04]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(13, 13, 13, 0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(13, 13, 13, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
            <div className="absolute top-0 right-0 w-[600px] h-[400px] bg-gradient-to-bl from-primary/[0.06] to-transparent blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[400px] bg-gradient-to-tr from-primary/[0.04] to-transparent blur-3xl" />
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
              
              {/* ZONE 1 - Form */}
              <div className="lg:col-span-7 lg:pr-8">
                <ZoneWrapper label="Zone 01 — Speak to Us">
                  <div className="p-8 md:p-10 bg-white/60 backdrop-blur-sm rounded-2xl border border-white/80 shadow-[0_8px_40px_rgba(0,0,0,0.08)]">
                    <div className="mb-10">
                      <h2 className="text-2xl font-heading font-medium text-background mb-3">
                        Request a Private Consultation
                      </h2>
                      <div className="w-20 h-[2px] bg-gradient-to-r from-primary to-primary/30" />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
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
                    
                    <div className="pt-8">
                      <BudgetSlider
                        value={formData.budget}
                        onChange={(v) => setFormData({...formData, budget: v})}
                      />
                    </div>
                    
                    <div className="pt-10">
                      <ArchitecturalInput
                        label="Tell us about your vision"
                        placeholder="Describe your project, timeline, or any specific requirements..."
                        value={formData.message}
                        onChange={(v) => setFormData({...formData, message: v})}
                        isTextarea
                      />
                    </div>
                    
                    <div className="pt-10">
                      <button className="group relative px-10 py-4 bg-primary text-white font-body text-sm tracking-wider uppercase
                                        hover:bg-primary/90 transition-all duration-500 rounded-lg
                                        shadow-[0_4px_20px_rgba(199,163,107,0.35)] hover:shadow-[0_6px_30px_rgba(199,163,107,0.45)]
                                        overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 
                                       translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                        
                        <span className="relative flex items-center gap-3 font-medium">
                          Request a Private Consultation
                          <span className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </button>
                    </div>
                  </div>
                </ZoneWrapper>
              </div>
              
              {/* Right column */}
              <div className="lg:col-span-5 space-y-12">
                
                {/* ZONE 2 - Location */}
                <ZoneWrapper label="Zone 02 — Where We Work">
                  <div className="p-8 bg-background/[0.04] backdrop-blur-sm rounded-2xl border border-background/10">
                    <div className="mb-6">
                      <span className="text-[10px] font-mono tracking-[0.3em] text-primary uppercase block mb-2 font-medium">
                        Studio Location
                      </span>
                      <h3 className="text-2xl font-heading font-medium text-background">
                        Faridabad, Haryana
                      </h3>
                    </div>
                    
                    <div className="relative h-28 mb-6 overflow-hidden opacity-40">
                      <svg viewBox="0 0 200 80" className="w-full h-full">
                        <path d="M0 40 Q50 20 100 40 T200 40" stroke="#C7A36B" strokeWidth="1" fill="none" />
                        <path d="M0 50 Q60 70 120 50 T200 50" stroke="#C7A36B" strokeWidth="0.5" fill="none" />
                        <circle cx="100" cy="40" r="4" fill="#C7A36B" fillOpacity="0.8" />
                        <circle cx="100" cy="40" r="10" stroke="#C7A36B" strokeWidth="0.5" fill="none" />
                        <circle cx="100" cy="40" r="18" stroke="#C7A36B" strokeWidth="0.3" fill="none" strokeDasharray="3 3" />
                        {[...Array(10)].map((_, i) => (
                          <line key={`v${i}`} x1={i * 20} y1="0" x2={i * 20} y2="80" stroke="#0D0D0D" strokeWidth="0.1" />
                        ))}
                      </svg>
                    </div>
                    
                    <div className="space-y-4 text-sm">
                      <div className="flex items-start gap-4">
                        <span className="text-primary text-[10px] font-mono font-bold">01</span>
                        <span className="text-background/70 font-body leading-relaxed">SCO 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121004</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-primary text-[10px] font-mono font-bold">02</span>
                        <span className="text-background/60 font-body">Site visits by appointment</span>
                      </div>
                      <div className="flex items-start gap-4">
                        <span className="text-primary text-[10px] font-mono font-bold">03</span>
                        <span className="text-background/60 font-body">Design & Build Studio</span>
                      </div>
                    </div>
                    
                    <div className="mt-6 pt-5 border-t border-background/10">
                      <span className="text-[10px] font-mono tracking-[0.2em] text-background/50 uppercase">
                        Mon – Sat • 10:00 AM – 7:00 PM
                      </span>
                    </div>
                  </div>
                </ZoneWrapper>
                
                {/* ZONE 3 - Quick Contact */}
                <ZoneWrapper label="Zone 03 — Quick Connect">
                  <div className="p-6 bg-primary/[0.08] rounded-2xl border border-primary/20">
                    <p className="text-background/70 text-sm font-body mb-5 font-medium">
                      Prefer a quick conversation?
                    </p>
                    
                    <div className="flex gap-4">
                      <a 
                        href="https://wa.me/919999999999" 
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex-1 flex items-center justify-center gap-3 py-4 px-5 
                                  bg-white/80 hover:bg-white border border-background/10 rounded-xl
                                  shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#25D366]" fill="currentColor">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        <span className="text-xs font-mono tracking-wider text-background/70 group-hover:text-background font-medium">
                          WhatsApp
                        </span>
                      </a>
                      
                      <a 
                        href="tel:+919999999999"
                        className="group flex-1 flex items-center justify-center gap-3 py-4 px-5 
                                  bg-white/80 hover:bg-white border border-background/10 rounded-xl
                                  shadow-sm hover:shadow-md transition-all duration-300"
                      >
                        <svg viewBox="0 0 24 24" className="w-5 h-5 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.2.099-.446.099-.939v-2.794c0-.402 0-.603-.062-.779a1 1 0 00-.244-.387c-.133-.129-.32-.21-.694-.373l-3.197-1.394c-.429-.187-.643-.28-.854-.283a1 1 0 00-.544.145c-.182.109-.327.296-.616.67l-.58.75c-.16.208-.241.311-.35.378a.998.998 0 01-.358.126c-.127.017-.262-.012-.53-.07-1.327-.286-2.578-.906-3.636-1.818-.951-.82-1.727-1.88-2.27-3.091-.11-.246-.164-.369-.168-.495a.998.998 0 01.076-.37c.05-.114.143-.214.328-.413l.675-.724c.324-.348.486-.522.56-.717a1 1 0 00.052-.56c-.038-.206-.163-.4-.412-.791L6.17 4.345c-.229-.359-.343-.538-.5-.66a1 1 0 00-.42-.2C5.07 3.45 4.862 3.45 4.447 3.5 3.608 3.624 3 4.478 3 5.5z"/>
                        </svg>
                        <span className="text-xs font-mono tracking-wider text-background/70 group-hover:text-background font-medium">
                          Call Us
                        </span>
                      </a>
                    </div>
                    
                    <p className="text-[10px] text-background/50 font-mono mt-5 text-center tracking-wider">
                      Quick conversations welcome
                    </p>
                  </div>
                </ZoneWrapper>
              </div>
            </div>
          </div>
        </section>
        
        {/* DARK CLOSING SECTION */}
        <section className="relative py-28 px-6 bg-background overflow-hidden">
          {/* Dark background elements */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(199, 163, 107, 0.3) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(199, 163, 107, 0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
              }}
            />
            <div className="absolute top-0 left-1/3 w-[400px] h-[300px] bg-gradient-to-b from-primary/[0.03] to-transparent blur-3xl" />
            <div className="absolute bottom-0 right-1/3 w-[400px] h-[300px] bg-gradient-to-t from-primary/[0.02] to-transparent blur-3xl" />
            
            {/* Corner details */}
            <div className="absolute bottom-8 left-8 w-16 h-16 opacity-[0.08]">
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-primary" />
              <div className="absolute bottom-0 left-0 w-[1px] h-full bg-primary" />
            </div>
            <div className="absolute bottom-8 right-8 w-16 h-16 opacity-[0.08]">
              <div className="absolute bottom-0 right-0 w-full h-[1px] bg-primary" />
              <div className="absolute bottom-0 right-0 w-[1px] h-full bg-primary" />
              <div className="absolute bottom-3 right-3 text-[6px] text-primary/60 font-mono tracking-widest">SEC A-A</div>
            </div>
          </div>
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            <p className="text-xl md:text-2xl font-heading font-light text-foreground/60 leading-relaxed italic">
              We take on a limited number of projects each year.
            </p>
            <p className="mt-4 text-lg md:text-xl font-heading font-light text-foreground/40">
              Thoughtful work takes time.
            </p>
            
            <div className="mt-12 flex justify-center">
              <div className="w-10 h-10 relative">
                <div className="absolute inset-0 border-2 border-primary/30 rotate-45" />
                <div className="absolute inset-2 border border-primary/20 rotate-45" />
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
