import style from '@/styles/blog.module.css';
export default function PostDetail({ props }) {
  return (
    <div className={style.postDetailInfo}>
      <div className={style.postDetailTitle}>{props.title}</div>
      <div className={style.postDetailDate}>{props.date}</div>
    </div>
  );
}