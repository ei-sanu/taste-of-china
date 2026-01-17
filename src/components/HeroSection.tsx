import { ArrowRight, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/15 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full border border-primary/30 mb-8 fade-in-up">
            <Flame className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary-foreground">Authentic Chinese Cuisine</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 fade-in-up" style={{ animationDelay: '0.2s' }}>
            <span className="text-foreground">Taste of</span>
            <br />
            <span className="text-primary glow-text-red">China</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 fade-in-up" style={{ animationDelay: '0.4s' }}>
            Where Tradition Meets <span className="text-secondary">Innovation</span>
          </p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10 fade-in-up" style={{ animationDelay: '0.5s' }}>
            Experience the authentic flavors of Chinese cuisine in a futuristic ambiance. 
            Every dish tells a story of heritage, crafted with passion and precision.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Link to="/menu" className="btn-primary-glow flex items-center gap-2 text-lg">
              Explore Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="btn-gold-glow flex items-center gap-2 text-lg">
              Book a Table
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 max-w-xl mx-auto fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary">15+</div>
              <div className="text-sm text-muted-foreground">Years Legacy</div>
            </div>
            <div className="text-center border-x border-border">
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary">100+</div>
              <div className="text-sm text-muted-foreground">Dishes</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl md:text-4xl font-bold text-secondary">4.5★</div>
              <div className="text-sm text-muted-foreground">Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 fade-in-up" style={{ animationDelay: '1s' }}>
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
