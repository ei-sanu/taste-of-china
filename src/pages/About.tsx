import { Award, ChefHat, Heart, Users } from 'lucide-react';

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/15 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="section-title text-foreground mb-6 fade-in-up">
              Our <span className="text-secondary">Story</span>
            </h1>
            <p className="text-xl text-muted-foreground fade-in-up" style={{ animationDelay: '0.2s' }}>
              A journey of passion, tradition, and culinary excellence since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Where <span className="text-secondary">Tradition</span> Meets Innovation
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Taste of China was born from a simple yet profound vision: to bring the authentic
                flavors of Chinese cuisine to Bhubaneswar while creating a dining experience
                that transcends the ordinary.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2010, we started as a small family restaurant with big dreams.
                Our founder, inspired by the rich culinary traditions of China and the
                vibrant street food culture of Kolkata, set out to create dishes that
                would resonate with both traditionalists and modern food enthusiasts.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, with multiple outlets across Bhubaneswar, we continue to honor
                our commitment to quality, authenticity, and innovation. Every dish
                that leaves our kitchen carries the legacy of generations and the
                passion of our dedicated team.
              </p>
            </div>
            <div className="relative">
              <div className="glass-card p-4 border-glow-red">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop"
                  alt="Restaurant Interior"
                  className="rounded-lg w-full"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 glass-card p-4 border-glow-gold">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=200&h=200&fit=crop"
                  alt="Chef at work"
                  className="rounded-lg w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-foreground mb-12">
            Our <span className="text-primary glow-text-red">Values</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality First",
                description: "We source only the finest ingredients to ensure every dish meets our high standards."
              },
              {
                icon: ChefHat,
                title: "Expert Chefs",
                description: "Our team of experienced chefs brings decades of culinary expertise to your table."
              },
              {
                icon: Heart,
                title: "Made with Love",
                description: "Every dish is prepared with passion and care, just like home-cooked meals."
              },
              {
                icon: Users,
                title: "Customer Focus",
                description: "Your satisfaction is our priority. We listen, adapt, and serve with a smile."
              }
            ].map((value, index) => (
              <div
                key={value.title}
                className="glass-card p-6 text-center card-hover"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/20 rounded-xl flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="glass-card p-12 border-glow-gold">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "15+", label: "Years of Excellence" },
                { number: "100+", label: "Signature Dishes" },
                { number: "50K+", label: "Happy Customers" },
                { number: "4.5★", label: "Average Rating" }
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-4xl md:text-5xl font-bold text-secondary mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
