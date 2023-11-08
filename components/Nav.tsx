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
        <img src="/darkmode.png" alt="다크모드" className={style.darkmode} />
      </div>
    </>
  );
}
