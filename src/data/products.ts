import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Core Honeybush Haven Branded Products (from the main image)
  {
    id: '1',
    name: 'Honeybush Haven Glow Cream',
    price: 485.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious honeybush-infused face moisturizer in our signature amber jar. This premium cream combines the antioxidant power of wild honeybush with nourishing botanicals to restore your skin\'s natural luminosity and youthful vitality.',
    category: 'skincare',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '2',
    name: 'Honeybush Haven Face Wash',
    price: 295.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gentle cleansing formula enriched with honeybush and aloe vera. This amber pump bottle contains our signature face wash that purifies without stripping, leaving your skin clean, balanced, and refreshed.',
    category: 'skincare',
    sizes: ['200ml', '400ml'],
    colors: ['Natural']
  },
  {
    id: '3',
    name: 'Honeybush Haven Soap Bar',
    price: 165.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Concentrated liquid soap crafted with honeybush and aloe extracts. This elegant amber bottle with pump dispenser provides a rich, creamy lather that cleanses and moisturizes, perfect for daily use.',
    category: 'skincare',
    sizes: ['150ml', '300ml'],
    colors: ['Natural']
  },
  {
    id: '4',
    name: 'Honeybush Haven Tea - Honeybush & Rooibos Blend',
    price: 225.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium tea blend combining the sweet, honey-like notes of wild honeybush with the smooth, vanilla undertones of red rooibos. Packaged in our signature kraft box with botanical leaf design.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },

  // Complementary Plain Products
  {
    id: '5',
    name: 'Pure Botanical Hand Cream',
    price: 195.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Minimalist white tube containing our pure botanical hand cream. Formulated with natural plant extracts and essential oils for deep moisturization without the fuss - perfect for those who prefer clean, simple packaging.',
    category: 'skincare',
    sizes: ['75ml', '150ml'],
    colors: ['White']
  },
  {
    id: '6',
    name: 'Essential Face Serum',
    price: 325.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Clean, minimalist white bottle containing our concentrated botanical face serum. This unbranded essential focuses purely on performance - lightweight yet powerful formula for all skin types.',
    category: 'skincare',
    sizes: ['30ml', '50ml'],
    colors: ['White']
  },

  // Honeybush Haven Gift Sets
  {
    id: '7',
    name: 'Honeybush Haven Signature Collection',
    price: 1285.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete skincare ritual featuring our branded Glow Cream, Face Wash, and Soap Bar exactly as shown in our signature collection. Beautifully packaged in sustainable materials with our botanical leaf branding.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '8',
    name: 'Tea & Skincare Bundle',
    price: 895.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect pairing of our Honeybush Haven Tea and Glow Cream. Experience the benefits of honeybush both inside and out with this wellness-focused bundle in our signature kraft and amber packaging.',
    category: 'sets',
    colors: ['Natural']
  },

  // Additional Honeybush Haven Branded Extensions
  {
    id: '9',
    name: 'Honeybush Haven Body Oil',
    price: 365.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious body oil in our signature amber bottle with pump dispenser. Infused with honeybush extract and botanical oils, this lightweight formula absorbs quickly while providing long-lasting hydration.',
    category: 'skincare',
    sizes: ['100ml', '200ml'],
    colors: ['Natural']
  },
  {
    id: '10',
    name: 'Honeybush Haven Night Cream',
    price: 525.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Intensive overnight treatment in our signature amber jar. This rich, nourishing cream works while you sleep to repair and regenerate skin with concentrated honeybush and botanical actives.',
    category: 'skincare',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '11',
    name: 'Honeybush Haven Pure Tea',
    price: 185.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Single-origin honeybush tea in our signature kraft packaging. This pure, unblended tea offers the authentic taste of wild honeybush - naturally sweet with delicate floral notes and no caffeine.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },
  {
    id: '12',
    name: 'Honeybush Haven Lip Balm',
    price: 85.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Nourishing lip balm featuring honeybush extract in our signature amber tube. This concentrated treatment provides long-lasting moisture and protection with the subtle honey-like fragrance of wild honeybush.',
    category: 'skincare',
    sizes: ['4.5g'],
    colors: ['Natural']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'skincare', name: 'Skincare', count: products.filter(p => p.category === 'skincare').length },
  { id: 'wellness', name: 'Wellness', count: products.filter(p => p.category === 'wellness').length },
  { id: 'sets', name: 'Gift Sets', count: products.filter(p => p.category === 'sets').length }
];

export const featuredProducts = products.slice(0, 4); // Show the main branded products