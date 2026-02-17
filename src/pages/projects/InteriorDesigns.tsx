import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

import interiorBedroom from "@/assets/interior-bedroom-gurgaon.jpg";
import interiorDining from "@/assets/interior-dining-modern.jpg";
import interiorKitchen from "@/assets/interior-kitchen-luxury.jpg";
import interiorWashroom from "@/assets/interior-washroom-luxury.jpg";
import interiorPenthouse from "@/assets/interior-penthouse-bedroom.jpg";
import interiorDrawing from "@/assets/interior-drawing-dining.jpg";
import livingAfter from "@/assets/living-after-new.jpg";
import kitchenAfter from "@/assets/kitchen-after-new.jpg";

const projects = [
  {
    title: "Luxury Master Bedroom",
    location: "Shalimar Bagh, Delhi",
    style: "Contemporary Luxury",
    category: "Bedroom",
    image: interiorBedroom,
  },
  {
    title: "Modern Dining Space",
    location: "Model Town, Delhi",
    style: "Minimalist Warm",
    category: "Dining",
    image: interiorDining,
  },
  {
    title: "Designer Kitchen",
    location: "Paschim Vihar, Delhi",
    style: "Italian Modular",
    category: "Kitchen",
    image: interiorKitchen,
  },
  {
    title: "Spa Washroom",
    location: "Rohini, Delhi",
    style: "Marble & Brass",
    category: "Washroom",
    image: interiorWashroom,
  },
  {
    title: "Penthouse Suite",
    location: "Gurugram, Haryana",
    style: "Ultra Premium",
    category: "Bedroom",
    image: interiorPenthouse,
  },
  {
    title: "Drawing & Dining",
    location: "Pitampura, Delhi",
    style: "Classic Modern",
    category: "Living",
    image: interiorDrawing,
  },
  {
    title: "Contemporary Living",
    location: "Dwarka, Delhi",
    style: "Scandinavian Fusion",
    category: "Living",
    image: livingAfter,
  },
  {
    title: "Premium Kitchen",
    location: "Chattarpur, Delhi",
    style: "Neo-Classic",
    category: "Kitchen",
    image: kitchenAfter,
  },
];

const InteriorDesigns = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.08),transparent_60%)]" />
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-primary/80 font-medium">
              Our Portfolio
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] tracking-tight">
              Interior
              <br />
              <span className="text-primary">Designs</span>
            </h1>
            <p className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
              Spaces that evoke emotion. Every room we craft is a dialogue between luxury, comfort, and your personal story.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 md:pb-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 border-t border-border/20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold">
              Ready to <span className="text-primary">Transform</span>?
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md mx-auto">
              Let's create interiors that reflect your taste and elevate your lifestyle.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium tracking-wider uppercase text-sm hover:bg-primary/90 transition-all duration-300"
            >
              Book Consultation
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

const ProjectCard = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const [ref, isVisible] = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.15 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-card border border-border/20"
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Category Badge */}
        <span className="absolute top-4 left-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium bg-primary/90 text-primary-foreground rounded-full">
          {project.category}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 sm:p-6">
        <h3 className="text-xl sm:text-2xl font-heading font-bold tracking-tight">
          {project.title}
        </h3>
        <div className="mt-3 flex items-center gap-4 text-sm text-muted-foreground">
          <span>{project.location}</span>
          <span className="w-1 h-1 rounded-full bg-primary/50" />
          <span>{project.style}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default InteriorDesigns;
