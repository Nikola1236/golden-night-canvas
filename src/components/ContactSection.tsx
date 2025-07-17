import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      subject: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.fullName || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('discord-webhook', {
        body: {
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message
        }
      });

      if (error) throw error;

      toast({
        title: "Message sent!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { label: 'Full Name *', type: 'text', placeholder: 'Enter your full name', name: 'fullName', value: formData.fullName },
                { label: 'Email *', type: 'email', placeholder: 'Enter your email', name: 'email', value: formData.email },
                { label: 'Phone', type: 'tel', placeholder: 'Enter your phone number', name: 'phone', value: formData.phone }
              ].map((field, index) => (
                <div key={index} className="group animate-slide-up" style={{ animationDelay: `${0.6 + index * 0.1}s` }}>
                  <label className="block text-sm font-medium text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                    {field.label}
                  </label>
                  <Input 
                    type={field.type}
                    name={field.name}
                    value={field.value}
                    onChange={handleInputChange}
                    placeholder={field.placeholder}
                    className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 transition-all duration-300 group-focus-within:scale-[1.02]"
                    required={field.label.includes('*')}
                  />
                </div>
              ))}
              
              <div className="group animate-slide-up" style={{ animationDelay: '0.9s' }}>
                <label className="block text-sm font-medium text-card-foreground mb-2 group-focus-within:text-primary transition-colors duration-300">
                  Subject
                </label>
                <Select value={formData.subject} onValueChange={handleSelectChange}>
                  <SelectTrigger className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 transition-all duration-300">
                    <SelectValue placeholder="Select a subject" />
                  </SelectTrigger>
                  <SelectContent className="glass-effect border border-primary/20">
                    {['General Information', 'Strategy Demo', 'Investment Consultation', 'Technical Support', 'Partnership'].map(option => (
                      <SelectItem key={option} value={option} className="hover:bg-primary/10">
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
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your trading goals and experience"
                  rows={4}
                  className="glass-effect border-primary/20 focus:border-primary hover:border-primary/40 resize-none transition-all duration-300 group-focus-within:scale-[1.02]"
                  required
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full hover-lift relative overflow-hidden group animate-scale-in" 
                style={{ animationDelay: '1.1s' }}
                disabled={isSubmitting}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
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