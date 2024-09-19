import React from "react";
import styles from './item.module.scss';

export default function SkeletonItem() {

    return (
        <div className={styles.catalogListItem}>
            <div className={styles.catalogListItemImage}>
                <div className={styles.loader}></div>
            </div>
            <p className={styles.catalogListItemName}>Загрузка</p>
        </div >
    );
};
