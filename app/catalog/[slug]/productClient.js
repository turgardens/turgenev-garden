'use client'

import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from 'framer-motion';

import VariantsButtons from './variantsButtons';

import styles from './product.module.scss';
import TastesButtons from "./tastesButtons";

const tastesButtons = [
    {
        id: 1,
        name: "Яблочный сок",
        href: "/catalog/juice-apple",
        active: true,
    },
    {
        id: 2,
        name: "Яблоко-морковь",
        href: "/catalog/juice-apple-carrot",
        active: false,
    },
    {
        id: 3,
        name: "Яблоко-смородина",
        href: "/catalog/juice-apple-currant",
        active: false,
    },
]

export default function Product({ product }) {
    const [activeVariant, setActiveVariant] = React.useState(product.variants && product.variants[0].image);
    const [activeButton, setActiveButton] = React.useState(0);

    return (
        <>
            <section
                className={styles.product}
                style={{ background: `${product && product.color ? product.color : "rgb(47, 165, 255)"}` }}
            >
                <div className={`${styles.container} container`}>
                    <div className={styles.wrapper}>

                        <div className={styles.main}>
                            <div className={styles.imageContainer}>
                                <AnimatePresence>
                                    {activeVariant &&
                                        <motion.div
                                            key={activeVariant}
                                            className={styles.priceWrapper}
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ duration: 0.4 }}
                                            exit={{ opacity: 0 }}
                                        >
                                            <Image
                                                className={styles.image}
                                                src={activeVariant}
                                                alt={product && product.name}
                                                width={500}
                                                height={500}
                                            ></Image>
                                        </motion.div>
                                    }
                                </AnimatePresence>
                            </div>

                            <div className={styles.description}>
                                <h1 className={styles.title}>
                                    {product && product.name}
                                </h1>

                                <div className={styles.block}>
                                    {product.variants && product.variants.length > 1 &&
                                        <VariantsButtons variantsButtons={product.variants} activeButton={activeButton} setActiveButton={setActiveButton} setActiveVariant={setActiveVariant} />
                                    }
                                </div>

                                <div className={styles.block}>
                                    <p className={styles.text}>
                                        {product && product.description}
                                    </p>
                                </div>

                                <div className={styles.block}>
                                    <h3 className={styles.descriptionTitle}>
                                        Состав:
                                    </h3>

                                    <p className={styles.text}>
                                        {product && product.compound}
                                    </p>
                                </div>

                                <div className={styles.block}>
                                    <h3 className={styles.descriptionTitle}>
                                        Пищевая ценность на 100 г:
                                    </h3>

                                    <ul className={styles.chrList}>
                                        <li className={styles.chrItem}>
                                            <div
                                                className={styles.chrItemName}
                                            >
                                                ккал
                                            </div>
                                            <div
                                                className={styles.chrItemValue}
                                            >
                                                {product.characteristics.kls}
                                            </div>
                                        </li>

                                        <li className={styles.chrItem}>
                                            <div
                                                className={styles.chrItemName}
                                            >
                                                кдж
                                            </div>
                                            <div
                                                className={styles.chrItemValue}
                                            >
                                                {product.characteristics.kjs}
                                            </div>
                                        </li>

                                        <li className={styles.chrItem}>
                                            <div
                                                className={styles.chrItemName}
                                            >
                                                углеводы
                                            </div>
                                            <div
                                                className={styles.chrItemValue}
                                            >
                                                {product.characteristics.chs} Г
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <h3 className={`${styles.descriptionTitle} ${styles.desktop}`}>
                            Еще вкусы:
                        </h3>
                        <TastesButtons tastesButtons={tastesButtons} currentProduct={product} />

                    </div>
                </div>
            </section >
        </>
    );
}
