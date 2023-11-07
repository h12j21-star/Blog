import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkBreak from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSanitize from 'rehype-sanitize';

import { unified } from 'unified';

import { Client } from '@notionhq/client';
import NotionPost from '@/components/NotionPost';
const { NotionToMarkdown } = require('notion-to-md');
export default function Notion({ file }) {
  console.log(file);
  const post = file
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
  const unescapeHTML = post
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'");
  return <div dangerouslySetInnerHTML={{ __html: unescapeHTML }}></div>;
}

export async function getStaticProps() {
  const notion = await new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
    notionVersion: process.env.NOTION_VERSION,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const databaseId = process.env.NOTION_DATABASE_ID;

  const mdblocks = await n2m.pageToMarkdown('b0b1533c-8f6c-4322-b5e6-5de1bc146f7a');
  const mdString = await n2m.toMarkdownString(mdblocks);

  const file = await unified()
    .use(remarkParse) //markdown->mdast
    .use(remarkBreak) //line-break지원
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(mdString.parent)
    .toString();

  return {
    props: {
      file: file,
    },
  };
}

// https://github.com/remarkjs/remark/blob/main/packages/remark/index.js

// const dbf = async () => {
//   const notion = await new Client({
//     auth: 'secret_5n7IfP0tPpa6SWRaBP5UlAzoAHIML4h8X055EzJn7AB',
//     notionVersion: '2022-06-28',
//   });

//   const databaseId = '3c1b9961a5cf4961aec7855584d51d97';
//   const dbObjects = await notion.databases.retrieve({ database_id: databaseId });
//   const dbQueryData = await notion.databases.query({ database_id: databaseId });
//   console.log(dbObjects);
// };
