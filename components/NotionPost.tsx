import Link from 'next/link';
// title, date, notion id
export default function NotionPost({ data, index, page_id }) {
  const post = data.properties;
  const title = post.Name.title[0]?.plain_text;
  const date = post.Date.date?.start;
  return (
    <>
      <Link href={`/notion/${page_id}`}>
        <div className="font-medium text-xs text-gray-400">{title}</div>
        <div className={`font-extrabold text-2xl mt-2`}>{date}</div>
      </Link>
    </>
  );
}
