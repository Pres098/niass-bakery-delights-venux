
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  {
    url: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600",
    title: "Artisan Bread"
  },
  {
    url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600",
    title: "Fresh Croissants"
  },
  {
    url: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600",
    title: "Birthday Cake"
  },
  {
    url: "https://images.unsplash.com/photo-1597079910443-60c43fc6b16f?w=600",
    title: "Baguettes"
  },
  {
    url: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600",
    title: "Chocolate Cookies"
  },
  {
    url: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600",
    title: "Cinnamon Rolls"
  },
  {
    url: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=600",
    title: "Pastry Display"
  },
  {
    url: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600",
    title: "Fresh Bread Selection"
  },
  {
    url: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600",
    title: "Cupcakes"
  }
];

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-[#FFF8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#2C1810] text-center mb-12">Our Gallery</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-lg shadow-lg"
              >
                <img 
                  src={image.url} 
                  alt={image.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <h3 className="text-white text-xl font-bold">{image.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
