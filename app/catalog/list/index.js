import React from "react";
import CatalogItem from "./item";
import SkeletonItem from "./skeletonItem";
import styles from "./list.module.scss";

export default function CatalogList({ products, loading }) {
    return (
        <section
            className={`${styles.list}`}
        >
            <div className={styles.productsListContainer}>

                {products && loading && (
                    <div className={styles.productsList}>
                        {products.map((item, index) => {

                            return (
                                <CatalogItem key={index} slug={item.slug} variants={item.variants} tastes={item.tastes} img={item.preview} title={item.name} color={item.color} />
                            );

                        })}
                    </div>
                )}

                {!loading && (
                    <div className={styles.productsList}>
                        {[...Array(7)].map((item, index) => {

                            return (
                                <SkeletonItem key={index}></SkeletonItem>
                            );

                        })}
                    </div>
                )}

            </div>
        </section >
    );
};