import { Info } from "lucide-react";

import { ArticlePlaceholderImage } from "@/components/sections/articles/ArticlePlaceholderImage";
import { HeadingMD, HeadingSM, Paragraph } from "@/components/ui/Typography";
import type { Article, ArticleContentBlock } from "@/constants/articles";

export type ArticleContentProps = {
  article: Article;
};

function renderBlock(block: ArticleContentBlock, index: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <HeadingMD
          key={block.id}
          id={block.id}
          as="h2"
          className="scroll-mt-24 pt-4"
        >
          {block.text}
        </HeadingMD>
      ) : (
        <HeadingSM
          key={block.id}
          id={block.id}
          as="h3"
          className="scroll-mt-24 pt-3"
        >
          {block.text}
        </HeadingSM>
      );
    case "paragraph":
      return <Paragraph key={index}>{block.text}</Paragraph>;
    case "list":
      return (
        <ul
          key={index}
          className="list-disc space-y-2 pl-6 text-muted-foreground"
        >
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote
          key={index}
          className="rounded-xl border-l-4 border-primary bg-primary/5 px-5 py-4 font-heading text-lg font-semibold text-foreground"
        >
          {block.text}
        </blockquote>
      );
    case "image":
      return (
        <figure key={index} className="space-y-3">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-muted">
            <ArticlePlaceholderImage
              label={block.label}
              sizes="(min-width: 1024px) 760px, 100vw"
            />
          </div>
          <figcaption className="text-center text-sm text-muted-foreground">
            {block.label}
          </figcaption>
        </figure>
      );
    case "table":
      return (
        <figure
          key={index}
          className="overflow-hidden rounded-xl border border-border"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse bg-surface text-left text-sm">
              <caption className="caption-bottom px-4 py-3 text-muted-foreground">
                {block.caption}
              </caption>
              <thead className="bg-muted text-foreground">
                <tr>
                  {block.headers.map((header) => (
                    <th
                      key={header}
                      scope="col"
                      className="px-4 py-3 font-heading font-semibold"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row) => (
                  <tr key={row.join("-")} className="border-t border-border">
                    {row.map((cell) => (
                      <td
                        key={cell}
                        className="px-4 py-3 text-muted-foreground"
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </figure>
      );
    case "callout":
      return (
        <aside
          key={index}
          className="rounded-xl border border-primary/20 bg-primary/5 p-5"
        >
          <div className="mb-2 flex items-center gap-2 font-heading font-semibold text-foreground">
            <Info className="size-5 text-primary" aria-hidden />
            {block.title}
          </div>
          <Paragraph>{block.text}</Paragraph>
        </aside>
      );
    default:
      return null;
  }
}

export function ArticleContent({ article }: ArticleContentProps) {
  return (
    <article className="prose-article flex flex-col gap-6">
      {article.content.map((block, index) => renderBlock(block, index))}
    </article>
  );
}
