import Container from '@/components/Container';
import Nav from '@/components/Nav';
import '@/styles/globals.css';
import '@/styles/reset.css';
import type { AppProps } from 'next/app';

//__app.tsx에 global스타일을 추가한다.

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container {...pageProps}>
      <Component {...pageProps} />
    </Container>
  );
}
