import RecentPost from '@/components/RecentPost';
import metadata from '@/data/metadata';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <div className={`my-5 w-full`}>
            <div className={`relative`}>
                <span
                    className={`absolute top-12 font-extrabold italic text-white text-5xl md:text-9xl text flex justify-center w-full drop-shadow-lg`}
                >
                    {metadata.title}
                </span>
            </div>
            <RecentPost />
        </div>
    );
}
