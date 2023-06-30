import styles from '@/styles/home/ProductService.module.css';
import { productServiceCards } from '@/data/productServiceCards';
import { ProductServiceCard } from './ProductServiceCard';

export const ProductService = () => {
    return (
        <section className={styles.container}>
            <div className={styles.header}>
                <div className={styles.title_decor} />
                <h1 className={styles.title}>Product Service</h1>
                <h2 className={styles.subtitle}>Meeting your evolving business needs</h2>
            </div>

            <div className={styles.main}>
                <div className={styles.background} />
                <div className={styles.cards}>
                    { productServiceCards.map( (product, index) => (
                        <ProductServiceCard product={product} up={ index%2 ? true : false} key={product.title} />
                    ))}
                </div>
            </div>
        </section>
    )
}