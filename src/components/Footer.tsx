import { TrendingUp, MessageCircle, Mail, ShoppingCart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ebb96ecd-ef8e-49f7-b357-bc0068bf0584.png" 
                alt="Laminar Trading Logo" 
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold text-gradient">Laminar Trading</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Master professional trading strategies with our comprehensive course. 
              Learn from industry experts and transform your trading skills.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Course</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-gold transition-colors text-sm">About</a></li>
              <li><a href="#strategies" className="text-muted-foreground hover:text-gold transition-colors text-sm">Strategies</a></li>
              <li><a href="#performance" className="text-muted-foreground hover:text-gold transition-colors text-sm">Performance</a></li>
              <li><a href="#faq" className="text-muted-foreground hover:text-gold transition-colors text-sm">FAQ</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2">
              <li><a href="#contact" className="text-muted-foreground hover:text-gold transition-colors text-sm">Contact</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">Help Center</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">Terms</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors" onClick={() => window.open('mailto:support@laminar.trading', '_blank')}>
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">support@laminar.trading</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors" onClick={() => window.open('https://discord.gg/v5PVKSHx6N', '_blank')}>
                <MessageCircle className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">Discord Community</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer hover:text-gold transition-colors" onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}>
                <ShoppingCart className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">Access Course</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Risk Disclosure */}
        <div className="border-t border-gold/10 mt-8 pt-8">
          <div className="mb-6">
            <h4 className="font-semibold text-gold mb-3">Risk Disclosure:</h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cryptocurrency trading involves substantial risk and may result in the loss of your entire investment. Past performance does not guarantee future results. Only invest what you can afford to lose and always consult an independent financial advisor before making investment decisions. Laminar Trading is a professional trading course for educational purposes only.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
              © 2025 Laminar Trading. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Risk Disclosure
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors text-sm">
                Compliance
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;