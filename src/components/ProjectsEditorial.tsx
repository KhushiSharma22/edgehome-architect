import { useState } from "react";
import { ArrowRight } from "lucide-react";

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
  const featured = projects.find(p => p.featured);
  const secondary = projects.filter(p => !p.featured).slice(0, 2);

  return (
    <section id="projects" className="section-padding bg-card grain">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="fade-in-up">
            <span className="text-primary text-xs tracking-[0.3em] uppercase mb-4 block">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-5xl font-heading text-foreground">
              Projects as Stories
            </h2>
          </div>
          <a href="#" className="text-muted-foreground hover:text-primary underline-sweep transition-colors flex items-center gap-2 group">
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Editorial layout */}
        <div className="grid lg:grid-cols-12 gap-6 mb-8">
          {/* Featured project - large */}
          {featured && (
            <div
              className="lg:col-span-7 card-reveal rounded-2xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:row-span-2"
              onMouseEnter={() => setHoveredProject(featured.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover transition-transform duration-700"
              />
              <div className="reveal-content flex-col items-start justify-end p-8">
                <span className="text-2xs text-primary tracking-wider uppercase mb-2">
                  {featured.style} • {featured.year}
                </span>
                <h3 className="text-2xl md:text-3xl font-heading text-foreground mb-1">
                  {featured.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">{featured.location}</p>
                <span className="text-sm text-primary underline-sweep cursor-pointer flex items-center gap-2">
                  View Case Study
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          )}

          {/* Secondary projects - 2 small */}
          <div className="lg:col-span-5 grid gap-6">
            {secondary.map((project) => (
              <div
                key={project.id}
                className="card-reveal rounded-2xl overflow-hidden aspect-[16/10]"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="reveal-content flex-col items-start justify-end p-6">
                  <span className="text-2xs text-primary tracking-wider uppercase mb-2">
                    {project.style} • {project.year}
                  </span>
                  <h3 className="text-xl font-heading text-foreground mb-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{project.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Filmstrip */}
        <div className="mt-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px flex-1 bg-border" />
            <span className="text-2xs text-muted-foreground tracking-wider uppercase">More Projects</span>
            <div className="h-px flex-1 bg-border" />
          </div>
          
          <div className="flex gap-4 overflow-x-auto pb-4 custom-scrollbar">
            {filmstripProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-48 card-reveal rounded-xl overflow-hidden aspect-[2/3]"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="reveal-content flex-col items-start justify-end p-4">
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
