import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import AgriGuardLogo from "@/components/AgriGuardLogo";

const Header = () => {
  return (
    <header className="w-full bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <AgriGuardLogo className="group-hover:drop-shadow-lg transition-all duration-300" />
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-smooth font-medium">
              Home
            </Link>
            <Link to="/about" className="text-foreground hover:text-primary transition-smooth font-medium">
              About
            </Link>
            <Link to="/models" className="text-foreground hover:text-primary transition-smooth font-medium">
              Models
            </Link>
            <Button variant="default" className="bg-gradient-primary hover:shadow-glow-green transition-smooth">
              Sign Up
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="outline" size="sm">
              Menu
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;