'use client';
const { NotionToMarkdown } = require('notion-to-md');

import Image from 'next/image';
import { useRouter } from 'next/router';
import { Client } from '@notionhq/client';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import HTMLReactParser, { Element } from 'html-react-parser';

import style from '@/styles/blog.module.css';
import rehypeHighlight from 'rehype-highlight';

export default function Post({ file }: { file: string }) {
  const { query } = useRouter();

  let fileToString = file;
  if (typeof file !== 'string') {
    fileToString = '';
  }

  return (
    <section className={style.contentBox}>
      <h2 className={style.ir}>{query.title}</h2>
      <div className={style.postDetailInfo}>
        <div className={style.postDetailTitle}>{query.title}</div>
        <div className={style.postDetailDate}>{query.date}</div>
      </div>
      <div className={style.contentDetail}>
        {HTMLReactParser(fileToString, {
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
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNcsGiBKQAF5QIZ9ZdMcQAAAABJRU5ErkJggg=="
                  priority
                />
              );
            }
          },
        })}
      </div>
    </section>
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
    .use(rehypeHighlight, { detect: true })
    .use(rehypeStringify)
    .processSync(mdString.parent)
    .toString();
  return {
    props: { file: file },
  };
}
