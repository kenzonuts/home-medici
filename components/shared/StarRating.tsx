import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

export type StarRatingProps = {
  rating: number;
  max?: number;
  className?: string;
};

export function StarRating({ rating, max = 5, className }: StarRatingProps) {
  const safeRating = Math.max(0, Math.min(rating, max));

  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`Rating ${safeRating} dari ${max}`}
    >
      {Array.from({ length: max }, (_, index) => {
        const filled = index < safeRating;
        return (
          <Star
            key={index}
            className={cn(
              "size-4",
              filled
                ? "fill-amber-400 text-amber-400"
                : "fill-transparent text-border",
            )}
            aria-hidden
          />
        );
      })}
    </div>
  );
}
