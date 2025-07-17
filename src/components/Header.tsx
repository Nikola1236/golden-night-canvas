import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-gold/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/ebb96ecd-ef8e-49f7-b357-bc0068bf0584.png" 
              alt="Laminar Trading Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gradient">Laminar Trading</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-gold transition-colors">
              About
            </a>
            <a href="#strategies" className="text-foreground/80 hover:text-gold transition-colors">
              Strategies
            </a>
            <a href="#performance" className="text-foreground/80 hover:text-gold transition-colors">
              Performance
            </a>
            <a href="#faq" className="text-foreground/80 hover:text-gold transition-colors">
              FAQ
            </a>
            <a href="#contact" className="text-foreground/80 hover:text-gold transition-colors">
              Contact
            </a>
          </nav>

          {/* Theme Toggle & CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            <Button className="bg-gold text-navy hover:bg-gold-light pulse-gold">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gold"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gold/10">
            <nav className="flex flex-col space-y-4 mt-4">
              <a
                href="#about"
                className="text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#strategies"
                className="text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Strategies
              </a>
              <a
                href="#performance"
                className="text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Performance
              </a>
              <a
                href="#faq"
                className="text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
              <a
                href="#contact"
                className="text-foreground/80 hover:text-gold transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="flex items-center justify-between mt-4">
                <ThemeToggle />
                <Button className="bg-gold text-navy hover:bg-gold-light flex-1 ml-4">
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;