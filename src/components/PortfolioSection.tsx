import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import diningImg from "@/assets/portfolio-dining.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";

const PortfolioSection = () => {
  const projects = [
    { title: "Modern Bedroom Suite", image: bedroomImg },
    { title: "Contemporary Kitchen", image: kitchenImg },
    { title: "Elegant Dining Space", image: diningImg },
    { title: "Luxury Bathroom", image: bathroomImg },
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-center text-foreground mb-16 fade-in-up">
          Our Recent Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover smooth-transition group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 smooth-transition flex items-end">
                <div className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-2 relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-primary group-hover:after:w-full after:transition-all after:duration-500">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
