import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SignatureStrip from "@/components/SignatureStrip";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import EdgeHomesMethod from "@/components/EdgeHomesMethod";
import MaterialsCraft from "@/components/MaterialsCraft";
import ProjectsEditorial from "@/components/ProjectsEditorial";
import TrustProofWall from "@/components/TrustProofWall";
import PartnerLogos from "@/components/PartnerLogos";
import InstantEstimate from "@/components/InstantEstimate";
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
        <PartnerLogos />
        <InstantEstimate />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
