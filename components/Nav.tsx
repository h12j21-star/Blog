import navlinks from '@/data/navlink';
import Link from 'next/link';
import style from '@/styles/layout.module.css';
export default function Nav() {
  return (
    <>
      <div className={style.nav}>
        {navlinks.map((nav) => (
          <Link href={nav.link} key={nav.title} className={style.nav_item}>
            {nav.title}
          </Link>
        ))}
        <input type="button" title="화면 색변환 버튼" className={style.lightmode} />
      </div>
    </>
  );
}
