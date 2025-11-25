import { Sparkles, Award, Users, CheckCircle } from "lucide-react";

const WhyChooseSection = () => {
  const features = [
    {
      icon: Sparkles,
      title: "Bespoke Design",
      description: "Every project is uniquely tailored to your style, needs, and vision, ensuring a one-of-a-kind space that truly reflects you.",
    },
    {
      icon: Award,
      title: "Premium Materials",
      description: "We source only the finest materials and finishes from trusted suppliers, guaranteeing durability and timeless elegance.",
    },
    {
      icon: Users,
      title: "Experienced Team",
      description: "Our designers and craftsmen bring decades of combined expertise, delivering exceptional quality on every project.",
    },
    {
      icon: CheckCircle,
      title: "Turnkey Execution",
      description: "From initial concept to final installation, we manage every detail, ensuring a seamless and stress-free experience.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-16 fade-in-up">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card border border-border rounded-lg p-8 smooth-transition hover:border-primary/60 hover:shadow-xl fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {feature.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
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
