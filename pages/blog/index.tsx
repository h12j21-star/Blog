import style from '@/styles/blog.module.css';
import BlogPost from '@/components/BlogPost';
import { allPosts } from '@/.contentlayer/generated';
import { GetStaticProps } from 'next';
import PassButton from '@/components/PassButton';

export default function Blog({ post }) {
  return (
    <section className={style.blogBox}>
      <h2 className={style.blogTitle}>글</h2>
      <ul className={style.blogBox}>
        <BlogPost post={post} />
      </ul>
    </section>
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
