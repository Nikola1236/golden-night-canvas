import { Check } from "lucide-react";

const reasons = [
  "Proven track record with 500+ successful projects",
  "Industry-leading expertise and cutting-edge solutions",
  "24/7 dedicated support and customer service",
  "Transparent pricing with no hidden fees",
  "Guaranteed satisfaction and quality assurance",
  "Rapid delivery without compromising on quality",
  "Ongoing maintenance and continuous improvement",
  "Award-winning team recognized by industry leaders"
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-20 bg-platinum/30">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6">
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="font-inter text-xl text-night-blue/80 max-w-3xl mx-auto leading-relaxed">
            Experience the difference that comes with working with industry leaders who are committed to your success.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="flex items-start space-x-4 p-6 bg-card rounded-2xl shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:scale-105"
            >
              <div className="flex-shrink-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center mt-1">
                <Check className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="font-inter text-lg text-night-blue leading-relaxed">
                {reason}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-8 bg-card rounded-3xl px-12 py-8 shadow-[var(--shadow-card)]">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">98%</div>
              <div className="text-night-blue/70 font-inter">Client Satisfaction</div>
            </div>
            <div className="w-px h-16 bg-platinum"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-night-blue/70 font-inter">Support Available</div>
            </div>
            <div className="w-px h-16 bg-platinum"></div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-night-blue/70 font-inter">Quality Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;