import { Star, Shield, Users, Award, Zap, Target } from "lucide-react";

const services = [
  {
    icon: Star,
    title: "Premium Consulting",
    description: "Strategic guidance from industry experts to help you make informed decisions and achieve your goals."
  },
  {
    icon: Shield,
    title: "Secure Solutions",
    description: "Enterprise-grade security measures to protect your business and ensure complete peace of mind."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Seamless teamwork tools and processes that enhance productivity and drive exceptional results."
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control processes to ensure every deliverable meets the highest standards."
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Efficient workflows and optimized processes that deliver exceptional results in record time."
  },
  {
    icon: Target,
    title: "Goal Achievement",
    description: "Focused strategies and measurable outcomes that align perfectly with your business objectives."
  }
];

const ServicesSection = () => {
  return (
    <section className="py-20 bg-night-blue">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-inter text-xl text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Comprehensive solutions designed to elevate your business and drive sustainable growth.
          </p>
        </div>
        
        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-foreground/5 backdrop-blur-sm border border-foreground/10 rounded-3xl p-8 hover:bg-foreground/10 transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-elegant)]"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-playfair text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
              </div>
              <p className="font-inter text-foreground/80 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;