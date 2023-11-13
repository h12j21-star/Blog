import Image from 'next/image';
import { Client } from '@notionhq/client';
const { NotionToMarkdown } = require('notion-to-md');
import parse, { domToReact } from 'html-react-parser';

import style from '@/styles/blog.module.css';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkBreak from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';

export default function Post({ file, data }) {
  const replaceImage: any = {
    replace: ({ name, attribs, children }) => {
      if (name === 'figure' && /wp-block-image/.test(attribs.class)) {
        return <>{domToReact(children, replaceImage)}</>;
      }
      if (name === 'img') {
        return (
          <Image
            src={attribs.src}
            width={attribs.width ? attribs.width : 800}
            height={attribs.height ? attribs.height : 500}
            alt={attribs.alt ? attribs.alt : 'Blog post image'}
            quality={100}
            placeholder="blur"
            blurDataURL={attribs.src}
          />
        );
      }
    },
  };
  return (
    <div className={style.contentBox}>
      <div className={style.postDetailInfo}>
        <div className={style.postDetailTitle}>{data.properties?.Name.title[0]?.plain_text}</div>
        <div className={style.postDetailDate}>{data.properties.Date.date?.start}</div>
      </div>
      <div className={style.contentDetail}>{parse(file, replaceImage)}</div>
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

  const databaseId = process.env.NOTION_DATABASE_ID;
  const dbQueryData = await notion.databases.query({ database_id: databaseId });
  const postInfo = dbQueryData.results.find(({ id }) => id === params.id);
  const file = await unified()
    .use(remarkParse) //markdown->mdast
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeStringify)
    .processSync(mdString.parent)
    .toString();
  return {
    props: { file: file, data: postInfo },
  };
}
