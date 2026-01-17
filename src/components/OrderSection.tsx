import { ExternalLink } from 'lucide-react';

const OrderSection = () => {
  return (
    <section id="order" className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title text-foreground mb-4">
            Order <span className="text-secondary glow-text-gold">Online</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Craving our delicious Chinese cuisine? Order now through your favorite delivery platform!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          {/* Zomato */}
          <a
            href="https://www.zomato.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-64 glass-card p-6 text-center card-hover"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[#E23744] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">Z</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Zomato</h3>
            <p className="text-sm text-muted-foreground mb-4">Order for delivery or pickup</p>
            <div className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
              <span className="text-sm font-medium">Order Now</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>

          {/* Swiggy */}
          <a
            href="https://www.swiggy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-64 glass-card p-6 text-center card-hover"
          >
            <div className="w-16 h-16 mx-auto mb-4 bg-[#FC8019] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl font-bold text-white">S</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Swiggy</h3>
            <p className="text-sm text-muted-foreground mb-4">Fast delivery to your doorstep</p>
            <div className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors">
              <span className="text-sm font-medium">Order Now</span>
              <ExternalLink className="w-4 h-4" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
