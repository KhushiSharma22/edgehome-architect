import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

import bedroomImg from "@/assets/portfolio-bedroom.jpg";
import kitchenImg from "@/assets/portfolio-kitchen.jpg";
import diningImg from "@/assets/portfolio-dining.jpg";
import bathroomImg from "@/assets/portfolio-bathroom.jpg";

const projects = [
  {
    id: 1,
    title: "The Minimalist Haven",
    location: "Greater Kailash, Delhi",
    style: "Modern Minimal",
    year: "2024",
    image: bedroomImg,
    featured: true,
  },
  {
    id: 2,
    title: "Contemporary Kitchen",
    location: "Pitampura, Delhi",
    style: "Warm Luxury",
    year: "2024",
    image: kitchenImg,
    featured: false,
  },
  {
    id: 3,
    title: "Elegant Dining Space",
    location: "Vasant Kunj, Delhi",
    style: "Classic Modern",
    year: "2023",
    image: diningImg,
    featured: false,
  },
  {
    id: 4,
    title: "Serene Spa Bath",
    location: "Golf Links, Delhi",
    style: "Minimal",
    year: "2023",
    image: bathroomImg,
    featured: false,
  },
];

const filmstripProjects = [
  { id: 5, title: "Rohini Residence", year: "2023", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=600&fit=crop" },
  { id: 6, title: "Model Town Villa", year: "2023", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=600&fit=crop" },
  { id: 7, title: "Shalimar Bagh Home", year: "2022", image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=400&h=600&fit=crop" },
  { id: 8, title: "Paschim Vihar", year: "2022", image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=400&h=600&fit=crop" },
];

const ProjectsEditorial = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.1 });
  const featured = projects.find(p => p.featured);
  const secondary = projects.filter(p => !p.featured).slice(0, 2);

  return (
    <section id="projects" ref={ref} className="section-padding bg-card relative overflow-hidden">
      {/* Animated background */}
      <div className="grain absolute inset-0" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-morph" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary/3 rounded-full blur-3xl animate-morph" style={{ animationDelay: '-12s' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className={`flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          <div>
            <span className={`text-primary text-xs tracking-[0.4em] uppercase mb-4 block transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              Portfolio
            </span>
            <h2 className={`text-3xl md:text-5xl lg:text-6xl font-heading text-foreground transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Projects as <span className="text-shimmer">Stories</span>
            </h2>
          </div>
          <a 
            href="#" 
            className={`text-muted-foreground hover:text-primary transition-all duration-500 flex items-center gap-2 group gradient-underline ${isVisible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '400ms' }}
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </a>
        </div>

        {/* Editorial layout with staggered reveal */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Featured project - large */}
          {featured && (
            <div
              className={`lg:col-span-7 rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:row-span-2 group cursor-pointer relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
              style={{ transitionDelay: '500ms' }}
              onMouseEnter={() => setHoveredProject(featured.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className={`w-full h-full object-cover transition-all duration-1000 ${
                    hoveredProject === featured.id ? 'scale-110 blur-[2px]' : 'scale-100'
                  }`}
                />
              </div>
              
              {/* Overlay with slide-up animation */}
              <div className={`absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-all duration-700 ${
                hoveredProject === featured.id ? 'opacity-100' : 'opacity-80'
              }`} />
              
              <div className={`absolute inset-0 flex flex-col items-start justify-end p-8 md:p-10 transition-all duration-700 ${
                hoveredProject === featured.id ? 'translate-y-0' : 'translate-y-4'
              }`}>
                <span className="text-2xs text-primary tracking-wider uppercase mb-3 px-3 py-1 rounded-full bg-primary/10 backdrop-blur-sm">
                  {featured.style} • {featured.year}
                </span>
                <h3 className="text-2xl md:text-4xl font-heading text-foreground mb-2">
                  {featured.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">{featured.location}</p>
                <span className={`text-sm text-primary flex items-center gap-2 transition-all duration-500 ${
                  hoveredProject === featured.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                }`}>
                  View Case Study
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </span>
              </div>
              
              {/* Border glow effect */}
              <div className={`absolute inset-0 rounded-3xl border-2 transition-all duration-700 pointer-events-none ${
                hoveredProject === featured.id ? 'border-primary/50 shadow-[0_0_40px_rgba(199,163,107,0.3)]' : 'border-transparent'
              }`} />
            </div>
          )}

          {/* Secondary projects - 2 small */}
          <div className="lg:col-span-5 grid gap-6">
            {secondary.map((project, index) => (
              <div
                key={project.id}
                className={`rounded-2xl overflow-hidden aspect-[16/10] group cursor-pointer relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${600 + index * 150}ms` }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="absolute inset-0 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-all duration-1000 ${
                      hoveredProject === project.id ? 'scale-110' : 'scale-100'
                    }`}
                  />
                </div>
                
                <div className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-all duration-500 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-80'
                }`} />
                
                <div className={`absolute inset-0 flex flex-col items-start justify-end p-6 transition-all duration-500 ${
                  hoveredProject === project.id ? 'translate-y-0' : 'translate-y-2'
                }`}>
                  <span className="text-2xs text-primary tracking-wider uppercase mb-2">
                    {project.style} • {project.year}
                  </span>
                  <h3 className="text-xl font-heading text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
                
                {/* Border glow */}
                <div className={`absolute inset-0 rounded-2xl border transition-all duration-500 pointer-events-none ${
                  hoveredProject === project.id ? 'border-primary/40' : 'border-transparent'
                }`} />
              </div>
            ))}
          </div>
        </div>

        {/* Filmstrip */}
        <div className={`mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`} style={{ transitionDelay: '900ms' }}>
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
            <span className="text-2xs text-muted-foreground tracking-[0.3em] uppercase">More Projects</span>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent" />
          </div>
          
          <div className="flex gap-5 overflow-x-auto pb-4 custom-scrollbar">
            {filmstripProjects.map((project, index) => (
              <div
                key={project.id}
                className={`flex-shrink-0 w-52 rounded-xl overflow-hidden aspect-[2/3] group cursor-pointer relative transition-all duration-700 hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${1000 + index * 100}ms` }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <h4 className="text-sm font-heading text-foreground">{project.title}</h4>
                  <span className="text-2xs text-primary">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsEditorial;
