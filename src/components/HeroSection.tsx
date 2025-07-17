import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-night-blue/90 to-night-blue/70" />
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
          Excellence in Every
          <span className="text-primary block mt-2">Detail</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Transform your vision into reality with our premium solutions designed for those who demand nothing but the best.
        </p>
        
        <Button 
          variant="hero" 
          size="xl"
          className="font-inter hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
        >
          Start Your Journey
        </Button>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-foreground/60 animate-bounce">
        <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;