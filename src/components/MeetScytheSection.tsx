import { Button } from "@/components/ui/button";
import { Globe, Target } from "lucide-react";

const MeetScytheSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Team Photo */}
          <div className="relative">
            <div className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] hover-lift group border border-primary/20">
              <img
                src="/lovable-uploads/f26f381a-90c7-42cf-99d9-d89ea41cc4bb.png"
                alt="Enio J - Laminar Trading Team"
                className="w-full h-auto rounded-2xl shadow-lg group-hover:scale-[1.02] transition-transform duration-300"
              />
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="text-center p-4 glass-effect rounded-xl hover-lift">
                  <h4 className="font-playfair text-lg font-bold text-night-blue mb-1">Enio J</h4>
                  <p className="text-night-blue/70 text-sm">Founder / Trader</p>
                  <div className="mt-2">
                    <div className="text-sm font-bold text-green-500">#67 FTX Rank</div>
                    <div className="text-sm font-bold text-gold">+48,193% Return</div>
                  </div>
                </div>
                <div className="text-center p-4 glass-effect rounded-xl hover-lift">
                  <h4 className="font-playfair text-lg font-bold text-night-blue mb-1">Jordan F</h4>
                  <p className="text-night-blue/70 text-sm">COO</p>
                  <div className="mt-2">
                    <div className="text-sm font-bold text-primary">Global Executive</div>
                    <div className="text-night-blue/60 text-xs">Dubai • London • Sydney</div>
                  </div>
                </div>
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
              <strong className="text-primary">Enio J</strong> is a top-tier quantitative trader ranked #67 on the FTX leaderboard in 2022, with +48,193% return on personal capital since 2020. With deep specialization in crypto derivatives, market structure, and execution systems, Enio brings unmatched expertise and strategic vision to deliver consistent results in high-stakes trading environments.
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
                What sets Scythe Capital apart is our <strong className="text-primary">adaptive trading framework</strong> with deep specialization in crypto derivatives, market structure, and execution. Enio's leadership and strategy form the foundation of our edge, delivering consistent results in fast-paced trading environments.
              </p>
              <p className="text-night-blue/80 leading-relaxed">
                Our proprietary low-latency trading terminal and priority access to premium exchange data feeds provide institutional-level advantages that translate directly into superior performance.
              </p>
            </div>
            
            <div className="flex gap-4 animate-scale-in" style={{ animationDelay: '1s' }}>
              <Button 
                variant="default" 
                size="lg" 
                className="hover-lift relative overflow-hidden group"
                onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}
              >
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