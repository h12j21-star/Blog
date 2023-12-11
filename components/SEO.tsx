import Head from 'next/head';

export default function SEO({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://didi0blog.vercel.app/" />
      <meta property="og:image" content={''} />
      <meta property="og:article:author" content="didi0" />
      <meta name="google-site-verification" content="6B0LSI8Tb_plL1bSNLuHkOuuMULbofOWSZ4WlM0M_lI" />
      <meta name="naver-site-verification" content="33079e801268bc7383c86eda86505586446a82ff" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
}
