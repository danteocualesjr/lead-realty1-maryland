
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Building, Home, Search, Users } from "lucide-react";

const services = [
  {
    title: "Property Sales",
    description: "We help you sell your property at the best market value with our strategic pricing, effective marketing, and skilled negotiation tactics.",
    icon: Building,
    color: "bg-blue-50 text-blue-500",
  },
  {
    title: "Property Purchase",
    description: "Find your dream home with personalized property searches, virtual tours, and expert guidance through the entire buying process.",
    icon: Home,
    color: "bg-green-50 text-green-500",
  },
  {
    title: "Property Management",
    description: "Maximize your investment with our comprehensive property management services, including tenant screening and maintenance handling.",
    icon: Users,
    color: "bg-purple-50 text-purple-500",
  },
  {
    title: "Market Analysis",
    description: "Stay informed with detailed market analyses, property valuations, and investment insights tailored to your real estate goals.",
    icon: Search,
    color: "bg-amber-50 text-amber-500",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="container-width relative z-10">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Real Estate Services</h2>
          <p className="text-estate-600 max-w-2xl mx-auto">
            We offer a comprehensive range of professional real estate services designed 
            to meet all your property needs in Maryland and the surrounding areas.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card key={index} className="glass border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <div className={`p-3 rounded-lg w-fit ${service.color}`}>
                  <service.icon size={24} />
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-bold text-xl mb-3">{service.title}</h3>
                <p className="text-estate-600">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Background decorative gradient */}
      <div className="absolute -top-80 -right-80 w-[600px] h-[600px] rounded-full bg-gradient-radial from-estate-100 to-transparent opacity-70"></div>
      <div className="absolute -bottom-60 -left-60 w-[400px] h-[400px] rounded-full bg-gradient-radial from-estate-100 to-transparent opacity-50"></div>
    </section>
  );
};

export default ServicesSection;
