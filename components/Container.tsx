import Head from 'next/head';
import Nav from './Nav';
import metadata from '@/data/metadata';
import Footer from './Footer';
import SEO from './SEO';

export default function Container(props) {
  const title = props.post.title || 'My Blog';
  return (
    <>
      <SEO title={title} />
      <header>
        <h1>HYEONJI BLOG</h1>
        <Nav />
      </header>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
