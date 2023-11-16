import Image from 'next/image';
import Link from 'next/link';

import style from '@/styles/home.module.css';
import type { GetStaticProps } from 'next';
import { compareDesc } from 'date-fns';

import { allPosts } from '@/.contentlayer/generated';
import RecentPost from '@/components/RecentPost';

export default function Home({ post }) {
  return (
    <article className={style.intro_article}>
      <div className={style.introContent}>
        <div>
          <h2 className={style.introHead}>
            <p className={style.name}>didi0 Blog</p>
          </h2>
          <p>프론트엔드 기술 기록입니다!</p>
          <div className={style.linkDiv}>
            <Link href={'https://github.com/h12j21-star'} className={style.link}>
              GitHub
            </Link>
            <Link href={'https://velog.io/@h12j21'} className={style.link}>
              Velog
            </Link>
            <span className={`${style.link} ${style.tooltip}`}>
              Email<span className={style.tooltip_text}>h12j21choi@gmail.com</span>
            </span>
          </div>
        </div>
        <Image
          src="/introImage.jpg"
          alt="소개이미지"
          width={400}
          height={400}
          className={style.introImage}
        />
      </div>
      <RecentPost props={post} />
    </article>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 날짜를 최신순으로 정렬한다.
  const post = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  // compareDesc : 1 첫번째가 두번째보다 앞날일때
  return {
    props: { post, title: '블로그 홈', description: '프론트엔드 기술 블로그입니다.' },
  };
};
