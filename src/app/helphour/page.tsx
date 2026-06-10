import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import HeroSection from "../components/sections/HeroSection";
// import PortfolioSection from "../components/sections/PortfolioSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import AnalyzerModal from "../components/brand-analyzer/AnalyzerModal";

export default function HelpHourPage() {
  return (
    <div className="bg-brand">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      {/* <PortfolioSection /> */}
      <ContactSection />
      <AnalyzerModal/>
    </div>
  );
}
