import { Clock, Shield, Banknote, Award, Play } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

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
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });

  return (
    <section ref={ref} className="section-padding bg-background relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card via-background to-card" />
      <div className="absolute top-20 right-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-primary/3 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-5s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            Why Trust Us
          </span>
          <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Proof, Not <span className="text-shimmer">Promises</span>
          </h2>
        </div>

        {/* Proof points with staggered animation */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-24 max-w-5xl mx-auto">
          {proofPoints.map((point, index) => (
            <div
              key={point.text}
              className={`glass rounded-2xl p-6 md:p-8 text-center group cursor-default transition-all duration-700 hover:shadow-[0_0_40px_rgba(199,163,107,0.2)] hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-500 group-hover:scale-110">
                <point.icon className="w-7 h-7 text-primary transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="text-3xl md:text-4xl font-heading text-foreground mb-2 group-hover:text-shimmer transition-all duration-500">{point.stat}</div>
              <p className="text-sm text-muted-foreground">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Voice note testimonials */}
        <div className={`max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '800ms' }}>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-2xs text-muted-foreground tracking-[0.3em] uppercase">Client Voices</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>

          <div className="grid md:grid-cols-3 gap-5">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`glass rounded-2xl p-6 transition-all duration-700 group cursor-pointer hover:shadow-[0_0_30px_rgba(199,163,107,0.15)] hover:-translate-y-1 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                {/* Audio player style header */}
                <div className="flex items-center gap-3 mb-5">
                  <button className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(199,163,107,0.3)]">
                    <Play className="w-5 h-5 text-primary ml-0.5" />
                  </button>
                  <div className="flex-1">
                    {/* Animated waveform */}
                    <div className="flex items-center gap-0.5 h-8">
                      {Array.from({ length: 20 }).map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-primary/40 rounded-full transition-all duration-300 group-hover:bg-primary/60"
                          style={{ 
                            height: `${Math.random() * 100}%`, 
                            minHeight: '4px',
                            animationDelay: `${i * 50}ms`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-2xs text-muted-foreground font-mono">{testimonial.duration}</span>
                </div>

                {/* Quote */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-5 italic">
                  "{testimonial.text}"
                </p>

                {/* Client info */}
                <div className="pt-4 border-t border-border/30">
                  <p className="text-sm text-foreground font-medium">{testimonial.name}</p>
                  <p className="text-xs text-primary">{testimonial.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Material partners */}
        <div className={`mt-20 pt-16 border-t border-border/20 transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '1200ms' }}>
          <p className="text-center text-xs text-muted-foreground tracking-[0.3em] uppercase mb-10">
            Trusted Material Partners
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
            {['Kohler', 'Grohe', 'Hettich', 'Hafele', 'Asian Paints'].map((brand, index) => (
              <span 
                key={brand} 
                className="text-lg font-heading text-muted-foreground/40 hover:text-primary/60 transition-all duration-500 cursor-default"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
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
