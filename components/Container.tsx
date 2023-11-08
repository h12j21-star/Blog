import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';
import style from '@/styles/layout.module.css';
export default function Container(props) {
  //const title = props.post.title || 'My Blog';
  const title = 'My Blog';
  return (
    <>
      <div className={style.box}>
        <SEO title={title} />
        <header className={style.header}>
          <h1 className={style.header_title}>임디디</h1>
          <Nav />
        </header>
        <main>{props.children}</main>
        <Footer />
      </div>
    </>
  );
}
