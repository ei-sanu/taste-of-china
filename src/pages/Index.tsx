import FeaturedDishes from '@/components/FeaturedDishes';
import HeroSection from '@/components/HeroSection';
import InstagramSection from '@/components/InstagramSection';
import LocationSection from '@/components/LocationSection';
import OrderSection from '@/components/OrderSection';
import RatingsSection from '@/components/RatingsSection';
import ReviewsMarquee from '@/components/ReviewsMarquee';

const Index = () => {
  return (
    <main>
      <HeroSection />
      <FeaturedDishes />
      <ReviewsMarquee />
      <RatingsSection />
      <OrderSection />
      <InstagramSection />
      <LocationSection />
    </main>
  );
};

export default Index;
