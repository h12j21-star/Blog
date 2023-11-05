import { defineDocumentType, makeSource } from 'contentlayer/source-files';

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

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    //rehypePlugins: [[rehypePrettyCode, options]],
  },
});
