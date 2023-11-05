import BlogPost from '@/components/BlogPost';
import { allPosts } from '@/.contentlayer/generated';
import { GetStaticProps } from 'next';
export default function Blog({ post }) {
  return (
    <div className={`mt-10 flex flex-col`}>
      {post.map((post) => (
        <BlogPost props={post} key={post._raw.flattenedPath} />
      ))}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.sort();

  return {
    props: {
      post,
    },
  };
};
