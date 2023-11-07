import Head from 'next/head';
import Nav from './Nav';
import metadata from '@/data/metadata';
import Footer from './Footer';
import SEO from './SEO';
import style from '@/styles/layout.module.css';
export default function Container(props) {
  //const title = props.post.title || 'My Blog';
  const title = 'My Blog';
  return (
    <>
      <SEO title={title} />
      <div>
        <header className={style.header}>
          <h1 className={style.header_title}>didi0 Blog</h1>
          <Nav />
        </header>
      </div>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
