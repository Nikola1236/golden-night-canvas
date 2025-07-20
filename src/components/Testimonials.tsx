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
    text: "I joined Laminar in mid January, and from the second I joined I could just see that this was the best move I have made in my trading career. Starting from daily, weekly, monthly analysis, actual educational posts about anything trading related, a mentor who possesses knowledge like nobody I have seen or worked with before. On top of all that, this is a mentor who actually participates in general chat, whether it be joking around or actually answering communitys questions. He provides insider information which I'm 100% sure I would have not found in any other community, this is not just pattern recognition like most traders do it - it's an actual understanding of market behaviour and dynamics which I was lucky enough to have him teach me in a pretty short time despites is complexity. The course itself is structured in such a digestible way which makes you understand it on the first watch. The orderflow aspect of this course is itself worth buying it, footprint charts have transformed my trading beyond only crypto - it has deepened my understanding and has shown me what real trading is supposed to look like. Simply the idea of your mentor being one of the best traders in the world, that works with unfathomable amounts of capital is enough of an indication to how much knowledge you can absorb. Other than that, the community is full of self driven, high status individuals who are super supportive and have the same goal as all of us - to make most of life and enjoy it in financial freedom. My message to anyone who is even 1% interested in joining this community is - if you respect your time and want to experience the best version of yourself whether it's in the trading sense or general sense, there isn't a community close to this one - so do what you want with that information."
  },
  {
    name: "Sandro Schulz",
    role: "Trader",
    company: "",
    image: "SS",
    rating: 5,
    text: "Tbh, Sandels videos are top top, really like the way he gets his message and the way he answered the questions"
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