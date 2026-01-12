import { useState } from "react";
import { Phone, MessageCircle, Send, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const PHONE_NUMBER = "919871522556";
const PHONE_DISPLAY = "+91 98715 22556";

const budgetRanges = [
  "₹3-5 Lakhs",
  "₹5-10 Lakhs",
  "₹10-20 Lakhs",
  "₹20-50 Lakhs",
  "₹50 Lakhs+",
];

const scopeOptions = [
  "Interiors",
  "Renovation",
  "Turnkey",
  "Architectural",
];

const ConsultationCTA = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    city: "",
    scope: "",
    budget: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", city: "", scope: "", budget: "" });
  };

  const handleCall = () => {
    window.location.href = `tel:+${PHONE_NUMBER}`;
  };

  const handleWhatsApp = () => {
    window.location.href = buildWhatsAppLink(PHONE_NUMBER, "Hi, I'm interested in your services. Please share more details.");
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Cinematic background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1920')" 
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-16 xl:gap-20 items-center">
            {/* Left: Headline */}
            <div className="text-center lg:text-left fade-in-up">
              <span className="text-primary text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase mb-3 sm:mb-4 block">
                Start Your Journey
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-heading text-foreground mb-3 sm:mb-4 leading-tight">
                Let's design your space—
                <span className="text-gradient-gold">beautifully.</span>
              </h2>
              <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto lg:mx-0 mb-4 sm:mb-6" />
              <p className="text-muted-foreground text-sm sm:text-base lg:text-lg mb-6 sm:mb-8">
                Book a free consultation with our design experts. No obligations, just possibilities.
              </p>

              {/* Quick contact buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  className="btn-gold-outline gap-2 text-sm sm:text-base py-5 sm:py-6"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground gap-2 text-sm sm:text-base py-5 sm:py-6"
                  onClick={handleCall}
                >
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover-glow">
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="City (e.g., Delhi, Gurgaon)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-11 sm:h-12 rounded-lg sm:rounded-xl text-sm sm:text-base"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-primary h-11 sm:h-12 rounded-lg sm:rounded-xl px-3 sm:px-4 text-foreground text-sm sm:text-base"
                    required
                  >
                    <option value="" disabled>Select Scope</option>
                    {scopeOptions.map((option) => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-primary h-11 sm:h-12 rounded-lg sm:rounded-xl px-3 sm:px-4 text-foreground text-sm sm:text-base"
                    required
                  >
                    <option value="" disabled>Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <Button type="submit" className="btn-gold w-full gap-2 h-11 sm:h-12 text-sm sm:text-base">
                  <Send className="w-4 h-4" />
                  Get Free Consultation
                </Button>

                {/* Privacy text */}
                <p className="text-[10px] sm:text-2xs text-muted-foreground text-center flex items-center justify-center gap-1">
                  <Lock className="w-3 h-3" />
                  Your information is secure and never shared.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationCTA;
