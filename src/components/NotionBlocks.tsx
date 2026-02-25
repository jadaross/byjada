import type { NotionBlock, RichText } from "@/lib/notion";

function richText(items: RichText[]): React.ReactNode {
  return items.map((item, i) => {
    let node: React.ReactNode = item.plain_text;

    if (item.annotations.code)
      node = (
        <code
          key={i}
          className="bg-dark/8 text-rust text-sm px-1.5 py-0.5 rounded font-mono"
        >
          {node}
        </code>
      );
    if (item.annotations.bold)
      node = (
        <strong key={i} className="font-semibold text-dark">
          {node}
        </strong>
      );
    if (item.annotations.italic)
      node = (
        <em key={i} className="italic">
          {node}
        </em>
      );
    if (item.annotations.strikethrough)
      node = <s key={i}>{node}</s>;
    if (item.href)
      node = (
        <a
          key={i}
          href={item.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink underline underline-offset-2 hover:text-mauve transition-colors"
        >
          {node}
        </a>
      );

    return <span key={i}>{node}</span>;
  });
}

export default function NotionBlocks({ blocks }: { blocks: NotionBlock[] }) {
  const elements: React.ReactNode[] = [];
  let listBuffer: React.ReactNode[] = [];
  let listType: "ul" | "ol" | null = null;

  const flushList = () => {
    if (listBuffer.length === 0) return;
    const Tag = listType === "ol" ? "ol" : "ul";
    const cls =
      listType === "ol"
        ? "list-decimal list-inside space-y-1 text-dark/75"
        : "list-disc list-inside space-y-1 text-dark/75";
    elements.push(
      <Tag key={`list-${elements.length}`} className={cls}>
        {listBuffer}
      </Tag>
    );
    listBuffer = [];
    listType = null;
  };

  for (const block of blocks) {
    const isBulleted = block.type === "bulleted_list_item";
    const isNumbered = block.type === "numbered_list_item";

    if (!isBulleted && !isNumbered) flushList();

    switch (block.type) {
      case "paragraph": {
        const rt = block.paragraph.rich_text as RichText[];
        if (rt.length === 0) {
          elements.push(<div key={block.id} className="h-3" />);
        } else {
          elements.push(
            <p key={block.id} className="text-dark/75 leading-relaxed">
              {richText(rt)}
            </p>
          );
        }
        break;
      }

      case "heading_2":
        elements.push(
          <h2
            key={block.id}
            className="text-xl font-bold text-dark mt-2"
          >
            {richText(block.heading_2.rich_text as RichText[])}
          </h2>
        );
        break;

      case "heading_3":
        elements.push(
          <h3
            key={block.id}
            className="text-lg font-semibold text-dark mt-1"
          >
            {richText(block.heading_3.rich_text as RichText[])}
          </h3>
        );
        break;

      case "code": {
        const lang = block.code.language ?? "";
        const code = (block.code.rich_text as RichText[])
          .map((r) => r.plain_text)
          .join("");
        elements.push(
          <pre
            key={block.id}
            className="bg-dark/6 rounded-xl p-4 overflow-x-auto text-sm font-mono text-dark/80"
          >
            <code className={lang ? `language-${lang}` : ""}>{code}</code>
          </pre>
        );
        break;
      }

      case "quote":
        elements.push(
          <blockquote
            key={block.id}
            className="border-l-4 border-pink pl-4 italic text-dark/65"
          >
            {richText(block.quote.rich_text as RichText[])}
          </blockquote>
        );
        break;

      case "divider":
        elements.push(
          <hr key={block.id} className="border-dark/15 my-2" />
        );
        break;

      case "bulleted_list_item":
        listType = "ul";
        listBuffer.push(
          <li key={block.id}>
            {richText(block.bulleted_list_item.rich_text as RichText[])}
          </li>
        );
        break;

      case "numbered_list_item":
        listType = "ol";
        listBuffer.push(
          <li key={block.id}>
            {richText(block.numbered_list_item.rich_text as RichText[])}
          </li>
        );
        break;

      default:
        break;
    }
  }

  flushList();
  return <div className="space-y-3">{elements}</div>;
}
