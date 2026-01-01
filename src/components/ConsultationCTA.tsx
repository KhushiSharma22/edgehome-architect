import { useState } from "react";
import { Phone, MessageCircle, Send, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { buildWhatsAppLink } from "@/lib/whatsapp";

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

      <div className="container mx-auto px-6 relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Headline */}
            <div className="text-center lg:text-left fade-in-up">
              <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
                Start Your Journey
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 leading-tight">
                Let's design your space—
                <span className="text-gradient-gold">beautifully.</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/30 mx-auto lg:mx-0 mb-6" />
              <p className="text-muted-foreground text-lg mb-8">
                Book a free consultation with our design experts. No obligations, just possibilities.
              </p>

              {/* Quick contact buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button
                  variant="outline"
                  className="btn-gold-outline gap-2"
                  onClick={() => window.location.href = buildWhatsAppLink('919871522556')}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </Button>
                <Button
                  variant="outline"
                  className="border-border text-muted-foreground hover:text-foreground gap-2"
                  onClick={() => window.open('tel:+919871522556', '_blank')}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </div>
            </div>

            {/* Right: Form */}
            <div className="glass rounded-3xl p-8 hover-glow">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="Phone Number"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <Input
                    placeholder="City (e.g., Delhi, Gurgaon)"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="bg-muted/50 border-border focus:border-primary h-12 rounded-xl"
                    required
                  />
                </div>

                <div>
                  <select
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    className="w-full bg-muted/50 border border-border focus:border-primary h-12 rounded-xl px-4 text-foreground"
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
                    className="w-full bg-muted/50 border border-border focus:border-primary h-12 rounded-xl px-4 text-foreground"
                    required
                  >
                    <option value="" disabled>Budget Range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <Button type="submit" className="btn-gold w-full gap-2">
                  <Send className="w-4 h-4" />
                  Get Free Consultation
                </Button>

                {/* Privacy text */}
                <p className="text-2xs text-muted-foreground text-center flex items-center justify-center gap-1">
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
