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
// Founders Section - Cinematic Dual Portrait
const FoundersSection = () => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const [activeFounder, setActiveFounder] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  const founders = [
    {
      name: 'Ar. Bhanupriya',
      role: 'Principal Architect',
      department: 'Design & Development',
      initial: 'B',
      description: 'Her designs, effected by an intuitive sensitivity to client preferences and an obsessive attention to detail, synchronizes social and cultural nuances to exude a subtle, yet distinctive, individuality.',
      philosophy: 'Bringing the serenity of spiritualism to the design desk, she translates her own connection to nature and human interaction with space to compose ergonomic and responsive structural forms.',
      accent: 'from-primary/30 via-primary/10',
    },
    {
      name: 'Deepak Manchanda',
      role: 'Director',
      department: 'Constructions & Operations',
      initial: 'D',
      description: 'In the world of construction, where every brick laid and beam placed plays a pivotal role in shaping dreams into reality, there exists an unsung hero who embodies dedication, expertise, and relentless pursuit of excellence.',
      philosophy: 'In an industry where trust is paramount, his integrity and client-centric approach have set EdgeHomes apart as the benchmark for quality construction.',
      accent: 'from-amber-500/30 via-amber-500/10',
    },
  ];

  return (
    <section 
      ref={ref} 
      className="relative py-32 md:py-48 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-[#080808] to-background" />
      
      {/* Animated Grid Lines */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent w-full"
            style={{
              top: `${15 + i * 15}%`,
              transform: `translateX(${(mousePosition.x - 0.5) * 20}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent h-full"
            style={{
              left: `${20 + i * 20}%`,
              transform: `translateY(${(mousePosition.y - 0.5) * 20}px)`,
              transition: 'transform 0.5s ease-out',
            }}
          />
        ))}
      </div>

      {/* Floating Orbs */}
      <div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] animate-float-slow"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * 50}px, ${(mousePosition.y - 0.5) * 50}px)`,
        }}
      />
      <div 
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-500/5 rounded-full blur-[100px] animate-float-slower"
        style={{
          transform: `translate(${(mousePosition.x - 0.5) * -30}px, ${(mousePosition.y - 0.5) * -30}px)`,
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center mb-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className="text-primary/60 text-xs tracking-[0.5em] uppercase mb-4 block">The Visionaries</span>
          <h2 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground/90 mb-6">
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <div className="flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
            <span className="text-muted-foreground/50 text-sm tracking-widest">OUR TEAM</span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
          </div>
        </div>

        {/* Founders Grid - Cinematic Cards */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {founders.map((founder, index) => (
            <div
              key={founder.name}
              className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: `${index * 300}ms` }}
              onMouseEnter={() => setActiveFounder(index)}
              onMouseLeave={() => setActiveFounder(null)}
            >
              {/* Card Container */}
              <div className={`
                relative rounded-3xl overflow-hidden
                border border-border/20 bg-card/20 backdrop-blur-sm
                transition-all duration-700
                ${activeFounder === index ? 'border-primary/40 scale-[1.02] shadow-2xl shadow-primary/10' : 'hover:border-border/40'}
              `}>
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${founder.accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                
                {/* Top Section - Initial & Name */}
                <div className="relative p-8 lg:p-10">
                  {/* Large Initial */}
                  <div className="relative mb-8">
                    <span className={`
                      absolute -top-4 -left-2 text-[180px] md:text-[220px] font-heading 
                      leading-none select-none pointer-events-none
                      bg-gradient-to-b from-primary/10 to-transparent bg-clip-text text-transparent
                      transition-all duration-700
                      ${activeFounder === index ? 'scale-110 from-primary/20' : ''}
                    `}>
                      {founder.initial}
                    </span>
                    
                    {/* Geometric Accent */}
                    <div className={`
                      absolute top-8 right-0 w-24 h-24 border border-primary/20 rotate-45
                      transition-all duration-700
                      ${activeFounder === index ? 'rotate-[60deg] scale-110 border-primary/40' : ''}
                    `} />
                    <div className={`
                      absolute top-12 right-4 w-16 h-16 border border-primary/10 rotate-12
                      transition-all duration-700
                      ${activeFounder === index ? 'rotate-[25deg] scale-90' : ''}
                    `} />
                  </div>

                  {/* Name & Role */}
                  <div className="relative z-10 mt-32">
                    <h3 className={`
                      font-heading text-3xl md:text-4xl lg:text-5xl text-foreground/90 mb-3
                      transition-all duration-500
                      ${activeFounder === index ? 'text-foreground' : ''}
                    `}>
                      {founder.name}
                    </h3>
                    
                    <div className="flex flex-col gap-1 mb-8">
                      <span className="text-primary text-sm tracking-[0.2em] uppercase font-medium">
                        {founder.role}
                      </span>
                      <span className="text-muted-foreground/60 text-xs tracking-wider">
                        ({founder.department})
                      </span>
                    </div>

                    {/* Animated Line */}
                    <div className={`
                      h-px bg-gradient-to-r from-primary/50 via-primary/20 to-transparent
                      transition-all duration-700
                      ${activeFounder === index ? 'w-full' : 'w-24'}
                    `} />
                  </div>
                </div>

                {/* Description Section */}
                <div className="relative px-8 lg:px-10 pb-10">
                  <div className={`
                    space-y-4 transition-all duration-700
                    ${activeFounder === index ? 'opacity-100 translate-y-0' : 'opacity-70'}
                  `}>
                    <p className="text-muted-foreground leading-relaxed text-sm lg:text-base">
                      "{founder.description}"
                    </p>
                    <p className="text-muted-foreground/70 leading-relaxed text-sm italic">
                      {founder.philosophy}
                    </p>
                  </div>

                  {/* Bottom Accent */}
                  <div className={`
                    absolute bottom-0 left-0 right-0 h-1 
                    bg-gradient-to-r from-transparent via-primary/30 to-transparent
                    transform origin-center scale-x-0 group-hover:scale-x-100
                    transition-transform duration-700
                  `} />
                </div>

                {/* Corner Accents */}
                <div className="absolute top-4 right-4 w-8 h-8">
                  <div className="absolute top-0 right-0 w-full h-px bg-primary/30" />
                  <div className="absolute top-0 right-0 h-full w-px bg-primary/30" />
                </div>
                <div className="absolute bottom-4 left-4 w-8 h-8">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-primary/30" />
                  <div className="absolute bottom-0 left-0 h-full w-px bg-primary/30" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Tagline */}
        <div className={`
          text-center mt-24 transition-all duration-1000 delay-700
          ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
        `}>
          <p className="text-muted-foreground/50 text-sm tracking-[0.3em] uppercase">
            Design × Construction × Vision
          </p>
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
        <FoundersSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default About;
