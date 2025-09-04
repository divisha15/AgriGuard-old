import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Sprout, DollarSign } from "lucide-react";

const FeatureCards = () => {
  const features = [
    {
      icon: Camera,
      title: "Crop Identification & Diagnosis",
      description: "Upload crop photos for AI-powered identification, disease detection, and treatment recommendations",
      path: "/crop-identification",
      color: "text-primary"
    },
    {
      icon: Sprout,
      title: "Yield Improvement",
      description: "Get personalized recommendations based on your region's soil type and climate conditions",
      path: "/yield-improvement", 
      color: "text-success"
    },
    {
      icon: DollarSign,
      title: "Cost Efficiency",
      description: "Analyze farming expenses and discover opportunities to reduce costs while maintaining quality",
      path: "/cost-efficiency",
      color: "text-warning"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            Powerful AI Tools for Modern Farming
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our suite of AI-powered agricultural tools designed to optimize every aspect of your farming operation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link key={index} to={feature.path} className="group">
              <Card className="feature-card h-full cursor-pointer bg-card border-border hover:border-primary/20">
                <CardContent className="p-8 text-center h-full flex flex-col">
                  <div className="mb-6">
                    <div className="inline-flex p-4 rounded-full bg-gradient-subtle group-hover:bg-gradient-primary transition-smooth">
                      <feature.icon className={`h-12 w-12 ${feature.color} group-hover:text-white transition-smooth`} />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-primary transition-smooth">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground flex-grow">
                    {feature.description}
                  </p>
                  
                  <div className="mt-6">
                    <span className="text-primary font-medium group-hover:underline">
                      Get Started →
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;