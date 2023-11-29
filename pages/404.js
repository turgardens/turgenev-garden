import Link from "next/link";
import Head from "next/head";

export default function NotFound() {

    return (
        <>
            <Head>
                <title>404 - страница не найдена!</title>
                <meta
                    name="description"
                    content="На сайте компании Pick studio нет такой страницы, попробуйте поискать другую"
                />
            </Head>

            <div className="notFound">
                <div className="notFoundText">
                    <h2 className="notFoundTitle">Добрый день!</h2><br />
                    <p className="notFoundContent">Мы уже разрабатываем этот раздел,<br /> уже скоро он будет доступен</p>
                </div>
            </div >
        </>
    );
}
