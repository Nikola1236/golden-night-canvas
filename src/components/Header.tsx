import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, TrendingUp, Settings, User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, isAdmin, signOut } = useAuth();

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
            {user ? (
              <div className="flex items-center space-x-2">
                {isAdmin && (
                  <Link to="/admin">
                    <Button variant="outline" className="text-sm">
                      Admin
                    </Button>
                  </Link>
                )}
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={signOut}
                  className="text-sm"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Esci
                </Button>
              </div>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="outline" className="text-sm">
                    <User className="h-4 w-4 mr-2" />
                    Accedi
                  </Button>
                </Link>
                <Button 
                  className="bg-gold text-navy hover:bg-gold-light pulse-gold"
                  onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}
                >
                  Get Started
                </Button>
              </>
            )}
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
              <div className="flex flex-col space-y-2 mt-4">
                <ThemeToggle />
                {user ? (
                  <>
                    {isAdmin && (
                      <Link to="/admin">
                        <Button variant="outline" className="w-full text-sm">
                          Admin
                        </Button>
                      </Link>
                    )}
                    <Button 
                      variant="ghost" 
                      className="w-full text-sm"
                      onClick={signOut}
                    >
                      <LogOut className="h-4 w-4 mr-2" />
                      Esci
                    </Button>
                  </>
                ) : (
                  <>
                    <Link to="/auth">
                      <Button variant="outline" className="w-full text-sm">
                        <User className="h-4 w-4 mr-2" />
                        Accedi
                      </Button>
                    </Link>
                    <Button 
                      className="bg-gold text-navy hover:bg-gold-light w-full"
                      onClick={() => window.open('https://whop.com/laminar-trading/', '_blank')}
                    >
                      Get Started
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;