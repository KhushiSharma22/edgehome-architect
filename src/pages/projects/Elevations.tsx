import { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { useIntersectionAnimation } from "@/hooks/useIntersectionAnimation";

// Import custom elevation images
import customImage1 from "@/assets/elevation-custom-1.jpg";
import customImage2 from "@/assets/elevation-custom-2.jpg";
import customImage3 from "@/assets/elevation-custom-3.jpg";
import customImage4 from "@/assets/elevation-custom-4.jpg";
import customImage5 from "@/assets/elevation-custom-5.jpg";
import customImage6 from "@/assets/elevation-custom-6.jpg";
import customImage7 from "@/assets/elevation-custom-7.jpg";
import customImage8 from "@/assets/elevation-custom-8.jpg";

const projects = [
  { 
    id: 1, 
    image: customImage1,
    text: "Panipat Sector 15"
  },
  { 
    id: 2, 
    image: customImage2,
    text: "Sec 11 Faridabad"
  },
  { 
    id: 3, 
    image: customImage3,
    text: "Sector 15 Faridabad"
  },
  { 
    id: 4, 
    image: customImage4,
    text: "Sector 17 Faridabad"
  },
  { 
    id: 5, 
    image: customImage5,
    text: "Sector 21A Faridabad"
  },
  { 
    id: 6, 
    image: customImage6,
    text: "Sector 64 Faridabad"
  },
  { 
    id: 7, 
    image: customImage7,
    text: "Sector 77 Faridabad"
  },
  { 
    id: 8, 
    image: customImage8,
    text: "Sector 85 Faridabad"
  },
];

const Elevations = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-24 xl:pb-28 bg-gradient-to-b from-background to-muted/5">
        <div className="container mx-auto px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center px-2 sm:px-4"
          >
            <div className="inline-block px-3 sm:px-4 py-1 sm:py-1.5 text-[10px] xs:text-xs sm:text-sm font-medium tracking-wider text-primary bg-primary/10 rounded-full mb-3 sm:mb-4">
              ARCHITECTURAL ELEVATIONS
            </div>
            <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-foreground leading-[1.1] md:leading-[1.15] tracking-tight">
              Transformative Elevation
              <br className="hidden xs:block" />
              <span className="text-primary">Design Solutions</span>
            </h1>
            <div className="w-16 sm:w-20 h-0.5 sm:h-1 bg-primary/80 mx-auto my-4 sm:my-5 md:my-6"></div>
            <p className="text-sm xs:text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed sm:leading-loose">
              Showcasing our portfolio of architectural elevations that blend innovative design with functional aesthetics. Each project reflects our commitment to excellence and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28">
        <div className="container mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>


      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

interface Project {
  id: number;
  image: string;
  text: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [ref, isVisible] = useIntersectionAnimation<HTMLDivElement>({ threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ 
        duration: 0.4, 
        delay: Math.min(0.1 * Math.floor(index / 2), 0.4),
        ease: [0.16, 1, 0.3, 1]
      }}
      className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-card border border-border/20 hover:shadow-md transition-all duration-300 hover:border-primary/20"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
        <img
          src={project.image}
          alt={`Elevation Design - ${project.text}`}
          width={600}
          height={450}
          className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 will-change-transform"
          loading="lazy"
          decoding="async"
          style={{ contentVisibility: 'auto' }}
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
          <div className="text-xs xs:text-sm font-medium text-white/90">Project #{project.id}</div>
          <div className="font-medium text-sm xs:text-base sm:text-lg leading-tight mt-0.5">{project.text}</div>
        </div>
      </div>
      <div className="p-3 xs:p-4 sm:p-5">
        <h3 className="text-sm xs:text-base sm:text-lg font-medium text-foreground line-clamp-1">{project.text}</h3>
        <div className="text-xs xs:text-sm text-muted-foreground mt-0.5">Residential Elevation</div>
      </div>
    </motion.div>
  );
};

export default Elevations;
