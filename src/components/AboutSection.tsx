import aboutImage from "@/assets/about-us-image.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-4xl md:text-5xl font-bold text-night-blue mb-6">
                Who We Are
              </h2>
              <div className="w-20 h-1 bg-primary mb-8"></div>
            </div>
            
            <p className="font-inter text-lg text-night-blue/80 leading-relaxed">
              We are a team of passionate professionals dedicated to delivering exceptional results. 
              With over a decade of experience in the industry, we have built a reputation for 
              excellence and innovation.
            </p>
            
            <p className="font-inter text-lg text-night-blue/80 leading-relaxed">
              Our commitment to quality and attention to detail sets us apart. We believe in 
              building lasting relationships with our clients through trust, transparency, and 
              exceptional service.
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">500+</div>
                <div className="text-night-blue/70 font-inter">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <div className="text-night-blue/70 font-inter">Years Experience</div>
              </div>
            </div>
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-[var(--shadow-card)]">
              <img 
                src={aboutImage} 
                alt="Professional team member"
                className="w-full h-[600px] object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;