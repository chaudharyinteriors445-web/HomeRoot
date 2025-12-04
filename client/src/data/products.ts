import khapliWheatImage from '@assets/generated_images/khapli_wheat_flour_bowl.png';
import wholeWheatImage from '@assets/generated_images/whole_wheat_flour_bowl.png';
import multigrainImage from '@assets/generated_images/multigrain_flour_blend_bowl.png';
import bajraImage from '@assets/generated_images/bajra_pearl_millet_flour.png';
import jowarImage from '@assets/generated_images/jowar_sorghum_flour_bowl.png';
import ragiImage from '@assets/generated_images/ragi_finger_millet_flour.png';

export interface Product {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  priceUnit: string;
  image: string;
  category: 'ancient-grain' | 'millet' | 'whole-wheat';
  badges: string[];
  healthBenefits: string[];
  nutritionalInfo: {
    calories: string;
    protein: string;
    carbs: string;
    fiber: string;
    fat: string;
  };
  idealUsage: string[];
  isColdPressed: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'khapli-wheat-atta',
    name: 'Khapli Wheat Atta',
    shortDescription: 'Ancient emmer wheat flour with exceptional nutrition',
    description: 'Our Khapli (Emmer) Wheat Atta is cold-pressed from ancient emmer wheat grains, known for their superior nutritional profile. This heritage grain has been cultivated for over 10,000 years and offers a nutty, earthy flavor perfect for traditional rotis.',
    price: 120,
    priceUnit: 'per kg',
    image: khapliWheatImage,
    category: 'ancient-grain',
    badges: ['Cold-Pressed', 'Ancient Grain', 'Low GI'],
    healthBenefits: [
      'Rich in dietary fiber for better digestion',
      'Lower glycemic index than regular wheat',
      'High in protein and essential minerals',
      'Contains natural antioxidants',
      'Easier to digest than modern wheat varieties'
    ],
    nutritionalInfo: {
      calories: '340 kcal',
      protein: '14.5g',
      carbs: '71g',
      fiber: '10.5g',
      fat: '2.5g'
    },
    idealUsage: ['Roti', 'Paratha', 'Chapati', 'Puri'],
    isColdPressed: true
  },
  {
    id: '2',
    slug: 'whole-wheat-atta',
    name: 'Whole Wheat Atta',
    shortDescription: 'Premium stone-ground whole wheat flour',
    description: 'Our Whole Wheat Atta is cold-pressed from carefully selected wheat grains, preserving all the natural goodness of the bran, germ, and endosperm. Perfect for everyday rotis with superior taste and nutrition.',
    price: 65,
    priceUnit: 'per kg',
    image: wholeWheatImage,
    category: 'whole-wheat',
    badges: ['Cold-Pressed', 'Stone-Ground', '100% Organic'],
    healthBenefits: [
      'Complete nutrition from whole grain',
      'Rich in B vitamins and iron',
      'High fiber content for digestive health',
      'Natural source of energy',
      'Supports heart health'
    ],
    nutritionalInfo: {
      calories: '332 kcal',
      protein: '12.5g',
      carbs: '72g',
      fiber: '11g',
      fat: '1.7g'
    },
    idealUsage: ['Roti', 'Chapati', 'Paratha', 'Thepla'],
    isColdPressed: true
  },
  {
    id: '3',
    slug: 'multigrain-atta',
    name: 'Multigrain Atta',
    shortDescription: 'Blend of 7 nutritious grains for complete health',
    description: 'Our Multigrain Atta combines seven carefully selected grains - wheat, oats, barley, ragi, jowar, bajra, and maize. Cold-pressed to retain maximum nutrients, this flour offers a complete nutritional profile for health-conscious families.',
    price: 95,
    priceUnit: 'per kg',
    image: multigrainImage,
    category: 'whole-wheat',
    badges: ['Cold-Pressed', '7 Grains', 'High Fiber'],
    healthBenefits: [
      'Complete amino acid profile',
      'Rich in diverse vitamins and minerals',
      'Excellent for weight management',
      'Sustained energy release',
      'Supports immune system'
    ],
    nutritionalInfo: {
      calories: '345 kcal',
      protein: '13g',
      carbs: '68g',
      fiber: '12g',
      fat: '3g'
    },
    idealUsage: ['Roti', 'Paratha', 'Thepla', 'Health Bread'],
    isColdPressed: true
  },
  {
    id: '4',
    slug: 'bajra-atta',
    name: 'Bajra Atta',
    shortDescription: 'Pearl millet flour for traditional nutrition',
    description: 'Our Bajra (Pearl Millet) Atta is cold-pressed from organically grown bajra grains. This ancient millet is a powerhouse of nutrition, especially popular in winter months for its warming properties and exceptional mineral content.',
    price: 85,
    priceUnit: 'per kg',
    image: bajraImage,
    category: 'millet',
    badges: ['Cold-Pressed', 'Millet', 'Gluten-Free'],
    healthBenefits: [
      'Naturally gluten-free',
      'Very high in iron and magnesium',
      'Excellent for diabetics',
      'Warming effect, ideal for winters',
      'Supports bone health'
    ],
    nutritionalInfo: {
      calories: '360 kcal',
      protein: '11g',
      carbs: '67g',
      fiber: '11.5g',
      fat: '5g'
    },
    idealUsage: ['Bajra Roti', 'Khichdi', 'Ladoo', 'Winter Rotis'],
    isColdPressed: true
  },
  {
    id: '5',
    slug: 'jowar-atta',
    name: 'Jowar Atta',
    shortDescription: 'Sorghum flour rich in antioxidants',
    description: 'Our Jowar (Sorghum) Atta is cold-pressed from premium quality jowar grains. This versatile millet flour is packed with antioxidants and is perfect for making soft, nutritious rotis that the whole family will love.',
    price: 80,
    priceUnit: 'per kg',
    image: jowarImage,
    category: 'millet',
    badges: ['Cold-Pressed', 'Millet', 'High Antioxidants'],
    healthBenefits: [
      'Rich in antioxidants',
      'Naturally gluten-free',
      'Good for heart health',
      'Helps in weight management',
      'Cooling effect, ideal for summers'
    ],
    nutritionalInfo: {
      calories: '349 kcal',
      protein: '10.5g',
      carbs: '72g',
      fiber: '9.5g',
      fat: '3.4g'
    },
    idealUsage: ['Jowar Roti', 'Bhakri', 'Dosa', 'Upma'],
    isColdPressed: true
  },
  {
    id: '6',
    slug: 'ragi-atta',
    name: 'Ragi Atta',
    shortDescription: 'Finger millet flour - calcium powerhouse',
    description: 'Our Ragi (Finger Millet) Atta is cold-pressed from nutrient-dense ragi grains. Known as a superfood, ragi is exceptionally high in calcium and is excellent for growing children, pregnant women, and the elderly.',
    price: 90,
    priceUnit: 'per kg',
    image: ragiImage,
    category: 'millet',
    badges: ['Cold-Pressed', 'Millet', 'High Calcium'],
    healthBenefits: [
      'Highest calcium among cereals',
      'Naturally gluten-free',
      'Rich in iron and amino acids',
      'Excellent for bone health',
      'Helps control blood sugar'
    ],
    nutritionalInfo: {
      calories: '328 kcal',
      protein: '7.3g',
      carbs: '72g',
      fiber: '11.5g',
      fat: '1.3g'
    },
    idealUsage: ['Ragi Roti', 'Ragi Mudde', 'Ragi Dosa', 'Ragi Ladoo'],
    isColdPressed: true
  }
];

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (currentSlug: string, limit: number = 4): Product[] => {
  return products.filter(p => p.slug !== currentSlug).slice(0, limit);
};

export const filterProducts = (
  category?: string,
  searchQuery?: string
): Product[] => {
  let filtered = [...products];
  
  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }
  
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(p => 
      p.name.toLowerCase().includes(query) ||
      p.shortDescription.toLowerCase().includes(query) ||
      p.badges.some(b => b.toLowerCase().includes(query))
    );
  }
  
  return filtered;
};
