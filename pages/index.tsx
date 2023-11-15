import style from '@/styles/home.module.css';
import type { GetStaticProps, Metadata } from 'next';
import { compareDesc, format, parseISO } from 'date-fns';
import Image from 'next/image';
import { allPosts } from '@/.contentlayer/generated';
import RecentPost from '@/components/RecentPost';
import Link from 'next/link';

// export const metadata: Metadata = {
//   title: 'home',
//   description: '...',
// };
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
          <ul>
            <li className={style.introDetail}>
              GitHub :
              <Link href={'https://github.com/h12j21-star'}> https://github.com/h12j21-star </Link>
            </li>
            <li className={style.introDetail}>
              Velog :<Link href={'https://velog.io/@h12j21'}> https://velog.io/@h12j21 </Link>
            </li>
          </ul>
        </div>
        <div>
          <Image
            src="/introImage.jpg"
            alt="소개이미지"
            width={400}
            height={400}
            className={style.introImage}
          />
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
    props: { post, title: '블로그 홈', description: '프론트엔드 기술 블로그입니다.' },
  };
};
