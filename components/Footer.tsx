import Image from 'next/image';

import style from '@/styles/layout.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <div className={style.footer}>
        <div className={style.footerBox}>
          <Link href={'https://github.com/h12j21-star/Blog'}>
            <Image
              src="/github-mark.png"
              alt="깃허브 이동"
              width={30}
              height={30}
              className={style.footer_GitIcon}
            />
          </Link>
          <p className={style.copyRight}>Copyright © 2023 Choi hyeonji</p>
        </div>
      </div>
    </>
  );
}
