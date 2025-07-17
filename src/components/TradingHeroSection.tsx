import { Button } from "@/components/ui/button";
import { BarChart3, TrendingUp, Zap } from "lucide-react";
import tradingHeroBg from "@/assets/trading-hero-bg.png";

const TradingHeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0" style={{ background: 'var(--gradient-mesh)' }} />
      
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30 animate-float"
        style={{ 
          backgroundImage: `url(${tradingHeroBg})`,
          transform: 'translateZ(0)' 
        }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background/90" />
      
      {/* Floating Elements with Enhanced Animation */}
      <div className="absolute top-1/4 left-10 w-12 h-12 glass-effect rounded-xl flex items-center justify-center animate-float hover-lift">
        <BarChart3 className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute bottom-1/3 right-10 w-12 h-12 glass-effect rounded-xl flex items-center justify-center animate-float hover-lift" style={{ animationDelay: '2s' }}>
        <TrendingUp className="w-6 h-6 text-primary" />
      </div>
      <div className="absolute top-1/3 right-20 w-12 h-12 glass-effect rounded-xl flex items-center justify-center animate-float hover-lift" style={{ animationDelay: '4s' }}>
        <Zap className="w-6 h-6 text-primary animate-pulse-glow" />
      </div>
      
      {/* Content with Staggered Animations */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <h1 className="font-playfair text-6xl md:text-8xl lg:text-9xl font-bold text-foreground mb-8 leading-tight animate-slide-up">
          <span className="text-gradient">Master</span>
          <span className="block text-foreground/90 animate-slide-up" style={{ animationDelay: '0.2s' }}>the Markets</span>
          <span className="text-primary block animate-slide-up shimmer-effect" style={{ animationDelay: '0.4s' }}>Professionally</span>
        </h1>
        
        <p className="font-inter text-xl md:text-2xl text-foreground/70 mb-12 max-w-4xl mx-auto leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
          Advanced algorithmic trading strategies for professionals who want consistent results in financial markets
        </p>
        
        {/* Enhanced Performance Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <div className="glass-effect rounded-2xl p-6 hover-lift group gradient-border">
            <div className="text-3xl font-bold text-green-400 mb-2 number-counter group-hover:animate-pulse-glow">+163%</div>
            <div className="text-foreground/60 text-sm">2023 Return</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 hover-lift group gradient-border">
            <div className="text-3xl font-bold text-red-400 mb-2 number-counter group-hover:animate-pulse-glow">-6.8%</div>
            <div className="text-foreground/60 text-sm">2022 Drawdown</div>
          </div>
          <div className="glass-effect rounded-2xl p-6 hover-lift group gradient-border">
            <div className="text-3xl font-bold text-primary mb-2 number-counter group-hover:animate-pulse-glow">$50M+</div>
            <div className="text-foreground/60 text-sm">AUM</div>
          </div>
        </div>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in" style={{ animationDelay: '1s' }}>
          <Button 
            variant="default" 
            size="lg"
            className="font-inter text-lg px-8 py-4 relative overflow-hidden group hover-lift bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary"
          >
            <span className="relative z-10 flex items-center gap-2">
              Access Strategies
              <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </Button>
          <Button 
            variant="outline" 
            size="lg"
            className="font-inter text-lg px-8 py-4 glass-effect hover-lift group"
          >
            <span className="group-hover:scale-105 transition-transform duration-300">Free Demo</span>
          </Button>
        </div>
        
        {/* Enhanced Trust Indicators */}
        <div className="text-center animate-slide-up" style={{ animationDelay: '1.2s' }}>
          <p className="text-foreground/60 mb-4">Trusted by 500+ professional traders across major financial hubs</p>
          <div className="flex items-center justify-center gap-4 text-foreground/50 text-sm">
            {['Dubai', 'London', 'Sydney', 'New York'].map((city, index) => (
              <span key={city} className="hover:text-primary transition-colors duration-300 cursor-default" style={{ animationDelay: `${1.4 + index * 0.1}s` }}>
                {city}
                {index < 3 && <span className="ml-4">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingHeroSection;