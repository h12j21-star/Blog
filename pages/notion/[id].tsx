import { allNotionPosts } from '@/.contentlayer/generated/NotionPost/_index.mjs';

export default function Post() {
  return <div>post</div>;
}

export async function getStaticPaths() {
  const path = allNotionPosts.map((post) => post._raw.flattenedPath);
  console.log(path);
  return {
    path: path,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const post = allNotionPosts.find((post) => post._raw.flattenedPath === params.id);
  return {
    post: { post },
  };
}
