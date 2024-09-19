// Серверный компонент

import fs from 'fs';
import path from 'path';
import CatalogClient from './catalogClient';

export default async function CatalogPage() {
    // Загружаем данные продуктов на сервере
    const filePath = path.join(process.cwd(), 'public', 'data', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const products = JSON.parse(jsonData);

    // Передаем данные в клиентский компонент
    return <CatalogClient products={products} />;
}