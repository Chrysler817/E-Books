import { useState } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import ProductCard from './components/ProductCard';
import CategorySection from './components/CategorySection';
import HeroSection from './components/HeroSection';
import DeliveryBanner from './components/DeliveryBanner';
import Footer from './components/Footer';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const featuredProducts = [
    {
      id: 1,
      name: 'Elegant Chain Necklace',
      price: 'Rs 2,500',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      category: 'necklaces',
    },
    {
      id: 2,
      name: 'Minimalist Ring Set',
      price: 'Rs 1,800',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
      category: 'rings',
    },
    {
      id: 3,
      name: 'Sleek Bracelet',
      price: 'Rs 2,200',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
      category: 'bracelets',
    },
    {
      id: 4,
      name: 'Statement Earrings',
      price: 'Rs 1,950',
      image:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
      category: 'earrings',
    },
  ];

  const categories = [
    {
      name: 'Necklaces',
      image:
        'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=300&h=300&fit=crop',
    },
    {
      name: 'Rings',
      image:
        'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=300&h=300&fit=crop',
    },
    {
      name: 'Bracelets',
      image:
        'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=300&fit=crop',
    },
    {
      name: 'Earrings',
      image:
        'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=300&h=300&fit=crop',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <nav className="bg-black text-white sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <img
                src="/lovable-uploads/ba6f45e8-6c32-421e-bd04-0f1b1e2a4f8f.png"
                alt="Jewelry Heaven"
                className="h-10 w-auto"
              />
              <span className="ml-3 text-xl font-bold">Jewelry Heaven</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-gray-300 transition-colors">
                  Home
                </a>
                <a
                  href="#products"
                  className="hover:text-gray-300 transition-colors"
                >
                  Products
                </a>
                <a
                  href="#categories"
                  className="hover:text-gray-300 transition-colors"
                >
                  Categories
                </a>
                <a
                  href="#contact"
                  className="hover:text-gray-300 transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Cart and Mobile Menu */}
            <div className="flex items-center space-x-4">
              <button className="relative hover:text-gray-300 transition-colors">
                <ShoppingCart size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black rounded-full text-xs w-5 h-5 flex items-center justify-center font-bold">
                    {cartCount}
                  </span>
                )}
              </button>

              <button
                className="md:hidden hover:text-gray-300 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black border-t border-gray-800">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 hover:bg-gray-800 transition-colors">
                  Home
                </a>
                <a href="#products" className="block px-3 py-2 hover:bg-gray-800 transition-colors">
                  Products
                </a>
                <a href="#categories" className="block px-3 py-2 hover:bg-gray-800 transition-colors">
                  Categories
                </a>
                <a href="#contact" className="block px-3 py-2 hover:bg-gray-800 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <HeroSection />

      {/* Delivery Banner */}
      <DeliveryBanner />

      {/* Categories Section */}
      <section id="categories" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Shop by Category</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our exquisite collection of stainless steel jewelry, crafted for lasting beauty and style.
            </p>
          </div>
          <CategorySection categories={categories} />
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Collection</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Handpicked pieces that embody our commitment to affordable luxury and timeless elegance.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={() => setCartCount((prev) => prev + 1)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Promise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                <span className="text-black font-bold text-xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-300">High-grade stainless steel that maintains its shine and beauty over time.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                <span className="text-black font-bold text-xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold">Affordable Luxury</h3>
              <p className="text-gray-300">Exceptional jewelry at prices that make luxury accessible to everyone.</p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto">
                <span className="text-black font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Durable Style</h3>
              <p className="text-gray-300">Designed to withstand daily wear while maintaining elegance and sophistication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
