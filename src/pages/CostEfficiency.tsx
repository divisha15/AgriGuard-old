import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { DollarSign, TrendingDown, Calculator, Lightbulb } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CostEfficiency = () => {
  const [currentExpenditure, setCurrentExpenditure] = useState<string>("");
  const [targetReduction, setTargetReduction] = useState<string>("");

  const costCategories = [
    { icon: "🌱", label: "Seeds", description: "Quality seeds and seedlings" },
    { icon: "💧", label: "Irrigation", description: "Water and irrigation systems" },
    { icon: "🧪", label: "Fertilizers", description: "NPK and organic fertilizers" },
    { icon: "🚜", label: "Labor", description: "Manual and mechanical labor" },
    { icon: "🛡️", label: "Pesticides", description: "Insecticides and fungicides" },
    { icon: "⚡", label: "Energy", description: "Fuel and electricity costs" }
  ];

  const savingStrategies = [
    {
      category: "Smart Irrigation",
      savings: "15-25%",
      description: "Drip irrigation and moisture sensors reduce water waste"
    },
    {
      category: "Precision Fertilization",
      savings: "20-30%",
      description: "Soil testing and targeted application optimize nutrient use"
    },
    {
      category: "Integrated Pest Management",
      savings: "10-20%",
      description: "Biological controls reduce chemical pesticide dependency"
    },
    {
      category: "Energy Optimization",
      savings: "12-18%",
      description: "Solar pumps and efficient machinery lower energy costs"
    }
  ];

  return (
    <div>
      <Header />
      
      <main className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6">
                <DollarSign className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                Cost Efficiency Analysis
              </h1>
              <p className="text-xl text-muted-foreground">
                AgriGuard helps you plan smarter resource usage, reduce unnecessary expenses, and achieve higher profit margins.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Input Section */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Calculator className="h-5 w-5 mr-2" />
                    Cost Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Current Farming Expenditure (₹)
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 50000"
                      value={currentExpenditure}
                      onChange={(e) => setCurrentExpenditure(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Include all farming costs: seeds, fertilizers, labor, irrigation, etc.
                    </p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Target Cost Reduction (₹)
                    </label>
                    <Input
                      type="number"
                      placeholder="e.g., 10000"
                      value={targetReduction}
                      onChange={(e) => setTargetReduction(e.target.value)}
                      className="text-lg"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      How much would you like to save per season?
                    </p>
                  </div>

                  {currentExpenditure && targetReduction && (
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">Quick Analysis</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Current Expenditure:</span>
                          <span className="font-medium">₹{parseInt(currentExpenditure).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Target Reduction:</span>
                          <span className="font-medium text-success">₹{parseInt(targetReduction).toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between border-t pt-2">
                          <span>Reduction Percentage:</span>
                          <span className="font-bold text-success">
                            {((parseInt(targetReduction) / parseInt(currentExpenditure)) * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow-green transition-smooth"
                    disabled={!currentExpenditure || !targetReduction}
                  >
                    Analyze Cost Efficiency
                  </Button>
                </CardContent>
              </Card>

              {/* Saving Strategies */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingDown className="h-5 w-5 mr-2" />
                    Proven Cost-Saving Strategies
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {savingStrategies.map((strategy, index) => (
                      <div key={index} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                        <div className="p-2 bg-success/10 rounded-lg flex-shrink-0">
                          <TrendingDown className="h-4 w-4 text-success" />
                        </div>
                        <div className="flex-grow">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-medium text-foreground">{strategy.category}</h4>
                            <span className="text-sm font-bold text-success">{strategy.savings}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{strategy.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Cost Breakdown Categories */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Lightbulb className="h-5 w-5 mr-2" />
                  Break Down Your Farming Costs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-3 gap-6">
                  {costCategories.map((category, index) => (
                    <div key={index} className="text-center p-4 bg-muted/20 rounded-lg hover:bg-muted/40 transition-smooth">
                      <div className="text-3xl mb-2">{category.icon}</div>
                      <h4 className="font-semibold text-foreground mb-1">{category.label}</h4>
                      <p className="text-sm text-muted-foreground">{category.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 text-center">
                  <div className="bg-gradient-primary rounded-lg p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Average Farmer Success</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div>
                        <div className="text-2xl font-bold">₹15,000</div>
                        <div className="text-sm opacity-90">Average Savings per Season</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">25%</div>
                        <div className="text-sm opacity-90">Cost Reduction</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">40%</div>
                        <div className="text-sm opacity-90">Profit Increase</div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CostEfficiency;