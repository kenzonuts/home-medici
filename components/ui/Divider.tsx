import { type HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export type DividerProps = HTMLAttributes<HTMLHRElement> & {
  orientation?: "horizontal" | "vertical";
  decorative?: boolean;
};

export function Divider({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}: DividerProps) {
  const isVertical = orientation === "vertical";

  return (
    <hr
      aria-orientation={orientation}
      aria-hidden={decorative || undefined}
      className={cn(
        "shrink-0 border-0 bg-border",
        isVertical ? "h-full w-px" : "h-px w-full",
        className,
      )}
      {...props}
    />
  );
}
