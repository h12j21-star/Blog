import style from '@/styles/home.module.css';
import { GetStaticProps } from 'next';
import { compareDesc, format, parseISO } from 'date-fns';

import { allPosts } from '@/.contentlayer/generated';
import RecentPost from '@/components/RecentPost';

export default function Home({ post }) {
  return (
    <div>
      <article className={style.intro_article}>
        <div className={style.introContent}>
          <h2 className={style.introHead}>
            좋은 영향력을
            <br /> 전하고 싶은
            <br /> <p className={style.name}>최현지</p> 입니다.
          </h2>
          <p className={style.introDetail}>
            기술을 며칠 동안 공부해 프로젝트에 적용하는
            <br /> 끈질긴 근성을 가지고 있습니다.
          </p>
        </div>
        <div>
          <img src="/introImage.jpg" alt="소개이미지" className={style.introImage} />
        </div>
      </article>
      <RecentPost props={post} />
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 날짜를 최신순으로 정렬한다.
  const post = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  // compareDesc : 1 첫번째가 두번째보다 앞날일때
  return {
    props: { post },
  };
};
