import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Lock, Flower2, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { state } = useCart();
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Products', href: '/products' },
    { name: 'About', href: '/about' },
    { name: 'Delivery', href: '/delivery' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white/80 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-slate-200/60">
      {/* SSL Security Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-2 relative overflow-hidden">
        <div className="absolute inset-0 shimmer opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-center text-sm font-medium relative">
          <Lock className="h-4 w-4 mr-2" />
          <span>Secure SSL Encrypted Shopping</span>
          <Sparkles className="h-3 w-3 ml-2 animate-pulse" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-500 pulse-glow">
              <Flower2 className="h-8 w-8 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div>
              <h1 className="text-3xl font-bold gradient-text group-hover:scale-105 transition-transform duration-500">Honeybush</h1>
              <p className="text-xs text-amber-600 tracking-widest font-medium">HAVEN</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold transition-all duration-300 hover:text-amber-600 relative group py-2 ${
                  isActive(item.href) 
                    ? 'text-amber-600' 
                    : 'text-slate-700'
                }`}
              >
                {item.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full transition-all duration-300 group-hover:w-full ${
                  isActive(item.href) ? 'w-full' : ''
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="relative p-3 text-slate-700 hover:text-amber-600 transition-all duration-300 hover:scale-110 group bg-slate-50 hover:bg-amber-50 rounded-2xl"
            >
              <ShoppingCart className="h-6 w-6" />
              {state.items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-slate-700 hover:text-amber-600 transition-all duration-300 hover:scale-110 bg-slate-50 hover:bg-amber-50 rounded-2xl"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-200/60 slide-up shadow-lg">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block px-4 py-3 rounded-2xl text-sm font-semibold transition-all duration-300 hover:scale-105 ${
                  isActive(item.href)
                    ? 'text-amber-600 bg-amber-50 shadow-sm'
                    : 'text-slate-700 hover:text-amber-600 hover:bg-slate-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;