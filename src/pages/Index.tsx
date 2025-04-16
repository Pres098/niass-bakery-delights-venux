
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-[600px] bg-[url('https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-bold mb-4">Welcome to Niass Bakery</h1>
              <p className="text-xl mb-8">Artisanal breads and pastries baked fresh daily</p>
              <Link 
                to="/bakery" 
                className="bg-[#F97316] text-white px-8 py-3 rounded-full hover:bg-[#EA580C] transition-colors"
              >
                View Our Products
              </Link>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <section className="py-16 bg-[#FFF8DC]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#2C1810] mb-12">Featured Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Artisan Bread",
                  description: "Freshly baked sourdough bread",
                  price: "$4.99",
                  image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
                },
                {
                  name: "Croissants",
                  description: "Buttery and flaky French pastries",
                  price: "$3.49",
                  image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
                },
                {
                  name: "Birthday Cakes",
                  description: "Custom designed celebration cakes",
                  price: "From $29.99",
                  image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
                }
              ].map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#2C1810] mb-2">{product.name}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <p className="text-[#F97316] font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-[#2C1810] mb-12">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              {[
                {
                  title: "Fresh Daily",
                  description: "All our products are baked fresh every morning"
                },
                {
                  title: "Quality Ingredients",
                  description: "We use only the finest, locally-sourced ingredients"
                },
                {
                  title: "Expert Bakers",
                  description: "Our team of experienced bakers craft each product with care"
                }
              ].map((feature, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-xl font-bold text-[#8B4513] mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
