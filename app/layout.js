import "./styles/globals.css";
import "./styles/fonts.css";
import "./styles/title.css";
import "./styles/button.css";
import Header from "../components/header/";
import Footer from "../components/footer";
import VideoPlayer from "../components/elements/videoPopup";

export const metadata = {
  title: "Тургеневские сады - натуральные продукты из Калининградской области",
  description: "",
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