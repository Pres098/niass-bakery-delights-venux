
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import OrderButton from "@/components/OrderButton";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const products = [
  {
    name: "Sourdough Bread",
    description: "Traditional sourdough bread made with our special starter",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400"
  },
  {
    name: "Croissant",
    description: "Buttery and flaky French pastries",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400"
  },
  {
    name: "Birthday Cake",
    description: "Custom designed celebration cakes",
    price: 29.99,
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400"
  },
  {
    name: "Baguette",
    description: "Classic French bread, crusty outside and soft inside",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1597079910443-60c43fc6b16f?w=400"
  },
  {
    name: "Chocolate Cookies",
    description: "Rich chocolate cookies with chocolate chips",
    price: 2.49,
    image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400"
  },
  {
    name: "Cinnamon Roll",
    description: "Soft rolls with cinnamon filling and cream cheese frosting",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=400"
  }
];

const Bakery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-[#FFF8DC] dark:bg-[#221F26] transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#2C1810] dark:text-[#FDE1D3] text-center mb-12">Our Products</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={index} className="overflow-hidden bg-white dark:bg-[#2C1810] border-[#8B4513]/20 dark:border-[#F97316]/20 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <CardTitle className="text-[#2C1810] dark:text-[#FDE1D3]">{product.name}</CardTitle>
                  <CardDescription className="dark:text-[#FEC6A1]">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-[#F97316]">${product.price.toFixed(2)}</p>
                </CardContent>
                <CardFooter>
                  <OrderButton productName={product.name} />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bakery;
