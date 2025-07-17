import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Target, Star } from "lucide-react";

const PerformanceSection = () => {
  return (
    <section className="py-20 bg-cream" id="performance">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6 text-gradient">
            Proven Track Record
          </h2>
          <p className="font-inter text-xl text-night-blue/70 max-w-3xl mx-auto">
            Real performance across complete market cycles. Our results speak louder than promises—from bull market excellence to bear market resilience.
          </p>
        </div>
        
        {/* Enhanced Performance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { year: '2021', value: '+813%', title: 'Bull Market Excellence', desc: 'Extraordinary performance during the crypto boom, capitalizing on high volatility and explosive growth.', color: 'text-green-500', bg: 'from-green-500/20 to-green-500/5' },
            { year: '2022', value: '-6.8%', title: 'Capital Preservation', desc: 'Limited losses during crypto collapse (BTC -64%, most alts -75%+). Demonstrated superior risk management.', color: 'text-red-500', bg: 'from-red-500/20 to-red-500/5' },
            { year: '2023', value: '+163%', title: 'Strategic Recovery', desc: 'Strong rebound driven by positions accumulated at 2022 lows. Proves our cycle-adaptive approach.', color: 'text-green-500', bg: 'from-green-500/20 to-green-500/5' }
          ].map((item, index) => (
            <div key={index} className="glass-effect rounded-3xl p-8 shadow-[var(--shadow-glass)] text-center hover-lift group gradient-border animate-scale-in" style={{ animationDelay: `${index * 0.2}s` }}>
              <div className="text-night-blue/60 text-lg mb-2">{item.year}</div>
              <div className={`text-5xl font-bold mb-4 number-counter group-hover:animate-pulse-glow ${item.color}`}>{item.value}</div>
              <h3 className="font-playfair text-xl font-bold text-night-blue mb-4 group-hover:text-gradient transition-colors duration-300">{item.title}</h3>
              <p className="text-night-blue/70 group-hover:text-night-blue/90 transition-colors duration-300">
                {item.desc}
              </p>
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${item.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Why Performance Matters */}
        <div className="glass-effect rounded-3xl p-12 gradient-border animate-slide-up">
          <h3 className="font-playfair text-3xl font-bold text-night-blue mb-12 text-center text-gradient">
            Why Our Performance Matters
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              {[
                { icon: TrendingUp, color: 'text-red-500', bg: 'bg-red-500/20', title: '🔥 Bull Market Mastery', desc: "2021's +813% wasn't luck—it was systematic exploitation of high-volatility opportunities when portfolio capital was agile enough to capitalize on 1000%+ daily alt moves." },
                { icon: Shield, color: 'text-blue-500', bg: 'bg-blue-500/20', title: '🛡️ Bear Market Defense', desc: "2022's -6.8% loss while BTC dropped 64% proves our risk management works. We shifted from aggression to defense: hedging, shorting, and accumulating at lows." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group hover-lift animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.1}s` }}>
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 glass-effect`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-night-blue mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-night-blue/70 text-sm leading-relaxed group-hover:text-night-blue/90 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="space-y-8">
              {[
                { icon: Target, color: 'text-green-500', bg: 'bg-green-500/20', title: '📈 Cycle Adaptation', desc: "2023's +163% recovery was enabled by disciplined accumulation during 2022's crash. This demonstrates our ability to pivot strategies across market phases." },
                { icon: Star, color: 'text-primary', bg: 'bg-primary/20', title: '💎 No Quarterly Losses', desc: "Zero quarterly drawdowns in three years, even during extreme market conditions. Risk management isn't just a buzzword—it's our foundation." }
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4 group hover-lift animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 glass-effect`}>
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-night-blue mb-2 group-hover:text-primary transition-colors duration-300">{item.title}</h4>
                    <p className="text-night-blue/70 text-sm leading-relaxed group-hover:text-night-blue/90 transition-colors duration-300">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-12 animate-scale-in" style={{ animationDelay: '0.8s' }}>
            <Button variant="default" size="lg" className="hover-lift relative overflow-hidden group">
              <span className="relative z-10">Access Our Strategies</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;