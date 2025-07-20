import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Lucas",
    role: "Trader",
    company: "",
    image: "L",
    rating: 5,
    text: "It's been a few months now since I joined Enio's course, prior to that I was already trading the standard way you see online with lines and meaningless technical analysis. After going through the course and templates all provided in the group and putting in the hours I have had multiple 10,000$ plus trades that I wouldn't of been able to capitalise on without the Knowledge I gained from Enio. Always grateful for the skill set he has taught me that I will be able to use my whole life"
  },
  {
    name: "Tiago",
    role: "Trader",
    company: "",
    image: "T",
    rating: 5,
    text: "If you fully study this course, you'll gain a real edge in the market. You'll develop a completely new approach with a solid strategy, and clear entry and exit points. Everything is explained in a straightforward, no bullshit way, no time wasted, just pure value. If you want to actually learn how to beat the market, this is for you."
  },
  {
    name: "Marin",
    role: "Trader",
    company: "",
    image: "M",
    rating: 5,
    text: "I joined Laminar in mid January and from the second I joined I could see this was the best move in my trading career. The mentor possesses knowledge like nobody I've seen before - actual understanding of market behaviour, not just pattern recognition. The orderflow aspect transformed my trading beyond crypto. The community is full of driven individuals with the same goal: financial freedom."
  },
  {
    name: "Sandro Schulz",
    role: "Trader",
    company: "",
    image: "SS",
    rating: 5,
    text: "Sandel's videos are top tier - really like the way he gets his message across and answers questions. As someone busy with my agency, I appreciate how he explains his unique point of view on markets. Would like to see more videos of him explaining different market topics. The way Sandel thinks is unique - everyone would benefit from having a conversation with him. Excellent course overall."
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