const TradingTestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Scythe's risk management during the 2022 crash saved our portfolio. While others lost 60%+, we were down just single digits. Their defensive pivot was masterful.",
      name: "Marcus Chen",
      role: "Portfolio Manager",
      company: "Apex Capital",
      initials: "MC"
    },
    {
      quote: "The multi-timeframe approach is unmatched. The delta-neutral strategies generate consistent returns regardless of market direction. Exactly what institutional trading needs.",
      name: "Sarah Williams",
      role: "Head of Trading",
      company: "Sterling Investments",
      initials: "SW"
    },
    {
      quote: "813% in 2021 was incredible, but the real test was 2022. Scythe's ability to preserve capital while positioning for recovery is what separates professionals from amateurs.",
      name: "David Rodriguez",
      role: "Crypto Fund Manager",
      company: "Blockchain Capital",
      initials: "DR"
    },
    {
      quote: "The mathematical precision behind Scythe's strategies is impressive. No emotion, just data-driven decisions that consistently exploit market inefficiencies.",
      name: "Elena Petrov",
      role: "Quantitative Analyst",
      company: "Quantum Trading",
      initials: "EP"
    }
  ];

  const stats = [
    { number: "500+", label: "Professional Traders" },
    { number: "$50M+", label: "Assets Managed" },
    { number: "15+", label: "Major Exchanges" },
    { number: "24/7", label: "Market Coverage" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            Trusted by Market Leaders
          </h2>
          <p className="font-inter text-xl text-foreground/70 max-w-3xl mx-auto">
            Don't just take our word for it. See what professional traders and fund managers say about our strategies.
          </p>
        </div>
        
        {/* Enhanced Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="glass-effect rounded-2xl p-8 hover:border-primary/40 transition-all duration-500 hover-lift group gradient-border animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <blockquote className="text-card-foreground/80 text-lg leading-relaxed mb-6 group-hover:text-card-foreground transition-colors duration-300 relative">
                <span className="text-primary text-4xl absolute -top-2 -left-2 opacity-20">"</span>
                <span className="relative z-10">{testimonial.quote}</span>
                <span className="text-primary text-4xl absolute -bottom-6 -right-2 opacity-20 rotate-180">"</span>
              </blockquote>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center relative overflow-hidden group-hover:scale-110 transition-transform duration-300">
                  <span className="text-primary-foreground font-semibold text-sm relative z-10">
                    {testimonial.initials}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/80 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div>
                  <div className="font-semibold text-card-foreground group-hover:text-gradient transition-colors duration-300">{testimonial.name}</div>
                  <div className="text-card-foreground/60 text-sm group-hover:text-card-foreground/80 transition-colors duration-300">
                    {testimonial.role}
                  </div>
                  <div className="text-card-foreground/60 text-sm group-hover:text-primary transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group animate-scale-in" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
              <div className="text-4xl font-bold text-primary mb-2 number-counter group-hover:animate-pulse-glow group-hover:scale-110 transition-transform duration-300">{stat.number}</div>
              <div className="text-foreground/60 group-hover:text-foreground/80 transition-colors duration-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingTestimonialsSection;