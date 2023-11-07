import { defineDocumentType, makeSource } from 'contentlayer/source-files';
import * as notion from '@notionhq/client';
import * as sourceNotion from 'contentlayer-source-notion';
import { NotionRenderer } from '@notion-render/client';

// const client = new notion.Client({ auth: 'secret_5n7IfP0tPpa6SWRaBP5UlAzoAHIML4h8X055EzJn7AB' });
// const renderer = new NotionRenderer({ client });
export const Post = defineDocumentType(() => ({
  name: 'post',
  contentType: 'mdx',
  filePathPattern: `**/*.mdx`,
  fields: {
    //required : 필수여부
    title: { type: 'string', required: true },
    date: { type: 'string', required: true },
    description: { type: 'string', required: true },
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

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    //rehypePlugins: [[rehypePrettyCode, options]],
  },
});

// export const notionMakeSource = sourceNotion.makeSource({
//   client,
//   renderer,
//   databaseTypes: [NotionPost],
// });
