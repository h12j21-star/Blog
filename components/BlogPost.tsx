import Link from 'next/link';
import style from '@/styles/blog.module.css';
export default function BlogPost({ props }) {
  return (
    <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.blogList}>
      <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
      <div className={style.postInfo}>
        <div className={style.postDes}>{props.date}</div>
        <div className={style.postTitle}>{props.title}</div>
        <div className={style.postDes}>{props.description}</div>
      </div>
    </Link>
  );
}
