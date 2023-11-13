import { Client } from '@notionhq/client';
import NotionPost from '@/components/NotionPost';
import style from '@/styles/til.module.css';
import PassButton from '@/components/PassButton';

export default function Notion({ dbQueryData, page_id }) {
  return (
    <section>
      <h2 className={style.til}>오늘 내가 배운 것</h2>
      <NotionPost data={dbQueryData} page_id={page_id} />
    </section>
  );
}

export async function getStaticProps() {
  const notion = await new Client({
    auth: process.env.NOTION_ACCESS_TOKEN,
    notionVersion: process.env.NOTION_VERSION,
  });
  const databaseId = process.env.NOTION_DATABASE_ID;
  // proterties들을 불러온다.
  // 각 요소의 result.id를 markdown으로 변환
  // 목록(/notion)에 제목,설명,date 표시 클릭-> 상세페이지 이동 (page_id와 함께)
  const dbQueryData = await notion.databases.query({ database_id: databaseId });

  const page_id = dbQueryData.results.map((id) => id.id);
  //const blockData = await notion.blocks.retrieve({ block_id: page_id[0] });

  return {
    props: {
      page_id: page_id,
      dbQueryData: dbQueryData,
    },
  };
}
