
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

interface OrderButtonProps {
  productName?: string;
}

const OrderButton = ({ productName }: OrderButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Create subject line for email
  const emailSubject = productName 
    ? `Order Inquiry for ${productName}`
    : "Order Inquiry from Website";
    
  // Create WhatsApp message
  const whatsappMessage = productName 
    ? `Hello, I'm interested in ordering ${productName}.`
    : "Hello, I'm interested in placing an order.";

  return (
    <div className="relative" ref={dropdownRef}>
      <Button 
        onClick={toggleDropdown}
        className="w-full bg-[#8B4513] hover:bg-[#654321] dark:bg-[#F97316] dark:hover:bg-[#E86305]"
      >
        Order Now
      </Button>
      
      {isOpen && (
        <div className="absolute z-10 mt-2 w-full bg-white dark:bg-[#2C1810] rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu">
            <a 
              href="tel:+1234567890" 
              className="flex items-center px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30" 
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="w-5 h-5 mr-3 text-[#F97316]" />
              <span>Call Now</span>
            </a>
            <a 
              href={`https://wa.me/1234567890?text=${encodeURIComponent(whatsappMessage)}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30" 
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-3 text-green-500" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
            <a 
              href={`mailto:info@niassbakery.com?subject=${encodeURIComponent(emailSubject)}`} 
              className="flex items-center px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30" 
              role="menuitem"
              onClick={() => setIsOpen(false)}
            >
              <Mail className="w-5 h-5 mr-3 text-[#F97316]" />
              <span>Email</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderButton;
