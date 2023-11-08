import Link from 'next/link';
import style from '@/styles/home.module.css';
import BlogInfo from './BlogInfo';
export default function RecentPost({ props }) {
  return (
    <section className={style.recentSection}>
      <h2 className={style.sectionTitle}>최근에 적은 글</h2>
      <div className={style.recentPosts}>
        <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.post}>
          <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
          <BlogInfo props={props} />
        </Link>
        <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.post}>
          <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
          <BlogInfo props={props} />
        </Link>
      </div>
    </section>
  );
}
