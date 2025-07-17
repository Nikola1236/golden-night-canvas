import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6 text-gradient">
            Let's Discuss Your Future
          </h2>
          <p className="font-inter text-xl text-foreground/70 max-w-3xl mx-auto">
            Start your transformation in professional trading. Our team of experts is ready to help you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Enhanced Contact Info */}
          <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-8 text-gradient">
              Contact Us Now
            </h3>
            
            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'contact@scythecapital.com', color: 'bg-blue-500/20', iconColor: 'text-blue-500' },
                { icon: Phone, label: 'Phone', value: '+971 4 123 4567', color: 'bg-green-500/20', iconColor: 'text-green-500' },
                { icon: MapPin, label: 'Headquarters', value: 'Dubai, UAE', color: 'bg-primary/20', iconColor: 'text-primary' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 group hover-lift animate-slide-up" style={{ animationDelay: `${0.4 + index * 0.1}s` }}>
                  <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 glass-effect`}>
                    <item.icon className={`w-6 h-6 ${item.iconColor}`} />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{item.label}</div>
                    <div className="text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="glass-effect rounded-2xl p-6 gradient-border hover-lift animate-scale-in" style={{ animationDelay: '0.7s' }}>
              <h4 className="font-semibold text-card-foreground mb-3 text-gradient">Free Consultation</h4>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Book a free 30-minute strategic call with one of our experts to evaluate your trading profile and define the most suitable strategy.
              </p>
            </div>
          </div>
          
          {/* Enhanced Contact Form */}
          <div className="glass-effect rounded-3xl p-8 gradient-border animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <form className="space-y-6">
              {[
                { label: 'Full Name *', type: 'text', placeholder: 'Enter your full name' },
                { label: 'Email *', type: 'email', placeholder: 'Enter your email' },
                { label: 'Phone', type: 'tel', placeholder: 'Enter your phone number' }
              ].map((field, index) => (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <label className="block text-sm font-medium text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    {field.label}
                  </label>
                  <Input 
                    type={field.type}
                    placeholder={field.placeholder}
                    className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 transition-all duration-300 group-focus-within:scale-[1.02]"
                  />
                </div>
              ))}
              
              <div className="group animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <label className="block text-sm font-medium text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Subject
                </label>
                <Select>
                  <SelectTrigger className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 transition-all duration-300">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border border-primary/20">
                    {['General Information', 'Strategy Demo', 'Investment Consultation', 'Technical Support', 'Partnership'].map(option => (
                      <SelectItem key={option} value={option.toLowerCase().replace(' ', '')} className="hover:bg-primary/10">
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="group animate-slide-up" style={{ animationDelay: '1s' }}>
                <label className="block text-sm font-medium text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your trading goals and experience"
                  rows={4}
                  className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 resize-none transition-all duration-300 group-focus-within:scale-[1.02]"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full hover-lift relative overflow-hidden group animate-scale-in" style={{ animationDelay: '1.1s' }}>
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Send Message
                  <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;