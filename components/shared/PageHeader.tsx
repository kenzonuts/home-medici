import { FadeUp } from "@/components/animations";
import { Breadcrumb } from "@/components/shared/Breadcrumb";
import { Container } from "@/components/ui/Container";
import { HeadingXL, Paragraph } from "@/components/ui/Typography";
import type { AboutBreadcrumb } from "@/constants/about";
import { cn } from "@/lib/utils";

export type PageHeaderProps = {
  title: string;
  description: string;
  breadcrumbs: readonly AboutBreadcrumb[];
  className?: string;
};

export function PageHeader({
  title,
  description,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <header
      className={cn(
        "relative overflow-hidden border-b border-border/70 bg-surface",
        className,
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgb(22_163_74_/_0.08),_transparent_50%),radial-gradient(ellipse_at_bottom_right,_rgb(14_165_233_/_0.08),_transparent_45%)]"
      />
      <Container className="relative flex flex-col gap-5 py-12 sm:py-16">
        <FadeUp>
          <Breadcrumb items={breadcrumbs} />
        </FadeUp>
        <FadeUp>
          <HeadingXL as="h1" className="max-w-3xl">
            {title}
          </HeadingXL>
        </FadeUp>
        <FadeUp>
          <Paragraph className="max-w-2xl text-base sm:text-lg">
            {description}
          </Paragraph>
        </FadeUp>
      </Container>
    </header>
  );
}
