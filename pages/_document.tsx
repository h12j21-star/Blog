import { Html, Head, Main, NextScript } from 'next/document';
const ScriptTag = () => {
  const codeToRunOnClient = `(function() {
    if(!localStorage.getItem('mode')){
      localStorage.setItem('mode','light')
    }
    document.body.setAttribute('data-dark',localStorage.getItem('mode'))
})()`;

  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

//documnet file -> head,metadata같은 설정을 할 수 있다.
// title 은 index.tsx에서 설정 할 수 있다.
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <ScriptTag />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
