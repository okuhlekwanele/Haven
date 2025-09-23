import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Lock, Flower2, Sparkles } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.02%22%3E%3Cpath%20d%3D%22M20%2020c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10zm10%200c0-5.5-4.5-10-10-10s-10%204.5-10%2010%204.5%2010%2010%2010%2010-4.5%2010-10z%22/%3E%3C/g%3E%3C/svg%3E')]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Brand Section */}
          <div className="space-y-4 fade-in">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-br from-amber-500 to-amber-700 p-3 rounded-2xl shadow-lg pulse-glow">
                <Flower2 className="h-6 w-6 text-white animate-pulse" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">Honeybush</h3>
                <p className="text-xs text-slate-400 font-medium tracking-widest">HAVEN</p>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Natural wellness and skincare crafted with pure honeybush. Your sanctuary for authentic, earth-inspired beauty.
            </p>
            <div className="flex items-center space-x-1 text-amber-400">
              <Lock className="h-4 w-4" />
              <span className="text-xs font-medium">SSL Secured</span>
              <Sparkles className="h-3 w-3 animate-pulse" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="slide-up">
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">Home</Link></li>
              <li><Link to="/products" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">Products</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">About Us</Link></li>
              <li><Link to="/delivery" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">Delivery Info</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="slide-up">
            <h4 className="font-bold text-lg mb-6">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-slate-400 hover:text-amber-400 transition-all duration-300 hover:scale-105 font-medium">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="slide-up">
            <h4 className="font-bold text-lg mb-6">Contact Us</h4>
            <div className="space-y-3 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span className="font-medium">+27 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span className="font-medium">hello@honeybushhaven.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span className="font-medium">123 Fynbos Lane, Cederberg, Western Cape</span>
              </div>
            </div>
            
            <div className="mt-6">
              <h5 className="font-semibold mb-3 text-sm">Follow Us</h5>
              <div className="flex space-x-4">
                <a href="https://facebook.com/honeybushhaven" target="_blank" rel="noopener noreferrer" 
                   className="text-slate-400 hover:text-blue-500 transition-all duration-300 hover:scale-125 p-2 bg-slate-800 hover:bg-blue-500/20 rounded-xl">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/honeybushhaven" target="_blank" rel="noopener noreferrer"
                   className="text-slate-400 hover:text-blue-400 transition-all duration-300 hover:scale-125 p-2 bg-slate-800 hover:bg-blue-400/20 rounded-xl">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/honeybushhaven" target="_blank" rel="noopener noreferrer"
                   className="text-slate-400 hover:text-pink-500 transition-all duration-300 hover:scale-125 p-2 bg-slate-800 hover:bg-pink-500/20 rounded-xl">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-slate-400 fade-in font-medium">
              © 2024 Honeybush Haven. All rights reserved.
            </p>
            <p className="text-sm text-slate-400 mt-2 md:mt-0 slide-up">
              <span className="font-bold">Suggested Domain:</span> honeybushhaven.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;