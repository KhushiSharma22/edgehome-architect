import { useState, useEffect, useRef } from "react";
import { Search, Lightbulb, Eye, Hammer, CheckCircle2 } from "lucide-react";

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="method" ref={sectionRef} className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <div className="text-center mb-20 fade-in-up">
          <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-5xl font-heading text-foreground mb-4">
            The EdgeHomes Method
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A proven process refined over a decade of delivering exceptional spaces.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Progress line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-border">
              <div 
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-primary to-primary/50 transition-all duration-500"
                style={{ height: `${progress}%` }}
              />
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className={`relative pl-16 transition-all duration-500 ${
                    index <= activeStep ? 'opacity-100' : 'opacity-30'
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Step indicator */}
                  <div className={`absolute left-0 w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                    index <= activeStep
                      ? 'bg-primary/20 border-2 border-primary'
                      : 'bg-muted border border-border'
                  }`}>
                    <step.icon className={`w-5 h-5 ${
                      index <= activeStep ? 'text-primary' : 'text-muted-foreground'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="cursor-pointer group">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-xl font-heading transition-colors ${
                        index === activeStep ? 'text-primary' : 'text-foreground group-hover:text-primary'
                      }`}>
                        {step.title}
                      </h3>
                      <span className="text-2xs text-muted-foreground tracking-wider uppercase">
                        {step.subtitle}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active step detail panel */}
          <div className="lg:sticky lg:top-32">
            <div className="glass rounded-3xl p-8 hover-glow transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-primary/20 border border-primary/30 flex items-center justify-center">
                  {(() => {
                    const StepIcon = steps[activeStep].icon;
                    return <StepIcon className="w-7 h-7 text-primary" />;
                  })()}
                </div>
                <div>
                  <h4 className="text-2xl font-heading text-foreground">
                    {steps[activeStep].title}
                  </h4>
                  <span className="text-sm text-primary">
                    {steps[activeStep].subtitle}
                  </span>
                </div>
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed">
                {steps[activeStep].description}
              </p>

              <div className="space-y-3 mb-8">
                <span className="text-xs text-muted-foreground tracking-wider uppercase">
                  Deliverables
                </span>
                {steps[activeStep].deliverables.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EdgeHomesMethod;
