import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-night-blue py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
                <span className="font-playfair font-bold text-primary-foreground text-xl">E</span>
              </div>
              <span className="font-playfair text-2xl font-bold text-foreground">Excellence</span>
            </div>
            <p className="font-inter text-foreground/80 leading-relaxed">
              Transforming visions into reality with premium solutions designed for those who demand nothing but the best.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-foreground/10 rounded-xl flex items-center justify-center text-foreground/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {["About Us", "Services", "Portfolio", "Contact", "Careers"].map((link) => (
                <li key={link}>
                  <a href="#" className="font-inter text-foreground/80 hover:text-primary transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">Services</h3>
            <ul className="space-y-4">
              {["Consulting", "Development", "Design", "Strategy", "Support"].map((service) => (
                <li key={service}>
                  <a href="#" className="font-inter text-foreground/80 hover:text-primary transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-playfair text-xl font-semibold text-foreground mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                <span className="font-inter text-foreground/80">
                  123 Business Avenue<br />
                  New York, NY 10001
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-inter text-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-inter text-foreground/80">hello@excellence.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-inter text-foreground/60 text-center md:text-left">
              © 2024 Excellence. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="font-inter text-foreground/60 hover:text-primary transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="font-inter text-foreground/60 hover:text-primary transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="font-inter text-foreground/60 hover:text-primary transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;