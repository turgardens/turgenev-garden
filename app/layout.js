import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/title.css";
import "./styles/button.css";
import Header from "../components/blocks/header";
import Footer from "../components/blocks/footer";
import VideoPlayer from "../components/elements/videoPopup";

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
      <body>
        <VideoPlayer />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}