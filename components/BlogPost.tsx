import Link from 'next/link';
import style from '@/styles/blog.module.css';
import BlogInfo from './BlogInfo';
export default function BlogPost({ props }) {
  return (
    <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id} className={style.blogList}>
      <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
      <BlogInfo props={props} />
    </Link>
  );
}
