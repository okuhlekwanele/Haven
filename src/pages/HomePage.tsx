import React from 'react';
import { Link } from 'react-router-dom';
import { Flower2, Leaf, Heart, Star } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 via-amber-50 to-slate-100 py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f59e0b%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%227%22/%3E%3Ccircle%20cx%3D%2253%22%20cy%3D%227%22%20r%3D%227%22/%3E%3Ccircle%20cx%3D%227%22%20cy%3D%2253%22%20r%3D%227%22/%3E%3Ccircle%20cx%3D%2253%22%20cy%3D%2253%22%20r%3D%227%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center relative">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-6 rounded-3xl shadow-2xl pulse-glow">
                <Flower2 className="h-16 w-16 text-white float" />
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-8 fade-in">
              Welcome to <span className="gradient-text">Honeybush Haven</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 mb-12 max-w-4xl mx-auto leading-relaxed slide-up">
              Discover the natural power of honeybush with our premium collection of wellness and skincare products. 
              <span className="font-semibold text-amber-700">Crafted with care</span> from the heart of South Africa's Cederberg region.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center slide-up">
              <Link 
                to="/products"
                className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-10 py-5 rounded-3xl font-bold text-lg transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl flex items-center space-x-3"
              >
                <span>Shop Collection</span>
                <Flower2 className="h-5 w-5" />
              </Link>
              <Link 
                to="/about"
                className="bg-white/80 backdrop-blur-sm hover:bg-white text-slate-700 hover:text-amber-700 px-10 py-5 rounded-3xl font-semibold text-lg transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl border border-slate-200"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Honeybush Haven?</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the difference of authentic, sustainably sourced honeybush products
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-200 p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Leaf className="h-10 w-10 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">100% Natural</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Pure honeybush extracts with no artificial additives or harmful chemicals</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-rose-100 to-rose-200 p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Heart className="h-10 w-10 text-rose-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ethically Sourced</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Supporting local communities and sustainable farming practices in South Africa</p>
            </div>
            <div className="text-center group">
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-6 rounded-3xl w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-all duration-500 shadow-lg">
                <Star className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Premium Quality</h3>
              <p className="text-slate-600 text-lg leading-relaxed">Carefully crafted products that deliver exceptional results for your wellness journey</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Transform Your <span className="gradient-text">Wellness Journey?</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have discovered the natural benefits of honeybush. 
            Start your journey to healthier, more radiant skin today.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/products"
              className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-12 py-6 rounded-3xl font-bold text-xl transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl"
            >
              Explore Products
            </Link>
            <Link 
              to="/about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 hover:border-white/40 px-12 py-6 rounded-3xl font-semibold text-xl transition-all duration-500 hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;