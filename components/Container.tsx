import Head from 'next/head';
import Nav from './Nav';
import metadata from '@/data/metadata';

export default function Container(props) {
    return (
        <>
            <Head>
                <title>{metadata.title}</title>
            </Head>
            <header>
                <Nav />
            </header>
            <main>{props.children}</main>
        </>
    );
}
