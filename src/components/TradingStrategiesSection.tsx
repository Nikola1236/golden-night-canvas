import { Brain, TrendingUp, Shield, Zap, BarChart3, Target } from "lucide-react";

const TradingStrategiesSection = () => {
  const strategies = [
    {
      title: "Algoritmi Avanzati",
      description: "IA e machine learning per identificare pattern nascosti nei mercati con precisione millimetrica",
      icon: Brain,
      features: ["Deep Learning", "Pattern Recognition", "Real-time Analysis"]
    },
    {
      title: "Sentiment Analysis",
      description: "Analisi del sentiment di mercato attraverso news, social media e flussi di capitale istituzionali",
      icon: TrendingUp,
      features: ["News Analysis", "Social Sentiment", "Flow Detection"]
    },
    {
      title: "Risk Management",
      description: "Sistemi di gestione del rischio multi-livello per proteggere il capitale in ogni condizione",
      icon: Shield,
      features: ["Stop Loss Dinamici", "Position Sizing", "Correlazione Asset"]
    },
    {
      title: "Execution Speed",
      description: "Esecuzione ultra-veloce degli ordini con latenza sub-millisecondo sui principali exchange",
      icon: Zap,
      features: ["Low Latency", "Smart Routing", "Slippage Control"]
    },
    {
      title: "Multi-Timeframe",
      description: "Strategie che operano su diversi timeframe simultaneamente per massimizzare le opportunità",
      icon: BarChart3,
      features: ["Scalping", "Swing Trading", "Position Trading"]
    },
    {
      title: "Portfolio Protection",
      description: "Hedge dinamici e diversificazione intelligente per proteggere il portafoglio dalle volatilità",
      icon: Target,
      features: ["Dynamic Hedging", "Correlation Filtering", "Volatility Adjustment"]
    }
  ];

  return (
    <section className="py-20 bg-background" id="strategies">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trading Strategies
          </h2>
          <p className="font-inter text-xl text-foreground/70 max-w-3xl mx-auto">
            Cutting-edge technologies to dominate financial markets with mathematical precision
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => {
            const Icon = strategy.icon;
            return (
              <div key={index} className="group relative">
                <div className="bg-card border border-primary/20 rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-300 hover:shadow-[var(--shadow-elegant)]">
                  {/* Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-6">
                    ATTIVO
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="font-playfair text-xl font-bold text-card-foreground mb-4">
                    {strategy.title}
                  </h3>
                  <p className="text-card-foreground/70 mb-6 leading-relaxed">
                    {strategy.description}
                  </p>
                  
                  {/* Features */}
                  <div className="space-y-2">
                    {strategy.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-card-foreground/60 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Real-time Performance */}
        <div className="mt-16 bg-card border border-primary/20 rounded-3xl p-8">
          <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-8 text-center">
            Performance in Tempo Reale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">+12.7%</div>
              <div className="text-card-foreground/60 text-sm">Oggi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">+84.3%</div>
              <div className="text-card-foreground/60 text-sm">Questo Mese</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">94.2%</div>
              <div className="text-card-foreground/60 text-sm">Accuratezza</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1,247</div>
              <div className="text-card-foreground/60 text-sm">Trade Oggi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStrategiesSection;