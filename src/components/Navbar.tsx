
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
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

  return (
    <nav className="bg-gradient-to-r from-[#FEF7CD] to-[#FDE1D3] shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <ChefHat className="h-8 w-8 text-[#8B4513]" />
            <Link 
              to="/" 
              className="text-3xl font-bold bg-gradient-to-r from-[#8B4513] to-[#2C1810] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Niass Bakery
            </Link>
          </div>
          
          <div className="flex items-center relative" ref={dropdownRef}>
            <button 
              onClick={toggleMenu}
              className="flex items-center space-x-2 text-[#2C1810] hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-[#FFF8DC]/30 focus:outline-none"
              aria-expanded={isOpen}
              aria-haspopup="true"
            >
              <span className="font-medium">Menu</span>
              <Menu className="h-5 w-5" />
            </button>
            
            {isOpen && (
              <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
                <div className="py-1" role="menu" aria-orientation="vertical">
                  <Link 
                    to="/" 
                    className="block px-4 py-2 text-[#2C1810] hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Home
                  </Link>
                  <Link 
                    to="/bakery" 
                    className="block px-4 py-2 text-[#2C1810] hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Bakery
                  </Link>
                  <Link 
                    to="/gallery" 
                    className="block px-4 py-2 text-[#2C1810] hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Gallery
                  </Link>
                  <Link 
                    to="/contact" 
                    className="block px-4 py-2 text-[#2C1810] hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Contact
                  </Link>
                  <Link 
                    to="/bakers" 
                    className="block px-4 py-2 text-[#2C1810] hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30"
                    onClick={() => setIsOpen(false)}
                    role="menuitem"
                  >
                    Bakers
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
