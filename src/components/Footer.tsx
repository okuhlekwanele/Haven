import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Lock, Flower2 } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-amber-600 p-2 rounded-lg">
                <Flower2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Honeybush</h3>
                <p className="text-xs text-gray-400">HAVEN</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Natural wellness and skincare crafted with pure honeybush. Your sanctuary for authentic, earth-inspired beauty.
            </p>
            <div className="flex items-center space-x-1 text-amber-400">
              <Lock className="h-4 w-4" />
              <span className="text-xs">SSL Secured</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/delivery" className="text-gray-400 hover:text-white transition-colors">Delivery Info</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link></li>
              <li><Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+27 21 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@honeybushhaven.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Fynbos Lane, Cederberg, Western Cape</span>
              </div>
            </div>
            
            <div className="mt-4">
              <h5 className="font-medium mb-2 text-sm">Follow Us</h5>
              <div className="flex space-x-3">
                <a href="https://facebook.com/honeybushhaven" target="_blank" rel="noopener noreferrer" 
                   className="text-gray-400 hover:text-blue-500 transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="https://twitter.com/honeybushhaven" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-blue-400 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="https://instagram.com/honeybushhaven" target="_blank" rel="noopener noreferrer"
                   className="text-gray-400 hover:text-pink-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Honeybush Haven. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 mt-2 md:mt-0">
              <span className="font-bold">Suggested Domain:</span> honeybushhaven.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;