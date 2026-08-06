import { cva, type VariantProps } from "class-variance-authority";
import { forwardRef, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const cardVariants = cva(
  [
    "rounded-xl border border-border bg-surface text-surface-foreground",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        default: "shadow-card",
        elevated: "shadow-md",
        outline: "shadow-none",
        ghost: "border-transparent bg-transparent shadow-none",
      },
      padding: {
        none: "p-0",
        sm: "card-padding-sm",
        md: "card-padding-md",
        lg: "card-padding-lg",
      },
      interactive: {
        true: "hover:shadow-card-hover hover:border-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        false: "",
      },
    },
    defaultVariants: {
      variant: "default",
      padding: "md",
      interactive: false,
    },
  },
);

export type CardProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof cardVariants>;

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, interactive, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardVariants({ variant, padding, interactive }),
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

export function CardHeader({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)} {...props}>
      {children}
    </div>
  );
}

export function CardContent({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-[var(--card-gap)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mt-auto flex items-center gap-3 pt-4", className)}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardMedia({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "relative aspect-[4/3] w-full overflow-hidden rounded-t-xl bg-muted",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

/* ---------- Domain card bases (structure only, no content) ---------- */

type CardBaseProps = CardProps & {
  media?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
};

function CardBase({
  media,
  header,
  footer,
  children,
  padding = "none",
  className,
  ...props
}: CardBaseProps) {
  return (
    <Card
      padding={padding}
      className={cn("flex h-full flex-col overflow-hidden", className)}
      {...props}
    >
      {media}
      <div className="card-padding-md flex flex-1 flex-col">
        {header}
        {children}
        {footer}
      </div>
    </Card>
  );
}

/** Default surface card for general content blocks. */
export function DefaultCard(props: CardProps) {
  return <Card variant="default" {...props} />;
}

/** Base shell for service offering cards. */
export function ServiceCard({ className, ...props }: CardBaseProps) {
  return <CardBase interactive className={cn("group", className)} {...props} />;
}

/** Base shell for medical team / doctor cards. */
export function DoctorCard({ className, ...props }: CardBaseProps) {
  return (
    <CardBase
      interactive
      className={cn("group text-center", className)}
      {...props}
    />
  );
}

/** Base shell for gallery preview cards. */
export function GalleryCard({
  className,
  media,
  children,
  ...props
}: CardBaseProps) {
  return (
    <Card
      padding="none"
      interactive
      className={cn("group overflow-hidden", className)}
      {...props}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        {media}
      </div>
      {children ? <div className="card-padding-sm">{children}</div> : null}
    </Card>
  );
}

/** Base shell for testimonial cards. */
export function TestimonialCard({ className, ...props }: CardBaseProps) {
  return (
    <CardBase
      variant="elevated"
      className={cn("group", className)}
      {...props}
    />
  );
}

export { cardVariants };
