import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Skincare Products
  {
    id: '1',
    name: 'Honeybush Radiance Face Cream',
    price: 485.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious anti-aging face cream infused with wild Honeybush extract from the Cederberg Mountains. Rich in antioxidants and minerals for youthful, glowing skin.',
    category: 'skincare',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '2',
    name: 'Fynbos Gentle Cleansing Foam',
    price: 295.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gentle foaming cleanser with Honeybush, Rooibos, and indigenous Buchu. Perfect for sensitive skin, leaving it clean and refreshed.',
    category: 'skincare',
    sizes: ['150ml', '250ml'],
    colors: ['Natural']
  },
  {
    id: '3',
    name: 'Kalahari Desert Hand Balm',
    price: 225.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Intensive hand treatment with Honeybush and Marula oil. Repairs dry, cracked hands with the healing power of the African desert.',
    category: 'skincare',
    sizes: ['75ml', '150ml'],
    colors: ['Natural']
  },
  {
    id: '4',
    name: 'Cape Floral Soap Collection',
    price: 165.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Handcrafted soap bars featuring Honeybush, Wild Rosemary, and Cape Chamomile. Made with traditional South African botanicals.',
    category: 'skincare',
    sizes: ['100g', '150g'],
    colors: ['Natural', 'Lavender', 'Rose Geranium']
  },
  {
    id: '5',
    name: 'Honeybush Body Oil Elixir',
    price: 395.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Nourishing body oil blend with Honeybush extract, Baobab, and Mongongo oils. Deeply moisturizes while celebrating African heritage.',
    category: 'skincare',
    sizes: ['100ml', '200ml'],
    colors: ['Natural']
  },

  // Wellness Products
  {
    id: '6',
    name: 'Mountain Honeybush Tea - Premium',
    price: 185.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Wild-harvested Honeybush from the Langkloof Mountains. Naturally sweet, caffeine-free tea with honey-like flavor and floral notes.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },
  {
    id: '7',
    name: 'Rooibos & Honeybush Harmony Blend',
    price: 215.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Perfect marriage of Red Bush Rooibos and Honeybush, creating a smooth, naturally sweet tea rich in minerals and antioxidants.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },
  {
    id: '8',
    name: 'African Potato Immune Tincture',
    price: 425.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Traditional immune support tincture combining Honeybush with African Potato and Sutherlandia. Supports natural wellness and vitality.',
    category: 'wellness',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '9',
    name: 'Buchu & Honeybush Detox Tea',
    price: 245.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Cleansing herbal blend featuring wild Buchu and Honeybush. Traditional Khoi remedy for kidney and bladder health.',
    category: 'wellness',
    sizes: ['75g', '150g'],
    colors: ['Natural']
  },
  {
    id: '10',
    name: 'Honeybush Sleep Ritual Blend',
    price: 195.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Calming evening tea with Honeybush, Wild Dagga, and Kanna. Promotes restful sleep using ancient South African botanicals.',
    category: 'wellness',
    sizes: ['100g', '200g'],
    colors: ['Natural']
  },

  // Gift Sets
  {
    id: '11',
    name: 'Cederberg Skincare Ritual Set',
    price: 1285.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete skincare journey featuring our Radiance Cream, Cleansing Foam, and Body Oil. Beautifully packaged in sustainable bamboo box.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '12',
    name: 'Heritage Tea Collection',
    price: 685.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Curated selection of our finest South African teas: Mountain Honeybush, Rooibos Harmony, and Sleep Ritual blends.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '13',
    name: 'Ubuntu Wellness Bundle',
    price: 895.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Holistic wellness package with Immune Tincture, Detox Tea, and premium Honeybush blend. Supporting community and conservation.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '14',
    name: 'The Complete Honeybush Experience',
    price: 2195.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Ultimate collection featuring our entire range. From skincare to wellness teas, experience the full power of South African Honeybush.',
    category: 'sets',
    colors: ['Natural']
  },

  // New Specialty Items
  {
    id: '15',
    name: 'Honeybush Lip Balm Trio',
    price: 145.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Nourishing lip balms in three flavors: Original Honeybush, Wild Rose Geranium, and Mint Bush. Made with beeswax and plant oils.',
    category: 'skincare',
    sizes: ['4.5g each'],
    colors: ['Natural', 'Rose', 'Mint']
  },
  {
    id: '16',
    name: 'Honeybush Honey - Raw & Unfiltered',
    price: 285.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Pure honey from bees that feed on wild Honeybush flowers. Rare, seasonal harvest with unique floral notes and healing properties.',
    category: 'wellness',
    sizes: ['250g', '500g'],
    colors: ['Golden']
  }
];

export const categories = [
  { id: 'all', name: 'All Products', count: products.length },
  { id: 'skincare', name: 'Skincare', count: products.filter(p => p.category === 'skincare').length },
  { id: 'wellness', name: 'Wellness', count: products.filter(p => p.category === 'wellness').length },
  { id: 'sets', name: 'Gift Sets', count: products.filter(p => p.category === 'sets').length }
];

export const featuredProducts = products.slice(0, 3);