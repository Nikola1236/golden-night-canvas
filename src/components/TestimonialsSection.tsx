import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechCorp",
    content: "Working with this team was an absolute pleasure. Their attention to detail and commitment to excellence exceeded all our expectations. The results speak for themselves.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Michael Chen",
    role: "Founder, InnovateLab",
    content: "The level of professionalism and expertise demonstrated throughout our project was remarkable. They delivered exactly what they promised, on time and within budget.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Emily Rodriguez",
    role: "Director, GrowthFirst",
    content: "I can't recommend them highly enough. Their innovative approach and dedication to quality transformed our business. The impact has been incredible.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6">
            What Our Clients Say
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-inter text-xl text-night-blue/80 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-3xl p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105 group"
            >
              {/* Rating Stars */}
              <div className="flex space-x-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>
              
              {/* Testimonial Content */}
              <blockquote className="font-inter text-lg text-night-blue/80 leading-relaxed mb-8 italic">
                "{testimonial.content}"
              </blockquote>
              
              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover shadow-md group-hover:scale-110 transition-transform duration-300"
                />
                <div>
                  <h4 className="font-playfair text-xl font-semibold text-night-blue">
                    {testimonial.name}
                  </h4>
                  <p className="font-inter text-night-blue/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call-to-Action */}
        <div className="text-center mt-16">
          <p className="font-inter text-lg text-night-blue/80 mb-8">
            Ready to join our satisfied clients?
          </p>
          <button className="bg-primary text-primary-foreground font-inter font-semibold px-8 py-4 rounded-2xl hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-[var(--shadow-elegant)]">
            Start Your Project Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;