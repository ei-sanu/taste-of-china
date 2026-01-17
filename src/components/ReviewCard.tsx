import { Star } from 'lucide-react';

interface ReviewCardProps {
  name: string;
  rating: number;
  review: string;
  time: string;
  mealType?: string;
  priceRange?: string;
}

const ReviewCard = ({ name, rating, review, time, mealType, priceRange }: ReviewCardProps) => {
  return (
    <div className="glass-card p-6 min-w-[350px] max-w-[400px] flex-shrink-0 card-hover">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="font-semibold text-foreground">{name}</h4>
          <p className="text-xs text-muted-foreground">{time}</p>
        </div>
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              size={16}
              className={i < rating ? 'fill-secondary text-secondary' : 'text-muted-foreground'}
            />
          ))}
        </div>
      </div>
      
      {(mealType || priceRange) && (
        <div className="flex gap-2 mb-3 flex-wrap">
          {mealType && (
            <span className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-md">
              {mealType}
            </span>
          )}
          {priceRange && (
            <span className="px-2 py-1 bg-secondary/20 text-secondary text-xs rounded-md">
              {priceRange}
            </span>
          )}
        </div>
      )}
      
      <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
        {review}
      </p>
    </div>
  );
};

export default ReviewCard;
