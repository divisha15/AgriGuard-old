import { Link } from "react-router-dom";
import { Sprout, Mail, Phone, MapPin } from "lucide-react";
const Footer = () => {
  return <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="p-2 bg-gradient-primary rounded-xl">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">AgriGuard</h3>
                <p className="text-sm text-gray-300">Fasal ka Doctor</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Empowering farmers with AI-driven insights for better crop yields, 
              cost optimization, and sustainable agriculture practices.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>support@agriguard.com</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+91 9076989470</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                <span>Jaipur, Rajasthan, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link to="/" className="block text-gray-300 hover:text-white transition-smooth">
                Home
              </Link>
              <Link to="/about" className="block text-gray-300 hover:text-white transition-smooth">
                About
              </Link>
              <Link to="/models" className="block text-gray-300 hover:text-white transition-smooth">
                Models
              </Link>
              <Link to="/crop-identification" className="block text-gray-300 hover:text-white transition-smooth">
                Crop Identification
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <div className="space-y-2">
              <Link to="/contact" className="block text-gray-300 hover:text-white transition-smooth">
                Contact
              </Link>
              <Link to="/privacy" className="block text-gray-300 hover:text-white transition-smooth">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block text-gray-300 hover:text-white transition-smooth">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-6 mt-8 text-center">
          <p className="text-gray-300 mb-2">
            Smart India Hackathon 2025 – Government of Odisha, Electronics & IT Department
          </p>
          <p className="text-sm text-gray-400">
            © 2025 AgriGuard. All rights reserved. Built with ❤️ for Indian farmers.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;