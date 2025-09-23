import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Featured Products from the Image
  {
    id: '1',
    name: 'Honeybush Haven Glow Cream',
    price: 485.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Luxurious honeybush-infused face moisturizer that delivers a natural, radiant glow. This premium cream combines the antioxidant power of wild honeybush with nourishing botanicals to restore your skin\'s natural luminosity and youthful vitality.',
    category: 'skincare',
    sizes: ['50ml', '100ml'],
    colors: ['Natural']
  },
  {
    id: '2',
    name: 'Honeybush Haven Face Wash',
    price: 295.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gentle cleansing formula enriched with honeybush and aloe vera. This amber-bottled face wash purifies without stripping, leaving your skin clean, balanced, and refreshed with the subtle honey-like fragrance of wild honeybush.',
    category: 'skincare',
    sizes: ['200ml', '400ml'],
    colors: ['Natural']
  },
  {
    id: '3',
    name: 'Honeybush Haven Soap Bar',
    price: 165.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Artisanal soap bar crafted with honeybush and aloe extracts. This concentrated liquid soap in an elegant amber bottle provides a rich, creamy lather that cleanses and moisturizes, perfect for daily use on face and body.',
    category: 'skincare',
    sizes: ['150ml', '300ml'],
    colors: ['Natural']
  },
  {
    id: '4',
    name: 'Honeybush Haven Tea - Honeybush & Rooibos Blend',
    price: 225.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Premium tea blend combining the sweet, honey-like notes of wild honeybush with the smooth, vanilla undertones of red rooibos. Packaged in our signature kraft box, this caffeine-free blend promotes wellness from within.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },

  // Extended Collection
  {
    id: '5',
    name: 'Honeybush Radiance Serum',
    price: 395.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Concentrated honeybush extract serum that penetrates deep to restore skin elasticity and reduce fine lines. This potent anti-aging formula harnesses the power of South African botanicals for visible results.',
    category: 'skincare',
    sizes: ['30ml', '50ml'],
    colors: ['Natural']
  },
  {
    id: '6',
    name: 'Fynbos Body Butter',
    price: 325.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Rich, nourishing body butter infused with honeybush, buchu, and wild rosemary. This intensive moisturizer melts into skin, providing long-lasting hydration with the healing essence of the Cape Floral Kingdom.',
    category: 'skincare',
    sizes: ['200ml', '400ml'],
    colors: ['Natural']
  },
  {
    id: '7',
    name: 'Mountain Honeybush Tea - Pure',
    price: 185.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Single-origin honeybush tea from the pristine Cederberg Mountains. This pure, unblended tea offers the authentic taste of wild honeybush - naturally sweet with delicate floral notes and no caffeine.',
    category: 'wellness',
    sizes: ['100g', '250g', '500g'],
    colors: ['Natural']
  },
  {
    id: '8',
    name: 'Honeybush Lip Balm Collection',
    price: 145.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Set of three nourishing lip balms featuring honeybush extract, beeswax, and natural oils. Available in Original Honeybush, Wild Rose Geranium, and Mint Bush varieties for complete lip care.',
    category: 'skincare',
    sizes: ['4.5g each'],
    colors: ['Natural', 'Rose', 'Mint']
  },
  {
    id: '9',
    name: 'Kalahari Hand Cream',
    price: 195.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Intensive hand treatment combining honeybush with marula and baobab oils. This fast-absorbing cream repairs dry, cracked hands while protecting against environmental damage with African botanical wisdom.',
    category: 'skincare',
    sizes: ['75ml', '150ml'],
    colors: ['Natural']
  },
  {
    id: '10',
    name: 'Honeybush Sleep Ritual Tea',
    price: 245.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Calming evening blend featuring honeybush, chamomile, and indigenous kanna. This soothing tea promotes restful sleep and relaxation, packaged in our signature eco-friendly kraft box.',
    category: 'wellness',
    sizes: ['100g', '200g'],
    colors: ['Natural']
  },
  {
    id: '11',
    name: 'Honeybush Exfoliating Scrub',
    price: 265.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Gentle exfoliating scrub with honeybush extract and natural pumice. This weekly treatment removes dead skin cells while infusing skin with antioxidants, revealing smoother, more radiant skin.',
    category: 'skincare',
    sizes: ['150ml', '250ml'],
    colors: ['Natural']
  },
  {
    id: '12',
    name: 'African Botanical Toner',
    price: 225.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Refreshing toner with honeybush, witch hazel, and rooibos extracts. This alcohol-free formula balances skin pH while providing antioxidant protection, perfect for all skin types.',
    category: 'skincare',
    sizes: ['200ml', '400ml'],
    colors: ['Natural']
  },

  // Gift Sets
  {
    id: '13',
    name: 'Honeybush Haven Signature Collection',
    price: 1285.00,
    image: 'https://images.pexels.com/photos/4465831/pexels-photo-4465831.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Complete skincare ritual featuring our Glow Cream, Face Wash, and Soap Bar. Beautifully packaged in sustainable materials, this collection embodies the essence of South African botanical luxury.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '14',
    name: 'Tea Lover\'s Bundle',
    price: 685.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Curated selection of our finest honeybush teas: Pure Mountain Honeybush, Honeybush & Rooibos Blend, and Sleep Ritual Tea. Perfect for discovering the diverse flavors of this remarkable South African plant.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '15',
    name: 'Ultimate Honeybush Experience',
    price: 2195.00,
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'The complete Honeybush Haven collection featuring all our signature products. From skincare essentials to wellness teas, experience the full spectrum of honeybush benefits in this luxury gift set.',
    category: 'sets',
    colors: ['Natural']
  },
  {
    id: '16',
    name: 'Honeybush Honey - Wild Harvest',
    price: 285.00,
    image: 'https://images.pexels.com/photos/1417945/pexels-photo-1417945.jpeg?auto=compress&cs=tinysrgb&w=500',
    description: 'Rare, raw honey from bees that feed exclusively on wild honeybush flowers. This seasonal delicacy captures the unique floral essence of honeybush in its purest form, with exceptional healing properties.',
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

export const featuredProducts = products.slice(0, 4); // Show the main branded products