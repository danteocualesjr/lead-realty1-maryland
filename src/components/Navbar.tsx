import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Menu, X, Phone, Mail } from "lucide-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return <nav className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4", isScrolled ? "glass shadow-md py-3" : "bg-transparent")}>
      <div className="container-width flex items-center justify-between px-4 md:px-8">
        <div className="flex items-center">
          <a href="/" className="text-2xl font-bold text-estate-900">
            Realty 1 <span className="text-estate-600">Maryland</span>
          </a>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="font-medium hover:text-estate-600 transition-colors">Home</a>
          <a href="#properties" className="font-medium hover:text-estate-600 transition-colors">Buying</a>
          <a href="#services" className="font-medium hover:text-estate-600 transition-colors">Selling</a>
          <a href="#about" className="font-medium hover:text-estate-600 transition-colors">Agents</a>
          <a href="#contact" className="font-medium hover:text-estate-600 transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="flex items-center gap-2 border-estate-600 text-estate-600 hover:bg-estate-600 hover:text-white">
            <Phone size={16} />
            <span>410-696-2268</span>
          </Button>
        </div>
        
        <div className="md:hidden">
          <Button variant="ghost" size="sm" onClick={toggleMenu}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isOpen && <div className="md:hidden glass absolute top-full left-0 right-0 p-4 shadow-lg animate-fade-in">
          <div className="flex flex-col space-y-4">
            <a href="#home" className="font-medium p-2 hover:bg-estate-100 rounded-md" onClick={toggleMenu}>Home</a>
            <a href="#properties" className="font-medium p-2 hover:bg-estate-100 rounded-md" onClick={toggleMenu}>Buying</a>
            <a href="#services" className="font-medium p-2 hover:bg-estate-100 rounded-md" onClick={toggleMenu}>Selling</a>
            <a href="#about" className="font-medium p-2 hover:bg-estate-100 rounded-md" onClick={toggleMenu}>Agents</a>
            <a href="#contact" className="font-medium p-2 hover:bg-estate-100 rounded-md" onClick={toggleMenu}>Contact</a>
            <Button className="flex items-center gap-2 bg-estate-600 hover:bg-estate-700">
              <Phone size={16} />
              <span>410-696-2268</span>
            </Button>
          </div>
        </div>}
    </nav>;
};
export default Navbar;