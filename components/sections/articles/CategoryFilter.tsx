import type { ArticleCategory } from "@/constants/articles";
import { cn } from "@/lib/utils";

export type CategoryFilterProps = {
  categories: readonly ArticleCategory[];
  activeCategory?: ArticleCategory["id"];
};

export function CategoryFilter({
  categories,
  activeCategory = "all",
}: CategoryFilterProps) {
  return (
    <div
      className="flex flex-wrap justify-center gap-2"
      role="tablist"
      aria-label="Filter kategori artikel"
    >
      {categories.map((category) => {
        const isActive = category.id === activeCategory;

        return (
          <button
            key={category.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            className={cn(
              "min-h-10 rounded-lg border px-4 py-2 font-heading text-sm font-semibold transition-all duration-200",
              "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:outline-none",
              isActive
                ? "border-primary bg-primary text-primary-foreground shadow-sm"
                : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {category.label}
          </button>
        );
      })}
    </div>
  );
}
