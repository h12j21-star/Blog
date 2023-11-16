'use client';
import { useState } from 'react';

import navlinks from '@/data/navlink';
import Link from 'next/link';
import style from '@/styles/layout.module.css';

export default function Nav() {
  const [darkmode, isDarkmode] = useState(false);
  const setDarkmode = () => {
    isDarkmode((prev) => !prev);
    if (darkmode) {
      localStorage.setItem('mode', 'light');
      document.body.setAttribute('data-dark', localStorage.getItem('mode'));
    } else {
      localStorage.setItem('mode', 'dark');
      document.body.setAttribute('data-dark', localStorage.getItem('mode'));
    }
  };
  return (
    <>
      <div className={style.nav}>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} className={style.nav_item}>
            {nav.title}
          </Link>
        ))}
        {darkmode ? (
          <input
            type="button"
            title="다크모드 해제 버튼"
            className={style.darkmode}
            onClick={setDarkmode}
          />
        ) : (
          <input
            type="button"
            title="다크모드 버튼"
            className={style.lightmode}
            onClick={setDarkmode}
          />
        )}
      </div>
    </>
  );
}
