import { Client } from '@notionhq/client';
const { NotionToMarkdown } = require('notion-to-md');

import style from '@/styles/blog.module.css';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkBreak from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default function Post({ file }) {
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
  return (
    <div className={style.contentBox}>
      <div dangerouslySetInnerHTML={{ __html: unescapeHTML }} className={style.contentDetail}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const notion = await new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
    notionVersion: process.env.NOTION_VERSION,
  });
  const databaseId = process.env.NOTION_DATABASE_ID;
  const dbQueryData = await notion.databases.query({ database_id: databaseId });
  const page_id = dbQueryData.results.map((id) => id.id);

  return {
    paths: page_id.map((id) => ({
      params: {
        id: id,
      },
    })),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  const notion = await new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
    notionVersion: process.env.NOTION_VERSION,
  });
  const n2m = new NotionToMarkdown({ notionClient: notion });

  const mdblocks = await n2m.pageToMarkdown(params.id);
  const mdString = await n2m.toMarkdownString(mdblocks);
  const file = await unified()
    .use(remarkParse) //markdown->mdast
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(mdString.parent)
    .toString();
  return {
    props: { file: file },
  };
}
