import Link from 'next/link';
import style from '@/styles/home.module.css';
export default function RecentPost({ props }) {
  return (
    <section className={style.recentSection}>
      <h2 className={style.sectionTitle}>최근에 적은 글</h2>
      <div className={style.recentPosts}>
        <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.post}>
          <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
          <div className={style.postInfo}>
            <div className={style.postDes}>{props.date}</div>
            <div className={style.postTitle}>{props.title}</div>
            <div className={style.postDes}>{props.description}</div>
          </div>
        </Link>
        <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.post}>
          <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
          <div className={style.postInfo}>
            <div className={style.postDes}>{props.date}</div>
            <div className={style.postTitle}>{props.title}</div>
            <div className={style.postDes}>{props.description}</div>
          </div>
        </Link>
      </div>
    </section>
  );
}
