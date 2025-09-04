import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import cropBackground from "@/assets/crop-background.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${cropBackground})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background/60 to-background/80" />
      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Main Hero Content */}
        <div className="max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            AI-Powered Crop Yield
            <span className="block bg-gradient-hero bg-clip-text text-transparent">
              Prediction & Optimization
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Helping farmers identify crops, boost productivity, and reduce costs with AI-powered insights
          </p>
        </div>

        {/* Demo Credentials Card */}
        <Card className="max-w-md mx-auto p-8 shadow-card mb-8 bg-card/90 backdrop-blur-sm border-2 border-primary/10">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Try AgriGuard Now</h3>
          
          {/* Demo Credentials Display - Lighter Theme */}
          <div className="bg-secondary/30 rounded-lg p-4 mb-6 text-left border border-warning/20">
            <p className="text-sm text-accent-foreground/70 mb-2 font-medium">Demo Credentials:</p>
            <p className="font-mono text-sm text-muted-foreground"><strong className="text-accent-foreground">Email:</strong> abc@gmail.com</p>
            <p className="font-mono text-sm text-muted-foreground"><strong className="text-accent-foreground">Password:</strong> 1234</p>
          </div>

          {/* Login Form - Bold Input Boxes */}
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Enter email address"
              defaultValue="abc@gmail.com"
              className="bg-card border-2 border-primary/30 font-semibold text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <Input 
              type="password" 
              placeholder="Enter password"
              defaultValue="1234"
              className="bg-card border-2 border-primary/30 font-semibold text-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <Button className="w-full bg-gradient-primary hover:shadow-glow-green transition-smooth text-lg py-6 font-bold">
              Sign Up & Get Started
            </Button>
          </div>
        </Card>

        {/* Call to Action */}
        <p className="text-muted-foreground">
          Join thousands of farmers already using AgriGuard to increase their yields
        </p>
      </div>
    </section>
  );
};

export default Hero;