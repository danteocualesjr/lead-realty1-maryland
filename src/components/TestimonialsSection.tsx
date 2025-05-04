
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Home Seller",
    testimonial: "Realty One made selling my home a breeze. Their market knowledge and professional staging advice helped me sell above asking price in just two weeks.",
    rating: 5,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "First-time Buyer",
    testimonial: "As a first-time homebuyer, I was nervous about the process, but my Realty One agent guided me every step of the way. I couldn't be happier with my new home!",
    rating: 5,
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Property Investor",
    testimonial: "I've worked with several real estate companies for my investment properties, but Realty One offers unmatched expertise and personalized service.",
    rating: 5,
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding bg-estate-800 text-white">
      <div className="container-width">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-estate-300 max-w-2xl mx-auto">
            Read testimonials from our satisfied clients who have experienced
            our commitment to excellence in real estate services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="glass-dark border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}
                    />
                  ))}
                </div>
                
                <p className="text-estate-200 mb-6">"{testimonial.testimonial}"</p>
                
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-3">
                    <AvatarFallback className="bg-estate-600">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-estate-300">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
