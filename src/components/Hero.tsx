import { ArrowRight, BarChart3, TrendingUp, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Mountain Background */}
      <div className="absolute inset-0">
        <img src="/lovable-uploads/90a22d68-854f-4f93-9844-715a76d88f54.png" alt="Mountain landscape" className="w-full h-full object-cover opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background/90"></div>
      </div>


      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="block text-gradient glow-text mb-2 py-[15px]">
              Turn Your Trading
            </span>
            <span className="block text-foreground mb-2 py-[10px]">
              Into a 7-Figure Machine
            </span>
            <span className="block text-gradient text-3xl md:text-5xl lg:text-6xl font-semibold">
              Learn What the Top 1% Feels Like
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Advanced algorithmic trading strategies for professionals who
            want consistent results in financial markets
          </p>


          {/* CTA Button */}
          <div className="flex justify-center">
            <Button size="lg" className="bg-gold text-navy hover:bg-gold-light text-lg px-8 py-4 pulse-gold" onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}>
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
    </section>;
};
export default Hero;