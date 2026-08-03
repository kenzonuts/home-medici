import { type ComponentPropsWithoutRef } from "react";

import { cn } from "@/lib/utils";

export type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

const sizeMap: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-[var(--container-max)]",
  xl: "max-w-7xl",
  full: "max-w-none",
};

export type ContainerProps = ComponentPropsWithoutRef<"div"> & {
  size?: ContainerSize;
  /** Remove horizontal padding (for nested / full-bleed contexts). */
  flush?: boolean;
};

/**
 * Responsive content container driven by design tokens.
 */
export function Container({
  className,
  size = "lg",
  flush = false,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full",
        sizeMap[size],
        !flush && "px-[var(--container-padding)] sm:px-6 lg:px-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
