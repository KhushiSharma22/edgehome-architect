import { Clock, Shield, Banknote, Award, Play } from "lucide-react";

const proofPoints = [
  { icon: Clock, text: "Delivered On-Time", stat: "98%" },
  { icon: Shield, text: "End-to-End Turnkey", stat: "100%" },
  { icon: Banknote, text: "Transparent Costing", stat: "Zero Hidden" },
  { icon: Award, text: "Quality Assured", stat: "5-Year Warranty" },
];

const testimonials = [
  {
    id: 1,
    name: "Priya & Rahul Sharma",
    location: "Pitampura, Delhi",
    text: "EdgeHomes transformed our 3BHK into a space we're truly proud of. The attention to detail was exceptional.",
    duration: "0:42",
  },
  {
    id: 2,
    name: "Dr. Anand Mehta",
    location: "Model Town, Delhi",
    text: "Professional, punctual, and perfect. Our clinic interior exceeded all expectations.",
    duration: "0:38",
  },
  {
    id: 3,
    name: "The Kapoor Family",
    location: "Rohini, Delhi",
    text: "From design to execution, the team was transparent and delivered exactly what was promised.",
    duration: "0:55",
  },
];

const TrustProofWall = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="text-center mb-16 fade-in-up">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
            Why Trust Us
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            Proof, Not Promises
          </h2>
        </div>

        {/* Proof points */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-20 max-w-5xl mx-auto">
          {proofPoints.map((point, index) => (
            <div
              key={point.text}
              className="glass rounded-2xl p-6 text-center hover-lift group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-heading text-foreground mb-1">{point.stat}</div>
              <p className="text-sm text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Voice note testimonials */}
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-border" />
            <span className="text-2xs text-muted-foreground tracking-wider uppercase">Client Voices</span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="glass rounded-2xl p-5 hover-glow transition-all group cursor-pointer"
              >
                {/* Audio player style header */}
                <div className="flex items-center gap-3 mb-4">
                  <button className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Play className="w-4 h-4 text-primary ml-0.5" />
                  </button>
                  <div className="flex-1">
                    {/* Waveform visualization */}
                    <div className="flex items-center gap-0.5 h-6">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary/40 rounded-full"
                          style={{ height: `${Math.random() * 100}%`, minHeight: '4px' }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-2xs text-muted-foreground">{testimonial.duration}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm text-foreground font-medium">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional: Brand logos placeholder */}
        <div className="mt-16 pt-16 border-t border-border/30">
          <p className="text-center text-xs text-muted-foreground tracking-wider uppercase mb-8">
            Trusted Material Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-40">
            {['Kohler', 'Grohe', 'Hettich', 'Hafele', 'Asian Paints'].map((brand) => (
              <span key={brand} className="text-lg font-heading text-muted-foreground">
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustProofWall;
