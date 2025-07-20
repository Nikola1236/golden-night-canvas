const TradingTestimonialsSection = () => {
  const testimonials = [
    {
      quote: "It's been a few months now since I joined Enio's course, prior to that I was already trading the standard way you see online with lines and meaningless technical analysis. After going through the course and templates all provided in the group and putting in the hours I have had multiple 10,000$ plus trades that I wouldn't of been able to capitalise on without the Knowledge I gained from Enio. Always grateful for the skill set he has taught me that I will be able to use my whole life",
      name: "Lucas",
      role: "Trader",
      company: "",
      initials: "L"
    },
    {
      quote: "If you fully study this course, you'll gain a real edge in the market. You'll develop a completely new approach with a solid strategy, and clear entry and exit points. Everything is explained in a straightforward, no bullshit way, no time wasted, just pure value. If you want to actually learn how to beat the market, this is for you.",
      name: "Tiago",
      role: "Trader",
      company: "",
      initials: "T"
    },
    {
      quote: "I joined Laminar in mid January, and from the second I joined I could just see that this was the best move I have made in my trading career. Starting from daily, weekly, monthly analysis, actual educational posts about anything trading related, a mentor who possesses knowledge like nobody I have seen or worked with before. On top of all that, this is a mentor who actually participates in general chat, whether it be joking around or actually answering communitys questions. He provides insider information which I'm 100% sure I would have not found in any other community, this is not just pattern recognition like most traders do it - it's an actual understanding of market behaviour and dynamics which I was lucky enough to have him teach me in a pretty short time despites is complexity. The course itself is structured in such a digestible way which makes you understand it on the first watch. The orderflow aspect of this course is itself worth buying it, footprint charts have transformed my trading beyond only crypto - it has deepened my understanding and has shown me what real trading is supposed to look like. Simply the idea of your mentor being one of the best traders in the world, that works with unfathomable amounts of capital is enough of an indication to how much knowledge you can absorb. Other than that, the community is full of self driven, high status individuals who are super supportive and have the same goal as all of us - to make most of life and enjoy it in financial freedom. My message to anyone who is even 1% interested in joining this community is - if you respect your time and want to experience the best version of yourself whether it's in the trading sense or general sense, there isn't a community close to this one - so do what you want with that information.",
      name: "Marin",
      role: "Trader",
      company: "",
      initials: "M"
    },
    {
      quote: "Tbh, Sandels videos are top top, really like the way he gets his message and the way he answered the questions",
      name: "Sandro Schulz",
      role: "Trader",
      company: "",
      initials: "SS"
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