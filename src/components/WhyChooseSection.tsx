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
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-center text-foreground mb-12">
          Why Choose KR Construction
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-6 smooth-transition hover:border-primary/40 hover:shadow-lg"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
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
