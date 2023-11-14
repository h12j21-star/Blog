'use client';
import Link from 'next/link';
import style from '@/styles/til.module.css';
import usePagenation from '@/utils/usePagenation';
import PassButton from './PassButton';
// title, date, notion id

export default function NotionPost({ data, page_id }) {
  const post = data.results;
  const postNum = 6;
  const totalNum = Math.floor(post.length / postNum);
  const { page, prev, next } = usePagenation(totalNum);
  const disPlayList = post.slice(page * postNum, (page + 1) * postNum);

  return (
    <>
      <ul className={style.tilList}>
        {disPlayList.map((data, index) => (
          <li className={style.tilPost} key={index}>
            <Link
              href={{
                pathname: `/TIL/${page_id[index + page * postNum]}`,
                query: {
                  date: data.properties.Date.date?.start,
                  title: data.properties.Name.title[0]?.plain_text,
                },
              }}
            >
              <div className={style.tilDate}>{data.properties.Date.date?.start}</div>
              <div className={`${style.tilTitle} ellipsis`}>
                {data.properties.Name.title[0]?.plain_text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <PassButton prev={prev} next={next} />
    </>
  );
}
