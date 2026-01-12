import { useState, useEffect, useRef } from "react";
import { Search, Lightbulb, Eye, Hammer, CheckCircle2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  {
    icon: Search,
    title: "Discover",
    subtitle: "Week 1-2",
    description: "We begin with an in-depth consultation to understand your vision, lifestyle, and requirements.",
    deliverables: ["Site visit & measurements", "Mood board creation", "Budget alignment"],
  },
  {
    icon: Lightbulb,
    title: "Concept",
    subtitle: "Week 3-4",
    description: "Our designers craft unique concepts that blend aesthetics with functionality.",
    deliverables: ["Space planning", "Material palette", "3D concept sketches"],
  },
  {
    icon: Eye,
    title: "Visualization",
    subtitle: "Week 5-6",
    description: "Experience your space before it's built with photorealistic 3D renders.",
    deliverables: ["Detailed 3D renders", "360° walkthroughs", "Material specifications"],
  },
  {
    icon: Hammer,
    title: "Execution",
    subtitle: "Week 7-16",
    description: "Our skilled craftsmen bring the design to life with precision and care.",
    deliverables: ["Project timeline", "Quality checks", "Regular updates"],
  },
  {
    icon: CheckCircle2,
    title: "Handover",
    subtitle: "Final Week",
    description: "A seamless handover with complete documentation and warranty.",
    deliverables: ["Final walkthrough", "Maintenance guide", "Warranty documents"],
  },
];

const EdgeHomesMethod = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionHeight = rect.height;
      const viewportHeight = window.innerHeight;
      const scrollProgress = (viewportHeight - rect.top) / (sectionHeight + viewportHeight);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const stepProgress = Math.min(scrollProgress * 1.5, 1);
        setProgress(stepProgress * 100);
        setActiveStep(Math.min(Math.floor(stepProgress * steps.length), steps.length - 1));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="method" ref={sectionRef} className="py-12 sm:py-16 md:py-24 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-5 sm:left-10 w-48 h-48 sm:w-72 sm:h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-5 sm:right-10 w-64 h-64 sm:w-96 sm:h-96 bg-primary/3 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                          linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
        backgroundSize: '40px 40px'
      }} />
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section header */}
        <div ref={headerRef} className={`text-center mb-12 sm:mb-16 md:mb-24 transition-all duration-1000 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <span className={`text-primary text-[10px] sm:text-xs tracking-[0.3em] sm:tracking-[0.4em] uppercase mb-3 sm:mb-4 block transition-all duration-1000 delay-200 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
            Our Process
          </span>
          <h2 className={`text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-heading text-foreground mb-3 sm:mb-4 transition-all duration-1000 delay-300 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            The <span className="text-shimmer">EdgeHomes</span> Method
          </h2>
          <p className={`text-muted-foreground max-w-xs sm:max-w-lg mx-auto text-sm sm:text-lg transition-all duration-1000 delay-400 ${headerVisible ? 'opacity-100' : 'opacity-0'}`}>
            A proven process refined over a decade of delivering exceptional spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-start max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Animated progress line */}
            <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-0.5 bg-border/30 rounded-full overflow-hidden">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary via-primary to-primary/30 transition-all duration-700 ease-out rounded-full"
                style={{ height: `${progress}%` }}
              />
              {/* Glowing dot at progress end */}
              <div 
                className="absolute left-1/2 -translate-x-1/2 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full shadow-[0_0_20px_rgba(199,163,107,0.8)] transition-all duration-700"
                style={{ top: `${progress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-6 sm:space-y-10">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative pl-14 sm:pl-20 transition-all duration-700 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-20'
                  }`}
                  onClick={() => setActiveStep(index)}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Step indicator with animation */}
                  <div className={`absolute left-0 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep
                      ? 'bg-primary/20 border-2 border-primary shadow-[0_0_30px_rgba(199,163,107,0.3)]'
                      : 'bg-muted/50 border border-border'
                  }`}>
                    <step.icon className={`w-5 h-5 sm:w-6 sm:h-6 transition-all duration-500 ${
                      index <= activeStep ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                    
                    {/* Pulse animation for active step */}
                    {index === activeStep && (
                      <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-primary animate-ping opacity-30" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="cursor-pointer group">
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-1 sm:mb-2">
                      <h3 className={`text-base sm:text-xl font-heading transition-all duration-500 ${
                        index === activeStep ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-[10px] sm:text-2xs text-muted-foreground tracking-wider uppercase px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-muted/50">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active step detail panel */}
          <div className="lg:sticky lg:top-32 mt-8 lg:mt-0">
            <div className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-10 hover-glow transition-all duration-700 border border-border/30 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 sm:w-40 h-32 sm:h-40 bg-primary/10 rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 sm:gap-5 mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-primary/20 border-2 border-primary/40 flex items-center justify-center shadow-[0_0_40px_rgba(199,163,107,0.2)] animate-glow-pulse">
                    {(() => {
                      const StepIcon = steps[activeStep].icon;
                      return <StepIcon className="w-7 h-7 sm:w-9 sm:h-9 text-primary" />;
                    })()}
                  </div>
                  <div>
                    <h4 className="text-xl sm:text-3xl font-heading text-foreground">
                      {steps[activeStep].title}
                    </h4>
                    <span className="text-xs sm:text-sm text-primary font-medium">
                      {steps[activeStep].subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 sm:mb-8 leading-relaxed text-sm sm:text-lg">
                  {steps[activeStep].description}
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <span className="text-[10px] sm:text-xs text-muted-foreground tracking-[0.2em] sm:tracking-[0.3em] uppercase">
                    Deliverables
                  </span>
                  {steps[activeStep].deliverables.map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-3 rounded-lg sm:rounded-xl bg-muted/30 transition-all duration-500 hover:bg-muted/50"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-primary animate-pulse" />
                      <span className="text-xs sm:text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeHomesMethod;
