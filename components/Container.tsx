import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';
import style from '@/styles/layout.module.css';
import Link from 'next/link';
import localFont from 'next/font/local';

const myFont = localFont({
  src: '../utils/PretendardVariable.ttf',
});

export default function Container(props) {
  //const title = props.post.title || 'My Blog';
  const title = 'My Blog';
  return (
    <div className={myFont.className}>
      <div className={style.box}>
        <SEO title={title} />
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
