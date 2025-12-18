import { useEffect, useState, useRef } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';

// Hero Section
const HeroAbout = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, isVisible } = useScrollAnimation();

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/95" />
      
      {/* Architectural Light Rays */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-0 left-1/4 w-px h-[70vh] bg-gradient-to-b from-primary/20 via-primary/5 to-transparent"
          style={{ transform: `translateY(${isLoaded ? 0 : -100}%)`, transition: 'transform 2s ease-out' }}
        />
        <div 
          className="absolute top-0 right-1/3 w-px h-[60vh] bg-gradient-to-b from-primary/15 via-primary/5 to-transparent"
          style={{ transform: `translateY(${isLoaded ? 0 : -100}%)`, transition: 'transform 2.5s ease-out 0.3s' }}
        />
        <div 
          className="absolute top-0 right-1/4 w-px h-[80vh] bg-gradient-to-b from-primary/10 via-primary/5 to-transparent"
          style={{ transform: `translateY(${isLoaded ? 0 : -100}%)`, transition: 'transform 3s ease-out 0.5s' }}
        />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 border border-primary/10 rotate-45 animate-float-slow" />
        <div className="absolute bottom-1/3 right-16 w-24 h-24 border border-primary/5 rotate-12 animate-float-slower" />
        <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse-glow" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Pre-headline */}
        <div 
          className={`transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <span className="inline-block text-primary/60 text-xs tracking-[0.5em] uppercase mb-8">
            The EdgeHomes Story
          </span>
        </div>

        {/* Main Headline */}
        <h1 
          className={`font-heading text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] mb-8 transition-all duration-1200 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
        >
          <span className="block text-foreground/90">Design is not</span>
          <span className="block mt-2">
            <span className="text-foreground/90">what we </span>
            <span className="text-gradient-gold">do.</span>
          </span>
          <span className="block mt-2 text-foreground/90">
            It's how we <span className="italic text-primary">think.</span>
          </span>
        </h1>

        {/* Subtext */}
        <p 
          className={`text-lg md:text-xl text-muted-foreground/70 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-[800ms] ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          EdgeHomes is a design & build studio shaping spaces that feel lived in, timeless, and intentional.
        </p>

        {/* Scroll Hint */}
        <div 
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 transition-all duration-1000 delay-[1200ms] ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          <span className="text-[10px] text-muted-foreground/50 tracking-[0.4em] uppercase">Discover</span>
          <div className="w-px h-16 bg-gradient-to-b from-primary/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
};

// Philosophy Section
const PhilosophySection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Gold accent line */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-[40%] bg-gradient-to-b from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left - Big Quote */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="relative">
              <span className="absolute -top-8 -left-4 text-8xl text-primary/10 font-heading">"</span>
              <blockquote className="font-heading text-3xl md:text-4xl lg:text-5xl leading-tight text-foreground/90">
                A space should feel 
                <span className="text-primary"> calm </span>
                before it looks beautiful.
              </blockquote>
              <div className="mt-8 w-24 h-px bg-gradient-to-r from-primary/50 to-transparent" />
            </div>
          </div>

          {/* Right - Philosophy Points */}
          <div className={`space-y-10 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            {[
              {
                title: 'Simplicity as Luxury',
                text: 'We believe the most powerful design is invisible. It doesn\'t demand attention—it earns it through quiet confidence and intentional restraint.'
              },
              {
                title: 'Execution Over Promises',
                text: 'Ideas are abundant. What separates us is our obsessive focus on bringing every detail to life exactly as envisioned—no compromises, no excuses.'
              },
              {
                title: 'Timeless Over Trendy',
                text: 'We design spaces meant to age gracefully. Trends fade in seasons. We build for decades.'
              }
            ].map((item, index) => (
              <div 
                key={item.title}
                className={`group transition-all duration-700 delay-${(index + 1) * 200}`}
                style={{ transitionDelay: `${(index + 1) * 200}ms` }}
              >
                <h3 className="text-sm text-primary tracking-[0.2em] uppercase mb-3 group-hover:tracking-[0.3em] transition-all duration-500">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


// Cinematic Process Section
const CinematicProcess = () => {
  const phases = [
    { 
      number: '01', 
      title: 'The First Conversation', 
      subtitle: 'Where dreams find words',
      description: 'Before any line is drawn, we listen. To understand not just what you want—but why you want it.'
    },
    { 
      number: '02', 
      title: 'The First Drawing', 
      subtitle: 'Where vision takes shape',
      description: 'Ideas crystallize. Rough sketches become refined plans. Your future home begins to breathe on paper.'
    },
    { 
      number: '03', 
      title: 'The First Brick', 
      subtitle: 'Where intention meets action',
      description: 'Ground breaks. Material arrives. The invisible becomes tangible, one carefully placed element at a time.'
    },
    { 
      number: '04', 
      title: 'The Final Silence', 
      subtitle: 'Where we hand over the keys',
      description: 'The dust settles. The tools retreat. What remains is a space that was always meant for you.'
    }
  ];

  return (
    <section className="relative py-32 md:py-48">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
      
      {/* Vertical timeline line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent hidden lg:block" />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-24">
          <span className="text-primary/60 text-xs tracking-[0.5em] uppercase mb-4 block">Our Journey Together</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground/90">
            From First Call to Final Handover
          </h2>
        </div>

        {/* Phases */}
        <div className="space-y-32">
          {phases.map((phase, index) => (
            <PhaseItem key={phase.number} phase={phase} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PhaseItem = ({ phase, index }: { phase: { number: string; title: string; subtitle: string; description: string }; index: number }) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });
  const isEven = index % 2 === 0;

  return (
    <div 
      ref={ref}
      className={`relative grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Content */}
      <div className={`${isEven ? 'lg:pr-16' : 'lg:pl-16 lg:order-2'} ${isVisible ? (isEven ? 'translate-x-0' : 'translate-x-0') : (isEven ? '-translate-x-12' : 'translate-x-12')} transition-all duration-1000`}>
        <span className="text-7xl md:text-8xl font-heading text-primary/10 absolute -top-8 -left-4">
          {phase.number}
        </span>
        <div className="relative">
          <h3 className="font-heading text-3xl md:text-4xl text-foreground/90 mb-2">
            {phase.title}
          </h3>
          <p className="text-primary/70 text-sm tracking-wide mb-6 italic">
            {phase.subtitle}
          </p>
          <p className="text-muted-foreground leading-relaxed">
            {phase.description}
          </p>
        </div>
      </div>

      {/* Visual Element */}
      <div className={`${isEven ? 'lg:order-2 lg:pl-16' : 'lg:pr-16'} ${isVisible ? 'translate-x-0 opacity-100' : (isEven ? 'translate-x-12 opacity-0' : '-translate-x-12 opacity-0')} transition-all duration-1000 delay-200`}>
        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10" />
          <div className="absolute inset-0 border border-border/20 rounded-2xl" />
          {/* Abstract architectural pattern */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border border-primary/20 rotate-45 animate-pulse-slow" />
            <div className="absolute w-24 h-24 border border-primary/10 rotate-12" />
          </div>
        </div>
      </div>

      {/* Timeline dot */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary/50 hidden lg:block">
        <div className="absolute inset-0 rounded-full bg-primary animate-ping opacity-20" />
      </div>
    </div>
  );
};




// Final CTA Section
const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2 });

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#0a0a0a] to-background" />
      <div className="absolute inset-0 grain opacity-20" />
      
      {/* Accent glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-primary/60 text-xs tracking-[0.5em] uppercase mb-6 block">Let's Begin</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground/90 mb-6 leading-tight">
            Let's design something you'll never want to leave.
          </h2>
          <p className="text-muted-foreground/60 mb-12 max-w-xl mx-auto">
            Start with a conversation. No pressure. Just possibility.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-primary text-primary-foreground font-medium transition-all duration-500 hover:gap-5 hover:shadow-2xl hover:shadow-primary/20"
            >
              <Calendar className="w-5 h-5" />
              <span>Book a Private Consultation</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full border border-border/30 text-foreground/80 font-medium transition-all duration-500 hover:border-primary/50 hover:text-foreground"
            >
              <MessageCircle className="w-5 h-5 text-green-500" />
              <span>WhatsApp Discussion</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main About Page
const About = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <main>
        <HeroAbout />
        <PhilosophySection />
        <CinematicProcess />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
