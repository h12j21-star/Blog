'use client';
import Image from 'next/image';
import { Client } from '@notionhq/client';
const { NotionToMarkdown } = require('notion-to-md');
import HTMLReactParser, { DOMNode, domToReact, Element } from 'html-react-parser';
import style from '@/styles/blog.module.css';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkBreak from 'remark-breaks';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { useRouter } from 'next/router';

export default function Post({ file }: { file: string }) {
  const { query } = useRouter();
  return (
    <div className={style.contentBox}>
      <div className={style.postDetailInfo}>
        <div className={style.postDetailTitle}>{query.title}</div>
        <div className={style.postDetailDate}>{query.date}</div>
      </div>
      <div className={style.contentDetail}>
        {HTMLReactParser(file, {
          replace: (domNode) => {
            const typedDomNode = domNode as Element;
            if (typedDomNode.name === 'img') {
              return (
                <Image
                  src={typedDomNode.attribs.src}
                  width={typedDomNode.attribs.width ? Number(typedDomNode.attribs.width) : 600}
                  height={typedDomNode.attribs.height ? Number(typedDomNode.attribs.height) : 500}
                  alt={typedDomNode.attribs.alt ? typedDomNode.attribs.alt : 'Blog post image'}
                  quality={100}
                  placeholder="blur"
                  blurDataURL={typedDomNode.attribs.src}
                  priority
                />
              );
            }
          },
        })}
      </div>
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

  return {
    paths: dbQueryData.results.map((id) => ({
      params: {
        id: id.id,
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
  const n2m = await new NotionToMarkdown({ notionClient: notion });
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
