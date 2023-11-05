import { allPosts } from '@/.contentlayer/generated';
import RecentPost from '@/components/RecentPost';
import metadata from '@/data/metadata';
import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import { compareDesc, format, parseISO } from 'date-fns';
const inter = Inter({ subsets: ['latin'] });

export default function Home(post) {
  return (
    <div className={`my-5 w-full`}>
      <div className={`relative`}>
        <span>{metadata.title}</span>
      </div>
      <RecentPost props={post} />
      {/* 포스터 가져와서 출력 */}
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // 날짜를 최신순으로 정렬한다.
  const post = allPosts.sort((a, b) => compareDesc(new Date(a.date), new Date(b.date)));
  // compareDesc : 1 첫번째가 두번째보다 앞날일때
  return {
    props: post[0],
  };
};
