import { allPosts } from '@/.contentlayer/generated';

const Sitemap = () => {};
//next 서버에서 xml파일 응답
// sitemap.xml경로에 접근하면 동적으로 xml생성

const generateSitemap = (data, origin) => {
  let xml = '';

  data.pages.map((page) => {
    xml += `<url>
        <loc>${origin + page.location}</loc>
        <lastmod>${page.lastMod}</lastmod>
      </url>`;
  });

  return `<?xml version="1.0" encoding="UTF-8"?>
    <urlset
    xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
   xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
        ${xml}
      </urlset>`;
};

const getDate = new Date().toISOString();

export const getServerSideProps = async ({ res }) => {
  const postPaths = allPosts.map((path) => {
    return {
      location: `/blog/${path._raw.flattenedPath}`,
      lastMod: getDate,
    };
  });

  const data = {
    pages: [
      {
        location: '/',
        lastMod: getDate,
      },
      {
        location: '/blog',
        lastMod: getDate,
      },
      {
        location: '/TIL',
        lastMod: getDate,
      },
      ...postPaths,
    ],
  };

  res.setHeader('Content-Type', 'text/xml');
  res.write(generateSitemap(data, 'https://didi0blog.vercel.app'));
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
