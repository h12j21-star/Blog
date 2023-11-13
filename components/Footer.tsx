import Image from 'next/image';

import style from '@/styles/layout.module.css';

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerBox}>
          <Image
            src="/github-mark.png"
            alt="깃허브 이동"
            width={30}
            height={30}
            className={style.footer_GitIcon}
          />
          <p className={style.copyRight}>Copyright © 2023 Choi heyeonji</p>
        </div>
      </div>
    </>
  );
}
