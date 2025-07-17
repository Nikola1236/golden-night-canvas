import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TradingStrategies from "@/components/TradingStrategies";
import Performance from "@/components/Performance";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <TradingStrategies />
      <Performance />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;