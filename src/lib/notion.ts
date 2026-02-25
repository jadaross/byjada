import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_TOKEN });

export type RichText = {
  plain_text: string;
  href: string | null;
  annotations: {
    bold: boolean;
    italic: boolean;
    code: boolean;
    strikethrough: boolean;
  };
};

export type NotionBlock = {
  id: string;
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
};

export type TilEntry = {
  id: string;
  title: string;
  date: string;
  tags: string[];
  blocks: NotionBlock[];
};

export async function getTilEntries(): Promise<TilEntry[]> {
  if (!process.env.NOTION_TOKEN || !process.env.NOTION_TIL_DATABASE_ID) {
    return [];
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db = await notion.databases.query({
    database_id: process.env.NOTION_TIL_DATABASE_ID,
    filter: {
      property: "Published",
      checkbox: { equals: true },
    },
    sorts: [{ property: "Date", direction: "descending" }],
  });

  const entries = await Promise.all(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    db.results.map(async (page: any) => {
      const title =
        page.properties.Name?.title[0]?.plain_text ??
        page.properties.Title?.title[0]?.plain_text ??
        "Untitled";
      const date = page.properties.Date?.date?.start ?? "";
      const tags =
        page.properties.Tags?.multi_select?.map((t: any) => t.name) ?? [];

      const blocksRes = await notion.blocks.children.list({
        block_id: page.id,
      });

      return {
        id: page.id,
        title,
        date,
        tags,
        blocks: blocksRes.results as NotionBlock[],
      };
    })
  );

  return entries;
}
