
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PropertyCard from "./PropertyCard";

// Sample property data
const properties = [
  {
    id: 1,
    title: "Modern Luxury Villa",
    address: "123 Main Street, Baltimore, MD",
    price: "$895,000",
    bedrooms: 4,
    bathrooms: 3.5,
    sqft: 3200,
    imageUrl: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?q=80&w=600",
    type: "For Sale" as const,
    isNew: true,
  },
  {
    id: 2,
    title: "Downtown Penthouse",
    address: "456 Harbor View, Baltimore, MD",
    price: "$3,500/mo",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1800,
    imageUrl: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?q=80&w=600",
    type: "For Rent" as const,
  },
  {
    id: 3,
    title: "Suburban Family Home",
    address: "789 Oak Drive, Columbia, MD",
    price: "$650,000",
    bedrooms: 5,
    bathrooms: 3,
    sqft: 3800,
    imageUrl: "https://images.unsplash.com/photo-1431576901776-e539bd916ba2?q=80&w=600",
    type: "For Sale" as const,
  },
  {
    id: 4,
    title: "Waterfront Condo",
    address: "101 Riverside Blvd, Annapolis, MD",
    price: "$2,800/mo",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 1650,
    imageUrl: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?q=80&w=600",
    type: "For Rent" as const,
    isNew: true,
  },
  {
    id: 5,
    title: "Historic Townhouse",
    address: "222 Charles St, Baltimore, MD",
    price: "$750,000",
    bedrooms: 3,
    bathrooms: 2.5,
    sqft: 2400,
    imageUrl: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?q=80&w=600",
    type: "For Sale" as const,
  },
  {
    id: 6,
    title: "Mountain View Retreat",
    address: "333 Highland Ave, Frederick, MD",
    price: "$920,000",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 3600,
    imageUrl: "https://images.unsplash.com/photo-1466442929976-97f336a657be?q=80&w=600",
    type: "For Sale" as const,
  },
];

const FeaturedListings = () => {
  const [activeTab, setActiveTab] = useState("all");
  
  // Filter properties based on active tab
  const filteredProperties = activeTab === "all" 
    ? properties 
    : activeTab === "for-sale" 
      ? properties.filter(prop => prop.type === "For Sale")
      : properties.filter(prop => prop.type === "For Rent");

  return (
    <section id="properties" className="section-padding pt-32">
      <div className="container-width">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-estate-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties across Maryland, 
            each offering exceptional quality and value.
          </p>
        </div>
        
        <Tabs defaultValue="all" className="w-full" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="glass p-1.5">
              <TabsTrigger value="all" className="text-base px-6 py-2">
                All Properties
              </TabsTrigger>
              <TabsTrigger value="for-sale" className="text-base px-6 py-2">
                For Sale
              </TabsTrigger>
              <TabsTrigger value="for-rent" className="text-base px-6 py-2">
                For Rent
              </TabsTrigger>
            </TabsList>
          </div>
          
          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="for-sale" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="for-rent" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-center mt-12">
          <Button variant="outline" className="border-estate-600 text-estate-600 hover:bg-estate-600 hover:text-white">
            View All Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
