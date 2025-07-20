import { Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {

  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            Join Our Community
          </h2>
          <p className="font-inter text-xl text-foreground/70 max-w-3xl mx-auto">
            Connect with professional traders and get instant support from our expert team.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Contact Options */}
          <div className="glass-effect rounded-3xl p-8 gradient-border animate-scale-in">
            <h3 className="font-playfair text-2xl font-bold text-gold mb-8 text-center">
              Contact Us Now
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  icon: Mail, 
                  label: 'Email', 
                  value: 'support@laminar.trading', 
                  description: 'General inquiries',
                  action: () => window.open('mailto:support@laminar.trading', '_blank'),
                  isImage: false
                },
                { 
                  icon: null, 
                  label: 'Discord', 
                  value: 'Join our community', 
                  description: 'Live chat & support',
                  action: () => window.open('https://discord.gg/v5PVKSHx6N', '_blank'),
                  isImage: true,
                  imageSrc: '/lovable-uploads/c0ccbb02-91bd-4195-b2b7-c9bbcc447094.png'
                },
                { 
                  icon: ShoppingCart, 
                  label: 'Whop', 
                  value: 'Access Course', 
                  description: 'Start learning today',
                  action: () => window.open('https://whop.com/laminar-trading/', '_blank'),
                  isImage: false
                }
              ].map((item, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer hover-lift animate-slide-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  onClick={item.action}
                >
                  <div className="bg-gold/10 border border-gold/20 p-6 rounded-xl mb-4 group-hover:bg-gold/20 transition-colors">
                    {item.isImage ? (
                      <img src={item.imageSrc} alt={item.label} className="h-8 w-8 mx-auto" />
                    ) : (
                      <item.icon className="h-8 w-8 text-gold mx-auto" />
                    )}
                  </div>
                  <h4 className="font-semibold text-foreground text-lg mb-2 group-hover:text-gold transition-colors">{item.label}</h4>
                  <p className="text-gold font-medium mb-1">{item.value}</p>
                  <p className="text-foreground/70 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                size="lg" 
                className="bg-gold text-navy hover:bg-gold-light text-lg px-8 py-4 pulse-gold shadow-lg shadow-gold/30"
                onClick={() => window.open('https://discord.gg/v5PVKSHx6N', '_blank')}
              >
                <img src="/lovable-uploads/c0ccbb02-91bd-4195-b2b7-c9bbcc447094.png" alt="Discord" className="mr-2 h-5 w-5" />
                Join Discord Community
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                Get instant answers from traders and experts in our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;