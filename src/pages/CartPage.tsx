import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Trash2, Plus, Minus, ArrowRight, Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const CartPage: React.FC = () => {
  const { state, dispatch } = useCart();

  const updateQuantity = (id: string, quantity: number, selectedSize?: string, selectedColor?: string) => {
    if (quantity <= 0) {
      dispatch({ 
        type: 'REMOVE_ITEM', 
        payload: { id, selectedSize, selectedColor } 
      });
    } else {
      dispatch({ 
        type: 'UPDATE_QUANTITY', 
        payload: { id, quantity, selectedSize, selectedColor } 
      });
    }
  };

  const removeItem = (id: string, selectedSize?: string, selectedColor?: string) => {
    dispatch({ 
      type: 'REMOVE_ITEM', 
      payload: { id, selectedSize, selectedColor } 
    });
  };

  const getItemKey = (item: any) => {
    return `${item.id}-${item.selectedSize || 'no-size'}-${item.selectedColor || 'no-color'}`;
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl p-12 border border-slate-200">
              <div className="w-24 h-24 bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center mx-auto mb-6">
                <ShoppingCart className="h-12 w-12 text-amber-600" />
              </div>
              <h1 className="text-3xl font-bold text-slate-900 mb-4">Your Cart is Empty</h1>
              <p className="text-slate-600 mb-8 text-lg">
                Discover our beautiful collection of honeybush products
              </p>
              <Link
                to="/products"
                className="inline-flex items-center bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Shopping
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Shopping Cart</h1>
          <p className="text-slate-600">
            {state.items.reduce((sum, item) => sum + item.quantity, 0)} items in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {state.items.map((item) => (
              <div
                key={getItemKey(item)}
                className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-24 h-24 bg-gradient-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-slate-600 mb-3">
                      {item.selectedSize && (
                        <span className="bg-slate-100 px-3 py-1 rounded-full">
                          Size: {item.selectedSize}
                        </span>
                      )}
                      {item.selectedColor && (
                        <span className="bg-slate-100 px-3 py-1 rounded-full">
                          Color: {item.selectedColor}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1, item.selectedSize, item.selectedColor)}
                          className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Minus className="h-4 w-4 text-slate-600" />
                        </button>
                        <span className="text-lg font-semibold text-slate-900 min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1, item.selectedSize, item.selectedColor)}
                          className="w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Plus className="h-4 w-4 text-slate-600" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl font-bold text-slate-900">
                          R{(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button
                          onClick={() => removeItem(item.id, item.selectedSize, item.selectedColor)}
                          className="w-10 h-10 bg-red-50 hover:bg-red-100 text-red-600 rounded-full flex items-center justify-center transition-colors duration-200"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg p-6 border border-slate-200 sticky top-24">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-slate-600">
                  <span>Subtotal</span>
                  <span>R{state.total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Shipping</span>
                  <span>{state.total >= 1500 ? 'Free' : 'R149.99'}</span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Tax (15%)</span>
                  <span>R{(state.total * 0.15).toFixed(2)}</span>
                </div>
                <div className="border-t border-slate-200 pt-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-slate-900">Total</span>
                    <span className="text-2xl font-bold text-slate-900">
                      R{(state.total + (state.total >= 1500 ? 0 : 149.99) + (state.total * 0.15)).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/checkout"
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="h-5 w-5" />
              </Link>

              <Link
                to="/products"
                className="w-full mt-4 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 px-6 rounded-2xl font-medium transition-colors duration-200 flex items-center justify-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;