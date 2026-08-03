import { ImageIcon } from "lucide-react";
import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type ImagePlaceholderProps = HTMLAttributes<HTMLDivElement> & {
  label: string;
  aspect?: "square" | "video" | "portrait" | "wide" | "hero" | "none";
};

const aspectMap = {
  none: "",
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[3/4]",
  wide: "aspect-[16/10]",
  hero: "aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/3]",
} as const;

/**
 * Accessible media placeholder until real assets are available.
 */
export function ImagePlaceholder({
  label,
  aspect = "video",
  className,
  ...props
}: ImagePlaceholderProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={cn(
        "relative flex w-full items-center justify-center overflow-hidden bg-gradient-to-br from-muted via-surface to-accent/20 text-muted-foreground",
        aspectMap[aspect],
        className,
      )}
      {...props}
    >
      <div className="flex flex-col items-center gap-2 p-4 text-center">
        <ImageIcon className="size-8 opacity-50" aria-hidden />
        <span className="text-xs font-medium tracking-wide uppercase opacity-70">
          {label}
        </span>
      </div>
    </div>
  );
}
