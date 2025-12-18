import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SignatureStrip from "@/components/SignatureStrip";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import EdgeHomesMethod from "@/components/EdgeHomesMethod";
import MaterialsCraft from "@/components/MaterialsCraft";
import ProjectsEditorial from "@/components/ProjectsEditorial";
import TrustProofWall from "@/components/TrustProofWall";
import InstantEstimate from "@/components/InstantEstimate";
import ConsultationCTA from "@/components/ConsultationCTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SignatureStrip />
        <BeforeAfterSlider />
        <EdgeHomesMethod />
        <MaterialsCraft />
        <ProjectsEditorial />
        <TrustProofWall />
        <InstantEstimate />
        <ConsultationCTA />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
