
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-[#FFF8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#2C1810] text-center mb-12">Contact Us</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <Input type="text" placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <Input type="email" placeholder="Your email" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <Textarea placeholder="Your message" className="min-h-[150px]" />
                </div>
                <Button className="w-full bg-[#8B4513] hover:bg-[#654321]">
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-[#2C1810] mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Address</h3>
                      <p className="text-gray-600">123 Bakery Street<br />New York, NY 10001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Phone</h3>
                      <p className="text-gray-600">(123) 456-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Email</h3>
                      <p className="text-gray-600">info@niassbakery.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-[#F97316] flex-shrink-0" />
                    <div>
                      <h3 className="font-bold">Hours</h3>
                      <p className="text-gray-600">
                        Monday - Saturday: 7:00 AM - 8:00 PM<br />
                        Sunday: 8:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
