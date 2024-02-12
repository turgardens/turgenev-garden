import Head from 'next/head';
import PageMain from '../../components/PageMain';
import OurFarm from '../../components/OurFarm';

import background from '../../public/img/manufacture/background.webp'
import Description from '../../components/Description';

import oneImage from '../../public/img/manufacture/background.webp';

import imageFirst from '../../public/img/manufacture/1.webp';
import imageSecond from '../../public/img/manufacture/2.webp';
import imageThree from '../../public/img/manufacture/3.webp';
import imageFourth from '../../public/img/manufacture/4.webp';
import imageFifth from '../../public/img/manufacture/5.webp';
import imageSix from '../../public/img/manufacture/6.webp';
import imageSeven from '../../public/img/manufacture/7.webp';
import imageEight from '../../public/img/manufacture/8.webp';
import imageEleven from '../../public/img/manufacture/12.webp';
import imageTen from '../../public/img/manufacture/10.webp';
import imageApple from '../../public/img/manufacture/13.webp';

import iconFirst from '../../public/img/manufacture/icon-1.svg';
import iconSecond from '../../public/img/manufacture/icon-2.svg';
import iconThird from '../../public/img/manufacture/icon-1.svg';

// Минимум 10 изображений
const array = [imageFirst, imageSecond, imageThree, imageFourth, imageFifth, imageEight, imageEleven, imageSix, imageSeven, imageEight, imageEleven, imageTen];

const advantagesArray = [
    { text: 'Новая, европейская, полностью автоматическая линия', img: iconFirst },
    { text: 'Только натруальные ингредиенты, высшего качества', img: iconSecond },
]
const imagesArray = [imageApple, imageSeven, imageFirst]

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