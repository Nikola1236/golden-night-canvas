import Header from "@/components/Header";
import TradingHeroSection from "@/components/TradingHeroSection";
import MeetScytheSection from "@/components/MeetScytheSection";
import TradingStrategiesSection from "@/components/TradingStrategiesSection";
import PerformanceSection from "@/components/PerformanceSection";
import TradingTestimonialsSection from "@/components/TradingTestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import TradingFooter from "@/components/TradingFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <TradingHeroSection />
      <MeetScytheSection />
      <TradingStrategiesSection />
      <PerformanceSection />
      <TradingTestimonialsSection />
      <FAQSection />
      <ContactSection />
      <TradingFooter />
    </div>
  );
};

export default Index;
