import Image from 'next/image';
import style from '@/styles/blog.module.css';
import Tag from './Tag';
export default function PostDetail({ props }) {
  return (
    <div className={style.postDetailInfo}>
      <div className={style.postDetailTitle}>{props.title}</div>
      <div className={style.postDetailDate}>{props.date}</div>
      <Tag tag={props.tags} />
      {props.image ? (
        <Image
          src={props.image}
          alt="썸네일 이미지"
          width={1000}
          height={500}
          className={style.postImage}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
