import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// ═══════════════════════════════════════════════════════════════
// ATMOSPHERIC ARCHITECTURAL LAYERS (Not literal, felt)
// ═══════════════════════════════════════════════════════════════

const AtmosphericLayers = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {/* Layer 1: Faint column grid */}
    <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
      {[15, 30, 45, 60, 75, 90].map((x) => (
        <line key={x} x1={`${x}%`} y1="0%" x2={`${x}%`} y2="100%" 
              stroke="#0E0E0E" strokeWidth="0.3" opacity="0.04" />
      ))}
    </svg>
    
    {/* Layer 2: Section lines (diagonal) */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
      <line x1="0%" y1="20%" x2="100%" y2="35%" stroke="#0E0E0E" strokeWidth="0.5" />
      <line x1="0%" y1="60%" x2="100%" y2="75%" stroke="#0E0E0E" strokeWidth="0.5" />
      <line x1="0%" y1="85%" x2="100%" y2="95%" stroke="#C7A56A" strokeWidth="0.3" />
    </svg>
    
    {/* Layer 3: Dimension ticks (left edge) */}
    <svg className="absolute left-4 top-1/4 h-1/2 w-8 opacity-[0.08]" viewBox="0 0 30 200">
      {[0, 40, 80, 120, 160, 200].map((y) => (
        <g key={y}>
          <line x1="0" y1={y} x2="15" y2={y} stroke="#0E0E0E" strokeWidth="0.5" />
          <text x="20" y={y + 2} fontSize="6" fill="#0E0E0E" fontFamily="monospace">{y * 5}</text>
        </g>
      ))}
      <line x1="8" y1="0" x2="8" y2="200" stroke="#0E0E0E" strokeWidth="0.3" />
    </svg>
    
    {/* Layer 4: Handwritten measurements (scattered) */}
    <div className="absolute top-[15%] right-[12%] rotate-[-8deg] opacity-[0.06]">
      <span className="text-[10px] font-mono text-[#0E0E0E] italic">3.5m</span>
    </div>
    <div className="absolute top-[45%] right-[25%] rotate-[3deg] opacity-[0.05]">
      <span className="text-[10px] font-mono text-[#0E0E0E] italic">2400</span>
    </div>
    <div className="absolute bottom-[30%] left-[20%] rotate-[-2deg] opacity-[0.04]">
      <span className="text-[10px] font-mono text-[#C7A56A]">A-A</span>
    </div>
    
    {/* Layer 5: Corner marks */}
    <svg className="absolute top-[20%] left-[15%] w-12 h-12 opacity-[0.06]">
      <path d="M0 20 L0 0 L20 0" fill="none" stroke="#C7A56A" strokeWidth="1" />
    </svg>
    <svg className="absolute bottom-[25%] right-[20%] w-12 h-12 opacity-[0.05]">
      <path d="M20 0 L40 0 L40 20" fill="none" stroke="#0E0E0E" strokeWidth="1" />
    </svg>
    
    {/* Layer 6: Dashed construction rectangle */}
    <svg className="absolute top-[10%] right-[5%] w-[30%] h-[60%] opacity-[0.025]">
      <rect x="10%" y="10%" width="80%" height="80%" fill="none" 
            stroke="#0E0E0E" strokeWidth="1" strokeDasharray="8 4" />
    </svg>
  </div>
);

// Form drafting grid background
const FormDraftingGrid = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-sm">
    {/* Faint grid */}
    <div 
      className="absolute inset-0 opacity-[0.03]"
      style={{
        backgroundImage: `
          linear-gradient(rgba(14,14,14,1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(14,14,14,1) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px',
      }}
    />
    
    {/* Section markers */}
    <div className="absolute top-4 left-4 text-[8px] font-mono text-[#C7A56A]/20 tracking-wider">A—A</div>
    <div className="absolute bottom-4 right-4 text-[8px] font-mono text-[#C7A56A]/20 tracking-wider">B—B</div>
    
    {/* Vertical section line */}
    <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
      <line x1="50%" y1="0%" x2="50%" y2="100%" stroke="#C7A56A" strokeWidth="0.5" strokeDasharray="4 8" />
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
  step,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  isTextarea?: boolean;
  step?: string;
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <div className="flex items-baseline gap-3 mb-3">
        {step && (
          <span className="text-[8px] font-mono tracking-[0.2em] text-[#C7A56A]/40">{step}</span>
        )}
        <label className="text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 uppercase">
          {label}
        </label>
      </div>
      
      <div className="relative">
        {isTextarea ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder={placeholder}
            rows={4}
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

// Budget slider with architectural scale feel
const ArchitecturalBudgetSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => {
  const budgetRanges = ['Under ₹25L', '₹25L - ₹50L', '₹50L - ₹1Cr', '₹1Cr - ₹2Cr', '₹2Cr+'];
  
  return (
    <div className="relative py-4 px-6 bg-[#0E0E0E]/[0.02] border border-[#0E0E0E]/5">
      <div className="flex items-baseline gap-3 mb-8">
        <span className="text-[8px] font-mono tracking-[0.2em] text-[#C7A56A]/40">04</span>
        <label className="text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 uppercase">
          Budget Range
        </label>
      </div>
      
      {/* Scale track */}
      <div className="relative h-[3px] bg-[#0E0E0E]/8">
        {/* Progress */}
        <div 
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#C7A56A]/40 to-[#C7A56A] transition-all duration-300"
          style={{ width: `${(value / 4) * 100}%` }}
        />
        
        {/* Architectural scale ticks */}
        <div className="absolute -top-3 left-0 right-0 flex justify-between">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col items-center">
              <div 
                className={`w-[2px] transition-all duration-300 ${
                  i <= value ? 'h-6 bg-[#C7A56A]' : 'h-4 bg-[#0E0E0E]/15'
                }`}
              />
            </div>
          ))}
        </div>
        
        <input
          type="range"
          min="0"
          max="4"
          value={value}
          onChange={(e) => onChange(parseInt(e.target.value))}
          className="absolute inset-0 w-full h-8 -top-3 opacity-0 cursor-pointer"
        />
        
        {/* Heavy metallic thumb */}
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-sm bg-[#C7A56A] 
                     shadow-[0_4px_12px_rgba(199,165,106,0.5),inset_0_1px_0_rgba(255,255,255,0.3)] 
                     transition-all duration-300 rotate-45"
          style={{ left: `calc(${(value / 4) * 100}% - 10px)` }}
        />
      </div>
      
      {/* Current value + note */}
      <div className="mt-10 flex items-baseline justify-between">
        <span className="text-base font-heading text-[#0E0E0E]/80">{budgetRanges[value]}</span>
        <span className="text-[9px] font-mono text-[#0E0E0E]/30 italic">Indicative range, refined later</span>
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
      <div className="flex items-baseline gap-3 mb-3">
        <span className="text-[8px] font-mono tracking-[0.2em] text-[#C7A56A]/40">03</span>
        <label className="text-[9px] font-mono tracking-[0.25em] text-[#0E0E0E]/40 uppercase">
          Project Type
        </label>
      </div>
      
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
// STUDIO PRESENCE - ABSTRACT LOCATION
// ═══════════════════════════════════════════════════════════════

const AbstractLineMap = () => (
  <div className="relative w-full h-28">
    <svg viewBox="0 0 200 70" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
      {/* Contour lines */}
      <path d="M0 35 Q50 15 100 40 T200 30" stroke="#C7A56A" strokeWidth="0.5" fill="none" opacity="0.5">
        <animate attributeName="d" values="M0 35 Q50 15 100 40 T200 30;M0 38 Q50 20 100 35 T200 33;M0 35 Q50 15 100 40 T200 30" dur="10s" repeatCount="indefinite" />
      </path>
      <path d="M0 50 Q70 60 140 45 T200 55" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.3" />
      <path d="M0 20 Q30 10 80 25 T200 15" stroke="#C7A56A" strokeWidth="0.3" fill="none" opacity="0.25" />
      
      {/* Location marker */}
      <circle cx="100" cy="35" r="12" fill="none" stroke="#C7A56A" strokeWidth="0.5" opacity="0.2">
        <animate attributeName="r" from="8" to="16" dur="2.5s" repeatCount="indefinite" />
        <animate attributeName="opacity" from="0.3" to="0" dur="2.5s" repeatCount="indefinite" />
      </circle>
      <circle cx="100" cy="35" r="2.5" fill="#C7A56A" />
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
    projectType: '',
    budget: 2,
    message: ''
  });
  
  return (
    <div className="min-h-screen bg-[#F7F3EE]">
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            SECTION 1 — HERO: ATMOSPHERIC SPACE (Not literal blueprint)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[90vh] pt-40 pb-20 overflow-hidden">
          <AtmosphericLayers />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            {/* Asymmetric layout - text anchored lower left */}
            <div className="min-h-[65vh] flex flex-col justify-end">
              
              {/* Eyebrow - offset */}
              <div className="mb-6 ml-1">
                <span className="text-[9px] font-mono tracking-[0.5em] text-[#C7A56A]/70 uppercase">
                  Begin the Conversation
                </span>
              </div>
              
              {/* Main headline - NOT oversized, anchored */}
              <h1 className="text-2xl md:text-3xl lg:text-[2.5rem] font-heading font-light text-[#0E0E0E] leading-[1.35] mb-6 max-w-lg">
                Every space begins<br />
                with a{' '}
                <span className="relative inline-block text-[#0E0E0E] italic">
                  conversation
                  {/* Hand-drawn underline animation */}
                  <svg className="absolute -bottom-1 left-0 w-full h-2 overflow-visible" viewBox="0 0 100 8" preserveAspectRatio="none">
                    <path 
                      d="M0 6 Q25 2 50 6 T100 4" 
                      fill="none" 
                      stroke="#C7A56A" 
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      className="animate-[draw-underline_1.5s_ease-out_forwards]"
                      style={{
                        strokeDasharray: 100,
                        strokeDashoffset: 100,
                        animation: 'draw-underline 1.5s ease-out 0.5s forwards'
                      }}
                    />
                  </svg>
                </span>
              </h1>
              
              {/* Subtext */}
              <p className="text-sm md:text-base text-[#0E0E0E]/45 font-body font-light max-w-sm leading-relaxed mb-10">
                Tell us what you're building.<br />
                We'll shape it with intent.
              </p>
              
              {/* Architect-only note - subtle authority */}
              <div className="flex items-center gap-4 opacity-40">
                <div className="w-8 h-[1px] bg-[#0E0E0E]/30" />
                <span className="text-[9px] font-mono tracking-wider text-[#0E0E0E]/50">
                  Scale 1:100 · Not to scale
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            SECTION 2 — THE CONSULTATION CANVAS (Form as experience)
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 px-6 md:px-12 lg:px-20">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
              
              {/* Left: Form Canvas (60%) */}
              <div className="lg:col-span-3">
                <div className="relative p-8 md:p-10 lg:p-12 bg-gradient-to-br from-[#EDE9E3] to-[#E8E3DB]
                               shadow-[inset_0_1px_0_rgba(255,255,255,0.5),0_30px_60px_rgba(0,0,0,0.06)]
                               border border-[#D8D3CA]/40">
                  
                  <FormDraftingGrid />
                  
                  {/* Form header */}
                  <div className="relative mb-12">
                    <span className="text-[8px] font-mono tracking-[0.4em] text-[#C7A56A]/60 uppercase block mb-2">
                      Private Consultation
                    </span>
                    <h2 className="text-lg md:text-xl font-heading font-light text-[#0E0E0E]/90">
                      Request a Consultation
                    </h2>
                  </div>
                  
                  {/* Form fields - rhythmic layout */}
                  <div className="relative space-y-8">
                    
                    {/* Row 1: Name + Email (together) */}
                    <div className="grid md:grid-cols-2 gap-8">
                      <ArchitecturalInput
                        label="Name"
                        placeholder="Full name"
                        value={formData.name}
                        onChange={(v) => setFormData({...formData, name: v})}
                        step="01"
                      />
                      <ArchitecturalInput
                        label="Email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(v) => setFormData({...formData, email: v})}
                      />
                    </div>
                    
                    {/* Row 2: Phone alone (importance) */}
                    <div className="max-w-xs">
                      <ArchitecturalInput
                        label="Phone"
                        placeholder="+91"
                        value={formData.phone}
                        onChange={(v) => setFormData({...formData, phone: v})}
                        step="02"
                      />
                    </div>
                    
                    {/* Row 3: Project Type (full width) */}
                    <ProjectTypeSelect
                      value={formData.projectType}
                      onChange={(v) => setFormData({...formData, projectType: v})}
                    />
                    
                    {/* Row 4: Budget Slider (hero of form) */}
                    <div className="py-4">
                      <ArchitecturalBudgetSlider
                        value={formData.budget}
                        onChange={(v) => setFormData({...formData, budget: v})}
                      />
                    </div>
                    
                    {/* Row 5: Vision (spacious, calm) */}
                    <div className="pt-4">
                      <ArchitecturalInput
                        label="Your Vision"
                        placeholder="Tell us about your project, your aspirations, your constraints..."
                        value={formData.message}
                        onChange={(v) => setFormData({...formData, message: v})}
                        isTextarea
                        step="05"
                      />
                    </div>
                    
                    {/* CTA - Narrow, calm */}
                    <div className="pt-6">
                      <button className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#0E0E0E] text-white 
                                        font-body text-[11px] tracking-[0.15em] uppercase transition-all duration-500">
                        <span>Request Consultation</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        {/* Underline slide on hover */}
                        <div className="absolute bottom-3 left-8 right-12 h-[1px] bg-white/30 
                                       scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      </button>
                      <p className="mt-4 text-[10px] text-[#0E0E0E]/30 font-mono">No rush. When you're ready.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right: Presence Wall (40%) */}
              <div className="lg:col-span-2 flex flex-col gap-6">
                
                {/* Philosophy statement (moved up, prominent) */}
                <div className="p-8 bg-[#0E0E0E]">
                  <p className="text-white/70 text-base md:text-lg font-heading font-light leading-relaxed mb-8">
                    "We work with a limited number<br />
                    of clients each year."
                  </p>
                  <p className="text-white/30 text-xs font-body leading-relaxed">
                    This allows us to give each project the attention it deserves. 
                    Every consultation is the beginning of a considered process.
                  </p>
                </div>
                
                {/* Studio Location */}
                <div className="p-8 bg-[#0E0E0E] flex-1">
                  <span className="text-[8px] font-mono tracking-[0.4em] text-[#C7A56A]/50 uppercase block mb-6">
                    Studio Location
                  </span>
                  
                  {/* Abstract map */}
                  <AbstractLineMap />
                  
                  {/* Coordinates first, address secondary */}
                  <div className="mt-6">
                    <p className="text-[#C7A56A]/80 font-mono text-[11px] tracking-wider mb-4">
                      28.4089°N, 77.3178°E
                    </p>
                    
                    <div className="border-l border-white/10 pl-4 space-y-1">
                      <p className="text-white/50 font-body text-sm">
                        SCO 8, 1st Floor, OMAXE WORLD STREET
                      </p>
                      <p className="text-white/30 font-body text-xs">
                        Sec-79, Faridabad, Haryana 121004
                      </p>
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/5">
                      <p className="text-white/25 text-[10px] font-mono tracking-wider">
                        Site visits by appointment
                      </p>
                    </div>
                  </div>
                </div>
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
