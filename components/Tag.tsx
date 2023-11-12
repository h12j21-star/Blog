import style from '@/styles/blog.module.css';
export default function Tag({ tag }) {
  return (
    <>
      <ul className={style.tagUl}>
        {tag?.map((el, index) => (
          <li className={style.tagItem} key={index}>
            <span className={style.tag}>#</span>
            {el}
          </li>
        ))}
      </ul>
    </>
  );
}
