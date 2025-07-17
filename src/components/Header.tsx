import { Button } from "@/components/ui/button";
import { Moon, Sun, TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-playfair text-xl font-bold text-foreground">TradeElite</span>
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors">About</a>
            <a href="#strategies" className="text-foreground/80 hover:text-foreground transition-colors">Strategies</a>
            <a href="#performance" className="text-foreground/80 hover:text-foreground transition-colors">Performance</a>
            <a href="#faq" className="text-foreground/80 hover:text-foreground transition-colors">FAQ</a>
            <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors">Contact</a>
          </nav>
          
          {/* CTA Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <Moon className="w-4 h-4" />
            </Button>
            <Button variant="default" className="hidden md:inline-flex">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;