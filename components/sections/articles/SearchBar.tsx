import { Search } from "lucide-react";

import { buttonVariants } from "@/components/ui/Button";
import { articlesContent } from "@/constants/articles";
import { cn } from "@/lib/utils";

export function SearchBar() {
  const { search } = articlesContent;

  return (
    <form
      role="search"
      aria-label="Pencarian artikel"
      className="flex flex-col gap-3 rounded-xl border border-border bg-surface p-3 shadow-card sm:flex-row"
    >
      <label className="sr-only" htmlFor="article-search">
        {search.label}
      </label>
      <div className="relative min-w-0 flex-1">
        <Search
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <input
          id="article-search"
          name="q"
          type="search"
          placeholder={search.placeholder}
          className="h-11 w-full rounded-lg border border-border bg-background pr-4 pl-10 text-sm text-foreground transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/20 focus:outline-none"
        />
      </div>
      <button
        type="button"
        className={cn(buttonVariants({ variant: "primary", size: "md" }))}
      >
        {search.buttonLabel}
      </button>
    </form>
  );
}
