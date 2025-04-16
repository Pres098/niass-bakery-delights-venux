
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { ChefHat } from "lucide-react";

const Navbar = () => {
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
          
          <div className="flex items-center">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-[#2C1810] hover:text-[#F97316] hover:bg-[#FFF8DC]/50">
                    Menu
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[300px] bg-white shadow-lg rounded-lg">
                      <Link 
                        to="/" 
                        className="text-[#2C1810] hover:text-[#F97316] transition-colors block px-4 py-2 rounded hover:bg-[#FFF8DC]/30"
                      >
                        Home
                      </Link>
                      <Link 
                        to="/bakery" 
                        className="text-[#2C1810] hover:text-[#F97316] transition-colors block px-4 py-2 rounded hover:bg-[#FFF8DC]/30"
                      >
                        Bakery
                      </Link>
                      <Link 
                        to="/gallery" 
                        className="text-[#2C1810] hover:text-[#F97316] transition-colors block px-4 py-2 rounded hover:bg-[#FFF8DC]/30"
                      >
                        Gallery
                      </Link>
                      <Link 
                        to="/contact" 
                        className="text-[#2C1810] hover:text-[#F97316] transition-colors block px-4 py-2 rounded hover:bg-[#FFF8DC]/30"
                      >
                        Contact
                      </Link>
                      <Link 
                        to="/bakers" 
                        className="text-[#2C1810] hover:text-[#F97316] transition-colors block px-4 py-2 rounded hover:bg-[#FFF8DC]/30"
                      >
                        Bakers
                      </Link>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
