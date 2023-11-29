import React from 'react';

import styles from './Description.module.scss';

export default function Description() {
    return (
        <section className={styles.appeal}>
            <div className="container">
                <div className={styles.appealWrapper}>

                    <div className={styles.appealTitleContainer}>
                        <h1 className={`title ${styles.appealTitle}`}>Дорогие партнеры!</h1>
                    </div>

                    <p className={`text ${styles.appealText}`}>
                        «Тургеневские сады» представляет вашему вниманию вкуснейшие,
                        полезные и натуральные продукты, произведенные из яблок, собранных в наших садах, расположенных в экологически чистом районе Калининградской области.
                    </p>
                    <p className={`text ${styles.appealText}`}>
                        Чтобы наша продукция была вкусной и полезной, мы внимательно следим за всей цепочкой производства, начиная с выращивания яблок до конечного изготовления. Именно поэтому вся продукция «Тургеневских садов» имеет исклуючительный вкус и обладает высоким качеством.
                    </p>
                    <p className={`text ${styles.appealText}`}>
                        Чтобы связаться с нами и обсудить сотрудничество или получить полное подробное описание возможностей приобретения нашей продукции, напишите нам на электронную почту - <a className={styles.appealTextEmailLink} href="mailto:agrodelo.39@mail.ru">agrodelo.39@mail.ru</a>
                    </p>

                    <p className={`${styles.appealText} ${styles.appealTextRight}`}>
                        С уважением, Тургеневские сады
                    </p>

                    {/* <div className={styles.appealImageContainer}>
                            <Image
                                className={styles.appealImage}
                                src={decorationImg}
                                width="350px"
                                height="350px"
                                alt=""
                            ></Image>
                        </div> */}

                </div>
            </div>
        </section>
    )
};