import Head from 'next/head';

export default function SEO({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="NextJS Events" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  );
}
