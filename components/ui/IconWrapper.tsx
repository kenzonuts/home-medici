import { cva, type VariantProps } from "class-variance-authority";
import { type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const iconWrapperVariants = cva(
  [
    "inline-flex shrink-0 items-center justify-center",
    "transition-colors duration-200",
  ],
  {
    variants: {
      variant: {
        primary: "bg-primary/10 text-primary",
        secondary: "bg-secondary/10 text-secondary",
        accent: "bg-accent/15 text-primary",
        muted: "bg-muted text-muted-foreground",
        surface: "bg-surface text-foreground shadow-sm border border-border",
        solid: "bg-primary text-primary-foreground shadow-sm",
      },
      size: {
        sm: "size-8 rounded-md [&_svg]:size-4",
        md: "size-10 rounded-lg [&_svg]:size-5",
        lg: "size-12 rounded-xl [&_svg]:size-6",
        xl: "size-14 rounded-2xl [&_svg]:size-7",
      },
      rounded: {
        md: "rounded-md",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export type IconWrapperProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof iconWrapperVariants> & {
    children: ReactNode;
    label?: string;
  };

/**
 * Standardizes icon presentation: size, padding, radius, background, color.
 */
export function IconWrapper({
  className,
  variant,
  size,
  rounded,
  children,
  label,
  ...props
}: IconWrapperProps) {
  return (
    <span
      className={cn(iconWrapperVariants({ variant, size, rounded }), className)}
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      {...props}
    >
      {children}
    </span>
  );
}

export { iconWrapperVariants };
