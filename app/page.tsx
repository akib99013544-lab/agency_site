import LoadingScreen from "@/components/LoadingScreen";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustedPlatforms from "@/components/TrustedPlatforms";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Navbar />
      <main className="site-shell">
        <HeroSection />
        <TrustedPlatforms />
        <ServicesSection />
        <PortfolioSection />
        <WhyChooseUs />
        <ProcessSection />
        <AboutSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}
