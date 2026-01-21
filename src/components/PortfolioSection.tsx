import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import diningImg from "@/assets/portfolio-dining.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";

const PortfolioSection = () => {
  const projects = [
    { title: "Residential Bedroom", image: bedroomImg },
    { title: "Modular Kitchen", image: kitchenImg },
    { title: "Dining Area Design", image: diningImg },
    { title: "Bathroom Renovation", image: bathroomImg },
  ];

  return (
    <section id="projects" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Enhanced Section Heading */}
        <div className="text-center mb-16 fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary"></div>
            <p className="text-primary text-xs tracking-[0.3em] font-body uppercase">Portfolio</p>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground">
            Completed Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-xl hover-lift shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.25)] fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              {/* Enhanced Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-8 w-full">
                  <h3 className="text-2xl font-heading font-semibold text-foreground mb-3">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-primary text-sm font-body">
                    <span>Explore</span>
                    <svg className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
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
