import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { articlesContent } from "@/constants/articles";
import { cn } from "@/lib/utils";

export function Pagination() {
  const { pagination } = articlesContent;

  return (
    <nav
      className="mt-10 flex items-center justify-center gap-2"
      aria-label="Pagination artikel"
    >
      <Link
        href="/articles"
        aria-label={pagination.previousLabel}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <ChevronLeft className="size-4" aria-hidden />
      </Link>

      {pagination.items.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          aria-current={item.active ? "page" : undefined}
          className={cn(
            "inline-flex size-10 items-center justify-center rounded-lg border font-heading text-sm font-semibold transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
            item.active
              ? "border-primary bg-primary text-primary-foreground"
              : "border-border bg-surface text-muted-foreground hover:border-primary/40 hover:text-foreground",
          )}
        >
          {item.label}
        </Link>
      ))}

      <Link
        href="/articles?page=2"
        aria-label={pagination.nextLabel}
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
      >
        <ChevronRight className="size-4" aria-hidden />
      </Link>
    </nav>
  );
}
