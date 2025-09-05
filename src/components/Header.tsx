import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full bg-card shadow-soft border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-1 rounded-xl group-hover:shadow-glow-green transition-smooth">
              <img src="/lovable-uploads/0f4475e5-d273-4c65-8658-eddcde9bfedb.png" alt="AgriGuard Logo" className="h-10 w-10" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-primary">AgriGuard</h1>
              <p className="text-xs text-muted-foreground">Fasal ka Doctor</p>
            </div>
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