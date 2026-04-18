import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServerCatalog from "@/components/ServerCatalog";
import FeaturesSection from "@/components/FeaturesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ServerCatalog />
      <FeaturesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
