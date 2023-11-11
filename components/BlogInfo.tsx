import style from '@/styles/blog.module.css';
export default function BlogInfo({ props }) {
  return (
    <div className={style.postInfo}>
      <div className={`${style.postDes} `}>{props.date}</div>
      <p className={`${style.postTitle} ellipsis`}>{props.title}</p>
      <div className={style.postDes}>{props.description}</div>
    </div>
  );
}
