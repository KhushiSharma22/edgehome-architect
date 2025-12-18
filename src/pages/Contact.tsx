import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ═══════════════════════════════════════════════════════════════
// ARCHITECTURAL BACKGROUND ELEMENTS
// ═══════════════════════════════════════════════════════════════

const ArchitecturalGrid = ({ variant = 'light' }: { variant?: 'light' | 'dark' }) => {
  const color = variant === 'light' ? 'rgba(14,14,14,0.06)' : 'rgba(199,165,106,0.08)';
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Blueprint grid */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(${color} 1px, transparent 1px),
            linear-gradient(90deg, ${color} 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />
      {/* Faint construction geometry */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
        <line x1="0%" y1="30%" x2="100%" y2="45%" stroke={variant === 'light' ? '#0E0E0E' : '#C7A56A'} strokeWidth="1" />
        <line x1="20%" y1="0%" x2="20%" y2="100%" stroke={variant === 'light' ? '#0E0E0E' : '#C7A56A'} strokeWidth="0.5" />
        <line x1="80%" y1="0%" x2="80%" y2="100%" stroke={variant === 'light' ? '#0E0E0E' : '#C7A56A'} strokeWidth="0.5" />
        <rect x="15%" y="20%" width="25%" height="40%" fill="none" stroke={variant === 'light' ? '#0E0E0E' : '#C7A56A'} strokeWidth="0.5" strokeDasharray="4 4" />
      </svg>
    </div>
  );
};

// Abstract architectural visual for hero
const ArchitecturalVisual = () => (
  <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
    <svg viewBox="0 0 400 500" className="w-full h-full max-w-md" preserveAspectRatio="xMidYMid meet">
      {/* Elevation lines */}
      <line x1="50" y1="100" x2="350" y2="100" stroke="#C7A56A" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="200" x2="350" y2="200" stroke="#C7A56A" strokeWidth="0.5" opacity="0.3" />
      <line x1="50" y1="300" x2="350" y2="300" stroke="#C7A56A" strokeWidth="0.5" opacity="0.4" />
      <line x1="50" y1="400" x2="350" y2="400" stroke="#C7A56A" strokeWidth="0.5" opacity="0.3" />
      
      {/* Vertical guides */}
      <line x1="100" y1="50" x2="100" y2="450" stroke="#0E0E0E" strokeWidth="0.3" opacity="0.15" />
      <line x1="200" y1="50" x2="200" y2="450" stroke="#0E0E0E" strokeWidth="0.3" opacity="0.15" />
      <line x1="300" y1="50" x2="300" y2="450" stroke="#0E0E0E" strokeWidth="0.3" opacity="0.15" />
      
      {/* Abstract building form */}
      <rect x="120" y="150" width="160" height="250" fill="none" stroke="#0E0E0E" strokeWidth="1" opacity="0.2" />
      <rect x="140" y="180" width="50" height="80" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.5" />
      <rect x="210" y="180" width="50" height="80" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.5" />
      <rect x="140" y="280" width="120" height="100" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.4" />
      
      {/* Roof line */}
      <path d="M100 150 L200 80 L300 150" fill="none" stroke="#0E0E0E" strokeWidth="1" opacity="0.25" />
      
      {/* Measurement ticks */}
      {[150, 200, 250, 300, 350, 400].map((y, i) => (
        <g key={i}>
          <line x1="45" y1={y} x2="55" y2={y} stroke="#0E0E0E" strokeWidth="0.5" opacity="0.3" />
          <text x="38" y={y + 3} fontSize="6" fill="#0E0E0E" opacity="0.2" textAnchor="end" fontFamily="monospace">{y - 100}</text>
        </g>
      ))}
      
      {/* Corner marks */}
      <path d="M115 145 L120 145 L120 150" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.6" />
      <path d="M285 145 L280 145 L280 150" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.6" />
      <path d="M115 405 L120 405 L120 400" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.6" />
      <path d="M285 405 L280 405 L280 400" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.6" />
      
      {/* Dimension line */}
      <line x1="120" y1="420" x2="280" y2="420" stroke="#C7A56A" strokeWidth="0.5" opacity="0.4" />
      <text x="200" y="435" fontSize="8" fill="#C7A56A" opacity="0.5" textAnchor="middle" fontFamily="monospace">12.5m</text>
    </svg>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// FORM COMPONENTS
// ═══════════════════════════════════════════════════════════════

const ArchitecturalInput = ({ 
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
    <div className="relative">
      <label className="block text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 mb-3 uppercase">
        {label}
      </label>
      
      <div className="relative">
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={3}
            className="w-full bg-transparent text-[#0E0E0E] text-sm font-body 
                       border-0 border-b border-[#0E0E0E]/10 pb-3 pt-1
                       focus:outline-none transition-all duration-500
                       placeholder:text-[#0E0E0E]/20 resize-none"
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            className="w-full bg-transparent text-[#0E0E0E] text-sm font-body 
                       border-0 border-b border-[#0E0E0E]/10 pb-3 pt-1
                       focus:outline-none transition-all duration-500
                       placeholder:text-[#0E0E0E]/20"
          />
        )}
        
        {/* Gold focus line */}
        <div className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C7A56A] 
                        transition-all duration-500 ease-out ${isFocused ? 'w-full' : 'w-0'}`} />
      </div>
    </div>
  );
};

// Elegant budget slider styled like drafting scale
const DraftingScaleSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const budgetRanges = ['Under ₹25L', '₹25L - ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+'];
  
  return (
    <div className="relative">
      <label className="block text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 mb-6 uppercase">
        Budget Range
      </label>
      
      {/* Scale track */}
      <div className="relative h-[2px] bg-[#0E0E0E]/10">
        {/* Progress */}
        <div 
          className="absolute top-0 left-0 h-full bg-[#C7A56A]/60 transition-all duration-300"
          style={{ width: `${(value / 4) * 100}%` }}
        />
        
        {/* Tick marks */}
        <div className="absolute -top-2 left-0 right-0 flex justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div 
              key={i} 
              className={`w-[1px] h-4 transition-colors duration-300 ${
                i <= value ? 'bg-[#C7A56A]' : 'bg-[#0E0E0E]/15'
              }`}
            />
          ))}
        </div>
        
        <input
          type="range"
          min="0"
          max="4"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-6 -top-2 opacity-0 cursor-pointer"
        />
        
        {/* Thumb */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#C7A56A] border-2 border-white
                     shadow-[0_2px_8px_rgba(199,165,106,0.4)] transition-all duration-300"
          style={{ left: `calc(${(value / 4) * 100}% - 8px)` }}
        />
      </div>
      
      {/* Current value */}
      <div className="mt-8 text-center">
        <span className="text-sm font-body text-[#0E0E0E]/70">{budgetRanges[value]}</span>
      </div>
    </div>
  );
};

// Project type selector
const ProjectTypeSelect = ({ value, onChange }: { value: string; onChange: (v: string) => void }) => {
  const types = ['New Construction', 'Renovation', 'Interior Design', 'Architectural Design', 'Turnkey Project'];
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <label className="block text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 mb-3 uppercase">
        Project Type
      </label>
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left bg-transparent text-sm font-body 
                   border-0 border-b border-[#0E0E0E]/10 pb-3 pt-1 transition-all duration-300
                   hover:border-[#C7A56A]/40 focus:outline-none"
      >
        <span className={value ? 'text-[#0E0E0E]' : 'text-[#0E0E0E]/20'}>{value || 'Select type'}</span>
        <span className="absolute right-0 bottom-3 text-[#C7A56A]/60 text-xs transition-transform duration-300"
              style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)' }}>▼</span>
      </button>
      
      <div className={`absolute top-full left-0 right-0 mt-2 bg-[#F7F3EE] backdrop-blur-sm 
                      border border-[#0E0E0E]/5 shadow-lg overflow-hidden transition-all duration-300 z-50
                      ${isOpen ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => { onChange(type); setIsOpen(false); }}
            className="block w-full text-left px-4 py-3 text-sm text-[#0E0E0E]/60 
                       hover:bg-[#C7A56A]/5 hover:text-[#0E0E0E] transition-all duration-200"
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════
// STUDIO PRESENCE - ABSTRACT MAP
// ═══════════════════════════════════════════════════════════════

const AbstractLineMap = () => (
  <div className="relative w-full h-32">
    <svg viewBox="0 0 200 80" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Contour lines */}
      <path d="M0 40 Q50 20 100 45 T200 35" stroke="#C7A56A" strokeWidth="0.5" fill="none" opacity="0.4">
        <animate attributeName="d" values="M0 40 Q50 20 100 45 T200 35;M0 42 Q50 25 100 40 T200 38;M0 40 Q50 20 100 45 T200 35" dur="8s" repeatCount="indefinite" />
      </path>
      <path d="M0 55 Q70 70 140 50 T200 60" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.25" />
      <path d="M0 25 Q30 15 80 30 T200 20" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.2" />
      
      {/* Grid overlay */}
      {[0, 40, 80, 120, 160, 200].map((x) => (
        <line key={x} x1={x} y1="0" x2={x} y2="80" stroke="#0E0E0E" strokeWidth="0.2" opacity="0.1" />
      ))}
      {[0, 20, 40, 60, 80].map((y) => (
        <line key={y} x1="0" y1={y} x2="200" y2={y} stroke="#0E0E0E" strokeWidth="0.2" opacity="0.1" />
      ))}
      
      {/* Location marker */}
      <circle cx="100" cy="40" r="15" fill="none" stroke="#C7A56A" strokeWidth="0.3" opacity="0.3">
        <animate attributeName="r" from="10" to="20" dur="2s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="40" r="3" fill="#C7A56A" />
      
      {/* Coordinates */}
      <text x="115" y="38" fontSize="5" fill="#C7A56A" opacity="0.6" fontFamily="monospace">28.4089°N</text>
      <text x="115" y="46" fontSize="5" fill="#C7A56A" opacity="0.6" fontFamily="monospace">77.3178°E</text>
    </svg>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN CONTACT PAGE
// ═══════════════════════════════════════════════════════════════

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    projectType: '',
    budget: 2,
    message: ''
  });
  
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO: "THE INVITATION" (Split 60/40)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[85vh] pt-32 pb-20">
          <ArchitecturalGrid variant="light" />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-20">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-8 items-center min-h-[60vh]">
              
              {/* Left: Editorial Text Block (60%) */}
              <div className="lg:col-span-3 relative z-10">
                {/* Eyebrow */}
                <div className="mb-8">
                  <span className="text-[10px] font-mono tracking-[0.4em] text-[#C7A56A] uppercase">
                    Begin the Conversation
                  </span>
                </div>
                
                {/* Main headline - NOT oversized */}
                <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-heading font-light text-[#0E0E0E] leading-[1.3] mb-8">
                  Every space begins<br />
                  with a <span className="text-[#C7A56A] italic">conversation</span>
                </h1>
                
                {/* Thin horizontal divider */}
                <div className="w-20 h-[1px] bg-[#0E0E0E]/15 mb-8" />
                
                {/* Subtext */}
                <p className="text-base text-[#0E0E0E]/50 font-body font-light max-w-md leading-relaxed">
                  Tell us what you're building.<br />
                  We'll shape it with intent.
                </p>
              </div>
              
              {/* Right: Abstract Architectural Visual (40%) */}
              <div className="lg:col-span-2 relative">
                <ArchitecturalVisual />
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — THE CONTACT EXPERIENCE: "CONSULTATION CANVAS"
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
              
              {/* Left: Form in Stone-like Panel (60%) */}
              <div className="lg:col-span-3">
                <div className="p-8 md:p-12 bg-gradient-to-br from-[#EDE9E3] to-[#E5E0D8] rounded-sm
                               shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_20px_50px_rgba(0,0,0,0.08)]
                               border border-[#D8D3CA]/50">
                  
                  {/* Form header */}
                  <div className="mb-10">
                    <span className="text-[9px] font-mono tracking-[0.3em] text-[#C7A56A] uppercase block mb-3">
                      Private Consultation
                    </span>
                    <h2 className="text-xl md:text-2xl font-heading font-light text-[#0E0E0E] mb-2">
                      Request a Consultation
                    </h2>
                    <p className="text-xs text-[#0E0E0E]/35 font-body italic">
                      "This is where your space begins."
                    </p>
                  </div>
                  
                  {/* Form fields */}
                  <div className="space-y-7">
                    <div className="grid md:grid-cols-2 gap-7">
                      <ArchitecturalInput
                        label="Name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(v) => setFormData({...formData, name: v})}
                      />
                      <ArchitecturalInput
                        label="Email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(v) => setFormData({...formData, email: v})}
                      />
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-7">
                      <ArchitecturalInput
                        label="Phone"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(v) => setFormData({...formData, phone: v})}
                      />
                      <ArchitecturalInput
                        label="City"
                        placeholder="Project location"
                        value={formData.city}
                        onChange={(v) => setFormData({...formData, city: v})}
                      />
                    </div>
                    
                    <ProjectTypeSelect
                      value={formData.projectType}
                      onChange={(v) => setFormData({...formData, projectType: v})}
                    />
                    
                    <div className="pt-2">
                      <DraftingScaleSlider
                        value={formData.budget}
                        onChange={(v) => setFormData({...formData, budget: v})}
                      />
                    </div>
                    
                    <div className="pt-4">
                      <ArchitecturalInput
                        label="Your Vision"
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(v) => setFormData({...formData, message: v})}
                        isTextarea
                      />
                    </div>
                    
                    {/* CTA Button - Solid, Tactile, Architectural */}
                    <div className="pt-4">
                      <button className="group relative px-10 py-4 bg-[#0E0E0E] text-white font-body text-xs tracking-[0.2em] uppercase
                                        transition-all duration-500 hover:bg-[#C7A56A]">
                        <span className="relative">Begin the Journey</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Studio Presence + Philosophy (40%) */}
              <div className="lg:col-span-2 flex flex-col gap-8">
                
                {/* Studio Presence Card */}
                <div className="p-8 bg-[#0E0E0E] flex-1">
                  <span className="text-[9px] font-mono tracking-[0.3em] text-[#C7A56A]/70 uppercase block mb-6">
                    Studio Presence
                  </span>
                  
                  {/* Abstract map */}
                  <AbstractLineMap />
                  
                  {/* Exhibition-style caption */}
                  <div className="mt-6 space-y-4">
                    <div className="border-l-2 border-[#C7A56A]/30 pl-4">
                      <p className="text-white/80 font-heading text-sm leading-relaxed">
                        SCO 8, 1st Floor<br />
                        OMAXE WORLD STREET<br />
                        Sec-79, Faridabad
                      </p>
                      <p className="text-white/40 font-mono text-[10px] mt-2 tracking-wider">
                        HARYANA 121004
                      </p>
                    </div>
                    
                    <div className="pt-4 border-t border-white/5 space-y-2">
                      <p className="text-white/40 text-[10px] font-mono tracking-wider">Design & Build Studio</p>
                      <p className="text-white/40 text-[10px] font-mono tracking-wider">Site visits by appointment</p>
                      <p className="text-[#C7A56A]/60 text-[10px] font-mono tracking-wider">Limited annual projects</p>
                    </div>
                  </div>
                </div>
                
                {/* Philosophy mini-block */}
                <div className="p-6 bg-[#E8E4DC]/50 border border-[#D8D3CA]/30">
                  <p className="text-[#0E0E0E]/50 text-sm font-heading italic leading-relaxed">
                    "We believe every space tells a story. Your consultation is the first chapter."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 3 — QUICK CONNECTION (Dark Inset Strip)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-8 px-6 md:px-12 lg:px-20 bg-[#1A1A1A]">
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
            <p className="text-white/40 text-sm font-body">
              Prefer a brief conversation?
            </p>
            
            <div className="flex gap-4">
              <a 
                href="https://wa.me/919999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 
                          rounded-full transition-all duration-300 text-white/50 hover:text-white border border-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <span className="text-xs font-mono tracking-wide">WhatsApp</span>
              </a>
              
              <a 
                href="tel:+919999999999"
                className="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 
                          rounded-full transition-all duration-300 text-white/50 hover:text-white border border-white/10"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 5.5C3 14.06 9.94 21 18.5 21c.386 0 .77-.014 1.148-.042.435-.032.653-.048.851-.162a1.06 1.06 0 00.402-.432c.099-.2.099-.446.099-.939v-2.794c0-.402 0-.603-.062-.779a1 1 0 00-.244-.387c-.133-.129-.32-.21-.694-.373l-3.197-1.394c-.429-.187-.643-.28-.854-.283a1 1 0 00-.544.145c-.182.109-.327.296-.616.67l-.58.75a1 1 0 01-.358.126c-.127.017-.262-.012-.53-.07-1.327-.286-2.578-.906-3.636-1.818-.951-.82-1.727-1.88-2.27-3.091-.11-.246-.164-.369-.168-.495a1 1 0 01.076-.37c.05-.114.143-.214.328-.413l.675-.724c.324-.348.486-.522.56-.717a1 1 0 00.052-.56c-.038-.206-.163-.4-.412-.791L6.17 4.345c-.229-.359-.343-.538-.5-.66a1 1 0 00-.42-.2C5.07 3.45 4.862 3.45 4.447 3.5 3.608 3.624 3 4.478 3 5.5z"/>
                </svg>
                <span className="text-xs font-mono tracking-wide">Call Studio</span>
              </a>
            </div>
          </div>
        </section>


        {/* ═══════════════════════════════════════════════════════════════
            SECTION 5 — FINAL CTA (Dark, Cinematic but Restrained)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-32 px-6 bg-[#0E0E0E] overflow-hidden">
          <ArchitecturalGrid variant="dark" />
          
          {/* Subtle spotlight */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-[#C7A56A]/[0.04] to-transparent blur-3xl" />
          
          <div className="max-w-2xl mx-auto text-center relative z-10">
            {/* Label */}
            <span className="text-[9px] font-mono tracking-[0.4em] text-[#C7A56A]/60 uppercase block mb-6">
              Start Your Journey
            </span>
            
            {/* Main headline */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-light text-white mb-6 leading-tight">
              Let's Create Something<br />
              <span className="text-[#C7A56A] italic">Beautiful</span>
            </h2>
            
            {/* Subtext */}
            <p className="text-sm text-white/35 font-body font-light max-w-sm mx-auto mb-10">
              Ready to transform your space?<br />
              Get in touch for a private consultation.
            </p>
            
            {/* CTA Button - Gold outline with left-fill hover */}
            <button className="group relative px-10 py-4 bg-transparent border border-[#C7A56A] text-[#C7A56A] 
                              font-body text-xs tracking-[0.2em] uppercase overflow-hidden
                              transition-all duration-500 hover:text-white">
              {/* Fill animation */}
              <div className="absolute inset-0 bg-[#C7A56A] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
              <span className="relative">Begin the Journey</span>
            </button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
