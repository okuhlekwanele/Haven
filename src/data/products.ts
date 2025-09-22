import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Skincare Products
  {
    id: '1',
    name: 'Honeybush Glow Cream',
    price: 34.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Honeybush-infused face moisturizer that nourishes and revitalizes your skin with natural antioxidants and botanical extracts.',
    category: 'skincare',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '2',
    name: 'Honeybush Face Wash',
    price: 24.99,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gentle cleansing face wash enriched with honeybush and aloe vera for a refreshing and purifying skincare routine.',
    category: 'skincare',
    sizes: ['150ml', '250ml'],
    colors: ['Natural']
  },
  {
    id: '3',
    name: 'Honeybush Hand Wash',
    price: 18.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious hand wash with honeybush and aloe vera that cleanses while keeping your hands soft and moisturized.',
    category: 'skincare',
    sizes: ['250ml', '500ml'],
    colors: ['Natural']
  },
  {
    id: '4',
    name: 'Honeybush Soap Bar',
    price: 12.99,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Artisan soap bar crafted with honeybush and aloe vera for a natural, gentle cleansing experience.',
    category: 'skincare',
    sizes: ['100g', '150g'],
    colors: ['Natural', 'Lavender']
  },

  // Wellness Products
  {
    id: '5',
    name: 'Honeybush Harmony Tea',
    price: 16.99,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Naturally sweet, caffeine-free honeybush tea blend that promotes relaxation and wellness with every sip.',
    category: 'wellness',
    sizes: ['50g', '100g', '200g'],
    colors: ['Natural']
  },
  {
    id: '6',
    name: 'Honeybush Rooibos Tea',
    price: 19.99,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium blend of honeybush and rooibos tea, rich in antioxidants and naturally caffeine-free.',
    category: 'wellness',
    sizes: ['50g', '100g', '200g'],
    colors: ['Natural']
  },
  {
    id: '7',
    name: 'ImmuniBoost Drops',
    price: 29.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Natural immune support drops with honeybush extract and essential vitamins to boost your daily wellness.',
    category: 'wellness',
    sizes: ['30ml', '50ml'],
    colors: ['Natural']
  },

  // Gift Sets
  {
    id: '8',
    name: 'Honeybush Skincare Set',
    price: 79.99,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete skincare collection featuring our glow cream, face wash, and hand wash in a beautiful gift box.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '9',
    name: 'Wellness Tea Collection',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Curated selection of our finest honeybush tea blends for the ultimate wellness experience.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '10',
    name: 'Complete Honeybush Collection',
    price: 149.99,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'The ultimate honeybush experience with our complete range of skincare, wellness, and tea products.',
    category: 'sets',
    colors: ['Natural']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'skincare', name: 'Skincare', count: products.filter(p => p.category === 'skincare').length },
  { id: 'wellness', name: 'Wellness', count: products.filter(p => p.category === 'wellness').length },
  { id: 'sets', name: 'Gift Sets', count: products.filter(p => p.category === 'sets').length }
];

export const featuredProducts = products.slice(0, 3);