import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script';

export default function Document() {
  return (
    <>
      <Script id='yandexMetrik' type="text/javascript" >
        {` (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();
   for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
   k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(95547942, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true
   });`}
      </Script>

      <Html lang="ru">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    </>
  )
}
