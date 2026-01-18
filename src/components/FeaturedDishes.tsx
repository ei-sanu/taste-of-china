import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const featuredDishes = [
  {
    name: "Dragon Chicken",
    description: "Crispy chicken tossed in spicy dragon sauce with bell peppers",
    price: "₹299",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=400&h=300&fit=crop"
  },
  {
    name: "Taste of China Special",
    description: "Our signature fried rice with mix proteins - Egg, Chicken & Prawn",
    price: "₹282",
    isVeg: false,
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&h=300&fit=crop"
  },
  {
    name: "Veg Hakka Noodles",
    description: "Stir-fried noodles with fresh vegetables in soy sauce",
    price: "₹176",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400&h=300&fit=crop"
  },
  {
    name: "Veg Steamed Momos",
    description: "6 Pieces - Freshly steamed dumplings filled with vegetables",
    price: "₹153",
    isVeg: true,
    image: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&h=300&fit=crop"
  }
];

const FeaturedDishes = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Signature <span className="text-primary glow-text-red">Dishes</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our chef's special creations that have won the hearts of thousands
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.name}
              className="glass-card overflow-hidden card-hover group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />

                {/* Veg/Non-veg Mark */}
                <div className="absolute top-3 left-3">
                  <div className={dish.isVeg ? 'veg-mark' : 'non-veg-mark'} />
                </div>

                {/* Price Tag */}
                <div className="absolute top-3 right-3 px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-bold">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {dish.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {dish.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/menu"
            className="inline-flex items-center gap-2 btn-primary-glow"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDishes;
