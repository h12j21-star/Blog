import Link from 'next/link';

export default function BlogPost({ props }) {
  return (
    <Link href={`/blog/${props._raw.flattenedPath}`}>
      <div className="font-medium text-xs text-gray-400">{props.date}</div>
      <div className={`font-extrabold text-2xl mt-2`}>💙{props.title}</div>
      <div className={`font-medium text-gray-600 text-xl mt-1`}>{props.description}</div>
    </Link>
  );
}
