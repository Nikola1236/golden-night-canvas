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
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
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
              <div key={index} className="group relative animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="glass-effect rounded-2xl p-8 h-full hover:border-primary/40 transition-all duration-500 hover-lift group gradient-border shimmer-effect">
                  {/* Enhanced Status Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-green-500/20 text-green-400 text-xs font-semibold rounded-full mb-6 backdrop-blur-sm border border-green-500/30 animate-pulse-glow">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    ATTIVO
                  </div>
                  
                  {/* Enhanced Icon */}
                  <div className="w-16 h-16 glass-effect rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                    <Icon className="w-8 h-8 text-primary relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Enhanced Content */}
                  <h3 className="font-playfair text-xl font-bold text-card-foreground mb-4 group-hover:text-gradient transition-colors duration-300">
                    {strategy.title}
                  </h3>
                  <p className="text-card-foreground/70 mb-6 leading-relaxed group-hover:text-card-foreground/90 transition-colors duration-300">
                    {strategy.description}
                  </p>
                  
                  {/* Enhanced Features */}
                  <div className="space-y-2">
                    {strategy.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 group-hover:translate-x-1 transition-transform duration-300" style={{ transitionDelay: `${idx * 50}ms` }}>
                        <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse-glow"></div>
                        <span className="text-card-foreground/60 text-sm group-hover:text-card-foreground/80 transition-colors duration-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* Enhanced Real-time Performance */}
        <div className="mt-16 glass-effect rounded-3xl p-8 gradient-border animate-slide-up hover-lift">
          <h3 className="font-playfair text-2xl font-bold text-card-foreground mb-8 text-center text-gradient">
            Performance in Tempo Reale
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '+12.7%', label: 'Oggi', color: 'text-green-400' },
              { value: '+84.3%', label: 'Questo Mese', color: 'text-green-400' },
              { value: '94.2%', label: 'Accuratezza', color: 'text-primary' },
              { value: '1,247', label: 'Trade Oggi', color: 'text-primary' }
            ].map((stat, index) => (
              <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${1 + index * 0.1}s` }}>
                <div className={`text-3xl font-bold mb-2 number-counter group-hover:animate-pulse-glow transition-all duration-300 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-card-foreground/60 text-sm group-hover:text-card-foreground/80 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TradingStrategiesSection;