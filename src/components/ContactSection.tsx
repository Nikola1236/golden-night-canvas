import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-background" id="contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-foreground mb-6">
            Let's Discuss Your Future
          </h2>
          <p className="font-inter text-xl text-foreground/70 max-w-3xl mx-auto">
            Start your transformation in professional trading. Our team of experts is ready to help you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="font-playfair text-2xl font-bold text-foreground mb-8">
              Contact Us Now
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-foreground/70">contact@scythecapital.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-foreground/70">+971 4 123 4567</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Headquarters</div>
                  <div className="text-foreground/70">Dubai, UAE</div>
                </div>
              </div>
            </div>
            
            <div className="bg-card border border-primary/20 rounded-2xl p-6">
              <h4 className="font-semibold text-card-foreground mb-3">Free Consultation</h4>
              <p className="text-card-foreground/70 text-sm leading-relaxed">
                Book a free 30-minute strategic call with one of our experts to evaluate your trading profile and define the most suitable strategy.
              </p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-card border border-primary/20 rounded-3xl p-8">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Full Name *
                </label>
                <Input 
                  placeholder="Enter your full name"
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Email *
                </label>
                <Input 
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Phone
                </label>
                <Input 
                  type="tel"
                  placeholder="Enter your phone number"
                  className="bg-background border-primary/20 focus:border-primary"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Subject
                </label>
                <Select>
                  <SelectTrigger className="bg-background border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="general">General Information</SelectItem>
                    <SelectItem value="demo">Strategy Demo</SelectItem>
                    <SelectItem value="consultation">Investment Consultation</SelectItem>
                    <SelectItem value="support">Technical Support</SelectItem>
                    <SelectItem value="partnership">Partnership</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-card-foreground mb-2">
                  Message *
                </label>
                <Textarea 
                  placeholder="Tell us about your trading goals and experience"
                  rows={4}
                  className="bg-background border-primary/20 focus:border-primary resize-none"
                />
              </div>
              
              <Button type="submit" size="lg" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;