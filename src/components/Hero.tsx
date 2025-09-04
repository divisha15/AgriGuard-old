import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-subtle py-20">
      <div className="container mx-auto px-4 text-center">
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
        <Card className="max-w-md mx-auto p-8 shadow-card mb-8 bg-card">
          <h3 className="text-xl font-semibold mb-6 text-foreground">Try AgriGuard Now</h3>
          
          {/* Demo Credentials Display */}
          <div className="bg-muted rounded-lg p-4 mb-6 text-left">
            <p className="text-sm text-muted-foreground mb-2">Demo Credentials:</p>
            <p className="font-mono text-sm"><strong>Email:</strong> abc@gmail.com</p>
            <p className="font-mono text-sm"><strong>Password:</strong> 1234</p>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            <Input 
              type="email" 
              placeholder="Enter email address"
              defaultValue="abc@gmail.com"
              className="bg-input"
            />
            <Input 
              type="password" 
              placeholder="Enter password"
              defaultValue="1234"
              className="bg-input"
            />
            <Button className="w-full bg-gradient-primary hover:shadow-glow-green transition-smooth text-lg py-6">
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