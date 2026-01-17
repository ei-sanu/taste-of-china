import { useState } from 'react';
import { Flame, Leaf } from 'lucide-react';
import { categories, menuItems, MenuItem } from '@/data/menuData';

const MenuItemCard = ({ item }: { item: MenuItem }) => {
  return (
    <div className="glass-card overflow-hidden card-hover group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <div className={item.isVeg ? 'veg-mark' : 'non-veg-mark'} />
          {item.isSpicy && (
            <div className="w-5 h-5 bg-red-500/80 rounded flex items-center justify-center" title="Spicy">
              <Flame className="w-3 h-3 text-white" />
            </div>
          )}
        </div>
        
        {/* Popular Badge */}
        {item.isPopular && (
          <div className="absolute top-3 right-3 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded">
            Popular
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-lg font-bold text-foreground">
            {item.name}
          </h3>
          <span className="text-secondary font-display font-bold text-lg">
            ₹{item.price}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2">
          {item.description}
        </p>
      </div>
    </div>
  );
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('appetizers');
  const [filter, setFilter] = useState<'all' | 'veg' | 'nonveg'>('all');

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch = item.category === activeCategory;
    const filterMatch =
      filter === 'all' ||
      (filter === 'veg' && item.isVeg) ||
      (filter === 'nonveg' && !item.isVeg);
    return categoryMatch && filterMatch;
  });

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <h1 className="section-title text-foreground mb-4 fade-in-up">
              Our <span className="text-primary glow-text-red">Menu</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto fade-in-up" style={{ animationDelay: '0.2s' }}>
              Explore our carefully curated selection of authentic Chinese dishes
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-30 bg-background/90 backdrop-blur-xl border-b border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2 lg:pb-0 w-full lg:w-auto scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/30'
                      : 'bg-muted text-muted-foreground hover:bg-muted/80'
                  }`}
                >
                  <span>{category.icon}</span>
                  <span className="text-sm font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* Veg/Non-veg Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === 'all'
                    ? 'bg-secondary text-secondary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setFilter('veg')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === 'veg'
                    ? 'bg-green-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <Leaf className="w-4 h-4" />
                Veg
              </button>
              <button
                onClick={() => setFilter('nonveg')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  filter === 'nonveg'
                    ? 'bg-red-600 text-white'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                <span className="w-4 h-4 border-2 border-current rounded-sm flex items-center justify-center">
                  <span className="w-2 h-2 bg-current rounded-full" />
                </span>
                Non-Veg
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Category Title */}
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground flex items-center gap-3">
              <span className="text-3xl">
                {categories.find((c) => c.id === activeCategory)?.icon}
              </span>
              {categories.find((c) => c.id === activeCategory)?.name}
              <span className="text-sm font-normal text-muted-foreground">
                ({filteredItems.length} items)
              </span>
            </h2>
          </div>

          {/* Items Grid */}
          {filteredItems.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={item.id}
                  className="fade-in-up"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <MenuItemCard item={item} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">
                No items found in this category with the selected filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Note */}
      <section className="py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground text-sm">
            * Prices are inclusive of all taxes. Menu items and prices are subject to change.
          </p>
        </div>
      </section>
    </main>
  );
};

export default Menu;
