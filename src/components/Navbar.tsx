
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChefHat, Menu, Moon, Sun, Phone, Mail } from "lucide-react";
import { Switch } from "@/components/ui/switch";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleTheme = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle("dark", newDarkMode);
    localStorage.setItem("dark-mode", newDarkMode ? "true" : "false");
  };

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("dark-mode");
    if (savedTheme === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

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
    <nav className="bg-gradient-to-r from-[#FEF7CD] to-[#FDE1D3] dark:from-[#2C1810] dark:to-[#403E43] shadow-lg transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center space-x-3">
            <ChefHat className="h-8 w-8 text-[#8B4513] dark:text-[#FDE1D3]" />
            <Link 
              to="/" 
              className="text-3xl font-bold bg-gradient-to-r from-[#8B4513] to-[#2C1810] dark:from-[#FEF7CD] dark:to-[#FDE1D3] bg-clip-text text-transparent hover:opacity-80 transition-opacity"
            >
              Niass Bakery
            </Link>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <Sun className="h-5 w-5 text-[#F97316] dark:text-[#FEC6A1] mr-2" />
              <Switch 
                checked={darkMode}
                onCheckedChange={toggleTheme}
                className="bg-[#F97316] dark:bg-[#403E43]"
              />
              <Moon className="h-5 w-5 text-[#2C1810] dark:text-[#FEC6A1] ml-2" />
            </div>

            <div className="relative" ref={dropdownRef}>
              <button 
                onClick={toggleMenu}
                className="flex items-center space-x-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors px-4 py-2 rounded-md hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/50 focus:outline-none"
                aria-expanded={isOpen}
                aria-haspopup="true"
              >
                <span className="font-medium">Menu</span>
                <Menu className="h-5 w-5" />
              </button>
              
              {isOpen && (
                <div className="absolute top-full right-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-[#2C1810] ring-1 ring-black ring-opacity-5 z-50">
                  <div className="py-1" role="menu" aria-orientation="vertical">
                    <Link 
                      to="/" 
                      className="block px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      Home
                    </Link>
                    <Link 
                      to="/bakery" 
                      className="block px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      Bakery
                    </Link>
                    <Link 
                      to="/gallery" 
                      className="block px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      Gallery
                    </Link>
                    <Link 
                      to="/contact" 
                      className="block px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30"
                      onClick={() => setIsOpen(false)}
                      role="menuitem"
                    >
                      Contact
                    </Link>
                    <Link 
                      to="/bakers" 
                      className="block px-4 py-2 text-[#2C1810] dark:text-[#FDE1D3] hover:text-[#F97316] dark:hover:text-[#F97316] transition-colors hover:bg-[#FFF8DC]/30 dark:hover:bg-[#403E43]/30"
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
      </div>
    </nav>
  );
};

export default Navbar;
