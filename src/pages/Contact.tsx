import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';
import heroImage from '@/assets/hero-luxury-interior.jpg';

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
      className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-[#0E0E0E]/10 
                 text-[#0E0E0E] text-sm font-body rounded-sm
                 focus:outline-none focus:border-[#C7A56A]/50 focus:ring-1 focus:ring-[#C7A56A]/20
                 transition-all duration-300 placeholder:text-[#0E0E0E]/30"
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
      className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-[#0E0E0E]/10 
                 text-[#0E0E0E] text-sm font-body rounded-sm resize-none
                 focus:outline-none focus:border-[#C7A56A]/50 focus:ring-1 focus:ring-[#C7A56A]/20
                 transition-all duration-300 placeholder:text-[#0E0E0E]/30"
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
        className="w-full px-5 py-4 bg-white/60 backdrop-blur-sm border border-[#0E0E0E]/10 
                   text-left text-sm font-body rounded-sm
                   focus:outline-none focus:border-[#C7A56A]/50 transition-all duration-300
                   flex items-center justify-between"
      >
        <span className={value ? 'text-[#0E0E0E]' : 'text-[#0E0E0E]/30'}>
          {value || placeholder}
        </span>
        <svg className={`w-4 h-4 text-[#0E0E0E]/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-[#0E0E0E]/10 
                        shadow-lg z-50 rounded-sm overflow-hidden">
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

// Contact info item
const ContactItem = ({ 
  icon: Icon, 
  label, 
  value 
}: { 
  icon: React.ElementType; 
  label: string; 
  value: string;
}) => (
  <div className="flex items-start gap-5">
    <div className="w-14 h-14 rounded-sm bg-[#1A1A1A] flex items-center justify-center flex-shrink-0">
      <Icon className="w-5 h-5 text-[#C7A56A]" strokeWidth={1.5} />
    </div>
    <div>
      <p className="text-[10px] font-mono tracking-[0.2em] text-[#C7A56A] uppercase mb-1">{label}</p>
      <p className="text-[#0E0E0E]/80 font-body text-sm leading-relaxed">{value}</p>
    </div>
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
    budget: '',
    message: ''
  });
  
  const projectTypes = ['New Construction', 'Renovation', 'Interior Design', 'Architectural Design', 'Turnkey Project'];
  const budgetRanges = ['Under ₹25 Lakhs', '₹25L - ₹50 Lakhs', '₹50L - ₹1 Crore', '₹1Cr - ₹2 Crore', 'Above ₹2 Crore'];
  
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Header />
      
      <main>
        {/* ═══════════════════════════════════════════════════════════════
            HERO SECTION - Dark with Background Image
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative min-h-[70vh] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src={heroImage} 
              alt="Luxury Architecture" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/95 via-[#0A0A0A]/70 to-[#0A0A0A]/40" />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10 pt-32 pb-20">
            {/* Eyebrow */}
            <p className="text-[11px] font-mono tracking-[0.4em] text-[#C7A56A] uppercase mb-6">
              Get in Touch
            </p>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-light text-white leading-[1.15] mb-8">
              Let's Create<br />
              <span className="text-[#C7A56A] italic">Together</span>
            </h1>
            
            {/* Subtext */}
            <p className="text-base md:text-lg text-white/60 font-body font-light max-w-xl leading-relaxed">
              Every exceptional project begins with a conversation. Tell us about your vision, 
              and let's explore the possibilities together.
            </p>
          </div>
        </section>

        {/* ═══════════════════════════════════════════════════════════════
            FORM SECTION - Light Gradient Background
        ═══════════════════════════════════════════════════════════════ */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-[#F8F6F3] via-[#FAF8F5] to-[#F5F2EE]">
          {/* Subtle texture overlay */}
          <div className="absolute inset-0 opacity-30" 
               style={{ 
                 backgroundImage: `radial-gradient(circle at 20% 50%, rgba(199,165,106,0.08) 0%, transparent 50%),
                                   radial-gradient(circle at 80% 20%, rgba(199,165,106,0.05) 0%, transparent 40%)` 
               }} 
          />
          
          <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              
              {/* Left: Form */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-light text-[#0E0E0E] mb-3">
                  Request a Consultation
                </h2>
                <p className="text-sm text-[#0E0E0E]/50 font-body mb-10">
                  Fill out the form below and our team will reach out within 24 hours.
                </p>
                
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
                  
                  {/* Submit Button */}
                  <button 
                    type="submit"
                    className="group inline-flex items-center gap-3 px-8 py-4 bg-[#C7A56A] text-[#0A0A0A] 
                             font-body text-xs tracking-[0.15em] uppercase rounded-sm
                             transition-all duration-300 hover:bg-[#B8956A] hover:shadow-lg"
                  >
                    <span>Submit Inquiry</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </form>
              </div>
              
              {/* Right: Contact Information */}
              <div>
                <h2 className="text-2xl md:text-3xl font-heading font-light text-[#0E0E0E] mb-10">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <ContactItem 
                    icon={MapPin}
                    label="Studio Address"
                    value="SCO 8, 1st Floor, OMAXE WORLD STREET, Sec-79, Faridabad, Haryana 121004"
                  />
                  
                  <ContactItem 
                    icon={Mail}
                    label="Email"
                    value="studio@edgehomesarchitects.com"
                  />
                  
                  <ContactItem 
                    icon={Phone}
                    label="Phone"
                    value="+91 11 4567 8900"
                  />
                  
                  <ContactItem 
                    icon={Clock}
                    label="Office Hours"
                    value="Monday - Saturday: 10:00 AM - 7:00 PM"
                  />
                </div>
                
                {/* Property Image */}
                <div className="mt-12 relative rounded-sm overflow-hidden">
                  <img 
                    src={heroImage} 
                    alt="EdgeHomes Architecture" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/60 to-transparent" />
                  
                  {/* Location Pin */}
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <div className="w-10 h-10 rounded-full border-2 border-[#C7A56A] flex items-center justify-center mb-2">
                      <MapPin className="w-4 h-4 text-[#C7A56A]" />
                    </div>
                    <p className="text-[10px] font-mono tracking-[0.3em] text-white uppercase">
                      Faridabad, Haryana
                    </p>
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
