import { TrendingUp } from "lucide-react";

const TradingFooter = () => {
  return (
    <footer className="bg-background border-t border-primary/20 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-playfair text-xl font-bold text-foreground">TradeElite</span>
            </div>
            <p className="text-foreground/70 max-w-md leading-relaxed">
              Advanced algorithmic trading strategies for professionals who demand consistent results in financial markets.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-foreground/70 hover:text-primary transition-colors">About</a></li>
              <li><a href="#strategies" className="text-foreground/70 hover:text-primary transition-colors">Strategies</a></li>
              <li><a href="#performance" className="text-foreground/70 hover:text-primary transition-colors">Performance</a></li>
              <li><a href="#faq" className="text-foreground/70 hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-foreground/70">contact@scythecapital.com</li>
              <li className="text-foreground/70">+971 4 123 4567</li>
              <li className="text-foreground/70">Dubai, UAE</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-foreground/60 text-sm">
            © 2024 Scythe Capital. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 md:mt-0">
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Terms of Service</a>
            <a href="#" className="text-foreground/60 hover:text-primary transition-colors text-sm">Risk Disclosure</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TradingFooter;