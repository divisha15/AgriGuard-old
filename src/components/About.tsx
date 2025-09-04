import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Target, Users, BarChart, DollarSign } from "lucide-react";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Transforming Agriculture with AI
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AgriGuard addresses the most critical challenges facing modern farmers through intelligent technology solutions
            </p>
          </div>

          {/* Problem Section */}
          <div className="mb-16">
            <Card className="shadow-card bg-card border border-destructive/20">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <AlertTriangle className="h-8 w-8 text-destructive mr-3" />
                  <h3 className="text-2xl font-bold text-foreground">The Problem</h3>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="bg-destructive/10 rounded-lg p-4 mb-4">
                      <BarChart className="h-8 w-8 text-destructive mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">Unpredictable Yields</h4>
                    <p className="text-sm text-muted-foreground">
                      Farmers struggle with inconsistent crop production due to lack of data-driven insights
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-destructive/10 rounded-lg p-4 mb-4">
                      <DollarSign className="h-8 w-8 text-destructive mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">High Input Costs</h4>
                    <p className="text-sm text-muted-foreground">
                      Rising costs of fertilizers, pesticides, and resources squeeze profit margins
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="bg-destructive/10 rounded-lg p-4 mb-4">
                      <Users className="h-8 w-8 text-destructive mx-auto" />
                    </div>
                    <h4 className="font-semibold mb-2 text-foreground">Limited Expert Access</h4>
                    <p className="text-sm text-muted-foreground">
                      Lack of personalized agricultural advice and timely intervention for crop issues
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Solution Section */}
          <Card className="shadow-card bg-card border border-success/20">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Target className="h-8 w-8 text-success mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Our Solution</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-xl font-semibold mb-4 text-foreground">
                    AgriGuard: Your AI-Powered Farming Assistant
                  </h4>
                  <p className="text-muted-foreground mb-6">
                    We combine advanced computer vision, machine learning, and regional agricultural expertise 
                    to provide farmers with actionable insights that increase yields, reduce costs, and optimize 
                    resource usage.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      <span className="text-foreground">Instant crop identification and disease diagnosis</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      <span className="text-foreground">Region-specific yield optimization strategies</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-success rounded-full mr-3"></div>
                      <span className="text-foreground">Smart cost analysis and reduction recommendations</span>
                    </div>
                  </div>
                </div>
                <div className="bg-gradient-primary rounded-2xl p-8 text-white text-center">
                  <div className="text-4xl font-bold mb-2">10,000+</div>
                  <div className="text-lg">Farmers Helped</div>
                  <div className="text-4xl font-bold mb-2 mt-6">25%</div>
                  <div className="text-lg">Average Yield Increase</div>
                  <div className="text-4xl font-bold mb-2 mt-6">30%</div>
                  <div className="text-lg">Cost Reduction</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;