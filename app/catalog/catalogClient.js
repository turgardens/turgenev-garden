'use client'; // Делаем компонент клиентским

import { useState, useEffect } from 'react';
import CatalogList from './list';
import FilterButtons from './filterButtons';
import PageMain from '../../components/blocks/pageMain';

import styles from './catalog.module.scss';
import mainImage from '../../public/img/about/background.webp';

const filterButtons = [
    {
        id: 1,
        name: "Соки",
        active: true,
    },
    {
        id: 2,
        name: "Морсы",
        active: false,
    },
    {
        id: 3,
        name: "Лимонады",
        active: false,
    },
    {
        id: 4,
        name: "Печенье",
        active: false,
    }
]

export default function CatalogClient({ products }) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (products) {
            setLoading(true);
        }
    }, [products]);

    return (
        <section className={styles.catalog}>
            <PageMain backgroundImg={mainImage} title='Наша продукция' />
            <div className='container'>

                <div className={styles.filterButtonsContainer}>
                    <FilterButtons filterButtons={filterButtons} />
                </div>
                {products &&
                    <CatalogList loading={loading} products={products}></CatalogList>
                }
            </div>
        </section>
    );
}