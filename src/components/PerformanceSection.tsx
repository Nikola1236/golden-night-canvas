import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Target, Star } from "lucide-react";

const PerformanceSection = () => {
  return (
    <section className="py-20 bg-cream" id="performance">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6">
            Proven Track Record
          </h2>
          <p className="font-inter text-xl text-night-blue/70 max-w-3xl mx-auto">
            Real performance across complete market cycles. Our results speak louder than promises—from bull market excellence to bear market resilience.
          </p>
        </div>
        
        {/* Performance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-background rounded-3xl p-8 shadow-[var(--shadow-card)] text-center">
            <div className="text-night-blue/60 text-lg mb-2">2021</div>
            <div className="text-5xl font-bold text-green-500 mb-4">+813%</div>
            <h3 className="font-playfair text-xl font-bold text-night-blue mb-4">Bull Market Excellence</h3>
            <p className="text-night-blue/70">
              Extraordinary performance during the crypto boom, capitalizing on high volatility and explosive growth.
            </p>
          </div>
          
          <div className="bg-background rounded-3xl p-8 shadow-[var(--shadow-card)] text-center">
            <div className="text-night-blue/60 text-lg mb-2">2022</div>
            <div className="text-5xl font-bold text-red-500 mb-4">-6.8%</div>
            <h3 className="font-playfair text-xl font-bold text-night-blue mb-4">Capital Preservation</h3>
            <p className="text-night-blue/70">
              Limited losses during crypto collapse (BTC -64%, most alts -75%+). Demonstrated superior risk management.
            </p>
          </div>
          
          <div className="bg-background rounded-3xl p-8 shadow-[var(--shadow-card)] text-center">
            <div className="text-night-blue/60 text-lg mb-2">2023</div>
            <div className="text-5xl font-bold text-green-500 mb-4">+163%</div>
            <h3 className="font-playfair text-xl font-bold text-night-blue mb-4">Strategic Recovery</h3>
            <p className="text-night-blue/70">
              Strong rebound driven by positions accumulated at 2022 lows. Proves our cycle-adaptive approach.
            </p>
          </div>
        </div>
        
        {/* Why Performance Matters */}
        <div className="bg-background rounded-3xl p-12">
          <h3 className="font-playfair text-3xl font-bold text-night-blue mb-12 text-center">
            Why Our Performance Matters
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-6 h-6 text-red-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">🔥 Bull Market Mastery</h4>
                  <p className="text-night-blue/70 text-sm leading-relaxed">
                    2021's +813% wasn't luck—it was systematic exploitation of high-volatility opportunities when portfolio capital was agile enough to capitalize on 1000%+ daily alt moves.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">🛡️ Bear Market Defense</h4>
                  <p className="text-night-blue/70 text-sm leading-relaxed">
                    2022's -6.8% loss while BTC dropped 64% proves our risk management works. We shifted from aggression to defense: hedging, shorting, and accumulating at lows.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">📈 Cycle Adaptation</h4>
                  <p className="text-night-blue/70 text-sm leading-relaxed">
                    2023's +163% recovery was enabled by disciplined accumulation during 2022's crash. This demonstrates our ability to pivot strategies across market phases.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-night-blue mb-2">💎 No Quarterly Losses</h4>
                  <p className="text-night-blue/70 text-sm leading-relaxed">
                    Zero quarterly drawdowns in three years, even during extreme market conditions. Risk management isn't just a buzzword—it's our foundation.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button variant="default" size="lg">
              Access Our Strategies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;