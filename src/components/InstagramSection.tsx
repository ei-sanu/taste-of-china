import { ExternalLink, Eye, Instagram, Sparkles } from "lucide-react";
import { useEffect, useRef, useState } from "react";


const instagramPosts = [
  { url: "https://www.instagram.com/reel/DTK5sMAAas8/", views: "5.2K", title: "Taste of CHINA" },
  { url: "https://www.instagram.com/reel/DTkUDDAAMnr/", views: "3.8K", title: "Signature Dish" },
  { url: "https://www.instagram.com/reel/DTHk6uXgkRo/", views: "4.5K", title: "Singapore Rice Noodles 🍳🍗" },
  { url: "https://www.instagram.com/reel/DSwYTD1kQII/", views: "6.1K", title: "Customer Favorite" },
];

const PostCard = ({ post }: { post: any }) => {
  // Extract post/reel ID from URL for embed
  const getPostId = (url: string) => {
    const reelMatch = url.match(/reel\/([^/?]+)/);
    const postMatch = url.match(/\/p\/([^/?]+)/);
    return reelMatch ? reelMatch[1] : postMatch ? postMatch[1] : null;
  };

  const postId = getPostId(post.url);
  const isReel = post.url.includes('/reel/');

  return (
    <div className="w-full h-[400px]">
      <div className="bg-card tech-border rounded-xl overflow-hidden transition-shadow duration-300 hover:tech-glow hover:shadow-xl hover:ring-2 hover:ring-primary/40 h-full group">
        {/* Instagram Embed Preview */}
        <div className="relative h-[320px] overflow-hidden bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20">
          {postId ? (
            <iframe
              src={`https://www.instagram.com/${isReel ? 'reel' : 'p'}/${postId}/embed`}
              className="w-full h-full"
              frameBorder="0"
              scrolling="no"
              allowTransparency={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <Instagram className="w-16 h-16 text-primary/40" />
            </div>
          )}
        </div>

        {/* Stats Section */}
        <div className="p-4 bg-card/50 backdrop-blur-sm h-[80px]">
          {post.title && (
            <h4 className="text-sm text-foreground mb-2 font-semibold truncate" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
              {post.title}
            </h4>
          )}
          <div className="flex items-center justify-between gap-4">
            {post.views && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Eye className="w-4 h-4 text-primary" />
                <span className="text-xs font-medium" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>{post.views}</span>
              </div>
            )}
            <a
              href={post.url || "https://www.instagram.com/tasteofchinalovers"}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-3 py-1 text-xs font-medium text-white bg-primary hover:bg-primary/90 rounded-md transition-colors duration-200"
              style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
            >
              VIEW POST
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-12 h-12 opacity-20 transition-opacity duration-300 group-hover:opacity-40">
          <svg viewBox="0 0 64 64">
            <path
              d="M64 0 L48 0 Q32 0 32 16 L32 32 Q32 48 16 48 L0 48"
              fill="none"
              stroke="hsl(25, 95%, 55%)"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

const InstagramSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const instagramUrl = "https://www.instagram.com/tasteofchinalovers";

  return (
    <section ref={sectionRef} className="py-12 md:py-16 relative bg-gradient-to-b from-background to-background/50 overflow-hidden" id="instagram">
      {/* Subtle section divider glow */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className={`text-center mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <div className="flex items-center justify-center gap-2 mb-4">
            <Instagram className="w-6 h-6 text-primary" />
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
              Follow Our <span className="text-secondary">Journey</span>
            </h2>
            <Instagram className="w-6 h-6 text-primary" />
          </div>
          <p className="text-muted-foreground tracking-wider" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
            Experience the Authentic Flavors of Taste of China
          </p>
        </div>
      </div>

      {/* Instagram Posts Grid - Centered */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {instagramPosts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      </div>

      {/* Follow CTA */}
      <div className={`text-center mt-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: "400ms" }}>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 hover:from-red-500 hover:via-orange-500 hover:to-yellow-500 text-white rounded-lg shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
          style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}
        >
          <Instagram className="w-5 h-5" />
          Follow @tasteofchinalovers
          <Sparkles className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default InstagramSection;
