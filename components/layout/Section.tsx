import { cva, type VariantProps } from "class-variance-authority";
import { type ComponentPropsWithoutRef, type ElementType } from "react";

import { Container } from "@/components/ui/Container";
import { cn } from "@/lib/utils";
import type { SectionSpacing } from "@/constants/spacing";

const sectionSpacingMap: Record<SectionSpacing, string> = {
  sm: "section-space-sm",
  md: "section-space-md",
  lg: "section-space-lg",
  xl: "section-space-xl",
};

export type SectionProps = ComponentPropsWithoutRef<"section"> & {
  spacing?: SectionSpacing;
  /** Wrap children in the design-system Container. */
  contained?: boolean;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  as?: ElementType;
};

/**
 * Page section with consistent vertical rhythm.
 */
export function Section({
  className,
  spacing = "lg",
  contained = true,
  containerSize = "lg",
  as: Comp = "section",
  children,
  ...props
}: SectionProps) {
  const content = contained ? (
    <Container size={containerSize}>{children}</Container>
  ) : (
    children
  );

  return (
    <Comp
      className={cn("w-full", sectionSpacingMap[spacing], className)}
      {...props}
    >
      {content}
    </Comp>
  );
}

const gridVariants = cva("grid w-full", {
  variants: {
    cols: {
      1: "grid-cols-1",
      2: "grid-cols-1 sm:grid-cols-2",
      3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
      4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    },
    gap: {
      sm: "gap-4",
      md: "gap-6",
      lg: "gap-8",
      xl: "gap-10",
    },
  },
  defaultVariants: {
    cols: 3,
    gap: "md",
  },
});

export type GridProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof gridVariants>;

export function Grid({ className, cols, gap, children, ...props }: GridProps) {
  return (
    <div className={cn(gridVariants({ cols, gap }), className)} {...props}>
      {children}
    </div>
  );
}

const flexVariants = cva("flex", {
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
      "row-reverse": "flex-row-reverse",
      "col-reverse": "flex-col-reverse",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
      baseline: "items-baseline",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
    },
    wrap: {
      true: "flex-wrap",
      false: "flex-nowrap",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
  },
  defaultVariants: {
    direction: "row",
    align: "stretch",
    justify: "start",
    wrap: false,
    gap: "md",
  },
});

export type FlexProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof flexVariants>;

export function Flex({
  className,
  direction,
  align,
  justify,
  wrap,
  gap,
  children,
  ...props
}: FlexProps) {
  return (
    <div
      className={cn(
        flexVariants({ direction, align, justify, wrap, gap }),
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

const stackVariants = cva("flex flex-col", {
  variants: {
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-6",
      xl: "gap-8",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      stretch: "items-stretch",
    },
  },
  defaultVariants: {
    gap: "md",
    align: "stretch",
  },
});

export type StackProps = ComponentPropsWithoutRef<"div"> &
  VariantProps<typeof stackVariants>;

/**
 * Vertical stack with consistent gap tokens.
 */
export function Stack({
  className,
  gap,
  align,
  children,
  ...props
}: StackProps) {
  return (
    <div className={cn(stackVariants({ gap, align }), className)} {...props}>
      {children}
    </div>
  );
}

export { flexVariants, gridVariants, stackVariants };
