import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Mountain Background */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/0ec2e87e-faa9-4e5e-9a75-c1eb470984e2.png"
          alt="Mountain landscape"
          className="w-full h-full object-cover opacity-30 dark:opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-10 animate-float">
        <div className="glass-card p-4 rounded-xl">
          <BarChart3 className="h-8 w-8 text-profit" />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 animate-float" style={{ animationDelay: '1s' }}>
        <div className="glass-card p-4 rounded-xl">
          <TrendingUp className="h-8 w-8 text-gold" />
        </div>
      </div>
      <div className="absolute bottom-1/4 left-1/4 animate-float" style={{ animationDelay: '2s' }}>
        <div className="glass-card p-4 rounded-xl">
          <Zap className="h-8 w-8 text-loss" />
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient glow-text">Master</span>
            <br />
            <span className="text-foreground">the Markets</span>
            <br />
            <span className="text-gradient">Professionally</span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced algorithmic trading strategies for professionals who
            want consistent results in financial markets
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="glass-card p-6 rounded-xl trading-card">
              <div className="text-3xl font-bold text-profit mb-2">+163%</div>
              <div className="text-sm text-muted-foreground">2023 Return</div>
            </div>
            <div className="glass-card p-6 rounded-xl trading-card">
              <div className="text-3xl font-bold text-gold mb-2">-6.8%</div>
              <div className="text-sm text-muted-foreground">2022 Drawdown</div>
            </div>
            <div className="glass-card p-6 rounded-xl trading-card">
              <div className="text-3xl font-bold text-foreground mb-2">$50M+</div>
              <div className="text-sm text-muted-foreground">AUM</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold-light text-lg px-8 py-4 pulse-gold"
            >
              Access Course
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 text-sm text-muted-foreground">
            <p>Trusted by 500+ professional traders across major financial hubs</p>
            <div className="flex items-center justify-center gap-4 mt-4 opacity-60">
              <span>Dubai</span> • <span>London</span> • <span>Sydney</span> • <span>New York</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;