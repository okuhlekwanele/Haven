import React from 'react';
import { ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';

const CartPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-2 mb-8">
          <ShoppingCart className="h-8 w-8 text-amber-600" />
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="text-gray-600 text-center py-8">
            Your cart is currently empty. Start shopping to add items here!
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;