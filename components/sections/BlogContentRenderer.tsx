import type { ContentBlock } from "@/types";

function renderInlineFormatting(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-navy-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

interface BlogContentRendererProps {
  content: ContentBlock[];
}

export default function BlogContentRenderer({
  content,
}: BlogContentRendererProps) {
  return (
    <div className="space-y-6">
      {content.map((block, index) => {
        switch (block.type) {
          case "heading":
            if (block.level === 2) {
              return (
                <h2
                  key={index}
                  className="mt-10 font-display text-2xl text-navy-900 md:text-3xl"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <h3
                key={index}
                className="mt-8 font-display text-xl text-navy-900 md:text-2xl"
              >
                {block.text}
              </h3>
            );

          case "paragraph":
            return (
              <p key={index} className="text-lg leading-relaxed text-navy-700">
                {renderInlineFormatting(block.text)}
              </p>
            );

          case "list":
            if (block.style === "ordered") {
              return (
                <ol
                  key={index}
                  className="ml-6 list-decimal space-y-2 text-lg text-navy-700"
                >
                  {block.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{renderInlineFormatting(item)}</li>
                  ))}
                </ol>
              );
            }
            return (
              <ul
                key={index}
                className="ml-6 list-disc space-y-2 text-lg text-navy-700"
              >
                {block.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{renderInlineFormatting(item)}</li>
                ))}
              </ul>
            );

          case "callout":
            return (
              <div
                key={index}
                className="rounded-xl border-l-4 border-teal-500 bg-teal-50 px-6 py-5"
              >
                <p className="text-lg leading-relaxed text-navy-800">
                  {renderInlineFormatting(block.text)}
                </p>
              </div>
            );
        }
      })}
    </div>
  );
}
