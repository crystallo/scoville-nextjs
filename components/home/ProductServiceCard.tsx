import styles from "@/styles/home/ProductServiceCard.module.css"

interface ProductServiceCardProps {
    product: Product;
    up: boolean;
}

export const ProductServiceCard = ({ product, up } : ProductServiceCardProps) => {
    return (
        <div className={`${styles.container} ${up ? styles.moveup : styles.movedown}`}>
            <div className={styles.header}>
                <div><img className={styles.logo} src="/logo.svg" alt="Scoville logo" /></div>
                <div className={styles.titles}>
                    <h1 className={styles.type}>{product.type}</h1>
                    <h2 className={styles.title}>{product.title}</h2>
                </div>
            </div>
            <div className={styles.content}>
                <img className={styles.productlogo} src={`/service-${product.logo}.webp`} />
                <p className={styles.description}>{product.description}</p>
            </div>
        </div>
    )
}