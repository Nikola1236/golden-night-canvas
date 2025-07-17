import { Bot, Brain, Target, Zap, TrendingUp, Shield } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const strategies = [
  {
    icon: Bot,
    title: "Advanced Algorithms",
    description: "AI and machine learning to identify hidden patterns in markets with millimetric precision",
    features: ["Deep Learning", "Pattern Recognition", "Real-time Analysis"]
  },
  {
    icon: Brain,
    title: "Sentiment Analysis",
    description: "Market sentiment analysis through news, social media and institutional capital flows",
    features: ["News Analysis", "Social Sentiment", "Flow Detection"]
  },
  {
    icon: Target,
    title: "Risk Management",
    description: "Multi-level risk management systems to protect capital in every market condition",
    features: ["Dynamic Stop Loss", "Position Sizing", "Asset Correlation"]
  },
  {
    icon: Zap,
    title: "Execution Speed",
    description: "Ultra-fast order execution with sub-millisecond latency on major exchanges",
    features: ["Low Latency", "Smart Routing", "Slippage Control"]
  },
  {
    icon: TrendingUp,
    title: "Multi-Timeframe",
    description: "Strategies operating across multiple timeframes simultaneously to maximize opportunities",
    features: ["Scalping", "Swing Trading", "Position Trading"]
  },
  {
    icon: Shield,
    title: "Portfolio Protection",
    description: "Dynamic hedging and intelligent diversification to protect portfolio from volatility",
    features: ["Dynamic Hedging", "Correlation Filtering", "Volatility Adjustment"]
  }
];

const TradingStrategies = () => {
  return (
    <section id="strategies" className="py-20 bg-navy-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trading <span className="text-gradient">Strategies</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technologies to dominate financial markets with mathematical precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const IconComponent = strategy.icon;
            return (
              <Card
                key={index}
                className="trading-card group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 rounded-lg bg-gold/10 border border-gold/20 group-hover:bg-gold/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-gold" />
                    </div>
                    <div className="text-xs px-2 py-1 rounded-full bg-profit/10 text-profit border border-profit/20">
                      ACTIVE
                    </div>
                  </div>
                  <CardTitle className="text-xl text-gold group-hover:text-gold-light transition-colors">
                    {strategy.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground leading-relaxed">
                    {strategy.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {strategy.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-gold mr-3"></div>
                        <span className="text-foreground/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Performance Section */}
        <div className="mt-20 glass-card p-8 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gradient mb-6">Real-Time Performance</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <div className="text-2xl font-bold text-profit mb-1">+12.7%</div>
              <div className="text-xs text-muted-foreground">Today</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-profit mb-1">+84.3%</div>
              <div className="text-xs text-muted-foreground">This Month</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gold mb-1">94.2%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground mb-1">1,247</div>
              <div className="text-xs text-muted-foreground">Trades Today</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStrategies;