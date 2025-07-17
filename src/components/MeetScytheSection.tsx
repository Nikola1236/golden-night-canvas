import { Button } from "@/components/ui/button";
import { Globe, Target } from "lucide-react";

const MeetScytheSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Card */}
            <div className="space-y-8">
              {/* Enio J Card */}
              <div className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] hover-lift group border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground relative z-10">EJ</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-night-blue group-hover:text-gradient transition-colors duration-300">Enio J</h3>
                    <p className="text-night-blue/70">Founder / Trader</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 glass-effect rounded-xl hover-lift group">
                    <div className="text-2xl font-bold text-green-500 mb-1 number-counter group-hover:animate-pulse-glow">#67</div>
                    <div className="text-night-blue/60 text-sm">FTX Rank 2022</div>
                  </div>
                  <div className="text-center p-4 glass-effect rounded-xl hover-lift group">
                    <div className="text-2xl font-bold text-gold mb-1 number-counter group-hover:animate-pulse-glow">+48,193%</div>
                    <div className="text-night-blue/60 text-sm">Personal Return</div>
                  </div>
                </div>
              </div>

              {/* Jordan F Card */}
              <div className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] hover-lift group border border-primary/20">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary via-primary/90 to-primary/80 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-primary-foreground relative z-10">JF</span>
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h3 className="font-playfair text-xl font-bold text-night-blue group-hover:text-gradient transition-colors duration-300">Jordan F</h3>
                    <p className="text-night-blue/70">COO</p>
                  </div>
                </div>
                
                <div className="text-center p-4 glass-effect rounded-xl hover-lift">
                  <div className="text-lg font-bold text-primary mb-1">Global Executive</div>
                  <div className="text-night-blue/60 text-sm">Dubai • London • Sydney</div>
                </div>
              </div>
            </div>
          
          {/* Enhanced Content */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6 text-gradient">
                Meet Laminar Trading
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mb-8 rounded-full"></div>
            </div>
            
            <p className="font-inter text-lg text-night-blue/80 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <strong className="text-primary">Enio J</strong> is a top-tier quantitative trader ranked #67 on the FTX leaderboard in 2022, with +48,193% return on personal capital since 2020. <strong className="text-primary">Jordan Fleming</strong> is a results-driven executive with global expertise across Dubai, London, Sydney, and more, bringing operational excellence and strategic growth to high-stakes environments.
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
                What sets Scythe Capital apart is our <strong className="text-primary">adaptive trading framework</strong> with deep specialization in crypto derivatives, market structure, and execution. Enio's leadership and strategy form the foundation of our edge, while Jordan's operational excellence optimizes business processes in fast-paced environments.
              </p>
              <p className="text-night-blue/80 leading-relaxed">
                Our proprietary low-latency trading terminal and priority access to premium exchange data feeds provide institutional-level advantages that translate directly into superior performance.
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