import { Star } from 'lucide-react';

const platforms = [
    {
        name: "Google",
        rating: 4.4,
        reviews: "6.4K",
        logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png",
        priceRange: "₹200–600",
        bgColor: "bg-white",
        textColor: "text-gray-800"
    },
    {
        name: "Zomato",
        rating: 3.8,
        reviews: "742 Dining",
        deliveryRating: 4.4,
        deliveryReviews: "25.5K",
        logo: "https://cdn.worldvectorlogo.com/logos/zomato-1.svg",
        priceRange: "₹500 for two",
        bgColor: "bg-white",
        textColor: "text-[#E23744]"
    },
    {
        name: "Swiggy",
        rating: 4.6,
        reviews: "16K+",
        logo: "https://cdn.worldvectorlogo.com/logos/swiggy-1.svg",
        priceRange: "₹500 for two",
        bgColor: "bg-white",
        textColor: "text-[#FC8019]"
    }
];

const RatingsSection = () => {
    return (
        <section className="py-12 relative bg-gradient-to-b from-background/50 to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h3 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                        Trusted by <span className="text-secondary">Thousands</span>
                    </h3>
                    <p className="text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                        See what people are saying about us across platforms
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {platforms.map((platform) => (
                        <div
                            key={platform.name}
                            className="glass-card p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Logo */}
                            <div className={`${platform.bgColor} rounded-lg p-3 h-16 flex items-center justify-center mb-4 mx-auto max-w-[140px]`}>
                                <img
                                    src={platform.logo}
                                    alt={platform.name}
                                    className="max-h-10 w-auto object-contain"
                                />
                            </div>

                            {/* Rating */}
                            <div className="mb-3">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <span className={`text-3xl font-bold ${platform.textColor}`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                                        {platform.rating}
                                    </span>
                                    <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                                </div>
                                <p className="text-sm text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                                    {platform.reviews} ratings
                                </p>

                                {/* Zomato Delivery Rating */}
                                {platform.deliveryRating && (
                                    <div className="mt-2 pt-2 border-t border-border/50">
                                        <div className="flex items-center justify-center gap-2">
                                            <span className={`text-xl font-bold ${platform.textColor}`} style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                                                {platform.deliveryRating}
                                            </span>
                                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                        </div>
                                        <p className="text-xs text-muted-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                                            {platform.deliveryReviews} delivery ratings
                                        </p>
                                    </div>
                                )}
                            </div>

                            {/* Price Range */}
                            <div className="text-sm font-medium text-foreground" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", Roboto, sans-serif' }}>
                                {platform.priceRange}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RatingsSection;
