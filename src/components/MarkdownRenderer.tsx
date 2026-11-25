import React from "react";

/** Parse inline markdown: **bold**, `code`, [links](url) */
const renderInline = (text: string): React.ReactNode[] => {
  const parts: React.ReactNode[] = [];
  // Regex: **bold**, `code`, [text](url)
  const regex = /(\*\*(.+?)\*\*)|(`([^`]+?)`)|(\[([^\]]+?)\]\(([^)]+?)\))/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    if (match[2]) {
      parts.push(<strong key={match.index} className="font-semibold text-foreground">{match[2]}</strong>);
    } else if (match[4]) {
      parts.push(
        <code key={match.index} className="rounded bg-muted px-1.5 py-0.5 text-sm font-mono text-primary">
          {match[4]}
        </code>
      );
    } else if (match[6] && match[7]) {
      parts.push(
        <a
          key={match.index}
          href={match[7]}
          target={match[7].startsWith("http") ? "_blank" : undefined}
          rel={match[7].startsWith("http") ? "noopener noreferrer" : undefined}
          className="text-primary underline underline-offset-2 hover:text-primary/80 transition-colors"
        >
          {match[6]}
        </a>
      );
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts;
};

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  const blocks = content.split("\n\n");

  return (
    <>
      {blocks.map((block, i) => {
        // Image
        const imgMatch = block.match(/^!\[([^\]]*)\]\(([^)]+)\)$/);
        if (imgMatch) {
          return (
            <figure key={i} className="my-8">
              <img
                src={imgMatch[2]}
                alt={imgMatch[1]}
                className="w-full rounded-xl object-cover"
                loading="lazy"
              />
              {imgMatch[1] && (
                <figcaption className="mt-2 text-center text-xs text-muted-foreground/70">
                  {imgMatch[1]}
                </figcaption>
              )}
            </figure>
          );
        }

        // Code block (``` ... ```)
        if (block.startsWith("```")) {
          const lines = block.split("\n");
          const lang = lines[0].replace("```", "").trim();
          const code = lines.slice(1).filter(l => l !== "```").join("\n");
          return (
            <pre
              key={i}
              className="my-4 overflow-x-auto rounded-lg bg-muted/50 border border-border p-4 text-sm font-mono text-foreground"
            >
              {lang && (
                <span className="mb-2 block text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  {lang}
                </span>
              )}
              <code>{code}</code>
            </pre>
          );
        }

        // H2
        if (block.startsWith("## ")) {
          return <h2 key={i} className="text-xl font-bold text-foreground pt-4">{renderInline(block.slice(3))}</h2>;
        }

        // H3
        if (block.startsWith("### ")) {
          return <h3 key={i} className="text-lg font-semibold text-foreground pt-2">{renderInline(block.slice(4))}</h3>;
        }

        // Bullet list (lines starting with - or *)
        const listLines = block.split("\n").filter(l => /^[-*]\s/.test(l.trim()));
        if (listLines.length > 0 && listLines.length === block.split("\n").filter(Boolean).length) {
          return (
            <ul key={i} className="my-2 list-disc space-y-1.5 pl-6 marker:text-primary">
              {listLines.map((line, j) => (
                <li key={j}>{renderInline(line.replace(/^[-*]\s+/, ""))}</li>
              ))}
            </ul>
          );
        }

        // Ordered list (lines starting with 1. 2. etc)
        const olLines = block.split("\n").filter(l => /^\d+\.\s/.test(l.trim()));
        if (olLines.length > 0 && olLines.length === block.split("\n").filter(Boolean).length) {
          return (
            <ol key={i} className="my-2 list-decimal space-y-1.5 pl-6 marker:text-primary">
              {olLines.map((line, j) => (
                <li key={j}>{renderInline(line.replace(/^\d+\.\s+/, ""))}</li>
              ))}
            </ol>
          );
        }

        // Blockquote
        if (block.startsWith("> ")) {
          const quote = block.split("\n").map(l => l.replace(/^>\s?/, "")).join(" ");
          return (
            <blockquote key={i} className="my-4 border-l-2 border-primary/40 pl-4 italic text-muted-foreground">
              {renderInline(quote)}
            </blockquote>
          );
        }

        // Horizontal rule
        if (/^---+$/.test(block.trim())) {
          return <hr key={i} className="my-8 border-border" />;
        }

        // Paragraph with inline formatting
        return <p key={i}>{renderInline(block)}</p>;
      })}
    </>
  );
};

export default MarkdownRenderer;
