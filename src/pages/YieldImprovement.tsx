import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Sprout, MapPin, Droplets, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const YieldImprovement = () => {
  const [selectedRegion, setSelectedRegion] = useState<string>("");
  const [selectedCrop, setSelectedCrop] = useState<string>("");
  const [selectedSeason, setSelectedSeason] = useState<string>("");
  const [farmArea, setFarmArea] = useState<string>("");
  const [selectedState, setSelectedState] = useState<string>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string>("");

  const seasons = [
    { value: "rabi", label: "Rabi Season (Winter Crop)" },
    { value: "kharif", label: "Kharif Season (Monsoon Crop)" },
    { value: "all_season", label: "All Season" }
  ];

  const states = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", 
    "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", 
    "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", 
    "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", 
    "Uttarakhand", "West Bengal", "Delhi", "Jammu and Kashmir", "Ladakh"
  ];

  const districts = [
    "Ahmedabad", "Bengaluru Urban", "Chennai", "Delhi", "Hyderabad", "Kolkata", "Mumbai City", 
    "Pune", "Agra", "Allahabad", "Amritsar", "Aurangabad", "Bareilly", "Bhopal", "Coimbatore", 
    "Dhanbad", "Faridabad", "Ghaziabad", "Gurgaon", "Gwalior", "Hubli-Dharwad", "Indore", 
    "Jabalpur", "Jaipur", "Jalandhar", "Jammu", "Jamshedpur", "Jodhpur", "Kanpur", "Kochi", 
    "Kota", "Lucknow", "Ludhiana", "Madurai", "Meerut", "Moradabad", "Mysore", "Nagpur", 
    "Nashik", "Patna", "Rajkot", "Ranchi", "Salem", "Solapur", "Srinagar", "Surat", 
    "Thiruvananthapuram", "Tiruchirappalli", "Udaipur", "Vadodara", "Varanasi", "Vijayawada", 
    "Visakhapatnam", "Warangal", "Ahmednagar", "Akola", "Aligarh", "Anantapur", "Bellary", 
    "Bhavnagar", "Bikaner", "Bilaspur", "Chittoor", "Cuddalore", "Cuttack", "Darbhanga", 
    "Davangere", "Erode", "Gandhinagar", "Gulbarga", "Guntur", "Hassan", "Hisar", "Hospet", 
    "Howrah", "Jalgaon", "Jalna", "Karimnagar", "Khammam", "Kolhapur", "Kurnool", "Latur", 
    "Mangalore", "Nanded", "Nizamabad", "Parbhani", "Puducherry", "Raichur", "Raipur", 
    "Rajahmundry", "Sambalpur", "Sangli", "Satara", "Shimoga", "Siliguri", "Tirunelveli", 
    "Tumkur", "Ujjain", "Vellore", "Vizianagaram"
  ];

  const regions = [
    {
      value: "alluvial",
      label: "Alluvial Soil",
      states: "Punjab, Haryana, Uttar Pradesh, Bihar, West Bengal",
      description: "Highly fertile soil rich in minerals, ideal for cereals and cash crops"
    },
    {
      value: "black",
      label: "Black Soil (Regur)",
      states: "Maharashtra, Madhya Pradesh, Gujarat, Karnataka, Andhra Pradesh",
      description: "Moisture-retentive soil perfect for cotton and sugarcane"
    },
    {
      value: "red",
      label: "Red Soil",
      states: "Tamil Nadu, Karnataka, Odisha, Jharkhand, Chhattisgarh",
      description: "Well-drained soil suitable for millets, pulses, and groundnut"
    },
    {
      value: "laterite",
      label: "Laterite Soil",
      states: "Kerala, Assam, Maharashtra, Karnataka, Odisha",
      description: "Acidic soil good for plantation crops and rice"
    },
    {
      value: "desert",
      label: "Desert Soil",
      states: "Rajasthan, Gujarat",
      description: "Sandy soil with low organic matter, suitable for drought-resistant crops"
    },
    {
      value: "mountain",
      label: "Mountain/Forest Soil",
      states: "Himachal Pradesh, Uttarakhand, Arunachal Pradesh, Sikkim, J&K",
      description: "Rich in organic matter, ideal for horticulture and tea"
    }
  ];

  const crops = [
    { value: "rice", label: "Rice" },
    { value: "wheat", label: "Wheat" },
    { value: "corn", label: "Corn/Maize" },
    { value: "cotton", label: "Cotton" },
    { value: "sugarcane", label: "Sugarcane" },
    { value: "soybean", label: "Soybean" },
    { value: "chickpea", label: "Chickpea" },
    { value: "tomato", label: "Tomato" },
    { value: "potato", label: "Potato" },
    { value: "onion", label: "Onion" },
    { value: "groundnut", label: "Groundnut" },
    { value: "millets", label: "Millets" }
  ];

  return (
    <div>
      <Header />
      
      <main className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6">
                <Sprout className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                Increase Your Yield
              </h1>
              <p className="text-xl text-muted-foreground">
                Our AI will recommend best irrigation, fertilization, and climate-based practices to improve yield in your region.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Input Section */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="h-5 w-5 mr-2" />
                    Select Your Region & Crop
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Season Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Season
                    </label>
                    <Select value={selectedSeason} onValueChange={setSelectedSeason}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose farming season" />
                      </SelectTrigger>
                      <SelectContent>
                        {seasons.map((season) => (
                          <SelectItem key={season.value} value={season.value}>
                            {season.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Farm Area Input */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Area of Farm (in hectares)
                    </label>
                    <Input
                      type="number"
                      placeholder="Enter farm area in hectares"
                      value={farmArea}
                      onChange={(e) => setFarmArea(e.target.value)}
                      className="w-full"
                      min="0"
                      step="0.1"
                    />
                  </div>

                  {/* State Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select State
                    </label>
                    <Select value={selectedState} onValueChange={setSelectedState}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your state" />
                      </SelectTrigger>
                      <SelectContent>
                        {states.map((state) => (
                          <SelectItem key={state} value={state}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* District Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select District
                    </label>
                    <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your district" />
                      </SelectTrigger>
                      <SelectContent>
                        {districts.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Region Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Region (Based on Soil Type)
                    </label>
                    <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your soil region" />
                      </SelectTrigger>
                      <SelectContent>
                        {regions.map((region) => (
                          <SelectItem key={region.value} value={region.value}>
                            <div className="flex flex-col">
                              <span className="font-medium">{region.label}</span>
                              <span className="text-xs text-muted-foreground">
                                {region.states}
                              </span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Crop Selection */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Select Crop Type
                    </label>
                    <Select value={selectedCrop} onValueChange={setSelectedCrop}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Choose your crop" />
                      </SelectTrigger>
                      <SelectContent>
                        {crops.map((crop) => (
                          <SelectItem key={crop.value} value={crop.value}>
                            {crop.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Selected Region Info */}
                  {selectedRegion && (
                    <div className="bg-accent/10 rounded-lg p-4">
                      <h4 className="font-semibold text-foreground mb-2">
                        {regions.find(r => r.value === selectedRegion)?.label}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {regions.find(r => r.value === selectedRegion)?.description}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Common in: {regions.find(r => r.value === selectedRegion)?.states}
                      </p>
                    </div>
                  )}

                  <Button 
                    className="w-full bg-gradient-primary hover:shadow-glow-green transition-smooth"
                    disabled={!selectedRegion || !selectedCrop || !selectedSeason || !farmArea || !selectedState || !selectedDistrict}
                  >
                    Get Yield Improvement Suggestions
                  </Button>
                </CardContent>
              </Card>

              {/* Recommendations Preview */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    What You'll Get
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <Droplets className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Irrigation Strategy</h4>
                        <p className="text-sm text-muted-foreground">
                          Optimal watering schedules, techniques, and water conservation methods for your soil type
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-success/10 rounded-lg">
                        <Leaf className="h-5 w-5 text-success" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Fertilization Plan</h4>
                        <p className="text-sm text-muted-foreground">
                          NPK ratios, organic supplements, and application timing specific to your region
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-3">
                      <div className="p-2 bg-warning/10 rounded-lg">
                        <MapPin className="h-5 w-5 text-warning" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">Climate Adaptation</h4>
                        <p className="text-sm text-muted-foreground">
                          Seasonal adjustments, pest control, and weather-based recommendations
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-primary rounded-lg p-6 text-white">
                    <h4 className="font-bold text-lg mb-2">Expected Results</h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold">15-30%</div>
                        <div className="text-sm opacity-90">Yield Increase</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold">20%</div>
                        <div className="text-sm opacity-90">Water Savings</div>
                      </div>
                    </div>
                  </div>

                  <div className="text-center text-sm text-muted-foreground">
                    💡 Recommendations are based on soil analysis, climate data, and successful farming practices in your region
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default YieldImprovement;