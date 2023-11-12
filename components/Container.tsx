import Nav from './Nav';
import Footer from './Footer';
import SEO from './SEO';
import style from '@/styles/layout.module.css';
import Link from 'next/link';
import localFont from 'next/font/local';

import { Transition, TransitionGroup } from 'react-transition-group';
import { useRouter } from 'next/router';

const myFont = localFont({
  src: [
    { path: '../utils/PretendardVariable.ttf', style: 'normal' },
    { path: '../utils/Pretendard-Light.otf', style: 'light' },
  ],
});

const TIMEOUT = 100;
const getTransitionStyles = {
  entering: {
    position: `absolute`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
};

export default function Container(props) {
  //const title = props.post.title || 'My Blog';
  const title = 'My Blog';
  const router = useRouter();
  return (
    <div className={myFont.className}>
      <div className={style.box}>
        <SEO title={title} />
        <header className={style.header}>
          <Link href={'/'}>
            <h1 className={style.header_title}>임디디</h1>
          </Link>
          <Nav />
        </header>
        <TransitionGroup style={{ position: 'relative' }}>
          <Transition
            key={router.pathname}
            timeout={{
              enter: TIMEOUT,
              exit: TIMEOUT,
            }}
          >
            {(status) => (
              <main
                style={{
                  ...getTransitionStyles[status],
                }}
              >
                {props.children}
              </main>
            )}
          </Transition>
        </TransitionGroup>
        <Footer />
      </div>
    </div>
  );
}
