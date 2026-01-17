import HeroSection from '@/components/HeroSection';
import FeaturedDishes from '@/components/FeaturedDishes';
import ReviewsMarquee from '@/components/ReviewsMarquee';
import OrderSection from '@/components/OrderSection';
import LocationSection from '@/components/LocationSection';
import InstagramSection from '@/components/InstagramSection';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedDishes />
      <ReviewsMarquee />
      <OrderSection />
      <InstagramSection />
      <LocationSection />
    </main>
  );
};

export default Index;
