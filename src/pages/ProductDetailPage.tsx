import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Plus, Minus, ShoppingCart, Heart, Sparkles, Star } from 'lucide-react';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { dispatch } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [isWishlisted, setIsWishlisted] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <Link to="/products" className="text-blue-600 hover:text-blue-800">
          ← Back to Products
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (product.sizes && !selectedSize) {
      alert('Please select a size');
      return;
    }
    if (product.colors && !selectedColor) {
      alert('Please select a color');
      return;
    }

    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity,
        selectedSize: product.sizes ? selectedSize : undefined,
        selectedColor: product.colors ? selectedColor : undefined,
      }
    });

    alert('Product added to cart!');
  };

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <Link
        to="/products"
        className="inline-flex items-center text-amber-600 hover:text-amber-800 mb-6 transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-in">
        {/* Product Image */}
        <div className="space-y-4 slide-up">
          <div className="aspect-w-1 aspect-h-1 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl overflow-hidden shadow-lg hover-lift">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6 slide-up">
          <div>
            <h1 className="text-3xl font-bold gradient-text mb-2 flex items-center">
              {product.name}
              <Sparkles className="h-6 w-6 ml-3 text-amber-500 animate-spin" />
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-3xl font-bold gradient-text">R{product.price.toFixed(2)}</span>
              <span className="text-sm text-amber-700 capitalize bg-gradient-to-r from-amber-100 to-amber-200 px-3 py-1 rounded-full shadow-sm">
                {product.category}
              </span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current animate-pulse" style={{animationDelay: `${i * 0.1}s`}} />
                ))}
                <span className="text-sm text-gray-600 ml-2">(4.9)</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>

          {/* Size Selection */}
          {product.sizes && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Size</h3>
              <div className="flex flex-wrap gap-2 slide-up">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border rounded-md transition-all duration-300 hover:scale-105 ${
                      selectedSize === size
                        ? 'border-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-600 shadow-md'
                        : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Color Selection */}
          {product.colors && (
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Color</h3>
              <div className="flex flex-wrap gap-2 slide-up">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 border rounded-md transition-all duration-300 hover:scale-105 ${
                      selectedColor === color
                        ? 'border-amber-600 bg-gradient-to-r from-amber-50 to-amber-100 text-amber-600 shadow-md'
                        : 'border-gray-300 hover:border-amber-400 hover:bg-amber-50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Quantity</h3>
            <div className="flex items-center space-x-4 slide-up">
              <div className="flex items-center border border-amber-200 rounded-md shadow-sm">
                <button
                  onClick={() => updateQuantity(-1)}
                  className="p-2 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 min-w-[3rem] text-center">{quantity}</span>
                <button
                  onClick={() => updateQuantity(1)}
                  className="p-2 hover:bg-amber-50 transition-all duration-300 hover:scale-110"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <span className="text-sm text-gray-500">
                Total: R{(product.price * quantity).toFixed(2)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-4 slide-up">
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 hover-lift shadow-lg hover:shadow-2xl"
            >
              <ShoppingCart className="h-5 w-5 animate-pulse" />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-3 border rounded-lg transition-all duration-300 hover:scale-110 ${
                isWishlisted
                  ? 'border-red-300 bg-gradient-to-r from-red-50 to-red-100 text-red-600 shadow-md'
                  : 'border-gray-300 hover:border-red-400 text-gray-600 hover:bg-red-50'
              }`}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current animate-pulse' : ''}`} />
            </button>
          </div>

          {/* Additional Info */}
          <div className="border-t border-amber-100 pt-6 slide-up">
            <div className="space-y-2 text-sm text-gray-600">
              <p>• Free shipping on orders over R1500</p>
              <p>• 30-day return policy</p>
              <p>• Secure SSL encrypted checkout</p>
              <p>• Customer support available 24/7</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;