import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Compound.module.scss';

import juice from '../../../public/img/compound/juice.webp';

export default function Compound() {
    return (
        <section className={styles.compound}>
            <div className='container'>
                <div className={styles.wrapper}>
                    <div className={styles.imageContainer}>
                        <Image className={styles.image} src={juice} fill={true}></Image>
                    </div>

                    <div className={styles.textContainer}>
                        <div className={styles.titleContainer}>
                            <h2 className='title'>Безупречный состав</h2>
                        </div>
                        <ul className={styles.list}>
                            <li className={styles.item}>Мы отбираем только лучшие яблоки из собственного сада</li>
                            <li className={styles.item}>Тестируем воду и проверяем готовый продукт в лаборатории на вкусовые качества и безопасность</li>
                            <li className={styles.item}>Наш сок проходит оценку качества на каждом этапе производства</li>
                        </ul>

                        <motion.div
                            className={styles.buttonContainer}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}>
                            <Link href="/apple-juice" className='button redColor'>
                                Подробнее о соке
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
};