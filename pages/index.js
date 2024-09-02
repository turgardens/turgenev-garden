import Head from "next/head";
import Main from "@/components/Home/Main";
import About from "@/components/Home/About";
import Gardens from "@/components/Home/Gardens";
import Manufacture from "@/components/Home/Manufacture";
import Compound from "@/components/Home/Compound";

export default function Home() {
  return (
    <>
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
