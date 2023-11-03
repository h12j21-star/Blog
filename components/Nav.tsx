import navlinks from '@/data/navlink';
import Link from 'next/link';
export default function Nav() {
    return (
        <>
            {navlinks.map((nav) => {
                <Link href={nav.link}>{nav.title}</Link>;
            })}
        </>
    );
}
