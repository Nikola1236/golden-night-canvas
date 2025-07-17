import { Award, Globe, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
const About = () => {
  return <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Left: Image */}
          <div className="relative">
            <div className="glass-card p-8 rounded-2xl">
              <div className="aspect-square rounded-xl overflow-hidden">
                <img 
                  src="/lovable-uploads/e0155dab-f487-4f23-8eb3-3ade80de9af4.png" 
                  alt="Enio J and Jordan F" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Floating Stats - Enio J */}
            <div className="absolute -top-4 -right-4 glass-card p-4 rounded-xl animate-float">
              <div className="text-xl font-bold text-profit">#67</div>
              <div className="text-xs text-muted-foreground">FTX Rank</div>
            </div>
            <div className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl animate-float" style={{
            animationDelay: '1s'
          }}>
              <div className="text-xl font-bold text-gold">+48,193%</div>
              <div className="text-xs text-muted-foreground">Personal Return</div>
            </div>
            
            {/* Floating Stats - Jordan F */}
            <div className="absolute top-1/4 -left-8 glass-card p-4 rounded-xl animate-float" style={{
            animationDelay: '2s'
          }}>
              <div className="text-xl font-bold text-primary">Dubai</div>
              <div className="text-xs text-gold">Global Operations</div>
            </div>
            <div className="absolute bottom-1/4 -right-8 glass-card p-4 rounded-xl animate-float" style={{
            animationDelay: '3s'
          }}>
              <div className="text-xl font-bold text-gold">Executive</div>
              <div className="text-xs text-muted-foreground">Strategic Growth</div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Meet <span className="text-gradient">Laminar Trading</span>
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong className="text-gold">Enio J</strong> is a top-tier quantitative trader ranked #67 on the FTX leaderboard in 2022, with +48,193% return on personal capital since 2020. <br /><br />
                <strong className="text-gold">Jordan F</strong> is a results-driven executive with global expertise across Dubai, London, Sydney, and more, bringing operational excellence and strategic growth to high-stakes environments.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="glass-card p-6 rounded-xl">
                <Globe className="h-8 w-8 text-gold mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Global</div>
                <div className="text-sm text-muted-foreground">Cross-market expertise across major financial hubs</div>
              </div>
              <div className="glass-card p-6 rounded-xl">
                <Target className="h-8 w-8 text-profit mb-3" />
                <div className="text-2xl font-bold text-foreground mb-1">Precision</div>
                <div className="text-sm text-muted-foreground">Mathematical approach to market inefficiencies</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gold">Our Edge</h3>
              <p className="text-muted-foreground">
                What sets Laminar Trading apart is our <strong>adaptive trading framework</strong> with deep specialization in crypto derivatives, market structure, and execution systems. Enio's leadership and strategy form the foundation of our edge, while Jordan's operational excellence optimizes business processes in fast-paced environments.
              </p>
              <p className="text-muted-foreground">
                Our proprietary low-latency trading terminal and priority access to premium exchange data feeds provide institutional-level advantages that translate directly into superior performance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;