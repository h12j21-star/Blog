import style from '@/styles/blog.module.css';
export default function BlogInfo({ props }) {
  return (
    <div className={style.postInfo}>
      <div className={style.postDes}>{props.date}</div>
      <div className={style.postTitle}>{props.title}</div>
      <div className={style.postDes}>{props.description}</div>
    </div>
  );
}
