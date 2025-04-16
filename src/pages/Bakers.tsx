
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const bakers = [
  {
    name: "John Smith",
    role: "Head Baker",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?w=400",
    description: "With over 20 years of experience, John leads our talented team of bakers."
  },
  {
    name: "Maria Rodriguez",
    role: "Pastry Chef",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
    description: "Maria specializes in creating beautiful and delicious pastries and desserts."
  },
  {
    name: "David Chen",
    role: "Bread Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400",
    description: "David's artisanal bread recipes have won multiple awards."
  },
  {
    name: "Sarah Johnson",
    role: "Cake Designer",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
    description: "Sarah creates stunning custom cakes for all special occasions."
  }
];

const Bakers = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow py-12 bg-[#FFF8DC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-[#2C1810] text-center mb-12">Meet Our Bakers</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bakers.map((baker, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <img 
                  src={baker.image} 
                  alt={baker.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-xl font-bold text-[#2C1810] mb-2">{baker.name}</h2>
                  <h3 className="text-[#F97316] font-medium mb-4">{baker.role}</h3>
                  <p className="text-gray-600">{baker.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#2C1810] mb-6 text-center">Join Our Team</h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto">
              We're always looking for talented and passionate bakers to join our team. 
              If you love baking and want to be part of our family, please send your resume to 
              careers@niassbakery.com
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Bakers;
