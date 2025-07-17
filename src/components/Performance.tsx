import { TrendingUp, TrendingDown, Shield, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const performanceData = [
  {
    year: "2021",
    return: "+813%",
    context: "Bull Market Excellence",
    description: "Extraordinary performance during the crypto boom, capitalizing on high volatility and explosive growth.",
    type: "profit",
    icon: TrendingUp
  },
  {
    year: "2022",
    return: "-6.8%",
    context: "Capital Preservation",
    description: "Limited losses during crypto collapse (BTC -64%, most alts -75%+). Demonstrated superior risk management.",
    type: "neutral",
    icon: Shield
  },
  {
    year: "2023",
    return: "+163%",
    context: "Strategic Recovery",
    description: "Strong rebound driven by positions accumulated at 2022 lows. Proves our cycle-adaptive approach.",
    type: "profit",
    icon: Target
  }
];

const Performance = () => {
  return (
    <section id="performance" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="text-gradient">Track Record</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real performance across complete market cycles. Our results speak louder than promises—from bull market excellence to bear market resilience.
          </p>
        </div>

        {/* Performance Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {performanceData.map((item, index) => (
            <div key={index} className="glass-card p-8 rounded-2xl trading-card group">
              <div className="flex items-center justify-between mb-6">
                <div className={`p-3 rounded-lg ${
                  item.type === 'profit' ? 'bg-profit/10 border border-profit/20' :
                  item.type === 'loss' ? 'bg-loss/10 border border-loss/20' :
                  'bg-gold/10 border border-gold/20'
                }`}>
                  <item.icon className={`h-6 w-6 ${
                    item.type === 'profit' ? 'text-profit' :
                    item.type === 'loss' ? 'text-loss' :
                    'text-gold'
                  }`} />
                </div>
                <div className="text-right">
                  <div className="text-sm text-muted-foreground">{item.year}</div>
                  <div className={`text-3xl font-bold ${
                    item.type === 'profit' ? 'text-profit' :
                    item.type === 'loss' ? 'text-loss' :
                    'text-gold'
                  }`}>
                    {item.return}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gold mb-3">{item.context}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Key Insights */}
        <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gold mb-8">Why Our Performance Matters</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">🔥 Bull Market Mastery</h4>
              <p className="text-muted-foreground text-sm">
                2021's +813% wasn't luck—it was systematic exploitation of high-volatility opportunities when portfolio capital was agile enough to capitalize on 1000%+ daily alt moves.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">🛡️ Bear Market Defense</h4>
              <p className="text-muted-foreground text-sm">
                2022's -6.8% loss while BTC dropped 64% proves our risk management works. We shifted from aggression to defense: hedging, shorting, and accumulating at lows.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">📈 Cycle Adaptation</h4>
              <p className="text-muted-foreground text-sm">
                2023's +163% recovery was enabled by disciplined accumulation during 2022's crash. This demonstrates our ability to pivot strategies across market phases.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">💎 No Quarterly Losses</h4>
              <p className="text-muted-foreground text-sm">
                Zero quarterly drawdowns in three years, even during extreme market conditions. Risk management isn't just a buzzword—it's our foundation.
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              size="lg"
              className="bg-gold text-navy hover:bg-gold-light pulse-gold"
            >
              Access Our Strategies
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Performance;