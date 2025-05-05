
import { Button } from "@/components/ui/button";
import { GalleryHorizontal, Star, Users } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-estate-50">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Locally-Owned, Client-Focused Real Estate</h2>
            <p className="text-estate-600 mb-6 text-lg">
              Realty 1 Maryland LLC has been proudly serving Howard County and the surrounding areas. 
              Our team of experienced real estate professionals is dedicated to providing 
              exceptional service with integrity, expertise, and a personal touch.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-estate-100 mr-4 mt-1">
                  <Users className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Local Expertise</h3>
                  <p className="text-estate-600">
                    Our agents have deep knowledge of Howard County and Maryland real estate markets,
                    with specialized understanding of local neighborhoods and property values.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-estate-100 mr-4 mt-1">
                  <Star className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Client-First Approach</h3>
                  <p className="text-estate-600">
                    We prioritize your needs and goals, offering personalized service
                    and guidance throughout your real estate journey.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-2 rounded-full bg-estate-100 mr-4 mt-1">
                  <GalleryHorizontal className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Full-Service Agency</h3>
                  <p className="text-estate-600">
                    From listings and viewings to negotiations and closings, we provide 
                    comprehensive support for buyers, sellers, and investors alike.
                  </p>
                </div>
              </div>
            </div>
            
            <Button className="bg-estate-600 hover:bg-estate-700 text-white">Meet Our Agents</Button>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden w-full aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=800" 
                  alt="Realty 1 Maryland Team" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-2/3 rounded-lg overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=500" 
                  alt="Maryland Property" 
                  className="w-full aspect-[4/3] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
