export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  isVeg: boolean;
  image: string;
  category: string;
  isPopular?: boolean;
  isSpicy?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  icon: string;
}

export const categories: MenuCategory[] = [
  { id: 'appetizers', name: 'Appetizers', icon: '🥟' },
  { id: 'soups', name: 'Soups', icon: '🍲' },
  { id: 'rice', name: 'Rice & Fried Rice', icon: '🍚' },
  { id: 'noodles', name: 'Noodles', icon: '🍜' },
  { id: 'chicken', name: 'Chicken', icon: '🍗' },
  { id: 'seafood', name: 'Seafood', icon: '🦐' },
  { id: 'vegetarian', name: 'Vegetarian', icon: '🥬' },
  { id: 'beverages', name: 'Beverages', icon: '🥤' },
];

export const menuItems: MenuItem[] = [
  // Appetizers
  {
    id: '1',
    name: 'Chicken Lollipop',
    description: 'Crispy fried chicken wings marinated in aromatic spices',
    price: 280,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    category: 'appetizers',
    isPopular: true,
    isSpicy: true
  },
  {
    id: '2',
    name: 'Veg Spring Rolls',
    description: 'Crispy rolls stuffed with vegetables and served with sweet chili sauce',
    price: 180,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1544384267-7cd0cd5e6a00?w=400&h=300&fit=crop',
    category: 'appetizers'
  },
  {
    id: '3',
    name: 'Honey Chilli Potato',
    description: 'Golden fried potatoes tossed in honey and chili sauce',
    price: 200,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1518013431117-eb1465fa5752?w=400&h=300&fit=crop',
    category: 'appetizers',
    isPopular: true
  },
  {
    id: '4',
    name: 'Prawn Tempura',
    description: 'Crispy battered prawns served with dipping sauce',
    price: 380,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    category: 'appetizers'
  },
  // Soups
  {
    id: '5',
    name: 'Hot & Sour Soup',
    description: 'Classic Chinese soup with tofu, mushrooms, and bamboo shoots',
    price: 150,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups',
    isSpicy: true
  },
  {
    id: '6',
    name: 'Chicken Manchow Soup',
    description: 'Thick soup with chicken, vegetables, and crispy noodles',
    price: 180,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',
    category: 'soups',
    isPopular: true
  },
  {
    id: '7',
    name: 'Lemon Coriander Soup',
    description: 'Light and refreshing soup with lemon and fresh coriander',
    price: 140,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups'
  },
  // Rice
  {
    id: '8',
    name: 'Veg Fried Rice',
    description: 'Wok-tossed rice with mixed vegetables and soy sauce',
    price: 200,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice'
  },
  {
    id: '9',
    name: 'Chicken Fried Rice',
    description: 'Classic fried rice with tender chicken pieces',
    price: 250,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    category: 'rice',
    isPopular: true
  },
  {
    id: '10',
    name: 'Mixed Non-Veg Fried Rice',
    description: 'Fried rice with chicken, prawns, and egg',
    price: 320,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop',
    category: 'rice'
  },
  // Noodles
  {
    id: '11',
    name: 'Hakka Noodles',
    description: 'Stir-fried noodles with vegetables in soy sauce',
    price: 220,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'noodles',
    isPopular: true
  },
  {
    id: '12',
    name: 'Chicken Chow Mein',
    description: 'Crispy noodles topped with chicken and vegetables in sauce',
    price: 280,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'noodles'
  },
  {
    id: '13',
    name: 'Singapore Noodles',
    description: 'Thin rice noodles with curry powder and mixed proteins',
    price: 300,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'noodles',
    isSpicy: true
  },
  {
    id: '14',
    name: 'E-Fu Noodles',
    description: 'Soft egg noodles with vegetables in brown sauce',
    price: 260,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'noodles'
  },
  // Chicken
  {
    id: '15',
    name: 'Dragon Chicken',
    description: 'Crispy chicken tossed in spicy dragon sauce with bell peppers',
    price: 350,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop',
    category: 'chicken',
    isPopular: true,
    isSpicy: true
  },
  {
    id: '16',
    name: 'Hunan Chicken',
    description: 'Tender chicken in spicy Hunan sauce with vegetables',
    price: 320,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'chicken',
    isSpicy: true
  },
  {
    id: '17',
    name: 'Kung Pao Chicken',
    description: 'Classic Sichuan dish with peanuts and dried chilies',
    price: 340,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=400&h=300&fit=crop',
    category: 'chicken',
    isSpicy: true
  },
  {
    id: '18',
    name: 'Chicken Tai Pan',
    description: 'Chicken in tai pan sauce with cashews and vegetables',
    price: 360,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
    category: 'chicken',
    isPopular: true
  },
  // Seafood
  {
    id: '19',
    name: 'Chilli Oyster Prawns',
    description: 'Prawns in oyster sauce with chili and vegetables',
    price: 450,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=400&h=300&fit=crop',
    category: 'seafood',
    isPopular: true,
    isSpicy: true
  },
  {
    id: '20',
    name: 'Garlic Fish',
    description: 'Crispy fish in aromatic garlic sauce',
    price: 400,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    category: 'seafood'
  },
  {
    id: '21',
    name: 'Szechuan Prawns',
    description: 'Prawns in spicy Szechuan sauce',
    price: 480,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=400&h=300&fit=crop',
    category: 'seafood',
    isSpicy: true
  },
  // Vegetarian
  {
    id: '22',
    name: 'Chilli Paneer',
    description: 'Cottage cheese cubes in spicy chili sauce',
    price: 280,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=400&h=300&fit=crop',
    category: 'vegetarian',
    isPopular: true,
    isSpicy: true
  },
  {
    id: '23',
    name: 'Mushroom Manchurian',
    description: 'Fried mushrooms in tangy Manchurian sauce',
    price: 260,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    category: 'vegetarian'
  },
  {
    id: '24',
    name: 'Broccoli in Garlic Sauce',
    description: 'Fresh broccoli stir-fried in aromatic garlic sauce',
    price: 240,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=300&fit=crop',
    category: 'vegetarian'
  },
  // Beverages
  {
    id: '25',
    name: 'Green Apple Soda',
    description: 'Refreshing green apple flavored soda',
    price: 80,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'beverages'
  },
  {
    id: '26',
    name: 'Lime Soda',
    description: 'Classic lime soda - sweet or salted',
    price: 70,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=300&fit=crop',
    category: 'beverages'
  },
  {
    id: '27',
    name: 'Jasmine Tea',
    description: 'Traditional Chinese jasmine green tea',
    price: 100,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=300&fit=crop',
    category: 'beverages'
  }
];
