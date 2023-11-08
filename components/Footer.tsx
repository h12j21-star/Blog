import style from '@/styles/layout.module.css';

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerBox}>
          <img src="/github-mark.png" alt="깃허브 이동" className={style.footer_GitIcon} />
          <p className={style.copyRight}>Copyright © 2023 Choi heyeonji</p>
        </div>
      </div>
    </>
  );
}
