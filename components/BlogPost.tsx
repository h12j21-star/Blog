'use client';
import Link from 'next/link';
import style from '@/styles/blog.module.css';
import BlogInfo from './BlogInfo';
import usePagenation from '@/utils/usePagenation';
import PassButton from './PassButton';

export default function BlogPost({ post }) {
  const postNum = 6;
  const { page, prev, next } = usePagenation();
  console.log(post);
  const disPlayList = post.slice(page * postNum, (page + 1) * postNum);
  return (
    <>
      {disPlayList.map((el, index) => (
        <li className={style.tilPost} key={index}>
          <Link
            href={{ pathname: `/blog/${el._raw.flattenedPath}` }}
            key={el._id}
            className={style.blogList}
          >
            <img src="/basicImage.png" alt="블로그 대표사진" className={style.postImg} />
            <BlogInfo props={el} />
          </Link>
        </li>
      ))}
      <PassButton prev={prev} next={next} />
    </>
  );
}
