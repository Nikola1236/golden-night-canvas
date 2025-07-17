import { Button } from "@/components/ui/button";
import { Moon, Sun, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-primary/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center shadow-lg animate-glow group-hover:scale-110 transition-transform duration-300">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-playfair text-xl font-bold text-foreground group-hover:text-gradient transition-colors duration-300">TradeElite</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['About', 'Strategies', 'Performance', 'FAQ', 'Contact'].map((item) => (
              <a 
                key={item}
                href={`#${item.toLowerCase()}`} 
                className="relative text-foreground/80 hover:text-foreground transition-all duration-300 group"
              >
                <span className="relative z-10">{item}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative overflow-hidden hover:bg-primary/10 hover:scale-110 transition-all duration-300"
            >
              <Moon className="w-4 h-4 transition-transform duration-300 hover:rotate-12" />
            </Button>
            <Button 
              variant="default" 
              className="hidden md:inline-flex relative overflow-hidden group hover-lift"
            >
              <span className="relative z-10">Get Started</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;