import React from 'react';
import Image from 'next/image';
import Scroll from './Scroll';
import styles from './description.module.scss';

export default function Description({ title, subTitle, advantagesArray, imagesArray, scrollIcon }) {

    return (
        <>
            <div className={styles.about}>
                <Scroll scrollIcon={scrollIcon} />
                <div className='container'>
                    <div className={styles.aboutWrapper}>

                        <div className={styles.information}>

                            <div className={styles.titleContainer}>
                                <h2 className="title">{title}</h2>
                            </div>

                            <p className={styles.text}>{subTitle}</p>

                            <ul className={styles.aboutList}>

                                {advantagesArray.map((item, index) => {
                                    return (
                                        <li key={index} className={styles.aboutItem}>
                                            {/* <div className={styles.aboutItemImg}></div> */}
                                            <Image src={item.img} className={styles.aboutItemImg} />
                                            <div className={styles.aboutItemContentContain}>
                                                <p className={styles.aboutItemContentText}>{item.text}</p>
                                            </div>
                                        </li>
                                    )
                                })}

                            </ul>

                        </div>

                        <div className={styles.images}>
                            <div className={styles.imagesContainer}>
                                <div className={styles.imageFirst}>
                                    <Image className={styles.image} fill={true} src={imagesArray[0]} alt='Тургеневские сады, компания в Калининграде и области' />
                                </div>
                                <div className={styles.imageSecond}>
                                    <Image className={styles.image} fill={true} src={imagesArray[1]} alt='Тургеневские сады, компания в Калининграде и области' />
                                </div>
                            </div>
                            <div className={styles.imageThird}>
                                <Image className={styles.image} fill={true} src={imagesArray[2]} alt='Тургеневские сады, компания в Калининграде и области' />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}