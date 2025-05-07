import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/title.css";
import "./styles/button.css";
import Header from "../components/blocks/header";
import Footer from "../components/blocks/footer";
import VideoPlayer from "../components/elements/videoPopup";
import Script from "next/script";

export const metadata = {
  title: "Тургеневские сады — свежие яблоки, соки, печенье и сидр из Калининграда",
  description: 'Тургеневские сады — российское агропредприятие в Калининграде. Выращиваем яблоки на собственных садах и производим соки, печенье и сидр с контролем качества на каждом этапе. Предлагаем полезные, безопасные и доступные продукты для поддержания здорового образа жизни.',
  openGraph: {
    title: 'Тургеневские сады — свежие яблоки, соки, печенье и сидр из Калининграда',
    description: 'Тургеневские сады — российское агропредприятие в Калининграде. Выращиваем яблоки на собственных садах и производим соки, печенье и сидр с контролем качества на каждом этапе. Предлагаем полезные, безопасные и доступные продукты для поддержания здорового образа жизни',
    images: ['https://turgardens.ru/opengraph.webp'],
    url: 'https://turgardens.ru/',
    siteName: 'Тургеневские сады',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <Script id='yandexMetrik' type="text/javascript" >
          {`   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
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

        <Script>
          {`window.replainSettings = {id: '49f32c92-240b-4202-a1a9-d333eef48658' };
          (function(u){var s=document.createElement('script');s.async=true;s.src=u;
          var x=document.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);
})('https://widget.replain.cc/dist/client.js');`}
        </Script>
      </head>

      <body>
        <VideoPlayer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}