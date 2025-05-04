
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    
    // Show success toast
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
      duration: 5000,
    });
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-width">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-estate-600 mb-8">
              Whether you're looking to buy, sell, or simply have questions about the Maryland
              real estate market, our team is here to help. Reach out to us today.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-estate-100 mr-4">
                  <MapPin className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Office Address</h3>
                  <p className="text-estate-600">
                    1294 Hanover Pike<br />
                    Hampstead, MD 21074
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-estate-100 mr-4">
                  <Phone className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone Number</h3>
                  <p className="text-estate-600">410-357-4338</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="p-3 rounded-full bg-estate-100 mr-4">
                  <Mail className="w-5 h-5 text-estate-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email Address</h3>
                  <p className="text-estate-600">info@realty1md.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-estate-900 text-white p-6 rounded-lg">
              <h3 className="font-bold text-xl mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <div className="glass p-6 md:p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-white/50"
                    required
                  />
                </div>
                
                <div>
                  <Input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-white/50"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="bg-white/50 min-h-[120px]"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full bg-estate-600 hover:bg-estate-700">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
