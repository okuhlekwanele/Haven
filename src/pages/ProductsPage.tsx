import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Filter, Grid, List, ShoppingCart, Heart } from 'lucide-react';
import { products, categories } from '../data/products';
import { useCart } from '../context/CartContext';

const ProductsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { dispatch } = useCart();

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleQuickAdd = (product: any) => {
    dispatch({
      type: 'ADD_ITEM',
      payload: {
        ...product,
        quantity: 1,
      }
    });
    
    // Show a more elegant notification
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 fade-in">
          <h1 className="text-4xl font-bold gradient-text mb-4">Our Products</h1>
          <p className="text-gray-600 text-lg">
            Discover our complete range of honeybush-infused wellness and skincare products
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-6 mb-8 border border-amber-100 slide-up">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-amber-500" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              />
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-amber-200 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>
                    {category.name} ({category.count})
                  </option>
                ))}
              </select>
              
              {/* View Mode Toggle */}
              <div className="flex border border-amber-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-3 transition-all duration-300 ${
                    viewMode === 'grid' 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                      : 'hover:bg-amber-50 text-gray-600'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-3 border-l border-amber-200 transition-all duration-300 ${
                    viewMode === 'list' 
                      ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white' 
                      : 'hover:bg-amber-50 text-gray-600'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 slide-up">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-lg p-12 text-center border border-amber-100">
            <p className="text-gray-600 text-lg mb-4">No products found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('all');
              }}
              className="text-amber-600 hover:text-amber-800 font-medium transition-colors duration-300"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6' 
              : 'space-y-6'
          } fade-in`}>
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className={`bg-white/90 backdrop-blur-md rounded-xl shadow-lg overflow-hidden border border-amber-100 hover-lift transition-all duration-300 group ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${viewMode === 'list' ? 'w-48 flex-shrink-0' : 'aspect-w-1 aspect-h-1'}`}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className={`p-6 ${viewMode === 'list' ? 'flex-1 flex flex-col justify-between' : ''}`}>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className={`text-gray-600 mb-4 ${viewMode === 'list' ? 'line-clamp-2' : 'line-clamp-3'}`}>
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold gradient-text">
                      R{product.price.toFixed(2)}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => handleQuickAdd(product)}
                        className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white p-2 rounded-lg transition-all duration-300 hover:scale-110 shadow-md hover:shadow-lg"
                        title="Quick Add to Cart"
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </button>
                      <button
                        className="border border-amber-200 hover:border-amber-400 text-amber-600 p-2 rounded-lg transition-all duration-300 hover:scale-110 hover:bg-amber-50"
                        title="Add to Wishlist"
                      >
                        <Heart className="h-4 w-4" />
                      </button>
                      <Link
                        to={`/products/${product.id}`}
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 text-sm font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;