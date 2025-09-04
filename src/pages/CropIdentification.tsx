import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, Camera, FileImage, Leaf } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CropIdentification = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
  };

  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header />
      
      <main className="min-h-screen bg-gradient-subtle py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex p-4 bg-gradient-primary rounded-full mb-6">
                <Camera className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">
                Crop Identification & Diagnosis
              </h1>
              <p className="text-xl text-muted-foreground">
                Upload a photo of your crop. Our AI will identify the crop, check for deficiencies, and suggest remedies.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Upload Section */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Upload className="h-5 w-5 mr-2" />
                    Upload Crop Image
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div
                    className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-smooth cursor-pointer bg-muted/20"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => document.getElementById('file-input')?.click()}
                  >
                    {preview ? (
                      <div className="space-y-4">
                        <img 
                          src={preview} 
                          alt="Preview" 
                          className="max-h-64 mx-auto rounded-lg shadow-soft"
                        />
                        <p className="text-sm text-muted-foreground">
                          {selectedFile?.name}
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        <FileImage className="h-16 w-16 text-muted-foreground mx-auto" />
                        <div>
                          <p className="text-lg font-medium text-foreground mb-2">
                            Drag and drop or click to upload
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Support: JPG, PNG, WebP (Max 10MB)
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <input
                    id="file-input"
                    type="file"
                    accept="image/*"
                    onChange={handleFileSelect}
                    className="hidden"
                  />

                  {selectedFile && (
                    <div className="mt-6 space-y-4">
                      <Button className="w-full bg-gradient-primary hover:shadow-glow-green transition-smooth">
                        Analyze Crop
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => {
                          setSelectedFile(null);
                          setPreview(null);
                        }}
                      >
                        Clear Image
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Information Section */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Leaf className="h-5 w-5 mr-2" />
                    What AgriGuard Can Detect
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Crop Identification</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Rice, Wheat, Corn, Sugarcane</li>
                      <li>• Cotton, Soybean, Chickpea</li>
                      <li>• Tomato, Potato, Onion</li>
                      <li>• And 50+ other crops</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Disease Detection</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Leaf spot, Blight, Rust</li>
                      <li>• Powdery mildew, Bacterial infections</li>
                      <li>• Viral diseases, Root rot</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Deficiency Analysis</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Nitrogen, Phosphorus, Potassium</li>
                      <li>• Iron, Magnesium, Calcium</li>
                      <li>• Water stress indicators</li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-4">
                    <h4 className="font-semibold text-foreground mb-2">💡 Tips for Best Results</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Take clear, well-lit photos</li>
                      <li>• Include affected leaves/parts</li>
                      <li>• Avoid blurry or dark images</li>
                      <li>• Capture from multiple angles</li>
                    </ul>
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

export default CropIdentification;