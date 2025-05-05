
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-estate-900 text-white pt-16 pb-8">
      <div className="container-width px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-6">Realty 1 <span className="text-estate-400">Maryland LLC</span></h3>
            <p className="text-estate-300 mb-6">
              Your trusted partner for all your real estate needs in Maryland and Virginia. 
              We provide personalized service and expert guidance to help you achieve your property goals.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-estate-800 hover:bg-estate-700 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-estate-800 hover:bg-estate-700 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-estate-800 hover:bg-estate-700 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-estate-800 hover:bg-estate-700 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-5">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#home" className="text-estate-300 hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#properties" className="text-estate-300 hover:text-white transition-colors">Buying</a>
              </li>
              <li>
                <a href="#services" className="text-estate-300 hover:text-white transition-colors">Selling</a>
              </li>
              <li>
                <a href="#about" className="text-estate-300 hover:text-white transition-colors">Agents</a>
              </li>
              <li>
                <a href="#contact" className="text-estate-300 hover:text-white transition-colors">Contact</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-5">Contact Information</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-estate-400 mt-1 flex-shrink-0" />
                <span className="text-estate-300">410-696-2268</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-estate-400 mt-1 flex-shrink-0" />
                <a href="mailto:enochmoon1@gmail.com" className="text-estate-300 hover:text-white transition-colors">enochmoon1@gmail.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-estate-400 mt-1 flex-shrink-0" />
                <span className="text-estate-300">Ellicott City, MD</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-5">Areas We Serve</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors">Howard County</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors">Baltimore</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors">Annapolis</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors">Frederick</a>
              </li>
              <li>
                <a href="#" className="text-estate-300 hover:text-white transition-colors">Virginia</a>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="my-8 border-estate-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-estate-400 text-sm">
            © {currentYear} Realty 1 Maryland LLC. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-estate-400 hover:text-white text-sm transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
