import Head from 'next/head';
import PageMain from '../../components/PageMain';
import OurFarm from '../../components/OurFarm';

import background from '../../public/img/manufacture/background.webp'
import Description from '../../components/Description';

import oneImage from '../../public/img/manufacture/background.webp';

import iconFirst from '../../public/img/manufacture/icon-1.svg';
import iconSecond from '../../public/img/manufacture/icon-2.svg';
import iconThird from '../../public/img/manufacture/icon-1.svg';

// Минимум 10 изображений
const array = [oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage, oneImage];
const advantagesArray = [
    { text: 'Новая, европейская линия', img: iconFirst },
    { text: 'Обученный персонал', img: iconSecond },
    { text: 'Новая, европейская, полностью автоматическая линия', img: iconThird }
]
const imagesArray = [oneImage, oneImage, oneImage]

export default function Manufacture() {
    return (
        <>
            <Head>
                <title>Производство - Тургеневские сады</title>
            </Head>

            <PageMain title='Производство' backgroundImg={background} />
            <Description
                title='Гордимся своим производством'
                subTitle='Производство продукции осуществляется в городе Калининграде, мы делаем исключительную ставку на идеальное качество, безопасность и впечатляющие вкусовые свойства наших продуктов'
                advantagesArray={advantagesArray}
                imagesArray={imagesArray}
            />
            <OurFarm
                arrayRed={true}
                photos={array}
                title='Наша линия'
                subTitle='Идеальная чистота и отработанный автоматизированный процесс производства сока и других продуктов'
            />
        </>
    )
};