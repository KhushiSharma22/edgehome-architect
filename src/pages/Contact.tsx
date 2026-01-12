import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import contactHero from '@/assets/contact-hero.jpg';
import visitStudioImage from '@/assets/contact-visit-studio.png';
import { useIntersectionAnimation } from '@/hooks/useIntersectionAnimation';

// ═══════════════════════════════════════════════════════════════
// FORM COMPONENTS
// ═══════════════════════════════════════════════════════════════

const FormInput = ({ 
  label, 
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => (
  <div>
    <label className="block text-[11px] font-mono tracking-[0.2em] text-[#0E0E0E]/60 mb-3 uppercase">
      {label} {required && <span className="text-[#C7A56A]">*</span>}
    </label>
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-[#0E0E0E]/8 
                 text-[#0E0E0E] text-sm font-body rounded-sm
                 focus:outline-none focus:border-[#C7A56A]/50 focus:ring-1 focus:ring-[#C7A56A]/20
                 transition-all duration-300 placeholder:text-[#0E0E0E]/30
                 hover:border-[#0E0E0E]/15"
    />
  </div>
);

const FormTextarea = ({ 
  label, 
  placeholder,
  value,
  onChange,
  required = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}) => (
  <div>
    <label className="block text-[11px] font-mono tracking-[0.2em] text-[#0E0E0E]/60 mb-3 uppercase">
      {label} {required && <span className="text-[#C7A56A]">*</span>}
    </label>
    <textarea
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={5}
      className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-[#0E0E0E]/8 
                 text-[#0E0E0E] text-sm font-body rounded-sm resize-none
                 focus:outline-none focus:border-[#C7A56A]/50 focus:ring-1 focus:ring-[#C7A56A]/20
                 transition-all duration-300 placeholder:text-[#0E0E0E]/30
                 hover:border-[#0E0E0E]/15"
    />
  </div>
);

const FormSelect = ({ 
  label, 
  placeholder,
  value,
  onChange,
  options,
  required = false,
}: {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  required?: boolean;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="relative">
      <label className="block text-[11px] font-mono tracking-[0.2em] text-[#0E0E0E]/60 mb-3 uppercase">
        {label} {required && <span className="text-[#C7A56A]">*</span>}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-5 py-4 bg-white/70 backdrop-blur-sm border border-[#0E0E0E]/8 
                   text-left text-sm font-body rounded-sm
                   focus:outline-none focus:border-[#C7A56A]/50 transition-all duration-300
                   flex items-center justify-between hover:border-[#0E0E0E]/15"
      >
        <span className={value ? 'text-[#0E0E0E]' : 'text-[#0E0E0E]/30'}>
          {value || placeholder}
        </span>
        <svg className={`w-4 h-4 text-[#C7A56A]/70 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#0E0E0E]/10 
                        shadow-xl z-50 rounded-sm overflow-hidden">
          {options.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => { onChange(option); setIsOpen(false); }}
              className="block w-full text-left px-5 py-3 text-sm text-[#0E0E0E]/70 
                         hover:bg-[#C7A56A]/10 hover:text-[#0E0E0E] transition-all duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Enhanced Contact info item with better design
const ContactItem = ({ 
  icon: Icon, 
  label, 
  value,
  isLast = false
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string;
  isLast?: boolean;
}) => (
  <div className={`group flex items-start gap-5 p-5 rounded-lg transition-all duration-300 
                   hover:bg-white/50 ${!isLast ? 'border-b border-[#0E0E0E]/5' : ''}`}>
    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] 
                    flex items-center justify-center flex-shrink-0 shadow-lg
                    group-hover:shadow-xl group-hover:scale-105 transition-all duration-300">
      <Icon className="w-5 h-5 text-[#C7A56A]" strokeWidth={1.5} />
    </div>
    <div className="pt-1">
      <p className="text-[10px] font-mono tracking-[0.25em] text-[#C7A56A] uppercase mb-2">{label}</p>
      <p className="text-[#0E0E0E]/75 font-body text-sm leading-relaxed">{value}</p>
    </div>
  </div>
);

// ═══════════════════════════════════════════════════════════════
// MAIN CONTACT PAGE
// ═══════════════════════════════════════════════════════════════

const Contact = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    message: ''
  });

  const [formRef, formVisible] = useIntersectionAnimation<HTMLDivElement>();
  const [infoRef, infoVisible] = useIntersectionAnimation<HTMLDivElement>();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), 100);
  }, []);
  
  const projectTypes = ['New Construction', 'Renovation', 'Interior Design', 'Architectural Design', 'Turnkey Project'];
  const budgetRanges = ['Under ₹25 Lakhs', '₹25L - ₹50 Lakhs', '₹50L - ₹1 Crore', '₹1Cr - ₹2 Crore', 'Above ₹2 Crore'];
  
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION - Dark with Background Image + Animations
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[75vh] flex items-center overflow-hidden">
          {/* Background Image with parallax-like effect */}
          <div className="absolute inset-0">
            <img 
              src={contactHero} 
              alt="Modern Luxury Architecture" 
              className="w-full h-full object-cover transition-transform duration-[2s]"
              style={{
                transform: isLoaded ? 'scale(1)' : 'scale(1.1)',
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-[#0A0A0A]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/50 to-transparent" />
          </div>

          {/* Animated geometric accents */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div 
              className="absolute top-20 right-20 w-32 h-32 border border-[#C7A56A]/20"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'rotate(0deg)' : 'rotate(45deg)',
                transition: 'all 1.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            />
            <div 
              className="absolute bottom-40 right-40 w-20 h-20 border border-[#C7A56A]/10 rotate-45"
              style={{
                opacity: isLoaded ? 1 : 0,
                transition: 'opacity 1s ease-out 0.8s',
              }}
            />
            {/* Animated lines */}
            <div 
              className="absolute top-1/3 left-0 h-px bg-gradient-to-r from-[#C7A56A]/30 to-transparent"
              style={{
                width: isLoaded ? '40%' : '0',
                transition: 'width 1.5s ease-out 0.3s',
              }}
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-32 pb-24">
            {/* Eyebrow */}
            <p 
              className="text-[11px] font-mono tracking-[0.4em] text-[#C7A56A] uppercase mb-6"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.8s ease-out 0.3s',
              }}
            >
              Get in Touch
            </p>
            
            {/* Main Headline with stagger */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-[1.1] mb-8 overflow-hidden">
              <span 
                className="block"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.4s',
                }}
              >
                Let's Create
              </span>
              <span 
                className="block text-[#C7A56A] italic"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(100%)',
                  transition: 'all 1s cubic-bezier(0.16, 1, 0.3, 1) 0.6s',
                }}
              >
                Together
              </span>
            </h1>
            
            {/* Subtext */}
            <p 
              className="text-base md:text-lg text-white/55 font-body font-light max-w-xl leading-relaxed"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'all 0.8s ease-out 0.8s',
              }}
            >
              Every exceptional project begins with a conversation. Tell us about your vision, 
              and let's explore the possibilities together.
            </p>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            style={{
              opacity: isLoaded ? 0.5 : 0,
              transition: 'opacity 1s ease-out 1.2s',
            }}
          >
            <div className="w-px h-12 bg-gradient-to-b from-[#C7A56A]/50 to-transparent relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-4 bg-[#C7A56A] animate-scroll-line" />
            </div>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FORM SECTION - Light Gradient Background with Animations
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-24 md:py-32 bg-gradient-to-br from-[#FAF8F5] via-[#F7F4F0] to-[#F3EFEA] overflow-hidden">
          {/* Decorative elements with animations */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gradient-radial from-[#C7A56A]/5 to-transparent rounded-full blur-3xl animate-float-slow" />
            <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-radial from-[#C7A56A]/3 to-transparent rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '-5s' }} />
            
            {/* Animated grid lines */}
            <div 
              className="absolute inset-0 opacity-[0.02]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #C7A56A 1px, transparent 1px),
                  linear-gradient(to bottom, #C7A56A 1px, transparent 1px)
                `,
                backgroundSize: '80px 80px',
              }}
            />
          </div>
          
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
              
              {/* Left: Form with reveal animation */}
              <div 
                ref={formRef}
                className={`reveal-left ${formVisible ? 'visible' : ''}`}
              >
                <div className="mb-10">
                  <h2 className="text-2xl md:text-3xl font-heading font-light text-[#0E0E0E] mb-3">
                    Request a Consultation
                  </h2>
                  <p className="text-sm text-[#0E0E0E]/50 font-body">
                    Fill out the form below and our team will reach out within 24 hours.
                  </p>
                </div>
                
                <form className="space-y-6">
                  {/* Row 1: Name + Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Full Name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(v) => setFormData({...formData, name: v})}
                      required
                    />
                    <FormInput
                      label="Email Address"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(v) => setFormData({...formData, email: v})}
                      required
                    />
                  </div>
                  
                  {/* Row 2: Phone + Project Type */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormInput
                      label="Phone Number"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(v) => setFormData({...formData, phone: v})}
                    />
                    <FormSelect
                      label="Project Type"
                      placeholder="Select service"
                      value={formData.projectType}
                      onChange={(v) => setFormData({...formData, projectType: v})}
                      options={projectTypes}
                      required
                    />
                  </div>
                  
                  {/* Row 3: Budget */}
                  <FormSelect
                    label="Estimated Budget"
                    placeholder="Select budget range"
                    value={formData.budget}
                    onChange={(v) => setFormData({...formData, budget: v})}
                    options={budgetRanges}
                  />
                  
                  {/* Row 4: Message */}
                  <FormTextarea
                    label="Tell us about your project"
                    placeholder="Share your vision, requirements, timeline, and any specific ideas you have in mind..."
                    value={formData.message}
                    onChange={(v) => setFormData({...formData, message: v})}
                    required
                  />
                  
                  {/* Submit Button with shine effect */}
                  <button 
                    type="submit"
                    className="group relative inline-flex items-center gap-3 px-10 py-4 bg-[#C7A56A] text-[#0A0A0A] 
                             font-body text-xs tracking-[0.2em] uppercase rounded-sm overflow-hidden
                             transition-all duration-300 hover:bg-[#B8956A] hover:shadow-xl
                             hover:shadow-[#C7A56A]/20"
                  >
                    <span className="font-medium relative z-10">Submit Inquiry</span>
                    <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">→</span>
                    {/* Shine sweep */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </button>
                </form>
              </div>
              
              {/* Right: Contact Information with reveal animation */}
              <div 
                ref={infoRef}
                className={`reveal-right ${infoVisible ? 'visible' : ''}`}
              >
                <div className="mb-8">
                  <h2 className="text-2xl md:text-3xl font-heading font-light text-[#0E0E0E] mb-3">
                    Contact Information
                  </h2>
                  <p className="text-sm text-[#0E0E0E]/50 font-body">
                    Visit our studio or reach out directly.
                  </p>
                </div>
                
                {/* Contact Cards with hover effects */}
                <div className="bg-white/40 backdrop-blur-sm rounded-xl border border-white/60 shadow-lg 
                               shadow-[#0E0E0E]/3 overflow-hidden mb-8 hover:shadow-xl hover:shadow-[#C7A56A]/10 
                               transition-all duration-500">
                  <ContactItem 
                    icon={MapPin}
                    label="Studio Address"
                    value="SCO - 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121002"
                  />
                  
                  <ContactItem 
                    icon={Mail}
                    label="Email"
                    value="edgehomes.architects@gmail.com"
                  />
                  
                  <ContactItem 
                    icon={Phone}
                    label="Phone"
                    value="+91 98715 22556 / +91 99710 22556"
                  />
                  
                  <ContactItem 
                    icon={Clock}
                    label="Office Hours"
                    value="Monday - Saturday: 10:00 AM - 7:00 PM"
                    isLast
                  />
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
