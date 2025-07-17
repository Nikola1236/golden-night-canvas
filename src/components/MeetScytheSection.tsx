import { Button } from "@/components/ui/button";
import { Globe, Target } from "lucide-react";

const MeetScytheSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Card */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] hover-lift group border border-primary/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-primary-foreground relative z-10">JF</span>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold text-night-blue group-hover:text-gradient transition-colors duration-300">Jordan Fleming</h3>
                  <p className="text-night-blue/70">CEO & Lead Trader</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass-effect rounded-xl hover-lift group">
                  <div className="text-2xl font-bold text-green-500 mb-1 number-counter group-hover:animate-pulse-glow">+813%</div>
                  <div className="text-night-blue/60 text-sm">2021 Return</div>
                </div>
                <div className="text-center p-4 glass-effect rounded-xl hover-lift group">
                  <div className="text-2xl font-bold text-red-500 mb-1 number-counter group-hover:animate-pulse-glow">-6.8%</div>
                  <div className="text-night-blue/60 text-sm">2022 Drawdown</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Enhanced Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6 text-gradient">
                Meet Scythe Capital
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mb-8 rounded-full"></div>
            </div>
            
            <p className="font-inter text-lg text-night-blue/80 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              Founded by <strong className="text-primary">Jordan Fleming</strong>, a results-driven executive with global expertise across Dubai, London, and Sydney. Scythe Capital combines operational excellence with advanced trading infrastructure to deliver sustainable alpha in cryptocurrency markets.
            </p>
            
            <div className="space-y-6 animate-slide-up" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-start gap-4 group hover-lift">
                <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2 group-hover:text-primary transition-colors duration-300">Global</h4>
                  <p className="text-night-blue/70">Cross-market expertise across major financial hubs</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 group hover-lift">
                <div className="w-12 h-12 glass-effect rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2 group-hover:text-primary transition-colors duration-300">Precision</h4>
                  <p className="text-night-blue/70">Mathematical approach to market inefficiencies</p>
                </div>
              </div>
            </div>
            
            <div className="glass-effect rounded-2xl p-6 gradient-border animate-slide-up hover-lift" style={{ animationDelay: '0.8s' }}>
              <h3 className="font-playfair text-xl font-bold text-night-blue mb-4 text-gradient">Our Edge</h3>
              <p className="text-night-blue/80 leading-relaxed mb-4">
                What sets Scythe Capital apart is our <strong className="text-primary">adaptive trading framework</strong> that thrives in any market condition. While 2021's +813% return showcased our ability to capitalize on bull markets, our -6.8% drawdown during 2022's crypto collapse—when Bitcoin fell 64%—demonstrates our superior capital preservation.
              </p>
              <p className="text-night-blue/80 leading-relaxed">
                This resilience enabled our strong 2023 rebound (+163%), proving our multi-layered strategy works across complete market cycles.
              </p>
            </div>
            
            <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '1s' }}>
              <Button variant="default" size="lg" className="hover-lift relative overflow-hidden group">
                <span className="relative z-10">Schedule Consultation</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" size="lg" className="glass-effect hover-lift group">
                <span className="group-hover:scale-105 transition-transform duration-300">View Performance</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetScytheSection;