import Head from 'next/head';
import Nav from './Nav';
import metadata from '@/data/metadata';
import Footer from './Footer';

export default function Container(props) {
  console.log(props);
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
      </Head>
      <header>
        <h1>HYEONJI BLOG</h1>
        <Nav />
      </header>
      <main>{props.children}</main>
      <Footer />
    </>
  );
}
