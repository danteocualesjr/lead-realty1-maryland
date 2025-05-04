
import { Button } from "@/components/ui/button";
import { ArrowRight, Home } from "lucide-react";

const HeroSection = () => {
  return (
    <div id="home" className="relative min-h-screen w-full flex items-center justify-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=1400')" }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="container-width relative z-10 px-4 md:px-8 mt-16">
        <div className="max-w-3xl text-white">
          <div className="inline-block mb-4 py-1.5 px-4 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-sm font-medium flex items-center gap-2">
              <Home size={16} />
              <span>Premier Maryland Real Estate</span>
            </p>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">Find Your Perfect Home in Maryland</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/80 font-light max-w-2xl">
            Experience the difference with our personalized approach to real estate in Maryland and surrounding areas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-white text-estate-900 hover:bg-white/90 font-medium text-base px-6 py-6">
              Browse Properties
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 font-medium text-base px-6 py-6">
              <span>Meet Our Agents</span>
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Glass Card Stats */}
      <div className="absolute -bottom-20 left-0 right-0 px-4 md:px-8">
        <div className="container-width">
          <div className="glass rounded-xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <p className="text-4xl font-bold text-estate-800">250+</p>
              <p className="text-estate-600 mt-2">Properties Sold</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-estate-800">15+</p>
              <p className="text-estate-600 mt-2">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-estate-800">98%</p>
              <p className="text-estate-600 mt-2">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-estate-800">24/7</p>
              <p className="text-estate-600 mt-2">Support</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
