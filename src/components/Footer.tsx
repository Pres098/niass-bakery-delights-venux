
const Footer = () => {
  return (
    <footer className="bg-[#2C1810] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Niass Bakery</h3>
            <p className="text-gray-300">Crafting delicious moments, one bite at a time.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <p className="text-gray-300">Email: info@niassbakery.com</p>
            <p className="text-gray-300">Phone: (123) 456-7890</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Hours</h3>
            <p className="text-gray-300">Mon-Sat: 7:00 AM - 8:00 PM</p>
            <p className="text-gray-300">Sunday: 8:00 AM - 6:00 PM</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
          <p>Created by <a href="mailto:Venuxwebstudio@gmail.com" className="text-[#F97316] hover:underline">Venux WS</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
