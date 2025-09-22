import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Women's Dresses
  {
    id: '1',
    name: 'Elegant Evening Dress',
    price: 149.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Sophisticated evening dress perfect for special occasions. Made with premium fabric and attention to detail.',
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Burgundy']
  },
  {
    id: '2',
    name: 'Summer Floral Dress',
    price: 79.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Light and breezy floral dress perfect for summer outings. Comfortable fit with beautiful patterns.',
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Floral Blue', 'Floral Pink', 'Floral Yellow']
  },
  {
    id: '3',
    name: 'Professional Blazer Dress',
    price: 129.99,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Modern blazer dress that transitions seamlessly from office to evening. Structured yet comfortable.',
    category: 'dresses',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Charcoal', 'Camel']
  },

  // Tops
  {
    id: '4',
    name: 'Silk Blouse',
    price: 89.99,
    image: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious silk blouse with elegant draping. Perfect for both casual and formal settings.',
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['White', 'Cream', 'Soft Pink']
  },
  {
    id: '5',
    name: 'Cotton Casual Tee',
    price: 34.99,
    image: 'https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Comfortable cotton t-shirt with a relaxed fit. Essential wardrobe staple in various colors.',
    category: 'tops',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Gray', 'Navy', 'Pink']
  },

  // Bottoms
  {
    id: '6',
    name: 'High-Waisted Jeans',
    price: 99.99,
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Classic high-waisted jeans with a flattering fit. Premium denim with excellent stretch.',
    category: 'bottoms',
    sizes: ['24', '25', '26', '27', '28', '29', '30', '31', '32'],
    colors: ['Dark Wash', 'Light Wash', 'Black']
  },
  {
    id: '7',
    name: 'Pleated Midi Skirt',
    price: 69.99,
    image: 'https://images.pexels.com/photos/1007018/pexels-photo-1007018.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Elegant pleated midi skirt that adds sophistication to any outfit. Versatile and comfortable.',
    category: 'bottoms',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    colors: ['Black', 'Camel', 'Olive']
  },

  // Accessories
  {
    id: '8',
    name: 'Leather Handbag',
    price: 199.99,
    image: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium leather handbag with multiple compartments. Perfect size for daily essentials.',
    category: 'accessories',
    colors: ['Black', 'Brown', 'Tan']
  },
  {
    id: '9',
    name: 'Statement Necklace',
    price: 59.99,
    image: 'https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Bold statement necklace that elevates any outfit. Hypoallergenic materials.',
    category: 'accessories',
    colors: ['Gold', 'Silver', 'Rose Gold']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'dresses', name: 'Dresses', count: products.filter(p => p.category === 'dresses').length },
  { id: 'tops', name: 'Tops', count: products.filter(p => p.category === 'tops').length },
  { id: 'bottoms', name: 'Bottoms', count: products.filter(p => p.category === 'bottoms').length },
  { id: 'accessories', name: 'Accessories', count: products.filter(p => p.category === 'accessories').length }
];

export const featuredProducts = products.slice(0, 3);