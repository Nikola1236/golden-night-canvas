import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Marcus Chen",
    role: "Portfolio Manager",
    company: "Apex Capital",
    image: "MC",
    rating: 5,
    text: "Laminar's risk management during the 2022 crash saved our portfolio. While others lost 60%+, we were down just single digits. Their defensive pivot was masterful."
  },
  {
    name: "Sarah Williams",
    role: "Head of Trading",
    company: "Sterling Investments",
    image: "SW",
    rating: 5,
    text: "Enio's multi-timeframe approach is unmatched. The delta-neutral strategies generate consistent returns regardless of market direction. Exactly what institutional trading needs."
  },
  {
    name: "David Rodriguez",
    role: "Crypto Fund Manager",
    company: "Blockchain Capital",
    image: "DR",
    rating: 5,
    text: "813% in 2021 was incredible, but the real test was 2022. Laminar's ability to preserve capital while positioning for recovery is what separates professionals from amateurs."
  },
  {
    name: "Elena Petrov",
    role: "Quantitative Analyst",
    company: "Quantum Trading",
    image: "EP",
    rating: 5,
    text: "The mathematical precision behind Laminar's strategies is impressive. No emotion, just data-driven decisions that consistently exploit market inefficiencies."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Trusted by <span className="text-gradient">Market Leaders</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. See what professional traders and fund managers say about our strategies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-2xl trading-card group relative"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-gold/20" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 bg-gold/10 border-2 border-gold/20 rounded-full flex items-center justify-center font-bold text-gold text-lg">
                  {testimonial.image}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-xs text-gold">{testimonial.company}</p>
                </div>
              </div>

              <blockquote className="text-muted-foreground italic leading-relaxed">
                "{testimonial.text}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-gold mb-2">500+</div>
            <div className="text-sm text-muted-foreground">Professional Traders</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold mb-2">$50M+</div>
            <div className="text-sm text-muted-foreground">Assets Managed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Major Exchanges</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-gold mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Market Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;