import { Sparkles, Award, Users, CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Custom Design",
      description: "Tailored design solutions that match your requirements and budget, ensuring optimal use of space and functionality.",
    },
    {
      icon: Award,
      title: "Quality Materials",
      description: "We work with reliable suppliers to provide durable, high-quality materials that ensure longevity and value for money.",
    },
    {
      icon: Users,
      title: "Skilled Team",
      description: "Our experienced professionals bring expertise in design, construction, and project management to deliver excellent results.",
    },
    {
      icon: CheckCircle,
      title: "Complete Solutions",
      description: "End-to-end project management from planning to execution, ensuring timely delivery and transparent communication throughout.",
    },
  ];

  return (
    <section id="services" className="py-32 bg-gradient-to-b from-background to-[hsl(25,20%,10%)] texture-linen relative">
      <div className="container mx-auto px-6">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16 fade-in-up">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Why Choose EdgeHomes
          </h2>
          <div className="gold-divider"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto relative">
          {/* Vertical dividers between cards (desktop) */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-2/4 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          <div className="hidden lg:block absolute top-0 bottom-0 left-3/4 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>
          
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 hover-lift hover:border-primary/40 hover:bg-card/70 fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(197,165,107,0.1)]">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground font-body leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
