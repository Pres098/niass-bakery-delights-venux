
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#FFF8DC] shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#8B4513]">
              Niass Bakery
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-[#2C1810] hover:text-[#F97316] transition-colors">
              Home
            </Link>
            <Link to="/bakery" className="text-[#2C1810] hover:text-[#F97316] transition-colors">
              Bakery
            </Link>
            <Link to="/gallery" className="text-[#2C1810] hover:text-[#F97316] transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-[#2C1810] hover:text-[#F97316] transition-colors">
              Contact
            </Link>
            <Link to="/bakers" className="text-[#2C1810] hover:text-[#F97316] transition-colors">
              Bakers
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
