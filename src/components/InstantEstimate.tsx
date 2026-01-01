import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { Home, Building2, Warehouse, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const homeTypes = [
  { id: "1bhk", label: "1 BHK", icon: Home, basePrice: 350000 },
  { id: "2bhk", label: "2 BHK", icon: Home, basePrice: 600000 },
  { id: "3bhk", label: "3 BHK", icon: Home, basePrice: 900000 },
  { id: "villa", label: "Villa", icon: Warehouse, basePrice: 1500000 },
  { id: "office", label: "Office", icon: Building2, basePrice: 800000 },
];

const scopeOptions = [
  { id: "interiors", label: "Interiors Only", multiplier: 1 },
  { id: "renovation", label: "Renovation", multiplier: 1.3 },
  { id: "turnkey", label: "Full Turnkey", multiplier: 1.8 },
];

const formatPrice = (price: number) => {
  if (price >= 10000000) {
    return `₹${(price / 10000000).toFixed(1)} Cr`;
  } else if (price >= 100000) {
    return `₹${(price / 100000).toFixed(1)} L`;
  }
  return `₹${price.toLocaleString('en-IN')}`;
};

const InstantEstimate = () => {
  const [selectedHome, setSelectedHome] = useState<string | null>(null);
  const [selectedScope, setSelectedScope] = useState<string | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  const calculateEstimate = () => {
    if (!selectedHome || !selectedScope) return null;
    const home = homeTypes.find(h => h.id === selectedHome);
    const scope = scopeOptions.find(s => s.id === selectedScope);
    if (!home || !scope) return null;
    
    const minPrice = home.basePrice * scope.multiplier;
    const maxPrice = minPrice * 1.5;
    return { min: minPrice, max: maxPrice };
  };

  const estimate = calculateEstimate();

  return (
    <section ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="grain absolute inset-0" />
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/10 to-transparent animate-shimmer" />
      </div>
      <div className="absolute bottom-20 left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-morph" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Budget Planner
            </span>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Instant <span className="text-shimmer">Estimate</span>
            </h2>
            <p className={`text-muted-foreground max-w-md mx-auto text-lg transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Get a quick estimate based on your requirements. No commitments.
            </p>
          </div>

          {/* Calculator card */}
          <div className={`glass rounded-3xl p-8 md:p-12 border border-border/30 transition-all duration-1000 hover:shadow-[0_0_60px_rgba(199,163,107,0.1)] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`} style={{ transitionDelay: '500ms' }}>
            {/* Step 1: Home Type */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-sm text-primary font-bold">1</span>
                </div>
                <h3 className="text-xl font-heading text-foreground">Select Property Type</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {homeTypes.map((type, index) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedHome(type.id)}
                    className={`p-5 rounded-2xl border transition-all duration-500 group hover:scale-105 ${
                      selectedHome === type.id
                        ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(199,163,107,0.2)]'
                        : 'bg-muted/30 border-border/50 hover:border-primary/50 hover:bg-muted/50'
                    }`}
                    style={{ transitionDelay: `${600 + index * 50}ms` }}
                  >
                    <type.icon className={`w-7 h-7 mx-auto mb-3 transition-all duration-300 ${
                      selectedHome === type.id ? 'text-primary scale-110' : 'text-muted-foreground group-hover:text-primary'
                    }`} />
                    <span className={`text-sm font-medium block ${
                      selectedHome === type.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center border border-primary/30">
                  <span className="text-sm text-primary font-bold">2</span>
                </div>
                <h3 className="text-xl font-heading text-foreground">Select Scope</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {scopeOptions.map((scope, index) => (
                  <button
                    key={scope.id}
                    onClick={() => setSelectedScope(scope.id)}
                    className={`p-5 rounded-2xl border transition-all duration-500 text-left group hover:scale-[1.02] ${
                      selectedScope === scope.id
                        ? 'bg-primary/20 border-primary shadow-[0_0_30px_rgba(199,163,107,0.2)]'
                        : 'bg-muted/30 border-border/50 hover:border-primary/50 hover:bg-muted/50'
                    }`}
                    style={{ transitionDelay: `${800 + index * 50}ms` }}
                  >
                    <span className={`text-base font-medium ${
                      selectedScope === scope.id ? 'text-foreground' : 'text-muted-foreground group-hover:text-foreground'
                    }`}>
                      {scope.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Result with animation */}
            <div className={`border-t border-border/30 pt-10 transition-all duration-700 ${
              estimate ? 'opacity-100' : 'opacity-40'
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                      estimate ? 'bg-primary/20 animate-pulse-glow' : 'bg-muted/50'
                    }`}>
                      <Calculator className={`w-5 h-5 ${estimate ? 'text-primary' : 'text-muted-foreground'}`} />
                    </div>
                    <span className="text-sm text-muted-foreground">Estimated Range</span>
                  </div>
                  {estimate ? (
                    <div className="text-3xl md:text-5xl font-heading text-foreground animate-fade-in-up">
                      <span className="text-shimmer">{formatPrice(estimate.min)}</span>
                      <span className="text-muted-foreground mx-2">–</span>
                      <span className="text-shimmer">{formatPrice(estimate.max)}</span>
                    </div>
                  ) : (
                    <div className="text-2xl text-muted-foreground">
                      Select options above
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-3">
                    *Final quote based on site inspection & requirements
                  </p>
                </div>

                <Button
                  className={`btn-gold gap-3 text-base px-8 py-6 transition-all duration-500 ${
                    estimate ? 'animate-pulse-glow' : ''
                  }`}
                  disabled={!estimate}
                  onClick={() => window.open(buildWhatsAppLink('919871522556', 'Hi, I want a detailed quote for my project.'), '_blank')}
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Detailed Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstantEstimate;
