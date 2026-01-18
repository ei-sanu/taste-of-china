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
          <p className="text-muted-foreground max-w-2xl mx-auto" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
            Craving our delicious Chinese cuisine? Order now through your favorite delivery platform!
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-2xl mx-auto">
          {/* Zomato */}
          <div className="group w-full sm:w-64 glass-card p-6 text-center card-hover">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3">
              <img
                src="https://cdn.worldvectorlogo.com/logos/zomato-1.svg"
                alt="Zomato"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Zomato</h3>
            <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
              Order for delivery or pickup
            </p>
            <a
              href="https://www.zomato.com/bhubaneswar/taste-of-china-bapuji-nagar-bhubaneshwar/order"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#E23744] hover:bg-[#E23744]/90 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
            >
              Order Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Swiggy */}
          <div className="group w-full sm:w-64 glass-card p-6 text-center card-hover">
            <div className="w-20 h-20 mx-auto mb-4 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 p-3">
              <img
                src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg"
                alt="Swiggy"
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="font-display text-xl font-bold text-foreground mb-2">Swiggy</h3>
            <p className="text-sm text-muted-foreground mb-4" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
              Fast delivery to your doorstep
            </p>
            <a
              href="https://www.swiggy.com/city/bhubaneswar/taste-of-china-bapuji-nagar-rest106216"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-[#FC8019] hover:bg-[#FC8019]/90 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl w-full"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
            >
              Order Now
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderSection;
