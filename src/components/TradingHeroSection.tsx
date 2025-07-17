import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Zap } from "lucide-react";
import tradingHeroBg from "@/assets/trading-hero-bg.png";

const TradingHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${tradingHeroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
        <BarChart3 className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-1/3 right-10 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
        <TrendingUp className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute top-1/3 right-20 w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
        <Zap className="w-6 h-6 text-primary" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 leading-tight">
          Master
          <span className="block text-foreground/80">the Markets</span>
          <span className="text-primary block">Professionally</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed">
          Advanced algorithmic trading strategies for professionals who want consistent results in financial markets
        </p>
        
        {/* Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">+163%</div>
            <div className="text-foreground/60 text-sm">2023 Return</div>
          </div>
          <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-red-400 mb-2">-6.8%</div>
            <div className="text-foreground/60 text-sm">2022 Drawdown</div>
          </div>
          <div className="bg-background/30 backdrop-blur-sm border border-primary/20 rounded-2xl p-6">
            <div className="text-3xl font-bold text-primary mb-2">$50M+</div>
            <div className="text-foreground/60 text-sm">AUM</div>
          </div>
        </div>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            variant="default" 
            size="lg"
            className="font-inter text-lg px-8 py-4"
          >
            Access Strategies →
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="font-inter text-lg px-8 py-4 border-primary/30 text-foreground hover:bg-primary/10"
          >
            Free Demo
          </Button>
        </div>
        
        {/* Trust Indicators */}
        <div className="text-center">
          <p className="text-foreground/60 mb-4">Trusted by 500+ professional traders across major financial hubs</p>
          <div className="flex items-center justify-center gap-4 text-foreground/50 text-sm">
            <span>Dubai</span>
            <span>•</span>
            <span>London</span>
            <span>•</span>
            <span>Sydney</span>
            <span>•</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingHeroSection;