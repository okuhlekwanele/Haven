import React from 'react';
import { Search, Filter, Grid, List } from 'lucide-react';

const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Our Products</h1>
          <p className="text-gray-600">
            Discover our complete range of honeybush-infused wellness and skincare products
          </p>
        </div>

        {/* Search and Filter Bar */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Filter className="h-4 w-4" />
                <span>Filter</span>
              </button>
              <div className="flex border border-gray-300 rounded-lg">
                <button className="p-2 hover:bg-gray-50">
                  <Grid className="h-4 w-4" />
                </button>
                <button className="p-2 hover:bg-gray-50 border-l border-gray-300">
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Products Grid Placeholder */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <div className="text-center text-gray-600">
            <p className="text-lg mb-4">Products coming soon!</p>
            <p>We're currently preparing our amazing honeybush product collection for you.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;