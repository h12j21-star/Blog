'use client';
import style from '@/styles/blog.module.css';

export default function PassButton({ prev, next }) {
  return (
    <div className={style.buttonBox}>
      <button type="button" className={style.passButton} onClick={prev}>
        이전 글
      </button>
      <button type="button" className={style.passButton} onClick={next}>
        다음 글
      </button>
    </div>
  );
}
