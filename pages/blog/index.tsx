import style from '@/styles/blog.module.css';
import BlogPost from '@/components/BlogPost';
import { allPosts } from '@/.contentlayer/generated';
import { GetStaticProps } from 'next';

export default function Blog({ post }) {
  return (
    <div className={style.blogBox}>
      <p className={style.blogTitle}>글</p>
      <div className={style.blogListBox}>
        {post.map((post) => (
          <BlogPost props={post} key={post._raw.flattenedPath} />
        ))}
      </div>
      <div className={style.buttonBox}>
        <button type="button" className={style.passButton}>
          이전 글
        </button>
        <button type="button" className={style.passButton}>
          다음 글
        </button>
      </div>
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
