import { TrendingUp, MessageSquare, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-background border-t border-gold/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 rounded-lg bg-gold/10 border border-gold/20">
                <TrendingUp className="h-6 w-6 text-gold" />
              </div>
              <span className="text-xl font-bold text-gradient">TradeElite</span>
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
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">contact@tradingcourse.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">Discord Community</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-gold" />
                <span className="text-muted-foreground text-sm">Telegram Support</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gold/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © 2024 TradeElite. All rights reserved. Educational trading course.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;