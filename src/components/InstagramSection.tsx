import { Instagram, ExternalLink } from 'lucide-react';

const InstagramSection = () => {
  // Recent posts preview images representing the restaurant's content
  const instagramPosts = [
    "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=300&h=300&fit=crop",
    "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=300&h=300&fit=crop",
  ];

  const instagramHandle = "tasteofchinalovers";
  const instagramUrl = `https://www.instagram.com/${instagramHandle}`;

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <Instagram className="w-8 h-8 text-primary" />
            <h2 className="section-title text-foreground mb-0">
              Follow <span className="text-primary glow-text-red">Us</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Stay connected with us on Instagram for the latest updates and mouth-watering food photos
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
          {instagramPosts.map((post, index) => (
            <a
              key={index}
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={post}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
          ))}
        </div>

        {/* Follow Button */}
        <div className="text-center">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 btn-primary-glow"
          >
            <Instagram className="w-5 h-5" />
            Follow @{instagramHandle}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramSection;
