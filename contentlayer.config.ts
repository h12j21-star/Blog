import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import * as notion from '@notionhq/client';
import * as sourceNotion from 'contentlayer-source-notion';
export const Post = defineDocumentType(() => ({
  name: 'post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    //required : 필수여부
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
    tags: { type: 'list', of: { type: 'string' }, required: false },
    image: { type: 'string', required: false },
  },
}));

export const NotionPost = sourceNotion.defineDatabase(() => ({
  name: 'NotionPost',
  databaseId: '3c1b9961a5cf4961aec7855584d51d97',
  properties: [
    {
      key: 'metaDescription',
      name: 'Short description',
    },
  ],
}));

const options: any = {};

// contentlayer의 스타일링을 위해 remarkGfm (table 지원),rehypeprettycode(code블록)사용한다.
export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypePrettyCode, options],
  },
});
