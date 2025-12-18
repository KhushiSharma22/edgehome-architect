import { useState } from "react";
import { Home, Building2, Warehouse, Calculator, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <section className="section-padding bg-card grain relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <div className="absolute inset-0 bg-gradient-to-l from-primary to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 fade-in-up">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
              Budget Planner
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
              Instant Estimate
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Get a quick estimate based on your requirements. No commitments.
            </p>
          </div>

          {/* Calculator card */}
          <div className="glass rounded-3xl p-8 md:p-10">
            {/* Step 1: Home Type */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm text-primary font-semibold">1</span>
                </div>
                <h3 className="text-lg font-heading text-foreground">Select Property Type</h3>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                {homeTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedHome(type.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 ${
                      selectedHome === type.id
                        ? 'bg-primary/20 border-primary'
                        : 'bg-muted/50 border-border hover:border-primary/50'
                    }`}
                  >
                    <type.icon className={`w-6 h-6 mx-auto mb-2 ${
                      selectedHome === type.id ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    <span className={`text-sm ${
                      selectedHome === type.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {type.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Scope */}
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <span className="text-sm text-primary font-semibold">2</span>
                </div>
                <h3 className="text-lg font-heading text-foreground">Select Scope</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {scopeOptions.map((scope) => (
                  <button
                    key={scope.id}
                    onClick={() => setSelectedScope(scope.id)}
                    className={`p-4 rounded-xl border transition-all duration-300 text-left ${
                      selectedScope === scope.id
                        ? 'bg-primary/20 border-primary'
                        : 'bg-muted/50 border-border hover:border-primary/50'
                    }`}
                  >
                    <span className={`text-sm font-medium ${
                      selectedScope === scope.id ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {scope.label}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Result */}
            <div className={`border-t border-border pt-8 transition-all duration-500 ${
              estimate ? 'opacity-100' : 'opacity-50'
            }`}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                  <div className="flex items-center gap-2 mb-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    <span className="text-sm text-muted-foreground">Estimated Range</span>
                  </div>
                  {estimate ? (
                    <div className="text-3xl md:text-4xl font-heading text-foreground">
                      {formatPrice(estimate.min)} – {formatPrice(estimate.max)}
                    </div>
                  ) : (
                    <div className="text-2xl text-muted-foreground">
                      Select options above
                    </div>
                  )}
                  <p className="text-xs text-muted-foreground mt-2">
                    *Final quote based on site inspection & requirements
                  </p>
                </div>

                <Button
                  className="btn-gold gap-2"
                  disabled={!estimate}
                  onClick={() => window.open('https://wa.me/919999999999?text=Hi, I want a detailed quote for my project.', '_blank')}
                >
                  <MessageCircle className="w-4 h-4" />
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
