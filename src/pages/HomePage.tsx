import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, Truck, Heart, Leaf, Sparkles } from 'lucide-react';
import { featuredProducts } from '../data/products';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-amber-300/20 rounded-full blur-2xl float"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
            <div className="space-y-6 fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight animate-pulse">
                Honeybush Haven
                <span className="text-yellow-300 inline-flex items-center"> 
                  Signature Collection
                  <Sparkles className="h-8 w-8 ml-4 animate-spin" />
                </span>
              </h1>
              <p className="text-xl text-amber-100 leading-relaxed slide-up">
                Experience our signature line of honeybush-infused skincare and wellness products. From our luxurious Glow Cream to our soothing tea blends, each product captures the essence of South African botanical heritage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 slide-up">
                <Link
                  to="/products"
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-amber-900 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center group hover-lift shadow-lg hover:shadow-2xl"
                >
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-white text-white hover:bg-white hover:text-amber-600 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 text-center hover-lift backdrop-blur-sm"
                >
                  Our Story
                </Link>
              </div>
            </div>
            <div className="relative slide-up">
              <img
                src="https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Natural Skincare Products"
                className="rounded-2xl shadow-2xl hover-lift"
              />
              <div className="absolute -bottom-6 -left-6 glass-effect p-6 rounded-xl shadow-2xl bounce-gentle">
                <div className="flex items-center space-x-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                    ))}
                  </div>
                  <span className="font-semibold text-gray-800">4.9/5</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">1,200+ Happy Customers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Our Philosophy</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto slide-up">
              We believe in the healing power of nature and the beauty of simplicity.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 slide-up">
            <div className="space-y-4 hover-lift p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center space-x-3">
                <Leaf className="h-8 w-8 text-amber-600 animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To harness the natural benefits of honeybush and create pure, effective products that nurture your skin and support your wellness journey. We believe in the power of botanical ingredients to heal, protect, and restore.
              </p>
            </div>
            
            <div className="space-y-4 hover-lift p-6 rounded-xl bg-white shadow-lg">
              <div className="flex items-center space-x-3">
                <Heart className="h-8 w-8 text-amber-600 animate-pulse" />
                <h3 className="text-2xl font-semibold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                To become your trusted sanctuary for natural wellness, where every product is crafted with love and respect for both your body and the earth. We envision a world where natural beauty and wellness are accessible to all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23f59e0b" fill-opacity="0.03"%3E%3Cpath d="M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z"/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 fade-in">
            <h2 className="text-4xl font-bold gradient-text mb-4">Featured Products</h2>
            <p className="text-xl text-gray-600 slide-up">
              Our signature Honeybush Haven collection - where nature meets luxury
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            {featuredProducts.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                to={`/products/${product.id}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover-lift relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-amber-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold gradient-text">R{product.price.toFixed(2)}</span>
                    <span className="text-sm text-amber-700 font-medium bg-gradient-to-r from-amber-100 to-amber-200 px-3 py-1 rounded-full shadow-sm">Natural</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 inline-flex items-center group hover-lift shadow-lg hover:shadow-2xl"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 slide-up">
            <div className="text-center space-y-4 hover-lift p-6 rounded-xl bg-white shadow-lg">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg pulse-glow">
                <Shield className="h-8 w-8 text-amber-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Pure & Natural</h3>
              <p className="text-gray-600">All products made with authentic honeybush and natural ingredients, free from harmful chemicals.</p>
            </div>
            
            <div className="text-center space-y-4 hover-lift p-6 rounded-xl bg-white shadow-lg">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg pulse-glow">
                <Truck className="h-8 w-8 text-emerald-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Fast Delivery</h3>
              <p className="text-gray-600">Quick and reliable shipping with eco-friendly packaging. Free delivery on orders over R1500.</p>
            </div>
            
            <div className="text-center space-y-4 hover-lift p-6 rounded-xl bg-white shadow-lg">
              <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mx-auto shadow-lg pulse-glow">
                <Star className="h-8 w-8 text-yellow-600 animate-pulse" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Satisfaction Guarantee</h3>
              <p className="text-gray-600">30-day return policy and quality guarantee on all our handcrafted natural products.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-600 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="10" cy="10" r="1"/%3E%3C/g%3E%3C/svg%3E')] animate-pulse"></div>
        <div className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full blur-xl float"></div>
        <div className="absolute bottom-4 right-4 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl float" style={{animationDelay: '2s'}}></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4 fade-in">
            Discover Honeybush Haven: 15% Off Your First Order 
            <Sparkles className="inline-block h-6 w-6 ml-2 animate-spin" />
          </h2>
          <p className="text-yellow-100 text-lg mb-6 slide-up">
            Use code <span className="font-bold bg-white/20 px-2 py-1 rounded">MZANSI15</span> at checkout. Experience the power of honeybush today!
          </p>
          <Link
            to="/products"
            className="bg-white text-amber-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 inline-flex items-center group hover-lift shadow-lg hover:shadow-2xl"
          >
            Shop Now
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;