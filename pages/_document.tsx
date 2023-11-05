import { Html, Head, Main, NextScript } from 'next/document';

//documnet file -> head,metadata같은 설정을 할 수 있다.
// title 은 index.tsx에서 설정 할 수 있다.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
