import { Star } from 'lucide-react';

export default function RatingStars({ rating, reviews }) {
  return (
    <div className="flex items-center gap-2" aria-label={`${rating} out of 5 stars from ${reviews} reviews`}>
      <div className="flex text-amazon-gold">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star
            key={index}
            className={`h-4 w-4 ${index < Math.round(rating) ? 'fill-current' : 'fill-none text-slate-300 dark:text-slate-600'}`}
          />
        ))}
      </div>
      <span className="text-xs text-slate-500 dark:text-slate-400">({reviews.toLocaleString()})</span>
    </div>
  );
}
