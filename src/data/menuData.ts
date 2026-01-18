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
  { id: 'offers', name: 'Zomato Offers', icon: '🎁' },
  { id: 'soups-veg', name: 'Vegetarian Soups', icon: '🍲' },
  { id: 'soups-nonveg', name: 'Non-Vegetarian Soups', icon: '🍜' },
  { id: 'soups-seafood', name: 'Seafood Soups', icon: '🦐' },
  { id: 'momo', name: 'Momos', icon: '🥟' },
  { id: 'starters-veg', name: 'Vegetarian Starters', icon: '🥬' },
  { id: 'starters-nonveg', name: 'Non-Veg Starters', icon: '🍗' },
  { id: 'starters-seafood', name: 'Seafood Starters', icon: '🦞' },
  { id: 'main-veg', name: 'Veg Main Course', icon: '🥘' },
  { id: 'main-nonveg', name: 'Non-Veg Main Course', icon: '🍛' },
  { id: 'main-poultry', name: 'Poultry Specialties', icon: '🍗' },
  { id: 'main-seafood', name: 'Seafood Main Course', icon: '🐟' },
  { id: 'rice-veg', name: 'Vegetarian Fried Rice', icon: '🍚' },
  { id: 'rice-nonveg', name: 'Non-Veg Fried Rice', icon: '🍚' },
  { id: 'noodles-veg', name: 'Veg Hakka Noodles', icon: '🍜' },
  { id: 'noodles-nonveg', name: 'Non-Veg Hakka Noodles', icon: '🍝' },
  { id: 'noodles-efu', name: 'E-Fu Noodles', icon: '🍜' },
  { id: 'noodles-rice', name: 'Rice Noodles', icon: '🍝' },
  { id: 'noodles-panfried', name: 'Pan Fried Noodles', icon: '🍲' },
  { id: 'choupsey', name: 'American & Chinese Choupsey', icon: '🥡' },
  { id: 'thai', name: 'Thai Specialities', icon: '🌶️' },
  { id: 'healthy', name: 'Healthy Food Options', icon: '🥗' },
];

export const menuItems: MenuItem[] = [
  // Zomato Offers - 17 items
  {
    id: 'offer-1',
    name: 'Chicken Manchurian',
    description: 'Small serving',
    price: 203,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true
  },
  {
    id: 'offer-2',
    name: 'Chicken E-Fu Noodles',
    description: 'Small serving',
    price: 254,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-3',
    name: 'Chilli Mushroom Dry',
    description: 'Small serving',
    price: 181,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1611171711912-e0682ef43488?w=400&h=300&fit=crop',
    category: 'offers',
    isSpicy: true
  },
  {
    id: 'offer-4',
    name: 'Chilly Chicken Dry',
    description: '8 Pieces',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2fb785?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'offer-5',
    name: 'Crispy Corn Chilly Pepper',
    description: 'Small serving',
    price: 175,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=400&h=300&fit=crop',
    category: 'offers',
    isSpicy: true
  },
  {
    id: 'offer-6',
    name: 'Mix Fried Rice',
    description: 'Regular - Egg, Chicken, Prawn',
    price: 288,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true
  },
  {
    id: 'offer-7',
    name: 'Mix Hakka Noodles',
    description: 'Regular - Egg, Chicken, Prawn',
    price: 288,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true
  },
  {
    id: 'offer-8',
    name: 'Schezwan Chicken Lollypop',
    description: '8 Pieces',
    price: 316,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'offer-9',
    name: 'Schezwan Chilly Babycorn',
    description: 'Small serving',
    price: 175,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=300&fit=crop',
    category: 'offers',
    isSpicy: true
  },
  {
    id: 'offer-10',
    name: 'Taste Of China Special Fried Rice',
    description: 'Mix Egg Chicken Prawn - Small',
    price: 271,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true
  },
  {
    id: 'offer-11',
    name: 'Taste Of China Special Noodles',
    description: 'Mix Egg Chicken Prawn - Small',
    price: 271,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'offers',
    isPopular: true
  },
  {
    id: 'offer-12',
    name: 'Veg Eight Treasure Soup',
    description: 'Thick soup made with freshly chopped cut eight kind of vegetables in mild spicy taste',
    price: 147,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-13',
    name: 'Veg Manchow Soup',
    description: 'Thick Soup Made With Freshly Cut Chopped Vegetables In Soy Base Served With Crispy Noodles',
    price: 147,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-14',
    name: 'Vegetable Hakka Noodles',
    description: 'Small serving',
    price: 165,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-15',
    name: 'Vegetable Manchurian',
    description: '4 Pieces',
    price: 170,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-16',
    name: 'Vegetable Mix Fried Rice',
    description: 'Small serving',
    price: 255,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'offers'
  },
  {
    id: 'offer-17',
    name: 'Vegetable E-Fu Noodles',
    description: 'Small serving',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'offers'
  },

  // Vegetarian Soups - 7 items
  {
    id: 'soup-veg-1',
    name: 'Golden Corn Coriander Soup',
    description: 'Thick Soup Made With Freshly Chopped American Corn Carnels And Freshly Cut Coriander Leaves',
    price: 147,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-veg',
    isPopular: true
  },
  {
    id: 'soup-veg-2',
    name: 'Veg Hot N Sour Soup',
    description: 'Fresh julienne cut vegetables like carrot, beans and mushroom cooked in soy to make it both spicy and sour',
    price: 136,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',
    category: 'soups-veg',
    isSpicy: true
  },
  {
    id: 'soup-veg-3',
    name: 'Veg Lemon Coriander Soup',
    description: 'Scrumptious and healthy soup with refreshing combination of lemon, coriander and chopped vegetables',
    price: 136,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-veg',
    isPopular: true
  },
  {
    id: 'soup-veg-4',
    name: 'Veg Sweet Corn Soup',
    description: 'Thick soup made with sweet corn cream and seasoning with salt and pepper',
    price: 136,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-veg'
  },
  {
    id: 'soup-veg-5',
    name: 'Veg Eight Treasure Soup',
    description: 'Thick soup made with freshly chopped cut eight kind of vegetables in mild spicy taste',
    price: 147,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-veg'
  },
  {
    id: 'soup-veg-6',
    name: 'Veg Manchow Soup',
    description: 'Thick soup made with freshly cut chopped vegetables in soy base served with crispy noodles',
    price: 147,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'soups-veg',
    isPopular: true
  },
  {
    id: 'soup-veg-7',
    name: 'Veg Burnt Garlic Clear Soup',
    description: 'Thin soup with diced cut vegetables loaded with garlic and flavour with burnt garlic',
    price: 136,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-veg'
  },

  // Non-Vegetarian Soups - 8 items
  {
    id: 'soup-nonveg-1',
    name: 'Chicken Manchow Soup',
    description: 'Thick soup made with freshly cut chopped vegetables in soy base served with crispy noodles',
    price: 181,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',
    category: 'soups-nonveg',
    isPopular: true
  },
  {
    id: 'soup-nonveg-2',
    name: 'Classic Minced Chicken Soup',
    description: 'Cantonese Style Thick Soup Made With Minced Chicken, Egg And Freshly Cropped Coriander Leaves',
    price: 181,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'soups-nonveg',
    isPopular: true
  },
  {
    id: 'soup-nonveg-3',
    name: 'Chicken Hot N Sour Soup',
    description: 'Fresh Julienne cut vegetables like carrot, beans and mushroom cooked in soy to make it both spicy and sour',
    price: 170,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',
    category: 'soups-nonveg',
    isSpicy: true
  },
  {
    id: 'soup-nonveg-4',
    name: 'Chicken Sweet Corn Soup',
    description: 'Thick soup made with sweet corn cream and seasoning with salt and pepper',
    price: 170,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-nonveg'
  },
  {
    id: 'soup-nonveg-5',
    name: 'Chicken Golden Corn Coriander Soup',
    description: 'Thick Soup Made With Freshly Chopped American Corn Carnels, Minced Checken And Freshly Cut Coriander Leaves',
    price: 181,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-nonveg'
  },
  {
    id: 'soup-nonveg-6',
    name: 'Chicken Lemon Coriander Soup',
    description: 'Scrumptious and healthy soup with refreshing combination of lemon, coriander and chopped vegetables',
    price: 170,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-nonveg'
  },
  {
    id: 'soup-nonveg-7',
    name: 'Chicken Eight Treasure Soup',
    description: 'Thick soup made with freshly chopped cut eight kind of vegetables in mild spicy taste',
    price: 181,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-nonveg'
  },
  {
    id: 'soup-nonveg-8',
    name: 'Chicken Burnt Garlic Clear Soup',
    description: 'Thin soup with diced cut vegetables loaded with garlic and flavour with burnt garlic',
    price: 170,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-nonveg'
  },

  // Seafood Soups - 7 items
  {
    id: 'soup-seafood-1',
    name: 'Shangsi Crab Meat Soup',
    description: "Chef's Special thick soup with fusion of crab meat and egg. It tastes spicy and delicious",
    price: 215,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-seafood',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'soup-seafood-2',
    name: 'Seafood Manchow Soup',
    description: '[Fish+Prawn+crab] Thick soup made with freshly cut chopped vegetables in soy base served with crispy noodles',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=400&h=300&fit=crop',
    category: 'soups-seafood',
    isPopular: true
  },
  {
    id: 'soup-seafood-3',
    name: 'Seafood Hot N Sour Soup',
    description: '[Fish+Prawn+crab] Fresh Julienne cut vegetables cooked in soy to make it both spicy and sour',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?w=400&h=300&fit=crop',
    category: 'soups-seafood',
    isSpicy: true
  },
  {
    id: 'soup-seafood-4',
    name: 'Seafood Lemon Coriander Soup',
    description: '[Fish+Prawn+crab] Thick Soup with refreshing combination of lemon, coriander and chopped vegetables',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-seafood'
  },
  {
    id: 'soup-seafood-5',
    name: 'Seafood Sweet Corn Soup',
    description: '[Fish+Prawn+crab] Thick soup made with sweet corn cream and seasoning with salt and pepper',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-seafood'
  },
  {
    id: 'soup-seafood-6',
    name: 'Seafood Eight Treasure Soup',
    description: '[Fish+Prawn+crab] Thick soup made with freshly chopped cut eight kind of vegetables',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?w=400&h=300&fit=crop',
    category: 'soups-seafood'
  },
  {
    id: 'soup-seafood-7',
    name: 'Seafood Burnt Garlic Clear Soup',
    description: '[Fish+Prawn+crab] Thin soup with diced cut vegetables loaded with garlic and flavour with burnt garlic',
    price: 198,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1547592180-f17c0fb4a1bb?w=400&h=300&fit=crop',
    category: 'soups-seafood'
  },

  // Momos - 7 items
  {
    id: 'momo-1',
    name: 'Veg Steamed Momos',
    description: '6 Pieces - Freshly steamed dumplings filled with vegetables',
    price: 153,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    category: 'momo',
    isPopular: true
  },
  {
    id: 'momo-2',
    name: 'Veg Fried Momos',
    description: '6 Pieces - Crispy fried dumplings filled with vegetables',
    price: 170,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'momo'
  },
  {
    id: 'momo-3',
    name: 'Veg Kurkure Momos',
    description: '6 Pieces - Extra crispy dumplings with special coating',
    price: 187,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'momo'
  },
  {
    id: 'momo-4',
    name: 'Chicken Steamed Momos',
    description: '6 Pieces - Freshly steamed dumplings filled with chicken',
    price: 170,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop',
    category: 'momo',
    isPopular: true
  },
  {
    id: 'momo-5',
    name: 'Chicken Fried Momos',
    description: '6 Pieces - Crispy fried dumplings filled with chicken',
    price: 187,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'momo',
    isPopular: true
  },
  {
    id: 'momo-6',
    name: 'Chicken Kurkure Momos',
    description: '6 Pieces - Extra crispy chicken dumplings with special coating',
    price: 203,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'momo'
  },
  {
    id: 'momo-7',
    name: 'Chicken Chilly Momos Gravy',
    description: '6 Pieces - Fried momos tossed in spicy chilly gravy',
    price: 215,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?w=400&h=300&fit=crop',
    category: 'momo',
    isSpicy: true,
    isPopular: true
  },

  // Vegetarian Starters - Add the full list
  {
    id: 'starter-veg-1',
    name: 'Crispy Honey Chilly Potato',
    description: 'Golden fried potato strips tossed in honey chilly sauce',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'starter-veg-2',
    name: 'Veg Manchurian Dry',
    description: 'Deep fried mixed vegetable balls tossed in Manchurian sauce',
    price: 181,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isPopular: true
  },
  {
    id: 'starter-veg-3',
    name: 'Chilly Mushroom Dry',
    description: 'Crispy fried mushrooms tossed in spicy chilly sauce',
    price: 192,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'starter-veg-4',
    name: 'Chilly Paneer Dry',
    description: 'Cottage cheese cubes tossed in spicy chilly sauce',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'starter-veg-5',
    name: 'Crispy Corn Chilly Pepper',
    description: 'Crispy fried corn kernels with black pepper seasoning',
    price: 186,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1551326844-4df70f78d0e9?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isSpicy: true
  },
  {
    id: 'starter-veg-6',
    name: 'Schezwan Chilly Baby Corn',
    description: 'Baby corn tossed in spicy Schezwan sauce',
    price: 186,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1583663300924-02e7da2ecedb?w=400&h=300&fit=crop',
    category: 'starters-veg',
    isSpicy: true
  },
  {
    id: 'starter-veg-7',
    name: 'Veg Spring Roll',
    description: '4 Pieces - Crispy rolls filled with vegetables',
    price: 181,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1625395005224-0fce0a2c22f7?w=400&h=300&fit=crop',
    category: 'starters-veg'
  },
  {
    id: 'starter-veg-8',
    name: 'Golden Fried Baby Corn',
    description: 'Crispy fried baby corn with salt and pepper',
    price: 175,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1619895092538-128341789043?w=400&h=300&fit=crop',
    category: 'starters-veg'
  },

  // Non-Veg Starters
  {
    id: 'starter-nonveg-1',
    name: 'Chicken Lollypop',
    description: '6 Pieces - Crispy fried chicken wings marinated in aromatic spices',
    price: 254,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1562967916-eb82221dfb92?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isPopular: true
  },
  {
    id: 'starter-nonveg-2',
    name: 'Schezwan Chicken Lollypop',
    description: '6 Pieces - Chicken wings tossed in spicy Schezwan sauce',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'starter-nonveg-3',
    name: 'Chilly Chicken Dry',
    description: '8 Pieces - Boneless chicken tossed in chilly sauce',
    price: 288,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'starter-nonveg-4',
    name: 'Chicken Manchurian Dry',
    description: 'Fried chicken balls tossed in Manchurian sauce',
    price: 215,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isPopular: true
  },
  {
    id: 'starter-nonveg-5',
    name: 'Chicken 65',
    description: 'Spicy fried chicken with curry leaves and green chilies',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isSpicy: true
  },
  {
    id: 'starter-nonveg-6',
    name: 'Chicken Spring Roll',
    description: '4 Pieces - Crispy rolls filled with chicken',
    price: 215,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1560624892-1fc5f0b6b313?w=400&h=300&fit=crop',
    category: 'starters-nonveg'
  },
  {
    id: 'starter-nonveg-7',
    name: 'Drums Of Heaven',
    description: '6 Pieces - Crispy chicken wings in special sauce',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1608039829572-78524f79c4c7?w=400&h=300&fit=crop',
    category: 'starters-nonveg',
    isPopular: true
  },

  // Seafood Starters
  {
    id: 'starter-seafood-1',
    name: 'Chilly Fish Dry',
    description: 'Crispy fried fish tossed in spicy chilly sauce',
    price: 316,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1580959375944-13f1a5e7e18b?w=400&h=300&fit=crop',
    category: 'starters-seafood',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'starter-seafood-2',
    name: 'Chilly Prawn Dry',
    description: 'Crispy prawns tossed in spicy chilly sauce',
    price: 360,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'starters-seafood',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'starter-seafood-3',
    name: 'Golden Fried Prawns',
    description: 'Crispy fried prawns with salt and pepper',
    price: 338,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400&h=300&fit=crop',
    category: 'starters-seafood'
  },
  {
    id: 'starter-seafood-4',
    name: 'Prawn Manchurian Dry',
    description: 'Fried prawns tossed in Manchurian sauce',
    price: 338,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',
    category: 'starters-seafood'
  },

  // Veg Main Course
  {
    id: 'main-veg-1',
    name: 'Veg Manchurian Gravy',
    description: 'Vegetable balls in thick Manchurian gravy',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&h=300&fit=crop',
    category: 'main-veg',
    isPopular: true
  },
  {
    id: 'main-veg-2',
    name: 'Chilly Paneer Gravy',
    description: 'Cottage cheese in spicy chilly gravy',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&h=300&fit=crop',
    category: 'main-veg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'main-veg-3',
    name: 'Chilly Mushroom Gravy',
    description: 'Mushrooms in spicy chilly gravy',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1611171711912-e0682ef43488?w=400&h=300&fit=crop',
    category: 'main-veg',
    isSpicy: true
  },
  {
    id: 'main-veg-4',
    name: 'Paneer in Schezwan Sauce',
    description: 'Cottage cheese in spicy Schezwan sauce',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=300&fit=crop',
    category: 'main-veg',
    isSpicy: true
  },
  {
    id: 'main-veg-5',
    name: 'Paneer in Hunan Sauce',
    description: 'Cottage cheese in Hunan style sauce',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop',
    category: 'main-veg',
    isSpicy: true
  },
  {
    id: 'main-veg-6',
    name: 'Crispy Veg in Chilly Basil Sauce',
    description: 'Mixed vegetables in aromatic basil chilly sauce',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop',
    category: 'main-veg',
    isSpicy: true
  },

  // Non-Veg Main Course
  {
    id: 'main-nonveg-1',
    name: 'Chicken Manchurian Gravy',
    description: 'Chicken balls in thick Manchurian gravy',
    price: 226,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'main-nonveg',
    isPopular: true
  },
  {
    id: 'main-nonveg-2',
    name: 'Chilly Chicken Gravy',
    description: 'Chicken in spicy chilly gravy',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    category: 'main-nonveg',
    isPopular: true,
    isSpicy: true
  },
  {
    id: 'main-nonveg-3',
    name: 'Chicken in Hot Garlic Sauce',
    description: 'Chicken in spicy garlic sauce',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
    category: 'main-nonveg',
    isSpicy: true
  },
  {
    id: 'main-nonveg-4',
    name: 'Chicken in Schezwan Sauce',
    description: 'Chicken in spicy Schezwan sauce',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1610057099443-fde8c4d50f91?w=400&h=300&fit=crop',
    category: 'main-nonveg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'main-nonveg-5',
    name: 'Chicken in Hunan Sauce',
    description: 'Chicken in Hunan style sauce with vegetables',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?w=400&h=300&fit=crop',
    category: 'main-nonveg',
    isSpicy: true
  },
  {
    id: 'main-nonveg-6',
    name: 'Chicken in Black Bean Sauce',
    description: 'Chicken with black bean sauce',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603894584373-5ac82b2fb785?w=400&h=300&fit=crop',
    category: 'main-nonveg'
  },

  // Poultry Main Course
  {
    id: 'main-poultry-1',
    name: 'Ginger Chicken',
    description: 'Chicken cooked with fresh ginger and sauces',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=300&fit=crop',
    category: 'main-poultry'
  },
  {
    id: 'main-poultry-2',
    name: 'Pepper Chicken',
    description: 'Chicken tossed in black pepper sauce',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=400&h=300&fit=crop',
    category: 'main-poultry',
    isSpicy: true
  },
  {
    id: 'main-poultry-3',
    name: 'Chicken Tai Pan',
    description: 'Chicken in tai pan sauce with cashews',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?w=400&h=300&fit=crop',
    category: 'main-poultry',
    isPopular: true
  },
  {
    id: 'main-poultry-4',
    name: 'Honey Chilly Chicken',
    description: 'Chicken tossed in honey chilly sauce',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop',
    category: 'main-poultry',
    isSpicy: true,
    isPopular: true
  },

  // Seafood Main Course
  {
    id: 'main-seafood-1',
    name: 'Chilly Fish Gravy',
    description: 'Fish in spicy chilly gravy',
    price: 327,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'main-seafood-2',
    name: 'Chilly Prawn Gravy',
    description: 'Prawns in spicy chilly gravy',
    price: 371,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'main-seafood-3',
    name: 'Fish in Schezwan Sauce',
    description: 'Fish in spicy Schezwan sauce',
    price: 327,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1580959375944-13f1a5e7e18b?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true
  },
  {
    id: 'main-seafood-4',
    name: 'Prawn in Schezwan Sauce',
    description: 'Prawns in spicy Schezwan sauce',
    price: 371,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true
  },
  {
    id: 'main-seafood-5',
    name: 'Fish in Hot Garlic Sauce',
    description: 'Fish in spicy garlic sauce',
    price: 327,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true
  },
  {
    id: 'main-seafood-6',
    name: 'Prawn in Hot Garlic Sauce',
    description: 'Prawns in spicy garlic sauce',
    price: 371,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=400&h=300&fit=crop',
    category: 'main-seafood',
    isSpicy: true
  },

  // Veg Fried Rice
  {
    id: 'rice-veg-1',
    name: 'Veg Fried Rice',
    description: 'Classic fried rice with mixed vegetables',
    price: 165,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1516684669134-de6f7c473a2a?w=400&h=300&fit=crop',
    category: 'rice-veg',
    isPopular: true
  },
  {
    id: 'rice-veg-2',
    name: 'Veg Schezwan Fried Rice',
    description: 'Fried rice with spicy Schezwan sauce',
    price: 181,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
    category: 'rice-veg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'rice-veg-3',
    name: 'Veg Singapore Fried Rice',
    description: 'Rice with curry powder and vegetables',
    price: 192,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice-veg'
  },
  {
    id: 'rice-veg-4',
    name: 'Veg Mix Fried Rice',
    description: 'Mixed vegetables with special sauce',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice-veg'
  },
  {
    id: 'rice-veg-5',
    name: 'Paneer Fried Rice',
    description: 'Fried rice with cottage cheese cubes',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice-veg'
  },
  {
    id: 'rice-veg-6',
    name: 'Mushroom Fried Rice',
    description: 'Fried rice with fresh mushrooms',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop',
    category: 'rice-veg'
  },

  // Non-Veg Fried Rice
  {
    id: 'rice-nonveg-1',
    name: 'Egg Fried Rice',
    description: 'Classic fried rice with scrambled eggs',
    price: 181,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice-nonveg'
  },
  {
    id: 'rice-nonveg-2',
    name: 'Chicken Fried Rice',
    description: 'Fried rice with tender chicken pieces',
    price: 215,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop',
    category: 'rice-nonveg',
    isPopular: true
  },
  {
    id: 'rice-nonveg-3',
    name: 'Chicken Schezwan Fried Rice',
    description: 'Spicy Schezwan rice with chicken',
    price: 232,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&h=300&fit=crop',
    category: 'rice-nonveg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'rice-nonveg-4',
    name: 'Chicken Singapore Fried Rice',
    description: 'Rice with chicken and curry powder',
    price: 243,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
    category: 'rice-nonveg'
  },
  {
    id: 'rice-nonveg-5',
    name: 'Mix Fried Rice',
    description: 'Egg, Chicken and Prawn combination',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1596560548464-f010549b84d7?w=400&h=300&fit=crop',
    category: 'rice-nonveg',
    isPopular: true
  },
  {
    id: 'rice-nonveg-6',
    name: 'Prawn Fried Rice',
    description: 'Fried rice with fresh prawns',
    price: 288,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400&h=300&fit=crop',
    category: 'rice-nonveg'
  },
  {
    id: 'rice-nonveg-7',
    name: 'Taste of China Special Fried Rice',
    description: 'Our signature fried rice with mix proteins',
    price: 282,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=300&fit=crop',
    category: 'rice-nonveg',
    isPopular: true
  },

  // Veg Hakka Noodles
  {
    id: 'noodles-veg-1',
    name: 'Veg Hakka Noodles',
    description: 'Stir-fried noodles with vegetables',
    price: 176,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    category: 'noodles-veg',
    isPopular: true
  },
  {
    id: 'noodles-veg-2',
    name: 'Veg Schezwan Noodles',
    description: 'Spicy Schezwan style noodles',
    price: 192,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1630851376320-36a96c6c3917?w=400&h=300&fit=crop',
    category: 'noodles-veg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'noodles-veg-3',
    name: 'Veg Singapore Noodles',
    description: 'Noodles with curry powder',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
    category: 'noodles-veg'
  },
  {
    id: 'noodles-veg-4',
    name: 'Veg Mix Noodles',
    description: 'Mixed vegetables in special sauce',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'noodles-veg'
  },
  {
    id: 'noodles-veg-5',
    name: 'Paneer Noodles',
    description: 'Noodles with cottage cheese',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?w=400&h=300&fit=crop',
    category: 'noodles-veg'
  },
  {
    id: 'noodles-veg-6',
    name: 'Mushroom Noodles',
    description: 'Noodles with fresh mushrooms',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1611171711912-e0682ef43488?w=400&h=300&fit=crop',
    category: 'noodles-veg'
  },

  // Non-Veg Hakka Noodles
  {
    id: 'noodles-nonveg-1',
    name: 'Egg Noodles',
    description: 'Noodles with scrambled eggs',
    price: 192,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    category: 'noodles-nonveg'
  },
  {
    id: 'noodles-nonveg-2',
    name: 'Chicken Hakka Noodles',
    description: 'Noodles with tender chicken',
    price: 226,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'noodles-nonveg',
    isPopular: true
  },
  {
    id: 'noodles-nonveg-3',
    name: 'Chicken Schezwan Noodles',
    description: 'Spicy Schezwan noodles with chicken',
    price: 243,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1630851376320-36a96c6c3917?w=400&h=300&fit=crop',
    category: 'noodles-nonveg',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'noodles-nonveg-4',
    name: 'Chicken Singapore Noodles',
    description: 'Noodles with chicken and curry',
    price: 254,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?w=400&h=300&fit=crop',
    category: 'noodles-nonveg'
  },
  {
    id: 'noodles-nonveg-5',
    name: 'Mix Hakka Noodles',
    description: 'Egg, Chicken and Prawn combination',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'noodles-nonveg',
    isPopular: true
  },
  {
    id: 'noodles-nonveg-6',
    name: 'Prawn Noodles',
    description: 'Noodles with fresh prawns',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',
    category: 'noodles-nonveg'
  },
  {
    id: 'noodles-nonveg-7',
    name: 'Taste of China Special Noodles',
    description: 'Our signature noodles with mix proteins',
    price: 282,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'noodles-nonveg',
    isPopular: true
  },

  // E-Fu Noodles
  {
    id: 'noodles-efu-1',
    name: 'Veg E-Fu Noodles',
    description: 'Soft egg noodles with vegetables',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'noodles-efu'
  },
  {
    id: 'noodles-efu-2',
    name: 'Chicken E-Fu Noodles',
    description: 'Soft egg noodles with chicken',
    price: 265,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'noodles-efu',
    isPopular: true
  },
  {
    id: 'noodles-efu-3',
    name: 'Prawn E-Fu Noodles',
    description: 'Soft egg noodles with prawns',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1565680018434-b513d5e5fd47?w=400&h=300&fit=crop',
    category: 'noodles-efu'
  },
  {
    id: 'noodles-efu-4',
    name: 'Mix E-Fu Noodles',
    description: 'Soft egg noodles with mix proteins',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'noodles-efu'
  },

  // Rice Noodles
  {
    id: 'noodles-rice-1',
    name: 'Veg Burnt Garlic Rice Noodles',
    description: 'Rice noodles with burnt garlic flavor',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'noodles-rice'
  },
  {
    id: 'noodles-rice-2',
    name: 'Chicken Burnt Garlic Rice Noodles',
    description: 'Rice noodles with chicken and burnt garlic',
    price: 265,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'noodles-rice',
    isPopular: true
  },
  {
    id: 'noodles-rice-3',
    name: 'Mix Burnt Garlic Rice Noodles',
    description: 'Rice noodles with mix proteins and burnt garlic',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop',
    category: 'noodles-rice'
  },

  // Pan Fried Noodles
  {
    id: 'noodles-panfried-1',
    name: 'Veg Pan Fried Noodles',
    description: 'Crispy pan-fried noodles with vegetables in gravy',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'noodles-panfried'
  },
  {
    id: 'noodles-panfried-2',
    name: 'Chicken Pan Fried Noodles',
    description: 'Crispy pan-fried noodles with chicken in gravy',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'noodles-panfried',
    isPopular: true
  },
  {
    id: 'noodles-panfried-3',
    name: 'Mix Pan Fried Noodles',
    description: 'Crispy pan-fried noodles with mix proteins in gravy',
    price: 321,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1585032226651-759b368d7246?w=400&h=300&fit=crop',
    category: 'noodles-panfried'
  },

  // American & Chinese Choupsey
  {
    id: 'choupsey-1',
    name: 'Veg American Choupsey',
    description: 'Crispy noodles topped with vegetable gravy',
    price: 215,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    category: 'choupsey'
  },
  {
    id: 'choupsey-2',
    name: 'Chicken American Choupsey',
    description: 'Crispy noodles topped with chicken gravy',
    price: 265,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'choupsey',
    isPopular: true
  },
  {
    id: 'choupsey-3',
    name: 'Mix American Choupsey',
    description: 'Crispy noodles topped with mix protein gravy',
    price: 310,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'choupsey'
  },
  {
    id: 'choupsey-4',
    name: 'Veg Chinese Choupsey',
    description: 'Soft noodles with vegetable gravy',
    price: 203,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?w=400&h=300&fit=crop',
    category: 'choupsey'
  },
  {
    id: 'choupsey-5',
    name: 'Chicken Chinese Choupsey',
    description: 'Soft noodles with chicken gravy',
    price: 254,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1612929633738-8fe44f7ec841?w=400&h=300&fit=crop',
    category: 'choupsey',
    isPopular: true
  },
  {
    id: 'choupsey-6',
    name: 'Mix Chinese Choupsey',
    description: 'Soft noodles with mix protein gravy',
    price: 299,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=300&fit=crop',
    category: 'choupsey'
  },

  // Thai Specialities
  {
    id: 'thai-1',
    name: 'Veg Thai Red Curry',
    description: 'Vegetables in authentic Thai red curry',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true
  },
  {
    id: 'thai-2',
    name: 'Chicken Thai Red Curry',
    description: 'Chicken in authentic Thai red curry',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908554685-d37e149d9e3b?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'thai-3',
    name: 'Prawn Thai Red Curry',
    description: 'Prawns in authentic Thai red curry',
    price: 321,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908554685-d37e149d9e3b?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true
  },
  {
    id: 'thai-4',
    name: 'Veg Thai Green Curry',
    description: 'Vegetables in authentic Thai green curry',
    price: 226,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true
  },
  {
    id: 'thai-5',
    name: 'Chicken Thai Green Curry',
    description: 'Chicken in authentic Thai green curry',
    price: 277,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908554685-d37e149d9e3b?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true,
    isPopular: true
  },
  {
    id: 'thai-6',
    name: 'Prawn Thai Green Curry',
    description: 'Prawns in authentic Thai green curry',
    price: 321,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1604908554685-d37e149d9e3b?w=400&h=300&fit=crop',
    category: 'thai',
    isSpicy: true
  },

  // Healthy Food Options
  {
    id: 'healthy-1',
    name: 'Steamed Vegetable with Oyster Sauce',
    description: 'Fresh steamed vegetables with light oyster sauce',
    price: 192,
    isVeg: true,
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop',
    category: 'healthy'
  },
  {
    id: 'healthy-2',
    name: 'Steamed Chicken with Vegetables',
    description: 'Healthy steamed chicken with fresh vegetables',
    price: 243,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=400&h=300&fit=crop',
    category: 'healthy',
    isPopular: true
  },
  {
    id: 'healthy-3',
    name: 'Steamed Fish with Vegetables',
    description: 'Healthy steamed fish with fresh vegetables',
    price: 288,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=400&h=300&fit=crop',
    category: 'healthy'
  },
  {
    id: 'healthy-4',
    name: 'Steamed Prawns with Vegetables',
    description: 'Healthy steamed prawns with fresh vegetables',
    price: 332,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1633237308525-cd587cf71926?w=400&h=300&fit=crop',
    category: 'healthy'
  },
  {
    id: 'healthy-5',
    name: 'Grilled Chicken Salad',
    description: 'Fresh salad with grilled chicken',
    price: 254,
    isVeg: false,
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?w=400&h=300&fit=crop',
    category: 'healthy',
    isPopular: true
  },
];
