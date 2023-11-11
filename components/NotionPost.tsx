'use client';
import Link from 'next/link';
import style from '@/styles/til.module.css';
import usePagenation from '@/utils/usePagenation';
import PassButton from './PassButton';
// title, date, notion id

export default function NotionPost({ data, page_id }) {
  const post = data.results;
  const postNum = 6;
  const { page, prev, next } = usePagenation();
  const disPlayList = post.slice(page * postNum, (page + 1) * postNum);
  return (
    <>
      {disPlayList.map((data, index) => (
        <li className={style.tilPost} key={index}>
          <Link href={`/TIL/${page_id[index]}`}>
            <div className={style.tilDate}>{data.properties.Date.date?.start}</div>
            <div className={style.tilTitle}>{data.properties.Name.title[0]?.plain_text}</div>
          </Link>
        </li>
      ))}
      <PassButton prev={prev} next={next} />
    </>
  );
}
