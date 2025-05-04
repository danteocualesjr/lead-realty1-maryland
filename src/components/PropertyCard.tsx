
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Bed, Bath, MapPin, Home } from "lucide-react";

interface PropertyCardProps {
  id: number;
  title: string;
  address: string;
  price: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  imageUrl: string;
  type: "For Sale" | "For Rent" | "Sold";
  isNew?: boolean;
}

const PropertyCard = ({
  id,
  title,
  address,
  price,
  bedrooms,
  bathrooms,
  sqft,
  imageUrl,
  type,
  isNew = false,
}: PropertyCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <Badge
            className={`${
              type === "For Sale"
                ? "bg-blue-500"
                : type === "For Rent"
                ? "bg-green-500"
                : "bg-estate-500"
            } text-white hover:opacity-80`}
          >
            {type}
          </Badge>
          {isNew && (
            <Badge className="bg-yellow-500 text-white hover:opacity-80">
              New
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="pt-6 pb-4">
        <h3 className="text-lg font-bold text-estate-800 mb-1 line-clamp-1">
          {title}
        </h3>
        <p className="text-estate-500 flex items-center text-sm mb-3">
          <MapPin size={15} className="mr-1 flex-shrink-0" /> {address}
        </p>
        <p className="text-xl font-bold text-estate-900">{price}</p>
      </CardContent>

      <CardFooter className="border-t border-estate-100 pt-4 pb-5 gap-4">
        <div className="flex items-center text-estate-600 text-sm">
          <Bed size={16} className="mr-1.5" />
          <span>{bedrooms} bd</span>
        </div>
        <div className="flex items-center text-estate-600 text-sm">
          <Bath size={16} className="mr-1.5" />
          <span>{bathrooms} ba</span>
        </div>
        <div className="flex items-center text-estate-600 text-sm">
          <Home size={16} className="mr-1.5" />
          <span>{sqft.toLocaleString()} sqft</span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PropertyCard;
