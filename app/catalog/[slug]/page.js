import fs from 'fs';
import path from 'path';

import ProductClient from './productClient';

// Получаем все возможные параметры (slugs) продуктов
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(jsonData);

    // Возвращаем массив объектов с параметром slug для каждого продукта
    return products.map((product) => ({
        slug: product.slug,
    }));
}

// Серверный компонент для отображения отдельной страницы продукта
export default async function ProductPage({ params }) {
    const { slug } = params;

    const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(jsonData);

    // Найти продукт по slug
    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div>Продукт не найден</div>;
    }

    return (
        <div>
            <ProductClient product={product} />
        </div>
    );
}