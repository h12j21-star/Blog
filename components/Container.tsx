import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';
import style from '@/styles/layout.module.css';
import Link from 'next/link';
import localFont from 'next/font/local';
import { useRouter } from 'next/router';

const myFont = localFont({
  src: [
    { path: '../utils/PretendardVariable.ttf', style: 'normal' },
    { path: '../utils/Pretendard-Light.otf', style: 'light' },
  ],
});

export default function Container(props) {
  const title = props.title || '오늘 공부 기록';
  const description = props.description;
  const router = useRouter();
  return (
    <div className={myFont.className}>
      <div className={style.box}>
        <SEO title={title} description={description} />
        <header className={style.header}>
          <Link href={'/'}>
            <h1 className={style.header_title}>임디디</h1>
          </Link>
          <Nav />
        </header>
        <main>{props.children}</main>
        <Footer />
      </div>
    </div>
  );
}
