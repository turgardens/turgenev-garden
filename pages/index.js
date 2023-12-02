import Head from "next/head";
import Main from "@/components/Home/Main";
import About from "@/components/Home/About";
import Gardens from "@/components/Home/Gardens";
import Manufacture from "@/components/Home/Manufacture";
import Compound from "@/components/Home/Compound";
import ScrollNine from '../components/ScrollNine';

export default function Home() {
  return (
    <>
      <Head>
        <title>Тургеневские сады - натуральные продукты из Калининградской области</title>
      </Head>

      <Main />
      <About />
      <Gardens />
      <Manufacture />
      <Compound />
    </>
  );
}
