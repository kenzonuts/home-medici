import { cva, type VariantProps } from "class-variance-authority";
import { type ElementType, type HTMLAttributes, type ReactNode } from "react";

import { cn } from "@/lib/utils";

const headingVariants = cva("font-heading text-foreground tracking-tight", {
  variants: {
    size: {
      xl: "text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl",
      lg: "text-3xl font-bold leading-tight sm:text-4xl",
      md: "text-2xl font-bold leading-snug sm:text-3xl",
      sm: "text-xl font-semibold leading-snug sm:text-2xl",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const bodyVariants = cva("font-body text-foreground", {
  variants: {
    size: {
      paragraph: "text-base leading-relaxed text-muted-foreground",
      caption: "text-sm leading-normal text-muted-foreground",
      label: "text-sm font-medium leading-none text-foreground tracking-wide",
      small: "text-xs leading-normal text-muted-foreground",
    },
  },
  defaultVariants: {
    size: "paragraph",
  },
});

type HeadingSize = NonNullable<VariantProps<typeof headingVariants>["size"]>;

const headingTagMap: Record<HeadingSize, ElementType> = {
  xl: "h1",
  lg: "h2",
  md: "h3",
  sm: "h4",
};

type HeadingProps = HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof headingVariants> & {
    as?: ElementType;
  };

export function Heading({
  className,
  size = "md",
  as,
  children,
  ...props
}: HeadingProps) {
  const resolvedSize = size ?? "md";
  const Comp = as ?? headingTagMap[resolvedSize];

  return (
    <Comp
      className={cn(headingVariants({ size: resolvedSize }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
}

export function HeadingXL(props: Omit<HeadingProps, "size">) {
  return <Heading size="xl" {...props} />;
}

export function HeadingLG(props: Omit<HeadingProps, "size">) {
  return <Heading size="lg" {...props} />;
}

export function HeadingMD(props: Omit<HeadingProps, "size">) {
  return <Heading size="md" {...props} />;
}

export function HeadingSM(props: Omit<HeadingProps, "size">) {
  return <Heading size="sm" {...props} />;
}

type BodyProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof bodyVariants> & {
    as?: ElementType;
  };

export function Text({
  className,
  size = "paragraph",
  as,
  children,
  ...props
}: BodyProps) {
  const Comp = as ?? (size === "label" ? "label" : "p");

  return (
    <Comp className={cn(bodyVariants({ size }), className)} {...props}>
      {children}
    </Comp>
  );
}

export function Paragraph(props: Omit<BodyProps, "size">) {
  return <Text size="paragraph" as="p" {...props} />;
}

export function Caption(props: Omit<BodyProps, "size">) {
  return <Text size="caption" as="p" {...props} />;
}

export function Label({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn(bodyVariants({ size: "label" }), className)}
      {...props}
    >
      {children}
    </label>
  );
}

export function SmallText(props: Omit<BodyProps, "size">) {
  return <Text size="small" as="span" {...props} />;
}

export type SectionTitleProps = HTMLAttributes<HTMLDivElement> & {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  titleAs?: ElementType;
};

/**
 * Consistent section heading block: optional eyebrow, title, description.
 */
export function SectionTitle({
  className,
  eyebrow,
  title,
  description,
  align = "left",
  titleAs,
  ...props
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "flex max-w-2xl flex-col gap-3",
        align === "center" && "mx-auto items-center text-center",
        className,
      )}
      {...props}
    >
      {eyebrow ? (
        <span className="font-heading text-sm font-semibold tracking-wide text-primary uppercase">
          {eyebrow}
        </span>
      ) : null}
      <HeadingLG as={titleAs}>{title}</HeadingLG>
      {description ? (
        <Paragraph className={cn(align === "center" && "mx-auto max-w-xl")}>
          {description}
        </Paragraph>
      ) : null}
    </div>
  );
}

export { bodyVariants, headingVariants };
