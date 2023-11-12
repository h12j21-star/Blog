import { useMDXComponent } from 'next-contentlayer/hooks';
import { allPosts } from '@/.contentlayer/generated/';
import { GetStaticPaths, GetStaticProps, Metadata } from 'next';
import PostDetail from '@/components/PostDetail';
import style from '@/styles/blog.module.css';

//블로그 글 상세
export default function Post({ post }) {
  const MDXComponent = useMDXComponent(post.body.code || '');
  return (
    <>
      <PostDetail props={post} />
      <div className={style.contentBox}>
        <MDXComponent />
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: allPosts.map(({ _raw }) => ({
      params: {
        // 마크다운 파일의 파일명을 기반으로 id를 지정합니다.
        id: _raw.flattenedPath,
      },
    })),

    // 현재 등록된 글 이외의 제목이 전달될경우 404 처리
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postId = String(params?.id || '');

  // 동적 id 파라미터를 통해서 파일명과 동일한 글을 찾아서 리턴합니다.
  const post = allPosts.find(({ _raw }) => {
    return _raw.flattenedPath === postId;
  });

  return {
    props: {
      post,
    },
  };
};
