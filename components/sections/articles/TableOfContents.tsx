import type { TocItem } from "@/constants/articles";
import { cn } from "@/lib/utils";

export type TableOfContentsProps = {
  items: readonly TocItem[];
  variant?: "mobile" | "desktop" | "both";
};

function TocLinks({ items }: TableOfContentsProps) {
  return (
    <ol className="space-y-2">
      {items.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={cn(
              "block rounded-md px-2 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
              item.level === 3 && "pl-5",
            )}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  );
}

export function TableOfContents({
  items,
  variant = "both",
}: TableOfContentsProps) {
  if (items.length === 0) return null;

  return (
    <>
      {variant === "mobile" || variant === "both" ? (
        <details className="mb-8 rounded-xl border border-border bg-surface p-4 shadow-card lg:hidden">
          <summary className="cursor-pointer font-heading text-sm font-semibold text-foreground">
            Table of Contents
          </summary>
          <div className="mt-3">
            <TocLinks items={items} />
          </div>
        </details>
      ) : null}

      {variant === "desktop" || variant === "both" ? (
        <aside className="sticky top-24 hidden rounded-xl border border-border bg-surface p-4 shadow-card lg:block">
          <h2 className="mb-3 font-heading text-sm font-semibold text-foreground">
            Table of Contents
          </h2>
          <TocLinks items={items} />
        </aside>
      ) : null}
    </>
  );
}
