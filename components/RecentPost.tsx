import Link from 'next/link';

export default function RecentPost({ props }) {
  return (
    <section className={`mt-10`}>
      <h1 className={`text-3xl font-extrabold`}>최근 게시물</h1>
      <div className={`flex flex-col`}>
        <Link href={`/blog/${props._raw.flattenedPath}`} key={props._id}>
          <div className={`font-medium text-xl`}>{props.title}</div>
          <div className={`font-light`}>{props.description}</div>
        </Link>
      </div>
    </section>
  );
}
