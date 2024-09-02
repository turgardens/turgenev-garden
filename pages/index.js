import Head from "next/head";
import Script from 'next/script';

import Main from "@/components/Home/Main";
import About from "@/components/Home/About";
import Gardens from "@/components/Home/Gardens";
import Manufacture from "@/components/Home/Manufacture";
import Compound from "@/components/Home/Compound";

export default function Home() {
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

      <Head>
        <title>Тургеневские сады - натуральные продукты из Калининградской области</title>
        <meta name="yandex-verification" content="6793b514deed019f" />
      </Head>

      <Main />
      <About />
      <Gardens />
      <Manufacture />
      <Compound />
    </>
  );
}
