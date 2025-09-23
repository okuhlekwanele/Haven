import React from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus, Trash2, ShoppingCart, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, newQuantity: number) => {
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id, quantity: newQuantity }
    });
  };

  const removeItem = (id: string) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    });
  };

  if (state.items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center fade-in">
        <ShoppingCart className="h-24 w-24 text-gray-300 mx-auto mb-6 animate-pulse" />
        <h1 className="text-3xl font-bold gradient-text mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8 slide-up">Start shopping to add items to your cart.</p>
        <Link
          to="/products"
          className="bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover-lift shadow-lg hover:shadow-2xl"
        >
          Shop Now
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold gradient-text mb-8 flex items-center fade-in">
        Shopping Cart
        <Sparkles className="h-6 w-6 ml-3 text-amber-500 animate-spin" />
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 slide-up">
          <div className="glass-effect rounded-xl shadow-lg overflow-hidden border border-amber-100">
            <div className="p-6 border-b border-amber-100">
              <h2 className="text-xl font-semibold text-gray-900">
                Cart Items ({state.items.reduce((sum, item) => sum + item.quantity, 0)})
              </h2>
            </div>

            <div className="divide-y divide-amber-100">
              {state.items.map((item, index) => (
                <div key={`${item.id}-${item.selectedSize}-${item.selectedColor}`} className="p-6 hover:bg-amber-50/50 transition-colors duration-300">
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md shadow-md hover:scale-105 transition-transform duration-300"
                    />

                    <div className="flex-1 min-w-0">
                      <Link
                        to={`/products/${item.id}`}
                        className="text-lg font-semibold text-gray-900 hover:text-amber-600 transition-colors duration-300"
                      >
                        {item.name}
                      </Link>
                      
                      <div className="mt-1 text-sm text-gray-500 space-y-1">
                        {item.selectedSize && <p>Size: {item.selectedSize}</p>}
                        {item.selectedColor && <p>Color: {item.selectedColor}</p>}
                        <p className="font-medium text-gray-900">${item.price.toFixed(2)} each</p>
                        <p className="font-medium text-gray-900">R{item.price.toFixed(2)} each</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-amber-100 rounded-md transition-all duration-300 hover:scale-110"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      
                      <span className="px-3 py-1 bg-gradient-to-r from-amber-50 to-amber-100 rounded-md min-w-[2.5rem] text-center shadow-sm">
                        {item.quantity}
                      </span>
                      
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-amber-100 rounded-md transition-all duration-300 hover:scale-110"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="text-right">
                      <p className="text-lg font-semibold text-gray-900">
                      <p className="text-lg font-semibold gradient-text">
                        R{(item.price * item.quantity).toFixed(2)}
                      </p>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="mt-2 p-1 text-red-600 hover:text-red-800 transition-all duration-300 hover:scale-110"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="glass-effect rounded-xl shadow-lg p-6 sticky top-24 border border-amber-100 slide-up">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">R{state.total.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">
                  {state.total >= 1500 ? 'Free' : 'R149.99'}
                </span>
              </div>

              <div className="flex justify-between">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">R{(state.total * 0.15).toFixed(2)}</span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">Total</span>
                  <span className="text-2xl font-bold gradient-text">
                    R{(state.total + (state.total >= 1500 ? 0 : 149.99) + (state.total * 0.15)).toFixed(2)}
                  </span>
                </div>
              </div>

              {state.total >= 1500 && (
                <p className="text-sm text-emerald-600 font-medium">
                  🎉 You qualify for free shipping!
                </p>
              )}

              <div className="space-y-3 mt-6">
                <Link
                  to="/checkout"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-3 px-4 rounded-lg font-semibold text-center block transition-all duration-300 hover-lift shadow-lg hover:shadow-2xl"
                >
                  Proceed to Checkout
                </Link>
                
                <Link
                  to="/products"
                  className="w-full bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 py-3 px-4 rounded-lg font-medium text-center block transition-all duration-300 hover-lift"
                >
                  Continue Shopping
                </Link>
              </div>

              <div className="mt-6 text-xs text-gray-500 space-y-1">
                <p>• Secure SSL encrypted checkout</p>
                <p>• 30-day return policy</p>
                <p>• Customer support available 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;